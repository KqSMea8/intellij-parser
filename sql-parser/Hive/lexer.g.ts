import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const Identifier = chevrotain.createToken({
  name: 'Identifier',
  pattern: /[A-Za-z_$0-9*]+/i,
});
const WS = chevrotain.createToken({
  name: 'WS',
  pattern: /(\ |\r|\t|\n)/i,
  longer_alt: Identifier,
});
const Number = chevrotain.createToken({
  name: 'Number',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
  longer_alt: Identifier,
});
const ByteLengthLiteral = chevrotain.createToken({
  name: 'ByteLengthLiteral',
  pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
  longer_alt: Identifier,
});
const DecimalLiteral = chevrotain.createToken({
  name: 'DecimalLiteral',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
  longer_alt: Identifier,
});
const TinyintLiteral = chevrotain.createToken({
  name: 'TinyintLiteral',
  pattern: /([0-9])+Y/i,
  longer_alt: Identifier,
});
const SmallintLiteral = chevrotain.createToken({
  name: 'SmallintLiteral',
  pattern: /([0-9])+S/i,
  longer_alt: Identifier,
});
const BigintLiteral = chevrotain.createToken({
  name: 'BigintLiteral',
  pattern: /([0-9])+L/i,
  longer_alt: Identifier,
});
const CharSetLiteral = chevrotain.createToken({
  name: 'CharSetLiteral',
  pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
  longer_alt: Identifier,
});
const StringLiteral = chevrotain.createToken({
  name: 'StringLiteral',
  pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
  longer_alt: Identifier,
});
const DOLLAR = chevrotain.createToken({
  name: 'DOLLAR',
  pattern: /\$/i,
  longer_alt: Identifier,
});
const QUESTION = chevrotain.createToken({
  name: 'QUESTION',
  pattern: /\?/i,
  longer_alt: Identifier,
});
const BITWISEXOR = chevrotain.createToken({
  name: 'BITWISEXOR',
  pattern: /\^/i,
  longer_alt: Identifier,
});
const BITWISEOR = chevrotain.createToken({
  name: 'BITWISEOR',
  pattern: /\|/i,
  longer_alt: Identifier,
});
const TILDE = chevrotain.createToken({
  name: 'TILDE',
  pattern: /\~/i,
  longer_alt: Identifier,
});
const AMPERSAND = chevrotain.createToken({
  name: 'AMPERSAND',
  pattern: /\&/i,
  longer_alt: Identifier,
});
const DIV = chevrotain.createToken({
  name: 'DIV',
  pattern: /DIV/i,
  longer_alt: Identifier,
});
const MOD = chevrotain.createToken({
  name: 'MOD',
  pattern: /\%/i,
  longer_alt: Identifier,
});
const STAR = chevrotain.createToken({
  name: 'STAR',
  pattern: /\*/i,
  longer_alt: Identifier,
});
const MINUS = chevrotain.createToken({
  name: 'MINUS',
  pattern: /\-/i,
  longer_alt: Identifier,
});
const PLUS = chevrotain.createToken({
  name: 'PLUS',
  pattern: /\+/i,
  longer_alt: Identifier,
});
const DIVIDE = chevrotain.createToken({
  name: 'DIVIDE',
  pattern: /\//i,
  longer_alt: Identifier,
});
const GREATERTHAN = chevrotain.createToken({
  name: 'GREATERTHAN',
  pattern: /\>/i,
  longer_alt: Identifier,
});
const GREATERTHANOREQUALTO = chevrotain.createToken({
  name: 'GREATERTHANOREQUALTO',
  pattern: /\>\=/i,
  longer_alt: Identifier,
});
const LESSTHAN = chevrotain.createToken({
  name: 'LESSTHAN',
  pattern: /\</i,
  longer_alt: Identifier,
});
const LESSTHANOREQUALTO = chevrotain.createToken({
  name: 'LESSTHANOREQUALTO',
  pattern: /\<\=/i,
  longer_alt: Identifier,
});
const NOTEQUAL = chevrotain.createToken({
  name: 'NOTEQUAL',
  pattern: /(\<\>|\!\=)/i,
  longer_alt: Identifier,
});
const EQUAL_NS = chevrotain.createToken({
  name: 'EQUAL_NS',
  pattern: /\<\=\>/i,
  longer_alt: Identifier,
});
const EQUAL = chevrotain.createToken({
  name: 'EQUAL',
  pattern: /(\=|\=\=)/i,
  longer_alt: Identifier,
});
const RCURLY = chevrotain.createToken({
  name: 'RCURLY',
  pattern: /\}/i,
  longer_alt: Identifier,
});
const LCURLY = chevrotain.createToken({
  name: 'LCURLY',
  pattern: /\{/i,
  longer_alt: Identifier,
});
const RSQUARE = chevrotain.createToken({
  name: 'RSQUARE',
  pattern: /\]/i,
  longer_alt: Identifier,
});
const LSQUARE = chevrotain.createToken({
  name: 'LSQUARE',
  pattern: /\[/i,
  longer_alt: Identifier,
});
const RPAREN = chevrotain.createToken({
  name: 'RPAREN',
  pattern: /\)/i,
  longer_alt: Identifier,
});
const LPAREN = chevrotain.createToken({
  name: 'LPAREN',
  pattern: /\(/i,
  longer_alt: Identifier,
});
const SEMICOLON = chevrotain.createToken({
  name: 'SEMICOLON',
  pattern: /\;/i,
  longer_alt: Identifier,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/i,
  longer_alt: Identifier,
});
const COLON = chevrotain.createToken({
  name: 'COLON',
  pattern: /\:/i,
  longer_alt: Identifier,
});
const DOT = chevrotain.createToken({
  name: 'DOT',
  pattern: /\./i,
  longer_alt: Identifier,
});
const VALUES = chevrotain.createToken({
  name: 'VALUES',
  pattern: /VALUES/i,
  longer_alt: Identifier,
});
const VALUE = chevrotain.createToken({
  name: 'VALUE',
  pattern: /VALUE/i,
  longer_alt: Identifier,
});
const EXCHANGE = chevrotain.createToken({
  name: 'EXCHANGE',
  pattern: /EXCHANGE/i,
  longer_alt: Identifier,
});
const INNER = chevrotain.createToken({
  name: 'INNER',
  pattern: /INNER/i,
  longer_alt: Identifier,
});
const ROLE = chevrotain.createToken({
  name: 'ROLE',
  pattern: /ROLE/i,
  longer_alt: Identifier,
});
const USER = chevrotain.createToken({
  name: 'USER',
  pattern: /USER/i,
  longer_alt: Identifier,
});
const PARTIALSCAN = chevrotain.createToken({
  name: 'PARTIALSCAN',
  pattern: /PARTIALSCAN/i,
  longer_alt: Identifier,
});
const NOSCAN = chevrotain.createToken({
  name: 'NOSCAN',
  pattern: /NOSCAN/i,
  longer_alt: Identifier,
});
const TRUNCATE = chevrotain.createToken({
  name: 'TRUNCATE',
  pattern: /TRUNCATE/i,
  longer_alt: Identifier,
});
const SETS = chevrotain.createToken({
  name: 'SETS',
  pattern: /SETS/i,
  longer_alt: Identifier,
});
const GROUPING = chevrotain.createToken({
  name: 'GROUPING',
  pattern: /GROUPING/i,
  longer_alt: Identifier,
});
const MORE = chevrotain.createToken({
  name: 'MORE',
  pattern: /MORE/i,
  longer_alt: Identifier,
});
const LESS = chevrotain.createToken({
  name: 'LESS',
  pattern: /LESS/i,
  longer_alt: Identifier,
});
const CURRENT = chevrotain.createToken({
  name: 'CURRENT',
  pattern: /CURRENT/i,
  longer_alt: Identifier,
});
const FOLLOWING = chevrotain.createToken({
  name: 'FOLLOWING',
  pattern: /FOLLOWING/i,
  longer_alt: Identifier,
});
const PRECEDING = chevrotain.createToken({
  name: 'PRECEDING',
  pattern: /PRECEDING/i,
  longer_alt: Identifier,
});
const UNBOUNDED = chevrotain.createToken({
  name: 'UNBOUNDED',
  pattern: /UNBOUNDED/i,
  longer_alt: Identifier,
});
const WINDOW = chevrotain.createToken({
  name: 'WINDOW',
  pattern: /WINDOW/i,
  longer_alt: Identifier,
});
const DIRECTORIES = chevrotain.createToken({
  name: 'DIRECTORIES',
  pattern: /DIRECTORIES/i,
  longer_alt: Identifier,
});
const CUBE = chevrotain.createToken({
  name: 'CUBE',
  pattern: /CUBE/i,
  longer_alt: Identifier,
});
const ROLLUP = chevrotain.createToken({
  name: 'ROLLUP',
  pattern: /ROLLUP/i,
  longer_alt: Identifier,
});
const SKEWED = chevrotain.createToken({
  name: 'SKEWED',
  pattern: /SKEWED/i,
  longer_alt: Identifier,
});
const CASCADE = chevrotain.createToken({
  name: 'CASCADE',
  pattern: /CASCADE/i,
  longer_alt: Identifier,
});
const RESTRICT = chevrotain.createToken({
  name: 'RESTRICT',
  pattern: /RESTRICT/i,
  longer_alt: Identifier,
});
const UPDATE = chevrotain.createToken({
  name: 'UPDATE',
  pattern: /UPDATE/i,
  longer_alt: Identifier,
});
const SHOW_DATABASE = chevrotain.createToken({
  name: 'SHOW_DATABASE',
  pattern: /SHOW_DATABASE/i,
  longer_alt: Identifier,
});
const CONCATENATE = chevrotain.createToken({
  name: 'CONCATENATE',
  pattern: /CONCATENATE/i,
  longer_alt: Identifier,
});
const OPTION = chevrotain.createToken({
  name: 'OPTION',
  pattern: /OPTION/i,
  longer_alt: Identifier,
});
const USE = chevrotain.createToken({
  name: 'USE',
  pattern: /USE/i,
  longer_alt: Identifier,
});
const STATISTICS = chevrotain.createToken({
  name: 'STATISTICS',
  pattern: /STATISTICS/i,
  longer_alt: Identifier,
});
const COMPUTE = chevrotain.createToken({
  name: 'COMPUTE',
  pattern: /COMPUTE/i,
  longer_alt: Identifier,
});
const UNARCHIVE = chevrotain.createToken({
  name: 'UNARCHIVE',
  pattern: /UNARCHIVE/i,
  longer_alt: Identifier,
});
const ARCHIVE = chevrotain.createToken({
  name: 'ARCHIVE',
  pattern: /ARCHIVE/i,
  longer_alt: Identifier,
});
const TOUCH = chevrotain.createToken({
  name: 'TOUCH',
  pattern: /TOUCH/i,
  longer_alt: Identifier,
});
const LATERAL = chevrotain.createToken({
  name: 'LATERAL',
  pattern: /LATERAL/i,
  longer_alt: Identifier,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /SEMI/i,
  longer_alt: Identifier,
});
const RECORDWRITER = chevrotain.createToken({
  name: 'RECORDWRITER',
  pattern: /RECORDWRITER/i,
  longer_alt: Identifier,
});
const RECORDREADER = chevrotain.createToken({
  name: 'RECORDREADER',
  pattern: /RECORDREADER/i,
  longer_alt: Identifier,
});
const TRIGGER = chevrotain.createToken({
  name: 'TRIGGER',
  pattern: /TRIGGER/i,
  longer_alt: Identifier,
});
const CURSOR = chevrotain.createToken({
  name: 'CURSOR',
  pattern: /CURSOR/i,
  longer_alt: Identifier,
});
const CONTINUE = chevrotain.createToken({
  name: 'CONTINUE',
  pattern: /CONTINUE/i,
  longer_alt: Identifier,
});
const CROSS = chevrotain.createToken({
  name: 'CROSS',
  pattern: /CROSS/i,
  longer_alt: Identifier,
});
const BINARY = chevrotain.createToken({
  name: 'BINARY',
  pattern: /BINARY/i,
  longer_alt: Identifier,
});
const BOTH = chevrotain.createToken({
  name: 'BOTH',
  pattern: /BOTH/i,
  longer_alt: Identifier,
});
const BETWEEN = chevrotain.createToken({
  name: 'BETWEEN',
  pattern: /BETWEEN/i,
  longer_alt: Identifier,
});
const BEFORE = chevrotain.createToken({
  name: 'BEFORE',
  pattern: /BEFORE/i,
  longer_alt: Identifier,
});
const ANALYZE = chevrotain.createToken({
  name: 'ANALYZE',
  pattern: /ANALYZE/i,
  longer_alt: Identifier,
});
const RANGE = chevrotain.createToken({
  name: 'RANGE',
  pattern: /RANGE/i,
  longer_alt: Identifier,
});
const PURGE = chevrotain.createToken({
  name: 'PURGE',
  pattern: /PURGE/i,
  longer_alt: Identifier,
});
const READS = chevrotain.createToken({
  name: 'READS',
  pattern: /READS/i,
  longer_alt: Identifier,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/i,
  longer_alt: Identifier,
});
const UNSIGNED = chevrotain.createToken({
  name: 'UNSIGNED',
  pattern: /UNSIGNED/i,
  longer_alt: Identifier,
});
const PROCEDURE = chevrotain.createToken({
  name: 'PROCEDURE',
  pattern: /PROCEDURE/i,
  longer_alt: Identifier,
});
const EXCLUSIVE = chevrotain.createToken({
  name: 'EXCLUSIVE',
  pattern: /EXCLUSIVE/i,
  longer_alt: Identifier,
});
const SHARED = chevrotain.createToken({
  name: 'SHARED',
  pattern: /SHARED/i,
  longer_alt: Identifier,
});
const UNLOCK = chevrotain.createToken({
  name: 'UNLOCK',
  pattern: /UNLOCK/i,
  longer_alt: Identifier,
});
const LOCKS = chevrotain.createToken({
  name: 'LOCKS',
  pattern: /LOCKS/i,
  longer_alt: Identifier,
});
const LOCK = chevrotain.createToken({
  name: 'LOCK',
  pattern: /LOCK/i,
  longer_alt: Identifier,
});
const UNDO = chevrotain.createToken({
  name: 'UNDO',
  pattern: /UNDO/i,
  longer_alt: Identifier,
});
const SSL = chevrotain.createToken({
  name: 'SSL',
  pattern: /SSL/i,
  longer_alt: Identifier,
});
const REVOKE = chevrotain.createToken({
  name: 'REVOKE',
  pattern: /REVOKE/i,
  longer_alt: Identifier,
});
const GRANT = chevrotain.createToken({
  name: 'GRANT',
  pattern: /GRANT/i,
  longer_alt: Identifier,
});
const SCHEMAS = chevrotain.createToken({
  name: 'SCHEMAS',
  pattern: /SCHEMAS/i,
  longer_alt: Identifier,
});
const SCHEMA = chevrotain.createToken({
  name: 'SCHEMA',
  pattern: /SCHEMA/i,
  longer_alt: Identifier,
});
const MATERIALIZED = chevrotain.createToken({
  name: 'MATERIALIZED',
  pattern: /MATERIALIZED/i,
  longer_alt: Identifier,
});
const DATABASES = chevrotain.createToken({
  name: 'DATABASES',
  pattern: /DATABASES/i,
  longer_alt: Identifier,
});
const DATABASE = chevrotain.createToken({
  name: 'DATABASE',
  pattern: /DATABASE/i,
  longer_alt: Identifier,
});
const VIEW = chevrotain.createToken({
  name: 'VIEW',
  pattern: /VIEW/i,
  longer_alt: Identifier,
});
const INTERSECT = chevrotain.createToken({
  name: 'INTERSECT',
  pattern: /INTERSECT/i,
  longer_alt: Identifier,
});
const FETCH = chevrotain.createToken({
  name: 'FETCH',
  pattern: /FETCH/i,
  longer_alt: Identifier,
});
const KWMINUS = chevrotain.createToken({
  name: 'KWMINUS',
  pattern: /KWMINUS/i,
  longer_alt: Identifier,
});
const KWPLUS = chevrotain.createToken({
  name: 'KWPLUS',
  pattern: /KWPLUS/i,
  longer_alt: Identifier,
});
const DELETE = chevrotain.createToken({
  name: 'DELETE',
  pattern: /DELETE/i,
  longer_alt: Identifier,
});
const LONG = chevrotain.createToken({
  name: 'LONG',
  pattern: /LONG/i,
  longer_alt: Identifier,
});
const UTCTIMESTAMP = chevrotain.createToken({
  name: 'UTCTIMESTAMP',
  pattern: /UTC_TMESTAMP/i,
  longer_alt: Identifier,
});
const UTC = chevrotain.createToken({
  name: 'UTC',
  pattern: /UTC/i,
  longer_alt: Identifier,
});
const CLUSTERSTATUS = chevrotain.createToken({
  name: 'CLUSTERSTATUS',
  pattern: /CLUSTERSTATUS/i,
  longer_alt: Identifier,
});
const HOLD_DDLTIME = chevrotain.createToken({
  name: 'HOLD_DDLTIME',
  pattern: /HOLD_DDLTIME/i,
  longer_alt: Identifier,
});
const STREAMTABLE = chevrotain.createToken({
  name: 'STREAMTABLE',
  pattern: /STREAMTABLE/i,
  longer_alt: Identifier,
});
const MAPJOIN = chevrotain.createToken({
  name: 'MAPJOIN',
  pattern: /MAPJOIN/i,
  longer_alt: Identifier,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/i,
  longer_alt: Identifier,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/i,
  longer_alt: Identifier,
});
const WHEN = chevrotain.createToken({
  name: 'WHEN',
  pattern: /WHEN/i,
  longer_alt: Identifier,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/i,
  longer_alt: Identifier,
});
const ELEM_TYPE = chevrotain.createToken({
  name: 'ELEM_TYPE',
  pattern: /\$ELEM\$/i,
  longer_alt: Identifier,
});
const VALUE_TYPE = chevrotain.createToken({
  name: 'VALUE_TYPE',
  pattern: /\$VALUE\$/i,
  longer_alt: Identifier,
});
const IDXPROPERTIES = chevrotain.createToken({
  name: 'IDXPROPERTIES',
  pattern: /IDXPROPERTIES/i,
  longer_alt: Identifier,
});
const TBLPROPERTIES = chevrotain.createToken({
  name: 'TBLPROPERTIES',
  pattern: /TBLPROPERTIES/i,
  longer_alt: Identifier,
});
const UNSET = chevrotain.createToken({
  name: 'UNSET',
  pattern: /UNSET/i,
  longer_alt: Identifier,
});
const SET = chevrotain.createToken({
  name: 'SET',
  pattern: /SET/i,
  longer_alt: Identifier,
});
const DBPROPERTIES = chevrotain.createToken({
  name: 'DBPROPERTIES',
  pattern: /DBPROPERTIES/i,
  longer_alt: Identifier,
});
const SERDEPROPERTIES = chevrotain.createToken({
  name: 'SERDEPROPERTIES',
  pattern: /SERDEPROPERTIES/i,
  longer_alt: Identifier,
});
const DEFERRED = chevrotain.createToken({
  name: 'DEFERRED',
  pattern: /DEFERRED/i,
  longer_alt: Identifier,
});
const WITH = chevrotain.createToken({
  name: 'WITH',
  pattern: /WITH/i,
  longer_alt: Identifier,
});
const SERDE = chevrotain.createToken({
  name: 'SERDE',
  pattern: /SERDE/i,
  longer_alt: Identifier,
});
const LOGICAL = chevrotain.createToken({
  name: 'LOGICAL',
  pattern: /LOGICAL/i,
  longer_alt: Identifier,
});
const DEPENDENCY = chevrotain.createToken({
  name: 'DEPENDENCY',
  pattern: /DEPENDENCY/i,
  longer_alt: Identifier,
});
const PRETTY = chevrotain.createToken({
  name: 'PRETTY',
  pattern: /PRETTY/i,
  longer_alt: Identifier,
});
const FORMATTED = chevrotain.createToken({
  name: 'FORMATTED',
  pattern: /FORMATTED/i,
  longer_alt: Identifier,
});
const EXTENDED = chevrotain.createToken({
  name: 'EXTENDED',
  pattern: /EXTENDED/i,
  longer_alt: Identifier,
});
const END = chevrotain.createToken({
  name: 'END',
  pattern: /END/i,
  longer_alt: Identifier,
});
const EXPLAIN = chevrotain.createToken({
  name: 'EXPLAIN',
  pattern: /EXPLAIN/i,
  longer_alt: Identifier,
});
const MACRO = chevrotain.createToken({
  name: 'MACRO',
  pattern: /MACRO/i,
  longer_alt: Identifier,
});
const TEMPORARY = chevrotain.createToken({
  name: 'TEMPORARY',
  pattern: /TEMPORARY/i,
  longer_alt: Identifier,
});
const REGEXP = chevrotain.createToken({
  name: 'REGEXP',
  pattern: /REGEXP/i,
  longer_alt: Identifier,
});
const RLIKE = chevrotain.createToken({
  name: 'RLIKE',
  pattern: /RLIKE/i,
  longer_alt: Identifier,
});
const REPLACE = chevrotain.createToken({
  name: 'REPLACE',
  pattern: /REPLACE/i,
  longer_alt: Identifier,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /ADD/i,
  longer_alt: Identifier,
});
const CAST = chevrotain.createToken({
  name: 'CAST',
  pattern: /CAST/i,
  longer_alt: Identifier,
});
const PERCENT = chevrotain.createToken({
  name: 'PERCENT',
  pattern: /PERCENT/i,
  longer_alt: Identifier,
});
const TABLESAMPLE = chevrotain.createToken({
  name: 'TABLESAMPLE',
  pattern: /TABLESAMPLE/i,
  longer_alt: Identifier,
});
const LOCATION = chevrotain.createToken({
  name: 'LOCATION',
  pattern: /LOCATION/i,
  longer_alt: Identifier,
});
const NO_DROP = chevrotain.createToken({
  name: 'NO_DROP',
  pattern: /NO_DROP/i,
  longer_alt: Identifier,
});
const CharSetName = chevrotain.createToken({
  name: 'CharSetName',
  pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
  longer_alt: Identifier,
});
const READONLY = chevrotain.createToken({
  name: 'READONLY',
  pattern: /READONLY/i,
  longer_alt: Identifier,
});
const READ = chevrotain.createToken({
  name: 'READ',
  pattern: /READ/i,
  longer_alt: Identifier,
});
const DISABLE = chevrotain.createToken({
  name: 'DISABLE',
  pattern: /DISABLE/i,
  longer_alt: Identifier,
});
const ENABLE = chevrotain.createToken({
  name: 'ENABLE',
  pattern: /ENABLE/i,
  longer_alt: Identifier,
});
const OFFLINE = chevrotain.createToken({
  name: 'OFFLINE',
  pattern: /OFFLINE/i,
  longer_alt: Identifier,
});
const OF = chevrotain.createToken({
  name: 'OF',
  pattern: /OF/i,
  longer_alt: Identifier,
});
const OUTPUTDRIVER = chevrotain.createToken({
  name: 'OUTPUTDRIVER',
  pattern: /OUTPUTDRIVER/i,
  longer_alt: Identifier,
});
const INPUTDRIVER = chevrotain.createToken({
  name: 'INPUTDRIVER',
  pattern: /INPUTDRIVER/i,
  longer_alt: Identifier,
});
const OUTPUTFORMAT = chevrotain.createToken({
  name: 'OUTPUTFORMAT',
  pattern: /OUTPUTFORMAT/i,
  longer_alt: Identifier,
});
const INPUTFORMAT = chevrotain.createToken({
  name: 'INPUTFORMAT',
  pattern: /INPUTFORMAT/i,
  longer_alt: Identifier,
});
const ORCFILE = chevrotain.createToken({
  name: 'ORCFILE',
  pattern: /ORC/i,
  longer_alt: Identifier,
});
const RCFILE = chevrotain.createToken({
  name: 'RCFILE',
  pattern: /RCFILE/i,
  longer_alt: Identifier,
});
const TEXTFILE = chevrotain.createToken({
  name: 'TEXTFILE',
  pattern: /TEXTFILE/i,
  longer_alt: Identifier,
});
const SEQUENCEFILE = chevrotain.createToken({
  name: 'SEQUENCEFILE',
  pattern: /SEQUENCEFILE/i,
  longer_alt: Identifier,
});
const FILEFORMAT = chevrotain.createToken({
  name: 'FILEFORMAT',
  pattern: /FILEFORMAT/i,
  longer_alt: Identifier,
});
const STORED = chevrotain.createToken({
  name: 'STORED',
  pattern: /STORED/i,
  longer_alt: Identifier,
});
const LINES = chevrotain.createToken({
  name: 'LINES',
  pattern: /LINES/i,
  longer_alt: Identifier,
});
const KEY_TYPE = chevrotain.createToken({
  name: 'KEY_TYPE',
  pattern: /\$KEY\$/i,
  longer_alt: Identifier,
});
const KEYS = chevrotain.createToken({
  name: 'KEYS',
  pattern: /KEYS/i,
  longer_alt: Identifier,
});
const ITEMS = chevrotain.createToken({
  name: 'ITEMS',
  pattern: /ITEMS/i,
  longer_alt: Identifier,
});
const COLLECTION = chevrotain.createToken({
  name: 'COLLECTION',
  pattern: /COLLECTION/i,
  longer_alt: Identifier,
});
const ESCAPED = chevrotain.createToken({
  name: 'ESCAPED',
  pattern: /ESCAPED/i,
  longer_alt: Identifier,
});
const TERMINATED = chevrotain.createToken({
  name: 'TERMINATED',
  pattern: /TERMINATED/i,
  longer_alt: Identifier,
});
const FIELDS = chevrotain.createToken({
  name: 'FIELDS',
  pattern: /FIELDS/i,
  longer_alt: Identifier,
});
const DELIMITED = chevrotain.createToken({
  name: 'DELIMITED',
  pattern: /DELIMITED/i,
  longer_alt: Identifier,
});
const LIMIT = chevrotain.createToken({
  name: 'LIMIT',
  pattern: /LIMIT/i,
  longer_alt: Identifier,
});
const FORMAT = chevrotain.createToken({
  name: 'FORMAT',
  pattern: /FORMAT/i,
  longer_alt: Identifier,
});
const ROWS = chevrotain.createToken({
  name: 'ROWS',
  pattern: /ROWS/i,
  longer_alt: Identifier,
});
const ROW = chevrotain.createToken({
  name: 'ROW',
  pattern: /ROW/i,
  longer_alt: Identifier,
});
const BUCKETS = chevrotain.createToken({
  name: 'BUCKETS',
  pattern: /BUCKETS/i,
  longer_alt: Identifier,
});
const BUCKET = chevrotain.createToken({
  name: 'BUCKET',
  pattern: /BUCKET/i,
  longer_alt: Identifier,
});
const INTO = chevrotain.createToken({
  name: 'INTO',
  pattern: /INTO/i,
  longer_alt: Identifier,
});
const SORTED = chevrotain.createToken({
  name: 'SORTED',
  pattern: /SORTED/i,
  longer_alt: Identifier,
});
const CLUSTERED = chevrotain.createToken({
  name: 'CLUSTERED',
  pattern: /CLUSTERED/i,
  longer_alt: Identifier,
});
const PARTITIONED = chevrotain.createToken({
  name: 'PARTITIONED',
  pattern: /PARTITIONED/i,
  longer_alt: Identifier,
});
const REDUCE = chevrotain.createToken({
  name: 'REDUCE',
  pattern: /REDUCE/i,
  longer_alt: Identifier,
});
const UNIONTYPE = chevrotain.createToken({
  name: 'UNIONTYPE',
  pattern: /UNIONTYPE/i,
  longer_alt: Identifier,
});
const MAP = chevrotain.createToken({
  name: 'MAP',
  pattern: /MAP/i,
  longer_alt: Identifier,
});
const STRUCT = chevrotain.createToken({
  name: 'STRUCT',
  pattern: /STRUCT/i,
  longer_alt: Identifier,
});
const ARRAY = chevrotain.createToken({
  name: 'ARRAY',
  pattern: /ARRAY/i,
  longer_alt: Identifier,
});
const STRING = chevrotain.createToken({
  name: 'STRING',
  pattern: /STRING/i,
  longer_alt: Identifier,
});
const DECIMAL = chevrotain.createToken({
  name: 'DECIMAL',
  pattern: /DECIMAL/i,
  longer_alt: Identifier,
});
const TIMESTAMP = chevrotain.createToken({
  name: 'TIMESTAMP',
  pattern: /TIMESTAMP/i,
  longer_alt: Identifier,
});
const DATETIME = chevrotain.createToken({
  name: 'DATETIME',
  pattern: /DATETIME/i,
  longer_alt: Identifier,
});
const DATE = chevrotain.createToken({
  name: 'DATE',
  pattern: /DATE/i,
  longer_alt: Identifier,
});
const DOUBLE = chevrotain.createToken({
  name: 'DOUBLE',
  pattern: /DOUBLE/i,
  longer_alt: Identifier,
});
const FLOAT = chevrotain.createToken({
  name: 'FLOAT',
  pattern: /FLOAT/i,
  longer_alt: Identifier,
});
const BIGINT = chevrotain.createToken({
  name: 'BIGINT',
  pattern: /BIGINT/i,
  longer_alt: Identifier,
});
const SMALLINT = chevrotain.createToken({
  name: 'SMALLINT',
  pattern: /SMALLINT/i,
  longer_alt: Identifier,
});
const TINYINT = chevrotain.createToken({
  name: 'TINYINT',
  pattern: /TINYINT/i,
  longer_alt: Identifier,
});
const INT = chevrotain.createToken({
  name: 'INT',
  pattern: /INT/i,
  longer_alt: Identifier,
});
const BOOLEAN = chevrotain.createToken({
  name: 'BOOLEAN',
  pattern: /BOOLEAN/i,
  longer_alt: Identifier,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /KWCOMMENT/i,
  longer_alt: Identifier,
});
const PROTECTION = chevrotain.createToken({
  name: 'PROTECTION',
  pattern: /PROTECTION/i,
  longer_alt: Identifier,
});
const IGNORE = chevrotain.createToken({
  name: 'IGNORE',
  pattern: /IGNORE/i,
  longer_alt: Identifier,
});
const RENAME = chevrotain.createToken({
  name: 'RENAME',
  pattern: /RENAME/i,
  longer_alt: Identifier,
});
const DROP = chevrotain.createToken({
  name: 'DROP',
  pattern: /DROP/i,
  longer_alt: Identifier,
});
const DESCRIBE = chevrotain.createToken({
  name: 'DESCRIBE',
  pattern: /DESCRIBE/i,
  longer_alt: Identifier,
});
const AFTER = chevrotain.createToken({
  name: 'AFTER',
  pattern: /AFTER/i,
  longer_alt: Identifier,
});
const FIRST = chevrotain.createToken({
  name: 'FIRST',
  pattern: /FIRST/i,
  longer_alt: Identifier,
});
const CHANGE = chevrotain.createToken({
  name: 'CHANGE',
  pattern: /CHANGE/i,
  longer_alt: Identifier,
});
const ALTER = chevrotain.createToken({
  name: 'ALTER',
  pattern: /ALTER/i,
  longer_alt: Identifier,
});
const EXTERNAL = chevrotain.createToken({
  name: 'EXTERNAL',
  pattern: /EXTERNAL/i,
  longer_alt: Identifier,
});
const CREATE = chevrotain.createToken({
  name: 'CREATE',
  pattern: /CREATE/i,
  longer_alt: Identifier,
});
const NULL = chevrotain.createToken({
  name: 'NULL',
  pattern: /NULL/i,
  longer_alt: Identifier,
});
const INPATH = chevrotain.createToken({
  name: 'INPATH',
  pattern: /INPATH/i,
  longer_alt: Identifier,
});
const DATA = chevrotain.createToken({
  name: 'DATA',
  pattern: /DATA/i,
  longer_alt: Identifier,
});
const IMPORT = chevrotain.createToken({
  name: 'IMPORT',
  pattern: /IMPORT/i,
  longer_alt: Identifier,
});
const EXPORT = chevrotain.createToken({
  name: 'EXPORT',
  pattern: /EXPORT/i,
  longer_alt: Identifier,
});
const LOAD = chevrotain.createToken({
  name: 'LOAD',
  pattern: /LOAD/i,
  longer_alt: Identifier,
});
const UNION = chevrotain.createToken({
  name: 'UNION',
  pattern: /UNION/i,
  longer_alt: Identifier,
});
const SORT = chevrotain.createToken({
  name: 'SORT',
  pattern: /SORT/i,
  longer_alt: Identifier,
});
const DISTRIBUTE = chevrotain.createToken({
  name: 'DISTRIBUTE',
  pattern: /DISTRIBUTE/i,
  longer_alt: Identifier,
});
const CLUSTER = chevrotain.createToken({
  name: 'CLUSTER',
  pattern: /CLUSTER/i,
  longer_alt: Identifier,
});
const USING = chevrotain.createToken({
  name: 'USING',
  pattern: /USING/i,
  longer_alt: Identifier,
});
const TRANSFORM = chevrotain.createToken({
  name: 'TRANSFORM',
  pattern: /TRANSFORM/i,
  longer_alt: Identifier,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/i,
  longer_alt: Identifier,
});
const LOCAL = chevrotain.createToken({
  name: 'LOCAL',
  pattern: /LOCAL/i,
  longer_alt: Identifier,
});
const DIRECTORY = chevrotain.createToken({
  name: 'DIRECTORY',
  pattern: /DIRECTORY/i,
  longer_alt: Identifier,
});
const TO = chevrotain.createToken({
  name: 'TO',
  pattern: /TO/i,
  longer_alt: Identifier,
});
const REPAIR = chevrotain.createToken({
  name: 'REPAIR',
  pattern: /REPAIR/i,
  longer_alt: Identifier,
});
const MSCK = chevrotain.createToken({
  name: 'MSCK',
  pattern: /MSCK/i,
  longer_alt: Identifier,
});
const SHOW = chevrotain.createToken({
  name: 'SHOW',
  pattern: /SHOW/i,
  longer_alt: Identifier,
});
const FUNCTIONS = chevrotain.createToken({
  name: 'FUNCTIONS',
  pattern: /FUNCTIONS/i,
  longer_alt: Identifier,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/i,
  longer_alt: Identifier,
});
const REBUILD = chevrotain.createToken({
  name: 'REBUILD',
  pattern: /REBUILD/i,
  longer_alt: Identifier,
});
const INDEXES = chevrotain.createToken({
  name: 'INDEXES',
  pattern: /INDEXES/i,
  longer_alt: Identifier,
});
const INDEX = chevrotain.createToken({
  name: 'INDEX',
  pattern: /INDEX/i,
  longer_alt: Identifier,
});
const COLUMNS = chevrotain.createToken({
  name: 'COLUMNS',
  pattern: /COLUMNS/i,
  longer_alt: Identifier,
});
const COLUMN = chevrotain.createToken({
  name: 'COLUMN',
  pattern: /COLUMN/i,
  longer_alt: Identifier,
});
const TABLES = chevrotain.createToken({
  name: 'TABLES',
  pattern: /TABLES/i,
  longer_alt: Identifier,
});
const TABLE = chevrotain.createToken({
  name: 'TABLE',
  pattern: /TABLE/i,
  longer_alt: Identifier,
});
const PARTITIONS = chevrotain.createToken({
  name: 'PARTITIONS',
  pattern: /PARTITIONS/i,
  longer_alt: Identifier,
});
const PARTITION = chevrotain.createToken({
  name: 'PARTITION',
  pattern: /PARTITION/i,
  longer_alt: Identifier,
});
const ON = chevrotain.createToken({
  name: 'ON',
  pattern: /ON/i,
  longer_alt: Identifier,
});
const FULL = chevrotain.createToken({
  name: 'FULL',
  pattern: /FULL/i,
  longer_alt: Identifier,
});
const RIGHT = chevrotain.createToken({
  name: 'RIGHT',
  pattern: /RIGHT/i,
  longer_alt: Identifier,
});
const LEFT = chevrotain.createToken({
  name: 'LEFT',
  pattern: /LEFT/i,
  longer_alt: Identifier,
});
const PRESERVE = chevrotain.createToken({
  name: 'PRESERVE',
  pattern: /PRESERVE/i,
  longer_alt: Identifier,
});
const UNIQUEJOIN = chevrotain.createToken({
  name: 'UNIQUEJOIN',
  pattern: /UNIQUEJOIN/i,
  longer_alt: Identifier,
});
const OUTER = chevrotain.createToken({
  name: 'OUTER',
  pattern: /OUTER/i,
  longer_alt: Identifier,
});
const OUT = chevrotain.createToken({
  name: 'OUT',
  pattern: /OUT/i,
  longer_alt: Identifier,
});
const OVERWRITE = chevrotain.createToken({
  name: 'OVERWRITE',
  pattern: /OVERWRITE/i,
  longer_alt: Identifier,
});
const OVER = chevrotain.createToken({
  name: 'OVER',
  pattern: /OVER/i,
  longer_alt: Identifier,
});
const INSERT = chevrotain.createToken({
  name: 'INSERT',
  pattern: /INSERT/i,
  longer_alt: Identifier,
});
const DISTINCT = chevrotain.createToken({
  name: 'DISTINCT',
  pattern: /DISTINCT/i,
  longer_alt: Identifier,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/i,
  longer_alt: Identifier,
});
const FROM = chevrotain.createToken({
  name: 'FROM',
  pattern: /FROM/i,
  longer_alt: Identifier,
});
const WHERE = chevrotain.createToken({
  name: 'WHERE',
  pattern: /WHERE/i,
  longer_alt: Identifier,
});
const HAVING = chevrotain.createToken({
  name: 'HAVING',
  pattern: /HAVING/i,
  longer_alt: Identifier,
});
const BY = chevrotain.createToken({
  name: 'BY',
  pattern: /BY/i,
  longer_alt: Identifier,
});
const GROUP = chevrotain.createToken({
  name: 'GROUP',
  pattern: /GROUP/i,
  longer_alt: Identifier,
});
const ORDER = chevrotain.createToken({
  name: 'ORDER',
  pattern: /ORDER/i,
  longer_alt: Identifier,
});
const DESC = chevrotain.createToken({
  name: 'DESC',
  pattern: /DESC/i,
  longer_alt: Identifier,
});
const ASC = chevrotain.createToken({
  name: 'ASC',
  pattern: /ASC/i,
  longer_alt: Identifier,
});
const AS = chevrotain.createToken({
  name: 'AS',
  pattern: /AS/i,
  longer_alt: Identifier,
});
const EXISTS = chevrotain.createToken({
  name: 'EXISTS',
  pattern: /EXISTS/i,
  longer_alt: Identifier,
});
const IS = chevrotain.createToken({
  name: 'IS',
  pattern: /IS/i,
  longer_alt: Identifier,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/i,
  longer_alt: Identifier,
});
const JOIN = chevrotain.createToken({
  name: 'JOIN',
  pattern: /JOIN/i,
  longer_alt: Identifier,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/i,
  longer_alt: Identifier,
});
const LIKE = chevrotain.createToken({
  name: 'LIKE',
  pattern: /LIKE/i,
  longer_alt: Identifier,
});
const NOT = chevrotain.createToken({
  name: 'NOT',
  pattern: /(NOT|\!)/i,
  longer_alt: Identifier,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /OR/i,
  longer_alt: Identifier,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /AND/i,
  longer_alt: Identifier,
});
const ALL = chevrotain.createToken({
  name: 'ALL',
  pattern: /ALL/i,
  longer_alt: Identifier,
});
const FALSE = chevrotain.createToken({
  name: 'FALSE',
  pattern: /FALSE/i,
  longer_alt: Identifier,
});
const TRUE = chevrotain.createToken({
  name: 'TRUE',
  pattern: /TRUE/i,
  longer_alt: Identifier,
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
