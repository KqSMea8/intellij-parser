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
        SyntaxKind["ddlStatement"] = "ddlStatement";
        SyntaxKind["dmlStatement"] = "dmlStatement";
        SyntaxKind["createDatabase"] = "createDatabase";
        SyntaxKind["createTable"] = "createTable";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["lockClause"] = "lockClause";
        SyntaxKind["unionStatement"] = "unionStatement";
        SyntaxKind["unionParenthesis"] = "unionParenthesis";
        SyntaxKind["queryExpression"] = "queryExpression";
        SyntaxKind["queryExpressionNointo"] = "queryExpressionNointo";
        SyntaxKind["querySpecificationNointo"] = "querySpecificationNointo";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["limitClause"] = "limitClause";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["groupByItem"] = "groupByItem";
        SyntaxKind["orderByClause"] = "orderByClause";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["joinPart"] = "joinPart";
        SyntaxKind["uidList"] = "uidList";
        SyntaxKind["indexHint"] = "indexHint";
        SyntaxKind["indexHintType"] = "indexHintType";
        SyntaxKind["tableSourceItem"] = "tableSourceItem";
        SyntaxKind["selectIntoExpression"] = "selectIntoExpression";
        SyntaxKind["assignmentField"] = "assignmentField";
        SyntaxKind["selectLinesInto"] = "selectLinesInto";
        SyntaxKind["selectFieldsInto"] = "selectFieldsInto";
        SyntaxKind["selectSpec"] = "selectSpec";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["selectElement"] = "selectElement";
        SyntaxKind["functionCall"] = "functionCall";
        SyntaxKind["passwordFunctionClause"] = "passwordFunctionClause";
        SyntaxKind["scalarFunctionName"] = "scalarFunctionName";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["predicate"] = "predicate";
        SyntaxKind["nullNotnull"] = "nullNotnull";
        SyntaxKind["aggregateWindowedFunction"] = "aggregateWindowedFunction";
        SyntaxKind["orderByExpression"] = "orderByExpression";
        SyntaxKind["specificFunction"] = "specificFunction";
        SyntaxKind["convertedDataType"] = "convertedDataType";
        SyntaxKind["lengthOneDimension"] = "lengthOneDimension";
        SyntaxKind["lengthTwoDimension"] = "lengthTwoDimension";
        SyntaxKind["levelsInWeightString"] = "levelsInWeightString";
        SyntaxKind["levelInWeightListElement"] = "levelInWeightListElement";
        SyntaxKind["caseFuncAlternative"] = "caseFuncAlternative";
        SyntaxKind["functionArg"] = "functionArg";
        SyntaxKind["functionArgs"] = "functionArgs";
        SyntaxKind["comparisonOperator"] = "comparisonOperator";
        SyntaxKind["expressionAtom"] = "expressionAtom";
        SyntaxKind["bitOperator"] = "bitOperator";
        SyntaxKind["mathOperator"] = "mathOperator";
        SyntaxKind["intervalType"] = "intervalType";
        SyntaxKind["unaryOperator"] = "unaryOperator";
        SyntaxKind["mysqlVariable"] = "mysqlVariable";
        SyntaxKind["constant"] = "constant";
        SyntaxKind["stringLiteral"] = "stringLiteral";
        SyntaxKind["decimalLiteral"] = "decimalLiteral";
        SyntaxKind["booleanLiteral"] = "booleanLiteral";
        SyntaxKind["hexadecimalLiteral"] = "hexadecimalLiteral";
        SyntaxKind["expressions"] = "expressions";
        SyntaxKind["logicalOperator"] = "logicalOperator";
        SyntaxKind["dottedId"] = "dottedId";
        SyntaxKind["fullColumnName"] = "fullColumnName";
        SyntaxKind["fullId"] = "fullId";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["ifNotExists"] = "ifNotExists";
        SyntaxKind["uid"] = "uid";
        SyntaxKind["simpleId"] = "simpleId";
        SyntaxKind["charsetNameBase"] = "charsetNameBase";
        SyntaxKind["transactionLevelBase"] = "transactionLevelBase";
        SyntaxKind["engineName"] = "engineName";
        SyntaxKind["privilegesBase"] = "privilegesBase";
        SyntaxKind["intervalTypeBase"] = "intervalTypeBase";
        SyntaxKind["dataTypeBase"] = "dataTypeBase";
        SyntaxKind["keywordsCanBeId"] = "keywordsCanBeId";
        SyntaxKind["functionNameBase"] = "functionNameBase";
        SyntaxKind["charsetName"] = "charsetName";
        SyntaxKind["collationName"] = "collationName";
        SyntaxKind["createDatabaseOption"] = "createDatabaseOption";
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
            }) || this;
            _this.RULE('root', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.sqlStatements);
                });
                _this.CONSUME(lexer_g_1.Tokens.MINUSMINUS);
            });
            _this.RULE('sqlStatements', function () {
                _this.MANY(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.sqlStatement);
                                _this.OPTION(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.MINUSMINUS);
                                });
                                _this.CONSUME(lexer_g_1.Tokens.SEMI);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.emptyStatement);
                            },
                        },
                    ]);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.sqlStatement);
                            _this.OPTION2(function () {
                                _this.OPTION3(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.MINUSMINUS);
                                });
                                _this.CONSUME2(lexer_g_1.Tokens.SEMI);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.emptyStatement);
                        },
                    },
                ]);
            });
            _this.RULE('emptyStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.SEMI);
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
                ]);
            });
            _this.RULE('ddlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createDatabase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTable);
                        },
                    },
                ]);
            });
            _this.RULE('dmlStatement', function () {
                _this.SUBRULE(_this.selectStatement);
            });
            _this.RULE('createDatabase', function () {
                _this.CONSUME(lexer_g_1.Tokens.CREATE);
                _this.OR([
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
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.SUBRULE(_this.createDatabaseOption);
                });
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
                _this.CONSUME(lexer_g_1.Tokens.LIKE);
                _this.SUBRULE2(_this.tableName);
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
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecificationNointo);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.unionStatement);
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.UNION);
                                _this.OPTION4(function () {
                                    _this.OR([
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
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE2(_this.querySpecification);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE2(_this.queryExpression);
                                        },
                                    },
                                ]);
                            });
                            _this.OPTION5(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION6(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                            _this.OPTION7(function () {
                                _this.SUBRULE3(_this.lockClause);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpressionNointo);
                            _this.AT_LEAST_ONE2(function () {
                                _this.SUBRULE(_this.unionParenthesis);
                            });
                            _this.OPTION8(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.UNION);
                                _this.OPTION9(function () {
                                    _this.OR([
                                        {
                                            ALT: function () {
                                                _this.CONSUME2(lexer_g_1.Tokens.ALL);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME2(lexer_g_1.Tokens.DISTINCT);
                                            },
                                        },
                                    ]);
                                });
                                _this.SUBRULE3(_this.queryExpression);
                            });
                            _this.OPTION10(function () {
                                _this.SUBRULE2(_this.orderByClause);
                            });
                            _this.OPTION11(function () {
                                _this.SUBRULE2(_this.limitClause);
                            });
                            _this.OPTION12(function () {
                                _this.SUBRULE4(_this.lockClause);
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
            _this.RULE('unionStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.OR([
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecificationNointo);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpressionNointo);
                        },
                    },
                ]);
            });
            _this.RULE('unionParenthesis', function () {
                _this.CONSUME(lexer_g_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.OR([
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
                _this.SUBRULE(_this.queryExpressionNointo);
            });
            _this.RULE('queryExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.querySpecification);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.queryExpression);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('queryExpressionNointo', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.querySpecificationNointo);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.queryExpressionNointo);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
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
            _this.RULE('querySpecification', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SELECT);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.selectSpec);
                            });
                            _this.SUBRULE(_this.selectElements);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.selectIntoExpression);
                            });
                            _this.OPTION2(function () {
                                _this.SUBRULE(_this.fromClause);
                            });
                            _this.OPTION3(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION4(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.SELECT);
                            _this.MANY2(function () {
                                _this.SUBRULE2(_this.selectSpec);
                            });
                            _this.SUBRULE2(_this.selectElements);
                            _this.OPTION5(function () {
                                _this.SUBRULE2(_this.fromClause);
                            });
                            _this.OPTION6(function () {
                                _this.SUBRULE2(_this.orderByClause);
                            });
                            _this.OPTION7(function () {
                                _this.SUBRULE2(_this.limitClause);
                            });
                            _this.OPTION8(function () {
                                _this.SUBRULE2(_this.selectIntoExpression);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('limitClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.LIMIT);
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.decimalLiteral);
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                            });
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.decimalLiteral);
                            _this.CONSUME(lexer_g_1.Tokens.OFFSET);
                            _this.SUBRULE4(_this.decimalLiteral);
                        },
                    },
                ]);
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
                        _this.CONSUME(lexer_g_1.Tokens.ADD);
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
            _this.RULE('groupByItem', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.OR([
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
            _this.RULE('orderByClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.ORDER);
                _this.CONSUME(lexer_g_1.Tokens.BY);
                _this.SUBRULE(_this.orderByExpression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.orderByExpression);
                });
            });
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.tableSource);
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
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE2(_this.tableSourceItem);
                            _this.MANY2(function () {
                                _this.SUBRULE2(_this.joinPart);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('joinPart', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.OR([
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
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.ON);
                                            _this.SUBRULE(_this.expression);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.USING);
                                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                                            _this.SUBRULE(_this.uidList);
                                            _this.CONSUME(lexer_g_1.Tokens.ADD);
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
                            _this.OR([
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
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.ON);
                                        _this.SUBRULE3(_this.expression);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.USING);
                                        _this.CONSUME2(lexer_g_1.Tokens.ADD);
                                        _this.SUBRULE2(_this.uidList);
                                        _this.CONSUME2(lexer_g_1.Tokens.ADD);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NATURAL);
                            _this.OPTION5(function () {
                                _this.OR([
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
            _this.RULE('uidList', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.uid);
                });
            });
            _this.RULE('indexHint', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.USE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IGNORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FORCE);
                        },
                    },
                ]);
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEY);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.FOR);
                    _this.SUBRULE(_this.indexHintType);
                });
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.SUBRULE(_this.uidList);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
            });
            _this.RULE('indexHintType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ORDER);
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GROUP);
                            _this.CONSUME2(lexer_g_1.Tokens.BY);
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
                                _this.CONSUME(lexer_g_1.Tokens.PARTITION);
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE(_this.uidList);
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                            });
                            _this.OPTION2(function () {
                                _this.OPTION3(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION4(function () {
                                _this.SUBRULE(_this.indexHint);
                                _this.MANY(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                                    _this.SUBRULE2(_this.indexHint);
                                });
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.ADD);
                                        _this.SUBRULE2(_this.selectStatement);
                                        _this.CONSUME2(lexer_g_1.Tokens.ADD);
                                    },
                                },
                            ]);
                            _this.OPTION5(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.AS);
                            });
                            _this.SUBRULE2(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.tableSources);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('selectIntoExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTO);
                            _this.SUBRULE(_this.assignmentField);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
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
                                _this.OR([
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
            _this.RULE('selectSpec', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
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
                            _this.OR([
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
            _this.RULE('selectElements', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectElement);
                        },
                    },
                ]);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.selectElement);
                });
            });
            _this.RULE('selectElement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
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
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                            _this.OPTION3(function () {
                                _this.OPTION4(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE2(_this.uid);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION5(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LOCAL_ID);
                                _this.CONSUME(lexer_g_1.Tokens.VAR_ASSIGN);
                            });
                            _this.SUBRULE(_this.expression);
                            _this.OPTION6(function () {
                                _this.OPTION7(function () {
                                    _this.CONSUME3(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE3(_this.uid);
                            });
                        },
                    },
                ]);
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
                            _this.SUBRULE(_this.aggregateWindowedFunction);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.scalarFunctionName);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.functionArgs);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.OPTION2(function () {
                                _this.SUBRULE2(_this.functionArgs);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.passwordFunctionClause);
                        },
                    },
                ]);
            });
            _this.RULE('passwordFunctionClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PASSWORD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OLD_PASSWORD);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.SUBRULE(_this.functionArg);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
            });
            _this.RULE('scalarFunctionName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionNameBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASCII);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CURDATE);
                        },
                    },
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
                            _this.CONSUME(lexer_g_1.Tokens.CURTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE_ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE_SUB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSERT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCALTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCALTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NOW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLACE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBSTR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBSTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SYSDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRIM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTC_DATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTC_TIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTC_TIMESTAMP);
                        },
                    },
                ]);
            });
            _this.RULE('expression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NOT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ADD);
                                    },
                                },
                            ]);
                            _this.SUBRULE(_this.expression);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.expression);
                            _this.SUBRULE(_this.logicalOperator);
                            _this.SUBRULE3(_this.expression);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.CONSUME(lexer_g_1.Tokens.IS);
                            _this.OPTION(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.NOT);
                            });
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
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.UNKNOWN);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.predicate);
                        },
                    },
                ]);
            });
            _this.RULE('predicate', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.expressions);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.predicate);
                            _this.CONSUME(lexer_g_1.Tokens.IS);
                            _this.SUBRULE(_this.nullNotnull);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.predicate);
                            _this.SUBRULE(_this.comparisonOperator);
                            _this.SUBRULE4(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE5(_this.predicate);
                            _this.SUBRULE2(_this.comparisonOperator);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ALL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ANY);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SOME);
                                    },
                                },
                            ]);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE2(_this.selectStatement);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE6(_this.predicate);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.BETWEEN);
                            _this.SUBRULE7(_this.predicate);
                            _this.CONSUME(lexer_g_1.Tokens.AND);
                            _this.SUBRULE8(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE9(_this.predicate);
                            _this.CONSUME(lexer_g_1.Tokens.SOUNDS);
                            _this.CONSUME(lexer_g_1.Tokens.LIKE);
                            _this.SUBRULE10(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE11(_this.predicate);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.LIKE);
                            _this.SUBRULE12(_this.predicate);
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ESCAPE);
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE13(_this.predicate);
                            _this.OPTION5(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.NOT);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.REGEXP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.RLIKE);
                                    },
                                },
                            ]);
                            _this.SUBRULE14(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION6(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LOCAL_ID);
                                _this.CONSUME(lexer_g_1.Tokens.VAR_ASSIGN);
                            });
                            _this.SUBRULE(_this.expressionAtom);
                        },
                    },
                ]);
            });
            _this.RULE('nullNotnull', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.NOT);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NULL_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NULL_SPEC_LITERAL);
                        },
                    },
                ]);
            });
            _this.RULE('aggregateWindowedFunction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.AVG);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.MAX);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.MIN);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SUM);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.OR([
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
                            _this.SUBRULE(_this.functionArg);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COUNT);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ADD);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.OPTION2(function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.ALL);
                                        });
                                        _this.SUBRULE2(_this.functionArg);
                                    },
                                },
                            ]);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.COUNT);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.DISTINCT);
                            _this.SUBRULE(_this.functionArgs);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.BIT_AND);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.BIT_OR);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.BIT_XOR);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.STD);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.STDDEV);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.STDDEV_POP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.STDDEV_SAMP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VAR_POP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VAR_SAMP);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VARIANCE);
                                    },
                                },
                            ]);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.ALL);
                            });
                            _this.SUBRULE3(_this.functionArg);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GROUP_CONCAT);
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                            _this.OPTION4(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.DISTINCT);
                            });
                            _this.SUBRULE2(_this.functionArgs);
                            _this.OPTION5(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ORDER);
                                _this.CONSUME(lexer_g_1.Tokens.BY);
                                _this.SUBRULE(_this.orderByExpression);
                                _this.MANY(function () {
                                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                                    _this.SUBRULE2(_this.orderByExpression);
                                });
                            });
                            _this.OPTION6(function () {
                                _this.CONSUME(lexer_g_1.Tokens.SEPARATOR);
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('orderByExpression', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.OR([
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
            _this.RULE('specificFunction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
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
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.convertedDataType);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.CONVERT);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE2(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.USING);
                            _this.SUBRULE(_this.charsetName);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CAST);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE3(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.AS);
                            _this.SUBRULE2(_this.convertedDataType);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CASE);
                            _this.SUBRULE4(_this.expression);
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
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAR);
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.functionArgs);
                            _this.OPTION3(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.USING);
                                _this.SUBRULE2(_this.charsetName);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POSITION);
                            _this.CONSUME6(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE5(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE6(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME6(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SUBSTR);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SUBSTRING);
                                    },
                                },
                            ]);
                            _this.CONSUME7(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE3(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE7(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.decimalLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE8(_this.expression);
                                    },
                                },
                            ]);
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.FOR);
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE2(_this.decimalLiteral);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE9(_this.expression);
                                        },
                                    },
                                ]);
                            });
                            _this.CONSUME7(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME8(lexer_g_1.Tokens.ADD);
                            _this.OR([
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
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE4(_this.stringLiteral);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE10(_this.expression);
                                        },
                                    },
                                ]);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE5(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE11(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME8(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME9(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE6(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE12(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME3(lexer_g_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE7(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE13(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME9(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEIGHT_STRING);
                            _this.CONSUME10(lexer_g_1.Tokens.ADD);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE8(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE14(_this.expression);
                                    },
                                },
                            ]);
                            _this.OPTION6(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.AS);
                                _this.OR([
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
                                _this.CONSUME11(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE3(_this.decimalLiteral);
                                _this.CONSUME10(lexer_g_1.Tokens.ADD);
                            });
                            _this.OPTION7(function () {
                                _this.SUBRULE(_this.levelsInWeightString);
                            });
                            _this.CONSUME11(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTRACT);
                            _this.CONSUME12(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.intervalType);
                            _this.CONSUME4(lexer_g_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE9(_this.stringLiteral);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE15(_this.expression);
                                    },
                                },
                            ]);
                            _this.CONSUME12(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GET_FORMAT);
                            _this.CONSUME13(lexer_g_1.Tokens.ADD);
                            _this.OR([
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
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE10(_this.stringLiteral);
                            _this.CONSUME13(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('convertedDataType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
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
                                _this.SUBRULE(_this.charsetName);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR([
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
                            _this.OR([
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
            _this.RULE('lengthOneDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
            });
            _this.RULE('lengthTwoDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
                _this.SUBRULE2(_this.decimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.ADD);
            });
            _this.RULE('levelsInWeightString', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.levelInWeightListElement);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE2(_this.levelInWeightListElement);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.decimalLiteral);
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('levelInWeightListElement', function () {
                _this.SUBRULE(_this.decimalLiteral);
                _this.OPTION(function () {
                    _this.OR([
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
            _this.RULE('caseFuncAlternative', function () {
                _this.CONSUME(lexer_g_1.Tokens.WHEN);
                _this.SUBRULE(_this.functionArg);
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE2(_this.functionArg);
            });
            _this.RULE('functionArg', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        },
                    },
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
            _this.RULE('functionArgs', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        },
                    },
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
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.constant);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.fullColumnName);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.functionCall);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.expression);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('comparisonOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('expressionAtom', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expressionAtom);
                            _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                            _this.SUBRULE(_this.collationName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.mysqlVariable);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.unaryOperator);
                            _this.SUBRULE2(_this.expressionAtom);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                            _this.SUBRULE3(_this.expressionAtom);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.expression);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE2(_this.expression);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE3(_this.expression);
                            _this.AT_LEAST_ONE(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE4(_this.expression);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXISTS);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.selectStatement);
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE2(_this.selectStatement);
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTERVAL);
                            _this.SUBRULE5(_this.expression);
                            _this.SUBRULE(_this.intervalType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE4(_this.expressionAtom);
                            _this.SUBRULE(_this.bitOperator);
                            _this.SUBRULE5(_this.expressionAtom);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE6(_this.expressionAtom);
                            _this.SUBRULE(_this.mathOperator);
                            _this.SUBRULE7(_this.expressionAtom);
                        },
                    },
                ]);
            });
            _this.RULE('bitOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
            });
            _this.RULE('mathOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIV);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MOD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
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
            _this.RULE('unaryOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NOT);
                        },
                    },
                ]);
            });
            _this.RULE('mysqlVariable', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCAL_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GLOBAL_ID);
                        },
                    },
                ]);
            });
            _this.RULE('constant', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stringLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.hexadecimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.booleanLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REAL_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NULL_LITERAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NULL_SPEC_LITERAL);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('stringLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.OPTION(function () {
                                            _this.CONSUME(lexer_g_1.Tokens.STRING_CHARSET_NAME);
                                        });
                                        _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.START_NATIONAL_STRING_LITERAL);
                                    },
                                },
                            ]);
                            _this.AT_LEAST_ONE(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.OPTION2(function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.STRING_CHARSET_NAME);
                                        });
                                        _this.CONSUME3(lexer_g_1.Tokens.STRING_LITERAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.START_NATIONAL_STRING_LITERAL);
                                    },
                                },
                            ]);
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                                _this.SUBRULE(_this.collationName);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('decimalLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DECIMAL_LITERAL);
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TWO_DECIMAL);
                        },
                    },
                ]);
            });
            _this.RULE('booleanLiteral', function () {
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
            _this.RULE('hexadecimalLiteral', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.STRING_CHARSET_NAME);
                });
                _this.CONSUME(lexer_g_1.Tokens.HEXADECIMAL_LITERAL);
            });
            _this.RULE('expressions', function () {
                _this.SUBRULE(_this.expression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.ADD);
                    _this.SUBRULE2(_this.expression);
                });
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
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
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
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                        },
                    },
                ]);
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
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.SUBRULE(_this.uid);
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
            _this.RULE('fullId', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOT_ID);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                                _this.SUBRULE2(_this.uid);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('ifNotExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.CONSUME(lexer_g_1.Tokens.NOT);
                _this.CONSUME(lexer_g_1.Tokens.EXISTS);
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.charsetNameBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.transactionLevelBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.engineName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.privilegesBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.intervalTypeBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataTypeBase);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.keywordsCanBeId);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionNameBase);
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
            _this.RULE('transactionLevelBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPEATABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMITTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNCOMMITTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SERIALIZABLE);
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
            _this.RULE('privilegesBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROUTINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXECUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROCESS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RELOAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHUTDOWN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUPER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PRIVILEGES);
                        },
                    },
                ]);
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
            _this.RULE('dataTypeBase', function () {
                _this.OR([
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
                            _this.CONSUME(lexer_g_1.Tokens.YEAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENUM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEXT);
                        },
                    },
                ]);
            });
            _this.RULE('keywordsCanBeId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ACCOUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ACTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AFTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AGGREGATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ALGORITHM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ANY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTHORS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTOCOMMIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTOEXTEND_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTO_INCREMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AVG_ROW_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BEGIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINLOG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BLOCK);
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BTREE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CASCADED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHANNEL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHECKSUM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CIPHER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CLIENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COALESCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CODE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLUMNS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLUMN_FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPACT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPLETION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPRESSED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPRESSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONCURRENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONNECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONSISTENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONTAINS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONTRIBUTORS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COPY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CPU);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATAFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEALLOCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT_AUTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFINER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DELAY_KEY_WRITE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISCARD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DUMPFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DUPLICATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DYNAMIC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENCRYPTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENGINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENGINES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ERROR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ERRORS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ESCAPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EVEN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EVENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EVENTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EVERY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXCHANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXCLUSIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXPIRE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTENT_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FAULTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIELDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FILE_BLOCK_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FILTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIXED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FOLLOWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FUNCTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GLOBAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GRANTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GROUP_REPLICATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HASH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IDENTIFIED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IGNORE_SERVER_IDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IMPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEXES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INITIAL_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INPLACE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSERT_METHOD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSTANCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INVOKER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IO_THREAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IPC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISOLATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISSUER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEY_BLOCK_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LANGUAGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LAST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEAVES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LESS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEVEL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LIST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOGFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOGS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_AUTO_POSITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_CONNECT_RETRY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_DELAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_HEARTBEAT_PERIOD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_HOST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_LOG_FILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_LOG_POS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_PASSWORD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_PORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_RETRY_COUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CAPATH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CERT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CIPHER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CRL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_CRLPATH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_SSL_KEY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_TLS_VERSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_USER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_CONNECTIONS_PER_HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_QUERIES_PER_HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_ROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_UPDATES_PER_HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_USER_CONNECTIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MEMORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MERGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MIGRATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MIN_ROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MODIFY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MUTEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MYSQL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NAMES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NCHAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NEVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NODEGROUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NONE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OFFLINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OFFSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OJ);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OLD_PASSWORD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ONE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ONLINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ONLY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OPTIMIZER_COSTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OPTIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OWNER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PACK_KEYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PAGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARSER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTIAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PASSWORD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PHASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PLUGINS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PLUGIN_DIR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PRECEDES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PREPARE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PRESERVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PREV);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROCESSLIST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROFILES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROXY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.QUERY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.QUICK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REBUILD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RECOVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REDO_BUFFER_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REDUNDANT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RELAYLOG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RELAY_LOG_FILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RELAY_LOG_POS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REMOVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REORGANIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPAIR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_DO_DB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_DO_TABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_IGNORE_DB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_IGNORE_TABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_REWRITE_DB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_WILD_DO_TABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATE_WILD_IGNORE_TABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPLICATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RESUME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RETURNS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROLLBACK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROLLUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROTATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW_FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SAVEPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SCHEDULE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SECURITY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SERVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SESSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHARE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHARED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SIGNED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SIMPLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SLAVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SNAPSHOT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOCKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOUNDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOURCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_AFTER_GTIDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_AFTER_MTS_GAPS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_BEFORE_GTIDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_BUFFER_RESULT);
                        },
                    },
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_THREAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.START);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STARTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATS_AUTO_RECALC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATS_PERSISTENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATS_SAMPLE_PAGES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STOP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STORAGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBJECT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBPARTITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBPARTITIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUSPEND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SWAPS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SWITCHES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLESPACE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEMPORARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEMPTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.THAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRANSACTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRUNCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNDEFINED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNDOFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNDO_BUFFER_SIZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNKNOWN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UPGRADE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.USER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALIDATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VARIABLES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VIEW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WAIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WARNINGS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WITHOUT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WORK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WRAPPER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.X509);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.XA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.XML);
                        },
                    },
                ]);
            });
            _this.RULE('functionNameBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ABS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ACOS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADDDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADDTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AES_DECRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AES_ENCRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AREA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASWKT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASYMMETRIC_DECRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASYMMETRIC_DERIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASYMMETRIC_ENCRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASYMMETRIC_SIGN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ASYMMETRIC_VERIFY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ATAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ATAN2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BENCHMARK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_COUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BUFFER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CEIL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CEILING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CENTROID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARACTER_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHAR_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COERCIBILITY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLLATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPRESS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONCAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONCAT_WS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONNECTION_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONV);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONVERT_TZ);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CRC32);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CREATE_ASYMMETRIC_PUB_KEY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CREATE_DH_PARAMETERS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CREATE_DIGEST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CROSSES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATEDIFF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATE_FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAYNAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAYOFMONTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAYOFWEEK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DAYOFYEAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DECODE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEGREES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DES_DECRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DES_ENCRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIMENSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISJOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ELT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENCODE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENCRYPT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENDPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENVELOPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EQUALS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXPORT_SET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTERIORRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTRACTVALUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIELD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIND_IN_SET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FLOOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FOUND_ROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FROM_BASE64);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FROM_DAYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FROM_UNIXTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMCOLLFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMCOLLFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYCOLLECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYCOLLECTIONFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYCOLLECTIONFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMETRYTYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GEOMFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GET_FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GET_LOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GLENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GREATEST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GTID_SUBSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GTID_SUBTRACT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOUR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IFNULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INET6_ATON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INET6_NTOA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INET_ATON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INET_NTOA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSTR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTERIORRINGN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTERSECTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISCLOSED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISEMPTY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISNULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ISSIMPLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_FREE_LOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_IPV4);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_IPV4_COMPAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_IPV4_MAPPED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_IPV6);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS_USED_LOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LAST_INSERT_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LCASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEAST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEFT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINEFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINEFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINESTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINESTRINGFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINESTRINGFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOAD_FILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOG10);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOG2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOWER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LPAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LTRIM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAKEDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAKETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAKE_SET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MASTER_POS_WAIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBRCONTAINS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBRDISJOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBREQUAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBRINTERSECTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBROVERLAPS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBRTOUCHES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MBRWITHIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MD5);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MICROSECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MLINEFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MLINEFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MONTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MONTHNAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MPOINTFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MPOINTFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MPOLYFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MPOLYFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTILINESTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTILINESTRINGFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTILINESTRINGFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOINTFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOINTFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOLYGON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOLYGONFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MULTIPOLYGONFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NAME_CONST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NULLIF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NUMGEOMETRIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NUMINTERIORRINGS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NUMPOINTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OCT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OCTET_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ORD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OVERLAPS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PERIOD_ADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PERIOD_DIFF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PI);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POINTFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POINTFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POINTN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYGON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYGONFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POLYGONFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POSITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POWER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.QUARTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.QUOTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RADIANS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RAND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RANDOM_BYTES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RELEASE_LOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REVERSE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RIGHT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROUND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW_COUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RPAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RTRIM);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SECOND);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SEC_TO_TIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SESSION_USER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHA1);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHA2);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SIGN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SLEEP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOUNDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SQRT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SRID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STARTPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRCMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STR_TO_DATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_AREA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ASBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ASTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ASWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ASWKT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_BUFFER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_CENTROID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_CONTAINS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_CROSSES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_DIFFERENCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_DIMENSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_DISJOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_DISTANCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ENDPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ENVELOPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_EQUALS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_EXTERIORRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMCOLLFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMCOLLFROMTXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMCOLLFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMETRYTYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_GEOMFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_INTERIORRINGN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_INTERSECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_INTERSECTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ISCLOSED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ISEMPTY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_ISSIMPLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_LINEFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_LINEFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_LINESTRINGFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_LINESTRINGFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_NUMGEOMETRIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_NUMINTERIORRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_NUMINTERIORRINGS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_NUMPOINTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_OVERLAPS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POINTFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POINTFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POINTN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POLYFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POLYFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POLYGONFROMTEXT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_POLYGONFROMWKB);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_SRID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_STARTPOINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_SYMDIFFERENCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_TOUCHES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_UNION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_WITHIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_X);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ST_Y);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBSTRING_INDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SYSTEM_USER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMEDIFF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMESTAMPADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIMESTAMPDIFF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIME_FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TIME_TO_SEC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TOUCHES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TO_BASE64);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TO_DAYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TO_SECONDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UCASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNCOMPRESS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNCOMPRESSED_LENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNHEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNIX_TIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UPDATEXML);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UPPER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UUID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UUID_SHORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALIDATE_PASSWORD_STRENGTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VERSION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEEK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEEKDAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEEKOFYEAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEIGHT_STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WITHIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEARWEEK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.Y_FUNCTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.X_FUNCTION);
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
            _this.RULE('createDatabaseOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                            _this.CONSUME(lexer_g_1.Tokens.SET);
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                            });
                            _this.SUBRULE(_this.charsetName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION3(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                            _this.OPTION4(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            });
                            _this.SUBRULE(_this.collationName);
                        },
                    },
                ]);
            });
            chevrotain.Parser.performSelfAnalysis(_this);
            return _this;
        }
        return Parser;
    }(chevrotain.Parser));
    exports.Parser = Parser;
});
//# sourceMappingURL=parser.g.js.map