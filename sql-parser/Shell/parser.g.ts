import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  pipelineCommands = 'pipelineCommands',
  number = 'number',
  word = 'word',
  wordList = 'wordList',
  redirection = 'redirection',
  comments = 'comments',
  command = 'command',
  expression = 'expression',
  shellCommand = 'shellCommand',
  condition = 'condition',
  bracketList = 'bracketList',
  echoCommand = 'echoCommand',
  forCommand = 'forCommand',
  forCommandBody = 'forCommandBody',
  selectCommand = 'selectCommand',
  selectCommandBody = 'selectCommandBody',
  caseCommand = 'caseCommand',
  functionDef = 'functionDef',
  subshell = 'subshell',
  ifCommand = 'ifCommand',
  groupCommand = 'groupCommand',
  elifClause = 'elifClause',
  caseClause = 'caseClause',
  customCommand = 'customCommand',
  patternList = 'patternList',
  pattern = 'pattern',
  list = 'list',
  pipelineCommand = 'pipelineCommand',
  timeOpt = 'timeOpt',
  timespec = 'timespec',
  pythonCommand = 'pythonCommand',
  linuxCommand = 'linuxCommand',
  fileManagementCmd = 'fileManagementCmd',
  sleepCmd = 'sleepCmd',
  exitCmd = 'exitCmd',
  touchCmd = 'touchCmd',
  chmodCmd = 'chmodCmd',
  cliOpt = 'cliOpt',
  cliModeChmod = 'cliModeChmod',
  catCmd = 'catCmd',
  chownCmd = 'chownCmd',
  minus = 'minus',
}

export { tokens, Lexer, Tokens, TokenEnum };

export class BaseNode {
  private _source = '';

  kind: SyntaxKind | TokenEnum;
  pos: number;
  end: number;

  get width() {
    return this.end - this.pos;
  }

  get fullText() {
    return this._source.slice(this.pos, this.end);
  }

  get children(): BaseNode[] {
    return [];
  }

  forEach(callback: ((child: BaseNode) => any)) {
    if (!this.children.length) {
      return;
    }

    this.children.forEach(callback);
  }
}

