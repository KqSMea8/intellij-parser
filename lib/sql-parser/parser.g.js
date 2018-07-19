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
        SyntaxKind["updateStatement"] = "updateStatement";
        SyntaxKind["insertStatement"] = "insertStatement";
        SyntaxKind["singleUpdateStatement"] = "singleUpdateStatement";
        SyntaxKind["updatedElement"] = "updatedElement";
        SyntaxKind["insertStatementValue"] = "insertStatementValue";
        SyntaxKind["expressionsWithDefaults"] = "expressionsWithDefaults";
        SyntaxKind["expressionOrDefault"] = "expressionOrDefault";
        SyntaxKind["uidList"] = "uidList";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["logicalOperator"] = "logicalOperator";
        SyntaxKind["querySpecification"] = "querySpecification";
        SyntaxKind["selectElements"] = "selectElements";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["tableSources"] = "tableSources";
        SyntaxKind["tableSource"] = "tableSource";
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
                outputCst: true
            }) || this;
            _this.RULE('root', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.sqlStatements);
                });
                _this.CONSUME(lexer_g_1.Tokens.MINUSMINUS);
            });
            _this.RULE('sqlStatements', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.sqlStatement);
                    _this.OPTION(function () {
                        _this.CONSUME(lexer_g_1.Tokens.MINUSMINUS);
                    });
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
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.insertStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        }
                    }
                ]);
            });
            _this.RULE('selectStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.querySpecification);
                });
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
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.VALUE);
                                    }
                                }
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
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        }
                    }
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
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DEFAULT);
                        }
                    }
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
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_AND_OP);
                            _this.CONSUME2(lexer_g_1.Tokens.BIT_AND_OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.XOR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.OR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.BIT_OR_OP);
                            _this.CONSUME2(lexer_g_1.Tokens.BIT_OR_OP);
                        }
                    }
                ]);
            });
            _this.RULE('querySpecification', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.SUBRULE(_this.selectElements);
                _this.SUBRULE(_this.fromClause);
            });
            _this.RULE('selectElements', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectElement);
                        }
                    }
                ]);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
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
                    _this.CONSUME(lexer_g_1.Tokens.COMMA);
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME(lexer_g_1.Tokens.STAR);
                        }
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
                        }
                    }
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
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DOT);
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
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
                                _this.CONSUME(lexer_g_1.Tokens.DOT);
                                _this.SUBRULE2(_this.uid);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('uid', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.simpleId);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.REVERSE_QUOTE_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CHARSET_REVERSE_QOUTE_STRING);
                        }
                    }
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