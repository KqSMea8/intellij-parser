import { tokens, Lexer, Tokens, TokenEnum } from './MetaLexer';
import * as _ from 'lodash';
import { MetaParser } from './MetaParser';

/** 产生式节点类型 */
export enum SyntaxKind {
  /** = xx */
  alias = 'alias',
  rules = 'rules',
  /** 规则 */
  rule = 'rule',
  /** 产生式可选项 */
  atoms = 'atoms',
  /** 产生式的某个可选项 包含suff（Many，Option） */
  atom = 'atom',
  itemSuff = 'itemSuff',
  /** 产生式节点, 可能是字符串、括号包住的表达式、大小写的变量名 */
  item = 'item',
  /** 产生式节点 */
  itemCase = 'itemCase',
  /** 后缀，‘+’，‘*’，‘？’ */
  suff = 'suff',
  /** 括号表达式 */
  bracketExp = 'bracketExp'
}

enum SuffEnum {
  MANY = '*',
  AT_LEAST_ONE = '+',
  OPTION = '?'
}

interface CstNode {
  name: SyntaxKind | TokenEnum;
  /** 内容 */
  image: string;
  children: { [x in SyntaxKind | TokenEnum]: CstNode[] };
}

export function cstToAst(cst: CstNode): BaseNode {
  const children = cst.children;

  switch (cst.name) {
    case SyntaxKind.rules: {
      const rulesNode = new RulesNode();

      rulesNode.rules = cst.children.rule.map(rule => {
        return cstToAst(rule) as RuleNode;
      });
      return rulesNode;
    }
    case SyntaxKind.rule: {
      const ruleNode = new RuleNode();
      const { LowerName, UpperName, Fragment } = cst.children;
      const atomsCst = cst.children.atoms[0];

      if (LowerName) {
        ruleNode.ruleName = LowerName[0].image;
      } else if (UpperName && Fragment) {
        ruleNode.fragName = UpperName[0].image;
      } else if (UpperName) {
        ruleNode.tokenName = UpperName[0].image;
      }
      ruleNode.atoms = atomsCst.children.atom.map(atom => {
        return cstToAst(atom) as AtomNode;
      });
      return ruleNode;
    }
    case SyntaxKind.atom: {
      const atomNode = new AtomNode();

      atomNode.itemSuffs = cst.children.itemSuff.map(itemSuff => {
        return cstToAst(itemSuff) as ItemSuffNode;
      });
      return atomNode;
    }
    case SyntaxKind.itemSuff: {
      const itemSuffNode = new ItemSuffNode();

      if (cst.children.Not) {
        itemSuffNode.hasNot = true;
      }

      if (_.get(cst, 'children.suff[0].children')) {
        const { Asterisk, Plus, Optional } = _.get(cst, 'children.suff[0].children');

        if (Asterisk) {
          itemSuffNode.suff = SuffEnum.MANY;
        } else if (Plus) {
          itemSuffNode.suff = SuffEnum.AT_LEAST_ONE;
        } else if (Optional) {
          itemSuffNode.suff = SuffEnum.OPTION;
        }
      }

      itemSuffNode.item = cstToAst(cst.children.item[0]) as any;

      if (!itemSuffNode.item) {
        debugger;
      }

      return itemSuffNode;
    }
    case SyntaxKind.item: {
      const { LowerName, UpperName, LeftBracket, atoms, RightBracket, Stringliteral, ReExp, All, alias } = cst.children;

      if (alias) {
        // TODO 处理alias逻辑
        return cstToAst(alias[0].children.item[0]);
      } else if (LowerName) {
        const itemNode = new LowerNameNode();
        itemNode.name = LowerName[0].image;

        return itemNode;
      } else if (UpperName) {
        const itemNode = new UpperNameNode();

        itemNode.name = UpperName[0].image;

        return itemNode;
      } else if (Stringliteral) {
        const itemNode = new StringliteralNode();
        itemNode.content = Stringliteral[0].image;

        return itemNode;
      } else if (LeftBracket && atoms && RightBracket) {
        const itemNode = new BracketExpNode();
        const atomsCst = cst.children.atoms[0];

        itemNode.atoms = atomsCst.children.atom.map(atom => {
          return cstToAst(atom) as AtomNode;
        });

        return itemNode;
      } else if (ReExp) {
        const itemNode = new RegExpNode();

        itemNode.content = ReExp[0].image;

        return itemNode;
      } else if (All) {
        return new AllNode();
      } else {
        debugger;
      }
    }
  }
}

