import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const ID = chevrotain.createToken({
  name: 'ID',
  pattern: /[A-Za-z_$0-9*]+/i,
});
const WS = chevrotain.createToken({
  name: 'WS',
  pattern: /(\ |\r|\t|\n)/i,
  longer_alt: ID,
});
const ByteLengthLiteral = chevrotain.createToken({
  name: 'ByteLengthLiteral',
  pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
  longer_alt: ID,
});
const DecimalLiteral = chevrotain.createToken({
  name: 'DecimalLiteral',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
  longer_alt: ID,
});
const TinyintLiteral = chevrotain.createToken({
  name: 'TinyintLiteral',
  pattern: /([0-9])+Y/i,
  longer_alt: ID,
});
const SmallintLiteral = chevrotain.createToken({
  name: 'SmallintLiteral',
  pattern: /([0-9])+S/i,
  longer_alt: ID,
});
const BigintLiteral = chevrotain.createToken({
  name: 'BigintLiteral',
  pattern: /([0-9])+L/i,
  longer_alt: ID,
});
const CharSetLiteral = chevrotain.createToken({
  name: 'CharSetLiteral',
  pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
  longer_alt: ID,
});
const STRING_LITERAL = chevrotain.createToken({
  name: 'STRING_LITERAL',
  pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
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
const ONE_DECIMAL = chevrotain.createToken({
  name: 'ONE_DECIMAL',
  pattern: /1/i,
  longer_alt: ID,
});
const ZERO_DECIMAL = chevrotain.createToken({
  name: 'ZERO_DECIMAL',
  pattern: /0/i,
  longer_alt: ID,
});
const Number = chevrotain.createToken({
  name: 'Number',
  pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
  longer_alt: ID,
});
const LIFECYCLE = chevrotain.createToken({
  name: 'LIFECYCLE',
  pattern: /LIFECYCLE/i,
  longer_alt: ID,
});
const TABLESPACE = chevrotain.createToken({
  name: 'TABLESPACE',
  pattern: /TABLESPACE/i,
  longer_alt: ID,
});
const STATS_PERSISTENT = chevrotain.createToken({
  name: 'STATS_PERSISTENT',
  pattern: /STATS_PERSISTENT/i,
  longer_alt: ID,
});
const STATS_AUTO_RECALC = chevrotain.createToken({
  name: 'STATS_AUTO_RECALC',
  pattern: /STATS_AUTO_RECALC/i,
  longer_alt: ID,
});
const COMPACT = chevrotain.createToken({
  name: 'COMPACT',
  pattern: /COMPACT/i,
  longer_alt: ID,
});
const REDUNDANT = chevrotain.createToken({
  name: 'REDUNDANT',
  pattern: /REDUNDANT/i,
  longer_alt: ID,
});
const COMPRESSED = chevrotain.createToken({
  name: 'COMPRESSED',
  pattern: /COMPRESSED/i,
  longer_alt: ID,
});
const ROW_FORMAT = chevrotain.createToken({
  name: 'ROW_FORMAT',
  pattern: /ROW_FORMAT/i,
  longer_alt: ID,
});
const PASSWORD = chevrotain.createToken({
  name: 'PASSWORD',
  pattern: /PASSWORD/i,
  longer_alt: ID,
});
const PACK_KEYS = chevrotain.createToken({
  name: 'PACK_KEYS',
  pattern: /PACK_KEYS/i,
  longer_alt: ID,
});
const MIN_ROWS = chevrotain.createToken({
  name: 'MIN_ROWS',
  pattern: /MIN_ROWS/i,
  longer_alt: ID,
});
const MAX_ROWS = chevrotain.createToken({
  name: 'MAX_ROWS',
  pattern: /MAX_ROWS/i,
  longer_alt: ID,
});
const KEY_BLOCK_SIZE = chevrotain.createToken({
  name: 'KEY_BLOCK_SIZE',
  pattern: /KEY_BLOCK_SIZE/i,
  longer_alt: ID,
});
const LAST = chevrotain.createToken({
  name: 'LAST',
  pattern: /LAST/i,
  longer_alt: ID,
});
const INSERT_METHOD = chevrotain.createToken({
  name: 'INSERT_METHOD',
  pattern: /INSERT_METHOD/i,
  longer_alt: ID,
});
const ENCRYPTION = chevrotain.createToken({
  name: 'ENCRYPTION',
  pattern: /ENCRYPTION/i,
  longer_alt: ID,
});
const DELAY_KEY_WRITE = chevrotain.createToken({
  name: 'DELAY_KEY_WRITE',
  pattern: /DELAY_KEY_WRITE/i,
  longer_alt: ID,
});
const CONNECTION = chevrotain.createToken({
  name: 'CONNECTION',
  pattern: /CONNECTION/i,
  longer_alt: ID,
});
const COMPRESSION = chevrotain.createToken({
  name: 'COMPRESSION',
  pattern: /COMPRESSION/i,
  longer_alt: ID,
});
const AVG_ROW_LENGTH = chevrotain.createToken({
  name: 'AVG_ROW_LENGTH',
  pattern: /AVG_ROW_LENGTH/i,
  longer_alt: ID,
});
const ENGINE = chevrotain.createToken({
  name: 'ENGINE',
  pattern: /ENGINE/i,
  longer_alt: ID,
});
const CHECKSUM = chevrotain.createToken({
  name: 'CHECKSUM',
  pattern: /CHECKSUM/i,
  longer_alt: ID,
});
const CHARSET = chevrotain.createToken({
  name: 'CHARSET',
  pattern: /CHARSET/i,
  longer_alt: ID,
});
const PERFOMANCE_SCHEMA = chevrotain.createToken({
  name: 'PERFOMANCE_SCHEMA',
  pattern: /PERFOMANCE_SCHEMA/i,
  longer_alt: ID,
});
const NDBCLUSTER = chevrotain.createToken({
  name: 'NDBCLUSTER',
  pattern: /NDBCLUSTER/i,
  longer_alt: ID,
});
const NDB = chevrotain.createToken({
  name: 'NDB',
  pattern: /NDB/i,
  longer_alt: ID,
});
const MRG_MYISAM = chevrotain.createToken({
  name: 'MRG_MYISAM',
  pattern: /MRG_MYISAM/i,
  longer_alt: ID,
});
const MYISAM = chevrotain.createToken({
  name: 'MYISAM',
  pattern: /MYISAM/i,
  longer_alt: ID,
});
const INNODB = chevrotain.createToken({
  name: 'INNODB',
  pattern: /INNODB/i,
  longer_alt: ID,
});
const FEDERATED = chevrotain.createToken({
  name: 'FEDERATED',
  pattern: /FEDERATED/i,
  longer_alt: ID,
});
const CSV = chevrotain.createToken({
  name: 'CSV',
  pattern: /CSV/i,
  longer_alt: ID,
});
const BLACKHOLE = chevrotain.createToken({
  name: 'BLACKHOLE',
  pattern: /BLACKHOLE/i,
  longer_alt: ID,
});
const MULTIPOLYGON = chevrotain.createToken({
  name: 'MULTIPOLYGON',
  pattern: /MULTIPOLYGON/i,
  longer_alt: ID,
});
const POLYGON = chevrotain.createToken({
  name: 'POLYGON',
  pattern: /POLYGON/i,
  longer_alt: ID,
});
const MULTIPOINT = chevrotain.createToken({
  name: 'MULTIPOINT',
  pattern: /MULTIPOINT/i,
  longer_alt: ID,
});
const POINT = chevrotain.createToken({
  name: 'POINT',
  pattern: /POINT/i,
  longer_alt: ID,
});
const MULTILINESTRING = chevrotain.createToken({
  name: 'MULTILINESTRING',
  pattern: /MULTILINESTRING/i,
  longer_alt: ID,
});
const LINESTRING = chevrotain.createToken({
  name: 'LINESTRING',
  pattern: /LINESTRING/i,
  longer_alt: ID,
});
const GEOMETRYCOLLECTION = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTION',
  pattern: /GEOMETRYCOLLECTION/i,
  longer_alt: ID,
});
const ENUM = chevrotain.createToken({
  name: 'ENUM',
  pattern: /ENUM/i,
  longer_alt: ID,
});
const VARBINARY = chevrotain.createToken({
  name: 'VARBINARY',
  pattern: /VARBINARY/i,
  longer_alt: ID,
});
const LONGBLOB = chevrotain.createToken({
  name: 'LONGBLOB',
  pattern: /LONGBLOB/i,
  longer_alt: ID,
});
const MEDIUMBLOB = chevrotain.createToken({
  name: 'MEDIUMBLOB',
  pattern: /MEDIUMBLOB/i,
  longer_alt: ID,
});
const TINYBLOB = chevrotain.createToken({
  name: 'TINYBLOB',
  pattern: /TINYBLOB/i,
  longer_alt: ID,
});
const BLOB = chevrotain.createToken({
  name: 'BLOB',
  pattern: /BLOB/i,
  longer_alt: ID,
});
const NUMERIC = chevrotain.createToken({
  name: 'NUMERIC',
  pattern: /NUMERIC/i,
  longer_alt: ID,
});
const REAL = chevrotain.createToken({
  name: 'REAL',
  pattern: /REAL/i,
  longer_alt: ID,
});
const ZEROFILL = chevrotain.createToken({
  name: 'ZEROFILL',
  pattern: /ZEROFILL/i,
  longer_alt: ID,
});
const MEDIUMINT = chevrotain.createToken({
  name: 'MEDIUMINT',
  pattern: /MEDIUMINT/i,
  longer_alt: ID,
});
const COLLATE = chevrotain.createToken({
  name: 'COLLATE',
  pattern: /COLLATE/i,
  longer_alt: ID,
});
const LONGTEXT = chevrotain.createToken({
  name: 'LONGTEXT',
  pattern: /LONGTEXT/i,
  longer_alt: ID,
});
const MEDIUMTEXT = chevrotain.createToken({
  name: 'MEDIUMTEXT',
  pattern: /MEDIUMTEXT/i,
  longer_alt: ID,
});
const TINYTEXT = chevrotain.createToken({
  name: 'TINYTEXT',
  pattern: /TINYTEXT/i,
  longer_alt: ID,
});
const VARCHAR = chevrotain.createToken({
  name: 'VARCHAR',
  pattern: /VARCHAR/i,
  longer_alt: ID,
});
const MEMORY = chevrotain.createToken({
  name: 'MEMORY',
  pattern: /MEMORY/i,
  longer_alt: ID,
});
const DISK = chevrotain.createToken({
  name: 'DISK',
  pattern: /DISK/i,
  longer_alt: ID,
});
const STORAGE = chevrotain.createToken({
  name: 'STORAGE',
  pattern: /STORAGE/i,
  longer_alt: ID,
});
const DYNAMIC = chevrotain.createToken({
  name: 'DYNAMIC',
  pattern: /DYNAMIC/i,
  longer_alt: ID,
});
const FIXED = chevrotain.createToken({
  name: 'FIXED',
  pattern: /FIXED/i,
  longer_alt: ID,
});
const COLUMN_FORMAT = chevrotain.createToken({
  name: 'COLUMN_FORMAT',
  pattern: /COLUMN_FORMAT/i,
  longer_alt: ID,
});
const PRIMARY = chevrotain.createToken({
  name: 'PRIMARY',
  pattern: /PRIMARY/i,
  longer_alt: ID,
});
const AUTO_INCREMENT = chevrotain.createToken({
  name: 'AUTO_INCREMENT',
  pattern: /AUTO_INCREMENT/i,
  longer_alt: ID,
});
const DEFAULT = chevrotain.createToken({
  name: 'DEFAULT',
  pattern: /DEFAULT/i,
  longer_alt: ID,
});
const STRAIGHT_JOIN = chevrotain.createToken({
  name: 'STRAIGHT_JOIN',
  pattern: /STRAIGHT_JOIN/i,
  longer_alt: ID,
});
const STARTING = chevrotain.createToken({
  name: 'STARTING',
  pattern: /STARTING/i,
  longer_alt: ID,
});
const ENCLOSED = chevrotain.createToken({
  name: 'ENCLOSED',
  pattern: /ENCLOSED/i,
  longer_alt: ID,
});
const OPTIONALLY = chevrotain.createToken({
  name: 'OPTIONALLY',
  pattern: /OPTIONALLY/i,
  longer_alt: ID,
});
const OUTFILE = chevrotain.createToken({
  name: 'OUTFILE',
  pattern: /OUTFILE/i,
  longer_alt: ID,
});
const DUMPFILE = chevrotain.createToken({
  name: 'DUMPFILE',
  pattern: /DUMPFILE/i,
  longer_alt: ID,
});
const GET_FORMAT = chevrotain.createToken({
  name: 'GET_FORMAT',
  pattern: /GET_FORMAT/i,
  longer_alt: ID,
});
const CONVERT = chevrotain.createToken({
  name: 'CONVERT',
  pattern: /CONVERT/i,
  longer_alt: ID,
});
const WEIGHT_STRING = chevrotain.createToken({
  name: 'WEIGHT_STRING',
  pattern: /WEIGHT_STRING/i,
  longer_alt: ID,
});
const TRIM = chevrotain.createToken({
  name: 'TRIM',
  pattern: /TRIM/i,
  longer_alt: ID,
});
const SYSDATE = chevrotain.createToken({
  name: 'SYSDATE',
  pattern: /SYSDATE/i,
  longer_alt: ID,
});
const SUBSTRING = chevrotain.createToken({
  name: 'SUBSTRING',
  pattern: /SUBSTRING/i,
  longer_alt: ID,
});
const SUBSTR = chevrotain.createToken({
  name: 'SUBSTR',
  pattern: /SUBSTR/i,
  longer_alt: ID,
});
const POSITION = chevrotain.createToken({
  name: 'POSITION',
  pattern: /POSITION/i,
  longer_alt: ID,
});
const NOW = chevrotain.createToken({
  name: 'NOW',
  pattern: /NOW/i,
  longer_alt: ID,
});
const LOCALTIMESTAMP = chevrotain.createToken({
  name: 'LOCALTIMESTAMP',
  pattern: /LOCALTIMESTAMP/i,
  longer_alt: ID,
});
const EXTRACT = chevrotain.createToken({
  name: 'EXTRACT',
  pattern: /EXTRACT/i,
  longer_alt: ID,
});
const DATE_SUB = chevrotain.createToken({
  name: 'DATE_SUB',
  pattern: /DATE_SUB/i,
  longer_alt: ID,
});
const DATE_ADD = chevrotain.createToken({
  name: 'DATE_ADD',
  pattern: /DATE_ADD/i,
  longer_alt: ID,
});
const CURTIME = chevrotain.createToken({
  name: 'CURTIME',
  pattern: /CURTIME/i,
  longer_alt: ID,
});
const CURDATE = chevrotain.createToken({
  name: 'CURDATE',
  pattern: /CURDATE/i,
  longer_alt: ID,
});
const LOCALTIME = chevrotain.createToken({
  name: 'LOCALTIME',
  pattern: /LOCALTIME/i,
  longer_alt: ID,
});
const CURRENT_USER = chevrotain.createToken({
  name: 'CURRENT_USER',
  pattern: /CURRENT_USER/i,
  longer_alt: ID,
});
const CURRENT_TIMESTAMP = chevrotain.createToken({
  name: 'CURRENT_TIMESTAMP',
  pattern: /CURRENT_TIMESTAMP/i,
  longer_alt: ID,
});
const CURRENT_TIME = chevrotain.createToken({
  name: 'CURRENT_TIME',
  pattern: /CURRENT_TIME/i,
  longer_alt: ID,
});
const CURRENT_DATE = chevrotain.createToken({
  name: 'CURRENT_DATE',
  pattern: /CURRENT_DATE/i,
  longer_alt: ID,
});
const QUARTER = chevrotain.createToken({
  name: 'QUARTER',
  pattern: /QUARTER/i,
  longer_alt: ID,
});
const VARIANCE = chevrotain.createToken({
  name: 'VARIANCE',
  pattern: /VARIANCE/i,
  longer_alt: ID,
});
const VAR_SAMP = chevrotain.createToken({
  name: 'VAR_SAMP',
  pattern: /VAR_SAMP/i,
  longer_alt: ID,
});
const VAR_POP = chevrotain.createToken({
  name: 'VAR_POP',
  pattern: /VAR_POP/i,
  longer_alt: ID,
});
const SUM = chevrotain.createToken({
  name: 'SUM',
  pattern: /SUM/i,
  longer_alt: ID,
});
const STDDEV_SAMP = chevrotain.createToken({
  name: 'STDDEV_SAMP',
  pattern: /STDDEV_SAMP/i,
  longer_alt: ID,
});
const STDDEV_POP = chevrotain.createToken({
  name: 'STDDEV_POP',
  pattern: /STDDEV_POP/i,
  longer_alt: ID,
});
const STDDEV = chevrotain.createToken({
  name: 'STDDEV',
  pattern: /STDDEV/i,
  longer_alt: ID,
});
const STD = chevrotain.createToken({
  name: 'STD',
  pattern: /STD/i,
  longer_alt: ID,
});
const MAX = chevrotain.createToken({
  name: 'MAX',
  pattern: /MAX/i,
  longer_alt: ID,
});
const GROUP_CONCAT = chevrotain.createToken({
  name: 'GROUP_CONCAT',
  pattern: /GROUP_CONCAT/i,
  longer_alt: ID,
});
const COUNT = chevrotain.createToken({
  name: 'COUNT',
  pattern: /COUNT/i,
  longer_alt: ID,
});
const BIT_XOR = chevrotain.createToken({
  name: 'BIT_XOR',
  pattern: /BIT_XOR/i,
  longer_alt: ID,
});
const BIT_OR = chevrotain.createToken({
  name: 'BIT_OR',
  pattern: /BIT_OR/i,
  longer_alt: ID,
});
const BIT_AND = chevrotain.createToken({
  name: 'BIT_AND',
  pattern: /BIT_AND/i,
  longer_alt: ID,
});
const BIT = chevrotain.createToken({
  name: 'BIT',
  pattern: /BIT/i,
  longer_alt: ID,
});
const AVG = chevrotain.createToken({
  name: 'AVG',
  pattern: /AVG/i,
  longer_alt: ID,
});
const UTC_TIMESTAMP = chevrotain.createToken({
  name: 'UTC_TIMESTAMP',
  pattern: /UTC_TIMESTAMP/i,
  longer_alt: ID,
});
const UTC_TIME = chevrotain.createToken({
  name: 'UTC_TIME',
  pattern: /UTC_TIME/i,
  longer_alt: ID,
});
const UTC_DATE = chevrotain.createToken({
  name: 'UTC_DATE',
  pattern: /UTC_DATE/i,
  longer_alt: ID,
});
const TRAILING = chevrotain.createToken({
  name: 'TRAILING',
  pattern: /TRAILING/i,
  longer_alt: ID,
});
const LEADING = chevrotain.createToken({
  name: 'LEADING',
  pattern: /LEADING/i,
  longer_alt: ID,
});
const REVERSE = chevrotain.createToken({
  name: 'REVERSE',
  pattern: /REVERSE/i,
  longer_alt: ID,
});
const LEVEL = chevrotain.createToken({
  name: 'LEVEL',
  pattern: /LEVEL/i,
  longer_alt: ID,
});
const WEEK = chevrotain.createToken({
  name: 'WEEK',
  pattern: /WEEK/i,
  longer_alt: ID,
});
const DAY_MICROSECOND = chevrotain.createToken({
  name: 'DAY_MICROSECOND',
  pattern: /DAY_MICROSECOND/i,
  longer_alt: ID,
});
const HOUR_MICROSECOND = chevrotain.createToken({
  name: 'HOUR_MICROSECOND',
  pattern: /HOUR_MICROSECOND/i,
  longer_alt: ID,
});
const MINUTE_MICROSECOND = chevrotain.createToken({
  name: 'MINUTE_MICROSECOND',
  pattern: /MINUTE_MICROSECOND/i,
  longer_alt: ID,
});
const SECOND_MICROSECOND = chevrotain.createToken({
  name: 'SECOND_MICROSECOND',
  pattern: /SECOND_MICROSECOND/i,
  longer_alt: ID,
});
const MICROSECOND = chevrotain.createToken({
  name: 'MICROSECOND',
  pattern: /MICROSECOND/i,
  longer_alt: ID,
});
const MINUTE_SECOND = chevrotain.createToken({
  name: 'MINUTE_SECOND',
  pattern: /MINUTE_SECOND/i,
  longer_alt: ID,
});
const HOUR_SECOND = chevrotain.createToken({
  name: 'HOUR_SECOND',
  pattern: /HOUR_SECOND/i,
  longer_alt: ID,
});
const HOUR_MINUTE = chevrotain.createToken({
  name: 'HOUR_MINUTE',
  pattern: /HOUR_MINUTE/i,
  longer_alt: ID,
});
const DAY_SECOND = chevrotain.createToken({
  name: 'DAY_SECOND',
  pattern: /DAY_SECOND/i,
  longer_alt: ID,
});
const SECOND = chevrotain.createToken({
  name: 'SECOND',
  pattern: /SECOND/i,
  longer_alt: ID,
});
const DAY_MINUTE = chevrotain.createToken({
  name: 'DAY_MINUTE',
  pattern: /DAY_MINUTE/i,
  longer_alt: ID,
});
const MINUTE = chevrotain.createToken({
  name: 'MINUTE',
  pattern: /MINUTE/i,
  longer_alt: ID,
});
const DAY_HOUR = chevrotain.createToken({
  name: 'DAY_HOUR',
  pattern: /DAY_HOUR/i,
  longer_alt: ID,
});
const HOUR = chevrotain.createToken({
  name: 'HOUR',
  pattern: /HOUR/i,
  longer_alt: ID,
});
const DAY = chevrotain.createToken({
  name: 'DAY',
  pattern: /DAY/i,
  longer_alt: ID,
});
const YEAR_MONTH = chevrotain.createToken({
  name: 'YEAR_MONTH',
  pattern: /YEAR_MONTH/i,
  longer_alt: ID,
});
const MONTH = chevrotain.createToken({
  name: 'MONTH',
  pattern: /MONTH/i,
  longer_alt: ID,
});
const YEAR = chevrotain.createToken({
  name: 'YEAR',
  pattern: /YEAR/i,
  longer_alt: ID,
});
const INTEGER = chevrotain.createToken({
  name: 'INTEGER',
  pattern: /INTEGER/i,
  longer_alt: ID,
});
const CHARACTER = chevrotain.createToken({
  name: 'CHARACTER',
  pattern: /CHARACTER/i,
  longer_alt: ID,
});
const NCHAR = chevrotain.createToken({
  name: 'NCHAR',
  pattern: /NCHAR/i,
  longer_alt: ID,
});
const CHAR = chevrotain.createToken({
  name: 'CHAR',
  pattern: /CHAR/i,
  longer_alt: ID,
});
const VALUES = chevrotain.createToken({
  name: 'VALUES',
  pattern: /VALUES/i,
  longer_alt: ID,
});
const VALUE = chevrotain.createToken({
  name: 'VALUE',
  pattern: /VALUE/i,
  longer_alt: ID,
});
const EXCHANGE = chevrotain.createToken({
  name: 'EXCHANGE',
  pattern: /EXCHANGE/i,
  longer_alt: ID,
});
const INNER = chevrotain.createToken({
  name: 'INNER',
  pattern: /INNER/i,
  longer_alt: ID,
});
const ROLE = chevrotain.createToken({
  name: 'ROLE',
  pattern: /ROLE/i,
  longer_alt: ID,
});
const USER = chevrotain.createToken({
  name: 'USER',
  pattern: /USER/i,
  longer_alt: ID,
});
const PARTIALSCAN = chevrotain.createToken({
  name: 'PARTIALSCAN',
  pattern: /PARTIALSCAN/i,
  longer_alt: ID,
});
const NOSCAN = chevrotain.createToken({
  name: 'NOSCAN',
  pattern: /NOSCAN/i,
  longer_alt: ID,
});
const TRUNCATE = chevrotain.createToken({
  name: 'TRUNCATE',
  pattern: /TRUNCATE/i,
  longer_alt: ID,
});
const SETS = chevrotain.createToken({
  name: 'SETS',
  pattern: /SETS/i,
  longer_alt: ID,
});
const GROUPING = chevrotain.createToken({
  name: 'GROUPING',
  pattern: /GROUPING/i,
  longer_alt: ID,
});
const MORE = chevrotain.createToken({
  name: 'MORE',
  pattern: /MORE/i,
  longer_alt: ID,
});
const LESS = chevrotain.createToken({
  name: 'LESS',
  pattern: /LESS/i,
  longer_alt: ID,
});
const CURRENT = chevrotain.createToken({
  name: 'CURRENT',
  pattern: /CURRENT/i,
  longer_alt: ID,
});
const FOLLOWING = chevrotain.createToken({
  name: 'FOLLOWING',
  pattern: /FOLLOWING/i,
  longer_alt: ID,
});
const PRECEDING = chevrotain.createToken({
  name: 'PRECEDING',
  pattern: /PRECEDING/i,
  longer_alt: ID,
});
const UNBOUNDED = chevrotain.createToken({
  name: 'UNBOUNDED',
  pattern: /UNBOUNDED/i,
  longer_alt: ID,
});
const WINDOW = chevrotain.createToken({
  name: 'WINDOW',
  pattern: /WINDOW/i,
  longer_alt: ID,
});
const DIRECTORIES = chevrotain.createToken({
  name: 'DIRECTORIES',
  pattern: /DIRECTORIES/i,
  longer_alt: ID,
});
const CUBE = chevrotain.createToken({
  name: 'CUBE',
  pattern: /CUBE/i,
  longer_alt: ID,
});
const ROLLUP = chevrotain.createToken({
  name: 'ROLLUP',
  pattern: /ROLLUP/i,
  longer_alt: ID,
});
const SKEWED = chevrotain.createToken({
  name: 'SKEWED',
  pattern: /SKEWED/i,
  longer_alt: ID,
});
const CASCADE = chevrotain.createToken({
  name: 'CASCADE',
  pattern: /CASCADE/i,
  longer_alt: ID,
});
const RESTRICT = chevrotain.createToken({
  name: 'RESTRICT',
  pattern: /RESTRICT/i,
  longer_alt: ID,
});
const UPDATE = chevrotain.createToken({
  name: 'UPDATE',
  pattern: /UPDATE/i,
  longer_alt: ID,
});
const SHOW_DATABASE = chevrotain.createToken({
  name: 'SHOW_DATABASE',
  pattern: /SHOW_DATABASE/i,
  longer_alt: ID,
});
const CONCATENATE = chevrotain.createToken({
  name: 'CONCATENATE',
  pattern: /CONCATENATE/i,
  longer_alt: ID,
});
const OPTION = chevrotain.createToken({
  name: 'OPTION',
  pattern: /OPTION/i,
  longer_alt: ID,
});
const USE = chevrotain.createToken({
  name: 'USE',
  pattern: /USE/i,
  longer_alt: ID,
});
const STATISTICS = chevrotain.createToken({
  name: 'STATISTICS',
  pattern: /STATISTICS/i,
  longer_alt: ID,
});
const COMPUTE = chevrotain.createToken({
  name: 'COMPUTE',
  pattern: /COMPUTE/i,
  longer_alt: ID,
});
const UNARCHIVE = chevrotain.createToken({
  name: 'UNARCHIVE',
  pattern: /UNARCHIVE/i,
  longer_alt: ID,
});
const ARCHIVE = chevrotain.createToken({
  name: 'ARCHIVE',
  pattern: /ARCHIVE/i,
  longer_alt: ID,
});
const TOUCH = chevrotain.createToken({
  name: 'TOUCH',
  pattern: /TOUCH/i,
  longer_alt: ID,
});
const LATERAL = chevrotain.createToken({
  name: 'LATERAL',
  pattern: /LATERAL/i,
  longer_alt: ID,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /SEMI/i,
  longer_alt: ID,
});
const RECORDWRITER = chevrotain.createToken({
  name: 'RECORDWRITER',
  pattern: /RECORDWRITER/i,
  longer_alt: ID,
});
const RECORDREADER = chevrotain.createToken({
  name: 'RECORDREADER',
  pattern: /RECORDREADER/i,
  longer_alt: ID,
});
const TRIGGER = chevrotain.createToken({
  name: 'TRIGGER',
  pattern: /TRIGGER/i,
  longer_alt: ID,
});
const CURSOR = chevrotain.createToken({
  name: 'CURSOR',
  pattern: /CURSOR/i,
  longer_alt: ID,
});
const CONTINUE = chevrotain.createToken({
  name: 'CONTINUE',
  pattern: /CONTINUE/i,
  longer_alt: ID,
});
const CROSS = chevrotain.createToken({
  name: 'CROSS',
  pattern: /CROSS/i,
  longer_alt: ID,
});
const BINARY = chevrotain.createToken({
  name: 'BINARY',
  pattern: /BINARY/i,
  longer_alt: ID,
});
const BOTH = chevrotain.createToken({
  name: 'BOTH',
  pattern: /BOTH/i,
  longer_alt: ID,
});
const BETWEEN = chevrotain.createToken({
  name: 'BETWEEN',
  pattern: /BETWEEN/i,
  longer_alt: ID,
});
const BEFORE = chevrotain.createToken({
  name: 'BEFORE',
  pattern: /BEFORE/i,
  longer_alt: ID,
});
const ANALYZE = chevrotain.createToken({
  name: 'ANALYZE',
  pattern: /ANALYZE/i,
  longer_alt: ID,
});
const RANGE = chevrotain.createToken({
  name: 'RANGE',
  pattern: /RANGE/i,
  longer_alt: ID,
});
const PURGE = chevrotain.createToken({
  name: 'PURGE',
  pattern: /PURGE/i,
  longer_alt: ID,
});
const READS = chevrotain.createToken({
  name: 'READS',
  pattern: /READS/i,
  longer_alt: ID,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/i,
  longer_alt: ID,
});
const UNSIGNED = chevrotain.createToken({
  name: 'UNSIGNED',
  pattern: /UNSIGNED/i,
  longer_alt: ID,
});
const SIGNED = chevrotain.createToken({
  name: 'SIGNED',
  pattern: /SIGNED/i,
  longer_alt: ID,
});
const PROCEDURE = chevrotain.createToken({
  name: 'PROCEDURE',
  pattern: /PROCEDURE/i,
  longer_alt: ID,
});
const EXCLUSIVE = chevrotain.createToken({
  name: 'EXCLUSIVE',
  pattern: /EXCLUSIVE/i,
  longer_alt: ID,
});
const SHARED = chevrotain.createToken({
  name: 'SHARED',
  pattern: /SHARED/i,
  longer_alt: ID,
});
const UNLOCK = chevrotain.createToken({
  name: 'UNLOCK',
  pattern: /UNLOCK/i,
  longer_alt: ID,
});
const LOCKS = chevrotain.createToken({
  name: 'LOCKS',
  pattern: /LOCKS/i,
  longer_alt: ID,
});
const LOCK = chevrotain.createToken({
  name: 'LOCK',
  pattern: /LOCK/i,
  longer_alt: ID,
});
const UNDO = chevrotain.createToken({
  name: 'UNDO',
  pattern: /UNDO/i,
  longer_alt: ID,
});
const SSL = chevrotain.createToken({
  name: 'SSL',
  pattern: /SSL/i,
  longer_alt: ID,
});
const REVOKE = chevrotain.createToken({
  name: 'REVOKE',
  pattern: /REVOKE/i,
  longer_alt: ID,
});
const GRANT = chevrotain.createToken({
  name: 'GRANT',
  pattern: /GRANT/i,
  longer_alt: ID,
});
const SCHEMAS = chevrotain.createToken({
  name: 'SCHEMAS',
  pattern: /SCHEMAS/i,
  longer_alt: ID,
});
const SCHEMA = chevrotain.createToken({
  name: 'SCHEMA',
  pattern: /SCHEMA/i,
  longer_alt: ID,
});
const MATERIALIZED = chevrotain.createToken({
  name: 'MATERIALIZED',
  pattern: /MATERIALIZED/i,
  longer_alt: ID,
});
const DATABASES = chevrotain.createToken({
  name: 'DATABASES',
  pattern: /DATABASES/i,
  longer_alt: ID,
});
const DATABASE = chevrotain.createToken({
  name: 'DATABASE',
  pattern: /DATABASE/i,
  longer_alt: ID,
});
const VIEW = chevrotain.createToken({
  name: 'VIEW',
  pattern: /VIEW/i,
  longer_alt: ID,
});
const INTERSECT = chevrotain.createToken({
  name: 'INTERSECT',
  pattern: /INTERSECT/i,
  longer_alt: ID,
});
const FETCH = chevrotain.createToken({
  name: 'FETCH',
  pattern: /FETCH/i,
  longer_alt: ID,
});
const KWMINUS = chevrotain.createToken({
  name: 'KWMINUS',
  pattern: /KWMINUS/i,
  longer_alt: ID,
});
const KWPLUS = chevrotain.createToken({
  name: 'KWPLUS',
  pattern: /KWPLUS/i,
  longer_alt: ID,
});
const DELETE = chevrotain.createToken({
  name: 'DELETE',
  pattern: /DELETE/i,
  longer_alt: ID,
});
const LONG = chevrotain.createToken({
  name: 'LONG',
  pattern: /LONG/i,
  longer_alt: ID,
});
const UTCTIMESTAMP = chevrotain.createToken({
  name: 'UTCTIMESTAMP',
  pattern: /UTC_TMESTAMP/i,
  longer_alt: ID,
});
const UTC = chevrotain.createToken({
  name: 'UTC',
  pattern: /UTC/i,
  longer_alt: ID,
});
const CLUSTERSTATUS = chevrotain.createToken({
  name: 'CLUSTERSTATUS',
  pattern: /CLUSTERSTATUS/i,
  longer_alt: ID,
});
const HOLD_DDLTIME = chevrotain.createToken({
  name: 'HOLD_DDLTIME',
  pattern: /HOLD_DDLTIME/i,
  longer_alt: ID,
});
const STREAMTABLE = chevrotain.createToken({
  name: 'STREAMTABLE',
  pattern: /STREAMTABLE/i,
  longer_alt: ID,
});
const MAPJOIN = chevrotain.createToken({
  name: 'MAPJOIN',
  pattern: /MAPJOIN/i,
  longer_alt: ID,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/i,
  longer_alt: ID,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/i,
  longer_alt: ID,
});
const WHEN = chevrotain.createToken({
  name: 'WHEN',
  pattern: /WHEN/i,
  longer_alt: ID,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/i,
  longer_alt: ID,
});
const ELEM_TYPE = chevrotain.createToken({
  name: 'ELEM_TYPE',
  pattern: /\$ELEM\$/i,
  longer_alt: ID,
});
const VALUE_TYPE = chevrotain.createToken({
  name: 'VALUE_TYPE',
  pattern: /\$VALUE\$/i,
  longer_alt: ID,
});
const IDXPROPERTIES = chevrotain.createToken({
  name: 'IDXPROPERTIES',
  pattern: /IDXPROPERTIES/i,
  longer_alt: ID,
});
const TBLPROPERTIES = chevrotain.createToken({
  name: 'TBLPROPERTIES',
  pattern: /TBLPROPERTIES/i,
  longer_alt: ID,
});
const UNSET = chevrotain.createToken({
  name: 'UNSET',
  pattern: /UNSET/i,
  longer_alt: ID,
});
const SET = chevrotain.createToken({
  name: 'SET',
  pattern: /SET/i,
  longer_alt: ID,
});
const DBPROPERTIES = chevrotain.createToken({
  name: 'DBPROPERTIES',
  pattern: /DBPROPERTIES/i,
  longer_alt: ID,
});
const SERDEPROPERTIES = chevrotain.createToken({
  name: 'SERDEPROPERTIES',
  pattern: /SERDEPROPERTIES/i,
  longer_alt: ID,
});
const DEFERRED = chevrotain.createToken({
  name: 'DEFERRED',
  pattern: /DEFERRED/i,
  longer_alt: ID,
});
const WITH = chevrotain.createToken({
  name: 'WITH',
  pattern: /WITH/i,
  longer_alt: ID,
});
const SERDE = chevrotain.createToken({
  name: 'SERDE',
  pattern: /SERDE/i,
  longer_alt: ID,
});
const LOGICAL = chevrotain.createToken({
  name: 'LOGICAL',
  pattern: /LOGICAL/i,
  longer_alt: ID,
});
const DEPENDENCY = chevrotain.createToken({
  name: 'DEPENDENCY',
  pattern: /DEPENDENCY/i,
  longer_alt: ID,
});
const PRETTY = chevrotain.createToken({
  name: 'PRETTY',
  pattern: /PRETTY/i,
  longer_alt: ID,
});
const FORMATTED = chevrotain.createToken({
  name: 'FORMATTED',
  pattern: /FORMATTED/i,
  longer_alt: ID,
});
const EXTENDED = chevrotain.createToken({
  name: 'EXTENDED',
  pattern: /EXTENDED/i,
  longer_alt: ID,
});
const END = chevrotain.createToken({
  name: 'END',
  pattern: /END/i,
  longer_alt: ID,
});
const EXPLAIN = chevrotain.createToken({
  name: 'EXPLAIN',
  pattern: /EXPLAIN/i,
  longer_alt: ID,
});
const MACRO = chevrotain.createToken({
  name: 'MACRO',
  pattern: /MACRO/i,
  longer_alt: ID,
});
const TEMPORARY = chevrotain.createToken({
  name: 'TEMPORARY',
  pattern: /TEMPORARY/i,
  longer_alt: ID,
});
const REGEXP = chevrotain.createToken({
  name: 'REGEXP',
  pattern: /REGEXP/i,
  longer_alt: ID,
});
const RLIKE = chevrotain.createToken({
  name: 'RLIKE',
  pattern: /RLIKE/i,
  longer_alt: ID,
});
const REPLACE = chevrotain.createToken({
  name: 'REPLACE',
  pattern: /REPLACE/i,
  longer_alt: ID,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /ADD/i,
  longer_alt: ID,
});
const CAST = chevrotain.createToken({
  name: 'CAST',
  pattern: /CAST/i,
  longer_alt: ID,
});
const PERCENT = chevrotain.createToken({
  name: 'PERCENT',
  pattern: /PERCENT/i,
  longer_alt: ID,
});
const TABLESAMPLE = chevrotain.createToken({
  name: 'TABLESAMPLE',
  pattern: /TABLESAMPLE/i,
  longer_alt: ID,
});
const LOCATION = chevrotain.createToken({
  name: 'LOCATION',
  pattern: /LOCATION/i,
  longer_alt: ID,
});
const NO_DROP = chevrotain.createToken({
  name: 'NO_DROP',
  pattern: /NO_DROP/i,
  longer_alt: ID,
});
const CharSetName = chevrotain.createToken({
  name: 'CharSetName',
  pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
  longer_alt: ID,
});
const READONLY = chevrotain.createToken({
  name: 'READONLY',
  pattern: /READONLY/i,
  longer_alt: ID,
});
const READ = chevrotain.createToken({
  name: 'READ',
  pattern: /READ/i,
  longer_alt: ID,
});
const DISABLE = chevrotain.createToken({
  name: 'DISABLE',
  pattern: /DISABLE/i,
  longer_alt: ID,
});
const ENABLE = chevrotain.createToken({
  name: 'ENABLE',
  pattern: /ENABLE/i,
  longer_alt: ID,
});
const OFFLINE = chevrotain.createToken({
  name: 'OFFLINE',
  pattern: /OFFLINE/i,
  longer_alt: ID,
});
const OF = chevrotain.createToken({
  name: 'OF',
  pattern: /OF/i,
  longer_alt: ID,
});
const OUTPUTDRIVER = chevrotain.createToken({
  name: 'OUTPUTDRIVER',
  pattern: /OUTPUTDRIVER/i,
  longer_alt: ID,
});
const INPUTDRIVER = chevrotain.createToken({
  name: 'INPUTDRIVER',
  pattern: /INPUTDRIVER/i,
  longer_alt: ID,
});
const OUTPUTFORMAT = chevrotain.createToken({
  name: 'OUTPUTFORMAT',
  pattern: /OUTPUTFORMAT/i,
  longer_alt: ID,
});
const INPUTFORMAT = chevrotain.createToken({
  name: 'INPUTFORMAT',
  pattern: /INPUTFORMAT/i,
  longer_alt: ID,
});
const ORCFILE = chevrotain.createToken({
  name: 'ORCFILE',
  pattern: /ORC/i,
  longer_alt: ID,
});
const RCFILE = chevrotain.createToken({
  name: 'RCFILE',
  pattern: /RCFILE/i,
  longer_alt: ID,
});
const TEXTFILE = chevrotain.createToken({
  name: 'TEXTFILE',
  pattern: /TEXTFILE/i,
  longer_alt: ID,
});
const TEXT = chevrotain.createToken({
  name: 'TEXT',
  pattern: /TEXT/i,
  longer_alt: ID,
});
const SEQUENCEFILE = chevrotain.createToken({
  name: 'SEQUENCEFILE',
  pattern: /SEQUENCEFILE/i,
  longer_alt: ID,
});
const FILEFORMAT = chevrotain.createToken({
  name: 'FILEFORMAT',
  pattern: /FILEFORMAT/i,
  longer_alt: ID,
});
const STORED = chevrotain.createToken({
  name: 'STORED',
  pattern: /STORED/i,
  longer_alt: ID,
});
const LINES = chevrotain.createToken({
  name: 'LINES',
  pattern: /LINES/i,
  longer_alt: ID,
});
const KEY_TYPE = chevrotain.createToken({
  name: 'KEY_TYPE',
  pattern: /\$KEY\$/i,
  longer_alt: ID,
});
const KEYS = chevrotain.createToken({
  name: 'KEYS',
  pattern: /KEYS/i,
  longer_alt: ID,
});
const KEY = chevrotain.createToken({
  name: 'KEY',
  pattern: /KEY/i,
  longer_alt: ID,
});
const ITEMS = chevrotain.createToken({
  name: 'ITEMS',
  pattern: /ITEMS/i,
  longer_alt: ID,
});
const COLLECTION = chevrotain.createToken({
  name: 'COLLECTION',
  pattern: /COLLECTION/i,
  longer_alt: ID,
});
const ESCAPED = chevrotain.createToken({
  name: 'ESCAPED',
  pattern: /ESCAPED/i,
  longer_alt: ID,
});
const TERMINATED = chevrotain.createToken({
  name: 'TERMINATED',
  pattern: /TERMINATED/i,
  longer_alt: ID,
});
const MIN = chevrotain.createToken({
  name: 'MIN',
  pattern: /MIN/i,
  longer_alt: ID,
});
const FIELDS = chevrotain.createToken({
  name: 'FIELDS',
  pattern: /FIELDS/i,
  longer_alt: ID,
});
const DELIMITED = chevrotain.createToken({
  name: 'DELIMITED',
  pattern: /DELIMITED/i,
  longer_alt: ID,
});
const LIMIT = chevrotain.createToken({
  name: 'LIMIT',
  pattern: /LIMIT/i,
  longer_alt: ID,
});
const FORMAT = chevrotain.createToken({
  name: 'FORMAT',
  pattern: /FORMAT/i,
  longer_alt: ID,
});
const ROWS = chevrotain.createToken({
  name: 'ROWS',
  pattern: /ROWS/i,
  longer_alt: ID,
});
const ROW = chevrotain.createToken({
  name: 'ROW',
  pattern: /ROW/i,
  longer_alt: ID,
});
const BUCKETS = chevrotain.createToken({
  name: 'BUCKETS',
  pattern: /BUCKETS/i,
  longer_alt: ID,
});
const BUCKET = chevrotain.createToken({
  name: 'BUCKET',
  pattern: /BUCKET/i,
  longer_alt: ID,
});
const INTO = chevrotain.createToken({
  name: 'INTO',
  pattern: /INTO/i,
  longer_alt: ID,
});
const SORTED = chevrotain.createToken({
  name: 'SORTED',
  pattern: /SORTED/i,
  longer_alt: ID,
});
const CLUSTERED = chevrotain.createToken({
  name: 'CLUSTERED',
  pattern: /CLUSTERED/i,
  longer_alt: ID,
});
const PARTITIONED = chevrotain.createToken({
  name: 'PARTITIONED',
  pattern: /PARTITIONED/i,
  longer_alt: ID,
});
const REDUCE = chevrotain.createToken({
  name: 'REDUCE',
  pattern: /REDUCE/i,
  longer_alt: ID,
});
const UNIONTYPE = chevrotain.createToken({
  name: 'UNIONTYPE',
  pattern: /UNIONTYPE/i,
  longer_alt: ID,
});
const MAP = chevrotain.createToken({
  name: 'MAP',
  pattern: /MAP/i,
  longer_alt: ID,
});
const STRUCT = chevrotain.createToken({
  name: 'STRUCT',
  pattern: /STRUCT/i,
  longer_alt: ID,
});
const ARRAY = chevrotain.createToken({
  name: 'ARRAY',
  pattern: /ARRAY/i,
  longer_alt: ID,
});
const STRING = chevrotain.createToken({
  name: 'STRING',
  pattern: /STRING/i,
  longer_alt: ID,
});
const DECIMAL = chevrotain.createToken({
  name: 'DECIMAL',
  pattern: /DECIMAL/i,
  longer_alt: ID,
});
const TIMESTAMP = chevrotain.createToken({
  name: 'TIMESTAMP',
  pattern: /TIMESTAMP/i,
  longer_alt: ID,
});
const DATETIME = chevrotain.createToken({
  name: 'DATETIME',
  pattern: /DATETIME/i,
  longer_alt: ID,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/i,
  longer_alt: ID,
});
const DATE = chevrotain.createToken({
  name: 'DATE',
  pattern: /DATE/i,
  longer_alt: ID,
});
const DOUBLE = chevrotain.createToken({
  name: 'DOUBLE',
  pattern: /DOUBLE/i,
  longer_alt: ID,
});
const FLOAT = chevrotain.createToken({
  name: 'FLOAT',
  pattern: /FLOAT/i,
  longer_alt: ID,
});
const BIGINT = chevrotain.createToken({
  name: 'BIGINT',
  pattern: /BIGINT/i,
  longer_alt: ID,
});
const SMALLINT = chevrotain.createToken({
  name: 'SMALLINT',
  pattern: /SMALLINT/i,
  longer_alt: ID,
});
const TINYINT = chevrotain.createToken({
  name: 'TINYINT',
  pattern: /TINYINT/i,
  longer_alt: ID,
});
const INT = chevrotain.createToken({
  name: 'INT',
  pattern: /INT/i,
  longer_alt: ID,
});
const BOOLEAN = chevrotain.createToken({
  name: 'BOOLEAN',
  pattern: /BOOLEAN/i,
  longer_alt: ID,
});
const BOOL = chevrotain.createToken({
  name: 'BOOL',
  pattern: /BOOL/i,
  longer_alt: ID,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /KWCOMMENT/i,
  longer_alt: ID,
});
const PROTECTION = chevrotain.createToken({
  name: 'PROTECTION',
  pattern: /PROTECTION/i,
  longer_alt: ID,
});
const IGNORE = chevrotain.createToken({
  name: 'IGNORE',
  pattern: /IGNORE/i,
  longer_alt: ID,
});
const NO = chevrotain.createToken({
  name: 'NO',
  pattern: /NO/i,
  longer_alt: ID,
});
const RENAME = chevrotain.createToken({
  name: 'RENAME',
  pattern: /RENAME/i,
  longer_alt: ID,
});
const DROP = chevrotain.createToken({
  name: 'DROP',
  pattern: /DROP/i,
  longer_alt: ID,
});
const DESCRIBE = chevrotain.createToken({
  name: 'DESCRIBE',
  pattern: /DESCRIBE/i,
  longer_alt: ID,
});
const AFTER = chevrotain.createToken({
  name: 'AFTER',
  pattern: /AFTER/i,
  longer_alt: ID,
});
const FIRST = chevrotain.createToken({
  name: 'FIRST',
  pattern: /FIRST/i,
  longer_alt: ID,
});
const CHANGE = chevrotain.createToken({
  name: 'CHANGE',
  pattern: /CHANGE/i,
  longer_alt: ID,
});
const ALTER = chevrotain.createToken({
  name: 'ALTER',
  pattern: /ALTER/i,
  longer_alt: ID,
});
const EXTERNAL = chevrotain.createToken({
  name: 'EXTERNAL',
  pattern: /EXTERNAL/i,
  longer_alt: ID,
});
const CREATE = chevrotain.createToken({
  name: 'CREATE',
  pattern: /CREATE/i,
  longer_alt: ID,
});
const NULL = chevrotain.createToken({
  name: 'NULL',
  pattern: /NULL/i,
  longer_alt: ID,
});
const INPATH = chevrotain.createToken({
  name: 'INPATH',
  pattern: /INPATH/i,
  longer_alt: ID,
});
const DATA = chevrotain.createToken({
  name: 'DATA',
  pattern: /DATA/i,
  longer_alt: ID,
});
const IMPORT = chevrotain.createToken({
  name: 'IMPORT',
  pattern: /IMPORT/i,
  longer_alt: ID,
});
const EXPORT = chevrotain.createToken({
  name: 'EXPORT',
  pattern: /EXPORT/i,
  longer_alt: ID,
});
const LOAD = chevrotain.createToken({
  name: 'LOAD',
  pattern: /LOAD/i,
  longer_alt: ID,
});
const UNION = chevrotain.createToken({
  name: 'UNION',
  pattern: /UNION/i,
  longer_alt: ID,
});
const SORT = chevrotain.createToken({
  name: 'SORT',
  pattern: /SORT/i,
  longer_alt: ID,
});
const DISTRIBUTE = chevrotain.createToken({
  name: 'DISTRIBUTE',
  pattern: /DISTRIBUTE/i,
  longer_alt: ID,
});
const CLUSTER = chevrotain.createToken({
  name: 'CLUSTER',
  pattern: /CLUSTER/i,
  longer_alt: ID,
});
const USING = chevrotain.createToken({
  name: 'USING',
  pattern: /USING/i,
  longer_alt: ID,
});
const TRANSFORM = chevrotain.createToken({
  name: 'TRANSFORM',
  pattern: /TRANSFORM/i,
  longer_alt: ID,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/i,
  longer_alt: ID,
});
const LOCAL = chevrotain.createToken({
  name: 'LOCAL',
  pattern: /LOCAL/i,
  longer_alt: ID,
});
const DIRECTORY = chevrotain.createToken({
  name: 'DIRECTORY',
  pattern: /DIRECTORY/i,
  longer_alt: ID,
});
const TO = chevrotain.createToken({
  name: 'TO',
  pattern: /TO/i,
  longer_alt: ID,
});
const REPAIR = chevrotain.createToken({
  name: 'REPAIR',
  pattern: /REPAIR/i,
  longer_alt: ID,
});
const MSCK = chevrotain.createToken({
  name: 'MSCK',
  pattern: /MSCK/i,
  longer_alt: ID,
});
const SHOW = chevrotain.createToken({
  name: 'SHOW',
  pattern: /SHOW/i,
  longer_alt: ID,
});
const FUNCTIONS = chevrotain.createToken({
  name: 'FUNCTIONS',
  pattern: /FUNCTIONS/i,
  longer_alt: ID,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/i,
  longer_alt: ID,
});
const REBUILD = chevrotain.createToken({
  name: 'REBUILD',
  pattern: /REBUILD/i,
  longer_alt: ID,
});
const INDEXES = chevrotain.createToken({
  name: 'INDEXES',
  pattern: /INDEXES/i,
  longer_alt: ID,
});
const INDEX = chevrotain.createToken({
  name: 'INDEX',
  pattern: /INDEX/i,
  longer_alt: ID,
});
const COLUMNS = chevrotain.createToken({
  name: 'COLUMNS',
  pattern: /COLUMNS/i,
  longer_alt: ID,
});
const COLUMN = chevrotain.createToken({
  name: 'COLUMN',
  pattern: /COLUMN/i,
  longer_alt: ID,
});
const TABLES = chevrotain.createToken({
  name: 'TABLES',
  pattern: /TABLES/i,
  longer_alt: ID,
});
const TABLE = chevrotain.createToken({
  name: 'TABLE',
  pattern: /TABLE/i,
  longer_alt: ID,
});
const PARTITIONS = chevrotain.createToken({
  name: 'PARTITIONS',
  pattern: /PARTITIONS/i,
  longer_alt: ID,
});
const PARTITION = chevrotain.createToken({
  name: 'PARTITION',
  pattern: /PARTITION/i,
  longer_alt: ID,
});
const ON = chevrotain.createToken({
  name: 'ON',
  pattern: /ON/i,
  longer_alt: ID,
});
const FULL = chevrotain.createToken({
  name: 'FULL',
  pattern: /FULL/i,
  longer_alt: ID,
});
const RIGHT = chevrotain.createToken({
  name: 'RIGHT',
  pattern: /RIGHT/i,
  longer_alt: ID,
});
const LEFT = chevrotain.createToken({
  name: 'LEFT',
  pattern: /LEFT/i,
  longer_alt: ID,
});
const PRESERVE = chevrotain.createToken({
  name: 'PRESERVE',
  pattern: /PRESERVE/i,
  longer_alt: ID,
});
const UNIQUEJOIN = chevrotain.createToken({
  name: 'UNIQUEJOIN',
  pattern: /UNIQUEJOIN/i,
  longer_alt: ID,
});
const UNIQUE = chevrotain.createToken({
  name: 'UNIQUE',
  pattern: /UNIQUE/i,
  longer_alt: ID,
});
const OUTER = chevrotain.createToken({
  name: 'OUTER',
  pattern: /OUTER/i,
  longer_alt: ID,
});
const OUT = chevrotain.createToken({
  name: 'OUT',
  pattern: /OUT/i,
  longer_alt: ID,
});
const OVERWRITE = chevrotain.createToken({
  name: 'OVERWRITE',
  pattern: /OVERWRITE/i,
  longer_alt: ID,
});
const OVER = chevrotain.createToken({
  name: 'OVER',
  pattern: /OVER/i,
  longer_alt: ID,
});
const INSERT = chevrotain.createToken({
  name: 'INSERT',
  pattern: /INSERT/i,
  longer_alt: ID,
});
const DISTINCT = chevrotain.createToken({
  name: 'DISTINCT',
  pattern: /DISTINCT/i,
  longer_alt: ID,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/i,
  longer_alt: ID,
});
const FROM = chevrotain.createToken({
  name: 'FROM',
  pattern: /FROM/i,
  longer_alt: ID,
});
const WHERE = chevrotain.createToken({
  name: 'WHERE',
  pattern: /WHERE/i,
  longer_alt: ID,
});
const HAVING = chevrotain.createToken({
  name: 'HAVING',
  pattern: /HAVING/i,
  longer_alt: ID,
});
const BY = chevrotain.createToken({
  name: 'BY',
  pattern: /BY/i,
  longer_alt: ID,
});
const GROUP = chevrotain.createToken({
  name: 'GROUP',
  pattern: /GROUP/i,
  longer_alt: ID,
});
const ORDER = chevrotain.createToken({
  name: 'ORDER',
  pattern: /ORDER/i,
  longer_alt: ID,
});
const DESC = chevrotain.createToken({
  name: 'DESC',
  pattern: /DESC/i,
  longer_alt: ID,
});
const ASC = chevrotain.createToken({
  name: 'ASC',
  pattern: /ASC/i,
  longer_alt: ID,
});
const AS = chevrotain.createToken({
  name: 'AS',
  pattern: /AS/i,
  longer_alt: ID,
});
const EXISTS = chevrotain.createToken({
  name: 'EXISTS',
  pattern: /EXISTS/i,
  longer_alt: ID,
});
const IS = chevrotain.createToken({
  name: 'IS',
  pattern: /IS/i,
  longer_alt: ID,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/i,
  longer_alt: ID,
});
const JOIN = chevrotain.createToken({
  name: 'JOIN',
  pattern: /JOIN/i,
  longer_alt: ID,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/i,
  longer_alt: ID,
});
const LIKE = chevrotain.createToken({
  name: 'LIKE',
  pattern: /LIKE/i,
  longer_alt: ID,
});
const NOT = chevrotain.createToken({
  name: 'NOT',
  pattern: /(NOT|\!)/i,
  longer_alt: ID,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /OR/i,
  longer_alt: ID,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /AND/i,
  longer_alt: ID,
});
const ALL = chevrotain.createToken({
  name: 'ALL',
  pattern: /ALL/i,
  longer_alt: ID,
});
const FALSE = chevrotain.createToken({
  name: 'FALSE',
  pattern: /FALSE/i,
  longer_alt: ID,
});
const TRUE = chevrotain.createToken({
  name: 'TRUE',
  pattern: /TRUE/i,
  longer_alt: ID,
});

