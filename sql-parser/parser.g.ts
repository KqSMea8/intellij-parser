import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  emptyStatement = 'emptyStatement',
  sqlStatement = 'sqlStatement',
  ddlStatement = 'ddlStatement',
  dmlStatement = 'dmlStatement',
  createDatabase = 'createDatabase',
  createTable = 'createTable',
  selectStatement = 'selectStatement',
  lockClause = 'lockClause',
  unionStatement = 'unionStatement',
  unionParenthesis = 'unionParenthesis',
  queryExpression = 'queryExpression',
  queryExpressionNointo = 'queryExpressionNointo',
  querySpecificationNointo = 'querySpecificationNointo',
  querySpecification = 'querySpecification',
  limitClause = 'limitClause',
  fromClause = 'fromClause',
  groupByItem = 'groupByItem',
  orderByClause = 'orderByClause',
  tableSources = 'tableSources',
  tableSource = 'tableSource',
  joinPart = 'joinPart',
  uidList = 'uidList',
  indexHint = 'indexHint',
  indexHintType = 'indexHintType',
  tableSourceItem = 'tableSourceItem',
  selectIntoExpression = 'selectIntoExpression',
  assignmentField = 'assignmentField',
  selectLinesInto = 'selectLinesInto',
  selectFieldsInto = 'selectFieldsInto',
  selectSpec = 'selectSpec',
  selectElements = 'selectElements',
  selectElement = 'selectElement',
  functionCall = 'functionCall',
  passwordFunctionClause = 'passwordFunctionClause',
  scalarFunctionName = 'scalarFunctionName',
  expression = 'expression',
  predicate = 'predicate',
  nullNotnull = 'nullNotnull',
  aggregateWindowedFunction = 'aggregateWindowedFunction',
  orderByExpression = 'orderByExpression',
  specificFunction = 'specificFunction',
  convertedDataType = 'convertedDataType',
  lengthOneDimension = 'lengthOneDimension',
  lengthTwoDimension = 'lengthTwoDimension',
  levelsInWeightString = 'levelsInWeightString',
  levelInWeightListElement = 'levelInWeightListElement',
  caseFuncAlternative = 'caseFuncAlternative',
  functionArg = 'functionArg',
  functionArgs = 'functionArgs',
  comparisonOperator = 'comparisonOperator',
  expressionAtom = 'expressionAtom',
  bitOperator = 'bitOperator',
  mathOperator = 'mathOperator',
  intervalType = 'intervalType',
  unaryOperator = 'unaryOperator',
  mysqlVariable = 'mysqlVariable',
  constant = 'constant',
  stringLiteral = 'stringLiteral',
  decimalLiteral = 'decimalLiteral',
  booleanLiteral = 'booleanLiteral',
  hexadecimalLiteral = 'hexadecimalLiteral',
  expressions = 'expressions',
  logicalOperator = 'logicalOperator',
  dottedId = 'dottedId',
  fullColumnName = 'fullColumnName',
  fullId = 'fullId',
  tableName = 'tableName',
  ifNotExists = 'ifNotExists',
  uid = 'uid',
  simpleId = 'simpleId',
  charsetNameBase = 'charsetNameBase',
  transactionLevelBase = 'transactionLevelBase',
  engineName = 'engineName',
  privilegesBase = 'privilegesBase',
  intervalTypeBase = 'intervalTypeBase',
  dataTypeBase = 'dataTypeBase',
  keywordsCanBeId = 'keywordsCanBeId',
  functionNameBase = 'functionNameBase',
  charsetName = 'charsetName',
  collationName = 'collationName',
  createDatabaseOption = 'createDatabaseOption',
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
    });

    this.RULE('root', () => {
      this.OPTION(() => {
        this.SUBRULE(this.sqlStatements);
      });

      this.CONSUME(Tokens.MINUSMINUS);
    });

    this.RULE('sqlStatements', () => {
      this.MANY(() => {
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.sqlStatement);

              this.OPTION(() => {
                this.CONSUME(Tokens.MINUSMINUS);
              });

              this.CONSUME(Tokens.SEMI);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.emptyStatement);
            },
          },
        ]);
      });

      this.OR([
        {
          ALT: () => {
            this.SUBRULE2(this.sqlStatement);

            this.OPTION2(() => {
              this.OPTION3(() => {
                this.CONSUME2(Tokens.MINUSMINUS);
              });

              this.CONSUME2(Tokens.SEMI);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.emptyStatement);
          },
        },
      ]);
    });

    this.RULE('emptyStatement', () => {
      this.CONSUME(Tokens.SEMI);
    });

    this.RULE('sqlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.ddlStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dmlStatement);
          },
        },
      ]);
    });

    this.RULE('ddlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.createDatabase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createTable);
          },
        },
      ]);
    });

    this.RULE('dmlStatement', () => {
      this.SUBRULE(this.selectStatement);
    });

    this.RULE('createDatabase', () => {
      this.CONSUME(Tokens.CREATE);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMA);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.SUBRULE(this.createDatabaseOption);
      });
    });

    this.RULE('createTable', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.TEMPORARY);
      });

      this.CONSUME(Tokens.TABLE);

      this.OPTION2(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.LIKE);
      this.SUBRULE2(this.tableName);
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
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);

            this.AT_LEAST_ONE(() => {
              this.SUBRULE(this.unionStatement);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.UNION);

              this.OPTION4(() => {
                this.OR([
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

              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE2(this.querySpecification);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE2(this.queryExpression);
                  },
                },
              ]);
            });

            this.OPTION5(() => {
              this.SUBRULE(this.orderByClause);
            });

            this.OPTION6(() => {
              this.SUBRULE(this.limitClause);
            });

            this.OPTION7(() => {
              this.SUBRULE3(this.lockClause);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);

            this.AT_LEAST_ONE2(() => {
              this.SUBRULE(this.unionParenthesis);
            });

            this.OPTION8(() => {
              this.CONSUME2(Tokens.UNION);

              this.OPTION9(() => {
                this.OR([
                  {
                    ALT: () => {
                      this.CONSUME2(Tokens.ALL);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME2(Tokens.DISTINCT);
                    },
                  },
                ]);
              });

              this.SUBRULE3(this.queryExpression);
            });

            this.OPTION10(() => {
              this.SUBRULE2(this.orderByClause);
            });

            this.OPTION11(() => {
              this.SUBRULE2(this.limitClause);
            });

            this.OPTION12(() => {
              this.SUBRULE4(this.lockClause);
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

    this.RULE('unionStatement', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR([
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

      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);
          },
        },
      ]);
    });

    this.RULE('unionParenthesis', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR([
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

      this.SUBRULE(this.queryExpressionNointo);
    });

    this.RULE('queryExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.querySpecification);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.queryExpression);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('queryExpressionNointo', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.querySpecificationNointo);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.queryExpressionNointo);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
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

    this.RULE('querySpecification', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);

            this.MANY(() => {
              this.SUBRULE(this.selectSpec);
            });

            this.SUBRULE(this.selectElements);

            this.OPTION(() => {
              this.SUBRULE(this.selectIntoExpression);
            });

            this.OPTION2(() => {
              this.SUBRULE(this.fromClause);
            });

            this.OPTION3(() => {
              this.SUBRULE(this.orderByClause);
            });

            this.OPTION4(() => {
              this.SUBRULE(this.limitClause);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SELECT);

            this.MANY2(() => {
              this.SUBRULE2(this.selectSpec);
            });

            this.SUBRULE2(this.selectElements);

            this.OPTION5(() => {
              this.SUBRULE2(this.fromClause);
            });

            this.OPTION6(() => {
              this.SUBRULE2(this.orderByClause);
            });

            this.OPTION7(() => {
              this.SUBRULE2(this.limitClause);
            });

            this.OPTION8(() => {
              this.SUBRULE2(this.selectIntoExpression);
            });
          },
        },
      ]);
    });

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.LIMIT);
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.SUBRULE(this.decimalLiteral);
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.decimalLiteral);
            this.CONSUME(Tokens.OFFSET);
            this.SUBRULE4(this.decimalLiteral);
          },
        },
      ]);
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
          this.CONSUME(Tokens.ADD);
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

    this.RULE('groupByItem', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR([
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

    this.RULE('orderByClause', () => {
      this.CONSUME(Tokens.ORDER);
      this.CONSUME(Tokens.BY);
      this.SUBRULE(this.orderByExpression);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.orderByExpression);
      });
    });

    this.RULE('tableSources', () => {
      this.SUBRULE(this.tableSource);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.tableSource);
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
            this.CONSUME(Tokens.ADD);
            this.SUBRULE2(this.tableSourceItem);

            this.MANY2(() => {
              this.SUBRULE2(this.joinPart);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('joinPart', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.OR([
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
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ON);
                    this.SUBRULE(this.expression);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.USING);
                    this.CONSUME(Tokens.ADD);
                    this.SUBRULE(this.uidList);
                    this.CONSUME(Tokens.ADD);
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
            this.OR([
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
            this.OR([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ON);
                  this.SUBRULE3(this.expression);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.USING);
                  this.CONSUME2(Tokens.ADD);
                  this.SUBRULE2(this.uidList);
                  this.CONSUME2(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NATURAL);

            this.OPTION5(() => {
              this.OR([
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

    this.RULE('uidList', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('indexHint', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.USE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORCE);
          },
        },
      ]);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY);
          },
        },
      ]);

      this.OPTION(() => {
        this.CONSUME(Tokens.FOR);
        this.SUBRULE(this.indexHintType);
      });

      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.uidList);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('indexHintType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
            this.CONSUME(Tokens.BY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP);
            this.CONSUME2(Tokens.BY);
          },
        },
      ]);
    });

    this.RULE('tableSourceItem', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableName);

            this.OPTION(() => {
              this.CONSUME(Tokens.PARTITION);
              this.CONSUME(Tokens.ADD);
              this.SUBRULE(this.uidList);
              this.CONSUME(Tokens.ADD);
            });

            this.OPTION2(() => {
              this.OPTION3(() => {
                this.CONSUME(Tokens.AS);
              });

              this.SUBRULE(this.uid);
            });

            this.OPTION4(() => {
              this.SUBRULE(this.indexHint);

              this.MANY(() => {
                this.CONSUME(Tokens.ADD);
                this.SUBRULE2(this.indexHint);
              });
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.selectStatement);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ADD);
                  this.SUBRULE2(this.selectStatement);
                  this.CONSUME2(Tokens.ADD);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME2(Tokens.AS);
            });

            this.SUBRULE2(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.tableSources);
            this.CONSUME3(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('selectIntoExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
            this.SUBRULE(this.assignmentField);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
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
              this.OR([
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

    this.RULE('selectSpec', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
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
            this.OR([
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

    this.RULE('selectElements', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.selectElement);
      });
    });

    this.RULE('selectElement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
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
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);

            this.OPTION3(() => {
              this.OPTION4(() => {
                this.CONSUME2(Tokens.AS);
              });

              this.SUBRULE2(this.uid);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION5(() => {
              this.CONSUME(Tokens.LOCAL_ID);
              this.CONSUME(Tokens.VAR_ASSIGN);
            });

            this.SUBRULE(this.expression);

            this.OPTION6(() => {
              this.OPTION7(() => {
                this.CONSUME3(Tokens.AS);
              });

              this.SUBRULE3(this.uid);
            });
          },
        },
      ]);
    });

    this.RULE('functionCall', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.specificFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.aggregateWindowedFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.scalarFunctionName);
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.SUBRULE(this.functionArgs);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
            this.CONSUME2(Tokens.ADD);

            this.OPTION2(() => {
              this.SUBRULE2(this.functionArgs);
            });

            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.passwordFunctionClause);
          },
        },
      ]);
    });

    this.RULE('passwordFunctionClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OLD_PASSWORD);
          },
        },
      ]);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.functionArg);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('scalarFunctionName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_SUB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIMESTAMP);
          },
        },
      ]);
    });

    this.RULE('expression', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NOT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
            ]);
            this.SUBRULE(this.expression);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.expression);
            this.SUBRULE(this.logicalOperator);
            this.SUBRULE3(this.expression);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
            this.CONSUME(Tokens.IS);

            this.OPTION(() => {
              this.CONSUME2(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.TRUE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FALSE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.UNKNOWN);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.predicate);
          },
        },
      ]);
    });

    this.RULE('predicate', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.predicate);

            this.OPTION(() => {
              this.CONSUME(Tokens.NOT);
            });

            this.CONSUME(Tokens.IN);
            this.CONSUME(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.selectStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.expressions);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.predicate);
            this.CONSUME(Tokens.IS);
            this.SUBRULE(this.nullNotnull);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.predicate);
            this.SUBRULE(this.comparisonOperator);
            this.SUBRULE4(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE5(this.predicate);
            this.SUBRULE2(this.comparisonOperator);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ALL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ANY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SOME);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.selectStatement);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE6(this.predicate);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.NOT);
            });

            this.CONSUME(Tokens.BETWEEN);
            this.SUBRULE7(this.predicate);
            this.CONSUME(Tokens.AND);
            this.SUBRULE8(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE9(this.predicate);
            this.CONSUME(Tokens.SOUNDS);
            this.CONSUME(Tokens.LIKE);
            this.SUBRULE10(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE11(this.predicate);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.NOT);
            });

            this.CONSUME2(Tokens.LIKE);
            this.SUBRULE12(this.predicate);

            this.OPTION4(() => {
              this.CONSUME(Tokens.ESCAPE);
              this.CONSUME(Tokens.STRING_LITERAL);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE13(this.predicate);

            this.OPTION5(() => {
              this.CONSUME4(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.REGEXP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RLIKE);
                },
              },
            ]);
            this.SUBRULE14(this.predicate);
          },
        },
        {
          ALT: () => {
            this.OPTION6(() => {
              this.CONSUME(Tokens.LOCAL_ID);
              this.CONSUME(Tokens.VAR_ASSIGN);
            });

            this.SUBRULE(this.expressionAtom);
          },
        },
      ]);
    });

    this.RULE('nullNotnull', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.NOT);
      });

      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_SPEC_LITERAL);
          },
        },
      ]);
    });

    this.RULE('aggregateWindowedFunction', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.AVG);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MAX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MIN);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUM);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.OR([
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

            this.SUBRULE(this.functionArg);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
            this.CONSUME2(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.OPTION2(() => {
                    this.CONSUME2(Tokens.ALL);
                  });

                  this.SUBRULE2(this.functionArg);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.COUNT);
            this.CONSUME3(Tokens.ADD);
            this.CONSUME2(Tokens.DISTINCT);
            this.SUBRULE(this.functionArgs);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_AND);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_OR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_XOR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV_POP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV_SAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VAR_POP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VAR_SAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VARIANCE);
                },
              },
            ]);
            this.CONSUME4(Tokens.ADD);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.ALL);
            });

            this.SUBRULE3(this.functionArg);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_CONCAT);
            this.CONSUME5(Tokens.ADD);

            this.OPTION4(() => {
              this.CONSUME3(Tokens.DISTINCT);
            });

            this.SUBRULE2(this.functionArgs);

            this.OPTION5(() => {
              this.CONSUME(Tokens.ORDER);
              this.CONSUME(Tokens.BY);
              this.SUBRULE(this.orderByExpression);

              this.MANY(() => {
                this.CONSUME(Tokens.ADD);
                this.SUBRULE2(this.orderByExpression);
              });
            });

            this.OPTION6(() => {
              this.CONSUME(Tokens.SEPARATOR);
              this.CONSUME(Tokens.STRING_LITERAL);
            });

            this.CONSUME5(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('orderByExpression', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR([
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

    this.RULE('specificFunction', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_TIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_USER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LOCALTIME);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.convertedDataType);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CONVERT);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.expression);
            this.CONSUME(Tokens.USING);
            this.SUBRULE(this.charsetName);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CAST);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE3(this.expression);
            this.CONSUME(Tokens.AS);
            this.SUBRULE2(this.convertedDataType);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUES);
            this.CONSUME4(Tokens.ADD);
            this.SUBRULE(this.fullColumnName);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);
            this.SUBRULE4(this.expression);

            this.AT_LEAST_ONE(() => {
              this.SUBRULE(this.caseFuncAlternative);
            });

            this.OPTION(() => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE(this.functionArg);
            });

            this.CONSUME(Tokens.END);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CASE);

            this.AT_LEAST_ONE2(() => {
              this.SUBRULE2(this.caseFuncAlternative);
            });

            this.OPTION2(() => {
              this.CONSUME2(Tokens.ELSE);
              this.SUBRULE2(this.functionArg);
            });

            this.CONSUME2(Tokens.END);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);
            this.CONSUME5(Tokens.ADD);
            this.SUBRULE(this.functionArgs);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.USING);
              this.SUBRULE2(this.charsetName);
            });

            this.CONSUME5(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
            this.CONSUME6(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE5(this.expression);
                },
              },
            ]);
            this.CONSUME(Tokens.IN);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE2(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE6(this.expression);
                },
              },
            ]);
            this.CONSUME6(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUBSTR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUBSTRING);
                },
              },
            ]);
            this.CONSUME7(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE3(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE7(this.expression);
                },
              },
            ]);
            this.CONSUME(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.decimalLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE8(this.expression);
                },
              },
            ]);

            this.OPTION4(() => {
              this.CONSUME(Tokens.FOR);
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE2(this.decimalLiteral);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE9(this.expression);
                  },
                },
              ]);
            });

            this.CONSUME7(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
            this.CONSUME8(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BOTH);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEADING);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TRAILING);
                },
              },
            ]);

            this.OPTION5(() => {
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE4(this.stringLiteral);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE10(this.expression);
                  },
                },
              ]);
            });

            this.CONSUME2(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE5(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE11(this.expression);
                },
              },
            ]);
            this.CONSUME8(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.TRIM);
            this.CONSUME9(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE6(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE12(this.expression);
                },
              },
            ]);
            this.CONSUME3(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE7(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE13(this.expression);
                },
              },
            ]);
            this.CONSUME9(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
            this.CONSUME10(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE8(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE14(this.expression);
                },
              },
            ]);

            this.OPTION6(() => {
              this.CONSUME2(Tokens.AS);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.CHAR);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.BINARY);
                  },
                },
              ]);
              this.CONSUME11(Tokens.ADD);
              this.SUBRULE3(this.decimalLiteral);
              this.CONSUME10(Tokens.ADD);
            });

            this.OPTION7(() => {
              this.SUBRULE(this.levelsInWeightString);
            });

            this.CONSUME11(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACT);
            this.CONSUME12(Tokens.ADD);
            this.SUBRULE(this.intervalType);
            this.CONSUME4(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE9(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE15(this.expression);
                },
              },
            ]);
            this.CONSUME12(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
            this.CONSUME13(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATETIME);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE10(this.stringLiteral);
            this.CONSUME13(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('convertedDataType', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BINARY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NCHAR);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.lengthOneDimension);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);

            this.OPTION2(() => {
              this.SUBRULE2(this.lengthOneDimension);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.CHARACTER);
              this.CONSUME(Tokens.SET);
              this.SUBRULE(this.charsetName);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATETIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIME);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL);

            this.OPTION4(() => {
              this.SUBRULE(this.lengthTwoDimension);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SIGNED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.UNSIGNED);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME(Tokens.INTEGER);
            });
          },
        },
      ]);
    });

    this.RULE('lengthOneDimension', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('lengthTwoDimension', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE2(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('levelsInWeightString', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
            this.SUBRULE(this.levelInWeightListElement);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.levelInWeightListElement);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LEVEL);
            this.SUBRULE(this.decimalLiteral);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE2(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('levelInWeightListElement', () => {
      this.SUBRULE(this.decimalLiteral);

      this.OPTION(() => {
        this.OR([
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
          {
            ALT: () => {
              this.CONSUME(Tokens.REVERSE);
            },
          },
        ]);
      });
    });

    this.RULE('caseFuncAlternative', () => {
      this.CONSUME(Tokens.WHEN);
      this.SUBRULE(this.functionArg);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.functionArg);
    });

    this.RULE('functionArg', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('functionArgs', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.SUBRULE2(this.constant);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.fullColumnName);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.functionCall);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.expression);
            },
          },
        ]);
      });
    });

    this.RULE('comparisonOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.ADD);
            this.CONSUME5(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('expressionAtom', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expressionAtom);
            this.CONSUME(Tokens.COLLATE);
            this.SUBRULE(this.collationName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.mysqlVariable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.unaryOperator);
            this.SUBRULE2(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
            this.SUBRULE3(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.expression);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE3(this.expression);

            this.AT_LEAST_ONE(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE4(this.expression);
            });

            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXISTS);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.selectStatement);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.ADD);
            this.SUBRULE2(this.selectStatement);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERVAL);
            this.SUBRULE5(this.expression);
            this.SUBRULE(this.intervalType);
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.expressionAtom);
            this.SUBRULE(this.bitOperator);
            this.SUBRULE5(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.SUBRULE6(this.expressionAtom);
            this.SUBRULE(this.mathOperator);
            this.SUBRULE7(this.expressionAtom);
          },
        },
      ]);
    });

    this.RULE('bitOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('mathOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('intervalType', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR_MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MICROSECOND);
          },
        },
      ]);
    });

    this.RULE('unaryOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
          },
        },
      ]);
    });

    this.RULE('mysqlVariable', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL_ID);
          },
        },
      ]);
    });

    this.RULE('constant', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.hexadecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.booleanLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REAL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_STRING);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NULL_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NULL_SPEC_LITERAL);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('stringLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.OPTION(() => {
                    this.CONSUME(Tokens.STRING_CHARSET_NAME);
                  });

                  this.CONSUME(Tokens.STRING_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
                },
              },
            ]);

            this.AT_LEAST_ONE(() => {
              this.CONSUME2(Tokens.STRING_LITERAL);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.OPTION2(() => {
                    this.CONSUME2(Tokens.STRING_CHARSET_NAME);
                  });

                  this.CONSUME3(Tokens.STRING_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.START_NATIONAL_STRING_LITERAL);
                },
              },
            ]);

            this.OPTION3(() => {
              this.CONSUME(Tokens.COLLATE);
              this.SUBRULE(this.collationName);
            });
          },
        },
      ]);
    });

    this.RULE('decimalLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ZERO_DECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE_DECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TWO_DECIMAL);
          },
        },
      ]);
    });

    this.RULE('booleanLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FALSE);
          },
        },
      ]);
    });

    this.RULE('hexadecimalLiteral', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.STRING_CHARSET_NAME);
      });

      this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
    });

    this.RULE('expressions', () => {
      this.SUBRULE(this.expression);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.expression);
      });
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
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
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
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
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
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.uid);
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

    this.RULE('fullId', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT_ID);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.uid);
            },
          },
        ]);
      });
    });

    this.RULE('tableName', () => {
      this.SUBRULE(this.fullId);
    });

    this.RULE('ifNotExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.NOT);
      this.CONSUME(Tokens.EXISTS);
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
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ID);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.transactionLevelBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.privilegesBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataTypeBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.keywordsCanBeId);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
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

    this.RULE('transactionLevelBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPEATABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERIALIZABLE);
          },
        },
      ]);
    });

    this.RULE('engineName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLACKHOLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CSV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FEDERATED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INNODB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MRG_MYISAM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MYISAM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NDB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NDBCLUSTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERFOMANCE_SCHEMA);
          },
        },
      ]);
    });

    this.RULE('privilegesBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUTINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXECUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELOAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHUTDOWN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          },
        },
      ]);
    });

    this.RULE('intervalTypeBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          },
        },
      ]);
    });

    this.RULE('dataTypeBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEXT);
          },
        },
      ]);
    });

    this.RULE('keywordsCanBeId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ACCOUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ACTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AGGREGATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ANY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTHORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOCOMMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOEXTEND_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BEGIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINLOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOLEAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BTREE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANNEL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CIPHER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CLIENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COALESCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPACT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPLETION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCURRENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONSISTENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTRIBUTORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COPY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CPU);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATAFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEALLOCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT_AUTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFINER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIRECTORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DUMPFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DUPLICATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DYNAMIC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ERROR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ERRORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVERY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCHANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLUSIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPIRE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTENT_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FAULTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE_BLOCK_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIXED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOLLOWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_REPLICATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HASH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IDENTIFIED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE_SERVER_IDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEXES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INITIAL_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INPLACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTANCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INVOKER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IO_THREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IPC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISOLATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSUER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LANGUAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAVES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LIST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_AUTO_POSITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_DELAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HOST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_POS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_RETRY_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CAPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CIPHER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_TLS_VERSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MERGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIGRATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MUTEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MYSQL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAMES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NCHAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NEVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NODEGROUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OJ);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OLD_PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZER_COSTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OWNER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARSER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTIAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PHASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGIN_DIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRECEDES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PREPARE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRESERVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PREV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESSLIST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROXY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUERY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUICK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RECOVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REDO_BUFFER_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REDUNDANT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAYLOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_POS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REMOVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REORGANIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RESUME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RETURNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLBACK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROTATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SAVEPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEDULE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECURITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGNED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SNAPSHOT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOCKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOURCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          },
        },
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
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.START);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STOP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBJECT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUSPEND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWITCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPORARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPTABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.THAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRANSACTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDEFINED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDOFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNKNOWN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPGRADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VARIABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WARNINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHOUT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WORK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WRAPPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.X509);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XML);
          },
        },
      ]);
    });

    this.RULE('functionNameBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ABS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ACOS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AREA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DERIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_SIGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_VERIFY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BENCHMARK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BUFFER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CEIL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CEILING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CENTROID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COERCIBILITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT_WS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT_TZ);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CRC32);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DH_PARAMETERS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DIGEST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CROSSES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATEDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYNAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFMONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFWEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFYEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEGREES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIMENSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ELT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENVELOPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EQUALS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPORT_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACTVALUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIND_IN_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FLOOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOUND_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_BASE64);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_DAYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_UNIXTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREATEST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBTRACT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IFNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_ATON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_NTOA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_ATON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_NTOA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERIORRINGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISCLOSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISEMPTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_FREE_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_COMPAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_MAPPED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV6);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_USED_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST_INSERT_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LCASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOAD_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG10);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOWER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LTRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKEDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKE_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_POS_WAIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRCONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRDISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBREQUAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRINTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBROVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRTOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRWITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MD5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTHNAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME_CONST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NULLIF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMGEOMETRIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMINTERIORRINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMPOINTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OCT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OCTET_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_DIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PI);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POWER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUOTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RADIANS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RAND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RANDOM_BYTES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELEASE_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RPAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RTRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEC_TO_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA1);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SLEEP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQRT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SRID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRCMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STR_TO_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_AREA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_BUFFER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CENTROID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CROSSES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIFFERENCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIMENSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISTANCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENDPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENVELOPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EQUALS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EXTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERIORRINGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISCLOSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISEMPTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISSIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMGEOMETRIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMPOINTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_OVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SRID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_STARTPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SYMDIFFERENCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_TOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_UNION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_WITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_X);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_Y);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING_INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSTEM_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMEDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_TO_SEC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_BASE64);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_DAYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_SECONDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UCASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESSED_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNHEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIX_TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATEXML);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID_SHORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATE_PASSWORD_STRENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VERSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKDAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKOFYEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEARWEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Y_FUNCTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.X_FUNCTION);
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

    this.RULE('collationName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('createDatabaseOption', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.CHARACTER);
            this.CONSUME(Tokens.SET);

            this.OPTION2(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE(this.charsetName);
          },
        },
        {
          ALT: () => {
            this.OPTION3(() => {
              this.CONSUME2(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.COLLATE);

            this.OPTION4(() => {
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE(this.collationName);
          },
        },
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