function getPatternByUpName(ast: RulesNode, upName: string) {
  const rule = ast.rules.find(rule => rule.tokenName === upName || rule.fragName === upName);

  if (!rule.pattern) {
    rule.setPattern();
  }

  return rule.pattern;
}

/** 基类 */
class BaseNode {
  kind: SyntaxKind | TokenEnum;
  index? = 0;
  get children(): BaseNode[] {
    return [];
  }

  toDebugLexerCode() {
    const code = this.toLexerCode();

    if (code === undefined) {
      debugger;
    }

    return code;
  }

  get tokenizers() {
    const tokenizers = [];

    this.forEach(child => {
      if (!child.children || !child.children.length) {
        tokenizers.push(child);
      } else {
        tokenizers.push(...child.tokenizers);
      }
    });

    return tokenizers;
  }

  toCode() {
    return '';
  }
  toLexerCode() {
    return '';
  }

  get indexStr() {
    return this.index === 0 ? '' : this.index + 1;
  }

  forEach(callback: ((child: BaseNode) => any)) {
    if (!this.children.length) {
      return;
    }

    this.children.forEach(callback);
  }
}

/** 遍历ast */
export function traverse(ast: BaseNode, kind: SyntaxKind | TokenEnum, callback: (node: BaseNode) => any) {
  if (ast.kind === kind) {
    callback(ast);
  }

  ast.forEach(child => {
    traverse(child, kind, callback);
  });
}

function quickSort<T>(arr: T[], sortCallback: (pre: T, next: T) => boolean, result = [] as T[]) {
  if (!arr.length) {
    return result;
  }

  const [instance, ...rest] = arr;

  const preItems = quickSort(rest.filter(item => !sortCallback(item, instance)), sortCallback);
  const nextItems = quickSort(rest.filter(item => sortCallback(item, instance)), sortCallback);

  return [...preItems, instance, ...nextItems];
}

function noMeta(pattern: string) {
  const metaChs = ['.', '\\', '[', ']', '|', '^', '$', '(', ')', '?', '*', '+', '{'];

  return pattern.split('').every(ch => !metaChs.includes(ch));
}

export class RulesNode extends BaseNode {
  kind = SyntaxKind.rules;
  rules = [] as RuleNode[];

  sortRules() {
    this.rules.forEach(rule => rule.setPattern());
    this.rules = quickSort(this.rules, (inst, curr) => {
      if (noMeta(curr.pattern) && curr.pattern.match(RegExp(inst.pattern))) {
        // curr 应该在前面
        return true;
      }

      return false;
    });
  }

  get children() {
    return this.rules;
  }

  toLexerCode() {
    return this.rules
      .filter(rule => !rule.fragName)
      .filter(rule => rule.tokenName !== 'DECIMAL_LITERAL')
      .map(rule => rule.toDebugLexerCode())
      .join('\n');
  }

  toCode() {
    return this.rules.map(rule => rule.toCode()).join('\n');
  }
}

export class RuleNode extends BaseNode {
  kind = SyntaxKind.rule;
  ruleName?: string;
  fragName?: string;
  tokenName?: string;
  atoms: AtomNode[];
  pattern: string;

  get children() {
    return this.atoms;
  }

  /** 是否是简单的可以忽略的token */
  get ignorable() {
    if (this.tokenizers && this.tokenizers[0] && this.tokenizers[0].content === this.pattern) {
      return true;
    }

    return false;
  }

