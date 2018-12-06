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
  insertStatement = 'insertStatement',
  partitionInsertDefinitions = 'partitionInsertDefinitions',
  insertStatementValue = 'insertStatementValue',
  updateStatement = 'updateStatement',
  updatedElement = 'updatedElement',
  fullColumnName = 'fullColumnName',
  deleteStatement = 'deleteStatement',
  createDatabaseStatement = 'createDatabaseStatement',
  ifExists = 'ifExists',
  switchDatabaseStatement = 'switchDatabaseStatement',
  dropDatabaseStatement = 'dropDatabaseStatement',
  createTable = 'createTable',
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
  selectStatement = 'selectStatement',
  selectClause = 'selectClause',
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
  selectList = 'selectList',
  selectItem = 'selectItem',
  selectExpression = 'selectExpression',
  tableAllColumns = 'tableAllColumns',
  fromClause = 'fromClause',
  joinSource = 'joinSource',
  joinPart = 'joinPart',
  joinToken = 'joinToken',
  fromSource = 'fromSource',
  tableSource = 'tableSource',
  tableName = 'tableName',
  orderByClause = 'orderByClause',
  sortByClause = 'sortByClause',
  identifier = 'identifier',
  uidList = 'uidList',
  nonReserved = 'nonReserved',
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

        this.CONSUME(Tokens.Identifier);
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

    this.RULE('fullColumnName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Identifier);
          },
        },
      ]);
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
        this.CONSUME(Tokens.EXTERNAL);
      });

      this.CONSUME(Tokens.TABLE);

      this.OPTION2(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.tableName);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.LIKE);
            this.SUBRULE2(this.tableName);
          },
        },
        {
          ALT: () => {
            this.OPTION3(() => {
              this.CONSUME(Tokens.AS);
              this.SUBRULE(this.selectStatement);
            });
          },
        },
      ]);
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
        this.CONSUME(Tokens.StringLiteral);
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
        this.CONSUME(Tokens.StringLiteral);
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

    this.RULE('selectStatement', () => {
      this.SUBRULE(this.selectClause);
      this.SUBRULE(this.fromClause);

      this.OPTION(() => {
        this.SUBRULE(this.whereClause);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.groupByClause);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.havingClause);
      });

      this.OPTION4(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION5(() => {
        this.SUBRULE(this.distributeByClause);
      });

      this.OPTION6(() => {
        this.SUBRULE(this.sortByClause);
      });

      this.OPTION7(() => {
        this.SUBRULE(this.limitClause);
      });
    });

    this.RULE('selectClause', () => {
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

      this.SUBRULE(this.selectList);
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
        this.CONSUME(Tokens.StringLiteral);
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
      this.MANY(() => {
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
      this.MANY(() => {
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

    this.RULE('selectList', () => {
      this.SUBRULE(this.selectItem);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.selectItem);
      });
    });

    this.RULE('selectItem', () => {
      this.SUBRULE(this.selectExpression);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.identifier);
      });
    });

    this.RULE('selectExpression', () => {
      this.SUBRULE(this.tableAllColumns);
    });

    this.RULE('tableAllColumns', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STAR);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableName);
            this.CONSUME(Tokens.DOT);
            this.CONSUME2(Tokens.STAR);
          },
        },
      ]);
    });

    this.RULE('fromClause', () => {
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.joinSource);
    });

    this.RULE('joinSource', () => {
      this.SUBRULE(this.fromSource);
      this.SUBRULE(this.joinPart);
    });

    this.RULE('joinPart', () => {
      this.MANY(() => {
        this.SUBRULE(this.joinToken);
        this.SUBRULE(this.fromSource);
      });
    });

    this.RULE('joinToken', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INNER);
            this.CONSUME2(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CROSS);
            this.CONSUME3(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);

            this.OPTION(() => {
              this.CONSUME(Tokens.OUTER);
            });

            this.CONSUME4(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.OUTER);
            });

            this.CONSUME5(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FULL);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.OUTER);
            });

            this.CONSUME6(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LEFT);
            this.CONSUME(Tokens.SEMI);
            this.CONSUME7(Tokens.JOIN);
          },
        },
      ]);
    });

    this.RULE('fromSource', () => {
      this.SUBRULE(this.tableSource);
    });

    this.RULE('tableSource', () => {
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.CONSUME(Tokens.Identifier);
      });
    });

    this.RULE('tableName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.identifier);
            this.CONSUME(Tokens.DOT);
            this.SUBRULE2(this.identifier);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.identifier);
          },
        },
      ]);
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
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.Identifier);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.nonReserved);
          },
        },
      ]);
    });

    this.RULE('uidList', () => {
      this.CONSUME(Tokens.Identifier);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.CONSUME2(Tokens.Identifier);
      });
    });

    this.RULE('nonReserved', () => {
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
            this.CONSUME(Tokens.LIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXISTS);
          },
        },
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
            this.CONSUME(Tokens.ORDER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OVERWRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OUTER);
          },
        },
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
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEXES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MSCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIRECTORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CLUSTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISTRIBUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTERNAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESCRIBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RENAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROTECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOLEAN);
          },
        },
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
            this.CONSUME(Tokens.DECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ARRAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRUCT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIONTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CLUSTERED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SORTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BUCKETS);
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
            this.CONSUME(Tokens.FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELIMITED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ITEMS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STORED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILEFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEQUENCEFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEXTFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RCFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORCFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INPUTFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OUTPUTFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INPUTDRIVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OUTPUTDRIVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.READONLY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NO_DROP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BUCKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OUT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERCENT);
          },
        },
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
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPORARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPLAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORMATTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRETTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEPENDENCY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGICAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERDE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFERRED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERDEPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DBPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LIMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TBLPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IDXPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUE_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ELEM_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAPJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STREAMTABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOLD_DDLTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CLUSTERSTATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTCTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LONG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELETE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPLUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWMINUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FETCH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERSECT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MATERIALIZED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMAS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVOKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCKS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNLOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLUSIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCEDURE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNSIGNED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WHILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.READS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PURGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ANALYZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BEFORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BETWEEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTINUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURSOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIGGER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RECORDREADER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RECORDWRITER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEMI);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TOUCH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATISTICS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCATENATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW_DATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RESTRICT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SKEWED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CUBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIRECTORIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUPING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SETS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOSCAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INNER);
          },
        },
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
