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
const VALUES = chevrotain.createToken({
  name: 'VALUES',
  pattern: /VALUES/i,
});
const VALUE = chevrotain.createToken({
  name: 'VALUE',
  pattern: /VALUE/i,
});
const EXCHANGE = chevrotain.createToken({
  name: 'EXCHANGE',
  pattern: /EXCHANGE/i,
});
const INNER = chevrotain.createToken({
  name: 'INNER',
  pattern: /INNER/i,
});
const ROLE = chevrotain.createToken({
  name: 'ROLE',
  pattern: /ROLE/i,
});
const USER = chevrotain.createToken({
  name: 'USER',
  pattern: /USER/i,
});
const PARTIALSCAN = chevrotain.createToken({
  name: 'PARTIALSCAN',
  pattern: /PARTIALSCAN/i,
});
const NOSCAN = chevrotain.createToken({
  name: 'NOSCAN',
  pattern: /NOSCAN/i,
});
const TRUNCATE = chevrotain.createToken({
  name: 'TRUNCATE',
  pattern: /TRUNCATE/i,
});
const SETS = chevrotain.createToken({
  name: 'SETS',
  pattern: /SETS/i,
});
const GROUPING = chevrotain.createToken({
  name: 'GROUPING',
  pattern: /GROUPING/i,
});
const MORE = chevrotain.createToken({
  name: 'MORE',
  pattern: /MORE/i,
});
const LESS = chevrotain.createToken({
  name: 'LESS',
  pattern: /LESS/i,
});
const CURRENT = chevrotain.createToken({
  name: 'CURRENT',
  pattern: /CURRENT/i,
});
const FOLLOWING = chevrotain.createToken({
  name: 'FOLLOWING',
  pattern: /FOLLOWING/i,
});
const PRECEDING = chevrotain.createToken({
  name: 'PRECEDING',
  pattern: /PRECEDING/i,
});
const UNBOUNDED = chevrotain.createToken({
  name: 'UNBOUNDED',
  pattern: /UNBOUNDED/i,
});
const WINDOW = chevrotain.createToken({
  name: 'WINDOW',
  pattern: /WINDOW/i,
});
const DIRECTORIES = chevrotain.createToken({
  name: 'DIRECTORIES',
  pattern: /DIRECTORIES/i,
});
const CUBE = chevrotain.createToken({
  name: 'CUBE',
  pattern: /CUBE/i,
});
const ROLLUP = chevrotain.createToken({
  name: 'ROLLUP',
  pattern: /ROLLUP/i,
});
const SKEWED = chevrotain.createToken({
  name: 'SKEWED',
  pattern: /SKEWED/i,
});
const CASCADE = chevrotain.createToken({
  name: 'CASCADE',
  pattern: /CASCADE/i,
});
const RESTRICT = chevrotain.createToken({
  name: 'RESTRICT',
  pattern: /RESTRICT/i,
});
const UPDATE = chevrotain.createToken({
  name: 'UPDATE',
  pattern: /UPDATE/i,
});
const SHOW_DATABASE = chevrotain.createToken({
  name: 'SHOW_DATABASE',
  pattern: /SHOW_DATABASE/i,
});
const CONCATENATE = chevrotain.createToken({
  name: 'CONCATENATE',
  pattern: /CONCATENATE/i,
});
const OPTION = chevrotain.createToken({
  name: 'OPTION',
  pattern: /OPTION/i,
});
const USE = chevrotain.createToken({
  name: 'USE',
  pattern: /USE/i,
});
const STATISTICS = chevrotain.createToken({
  name: 'STATISTICS',
  pattern: /STATISTICS/i,
});
const COMPUTE = chevrotain.createToken({
  name: 'COMPUTE',
  pattern: /COMPUTE/i,
});
const UNARCHIVE = chevrotain.createToken({
  name: 'UNARCHIVE',
  pattern: /UNARCHIVE/i,
});
const ARCHIVE = chevrotain.createToken({
  name: 'ARCHIVE',
  pattern: /ARCHIVE/i,
});
const TOUCH = chevrotain.createToken({
  name: 'TOUCH',
  pattern: /TOUCH/i,
});
const LATERAL = chevrotain.createToken({
  name: 'LATERAL',
  pattern: /LATERAL/i,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /SEMI/i,
});
const RECORDWRITER = chevrotain.createToken({
  name: 'RECORDWRITER',
  pattern: /RECORDWRITER/i,
});
const RECORDREADER = chevrotain.createToken({
  name: 'RECORDREADER',
  pattern: /RECORDREADER/i,
});
const TRIGGER = chevrotain.createToken({
  name: 'TRIGGER',
  pattern: /TRIGGER/i,
});
const CURSOR = chevrotain.createToken({
  name: 'CURSOR',
  pattern: /CURSOR/i,
});
const CONTINUE = chevrotain.createToken({
  name: 'CONTINUE',
  pattern: /CONTINUE/i,
});
const CROSS = chevrotain.createToken({
  name: 'CROSS',
  pattern: /CROSS/i,
});
const BINARY = chevrotain.createToken({
  name: 'BINARY',
  pattern: /BINARY/i,
});
const BOTH = chevrotain.createToken({
  name: 'BOTH',
  pattern: /BOTH/i,
});
const BETWEEN = chevrotain.createToken({
  name: 'BETWEEN',
  pattern: /BETWEEN/i,
});
const BEFORE = chevrotain.createToken({
  name: 'BEFORE',
  pattern: /BEFORE/i,
});
const ANALYZE = chevrotain.createToken({
  name: 'ANALYZE',
  pattern: /ANALYZE/i,
});
const RANGE = chevrotain.createToken({
  name: 'RANGE',
  pattern: /RANGE/i,
});
const PURGE = chevrotain.createToken({
  name: 'PURGE',
  pattern: /PURGE/i,
});
const READS = chevrotain.createToken({
  name: 'READS',
  pattern: /READS/i,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/i,
});
const UNSIGNED = chevrotain.createToken({
  name: 'UNSIGNED',
  pattern: /UNSIGNED/i,
});
const PROCEDURE = chevrotain.createToken({
  name: 'PROCEDURE',
  pattern: /PROCEDURE/i,
});
const EXCLUSIVE = chevrotain.createToken({
  name: 'EXCLUSIVE',
  pattern: /EXCLUSIVE/i,
});
const SHARED = chevrotain.createToken({
  name: 'SHARED',
  pattern: /SHARED/i,
});
const UNLOCK = chevrotain.createToken({
  name: 'UNLOCK',
  pattern: /UNLOCK/i,
});
const LOCKS = chevrotain.createToken({
  name: 'LOCKS',
  pattern: /LOCKS/i,
});
const LOCK = chevrotain.createToken({
  name: 'LOCK',
  pattern: /LOCK/i,
});
const UNDO = chevrotain.createToken({
  name: 'UNDO',
  pattern: /UNDO/i,
});
const SSL = chevrotain.createToken({
  name: 'SSL',
  pattern: /SSL/i,
});
const REVOKE = chevrotain.createToken({
  name: 'REVOKE',
  pattern: /REVOKE/i,
});
const GRANT = chevrotain.createToken({
  name: 'GRANT',
  pattern: /GRANT/i,
});
const SCHEMAS = chevrotain.createToken({
  name: 'SCHEMAS',
  pattern: /SCHEMAS/i,
});
const SCHEMA = chevrotain.createToken({
  name: 'SCHEMA',
  pattern: /SCHEMA/i,
});
const MATERIALIZED = chevrotain.createToken({
  name: 'MATERIALIZED',
  pattern: /MATERIALIZED/i,
});
const DATABASES = chevrotain.createToken({
  name: 'DATABASES',
  pattern: /DATABASES/i,
});
const DATABASE = chevrotain.createToken({
  name: 'DATABASE',
  pattern: /DATABASE/i,
});
const VIEW = chevrotain.createToken({
  name: 'VIEW',
  pattern: /VIEW/i,
});
const INTERSECT = chevrotain.createToken({
  name: 'INTERSECT',
  pattern: /INTERSECT/i,
});
const FETCH = chevrotain.createToken({
  name: 'FETCH',
  pattern: /FETCH/i,
});
const KWMINUS = chevrotain.createToken({
  name: 'KWMINUS',
  pattern: /KWMINUS/i,
});
const KWPLUS = chevrotain.createToken({
  name: 'KWPLUS',
  pattern: /KWPLUS/i,
});
const DELETE = chevrotain.createToken({
  name: 'DELETE',
  pattern: /DELETE/i,
});
const LONG = chevrotain.createToken({
  name: 'LONG',
  pattern: /LONG/i,
});
const UTCTIMESTAMP = chevrotain.createToken({
  name: 'UTCTIMESTAMP',
  pattern: /UTC_TMESTAMP/i,
});
const UTC = chevrotain.createToken({
  name: 'UTC',
  pattern: /UTC/i,
});
const CLUSTERSTATUS = chevrotain.createToken({
  name: 'CLUSTERSTATUS',
  pattern: /CLUSTERSTATUS/i,
});
const HOLD_DDLTIME = chevrotain.createToken({
  name: 'HOLD_DDLTIME',
  pattern: /HOLD_DDLTIME/i,
});
const STREAMTABLE = chevrotain.createToken({
  name: 'STREAMTABLE',
  pattern: /STREAMTABLE/i,
});
const MAPJOIN = chevrotain.createToken({
  name: 'MAPJOIN',
  pattern: /MAPJOIN/i,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/i,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/i,
});
const WHEN = chevrotain.createToken({
  name: 'WHEN',
  pattern: /WHEN/i,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/i,
});
const ELEM_TYPE = chevrotain.createToken({
  name: 'ELEM_TYPE',
  pattern: /\$ELEM\$/i,
});
const VALUE_TYPE = chevrotain.createToken({
  name: 'VALUE_TYPE',
  pattern: /\$VALUE\$/i,
});
const IDXPROPERTIES = chevrotain.createToken({
  name: 'IDXPROPERTIES',
  pattern: /IDXPROPERTIES/i,
});
const TBLPROPERTIES = chevrotain.createToken({
  name: 'TBLPROPERTIES',
  pattern: /TBLPROPERTIES/i,
});
const UNSET = chevrotain.createToken({
  name: 'UNSET',
  pattern: /UNSET/i,
});
const SET = chevrotain.createToken({
  name: 'SET',
  pattern: /SET/i,
});
const DBPROPERTIES = chevrotain.createToken({
  name: 'DBPROPERTIES',
  pattern: /DBPROPERTIES/i,
});
const SERDEPROPERTIES = chevrotain.createToken({
  name: 'SERDEPROPERTIES',
  pattern: /SERDEPROPERTIES/i,
});
const DEFERRED = chevrotain.createToken({
  name: 'DEFERRED',
  pattern: /DEFERRED/i,
});
const WITH = chevrotain.createToken({
  name: 'WITH',
  pattern: /WITH/i,
});
const SERDE = chevrotain.createToken({
  name: 'SERDE',
  pattern: /SERDE/i,
});
const LOGICAL = chevrotain.createToken({
  name: 'LOGICAL',
  pattern: /LOGICAL/i,
});
const DEPENDENCY = chevrotain.createToken({
  name: 'DEPENDENCY',
  pattern: /DEPENDENCY/i,
});
const PRETTY = chevrotain.createToken({
  name: 'PRETTY',
  pattern: /PRETTY/i,
});
const FORMATTED = chevrotain.createToken({
  name: 'FORMATTED',
  pattern: /FORMATTED/i,
});
const EXTENDED = chevrotain.createToken({
  name: 'EXTENDED',
  pattern: /EXTENDED/i,
});
const END = chevrotain.createToken({
  name: 'END',
  pattern: /END/i,
});
const EXPLAIN = chevrotain.createToken({
  name: 'EXPLAIN',
  pattern: /EXPLAIN/i,
});
const MACRO = chevrotain.createToken({
  name: 'MACRO',
  pattern: /MACRO/i,
});
const TEMPORARY = chevrotain.createToken({
  name: 'TEMPORARY',
  pattern: /TEMPORARY/i,
});
const REGEXP = chevrotain.createToken({
  name: 'REGEXP',
  pattern: /REGEXP/i,
});
const RLIKE = chevrotain.createToken({
  name: 'RLIKE',
  pattern: /RLIKE/i,
});
const REPLACE = chevrotain.createToken({
  name: 'REPLACE',
  pattern: /REPLACE/i,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /ADD/i,
});
const CAST = chevrotain.createToken({
  name: 'CAST',
  pattern: /CAST/i,
});
const PERCENT = chevrotain.createToken({
  name: 'PERCENT',
  pattern: /PERCENT/i,
});
const TABLESAMPLE = chevrotain.createToken({
  name: 'TABLESAMPLE',
  pattern: /TABLESAMPLE/i,
});
const LOCATION = chevrotain.createToken({
  name: 'LOCATION',
  pattern: /LOCATION/i,
});
const NO_DROP = chevrotain.createToken({
  name: 'NO_DROP',
  pattern: /NO_DROP/i,
});
const CharSetName = chevrotain.createToken({
  name: 'CharSetName',
  pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
});
const READONLY = chevrotain.createToken({
  name: 'READONLY',
  pattern: /READONLY/i,
});
const READ = chevrotain.createToken({
  name: 'READ',
  pattern: /READ/i,
});
const DISABLE = chevrotain.createToken({
  name: 'DISABLE',
  pattern: /DISABLE/i,
});
const ENABLE = chevrotain.createToken({
  name: 'ENABLE',
  pattern: /ENABLE/i,
});
const OFFLINE = chevrotain.createToken({
  name: 'OFFLINE',
  pattern: /OFFLINE/i,
});
const OF = chevrotain.createToken({
  name: 'OF',
  pattern: /OF/i,
});
const OUTPUTDRIVER = chevrotain.createToken({
  name: 'OUTPUTDRIVER',
  pattern: /OUTPUTDRIVER/i,
});
const INPUTDRIVER = chevrotain.createToken({
  name: 'INPUTDRIVER',
  pattern: /INPUTDRIVER/i,
});
const OUTPUTFORMAT = chevrotain.createToken({
  name: 'OUTPUTFORMAT',
  pattern: /OUTPUTFORMAT/i,
});
const INPUTFORMAT = chevrotain.createToken({
  name: 'INPUTFORMAT',
  pattern: /INPUTFORMAT/i,
});
const ORCFILE = chevrotain.createToken({
  name: 'ORCFILE',
  pattern: /ORC/i,
});
const RCFILE = chevrotain.createToken({
  name: 'RCFILE',
  pattern: /RCFILE/i,
});
const TEXTFILE = chevrotain.createToken({
  name: 'TEXTFILE',
  pattern: /TEXTFILE/i,
});
const SEQUENCEFILE = chevrotain.createToken({
  name: 'SEQUENCEFILE',
  pattern: /SEQUENCEFILE/i,
});
const FILEFORMAT = chevrotain.createToken({
  name: 'FILEFORMAT',
  pattern: /FILEFORMAT/i,
});
const STORED = chevrotain.createToken({
  name: 'STORED',
  pattern: /STORED/i,
});
const LINES = chevrotain.createToken({
  name: 'LINES',
  pattern: /LINES/i,
});
const KEY_TYPE = chevrotain.createToken({
  name: 'KEY_TYPE',
  pattern: /\$KEY\$/i,
});
const KEYS = chevrotain.createToken({
  name: 'KEYS',
  pattern: /KEYS/i,
});
const ITEMS = chevrotain.createToken({
  name: 'ITEMS',
  pattern: /ITEMS/i,
});
const COLLECTION = chevrotain.createToken({
  name: 'COLLECTION',
  pattern: /COLLECTION/i,
});
const ESCAPED = chevrotain.createToken({
  name: 'ESCAPED',
  pattern: /ESCAPED/i,
});
const TERMINATED = chevrotain.createToken({
  name: 'TERMINATED',
  pattern: /TERMINATED/i,
});
const FIELDS = chevrotain.createToken({
  name: 'FIELDS',
  pattern: /FIELDS/i,
});
const DELIMITED = chevrotain.createToken({
  name: 'DELIMITED',
  pattern: /DELIMITED/i,
});
const LIMIT = chevrotain.createToken({
  name: 'LIMIT',
  pattern: /LIMIT/i,
});
const FORMAT = chevrotain.createToken({
  name: 'FORMAT',
  pattern: /FORMAT/i,
});
const ROWS = chevrotain.createToken({
  name: 'ROWS',
  pattern: /ROWS/i,
});
const ROW = chevrotain.createToken({
  name: 'ROW',
  pattern: /ROW/i,
});
const BUCKETS = chevrotain.createToken({
  name: 'BUCKETS',
  pattern: /BUCKETS/i,
});
const BUCKET = chevrotain.createToken({
  name: 'BUCKET',
  pattern: /BUCKET/i,
});
const INTO = chevrotain.createToken({
  name: 'INTO',
  pattern: /INTO/i,
});
const SORTED = chevrotain.createToken({
  name: 'SORTED',
  pattern: /SORTED/i,
});
const CLUSTERED = chevrotain.createToken({
  name: 'CLUSTERED',
  pattern: /CLUSTERED/i,
});
const PARTITIONED = chevrotain.createToken({
  name: 'PARTITIONED',
  pattern: /PARTITIONED/i,
});
const REDUCE = chevrotain.createToken({
  name: 'REDUCE',
  pattern: /REDUCE/i,
});
const UNIONTYPE = chevrotain.createToken({
  name: 'UNIONTYPE',
  pattern: /UNIONTYPE/i,
});
const MAP = chevrotain.createToken({
  name: 'MAP',
  pattern: /MAP/i,
});
const STRUCT = chevrotain.createToken({
  name: 'STRUCT',
  pattern: /STRUCT/i,
});
const ARRAY = chevrotain.createToken({
  name: 'ARRAY',
  pattern: /ARRAY/i,
});
const STRING = chevrotain.createToken({
  name: 'STRING',
  pattern: /STRING/i,
});
const DECIMAL = chevrotain.createToken({
  name: 'DECIMAL',
  pattern: /DECIMAL/i,
});
const TIMESTAMP = chevrotain.createToken({
  name: 'TIMESTAMP',
  pattern: /TIMESTAMP/i,
});
const DATETIME = chevrotain.createToken({
  name: 'DATETIME',
  pattern: /DATETIME/i,
});
const DATE = chevrotain.createToken({
  name: 'DATE',
  pattern: /DATE/i,
});
const DOUBLE = chevrotain.createToken({
  name: 'DOUBLE',
  pattern: /DOUBLE/i,
});
const FLOAT = chevrotain.createToken({
  name: 'FLOAT',
  pattern: /FLOAT/i,
});
const BIGINT = chevrotain.createToken({
  name: 'BIGINT',
  pattern: /BIGINT/i,
});
const SMALLINT = chevrotain.createToken({
  name: 'SMALLINT',
  pattern: /SMALLINT/i,
});
const TINYINT = chevrotain.createToken({
  name: 'TINYINT',
  pattern: /TINYINT/i,
});
const INT = chevrotain.createToken({
  name: 'INT',
  pattern: /INT/i,
});
const BOOLEAN = chevrotain.createToken({
  name: 'BOOLEAN',
  pattern: /BOOLEAN/i,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /KWCOMMENT/i,
});
const PROTECTION = chevrotain.createToken({
  name: 'PROTECTION',
  pattern: /PROTECTION/i,
});
const IGNORE = chevrotain.createToken({
  name: 'IGNORE',
  pattern: /IGNORE/i,
});
const RENAME = chevrotain.createToken({
  name: 'RENAME',
  pattern: /RENAME/i,
});
const DROP = chevrotain.createToken({
  name: 'DROP',
  pattern: /DROP/i,
});
const DESCRIBE = chevrotain.createToken({
  name: 'DESCRIBE',
  pattern: /DESCRIBE/i,
});
const AFTER = chevrotain.createToken({
  name: 'AFTER',
  pattern: /AFTER/i,
});
const FIRST = chevrotain.createToken({
  name: 'FIRST',
  pattern: /FIRST/i,
});
const CHANGE = chevrotain.createToken({
  name: 'CHANGE',
  pattern: /CHANGE/i,
});
const ALTER = chevrotain.createToken({
  name: 'ALTER',
  pattern: /ALTER/i,
});
const EXTERNAL = chevrotain.createToken({
  name: 'EXTERNAL',
  pattern: /EXTERNAL/i,
});
const CREATE = chevrotain.createToken({
  name: 'CREATE',
  pattern: /CREATE/i,
});
const NULL = chevrotain.createToken({
  name: 'NULL',
  pattern: /NULL/i,
});
const INPATH = chevrotain.createToken({
  name: 'INPATH',
  pattern: /INPATH/i,
});
const DATA = chevrotain.createToken({
  name: 'DATA',
  pattern: /DATA/i,
});
const IMPORT = chevrotain.createToken({
  name: 'IMPORT',
  pattern: /IMPORT/i,
});
const EXPORT = chevrotain.createToken({
  name: 'EXPORT',
  pattern: /EXPORT/i,
});
const LOAD = chevrotain.createToken({
  name: 'LOAD',
  pattern: /LOAD/i,
});
const UNION = chevrotain.createToken({
  name: 'UNION',
  pattern: /UNION/i,
});
const SORT = chevrotain.createToken({
  name: 'SORT',
  pattern: /SORT/i,
});
const DISTRIBUTE = chevrotain.createToken({
  name: 'DISTRIBUTE',
  pattern: /DISTRIBUTE/i,
});
const CLUSTER = chevrotain.createToken({
  name: 'CLUSTER',
  pattern: /CLUSTER/i,
});
const USING = chevrotain.createToken({
  name: 'USING',
  pattern: /USING/i,
});
const TRANSFORM = chevrotain.createToken({
  name: 'TRANSFORM',
  pattern: /TRANSFORM/i,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/i,
});
const LOCAL = chevrotain.createToken({
  name: 'LOCAL',
  pattern: /LOCAL/i,
});
const DIRECTORY = chevrotain.createToken({
  name: 'DIRECTORY',
  pattern: /DIRECTORY/i,
});
const TO = chevrotain.createToken({
  name: 'TO',
  pattern: /TO/i,
});
const REPAIR = chevrotain.createToken({
  name: 'REPAIR',
  pattern: /REPAIR/i,
});
const MSCK = chevrotain.createToken({
  name: 'MSCK',
  pattern: /MSCK/i,
});
const SHOW = chevrotain.createToken({
  name: 'SHOW',
  pattern: /SHOW/i,
});
const FUNCTIONS = chevrotain.createToken({
  name: 'FUNCTIONS',
  pattern: /FUNCTIONS/i,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/i,
});
const REBUILD = chevrotain.createToken({
  name: 'REBUILD',
  pattern: /REBUILD/i,
});
const INDEXES = chevrotain.createToken({
  name: 'INDEXES',
  pattern: /INDEXES/i,
});
const INDEX = chevrotain.createToken({
  name: 'INDEX',
  pattern: /INDEX/i,
});
const COLUMNS = chevrotain.createToken({
  name: 'COLUMNS',
  pattern: /COLUMNS/i,
});
const COLUMN = chevrotain.createToken({
  name: 'COLUMN',
  pattern: /COLUMN/i,
});
const TABLES = chevrotain.createToken({
  name: 'TABLES',
  pattern: /TABLES/i,
});
const TABLE = chevrotain.createToken({
  name: 'TABLE',
  pattern: /TABLE/i,
});
const PARTITIONS = chevrotain.createToken({
  name: 'PARTITIONS',
  pattern: /PARTITIONS/i,
});
const PARTITION = chevrotain.createToken({
  name: 'PARTITION',
  pattern: /PARTITION/i,
});
const ON = chevrotain.createToken({
  name: 'ON',
  pattern: /ON/i,
});
const FULL = chevrotain.createToken({
  name: 'FULL',
  pattern: /FULL/i,
});
const RIGHT = chevrotain.createToken({
  name: 'RIGHT',
  pattern: /RIGHT/i,
});
const LEFT = chevrotain.createToken({
  name: 'LEFT',
  pattern: /LEFT/i,
});
const PRESERVE = chevrotain.createToken({
  name: 'PRESERVE',
  pattern: /PRESERVE/i,
});
const UNIQUEJOIN = chevrotain.createToken({
  name: 'UNIQUEJOIN',
  pattern: /UNIQUEJOIN/i,
});
const OUTER = chevrotain.createToken({
  name: 'OUTER',
  pattern: /OUTER/i,
});
const OUT = chevrotain.createToken({
  name: 'OUT',
  pattern: /OUT/i,
});
const OVERWRITE = chevrotain.createToken({
  name: 'OVERWRITE',
  pattern: /OVERWRITE/i,
});
const OVER = chevrotain.createToken({
  name: 'OVER',
  pattern: /OVER/i,
});
const INSERT = chevrotain.createToken({
  name: 'INSERT',
  pattern: /INSERT/i,
});
const DISTINCT = chevrotain.createToken({
  name: 'DISTINCT',
  pattern: /DISTINCT/i,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/i,
});
const FROM = chevrotain.createToken({
  name: 'FROM',
  pattern: /FROM/i,
});
const WHERE = chevrotain.createToken({
  name: 'WHERE',
  pattern: /WHERE/i,
});
const HAVING = chevrotain.createToken({
  name: 'HAVING',
  pattern: /HAVING/i,
});
const BY = chevrotain.createToken({
  name: 'BY',
  pattern: /BY/i,
});
const GROUP = chevrotain.createToken({
  name: 'GROUP',
  pattern: /GROUP/i,
});
const ORDER = chevrotain.createToken({
  name: 'ORDER',
  pattern: /ORDER/i,
});
const DESC = chevrotain.createToken({
  name: 'DESC',
  pattern: /DESC/i,
});
const ASC = chevrotain.createToken({
  name: 'ASC',
  pattern: /ASC/i,
});
const AS = chevrotain.createToken({
  name: 'AS',
  pattern: /AS/i,
});
const EXISTS = chevrotain.createToken({
  name: 'EXISTS',
  pattern: /EXISTS/i,
});
const IS = chevrotain.createToken({
  name: 'IS',
  pattern: /IS/i,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/i,
});
const JOIN = chevrotain.createToken({
  name: 'JOIN',
  pattern: /JOIN/i,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/i,
});
const LIKE = chevrotain.createToken({
  name: 'LIKE',
  pattern: /LIKE/i,
});
const NOT = chevrotain.createToken({
  name: 'NOT',
  pattern: /(NOT|\!)/i,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /OR/i,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /AND/i,
});
const ALL = chevrotain.createToken({
  name: 'ALL',
  pattern: /ALL/i,
});
const FALSE = chevrotain.createToken({
  name: 'FALSE',
  pattern: /FALSE/i,
});
const TRUE = chevrotain.createToken({
  name: 'TRUE',
  pattern: /TRUE/i,
});
const Identifier = chevrotain.createToken({
  name: 'Identifier',
  pattern: /(([A-Za-z]|[0-9])([A-Za-z]|[0-9]|_)*|\`([A-Za-z0-9_]|\+|\*|\?|\-|\.|\(|\)|\[|\]|\{|\}|\^|\||\$)+\`)/i,
});

export enum TokenEnum {
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
  VALUES = 'VALUES',
  VALUE = 'VALUE',
  EXCHANGE = 'EXCHANGE',
  INNER = 'INNER',
  ROLE = 'ROLE',
  USER = 'USER',
  PARTIALSCAN = 'PARTIALSCAN',
  NOSCAN = 'NOSCAN',
  TRUNCATE = 'TRUNCATE',
  SETS = 'SETS',
  GROUPING = 'GROUPING',
  MORE = 'MORE',
  LESS = 'LESS',
  CURRENT = 'CURRENT',
  FOLLOWING = 'FOLLOWING',
  PRECEDING = 'PRECEDING',
  UNBOUNDED = 'UNBOUNDED',
  WINDOW = 'WINDOW',
  DIRECTORIES = 'DIRECTORIES',
  CUBE = 'CUBE',
  ROLLUP = 'ROLLUP',
  SKEWED = 'SKEWED',
  CASCADE = 'CASCADE',
  RESTRICT = 'RESTRICT',
  UPDATE = 'UPDATE',
  SHOW_DATABASE = 'SHOW_DATABASE',
  CONCATENATE = 'CONCATENATE',
  OPTION = 'OPTION',
  USE = 'USE',
  STATISTICS = 'STATISTICS',
  COMPUTE = 'COMPUTE',
  UNARCHIVE = 'UNARCHIVE',
  ARCHIVE = 'ARCHIVE',
  TOUCH = 'TOUCH',
  LATERAL = 'LATERAL',
  SEMI = 'SEMI',
  RECORDWRITER = 'RECORDWRITER',
  RECORDREADER = 'RECORDREADER',
  TRIGGER = 'TRIGGER',
  CURSOR = 'CURSOR',
  CONTINUE = 'CONTINUE',
  CROSS = 'CROSS',
  BINARY = 'BINARY',
  BOTH = 'BOTH',
  BETWEEN = 'BETWEEN',
  BEFORE = 'BEFORE',
  ANALYZE = 'ANALYZE',
  RANGE = 'RANGE',
  PURGE = 'PURGE',
  READS = 'READS',
  WHILE = 'WHILE',
  UNSIGNED = 'UNSIGNED',
  PROCEDURE = 'PROCEDURE',
  EXCLUSIVE = 'EXCLUSIVE',
  SHARED = 'SHARED',
  UNLOCK = 'UNLOCK',
  LOCKS = 'LOCKS',
  LOCK = 'LOCK',
  UNDO = 'UNDO',
  SSL = 'SSL',
  REVOKE = 'REVOKE',
  GRANT = 'GRANT',
  SCHEMAS = 'SCHEMAS',
  SCHEMA = 'SCHEMA',
  MATERIALIZED = 'MATERIALIZED',
  DATABASES = 'DATABASES',
  DATABASE = 'DATABASE',
  VIEW = 'VIEW',
  INTERSECT = 'INTERSECT',
  FETCH = 'FETCH',
  KWMINUS = 'KWMINUS',
  KWPLUS = 'KWPLUS',
  DELETE = 'DELETE',
  LONG = 'LONG',
  UTCTIMESTAMP = 'UTCTIMESTAMP',
  UTC = 'UTC',
  CLUSTERSTATUS = 'CLUSTERSTATUS',
  HOLD_DDLTIME = 'HOLD_DDLTIME',
  STREAMTABLE = 'STREAMTABLE',
  MAPJOIN = 'MAPJOIN',
  ELSE = 'ELSE',
  THEN = 'THEN',
  WHEN = 'WHEN',
  CASE = 'CASE',
  ELEM_TYPE = 'ELEM_TYPE',
  VALUE_TYPE = 'VALUE_TYPE',
  IDXPROPERTIES = 'IDXPROPERTIES',
  TBLPROPERTIES = 'TBLPROPERTIES',
  UNSET = 'UNSET',
  SET = 'SET',
  DBPROPERTIES = 'DBPROPERTIES',
  SERDEPROPERTIES = 'SERDEPROPERTIES',
  DEFERRED = 'DEFERRED',
  WITH = 'WITH',
  SERDE = 'SERDE',
  LOGICAL = 'LOGICAL',
  DEPENDENCY = 'DEPENDENCY',
  PRETTY = 'PRETTY',
  FORMATTED = 'FORMATTED',
  EXTENDED = 'EXTENDED',
  END = 'END',
  EXPLAIN = 'EXPLAIN',
  MACRO = 'MACRO',
  TEMPORARY = 'TEMPORARY',
  REGEXP = 'REGEXP',
  RLIKE = 'RLIKE',
  REPLACE = 'REPLACE',
  ADD = 'ADD',
  CAST = 'CAST',
  PERCENT = 'PERCENT',
  TABLESAMPLE = 'TABLESAMPLE',
  LOCATION = 'LOCATION',
  NO_DROP = 'NO_DROP',
  CharSetName = 'CharSetName',
  READONLY = 'READONLY',
  READ = 'READ',
  DISABLE = 'DISABLE',
  ENABLE = 'ENABLE',
  OFFLINE = 'OFFLINE',
  OF = 'OF',
  OUTPUTDRIVER = 'OUTPUTDRIVER',
  INPUTDRIVER = 'INPUTDRIVER',
  OUTPUTFORMAT = 'OUTPUTFORMAT',
  INPUTFORMAT = 'INPUTFORMAT',
  ORCFILE = 'ORCFILE',
  RCFILE = 'RCFILE',
  TEXTFILE = 'TEXTFILE',
  SEQUENCEFILE = 'SEQUENCEFILE',
  FILEFORMAT = 'FILEFORMAT',
  STORED = 'STORED',
  LINES = 'LINES',
  KEY_TYPE = 'KEY_TYPE',
  KEYS = 'KEYS',
  ITEMS = 'ITEMS',
  COLLECTION = 'COLLECTION',
  ESCAPED = 'ESCAPED',
  TERMINATED = 'TERMINATED',
  FIELDS = 'FIELDS',
  DELIMITED = 'DELIMITED',
  LIMIT = 'LIMIT',
  FORMAT = 'FORMAT',
  ROWS = 'ROWS',
  ROW = 'ROW',
  BUCKETS = 'BUCKETS',
  BUCKET = 'BUCKET',
  INTO = 'INTO',
  SORTED = 'SORTED',
  CLUSTERED = 'CLUSTERED',
  PARTITIONED = 'PARTITIONED',
  REDUCE = 'REDUCE',
  UNIONTYPE = 'UNIONTYPE',
  MAP = 'MAP',
  STRUCT = 'STRUCT',
  ARRAY = 'ARRAY',
  STRING = 'STRING',
  DECIMAL = 'DECIMAL',
  TIMESTAMP = 'TIMESTAMP',
  DATETIME = 'DATETIME',
  DATE = 'DATE',
  DOUBLE = 'DOUBLE',
  FLOAT = 'FLOAT',
  BIGINT = 'BIGINT',
  SMALLINT = 'SMALLINT',
  TINYINT = 'TINYINT',
  INT = 'INT',
  BOOLEAN = 'BOOLEAN',
  COMMENT = 'COMMENT',
  PROTECTION = 'PROTECTION',
  IGNORE = 'IGNORE',
  RENAME = 'RENAME',
  DROP = 'DROP',
  DESCRIBE = 'DESCRIBE',
  AFTER = 'AFTER',
  FIRST = 'FIRST',
  CHANGE = 'CHANGE',
  ALTER = 'ALTER',
  EXTERNAL = 'EXTERNAL',
  CREATE = 'CREATE',
  NULL = 'NULL',
  INPATH = 'INPATH',
  DATA = 'DATA',
  IMPORT = 'IMPORT',
  EXPORT = 'EXPORT',
  LOAD = 'LOAD',
  UNION = 'UNION',
  SORT = 'SORT',
  DISTRIBUTE = 'DISTRIBUTE',
  CLUSTER = 'CLUSTER',
  USING = 'USING',
  TRANSFORM = 'TRANSFORM',
  FOR = 'FOR',
  LOCAL = 'LOCAL',
  DIRECTORY = 'DIRECTORY',
  TO = 'TO',
  REPAIR = 'REPAIR',
  MSCK = 'MSCK',
  SHOW = 'SHOW',
  FUNCTIONS = 'FUNCTIONS',
  FUNCTION = 'FUNCTION',
  REBUILD = 'REBUILD',
  INDEXES = 'INDEXES',
  INDEX = 'INDEX',
  COLUMNS = 'COLUMNS',
  COLUMN = 'COLUMN',
  TABLES = 'TABLES',
  TABLE = 'TABLE',
  PARTITIONS = 'PARTITIONS',
  PARTITION = 'PARTITION',
  ON = 'ON',
  FULL = 'FULL',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  PRESERVE = 'PRESERVE',
  UNIQUEJOIN = 'UNIQUEJOIN',
  OUTER = 'OUTER',
  OUT = 'OUT',
  OVERWRITE = 'OVERWRITE',
  OVER = 'OVER',
  INSERT = 'INSERT',
  DISTINCT = 'DISTINCT',
  SELECT = 'SELECT',
  FROM = 'FROM',
  WHERE = 'WHERE',
  HAVING = 'HAVING',
  BY = 'BY',
  GROUP = 'GROUP',
  ORDER = 'ORDER',
  DESC = 'DESC',
  ASC = 'ASC',
  AS = 'AS',
  EXISTS = 'EXISTS',
  IS = 'IS',
  IF = 'IF',
  JOIN = 'JOIN',
  IN = 'IN',
  LIKE = 'LIKE',
  NOT = 'NOT',
  OR = 'OR',
  AND = 'AND',
  ALL = 'ALL',
  FALSE = 'FALSE',
  TRUE = 'TRUE',
  Identifier = 'Identifier',
}

export const Tokens = {
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
  VALUES,
  VALUE,
  EXCHANGE,
  INNER,
  ROLE,
  USER,
  PARTIALSCAN,
  NOSCAN,
  TRUNCATE,
  SETS,
  GROUPING,
  MORE,
  LESS,
  CURRENT,
  FOLLOWING,
  PRECEDING,
  UNBOUNDED,
  WINDOW,
  DIRECTORIES,
  CUBE,
  ROLLUP,
  SKEWED,
  CASCADE,
  RESTRICT,
  UPDATE,
  SHOW_DATABASE,
  CONCATENATE,
  OPTION,
  USE,
  STATISTICS,
  COMPUTE,
  UNARCHIVE,
  ARCHIVE,
  TOUCH,
  LATERAL,
  SEMI,
  RECORDWRITER,
  RECORDREADER,
  TRIGGER,
  CURSOR,
  CONTINUE,
  CROSS,
  BINARY,
  BOTH,
  BETWEEN,
  BEFORE,
  ANALYZE,
  RANGE,
  PURGE,
  READS,
  WHILE,
  UNSIGNED,
  PROCEDURE,
  EXCLUSIVE,
  SHARED,
  UNLOCK,
  LOCKS,
  LOCK,
  UNDO,
  SSL,
  REVOKE,
  GRANT,
  SCHEMAS,
  SCHEMA,
  MATERIALIZED,
  DATABASES,
  DATABASE,
  VIEW,
  INTERSECT,
  FETCH,
  KWMINUS,
  KWPLUS,
  DELETE,
  LONG,
  UTCTIMESTAMP,
  UTC,
  CLUSTERSTATUS,
  HOLD_DDLTIME,
  STREAMTABLE,
  MAPJOIN,
  ELSE,
  THEN,
  WHEN,
  CASE,
  ELEM_TYPE,
  VALUE_TYPE,
  IDXPROPERTIES,
  TBLPROPERTIES,
  UNSET,
  SET,
  DBPROPERTIES,
  SERDEPROPERTIES,
  DEFERRED,
  WITH,
  SERDE,
  LOGICAL,
  DEPENDENCY,
  PRETTY,
  FORMATTED,
  EXTENDED,
  END,
  EXPLAIN,
  MACRO,
  TEMPORARY,
  REGEXP,
  RLIKE,
  REPLACE,
  ADD,
  CAST,
  PERCENT,
  TABLESAMPLE,
  LOCATION,
  NO_DROP,
  CharSetName,
  READONLY,
  READ,
  DISABLE,
  ENABLE,
  OFFLINE,
  OF,
  OUTPUTDRIVER,
  INPUTDRIVER,
  OUTPUTFORMAT,
  INPUTFORMAT,
  ORCFILE,
  RCFILE,
  TEXTFILE,
  SEQUENCEFILE,
  FILEFORMAT,
  STORED,
  LINES,
  KEY_TYPE,
  KEYS,
  ITEMS,
  COLLECTION,
  ESCAPED,
  TERMINATED,
  FIELDS,
  DELIMITED,
  LIMIT,
  FORMAT,
  ROWS,
  ROW,
  BUCKETS,
  BUCKET,
  INTO,
  SORTED,
  CLUSTERED,
  PARTITIONED,
  REDUCE,
  UNIONTYPE,
  MAP,
  STRUCT,
  ARRAY,
  STRING,
  DECIMAL,
  TIMESTAMP,
  DATETIME,
  DATE,
  DOUBLE,
  FLOAT,
  BIGINT,
  SMALLINT,
  TINYINT,
  INT,
  BOOLEAN,
  COMMENT,
  PROTECTION,
  IGNORE,
  RENAME,
  DROP,
  DESCRIBE,
  AFTER,
  FIRST,
  CHANGE,
  ALTER,
  EXTERNAL,
  CREATE,
  NULL,
  INPATH,
  DATA,
  IMPORT,
  EXPORT,
  LOAD,
  UNION,
  SORT,
  DISTRIBUTE,
  CLUSTER,
  USING,
  TRANSFORM,
  FOR,
  LOCAL,
  DIRECTORY,
  TO,
  REPAIR,
  MSCK,
  SHOW,
  FUNCTIONS,
  FUNCTION,
  REBUILD,
  INDEXES,
  INDEX,
  COLUMNS,
  COLUMN,
  TABLES,
  TABLE,
  PARTITIONS,
  PARTITION,
  ON,
  FULL,
  RIGHT,
  LEFT,
  PRESERVE,
  UNIQUEJOIN,
  OUTER,
  OUT,
  OVERWRITE,
  OVER,
  INSERT,
  DISTINCT,
  SELECT,
  FROM,
  WHERE,
  HAVING,
  BY,
  GROUP,
  ORDER,
  DESC,
  ASC,
  AS,
  EXISTS,
  IS,
  IF,
  JOIN,
  IN,
  LIKE,
  NOT,
  OR,
  AND,
  ALL,
  FALSE,
  TRUE,
  Identifier,
};

export const tokens = [
  WhiteSpace,
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
  VALUES,
  VALUE,
  EXCHANGE,
  INNER,
  ROLE,
  USER,
  PARTIALSCAN,
  NOSCAN,
  TRUNCATE,
  SETS,
  GROUPING,
  MORE,
  LESS,
  CURRENT,
  FOLLOWING,
  PRECEDING,
  UNBOUNDED,
  WINDOW,
  DIRECTORIES,
  CUBE,
  ROLLUP,
  SKEWED,
  CASCADE,
  RESTRICT,
  UPDATE,
  SHOW_DATABASE,
  CONCATENATE,
  OPTION,
  USE,
  STATISTICS,
  COMPUTE,
  UNARCHIVE,
  ARCHIVE,
  TOUCH,
  LATERAL,
  SEMI,
  RECORDWRITER,
  RECORDREADER,
  TRIGGER,
  CURSOR,
  CONTINUE,
  CROSS,
  BINARY,
  BOTH,
  BETWEEN,
  BEFORE,
  ANALYZE,
  RANGE,
  PURGE,
  READS,
  WHILE,
  UNSIGNED,
  PROCEDURE,
  EXCLUSIVE,
  SHARED,
  UNLOCK,
  LOCKS,
  LOCK,
  UNDO,
  SSL,
  REVOKE,
  GRANT,
  SCHEMAS,
  SCHEMA,
  MATERIALIZED,
  DATABASES,
  DATABASE,
  VIEW,
  INTERSECT,
  FETCH,
  KWMINUS,
  KWPLUS,
  DELETE,
  LONG,
  UTCTIMESTAMP,
  UTC,
  CLUSTERSTATUS,
  HOLD_DDLTIME,
  STREAMTABLE,
  MAPJOIN,
  ELSE,
  THEN,
  WHEN,
  CASE,
  ELEM_TYPE,
  VALUE_TYPE,
  IDXPROPERTIES,
  TBLPROPERTIES,
  UNSET,
  SET,
  DBPROPERTIES,
  SERDEPROPERTIES,
  DEFERRED,
  WITH,
  SERDE,
  LOGICAL,
  DEPENDENCY,
  PRETTY,
  FORMATTED,
  EXTENDED,
  END,
  EXPLAIN,
  MACRO,
  TEMPORARY,
  REGEXP,
  RLIKE,
  REPLACE,
  ADD,
  CAST,
  PERCENT,
  TABLESAMPLE,
  LOCATION,
  NO_DROP,
  CharSetName,
  READONLY,
  READ,
  DISABLE,
  ENABLE,
  OFFLINE,
  OF,
  OUTPUTDRIVER,
  INPUTDRIVER,
  OUTPUTFORMAT,
  INPUTFORMAT,
  ORCFILE,
  RCFILE,
  TEXTFILE,
  SEQUENCEFILE,
  FILEFORMAT,
  STORED,
  LINES,
  KEY_TYPE,
  KEYS,
  ITEMS,
  COLLECTION,
  ESCAPED,
  TERMINATED,
  FIELDS,
  DELIMITED,
  LIMIT,
  FORMAT,
  ROWS,
  ROW,
  BUCKETS,
  BUCKET,
  INTO,
  SORTED,
  CLUSTERED,
  PARTITIONED,
  REDUCE,
  UNIONTYPE,
  MAP,
  STRUCT,
  ARRAY,
  STRING,
  DECIMAL,
  TIMESTAMP,
  DATETIME,
  DATE,
  DOUBLE,
  FLOAT,
  BIGINT,
  SMALLINT,
  TINYINT,
  INT,
  BOOLEAN,
  COMMENT,
  PROTECTION,
  IGNORE,
  RENAME,
  DROP,
  DESCRIBE,
  AFTER,
  FIRST,
  CHANGE,
  ALTER,
  EXTERNAL,
  CREATE,
  NULL,
  INPATH,
  DATA,
  IMPORT,
  EXPORT,
  LOAD,
  UNION,
  SORT,
  DISTRIBUTE,
  CLUSTER,
  USING,
  TRANSFORM,
  FOR,
  LOCAL,
  DIRECTORY,
  TO,
  REPAIR,
  MSCK,
  SHOW,
  FUNCTIONS,
  FUNCTION,
  REBUILD,
  INDEXES,
  INDEX,
  COLUMNS,
  COLUMN,
  TABLES,
  TABLE,
  PARTITIONS,
  PARTITION,
  ON,
  FULL,
  RIGHT,
  LEFT,
  PRESERVE,
  UNIQUEJOIN,
  OUTER,
  OUT,
  OVERWRITE,
  OVER,
  INSERT,
  DISTINCT,
  SELECT,
  FROM,
  WHERE,
  HAVING,
  BY,
  GROUP,
  ORDER,
  DESC,
  ASC,
  AS,
  EXISTS,
  IS,
  IF,
  JOIN,
  IN,
  LIKE,
  NOT,
  OR,
  AND,
  ALL,
  FALSE,
  TRUE,
  Identifier,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
