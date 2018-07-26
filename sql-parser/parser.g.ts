import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  emptyStatement = 'emptyStatement',
  sqlStatement = 'sqlStatement',
  dmlStatement = 'dmlStatement',
  selectStatement = 'selectStatement',
  lockClause = 'lockClause',
  unionParenthesis = 'unionParenthesis',
  queryExpression = 'queryExpression',
  queryExpressionUnit = 'queryExpressionUnit',
  querySpecification = 'querySpecification',
  querySpecificationNointo = 'querySpecificationNointo',
  unionStatement = 'unionStatement',
  selectIntoExpression = 'selectIntoExpression',
  selectLinesInto = 'selectLinesInto',
  selectFieldsInto = 'selectFieldsInto',
  charsetName = 'charsetName',
  assignmentField = 'assignmentField',
  charsetNameBase = 'charsetNameBase',
  limitClause = 'limitClause',
  decimalLiteral = 'decimalLiteral',
  orderByClause = 'orderByClause',
  orderByExpression = 'orderByExpression',
  selectSpec = 'selectSpec',
  updateStatement = 'updateStatement',
  insertStatement = 'insertStatement',
  deleteStatement = 'deleteStatement',
  singleDeleteStatement = 'singleDeleteStatement',
  singleUpdateStatement = 'singleUpdateStatement',
  updatedElement = 'updatedElement',
  insertStatementValue = 'insertStatementValue',
  expressionsWithDefaults = 'expressionsWithDefaults',
  expressionOrDefault = 'expressionOrDefault',
  uidList = 'uidList',
  expression = 'expression',
  logicalOperator = 'logicalOperator',
  selectElements = 'selectElements',
  fromClause = 'fromClause',
  tableSources = 'tableSources',
  groupByItem = 'groupByItem',
  tableSource = 'tableSource',
  joinPart = 'joinPart',
  tableSourceItem = 'tableSourceItem',
  tableName = 'tableName',
  selectElement = 'selectElement',
  fullColumnName = 'fullColumnName',
  dottedId = 'dottedId',
  fullId = 'fullId',
  uid = 'uid',
  simpleId = 'simpleId',
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
      outputCst: true,
      maxLookahead: 6,
    });

    this.RULE('root', () => {
      this.OPTION(() => {
        this.SUBRULE(this.sqlStatements);
      });
    });

    this.RULE('sqlStatements', () => {
      this.MANY(() => {
        this.SUBRULE(this.sqlStatement);
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
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.deleteStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
      ]);
    });

    this.RULE('selectStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);

            this.OPTION(() => {
              this.SUBRULE(this.lockClause);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);

            this.OPTION2(() => {
              this.SUBRULE2(this.lockClause);
            });
          },
        },
      ]);
    });

    this.RULE('lockClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.CONSUME(Tokens.UPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
            this.CONSUME(Tokens.IN);
            this.CONSUME(Tokens.SHARE);
            this.CONSUME(Tokens.MODE);
          },
        },
      ]);
    });

    this.RULE('unionParenthesis', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DISTINCT);
            },
          },
        ]);
      });
    });

    this.RULE('queryExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LR_BRACKET);
            this.SUBRULE(this.querySpecification);
            this.CONSUME(Tokens.RR_BRACKET);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionUnit);
          },
        },
      ]);
    });

    this.RULE('queryExpressionUnit', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.LR_BRACKET);
        this.SUBRULE(this.queryExpression);
        this.CONSUME(Tokens.RR_BRACKET);
      });
    });

    this.RULE('querySpecification', () => {
      this.CONSUME(Tokens.SELECT);

      this.MANY(() => {
        this.SUBRULE(this.selectSpec);
      });

      this.SUBRULE(this.selectElements);

      this.OPTION(() => {
        this.SUBRULE(this.fromClause);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.limitClause);
      });

      this.OPTION4(() => {
        this.SUBRULE(this.selectIntoExpression);
      });
    });

    this.RULE('querySpecificationNointo', () => {
      this.CONSUME(Tokens.SELECT);

      this.MANY(() => {
        this.SUBRULE(this.selectSpec);
      });

      this.SUBRULE(this.selectElements);

      this.OPTION(() => {
        this.SUBRULE(this.fromClause);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.limitClause);
      });
    });

    this.RULE('unionStatement', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DISTINCT);
            },
          },
        ]);
      });

      this.SUBRULE(this.querySpecificationNointo);
    });

    this.RULE('selectIntoExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
            this.SUBRULE(this.assignmentField);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE2(this.assignmentField);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.INTO);
            this.CONSUME(Tokens.DUMPFILE);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.INTO);
            this.CONSUME(Tokens.OUTFILE);
            this.CONSUME2(Tokens.STRING_LITERAL);

            this.OPTION(() => {
              this.CONSUME(Tokens.CHARACTER);
              this.CONSUME(Tokens.SET);
              this.SUBRULE(this.charsetName);
            });

            this.OPTION2(() => {
              this.OR2([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.FIELDS);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.COLUMNS);
                  },
                },
              ]);

              this.AT_LEAST_ONE(() => {
                this.SUBRULE(this.selectFieldsInto);
              });
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.LINES);

              this.AT_LEAST_ONE2(() => {
                this.SUBRULE(this.selectLinesInto);
              });
            });
          },
        },
      ]);
    });

    this.RULE('selectLinesInto', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTING);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
            this.CONSUME2(Tokens.BY);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('selectFieldsInto', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.OPTIONALLY);
            });

            this.CONSUME(Tokens.ENCLOSED);
            this.CONSUME2(Tokens.BY);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPED);
            this.CONSUME3(Tokens.BY);
            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('charsetName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          },
        },
      ]);
    });

    this.RULE('assignmentField', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
      ]);
    });

    this.RULE('charsetNameBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARMSCII8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIG5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1250);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1251);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1256);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1257);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP850);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP852);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP866);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP932);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEC8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCJPMS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCKR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GB2312);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GBK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOSTD8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HEBREW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HP8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEYBCS2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8R);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8U);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN1);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN7);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MACCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MACROMAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SJIS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWE7);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIS620);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UCS2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UJIS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16LE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF32);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB3);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB4);
          },
        },
      ]);
    });

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.LIMIT);
      this.OR2([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
            this.CONSUME(Tokens.OFFSET);
            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.SUBRULE3(this.decimalLiteral);
              this.CONSUME(Tokens.COMMA);
            });

            this.SUBRULE4(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('decimalLiteral', () => {
      this.CONSUME(Tokens.DECIMAL_LITERAL);
    });

    this.RULE('orderByClause', () => {
      this.CONSUME(Tokens.ORDER);
      this.CONSUME(Tokens.BY);
      this.SUBRULE(this.orderByExpression);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.orderByExpression);
      });
    });

    this.RULE('orderByExpression', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
        ]);
      });
    });

    this.RULE('selectSpec', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ALL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISTINCT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISTINCTROW);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HIGH_PRIORITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_SMALL_RESULT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BIG_RESULT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          },
        },
        {
          ALT: () => {
            this.OR3([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_CACHE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_NO_CACHE);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CALC_FOUND_ROWS);
          },
        },
      ]);
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

    this.RULE('deleteStatement', () => {
      this.SUBRULE(this.singleDeleteStatement);
    });

    this.RULE('singleDeleteStatement', () => {
      this.CONSUME(Tokens.DELETE);
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });
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
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VALUE);
                },
              },
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
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
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
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          },
        },
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
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_AND_OP);
            this.CONSUME2(Tokens.BIT_AND_OP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_OR_OP);
            this.CONSUME2(Tokens.BIT_OR_OP);
          },
        },
      ]);
    });

    this.RULE('selectElements', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.STAR);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.selectElement);
      });
    });

    this.RULE('fromClause', () => {
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableSources);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.GROUP);
        this.CONSUME(Tokens.BY);
        this.SUBRULE(this.groupByItem);

        this.MANY(() => {
          this.CONSUME(Tokens.COMMA);
          this.SUBRULE2(this.groupByItem);
        });

        this.OPTION3(() => {
          this.CONSUME(Tokens.WITH);
          this.CONSUME(Tokens.ROLLUP);
        });
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.HAVING);
        this.SUBRULE2(this.expression);
      });
    });

    this.RULE('tableSources', () => {
      this.SUBRULE(this.tableSource);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.tableSource);
      });
    });

    this.RULE('groupByItem', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
        ]);
      });
    });

    this.RULE('tableSource', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableSourceItem);

            this.MANY(() => {
              this.SUBRULE(this.joinPart);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LR_BRACKET);
            this.SUBRULE2(this.tableSourceItem);

            this.MANY2(() => {
              this.SUBRULE2(this.joinPart);
            });

            this.CONSUME(Tokens.RR_BRACKET);
          },
        },
      ]);
    });

    this.RULE('joinPart', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.OR2([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.INNER);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.CROSS);
                  },
                },
              ]);
            });

            this.CONSUME(Tokens.JOIN);
            this.SUBRULE(this.tableSourceItem);

            this.OPTION2(() => {
              this.OR3([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ON);
                    this.SUBRULE(this.expression);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.USING);
                    this.CONSUME(Tokens.LR_BRACKET);
                    this.SUBRULE(this.uidList);
                    this.CONSUME(Tokens.RR_BRACKET);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
            this.SUBRULE2(this.tableSourceItem);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.ON);
              this.SUBRULE2(this.expression);
            });
          },
        },
        {
          ALT: () => {
            this.OR4([
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT);
                },
              },
            ]);

            this.OPTION4(() => {
              this.CONSUME(Tokens.OUTER);
            });

            this.CONSUME2(Tokens.JOIN);
            this.SUBRULE3(this.tableSourceItem);
            this.OR5([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ON);
                  this.SUBRULE3(this.expression);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.USING);
                  this.CONSUME2(Tokens.LR_BRACKET);
                  this.SUBRULE2(this.uidList);
                  this.CONSUME2(Tokens.RR_BRACKET);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NATURAL);

            this.OPTION5(() => {
              this.OR6([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.LEFT);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.RIGHT);
                  },
                },
              ]);

              this.OPTION6(() => {
                this.CONSUME2(Tokens.OUTER);
              });
            });

            this.CONSUME3(Tokens.JOIN);
            this.SUBRULE4(this.tableSourceItem);
          },
        },
      ]);
    });

    this.RULE('tableSourceItem', () => {
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.uid);
      });
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
          },
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
          },
        },
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
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT);
            this.SUBRULE(this.uid);
          },
        },
      ]);
    });

    this.RULE('fullId', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT_ID);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT);
              this.SUBRULE2(this.uid);
            },
          },
        ]);
      });
    });

    this.RULE('uid', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleId);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE_QUOTE_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          },
        },
      ]);
    });

    this.RULE('simpleId', () => {
      this.CONSUME(Tokens.ID);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
