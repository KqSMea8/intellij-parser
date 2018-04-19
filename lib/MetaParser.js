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
exports.__esModule = true;
var chevrotain = require("chevrotain");
var MetaLexer_1 = require("./MetaLexer");
var MetaParser = /** @class */ (function (_super) {
    __extends(MetaParser, _super);
    function MetaParser(input) {
        var _this = _super.call(this, input, MetaLexer_1.tokens, {
            recoveryEnabled: true,
            outputCst: true
        }) || this;
        _this.RULE("rules", function () {
            // rules: rule*;
            _this.MANY(function () {
                _this.SUBRULE(_this.rule);
            });
        });
        _this.RULE("rule", function () {
            // rule: ruleName ':' atoms ';';
            _this.SUBRULE(_this.ruleName);
            _this.CONSUME(MetaLexer_1.Tokens.Colon);
            _this.SUBRULE(_this.atoms);
            _this.CONSUME(MetaLexer_1.Tokens.Semi);
        });
        _this.RULE("ruleName", function () {
            // ruleName: LowerName;
            _this.CONSUME(MetaLexer_1.Tokens.LowerName);
        });
        _this.RULE("atoms", function () {
            // atoms: atom ('|' atom)*;
            _this.SUBRULE(_this.atom);
            _this.MANY(function () {
                _this.CONSUME(MetaLexer_1.Tokens.Bar);
                _this.SUBRULE(_this.atom);
            });
        });
        _this.RULE("atom", function () {
            // atom : items;
            _this.SUBRULE(_this.items);
        });
        _this.RULE("items", function () {
            // items: item item*;
            _this.AT_LEAST_ONE(function () {
                _this.SUBRULE(_this.item);
            });
        });
        _this.RULE("item", function () {
            // item: itemCase | itemCase '?' | itemCase '*';
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.itemCase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.itemCase);
                        _this.CONSUME(MetaLexer_1.Tokens.Optional);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.itemCase);
                        _this.CONSUME(MetaLexer_1.Tokens.Asterisk);
                    }
                }
            ]);
        });
        _this.RULE("itemCase", function () {
            // itemCase: '(' atoms ')' | UpperName | Stringliteral | itemCaseName | itemCaseName = itemCase
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LeftBracket);
                        _this.SUBRULE(_this.atoms);
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
                        _this.CONSUME(MetaLexer_1.Tokens.Stringliteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LowerName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LowerName);
                        _this.CONSUME(MetaLexer_1.Tokens.Equal);
                        _this.SUBRULE(_this.itemCase);
                    }
                }
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(_this);
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
var metaParser = new MetaParser([]);
function parseGCode(gCode) {
    var lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    metaParser.input = lexResult.tokens;
    var value = metaParser.rules();
    return {
        value: value,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaParser.js.map