export class Parser extends chevrotain.Parser {
  [x: string]: any;
  constructor(input) {
    super(input, tokens, {
      recoveryEnabled: true,
      outputCst: true,
      maxLookahead: 6,
    });

    this.RULE('root', () => {
      this.OPTION(() => {
        this.SUBRULE(this.pipelineCommands);
      });
    });

    this.RULE('pipelineCommands', () => {
      this.MANY(() => {
        this.SUBRULE(this.pipelineCommand);
      });
    });

    this.RULE('number', () => {
      this.CONSUME(Tokens.DIGIT);
    });

    this.RULE('word', () => {
      this.CONSUME(Tokens.ID);
    });

    this.RULE('wordList', () => {
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.word);
      });
    });

    this.RULE('redirection', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT_REDIRECTION);

                  this.OPTION(() => {
                    this.CONSUME(Tokens.BIT_OR_OP);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT_REDIRECTION);

                  this.OPTION2(() => {
                    this.CONSUME2(Tokens.RIGHT_REDIRECTION);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT_REDIRECTION_WITH_MERGE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT_REDIRECTION_WITH_ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT_REDIRECTION_WITH_ADD);

                  this.OPTION3(() => {
                    this.CONSUME(Tokens.HYPHEN);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DESCRIPTOR_TO_FILE);
                },
              },
            ]);
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.number);
            this.OR3([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.RIGHT_REDIRECTION);

                  this.OPTION4(() => {
                    this.CONSUME2(Tokens.BIT_OR_OP);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.LEFT_REDIRECTION);

                  this.OPTION5(() => {
                    this.CONSUME4(Tokens.RIGHT_REDIRECTION);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.RIGHT_REDIRECTION_WITH_ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.LEFT_REDIRECTION_WITH_ADD);

                  this.OPTION6(() => {
                    this.CONSUME2(Tokens.HYPHEN);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.LEFT_REDIRECTION_WITH_MERGE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                },
              },
            ]);
            this.SUBRULE2(this.word);
          },
        },
        {
          ALT: () => {
            this.OPTION7(() => {
              this.SUBRULE2(this.number);
            });

            this.OR4([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.LEFT_REDIRECTION_WITH_MERGE);
                },
              },
            ]);
            this.OR5([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.HYPHEN);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE3(this.number);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('comments', () => {
      this.CONSUME(Tokens.COMMENT);
    });

    this.RULE('command', () => {
      this.MANY(() => {
        this.SUBRULE(this.comments);
      });

      this.SUBRULE(this.shellCommand);

      this.OPTION(() => {
        this.SUBRULE(this.redirection);
      });
    });

    this.RULE('expression', () => {
      this.SUBRULE(this.word);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.EQUAL_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ADD);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.HYPHEN);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.MULTI);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DEVIDE);
            },
          },
        ]);
        this.OR3([
          {
            ALT: () => {
              this.SUBRULE2(this.word);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.STRING_LITERAL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOLLAR_WITH_LEFT_BRACKET);
              this.SUBRULE(this.list);
              this.CONSUME(Tokens.RIGHT_BRACKET);
            },
          },
        ]);
      });
    });

    this.RULE('shellCommand', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.forCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.caseCommand);
          },
        },
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.WHILE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.UNTIL);
                },
              },
            ]);
            this.SUBRULE(this.bracketList);
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.ifCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.subshell);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.groupCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.customCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.echoCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionDef);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('condition', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.EXCLAMATION_SYMBOL);
      });

      this.SUBRULE(this.word);

      this.OPTION2(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.EQUAL_TO);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_EQUAL_TO);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LEFT_REDIRECTION);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.RIGHT_REDIRECTION);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_SMALLER);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_GREATER);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.EQUAL_TO_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_EQUAL_TO_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.SMALLER_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.GREATER_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_SMALLER_SYMBOL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NOT_GREATER_SYMBOL);
            },
          },
        ]);
        this.OR3([
          {
            ALT: () => {
              this.SUBRULE2(this.word);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.STRING_LITERAL);
            },
          },
        ]);
      });

      this.MANY(() => {
        this.OR4([
          {
            ALT: () => {
              this.CONSUME(Tokens.AND);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.OR);
            },
          },
        ]);
        this.SUBRULE(this.condition);
      });
    });

    this.RULE('bracketList', () => {
      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.LEFT_SQUARE_BRACKET);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOUBLE_LEFT_SQUARE_BRACKET);
            },
          },
        ]);
      });

      this.SUBRULE(this.condition);

      this.OPTION2(() => {
        this.OR3([
          {
            ALT: () => {
              this.CONSUME(Tokens.RIGHT_SQUARE_BRACKET);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOUBLE_RIGHT_SQUARE_BRACKET);
            },
          },
        ]);
      });
    });

    this.RULE('echoCommand', () => {
      this.CONSUME(Tokens.ECHO);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.SUBRULE(this.word);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.STRING_LITERAL);
            },
          },
        ]);
      });
    });

    this.RULE('forCommand', () => {
      this.CONSUME(Tokens.FOR);
      this.SUBRULE(this.word);
      this.CONSUME(Tokens.IN);
      this.SUBRULE(this.wordList);
      this.CONSUME(Tokens.SEMI);
      this.SUBRULE(this.forCommandBody);
    });

    this.RULE('forCommandBody', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT_BRACE);
            this.SUBRULE2(this.list);
            this.CONSUME(Tokens.RIGHT_BRACE);
          },
        },
      ]);
    });

    this.RULE('selectCommand', () => {
      this.CONSUME(Tokens.SELECT);
      this.SUBRULE(this.word);
      this.CONSUME(Tokens.IN);
      this.SUBRULE(this.wordList);
      this.CONSUME(Tokens.SEMI);
      this.SUBRULE(this.selectCommandBody);
    });

    this.RULE('selectCommandBody', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.groupCommand);
          },
        },
      ]);
    });

    this.RULE('caseCommand', () => {
      this.CONSUME(Tokens.CASE);
      this.SUBRULE(this.word);
      this.CONSUME(Tokens.IN);
      this.SUBRULE(this.caseClause);
      this.CONSUME(Tokens.CASE_END);
    });

    this.RULE('functionDef', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
            this.CONSUME(Tokens.LEFT_BRACKET);
            this.CONSUME(Tokens.RIGHT_BRACKET);
            this.SUBRULE(this.groupCommand);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
            this.SUBRULE2(this.word);

            this.OPTION(() => {
              this.CONSUME2(Tokens.LEFT_BRACKET);
              this.CONSUME2(Tokens.RIGHT_BRACKET);
            });

            this.SUBRULE2(this.groupCommand);
          },
        },
      ]);
    });

    this.RULE('subshell', () => {
      this.CONSUME(Tokens.LEFT_BRACKET);
      this.SUBRULE(this.list);
      this.CONSUME(Tokens.RIGHT_BRACKET);
    });

    this.RULE('ifCommand', () => {
      this.CONSUME(Tokens.IF);

      this.OPTION(() => {
        this.CONSUME(Tokens.LEFT_SQUARE_BRACKET);
      });

      this.SUBRULE(this.condition);

      this.OPTION2(() => {
        this.CONSUME(Tokens.RIGHT_SQUARE_BRACKET);
      });

      this.CONSUME(Tokens.THEN);
      this.SUBRULE(this.list);

      this.OPTION3(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE2(this.list);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.elifClause);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.IF_END);
    });

    this.RULE('groupCommand', () => {
      this.CONSUME(Tokens.LEFT_BRACE);
      this.SUBRULE(this.list);
      this.CONSUME(Tokens.RIGHT_BRACE);
    });

    this.RULE('elifClause', () => {
      this.CONSUME(Tokens.ELSE_IF);
      this.SUBRULE(this.condition);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE(this.list);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE2(this.list);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.elifClause);
            },
          },
        ]);
      });
    });

    this.RULE('caseClause', () => {
      this.SUBRULE(this.patternList);

      this.OPTION(() => {
        this.CONSUME(Tokens.DOUBLE_SEMI);
        this.SUBRULE2(this.patternList);
      });
    });

    this.RULE('customCommand', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.linuxCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.pythonCommand);
          },
        },
      ]);
    });

    this.RULE('patternList', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.LEFT_BRACKET);
      });

      this.SUBRULE(this.pattern);
      this.CONSUME(Tokens.RIGHT_BRACKET);
      this.SUBRULE(this.list);
    });

    this.RULE('pattern', () => {
      this.SUBRULE(this.word);

      this.MANY(() => {
        this.CONSUME(Tokens.BIT_OR_OP);
        this.SUBRULE2(this.word);
      });
    });

    this.RULE('list', () => {
      this.SUBRULE(this.pipelineCommand);

      this.MANY(() => {
        this.OPTION(() => {
          this.OR2([
            {
              ALT: () => {
                this.CONSUME(Tokens.AND);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.OR);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.BIT_AND_OP);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.SEMI);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.BIT_OR_OP);
              },
            },
          ]);
        });

        this.SUBRULE2(this.pipelineCommand);
      });
    });

    this.RULE('pipelineCommand', () => {
      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.EXCLAMATION_SYMBOL);

              this.OPTION2(() => {
                this.SUBRULE(this.timespec);
              });
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.timespec);

              this.OPTION3(() => {
                this.CONSUME2(Tokens.EXCLAMATION_SYMBOL);
              });
            },
          },
        ]);
      });

      this.SUBRULE(this.command);
    });

    this.RULE('timeOpt', () => {
      this.CONSUME(Tokens.TIME_OPT);
    });

    this.RULE('timespec', () => {
      this.CONSUME(Tokens.TIME);

      this.OPTION(() => {
        this.SUBRULE(this.timeOpt);
      });
    });

    this.RULE('pythonCommand', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.PYTHON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PIP);
          },
        },
      ]);

      this.MANY(() => {
        this.SUBRULE(this.word);
      });
    });

    this.RULE('linuxCommand', () => {
      this.SUBRULE(this.fileManagementCmd);
    });

    this.RULE('fileManagementCmd', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.touchCmd);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.chmodCmd);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.exitCmd);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.sleepCmd);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.catCmd);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.chownCmd);
          },
        },
      ]);
    });

    this.RULE('sleepCmd', () => {
      this.CONSUME(Tokens.SLEEP);
      this.CONSUME(Tokens.DIGIT);
    });

    this.RULE('exitCmd', () => {
      this.CONSUME(Tokens.EXIT);
      this.CONSUME(Tokens.ID);
    });

    this.RULE('touchCmd', () => {
      this.CONSUME(Tokens.TOUCH);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.SUBRULE(this.cliOpt);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NO_CREATE);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.ID);
    });

    this.RULE('chmodCmd', () => {
      this.CONSUME(Tokens.CHMOD);

      this.OPTION(() => {
        this.SUBRULE(this.cliOpt);
      });

      this.SUBRULE(this.cliModeChmod);
      this.CONSUME(Tokens.ID);
    });

    this.RULE('cliOpt', () => {
      this.CONSUME(Tokens.ID);
    });

    this.RULE('cliModeChmod', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CLI_CHMOD_MOD);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.CONSUME2(Tokens.CLI_CHMOD_MOD);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIGIT_TO_SEVEN);
          },
        },
      ]);
    });

    this.RULE('catCmd', () => {
      this.CONSUME(Tokens.CAT);

      this.OPTION(() => {
        this.SUBRULE(this.cliOpt);
      });

      this.CONSUME(Tokens.ID);
    });

    this.RULE('chownCmd', () => {
      this.CONSUME(Tokens.CHOWN);

      this.OPTION(() => {
        this.SUBRULE(this.cliOpt);
      });

      this.CONSUME(Tokens.ID);

      this.OPTION2(() => {
        this.CONSUME(Tokens.COLON);
        this.CONSUME2(Tokens.ID);
      });

      this.CONSUME3(Tokens.ID);
    });

    this.RULE('minus', () => {
      this.CONSUME(Tokens.HYPHEN);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