  setPattern() {
    if (this.atoms.length > 1) {
      this.pattern = '(' + this.atoms.map(atom => atom.toDebugLexerCode()).join('|') + ')';
    } else {
      this.pattern = this.atoms[0].toDebugLexerCode();
    }
    return this.pattern;
  }

  toLexerCode() {
    const decimalTokens = ['ZERO_DECIMAL', 'ONE_DECIMAL', 'TWO_DECIMAL'];
    if (decimalTokens.indexOf(this.tokenName) > -1) {
      return `const ${this.tokenName} = chevrotain.createToken({
        name: '${this.tokenName}',
        pattern: /${this.pattern}/,
        longer_alt: DECIMAL_LITERAL
      });`;
    } else {
      return `const ${this.tokenName} = chevrotain.createToken({
        name: '${this.tokenName}',
        pattern: /${this.pattern}/,
      });`;
    }
  }

  toCode() {
    const orStrs = this.atoms.map(atom => {
      return `
        {
          ALT: () => {
            ${atom.toCode()}
          }
        }
      `;
    });

    let rule = '';

    if (this.atoms.length > 1) {
      rule = `() => {
        this.OR([${orStrs.join(',')}]);
      }`;
    } else {
      rule = `() => {
        ${this.atoms[0].toCode()}
      }`;
    }

    return `
      this.RULE('${this.ruleName}', ${rule});
    `;
  }
}

export class AtomNode extends BaseNode {
  itemSuffs: ItemSuffNode[];
  kind = SyntaxKind.atom;

  get children() {
    return this.itemSuffs;
  }

  toLexerCode(): string {
    return this.itemSuffs.map(itemSuff => itemSuff.toDebugLexerCode()).join('');
  }

  toCode() {
    return this.itemSuffs.map(itemSuff => itemSuff.toCode()).join('\n');
  }
}

export class ItemSuffNode extends BaseNode {
  index = 0;
  kind = SyntaxKind.itemSuff;
  suff?: SuffEnum;
  hasNot = false;
  item: BracketExpNode | StringliteralNode | UpperNameNode | LowerNameNode | RegExpNode | AllNode;

  get children() {
    return [this.item];
  }

  toLexerCode() {
    const itemLexer = this.item.toDebugLexerCode();

    if (this.hasNot) {
      return `[^${itemLexer}]${this.suff || ''}`;
    }

    return `${itemLexer}${this.suff || ''}`;
  }

  toCode() {
    if (this.suff === SuffEnum.AT_LEAST_ONE) {
      return `
        this.AT_LEAST_ONE${this.indexStr}(() => {
          ${this.item.toCode()}
        });
      `;
    } else if (this.suff === SuffEnum.MANY) {
      return `
        this.MANY${this.indexStr}(() => {
          ${this.item.toCode()}
        });
      `;
    } else if (this.suff === SuffEnum.OPTION) {
      return `
        this.OPTION${this.indexStr}(() => {
          ${this.item.toCode()}
        });
      `;
    } else {
      return this.item.toCode();
    }
  }
}

export class BracketExpNode extends BaseNode {
  index = 0;
  atoms: AtomNode[];
  kind = SyntaxKind.bracketExp;

  get children() {
    return this.atoms;
  }

  toLexerCode() {
    if (this.atoms.length) {
      return `(${this.atoms.map(atom => atom.toDebugLexerCode()).join('|')})`;
    }

    return this.atoms[0].toDebugLexerCode();
  }

  toCode() {
    const orStrs = this.atoms.map(atom => {
      return `
        {
          ALT: () => {
            ${atom.toCode()}
          }
        }
      `;
    });
    if (this.atoms.length > 1) {
      return `this.OR${this.indexStr}([${orStrs.join(',')}])`;
    } else {
      return `${this.atoms[0].toCode()}`;
    }
  }
}

export class StringliteralNode extends BaseNode {
  index = 0;
  /** 终结符的名称 */
  content: string;
  kind = TokenEnum.Stringliteral;

  getTokens() {
    return [];
  }

  getLexer(): RulesNode {
    return;
  }

