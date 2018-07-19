import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  emptyStatement = 'emptyStatement',
  sqlStatement = 'sqlStatement',
  dmlStatement = 'dmlStatement',
  selectStatement = 'selectStatement',
  updateStatement = 'updateStatement',
  insertStatement = 'insertStatement',
  singleUpdateStatement = 'singleUpdateStatement',
  updatedElement = 'updatedElement',
  insertStatementValue = 'insertStatementValue',
  expressionsWithDefaults = 'expressionsWithDefaults',
  expressionOrDefault = 'expressionOrDefault',
  uidList = 'uidList',
  expression = 'expression',
  logicalOperator = 'logicalOperator',
  querySpecification = 'querySpecification',
  selectElements = 'selectElements',
  fromClause = 'fromClause',
  tableSources = 'tableSources',
  tableSource = 'tableSource',
  tableSourceItem = 'tableSourceItem',
  tableName = 'tableName',
  selectElement = 'selectElement',
  fullColumnName = 'fullColumnName',
  dottedId = 'dottedId',
  fullId = 'fullId',
  uid = 'uid',
  simpleId = 'simpleId'
}

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
      outputCst: true
    });

    this.RULE('root', () => {
      this.OPTION(() => {
        this.SUBRULE(this.sqlStatements);
      });

      this.CONSUME(Tokens.MINUSMINUS);
    });

    this.RULE('sqlStatements', () => {
      this.MANY(() => {
        this.SUBRULE(this.sqlStatement);

        this.OPTION(() => {
          this.CONSUME(Tokens.MINUSMINUS);
        });

        this.CONSUME(Tokens.SEMI);
      });
    });

    this.RULE('emptyStatement', () => {
      this.CONSUME(Tokens.SEMI);
    });

    this.RULE('sqlStatement', () => {
      this.SUBRULE(this.dmlStatement);
    });

    this.RULE('dmlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.updateStatement);
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ]);
    });

    this.RULE('selectStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.querySpecification);
      });
    });

    this.RULE('updateStatement', () => {
      this.SUBRULE(this.singleUpdateStatement);
    });

    this.RULE('insertStatement', () => {
      this.CONSUME(Tokens.INSERT);

      this.OPTION(() => {
        this.CONSUME(Tokens.INTO);
      });

      this.SUBRULE(this.tableName);

      this.OPTION2(() => {
        this.CONSUME(Tokens.LR_BRACKET);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.RR_BRACKET);
      });

      this.SUBRULE(this.insertStatementValue);
    });

    this.RULE('singleUpdateStatement', () => {
      this.CONSUME(Tokens.UPDATE);
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.uid);
      });

      this.CONSUME(Tokens.SET);
      this.SUBRULE(this.updatedElement);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.updatedElement);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });
    });

    this.RULE('updatedElement', () => {
      this.SUBRULE(this.fullColumnName);
      this.CONSUME(Tokens.EQUAL_SYMBOL);
      this.SUBRULE(this.expression);
    });

    this.RULE('insertStatementValue', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.VALUES);
                }
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VALUE);
                }
              }
            ]);
            this.CONSUME(Tokens.LR_BRACKET);
            this.SUBRULE(this.expressionsWithDefaults);
            this.CONSUME(Tokens.RR_BRACKET);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.CONSUME2(Tokens.LR_BRACKET);
              this.SUBRULE2(this.expressionsWithDefaults);
              this.CONSUME2(Tokens.RR_BRACKET);
            });
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ]);
    });

    this.RULE('expressionsWithDefaults', () => {
      this.SUBRULE(this.expressionOrDefault);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.expressionOrDefault);
      });
    });

    this.RULE('expressionOrDefault', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
      ]);
    });

    this.RULE('uidList', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('expression', () => {
      this.SUBRULE(this.logicalOperator);
    });

    this.RULE('logicalOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.AND);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_AND_OP);
            this.CONSUME2(Tokens.BIT_AND_OP);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XOR);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OR);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_OR_OP);
            this.CONSUME2(Tokens.BIT_OR_OP);
          }
        }
      ]);
    });

    this.RULE('querySpecification', () => {
      this.CONSUME(Tokens.SELECT);
      this.SUBRULE(this.selectElements);
      this.SUBRULE(this.fromClause);
    });

    this.RULE('selectElements', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STAR);
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          }
        }
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.selectElement);
      });
    });

    this.RULE('fromClause', () => {
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableSources);
    });

    this.RULE('tableSources', () => {
      this.SUBRULE(this.tableSource);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.tableSource);
      });
    });

    this.RULE('tableSource', () => {
      this.SUBRULE(this.tableSourceItem);
    });

    this.RULE('tableSourceItem', () => {
      this.SUBRULE(this.tableName);
    });

    this.RULE('tableName', () => {
      this.SUBRULE(this.fullId);
    });

    this.RULE('selectElement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
            this.CONSUME(Tokens.STAR);
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);

            this.OPTION(() => {
              this.OPTION2(() => {
                this.CONSUME(Tokens.AS);
              });

              this.SUBRULE(this.uid);
            });
          }
        }
      ]);
    });

    this.RULE('fullColumnName', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.SUBRULE(this.dottedId);

        this.OPTION2(() => {
          this.SUBRULE2(this.dottedId);
        });
      });
    });

    this.RULE('dottedId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT_ID);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT);
            this.SUBRULE(this.uid);
          }
        }
      ]);
    });

    this.RULE('fullId', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT_ID);
            }
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT);
              this.SUBRULE2(this.uid);
            }
          }
        ]);
      });
    });

    this.RULE('uid', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleId);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE_QUOTE_ID);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          }
        }
      ]);
    });

    this.RULE('simpleId', () => {
      this.CONSUME(Tokens.ID);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
