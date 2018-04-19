var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["Identity"] = 0] = "Identity";
    TokenKind[TokenKind["EOF"] = 1] = "EOF";
    TokenKind[TokenKind["StringLiteral"] = 2] = "StringLiteral";
    TokenKind[TokenKind["Symbol"] = 3] = "Symbol";
    TokenKind[TokenKind["Missing"] = 4] = "Missing";
})(TokenKind || (TokenKind = {}));
var Keyword;
(function (Keyword) {
    Keyword["all"] = "*";
    Keyword["distinct"] = "distinct";
    Keyword["from"] = "from";
    Keyword["select"] = "select";
})(Keyword || (Keyword = {}));
class Token {
    constructor(pos, fullText, text) {
        this.firstToken = this;
        this.fullStart = pos;
        this.text = text;
        this.start = pos + fullText.indexOf(text);
    }
    get fullLength() {
        return this.text.length + this.start - this.fullStart;
    }
    static getTokenFromCode(code, pos) {
        let matcher;
        if ((matcher = code.match(IdentityToken.regexp))) {
            return new IdentityToken(pos, matcher[0], matcher[1]);
        }
        else if ((matcher = code.match(StringLiteralToken.regexp))) {
            return new StringLiteralToken(pos, matcher[0], matcher[1]);
        }
        else if ((matcher = code.match(SymbolToken.regexp))) {
            return new SymbolToken(pos, matcher[0], matcher[1]);
        }
        else if ((matcher = code.match(EofToken.regexp))) {
            return new EofToken(pos, matcher[0], matcher[1]);
        }
    }
}
class EofToken extends Token {
    constructor() {
        super(...arguments);
        this.kind = TokenKind.EOF;
    }
}
EofToken.regexp = /^\s*()$/;
class IdentityToken extends Token {
    constructor() {
        super(...arguments);
        this.kind = TokenKind.Identity;
    }
}
IdentityToken.regexp = /^\s*(select|from|\*|distinct)\s+/;
class StringLiteralToken extends Token {
    constructor() {
        super(...arguments);
        this.kind = TokenKind.StringLiteral;
    }
}
StringLiteralToken.regexp = /^\s*([A-Za-z][A-Za-z0-9]*)\s+/;
class SymbolToken extends Token {
    constructor() {
        super(...arguments);
        this.kind = TokenKind.Symbol;
    }
}
SymbolToken.regexp = /^(\(|\)|\.|\,)/;
class MissingToken extends Token {
    constructor(pos, missingKind) {
        super(pos, "", "");
        this.kind = TokenKind.Missing;
        this.missingKind = missingKind;
    }
}
function tokenizer(code) {
    let pos = 0;
    const tokens = [];
    while (true) {
        const token = Token.getTokenFromCode(code, pos);
        tokens.push(token);
        if (token.kind === TokenKind.EOF) {
            break;
        }
        pos += token.fullLength;
    }
    return tokens;
}
var ResultColumnType;
(function (ResultColumnType) {
    ResultColumnType[ResultColumnType["any"] = 0] = "any";
    ResultColumnType[ResultColumnType["name"] = 1] = "name";
})(ResultColumnType || (ResultColumnType = {}));
class SqlNode {
    constructor() {
        this.childNodes = [];
    }
    get firstToken() {
        if (!this.childNodes.length) {
            return null;
        }
        const firstNode = this.childNodes[0];
        if (firstNode instanceof Token) {
            return firstNode;
        }
        else {
            return firstNode.firstToken;
        }
    }
}
var Kind;
(function (Kind) {
    Kind[Kind["ResultColumnsNode"] = 0] = "ResultColumnsNode";
    Kind[Kind["ResultColumnNode"] = 1] = "ResultColumnNode";
})(Kind || (Kind = {}));
class Parser {
    constructor(text) {
        this.tokens = [];
        this.text = "";
        this.cursor = 0;
        this.text = text;
        this.tokens = tokenizer(text);
    }
    get currToken() {
        if (this.cursor > 0 && this.cursor < this.tokens.length) {
            return this.tokens[this.cursor];
        }
        throw Error("cursor超出范围");
    }
    parseGrammer(grammer) {
    }
    eat(token) {
        const currToken = this.currToken;
        if (token.kind === currToken.kind) {
            this.cursor++;
            return currToken;
        }
        else {
            return new MissingToken(currToken.start, token.kind);
        }
    }
    or(...grammers) {
        const firstTokens = grammers.map(grammer => grammer[0].firstToken);
        const currToken = this.currToken;
        const matchedIndex = firstTokens.findIndex(token => token.kind === currToken);
        if (matchedIndex !== -1) {
            this.parseGrammer(grammers[matchedIndex]);
        }
    }
}
class ResultColumnNode extends SqlNode {
    constructor() {
        super(...arguments);
        this.kind = Kind.ResultColumnNode;
        this.grammer = [];
    }
    static parse(tokens, tokenIndex) {
        const [firstToken, ...restTokens] = tokens;
        const node = new ResultColumnNode();
        if (firstToken.kind === TokenKind.Symbol) {
            node.type = ResultColumnType.any;
            node.childNodes.push(firstToken);
        }
        else {
            node.type = ResultColumnType.name;
            node.childNodes.push(firstToken);
        }
        return node;
    }
}
//# sourceMappingURL=tokenizer.js.map