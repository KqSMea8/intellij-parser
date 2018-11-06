KWTRUE: 'TRUE';
KWFALSE: 'FALSE';
KWALL: 'ALL';
KWAND: 'AND';
KWOR: 'OR';
KWNOT: 'NOT' | '!';
KWLIKE: 'LIKE';

KWIF: 'IF';
KWEXISTS: 'EXISTS';
KWASC: 'ASC';
KWDESC: 'DESC';
KWORDER: 'ORDER';
KWGROUP: 'GROUP';
KWBY: 'BY';
KWHAVING: 'HAVING';
KWWHERE: 'WHERE';
KWFROM: 'FROM';
KWAS: 'AS';
KWSELECT: 'SELECT';
KWDISTINCT: 'DISTINCT';
KWINSERT: 'INSERT';
KWOVERWRITE: 'OVERWRITE';
KWOUTER: 'OUTER';
KWUNIQUEJOIN: 'UNIQUEJOIN';
KWPRESERVE: 'PRESERVE';
KWJOIN: 'JOIN';
KWLEFT: 'LEFT';
KWRIGHT: 'RIGHT';
KWFULL: 'FULL';
KWON: 'ON';
KWPARTITION: 'PARTITION';
KWPARTITIONS: 'PARTITIONS';
KWTABLE: 'TABLE';
KWTABLES: 'TABLES';
KWCOLUMNS: 'COLUMNS';
KWINDEX: 'INDEX';
KWINDEXES: 'INDEXES';
KWREBUILD: 'REBUILD';
KWFUNCTIONS: 'FUNCTIONS';
KWSHOW: 'SHOW';
KWMSCK: 'MSCK';
KWREPAIR: 'REPAIR';
KWDIRECTORY: 'DIRECTORY';
KWLOCAL: 'LOCAL';
KWTRANSFORM: 'TRANSFORM';
KWUSING: 'USING';
KWCLUSTER: 'CLUSTER';
KWDISTRIBUTE: 'DISTRIBUTE';
KWSORT: 'SORT';
KWUNION: 'UNION';
KWLOAD: 'LOAD';
KWEXPORT: 'EXPORT';
KWIMPORT: 'IMPORT';
KWDATA: 'DATA';
KWINPATH: 'INPATH';
KWIS: 'IS';
KWNULL: 'NULL';
KWCREATE: 'CREATE';
KWEXTERNAL: 'EXTERNAL';
KWALTER: 'ALTER';
KWCHANGE: 'CHANGE';
KWCOLUMN: 'COLUMN';
KWFIRST: 'FIRST';
KWAFTER: 'AFTER';
KWDESCRIBE: 'DESCRIBE';
KWDROP: 'DROP';
KWRENAME: 'RENAME';
KWIGNORE: 'IGNORE';
KWPROTECTION: 'PROTECTION';
KWTO: 'TO';
KWCOMMENT: 'COMMENT';
KWBOOLEAN: 'BOOLEAN';
KWTINYINT: 'TINYINT';
KWSMALLINT: 'SMALLINT';
KWINT: 'INT';
KWBIGINT: 'BIGINT';
KWFLOAT: 'FLOAT';
KWDOUBLE: 'DOUBLE';
KWDATE: 'DATE';
KWDATETIME: 'DATETIME';
KWTIMESTAMP: 'TIMESTAMP';
KWDECIMAL: 'DECIMAL';
KWSTRING: 'STRING';
KWARRAY: 'ARRAY';
KWSTRUCT: 'STRUCT';
KWMAP: 'MAP';
KWUNIONTYPE: 'UNIONTYPE';
KWREDUCE: 'REDUCE';
KWPARTITIONED: 'PARTITIONED';
KWCLUSTERED: 'CLUSTERED';
KWSORTED: 'SORTED';
KWINTO: 'INTO';
KWBUCKETS: 'BUCKETS';
KWROW: 'ROW';
KWROWS: 'ROWS';
KWFORMAT: 'FORMAT';
KWDELIMITED: 'DELIMITED';
KWFIELDS: 'FIELDS';
KWTERMINATED: 'TERMINATED';
KWESCAPED: 'ESCAPED';
KWCOLLECTION: 'COLLECTION';
KWITEMS: 'ITEMS';
KWKEYS: 'KEYS';
KWKEY_TYPE: '$KEY$';
KWLINES: 'LINES';
KWSTORED: 'STORED';
KWFILEFORMAT: 'FILEFORMAT';
KWSEQUENCEFILE: 'SEQUENCEFILE';
KWTEXTFILE: 'TEXTFILE';
KWRCFILE: 'RCFILE';
KWORCFILE: 'ORC';
KWINPUTFORMAT: 'INPUTFORMAT';
KWOUTPUTFORMAT: 'OUTPUTFORMAT';
KWINPUTDRIVER: 'INPUTDRIVER';
KWOUTPUTDRIVER: 'OUTPUTDRIVER';
KWOFFLINE: 'OFFLINE';
KWENABLE: 'ENABLE';
KWDISABLE: 'DISABLE';
KWREADONLY: 'READONLY';
KWNO_DROP: 'NO_DROP';
KWLOCATION: 'LOCATION';
KWTABLESAMPLE: 'TABLESAMPLE';
KWBUCKET: 'BUCKET';
KWOUT: 'OUT';
KWOF: 'OF';
KWPERCENT: 'PERCENT';
KWCAST: 'CAST';
KWADD: 'ADD';
KWREPLACE: 'REPLACE';
KWRLIKE: 'RLIKE';
KWREGEXP: 'REGEXP';
KWTEMPORARY: 'TEMPORARY';
KWFUNCTION: 'FUNCTION';
KWMACRO: 'MACRO';
KWEXPLAIN: 'EXPLAIN';
KWEXTENDED: 'EXTENDED';
KWFORMATTED: 'FORMATTED';
KWPRETTY: 'PRETTY';
KWDEPENDENCY: 'DEPENDENCY';
KWLOGICAL: 'LOGICAL';
KWSERDE: 'SERDE';
KWWITH: 'WITH';
KWDEFERRED: 'DEFERRED';
KWSERDEPROPERTIES: 'SERDEPROPERTIES';
KWDBPROPERTIES: 'DBPROPERTIES';
KWLIMIT: 'LIMIT';
KWSET: 'SET';
KWUNSET: 'UNSET';
KWTBLPROPERTIES: 'TBLPROPERTIES';
KWIDXPROPERTIES: 'IDXPROPERTIES';
KWVALUE_TYPE: '$VALUE$';
KWELEM_TYPE: '$ELEM$';
KWCASE: 'CASE';
KWWHEN: 'WHEN';
KWTHEN: 'THEN';
KWELSE: 'ELSE';
KWEND: 'END';
KWMAPJOIN: 'MAPJOIN';
KWSTREAMTABLE: 'STREAMTABLE';
KWHOLD_DDLTIME: 'HOLD_DDLTIME';
KWCLUSTERSTATUS: 'CLUSTERSTATUS';
KWUTC: 'UTC';
KWUTCTIMESTAMP: 'UTC_TMESTAMP';
KWLONG: 'LONG';
KWDELETE: 'DELETE';
KWPLUS: 'PLUS';
KWMINUS: 'MINUS';
KWFETCH: 'FETCH';
KWINTERSECT: 'INTERSECT';
KWVIEW: 'VIEW';
KWIN: 'IN';
KWDATABASE: 'DATABASE';
KWDATABASES: 'DATABASES';
KWMATERIALIZED: 'MATERIALIZED';
KWSCHEMA: 'SCHEMA';
KWSCHEMAS: 'SCHEMAS';
KWGRANT: 'GRANT';
KWREVOKE: 'REVOKE';
KWSSL: 'SSL';
KWUNDO: 'UNDO';
KWLOCK: 'LOCK';
KWLOCKS: 'LOCKS';
KWUNLOCK: 'UNLOCK';
KWSHARED: 'SHARED';
KWEXCLUSIVE: 'EXCLUSIVE';
KWPROCEDURE: 'PROCEDURE';
KWUNSIGNED: 'UNSIGNED';
KWWHILE: 'WHILE';
KWREAD: 'READ';
KWREADS: 'READS';
KWPURGE: 'PURGE';
KWRANGE: 'RANGE';
KWANALYZE: 'ANALYZE';
KWBEFORE: 'BEFORE';
KWBETWEEN: 'BETWEEN';
KWBOTH: 'BOTH';
KWBINARY: 'BINARY';
KWCROSS: 'CROSS';
KWCONTINUE: 'CONTINUE';
KWCURSOR: 'CURSOR';
KWTRIGGER: 'TRIGGER';
KWRECORDREADER: 'RECORDREADER';
KWRECORDWRITER: 'RECORDWRITER';
KWSEMI: 'SEMI';
KWLATERAL: 'LATERAL';
KWTOUCH: 'TOUCH';
KWARCHIVE: 'ARCHIVE';
KWUNARCHIVE: 'UNARCHIVE';
KWCOMPUTE: 'COMPUTE';
KWSTATISTICS: 'STATISTICS';
KWUSE: 'USE';
KWOPTION: 'OPTION';
KWCONCATENATE: 'CONCATENATE';
KWSHOW_DATABASE: 'SHOW_DATABASE';
KWUPDATE: 'UPDATE';
KWRESTRICT: 'RESTRICT';
KWCASCADE: 'CASCADE';
KWSKEWED: 'SKEWED';
KWROLLUP: 'ROLLUP';
KWCUBE: 'CUBE';
KWDIRECTORIES: 'DIRECTORIES';
KWFOR: 'FOR';
KWWINDOW: 'WINDOW';
KWUNBOUNDED: 'UNBOUNDED';
KWPRECEDING: 'PRECEDING';
KWFOLLOWING: 'FOLLOWING';
KWCURRENT: 'CURRENT';
KWLESS: 'LESS';
KWMORE: 'MORE';
KWOVER: 'OVER';
KWGROUPING: 'GROUPING';
KWSETS: 'SETS';
KWTRUNCATE: 'TRUNCATE';
KWNOSCAN: 'NOSCAN';
KWPARTIALSCAN: 'PARTIALSCAN';
KWUSER: 'USER';
KWROLE: 'ROLE';
KWINNER: 'INNER';
KWEXCHANGE: 'EXCHANGE';

