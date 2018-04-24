import { tokens, Lexer, Tokens, TokenEnum } from "./MetaLexer";
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
  /** 产生式节点, 可能是字符串、括号包住的表达式、大小写的变量名 */
  item = "item",
  /** 产生式节点 */
  itemCase = "itemCase",
  /** 后缀，‘+’，‘*’，‘？’ */
  suff = "suff"
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
      rulesNode.rules = cst.children.rules.map(rule => {
        return cstToAst(rule) as RuleNode;
      });

      return rulesNode;
    }
    // case SyntaxKind.rule: {
    //   const rule = new RuleNode();
    //   const { atoms, LowerName } = cst.children;

    //   rule.atoms =
    // }
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
  rules = [] as RuleNode[];

  toCode() {
    return this.rules.map(rule => rule.toCode()).join("\n\n");
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

    let rule = "";

    if (this.atoms.length > 1) {
      rule = `OR([${orStrs.join(",")}]`;
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
  suff: SuffEnum;
  item: BracketExpNode | StringliteralNode | UpperNameNode;

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

  toCode() {}
}

export class StringliteralNode {
  text: string;
  index: number;
  /** 终结符的名称 */
  name: string;

  toCode() {
    return `this.CONSUME${this.index === 0 ? "" : this.index + 1}(Tokens.${
      this.name
    });`;
  }
}

export class LowerNameNode {
  name: string;
  index: number;

  toCode() {
    return `this.SUBRULE${
      this.index === 0 ? "" : this.index + 1
    }(Tokens.${name});`;
  }
}

export class UpperNameNode {
  name: string;
  index: number;

  toCode() {
    return `this.CONSUME(Tokens${
      this.index === 0 ? "" : this.index + 1
    }.${name});`;
  }
}

export function parseGCode(gCode: string) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const ast = metaParser.rules() as BaseNode;

  return {
    ast,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
