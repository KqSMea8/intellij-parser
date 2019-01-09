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
        SyntaxKind["number"] = "number";
        SyntaxKind["word"] = "word";
        SyntaxKind["wordList"] = "wordList";
        SyntaxKind["variableUsed"] = "variableUsed";
        SyntaxKind["redirection"] = "redirection";
        SyntaxKind["comments"] = "comments";
        SyntaxKind["command"] = "command";
        SyntaxKind["shellCommand"] = "shellCommand";
        SyntaxKind["bracketList"] = "bracketList";
        SyntaxKind["doubleBracketList"] = "doubleBracketList";
        SyntaxKind["echoCommand"] = "echoCommand";
        SyntaxKind["forCommand"] = "forCommand";
        SyntaxKind["forCommandBody"] = "forCommandBody";
        SyntaxKind["selectCommand"] = "selectCommand";
        SyntaxKind["selectCommandBody"] = "selectCommandBody";
        SyntaxKind["caseCommand"] = "caseCommand";
        SyntaxKind["functionDef"] = "functionDef";
        SyntaxKind["subshell"] = "subshell";
        SyntaxKind["ifCommand"] = "ifCommand";
        SyntaxKind["groupCommand"] = "groupCommand";
        SyntaxKind["elifClause"] = "elifClause";
        SyntaxKind["caseClause"] = "caseClause";
        SyntaxKind["customCommand"] = "customCommand";
        SyntaxKind["patternList"] = "patternList";
        SyntaxKind["pattern"] = "pattern";
        SyntaxKind["list"] = "list";
        SyntaxKind["pipelineCommand"] = "pipelineCommand";
        SyntaxKind["timeOpt"] = "timeOpt";
        SyntaxKind["timespec"] = "timespec";
        SyntaxKind["linuxCommand"] = "linuxCommand";
        SyntaxKind["fileManagementCmd"] = "fileManagementCmd";
        SyntaxKind["touchCmd"] = "touchCmd";
        SyntaxKind["chmodCmd"] = "chmodCmd";
        SyntaxKind["chmodMode"] = "chmodMode";
        SyntaxKind["minus"] = "minus";
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
                    _this.SUBRULE(_this.pipelineCommand);
                });
            });
            _this.RULE('number', function () {
                _this.CONSUME(lexer_g_1.Tokens.DIGIT);
            });
            _this.RULE('word', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.variableUsed);
                        },
                    },
                ]);
            });
            _this.RULE('wordList', function () {
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.word);
                });
            });
            _this.RULE('variableUsed', function () {
                _this.CONSUME(lexer_g_1.Tokens.VARIABLE);
            });
            _this.RULE('redirection', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.RIGHT_REDIRECTION);
                                        _this.OPTION(function () {
                                            _this.CONSUME(lexer_g_1.Tokens.BIT_OR_OP);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LEFT_REDIRECTION);
                                        _this.OPTION2(function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.RIGHT_REDIRECTION);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LEFT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.RIGHT_REDIRECTION_WITH_ADD);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.LEFT_REDIRECTION_WITH_ADD);
                                        _this.OPTION3(function () {
                                            _this.CONSUME(lexer_g_1.Tokens.HYPHEN);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.DESCRIPTOR_TO_FILE);
                                    },
                                },
                            ]);
                            _this.SUBRULE(_this.word);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.number);
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.RIGHT_REDIRECTION);
                                        _this.OPTION4(function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.BIT_OR_OP);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.LEFT_REDIRECTION);
                                        _this.OPTION5(function () {
                                            _this.CONSUME4(lexer_g_1.Tokens.RIGHT_REDIRECTION);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.RIGHT_REDIRECTION_WITH_ADD);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.LEFT_REDIRECTION_WITH_ADD);
                                        _this.OPTION6(function () {
                                            _this.CONSUME2(lexer_g_1.Tokens.HYPHEN);
                                        });
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.LEFT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(lexer_g_1.Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                            ]);
                            _this.SUBRULE2(_this.word);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OPTION7(function () {
                                _this.SUBRULE2(_this.number);
                            });
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.LEFT_REDIRECTION_WITH_MERGE);
                                    },
                                },
                            ]);
                            _this.OR5([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(lexer_g_1.Tokens.HYPHEN);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE3(_this.number);
                                    },
                                },
                            ]);
                        },
                    },
                ]);
            });
            _this.RULE('comments', function () {
                _this.CONSUME(lexer_g_1.Tokens.COMMENT);
            });
            _this.RULE('command', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.comments);
                });
                _this.MANY2(function () {
                    _this.SUBRULE(_this.shellCommand);
                });
                _this.MANY3(function () {
                    _this.SUBRULE(_this.redirection);
                });
            });
            _this.RULE('shellCommand', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.forCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.caseCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.WHILE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.UNTIL);
                                    },
                                },
                            ]);
                            _this.SUBRULE(_this.doubleBracketList);
                            _this.CONSUME(lexer_g_1.Tokens.DO);
                            _this.SUBRULE(_this.list);
                            _this.CONSUME(lexer_g_1.Tokens.DONE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.ifCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.subshell);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.groupCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.customCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.echoCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionDef);
                        },
                    },
                ]);
            });
            _this.RULE('bracketList', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LEFT_SQUARE_BRACKET);
                });
                _this.SUBRULE(_this.list);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.RIGHT_SQUARE_BRACKET);
                });
            });
            _this.RULE('doubleBracketList', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LEFT_SQUARE_BRACKET);
                });
                _this.SUBRULE(_this.bracketList);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.RIGHT_SQUARE_BRACKET);
                });
            });
            _this.RULE('echoCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.ECHO);
                _this.SUBRULE(_this.word);
            });
            _this.RULE('forCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.FOR);
                _this.SUBRULE(_this.word);
                _this.CONSUME(lexer_g_1.Tokens.IN);
                _this.SUBRULE(_this.wordList);
                _this.CONSUME(lexer_g_1.Tokens.SEMI);
                _this.SUBRULE(_this.forCommandBody);
            });
            _this.RULE('forCommandBody', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DO);
                            _this.SUBRULE(_this.list);
                            _this.CONSUME(lexer_g_1.Tokens.DONE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACE);
                            _this.SUBRULE2(_this.list);
                            _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACE);
                        },
                    },
                ]);
            });
            _this.RULE('selectCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.SELECT);
                _this.SUBRULE(_this.word);
                _this.CONSUME(lexer_g_1.Tokens.IN);
                _this.SUBRULE(_this.wordList);
                _this.CONSUME(lexer_g_1.Tokens.SEMI);
                _this.SUBRULE(_this.selectCommandBody);
            });
            _this.RULE('selectCommandBody', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DO);
                            _this.SUBRULE(_this.list);
                            _this.CONSUME(lexer_g_1.Tokens.DONE);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.groupCommand);
                        },
                    },
                ]);
            });
            _this.RULE('caseCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.CASE);
                _this.SUBRULE(_this.word);
                _this.CONSUME(lexer_g_1.Tokens.IN);
                _this.SUBRULE(_this.caseClause);
                _this.CONSUME(lexer_g_1.Tokens.CASE_END);
            });
            _this.RULE('functionDef', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(lexer_g_1.Tokens.FUNCTION);
                            });
                            _this.SUBRULE(_this.word);
                            _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACKET);
                            _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACKET);
                            _this.SUBRULE(_this.groupCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME2(lexer_g_1.Tokens.FUNCTION);
                            _this.SUBRULE2(_this.word);
                            _this.SUBRULE2(_this.groupCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.word);
                            _this.OPTION2(function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                                _this.SUBRULE4(_this.word);
                            });
                        },
                    },
                ]);
            });
            _this.RULE('subshell', function () {
                _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACKET);
                _this.SUBRULE(_this.list);
                _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACKET);
            });
            _this.RULE('ifCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.IF);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LEFT_SQUARE_BRACKET);
                });
                _this.SUBRULE(_this.list);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.RIGHT_SQUARE_BRACKET);
                });
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE2(_this.list);
                _this.OPTION3(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE3(_this.list);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.elifClause);
                            },
                        },
                    ]);
                });
                _this.CONSUME(lexer_g_1.Tokens.IF_END);
            });
            _this.RULE('groupCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACE);
                _this.SUBRULE(_this.list);
                _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACE);
            });
            _this.RULE('elifClause', function () {
                _this.CONSUME(lexer_g_1.Tokens.ELSE_END);
                _this.SUBRULE(_this.list);
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE2(_this.list);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE3(_this.list);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.elifClause);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('caseClause', function () {
                _this.SUBRULE(_this.patternList);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.DOUBLE_SEMI);
                    _this.SUBRULE2(_this.patternList);
                });
            });
            _this.RULE('customCommand', function () {
                _this.SUBRULE(_this.linuxCommand);
            });
            _this.RULE('patternList', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACKET);
                });
                _this.SUBRULE(_this.pattern);
                _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACKET);
                _this.SUBRULE(_this.list);
            });
            _this.RULE('pattern', function () {
                _this.SUBRULE(_this.word);
                _this.MANY(function () {
                    _this.CONSUME(lexer_g_1.Tokens.BIT_OR_OP);
                    _this.SUBRULE2(_this.word);
                });
            });
            _this.RULE('list', function () {
                _this.SUBRULE(_this.pipelineCommand);
                _this.MANY(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.AND);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.OR);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.BIT_AND_OP);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.SEMI);
                            },
                        },
                    ]);
                    _this.SUBRULE2(_this.pipelineCommand);
                });
            });
            _this.RULE('pipelineCommand', function () {
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.EXCLAMATION_SYMBOL);
                                _this.OPTION2(function () {
                                    _this.SUBRULE(_this.timespec);
                                });
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.timespec);
                                _this.OPTION3(function () {
                                    _this.CONSUME2(lexer_g_1.Tokens.EXCLAMATION_SYMBOL);
                                });
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.command);
            });
            _this.RULE('timeOpt', function () {
                _this.CONSUME(lexer_g_1.Tokens.TIME_OPT);
            });
            _this.RULE('timespec', function () {
                _this.CONSUME(lexer_g_1.Tokens.TIME);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.timeOpt);
                });
            });
            _this.RULE('linuxCommand', function () {
                _this.SUBRULE(_this.fileManagementCmd);
            });
            _this.RULE('fileManagementCmd', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.touchCmd);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.chmodCmd);
                        },
                    },
                ]);
            });
            _this.RULE('touchCmd', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.TOUCH);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.HYPHEN);
                                _this.AT_LEAST_ONE(function () {
                                    _this.OR2([
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_A_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_M_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_C_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_F_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_R_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_D_LOWER);
                                            },
                                        },
                                        {
                                            ALT: function () {
                                                _this.CONSUME(lexer_g_1.Tokens.OPTION_T_LOWER);
                                            },
                                        },
                                    ]);
                                });
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DOUBLE_HYPHEN);
                            _this.CONSUME(lexer_g_1.Tokens.NO_CREATE);
                            _this.CONSUME(lexer_g_1.Tokens.FILEPATH);
                        },
                    },
                ]);
            });
            _this.RULE('chmodCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.CHMOD);
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.HYPHEN);
                    _this.AT_LEAST_ONE(function () {
                        _this.OR2([
                            {
                                ALT: function () {
                                    _this.CONSUME(lexer_g_1.Tokens.OPTION_C_LOWER);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(lexer_g_1.Tokens.OPTION_F_LOWER);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(lexer_g_1.Tokens.OPTION_V_LOWER);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(lexer_g_1.Tokens.OPTION_R);
                                },
                            },
                        ]);
                    });
                });
                _this.SUBRULE(_this.chmodMode);
                _this.CONSUME(lexer_g_1.Tokens.FILEPATH);
            });
            _this.RULE('chmodMode', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR2([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_U_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_G_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_O_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_A_LOWER);
                                    },
                                },
                            ]);
                            _this.OR3([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.minus);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.ADD);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                                    },
                                },
                            ]);
                            _this.OR4([
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_R_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_W_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_X_LOWER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(lexer_g_1.Tokens.OPTION_X);
                                    },
                                },
                            ]);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIGIT_TO_SEVEN);
                        },
                    },
                ]);
            });
            _this.RULE('minus', function () {
                _this.CONSUME(lexer_g_1.Tokens.HYPHEN);
            });
            chevrotain.Parser.performSelfAnalysis(_this);
            return _this;
        }
        return Parser;
    }(chevrotain.Parser));
    exports.Parser = Parser;
});
//# sourceMappingURL=parser.g.js.map