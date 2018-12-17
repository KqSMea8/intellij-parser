import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  sqlStatement = 'sqlStatement',
  dqlStatement = 'dqlStatement',
  ddlStatement = 'ddlStatement',
  dmlStatement = 'dmlStatement',
  showTable = 'showTable',
  selectStatement = 'selectStatement',
  unionStatement = 'unionStatement',
  queryExpression = 'queryExpression',
  querySpecification = 'querySpecification',
  selectElements = 'selectElements',
  selectIntoExpression = 'selectIntoExpression',
  selectFieldsInto = 'selectFieldsInto',
  selectLinesInto = 'selectLinesInto',
  selectElement = 'selectElement',
  fullColumnName = 'fullColumnName',
  dottedId = 'dottedId',
  functionCall = 'functionCall',
  functionArgs = 'functionArgs',
  functionArg = 'functionArg',
  customFunction = 'customFunction',
  scalarFunctionName = 'scalarFunctionName',
  specificFunction = 'specificFunction',
  expressionAtom = 'expressionAtom',
  intervalTypeBase = 'intervalTypeBase',
  intervalType = 'intervalType',
  levelsInWeightString = 'levelsInWeightString',
  levelInWeightListElement = 'levelInWeightListElement',
  convertedDataType = 'convertedDataType',
  caseFuncAlternative = 'caseFuncAlternative',
  lengthOneDimension = 'lengthOneDimension',
  lengthTwoDimension = 'lengthTwoDimension',
  lengthTwoOptionalDimension = 'lengthTwoOptionalDimension',
  fromClause = 'fromClause',
  tableSources = 'tableSources',
  tableSource = 'tableSource',
  joinPart = 'joinPart',
  tableSourceItem = 'tableSourceItem',
  uid = 'uid',
  fullId = 'fullId',
  tableName = 'tableName',
  insertStatement = 'insertStatement',
  partitionInsertDefinitions = 'partitionInsertDefinitions',
  insertStatementValue = 'insertStatementValue',
  updateStatement = 'updateStatement',
  updatedElement = 'updatedElement',
  deleteStatement = 'deleteStatement',
  createDatabaseStatement = 'createDatabaseStatement',
  ifExists = 'ifExists',
  switchDatabaseStatement = 'switchDatabaseStatement',
  dropDatabaseStatement = 'dropDatabaseStatement',
  createTable = 'createTable',
  createDefinitions = 'createDefinitions',
  createDefinition = 'createDefinition',
  columnDefinition = 'columnDefinition',
  columnConstraint = 'columnConstraint',
  dataType = 'dataType',
  dataType1 = 'dataType1',
  collationName = 'collationName',
  dataType2 = 'dataType2',
  dataType3 = 'dataType3',
  dataType4 = 'dataType4',
  dataType5 = 'dataType5',
  dataType6 = 'dataType6',
  dataType7 = 'dataType7',
  tableOption = 'tableOption',
  tableOption1 = 'tableOption1',
  tableOption2 = 'tableOption2',
  tableOption3 = 'tableOption3',
  tableOption4 = 'tableOption4',
  tableOption5 = 'tableOption5',
  tablespaceStorage = 'tablespaceStorage',
  tables = 'tables',
  fileSizeLiteral = 'fileSizeLiteral',
  engineName = 'engineName',
  partitionDefinitions = 'partitionDefinitions',
  dropTable = 'dropTable',
  alterTable = 'alterTable',
  alterTableStatementSuffix = 'alterTableStatementSuffix',
  alterStatementSuffixRename = 'alterStatementSuffixRename',
  alterStatementSuffixRenameCol = 'alterStatementSuffixRenameCol',
  alterStatementChangeColPosition = 'alterStatementChangeColPosition',
  alterStatementSuffixAddCol = 'alterStatementSuffixAddCol',
  columnNameTypeList = 'columnNameTypeList',
  columnNameType = 'columnNameType',
  colType = 'colType',
  colTypeList = 'colTypeList',
  type = 'type',
  primitiveType = 'primitiveType',
  listType = 'listType',
  mapType = 'mapType',
  unionType = 'unionType',
  ifNotExists = 'ifNotExists',
  columnNameList = 'columnNameList',
  columnName = 'columnName',
  columnRefOrder = 'columnRefOrder',
  queryOperator = 'queryOperator',
  whereClause = 'whereClause',
  groupByClause = 'groupByClause',
  groupingSetExpression = 'groupingSetExpression',
  groupByExpression = 'groupByExpression',
  havingClause = 'havingClause',
  distributeByClause = 'distributeByClause',
  havingCondition = 'havingCondition',
  searchCondition = 'searchCondition',
  expression = 'expression',
  atomExpression = 'atomExpression',
  tableOrColumn = 'tableOrColumn',
  dateLiteral = 'dateLiteral',
  constant = 'constant',
  charSetStringLiteral = 'charSetStringLiteral',
  booleanValue = 'booleanValue',
  precedenceFieldExpression = 'precedenceFieldExpression',
  precedenceUnaryOperator = 'precedenceUnaryOperator',
  nullCondition = 'nullCondition',
  precedenceUnaryPrefixExpression = 'precedenceUnaryPrefixExpression',
  precedenceUnarySuffixExpression = 'precedenceUnarySuffixExpression',
  precedenceBitwiseXorOperator = 'precedenceBitwiseXorOperator',
  precedenceBitwiseXorExpression = 'precedenceBitwiseXorExpression',
  precedenceStarOperator = 'precedenceStarOperator',
  precedenceStarExpression = 'precedenceStarExpression',
  precedencePlusOperator = 'precedencePlusOperator',
  precedencePlusExpression = 'precedencePlusExpression',
  precedenceAmpersandOperator = 'precedenceAmpersandOperator',
  precedenceAmpersandExpression = 'precedenceAmpersandExpression',
  precedenceBitwiseOrOperator = 'precedenceBitwiseOrOperator',
  precedenceBitwiseOrExpression = 'precedenceBitwiseOrExpression',
  precedenceEqualNegatableOperator = 'precedenceEqualNegatableOperator',
  precedenceEqualOperator = 'precedenceEqualOperator',
  precedenceEqualExpression = 'precedenceEqualExpression',
  expressions = 'expressions',
  precedenceNotOperator = 'precedenceNotOperator',
  precedenceNotExpression = 'precedenceNotExpression',
  precedenceAndOperator = 'precedenceAndOperator',
  precedenceAndExpression = 'precedenceAndExpression',
  precedenceOrOperator = 'precedenceOrOperator',
  precedenceOrExpression = 'precedenceOrExpression',
  limitClause = 'limitClause',
  orderByClause = 'orderByClause',
  sortByClause = 'sortByClause',
  identifier = 'identifier',
  uidList = 'uidList',
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
        this.SUBRULE(this.sqlStatements);
      });
    });

    this.RULE('sqlStatements', () => {
      this.MANY(() => {
        this.SUBRULE(this.sqlStatement);
        this.CONSUME(Tokens.SEMI);
      });
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
        {
          ALT: () => {
            this.SUBRULE(this.dqlStatement);
          },
        },
      ]);
    });

    this.RULE('dqlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.showTable);
          },
        },
      ]);
    });

    this.RULE('ddlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.createTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createDatabaseStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.switchDatabaseStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropDatabaseStatement);
          },
        },
      ]);
    });

    this.RULE('dmlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.updateStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.deleteStatement);
          },
        },
      ]);
    });

    this.RULE('showTable', () => {
      this.CONSUME(Tokens.SHOW);
      this.SUBRULE(this.tableName);
    });

    this.RULE('selectStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);

            this.OPTION(() => {
              this.MANY(() => {
                this.SUBRULE(this.unionStatement);
              });
            });
          },
        },
      ]);
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

      this.OR3([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);
          },
        },
      ]);
    });

    this.RULE('queryExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.querySpecification);
            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LPAREN);
            this.SUBRULE(this.queryExpression);
            this.CONSUME2(Tokens.RPAREN);
          },
        },
      ]);
    });

    this.RULE('querySpecification', () => {
      this.CONSUME(Tokens.SELECT);

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

      this.SUBRULE(this.selectElements);

      this.OPTION2(() => {
        this.SUBRULE(this.selectIntoExpression);
      });

      this.SUBRULE(this.fromClause);

      this.OPTION3(() => {
        this.SUBRULE(this.whereClause);
      });

      this.OPTION4(() => {
        this.SUBRULE(this.groupByClause);
      });

      this.OPTION5(() => {
        this.SUBRULE(this.havingClause);
      });

      this.OPTION6(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION7(() => {
        this.SUBRULE(this.distributeByClause);
      });

      this.OPTION8(() => {
        this.SUBRULE(this.sortByClause);
      });

      this.OPTION9(() => {
        this.SUBRULE(this.limitClause);
      });
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

    this.RULE('selectIntoExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
            this.SUBRULE(this.uid);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE2(this.uid);
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
              this.CONSUME(Tokens.CharSetName);
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
            this.SUBRULE(this.functionCall);

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
            this.SUBRULE(this.fullColumnName);

            this.OPTION3(() => {
              this.OPTION4(() => {
                this.CONSUME2(Tokens.AS);
              });

              this.SUBRULE2(this.uid);
            });
          },
        },
      ]);
    });

    this.RULE('fullColumnName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.uid);

            this.OPTION(() => {
              this.SUBRULE(this.dottedId);

              this.OPTION2(() => {
                this.SUBRULE2(this.dottedId);
              });
            });
          },
        },
      ]);
    });

    this.RULE('dottedId', () => {
      this.CONSUME(Tokens.DOT);
      this.SUBRULE(this.uid);
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
            this.SUBRULE(this.scalarFunctionName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.customFunction);
          },
        },
      ]);
    });

    this.RULE('functionArgs', () => {
      this.SUBRULE(this.functionArg);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.functionArg);
      });
    });

    this.RULE('functionArg', () => {
      this.OR([
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

    this.RULE('customFunction', () => {
      this.SUBRULE(this.fullId);
      this.CONSUME(Tokens.LPAREN);

      this.OPTION(() => {
        this.SUBRULE(this.functionArgs);
      });

      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('scalarFunctionName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
            this.CONSUME(Tokens.LPAREN);

            this.OPTION(() => {
              this.SUBRULE(this.functionArgs);
            });

            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTR);
            this.CONSUME2(Tokens.LPAREN);

            this.OPTION2(() => {
              this.SUBRULE2(this.functionArgs);
            });

            this.CONSUME2(Tokens.RPAREN);
          },
        },
      ]);
    });

    this.RULE('specificFunction', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
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
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.expression);
            this.OR3([
              {
                ALT: () => {
                  this.CONSUME(Tokens.COMMA);
                  this.SUBRULE(this.convertedDataType);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.USING);
                  this.CONSUME(Tokens.CharSetLiteral);
                },
              },
            ]);
            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CAST);
            this.CONSUME2(Tokens.LPAREN);
            this.SUBRULE2(this.expression);
            this.CONSUME(Tokens.AS);
            this.SUBRULE2(this.convertedDataType);
            this.CONSUME2(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUES);
            this.CONSUME3(Tokens.LPAREN);
            this.SUBRULE(this.fullColumnName);
            this.CONSUME3(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);
            this.SUBRULE3(this.expression);

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

            this.OPTION3(() => {
              this.CONSUME2(Tokens.AS);
              this.SUBRULE(this.expressionAtom);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);
            this.CONSUME4(Tokens.LPAREN);
            this.SUBRULE(this.functionArgs);

            this.OPTION4(() => {
              this.CONSUME2(Tokens.USING);
              this.CONSUME2(Tokens.CharSetLiteral);
            });

            this.CONSUME4(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
            this.CONSUME5(Tokens.LPAREN);
            this.SUBRULE4(this.expression);
            this.CONSUME(Tokens.IN);
            this.SUBRULE5(this.expression);
            this.CONSUME5(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
            this.CONSUME6(Tokens.LPAREN);
            this.OR4([
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
              this.SUBRULE6(this.expression);
            });

            this.CONSUME(Tokens.FROM);
            this.SUBRULE7(this.expression);
            this.CONSUME6(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.TRIM);
            this.CONSUME7(Tokens.LPAREN);
            this.SUBRULE8(this.expression);
            this.CONSUME2(Tokens.FROM);
            this.SUBRULE9(this.expression);
            this.CONSUME7(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
            this.CONSUME8(Tokens.LPAREN);
            this.SUBRULE10(this.expression);

            this.OPTION6(() => {
              this.CONSUME3(Tokens.AS);
              this.OR5([
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
              this.CONSUME9(Tokens.LPAREN);
              this.CONSUME(Tokens.DecimalLiteral);
              this.CONSUME8(Tokens.RPAREN);
            });

            this.OPTION7(() => {
              this.SUBRULE(this.levelsInWeightString);
            });

            this.CONSUME9(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACT);
            this.CONSUME10(Tokens.LPAREN);
            this.SUBRULE(this.intervalType);
            this.CONSUME3(Tokens.FROM);
            this.SUBRULE11(this.expression);
            this.CONSUME10(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
            this.CONSUME11(Tokens.LPAREN);
            this.OR6([
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
            this.CONSUME2(Tokens.COMMA);
            this.CONSUME(Tokens.STRING_LITERAL);
            this.CONSUME11(Tokens.RPAREN);
          },
        },
      ]);
    });

    this.RULE('expressionAtom', () => {
      this.SUBRULE(this.fullColumnName);
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

    this.RULE('levelsInWeightString', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
            this.CONSUME(Tokens.DecimalLiteral);

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
                {
                  ALT: () => {
                    this.CONSUME(Tokens.REVERSE);
                  },
                },
              ]);
            });

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE(this.levelInWeightListElement);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUS);
            this.CONSUME2(Tokens.DecimalLiteral);
          },
        },
      ]);
    });

    this.RULE('levelInWeightListElement', () => {
      this.CONSUME(Tokens.DecimalLiteral);

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
          {
            ALT: () => {
              this.CONSUME(Tokens.REVERSE);
            },
          },
        ]);
      });
    });

    this.RULE('convertedDataType', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
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
              this.CONSUME(Tokens.CharSetLiteral);
            });
          },
        },
        {
          ALT: () => {
            this.OR3([
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
            this.OR4([
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

    this.RULE('caseFuncAlternative', () => {
      this.CONSUME(Tokens.WHEN);
      this.SUBRULE(this.functionArg);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.functionArg);
    });

    this.RULE('lengthOneDimension', () => {
      this.CONSUME(Tokens.LPAREN);

      this.AT_LEAST_ONE(() => {
        this.CONSUME(Tokens.DecimalLiteral);
      });

      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('lengthTwoDimension', () => {
      this.CONSUME(Tokens.LPAREN);
      this.CONSUME(Tokens.DecimalLiteral);
      this.CONSUME(Tokens.COMMA);
      this.CONSUME2(Tokens.DecimalLiteral);
      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('lengthTwoOptionalDimension', () => {
      this.CONSUME(Tokens.LPAREN);
      this.CONSUME(Tokens.DecimalLiteral);

      this.OPTION(() => {
        this.CONSUME(Tokens.COMMA);
        this.CONSUME2(Tokens.DecimalLiteral);
      });

      this.CONSUME(Tokens.RPAREN);
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

      this.MANY(() => {
        this.SUBRULE(this.joinPart);
      });
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
                    this.CONSUME(Tokens.LPAREN);
                    this.SUBRULE(this.uidList);
                    this.CONSUME(Tokens.RPAREN);
                  },
                },
              ]);
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
              {
                ALT: () => {
                  this.CONSUME(Tokens.FULL);
                },
              },
            ]);

            this.OPTION3(() => {
              this.CONSUME(Tokens.OUTER);
            });

            this.CONSUME2(Tokens.JOIN);
            this.SUBRULE2(this.tableSourceItem);
            this.OR5([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ON);
                  this.SUBRULE2(this.expression);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.USING);
                  this.CONSUME2(Tokens.LPAREN);
                  this.SUBRULE2(this.uidList);
                  this.CONSUME2(Tokens.RPAREN);
                },
              },
            ]);
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
              this.OPTION2(() => {
                this.CONSUME(Tokens.AS);
              });

              this.SUBRULE(this.uid);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION3(() => {
              this.CONSUME(Tokens.LPAREN);
            });

            this.SUBRULE(this.selectStatement);

            this.OPTION4(() => {
              this.CONSUME(Tokens.RPAREN);
            });

            this.OPTION5(() => {
              this.CONSUME2(Tokens.AS);
            });

            this.OPTION6(() => {
              this.SUBRULE2(this.uid);
            });
          },
        },
      ]);
    });

    this.RULE('uid', () => {
      this.CONSUME(Tokens.ID);
    });

    this.RULE('fullId', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.CONSUME(Tokens.DOT);
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('tableName', () => {
      this.SUBRULE(this.fullId);
    });

    this.RULE('insertStatement', () => {
      this.CONSUME(Tokens.INSERT);

      this.OPTION(() => {
        this.CONSUME(Tokens.INTO);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.OVERWRITE);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.TABLE);
      });

      this.SUBRULE(this.tableName);

      this.OPTION4(() => {
        this.SUBRULE(this.partitionInsertDefinitions);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.LPAREN);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.RPAREN);
      });

      this.SUBRULE(this.insertStatementValue);
    });

    this.RULE('partitionInsertDefinitions', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
          },
        },
      ]);

      this.OPTION(() => {
        this.CONSUME(Tokens.BY);
      });

      this.OR3([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.fullColumnName);
            this.CONSUME(Tokens.EQUAL);
            this.SUBRULE(this.constant);
            this.CONSUME(Tokens.RPAREN);
          },
        },
      ]);
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
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.RPAREN);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.CONSUME2(Tokens.LPAREN);
              this.SUBRULE2(this.expression);
              this.CONSUME2(Tokens.RPAREN);
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

    this.RULE('updateStatement', () => {
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
      this.CONSUME(Tokens.EQUAL);
      this.SUBRULE(this.expression);
    });

    this.RULE('deleteStatement', () => {
      this.CONSUME(Tokens.DELETE);
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });
    });

    this.RULE('createDatabaseStatement', () => {
      this.CONSUME(Tokens.CREATE);
      this.OR2([
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

      this.SUBRULE(this.identifier);
    });

    this.RULE('ifExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.EXISTS);
    });

    this.RULE('switchDatabaseStatement', () => {
      this.CONSUME(Tokens.USE);
      this.SUBRULE(this.identifier);
    });

    this.RULE('dropDatabaseStatement', () => {
      this.CONSUME(Tokens.DROP);
      this.OR2([
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
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.identifier);
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
      this.SUBRULE(this.createDefinitions);

      this.OPTION3(() => {
        this.SUBRULE(this.tableOption);

        this.MANY(() => {
          this.OPTION4(() => {
            this.CONSUME(Tokens.COMMA);
          });

          this.SUBRULE2(this.tableOption);
        });
      });
    });

    this.RULE('createDefinitions', () => {
      this.CONSUME(Tokens.LPAREN);
      this.SUBRULE(this.createDefinition);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.createDefinition);
      });

      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('createDefinition', () => {
      this.SUBRULE(this.uid);
      this.SUBRULE(this.columnDefinition);
    });

    this.RULE('columnDefinition', () => {
      this.SUBRULE(this.dataType);

      this.MANY(() => {
        this.SUBRULE(this.columnConstraint);
      });
    });

    this.RULE('columnConstraint', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.nullCondition);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.PRIMARY);
            });

            this.CONSUME(Tokens.KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIQUE);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.KEY);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIXED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DYNAMIC);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
            this.OR3([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISK);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MEMORY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('dataType', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.dataType1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType2);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType3);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType4);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType5);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType6);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataType7);
          },
        },
      ]);
    });

    this.RULE('dataType1', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VARCHAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TINYTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEDIUMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LONGTEXT);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.lengthOneDimension);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.BINARY);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.CHARACTER);
        this.CONSUME(Tokens.SET);
        this.CONSUME(Tokens.CharSetName);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.COLLATE);
        this.SUBRULE(this.collationName);
      });
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

    this.RULE('dataType2', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.TINYINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SMALLINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEDIUMINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTEGER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIGINT);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.lengthOneDimension);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.UNSIGNED);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.ZEROFILL);
      });
    });

    this.RULE('dataType3', () => {
      this.OR([
        {
          ALT: () => {
            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.REAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DOUBLE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FLOAT);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.lengthTwoDimension);
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.UNSIGNED);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR3([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NUMERIC);
                },
              },
            ]);

            this.OPTION4(() => {
              this.SUBRULE(this.lengthTwoOptionalDimension);
            });

            this.OPTION5(() => {
              this.CONSUME2(Tokens.UNSIGNED);
            });

            this.OPTION6(() => {
              this.CONSUME2(Tokens.ZEROFILL);
            });
          },
        },
      ]);
    });

    this.RULE('dataType4', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TINYBLOB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEDIUMBLOB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LONGBLOB);
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
      ]);
    });

    this.RULE('dataType5', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT);
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
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VARBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.lengthOneDimension);
      });
    });

    this.RULE('dataType6', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
          },
        },
      ]);
      this.CONSUME(Tokens.LPAREN);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.CONSUME2(Tokens.STRING_LITERAL);
      });

      this.CONSUME(Tokens.RPAREN);

      this.OPTION(() => {
        this.CONSUME(Tokens.BINARY);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.CHARACTER);
        this.CONSUME2(Tokens.SET);
        this.CONSUME(Tokens.CharSetName);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.COLLATE);
        this.SUBRULE(this.collationName);
      });
    });

    this.RULE('dataType7', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGON);
          },
        },
      ]);
    });

    this.RULE('tableOption', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableOption1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableOption2);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableOption3);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableOption4);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableOption5);
          },
        },
      ]);
    });

    this.RULE('tableOption1', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL);
            });

            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.EQUAL);
            });

            this.CONSUME2(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.OPTION4(() => {
              this.CONSUME(Tokens.DEFAULT);
            });

            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARACTER);
                  this.CONSUME(Tokens.SET);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARSET);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME4(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.CharSetName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);

            this.OPTION6(() => {
              this.CONSUME5(Tokens.EQUAL);
            });

            this.OR3([
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
            ]);
          },
        },
        {
          ALT: () => {
            this.OPTION7(() => {
              this.CONSUME2(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.COLLATE);

            this.OPTION8(() => {
              this.CONSUME6(Tokens.EQUAL);
            });

            this.SUBRULE(this.collationName);
          },
        },
      ]);
    });

    this.RULE('tableOption2', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL);
            });

            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.EQUAL);
            });

            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
            this.CONSUME(Tokens.DIRECTORY);

            this.OPTION4(() => {
              this.CONSUME4(Tokens.EQUAL);
            });

            this.CONSUME4(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);

            this.OPTION5(() => {
              this.CONSUME5(Tokens.EQUAL);
            });

            this.OR2([
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
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);

            this.OPTION6(() => {
              this.CONSUME6(Tokens.EQUAL);
            });

            this.CONSUME5(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
            this.CONSUME2(Tokens.DIRECTORY);

            this.OPTION7(() => {
              this.CONSUME7(Tokens.EQUAL);
            });

            this.CONSUME6(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.partitionDefinitions);
          },
        },
      ]);
    });

    this.RULE('tableOption3', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL);
            });

            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NO);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIRST);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LAST);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL);
            });

            this.SUBRULE(this.fileSizeLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

            this.OPTION4(() => {
              this.CONSUME4(Tokens.EQUAL);
            });

            this.CONSUME2(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);

            this.OPTION5(() => {
              this.CONSUME5(Tokens.EQUAL);
            });

            this.OR3([
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
                  this.CONSUME(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('tableOption4', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL);
            });

            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DYNAMIC);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIXED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COMPRESSED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.REDUNDANT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COMPACT);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('tableOption5', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL);
            });

            this.OR2([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DEFAULT);
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
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL);
            });

            this.OR3([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ZERO_DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ONE_DECIMAL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
            this.SUBRULE(this.uid);

            this.OPTION3(() => {
              this.SUBRULE(this.tablespaceStorage);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LIFECYCLE);
            this.CONSUME(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNION);

            this.OPTION4(() => {
              this.CONSUME3(Tokens.EQUAL);
            });

            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.tables);
            this.CONSUME(Tokens.RPAREN);
          },
        },
      ]);
    });

    this.RULE('tablespaceStorage', () => {
      this.CONSUME(Tokens.STORAGE);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          },
        },
      ]);
    });

    this.RULE('tables', () => {
      this.SUBRULE(this.tableName);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.tableName);
      });
    });

    this.RULE('fileSizeLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ByteLengthLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DecimalLiteral);
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

    this.RULE('partitionDefinitions', () => {
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
          },
        },
      ]);
      this.CONSUME(Tokens.BY);
      this.CONSUME(Tokens.LPAREN);
      this.SUBRULE(this.createDefinitions);
      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('dropTable', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.TABLE);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.tableName);
    });

    this.RULE('alterTable', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.alterTableStatementSuffix);
    });

    this.RULE('alterTableStatementSuffix', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.alterStatementSuffixRename);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterStatementSuffixAddCol);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterStatementSuffixRenameCol);
          },
        },
      ]);
    });

    this.RULE('alterStatementSuffixRename', () => {
      this.SUBRULE(this.identifier);
      this.CONSUME(Tokens.RENAME);
      this.CONSUME(Tokens.TO);
      this.SUBRULE2(this.identifier);
    });

    this.RULE('alterStatementSuffixRenameCol', () => {
      this.SUBRULE(this.identifier);
      this.CONSUME(Tokens.CHANGE);

      this.OPTION(() => {
        this.CONSUME(Tokens.COLUMN);
      });

      this.SUBRULE2(this.identifier);
      this.SUBRULE3(this.identifier);
      this.SUBRULE(this.colType);

      this.OPTION2(() => {
        this.CONSUME(Tokens.COMMENT);
        this.CONSUME(Tokens.STRING_LITERAL);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.alterStatementChangeColPosition);
      });
    });

    this.RULE('alterStatementChangeColPosition', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
            this.SUBRULE(this.identifier);
          },
        },
      ]);
    });

    this.RULE('alterStatementSuffixAddCol', () => {
      this.SUBRULE(this.identifier);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLACE);
          },
        },
      ]);
      this.CONSUME(Tokens.COLUMNS);
      this.CONSUME(Tokens.LPAREN);
      this.SUBRULE(this.columnNameTypeList);
      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('columnNameTypeList', () => {
      this.SUBRULE(this.columnNameType);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.columnNameType);
      });
    });

    this.RULE('columnNameType', () => {
      this.SUBRULE(this.identifier);
      this.SUBRULE(this.colType);

      this.OPTION(() => {
        this.CONSUME(Tokens.COMMENT);
        this.CONSUME(Tokens.STRING_LITERAL);
      });
    });

    this.RULE('colType', () => {
      this.SUBRULE(this.type);
    });

    this.RULE('colTypeList', () => {
      this.SUBRULE(this.colType);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.colType);
      });
    });

    this.RULE('type', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.primitiveType);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.listType);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.mapType);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.unionType);
          },
        },
      ]);
    });

    this.RULE('primitiveType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TINYINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SMALLINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIGINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOLEAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FLOAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DOUBLE);
          },
        },
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
            this.CONSUME(Tokens.TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL);
          },
        },
      ]);
    });

    this.RULE('listType', () => {
      this.CONSUME(Tokens.ARRAY);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.type);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('mapType', () => {
      this.CONSUME(Tokens.MAP);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.primitiveType);
      this.CONSUME(Tokens.COMMA);
      this.SUBRULE(this.type);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('unionType', () => {
      this.CONSUME(Tokens.UNIONTYPE);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.colTypeList);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('ifNotExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.NOT);
      this.CONSUME(Tokens.EXISTS);
    });

    this.RULE('columnNameList', () => {
      this.SUBRULE(this.columnName);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.columnName);
      });
    });

    this.RULE('columnName', () => {
      this.SUBRULE(this.identifier);
    });

    this.RULE('columnRefOrder', () => {
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

    this.RULE('queryOperator', () => {
      this.CONSUME(Tokens.UNION);
      this.CONSUME(Tokens.ALL);
    });

    this.RULE('whereClause', () => {
      this.CONSUME(Tokens.WHERE);
      this.SUBRULE(this.searchCondition);
    });

    this.RULE('groupByClause', () => {
      this.CONSUME(Tokens.GROUP);
      this.CONSUME(Tokens.BY);
      this.SUBRULE(this.groupByExpression);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.groupByExpression);
      });

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.WITH);
              this.CONSUME(Tokens.ROLLUP);
            },
          },
          {
            ALT: () => {
              this.CONSUME2(Tokens.WITH);
              this.CONSUME(Tokens.CUBE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.GROUPING);
        this.CONSUME(Tokens.SETS);
        this.CONSUME(Tokens.LPAREN);
        this.SUBRULE(this.groupingSetExpression);

        this.MANY2(() => {
          this.CONSUME2(Tokens.COMMA);
          this.SUBRULE2(this.groupingSetExpression);
        });

        this.CONSUME(Tokens.RPAREN);
      });
    });

    this.RULE('groupingSetExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.groupByExpression);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE2(this.groupByExpression);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE3(this.groupByExpression);
            });

            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LPAREN);
            this.CONSUME2(Tokens.RPAREN);
          },
        },
      ]);
    });

    this.RULE('groupByExpression', () => {
      this.SUBRULE(this.expression);
    });

    this.RULE('havingClause', () => {
      this.CONSUME(Tokens.HAVING);
      this.SUBRULE(this.havingCondition);
    });

    this.RULE('distributeByClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DISTRIBUTE);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.expression);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE2(this.expression);
            });

            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.DISTRIBUTE);
            this.CONSUME2(Tokens.BY);
            this.SUBRULE3(this.expression);
          },
        },
      ]);
    });

    this.RULE('havingCondition', () => {
      this.SUBRULE(this.expression);
    });

    this.RULE('searchCondition', () => {
      this.SUBRULE(this.expression);
    });

    this.RULE('expression', () => {
      this.SUBRULE(this.precedenceOrExpression);
    });

    this.RULE('atomExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableOrColumn);
          },
        },
      ]);
    });

    this.RULE('tableOrColumn', () => {
      this.SUBRULE(this.identifier);
    });

    this.RULE('dateLiteral', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.DATE);
      });

      this.AT_LEAST_ONE(() => {
        this.CONSUME(Tokens.STRING_LITERAL);
      });
    });

    this.RULE('constant', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.Number);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dateLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BigintLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SmallintLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TinyintLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.charSetStringLiteral);
          },
        },
      ]);
    });

    this.RULE('charSetStringLiteral', () => {
      this.CONSUME(Tokens.CharSetName);
      this.CONSUME(Tokens.CharSetLiteral);
    });

    this.RULE('booleanValue', () => {
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

    this.RULE('precedenceFieldExpression', () => {
      this.SUBRULE(this.atomExpression);

      this.MANY(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.LSQUARE);
              this.SUBRULE(this.expression);
              this.CONSUME(Tokens.RSQUARE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT);
              this.SUBRULE(this.identifier);
            },
          },
        ]);
      });
    });

    this.RULE('precedenceUnaryOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TILDE);
          },
        },
      ]);
    });

    this.RULE('nullCondition', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
            this.CONSUME2(Tokens.NULL);
          },
        },
      ]);
    });

    this.RULE('precedenceUnaryPrefixExpression', () => {
      this.OPTION(() => {
        this.SUBRULE(this.precedenceUnaryOperator);
      });

      this.SUBRULE(this.precedenceFieldExpression);
    });

    this.RULE('precedenceUnarySuffixExpression', () => {
      this.SUBRULE(this.precedenceUnaryPrefixExpression);

      this.OPTION(() => {
        this.CONSUME(Tokens.IS);
        this.SUBRULE(this.nullCondition);
      });
    });

    this.RULE('precedenceBitwiseXorOperator', () => {
      this.CONSUME(Tokens.BITWISEXOR);
    });

    this.RULE('precedenceBitwiseXorExpression', () => {
      this.SUBRULE(this.precedenceUnarySuffixExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceBitwiseXorOperator);
        this.SUBRULE2(this.precedenceUnarySuffixExpression);
      });
    });

    this.RULE('precedenceStarOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIVIDE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIV);
          },
        },
      ]);
    });

    this.RULE('precedenceStarExpression', () => {
      this.SUBRULE(this.precedenceBitwiseXorExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceStarOperator);
        this.SUBRULE2(this.precedenceBitwiseXorExpression);
      });
    });

    this.RULE('precedencePlusOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUS);
          },
        },
      ]);
    });

    this.RULE('precedencePlusExpression', () => {
      this.SUBRULE(this.precedenceStarExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedencePlusOperator);
        this.SUBRULE2(this.precedenceStarExpression);
      });
    });

    this.RULE('precedenceAmpersandOperator', () => {
      this.CONSUME(Tokens.AMPERSAND);
    });

    this.RULE('precedenceAmpersandExpression', () => {
      this.SUBRULE(this.precedencePlusExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceAmpersandOperator);
        this.SUBRULE2(this.precedencePlusExpression);
      });
    });

    this.RULE('precedenceBitwiseOrOperator', () => {
      this.CONSUME(Tokens.BITWISEOR);
    });

    this.RULE('precedenceBitwiseOrExpression', () => {
      this.SUBRULE(this.precedenceAmpersandExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceBitwiseOrOperator);
        this.SUBRULE2(this.precedenceAmpersandExpression);
      });
    });

    this.RULE('precedenceEqualNegatableOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RLIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REGEXP);
          },
        },
      ]);
    });

    this.RULE('precedenceEqualOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.precedenceEqualNegatableOperator);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EQUAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EQUAL_NS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOTEQUAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LESSTHANOREQUALTO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LESSTHAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREATERTHANOREQUALTO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREATERTHAN);
          },
        },
      ]);
    });

    this.RULE('precedenceEqualExpression', () => {
      this.SUBRULE(this.precedenceBitwiseOrExpression);

      this.MANY(() => {
        this.OR2([
          {
            ALT: () => {
              this.OPTION(() => {
                this.CONSUME(Tokens.NOT);
              });

              this.SUBRULE(this.precedenceEqualOperator);
              this.SUBRULE2(this.precedenceBitwiseOrExpression);
            },
          },
          {
            ALT: () => {
              this.OPTION2(() => {
                this.CONSUME2(Tokens.NOT);
              });

              this.CONSUME(Tokens.IN);
              this.SUBRULE(this.expressions);
            },
          },
          {
            ALT: () => {
              this.OPTION3(() => {
                this.CONSUME3(Tokens.NOT);
              });

              this.CONSUME(Tokens.BETWEEN);
              this.SUBRULE3(this.precedenceBitwiseOrExpression);
              this.CONSUME(Tokens.AND);
              this.SUBRULE4(this.precedenceBitwiseOrExpression);
            },
          },
        ]);
      });
    });

    this.RULE('expressions', () => {
      this.CONSUME(Tokens.LPAREN);
      this.SUBRULE(this.expression);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.expression);
      });

      this.CONSUME(Tokens.RPAREN);
    });

    this.RULE('precedenceNotOperator', () => {
      this.CONSUME(Tokens.NOT);
    });

    this.RULE('precedenceNotExpression', () => {
      this.OPTION(() => {
        this.SUBRULE(this.precedenceNotOperator);
      });

      this.SUBRULE(this.precedenceEqualExpression);
    });

    this.RULE('precedenceAndOperator', () => {
      this.CONSUME(Tokens.AND);
    });

    this.RULE('precedenceAndExpression', () => {
      this.SUBRULE(this.precedenceNotExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceAndOperator);
        this.SUBRULE2(this.precedenceNotExpression);
      });
    });

    this.RULE('precedenceOrOperator', () => {
      this.CONSUME(Tokens.OR);
    });

    this.RULE('precedenceOrExpression', () => {
      this.SUBRULE(this.precedenceAndExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceOrOperator);
        this.SUBRULE2(this.precedenceAndExpression);
      });
    });

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.LIMIT);
      this.CONSUME(Tokens.Number);
    });

    this.RULE('orderByClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.columnRefOrder);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE2(this.columnRefOrder);
            });

            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ORDER);
            this.CONSUME2(Tokens.BY);
            this.SUBRULE3(this.columnRefOrder);

            this.MANY2(() => {
              this.CONSUME2(Tokens.COMMA);
              this.SUBRULE4(this.columnRefOrder);
            });
          },
        },
      ]);
    });

    this.RULE('sortByClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SORT);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.LPAREN);
            this.SUBRULE(this.columnRefOrder);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.SUBRULE2(this.columnRefOrder);
            });

            this.CONSUME(Tokens.RPAREN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SORT);
            this.CONSUME2(Tokens.BY);
            this.SUBRULE3(this.columnRefOrder);
          },
        },
      ]);
    });

    this.RULE('identifier', () => {
      this.SUBRULE(this.uid);
    });

    this.RULE('uidList', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.uid);
      });
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
