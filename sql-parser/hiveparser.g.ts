import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './hivelexer.g';

export enum SyntaxKind {
  root = 'root',
  execStatement = 'execStatement',
  ddlStatement = 'ddlStatement',
  selectStatement = 'selectStatement',
  selectClause = 'selectClause',
  selectList = 'selectList',
  selectItem = 'selectItem',
  selectExpression = 'selectExpression',
  tableAllColumns = 'tableAllColumns',
  tableName = 'tableName',
  fromClause = 'fromClause',
  joinSource = 'joinSource',
  fromSource = 'fromSource',
  tableSource = 'tableSource',
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
      this.SUBRULE(this.execStatement);
    });

    this.RULE('execStatement', () => {
      this.SUBRULE(this.ddlStatement);
    });

    this.RULE('ddlStatement', () => {
      this.SUBRULE(this.selectStatement);
    });

    this.RULE('selectStatement', () => {
      this.SUBRULE(this.selectClause);
      this.SUBRULE(this.fromClause);
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

    this.RULE('fromClause', () => {
      this.CONSUME(Tokens.KWFROM);
      this.SUBRULE(this.joinSource);
    });

    this.RULE('joinSource', () => {
      this.SUBRULE(this.fromSource);
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
            this.CONSUME(Tokens.KWFUNCTIONS);
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
