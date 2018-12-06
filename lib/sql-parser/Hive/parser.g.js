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
        SyntaxKind["insertStatement"] = "insertStatement";
        SyntaxKind["partitionInsertDefinitions"] = "partitionInsertDefinitions";
        SyntaxKind["insertStatementValue"] = "insertStatementValue";
        SyntaxKind["updateStatement"] = "updateStatement";
        SyntaxKind["updatedElement"] = "updatedElement";
        SyntaxKind["fullColumnName"] = "fullColumnName";
        SyntaxKind["deleteStatement"] = "deleteStatement";
        SyntaxKind["createDatabaseStatement"] = "createDatabaseStatement";
        SyntaxKind["ifExists"] = "ifExists";
        SyntaxKind["switchDatabaseStatement"] = "switchDatabaseStatement";
        SyntaxKind["dropDatabaseStatement"] = "dropDatabaseStatement";
        SyntaxKind["createTable"] = "createTable";
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
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["selectClause"] = "selectClause";
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
        SyntaxKind["selectList"] = "selectList";
        SyntaxKind["selectItem"] = "selectItem";
        SyntaxKind["selectExpression"] = "selectExpression";
        SyntaxKind["tableAllColumns"] = "tableAllColumns";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["joinSource"] = "joinSource";
        SyntaxKind["joinPart"] = "joinPart";
        SyntaxKind["joinToken"] = "joinToken";
        SyntaxKind["fromSource"] = "fromSource";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["orderByClause"] = "orderByClause";
        SyntaxKind["sortByClause"] = "sortByClause";
        SyntaxKind["identifier"] = "identifier";
        SyntaxKind["uidList"] = "uidList";
        SyntaxKind["nonReserved"] = "nonReserved";
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
                    _this.CONSUME(lexer_g_1.Tokens.Identifier);
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
            _this.RULE('fullColumnName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.Identifier);
                        },
                    },
                ]);
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
                    _this.CONSUME(lexer_g_1.Tokens.EXTERNAL);
                });
                _this.CONSUME(lexer_g_1.Tokens.TABLE);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.tableName);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LIKE);
                            _this.SUBRULE2(_this.tableName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.AS);
                                _this.SUBRULE(_this.selectStatement);
                            });
                        },
                    },
                ]);
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
                    _this.CONSUME(lexer_g_1.Tokens.StringLiteral);
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
                    _this.CONSUME(lexer_g_1.Tokens.StringLiteral);
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
            _this.RULE('selectStatement', function () {
                _this.SUBRULE(_this.selectClause);
                _this.SUBRULE(_this.fromClause);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.whereClause);
                });
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.groupByClause);
                });
                _this.OPTION3(function () {
                    _this.SUBRULE(_this.havingClause);
                });
                _this.OPTION4(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION5(function () {
                    _this.SUBRULE(_this.distributeByClause);
                });
                _this.OPTION6(function () {
                    _this.SUBRULE(_this.sortByClause);
                });
                _this.OPTION7(function () {
                    _this.SUBRULE(_this.limitClause);
                });
            });
            _this.RULE('selectClause', function () {
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
                _this.SUBRULE(_this.selectList);
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
                    _this.CONSUME(lexer_g_1.Tokens.StringLiteral);
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
                _this.MANY(function () {
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
                _this.MANY(function () {
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
            _this.RULE('selectList', function () {
                _this.SUBRULE(_this.selectItem);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.selectItem);
                });
            });
            _this.RULE('selectItem', function () {
                _this.SUBRULE(_this.selectExpression);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(lexer_g_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.identifier);
                });
            });
            _this.RULE('selectExpression', function () {
                _this.SUBRULE(_this.tableAllColumns);
            });
            _this.RULE('tableAllColumns', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.CONSUME(lexer_g_1.Tokens.DOT);
                            _this.CONSUME2(lexer_g_1.Tokens.STAR);
                        },
                    },
                ]);
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.FROM);
                _this.SUBRULE(_this.joinSource);
            });
            _this.RULE('joinSource', function () {
                _this.SUBRULE(_this.fromSource);
                _this.SUBRULE(_this.joinPart);
            });
            _this.RULE('joinPart', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.joinToken);
                    _this.SUBRULE(_this.fromSource);
                });
            });
            _this.RULE('joinToken', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INNER);
                            _this.CONSUME2(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CROSS);
                            _this.CONSUME3(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEFT);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.OUTER);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RIGHT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.OUTER);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FULL);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.OUTER);
                            });
                            _this.CONSUME6(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.LEFT);
                            _this.CONSUME(lexer_g_1.Tokens.SEMI);
                            _this.CONSUME7(lexer_g_1.Tokens.JOIN);
                        },
                    },
                ]);
            });
            _this.RULE('fromSource', function () {
                _this.SUBRULE(_this.tableSource);
            });
            _this.RULE('tableSource', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(lexer_g_1.Tokens.AS);
                    });
                    _this.CONSUME(lexer_g_1.Tokens.Identifier);
                });
            });
            _this.RULE('tableName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.identifier);
                            _this.CONSUME(lexer_g_1.Tokens.DOT);
                            _this.SUBRULE2(_this.identifier);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.identifier);
                        },
                    },
                ]);
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.Identifier);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.nonReserved);
                        },
                    },
                ]);
            });
            _this.RULE('uidList', function () {
                _this.CONSUME(lexer_g_1.Tokens.Identifier);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.CONSUME2(lexer_g_1.Tokens.Identifier);
                });
            });
            _this.RULE('nonReserved', function () {
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
                            _this.CONSUME(lexer_g_1.Tokens.LIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXISTS);
                        },
                    },
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
                            _this.CONSUME(lexer_g_1.Tokens.ORDER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GROUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INSERT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OVERWRITE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OUTER);
                        },
                    },
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TABLES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLUMNS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INDEXES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REBUILD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHOW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MSCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REPAIR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.USING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CLUSTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISTRIBUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IMPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INPATH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CREATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXTERNAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ALTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.AFTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DESCRIBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RENAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IGNORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROTECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BOOLEAN);
                        },
                    },
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
                            _this.CONSUME(lexer_g_1.Tokens.DECIMAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ARRAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STRUCT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNIONTYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CLUSTERED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SORTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BUCKETS);
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
                            _this.CONSUME(lexer_g_1.Tokens.FORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DELIMITED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FIELDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TERMINATED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ESCAPED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COLLECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ITEMS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KEY_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LINES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STORED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FILEFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SEQUENCEFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEXTFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ORCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OUTPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OUTPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OFFLINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ENABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DISABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.READONLY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NO_DROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BUCKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OUT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PERCENT);
                        },
                    },
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TEMPORARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.EXPLAIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FORMATTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PRETTY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEPENDENCY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOGICAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SERDE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WITH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFERRED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SERDEPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DBPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LIMIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TBLPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IDXPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VALUE_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ELEM_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MAPJOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STREAMTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.HOLD_DDLTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CLUSTERSTATUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UTCTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LONG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DELETE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MINUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWMINUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FETCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INTERSECT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.VIEW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.IN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DATABASES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.MATERIALIZED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SCHEMA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SCHEMAS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GRANT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REVOKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SSL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNDO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LOCKS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNLOCK);
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
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PROCEDURE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNSIGNED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.WHILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.READ);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.READS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PURGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ANALYZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BEFORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BETWEEN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BOTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONTINUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CURSOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRIGGER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RECORDREADER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.RECORDWRITER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SEMI);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LATERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TOUCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UNARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.COMPUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STATISTICS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.USE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OPTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CONCATENATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SHOW_DATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.UPDATE);
                        },
                    },
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
                            _this.CONSUME(lexer_g_1.Tokens.SKEWED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROLLUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CUBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIRECTORIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.GROUPING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.SETS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TRUNCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.NOSCAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.USER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ROLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.INNER);
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