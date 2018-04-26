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
  suff = 'suff'
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
      rulesNode.kind = SyntaxKind.rules;
      rulesNode.rules = cst.children.rule.map(rule => {
        return cstToAst(rule) as RuleNode;
      });
      return rulesNode;
    }
    case SyntaxKind.rule: {
      const ruleNode = new RuleNode();
      ruleNode.kind = SyntaxKind.rule;
      ruleNode.atoms = cst.children.atoms.map(atom => {
        return cstToAst(atom) as AtomNode;
      });
      return ruleNode;
    }
    case SyntaxKind.atoms: {
      const atomNode = new AtomNode();
      atomNode.kind = SyntaxKind.atoms;
      atomNode.itemSuffs = cst.children.atom[0].children.itemSuff.map(itemSuff => {
        return cstToAst(itemSuff) as ItemSuffNode;
      });
      return atomNode;
    }
    case SyntaxKind.itemSuff: {
      const itemSuffNode = new ItemSuffNode();
      itemSuffNode.kind = SyntaxKind.itemSuff;
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
      itemSuffNode.item = cstToAst(cst.children.item[0]) as
        | BracketExpNode
        | StringliteralNode
        | UpperNameNode
        | LowerNameNode;
      return itemSuffNode;
    }
    case SyntaxKind.item: {
      const { LowerName, UpperName, LeftBracket, atoms, RightBracket, Stringliteral } = cst.children;
      let itemNode;
      if (LowerName) {
        itemNode = new LowerNameNode();
        itemNode.kind = SyntaxKind.item;
        itemNode.name = LowerName[0].image;
      } else if (UpperName) {
        itemNode = new UpperNameNode();
        itemNode.kind = SyntaxKind.item;
        itemNode.name = UpperName[0].image;
      } else if (Stringliteral) {
        itemNode = new StringliteralNode();
        itemNode.kind = SyntaxKind.item;
        itemNode.name = Stringliteral[0].name;
      } else if (LeftBracket && atoms && Stringliteral) {
        itemNode = new BracketExpNode();
        itemNode.kind = SyntaxKind.item;
        itemNode.atoms = atoms.map(atom => {
          return cstToAst(atom) as AtomNode;
        });
      }
      return itemNode;
    }
  }
}

/** 基类 */
class BaseNode {
  kind: SyntaxKind;
  children = [] as BaseNode[];

  forEach(callback: ((child: BaseNode) => any)) {
    if (!this.children.length) {
      return;
    }

    this.children.forEach(callback);
  }
}

/** 遍历ast */
export function traverse(ast: BaseNode, kind: SyntaxKind, callback: (node: BaseNode) => any) {
  if (ast.kind === kind) {
    callback(ast);
  }

  ast.forEach(child => {
    traverse(child, kind, callback);
  });
}

export class RulesNode extends BaseNode {
  rules = [] as RuleNode[];

  toCode() {
    return this.rules.map(rule => rule.toCode()).join('\n\n');
  }
}

export class RuleNode extends BaseNode {
  ruleName: string;
  atoms: AtomNode[];

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
      rule = `this.OR([${orStrs.join(',')}]`;
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

  toCode() {
    return `this.AT_LEAST_ONE(() => {
      this.SUBRULE(${this.itemSuffs.map(itemSuff => itemSuff.toCode()).join(',')});
    });`;
  }
}

export class ItemSuffNode extends BaseNode {
  suff?: SuffEnum;
  item: BracketExpNode | StringliteralNode | UpperNameNode | LowerNameNode;

  toCode() {
    if (this.suff === SuffEnum.AT_LEAST_ONE) {
      return `
        this.AT_LEAST_ONE(() => {
          ${this.item.toCode()}
        });
      `;
    } else if (this.suff === SuffEnum.MANY) {
      return `
        this.MANY(() => {
          ${this.item.toCode()}
        });
      `;
    } else if (this.suff === SuffEnum.OPTION) {
      return `
        this.OPTION(() => {
          ${this.item.toCode()}
        });
      `;
    }
  }
}

export class BracketExpNode extends BaseNode {
  atoms: AtomNode[];

  toCode() {
    return this.atoms.map(atom => atom.toCode()).join('\n\n');
  }
}

export class StringliteralNode {
  index: number;
  /** 终结符的名称 */
  name: string;

  toCode() {
    return `this.CONSUME${this.index === 0 ? '' : this.index + 1}(Tokens.${this.name});`;
  }
}

export class LowerNameNode {
  name: string;
  index: number;

  toCode() {
    return `this.SUBRULE${this.index === 0 ? '' : this.index + 1}(Tokens.${name});`;
  }
}

export class UpperNameNode {
  name: string;
  index: number;

  toCode() {
    return `this.CONSUME(Tokens${this.index === 0 ? '' : this.index + 1}.${name});`;
  }
}

export function parseGCode(gCode: string) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const cst = metaParser.rules() as CstNode;

  return {
    cst,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