export enum TokenEnum {
  WS = 'WS',
  ByteLengthLiteral = 'ByteLengthLiteral',
  DecimalLiteral = 'DecimalLiteral',
  TinyintLiteral = 'TinyintLiteral',
  SmallintLiteral = 'SmallintLiteral',
  BigintLiteral = 'BigintLiteral',
  CharSetLiteral = 'CharSetLiteral',
  STRING_LITERAL = 'STRING_LITERAL',
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
  ONE_DECIMAL = 'ONE_DECIMAL',
  ZERO_DECIMAL = 'ZERO_DECIMAL',
  Number = 'Number',
  LIFECYCLE = 'LIFECYCLE',
  TABLESPACE = 'TABLESPACE',
  STATS_PERSISTENT = 'STATS_PERSISTENT',
  STATS_AUTO_RECALC = 'STATS_AUTO_RECALC',
  COMPACT = 'COMPACT',
  REDUNDANT = 'REDUNDANT',
  COMPRESSED = 'COMPRESSED',
  ROW_FORMAT = 'ROW_FORMAT',
  PASSWORD = 'PASSWORD',
  PACK_KEYS = 'PACK_KEYS',
  MIN_ROWS = 'MIN_ROWS',
  MAX_ROWS = 'MAX_ROWS',
  KEY_BLOCK_SIZE = 'KEY_BLOCK_SIZE',
  LAST = 'LAST',
  INSERT_METHOD = 'INSERT_METHOD',
  ENCRYPTION = 'ENCRYPTION',
  DELAY_KEY_WRITE = 'DELAY_KEY_WRITE',
  CONNECTION = 'CONNECTION',
  COMPRESSION = 'COMPRESSION',
  AVG_ROW_LENGTH = 'AVG_ROW_LENGTH',
  ENGINE = 'ENGINE',
  CHECKSUM = 'CHECKSUM',
  CHARSET = 'CHARSET',
  PERFOMANCE_SCHEMA = 'PERFOMANCE_SCHEMA',
  NDBCLUSTER = 'NDBCLUSTER',
  NDB = 'NDB',
  MRG_MYISAM = 'MRG_MYISAM',
  MYISAM = 'MYISAM',
  INNODB = 'INNODB',
  FEDERATED = 'FEDERATED',
  CSV = 'CSV',
  BLACKHOLE = 'BLACKHOLE',
  MULTIPOLYGON = 'MULTIPOLYGON',
  POLYGON = 'POLYGON',
  MULTIPOINT = 'MULTIPOINT',
  POINT = 'POINT',
  MULTILINESTRING = 'MULTILINESTRING',
  LINESTRING = 'LINESTRING',
  GEOMETRYCOLLECTION = 'GEOMETRYCOLLECTION',
  ENUM = 'ENUM',
  VARBINARY = 'VARBINARY',
  LONGBLOB = 'LONGBLOB',
  MEDIUMBLOB = 'MEDIUMBLOB',
  TINYBLOB = 'TINYBLOB',
  BLOB = 'BLOB',
  NUMERIC = 'NUMERIC',
  REAL = 'REAL',
  ZEROFILL = 'ZEROFILL',
  MEDIUMINT = 'MEDIUMINT',
  COLLATE = 'COLLATE',
  LONGTEXT = 'LONGTEXT',
  MEDIUMTEXT = 'MEDIUMTEXT',
  TINYTEXT = 'TINYTEXT',
  VARCHAR = 'VARCHAR',
  MEMORY = 'MEMORY',
  DISK = 'DISK',
  STORAGE = 'STORAGE',
  DYNAMIC = 'DYNAMIC',
  FIXED = 'FIXED',
  COLUMN_FORMAT = 'COLUMN_FORMAT',
  PRIMARY = 'PRIMARY',
  AUTO_INCREMENT = 'AUTO_INCREMENT',
  DEFAULT = 'DEFAULT',
  STRAIGHT_JOIN = 'STRAIGHT_JOIN',
  STARTING = 'STARTING',
  ENCLOSED = 'ENCLOSED',
  OPTIONALLY = 'OPTIONALLY',
  OUTFILE = 'OUTFILE',
  DUMPFILE = 'DUMPFILE',
  GET_FORMAT = 'GET_FORMAT',
  CONVERT = 'CONVERT',
  WEIGHT_STRING = 'WEIGHT_STRING',
  TRIM = 'TRIM',
  SYSDATE = 'SYSDATE',
  SUBSTRING = 'SUBSTRING',
  SUBSTR = 'SUBSTR',
  POSITION = 'POSITION',
  NOW = 'NOW',
  LOCALTIMESTAMP = 'LOCALTIMESTAMP',
  EXTRACT = 'EXTRACT',
  DATE_SUB = 'DATE_SUB',
  DATE_ADD = 'DATE_ADD',
  CURTIME = 'CURTIME',
  CURDATE = 'CURDATE',
  LOCALTIME = 'LOCALTIME',
  CURRENT_USER = 'CURRENT_USER',
  CURRENT_TIMESTAMP = 'CURRENT_TIMESTAMP',
  CURRENT_TIME = 'CURRENT_TIME',
  CURRENT_DATE = 'CURRENT_DATE',
  QUARTER = 'QUARTER',
  VARIANCE = 'VARIANCE',
  VAR_SAMP = 'VAR_SAMP',
  VAR_POP = 'VAR_POP',
  SUM = 'SUM',
  STDDEV_SAMP = 'STDDEV_SAMP',
  STDDEV_POP = 'STDDEV_POP',
  STDDEV = 'STDDEV',
  STD = 'STD',
  MAX = 'MAX',
  GROUP_CONCAT = 'GROUP_CONCAT',
  COUNT = 'COUNT',
  BIT_XOR = 'BIT_XOR',
  BIT_OR = 'BIT_OR',
  BIT_AND = 'BIT_AND',
  BIT = 'BIT',
  AVG = 'AVG',
  UTC_TIMESTAMP = 'UTC_TIMESTAMP',
  UTC_TIME = 'UTC_TIME',
  UTC_DATE = 'UTC_DATE',
  TRAILING = 'TRAILING',
  LEADING = 'LEADING',
  REVERSE = 'REVERSE',
  LEVEL = 'LEVEL',
  WEEK = 'WEEK',
  DAY_MICROSECOND = 'DAY_MICROSECOND',
  HOUR_MICROSECOND = 'HOUR_MICROSECOND',
  MINUTE_MICROSECOND = 'MINUTE_MICROSECOND',
  SECOND_MICROSECOND = 'SECOND_MICROSECOND',
  MICROSECOND = 'MICROSECOND',
  MINUTE_SECOND = 'MINUTE_SECOND',
  HOUR_SECOND = 'HOUR_SECOND',
  HOUR_MINUTE = 'HOUR_MINUTE',
  DAY_SECOND = 'DAY_SECOND',
  SECOND = 'SECOND',
  DAY_MINUTE = 'DAY_MINUTE',
  MINUTE = 'MINUTE',
  DAY_HOUR = 'DAY_HOUR',
  HOUR = 'HOUR',
  DAY = 'DAY',
  YEAR_MONTH = 'YEAR_MONTH',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
  INTEGER = 'INTEGER',
  CHARACTER = 'CHARACTER',
  NCHAR = 'NCHAR',
  CHAR = 'CHAR',
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
  SIGNED = 'SIGNED',
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
  TEXT = 'TEXT',
  SEQUENCEFILE = 'SEQUENCEFILE',
  FILEFORMAT = 'FILEFORMAT',
  STORED = 'STORED',
  LINES = 'LINES',
  KEY_TYPE = 'KEY_TYPE',
  KEYS = 'KEYS',
  KEY = 'KEY',
  ITEMS = 'ITEMS',
  COLLECTION = 'COLLECTION',
  ESCAPED = 'ESCAPED',
  TERMINATED = 'TERMINATED',
  MIN = 'MIN',
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
  TIME = 'TIME',
  DATE = 'DATE',
  DOUBLE = 'DOUBLE',
  FLOAT = 'FLOAT',
  BIGINT = 'BIGINT',
  SMALLINT = 'SMALLINT',
  TINYINT = 'TINYINT',
  INT = 'INT',
  BOOLEAN = 'BOOLEAN',
  BOOL = 'BOOL',
  COMMENT = 'COMMENT',
  PROTECTION = 'PROTECTION',
  IGNORE = 'IGNORE',
  NO = 'NO',
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
  UNIQUE = 'UNIQUE',
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
  ID = 'ID',
}

