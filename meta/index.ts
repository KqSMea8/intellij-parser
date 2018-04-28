import * as prettier from 'prettier';
import * as chevrotain from 'chevrotain';
import * as fs from 'fs-extra';
import * as path from 'path';
import { parseGCode, cstToAst } from './MetaGenerator';

class MetaParserConfig {
  prettierConfig: prettier.Options = {
    parser: 'typescript',
    trailingComma: 'all',
    singleQuote: true
  };
  parserCodePath = '../../meta/MySqlParser.g4';
  lexerCodePath = '../../meta/MysqlLexer.g4';
  templatePath = '../parser/parserTemplate';
  outDir = '../parser/test.json';
}

function metaLexerGenerator(lexerGCode: string, config: MetaParserConfig) {
  const { ast, cst, lexErrors, parseErrors } = parseGCode(lexerGCode, false);

  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }

  const parserCode = `
    import * as chevrotain from 'chevrotain';

    ${ast.toLexerCode()}
  `;

  try {
    const beautifiedCode = prettier.format(parserCode, config.prettierConfig);

    fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_lexer_cst.g.json'), JSON.stringify(cst, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_lexer_ast.g.json'), JSON.stringify(ast, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../sql-parser/lexer.g.ts'), parserCode);
  } catch (e) {
    console.error(e);
    debugger;
  }
}

function metaParserGenerator(parserGCode: string, config: MetaParserConfig) {
  const { ast, cst, lexErrors, parseErrors } = parseGCode(parserGCode);

  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }

  const parserCode = `
    import * as chevrotain from 'chevrotain';
    import { tokens, Lexer } from './lexer.g';
    
    const Tokens = {} as any;

    export class MetaParser extends chevrotain.Parser {
      [x: string]: any;
      constructor(input) {
        super(input, tokens, {
          recoveryEnabled: true,
          outputCst: true
        });
        ${ast.toCode()}
        chevrotain.Parser.performSelfAnalysis(this);
      }}
  `;

  try {
    const beautifiedCode = prettier.format(parserCode, config.prettierConfig);

    fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_parser_cst.g.json'), JSON.stringify(cst, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_parser_ast.g.json'), JSON.stringify(ast, null, 2));
    fs.writeFileSync(path.join(__dirname, '../../sql-parser/parser.g.ts'), ast.toLexerCode());
  } catch (e) {
    console.error(e);
    debugger;
  }
}

function metaGenerator(config = new MetaParserConfig()) {
  const lexerCode = fs.readFileSync(path.join(__dirname, config.lexerCodePath)).toString('utf8');
  const parserCode = fs.readFileSync(path.join(__dirname, config.parserCodePath)).toString('utf8');

  metaLexerGenerator(lexerCode, config);
  metaParserGenerator(lexerCode, config);
}

metaGenerator();
