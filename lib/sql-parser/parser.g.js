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
        SyntaxKind["emptyStatement"] = "emptyStatement";
        SyntaxKind["sqlStatement"] = "sqlStatement";
        SyntaxKind["dmlStatement"] = "dmlStatement";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["lockClause"] = "lockClause";
        SyntaxKind["unionParenthesis"] = "unionParenthesis";
        SyntaxKind["queryExpression"] = "queryExpression";
        SyntaxKind["queryExpressionUnit"] = "queryExpressionUnit";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["querySpecificationNointo"] = "querySpecificationNointo";
        SyntaxKind["unionStatement"] = "unionStatement";
        SyntaxKind["selectIntoExpression"] = "selectIntoExpression";
        SyntaxKind["selectLinesInto"] = "selectLinesInto";
        SyntaxKind["selectFieldsInto"] = "selectFieldsInto";
        SyntaxKind["charsetName"] = "charsetName";
        SyntaxKind["assignmentField"] = "assignmentField";
        SyntaxKind["charsetNameBase"] = "charsetNameBase";
        SyntaxKind["limitClause"] = "limitClause";
        SyntaxKind["decimalLiteral"] = "decimalLiteral";
        SyntaxKind["orderByClause"] = "orderByClause";
        SyntaxKind["orderByExpression"] = "orderByExpression";
        SyntaxKind["selectSpec"] = "selectSpec";
        SyntaxKind["updateStatement"] = "updateStatement";
        SyntaxKind["insertStatement"] = "insertStatement";
        SyntaxKind["deleteStatement"] = "deleteStatement";
        SyntaxKind["singleDeleteStatement"] = "singleDeleteStatement";
        SyntaxKind["singleUpdateStatement"] = "singleUpdateStatement";
        SyntaxKind["updatedElement"] = "updatedElement";
        SyntaxKind["insertStatementValue"] = "insertStatementValue";
        SyntaxKind["expressionsWithDefaults"] = "expressionsWithDefaults";
        SyntaxKind["expressionOrDefault"] = "expressionOrDefault";
        SyntaxKind["uidList"] = "uidList";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["logicalOperator"] = "logicalOperator";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["groupByItem"] = "groupByItem";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["joinPart"] = "joinPart";
        SyntaxKind["tableSourceItem"] = "tableSourceItem";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["selectElement"] = "selectElement";
        SyntaxKind["fullColumnName"] = "fullColumnName";
        SyntaxKind["dottedId"] = "dottedId";
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
                outputCst: true,
                maxLookahead: 6,
            }) || this;
            _this.RULE('root', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.sqlStatements);
                });
            });
            _this.RULE('sqlStatements', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.sqlStatement);
                    _this.CONSUME(lexer_g_1.Tokens.SEMI);
                });
            });
            _this.RULE('emptyStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.SEMI);
            });
            _this.RULE('sqlStatement', function () {
                _this.SUBRULE(_this.dmlStatement);
            });
            _this.RULE('dmlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.updateStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.insertStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.deleteStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        },
                    },
                ]);
            });
            _this.RULE('selectStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecification);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lockClause);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpression);
                            _this.OPTION2(function () {
                                _this.SUBRULE2(_this.lockClause);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('lockClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FOR);
                            _this.CONSUME(lexer_g_1.Tokens.UPDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCK);
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.CONSUME(lexer_g_1.Tokens.SHARE);
                            _this.CONSUME(lexer_g_1.Tokens.MODE);
                        },
                    },
                ]);
            });
            _this.RULE('unionParenthesis', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ALL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DISTINCT);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('queryExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.querySpecification);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpressionUnit);
                        },
                    },
                ]);
            });
            _this.RULE('queryExpressionUnit', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                    _this.SUBRULE(_this.queryExpression);
                    _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                });
            });
            _this.RULE('querySpecification', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.MANY(function () {
                    _this.SUBRULE(_this.selectSpec);
                });
                _this.SUBRULE(_this.selectElements);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.fromClause);
                });
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.limitClause);
                });
                _this.OPTION4(function () {
                    _this.SUBRULE(_this.selectIntoExpression);
                });
            });
            _this.RULE('querySpecificationNointo', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.MANY(function () {
                    _this.SUBRULE(_this.selectSpec);
                });
                _this.SUBRULE(_this.selectElements);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.fromClause);
                });
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.limitClause);
                });
            });
            _this.RULE('unionStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ALL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DISTINCT);
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.querySpecificationNointo);
            });
            _this.RULE('selectIntoExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTO);
                            _this.SUBRULE(_this.assignmentField);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.assignmentField);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.INTO);
                            _this.CONSUME(lexer_g_1.Tokens.DUMPFILE);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.INTO);
                            _this.CONSUME(lexer_g_1.Tokens.OUTFILE);
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                                _this.CONSUME(lexer_g_1.Tokens.SET);
                                _this.SUBRULE(_this.charsetName);
                            });
                            _this.OPTION2(function () {
                                _this.OR2([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.FIELDS);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.COLUMNS);
                                        },
                                    },
                                ]);
                                _this.AT_LEAST_ONE(function () {
                                    _this.SUBRULE(_this.selectFieldsInto);
                                });
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LINES);
                                _this.AT_LEAST_ONE2(function () {
                                    _this.SUBRULE(_this.selectLinesInto);
                                });
                            });
                        },
                    },
                ]);
            });
            _this.RULE('selectLinesInto', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STARTING);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TERMINATED);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                ]);
            });
            _this.RULE('selectFieldsInto', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TERMINATED);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.OPTIONALLY);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.ENCLOSED);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ESCAPED);
                            _this.CONSUME3(lexer_g_1.Tokens.BY);
                            _this.CONSUME3(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                ]);
            });
            _this.RULE('charsetName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.charsetNameBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARSET_REVERSE_QOUTE_STRING);
                        },
                    },
                ]);
            });
            _this.RULE('assignmentField', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCAL_ID);
                        },
                    },
                ]);
            });
            _this.RULE('charsetNameBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ARMSCII8);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASCII);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIG5);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP1250);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP1251);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP1256);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP1257);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP850);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP852);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP866);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CP932);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEC8);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EUCJPMS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EUCKR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GB2312);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GBK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOSTD8);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GREEK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HEBREW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HP8);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEYBCS2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KOI8R);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KOI8U);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LATIN1);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LATIN2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LATIN5);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LATIN7);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MACCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MACROMAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SJIS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SWE7);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIS620);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UCS2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UJIS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF16);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF16LE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF32);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF8);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF8MB3);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTF8MB4);
                        },
                    },
                ]);
            });
            _this.RULE('limitClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.LIMIT);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                            _this.CONSUME(lexer_g_1.Tokens.OFFSET);
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.SUBRULE3(_this.decimalLiteral);
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                            });
                            _this.SUBRULE4(_this.decimalLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('decimalLiteral', function () {
                _this.CONSUME(lexer_g_1.Tokens.DECIMAL_LITERAL);
            });
            _this.RULE('orderByClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.ORDER);
                _this.CONSUME(lexer_g_1.Tokens.BY);
                _this.SUBRULE(_this.orderByExpression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.orderByExpression);
                });
            });
            _this.RULE('orderByExpression', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ASC);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DESC);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('selectSpec', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ALL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DISTINCT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DISTINCTROW);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HIGH_PRIORITY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRAIGHT_JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_SMALL_RESULT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_BIG_RESULT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_BUFFER_RESULT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SQL_CACHE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SQL_NO_CACHE);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_CALC_FOUND_ROWS);
                        },
                    },
                ]);
            });
            _this.RULE('updateStatement', function () {
                _this.SUBRULE(_this.singleUpdateStatement);
            });
            _this.RULE('insertStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.INSERT);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.INTO);
                });
                _this.SUBRULE(_this.tableName);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                });
                _this.SUBRULE(_this.insertStatementValue);
            });
            _this.RULE('deleteStatement', function () {
                _this.SUBRULE(_this.singleDeleteStatement);
            });
            _this.RULE('singleDeleteStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.DELETE);
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('singleUpdateStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.UPDATE);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(lexer_g_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.uid);
                });
                _this.CONSUME(lexer_g_1.Tokens.SET);
                _this.SUBRULE(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.updatedElement);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('updatedElement', function () {
                _this.SUBRULE(_this.fullColumnName);
                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('insertStatementValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VALUES);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VALUE);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.expressionsWithDefaults);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                                _this.SUBRULE2(_this.expressionsWithDefaults);
                                _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        },
                    },
                ]);
            });
            _this.RULE('expressionsWithDefaults', function () {
                _this.SUBRULE(_this.expressionOrDefault);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.expressionOrDefault);
                });
            });
            _this.RULE('expressionOrDefault', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                        },
                    },
                ]);
            });
            _this.RULE('uidList', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.uid);
                });
            });
            _this.RULE('expression', function () {
                _this.SUBRULE(_this.logicalOperator);
            });
            _this.RULE('logicalOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_AND_OP);
                            _this.CONSUME2(lexer_g_1.Tokens.BIT_AND_OP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.XOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_OR_OP);
                            _this.CONSUME2(lexer_g_1.Tokens.BIT_OR_OP);
                        },
                    },
                ]);
            });
            _this.RULE('selectElements', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectElement);
                        },
                    },
                ]);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.selectElement);
                });
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableSources);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.GROUP);
                    _this.CONSUME(lexer_g_1.Tokens.BY);
                    _this.SUBRULE(_this.groupByItem);
                    _this.MANY(function () {
                        _this.CONSUME(lexer_g_1.Tokens.COMMA);
                        _this.SUBRULE2(_this.groupByItem);
                    });
                    _this.OPTION3(function () {
                        _this.CONSUME(lexer_g_1.Tokens.WITH);
                        _this.CONSUME(lexer_g_1.Tokens.ROLLUP);
                    });
                });
                _this.OPTION4(function () {
                    _this.CONSUME(lexer_g_1.Tokens.HAVING);
                    _this.SUBRULE2(_this.expression);
                });
            });
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.tableSource);
                });
            });
            _this.RULE('groupByItem', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ASC);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DESC);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('tableSource', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.joinPart);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE2(_this.tableSourceItem);
                            _this.MANY2(function () {
                                _this.SUBRULE2(_this.joinPart);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                ]);
            });
            _this.RULE('joinPart', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.OR2([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.INNER);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.CROSS);
                                        },
                                    },
                                ]);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.JOIN);
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.OPTION2(function () {
                                _this.OR3([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.ON);
                                            _this.SUBRULE(_this.expression);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.USING);
                                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                                            _this.SUBRULE(_this.uidList);
                                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                                        },
                                    },
                                ]);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRAIGHT_JOIN);
                            _this.SUBRULE2(_this.tableSourceItem);
                            _this.OPTION3(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ON);
                                _this.SUBRULE2(_this.expression);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LEFT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.RIGHT);
                                    },
                                },
                            ]);
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.OUTER);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.JOIN);
                            _this.SUBRULE3(_this.tableSourceItem);
                            _this.OR5([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.ON);
                                        _this.SUBRULE3(_this.expression);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.USING);
                                        _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                                        _this.SUBRULE2(_this.uidList);
                                        _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NATURAL);
                            _this.OPTION5(function () {
                                _this.OR6([
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.LEFT);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.RIGHT);
                                        },
                                    },
                                ]);
                                _this.OPTION6(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.OUTER);
                                });
                            });
                            _this.CONSUME3(lexer_g_1.Tokens.JOIN);
                            _this.SUBRULE4(_this.tableSourceItem);
                        },
                    },
                ]);
            });
            _this.RULE('tableSourceItem', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(lexer_g_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('selectElement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                            _this.OPTION(function () {
                                _this.OPTION2(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('fullColumnName', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.dottedId);
                    _this.OPTION2(function () {
                        _this.SUBRULE2(_this.dottedId);
                    });
                });
            });
            _this.RULE('dottedId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DOT_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DOT);
                            _this.SUBRULE(_this.uid);
                        },
                    },
                ]);
            });
            _this.RULE('fullId', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOT_ID);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOT);
                                _this.SUBRULE2(_this.uid);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('uid', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.simpleId);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REVERSE_QUOTE_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARSET_REVERSE_QOUTE_STRING);
                        },
                    },
                ]);
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