// Operators NOTE: if you add a new function/operator, add it to sysFuncNames so that describe
// function _FUNC_ will work.

DOT: '.'; // generated as a part of Number rule
COLON: ':';
COMMA: ',';
SEMICOLON: ';';

LPAREN: '(';
RPAREN: ')';
LSQUARE: '[';
RSQUARE: ']';
LCURLY: '{';
RCURLY: '}';

EQUAL: '=' | '==';
EQUAL_NS: '<=>';
NOTEQUAL: '<>' | '!=';
LESSTHANOREQUALTO: '<=';
LESSTHAN: '<';
GREATERTHANOREQUALTO: '>=';
GREATERTHAN: '>';

DIVIDE: '/';
PLUS: '+';
MINUS: '-';
STAR: '*';
MOD: '%';
DIV: 'DIV';

AMPERSAND: '&';
TILDE: '~';
BITWISEOR: '|';
BITWISEXOR: '^';
QUESTION: '?';
DOLLAR: '$';

// LITERALS
fragment Letter: [A-Za-z];

fragment HexDigit: [A-Fa-f];

fragment Digit: [0-9];

fragment Exponent: ('e' | 'E') ( PLUS | MINUS)? (Digit)+;

fragment RegexComponent:
	[A-Za-z0-9_]
	| PLUS
	| STAR
	| QUESTION
	| MINUS
	| DOT
	| LPAREN
	| RPAREN
	| LSQUARE
	| RSQUARE
	| LCURLY
	| RCURLY
	| BITWISEXOR
	| BITWISEOR
	| DOLLAR;

StringLiteral:
	(
		'\'' ( ~('\'' | '\\') | ('\\' .))* '\''
		| '\"' ( ~('\"' | '\\') | ('\\' .))* '\"'
	)+;

CharSetLiteral: StringLiteral | '0' 'X' (HexDigit | Digit)+;

BigintLiteral: (Digit)+ 'L';

SmallintLiteral: (Digit)+ 'S';

TinyintLiteral: (Digit)+ 'Y';

DecimalLiteral: Number 'B' 'D';

ByteLengthLiteral:
	(Digit)+ ('b' | 'B' | 'k' | 'K' | 'm' | 'M' | 'g' | 'G');

Number: (Digit)+ ( DOT (Digit)* (Exponent)? | Exponent)?;

Identifier:
	(Letter | Digit) (Letter | Digit | '_')*
	| '`' RegexComponent+ '`';

CharSetName: '_' (Letter | Digit | '_' | '-' | '.' | ':')+;

WS: (' ' | '\r' | '\t' | '\n');

COMMENT: '--' (~('\n' | '\r'))*;

