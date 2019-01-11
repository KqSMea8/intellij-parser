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
        SyntaxKind["pipelineCommands"] = "pipelineCommands";
        SyntaxKind["number"] = "number";
        SyntaxKind["word"] = "word";
        SyntaxKind["wordList"] = "wordList";
        SyntaxKind["redirection"] = "redirection";
        SyntaxKind["comments"] = "comments";
        SyntaxKind["command"] = "command";
        SyntaxKind["expression"] = "expression";
        SyntaxKind["shellCommand"] = "shellCommand";
        SyntaxKind["condition"] = "condition";
        SyntaxKind["bracketList"] = "bracketList";
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
        SyntaxKind["pythonCommand"] = "pythonCommand";
        SyntaxKind["linuxCommand"] = "linuxCommand";
        SyntaxKind["fileManagementCmd"] = "fileManagementCmd";
        SyntaxKind["sleepCmd"] = "sleepCmd";
        SyntaxKind["exitCmd"] = "exitCmd";
        SyntaxKind["touchCmd"] = "touchCmd";
        SyntaxKind["chmodCmd"] = "chmodCmd";
        SyntaxKind["cliOpt"] = "cliOpt";
        SyntaxKind["cliModeChmod"] = "cliModeChmod";
        SyntaxKind["catCmd"] = "catCmd";
        SyntaxKind["chownCmd"] = "chownCmd";
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
                    _this.SUBRULE(_this.pipelineCommands);
                });
            });
            _this.RULE('pipelineCommands', function () {
                _this.MANY(function () {
                    _this.SUBRULE(_this.pipelineCommand);
                });
            });
            _this.RULE('number', function () {
                _this.CONSUME(lexer_g_1.Tokens.DIGIT);
            });
            _this.RULE('word', function () {
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('wordList', function () {
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.word);
                });
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
                _this.SUBRULE(_this.shellCommand);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.redirection);
                });
            });
            _this.RULE('expression', function () {
                _this.SUBRULE(_this.word);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ADD);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.HYPHEN);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.MULTI);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DEVIDE);
                            },
                        },
                    ]);
                    _this.OR3([
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.word);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOLLAR_WITH_LEFT_BRACKET);
                                _this.SUBRULE(_this.list);
                                _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACKET);
                            },
                        },
                    ]);
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
                            _this.SUBRULE(_this.bracketList);
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
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        },
                    },
                ]);
            });
            _this.RULE('condition', function () {
                _this.OPTION(function () {
                    _this.CONSUME(lexer_g_1.Tokens.EXCLAMATION_SYMBOL);
                });
                _this.SUBRULE(_this.word);
                _this.OPTION2(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_TO);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_EQUAL_TO);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.LEFT_REDIRECTION);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.RIGHT_REDIRECTION);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_SMALLER);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_GREATER);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.EQUAL_TO_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_EQUAL_TO_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.SMALLER_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.GREATER_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_SMALLER_SYMBOL);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NOT_GREATER_SYMBOL);
                            },
                        },
                    ]);
                    _this.OR3([
                        {
                            ALT: function () {
                                _this.SUBRULE2(_this.word);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            },
                        },
                    ]);
                });
                _this.MANY(function () {
                    _this.OR4([
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
                    ]);
                    _this.SUBRULE(_this.condition);
                });
            });
            _this.RULE('bracketList', function () {
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.LEFT_SQUARE_BRACKET);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOUBLE_LEFT_SQUARE_BRACKET);
                            },
                        },
                    ]);
                });
                _this.SUBRULE(_this.condition);
                _this.OPTION2(function () {
                    _this.OR3([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.RIGHT_SQUARE_BRACKET);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.DOUBLE_RIGHT_SQUARE_BRACKET);
                            },
                        },
                    ]);
                });
            });
            _this.RULE('echoCommand', function () {
                _this.CONSUME(lexer_g_1.Tokens.ECHO);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.word);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.STRING_LITERAL);
                            },
                        },
                    ]);
                });
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
                            _this.SUBRULE(_this.word);
                            _this.CONSUME(lexer_g_1.Tokens.LEFT_BRACKET);
                            _this.CONSUME(lexer_g_1.Tokens.RIGHT_BRACKET);
                            _this.SUBRULE(_this.groupCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.FUNCTION);
                            _this.SUBRULE2(_this.word);
                            _this.OPTION(function () {
                                _this.CONSUME2(lexer_g_1.Tokens.LEFT_BRACKET);
                                _this.CONSUME2(lexer_g_1.Tokens.RIGHT_BRACKET);
                            });
                            _this.SUBRULE2(_this.groupCommand);
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
                _this.SUBRULE(_this.condition);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.RIGHT_SQUARE_BRACKET);
                });
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE(_this.list);
                _this.OPTION3(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE2(_this.list);
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
                _this.CONSUME(lexer_g_1.Tokens.ELSE_IF);
                _this.SUBRULE(_this.condition);
                _this.CONSUME(lexer_g_1.Tokens.THEN);
                _this.SUBRULE(_this.list);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.ELSE);
                                _this.SUBRULE2(_this.list);
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
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.linuxCommand);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.pythonCommand);
                        },
                    },
                ]);
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
                    _this.OPTION(function () {
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
                            {
                                ALT: function () {
                                    _this.CONSUME(lexer_g_1.Tokens.BIT_OR_OP);
                                },
                            },
                        ]);
                    });
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
            _this.RULE('pythonCommand', function () {
                _this.OR2([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PYTHON);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.PIP);
                        },
                    },
                ]);
                _this.MANY(function () {
                    _this.SUBRULE(_this.word);
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
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.exitCmd);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.sleepCmd);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.catCmd);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.chownCmd);
                        },
                    },
                ]);
            });
            _this.RULE('sleepCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.SLEEP);
                _this.CONSUME(lexer_g_1.Tokens.DIGIT);
            });
            _this.RULE('exitCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.EXIT);
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('touchCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.TOUCH);
                _this.OPTION(function () {
                    _this.OR2([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.cliOpt);
                            },
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(lexer_g_1.Tokens.NO_CREATE);
                            },
                        },
                    ]);
                });
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('chmodCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.CHMOD);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.cliOpt);
                });
                _this.SUBRULE(_this.cliModeChmod);
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('cliOpt', function () {
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('cliModeChmod', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.CLI_CHMOD_MOD);
                            _this.MANY(function () {
                                _this.CONSUME(lexer_g_1.Tokens.COMMA);
                                _this.CONSUME2(lexer_g_1.Tokens.CLI_CHMOD_MOD);
                            });
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(lexer_g_1.Tokens.DIGIT_TO_SEVEN);
                        },
                    },
                ]);
            });
            _this.RULE('catCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.CAT);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.cliOpt);
                });
                _this.CONSUME(lexer_g_1.Tokens.ID);
            });
            _this.RULE('chownCmd', function () {
                _this.CONSUME(lexer_g_1.Tokens.CHOWN);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.cliOpt);
                });
                _this.CONSUME(lexer_g_1.Tokens.ID);
                _this.OPTION2(function () {
                    _this.CONSUME(lexer_g_1.Tokens.COLON);
                    _this.CONSUME2(lexer_g_1.Tokens.ID);
                });
                _this.CONSUME3(lexer_g_1.Tokens.ID);
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