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
  fullColumnName = 'fullColumnName',
  dottedId = 'dottedId',
  fullId = 'fullId',
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
            this.CONSUME(Tokens.EOF);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.EOF);
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
        this.CONSUME(Tokens.EOF);
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

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.CONSUME(Tokens.ID);
      });
    });

    this.RULE('fullColumnName', () => {
      this.CONSUME(Tokens.ID);

      this.MANY(() => {
        this.SUBRULE(this.dottedId);
      });
    });

    this.RULE('dottedId', () => {
      this.CONSUME(Tokens.DOT_ID);
    });

    this.RULE('fullId', () => {
      this.CONSUME(Tokens.ID);

      this.MANY(() => {
        this.CONSUME(Tokens.DOT_ID);
      });
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
