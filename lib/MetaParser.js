"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain = require("chevrotain");
const MetaLexer_1 = require("./MetaLexer");
class MetaParser extends chevrotain.Parser {
    constructor(input) {
        super(input, MetaLexer_1.tokens, {
            recoveryEnabled: true,
            outputCst: true
        });
        this.RULE("rules", () => {
            this.MANY(() => {
                this.SUBRULE(this.rule);
            });
        });
        this.RULE("rule", () => {
            this.SUBRULE(this.ruleName);
            this.CONSUME(MetaLexer_1.Tokens.Colon);
            this.SUBRULE(this.atoms);
            this.CONSUME(MetaLexer_1.Tokens.Semi);
        });
        this.RULE("ruleName", () => {
            this.CONSUME(MetaLexer_1.Tokens.LowerName);
        });
        this.RULE("atoms", () => {
            this.SUBRULE(this.atom);
            this.MANY(() => {
                this.CONSUME(MetaLexer_1.Tokens.Bar);
                this.SUBRULE2(this.atom);
            });
        });
        this.RULE("atom", () => {
            this.AT_LEAST_ONE(() => {
                this.SUBRULE(this.itemCase);
                this.OPTION(() => {
                    this.SUBRULE(this.sufs);
                });
            });
        });
        this.RULE("sufs", () => {
            this.OR([
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.Optional);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.Asterisk);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.Plus);
                    }
                }
            ]);
        });
        this.RULE("itemCase", () => {
            this.OR([
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.LeftBracket);
                        this.SUBRULE2(this.atoms);
                        this.CONSUME(MetaLexer_1.Tokens.RightBracket);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.UpperName);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.Stringliteral);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.LowerName);
                        this.OPTION(() => {
                            this.SUBRULE(this.alias);
                        });
                    }
                }
            ]);
        });
        this.RULE("alias", () => {
            this.OR([
                {
                    ALT: () => {
                        this.CONSUME2(MetaLexer_1.Tokens.Equal);
                        this.SUBRULE3(this.itemCase);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.PlusEquals);
                        this.SUBRULE2(this.itemCase);
                    }
                },
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(this);
    }
}
var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind[SyntaxKind["alias"] = 0] = "alias";
    SyntaxKind[SyntaxKind["rules"] = 1] = "rules";
    SyntaxKind[SyntaxKind["rule"] = 2] = "rule";
    SyntaxKind[SyntaxKind["ruleName"] = 3] = "ruleName";
    SyntaxKind[SyntaxKind["atoms"] = 4] = "atoms";
    SyntaxKind[SyntaxKind["atom"] = 5] = "atom";
    SyntaxKind[SyntaxKind["items"] = 6] = "items";
    SyntaxKind[SyntaxKind["item"] = 7] = "item";
    SyntaxKind[SyntaxKind["itemCase"] = 8] = "itemCase";
    SyntaxKind[SyntaxKind["itemCaseName"] = 9] = "itemCaseName";
    SyntaxKind[SyntaxKind["suffs"] = 10] = "suffs";
})(SyntaxKind || (SyntaxKind = {}));
function parseGCode(gCode) {
    const lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    const metaParser = new MetaParser([]);
    metaParser.input = lexResult.tokens;
    const ast = metaParser.rules();
    return {
        ast,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaParser.js.map