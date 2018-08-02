import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  emptyStatement = 'emptyStatement',
  sqlStatement = 'sqlStatement',
  dmlStatement = 'dmlStatement',
  ddlStatement = 'ddlStatement',
  createTable = 'createTable',
  engineName = 'engineName',
  fileSizeLiteral = 'fileSizeLiteral',
  tableOption = 'tableOption',
  tablespaceStorage = 'tablespaceStorage',
  tables = 'tables',
  ifNotExists = 'ifNotExists',
  createDefinitions = 'createDefinitions',
  createDefinition = 'createDefinition',
  columnDefinition = 'columnDefinition',
  columnConstraint = 'columnConstraint',
  nullNotnull = 'nullNotnull',
  defaultValue = 'defaultValue',
  lengthOneDimension = 'lengthOneDimension',
  lengthTwoDimension = 'lengthTwoDimension',
  lengthTwoOptionalDimension = 'lengthTwoOptionalDimension',
  dataType = 'dataType',
  selectStatement = 'selectStatement',
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
  logicalOperator = 'logicalOperator',
  querySpecification = 'querySpecification',
  querySpecificationNointo = 'querySpecificationNointo',
  unionStatement = 'unionStatement',
  selectIntoExpression = 'selectIntoExpression',
  charsetName = 'charsetName',
  charsetNameBase = 'charsetNameBase',
  assignmentField = 'assignmentField',
  selectFieldsInto = 'selectFieldsInto',
  selectLinesInto = 'selectLinesInto',
  queryExpressionNointo = 'queryExpressionNointo',
  queryExpression = 'queryExpression',
  selectSpec = 'selectSpec',
  orderByClause = 'orderByClause',
  orderByExpression = 'orderByExpression',
  limitClause = 'limitClause',
  expression = 'expression',
  logicalExpression = 'logicalExpression',
  predicate = 'predicate',
  predicateReplace = 'predicateReplace',
  expressionAtom = 'expressionAtom',
  expressions = 'expressions',
  constant = 'constant',
  stringLiteral = 'stringLiteral',
  hexadecimalLiteral = 'hexadecimalLiteral',
  booleanLiteral = 'booleanLiteral',
  collationName = 'collationName',
  decimalLiteral = 'decimalLiteral',
  comparisonOperator = 'comparisonOperator',
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

    this.RULE('dmlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
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

    this.RULE('ddlStatement', () => {
      this.SUBRULE(this.createTable);
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

    this.RULE('fileSizeLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FILESIZE_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('tableOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);

            this.OPTION(() => {
              this.CONSUME(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE2(this.decimalLiteral);
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
              this.CONSUME4(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE(this.charsetName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);

            this.OPTION6(() => {
              this.CONSUME5(Tokens.EQUAL_SYMBOL);
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
              this.CONSUME6(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE(this.collationName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

            this.OPTION9(() => {
              this.CONSUME7(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);

            this.OPTION10(() => {
              this.CONSUME8(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);

            this.OPTION11(() => {
              this.CONSUME9(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
            this.CONSUME(Tokens.DIRECTORY);

            this.OPTION12(() => {
              this.CONSUME10(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME4(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);

            this.OPTION13(() => {
              this.CONSUME11(Tokens.EQUAL_SYMBOL);
            });

            this.OR4([
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
            this.CONSUME(Tokens.ENCRYPTION);

            this.OPTION14(() => {
              this.CONSUME12(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME5(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
            this.CONSUME2(Tokens.DIRECTORY);

            this.OPTION15(() => {
              this.CONSUME13(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME6(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);

            this.OPTION16(() => {
              this.CONSUME14(Tokens.EQUAL_SYMBOL);
            });

            this.OR5([
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

            this.OPTION17(() => {
              this.CONSUME15(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE(this.fileSizeLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

            this.OPTION18(() => {
              this.CONSUME16(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE3(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

            this.OPTION19(() => {
              this.CONSUME17(Tokens.EQUAL_SYMBOL);
            });

            this.SUBRULE4(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);

            this.OPTION20(() => {
              this.CONSUME18(Tokens.EQUAL_SYMBOL);
            });

            this.OR6([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ZERO_DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ONE_DECIMAL);
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
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);

            this.OPTION21(() => {
              this.CONSUME19(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME7(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);

            this.OPTION22(() => {
              this.CONSUME20(Tokens.EQUAL_SYMBOL);
            });

            this.OR7([
              {
                ALT: () => {
                  this.CONSUME4(Tokens.DEFAULT);
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
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);

            this.OPTION23(() => {
              this.CONSUME21(Tokens.EQUAL_SYMBOL);
            });

            this.OR8([
              {
                ALT: () => {
                  this.CONSUME5(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.ZERO_DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.ONE_DECIMAL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);

            this.OPTION24(() => {
              this.CONSUME22(Tokens.EQUAL_SYMBOL);
            });

            this.OR9([
              {
                ALT: () => {
                  this.CONSUME6(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ZERO_DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ONE_DECIMAL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
            this.SUBRULE(this.uid);

            this.OPTION25(() => {
              this.SUBRULE(this.tablespaceStorage);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNION);

            this.OPTION26(() => {
              this.CONSUME23(Tokens.EQUAL_SYMBOL);
            });

            this.CONSUME(Tokens.LR_BRACKET);
            this.SUBRULE(this.tables);
            this.CONSUME(Tokens.RR_BRACKET);
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

    this.RULE('ifNotExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.NOT);
      this.CONSUME(Tokens.EXISTS);
    });

    this.RULE('createDefinitions', () => {
      this.CONSUME(Tokens.LR_BRACKET);
      this.SUBRULE(this.createDefinition);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.createDefinition);
      });

      this.CONSUME(Tokens.RR_BRACKET);
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
            this.SUBRULE(this.nullNotnull);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
            this.SUBRULE(this.defaultValue);
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

    this.RULE('nullNotnull', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.NOT);
      });

      this.OR2([
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

    this.RULE('defaultValue', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);

            this.OPTION(() => {
              this.CONSUME(Tokens.ON);
              this.CONSUME(Tokens.UPDATE);
              this.CONSUME(Tokens.LOCALTIMESTAMP);
            });
          },
        },
      ]);
    });

    this.RULE('lengthOneDimension', () => {
      this.CONSUME(Tokens.LR_BRACKET);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.decimalLiteral);
      });

      this.CONSUME(Tokens.RR_BRACKET);
    });

    this.RULE('lengthTwoDimension', () => {
      this.CONSUME(Tokens.LR_BRACKET);
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.COMMA);
      this.SUBRULE2(this.decimalLiteral);
      this.CONSUME(Tokens.RR_BRACKET);
    });

    this.RULE('lengthTwoOptionalDimension', () => {
      this.CONSUME(Tokens.LR_BRACKET);
      this.SUBRULE(this.decimalLiteral);

      this.OPTION(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.decimalLiteral);
      });

      this.CONSUME(Tokens.RR_BRACKET);
    });

    this.RULE('dataType', () => {
      this.OR([
        {
          ALT: () => {
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
              this.SUBRULE(this.charsetName);
            });

            this.OPTION4(() => {
              this.CONSUME(Tokens.COLLATE);
              this.SUBRULE(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.OR3([
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

            this.OPTION5(() => {
              this.SUBRULE2(this.lengthOneDimension);
            });

            this.OPTION6(() => {
              this.CONSUME(Tokens.UNSIGNED);
            });

            this.OPTION7(() => {
              this.CONSUME(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR4([
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

            this.OPTION8(() => {
              this.SUBRULE(this.lengthTwoDimension);
            });

            this.OPTION9(() => {
              this.CONSUME2(Tokens.UNSIGNED);
            });

            this.OPTION10(() => {
              this.CONSUME2(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR5([
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

            this.OPTION11(() => {
              this.SUBRULE(this.lengthTwoOptionalDimension);
            });

            this.OPTION12(() => {
              this.CONSUME3(Tokens.UNSIGNED);
            });

            this.OPTION13(() => {
              this.CONSUME3(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR6([
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
          },
        },
        {
          ALT: () => {
            this.OR7([
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
                  this.CONSUME2(Tokens.BINARY);
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

            this.OPTION14(() => {
              this.SUBRULE3(this.lengthOneDimension);
            });
          },
        },
        {
          ALT: () => {
            this.OR8([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ENUM);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.SET);
                },
              },
            ]);
            this.CONSUME(Tokens.LR_BRACKET);
            this.CONSUME(Tokens.STRING_LITERAL);

            this.MANY(() => {
              this.CONSUME(Tokens.COMMA);
              this.CONSUME2(Tokens.STRING_LITERAL);
            });

            this.CONSUME(Tokens.RR_BRACKET);

            this.OPTION15(() => {
              this.CONSUME3(Tokens.BINARY);
            });

            this.OPTION16(() => {
              this.CONSUME2(Tokens.CHARACTER);
              this.CONSUME3(Tokens.SET);
              this.SUBRULE2(this.charsetName);
            });

            this.OPTION17(() => {
              this.CONSUME2(Tokens.COLLATE);
              this.SUBRULE2(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.OR9([
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
          },
        },
      ]);
    });

    this.RULE('selectStatement', () => {
      this.OR([
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
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.LR_BRACKET);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.RR_BRACKET);
      });

      this.OPTION3(() => {
        this.CONSUME2(Tokens.LR_BRACKET);
        this.SUBRULE2(this.uidList);
        this.CONSUME2(Tokens.RR_BRACKET);
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

    this.RULE('querySpecification', () => {
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

      this.OR3([
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

    this.RULE('queryExpressionNointo', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LR_BRACKET);
            this.SUBRULE(this.querySpecificationNointo);
            this.CONSUME(Tokens.RR_BRACKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LR_BRACKET);
            this.SUBRULE(this.queryExpressionNointo);
            this.CONSUME2(Tokens.RR_BRACKET);
          },
        },
      ]);
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
            this.CONSUME2(Tokens.LR_BRACKET);
            this.SUBRULE(this.queryExpression);
            this.CONSUME2(Tokens.RR_BRACKET);
          },
        },
      ]);
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

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.LIMIT);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.decimalLiteral);
      });

      this.CONSUME(Tokens.OFFSET);

      this.AT_LEAST_ONE2(() => {
        this.SUBRULE2(this.decimalLiteral);
      });
    });

    this.RULE('expression', () => {
      this.SUBRULE(this.predicate);

      this.OPTION(() => {
        this.SUBRULE(this.logicalExpression);
      });
    });

    this.RULE('logicalExpression', () => {
      this.SUBRULE(this.logicalOperator);
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.SUBRULE(this.logicalExpression);
      });
    });

    this.RULE('predicate', () => {
      this.SUBRULE(this.expressionAtom);

      this.OPTION(() => {
        this.SUBRULE(this.predicateReplace);
      });
    });

    this.RULE('predicateReplace', () => {
      this.SUBRULE(this.comparisonOperator);
      this.SUBRULE(this.predicate);

      this.OPTION(() => {
        this.SUBRULE(this.predicateReplace);
      });
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
      ]);
    });

    this.RULE('expressions', () => {
      this.SUBRULE(this.expression);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.expression);
      });
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

            this.OR2([
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
            this.OR2([
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
            this.OR3([
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

    this.RULE('hexadecimalLiteral', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.STRING_CHARSET_NAME);
      });

      this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
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

    this.RULE('comparisonOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LESS_SYMBOL);
            this.CONSUME(Tokens.EQUAL_SYMBOL);
            this.CONSUME(Tokens.GREATER_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LESS_SYMBOL);
            this.CONSUME2(Tokens.EQUAL_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.GREATER_SYMBOL);
            this.CONSUME3(Tokens.EQUAL_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.LESS_SYMBOL);
            this.CONSUME3(Tokens.GREATER_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLAMATION_SYMBOL);
            this.CONSUME4(Tokens.EQUAL_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.EQUAL_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.GREATER_SYMBOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.LESS_SYMBOL);
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
