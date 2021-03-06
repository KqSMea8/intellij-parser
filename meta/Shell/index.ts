import * as prettier from 'prettier';
import * as chevrotain from 'chevrotain';
import * as fs from 'fs-extra';
import * as path from 'path';
import { parseGCode, cstToAst, traverse, SyntaxKind, LowerNameNode, UpperNameNode } from './ShellMetaGenerator';
import { toUCamelCase } from '../../common/utils';
import { TokenEnum } from '../MetaLexer';

class MetaParserConfig {
  prettierConfig: prettier.Options = {
    parser: 'typescript',
    trailingComma: 'all',
    singleQuote: true
  };
  parserCodePath = '../../../grammars/Shell/CoreParser.g4';
  lexerCodePath = '../../../grammars/Shell/ShellLexer.g4';
}

function metaLexerGenerator(lexerGCode: string, config: MetaParserConfig) {
  const { ast, cst, lexErrors, parseErrors } = parseGCode(lexerGCode, false);

  if (lexErrors && lexErrors.length) {
    console.log(...lexErrors);
    debugger;
  }
  if (parseErrors && parseErrors.length) {
    console.log(...parseErrors);
    debugger;
  }

  ast.sortRules();
  const tokenNames = ast.rules.filter(rule => !rule.fragName).map(rule => rule.tokenName);

  const parserCode = `
    import * as chevrotain from 'chevrotain';

    const WhiteSpace = chevrotain.createToken({
      name: 'WhiteSpace',
      pattern: /\\s+/,
      group: chevrotain.Lexer.SKIPPED,
      line_breaks: true
    });
    const ID = chevrotain.createToken({
      name: 'ID',
      pattern: /\\$?[A-Za-z_\\-\\.\\/0-9]+/i,
    }); 
    const STRING_LITERAL = chevrotain.createToken({
      name: 'STRING_LITERAL',
      pattern: /(\"(\\.|\"\"|[^(\"|\\)])*\"|\'(\\.|\'\'|[^(\'|\\)])*\')/i,
      categories: [ID]
    });
    const DIGIT = chevrotain.createToken({
      name: 'DIGIT',
      pattern: /[0-9]+/i,
      categories: [ID]
    });
    const DIGIT_TO_SEVEN = chevrotain.createToken({
      name: 'DIGIT_TO_SEVEN',
      pattern: /[0-7][0-7][0-7]/i,
      longer_alt: DIGIT,
      categories: [ID]
    });

    ${ast.toLexerCode()}
 

    export enum TokenEnum {
      ${tokenNames.map(name => `${name} = '${name}'`).join(',')}
    }

    export const Tokens = {
      ${tokenNames.map(name => `${name}`).join(',')}
    };

    export const tokens = [
      WhiteSpace,
      ${tokenNames.map(name => `${name}`).join(',')}
    ];

    export const Lexer = new chevrotain.Lexer(tokens, {
      positionTracking: 'onlyStart'
    });
  `;

  try {
    const beautifiedCode = prettier.format(parserCode, config.prettierConfig);

    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/shell_lexer_cst.g.json'), JSON.stringify(cst, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/shell_lexer_ast.g.json'), JSON.stringify(ast, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/lexer.g.ts'), beautifiedCode);
  } catch (e) {
    console.error(e);
    debugger;
  }
}

function metaParserGenerator(parserGCode: string, config: MetaParserConfig, tokens: any[]) {
  const { ast, cst, lexErrors, parseErrors } = parseGCode(parserGCode, true, tokens);

  if (lexErrors && lexErrors.length) {
    console.log(...lexErrors);
    debugger;
  }
  if (parseErrors && parseErrors.length) {
    console.log(...parseErrors);
    debugger;
  }

  const rules = ast.rules.map(rule => {
    return {
      name: rule.ruleName,
      atoms: rule.atoms
    };
  });

  const nodes = ast.rules.map(rule => {
    const { atoms, ruleName } = rule;

    let subRuleNames = [];
    let tokenNames = [];
    traverse(rule, TokenEnum.LowerName, (node: LowerNameNode) => {
      subRuleNames.push(node.name);
    });
    traverse(rule, TokenEnum.UpperName, (up: UpperNameNode) => {
      const foundToken = tokens.find(t => t.name === up.name);

      if (foundToken && !foundToken.ignorable) {
        tokenNames.push(foundToken.name);
      }
    });

    return `
      export class ${toUCamelCase(ruleName)}Node extends BaseNode {
        ${tokenNames
          .map(name => {
            return `${name}: string;`;
          })
          .join('\n')}

        ${subRuleNames
          .map(name => {
            return `${name}: ${toUCamelCase(name)}Node;`;
          })
          .join('\n')}
      }
    `;
  });

  const parserCode = `
    import * as chevrotain from 'chevrotain';
    import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

    export enum SyntaxKind {
      ${rules
        .map(rule => {
          return `${rule.name} = '${rule.name}'`;
        })
        .join(',\n')}
    }

    export {
      tokens, Lexer, Tokens, TokenEnum
    }

    export class BaseNode {
      private _source = '';
    
      kind: SyntaxKind | TokenEnum;
      pos: number;
      end: number;
    
      get width() {
        return this.end - this.pos;
      }
    
      get fullText() {
        return this._source.slice(this.pos, this.end);
      }
    
      get children(): BaseNode[] {
        return [];
      }
    
      forEach(callback: ((child: BaseNode) => any)) {
        if (!this.children.length) {
          return;
        }
    
        this.children.forEach(callback);
      }
    }

    export class Parser extends chevrotain.Parser {
      [x: string]: any;
      constructor(input) {
        super(input, tokens, {
          recoveryEnabled: true,
          outputCst: true,
          maxLookahead: 6
        });
        ${ast.toCode()}
        chevrotain.Parser.performSelfAnalysis(this);
      }}
  `;

  try {
    const beautifiedCode = prettier.format(parserCode, config.prettierConfig);

    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/shell_parser_cst.g.json'), JSON.stringify(cst, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/shell_parser_ast.g.json'), JSON.stringify(ast, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/parser.g.ts'), beautifiedCode);
  } catch (e) {
    console.error(e);
    debugger;
  }
}

function getTokens(lexerGCode: string) {
  const { ast, cst, lexErrors, parseErrors } = parseGCode(lexerGCode, false);

  const tokens = ast.rules.filter(rule => !rule.fragName).map(rule => {
    return {
      name: rule.tokenName,
      content: new RegExp(rule.pattern || rule.setPattern()),
      ignorable: rule.ignorable
    };
  });

  return tokens;
}

function metaGenerator(config = new MetaParserConfig()) {
  const lexerCode = fs.readFileSync(path.join(__dirname, config.lexerCodePath)).toString('utf8');
  const parserCode = fs.readFileSync(path.join(__dirname, config.parserCodePath)).toString('utf8');
  const tokens = getTokens(lexerCode);

  // lexger不需要重新生成
  metaLexerGenerator(lexerCode, config);
  metaParserGenerator(parserCode, config, tokens);
}

metaGenerator();
