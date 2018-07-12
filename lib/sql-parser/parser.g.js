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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chevrotain", "./lexer.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chevrotain = require("chevrotain");
    var lexer_g_1 = require("./lexer.g");
    var SyntaxKind;
    (function (SyntaxKind) {
        SyntaxKind["root"] = "root";
        SyntaxKind["sqlStatements"] = "sqlStatements";
        SyntaxKind["sqlStatement"] = "sqlStatement";
        SyntaxKind["dmlStatement"] = "dmlStatement";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["tableSourceItem"] = "tableSourceItem";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["selectElement"] = "selectElement";
        SyntaxKind["fullId"] = "fullId";
        SyntaxKind["uid"] = "uid";
        SyntaxKind["simpleId"] = "simpleId";
    })(SyntaxKind = exports.SyntaxKind || (exports.SyntaxKind = {}));
    var BaseNode = (function () {
        function BaseNode() {
            this._source = '';
        }
        Object.defineProperty(BaseNode.prototype, "width", {
            get: function () {
                return this.end - this.pos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseNode.prototype, "fullText", {
            get: function () {
                return this._source.slice(this.pos, this.end);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseNode.prototype, "children", {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        BaseNode.prototype.forEach = function (callback) {
            if (!this.children.length) {
                return;
            }
            this.children.forEach(callback);
        };
        return BaseNode;
    }());
    exports.BaseNode = BaseNode;
    var Parser = (function (_super) {
        __extends(Parser, _super);
        function Parser(input) {
            var _this = _super.call(this, input, lexer_g_1.tokens, {
                recoveryEnabled: true,
                outputCst: true
            }) || this;
            _this.RULE('root', function () {
                _this.SUBRULE(_this.sqlStatements);
            });
            _this.RULE('sqlStatements', function () {
                _this.SUBRULE(_this.sqlStatement);
            });
            _this.RULE('sqlStatement', function () {
                _this.SUBRULE(_this.dmlStatement);
            });
            _this.RULE('dmlStatement', function () {
                _this.SUBRULE(_this.selectStatement);
            });
            _this.RULE('selectStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.querySpecification);
                });
            });
            _this.RULE('querySpecification', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.SUBRULE(_this.selectElements);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.fromClause);
                });
            });
            _this.RULE('selectElements', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectElement);
                        }
                    }
                ]);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.selectElement);
                });
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableSources);
            });
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.tableSource);
                });
            });
            _this.RULE('tableSource', function () {
                _this.SUBRULE(_this.tableSourceItem);
            });
            _this.RULE('tableSourceItem', function () {
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('selectElement', function () {
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
            });
            _this.RULE('fullId', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOT_ID);
                            }
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE2(_this.uid);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('uid', function () {
                _this.SUBRULE(_this.simpleId);
            });
            _this.RULE('simpleId', function () {
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            chevrotain.Parser.performSelfAnalysis(_this);
            return _this;
        }
        return Parser;
    }(chevrotain.Parser));
    exports.Parser = Parser;
});
//# sourceMappingURL=parser.g.js.map