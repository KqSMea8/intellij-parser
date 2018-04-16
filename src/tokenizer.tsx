/**
 * @author zongquan.hzq
 * @description 把代码封装成 token
 */

enum TokenKind {
  Identity,
  EOF,
  StringLiteral,
  Symbol,
  Missing
}

enum Keyword {
  all = "*",
  distinct = "distinct",
  from = "from",
  select = "select"
}

class Token {
  /** 类型 */
  readonly kind: TokenKind;

  /** 正则 */
  static readonly regexp: RegExp;

  /** 包括空格 */
  fullStart: number;

  /** 不包括空格的起始位置 */
  start: number;

  /** 内容 */
  text: string;

  /** 总长度 */
  get fullLength() {
    return this.text.length + this.start - this.fullStart;
  }

  constructor(pos: number, fullText: string, text: string) {
    this.fullStart = pos;
    this.text = text;
    this.start = pos + fullText.indexOf(text);
  }

  static getTokenFromCode(code: string, pos) {
    let matcher: RegExpMatchArray;

    if ((matcher = code.match(IdentityToken.regexp))) {
      return new IdentityToken(pos, matcher[0], matcher[1]);
    } else if ((matcher = code.match(StringLiteralToken.regexp))) {
      return new StringLiteralToken(pos, matcher[0], matcher[1]);
    } else if ((matcher = code.match(SymbolToken.regexp))) {
      return new SymbolToken(pos, matcher[0], matcher[1]);
    } else if ((matcher = code.match(EofToken.regexp))) {
      return new EofToken(pos, matcher[0], matcher[1]);
    }
  }
}

// 待优化，不应该有 其它 Token 类
class EofToken extends Token {
  readonly kind = TokenKind.EOF;
  static readonly regexp = /^\s*()$/;
}

class IdentityToken extends Token {
  readonly kind = TokenKind.Identity;
  static readonly regexp = /^\s*(select|from|\*|distinct)\s+/;
}

class StringLiteralToken extends Token {
  readonly kind = TokenKind.StringLiteral;
  static readonly regexp = /^\s*([A-Za-z][A-Za-z0-9]*)\s+/;
}

class SymbolToken extends Token {
  readonly kind = TokenKind.Symbol;
  static readonly regexp = /^(\(|\)|\.|\,)/;
}

class MissingToken extends Token {
  readonly kind = TokenKind.Missing;
}

const tokens = function tokenizer(code: string): Token[] {
  let pos = 0;
  const tokens = [] as Token[];

  while (true) {
    const token = Token.getTokenFromCode(code, pos);
    tokens.push(token);

    if (token.kind === TokenKind.EOF) {
      break;
    }

    pos += token.fullLength;
  }

  return tokens;
};

enum ResultColumnType {
  any,
  name
}

class SqlNode {
  pos: number;
  kind: Kind;
  childNodes = [] as (Token | SqlNode)[];
}

enum Kind {
  ResultColumnNode
}

class ResultColumnNode extends SqlNode {
  kind = Kind.ResultColumnNode;
  type: ResultColumnType;

  static parse(tokens: Token[], tokenIndex: number): ResultColumnNode {
    const [firstToken, ...restTokens] = tokens;
    const node = new ResultColumnNode();

    if (firstToken.kind === TokenKind.Symbol) {
      node.type = ResultColumnType.any;
      node.childNodes.push(firstToken);
    } else {
      node.type = ResultColumnType.name;
      node.childNodes.push(firstToken);
    }

    return node;
  }
}

class ResultColumnsNode extends SqlNode {
  childNodes: ResultColumnNode[];

  static parse(tokens: Token[], tokenIndex: number): ResultColumnNode {
    const node = new ResultColumnsNode();
    let tokenOffsetIndex = 0;

    if (tokens[0].text === "*" || tokens[0].kind === TokenKind.StringLiteral) {
      node.childNodes.push(ResultColumnNode.parse(tokens, tokenIndex));
      tokenOffsetIndex++;
    } else {
      tokens.push(new MissingToken());
    }

    while (remainTokens[0].text === ",") {
      node.childNodes.push(remainTokens[0]);

      if (remainTokens[1] && remainTokens[1].kind === TokenKind.StringLiteral) {
        node.childNodes.push(remainTokens[1]);
        remainTokens = remainTokens.slice(2);
      } else {
        node.childNodes.push(
          new MissingToken(
            remainTokens[0].start + remainTokens[0].fullLength,
            "",
            ""
          )
        );
        remainTokens = remainTokens.slice(1);
      }
    }
    return node;
  }
}

function parser(tokens: Token[]) {}
