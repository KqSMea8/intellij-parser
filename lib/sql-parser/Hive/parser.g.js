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
    exports.tokens = lexer_g_1.tokens;
    exports.Lexer = lexer_g_1.Lexer;
    exports.Tokens = lexer_g_1.Tokens;
    exports.TokenEnum = lexer_g_1.TokenEnum;
    var SyntaxKind;
    (function (SyntaxKind) {
        SyntaxKind["root"] = "root";
        SyntaxKind["sqlStatements"] = "sqlStatements";
        SyntaxKind["sqlStatement"] = "sqlStatement";
        SyntaxKind["dqlStatement"] = "dqlStatement";
        SyntaxKind["ddlStatement"] = "ddlStatement";
        SyntaxKind["dmlStatement"] = "dmlStatement";
        SyntaxKind["showTable"] = "showTable";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["unionStatement"] = "unionStatement";
        SyntaxKind["queryExpression"] = "queryExpression";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["selectIntoExpression"] = "selectIntoExpression";
        SyntaxKind["selectFieldsInto"] = "selectFieldsInto";
        SyntaxKind["selectLinesInto"] = "selectLinesInto";
        SyntaxKind["selectElement"] = "selectElement";
        SyntaxKind["fullColumnName"] = "fullColumnName";
        SyntaxKind["dottedId"] = "dottedId";
        SyntaxKind["functionCall"] = "functionCall";
        SyntaxKind["functionArgs"] = "functionArgs";
        SyntaxKind["functionArg"] = "functionArg";
        SyntaxKind["customFunction"] = "customFunction";
        SyntaxKind["scalarFunctionName"] = "scalarFunctionName";
        SyntaxKind["specificFunction"] = "specificFunction";
        SyntaxKind["expressionAtom"] = "expressionAtom";
        SyntaxKind["intervalTypeBase"] = "intervalTypeBase";
        SyntaxKind["intervalType"] = "intervalType";
        SyntaxKind["levelsInWeightString"] = "levelsInWeightString";
        SyntaxKind["levelInWeightListElement"] = "levelInWeightListElement";
        SyntaxKind["convertedDataType"] = "convertedDataType";
        SyntaxKind["caseFuncAlternative"] = "caseFuncAlternative";
        SyntaxKind["lengthOneDimension"] = "lengthOneDimension";
        SyntaxKind["lengthTwoDimension"] = "lengthTwoDimension";
        SyntaxKind["lengthTwoOptionalDimension"] = "lengthTwoOptionalDimension";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["joinPart"] = "joinPart";
        SyntaxKind["tableSourceItem"] = "tableSourceItem";
        SyntaxKind["uid"] = "uid";
        SyntaxKind["fullId"] = "fullId";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["insertStatement"] = "insertStatement";
        SyntaxKind["partitionInsertDefinitions"] = "partitionInsertDefinitions";
        SyntaxKind["insertStatementValue"] = "insertStatementValue";
        SyntaxKind["updateStatement"] = "updateStatement";
        SyntaxKind["updatedElement"] = "updatedElement";
        SyntaxKind["deleteStatement"] = "deleteStatement";
        SyntaxKind["createDatabaseStatement"] = "createDatabaseStatement";
        SyntaxKind["ifExists"] = "ifExists";
        SyntaxKind["switchDatabaseStatement"] = "switchDatabaseStatement";
        SyntaxKind["dropDatabaseStatement"] = "dropDatabaseStatement";
        SyntaxKind["createTable"] = "createTable";
        SyntaxKind["createDefinitions"] = "createDefinitions";
        SyntaxKind["createDefinition"] = "createDefinition";
        SyntaxKind["columnDefinition"] = "columnDefinition";
        SyntaxKind["columnConstraint"] = "columnConstraint";
        SyntaxKind["dataType"] = "dataType";
        SyntaxKind["dataType1"] = "dataType1";
        SyntaxKind["collationName"] = "collationName";
        SyntaxKind["dataType2"] = "dataType2";
        SyntaxKind["dataType3"] = "dataType3";
        SyntaxKind["dataType4"] = "dataType4";
        SyntaxKind["dataType5"] = "dataType5";
        SyntaxKind["dataType6"] = "dataType6";
        SyntaxKind["dataType7"] = "dataType7";
        SyntaxKind["tableOption"] = "tableOption";
        SyntaxKind["tableOption1"] = "tableOption1";
        SyntaxKind["tableOption2"] = "tableOption2";
        SyntaxKind["tableOption3"] = "tableOption3";
        SyntaxKind["tableOption4"] = "tableOption4";
        SyntaxKind["tableOption5"] = "tableOption5";
        SyntaxKind["tablespaceStorage"] = "tablespaceStorage";
        SyntaxKind["tables"] = "tables";
        SyntaxKind["fileSizeLiteral"] = "fileSizeLiteral";
        SyntaxKind["engineName"] = "engineName";
        SyntaxKind["partitionDefinitions"] = "partitionDefinitions";
        SyntaxKind["dropTable"] = "dropTable";
        SyntaxKind["alterTable"] = "alterTable";
        SyntaxKind["alterTableStatementSuffix"] = "alterTableStatementSuffix";
        SyntaxKind["alterStatementSuffixRename"] = "alterStatementSuffixRename";
        SyntaxKind["alterStatementSuffixRenameCol"] = "alterStatementSuffixRenameCol";
        SyntaxKind["alterStatementChangeColPosition"] = "alterStatementChangeColPosition";
        SyntaxKind["alterStatementSuffixAddCol"] = "alterStatementSuffixAddCol";
        SyntaxKind["columnNameTypeList"] = "columnNameTypeList";
        SyntaxKind["columnNameType"] = "columnNameType";
        SyntaxKind["colType"] = "colType";
        SyntaxKind["colTypeList"] = "colTypeList";
        SyntaxKind["type"] = "type";
        SyntaxKind["primitiveType"] = "primitiveType";
        SyntaxKind["listType"] = "listType";
        SyntaxKind["mapType"] = "mapType";
        SyntaxKind["unionType"] = "unionType";
        SyntaxKind["ifNotExists"] = "ifNotExists";
        SyntaxKind["columnNameList"] = "columnNameList";
        SyntaxKind["columnName"] = "columnName";
        SyntaxKind["columnRefOrder"] = "columnRefOrder";
        SyntaxKind["queryOperator"] = "queryOperator";
        SyntaxKind["whereClause"] = "whereClause";
        SyntaxKind["groupByClause"] = "groupByClause";
        SyntaxKind["groupingSetExpression"] = "groupingSetExpression";
        SyntaxKind["groupByExpression"] = "groupByExpression";
        SyntaxKind["havingClause"] = "havingClause";
        SyntaxKind["distributeByClause"] = "distributeByClause";
        SyntaxKind["havingCondition"] = "havingCondition";
        SyntaxKind["searchCondition"] = "searchCondition";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["atomExpression"] = "atomExpression";
        SyntaxKind["tableOrColumn"] = "tableOrColumn";
        SyntaxKind["dateLiteral"] = "dateLiteral";
        SyntaxKind["constant"] = "constant";
        SyntaxKind["charSetStringLiteral"] = "charSetStringLiteral";
        SyntaxKind["booleanValue"] = "booleanValue";
        SyntaxKind["precedenceFieldExpression"] = "precedenceFieldExpression";
        SyntaxKind["precedenceUnaryOperator"] = "precedenceUnaryOperator";
        SyntaxKind["nullCondition"] = "nullCondition";
        SyntaxKind["precedenceUnaryPrefixExpression"] = "precedenceUnaryPrefixExpression";
        SyntaxKind["precedenceUnarySuffixExpression"] = "precedenceUnarySuffixExpression";
        SyntaxKind["precedenceBitwiseXorOperator"] = "precedenceBitwiseXorOperator";
        SyntaxKind["precedenceBitwiseXorExpression"] = "precedenceBitwiseXorExpression";
        SyntaxKind["precedenceStarOperator"] = "precedenceStarOperator";
        SyntaxKind["precedenceStarExpression"] = "precedenceStarExpression";
        SyntaxKind["precedencePlusOperator"] = "precedencePlusOperator";
        SyntaxKind["precedencePlusExpression"] = "precedencePlusExpression";
        SyntaxKind["precedenceAmpersandOperator"] = "precedenceAmpersandOperator";
        SyntaxKind["precedenceAmpersandExpression"] = "precedenceAmpersandExpression";
        SyntaxKind["precedenceBitwiseOrOperator"] = "precedenceBitwiseOrOperator";
        SyntaxKind["precedenceBitwiseOrExpression"] = "precedenceBitwiseOrExpression";
        SyntaxKind["precedenceEqualNegatableOperator"] = "precedenceEqualNegatableOperator";
        SyntaxKind["precedenceEqualOperator"] = "precedenceEqualOperator";
        SyntaxKind["precedenceEqualExpression"] = "precedenceEqualExpression";
        SyntaxKind["expressions"] = "expressions";
        SyntaxKind["precedenceNotOperator"] = "precedenceNotOperator";
        SyntaxKind["precedenceNotExpression"] = "precedenceNotExpression";
        SyntaxKind["precedenceAndOperator"] = "precedenceAndOperator";
        SyntaxKind["precedenceAndExpression"] = "precedenceAndExpression";
        SyntaxKind["precedenceOrOperator"] = "precedenceOrOperator";
        SyntaxKind["precedenceOrExpression"] = "precedenceOrExpression";
        SyntaxKind["limitClause"] = "limitClause";
        SyntaxKind["orderByClause"] = "orderByClause";
        SyntaxKind["sortByClause"] = "sortByClause";
        SyntaxKind["identifier"] = "identifier";
        SyntaxKind["uidList"] = "uidList";
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
            _this.RULE('sqlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.ddlStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dmlStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dqlStatement);
                        },
                    },
                ]);
            });
            _this.RULE('dqlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.showTable);
                        },
                    },
                ]);
            });
            _this.RULE('ddlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTable);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropTable);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterTable);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createDatabaseStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.switchDatabaseStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropDatabaseStatement);
                        },
                    },
                ]);
            });
            _this.RULE('dmlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.insertStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.updateStatement);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.deleteStatement);
                        },
                    },
                ]);
            });
            _this.RULE('showTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.SHOW);
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('selectStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpression);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecification);
                            _this.OPTION(function () {
                                _this.MANY(function () {
                                    _this.SUBRULE(_this.unionStatement);
                                });
                            });
                        },
                    },
                ]);
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
                _this.OR3([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecification);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpression);
                        },
                    },
                ]);
            });
            _this.RULE('queryExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.querySpecification);
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.queryExpression);
                            _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
            });
            _this.RULE('querySpecification', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
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
                _this.SUBRULE(_this.selectElements);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.selectIntoExpression);
                });
                _this.SUBRULE(_this.fromClause);
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.whereClause);
                });
                _this.OPTION4(function () {
                    _this.SUBRULE(_this.groupByClause);
                });
                _this.OPTION5(function () {
                    _this.SUBRULE(_this.havingClause);
                });
                _this.OPTION6(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION7(function () {
                    _this.SUBRULE(_this.distributeByClause);
                });
                _this.OPTION8(function () {
                    _this.SUBRULE(_this.sortByClause);
                });
                _this.OPTION9(function () {
                    _this.SUBRULE(_this.limitClause);
                });
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
            _this.RULE('selectIntoExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTO);
                            _this.SUBRULE(_this.uid);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.uid);
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
                                _this.CONSUME(lexer_g_1.Tokens.CharSetName);
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
                            _this.SUBRULE(_this.functionCall);
                            _this.OPTION(function () {
                                _this.OPTION2(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                            _this.OPTION3(function () {
                                _this.OPTION4(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE2(_this.uid);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('fullColumnName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.dottedId);
                                _this.OPTION2(function () {
                                    _this.SUBRULE2(_this.dottedId);
                                });
                            });
                        },
                    },
                ]);
            });
            _this.RULE('dottedId', function () {
                _this.CONSUME(lexer_g_1.Tokens.DOT);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('functionCall', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.specificFunction);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.scalarFunctionName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.customFunction);
                        },
                    },
                ]);
            });
            _this.RULE('functionArgs', function () {
                _this.SUBRULE(_this.functionArg);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.functionArg);
                });
            });
            _this.RULE('functionArg', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        },
                    },
                ]);
            });
            _this.RULE('customFunction', function () {
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.functionArgs);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('scalarFunctionName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COUNT);
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.functionArgs);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBSTR);
                            _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                            _this.OPTION2(function () {
                                _this.SUBRULE2(_this.functionArgs);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
            });
            _this.RULE('specificFunction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CURRENT_DATE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CURRENT_TIME);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CURRENT_TIMESTAMP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CURRENT_USER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LOCALTIME);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONVERT);
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.expression);
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                        _this.SUBRULE(_this.convertedDataType);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.USING);
                                        _this.CONSUME(lexer_g_1.Tokens.CharSetLiteral);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CAST);
                            _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE2(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.AS);
                            _this.SUBRULE2(_this.convertedDataType);
                            _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME3(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME3(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CASE);
                            _this.SUBRULE3(_this.expression);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.caseFuncAlternative);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE(_this.functionArg);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.END);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.CASE);
                            _this.AT_LEAST_ONE2(function () {
                                _this.SUBRULE2(_this.caseFuncAlternative);
                            });
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE2(_this.functionArg);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.END);
                            _this.OPTION3(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.AS);
                                _this.SUBRULE(_this.expressionAtom);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAR);
                            _this.CONSUME4(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.functionArgs);
                            _this.OPTION4(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.USING);
                                _this.CONSUME2(lexer_g_1.Tokens.CharSetLiteral);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POSITION);
                            _this.CONSUME5(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE4(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.SUBRULE5(_this.expression);
                            _this.CONSUME5(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME6(lexer_g_1.Tokens.LPAREN);
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.BOTH);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LEADING);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.TRAILING);
                                    },
                                },
                            ]);
                            _this.OPTION5(function () {
                                _this.SUBRULE6(_this.expression);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.FROM);
                            _this.SUBRULE7(_this.expression);
                            _this.CONSUME6(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME7(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE8(_this.expression);
                            _this.CONSUME2(lexer_g_1.Tokens.FROM);
                            _this.SUBRULE9(_this.expression);
                            _this.CONSUME7(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEIGHT_STRING);
                            _this.CONSUME8(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE10(_this.expression);
                            _this.OPTION6(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.AS);
                                _this.OR5([
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.CHAR);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                                        },
                                    },
                                ]);
                                _this.CONSUME9(lexer_g_1.Tokens.LPAREN);
                                _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                                _this.CONSUME8(lexer_g_1.Tokens.RPAREN);
                            });
                            _this.OPTION7(function () {
                                _this.SUBRULE(_this.levelsInWeightString);
                            });
                            _this.CONSUME9(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTRACT);
                            _this.CONSUME10(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.intervalType);
                            _this.CONSUME3(lexer_g_1.Tokens.FROM);
                            _this.SUBRULE11(_this.expression);
                            _this.CONSUME10(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GET_FORMAT);
                            _this.CONSUME11(lexer_g_1.Tokens.LPAREN);
                            _this.OR6([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DATE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.TIME);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DATETIME);
                                    },
                                },
                            ]);
                            _this.CONSUME2(lexer_g_1.Tokens.COMMA);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            _this.CONSUME11(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
            });
            _this.RULE('expressionAtom', function () {
                _this.SUBRULE(_this.fullColumnName);
            });
            _this.RULE('intervalTypeBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.QUARTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MONTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEEK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MICROSECOND);
                        },
                    },
                ]);
            });
            _this.RULE('intervalType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.intervalTypeBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEAR_MONTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY_HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY_MINUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY_SECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOUR_MINUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOUR_SECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUTE_SECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SECOND_MICROSECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUTE_MICROSECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOUR_MICROSECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY_MICROSECOND);
                        },
                    },
                ]);
            });
            _this.RULE('levelsInWeightString', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEVEL);
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
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
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.REVERSE);
                                        },
                                    },
                                ]);
                            });
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE(_this.levelInWeightListElement);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUS);
                            _this.CONSUME2(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('levelInWeightListElement', function () {
                _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
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
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.REVERSE);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('convertedDataType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.BINARY);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NCHAR);
                                    },
                                },
                            ]);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAR);
                            _this.OPTION2(function () {
                                _this.SUBRULE2(_this.lengthOneDimension);
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                                _this.CONSUME(lexer_g_1.Tokens.SET);
                                _this.CONSUME(lexer_g_1.Tokens.CharSetLiteral);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DATE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DATETIME);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.TIME);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DECIMAL);
                            _this.OPTION4(function () {
                                _this.SUBRULE(_this.lengthTwoDimension);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SIGNED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.UNSIGNED);
                                    },
                                },
                            ]);
                            _this.OPTION5(function () {
                                _this.CONSUME(lexer_g_1.Tokens.INTEGER);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('caseFuncAlternative', function () {
                _this.CONSUME(lexer_g_1.Tokens.WHEN);
                _this.SUBRULE(_this.functionArg);
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE2(_this.functionArg);
            });
            _this.RULE('lengthOneDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.AT_LEAST_ONE(function () {
                    _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('lengthTwoDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                _this.CONSUME2(lexer_g_1.Tokens.DecimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('lengthTwoOptionalDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.CONSUME2(lexer_g_1.Tokens.DecimalLiteral);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableSources);
            });
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.tableSource);
                });
            });
            _this.RULE('tableSource', function () {
                _this.SUBRULE(_this.tableSourceItem);
                _this.MANY(function () {
                    _this.SUBRULE(_this.joinPart);
                });
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
                                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                                            _this.SUBRULE(_this.uidList);
                                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                                        },
                                    },
                                ]);
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
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FULL);
                                    },
                                },
                            ]);
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.OUTER);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.JOIN);
                            _this.SUBRULE2(_this.tableSourceItem);
                            _this.OR5([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.ON);
                                        _this.SUBRULE2(_this.expression);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.USING);
                                        _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                                        _this.SUBRULE2(_this.uidList);
                                        _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('tableSourceItem', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.OPTION2(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            });
                            _this.SUBRULE(_this.selectStatement);
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                            });
                            _this.OPTION5(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.AS);
                            });
                            _this.OPTION6(function () {
                                _this.SUBRULE2(_this.uid);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('uid', function () {
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('fullId', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.DOT);
                    _this.SUBRULE2(_this.uid);
                });
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('insertStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.INSERT);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.INTO);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.OVERWRITE);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.TABLE);
                });
                _this.SUBRULE(_this.tableName);
                _this.OPTION4(function () {
                    _this.SUBRULE(_this.partitionInsertDefinitions);
                });
                _this.OPTION5(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                });
                _this.SUBRULE(_this.insertStatementValue);
            });
            _this.RULE('partitionInsertDefinitions', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITION);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.BY);
                });
                _this.OR3([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uidList);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            _this.SUBRULE(_this.constant);
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
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
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                                _this.SUBRULE2(_this.expression);
                                _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
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
            _this.RULE('updateStatement', function () {
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
                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('deleteStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.DELETE);
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('createDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.CREATE);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SCHEMA);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('ifExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.CONSUME(lexer_g_1.Tokens.EXISTS);
            });
            _this.RULE('switchDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.USE);
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('dropDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.DROP);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SCHEMA);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('createTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.TEMPORARY);
                });
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.createDefinitions);
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.tableOption);
                    _this.MANY(function () {
                        _this.OPTION4(function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMA);
                        });
                        _this.SUBRULE2(_this.tableOption);
                    });
                });
            });
            _this.RULE('createDefinitions', function () {
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.SUBRULE(_this.createDefinition);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.createDefinition);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('createDefinition', function () {
                _this.SUBRULE(_this.uid);
                _this.SUBRULE(_this.columnDefinition);
            });
            _this.RULE('columnDefinition', function () {
                _this.SUBRULE(_this.dataType);
                _this.MANY(function () {
                    _this.SUBRULE(_this.columnConstraint);
                });
            });
            _this.RULE('columnConstraint', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.nullCondition);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTO_INCREMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.PRIMARY);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.KEY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNIQUE);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.KEY);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLUMN_FORMAT);
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FIXED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DYNAMIC);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STORAGE);
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DISK);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.MEMORY);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('dataType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType1);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType3);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType4);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType5);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType6);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataType7);
                        },
                    },
                ]);
            });
            _this.RULE('dataType1', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VARCHAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TINYTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEDIUMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LONGTEXT);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.lengthOneDimension);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.BINARY);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                    _this.CONSUME(lexer_g_1.Tokens.SET);
                    _this.CONSUME(lexer_g_1.Tokens.CharSetName);
                });
                _this.OPTION4(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                    _this.SUBRULE(_this.collationName);
                });
            });
            _this.RULE('collationName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                ]);
            });
            _this.RULE('dataType2', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TINYINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SMALLINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEDIUMINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTEGER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIGINT);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.lengthOneDimension);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.UNSIGNED);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ZEROFILL);
                });
            });
            _this.RULE('dataType3', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.REAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DOUBLE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FLOAT);
                                    },
                                },
                            ]);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthTwoDimension);
                            });
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.UNSIGNED);
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ZEROFILL);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NUMERIC);
                                    },
                                },
                            ]);
                            _this.OPTION4(function () {
                                _this.SUBRULE(_this.lengthTwoOptionalDimension);
                            });
                            _this.OPTION5(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.UNSIGNED);
                            });
                            _this.OPTION6(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ZEROFILL);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('dataType4', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TINYBLOB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BLOB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEDIUMBLOB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LONGBLOB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BOOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BOOLEAN);
                        },
                    },
                ]);
            });
            _this.RULE('dataType5', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VARBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEAR);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.lengthOneDimension);
                });
            });
            _this.RULE('dataType6', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENUM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SET);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.BINARY);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                    _this.CONSUME2(lexer_g_1.Tokens.SET);
                    _this.CONSUME(lexer_g_1.Tokens.CharSetName);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                    _this.SUBRULE(_this.collationName);
                });
            });
            _this.RULE('dataType7', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYCOLLECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINESTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTILINESTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOLYGON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYGON);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption1);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption3);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption4);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption5);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption1', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENGINE);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.SUBRULE(_this.engineName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTO_INCREMENT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AVG_ROW_LENGTH);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                            });
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                                        _this.CONSUME(lexer_g_1.Tokens.SET);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.CHARSET);
                                    },
                                },
                            ]);
                            _this.OPTION5(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.CharSetName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHECKSUM);
                            _this.OPTION6(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ZERO_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ONE_DECIMAL);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION7(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                            _this.OPTION8(function () {
                                _this.CONSUME6(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.SUBRULE(_this.collationName);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption2', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPRESSION);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONNECTION);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME3(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATA);
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION4(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DELAY_KEY_WRITE);
                            _this.OPTION5(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ZERO_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ONE_DECIMAL);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENCRYPTION);
                            _this.OPTION6(function () {
                                _this.CONSUME6(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEX);
                            _this.CONSUME2(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION7(function () {
                                _this.CONSUME7(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME6(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.partitionDefinitions);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption3', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSERT_METHOD);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NO);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FIRST);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LAST);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEY_BLOCK_SIZE);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.SUBRULE(_this.fileSizeLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_ROWS);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MIN_ROWS);
                            _this.OPTION4(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PACK_KEYS);
                            _this.OPTION5(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ZERO_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ONE_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption4', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PASSWORD);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW_FORMAT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DYNAMIC);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FIXED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.COMPRESSED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.REDUNDANT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.COMPACT);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('tableOption5', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATS_AUTO_RECALC);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ZERO_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ONE_DECIMAL);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATS_PERSISTENT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.ZERO_DECIMAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.ONE_DECIMAL);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLESPACE);
                            _this.SUBRULE(_this.uid);
                            _this.OPTION3(function () {
                                _this.SUBRULE(_this.tablespaceStorage);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LIFECYCLE);
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNION);
                            _this.OPTION4(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.tables);
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
            });
            _this.RULE('tablespaceStorage', function () {
                _this.CONSUME(lexer_g_1.Tokens.STORAGE);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEMORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                        },
                    },
                ]);
            });
            _this.RULE('tables', function () {
                _this.SUBRULE(_this.tableName);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.tableName);
                });
            });
            _this.RULE('fileSizeLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ByteLengthLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('engineName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BLACKHOLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CSV);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FEDERATED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INNODB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEMORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MRG_MYISAM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MYISAM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NDB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NDBCLUSTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PERFOMANCE_SCHEMA);
                        },
                    },
                ]);
            });
            _this.RULE('partitionDefinitions', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITION);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.BY);
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.SUBRULE(_this.createDefinitions);
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('dropTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.DROP);
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('alterTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.ALTER);
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.SUBRULE(_this.alterTableStatementSuffix);
            });
            _this.RULE('alterTableStatementSuffix', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterStatementSuffixRename);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterStatementSuffixAddCol);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterStatementSuffixRenameCol);
                        },
                    },
                ]);
            });
            _this.RULE('alterStatementSuffixRename', function () {
                _this.SUBRULE(_this.identifier);
                _this.CONSUME(lexer_g_1.Tokens.RENAME);
                _this.CONSUME(lexer_g_1.Tokens.TO);
                _this.SUBRULE2(_this.identifier);
            });
            _this.RULE('alterStatementSuffixRenameCol', function () {
                _this.SUBRULE(_this.identifier);
                _this.CONSUME(lexer_g_1.Tokens.CHANGE);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COLUMN);
                });
                _this.SUBRULE2(_this.identifier);
                _this.SUBRULE3(_this.identifier);
                _this.SUBRULE(_this.colType);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                    _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.alterStatementChangeColPosition);
                });
            });
            _this.RULE('alterStatementChangeColPosition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AFTER);
                            _this.SUBRULE(_this.identifier);
                        },
                    },
                ]);
            });
            _this.RULE('alterStatementSuffixAddCol', function () {
                _this.SUBRULE(_this.identifier);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLACE);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.COLUMNS);
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.SUBRULE(_this.columnNameTypeList);
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('columnNameTypeList', function () {
                _this.SUBRULE(_this.columnNameType);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.columnNameType);
                });
            });
            _this.RULE('columnNameType', function () {
                _this.SUBRULE(_this.identifier);
                _this.SUBRULE(_this.colType);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                    _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                });
            });
            _this.RULE('colType', function () {
                _this.SUBRULE(_this.type);
            });
            _this.RULE('colTypeList', function () {
                _this.SUBRULE(_this.colType);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.colType);
                });
            });
            _this.RULE('type', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.primitiveType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.listType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.mapType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.unionType);
                        },
                    },
                ]);
            });
            _this.RULE('primitiveType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TINYINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SMALLINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIGINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BOOLEAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FLOAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DOUBLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DECIMAL);
                        },
                    },
                ]);
            });
            _this.RULE('listType', function () {
                _this.CONSUME(lexer_g_1.Tokens.ARRAY);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.type);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('mapType', function () {
                _this.CONSUME(lexer_g_1.Tokens.MAP);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.primitiveType);
                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                _this.SUBRULE(_this.type);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('unionType', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNIONTYPE);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.colTypeList);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('ifNotExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.CONSUME(lexer_g_1.Tokens.NOT);
                _this.CONSUME(lexer_g_1.Tokens.EXISTS);
            });
            _this.RULE('columnNameList', function () {
                _this.SUBRULE(_this.columnName);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.columnName);
                });
            });
            _this.RULE('columnName', function () {
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('columnRefOrder', function () {
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
            _this.RULE('queryOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNION);
                _this.CONSUME(lexer_g_1.Tokens.ALL);
            });
            _this.RULE('whereClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.WHERE);
                _this.SUBRULE(_this.searchCondition);
            });
            _this.RULE('groupByClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.GROUP);
                _this.CONSUME(lexer_g_1.Tokens.BY);
                _this.SUBRULE(_this.groupByExpression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.groupByExpression);
                });
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.WITH);
                                _this.CONSUME(lexer_g_1.Tokens.ROLLUP);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME2(lexer_g_1.Tokens.WITH);
                                _this.CONSUME(lexer_g_1.Tokens.CUBE);
                            },
                        },
                    ]);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.GROUPING);
                    _this.CONSUME(lexer_g_1.Tokens.SETS);
                    _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                    _this.SUBRULE(_this.groupingSetExpression);
                    _this.MANY2(function () {
                        _this.CONSUME2(lexer_g_1.Tokens.COMMA);
                        _this.SUBRULE2(_this.groupingSetExpression);
                    });
                    _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                });
            });
            _this.RULE('groupingSetExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.groupByExpression);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE2(_this.groupByExpression);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE3(_this.groupByExpression);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LPAREN);
                            _this.CONSUME2(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                ]);
            });
            _this.RULE('groupByExpression', function () {
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('havingClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.HAVING);
                _this.SUBRULE(_this.havingCondition);
            });
            _this.RULE('distributeByClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISTRIBUTE);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.expression);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.expression);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.DISTRIBUTE);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
                            _this.SUBRULE3(_this.expression);
                        },
                    },
                ]);
            });
            _this.RULE('havingCondition', function () {
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('searchCondition', function () {
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('expression', function () {
                _this.SUBRULE(_this.precedenceOrExpression);
            });
            _this.RULE('atomExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOrColumn);
                        },
                    },
                ]);
            });
            _this.RULE('tableOrColumn', function () {
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('dateLiteral', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.DATE);
                });
                _this.AT_LEAST_ONE(function () {
                    _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                });
            });
            _this.RULE('constant', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.Number);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dateLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BigintLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SmallintLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TinyintLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.charSetStringLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('charSetStringLiteral', function () {
                _this.CONSUME(lexer_g_1.Tokens.CharSetName);
                _this.CONSUME(lexer_g_1.Tokens.CharSetLiteral);
            });
            _this.RULE('booleanValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FALSE);
                        },
                    },
                ]);
            });
            _this.RULE('precedenceFieldExpression', function () {
                _this.SUBRULE(_this.atomExpression);
                _this.MANY(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.LSQUARE);
                                _this.SUBRULE(_this.expression);
                                _this.CONSUME(lexer_g_1.Tokens.RSQUARE);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOT);
                                _this.SUBRULE(_this.identifier);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('precedenceUnaryOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TILDE);
                        },
                    },
                ]);
            });
            _this.RULE('nullCondition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NOT);
                            _this.CONSUME2(lexer_g_1.Tokens.NULL);
                        },
                    },
                ]);
            });
            _this.RULE('precedenceUnaryPrefixExpression', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.precedenceUnaryOperator);
                });
                _this.SUBRULE(_this.precedenceFieldExpression);
            });
            _this.RULE('precedenceUnarySuffixExpression', function () {
                _this.SUBRULE(_this.precedenceUnaryPrefixExpression);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.IS);
                    _this.SUBRULE(_this.nullCondition);
                });
            });
            _this.RULE('precedenceBitwiseXorOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.BITWISEXOR);
            });
            _this.RULE('precedenceBitwiseXorExpression', function () {
                _this.SUBRULE(_this.precedenceUnarySuffixExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceBitwiseXorOperator);
                    _this.SUBRULE2(_this.precedenceUnarySuffixExpression);
                });
            });
            _this.RULE('precedenceStarOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIVIDE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MOD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIV);
                        },
                    },
                ]);
            });
            _this.RULE('precedenceStarExpression', function () {
                _this.SUBRULE(_this.precedenceBitwiseXorExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceStarOperator);
                    _this.SUBRULE2(_this.precedenceBitwiseXorExpression);
                });
            });
            _this.RULE('precedencePlusOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUS);
                        },
                    },
                ]);
            });
            _this.RULE('precedencePlusExpression', function () {
                _this.SUBRULE(_this.precedenceStarExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedencePlusOperator);
                    _this.SUBRULE2(_this.precedenceStarExpression);
                });
            });
            _this.RULE('precedenceAmpersandOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.AMPERSAND);
            });
            _this.RULE('precedenceAmpersandExpression', function () {
                _this.SUBRULE(_this.precedencePlusExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceAmpersandOperator);
                    _this.SUBRULE2(_this.precedencePlusExpression);
                });
            });
            _this.RULE('precedenceBitwiseOrOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.BITWISEOR);
            });
            _this.RULE('precedenceBitwiseOrExpression', function () {
                _this.SUBRULE(_this.precedenceAmpersandExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceBitwiseOrOperator);
                    _this.SUBRULE2(_this.precedenceAmpersandExpression);
                });
            });
            _this.RULE('precedenceEqualNegatableOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REGEXP);
                        },
                    },
                ]);
            });
            _this.RULE('precedenceEqualOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.precedenceEqualNegatableOperator);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL_NS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NOTEQUAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LESSTHANOREQUALTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GREATERTHANOREQUALTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
                        },
                    },
                ]);
            });
            _this.RULE('precedenceEqualExpression', function () {
                _this.SUBRULE(_this.precedenceBitwiseOrExpression);
                _this.MANY(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.NOT);
                                });
                                _this.SUBRULE(_this.precedenceEqualOperator);
                                _this.SUBRULE2(_this.precedenceBitwiseOrExpression);
                            },
                        },
                        {
                            ALT: function () {
                                _this.OPTION2(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.NOT);
                                });
                                _this.CONSUME(lexer_g_1.Tokens.IN);
                                _this.SUBRULE(_this.expressions);
                            },
                        },
                        {
                            ALT: function () {
                                _this.OPTION3(function () {
                                    _this.CONSUME3(lexer_g_1.Tokens.NOT);
                                });
                                _this.CONSUME(lexer_g_1.Tokens.BETWEEN);
                                _this.SUBRULE3(_this.precedenceBitwiseOrExpression);
                                _this.CONSUME(lexer_g_1.Tokens.AND);
                                _this.SUBRULE4(_this.precedenceBitwiseOrExpression);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('expressions', function () {
                _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                _this.SUBRULE(_this.expression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.expression);
                });
                _this.CONSUME(lexer_g_1.Tokens.RPAREN);
            });
            _this.RULE('precedenceNotOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.NOT);
            });
            _this.RULE('precedenceNotExpression', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.precedenceNotOperator);
                });
                _this.SUBRULE(_this.precedenceEqualExpression);
            });
            _this.RULE('precedenceAndOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.AND);
            });
            _this.RULE('precedenceAndExpression', function () {
                _this.SUBRULE(_this.precedenceNotExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceAndOperator);
                    _this.SUBRULE2(_this.precedenceNotExpression);
                });
            });
            _this.RULE('precedenceOrOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.OR);
            });
            _this.RULE('precedenceOrExpression', function () {
                _this.SUBRULE(_this.precedenceAndExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceOrOperator);
                    _this.SUBRULE2(_this.precedenceAndExpression);
                });
            });
            _this.RULE('limitClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.LIMIT);
                _this.CONSUME(lexer_g_1.Tokens.Number);
            });
            _this.RULE('orderByClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ORDER);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.columnRefOrder);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.columnRefOrder);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ORDER);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
                            _this.SUBRULE3(_this.columnRefOrder);
                            _this.MANY2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE4(_this.columnRefOrder);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('sortByClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SORT);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                            _this.CONSUME(lexer_g_1.Tokens.LPAREN);
                            _this.SUBRULE(_this.columnRefOrder);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.columnRefOrder);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RPAREN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.SORT);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
                            _this.SUBRULE3(_this.columnRefOrder);
                        },
                    },
                ]);
            });
            _this.RULE('identifier', function () {
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('uidList', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.uid);
                });
            });
            chevrotain.Parser.performSelfAnalysis(_this);
            return _this;
        }
        return Parser;
    }(chevrotain.Parser));
    exports.Parser = Parser;
});
//# sourceMappingURL=parser.g.js.map