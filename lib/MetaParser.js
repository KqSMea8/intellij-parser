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
                _this.SUBRULE2(_this.atom);
            });
        });
        _this.RULE("atom", function () {
            // items: item item*;
            // item: itemCase | itemCase '?' | itemCase '*';
            _this.AT_LEAST_ONE(function () {
                _this.SUBRULE(_this.itemCase);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.sufs);
                });
            });
        });
        _this.RULE("sufs", function () {
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
                }
            ]);
        });
        _this.RULE("itemCase", function () {
            // itemCase: '(' atoms ')' | UpperName | Stringliteral | itemCaseName | itemCaseName = itemCase
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
                        _this.CONSUME(MetaLexer_1.Tokens.Stringliteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(MetaLexer_1.Tokens.LowerName);
                        _this.OPTION(function () {
                            _this.CONSUME(MetaLexer_1.Tokens.Equal);
                            _this.SUBRULE2(_this.itemCase);
                        });
                    }
                }
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(_this);
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
var SyntaxKind;
(function (SyntaxKind) {
    /** = xx */
    SyntaxKind[SyntaxKind["alias"] = 0] = "alias";
    SyntaxKind[SyntaxKind["rules"] = 1] = "rules";
    /** 规则 */
    SyntaxKind[SyntaxKind["rule"] = 2] = "rule";
    /** 规则名 */
    SyntaxKind[SyntaxKind["ruleName"] = 3] = "ruleName";
    /** 产生式可选项 */
    SyntaxKind[SyntaxKind["atoms"] = 4] = "atoms";
    /** 产生式的某个可选项 */
    SyntaxKind[SyntaxKind["atom"] = 5] = "atom";
    /** 产生式节点列表,包含suff（Many，Option） */
    SyntaxKind[SyntaxKind["items"] = 6] = "items";
    /** 产生式节点,包含suff（Many，Option） */
    SyntaxKind[SyntaxKind["item"] = 7] = "item";
    /** 产生式节点 */
    SyntaxKind[SyntaxKind["itemCase"] = 8] = "itemCase";
    /** 产生式节点名 */
    SyntaxKind[SyntaxKind["itemCaseName"] = 9] = "itemCaseName";
    SyntaxKind[SyntaxKind["suffs"] = 10] = "suffs";
})(SyntaxKind || (SyntaxKind = {}));
function parseGCode(gCode) {
    var lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    var metaParser = new MetaParser([]);
    metaParser.input = lexResult.tokens;
    var ast = metaParser.rules();
    return {
        ast: ast,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaParser.js.map