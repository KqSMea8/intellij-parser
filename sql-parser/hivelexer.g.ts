import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const DECIMAL_LITERAL = chevrotain.createToken({
  name: 'DECIMAL_LITERAL',
  pattern: /[0-9]+/,
});
const ID = chevrotain.createToken({
  name: 'ID',
  pattern: /[A-Za-z_$0-9*]+/i,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /\-\-([^(\n|\r)])*/i,
  longer_alt: ID,
});
const WS = chevrotain.createToken({
  name: 'WS',
  pattern: /(\ |\r|\t|\n)/i,
  longer_alt: ID,
});
const CharSetName = chevrotain.createToken({
  name: 'CharSetName',
  pattern: /_((az|AZ)|09|_|\-|\.|\:)+/i,
  longer_alt: ID,
});
const ByteLengthLiteral = chevrotain.createToken({
  name: 'ByteLengthLiteral',
  pattern: /(09)+(b|B|k|K|m|M|g|G)/i,
  longer_alt: ID,
});
const DecimalLiteral = chevrotain.createToken({
  name: 'DecimalLiteral',
  pattern: /(09)+(\.(09)*((e|E)(\+|\-)?(09)+)?|(e|E)(\+|\-)?(09)+)?BD/i,
  longer_alt: ID,
});
const TinyintLiteral = chevrotain.createToken({
  name: 'TinyintLiteral',
  pattern: /(09)+Y/i,
  longer_alt: ID,
});
const SmallintLiteral = chevrotain.createToken({
  name: 'SmallintLiteral',
  pattern: /(09)+S/i,
  longer_alt: ID,
});
const BigintLiteral = chevrotain.createToken({
  name: 'BigintLiteral',
  pattern: /(09)+L/i,
  longer_alt: ID,
});
const CharSetLiteral = chevrotain.createToken({
  name: 'CharSetLiteral',
  pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X((af|AF)|09)+)/i,
  longer_alt: ID,
});
const StringLiteral = chevrotain.createToken({
  name: 'StringLiteral',
  pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
  longer_alt: ID,
});
const Identifier = chevrotain.createToken({
  name: 'Identifier',
  pattern: /(((az|AZ)|09)((az|AZ)|09|_)*|\`(az|AZ|09|_|\+|\*|\?|\-|\.|\(|\)|\[|\]|\{|\}|\^|\||\$)+\`)/i,
  longer_alt: ID,
});
const Number = chevrotain.createToken({
  name: 'Number',
  pattern: /(09)+(\.(09)*((e|E)(\+|\-)?(09)+)?|(e|E)(\+|\-)?(09)+)?/i,
  longer_alt: ID,
});
const DOLLAR = chevrotain.createToken({
  name: 'DOLLAR',
  pattern: /\$/i,
  longer_alt: ID,
});
const QUESTION = chevrotain.createToken({
  name: 'QUESTION',
  pattern: /\?/i,
  longer_alt: ID,
});
const BITWISEXOR = chevrotain.createToken({
  name: 'BITWISEXOR',
  pattern: /\^/i,
  longer_alt: ID,
});
const BITWISEOR = chevrotain.createToken({
  name: 'BITWISEOR',
  pattern: /\|/i,
  longer_alt: ID,
});
const TILDE = chevrotain.createToken({
  name: 'TILDE',
  pattern: /\~/i,
  longer_alt: ID,
});
const AMPERSAND = chevrotain.createToken({
  name: 'AMPERSAND',
  pattern: /\&/i,
  longer_alt: ID,
});
const DIV = chevrotain.createToken({
  name: 'DIV',
  pattern: /DIV/i,
  longer_alt: ID,
});
const MOD = chevrotain.createToken({
  name: 'MOD',
  pattern: /\%/i,
  longer_alt: ID,
});
const STAR = chevrotain.createToken({
  name: 'STAR',
  pattern: /\*/i,
  longer_alt: ID,
});
const MINUS = chevrotain.createToken({
  name: 'MINUS',
  pattern: /\-/i,
  longer_alt: ID,
});
const PLUS = chevrotain.createToken({
  name: 'PLUS',
  pattern: /\+/i,
  longer_alt: ID,
});
const DIVIDE = chevrotain.createToken({
  name: 'DIVIDE',
  pattern: /\//i,
  longer_alt: ID,
});
const GREATERTHAN = chevrotain.createToken({
  name: 'GREATERTHAN',
  pattern: /\>/i,
  longer_alt: ID,
});
const GREATERTHANOREQUALTO = chevrotain.createToken({
  name: 'GREATERTHANOREQUALTO',
  pattern: /\>\=/i,
  longer_alt: ID,
});
const LESSTHAN = chevrotain.createToken({
  name: 'LESSTHAN',
  pattern: /\</i,
  longer_alt: ID,
});
const LESSTHANOREQUALTO = chevrotain.createToken({
  name: 'LESSTHANOREQUALTO',
  pattern: /\<\=/i,
  longer_alt: ID,
});
const NOTEQUAL = chevrotain.createToken({
  name: 'NOTEQUAL',
  pattern: /(\<\>|\!\=)/i,
  longer_alt: ID,
});
const EQUAL_NS = chevrotain.createToken({
  name: 'EQUAL_NS',
  pattern: /\<\=\>/i,
  longer_alt: ID,
});
const EQUAL = chevrotain.createToken({
  name: 'EQUAL',
  pattern: /(\=|\=\=)/i,
  longer_alt: ID,
});
const RCURLY = chevrotain.createToken({
  name: 'RCURLY',
  pattern: /\}/i,
  longer_alt: ID,
});
const LCURLY = chevrotain.createToken({
  name: 'LCURLY',
  pattern: /\{/i,
  longer_alt: ID,
});
const RSQUARE = chevrotain.createToken({
  name: 'RSQUARE',
  pattern: /\]/i,
  longer_alt: ID,
});
const LSQUARE = chevrotain.createToken({
  name: 'LSQUARE',
  pattern: /\[/i,
  longer_alt: ID,
});
const RPAREN = chevrotain.createToken({
  name: 'RPAREN',
  pattern: /\)/i,
  longer_alt: ID,
});
const LPAREN = chevrotain.createToken({
  name: 'LPAREN',
  pattern: /\(/i,
  longer_alt: ID,
});
const SEMICOLON = chevrotain.createToken({
  name: 'SEMICOLON',
  pattern: /\;/i,
  longer_alt: ID,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/i,
  longer_alt: ID,
});
const COLON = chevrotain.createToken({
  name: 'COLON',
  pattern: /\:/i,
  longer_alt: ID,
});
const DOT = chevrotain.createToken({
  name: 'DOT',
  pattern: /\./i,
  longer_alt: ID,
});
const KWEXCHANGE = chevrotain.createToken({
  name: 'KWEXCHANGE',
  pattern: /EXCHANGE/i,
  longer_alt: ID,
});
const KWINNER = chevrotain.createToken({
  name: 'KWINNER',
  pattern: /INNER/i,
  longer_alt: ID,
});
const KWROLE = chevrotain.createToken({
  name: 'KWROLE',
  pattern: /ROLE/i,
  longer_alt: ID,
});
const KWUSER = chevrotain.createToken({
  name: 'KWUSER',
  pattern: /USER/i,
  longer_alt: ID,
});
const KWPARTIALSCAN = chevrotain.createToken({
  name: 'KWPARTIALSCAN',
  pattern: /PARTIALSCAN/i,
  longer_alt: ID,
});
const KWNOSCAN = chevrotain.createToken({
  name: 'KWNOSCAN',
  pattern: /NOSCAN/i,
  longer_alt: ID,
});
const KWTRUNCATE = chevrotain.createToken({
  name: 'KWTRUNCATE',
  pattern: /TRUNCATE/i,
  longer_alt: ID,
});
const KWSETS = chevrotain.createToken({
  name: 'KWSETS',
  pattern: /SETS/i,
  longer_alt: ID,
});
const KWGROUPING = chevrotain.createToken({
  name: 'KWGROUPING',
  pattern: /GROUPING/i,
  longer_alt: ID,
});
const KWMORE = chevrotain.createToken({
  name: 'KWMORE',
  pattern: /MORE/i,
  longer_alt: ID,
});
const KWLESS = chevrotain.createToken({
  name: 'KWLESS',
  pattern: /LESS/i,
  longer_alt: ID,
});
const KWCURRENT = chevrotain.createToken({
  name: 'KWCURRENT',
  pattern: /CURRENT/i,
  longer_alt: ID,
});
const KWFOLLOWING = chevrotain.createToken({
  name: 'KWFOLLOWING',
  pattern: /FOLLOWING/i,
  longer_alt: ID,
});
const KWPRECEDING = chevrotain.createToken({
  name: 'KWPRECEDING',
  pattern: /PRECEDING/i,
  longer_alt: ID,
});
const KWUNBOUNDED = chevrotain.createToken({
  name: 'KWUNBOUNDED',
  pattern: /UNBOUNDED/i,
  longer_alt: ID,
});
const KWWINDOW = chevrotain.createToken({
  name: 'KWWINDOW',
  pattern: /WINDOW/i,
  longer_alt: ID,
});
const KWDIRECTORIES = chevrotain.createToken({
  name: 'KWDIRECTORIES',
  pattern: /DIRECTORIES/i,
  longer_alt: ID,
});
const KWCUBE = chevrotain.createToken({
  name: 'KWCUBE',
  pattern: /CUBE/i,
  longer_alt: ID,
});
const KWROLLUP = chevrotain.createToken({
  name: 'KWROLLUP',
  pattern: /ROLLUP/i,
  longer_alt: ID,
});
const KWSKEWED = chevrotain.createToken({
  name: 'KWSKEWED',
  pattern: /SKEWED/i,
  longer_alt: ID,
});
const KWCASCADE = chevrotain.createToken({
  name: 'KWCASCADE',
  pattern: /CASCADE/i,
  longer_alt: ID,
});
const KWRESTRICT = chevrotain.createToken({
  name: 'KWRESTRICT',
  pattern: /RESTRICT/i,
  longer_alt: ID,
});
const KWUPDATE = chevrotain.createToken({
  name: 'KWUPDATE',
  pattern: /UPDATE/i,
  longer_alt: ID,
});
const KWSHOW_DATABASE = chevrotain.createToken({
  name: 'KWSHOW_DATABASE',
  pattern: /SHOW_DATABASE/i,
  longer_alt: ID,
});
const KWCONCATENATE = chevrotain.createToken({
  name: 'KWCONCATENATE',
  pattern: /CONCATENATE/i,
  longer_alt: ID,
});
const KWOPTION = chevrotain.createToken({
  name: 'KWOPTION',
  pattern: /OPTION/i,
  longer_alt: ID,
});
const KWUSE = chevrotain.createToken({
  name: 'KWUSE',
  pattern: /USE/i,
  longer_alt: ID,
});
const KWSTATISTICS = chevrotain.createToken({
  name: 'KWSTATISTICS',
  pattern: /STATISTICS/i,
  longer_alt: ID,
});
const KWCOMPUTE = chevrotain.createToken({
  name: 'KWCOMPUTE',
  pattern: /COMPUTE/i,
  longer_alt: ID,
});
const KWUNARCHIVE = chevrotain.createToken({
  name: 'KWUNARCHIVE',
  pattern: /UNARCHIVE/i,
  longer_alt: ID,
});
const KWARCHIVE = chevrotain.createToken({
  name: 'KWARCHIVE',
  pattern: /ARCHIVE/i,
  longer_alt: ID,
});
const KWTOUCH = chevrotain.createToken({
  name: 'KWTOUCH',
  pattern: /TOUCH/i,
  longer_alt: ID,
});
const KWLATERAL = chevrotain.createToken({
  name: 'KWLATERAL',
  pattern: /LATERAL/i,
  longer_alt: ID,
});
const KWSEMI = chevrotain.createToken({
  name: 'KWSEMI',
  pattern: /SEMI/i,
  longer_alt: ID,
});
const KWRECORDWRITER = chevrotain.createToken({
  name: 'KWRECORDWRITER',
  pattern: /RECORDWRITER/i,
  longer_alt: ID,
});
const KWRECORDREADER = chevrotain.createToken({
  name: 'KWRECORDREADER',
  pattern: /RECORDREADER/i,
  longer_alt: ID,
});
const KWTRIGGER = chevrotain.createToken({
  name: 'KWTRIGGER',
  pattern: /TRIGGER/i,
  longer_alt: ID,
});
const KWCURSOR = chevrotain.createToken({
  name: 'KWCURSOR',
  pattern: /CURSOR/i,
  longer_alt: ID,
});
const KWCONTINUE = chevrotain.createToken({
  name: 'KWCONTINUE',
  pattern: /CONTINUE/i,
  longer_alt: ID,
});
const KWCROSS = chevrotain.createToken({
  name: 'KWCROSS',
  pattern: /CROSS/i,
  longer_alt: ID,
});
const KWBINARY = chevrotain.createToken({
  name: 'KWBINARY',
  pattern: /BINARY/i,
  longer_alt: ID,
});
const KWBOTH = chevrotain.createToken({
  name: 'KWBOTH',
  pattern: /BOTH/i,
  longer_alt: ID,
});
const KWBETWEEN = chevrotain.createToken({
  name: 'KWBETWEEN',
  pattern: /BETWEEN/i,
  longer_alt: ID,
});
const KWBEFORE = chevrotain.createToken({
  name: 'KWBEFORE',
  pattern: /BEFORE/i,
  longer_alt: ID,
});
const KWANALYZE = chevrotain.createToken({
  name: 'KWANALYZE',
  pattern: /ANALYZE/i,
  longer_alt: ID,
});
const KWRANGE = chevrotain.createToken({
  name: 'KWRANGE',
  pattern: /RANGE/i,
  longer_alt: ID,
});
const KWPURGE = chevrotain.createToken({
  name: 'KWPURGE',
  pattern: /PURGE/i,
  longer_alt: ID,
});
const KWREADS = chevrotain.createToken({
  name: 'KWREADS',
  pattern: /READS/i,
  longer_alt: ID,
});
const KWWHILE = chevrotain.createToken({
  name: 'KWWHILE',
  pattern: /WHILE/i,
  longer_alt: ID,
});
const KWUNSIGNED = chevrotain.createToken({
  name: 'KWUNSIGNED',
  pattern: /UNSIGNED/i,
  longer_alt: ID,
});
const KWPROCEDURE = chevrotain.createToken({
  name: 'KWPROCEDURE',
  pattern: /PROCEDURE/i,
  longer_alt: ID,
});
const KWEXCLUSIVE = chevrotain.createToken({
  name: 'KWEXCLUSIVE',
  pattern: /EXCLUSIVE/i,
  longer_alt: ID,
});
const KWSHARED = chevrotain.createToken({
  name: 'KWSHARED',
  pattern: /SHARED/i,
  longer_alt: ID,
});
const KWUNLOCK = chevrotain.createToken({
  name: 'KWUNLOCK',
  pattern: /UNLOCK/i,
  longer_alt: ID,
});
const KWLOCKS = chevrotain.createToken({
  name: 'KWLOCKS',
  pattern: /LOCKS/i,
  longer_alt: ID,
});
const KWLOCK = chevrotain.createToken({
  name: 'KWLOCK',
  pattern: /LOCK/i,
  longer_alt: ID,
});
const KWUNDO = chevrotain.createToken({
  name: 'KWUNDO',
  pattern: /UNDO/i,
  longer_alt: ID,
});
const KWSSL = chevrotain.createToken({
  name: 'KWSSL',
  pattern: /SSL/i,
  longer_alt: ID,
});
const KWREVOKE = chevrotain.createToken({
  name: 'KWREVOKE',
  pattern: /REVOKE/i,
  longer_alt: ID,
});
const KWGRANT = chevrotain.createToken({
  name: 'KWGRANT',
  pattern: /GRANT/i,
  longer_alt: ID,
});
const KWSCHEMAS = chevrotain.createToken({
  name: 'KWSCHEMAS',
  pattern: /SCHEMAS/i,
  longer_alt: ID,
});
const KWSCHEMA = chevrotain.createToken({
  name: 'KWSCHEMA',
  pattern: /SCHEMA/i,
  longer_alt: ID,
});
const KWMATERIALIZED = chevrotain.createToken({
  name: 'KWMATERIALIZED',
  pattern: /MATERIALIZED/i,
  longer_alt: ID,
});
const KWDATABASES = chevrotain.createToken({
  name: 'KWDATABASES',
  pattern: /DATABASES/i,
  longer_alt: ID,
});
const KWDATABASE = chevrotain.createToken({
  name: 'KWDATABASE',
  pattern: /DATABASE/i,
  longer_alt: ID,
});
const KWVIEW = chevrotain.createToken({
  name: 'KWVIEW',
  pattern: /VIEW/i,
  longer_alt: ID,
});
const KWINTERSECT = chevrotain.createToken({
  name: 'KWINTERSECT',
  pattern: /INTERSECT/i,
  longer_alt: ID,
});
const KWFETCH = chevrotain.createToken({
  name: 'KWFETCH',
  pattern: /FETCH/i,
  longer_alt: ID,
});
const KWMINUS = chevrotain.createToken({
  name: 'KWMINUS',
  pattern: /MINUS/i,
  longer_alt: ID,
});
const KWPLUS = chevrotain.createToken({
  name: 'KWPLUS',
  pattern: /PLUS/i,
  longer_alt: ID,
});
const KWDELETE = chevrotain.createToken({
  name: 'KWDELETE',
  pattern: /DELETE/i,
  longer_alt: ID,
});
const KWLONG = chevrotain.createToken({
  name: 'KWLONG',
  pattern: /LONG/i,
  longer_alt: ID,
});
const KWUTCTIMESTAMP = chevrotain.createToken({
  name: 'KWUTCTIMESTAMP',
  pattern: /UTC_TMESTAMP/i,
  longer_alt: ID,
});
const KWUTC = chevrotain.createToken({
  name: 'KWUTC',
  pattern: /UTC/i,
  longer_alt: ID,
});
const KWCLUSTERSTATUS = chevrotain.createToken({
  name: 'KWCLUSTERSTATUS',
  pattern: /CLUSTERSTATUS/i,
  longer_alt: ID,
});
const KWHOLD_DDLTIME = chevrotain.createToken({
  name: 'KWHOLD_DDLTIME',
  pattern: /HOLD_DDLTIME/i,
  longer_alt: ID,
});
const KWSTREAMTABLE = chevrotain.createToken({
  name: 'KWSTREAMTABLE',
  pattern: /STREAMTABLE/i,
  longer_alt: ID,
});
const KWMAPJOIN = chevrotain.createToken({
  name: 'KWMAPJOIN',
  pattern: /MAPJOIN/i,
  longer_alt: ID,
});
const KWELSE = chevrotain.createToken({
  name: 'KWELSE',
  pattern: /ELSE/i,
  longer_alt: ID,
});
const KWTHEN = chevrotain.createToken({
  name: 'KWTHEN',
  pattern: /THEN/i,
  longer_alt: ID,
});
const KWWHEN = chevrotain.createToken({
  name: 'KWWHEN',
  pattern: /WHEN/i,
  longer_alt: ID,
});
const KWCASE = chevrotain.createToken({
  name: 'KWCASE',
  pattern: /CASE/i,
  longer_alt: ID,
});
const KWELEM_TYPE = chevrotain.createToken({
  name: 'KWELEM_TYPE',
  pattern: /\$ELEM\$/i,
  longer_alt: ID,
});
const KWVALUE_TYPE = chevrotain.createToken({
  name: 'KWVALUE_TYPE',
  pattern: /\$VALUE\$/i,
  longer_alt: ID,
});
const KWIDXPROPERTIES = chevrotain.createToken({
  name: 'KWIDXPROPERTIES',
  pattern: /IDXPROPERTIES/i,
  longer_alt: ID,
});
const KWTBLPROPERTIES = chevrotain.createToken({
  name: 'KWTBLPROPERTIES',
  pattern: /TBLPROPERTIES/i,
  longer_alt: ID,
});
const KWUNSET = chevrotain.createToken({
  name: 'KWUNSET',
  pattern: /UNSET/i,
  longer_alt: ID,
});
const KWSET = chevrotain.createToken({
  name: 'KWSET',
  pattern: /SET/i,
  longer_alt: ID,
});
const KWDBPROPERTIES = chevrotain.createToken({
  name: 'KWDBPROPERTIES',
  pattern: /DBPROPERTIES/i,
  longer_alt: ID,
});
const KWSERDEPROPERTIES = chevrotain.createToken({
  name: 'KWSERDEPROPERTIES',
  pattern: /SERDEPROPERTIES/i,
  longer_alt: ID,
});
const KWDEFERRED = chevrotain.createToken({
  name: 'KWDEFERRED',
  pattern: /DEFERRED/i,
  longer_alt: ID,
});
const KWWITH = chevrotain.createToken({
  name: 'KWWITH',
  pattern: /WITH/i,
  longer_alt: ID,
});
const KWSERDE = chevrotain.createToken({
  name: 'KWSERDE',
  pattern: /SERDE/i,
  longer_alt: ID,
});
const KWLOGICAL = chevrotain.createToken({
  name: 'KWLOGICAL',
  pattern: /LOGICAL/i,
  longer_alt: ID,
});
const KWDEPENDENCY = chevrotain.createToken({
  name: 'KWDEPENDENCY',
  pattern: /DEPENDENCY/i,
  longer_alt: ID,
});
const KWPRETTY = chevrotain.createToken({
  name: 'KWPRETTY',
  pattern: /PRETTY/i,
  longer_alt: ID,
});
const KWFORMATTED = chevrotain.createToken({
  name: 'KWFORMATTED',
  pattern: /FORMATTED/i,
  longer_alt: ID,
});
const KWEXTENDED = chevrotain.createToken({
  name: 'KWEXTENDED',
  pattern: /EXTENDED/i,
  longer_alt: ID,
});
const KWEND = chevrotain.createToken({
  name: 'KWEND',
  pattern: /END/i,
  longer_alt: ID,
});
const KWEXPLAIN = chevrotain.createToken({
  name: 'KWEXPLAIN',
  pattern: /EXPLAIN/i,
  longer_alt: ID,
});
const KWMACRO = chevrotain.createToken({
  name: 'KWMACRO',
  pattern: /MACRO/i,
  longer_alt: ID,
});
const KWTEMPORARY = chevrotain.createToken({
  name: 'KWTEMPORARY',
  pattern: /TEMPORARY/i,
  longer_alt: ID,
});
const KWREGEXP = chevrotain.createToken({
  name: 'KWREGEXP',
  pattern: /REGEXP/i,
  longer_alt: ID,
});
const KWRLIKE = chevrotain.createToken({
  name: 'KWRLIKE',
  pattern: /RLIKE/i,
  longer_alt: ID,
});
const KWREPLACE = chevrotain.createToken({
  name: 'KWREPLACE',
  pattern: /REPLACE/i,
  longer_alt: ID,
});
const KWADD = chevrotain.createToken({
  name: 'KWADD',
  pattern: /ADD/i,
  longer_alt: ID,
});
const KWCAST = chevrotain.createToken({
  name: 'KWCAST',
  pattern: /CAST/i,
  longer_alt: ID,
});
const KWPERCENT = chevrotain.createToken({
  name: 'KWPERCENT',
  pattern: /PERCENT/i,
  longer_alt: ID,
});
const KWTABLESAMPLE = chevrotain.createToken({
  name: 'KWTABLESAMPLE',
  pattern: /TABLESAMPLE/i,
  longer_alt: ID,
});
const KWLOCATION = chevrotain.createToken({
  name: 'KWLOCATION',
  pattern: /LOCATION/i,
  longer_alt: ID,
});
const KWNO_DROP = chevrotain.createToken({
  name: 'KWNO_DROP',
  pattern: /NO_DROP/i,
  longer_alt: ID,
});
const KWREADONLY = chevrotain.createToken({
  name: 'KWREADONLY',
  pattern: /READONLY/i,
  longer_alt: ID,
});
const KWREAD = chevrotain.createToken({
  name: 'KWREAD',
  pattern: /READ/i,
  longer_alt: ID,
});
const KWDISABLE = chevrotain.createToken({
  name: 'KWDISABLE',
  pattern: /DISABLE/i,
  longer_alt: ID,
});
const KWENABLE = chevrotain.createToken({
  name: 'KWENABLE',
  pattern: /ENABLE/i,
  longer_alt: ID,
});
const KWOFFLINE = chevrotain.createToken({
  name: 'KWOFFLINE',
  pattern: /OFFLINE/i,
  longer_alt: ID,
});
const KWOF = chevrotain.createToken({
  name: 'KWOF',
  pattern: /OF/i,
  longer_alt: ID,
});
const KWOUTPUTDRIVER = chevrotain.createToken({
  name: 'KWOUTPUTDRIVER',
  pattern: /OUTPUTDRIVER/i,
  longer_alt: ID,
});
const KWINPUTDRIVER = chevrotain.createToken({
  name: 'KWINPUTDRIVER',
  pattern: /INPUTDRIVER/i,
  longer_alt: ID,
});
const KWOUTPUTFORMAT = chevrotain.createToken({
  name: 'KWOUTPUTFORMAT',
  pattern: /OUTPUTFORMAT/i,
  longer_alt: ID,
});
const KWINPUTFORMAT = chevrotain.createToken({
  name: 'KWINPUTFORMAT',
  pattern: /INPUTFORMAT/i,
  longer_alt: ID,
});
const KWORCFILE = chevrotain.createToken({
  name: 'KWORCFILE',
  pattern: /ORC/i,
  longer_alt: ID,
});
const KWRCFILE = chevrotain.createToken({
  name: 'KWRCFILE',
  pattern: /RCFILE/i,
  longer_alt: ID,
});
const KWTEXTFILE = chevrotain.createToken({
  name: 'KWTEXTFILE',
  pattern: /TEXTFILE/i,
  longer_alt: ID,
});
const KWSEQUENCEFILE = chevrotain.createToken({
  name: 'KWSEQUENCEFILE',
  pattern: /SEQUENCEFILE/i,
  longer_alt: ID,
});
const KWFILEFORMAT = chevrotain.createToken({
  name: 'KWFILEFORMAT',
  pattern: /FILEFORMAT/i,
  longer_alt: ID,
});
const KWSTORED = chevrotain.createToken({
  name: 'KWSTORED',
  pattern: /STORED/i,
  longer_alt: ID,
});
const KWLINES = chevrotain.createToken({
  name: 'KWLINES',
  pattern: /LINES/i,
  longer_alt: ID,
});
const KWKEY_TYPE = chevrotain.createToken({
  name: 'KWKEY_TYPE',
  pattern: /\$KEY\$/i,
  longer_alt: ID,
});
const KWKEYS = chevrotain.createToken({
  name: 'KWKEYS',
  pattern: /KEYS/i,
  longer_alt: ID,
});
const KWITEMS = chevrotain.createToken({
  name: 'KWITEMS',
  pattern: /ITEMS/i,
  longer_alt: ID,
});
const KWCOLLECTION = chevrotain.createToken({
  name: 'KWCOLLECTION',
  pattern: /COLLECTION/i,
  longer_alt: ID,
});
const KWESCAPED = chevrotain.createToken({
  name: 'KWESCAPED',
  pattern: /ESCAPED/i,
  longer_alt: ID,
});
const KWTERMINATED = chevrotain.createToken({
  name: 'KWTERMINATED',
  pattern: /TERMINATED/i,
  longer_alt: ID,
});
const KWFIELDS = chevrotain.createToken({
  name: 'KWFIELDS',
  pattern: /FIELDS/i,
  longer_alt: ID,
});
const KWDELIMITED = chevrotain.createToken({
  name: 'KWDELIMITED',
  pattern: /DELIMITED/i,
  longer_alt: ID,
});
const KWLIMIT = chevrotain.createToken({
  name: 'KWLIMIT',
  pattern: /LIMIT/i,
  longer_alt: ID,
});
const KWFORMAT = chevrotain.createToken({
  name: 'KWFORMAT',
  pattern: /FORMAT/i,
  longer_alt: ID,
});
const KWROWS = chevrotain.createToken({
  name: 'KWROWS',
  pattern: /ROWS/i,
  longer_alt: ID,
});
const KWROW = chevrotain.createToken({
  name: 'KWROW',
  pattern: /ROW/i,
  longer_alt: ID,
});
const KWBUCKETS = chevrotain.createToken({
  name: 'KWBUCKETS',
  pattern: /BUCKETS/i,
  longer_alt: ID,
});
const KWBUCKET = chevrotain.createToken({
  name: 'KWBUCKET',
  pattern: /BUCKET/i,
  longer_alt: ID,
});
const KWINTO = chevrotain.createToken({
  name: 'KWINTO',
  pattern: /INTO/i,
  longer_alt: ID,
});
const KWSORTED = chevrotain.createToken({
  name: 'KWSORTED',
  pattern: /SORTED/i,
  longer_alt: ID,
});
const KWCLUSTERED = chevrotain.createToken({
  name: 'KWCLUSTERED',
  pattern: /CLUSTERED/i,
  longer_alt: ID,
});
const KWPARTITIONED = chevrotain.createToken({
  name: 'KWPARTITIONED',
  pattern: /PARTITIONED/i,
  longer_alt: ID,
});
const KWREDUCE = chevrotain.createToken({
  name: 'KWREDUCE',
  pattern: /REDUCE/i,
  longer_alt: ID,
});
const KWUNIONTYPE = chevrotain.createToken({
  name: 'KWUNIONTYPE',
  pattern: /UNIONTYPE/i,
  longer_alt: ID,
});
const KWMAP = chevrotain.createToken({
  name: 'KWMAP',
  pattern: /MAP/i,
  longer_alt: ID,
});
const KWSTRUCT = chevrotain.createToken({
  name: 'KWSTRUCT',
  pattern: /STRUCT/i,
  longer_alt: ID,
});
const KWARRAY = chevrotain.createToken({
  name: 'KWARRAY',
  pattern: /ARRAY/i,
  longer_alt: ID,
});
const KWSTRING = chevrotain.createToken({
  name: 'KWSTRING',
  pattern: /STRING/i,
  longer_alt: ID,
});
const KWDECIMAL = chevrotain.createToken({
  name: 'KWDECIMAL',
  pattern: /DECIMAL/i,
  longer_alt: ID,
});
const KWTIMESTAMP = chevrotain.createToken({
  name: 'KWTIMESTAMP',
  pattern: /TIMESTAMP/i,
  longer_alt: ID,
});
const KWDATETIME = chevrotain.createToken({
  name: 'KWDATETIME',
  pattern: /DATETIME/i,
  longer_alt: ID,
});
const KWDATE = chevrotain.createToken({
  name: 'KWDATE',
  pattern: /DATE/i,
  longer_alt: ID,
});
const KWDOUBLE = chevrotain.createToken({
  name: 'KWDOUBLE',
  pattern: /DOUBLE/i,
  longer_alt: ID,
});
const KWFLOAT = chevrotain.createToken({
  name: 'KWFLOAT',
  pattern: /FLOAT/i,
  longer_alt: ID,
});
const KWBIGINT = chevrotain.createToken({
  name: 'KWBIGINT',
  pattern: /BIGINT/i,
  longer_alt: ID,
});
const KWSMALLINT = chevrotain.createToken({
  name: 'KWSMALLINT',
  pattern: /SMALLINT/i,
  longer_alt: ID,
});
const KWTINYINT = chevrotain.createToken({
  name: 'KWTINYINT',
  pattern: /TINYINT/i,
  longer_alt: ID,
});
const KWINT = chevrotain.createToken({
  name: 'KWINT',
  pattern: /INT/i,
  longer_alt: ID,
});
const KWBOOLEAN = chevrotain.createToken({
  name: 'KWBOOLEAN',
  pattern: /BOOLEAN/i,
  longer_alt: ID,
});
const KWCOMMENT = chevrotain.createToken({
  name: 'KWCOMMENT',
  pattern: /COMMENT/i,
  longer_alt: ID,
});
const KWPROTECTION = chevrotain.createToken({
  name: 'KWPROTECTION',
  pattern: /PROTECTION/i,
  longer_alt: ID,
});
const KWIGNORE = chevrotain.createToken({
  name: 'KWIGNORE',
  pattern: /IGNORE/i,
  longer_alt: ID,
});
const KWRENAME = chevrotain.createToken({
  name: 'KWRENAME',
  pattern: /RENAME/i,
  longer_alt: ID,
});
const KWDROP = chevrotain.createToken({
  name: 'KWDROP',
  pattern: /DROP/i,
  longer_alt: ID,
});
const KWDESCRIBE = chevrotain.createToken({
  name: 'KWDESCRIBE',
  pattern: /DESCRIBE/i,
  longer_alt: ID,
});
const KWAFTER = chevrotain.createToken({
  name: 'KWAFTER',
  pattern: /AFTER/i,
  longer_alt: ID,
});
const KWFIRST = chevrotain.createToken({
  name: 'KWFIRST',
  pattern: /FIRST/i,
  longer_alt: ID,
});
const KWCHANGE = chevrotain.createToken({
  name: 'KWCHANGE',
  pattern: /CHANGE/i,
  longer_alt: ID,
});
const KWALTER = chevrotain.createToken({
  name: 'KWALTER',
  pattern: /ALTER/i,
  longer_alt: ID,
});
const KWEXTERNAL = chevrotain.createToken({
  name: 'KWEXTERNAL',
  pattern: /EXTERNAL/i,
  longer_alt: ID,
});
const KWCREATE = chevrotain.createToken({
  name: 'KWCREATE',
  pattern: /CREATE/i,
  longer_alt: ID,
});
const KWNULL = chevrotain.createToken({
  name: 'KWNULL',
  pattern: /NULL/i,
  longer_alt: ID,
});
const KWINPATH = chevrotain.createToken({
  name: 'KWINPATH',
  pattern: /INPATH/i,
  longer_alt: ID,
});
const KWDATA = chevrotain.createToken({
  name: 'KWDATA',
  pattern: /DATA/i,
  longer_alt: ID,
});
const KWIMPORT = chevrotain.createToken({
  name: 'KWIMPORT',
  pattern: /IMPORT/i,
  longer_alt: ID,
});
const KWEXPORT = chevrotain.createToken({
  name: 'KWEXPORT',
  pattern: /EXPORT/i,
  longer_alt: ID,
});
const KWLOAD = chevrotain.createToken({
  name: 'KWLOAD',
  pattern: /LOAD/i,
  longer_alt: ID,
});
const KWUNION = chevrotain.createToken({
  name: 'KWUNION',
  pattern: /UNION/i,
  longer_alt: ID,
});
const KWSORT = chevrotain.createToken({
  name: 'KWSORT',
  pattern: /SORT/i,
  longer_alt: ID,
});
const KWDISTRIBUTE = chevrotain.createToken({
  name: 'KWDISTRIBUTE',
  pattern: /DISTRIBUTE/i,
  longer_alt: ID,
});
const KWCLUSTER = chevrotain.createToken({
  name: 'KWCLUSTER',
  pattern: /CLUSTER/i,
  longer_alt: ID,
});
const KWUSING = chevrotain.createToken({
  name: 'KWUSING',
  pattern: /USING/i,
  longer_alt: ID,
});
const KWTRANSFORM = chevrotain.createToken({
  name: 'KWTRANSFORM',
  pattern: /TRANSFORM/i,
  longer_alt: ID,
});
const KWFOR = chevrotain.createToken({
  name: 'KWFOR',
  pattern: /FOR/i,
  longer_alt: ID,
});
const KWLOCAL = chevrotain.createToken({
  name: 'KWLOCAL',
  pattern: /LOCAL/i,
  longer_alt: ID,
});
const KWDIRECTORY = chevrotain.createToken({
  name: 'KWDIRECTORY',
  pattern: /DIRECTORY/i,
  longer_alt: ID,
});
const KWTO = chevrotain.createToken({
  name: 'KWTO',
  pattern: /TO/i,
  longer_alt: ID,
});
const KWREPAIR = chevrotain.createToken({
  name: 'KWREPAIR',
  pattern: /REPAIR/i,
  longer_alt: ID,
});
const KWMSCK = chevrotain.createToken({
  name: 'KWMSCK',
  pattern: /MSCK/i,
  longer_alt: ID,
});
const KWSHOW = chevrotain.createToken({
  name: 'KWSHOW',
  pattern: /SHOW/i,
  longer_alt: ID,
});
const KWFUNCTIONS = chevrotain.createToken({
  name: 'KWFUNCTIONS',
  pattern: /FUNCTIONS/i,
  longer_alt: ID,
});
const KWFUNCTION = chevrotain.createToken({
  name: 'KWFUNCTION',
  pattern: /FUNCTION/i,
  longer_alt: ID,
});
const KWREBUILD = chevrotain.createToken({
  name: 'KWREBUILD',
  pattern: /REBUILD/i,
  longer_alt: ID,
});
const KWINDEXES = chevrotain.createToken({
  name: 'KWINDEXES',
  pattern: /INDEXES/i,
  longer_alt: ID,
});
const KWINDEX = chevrotain.createToken({
  name: 'KWINDEX',
  pattern: /INDEX/i,
  longer_alt: ID,
});
const KWCOLUMNS = chevrotain.createToken({
  name: 'KWCOLUMNS',
  pattern: /COLUMNS/i,
  longer_alt: ID,
});
const KWCOLUMN = chevrotain.createToken({
  name: 'KWCOLUMN',
  pattern: /COLUMN/i,
  longer_alt: ID,
});
const KWTABLES = chevrotain.createToken({
  name: 'KWTABLES',
  pattern: /TABLES/i,
  longer_alt: ID,
});
const KWTABLE = chevrotain.createToken({
  name: 'KWTABLE',
  pattern: /TABLE/i,
  longer_alt: ID,
});
const KWPARTITIONS = chevrotain.createToken({
  name: 'KWPARTITIONS',
  pattern: /PARTITIONS/i,
  longer_alt: ID,
});
const KWPARTITION = chevrotain.createToken({
  name: 'KWPARTITION',
  pattern: /PARTITION/i,
  longer_alt: ID,
});
const KWON = chevrotain.createToken({
  name: 'KWON',
  pattern: /ON/i,
  longer_alt: ID,
});
const KWFULL = chevrotain.createToken({
  name: 'KWFULL',
  pattern: /FULL/i,
  longer_alt: ID,
});
const KWRIGHT = chevrotain.createToken({
  name: 'KWRIGHT',
  pattern: /RIGHT/i,
  longer_alt: ID,
});
const KWLEFT = chevrotain.createToken({
  name: 'KWLEFT',
  pattern: /LEFT/i,
  longer_alt: ID,
});
const KWPRESERVE = chevrotain.createToken({
  name: 'KWPRESERVE',
  pattern: /PRESERVE/i,
  longer_alt: ID,
});
const KWUNIQUEJOIN = chevrotain.createToken({
  name: 'KWUNIQUEJOIN',
  pattern: /UNIQUEJOIN/i,
  longer_alt: ID,
});
const KWJOIN = chevrotain.createToken({
  name: 'KWJOIN',
  pattern: /JOIN/i,
  longer_alt: ID,
});
const KWOUTER = chevrotain.createToken({
  name: 'KWOUTER',
  pattern: /OUTER/i,
  longer_alt: ID,
});
const KWOUT = chevrotain.createToken({
  name: 'KWOUT',
  pattern: /OUT/i,
  longer_alt: ID,
});
const KWOVERWRITE = chevrotain.createToken({
  name: 'KWOVERWRITE',
  pattern: /OVERWRITE/i,
  longer_alt: ID,
});
const KWOVER = chevrotain.createToken({
  name: 'KWOVER',
  pattern: /OVER/i,
  longer_alt: ID,
});
const KWINSERT = chevrotain.createToken({
  name: 'KWINSERT',
  pattern: /INSERT/i,
  longer_alt: ID,
});
const KWDISTINCT = chevrotain.createToken({
  name: 'KWDISTINCT',
  pattern: /DISTINCT/i,
  longer_alt: ID,
});
const KWSELECT = chevrotain.createToken({
  name: 'KWSELECT',
  pattern: /SELECT/i,
  longer_alt: ID,
});
const KWFROM = chevrotain.createToken({
  name: 'KWFROM',
  pattern: /FROM/i,
  longer_alt: ID,
});
const KWWHERE = chevrotain.createToken({
  name: 'KWWHERE',
  pattern: /WHERE/i,
  longer_alt: ID,
});
const KWHAVING = chevrotain.createToken({
  name: 'KWHAVING',
  pattern: /HAVING/i,
  longer_alt: ID,
});
const KWIN = chevrotain.createToken({
  name: 'KWIN',
  pattern: /IN/i,
  longer_alt: ID,
});
const KWBY = chevrotain.createToken({
  name: 'KWBY',
  pattern: /BY/i,
  longer_alt: ID,
});
const KWGROUP = chevrotain.createToken({
  name: 'KWGROUP',
  pattern: /GROUP/i,
  longer_alt: ID,
});
const KWORDER = chevrotain.createToken({
  name: 'KWORDER',
  pattern: /ORDER/i,
  longer_alt: ID,
});
const KWDESC = chevrotain.createToken({
  name: 'KWDESC',
  pattern: /DESC/i,
  longer_alt: ID,
});
const KWASC = chevrotain.createToken({
  name: 'KWASC',
  pattern: /ASC/i,
  longer_alt: ID,
});
const KWAS = chevrotain.createToken({
  name: 'KWAS',
  pattern: /AS/i,
  longer_alt: ID,
});
const KWEXISTS = chevrotain.createToken({
  name: 'KWEXISTS',
  pattern: /EXISTS/i,
  longer_alt: ID,
});
const KWIS = chevrotain.createToken({
  name: 'KWIS',
  pattern: /IS/i,
  longer_alt: ID,
});
const KWIF = chevrotain.createToken({
  name: 'KWIF',
  pattern: /IF/i,
  longer_alt: ID,
});
const KWLIKE = chevrotain.createToken({
  name: 'KWLIKE',
  pattern: /LIKE/i,
  longer_alt: ID,
});
const KWNOT = chevrotain.createToken({
  name: 'KWNOT',
  pattern: /(NOT|\!)/i,
  longer_alt: ID,
});
const KWOR = chevrotain.createToken({
  name: 'KWOR',
  pattern: /OR/i,
  longer_alt: ID,
});
const KWAND = chevrotain.createToken({
  name: 'KWAND',
  pattern: /AND/i,
  longer_alt: ID,
});
const KWALL = chevrotain.createToken({
  name: 'KWALL',
  pattern: /ALL/i,
  longer_alt: ID,
});
const KWFALSE = chevrotain.createToken({
  name: 'KWFALSE',
  pattern: /FALSE/i,
  longer_alt: ID,
});
const KWTRUE = chevrotain.createToken({
  name: 'KWTRUE',
  pattern: /TRUE/i,
  longer_alt: ID,
});

export enum TokenEnum {
  COMMENT = 'COMMENT',
  WS = 'WS',
  CharSetName = 'CharSetName',
  ByteLengthLiteral = 'ByteLengthLiteral',
  DecimalLiteral = 'DecimalLiteral',
  TinyintLiteral = 'TinyintLiteral',
  SmallintLiteral = 'SmallintLiteral',
  BigintLiteral = 'BigintLiteral',
  CharSetLiteral = 'CharSetLiteral',
  StringLiteral = 'StringLiteral',
  Identifier = 'Identifier',
  Number = 'Number',
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
}

export const Tokens = {
  COMMENT,
  WS,
  CharSetName,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  StringLiteral,
  Identifier,
  Number,
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
};

export const tokens = [
  WhiteSpace,
  COMMENT,
  WS,
  CharSetName,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  StringLiteral,
  Identifier,
  Number,
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
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
