import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  execStatement = 'execStatement',
  ddlStatement = 'ddlStatement',
  createDatabaseStatement = 'createDatabaseStatement',
  ifExists = 'ifExists',
  switchDatabaseStatement = 'switchDatabaseStatement',
  dropDatabaseStatement = 'dropDatabaseStatement',
  createTableStatement = 'createTableStatement',
  dropTableStatement = 'dropTableStatement',
  alterStatement = 'alterStatement',
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
  selectClause = 'selectClause',
  selectList = 'selectList',
  selectItem = 'selectItem',
  selectExpression = 'selectExpression',
  tableAllColumns = 'tableAllColumns',
  fromClause = 'fromClause',
  joinSource = 'joinSource',
  joinToken = 'joinToken',
  fromSource = 'fromSource',
  tableSource = 'tableSource',
  tableName = 'tableName',
  orderByClause = 'orderByClause',
  sortByClause = 'sortByClause',
  identifier = 'identifier',
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
      this.MANY(() => {
        this.SUBRULE(this.execStatement);
        this.CONSUME(Tokens.SEMICOLON);
      });
    });

    this.RULE('execStatement', () => {
      this.SUBRULE(this.ddlStatement);
    });

    this.RULE('ddlStatement', () => {
      this.OR([
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
        {
          ALT: () => {
            this.SUBRULE(this.createTableStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropTableStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
      ]);
    });

    this.RULE('createDatabaseStatement', () => {
      this.CONSUME(Tokens.KWCREATE);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSCHEMA);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.identifier);
    });

    this.RULE('ifExists', () => {
      this.CONSUME(Tokens.KWIF);
      this.CONSUME(Tokens.KWEXISTS);
    });

    this.RULE('switchDatabaseStatement', () => {
      this.CONSUME(Tokens.KWUSE);
      this.SUBRULE(this.identifier);
    });

    this.RULE('dropDatabaseStatement', () => {
      this.CONSUME(Tokens.KWDROP);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSCHEMA);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.identifier);
    });

    this.RULE('createTableStatement', () => {
      this.CONSUME(Tokens.KWCREATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.KWEXTERNAL);
      });

      this.CONSUME(Tokens.KWTABLE);

      this.OPTION2(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.tableName);
      this.OR2([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLIKE);
            this.SUBRULE2(this.tableName);
          },
        },
        {
          ALT: () => {
            this.OPTION3(() => {
              this.CONSUME(Tokens.KWAS);
              this.SUBRULE(this.selectStatement);
            });
          },
        },
      ]);
    });

    this.RULE('dropTableStatement', () => {
      this.CONSUME(Tokens.KWDROP);
      this.CONSUME(Tokens.KWTABLE);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.tableName);
    });

    this.RULE('alterStatement', () => {
      this.CONSUME(Tokens.KWALTER);
      this.CONSUME(Tokens.KWTABLE);
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
      this.CONSUME(Tokens.KWRENAME);
      this.CONSUME(Tokens.KWTO);
      this.SUBRULE2(this.identifier);
    });

    this.RULE('alterStatementSuffixRenameCol', () => {
      this.SUBRULE(this.identifier);
      this.CONSUME(Tokens.KWCHANGE);

      this.OPTION(() => {
        this.CONSUME(Tokens.KWCOLUMN);
      });

      this.SUBRULE2(this.identifier);
      this.SUBRULE3(this.identifier);
      this.SUBRULE(this.colType);

      this.OPTION2(() => {
        this.CONSUME(Tokens.KWCOMMENT);
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
            this.CONSUME(Tokens.KWFIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWAFTER);
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
            this.CONSUME(Tokens.KWADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREPLACE);
          },
        },
      ]);
      this.CONSUME(Tokens.KWCOLUMNS);
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
        this.CONSUME(Tokens.KWCOMMENT);
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
            this.CONSUME(Tokens.KWTINYINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSMALLINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBIGINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBOOLEAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFLOAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDOUBLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDECIMAL);
          },
        },
      ]);
    });

    this.RULE('listType', () => {
      this.CONSUME(Tokens.KWARRAY);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.type);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('mapType', () => {
      this.CONSUME(Tokens.KWMAP);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.primitiveType);
      this.CONSUME(Tokens.COMMA);
      this.SUBRULE(this.type);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('unionType', () => {
      this.CONSUME(Tokens.KWUNIONTYPE);
      this.CONSUME(Tokens.LESSTHAN);
      this.SUBRULE(this.colTypeList);
      this.CONSUME(Tokens.GREATERTHAN);
    });

    this.RULE('ifNotExists', () => {
      this.CONSUME(Tokens.KWIF);
      this.CONSUME(Tokens.KWNOT);
      this.CONSUME(Tokens.KWEXISTS);
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
              this.CONSUME(Tokens.KWASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.KWDESC);
            },
          },
        ]);
      });
    });

    this.RULE('queryOperator', () => {
      this.CONSUME(Tokens.KWUNION);
      this.CONSUME(Tokens.KWALL);
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

    this.RULE('whereClause', () => {
      this.CONSUME(Tokens.KWWHERE);
      this.SUBRULE(this.searchCondition);
    });

    this.RULE('groupByClause', () => {
      this.CONSUME(Tokens.KWGROUP);
      this.CONSUME(Tokens.KWBY);
      this.SUBRULE(this.groupByExpression);

      this.MANY(() => {
        this.CONSUME(Tokens.COMMA);
        this.SUBRULE2(this.groupByExpression);
      });

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.KWWITH);
              this.CONSUME(Tokens.KWROLLUP);
            },
          },
          {
            ALT: () => {
              this.CONSUME2(Tokens.KWWITH);
              this.CONSUME(Tokens.KWCUBE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.KWGROUPING);
        this.CONSUME(Tokens.KWSETS);
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
      this.CONSUME(Tokens.KWHAVING);
      this.SUBRULE(this.havingCondition);
    });

    this.RULE('distributeByClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDISTRIBUTE);
            this.CONSUME(Tokens.KWBY);
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
            this.CONSUME2(Tokens.KWDISTRIBUTE);
            this.CONSUME2(Tokens.KWBY);
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
        this.CONSUME(Tokens.KWDATE);
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
            this.CONSUME(Tokens.KWTRUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFALSE);
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
            this.CONSUME(Tokens.KWNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWNOT);
            this.CONSUME2(Tokens.KWNULL);
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
        this.CONSUME(Tokens.KWIS);
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
            this.CONSUME(Tokens.KWLIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRLIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREGEXP);
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
                this.CONSUME(Tokens.KWNOT);
              });

              this.SUBRULE(this.precedenceEqualOperator);
              this.SUBRULE2(this.precedenceBitwiseOrExpression);
            },
          },
          {
            ALT: () => {
              this.OPTION2(() => {
                this.CONSUME2(Tokens.KWNOT);
              });

              this.CONSUME(Tokens.KWIN);
              this.SUBRULE(this.expressions);
            },
          },
          {
            ALT: () => {
              this.OPTION3(() => {
                this.CONSUME3(Tokens.KWNOT);
              });

              this.CONSUME(Tokens.KWBETWEEN);
              this.SUBRULE3(this.precedenceBitwiseOrExpression);
              this.CONSUME(Tokens.KWAND);
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
      this.CONSUME(Tokens.KWNOT);
    });

    this.RULE('precedenceNotExpression', () => {
      this.MANY(() => {
        this.SUBRULE(this.precedenceNotOperator);
      });

      this.SUBRULE(this.precedenceEqualExpression);
    });

    this.RULE('precedenceAndOperator', () => {
      this.CONSUME(Tokens.KWAND);
    });

    this.RULE('precedenceAndExpression', () => {
      this.SUBRULE(this.precedenceNotExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceAndOperator);
        this.SUBRULE2(this.precedenceNotExpression);
      });
    });

    this.RULE('precedenceOrOperator', () => {
      this.CONSUME(Tokens.KWOR);
    });

    this.RULE('precedenceOrExpression', () => {
      this.SUBRULE(this.precedenceAndExpression);

      this.MANY(() => {
        this.SUBRULE(this.precedenceOrOperator);
        this.SUBRULE2(this.precedenceAndExpression);
      });
    });

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.KWLIMIT);
      this.CONSUME(Tokens.Number);
    });

    this.RULE('selectClause', () => {
      this.CONSUME(Tokens.KWSELECT);

      this.OPTION(() => {
        this.OR2([
          {
            ALT: () => {
              this.CONSUME(Tokens.KWALL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.KWDISTINCT);
            },
          },
        ]);
      });

      this.SUBRULE(this.selectList);
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
          this.CONSUME(Tokens.KWAS);
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
      this.CONSUME(Tokens.KWFROM);
      this.SUBRULE(this.joinSource);
    });

    this.RULE('joinSource', () => {
      this.SUBRULE(this.fromSource);

      this.MANY(() => {
        this.SUBRULE(this.joinToken);
        this.SUBRULE2(this.fromSource);
      });
    });

    this.RULE('joinToken', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINNER);
            this.CONSUME2(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCROSS);
            this.CONSUME3(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLEFT);

            this.OPTION(() => {
              this.CONSUME(Tokens.KWOUTER);
            });

            this.CONSUME4(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRIGHT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.KWOUTER);
            });

            this.CONSUME5(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFULL);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.KWOUTER);
            });

            this.CONSUME6(Tokens.KWJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.KWLEFT);
            this.CONSUME(Tokens.KWSEMI);
            this.CONSUME7(Tokens.KWJOIN);
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
          this.CONSUME(Tokens.KWAS);
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
            this.CONSUME(Tokens.KWORDER);
            this.CONSUME(Tokens.KWBY);
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
            this.CONSUME2(Tokens.KWORDER);
            this.CONSUME2(Tokens.KWBY);
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
            this.CONSUME(Tokens.KWSORT);
            this.CONSUME(Tokens.KWBY);
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
            this.CONSUME2(Tokens.KWSORT);
            this.CONSUME2(Tokens.KWBY);
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

    this.RULE('nonReserved', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTRUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFALSE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWEXISTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWASC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDESC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWORDER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWGROUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWAS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOVERWRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOUTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLEFT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRIGHT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPARTITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCOLUMNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINDEXES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREBUILD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSHOW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWMSCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREPAIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDIRECTORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOCAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUSING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCLUSTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDISTRIBUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWEXPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWIMPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWIS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCREATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWEXTERNAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWALTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCHANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWAFTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDESCRIBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDROP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRENAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWIGNORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPROTECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCOMMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBOOLEAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTINYINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSMALLINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBIGINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFLOAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDOUBLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWARRAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTRUCT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNIONTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPARTITIONED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCLUSTERED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSORTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINTO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBUCKETS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWROW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDELIMITED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFIELDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTERMINATED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWESCAPED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCOLLECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWITEMS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWKEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWKEY_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLINES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTORED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFILEFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSEQUENCEFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTEXTFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRCFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWORCFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINPUTFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOUTPUTFORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINPUTDRIVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOUTPUTDRIVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOFFLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWENABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDISABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREADONLY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWNO_DROP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOCATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBUCKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOUT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPERCENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREPLACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRLIKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREGEXP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTEMPORARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWEXPLAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFORMATTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPRETTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDEPENDENCY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOGICAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSERDE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWWITH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDEFERRED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSERDEPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDBPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLIMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTBLPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWIDXPROPERTIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWVALUE_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWELEM_TYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWMAPJOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTREAMTABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWHOLD_DDLTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCLUSTERSTATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUTC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUTCTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLONG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDELETE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPLUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWMINUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFETCH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINTERSECT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWVIEW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDATABASES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWMATERIALIZED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSCHEMA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSCHEMAS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWGRANT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREVOKE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNDO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLOCKS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNLOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSHARED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWEXCLUSIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPROCEDURE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNSIGNED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWWHILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWREADS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWPURGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWANALYZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBEFORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBETWEEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBOTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCONTINUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCURSOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTRIGGER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRECORDREADER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRECORDWRITER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSEMI);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWLATERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTOUCH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUNARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCOMPUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSTATISTICS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUSE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWOPTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCONCATENATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSHOW_DATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWRESTRICT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCASCADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSKEWED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWROLLUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWCUBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWDIRECTORIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWFOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWGROUPING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWSETS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWTRUNCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWNOSCAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWUSER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWROLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KWINNER);
          },
        },
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
