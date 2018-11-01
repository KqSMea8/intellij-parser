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
        define(["require", "exports", "chevrotain", "./hivelexer.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chevrotain = require("chevrotain");
    var hivelexer_g_1 = require("./hivelexer.g");
    exports.tokens = hivelexer_g_1.tokens;
    exports.Lexer = hivelexer_g_1.Lexer;
    exports.Tokens = hivelexer_g_1.Tokens;
    exports.TokenEnum = hivelexer_g_1.TokenEnum;
    var SyntaxKind;
    (function (SyntaxKind) {
        SyntaxKind["root"] = "root";
        SyntaxKind["execStatement"] = "execStatement";
        SyntaxKind["ddlStatement"] = "ddlStatement";
        SyntaxKind["selectStatement"] = "selectStatement";
        SyntaxKind["selectClause"] = "selectClause";
        SyntaxKind["selectList"] = "selectList";
        SyntaxKind["selectItem"] = "selectItem";
        SyntaxKind["selectExpression"] = "selectExpression";
        SyntaxKind["tableAllColumns"] = "tableAllColumns";
        SyntaxKind["tableName"] = "tableName";
        SyntaxKind["fromClause"] = "fromClause";
        SyntaxKind["joinSource"] = "joinSource";
        SyntaxKind["fromSource"] = "fromSource";
        SyntaxKind["tableSource"] = "tableSource";
        SyntaxKind["identifier"] = "identifier";
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
            var _this = _super.call(this, input, hivelexer_g_1.tokens, {
                recoveryEnabled: true,
                outputCst: true,
                maxLookahead: 6,
            }) || this;
            _this.RULE('root', function () {
                _this.SUBRULE(_this.execStatement);
            });
            _this.RULE('execStatement', function () {
                _this.SUBRULE(_this.ddlStatement);
            });
            _this.RULE('ddlStatement', function () {
                _this.SUBRULE(_this.selectStatement);
            });
            _this.RULE('selectStatement', function () {
                _this.SUBRULE(_this.selectClause);
                _this.SUBRULE(_this.fromClause);
            });
            _this.RULE('selectClause', function () {
                _this.CONSUME(hivelexer_g_1.Tokens.KWSELECT);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(hivelexer_g_1.Tokens.KWALL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(hivelexer_g_1.Tokens.KWDISTINCT);
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.selectList);
            });
            _this.RULE('selectList', function () {
                _this.SUBRULE(_this.selectItem);
                _this.MANY(function () {
                    _this.CONSUME(hivelexer_g_1.Tokens.COMMA);
                    _this.SUBRULE2(_this.selectItem);
                });
            });
            _this.RULE('selectItem', function () {
                _this.SUBRULE(_this.selectExpression);
            });
            _this.RULE('selectExpression', function () {
                _this.SUBRULE(_this.tableAllColumns);
            });
            _this.RULE('tableAllColumns', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.STAR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.CONSUME(hivelexer_g_1.Tokens.DOT);
                            _this.CONSUME2(hivelexer_g_1.Tokens.STAR);
                        },
                    },
                ]);
            });
            _this.RULE('tableName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.identifier);
                            _this.CONSUME(hivelexer_g_1.Tokens.DOT);
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
            _this.RULE('fromClause', function () {
                _this.CONSUME(hivelexer_g_1.Tokens.KWFROM);
                _this.SUBRULE(_this.joinSource);
            });
            _this.RULE('joinSource', function () {
                _this.SUBRULE(_this.fromSource);
            });
            _this.RULE('fromSource', function () {
                _this.SUBRULE(_this.tableSource);
            });
            _this.RULE('tableSource', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION2(function () {
                        _this.CONSUME(hivelexer_g_1.Tokens.KWAS);
                    });
                    _this.CONSUME(hivelexer_g_1.Tokens.Identifier);
                });
            });
            _this.RULE('identifier', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.Identifier);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.nonReserved);
                        },
                    },
                ]);
            });
            _this.RULE('nonReserved', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTRUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFALSE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWEXISTS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWASC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDESC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWORDER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWGROUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWAS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINSERT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOVERWRITE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOUTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLEFT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRIGHT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPARTITION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPARTITIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTABLES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCOLUMNS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINDEX);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINDEXES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREBUILD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFUNCTIONS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSHOW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWMSCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREPAIR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDIRECTORY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOCAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUSING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCLUSTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDISTRIBUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWEXPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWIMPORT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDATA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINPATH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWIS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWNULL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCREATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWEXTERNAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWALTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCHANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFIRST);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWAFTER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDESCRIBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRENAME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWIGNORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPROTECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCOMMENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBOOLEAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTINYINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSMALLINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBIGINT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFLOAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDOUBLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDATETIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDECIMAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSTRING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWARRAY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSTRUCT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNIONTYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPARTITIONED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCLUSTERED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSORTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINTO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBUCKETS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWROW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWROWS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDELIMITED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFIELDS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTERMINATED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWESCAPED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCOLLECTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWITEMS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWKEYS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWKEY_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLINES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSTORED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFILEFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSEQUENCEFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTEXTFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWORCFILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOUTPUTFORMAT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOUTPUTDRIVER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOFFLINE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWENABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDISABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREADONLY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWNO_DROP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOCATION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBUCKET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOUT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOF);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPERCENT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWADD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREPLACE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRLIKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREGEXP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTEMPORARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWEXPLAIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFORMATTED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPRETTY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDEPENDENCY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOGICAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSERDE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWWITH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDEFERRED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSERDEPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDBPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLIMIT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNSET);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTBLPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWIDXPROPERTIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWVALUE_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWELEM_TYPE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWMAPJOIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSTREAMTABLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWHOLD_DDLTIME);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCLUSTERSTATUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUTC);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUTCTIMESTAMP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLONG);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDELETE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPLUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWMINUS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFETCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINTERSECT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWVIEW);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWIN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDATABASES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWMATERIALIZED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSCHEMA);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSCHEMAS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWGRANT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREVOKE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSSL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNDO);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLOCKS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNLOCK);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSHARED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWEXCLUSIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPROCEDURE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNSIGNED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWWHILE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREAD);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWREADS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWPURGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRANGE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWANALYZE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBEFORE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBETWEEN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBOTH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWBINARY);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCONTINUE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCURSOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTRIGGER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRECORDREADER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRECORDWRITER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSEMI);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWLATERAL);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTOUCH);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUNARCHIVE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCOMPUTE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSTATISTICS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUSE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWOPTION);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCONCATENATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSHOW_DATABASE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUPDATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWRESTRICT);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCASCADE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSKEWED);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWROLLUP);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWCUBE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWDIRECTORIES);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWFOR);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWGROUPING);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWSETS);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWTRUNCATE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWNOSCAN);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWUSER);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWROLE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(hivelexer_g_1.Tokens.KWINNER);
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
//# sourceMappingURL=hiveparser.g.js.map