import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /\-\-([^(\n|\r)])*/i,
});
const WS = chevrotain.createToken({
  name: 'WS',
  pattern: /(\ |\r|\t|\n)/i,
});
const Number = chevrotain.createToken({
  name: 'Number',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
});
const ByteLengthLiteral = chevrotain.createToken({
  name: 'ByteLengthLiteral',
  pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
});
const DecimalLiteral = chevrotain.createToken({
  name: 'DecimalLiteral',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
});
const TinyintLiteral = chevrotain.createToken({
  name: 'TinyintLiteral',
  pattern: /([0-9])+Y/i,
});
const SmallintLiteral = chevrotain.createToken({
  name: 'SmallintLiteral',
  pattern: /([0-9])+S/i,
});
const BigintLiteral = chevrotain.createToken({
  name: 'BigintLiteral',
  pattern: /([0-9])+L/i,
});
const CharSetLiteral = chevrotain.createToken({
  name: 'CharSetLiteral',
  pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
});
const StringLiteral = chevrotain.createToken({
  name: 'StringLiteral',
  pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
});
const DOLLAR = chevrotain.createToken({
  name: 'DOLLAR',
  pattern: /\$/i,
});
const QUESTION = chevrotain.createToken({
  name: 'QUESTION',
  pattern: /\?/i,
});
const BITWISEXOR = chevrotain.createToken({
  name: 'BITWISEXOR',
  pattern: /\^/i,
});
const BITWISEOR = chevrotain.createToken({
  name: 'BITWISEOR',
  pattern: /\|/i,
});
const TILDE = chevrotain.createToken({
  name: 'TILDE',
  pattern: /\~/i,
});
const AMPERSAND = chevrotain.createToken({
  name: 'AMPERSAND',
  pattern: /\&/i,
});
const DIV = chevrotain.createToken({
  name: 'DIV',
  pattern: /DIV/i,
});
const MOD = chevrotain.createToken({
  name: 'MOD',
  pattern: /\%/i,
});
const STAR = chevrotain.createToken({
  name: 'STAR',
  pattern: /\*/i,
});
const MINUS = chevrotain.createToken({
  name: 'MINUS',
  pattern: /\-/i,
});
const PLUS = chevrotain.createToken({
  name: 'PLUS',
  pattern: /\+/i,
});
const DIVIDE = chevrotain.createToken({
  name: 'DIVIDE',
  pattern: /\//i,
});
const GREATERTHAN = chevrotain.createToken({
  name: 'GREATERTHAN',
  pattern: /\>/i,
});
const GREATERTHANOREQUALTO = chevrotain.createToken({
  name: 'GREATERTHANOREQUALTO',
  pattern: /\>\=/i,
});
const LESSTHAN = chevrotain.createToken({
  name: 'LESSTHAN',
  pattern: /\</i,
});
const LESSTHANOREQUALTO = chevrotain.createToken({
  name: 'LESSTHANOREQUALTO',
  pattern: /\<\=/i,
});
const NOTEQUAL = chevrotain.createToken({
  name: 'NOTEQUAL',
  pattern: /(\<\>|\!\=)/i,
});
const EQUAL_NS = chevrotain.createToken({
  name: 'EQUAL_NS',
  pattern: /\<\=\>/i,
});
const EQUAL = chevrotain.createToken({
  name: 'EQUAL',
  pattern: /(\=|\=\=)/i,
});
const RCURLY = chevrotain.createToken({
  name: 'RCURLY',
  pattern: /\}/i,
});
const LCURLY = chevrotain.createToken({
  name: 'LCURLY',
  pattern: /\{/i,
});
const RSQUARE = chevrotain.createToken({
  name: 'RSQUARE',
  pattern: /\]/i,
});
const LSQUARE = chevrotain.createToken({
  name: 'LSQUARE',
  pattern: /\[/i,
});
const RPAREN = chevrotain.createToken({
  name: 'RPAREN',
  pattern: /\)/i,
});
const LPAREN = chevrotain.createToken({
  name: 'LPAREN',
  pattern: /\(/i,
});
const SEMICOLON = chevrotain.createToken({
  name: 'SEMICOLON',
  pattern: /\;/i,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/i,
});
const COLON = chevrotain.createToken({
  name: 'COLON',
  pattern: /\:/i,
});
const DOT = chevrotain.createToken({
  name: 'DOT',
  pattern: /\./i,
});
const KWEXCHANGE = chevrotain.createToken({
  name: 'KWEXCHANGE',
  pattern: /EXCHANGE/i,
});
const KWINNER = chevrotain.createToken({
  name: 'KWINNER',
  pattern: /INNER/i,
});
const KWROLE = chevrotain.createToken({
  name: 'KWROLE',
  pattern: /ROLE/i,
});
const KWUSER = chevrotain.createToken({
  name: 'KWUSER',
  pattern: /USER/i,
});
const KWPARTIALSCAN = chevrotain.createToken({
  name: 'KWPARTIALSCAN',
  pattern: /PARTIALSCAN/i,
});
const KWNOSCAN = chevrotain.createToken({
  name: 'KWNOSCAN',
  pattern: /NOSCAN/i,
});
const KWTRUNCATE = chevrotain.createToken({
  name: 'KWTRUNCATE',
  pattern: /TRUNCATE/i,
});
const KWSETS = chevrotain.createToken({
  name: 'KWSETS',
  pattern: /SETS/i,
});
const KWGROUPING = chevrotain.createToken({
  name: 'KWGROUPING',
  pattern: /GROUPING/i,
});
const KWMORE = chevrotain.createToken({
  name: 'KWMORE',
  pattern: /MORE/i,
});
const KWLESS = chevrotain.createToken({
  name: 'KWLESS',
  pattern: /LESS/i,
});
const KWCURRENT = chevrotain.createToken({
  name: 'KWCURRENT',
  pattern: /CURRENT/i,
});
const KWFOLLOWING = chevrotain.createToken({
  name: 'KWFOLLOWING',
  pattern: /FOLLOWING/i,
});
const KWPRECEDING = chevrotain.createToken({
  name: 'KWPRECEDING',
  pattern: /PRECEDING/i,
});
const KWUNBOUNDED = chevrotain.createToken({
  name: 'KWUNBOUNDED',
  pattern: /UNBOUNDED/i,
});
const KWWINDOW = chevrotain.createToken({
  name: 'KWWINDOW',
  pattern: /WINDOW/i,
});
const KWDIRECTORIES = chevrotain.createToken({
  name: 'KWDIRECTORIES',
  pattern: /DIRECTORIES/i,
});
const KWCUBE = chevrotain.createToken({
  name: 'KWCUBE',
  pattern: /CUBE/i,
});
const KWROLLUP = chevrotain.createToken({
  name: 'KWROLLUP',
  pattern: /ROLLUP/i,
});
const KWSKEWED = chevrotain.createToken({
  name: 'KWSKEWED',
  pattern: /SKEWED/i,
});
const KWCASCADE = chevrotain.createToken({
  name: 'KWCASCADE',
  pattern: /CASCADE/i,
});
const KWRESTRICT = chevrotain.createToken({
  name: 'KWRESTRICT',
  pattern: /RESTRICT/i,
});
const KWUPDATE = chevrotain.createToken({
  name: 'KWUPDATE',
  pattern: /UPDATE/i,
});
const KWSHOW_DATABASE = chevrotain.createToken({
  name: 'KWSHOW_DATABASE',
  pattern: /SHOW_DATABASE/i,
});
const KWCONCATENATE = chevrotain.createToken({
  name: 'KWCONCATENATE',
  pattern: /CONCATENATE/i,
});
const KWOPTION = chevrotain.createToken({
  name: 'KWOPTION',
  pattern: /OPTION/i,
});
const KWUSE = chevrotain.createToken({
  name: 'KWUSE',
  pattern: /USE/i,
});
const KWSTATISTICS = chevrotain.createToken({
  name: 'KWSTATISTICS',
  pattern: /STATISTICS/i,
});
const KWCOMPUTE = chevrotain.createToken({
  name: 'KWCOMPUTE',
  pattern: /COMPUTE/i,
});
const KWUNARCHIVE = chevrotain.createToken({
  name: 'KWUNARCHIVE',
  pattern: /UNARCHIVE/i,
});
const KWARCHIVE = chevrotain.createToken({
  name: 'KWARCHIVE',
  pattern: /ARCHIVE/i,
});
const KWTOUCH = chevrotain.createToken({
  name: 'KWTOUCH',
  pattern: /TOUCH/i,
});
const KWLATERAL = chevrotain.createToken({
  name: 'KWLATERAL',
  pattern: /LATERAL/i,
});
const KWSEMI = chevrotain.createToken({
  name: 'KWSEMI',
  pattern: /SEMI/i,
});
const KWRECORDWRITER = chevrotain.createToken({
  name: 'KWRECORDWRITER',
  pattern: /RECORDWRITER/i,
});
const KWRECORDREADER = chevrotain.createToken({
  name: 'KWRECORDREADER',
  pattern: /RECORDREADER/i,
});
const KWTRIGGER = chevrotain.createToken({
  name: 'KWTRIGGER',
  pattern: /TRIGGER/i,
});
const KWCURSOR = chevrotain.createToken({
  name: 'KWCURSOR',
  pattern: /CURSOR/i,
});
const KWCONTINUE = chevrotain.createToken({
  name: 'KWCONTINUE',
  pattern: /CONTINUE/i,
});
const KWCROSS = chevrotain.createToken({
  name: 'KWCROSS',
  pattern: /CROSS/i,
});
const KWBINARY = chevrotain.createToken({
  name: 'KWBINARY',
  pattern: /BINARY/i,
});
const KWBOTH = chevrotain.createToken({
  name: 'KWBOTH',
  pattern: /BOTH/i,
});
const KWBETWEEN = chevrotain.createToken({
  name: 'KWBETWEEN',
  pattern: /BETWEEN/i,
});
const KWBEFORE = chevrotain.createToken({
  name: 'KWBEFORE',
  pattern: /BEFORE/i,
});
const KWANALYZE = chevrotain.createToken({
  name: 'KWANALYZE',
  pattern: /ANALYZE/i,
});
const KWRANGE = chevrotain.createToken({
  name: 'KWRANGE',
  pattern: /RANGE/i,
});
const KWPURGE = chevrotain.createToken({
  name: 'KWPURGE',
  pattern: /PURGE/i,
});
const KWREADS = chevrotain.createToken({
  name: 'KWREADS',
  pattern: /READS/i,
});
const KWWHILE = chevrotain.createToken({
  name: 'KWWHILE',
  pattern: /WHILE/i,
});
const KWUNSIGNED = chevrotain.createToken({
  name: 'KWUNSIGNED',
  pattern: /UNSIGNED/i,
});
const KWPROCEDURE = chevrotain.createToken({
  name: 'KWPROCEDURE',
  pattern: /PROCEDURE/i,
});
const KWEXCLUSIVE = chevrotain.createToken({
  name: 'KWEXCLUSIVE',
  pattern: /EXCLUSIVE/i,
});
const KWSHARED = chevrotain.createToken({
  name: 'KWSHARED',
  pattern: /SHARED/i,
});
const KWUNLOCK = chevrotain.createToken({
  name: 'KWUNLOCK',
  pattern: /UNLOCK/i,
});
const KWLOCKS = chevrotain.createToken({
  name: 'KWLOCKS',
  pattern: /LOCKS/i,
});
const KWLOCK = chevrotain.createToken({
  name: 'KWLOCK',
  pattern: /LOCK/i,
});
const KWUNDO = chevrotain.createToken({
  name: 'KWUNDO',
  pattern: /UNDO/i,
});
const KWSSL = chevrotain.createToken({
  name: 'KWSSL',
  pattern: /SSL/i,
});
const KWREVOKE = chevrotain.createToken({
  name: 'KWREVOKE',
  pattern: /REVOKE/i,
});
const KWGRANT = chevrotain.createToken({
  name: 'KWGRANT',
  pattern: /GRANT/i,
});
const KWSCHEMAS = chevrotain.createToken({
  name: 'KWSCHEMAS',
  pattern: /SCHEMAS/i,
});
const KWSCHEMA = chevrotain.createToken({
  name: 'KWSCHEMA',
  pattern: /SCHEMA/i,
});
const KWMATERIALIZED = chevrotain.createToken({
  name: 'KWMATERIALIZED',
  pattern: /MATERIALIZED/i,
});
const KWDATABASES = chevrotain.createToken({
  name: 'KWDATABASES',
  pattern: /DATABASES/i,
});
const KWDATABASE = chevrotain.createToken({
  name: 'KWDATABASE',
  pattern: /DATABASE/i,
});
const KWVIEW = chevrotain.createToken({
  name: 'KWVIEW',
  pattern: /VIEW/i,
});
const KWINTERSECT = chevrotain.createToken({
  name: 'KWINTERSECT',
  pattern: /INTERSECT/i,
});
const KWFETCH = chevrotain.createToken({
  name: 'KWFETCH',
  pattern: /FETCH/i,
});
const KWMINUS = chevrotain.createToken({
  name: 'KWMINUS',
  pattern: /MINUS/i,
});
const KWPLUS = chevrotain.createToken({
  name: 'KWPLUS',
  pattern: /PLUS/i,
});
const KWDELETE = chevrotain.createToken({
  name: 'KWDELETE',
  pattern: /DELETE/i,
});
const KWLONG = chevrotain.createToken({
  name: 'KWLONG',
  pattern: /LONG/i,
});
const KWUTCTIMESTAMP = chevrotain.createToken({
  name: 'KWUTCTIMESTAMP',
  pattern: /UTC_TMESTAMP/i,
});
const KWUTC = chevrotain.createToken({
  name: 'KWUTC',
  pattern: /UTC/i,
});
const KWCLUSTERSTATUS = chevrotain.createToken({
  name: 'KWCLUSTERSTATUS',
  pattern: /CLUSTERSTATUS/i,
});
const KWHOLD_DDLTIME = chevrotain.createToken({
  name: 'KWHOLD_DDLTIME',
  pattern: /HOLD_DDLTIME/i,
});
const KWSTREAMTABLE = chevrotain.createToken({
  name: 'KWSTREAMTABLE',
  pattern: /STREAMTABLE/i,
});
const KWMAPJOIN = chevrotain.createToken({
  name: 'KWMAPJOIN',
  pattern: /MAPJOIN/i,
});
const KWELSE = chevrotain.createToken({
  name: 'KWELSE',
  pattern: /ELSE/i,
});
const KWTHEN = chevrotain.createToken({
  name: 'KWTHEN',
  pattern: /THEN/i,
});
const KWWHEN = chevrotain.createToken({
  name: 'KWWHEN',
  pattern: /WHEN/i,
});
const KWCASE = chevrotain.createToken({
  name: 'KWCASE',
  pattern: /CASE/i,
});
const KWELEM_TYPE = chevrotain.createToken({
  name: 'KWELEM_TYPE',
  pattern: /\$ELEM\$/i,
});
const KWVALUE_TYPE = chevrotain.createToken({
  name: 'KWVALUE_TYPE',
  pattern: /\$VALUE\$/i,
});
const KWIDXPROPERTIES = chevrotain.createToken({
  name: 'KWIDXPROPERTIES',
  pattern: /IDXPROPERTIES/i,
});
const KWTBLPROPERTIES = chevrotain.createToken({
  name: 'KWTBLPROPERTIES',
  pattern: /TBLPROPERTIES/i,
});
const KWUNSET = chevrotain.createToken({
  name: 'KWUNSET',
  pattern: /UNSET/i,
});
const KWSET = chevrotain.createToken({
  name: 'KWSET',
  pattern: /SET/i,
});
const KWDBPROPERTIES = chevrotain.createToken({
  name: 'KWDBPROPERTIES',
  pattern: /DBPROPERTIES/i,
});
const KWSERDEPROPERTIES = chevrotain.createToken({
  name: 'KWSERDEPROPERTIES',
  pattern: /SERDEPROPERTIES/i,
});
const KWDEFERRED = chevrotain.createToken({
  name: 'KWDEFERRED',
  pattern: /DEFERRED/i,
});
const KWWITH = chevrotain.createToken({
  name: 'KWWITH',
  pattern: /WITH/i,
});
const KWSERDE = chevrotain.createToken({
  name: 'KWSERDE',
  pattern: /SERDE/i,
});
const KWLOGICAL = chevrotain.createToken({
  name: 'KWLOGICAL',
  pattern: /LOGICAL/i,
});
const KWDEPENDENCY = chevrotain.createToken({
  name: 'KWDEPENDENCY',
  pattern: /DEPENDENCY/i,
});
const KWPRETTY = chevrotain.createToken({
  name: 'KWPRETTY',
  pattern: /PRETTY/i,
});
const KWFORMATTED = chevrotain.createToken({
  name: 'KWFORMATTED',
  pattern: /FORMATTED/i,
});
const KWEXTENDED = chevrotain.createToken({
  name: 'KWEXTENDED',
  pattern: /EXTENDED/i,
});
const KWEND = chevrotain.createToken({
  name: 'KWEND',
  pattern: /END/i,
});
const KWEXPLAIN = chevrotain.createToken({
  name: 'KWEXPLAIN',
  pattern: /EXPLAIN/i,
});
const KWMACRO = chevrotain.createToken({
  name: 'KWMACRO',
  pattern: /MACRO/i,
});
const KWTEMPORARY = chevrotain.createToken({
  name: 'KWTEMPORARY',
  pattern: /TEMPORARY/i,
});
const KWREGEXP = chevrotain.createToken({
  name: 'KWREGEXP',
  pattern: /REGEXP/i,
});
const KWRLIKE = chevrotain.createToken({
  name: 'KWRLIKE',
  pattern: /RLIKE/i,
});
const KWREPLACE = chevrotain.createToken({
  name: 'KWREPLACE',
  pattern: /REPLACE/i,
});
const KWADD = chevrotain.createToken({
  name: 'KWADD',
  pattern: /ADD/i,
});
const KWCAST = chevrotain.createToken({
  name: 'KWCAST',
  pattern: /CAST/i,
});
const KWPERCENT = chevrotain.createToken({
  name: 'KWPERCENT',
  pattern: /PERCENT/i,
});
const KWTABLESAMPLE = chevrotain.createToken({
  name: 'KWTABLESAMPLE',
  pattern: /TABLESAMPLE/i,
});
const KWLOCATION = chevrotain.createToken({
  name: 'KWLOCATION',
  pattern: /LOCATION/i,
});
const KWNO_DROP = chevrotain.createToken({
  name: 'KWNO_DROP',
  pattern: /NO_DROP/i,
});
const CharSetName = chevrotain.createToken({
  name: 'CharSetName',
  pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
});
const KWREADONLY = chevrotain.createToken({
  name: 'KWREADONLY',
  pattern: /READONLY/i,
});
const KWREAD = chevrotain.createToken({
  name: 'KWREAD',
  pattern: /READ/i,
});
const KWDISABLE = chevrotain.createToken({
  name: 'KWDISABLE',
  pattern: /DISABLE/i,
});
const KWENABLE = chevrotain.createToken({
  name: 'KWENABLE',
  pattern: /ENABLE/i,
});
const KWOFFLINE = chevrotain.createToken({
  name: 'KWOFFLINE',
  pattern: /OFFLINE/i,
});
const KWOF = chevrotain.createToken({
  name: 'KWOF',
  pattern: /OF/i,
});
const KWOUTPUTDRIVER = chevrotain.createToken({
  name: 'KWOUTPUTDRIVER',
  pattern: /OUTPUTDRIVER/i,
});
const KWINPUTDRIVER = chevrotain.createToken({
  name: 'KWINPUTDRIVER',
  pattern: /INPUTDRIVER/i,
});
const KWOUTPUTFORMAT = chevrotain.createToken({
  name: 'KWOUTPUTFORMAT',
  pattern: /OUTPUTFORMAT/i,
});
const KWINPUTFORMAT = chevrotain.createToken({
  name: 'KWINPUTFORMAT',
  pattern: /INPUTFORMAT/i,
});
const KWORCFILE = chevrotain.createToken({
  name: 'KWORCFILE',
  pattern: /ORC/i,
});
const KWRCFILE = chevrotain.createToken({
  name: 'KWRCFILE',
  pattern: /RCFILE/i,
});
const KWTEXTFILE = chevrotain.createToken({
  name: 'KWTEXTFILE',
  pattern: /TEXTFILE/i,
});
const KWSEQUENCEFILE = chevrotain.createToken({
  name: 'KWSEQUENCEFILE',
  pattern: /SEQUENCEFILE/i,
});
const KWFILEFORMAT = chevrotain.createToken({
  name: 'KWFILEFORMAT',
  pattern: /FILEFORMAT/i,
});
const KWSTORED = chevrotain.createToken({
  name: 'KWSTORED',
  pattern: /STORED/i,
});
const KWLINES = chevrotain.createToken({
  name: 'KWLINES',
  pattern: /LINES/i,
});
const KWKEY_TYPE = chevrotain.createToken({
  name: 'KWKEY_TYPE',
  pattern: /\$KEY\$/i,
});
const KWKEYS = chevrotain.createToken({
  name: 'KWKEYS',
  pattern: /KEYS/i,
});
const KWITEMS = chevrotain.createToken({
  name: 'KWITEMS',
  pattern: /ITEMS/i,
});
const KWCOLLECTION = chevrotain.createToken({
  name: 'KWCOLLECTION',
  pattern: /COLLECTION/i,
});
const KWESCAPED = chevrotain.createToken({
  name: 'KWESCAPED',
  pattern: /ESCAPED/i,
});
const KWTERMINATED = chevrotain.createToken({
  name: 'KWTERMINATED',
  pattern: /TERMINATED/i,
});
const KWFIELDS = chevrotain.createToken({
  name: 'KWFIELDS',
  pattern: /FIELDS/i,
});
const KWDELIMITED = chevrotain.createToken({
  name: 'KWDELIMITED',
  pattern: /DELIMITED/i,
});
const KWLIMIT = chevrotain.createToken({
  name: 'KWLIMIT',
  pattern: /LIMIT/i,
});
const KWFORMAT = chevrotain.createToken({
  name: 'KWFORMAT',
  pattern: /FORMAT/i,
});
const KWROWS = chevrotain.createToken({
  name: 'KWROWS',
  pattern: /ROWS/i,
});
const KWROW = chevrotain.createToken({
  name: 'KWROW',
  pattern: /ROW/i,
});
const KWBUCKETS = chevrotain.createToken({
  name: 'KWBUCKETS',
  pattern: /BUCKETS/i,
});
const KWBUCKET = chevrotain.createToken({
  name: 'KWBUCKET',
  pattern: /BUCKET/i,
});
const KWINTO = chevrotain.createToken({
  name: 'KWINTO',
  pattern: /INTO/i,
});
const KWSORTED = chevrotain.createToken({
  name: 'KWSORTED',
  pattern: /SORTED/i,
});
const KWCLUSTERED = chevrotain.createToken({
  name: 'KWCLUSTERED',
  pattern: /CLUSTERED/i,
});
const KWPARTITIONED = chevrotain.createToken({
  name: 'KWPARTITIONED',
  pattern: /PARTITIONED/i,
});
const KWREDUCE = chevrotain.createToken({
  name: 'KWREDUCE',
  pattern: /REDUCE/i,
});
const KWUNIONTYPE = chevrotain.createToken({
  name: 'KWUNIONTYPE',
  pattern: /UNIONTYPE/i,
});
const KWMAP = chevrotain.createToken({
  name: 'KWMAP',
  pattern: /MAP/i,
});
const KWSTRUCT = chevrotain.createToken({
  name: 'KWSTRUCT',
  pattern: /STRUCT/i,
});
const KWARRAY = chevrotain.createToken({
  name: 'KWARRAY',
  pattern: /ARRAY/i,
});
const KWSTRING = chevrotain.createToken({
  name: 'KWSTRING',
  pattern: /STRING/i,
});
const KWDECIMAL = chevrotain.createToken({
  name: 'KWDECIMAL',
  pattern: /DECIMAL/i,
});
const KWTIMESTAMP = chevrotain.createToken({
  name: 'KWTIMESTAMP',
  pattern: /TIMESTAMP/i,
});
const KWDATETIME = chevrotain.createToken({
  name: 'KWDATETIME',
  pattern: /DATETIME/i,
});
const KWDATE = chevrotain.createToken({
  name: 'KWDATE',
  pattern: /DATE/i,
});
const KWDOUBLE = chevrotain.createToken({
  name: 'KWDOUBLE',
  pattern: /DOUBLE/i,
});
const KWFLOAT = chevrotain.createToken({
  name: 'KWFLOAT',
  pattern: /FLOAT/i,
});
const KWBIGINT = chevrotain.createToken({
  name: 'KWBIGINT',
  pattern: /BIGINT/i,
});
const KWSMALLINT = chevrotain.createToken({
  name: 'KWSMALLINT',
  pattern: /SMALLINT/i,
});
const KWTINYINT = chevrotain.createToken({
  name: 'KWTINYINT',
  pattern: /TINYINT/i,
});
const KWINT = chevrotain.createToken({
  name: 'KWINT',
  pattern: /INT/i,
});
const KWBOOLEAN = chevrotain.createToken({
  name: 'KWBOOLEAN',
  pattern: /BOOLEAN/i,
});
const KWCOMMENT = chevrotain.createToken({
  name: 'KWCOMMENT',
  pattern: /COMMENT/i,
});
const KWPROTECTION = chevrotain.createToken({
  name: 'KWPROTECTION',
  pattern: /PROTECTION/i,
});
const KWIGNORE = chevrotain.createToken({
  name: 'KWIGNORE',
  pattern: /IGNORE/i,
});
const KWRENAME = chevrotain.createToken({
  name: 'KWRENAME',
  pattern: /RENAME/i,
});
const KWDROP = chevrotain.createToken({
  name: 'KWDROP',
  pattern: /DROP/i,
});
const KWDESCRIBE = chevrotain.createToken({
  name: 'KWDESCRIBE',
  pattern: /DESCRIBE/i,
});
const KWAFTER = chevrotain.createToken({
  name: 'KWAFTER',
  pattern: /AFTER/i,
});
const KWFIRST = chevrotain.createToken({
  name: 'KWFIRST',
  pattern: /FIRST/i,
});
const KWCHANGE = chevrotain.createToken({
  name: 'KWCHANGE',
  pattern: /CHANGE/i,
});
const KWALTER = chevrotain.createToken({
  name: 'KWALTER',
  pattern: /ALTER/i,
});
const KWEXTERNAL = chevrotain.createToken({
  name: 'KWEXTERNAL',
  pattern: /EXTERNAL/i,
});
const KWCREATE = chevrotain.createToken({
  name: 'KWCREATE',
  pattern: /CREATE/i,
});
const KWNULL = chevrotain.createToken({
  name: 'KWNULL',
  pattern: /NULL/i,
});
const KWINPATH = chevrotain.createToken({
  name: 'KWINPATH',
  pattern: /INPATH/i,
});
const KWDATA = chevrotain.createToken({
  name: 'KWDATA',
  pattern: /DATA/i,
});
const KWIMPORT = chevrotain.createToken({
  name: 'KWIMPORT',
  pattern: /IMPORT/i,
});
const KWEXPORT = chevrotain.createToken({
  name: 'KWEXPORT',
  pattern: /EXPORT/i,
});
const KWLOAD = chevrotain.createToken({
  name: 'KWLOAD',
  pattern: /LOAD/i,
});
const KWUNION = chevrotain.createToken({
  name: 'KWUNION',
  pattern: /UNION/i,
});
const KWSORT = chevrotain.createToken({
  name: 'KWSORT',
  pattern: /SORT/i,
});
const KWDISTRIBUTE = chevrotain.createToken({
  name: 'KWDISTRIBUTE',
  pattern: /DISTRIBUTE/i,
});
const KWCLUSTER = chevrotain.createToken({
  name: 'KWCLUSTER',
  pattern: /CLUSTER/i,
});
const KWUSING = chevrotain.createToken({
  name: 'KWUSING',
  pattern: /USING/i,
});
const KWTRANSFORM = chevrotain.createToken({
  name: 'KWTRANSFORM',
  pattern: /TRANSFORM/i,
});
const KWFOR = chevrotain.createToken({
  name: 'KWFOR',
  pattern: /FOR/i,
});
const KWLOCAL = chevrotain.createToken({
  name: 'KWLOCAL',
  pattern: /LOCAL/i,
});
const KWDIRECTORY = chevrotain.createToken({
  name: 'KWDIRECTORY',
  pattern: /DIRECTORY/i,
});
const KWTO = chevrotain.createToken({
  name: 'KWTO',
  pattern: /TO/i,
});
const KWREPAIR = chevrotain.createToken({
  name: 'KWREPAIR',
  pattern: /REPAIR/i,
});
const KWMSCK = chevrotain.createToken({
  name: 'KWMSCK',
  pattern: /MSCK/i,
});
const KWSHOW = chevrotain.createToken({
  name: 'KWSHOW',
  pattern: /SHOW/i,
});
const KWFUNCTIONS = chevrotain.createToken({
  name: 'KWFUNCTIONS',
  pattern: /FUNCTIONS/i,
});
const KWFUNCTION = chevrotain.createToken({
  name: 'KWFUNCTION',
  pattern: /FUNCTION/i,
});
const KWREBUILD = chevrotain.createToken({
  name: 'KWREBUILD',
  pattern: /REBUILD/i,
});
const KWINDEXES = chevrotain.createToken({
  name: 'KWINDEXES',
  pattern: /INDEXES/i,
});
const KWINDEX = chevrotain.createToken({
  name: 'KWINDEX',
  pattern: /INDEX/i,
});
const KWCOLUMNS = chevrotain.createToken({
  name: 'KWCOLUMNS',
  pattern: /COLUMNS/i,
});
const KWCOLUMN = chevrotain.createToken({
  name: 'KWCOLUMN',
  pattern: /COLUMN/i,
});
const KWTABLES = chevrotain.createToken({
  name: 'KWTABLES',
  pattern: /TABLES/i,
});
const KWTABLE = chevrotain.createToken({
  name: 'KWTABLE',
  pattern: /TABLE/i,
});
const KWPARTITIONS = chevrotain.createToken({
  name: 'KWPARTITIONS',
  pattern: /PARTITIONS/i,
});
const KWPARTITION = chevrotain.createToken({
  name: 'KWPARTITION',
  pattern: /PARTITION/i,
});
const KWON = chevrotain.createToken({
  name: 'KWON',
  pattern: /ON/i,
});
const KWFULL = chevrotain.createToken({
  name: 'KWFULL',
  pattern: /FULL/i,
});
const KWRIGHT = chevrotain.createToken({
  name: 'KWRIGHT',
  pattern: /RIGHT/i,
});
const KWLEFT = chevrotain.createToken({
  name: 'KWLEFT',
  pattern: /LEFT/i,
});
const KWPRESERVE = chevrotain.createToken({
  name: 'KWPRESERVE',
  pattern: /PRESERVE/i,
});
const KWUNIQUEJOIN = chevrotain.createToken({
  name: 'KWUNIQUEJOIN',
  pattern: /UNIQUEJOIN/i,
});
const KWJOIN = chevrotain.createToken({
  name: 'KWJOIN',
  pattern: /JOIN/i,
});
const KWOUTER = chevrotain.createToken({
  name: 'KWOUTER',
  pattern: /OUTER/i,
});
const KWOUT = chevrotain.createToken({
  name: 'KWOUT',
  pattern: /OUT/i,
});
const KWOVERWRITE = chevrotain.createToken({
  name: 'KWOVERWRITE',
  pattern: /OVERWRITE/i,
});
const KWOVER = chevrotain.createToken({
  name: 'KWOVER',
  pattern: /OVER/i,
});
const KWINSERT = chevrotain.createToken({
  name: 'KWINSERT',
  pattern: /INSERT/i,
});
const KWDISTINCT = chevrotain.createToken({
  name: 'KWDISTINCT',
  pattern: /DISTINCT/i,
});
const KWSELECT = chevrotain.createToken({
  name: 'KWSELECT',
  pattern: /SELECT/i,
});
const KWFROM = chevrotain.createToken({
  name: 'KWFROM',
  pattern: /FROM/i,
});
const KWWHERE = chevrotain.createToken({
  name: 'KWWHERE',
  pattern: /WHERE/i,
});
const KWHAVING = chevrotain.createToken({
  name: 'KWHAVING',
  pattern: /HAVING/i,
});
const KWIN = chevrotain.createToken({
  name: 'KWIN',
  pattern: /IN/i,
});
const KWBY = chevrotain.createToken({
  name: 'KWBY',
  pattern: /BY/i,
});
const KWGROUP = chevrotain.createToken({
  name: 'KWGROUP',
  pattern: /GROUP/i,
});
const KWORDER = chevrotain.createToken({
  name: 'KWORDER',
  pattern: /ORDER/i,
});
const KWDESC = chevrotain.createToken({
  name: 'KWDESC',
  pattern: /DESC/i,
});
const KWASC = chevrotain.createToken({
  name: 'KWASC',
  pattern: /ASC/i,
});
const KWAS = chevrotain.createToken({
  name: 'KWAS',
  pattern: /AS/i,
});
const KWEXISTS = chevrotain.createToken({
  name: 'KWEXISTS',
  pattern: /EXISTS/i,
});
const KWIS = chevrotain.createToken({
  name: 'KWIS',
  pattern: /IS/i,
});
const KWIF = chevrotain.createToken({
  name: 'KWIF',
  pattern: /IF/i,
});
const KWLIKE = chevrotain.createToken({
  name: 'KWLIKE',
  pattern: /LIKE/i,
});
const KWNOT = chevrotain.createToken({
  name: 'KWNOT',
  pattern: /(NOT|\!)/i,
});
const KWOR = chevrotain.createToken({
  name: 'KWOR',
  pattern: /OR/i,
});
const KWAND = chevrotain.createToken({
  name: 'KWAND',
  pattern: /AND/i,
});
const KWALL = chevrotain.createToken({
  name: 'KWALL',
  pattern: /ALL/i,
});
const KWFALSE = chevrotain.createToken({
  name: 'KWFALSE',
  pattern: /FALSE/i,
});
const KWTRUE = chevrotain.createToken({
  name: 'KWTRUE',
  pattern: /TRUE/i,
});
const Identifier = chevrotain.createToken({
  name: 'Identifier',
  pattern: /(([A-Za-z]|[0-9])([A-Za-z]|[0-9]|_)*|\`([A-Za-z0-9_]|\+|\*|\?|\-|\.|\(|\)|\[|\]|\{|\}|\^|\||\$)+\`)/i,
});

export enum TokenEnum {
  COMMENT = 'COMMENT',
  WS = 'WS',
  Number = 'Number',
  ByteLengthLiteral = 'ByteLengthLiteral',
  DecimalLiteral = 'DecimalLiteral',
  TinyintLiteral = 'TinyintLiteral',
  SmallintLiteral = 'SmallintLiteral',
  BigintLiteral = 'BigintLiteral',
  CharSetLiteral = 'CharSetLiteral',
  StringLiteral = 'StringLiteral',
  DOLLAR = 'DOLLAR',
  QUESTION = 'QUESTION',
  BITWISEXOR = 'BITWISEXOR',
  BITWISEOR = 'BITWISEOR',
  TILDE = 'TILDE',
  AMPERSAND = 'AMPERSAND',
  DIV = 'DIV',
  MOD = 'MOD',
  STAR = 'STAR',
  MINUS = 'MINUS',
  PLUS = 'PLUS',
  DIVIDE = 'DIVIDE',
  GREATERTHAN = 'GREATERTHAN',
  GREATERTHANOREQUALTO = 'GREATERTHANOREQUALTO',
  LESSTHAN = 'LESSTHAN',
  LESSTHANOREQUALTO = 'LESSTHANOREQUALTO',
  NOTEQUAL = 'NOTEQUAL',
  EQUAL_NS = 'EQUAL_NS',
  EQUAL = 'EQUAL',
  RCURLY = 'RCURLY',
  LCURLY = 'LCURLY',
  RSQUARE = 'RSQUARE',
  LSQUARE = 'LSQUARE',
  RPAREN = 'RPAREN',
  LPAREN = 'LPAREN',
  SEMICOLON = 'SEMICOLON',
  COMMA = 'COMMA',
  COLON = 'COLON',
  DOT = 'DOT',
  KWEXCHANGE = 'KWEXCHANGE',
  KWINNER = 'KWINNER',
  KWROLE = 'KWROLE',
  KWUSER = 'KWUSER',
  KWPARTIALSCAN = 'KWPARTIALSCAN',
  KWNOSCAN = 'KWNOSCAN',
  KWTRUNCATE = 'KWTRUNCATE',
  KWSETS = 'KWSETS',
  KWGROUPING = 'KWGROUPING',
  KWMORE = 'KWMORE',
  KWLESS = 'KWLESS',
  KWCURRENT = 'KWCURRENT',
  KWFOLLOWING = 'KWFOLLOWING',
  KWPRECEDING = 'KWPRECEDING',
  KWUNBOUNDED = 'KWUNBOUNDED',
  KWWINDOW = 'KWWINDOW',
  KWDIRECTORIES = 'KWDIRECTORIES',
  KWCUBE = 'KWCUBE',
  KWROLLUP = 'KWROLLUP',
  KWSKEWED = 'KWSKEWED',
  KWCASCADE = 'KWCASCADE',
  KWRESTRICT = 'KWRESTRICT',
  KWUPDATE = 'KWUPDATE',
  KWSHOW_DATABASE = 'KWSHOW_DATABASE',
  KWCONCATENATE = 'KWCONCATENATE',
  KWOPTION = 'KWOPTION',
  KWUSE = 'KWUSE',
  KWSTATISTICS = 'KWSTATISTICS',
  KWCOMPUTE = 'KWCOMPUTE',
  KWUNARCHIVE = 'KWUNARCHIVE',
  KWARCHIVE = 'KWARCHIVE',
  KWTOUCH = 'KWTOUCH',
  KWLATERAL = 'KWLATERAL',
  KWSEMI = 'KWSEMI',
  KWRECORDWRITER = 'KWRECORDWRITER',
  KWRECORDREADER = 'KWRECORDREADER',
  KWTRIGGER = 'KWTRIGGER',
  KWCURSOR = 'KWCURSOR',
  KWCONTINUE = 'KWCONTINUE',
  KWCROSS = 'KWCROSS',
  KWBINARY = 'KWBINARY',
  KWBOTH = 'KWBOTH',
  KWBETWEEN = 'KWBETWEEN',
  KWBEFORE = 'KWBEFORE',
  KWANALYZE = 'KWANALYZE',
  KWRANGE = 'KWRANGE',
  KWPURGE = 'KWPURGE',
  KWREADS = 'KWREADS',
  KWWHILE = 'KWWHILE',
  KWUNSIGNED = 'KWUNSIGNED',
  KWPROCEDURE = 'KWPROCEDURE',
  KWEXCLUSIVE = 'KWEXCLUSIVE',
  KWSHARED = 'KWSHARED',
  KWUNLOCK = 'KWUNLOCK',
  KWLOCKS = 'KWLOCKS',
  KWLOCK = 'KWLOCK',
  KWUNDO = 'KWUNDO',
  KWSSL = 'KWSSL',
  KWREVOKE = 'KWREVOKE',
  KWGRANT = 'KWGRANT',
  KWSCHEMAS = 'KWSCHEMAS',
  KWSCHEMA = 'KWSCHEMA',
  KWMATERIALIZED = 'KWMATERIALIZED',
  KWDATABASES = 'KWDATABASES',
  KWDATABASE = 'KWDATABASE',
  KWVIEW = 'KWVIEW',
  KWINTERSECT = 'KWINTERSECT',
  KWFETCH = 'KWFETCH',
  KWMINUS = 'KWMINUS',
  KWPLUS = 'KWPLUS',
  KWDELETE = 'KWDELETE',
  KWLONG = 'KWLONG',
  KWUTCTIMESTAMP = 'KWUTCTIMESTAMP',
  KWUTC = 'KWUTC',
  KWCLUSTERSTATUS = 'KWCLUSTERSTATUS',
  KWHOLD_DDLTIME = 'KWHOLD_DDLTIME',
  KWSTREAMTABLE = 'KWSTREAMTABLE',
  KWMAPJOIN = 'KWMAPJOIN',
  KWELSE = 'KWELSE',
  KWTHEN = 'KWTHEN',
  KWWHEN = 'KWWHEN',
  KWCASE = 'KWCASE',
  KWELEM_TYPE = 'KWELEM_TYPE',
  KWVALUE_TYPE = 'KWVALUE_TYPE',
  KWIDXPROPERTIES = 'KWIDXPROPERTIES',
  KWTBLPROPERTIES = 'KWTBLPROPERTIES',
  KWUNSET = 'KWUNSET',
  KWSET = 'KWSET',
  KWDBPROPERTIES = 'KWDBPROPERTIES',
  KWSERDEPROPERTIES = 'KWSERDEPROPERTIES',
  KWDEFERRED = 'KWDEFERRED',
  KWWITH = 'KWWITH',
  KWSERDE = 'KWSERDE',
  KWLOGICAL = 'KWLOGICAL',
  KWDEPENDENCY = 'KWDEPENDENCY',
  KWPRETTY = 'KWPRETTY',
  KWFORMATTED = 'KWFORMATTED',
  KWEXTENDED = 'KWEXTENDED',
  KWEND = 'KWEND',
  KWEXPLAIN = 'KWEXPLAIN',
  KWMACRO = 'KWMACRO',
  KWTEMPORARY = 'KWTEMPORARY',
  KWREGEXP = 'KWREGEXP',
  KWRLIKE = 'KWRLIKE',
  KWREPLACE = 'KWREPLACE',
  KWADD = 'KWADD',
  KWCAST = 'KWCAST',
  KWPERCENT = 'KWPERCENT',
  KWTABLESAMPLE = 'KWTABLESAMPLE',
  KWLOCATION = 'KWLOCATION',
  KWNO_DROP = 'KWNO_DROP',
  CharSetName = 'CharSetName',
  KWREADONLY = 'KWREADONLY',
  KWREAD = 'KWREAD',
  KWDISABLE = 'KWDISABLE',
  KWENABLE = 'KWENABLE',
  KWOFFLINE = 'KWOFFLINE',
  KWOF = 'KWOF',
  KWOUTPUTDRIVER = 'KWOUTPUTDRIVER',
  KWINPUTDRIVER = 'KWINPUTDRIVER',
  KWOUTPUTFORMAT = 'KWOUTPUTFORMAT',
  KWINPUTFORMAT = 'KWINPUTFORMAT',
  KWORCFILE = 'KWORCFILE',
  KWRCFILE = 'KWRCFILE',
  KWTEXTFILE = 'KWTEXTFILE',
  KWSEQUENCEFILE = 'KWSEQUENCEFILE',
  KWFILEFORMAT = 'KWFILEFORMAT',
  KWSTORED = 'KWSTORED',
  KWLINES = 'KWLINES',
  KWKEY_TYPE = 'KWKEY_TYPE',
  KWKEYS = 'KWKEYS',
  KWITEMS = 'KWITEMS',
  KWCOLLECTION = 'KWCOLLECTION',
  KWESCAPED = 'KWESCAPED',
  KWTERMINATED = 'KWTERMINATED',
  KWFIELDS = 'KWFIELDS',
  KWDELIMITED = 'KWDELIMITED',
  KWLIMIT = 'KWLIMIT',
  KWFORMAT = 'KWFORMAT',
  KWROWS = 'KWROWS',
  KWROW = 'KWROW',
  KWBUCKETS = 'KWBUCKETS',
  KWBUCKET = 'KWBUCKET',
  KWINTO = 'KWINTO',
  KWSORTED = 'KWSORTED',
  KWCLUSTERED = 'KWCLUSTERED',
  KWPARTITIONED = 'KWPARTITIONED',
  KWREDUCE = 'KWREDUCE',
  KWUNIONTYPE = 'KWUNIONTYPE',
  KWMAP = 'KWMAP',
  KWSTRUCT = 'KWSTRUCT',
  KWARRAY = 'KWARRAY',
  KWSTRING = 'KWSTRING',
  KWDECIMAL = 'KWDECIMAL',
  KWTIMESTAMP = 'KWTIMESTAMP',
  KWDATETIME = 'KWDATETIME',
  KWDATE = 'KWDATE',
  KWDOUBLE = 'KWDOUBLE',
  KWFLOAT = 'KWFLOAT',
  KWBIGINT = 'KWBIGINT',
  KWSMALLINT = 'KWSMALLINT',
  KWTINYINT = 'KWTINYINT',
  KWINT = 'KWINT',
  KWBOOLEAN = 'KWBOOLEAN',
  KWCOMMENT = 'KWCOMMENT',
  KWPROTECTION = 'KWPROTECTION',
  KWIGNORE = 'KWIGNORE',
  KWRENAME = 'KWRENAME',
  KWDROP = 'KWDROP',
  KWDESCRIBE = 'KWDESCRIBE',
  KWAFTER = 'KWAFTER',
  KWFIRST = 'KWFIRST',
  KWCHANGE = 'KWCHANGE',
  KWALTER = 'KWALTER',
  KWEXTERNAL = 'KWEXTERNAL',
  KWCREATE = 'KWCREATE',
  KWNULL = 'KWNULL',
  KWINPATH = 'KWINPATH',
  KWDATA = 'KWDATA',
  KWIMPORT = 'KWIMPORT',
  KWEXPORT = 'KWEXPORT',
  KWLOAD = 'KWLOAD',
  KWUNION = 'KWUNION',
  KWSORT = 'KWSORT',
  KWDISTRIBUTE = 'KWDISTRIBUTE',
  KWCLUSTER = 'KWCLUSTER',
  KWUSING = 'KWUSING',
  KWTRANSFORM = 'KWTRANSFORM',
  KWFOR = 'KWFOR',
  KWLOCAL = 'KWLOCAL',
  KWDIRECTORY = 'KWDIRECTORY',
  KWTO = 'KWTO',
  KWREPAIR = 'KWREPAIR',
  KWMSCK = 'KWMSCK',
  KWSHOW = 'KWSHOW',
  KWFUNCTIONS = 'KWFUNCTIONS',
  KWFUNCTION = 'KWFUNCTION',
  KWREBUILD = 'KWREBUILD',
  KWINDEXES = 'KWINDEXES',
  KWINDEX = 'KWINDEX',
  KWCOLUMNS = 'KWCOLUMNS',
  KWCOLUMN = 'KWCOLUMN',
  KWTABLES = 'KWTABLES',
  KWTABLE = 'KWTABLE',
  KWPARTITIONS = 'KWPARTITIONS',
  KWPARTITION = 'KWPARTITION',
  KWON = 'KWON',
  KWFULL = 'KWFULL',
  KWRIGHT = 'KWRIGHT',
  KWLEFT = 'KWLEFT',
  KWPRESERVE = 'KWPRESERVE',
  KWUNIQUEJOIN = 'KWUNIQUEJOIN',
  KWJOIN = 'KWJOIN',
  KWOUTER = 'KWOUTER',
  KWOUT = 'KWOUT',
  KWOVERWRITE = 'KWOVERWRITE',
  KWOVER = 'KWOVER',
  KWINSERT = 'KWINSERT',
  KWDISTINCT = 'KWDISTINCT',
  KWSELECT = 'KWSELECT',
  KWFROM = 'KWFROM',
  KWWHERE = 'KWWHERE',
  KWHAVING = 'KWHAVING',
  KWIN = 'KWIN',
  KWBY = 'KWBY',
  KWGROUP = 'KWGROUP',
  KWORDER = 'KWORDER',
  KWDESC = 'KWDESC',
  KWASC = 'KWASC',
  KWAS = 'KWAS',
  KWEXISTS = 'KWEXISTS',
  KWIS = 'KWIS',
  KWIF = 'KWIF',
  KWLIKE = 'KWLIKE',
  KWNOT = 'KWNOT',
  KWOR = 'KWOR',
  KWAND = 'KWAND',
  KWALL = 'KWALL',
  KWFALSE = 'KWFALSE',
  KWTRUE = 'KWTRUE',
  Identifier = 'Identifier',
}

export const Tokens = {
  COMMENT,
  WS,
  Number,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  StringLiteral,
  DOLLAR,
  QUESTION,
  BITWISEXOR,
  BITWISEOR,
  TILDE,
  AMPERSAND,
  DIV,
  MOD,
  STAR,
  MINUS,
  PLUS,
  DIVIDE,
  GREATERTHAN,
  GREATERTHANOREQUALTO,
  LESSTHAN,
  LESSTHANOREQUALTO,
  NOTEQUAL,
  EQUAL_NS,
  EQUAL,
  RCURLY,
  LCURLY,
  RSQUARE,
  LSQUARE,
  RPAREN,
  LPAREN,
  SEMICOLON,
  COMMA,
  COLON,
  DOT,
  KWEXCHANGE,
  KWINNER,
  KWROLE,
  KWUSER,
  KWPARTIALSCAN,
  KWNOSCAN,
  KWTRUNCATE,
  KWSETS,
  KWGROUPING,
  KWMORE,
  KWLESS,
  KWCURRENT,
  KWFOLLOWING,
  KWPRECEDING,
  KWUNBOUNDED,
  KWWINDOW,
  KWDIRECTORIES,
  KWCUBE,
  KWROLLUP,
  KWSKEWED,
  KWCASCADE,
  KWRESTRICT,
  KWUPDATE,
  KWSHOW_DATABASE,
  KWCONCATENATE,
  KWOPTION,
  KWUSE,
  KWSTATISTICS,
  KWCOMPUTE,
  KWUNARCHIVE,
  KWARCHIVE,
  KWTOUCH,
  KWLATERAL,
  KWSEMI,
  KWRECORDWRITER,
  KWRECORDREADER,
  KWTRIGGER,
  KWCURSOR,
  KWCONTINUE,
  KWCROSS,
  KWBINARY,
  KWBOTH,
  KWBETWEEN,
  KWBEFORE,
  KWANALYZE,
  KWRANGE,
  KWPURGE,
  KWREADS,
  KWWHILE,
  KWUNSIGNED,
  KWPROCEDURE,
  KWEXCLUSIVE,
  KWSHARED,
  KWUNLOCK,
  KWLOCKS,
  KWLOCK,
  KWUNDO,
  KWSSL,
  KWREVOKE,
  KWGRANT,
  KWSCHEMAS,
  KWSCHEMA,
  KWMATERIALIZED,
  KWDATABASES,
  KWDATABASE,
  KWVIEW,
  KWINTERSECT,
  KWFETCH,
  KWMINUS,
  KWPLUS,
  KWDELETE,
  KWLONG,
  KWUTCTIMESTAMP,
  KWUTC,
  KWCLUSTERSTATUS,
  KWHOLD_DDLTIME,
  KWSTREAMTABLE,
  KWMAPJOIN,
  KWELSE,
  KWTHEN,
  KWWHEN,
  KWCASE,
  KWELEM_TYPE,
  KWVALUE_TYPE,
  KWIDXPROPERTIES,
  KWTBLPROPERTIES,
  KWUNSET,
  KWSET,
  KWDBPROPERTIES,
  KWSERDEPROPERTIES,
  KWDEFERRED,
  KWWITH,
  KWSERDE,
  KWLOGICAL,
  KWDEPENDENCY,
  KWPRETTY,
  KWFORMATTED,
  KWEXTENDED,
  KWEND,
  KWEXPLAIN,
  KWMACRO,
  KWTEMPORARY,
  KWREGEXP,
  KWRLIKE,
  KWREPLACE,
  KWADD,
  KWCAST,
  KWPERCENT,
  KWTABLESAMPLE,
  KWLOCATION,
  KWNO_DROP,
  CharSetName,
  KWREADONLY,
  KWREAD,
  KWDISABLE,
  KWENABLE,
  KWOFFLINE,
  KWOF,
  KWOUTPUTDRIVER,
  KWINPUTDRIVER,
  KWOUTPUTFORMAT,
  KWINPUTFORMAT,
  KWORCFILE,
  KWRCFILE,
  KWTEXTFILE,
  KWSEQUENCEFILE,
  KWFILEFORMAT,
  KWSTORED,
  KWLINES,
  KWKEY_TYPE,
  KWKEYS,
  KWITEMS,
  KWCOLLECTION,
  KWESCAPED,
  KWTERMINATED,
  KWFIELDS,
  KWDELIMITED,
  KWLIMIT,
  KWFORMAT,
  KWROWS,
  KWROW,
  KWBUCKETS,
  KWBUCKET,
  KWINTO,
  KWSORTED,
  KWCLUSTERED,
  KWPARTITIONED,
  KWREDUCE,
  KWUNIONTYPE,
  KWMAP,
  KWSTRUCT,
  KWARRAY,
  KWSTRING,
  KWDECIMAL,
  KWTIMESTAMP,
  KWDATETIME,
  KWDATE,
  KWDOUBLE,
  KWFLOAT,
  KWBIGINT,
  KWSMALLINT,
  KWTINYINT,
  KWINT,
  KWBOOLEAN,
  KWCOMMENT,
  KWPROTECTION,
  KWIGNORE,
  KWRENAME,
  KWDROP,
  KWDESCRIBE,
  KWAFTER,
  KWFIRST,
  KWCHANGE,
  KWALTER,
  KWEXTERNAL,
  KWCREATE,
  KWNULL,
  KWINPATH,
  KWDATA,
  KWIMPORT,
  KWEXPORT,
  KWLOAD,
  KWUNION,
  KWSORT,
  KWDISTRIBUTE,
  KWCLUSTER,
  KWUSING,
  KWTRANSFORM,
  KWFOR,
  KWLOCAL,
  KWDIRECTORY,
  KWTO,
  KWREPAIR,
  KWMSCK,
  KWSHOW,
  KWFUNCTIONS,
  KWFUNCTION,
  KWREBUILD,
  KWINDEXES,
  KWINDEX,
  KWCOLUMNS,
  KWCOLUMN,
  KWTABLES,
  KWTABLE,
  KWPARTITIONS,
  KWPARTITION,
  KWON,
  KWFULL,
  KWRIGHT,
  KWLEFT,
  KWPRESERVE,
  KWUNIQUEJOIN,
  KWJOIN,
  KWOUTER,
  KWOUT,
  KWOVERWRITE,
  KWOVER,
  KWINSERT,
  KWDISTINCT,
  KWSELECT,
  KWFROM,
  KWWHERE,
  KWHAVING,
  KWIN,
  KWBY,
  KWGROUP,
  KWORDER,
  KWDESC,
  KWASC,
  KWAS,
  KWEXISTS,
  KWIS,
  KWIF,
  KWLIKE,
  KWNOT,
  KWOR,
  KWAND,
  KWALL,
  KWFALSE,
  KWTRUE,
  Identifier,
};

export const tokens = [
  WhiteSpace,
  COMMENT,
  WS,
  Number,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  StringLiteral,
  DOLLAR,
  QUESTION,
  BITWISEXOR,
  BITWISEOR,
  TILDE,
  AMPERSAND,
  DIV,
  MOD,
  STAR,
  MINUS,
  PLUS,
  DIVIDE,
  GREATERTHAN,
  GREATERTHANOREQUALTO,
  LESSTHAN,
  LESSTHANOREQUALTO,
  NOTEQUAL,
  EQUAL_NS,
  EQUAL,
  RCURLY,
  LCURLY,
  RSQUARE,
  LSQUARE,
  RPAREN,
  LPAREN,
  SEMICOLON,
  COMMA,
  COLON,
  DOT,
  KWEXCHANGE,
  KWINNER,
  KWROLE,
  KWUSER,
  KWPARTIALSCAN,
  KWNOSCAN,
  KWTRUNCATE,
  KWSETS,
  KWGROUPING,
  KWMORE,
  KWLESS,
  KWCURRENT,
  KWFOLLOWING,
  KWPRECEDING,
  KWUNBOUNDED,
  KWWINDOW,
  KWDIRECTORIES,
  KWCUBE,
  KWROLLUP,
  KWSKEWED,
  KWCASCADE,
  KWRESTRICT,
  KWUPDATE,
  KWSHOW_DATABASE,
  KWCONCATENATE,
  KWOPTION,
  KWUSE,
  KWSTATISTICS,
  KWCOMPUTE,
  KWUNARCHIVE,
  KWARCHIVE,
  KWTOUCH,
  KWLATERAL,
  KWSEMI,
  KWRECORDWRITER,
  KWRECORDREADER,
  KWTRIGGER,
  KWCURSOR,
  KWCONTINUE,
  KWCROSS,
  KWBINARY,
  KWBOTH,
  KWBETWEEN,
  KWBEFORE,
  KWANALYZE,
  KWRANGE,
  KWPURGE,
  KWREADS,
  KWWHILE,
  KWUNSIGNED,
  KWPROCEDURE,
  KWEXCLUSIVE,
  KWSHARED,
  KWUNLOCK,
  KWLOCKS,
  KWLOCK,
  KWUNDO,
  KWSSL,
  KWREVOKE,
  KWGRANT,
  KWSCHEMAS,
  KWSCHEMA,
  KWMATERIALIZED,
  KWDATABASES,
  KWDATABASE,
  KWVIEW,
  KWINTERSECT,
  KWFETCH,
  KWMINUS,
  KWPLUS,
  KWDELETE,
  KWLONG,
  KWUTCTIMESTAMP,
  KWUTC,
  KWCLUSTERSTATUS,
  KWHOLD_DDLTIME,
  KWSTREAMTABLE,
  KWMAPJOIN,
  KWELSE,
  KWTHEN,
  KWWHEN,
  KWCASE,
  KWELEM_TYPE,
  KWVALUE_TYPE,
  KWIDXPROPERTIES,
  KWTBLPROPERTIES,
  KWUNSET,
  KWSET,
  KWDBPROPERTIES,
  KWSERDEPROPERTIES,
  KWDEFERRED,
  KWWITH,
  KWSERDE,
  KWLOGICAL,
  KWDEPENDENCY,
  KWPRETTY,
  KWFORMATTED,
  KWEXTENDED,
  KWEND,
  KWEXPLAIN,
  KWMACRO,
  KWTEMPORARY,
  KWREGEXP,
  KWRLIKE,
  KWREPLACE,
  KWADD,
  KWCAST,
  KWPERCENT,
  KWTABLESAMPLE,
  KWLOCATION,
  KWNO_DROP,
  CharSetName,
  KWREADONLY,
  KWREAD,
  KWDISABLE,
  KWENABLE,
  KWOFFLINE,
  KWOF,
  KWOUTPUTDRIVER,
  KWINPUTDRIVER,
  KWOUTPUTFORMAT,
  KWINPUTFORMAT,
  KWORCFILE,
  KWRCFILE,
  KWTEXTFILE,
  KWSEQUENCEFILE,
  KWFILEFORMAT,
  KWSTORED,
  KWLINES,
  KWKEY_TYPE,
  KWKEYS,
  KWITEMS,
  KWCOLLECTION,
  KWESCAPED,
  KWTERMINATED,
  KWFIELDS,
  KWDELIMITED,
  KWLIMIT,
  KWFORMAT,
  KWROWS,
  KWROW,
  KWBUCKETS,
  KWBUCKET,
  KWINTO,
  KWSORTED,
  KWCLUSTERED,
  KWPARTITIONED,
  KWREDUCE,
  KWUNIONTYPE,
  KWMAP,
  KWSTRUCT,
  KWARRAY,
  KWSTRING,
  KWDECIMAL,
  KWTIMESTAMP,
  KWDATETIME,
  KWDATE,
  KWDOUBLE,
  KWFLOAT,
  KWBIGINT,
  KWSMALLINT,
  KWTINYINT,
  KWINT,
  KWBOOLEAN,
  KWCOMMENT,
  KWPROTECTION,
  KWIGNORE,
  KWRENAME,
  KWDROP,
  KWDESCRIBE,
  KWAFTER,
  KWFIRST,
  KWCHANGE,
  KWALTER,
  KWEXTERNAL,
  KWCREATE,
  KWNULL,
  KWINPATH,
  KWDATA,
  KWIMPORT,
  KWEXPORT,
  KWLOAD,
  KWUNION,
  KWSORT,
  KWDISTRIBUTE,
  KWCLUSTER,
  KWUSING,
  KWTRANSFORM,
  KWFOR,
  KWLOCAL,
  KWDIRECTORY,
  KWTO,
  KWREPAIR,
  KWMSCK,
  KWSHOW,
  KWFUNCTIONS,
  KWFUNCTION,
  KWREBUILD,
  KWINDEXES,
  KWINDEX,
  KWCOLUMNS,
  KWCOLUMN,
  KWTABLES,
  KWTABLE,
  KWPARTITIONS,
  KWPARTITION,
  KWON,
  KWFULL,
  KWRIGHT,
  KWLEFT,
  KWPRESERVE,
  KWUNIQUEJOIN,
  KWJOIN,
  KWOUTER,
  KWOUT,
  KWOVERWRITE,
  KWOVER,
  KWINSERT,
  KWDISTINCT,
  KWSELECT,
  KWFROM,
  KWWHERE,
  KWHAVING,
  KWIN,
  KWBY,
  KWGROUP,
  KWORDER,
  KWDESC,
  KWASC,
  KWAS,
  KWEXISTS,
  KWIS,
  KWIF,
  KWLIKE,
  KWNOT,
  KWOR,
  KWAND,
  KWALL,
  KWFALSE,
  KWTRUE,
  Identifier,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
