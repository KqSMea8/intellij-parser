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
            this.CONSUME(MetaLexer_1.Tokens.LowerName);
            this.CONSUME(MetaLexer_1.Tokens.Colon);
            this.SUBRULE(this.atoms);
            this.CONSUME(MetaLexer_1.Tokens.Semi);
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
                this.SUBRULE(this.item);
                this.OPTION(() => {
                    this.SUBRULE(this.suff);
                });
            });
        });
        this.RULE("suff", () => {
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
        this.RULE("item", () => {
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
                    ALT: function () {
                        _this.CONSUME2(MetaLexer_1.Tokens.Equal);
                        _this.SUBRULE(_this.itemCase);
                    ALT: () => {
                        this.CONSUME2(MetaLexer_1.Tokens.Equal);
                        this.SUBRULE(this.item);
                    }
                },
                {
                    ALT: () => {
                        this.CONSUME(MetaLexer_1.Tokens.PlusEquals);
                        this.SUBRULE2(this.item);
                    }
                }
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(this);
    }
}
exports.MetaParser = MetaParser;
//# sourceMappingURL=MetaParser.js.map