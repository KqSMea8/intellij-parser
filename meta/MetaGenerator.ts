import { tokens, Lexer, Tokens, TokenEnum } from "./MetaLexer";
import * as _ from "lodash";
import { MetaParser } from "./MetaParser";

/** 产生式节点类型 */
export enum SyntaxKind {
  /** = xx */
  alias = "alias",
  rules = "rules",
  /** 规则 */
  rule = "rule",
  /** 产生式可选项 */
  atoms = "atoms",
  /** 产生式的某个可选项 包含suff（Many，Option） */
  atom = "atom",
  itemSuff = "itemSuff",
  /** 产生式节点, 可能是字符串、括号包住的表达式、大小写的变量名 */
  item = "item",
  /** 产生式节点 */
  itemCase = "itemCase",
  /** 后缀，‘+’，‘*’，‘？’ */
  suff = "suff",
  /** 括号表达式 */
  bracketExp = "bracketExp"
}

enum SuffEnum {
  MANY = "*",
  AT_LEAST_ONE = "+",
  OPTION = "?"
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
      const atomsCst = cst.children.atoms[0];

      ruleNode.ruleName = cst.children.LowerName[0].image;
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

      if (_.get(cst, "children.suff[0].children")) {
        const { Asterisk, Plus, Optional } = _.get(
          cst,
          "children.suff[0].children"
        );

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

      if (!itemSuffNode.item) {
        debugger;
      }

      return itemSuffNode;
    }
    case SyntaxKind.item: {
      const {
        LowerName,
        UpperName,
        LeftBracket,
        atoms,
        RightBracket,
        Stringliteral
      } = cst.children;

      if (LowerName) {
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
      } else {
        debugger;
      }
    }
  }
}

/** 基类 */
class BaseNode {
  kind: SyntaxKind | TokenEnum;
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

/** 遍历ast */
export function traverse(
  ast: BaseNode,
  kind: SyntaxKind,
  callback: (node: BaseNode) => any
) {
  if (ast.kind === kind) {
    callback(ast);
  }

  ast.forEach(child => {
    traverse(child, kind, callback);
  });
}

export class RulesNode extends BaseNode {
  kind = SyntaxKind.rules;
  rules = [] as RuleNode[];

  get children() {
    return this.rules;
  }

  toCode() {
    return this.rules.map(rule => rule.toCode()).join("\n\n");
  }
}

export class RuleNode extends BaseNode {
  kind = SyntaxKind.rule;
  ruleName: string;
  atoms: AtomNode[];

  get children() {
    return this.atoms;
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

    let rule = "";

    if (this.atoms.length > 1) {
      rule = `this.OR([${orStrs.join(",")}]`;
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

  toCode() {
    return this.itemSuffs.map(itemSuff => itemSuff.toCode()).join("\n");
  }
}

export class ItemSuffNode extends BaseNode {
  kind = SyntaxKind.itemSuff;
  suff?: SuffEnum;
  item: BracketExpNode | StringliteralNode | UpperNameNode | LowerNameNode;

  get children() {
    return [this.item];
  }

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
    } else {
      return this.item.toCode();
    }
  }
}

export class BracketExpNode extends BaseNode {
  atoms: AtomNode[];
  kind = SyntaxKind.bracketExp;

  get children() {
    return this.atoms;
  }

  toCode() {
    return this.atoms.map(atom => atom.toCode()).join("\n\n");
  }
}

export class StringliteralNode extends BaseNode {
  index = 0;
  /** 终结符的名称 */
  content: string;
  kind = TokenEnum.Stringliteral;

  toCode() {
    let name = this.content;
    if (!this.content.match(/[a-zA-Z]/)) {
      name = "OP";
    }
    // FIXME: content is not a name;
    return `this.CONSUME${
      this.index === 0 ? "" : this.index + 1
    }(Tokens.${name});`;
  }
}

export class LowerNameNode extends BaseNode {
  name: string;
  index = 0;
  kind = TokenEnum.LowerName;

  toCode() {
    return `this.SUBRULE${this.index === 0 ? "" : this.index + 1}(this.${
      this.name
    });`;
  }
}

export class UpperNameNode extends BaseNode {
  name: string;
  index = 0;
  kind = TokenEnum.UpperName;

  toCode() {
    return `this.CONSUME${this.index === 0 ? "" : this.index + 1}(Tokens.${
      this.name
    });`;
  }
}

export function parseGCode(gCode: string) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const cst = metaParser.rules() as CstNode;

  return {
    cst,
    ast: cstToAst(cst) as RulesNode,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
