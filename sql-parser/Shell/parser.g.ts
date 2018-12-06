import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  number = 'number',
  word = 'word',
  wordList = 'wordList',
  assignmentWord = 'assignmentWord',
  redirection = 'redirection',
  redirectionList = 'redirectionList',
  simpleCommand = 'simpleCommand',
  simpleCommandElement = 'simpleCommandElement',
  command = 'command',
  shellCommand = 'shellCommand',
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
  patternList = 'patternList',
  caseClauseSequence = 'caseClauseSequence',
  pattern = 'pattern',
  list = 'list',
  compoundList = 'compoundList',
  list0 = 'list0',
  list1 = 'list1',
  listTerminator = 'listTerminator',
  newlineList = 'newlineList',
  pipelineCommand = 'pipelineCommand',
  timeOpt = 'timeOpt',
  timespec = 'timespec',
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

    this.RULE('number', () => {
      this.CONSUME(Tokens.DIGIT);
    });

    this.RULE('word', () => {
      this.CONSUME(Tokens.LETTER);

      this.OPTION(() => {
        this.CONSUME(Tokens.UNDERLINE);
      });
    });

    this.RULE('wordList', () => {
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.word);
      });
    });

    this.RULE('assignmentWord', () => {
      this.SUBRULE(this.word);
      this.CONSUME(Tokens.EQUAL_SYMBOL);
      this.SUBRULE2(this.word);
    });

    this.RULE('redirection', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT_REDIRECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT_REDIRECTION);
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
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DESCRIPTOR_TO_FILE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.LEFT_REDIRECTION_WITH_ADD);
                  this.CONSUME(Tokens.HYPHEN);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.LEFT_REDIRECTION);
                  this.CONSUME2(Tokens.RIGHT_REDIRECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.RIGHT_REDIRECTION);
                  this.CONSUME(Tokens.BIT_OR_OP);
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
                  this.CONSUME4(Tokens.RIGHT_REDIRECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.LEFT_REDIRECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.RIGHT_REDIRECTION_WITH_ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.LEFT_REDIRECTION_WITH_ADD);
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
              {
                ALT: () => {
                  this.CONSUME4(Tokens.LEFT_REDIRECTION);
                  this.CONSUME5(Tokens.RIGHT_REDIRECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME6(Tokens.RIGHT_REDIRECTION);
                  this.CONSUME2(Tokens.BIT_OR_OP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.LEFT_REDIRECTION_WITH_ADD);
                  this.CONSUME2(Tokens.HYPHEN);
                },
              },
            ]);
            this.SUBRULE2(this.word);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
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

    this.RULE('redirectionList', () => {
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.redirection);
      });
    });

    this.RULE('simpleCommand', () => {
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.simpleCommandElement);
      });
    });

    this.RULE('simpleCommandElement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.assignmentWord);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.redirection);
          },
        },
      ]);
    });

    this.RULE('command', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleCommand);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.shellCommand);

            this.OPTION(() => {
              this.SUBRULE(this.redirectionList);
            });
          },
        },
      ]);
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
            this.SUBRULE(this.compoundList);
            this.CONSUME(Tokens.DO);
            this.SUBRULE2(this.compoundList);
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
            this.SUBRULE(this.functionDef);
          },
        },
      ]);
    });

    this.RULE('forCommand', () => {
      this.CONSUME(Tokens.FOR);
      this.SUBRULE(this.word);
      this.OR2([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.SEMI);
            });

            this.SUBRULE(this.newlineList);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.newlineList);
            this.CONSUME(Tokens.IN);
            this.SUBRULE(this.wordList);
            this.SUBRULE(this.listTerminator);
            this.SUBRULE3(this.newlineList);
          },
        },
      ]);
      this.SUBRULE(this.forCommandBody);
    });

    this.RULE('forCommandBody', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.compoundList);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT_BRACE);
            this.SUBRULE2(this.compoundList);
            this.CONSUME(Tokens.RIGHT_BRACE);
          },
        },
      ]);
    });

    this.RULE('selectCommand', () => {
      this.CONSUME(Tokens.SELECT);
      this.SUBRULE(this.word);
      this.OR2([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.SEMI);
            });

            this.SUBRULE(this.newlineList);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.newlineList);
            this.CONSUME(Tokens.IN);
            this.SUBRULE(this.wordList);
            this.SUBRULE(this.listTerminator);
            this.SUBRULE3(this.newlineList);
          },
        },
      ]);
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
      this.SUBRULE(this.newlineList);
      this.CONSUME(Tokens.IN);
      this.OR2([
        {
          ALT: () => {
            this.SUBRULE2(this.newlineList);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.caseClauseSequence);
            this.SUBRULE3(this.newlineList);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.caseClause);
          },
        },
      ]);
      this.CONSUME(Tokens.CASE_END);
    });

    this.RULE('functionDef', () => {
      this.OR2([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.FUNCTION);
            });

            this.SUBRULE(this.word);
            this.CONSUME(Tokens.LEFT_BRACKET);
            this.CONSUME(Tokens.RIGHT_BRACKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.FUNCTION);
            this.SUBRULE2(this.word);
          },
        },
      ]);
      this.SUBRULE(this.newlineList);
      this.SUBRULE(this.groupCommand);
    });

    this.RULE('subshell', () => {
      this.CONSUME(Tokens.LEFT_BRACKET);
      this.SUBRULE(this.compoundList);
      this.CONSUME(Tokens.RIGHT_BRACKET);
    });

    this.RULE('ifCommand', () => {
      this.CONSUME(Tokens.IF);
      this.SUBRULE(this.compoundList);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.compoundList);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE3(this.compoundList);
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
      this.SUBRULE(this.compoundList);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.compoundList);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE3(this.compoundList);
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
      this.OPTION(() => {
        this.SUBRULE(this.caseClauseSequence);
      });

      this.SUBRULE(this.patternList);
    });

    this.RULE('patternList', () => {
      this.SUBRULE(this.newlineList);

      this.OPTION(() => {
        this.CONSUME(Tokens.LEFT_BRACKET);
      });

      this.SUBRULE(this.pattern);
      this.CONSUME(Tokens.RIGHT_BRACKET);
      this.OR2([
        {
          ALT: () => {
            this.SUBRULE(this.compoundList);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.newlineList);
          },
        },
      ]);
    });

    this.RULE('caseClauseSequence', () => {
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.patternList);
        this.CONSUME(Tokens.DOUBLE_SEMI);
      });
    });

    this.RULE('pattern', () => {
      this.SUBRULE(this.word);

      this.OPTION(() => {
        this.CONSUME(Tokens.BIT_OR_OP);
        this.SUBRULE2(this.word);
      });
    });

    this.RULE('list', () => {
      this.SUBRULE(this.newlineList);
      this.SUBRULE(this.list0);
    });

    this.RULE('compoundList', () => {
      this.SUBRULE(this.newlineList);
      this.OR2([
        {
          ALT: () => {
            this.SUBRULE(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.list0);
          },
        },
      ]);
    });

    this.RULE('list0', () => {
      this.SUBRULE(this.list1);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.LINE_FEED);
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
      this.SUBRULE(this.newlineList);
    });

    this.RULE('list1', () => {
      this.SUBRULE(this.pipelineCommand);

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
        ]);
        this.SUBRULE2(this.pipelineCommand);
      });
    });

    this.RULE('listTerminator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LINE_FEED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEMI);
          },
        },
      ]);
    });

    this.RULE('newlineList', () => {
      this.CONSUME(Tokens.LINE_FEED);
    });

    this.RULE('pipelineCommand', () => {
      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.SUBRULE(this.timespec);

              this.OPTION2(() => {
                this.CONSUME(Tokens.EXCLAMATION_SYMBOL);
              });
            },
          },
          {
            ALT: () => {
              this.CONSUME2(Tokens.EXCLAMATION_SYMBOL);

              this.OPTION3(() => {
                this.SUBRULE2(this.timespec);
              });
            },
          },
        ]);
      });

      this.SUBRULE(this.command);

      this.OPTION4(() => {
        this.CONSUME(Tokens.BIT_OR_OP);
        this.SUBRULE(this.newlineList);
        this.SUBRULE2(this.command);
      });
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

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
