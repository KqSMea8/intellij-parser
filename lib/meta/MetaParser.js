"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chevrotain = require("chevrotain");
var MetaLexer_1 = require("./MetaLexer");
var MetaParser = (function (_super) {
    __extends(MetaParser, _super);
    function MetaParser(input) {
        var _this = _super.call(this, input, MetaLexer_1.tokens, {
            recoveryEnabled: true,
            outputCst: true
        }) || this;
        _this.RULE("rules", function () {
            _this.MANY(function () {
                _this.SUBRULE(_this.rule);
            });
        });
        _this.RULE("rule", function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Fragment);
                        _this.CONSUME(MetaLexer_1.Tokens.UpperName);
                        _this.CONSUME(MetaLexer_1.Tokens.Colon);
                        _this.SUBRULE(_this.atoms);
                        _this.CONSUME(MetaLexer_1.Tokens.Semi);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME2(MetaLexer_1.Tokens.UpperName);
                        _this.CONSUME2(MetaLexer_1.Tokens.Colon);
                        _this.SUBRULE2(_this.atoms);
                        _this.CONSUME2(MetaLexer_1.Tokens.Semi);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LowerName);
                        _this.CONSUME3(MetaLexer_1.Tokens.Colon);
                        _this.SUBRULE3(_this.atoms);
                        _this.CONSUME3(MetaLexer_1.Tokens.Semi);
                    }
                }
            ]);
        });
        _this.RULE("atoms", function () {
            _this.SUBRULE(_this.atom);
            _this.MANY(function () {
                _this.CONSUME(MetaLexer_1.Tokens.Bar);
                _this.SUBRULE2(_this.atom);
            });
        });
        _this.RULE("atom", function () {
            _this.AT_LEAST_ONE(function () {
                _this.SUBRULE(_this.itemSuff);
            });
        });
        _this.RULE("itemSuff", function () {
            _this.OPTION(function () {
                _this.CONSUME(MetaLexer_1.Tokens.Not);
            });
            _this.SUBRULE(_this.item);
            _this.OPTION2(function () {
                _this.SUBRULE(_this.suff);
            });
        });
        _this.RULE("suff", function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Optional);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Asterisk);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Plus);
                    }
                }
            ]);
        });
        _this.RULE("item", function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LeftBracket);
                        _this.SUBRULE2(_this.atoms);
                        _this.CONSUME(MetaLexer_1.Tokens.RightBracket);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.UpperName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.All);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.ReExp);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Stringliteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LowerName);
                        _this.OPTION(function () {
                            _this.SUBRULE(_this.alias);
                        });
                    }
                }
            ]);
        });
        _this.RULE("alias", function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.Equal);
                        _this.SUBRULE(_this.item);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.PlusEquals);
                        _this.SUBRULE2(_this.item);
                    }
                }
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(_this);
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
exports.MetaParser = MetaParser;
//# sourceMappingURL=MetaParser.js.map