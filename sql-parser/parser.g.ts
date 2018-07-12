import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  sqlStatement = 'sqlStatement',
  dmlStatement = 'dmlStatement',
  selectStatement = 'selectStatement',
  querySpecification = 'querySpecification',
  selectElements = 'selectElements',
  fromClause = 'fromClause',
  tableSources = 'tableSources',
  tableSource = 'tableSource',
  tableSourceItem = 'tableSourceItem',
  tableName = 'tableName',
  selectElement = 'selectElement',
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
      this.SUBRULE(this.sqlStatements);
    });

    this.RULE('sqlStatements', () => {
      this.SUBRULE(this.sqlStatement);
    });

    this.RULE('sqlStatement', () => {
      this.SUBRULE(this.dmlStatement);
    });

    this.RULE('dmlStatement', () => {
      this.SUBRULE(this.selectStatement);
    });

    this.RULE('selectStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.querySpecification);
      });
    });

    this.RULE('querySpecification', () => {
      this.CONSUME(Tokens.SELECT);
      this.SUBRULE(this.selectElements);

      this.OPTION(() => {
        this.SUBRULE(this.fromClause);
      });
    });

    this.RULE('selectElements', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          }
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          }
        }
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
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
        this.CONSUME(Tokens.ADD);
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
      this.SUBRULE(this.fullId);
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.ADD);
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
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.uid);
            }
          }
        ]);
      });
    });

    this.RULE('uid', () => {
      this.SUBRULE(this.simpleId);
    });

    this.RULE('simpleId', () => {
      this.CONSUME(Tokens.ID);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
