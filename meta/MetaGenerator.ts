import { tokens, Lexer, Tokens } from "./MetaLexer";
import { MetaParser } from "./MetaParser";

/** 产生式节点类型 */
export enum SyntaxKind {
  /** = xx */
  alias,
  rules,
  /** 规则 */
  rule,
  /** 规则名 */
  ruleName,
  /** 产生式可选项 */
  atoms,
  /** 产生式的某个可选项 包含suff（Many，Option） */
  atom,
  /** 产生式节点, 可能是字符串、括号包住的表达式、大小写的变量名 */
  item,
  /** 产生式节点 */
  itemCase,
  /** 后缀，‘+’，‘*’，‘？’ */
  suff
}

enum SuffEnum {
  MANY = "*",
  AT_LEAST_ONE = "+",
  OPTION = "?"
}

interface CstNode {
  name: string;
  children: {
    [x: string]: CstNode[];
  }
}

export function cstToAst(cst: BaseNode) {
  const children = cst.children;

  switch (cst.) {
    case "selectStatement": {
      let columnsListCst = children.columnsList[0];
      let fromClauseCst = children.fromClause[0];

      let columnsListAst = toAst(columnsListCst);
      let fromClauseAst = toAst(fromClauseCst);

      return {
        type: "SelectStatementAst",
        columns: columnsListAst,
        from: fromClauseAst
      };
    }
    case "columnsList": {
      let columnName = children.identifier[0].image;
      /*...*/
    }
    case "fromClause": {
      /*...*/
    }
    default: {
      throw new Error(
        `CST case handler not implemented for CST node <${cst.name}>`
      );
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
  item: BracketExpNode;

  toCode() {
    if (this.suff === SuffEnum.AT_LEAST_ONE) {
      return `
        this.AT_LEAST_ONE(() => {
          ${this.item.toCode()}
        });
      `;
    } else if (this.suff === SuffEnum.MANY) {
      // todo
    } else if (this.suff === SuffEnum.OPTION) {
      // todo
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

  toCode() {
    return `this.CONSUME${
      this.index === 0 ? "" : this.index + 1
    }(Tokens.${name});`;
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
  tokenIndex: number;

  toCode() {
    return `this.CONSUME(Tokens${
      this.tokenIndex === 0 ? "" : this.tokenIndex + 1
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
