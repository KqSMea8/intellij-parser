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
        SyntaxKind["selectClause"] = "selectClause";
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
                    _this.CONSUME(lexer_g_1.Tokens.KWSEMI);
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
                _this.CONSUME(lexer_g_1.Tokens.KWSHOW);
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('insertStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWINSERT);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWINTO);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWOVERWRITE);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWTABLE);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWPARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPARTITION);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWBY);
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
                                        _this.CONSUME(lexer_g_1.Tokens.KWVALUES);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.KWVALUE);
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
                _this.CONSUME(lexer_g_1.Tokens.KWUPDATE);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(lexer_g_1.Tokens.KWAS);
                    });
                    _this.CONSUME(lexer_g_1.Tokens.Identifier);
                });
                _this.CONSUME(lexer_g_1.Tokens.KWSET);
                _this.SUBRULE(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.updatedElement);
                });
                _this.OPTION3(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWWHERE);
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
                _this.CONSUME(lexer_g_1.Tokens.KWDELETE);
                _this.CONSUME(lexer_g_1.Tokens.KWFROM);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWWHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('createDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWCREATE);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSCHEMA);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('ifExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWIF);
                _this.CONSUME(lexer_g_1.Tokens.KWEXISTS);
            });
            _this.RULE('switchDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWUSE);
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('dropDatabaseStatement', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWDROP);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSCHEMA);
                        },
                    },
                ]);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.identifier);
            });
            _this.RULE('createTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWCREATE);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWEXTERNAL);
                });
                _this.CONSUME(lexer_g_1.Tokens.KWTABLE);
                _this.OPTION2(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.tableName);
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLIKE);
                            _this.SUBRULE2(_this.tableName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION3(function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWAS);
                                _this.SUBRULE(_this.selectStatement);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('dropTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWDROP);
                _this.CONSUME(lexer_g_1.Tokens.KWTABLE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('alterTable', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWALTER);
                _this.CONSUME(lexer_g_1.Tokens.KWTABLE);
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
                _this.CONSUME(lexer_g_1.Tokens.KWRENAME);
                _this.CONSUME(lexer_g_1.Tokens.KWTO);
                _this.SUBRULE2(_this.identifier);
            });
            _this.RULE('alterStatementSuffixRenameCol', function () {
                _this.SUBRULE(_this.identifier);
                _this.CONSUME(lexer_g_1.Tokens.KWCHANGE);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWCOLUMN);
                });
                _this.SUBRULE2(_this.identifier);
                _this.SUBRULE3(_this.identifier);
                _this.SUBRULE(_this.colType);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWCOMMENT);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWFIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWAFTER);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREPLACE);
                        },
                    },
                ]);
                _this.CONSUME(lexer_g_1.Tokens.KWCOLUMNS);
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
                    _this.CONSUME(lexer_g_1.Tokens.KWCOMMENT);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWTINYINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSMALLINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBIGINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBOOLEAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFLOAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDOUBLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDECIMAL);
                        },
                    },
                ]);
            });
            _this.RULE('listType', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWARRAY);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.type);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('mapType', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWMAP);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.primitiveType);
                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                _this.SUBRULE(_this.type);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('unionType', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWUNIONTYPE);
                _this.CONSUME(lexer_g_1.Tokens.LESSTHAN);
                _this.SUBRULE(_this.colTypeList);
                _this.CONSUME(lexer_g_1.Tokens.GREATERTHAN);
            });
            _this.RULE('ifNotExists', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWIF);
                _this.CONSUME(lexer_g_1.Tokens.KWNOT);
                _this.CONSUME(lexer_g_1.Tokens.KWEXISTS);
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
                                _this.CONSUME(lexer_g_1.Tokens.KWASC);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWDESC);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('queryOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWUNION);
                _this.CONSUME(lexer_g_1.Tokens.KWALL);
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
            _this.RULE('whereClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWWHERE);
                _this.SUBRULE(_this.searchCondition);
            });
            _this.RULE('groupByClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWGROUP);
                _this.CONSUME(lexer_g_1.Tokens.KWBY);
                _this.SUBRULE(_this.groupByExpression);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.groupByExpression);
                });
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWWITH);
                                _this.CONSUME(lexer_g_1.Tokens.KWROLLUP);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME2(lexer_g_1.Tokens.KWWITH);
                                _this.CONSUME(lexer_g_1.Tokens.KWCUBE);
                            },
                        },
                    ]);
                });
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.KWGROUPING);
                    _this.CONSUME(lexer_g_1.Tokens.KWSETS);
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
                _this.CONSUME(lexer_g_1.Tokens.KWHAVING);
                _this.SUBRULE(_this.havingCondition);
            });
            _this.RULE('distributeByClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDISTRIBUTE);
                            _this.CONSUME(lexer_g_1.Tokens.KWBY);
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
                            _this.CONSUME2(lexer_g_1.Tokens.KWDISTRIBUTE);
                            _this.CONSUME2(lexer_g_1.Tokens.KWBY);
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
                    _this.CONSUME(lexer_g_1.Tokens.KWDATE);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWTRUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFALSE);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWNULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWNOT);
                            _this.CONSUME2(lexer_g_1.Tokens.KWNULL);
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
                    _this.CONSUME(lexer_g_1.Tokens.KWIS);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREGEXP);
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
                                    _this.CONSUME(lexer_g_1.Tokens.KWNOT);
                                });
                                _this.SUBRULE(_this.precedenceEqualOperator);
                                _this.SUBRULE2(_this.precedenceBitwiseOrExpression);
                            },
                        },
                        {
                            ALT: function () {
                                _this.OPTION2(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.KWNOT);
                                });
                                _this.CONSUME(lexer_g_1.Tokens.KWIN);
                                _this.SUBRULE(_this.expressions);
                            },
                        },
                        {
                            ALT: function () {
                                _this.OPTION3(function () {
                                    _this.CONSUME3(lexer_g_1.Tokens.KWNOT);
                                });
                                _this.CONSUME(lexer_g_1.Tokens.KWBETWEEN);
                                _this.SUBRULE3(_this.precedenceBitwiseOrExpression);
                                _this.CONSUME(lexer_g_1.Tokens.KWAND);
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
                _this.CONSUME(lexer_g_1.Tokens.KWNOT);
            });
            _this.RULE('precedenceNotExpression', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceNotOperator);
                });
                _this.SUBRULE(_this.precedenceEqualExpression);
            });
            _this.RULE('precedenceAndOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWAND);
            });
            _this.RULE('precedenceAndExpression', function () {
                _this.SUBRULE(_this.precedenceNotExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceAndOperator);
                    _this.SUBRULE2(_this.precedenceNotExpression);
                });
            });
            _this.RULE('precedenceOrOperator', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWOR);
            });
            _this.RULE('precedenceOrExpression', function () {
                _this.SUBRULE(_this.precedenceAndExpression);
                _this.MANY(function () {
                    _this.SUBRULE(_this.precedenceOrOperator);
                    _this.SUBRULE2(_this.precedenceAndExpression);
                });
            });
            _this.RULE('limitClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWLIMIT);
                _this.CONSUME(lexer_g_1.Tokens.Number);
            });
            _this.RULE('selectClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.KWSELECT);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWALL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWDISTINCT);
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.selectList);
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
                        _this.CONSUME(lexer_g_1.Tokens.KWAS);
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
                _this.CONSUME(lexer_g_1.Tokens.KWFROM);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWINNER);
                            _this.CONSUME2(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCROSS);
                            _this.CONSUME3(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLEFT);
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.KWOUTER);
                            });
                            _this.CONSUME4(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRIGHT);
                            _this.OPTION2(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.KWOUTER);
                            });
                            _this.CONSUME5(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFULL);
                            _this.OPTION3(function () {
                                _this.CONSUME3(lexer_g_1.Tokens.KWOUTER);
                            });
                            _this.CONSUME6(lexer_g_1.Tokens.JOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.KWLEFT);
                            _this.CONSUME(lexer_g_1.Tokens.KWSEMI);
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
                        _this.CONSUME(lexer_g_1.Tokens.KWAS);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWORDER);
                            _this.CONSUME(lexer_g_1.Tokens.KWBY);
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
                            _this.CONSUME2(lexer_g_1.Tokens.KWORDER);
                            _this.CONSUME2(lexer_g_1.Tokens.KWBY);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWSORT);
                            _this.CONSUME(lexer_g_1.Tokens.KWBY);
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
                            _this.CONSUME2(lexer_g_1.Tokens.KWSORT);
                            _this.CONSUME2(lexer_g_1.Tokens.KWBY);
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
                            _this.CONSUME(lexer_g_1.Tokens.KWTRUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFALSE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWEXISTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWASC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDESC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWORDER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWGROUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWAS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINSERT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOVERWRITE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOUTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLEFT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRIGHT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPARTITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPARTITIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTABLES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCOLUMNS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINDEXES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREBUILD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSHOW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWMSCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREPAIR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDIRECTORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOCAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUSING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCLUSTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDISTRIBUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWEXPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWIMPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINPATH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWIS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWNULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCREATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWEXTERNAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWALTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCHANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWAFTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDESCRIBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRENAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWIGNORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPROTECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCOMMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBOOLEAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTINYINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSMALLINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBIGINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFLOAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDOUBLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDECIMAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWARRAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTRUCT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNIONTYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCLUSTERED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSORTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBUCKETS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWROW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDELIMITED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFIELDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTERMINATED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWESCAPED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCOLLECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWITEMS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWKEYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWKEY_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLINES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTORED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFILEFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSEQUENCEFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTEXTFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWORCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOUTPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOUTPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOFFLINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWENABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDISABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREADONLY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWNO_DROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOCATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBUCKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOUT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPERCENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREPLACE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREGEXP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTEMPORARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWEXPLAIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFORMATTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPRETTY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDEPENDENCY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOGICAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSERDE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWWITH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDEFERRED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSERDEPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDBPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLIMIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTBLPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWIDXPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWVALUE_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWELEM_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWMAPJOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTREAMTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWHOLD_DDLTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCLUSTERSTATUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUTC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUTCTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLONG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDELETE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWMINUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFETCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINTERSECT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWVIEW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDATABASES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWMATERIALIZED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSCHEMA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSCHEMAS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWGRANT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREVOKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSSL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNDO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLOCKS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNLOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSHARED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWEXCLUSIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPROCEDURE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNSIGNED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWWHILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWREADS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWPURGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWANALYZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBEFORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBETWEEN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBOTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCONTINUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCURSOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTRIGGER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRECORDREADER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRECORDWRITER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSEMI);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWLATERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTOUCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUNARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCOMPUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSTATISTICS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUSE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWOPTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCONCATENATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSHOW_DATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUPDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWRESTRICT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCASCADE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSKEWED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWROLLUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWCUBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWDIRECTORIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWFOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWGROUPING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWSETS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWTRUNCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWNOSCAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWUSER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWROLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.KWINNER);
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