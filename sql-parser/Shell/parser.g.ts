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
  shellCommand = 'shellCommand',
  bracketList = 'bracketList',
  doubleBracketList = 'doubleBracketList',
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
  linuxCommand = 'linuxCommand',
  fileManagementCmd = 'fileManagementCmd',
  touchCmd = 'touchCmd',
  chmodCmd = 'chmodCmd',
  chmodMode = 'chmodMode',
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
      this.OPTION(() => {
        this.SUBRULE(this.comments);
      });

      this.SUBRULE(this.shellCommand);

      this.OPTION2(() => {
        this.SUBRULE(this.redirection);
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
            this.SUBRULE(this.doubleBracketList);
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
            this.SUBRULE(this.word);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL_SYMBOL);
              this.SUBRULE2(this.word);
            });
          },
        },
      ]);
    });

    this.RULE('bracketList', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.LEFT_SQUARE_BRACKET);
      });

      this.SUBRULE(this.list);

      this.OPTION2(() => {
        this.CONSUME(Tokens.RIGHT_SQUARE_BRACKET);
      });
    });

    this.RULE('doubleBracketList', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.LEFT_SQUARE_BRACKET);
      });

      this.SUBRULE(this.bracketList);

      this.OPTION2(() => {
        this.CONSUME(Tokens.RIGHT_SQUARE_BRACKET);
      });
    });

    this.RULE('echoCommand', () => {
      this.CONSUME(Tokens.ECHO);
      this.SUBRULE(this.word);
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

      this.SUBRULE(this.list);

      this.OPTION2(() => {
        this.CONSUME(Tokens.RIGHT_SQUARE_BRACKET);
      });

      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.list);

      this.OPTION3(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE3(this.list);
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
      this.CONSUME(Tokens.ELSE_END);
      this.SUBRULE(this.list);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.list);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE3(this.list);
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
      this.SUBRULE(this.linuxCommand);
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
        ]);
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
      ]);
    });

    this.RULE('touchCmd', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TOUCH);

            this.MANY(() => {
              this.CONSUME(Tokens.HYPHEN);

              this.AT_LEAST_ONE(() => {
                this.OR2([
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_A_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_M_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_C_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_F_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_R_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_D_LOWER);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.OPTION_T_LOWER);
                    },
                  },
                ]);
              });
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DOUBLE_HYPHEN);
            this.CONSUME(Tokens.NO_CREATE);
            this.CONSUME(Tokens.ID);
          },
        },
      ]);
    });

    this.RULE('chmodCmd', () => {
      this.CONSUME(Tokens.CHMOD);

      this.OPTION(() => {
        this.CONSUME(Tokens.HYPHEN);

        this.AT_LEAST_ONE(() => {
          this.OR2([
            {
              ALT: () => {
                this.CONSUME(Tokens.OPTION_C_LOWER);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.OPTION_F_LOWER);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.OPTION_V_LOWER);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.OPTION_R);
              },
            },
          ]);
        });
      });

      this.SUBRULE(this.chmodMode);
      this.CONSUME(Tokens.ID);
    });

    this.RULE('chmodMode', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_U_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_G_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_O_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_A_LOWER);
                },
              },
            ]);
            this.OR3([
              {
                ALT: () => {
                  this.SUBRULE(this.minus);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.EQUAL_SYMBOL);
                },
              },
            ]);
            this.OR4([
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_R_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_W_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_X_LOWER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTION_X);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIGIT_TO_SEVEN);
          },
        },
      ]);
    });

    this.RULE('minus', () => {
      this.CONSUME(Tokens.HYPHEN);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
