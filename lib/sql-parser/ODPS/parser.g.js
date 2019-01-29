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
        SyntaxKind["dmlStatement"] = "dmlStatement";
        SyntaxKind["ddlStatement"] = "ddlStatement";
        SyntaxKind["showTable"] = "showTable";
        SyntaxKind["createTable"] = "createTable";
        SyntaxKind["dropTable"] = "dropTable";
        SyntaxKind["describeStatement"] = "describeStatement";
        SyntaxKind["describeObjectClause"] = "describeObjectClause";
        SyntaxKind["partitionDefinitions"] = "partitionDefinitions";
        SyntaxKind["engineName"] = "engineName";
        SyntaxKind["fileSizeLiteral"] = "fileSizeLiteral";
        SyntaxKind["tableOption"] = "tableOption";
        SyntaxKind["tableOption1"] = "tableOption1";
        SyntaxKind["tableOption2"] = "tableOption2";
        SyntaxKind["tableOption3"] = "tableOption3";
        SyntaxKind["tableOption4"] = "tableOption4";
        SyntaxKind["tableOption5"] = "tableOption5";
        SyntaxKind["tablespaceStorage"] = "tablespaceStorage";
        SyntaxKind["tables"] = "tables";
        SyntaxKind["ifNotExists"] = "ifNotExists";
        SyntaxKind["createDefinitions"] = "createDefinitions";
        SyntaxKind["createDefinition"] = "createDefinition";
        SyntaxKind["columnDefinition"] = "columnDefinition";
        SyntaxKind["columnConstraint"] = "columnConstraint";
        SyntaxKind["nullNotnull"] = "nullNotnull";
        SyntaxKind["defaultValue"] = "defaultValue";
        SyntaxKind["lengthOneDimension"] = "lengthOneDimension";
        SyntaxKind["lengthTwoDimension"] = "lengthTwoDimension";
        SyntaxKind["lengthTwoOptionalDimension"] = "lengthTwoOptionalDimension";
        SyntaxKind["dataType"] = "dataType";
        SyntaxKind["dataType1"] = "dataType1";
        SyntaxKind["dataType2"] = "dataType2";
        SyntaxKind["dataType3"] = "dataType3";
        SyntaxKind["dataType4"] = "dataType4";
        SyntaxKind["dataType5"] = "dataType5";
        SyntaxKind["dataType6"] = "dataType6";
        SyntaxKind["dataType7"] = "dataType7";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["updateStatement"] = "updateStatement";
        SyntaxKind["insertStatement"] = "insertStatement";
        SyntaxKind["partitionInsertDefinitions"] = "partitionInsertDefinitions";
        SyntaxKind["deleteStatement"] = "deleteStatement";
        SyntaxKind["singleDeleteStatement"] = "singleDeleteStatement";
        SyntaxKind["singleUpdateStatement"] = "singleUpdateStatement";
        SyntaxKind["updatedElement"] = "updatedElement";
        SyntaxKind["insertStatementValue"] = "insertStatementValue";
        SyntaxKind["expressionsWithDefaults"] = "expressionsWithDefaults";
        SyntaxKind["expressionOrDefault"] = "expressionOrDefault";
        SyntaxKind["uidList"] = "uidList";
        SyntaxKind["logicalOperator"] = "logicalOperator";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["querySpecificationNointo"] = "querySpecificationNointo";
        SyntaxKind["unionStatement"] = "unionStatement";
        SyntaxKind["unionParenthesis"] = "unionParenthesis";
        SyntaxKind["selectIntoExpression"] = "selectIntoExpression";
        SyntaxKind["charsetName"] = "charsetName";
        SyntaxKind["assignmentField"] = "assignmentField";
        SyntaxKind["selectFieldsInto"] = "selectFieldsInto";
        SyntaxKind["selectLinesInto"] = "selectLinesInto";
        SyntaxKind["queryExpressionNointo"] = "queryExpressionNointo";
        SyntaxKind["queryExpression"] = "queryExpression";
        SyntaxKind["selectSpec"] = "selectSpec";
        SyntaxKind["orderByClause"] = "orderByClause";
        SyntaxKind["orderByExpression"] = "orderByExpression";
        SyntaxKind["limitClause"] = "limitClause";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["expressionRecursionPart"] = "expressionRecursionPart";
        SyntaxKind["predicate"] = "predicate";
        SyntaxKind["predicateReplace"] = "predicateReplace";
        SyntaxKind["expressionAtom"] = "expressionAtom";
        SyntaxKind["expressions"] = "expressions";
        SyntaxKind["constant"] = "constant";
        SyntaxKind["stringLiteral"] = "stringLiteral";
        SyntaxKind["hexadecimalLiteral"] = "hexadecimalLiteral";
        SyntaxKind["booleanLiteral"] = "booleanLiteral";
        SyntaxKind["collationName"] = "collationName";
        SyntaxKind["decimalLiteral"] = "decimalLiteral";
        SyntaxKind["comparisonOperator"] = "comparisonOperator";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["whereClause"] = "whereClause";
        SyntaxKind["groupClause"] = "groupClause";
        SyntaxKind["havingClause"] = "havingClause";
        SyntaxKind["groupByItem"] = "groupByItem";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["joinPart"] = "joinPart";
        SyntaxKind["tableSourceItem"] = "tableSourceItem";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["selectElement"] = "selectElement";
        SyntaxKind["functionCall"] = "functionCall";
        SyntaxKind["customFunction"] = "customFunction";
        SyntaxKind["functionArgs"] = "functionArgs";
        SyntaxKind["scalarFunctionName"] = "scalarFunctionName";
        SyntaxKind["commonFunctionNamePart1"] = "commonFunctionNamePart1";
        SyntaxKind["commonFunctionNamePart2"] = "commonFunctionNamePart2";
        SyntaxKind["specificFunction"] = "specificFunction";
        SyntaxKind["levelsInWeightString"] = "levelsInWeightString";
        SyntaxKind["levelInWeightListElement"] = "levelInWeightListElement";
        SyntaxKind["intervalTypeBase"] = "intervalTypeBase";
        SyntaxKind["intervalType"] = "intervalType";
        SyntaxKind["convertedDataType"] = "convertedDataType";
        SyntaxKind["ifExists"] = "ifExists";
        SyntaxKind["caseFuncAlternative"] = "caseFuncAlternative";
        SyntaxKind["functionArg"] = "functionArg";
        SyntaxKind["fullColumnName"] = "fullColumnName";
        SyntaxKind["dottedId"] = "dottedId";
        SyntaxKind["fullId"] = "fullId";
        SyntaxKind["uid"] = "uid";
        SyntaxKind["alterTable"] = "alterTable";
        SyntaxKind["alterSpecification"] = "alterSpecification";
        SyntaxKind["indexType"] = "indexType";
        SyntaxKind["indexColumnNames"] = "indexColumnNames";
        SyntaxKind["indexColumnName"] = "indexColumnName";
        SyntaxKind["indexOption"] = "indexOption";
        SyntaxKind["referenceDefinition"] = "referenceDefinition";
        SyntaxKind["referenceAction"] = "referenceAction";
        SyntaxKind["referenceControlType"] = "referenceControlType";
        SyntaxKind["partitionDefinition"] = "partitionDefinition";
        SyntaxKind["partitionDefinerAtom"] = "partitionDefinerAtom";
        SyntaxKind["partitionOption"] = "partitionOption";
        SyntaxKind["subpartitionDefinition"] = "subpartitionDefinition";
        SyntaxKind["partitionDefinerVector"] = "partitionDefinerVector";
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
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.describeStatement);
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
                ]);
            });
            _this.RULE('showTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.SHOW);
                _this.SUBRULE(_this.tableName);
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
            _this.RULE('dropTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.DROP);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.TEMPORARY);
                });
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.tables);
                _this.OPTION3(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.RESTRICT);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.CASCADE);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('describeStatement', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXPLAIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DESCRIBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DESC);
                        },
                    },
                ]);
                _this.OR3([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.OR4([
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
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR5([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.EXTENDED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.PARTITIONS);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FORMAT);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            _this.OPTION2(function () {
                                _this.OR6([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.TRADITIONAL);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.JSON);
                                        },
                                    },
                                ]);
                            });
                            _this.SUBRULE(_this.describeObjectClause);
                        },
                    },
                ]);
            });
            _this.RULE('describeObjectClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.deleteStatement);
                                    },
                                },
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
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FOR);
                            _this.CONSUME(lexer_g_1.Tokens.CONNECTION);
                            _this.SUBRULE(_this.uid);
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
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.createDefinitions);
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
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
            _this.RULE('fileSizeLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FILESIZE_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
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
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.engineName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AUTO_INCREMENT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AVG_ROW_LENGTH);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE2(_this.decimalLiteral);
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
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.charsetName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHECKSUM);
                            _this.OPTION6(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME6(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPRESSION);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONNECTION);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME3(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATA);
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION4(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DELAY_KEY_WRITE);
                            _this.OPTION5(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME6(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEX);
                            _this.CONSUME2(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION7(function () {
                                _this.CONSUME7(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.fileSizeLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_ROWS);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MIN_ROWS);
                            _this.OPTION4(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PACK_KEYS);
                            _this.OPTION5(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROW_FORMAT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
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
                            _this.CONSUME(lexer_g_1.Tokens.DECIMAL_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNION);
                            _this.OPTION4(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.tables);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
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
            _this.RULE('ifNotExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.CONSUME(lexer_g_1.Tokens.NOT);
                _this.CONSUME(lexer_g_1.Tokens.EXISTS);
            });
            _this.RULE('createDefinitions', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.createDefinition);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.createDefinition);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
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
                            _this.SUBRULE(_this.nullNotnull);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                            _this.SUBRULE(_this.defaultValue);
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
            _this.RULE('nullNotnull', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.NOT);
                });
                _this.OR2([
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
            _this.RULE('defaultValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CURRENT_TIMESTAMP);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ON);
                                _this.CONSUME(lexer_g_1.Tokens.UPDATE);
                                _this.CONSUME(lexer_g_1.Tokens.LOCALTIMESTAMP);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('lengthOneDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.decimalLiteral);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            _this.RULE('lengthTwoDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                _this.SUBRULE2(_this.decimalLiteral);
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            _this.RULE('lengthTwoOptionalDimension', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.decimalLiteral);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.decimalLiteral);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
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
                    _this.SUBRULE(_this.charsetName);
                });
                _this.OPTION4(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COLLATE);
                    _this.SUBRULE(_this.collationName);
                });
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
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.BINARY);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.CHARACTER);
                    _this.CONSUME2(lexer_g_1.Tokens.SET);
                    _this.SUBRULE(_this.charsetName);
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
                                _this.OPTION2(function () {
                                    _this.SUBRULE(_this.orderByClause);
                                });
                                _this.OPTION3(function () {
                                    _this.SUBRULE(_this.limitClause);
                                });
                            });
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
                    _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
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
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            _this.SUBRULE(_this.constant);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                ]);
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
            _this.RULE('querySpecification', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.MANY(function () {
                    _this.SUBRULE(_this.selectSpec);
                });
                _this.SUBRULE(_this.selectElements);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.selectIntoExpression);
                });
                _this.SUBRULE(_this.fromClause);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.limitClause);
                });
            });
            _this.RULE('querySpecificationNointo', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.MANY(function () {
                    _this.SUBRULE(_this.selectSpec);
                });
                _this.SUBRULE(_this.selectElements);
                _this.SUBRULE(_this.fromClause);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION2(function () {
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
                _this.SUBRULE(_this.queryExpressionNointo);
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
            _this.RULE('charsetName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARSET_NAME_L);
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
            _this.RULE('queryExpressionNointo', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.querySpecificationNointo);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.queryExpressionNointo);
                            _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                ]);
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
                            _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.queryExpression);
                            _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                ]);
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
            _this.RULE('limitClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.LIMIT);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.decimalLiteral);
                });
                _this.CONSUME(lexer_g_1.Tokens.OFFSET);
                _this.AT_LEAST_ONE2(function () {
                    _this.SUBRULE2(_this.decimalLiteral);
                });
            });
            _this.RULE('expression', function () {
                _this.SUBRULE(_this.expressionRecursionPart);
                _this.MANY(function () {
                    _this.SUBRULE(_this.logicalOperator);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('expressionRecursionPart', function () {
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.EXCLAMATION_SYMBOL);
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.predicate);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.IS);
                    _this.OPTION3(function () {
                        _this.CONSUME2(lexer_g_1.Tokens.NOT);
                    });
                    _this.OR3([
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
                });
            });
            _this.RULE('predicate', function () {
                _this.SUBRULE(_this.expressionAtom);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.predicateReplace);
                });
            });
            _this.RULE('predicateReplace', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.comparisonOperator);
                            _this.SUBRULE(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS);
                            _this.SUBRULE(_this.nullNotnull);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.OR2([
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
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.BETWEEN);
                            _this.SUBRULE2(_this.predicate);
                            _this.CONSUME(lexer_g_1.Tokens.AND);
                            _this.SUBRULE3(_this.predicate);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.NOT);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.LIKE);
                            _this.SUBRULE4(_this.predicate);
                            _this.OPTION4(function () {
                                _this.CONSUME(lexer_g_1.Tokens.ESCAPE);
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SOUNDS);
                            _this.CONSUME2(lexer_g_1.Tokens.LIKE);
                            _this.SUBRULE5(_this.predicate);
                        },
                    },
                ]);
            });
            _this.RULE('expressionAtom', function () {
                _this.SUBRULE(_this.fullColumnName);
            });
            _this.RULE('expressions', function () {
                _this.SUBRULE(_this.expression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.expression);
                });
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
                            _this.OR2([
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
                            _this.OR2([
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
                            _this.OR3([
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
            _this.RULE('hexadecimalLiteral', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.STRING_CHARSET_NAME);
                });
                _this.CONSUME(lexer_g_1.Tokens.HEXADECIMAL_LITERAL);
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
            _this.RULE('comparisonOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LESS_SYMBOL);
                            _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            _this.CONSUME(lexer_g_1.Tokens.GREATER_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LESS_SYMBOL);
                            _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.GREATER_SYMBOL);
                            _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.LESS_SYMBOL);
                            _this.CONSUME3(lexer_g_1.Tokens.GREATER_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXCLAMATION_SYMBOL);
                            _this.CONSUME4(lexer_g_1.Tokens.EQUAL_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME5(lexer_g_1.Tokens.EQUAL_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.GREATER_SYMBOL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.LESS_SYMBOL);
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
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.tableSource);
                });
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.tableSources);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.whereClause);
                });
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.groupClause);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.havingClause);
                });
            });
            _this.RULE('whereClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.WHERE);
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('groupClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.GROUP);
                _this.CONSUME(lexer_g_1.Tokens.BY);
                _this.SUBRULE(_this.groupByItem);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.groupByItem);
                });
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.WITH);
                    _this.CONSUME(lexer_g_1.Tokens.ROLLUP);
                });
            });
            _this.RULE('havingClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.HAVING);
                _this.SUBRULE(_this.expression);
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            });
                            _this.SUBRULE(_this.selectStatement);
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.AS);
                            });
                            _this.OPTION4(function () {
                                _this.SUBRULE(_this.uid);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION5(function () {
                                _this.OPTION6(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.AS);
                                });
                                _this.SUBRULE2(_this.uid);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('selectElement', function () {
                _this.OR([
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
            _this.RULE('customFunction', function () {
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.functionArgs);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            _this.RULE('functionArgs', function () {
                _this.SUBRULE(_this.functionArg);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.functionArg);
                });
            });
            _this.RULE('scalarFunctionName', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.commonFunctionNamePart1);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.commonFunctionNamePart2);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.functionArgs);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            _this.RULE('commonFunctionNamePart1', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COUNT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SUBSTR);
                        },
                    },
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
                            _this.CONSUME(lexer_g_1.Tokens.COALESCE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COT);
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
                ]);
            });
            _this.RULE('commonFunctionNamePart2', function () {
                _this.OR([
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
                            _this.CONSUME(lexer_g_1.Tokens.TIMEDIFF);
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
                            _this.CONSUME(lexer_g_1.Tokens.WITHIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.YEARWEEK);
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
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
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
                                        _this.SUBRULE(_this.charsetName);
                                    },
                                },
                            ]);
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CAST);
                            _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE2(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.AS);
                            _this.SUBRULE2(_this.convertedDataType);
                            _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME3(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME3(lexer_g_1.Tokens.RR_BRACKET);
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
                            _this.CONSUME4(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.functionArgs);
                            _this.OPTION4(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.USING);
                                _this.SUBRULE2(_this.charsetName);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.POSITION);
                            _this.CONSUME5(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE4(_this.expression);
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.SUBRULE5(_this.expression);
                            _this.CONSUME5(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME6(lexer_g_1.Tokens.LR_BRACKET);
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
                            _this.CONSUME6(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.TRIM);
                            _this.CONSUME7(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE8(_this.expression);
                            _this.CONSUME2(lexer_g_1.Tokens.FROM);
                            _this.SUBRULE9(_this.expression);
                            _this.CONSUME7(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WEIGHT_STRING);
                            _this.CONSUME8(lexer_g_1.Tokens.LR_BRACKET);
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
                                _this.CONSUME9(lexer_g_1.Tokens.LR_BRACKET);
                                _this.SUBRULE(_this.decimalLiteral);
                                _this.CONSUME8(lexer_g_1.Tokens.RR_BRACKET);
                            });
                            _this.OPTION7(function () {
                                _this.SUBRULE(_this.levelsInWeightString);
                            });
                            _this.CONSUME9(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTRACT);
                            _this.CONSUME10(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.intervalType);
                            _this.CONSUME3(lexer_g_1.Tokens.FROM);
                            _this.SUBRULE11(_this.expression);
                            _this.CONSUME10(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GET_FORMAT);
                            _this.CONSUME11(lexer_g_1.Tokens.LR_BRACKET);
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
                            _this.SUBRULE(_this.stringLiteral);
                            _this.CONSUME11(lexer_g_1.Tokens.RR_BRACKET);
                        },
                    },
                ]);
            });
            _this.RULE('levelsInWeightString', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.decimalLiteral);
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
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                ]);
            });
            _this.RULE('levelInWeightListElement', function () {
                _this.SUBRULE(_this.decimalLiteral);
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
                                _this.SUBRULE(_this.charsetName);
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
            _this.RULE('ifExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.CONSUME(lexer_g_1.Tokens.EXISTS);
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
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('alterTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.ALTER);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ONLINE);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.OFFLINE);
                            },
                        },
                    ]);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.IGNORE);
                });
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.alterSpecification);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.alterSpecification);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.partitionDefinitions);
                });
            });
            _this.RULE('alterSpecification', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COLUMN);
                            });
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            });
                            _this.SUBRULE(_this.uid);
                            _this.SUBRULE(_this.columnDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.uid);
                                _this.SUBRULE2(_this.columnDefinition);
                            });
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.ADD);
                            _this.OR2([
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
                            _this.OPTION4(function () {
                                _this.SUBRULE3(_this.uid);
                            });
                            _this.OPTION5(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY2(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.ADD);
                            _this.OPTION6(function () {
                                _this.CONSUME(lexer_g_1.Tokens.CONSTRAINT);
                                _this.OPTION7(function () {
                                    _this.SUBRULE4(_this.uid);
                                });
                            });
                            _this.CONSUME(lexer_g_1.Tokens.PRIMARY);
                            _this.CONSUME2(lexer_g_1.Tokens.KEY);
                            _this.OPTION8(function () {
                                _this.SUBRULE2(_this.indexType);
                            });
                            _this.SUBRULE2(_this.indexColumnNames);
                            _this.MANY3(function () {
                                _this.SUBRULE2(_this.indexOption);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.ADD);
                            _this.OPTION9(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.CONSTRAINT);
                                _this.OPTION10(function () {
                                    _this.SUBRULE5(_this.uid);
                                });
                            });
                            _this.CONSUME(lexer_g_1.Tokens.UNIQUE);
                            _this.OPTION11(function () {
                                _this.OR3([
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.INDEX);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME3(lexer_g_1.Tokens.KEY);
                                        },
                                    },
                                ]);
                            });
                            _this.OPTION12(function () {
                                _this.SUBRULE6(_this.uid);
                            });
                            _this.OPTION13(function () {
                                _this.SUBRULE3(_this.indexType);
                            });
                            _this.SUBRULE3(_this.indexColumnNames);
                            _this.MANY4(function () {
                                _this.SUBRULE3(_this.indexOption);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME5(lexer_g_1.Tokens.ADD);
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.FULLTEXT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SPATIAL);
                                    },
                                },
                            ]);
                            _this.OPTION14(function () {
                                _this.OR5([
                                    {
                                        ALT: function () {
                                            _this.CONSUME3(lexer_g_1.Tokens.INDEX);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME4(lexer_g_1.Tokens.KEY);
                                        },
                                    },
                                ]);
                            });
                            _this.OPTION15(function () {
                                _this.SUBRULE7(_this.uid);
                            });
                            _this.SUBRULE4(_this.indexColumnNames);
                            _this.MANY5(function () {
                                _this.SUBRULE4(_this.indexOption);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME6(lexer_g_1.Tokens.ADD);
                            _this.OPTION16(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.CONSTRAINT);
                                _this.OPTION17(function () {
                                    _this.SUBRULE8(_this.uid);
                                });
                            });
                            _this.CONSUME(lexer_g_1.Tokens.FOREIGN);
                            _this.CONSUME5(lexer_g_1.Tokens.KEY);
                            _this.OPTION18(function () {
                                _this.SUBRULE9(_this.uid);
                            });
                            _this.SUBRULE5(_this.indexColumnNames);
                            _this.SUBRULE(_this.referenceDefinition);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ALGORITHM);
                            _this.OPTION19(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.OR6([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.INPLACE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.COPY);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ALTER);
                            _this.OPTION20(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE10(_this.uid);
                            _this.OR7([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SET);
                                        _this.CONSUME2(lexer_g_1.Tokens.DEFAULT);
                                        _this.SUBRULE(_this.defaultValue);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DROP);
                                        _this.CONSUME3(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHANGE);
                            _this.OPTION21(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE11(_this.uid);
                            _this.SUBRULE12(_this.uid);
                            _this.SUBRULE3(_this.columnDefinition);
                            _this.OPTION22(function () {
                                _this.OR8([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.FIRST);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(lexer_g_1.Tokens.AFTER);
                                            _this.SUBRULE13(_this.uid);
                                        },
                                    },
                                ]);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCK);
                            _this.OPTION23(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.OR9([
                                {
                                    ALT: function () {
                                        _this.CONSUME4(lexer_g_1.Tokens.DEFAULT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.NONE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.SHARED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.EXCLUSIVE);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MODIFY);
                            _this.OPTION24(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE14(_this.uid);
                            _this.SUBRULE4(_this.columnDefinition);
                            _this.OPTION25(function () {
                                _this.OR10([
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.FIRST);
                                        },
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.AFTER);
                                            _this.SUBRULE15(_this.uid);
                                        },
                                    },
                                ]);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.DROP);
                            _this.OPTION26(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE16(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.DROP);
                            _this.CONSUME2(lexer_g_1.Tokens.PRIMARY);
                            _this.CONSUME6(lexer_g_1.Tokens.KEY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME4(lexer_g_1.Tokens.DROP);
                            _this.OR11([
                                {
                                    ALT: function () {
                                        _this.CONSUME4(lexer_g_1.Tokens.INDEX);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME7(lexer_g_1.Tokens.KEY);
                                    },
                                },
                            ]);
                            _this.SUBRULE17(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME5(lexer_g_1.Tokens.DROP);
                            _this.CONSUME2(lexer_g_1.Tokens.FOREIGN);
                            _this.CONSUME8(lexer_g_1.Tokens.KEY);
                            _this.SUBRULE18(_this.uid);
                        },
                    },
                ]);
            });
            _this.RULE('indexType', function () {
                _this.CONSUME(lexer_g_1.Tokens.USING);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BTREE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HASH);
                        },
                    },
                ]);
            });
            _this.RULE('indexColumnNames', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.indexColumnName);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.indexColumnName);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            _this.RULE('indexColumnName', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                    _this.SUBRULE(_this.decimalLiteral);
                    _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                });
                _this.OPTION2(function () {
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
            _this.RULE('indexOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEY_BLOCK_SIZE);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.fileSizeLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.indexType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WITH);
                            _this.CONSUME(lexer_g_1.Tokens.PARSER);
                            _this.SUBRULE(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                ]);
            });
            _this.RULE('referenceDefinition', function () {
                _this.CONSUME(lexer_g_1.Tokens.REFERENCES);
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.indexColumnNames);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.MATCH);
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.FULL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.PARTIAL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.SIMPLE);
                            },
                        },
                    ]);
                });
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.referenceAction);
                });
            });
            _this.RULE('referenceAction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ON);
                            _this.CONSUME(lexer_g_1.Tokens.DELETE);
                            _this.SUBRULE(_this.referenceControlType);
                            _this.OPTION(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.ON);
                                _this.CONSUME(lexer_g_1.Tokens.UPDATE);
                                _this.SUBRULE2(_this.referenceControlType);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME3(lexer_g_1.Tokens.ON);
                            _this.CONSUME2(lexer_g_1.Tokens.UPDATE);
                            _this.SUBRULE3(_this.referenceControlType);
                            _this.OPTION2(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.ON);
                                _this.CONSUME2(lexer_g_1.Tokens.DELETE);
                                _this.SUBRULE4(_this.referenceControlType);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('referenceControlType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RESTRICT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CASCADE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SET);
                            _this.CONSUME(lexer_g_1.Tokens.NULL_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NO);
                            _this.CONSUME(lexer_g_1.Tokens.ACTION);
                        },
                    },
                ]);
            });
            _this.RULE('partitionDefinition', function () {
                _this.OR([
                    {
                        ALT: function () {
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
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME(lexer_g_1.Tokens.LESS);
                            _this.CONSUME(lexer_g_1.Tokens.THAN);
                            _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.partitionDefinerAtom);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.partitionDefinerAtom);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
                            _this.MANY2(function () {
                                _this.SUBRULE(_this.partitionOption);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.subpartitionDefinition);
                                _this.MANY3(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.COMMA);
                                    _this.SUBRULE2(_this.subpartitionDefinition);
                                });
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.PARTITIONED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.PARTITION);
                                    },
                                },
                            ]);
                            _this.SUBRULE2(_this.uid);
                            _this.CONSUME2(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                            _this.CONSUME2(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE3(_this.partitionDefinerAtom);
                            _this.MANY4(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE4(_this.partitionDefinerAtom);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.RR_BRACKET);
                            _this.MANY5(function () {
                                _this.SUBRULE2(_this.partitionOption);
                            });
                            _this.OPTION2(function () {
                                _this.SUBRULE3(_this.subpartitionDefinition);
                                _this.MANY6(function () {
                                    _this.CONSUME4(lexer_g_1.Tokens.COMMA);
                                    _this.SUBRULE4(_this.subpartitionDefinition);
                                });
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.PARTITIONED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.PARTITION);
                                    },
                                },
                            ]);
                            _this.SUBRULE3(_this.uid);
                            _this.CONSUME3(lexer_g_1.Tokens.VALUES);
                            _this.CONSUME2(lexer_g_1.Tokens.IN);
                            _this.CONSUME3(lexer_g_1.Tokens.LR_BRACKET);
                            _this.SUBRULE(_this.partitionDefinerVector);
                            _this.MANY7(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.COMMA);
                                _this.SUBRULE2(_this.partitionDefinerVector);
                            });
                            _this.CONSUME3(lexer_g_1.Tokens.RR_BRACKET);
                            _this.MANY8(function () {
                                _this.SUBRULE3(_this.partitionOption);
                            });
                            _this.OPTION3(function () {
                                _this.SUBRULE5(_this.subpartitionDefinition);
                                _this.MANY9(function () {
                                    _this.CONSUME6(lexer_g_1.Tokens.COMMA);
                                    _this.SUBRULE6(_this.subpartitionDefinition);
                                });
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR5([
                                {
                                    ALT: function () {
                                        _this.CONSUME4(lexer_g_1.Tokens.PARTITIONED);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME4(lexer_g_1.Tokens.PARTITION);
                                    },
                                },
                            ]);
                            _this.SUBRULE4(_this.uid);
                            _this.MANY10(function () {
                                _this.SUBRULE4(_this.partitionOption);
                            });
                            _this.OPTION4(function () {
                                _this.SUBRULE7(_this.subpartitionDefinition);
                                _this.MANY11(function () {
                                    _this.CONSUME7(lexer_g_1.Tokens.COMMA);
                                    _this.SUBRULE8(_this.subpartitionDefinition);
                                });
                            });
                        },
                    },
                ]);
            });
            _this.RULE('partitionDefinerAtom', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAXVALUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        },
                    },
                ]);
            });
            _this.RULE('partitionOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.STORAGE);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.ENGINE);
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.engineName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                            _this.OPTION3(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATA);
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION4(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME2(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEX);
                            _this.CONSUME2(lexer_g_1.Tokens.DIRECTORY);
                            _this.OPTION5(function () {
                                _this.CONSUME4(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.CONSUME3(lexer_g_1.Tokens.STRING_LITERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAX_ROWS);
                            _this.OPTION6(function () {
                                _this.CONSUME5(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MIN_ROWS);
                            _this.OPTION7(function () {
                                _this.CONSUME6(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE2(_this.decimalLiteral);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLESPACE);
                            _this.OPTION8(function () {
                                _this.CONSUME7(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NODEGROUP);
                            _this.OPTION9(function () {
                                _this.CONSUME8(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            });
                            _this.SUBRULE2(_this.uid);
                        },
                    },
                ]);
            });
            _this.RULE('subpartitionDefinition', function () {
                _this.CONSUME(lexer_g_1.Tokens.SUBPARTITION);
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.SUBRULE(_this.partitionOption);
                });
            });
            _this.RULE('partitionDefinerVector', function () {
                _this.CONSUME(lexer_g_1.Tokens.LR_BRACKET);
                _this.SUBRULE(_this.partitionDefinerAtom);
                _this.AT_LEAST_ONE(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.partitionDefinerAtom);
                });
                _this.CONSUME(lexer_g_1.Tokens.RR_BRACKET);
            });
            chevrotain.Parser.performSelfAnalysis(_this);
            return _this;
        }
        return Parser;
    }(chevrotain.Parser));
    exports.Parser = Parser;
});
//# sourceMappingURL=parser.g.js.map