export const Tokens = {
  WS,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  STRING_LITERAL,
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
  ONE_DECIMAL,
  ZERO_DECIMAL,
  Number,
  LIFECYCLE,
  TABLESPACE,
  STATS_PERSISTENT,
  STATS_AUTO_RECALC,
  COMPACT,
  REDUNDANT,
  COMPRESSED,
  ROW_FORMAT,
  PASSWORD,
  PACK_KEYS,
  MIN_ROWS,
  MAX_ROWS,
  KEY_BLOCK_SIZE,
  LAST,
  INSERT_METHOD,
  ENCRYPTION,
  DELAY_KEY_WRITE,
  CONNECTION,
  COMPRESSION,
  AVG_ROW_LENGTH,
  ENGINE,
  CHECKSUM,
  CHARSET,
  PERFOMANCE_SCHEMA,
  NDBCLUSTER,
  NDB,
  MRG_MYISAM,
  MYISAM,
  INNODB,
  FEDERATED,
  CSV,
  BLACKHOLE,
  MULTIPOLYGON,
  POLYGON,
  MULTIPOINT,
  POINT,
  MULTILINESTRING,
  LINESTRING,
  GEOMETRYCOLLECTION,
  ENUM,
  VARBINARY,
  LONGBLOB,
  MEDIUMBLOB,
  TINYBLOB,
  BLOB,
  NUMERIC,
  REAL,
  ZEROFILL,
  MEDIUMINT,
  COLLATE,
  LONGTEXT,
  MEDIUMTEXT,
  TINYTEXT,
  VARCHAR,
  MEMORY,
  DISK,
  STORAGE,
  DYNAMIC,
  FIXED,
  COLUMN_FORMAT,
  PRIMARY,
  AUTO_INCREMENT,
  DEFAULT,
  STRAIGHT_JOIN,
  STARTING,
  ENCLOSED,
  OPTIONALLY,
  OUTFILE,
  DUMPFILE,
  GET_FORMAT,
  CONVERT,
  WEIGHT_STRING,
  TRIM,
  SYSDATE,
  SUBSTRING,
  SUBSTR,
  POSITION,
  NOW,
  LOCALTIMESTAMP,
  EXTRACT,
  DATE_SUB,
  DATE_ADD,
  CURTIME,
  CURDATE,
  LOCALTIME,
  CURRENT_USER,
  CURRENT_TIMESTAMP,
  CURRENT_TIME,
  CURRENT_DATE,
  QUARTER,
  VARIANCE,
  VAR_SAMP,
  VAR_POP,
  SUM,
  STDDEV_SAMP,
  STDDEV_POP,
  STDDEV,
  STD,
  MAX,
  GROUP_CONCAT,
  COUNT,
  BIT_XOR,
  BIT_OR,
  BIT_AND,
  BIT,
  AVG,
  UTC_TIMESTAMP,
  UTC_TIME,
  UTC_DATE,
  TRAILING,
  LEADING,
  REVERSE,
  LEVEL,
  WEEK,
  DAY_MICROSECOND,
  HOUR_MICROSECOND,
  MINUTE_MICROSECOND,
  SECOND_MICROSECOND,
  MICROSECOND,
  MINUTE_SECOND,
  HOUR_SECOND,
  HOUR_MINUTE,
  DAY_SECOND,
  SECOND,
  DAY_MINUTE,
  MINUTE,
  DAY_HOUR,
  HOUR,
  DAY,
  YEAR_MONTH,
  MONTH,
  YEAR,
  INTEGER,
  CHARACTER,
  NCHAR,
  CHAR,
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
  SIGNED,
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
  TEXT,
  SEQUENCEFILE,
  FILEFORMAT,
  STORED,
  LINES,
  KEY_TYPE,
  KEYS,
  KEY,
  ITEMS,
  COLLECTION,
  ESCAPED,
  TERMINATED,
  MIN,
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
  TIME,
  DATE,
  DOUBLE,
  FLOAT,
  BIGINT,
  SMALLINT,
  TINYINT,
  INT,
  BOOLEAN,
  BOOL,
  COMMENT,
  PROTECTION,
  IGNORE,
  NO,
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
  UNIQUE,
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
  ID,
};