  toLexerCode() {
    const tokenText = this.content.match(/\'(.*)\'/)[1];

    if (tokenText.includes('\\')) {
      return tokenText;
    } else {
      return tokenText
        .split('')
        .map(ch => {
          if (!ch.match(/[a-zA-Z0-9_]/)) {
            return `\\${ch}`;
          }

          return ch;
        })
        .join('');
    }
  }

  toCode() {
    let name = this.content.match(/'(.+)'/)[1];
    if (!name.match(/[a-zA-Z]/)) {
      const foundToken = this.getTokens().find(token => !!name.match(token.content));
      if (foundToken) {
        name = foundToken.name;
      } else {
        name = 'OP';
      }
    }
    // FIXME: content is not a name;
    return `this.CONSUME${this.indexStr}(Tokens.${name});`;
  }
}

export class RegExpNode extends BaseNode {
  content: string;
  kind = TokenEnum.ReExp;

  toLexerCode() {
    return this.content.replace(/\$/, '\\$');
  }
}

export class LowerNameNode extends BaseNode {
  name: string;
  index = 0;
  kind = TokenEnum.LowerName;

  toCode() {
    return `this.SUBRULE${this.indexStr}(this.${this.name});`;
  }
}

export class UpperNameNode extends BaseNode {
  name: string;
  index = 0;
  kind = TokenEnum.UpperName;
  getAst = (): RulesNode => {
    return undefined as any;
  };

  toLexerCode() {
    return getPatternByUpName(this.getAst(), this.name);
  }

  toCode() {
    return `this.CONSUME${this.indexStr}(Tokens.${this.name});`;
  }
}

export class AllNode extends BaseNode {
  kind = TokenEnum.All;

  toCode() {
    return '.';
  }
}

export function parseGCode(gCode: string, isParser = true, tokens = []) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const cst = metaParser.rules() as CstNode;
  const ast = cstToAst(cst) as RulesNode;

  if (isParser) {
    /** 遍历所有的规则 */
    traverse(ast, SyntaxKind.rule, (ruleNode: RuleNode) => {
      // itemSuff 的 index
      {
        let optionIndex = 0;
        let manyIndex = 0;
        let atLeastOneIndex = 0;

        traverse(ruleNode, SyntaxKind.itemSuff, (node: ItemSuffNode) => {
          if (node.suff === SuffEnum.AT_LEAST_ONE) {
            node.index = atLeastOneIndex++;
          } else if (node.suff === SuffEnum.MANY) {
            node.index = manyIndex++;
          } else if (node.suff === SuffEnum.OPTION) {
            node.index = optionIndex++;
          }
        });
      }

      // or 的 index
      {
        let orIndex = 0;
        traverse(ruleNode, SyntaxKind.bracketExp, (node: BracketExpNode) => {
          if (node.atoms.length > 1) {
            node.index = ++orIndex;
          }
        });
      }

      // subRule 的 index
      {
        let preRuleNames = [];

        traverse(ruleNode, TokenEnum.LowerName, (node: LowerNameNode) => {
          node.index = preRuleNames.filter(name => name === node.name).length;
          preRuleNames.push(node.name);
        });
      }

      // consume 的 index
      {
        let uppers = [] as string[];
        let strs = [];

        traverse(ruleNode, TokenEnum.UpperName, (node: UpperNameNode) => {
          node.index = uppers.filter(upName => upName === node.name).length;
          uppers.push(node.name);
        });
        // Stringliteral 指的是没用使用 Lexer 定义的 Token，需要自己在 解析好的 tokens 列表里自己查找。
        traverse(ruleNode, TokenEnum.Stringliteral, (node: StringliteralNode) => {
          node.index = strs.filter(str => str === node.content).length;
          node.getTokens = () => tokens;
          strs.push(node.content);
        });
      }
    });
  } else {
    traverse(ast, TokenEnum.UpperName, (node: UpperNameNode) => {
      node.getAst = () => ast;
    });
  }

  return {
    cst,
    ast,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