export const tokens = [
  WhiteSpace,
  WS,
  ByteLengthLiteral,
  DecimalLiteral,
  TinyintLiteral,
  SmallintLiteral,
  BigintLiteral,
  CharSetLiteral,
  STRING_LITERAL,
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
  ONE_DECIMAL,
  ZERO_DECIMAL,
  Number,
  LIFECYCLE,
  TABLESPACE,
  STATS_PERSISTENT,
  STATS_AUTO_RECALC,
  COMPACT,
  REDUNDANT,
  COMPRESSED,
  ROW_FORMAT,
  PASSWORD,
  PACK_KEYS,
  MIN_ROWS,
  MAX_ROWS,
  KEY_BLOCK_SIZE,
  LAST,
  INSERT_METHOD,
  ENCRYPTION,
  DELAY_KEY_WRITE,
  CONNECTION,
  COMPRESSION,
  AVG_ROW_LENGTH,
  ENGINE,
  CHECKSUM,
  CHARSET,
  PERFOMANCE_SCHEMA,
  NDBCLUSTER,
  NDB,
  MRG_MYISAM,
  MYISAM,
  INNODB,
  FEDERATED,
  CSV,
  BLACKHOLE,
  MULTIPOLYGON,
  POLYGON,
  MULTIPOINT,
  POINT,
  MULTILINESTRING,
  LINESTRING,
  GEOMETRYCOLLECTION,
  ENUM,
  VARBINARY,
  LONGBLOB,
  MEDIUMBLOB,
  TINYBLOB,
  BLOB,
  NUMERIC,
  REAL,
  ZEROFILL,
  MEDIUMINT,
  COLLATE,
  LONGTEXT,
  MEDIUMTEXT,
  TINYTEXT,
  VARCHAR,
  MEMORY,
  DISK,
  STORAGE,
  DYNAMIC,
  FIXED,
  COLUMN_FORMAT,
  PRIMARY,
  AUTO_INCREMENT,
  DEFAULT,
  STRAIGHT_JOIN,
  STARTING,
  ENCLOSED,
  OPTIONALLY,
  OUTFILE,
  DUMPFILE,
  GET_FORMAT,
  CONVERT,
  WEIGHT_STRING,
  TRIM,
  SYSDATE,
  SUBSTRING,
  SUBSTR,
  POSITION,
  NOW,
  LOCALTIMESTAMP,
  EXTRACT,
  DATE_SUB,
  DATE_ADD,
  CURTIME,
  CURDATE,
  LOCALTIME,
  CURRENT_USER,
  CURRENT_TIMESTAMP,
  CURRENT_TIME,
  CURRENT_DATE,
  QUARTER,
  VARIANCE,
  VAR_SAMP,
  VAR_POP,
  SUM,
  STDDEV_SAMP,
  STDDEV_POP,
  STDDEV,
  STD,
  MAX,
  GROUP_CONCAT,
  COUNT,
  BIT_XOR,
  BIT_OR,
  BIT_AND,
  BIT,
  AVG,
  UTC_TIMESTAMP,
  UTC_TIME,
  UTC_DATE,
  TRAILING,
  LEADING,
  REVERSE,
  LEVEL,
  WEEK,
  DAY_MICROSECOND,
  HOUR_MICROSECOND,
  MINUTE_MICROSECOND,
  SECOND_MICROSECOND,
  MICROSECOND,
  MINUTE_SECOND,
  HOUR_SECOND,
  HOUR_MINUTE,
  DAY_SECOND,
  SECOND,
  DAY_MINUTE,
  MINUTE,
  DAY_HOUR,
  HOUR,
  DAY,
  YEAR_MONTH,
  MONTH,
  YEAR,
  INTEGER,
  CHARACTER,
  NCHAR,
  CHAR,
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
  SIGNED,
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
  TEXT,
  SEQUENCEFILE,
  FILEFORMAT,
  STORED,
  LINES,
  KEY_TYPE,
  KEYS,
  KEY,
  ITEMS,
  COLLECTION,
  ESCAPED,
  TERMINATED,
  MIN,
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
  TIME,
  DATE,
  DOUBLE,
  FLOAT,
  BIGINT,
  SMALLINT,
  TINYINT,
  INT,
  BOOLEAN,
  BOOL,
  COMMENT,
  PROTECTION,
  IGNORE,
  NO,
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
  UNIQUE,
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
  ID,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
