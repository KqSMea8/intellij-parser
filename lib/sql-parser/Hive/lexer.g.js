(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chevrotain"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chevrotain = require("chevrotain");
    var WhiteSpace = chevrotain.createToken({
        name: 'WhiteSpace',
        pattern: /\s+/,
        group: chevrotain.Lexer.SKIPPED,
        line_breaks: true,
    });
    var ID = chevrotain.createToken({
        name: 'ID',
        pattern: /[A-Za-z_$0-9*]+/i,
    });
    var WS = chevrotain.createToken({
        name: 'WS',
        pattern: /(\ |\r|\t|\n)/i,
        longer_alt: ID,
    });
    var ByteLengthLiteral = chevrotain.createToken({
        name: 'ByteLengthLiteral',
        pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
        longer_alt: ID,
    });
    var DecimalLiteral = chevrotain.createToken({
        name: 'DecimalLiteral',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
        longer_alt: ID,
    });
    var TinyintLiteral = chevrotain.createToken({
        name: 'TinyintLiteral',
        pattern: /([0-9])+Y/i,
        longer_alt: ID,
    });
    var SmallintLiteral = chevrotain.createToken({
        name: 'SmallintLiteral',
        pattern: /([0-9])+S/i,
        longer_alt: ID,
    });
    var BigintLiteral = chevrotain.createToken({
        name: 'BigintLiteral',
        pattern: /([0-9])+L/i,
        longer_alt: ID,
    });
    var CharSetLiteral = chevrotain.createToken({
        name: 'CharSetLiteral',
        pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
        longer_alt: ID,
    });
    var STRING_LITERAL = chevrotain.createToken({
        name: 'STRING_LITERAL',
        pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
        longer_alt: ID,
    });
    var DOLLAR = chevrotain.createToken({
        name: 'DOLLAR',
        pattern: /\$/i,
        longer_alt: ID,
    });
    var QUESTION = chevrotain.createToken({
        name: 'QUESTION',
        pattern: /\?/i,
        longer_alt: ID,
    });
    var BITWISEXOR = chevrotain.createToken({
        name: 'BITWISEXOR',
        pattern: /\^/i,
        longer_alt: ID,
    });
    var BITWISEOR = chevrotain.createToken({
        name: 'BITWISEOR',
        pattern: /\|/i,
        longer_alt: ID,
    });
    var TILDE = chevrotain.createToken({
        name: 'TILDE',
        pattern: /\~/i,
        longer_alt: ID,
    });
    var AMPERSAND = chevrotain.createToken({
        name: 'AMPERSAND',
        pattern: /\&/i,
        longer_alt: ID,
    });
    var DIV = chevrotain.createToken({
        name: 'DIV',
        pattern: /DIV/i,
        longer_alt: ID,
    });
    var MOD = chevrotain.createToken({
        name: 'MOD',
        pattern: /\%/i,
        longer_alt: ID,
    });
    var STAR = chevrotain.createToken({
        name: 'STAR',
        pattern: /\*/i,
        longer_alt: ID,
    });
    var MINUS = chevrotain.createToken({
        name: 'MINUS',
        pattern: /\-/i,
        longer_alt: ID,
    });
    var PLUS = chevrotain.createToken({
        name: 'PLUS',
        pattern: /\+/i,
        longer_alt: ID,
    });
    var DIVIDE = chevrotain.createToken({
        name: 'DIVIDE',
        pattern: /\//i,
        longer_alt: ID,
    });
    var GREATERTHAN = chevrotain.createToken({
        name: 'GREATERTHAN',
        pattern: /\>/i,
        longer_alt: ID,
    });
    var GREATERTHANOREQUALTO = chevrotain.createToken({
        name: 'GREATERTHANOREQUALTO',
        pattern: /\>\=/i,
        longer_alt: ID,
    });
    var LESSTHAN = chevrotain.createToken({
        name: 'LESSTHAN',
        pattern: /\</i,
        longer_alt: ID,
    });
    var LESSTHANOREQUALTO = chevrotain.createToken({
        name: 'LESSTHANOREQUALTO',
        pattern: /\<\=/i,
        longer_alt: ID,
    });
    var NOTEQUAL = chevrotain.createToken({
        name: 'NOTEQUAL',
        pattern: /(\<\>|\!\=)/i,
        longer_alt: ID,
    });
    var EQUAL_NS = chevrotain.createToken({
        name: 'EQUAL_NS',
        pattern: /\<\=\>/i,
        longer_alt: ID,
    });
    var EQUAL = chevrotain.createToken({
        name: 'EQUAL',
        pattern: /(\=|\=\=)/i,
        longer_alt: ID,
    });
    var RCURLY = chevrotain.createToken({
        name: 'RCURLY',
        pattern: /\}/i,
        longer_alt: ID,
    });
    var LCURLY = chevrotain.createToken({
        name: 'LCURLY',
        pattern: /\{/i,
        longer_alt: ID,
    });
    var RSQUARE = chevrotain.createToken({
        name: 'RSQUARE',
        pattern: /\]/i,
        longer_alt: ID,
    });
    var LSQUARE = chevrotain.createToken({
        name: 'LSQUARE',
        pattern: /\[/i,
        longer_alt: ID,
    });
    var RPAREN = chevrotain.createToken({
        name: 'RPAREN',
        pattern: /\)/i,
        longer_alt: ID,
    });
    var LPAREN = chevrotain.createToken({
        name: 'LPAREN',
        pattern: /\(/i,
        longer_alt: ID,
    });
    var SEMICOLON = chevrotain.createToken({
        name: 'SEMICOLON',
        pattern: /\;/i,
        longer_alt: ID,
    });
    var COMMA = chevrotain.createToken({
        name: 'COMMA',
        pattern: /\,/i,
        longer_alt: ID,
    });
    var COLON = chevrotain.createToken({
        name: 'COLON',
        pattern: /\:/i,
        longer_alt: ID,
    });
    var DOT = chevrotain.createToken({
        name: 'DOT',
        pattern: /\./i,
        longer_alt: ID,
    });
    var ONE_DECIMAL = chevrotain.createToken({
        name: 'ONE_DECIMAL',
        pattern: /1/i,
        longer_alt: ID,
    });
    var ZERO_DECIMAL = chevrotain.createToken({
        name: 'ZERO_DECIMAL',
        pattern: /0/i,
        longer_alt: ID,
    });
    var Number = chevrotain.createToken({
        name: 'Number',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
        longer_alt: ID,
    });
    var LIFECYCLE = chevrotain.createToken({
        name: 'LIFECYCLE',
        pattern: /LIFECYCLE/i,
        longer_alt: ID,
    });
    var TABLESPACE = chevrotain.createToken({
        name: 'TABLESPACE',
        pattern: /TABLESPACE/i,
        longer_alt: ID,
    });
    var STATS_PERSISTENT = chevrotain.createToken({
        name: 'STATS_PERSISTENT',
        pattern: /STATS_PERSISTENT/i,
        longer_alt: ID,
    });
    var STATS_AUTO_RECALC = chevrotain.createToken({
        name: 'STATS_AUTO_RECALC',
        pattern: /STATS_AUTO_RECALC/i,
        longer_alt: ID,
    });
    var COMPACT = chevrotain.createToken({
        name: 'COMPACT',
        pattern: /COMPACT/i,
        longer_alt: ID,
    });
    var REDUNDANT = chevrotain.createToken({
        name: 'REDUNDANT',
        pattern: /REDUNDANT/i,
        longer_alt: ID,
    });
    var COMPRESSED = chevrotain.createToken({
        name: 'COMPRESSED',
        pattern: /COMPRESSED/i,
        longer_alt: ID,
    });
    var ROW_FORMAT = chevrotain.createToken({
        name: 'ROW_FORMAT',
        pattern: /ROW_FORMAT/i,
        longer_alt: ID,
    });
    var PASSWORD = chevrotain.createToken({
        name: 'PASSWORD',
        pattern: /PASSWORD/i,
        longer_alt: ID,
    });
    var PACK_KEYS = chevrotain.createToken({
        name: 'PACK_KEYS',
        pattern: /PACK_KEYS/i,
        longer_alt: ID,
    });
    var MIN_ROWS = chevrotain.createToken({
        name: 'MIN_ROWS',
        pattern: /MIN_ROWS/i,
        longer_alt: ID,
    });
    var MAX_ROWS = chevrotain.createToken({
        name: 'MAX_ROWS',
        pattern: /MAX_ROWS/i,
        longer_alt: ID,
    });
    var KEY_BLOCK_SIZE = chevrotain.createToken({
        name: 'KEY_BLOCK_SIZE',
        pattern: /KEY_BLOCK_SIZE/i,
        longer_alt: ID,
    });
    var LAST = chevrotain.createToken({
        name: 'LAST',
        pattern: /LAST/i,
        longer_alt: ID,
    });
    var INSERT_METHOD = chevrotain.createToken({
        name: 'INSERT_METHOD',
        pattern: /INSERT_METHOD/i,
        longer_alt: ID,
    });
    var ENCRYPTION = chevrotain.createToken({
        name: 'ENCRYPTION',
        pattern: /ENCRYPTION/i,
        longer_alt: ID,
    });
    var DELAY_KEY_WRITE = chevrotain.createToken({
        name: 'DELAY_KEY_WRITE',
        pattern: /DELAY_KEY_WRITE/i,
        longer_alt: ID,
    });
    var CONNECTION = chevrotain.createToken({
        name: 'CONNECTION',
        pattern: /CONNECTION/i,
        longer_alt: ID,
    });
    var COMPRESSION = chevrotain.createToken({
        name: 'COMPRESSION',
        pattern: /COMPRESSION/i,
        longer_alt: ID,
    });
    var AVG_ROW_LENGTH = chevrotain.createToken({
        name: 'AVG_ROW_LENGTH',
        pattern: /AVG_ROW_LENGTH/i,
        longer_alt: ID,
    });
    var ENGINE = chevrotain.createToken({
        name: 'ENGINE',
        pattern: /ENGINE/i,
        longer_alt: ID,
    });
    var CHECKSUM = chevrotain.createToken({
        name: 'CHECKSUM',
        pattern: /CHECKSUM/i,
        longer_alt: ID,
    });
    var CHARSET = chevrotain.createToken({
        name: 'CHARSET',
        pattern: /CHARSET/i,
        longer_alt: ID,
    });
    var PERFOMANCE_SCHEMA = chevrotain.createToken({
        name: 'PERFOMANCE_SCHEMA',
        pattern: /PERFOMANCE_SCHEMA/i,
        longer_alt: ID,
    });
    var NDBCLUSTER = chevrotain.createToken({
        name: 'NDBCLUSTER',
        pattern: /NDBCLUSTER/i,
        longer_alt: ID,
    });
    var NDB = chevrotain.createToken({
        name: 'NDB',
        pattern: /NDB/i,
        longer_alt: ID,
    });
    var MRG_MYISAM = chevrotain.createToken({
        name: 'MRG_MYISAM',
        pattern: /MRG_MYISAM/i,
        longer_alt: ID,
    });
    var MYISAM = chevrotain.createToken({
        name: 'MYISAM',
        pattern: /MYISAM/i,
        longer_alt: ID,
    });
    var INNODB = chevrotain.createToken({
        name: 'INNODB',
        pattern: /INNODB/i,
        longer_alt: ID,
    });
    var FEDERATED = chevrotain.createToken({
        name: 'FEDERATED',
        pattern: /FEDERATED/i,
        longer_alt: ID,
    });
    var CSV = chevrotain.createToken({
        name: 'CSV',
        pattern: /CSV/i,
        longer_alt: ID,
    });
    var BLACKHOLE = chevrotain.createToken({
        name: 'BLACKHOLE',
        pattern: /BLACKHOLE/i,
        longer_alt: ID,
    });
    var MULTIPOLYGON = chevrotain.createToken({
        name: 'MULTIPOLYGON',
        pattern: /MULTIPOLYGON/i,
        longer_alt: ID,
    });
    var POLYGON = chevrotain.createToken({
        name: 'POLYGON',
        pattern: /POLYGON/i,
        longer_alt: ID,
    });
    var MULTIPOINT = chevrotain.createToken({
        name: 'MULTIPOINT',
        pattern: /MULTIPOINT/i,
        longer_alt: ID,
    });
    var POINT = chevrotain.createToken({
        name: 'POINT',
        pattern: /POINT/i,
        longer_alt: ID,
    });
    var MULTILINESTRING = chevrotain.createToken({
        name: 'MULTILINESTRING',
        pattern: /MULTILINESTRING/i,
        longer_alt: ID,
    });
    var LINESTRING = chevrotain.createToken({
        name: 'LINESTRING',
        pattern: /LINESTRING/i,
        longer_alt: ID,
    });
    var GEOMETRYCOLLECTION = chevrotain.createToken({
        name: 'GEOMETRYCOLLECTION',
        pattern: /GEOMETRYCOLLECTION/i,
        longer_alt: ID,
    });
    var ENUM = chevrotain.createToken({
        name: 'ENUM',
        pattern: /ENUM/i,
        longer_alt: ID,
    });
    var VARBINARY = chevrotain.createToken({
        name: 'VARBINARY',
        pattern: /VARBINARY/i,
        longer_alt: ID,
    });
    var LONGBLOB = chevrotain.createToken({
        name: 'LONGBLOB',
        pattern: /LONGBLOB/i,
        longer_alt: ID,
    });
    var MEDIUMBLOB = chevrotain.createToken({
        name: 'MEDIUMBLOB',
        pattern: /MEDIUMBLOB/i,
        longer_alt: ID,
    });
    var TINYBLOB = chevrotain.createToken({
        name: 'TINYBLOB',
        pattern: /TINYBLOB/i,
        longer_alt: ID,
    });
    var BLOB = chevrotain.createToken({
        name: 'BLOB',
        pattern: /BLOB/i,
        longer_alt: ID,
    });
    var NUMERIC = chevrotain.createToken({
        name: 'NUMERIC',
        pattern: /NUMERIC/i,
        longer_alt: ID,
    });
    var REAL = chevrotain.createToken({
        name: 'REAL',
        pattern: /REAL/i,
        longer_alt: ID,
    });
    var ZEROFILL = chevrotain.createToken({
        name: 'ZEROFILL',
        pattern: /ZEROFILL/i,
        longer_alt: ID,
    });
    var MEDIUMINT = chevrotain.createToken({
        name: 'MEDIUMINT',
        pattern: /MEDIUMINT/i,
        longer_alt: ID,
    });
    var COLLATE = chevrotain.createToken({
        name: 'COLLATE',
        pattern: /COLLATE/i,
        longer_alt: ID,
    });
    var LONGTEXT = chevrotain.createToken({
        name: 'LONGTEXT',
        pattern: /LONGTEXT/i,
        longer_alt: ID,
    });
    var MEDIUMTEXT = chevrotain.createToken({
        name: 'MEDIUMTEXT',
        pattern: /MEDIUMTEXT/i,
        longer_alt: ID,
    });
    var TINYTEXT = chevrotain.createToken({
        name: 'TINYTEXT',
        pattern: /TINYTEXT/i,
        longer_alt: ID,
    });
    var VARCHAR = chevrotain.createToken({
        name: 'VARCHAR',
        pattern: /VARCHAR/i,
        longer_alt: ID,
    });
    var MEMORY = chevrotain.createToken({
        name: 'MEMORY',
        pattern: /MEMORY/i,
        longer_alt: ID,
    });
    var DISK = chevrotain.createToken({
        name: 'DISK',
        pattern: /DISK/i,
        longer_alt: ID,
    });
    var STORAGE = chevrotain.createToken({
        name: 'STORAGE',
        pattern: /STORAGE/i,
        longer_alt: ID,
    });
    var DYNAMIC = chevrotain.createToken({
        name: 'DYNAMIC',
        pattern: /DYNAMIC/i,
        longer_alt: ID,
    });
    var FIXED = chevrotain.createToken({
        name: 'FIXED',
        pattern: /FIXED/i,
        longer_alt: ID,
    });
    var COLUMN_FORMAT = chevrotain.createToken({
        name: 'COLUMN_FORMAT',
        pattern: /COLUMN_FORMAT/i,
        longer_alt: ID,
    });
    var PRIMARY = chevrotain.createToken({
        name: 'PRIMARY',
        pattern: /PRIMARY/i,
        longer_alt: ID,
    });
    var AUTO_INCREMENT = chevrotain.createToken({
        name: 'AUTO_INCREMENT',
        pattern: /AUTO_INCREMENT/i,
        longer_alt: ID,
    });
    var DEFAULT = chevrotain.createToken({
        name: 'DEFAULT',
        pattern: /DEFAULT/i,
        longer_alt: ID,
    });
    var STRAIGHT_JOIN = chevrotain.createToken({
        name: 'STRAIGHT_JOIN',
        pattern: /STRAIGHT_JOIN/i,
        longer_alt: ID,
    });
    var STARTING = chevrotain.createToken({
        name: 'STARTING',
        pattern: /STARTING/i,
        longer_alt: ID,
    });
    var ENCLOSED = chevrotain.createToken({
        name: 'ENCLOSED',
        pattern: /ENCLOSED/i,
        longer_alt: ID,
    });
    var OPTIONALLY = chevrotain.createToken({
        name: 'OPTIONALLY',
        pattern: /OPTIONALLY/i,
        longer_alt: ID,
    });
    var OUTFILE = chevrotain.createToken({
        name: 'OUTFILE',
        pattern: /OUTFILE/i,
        longer_alt: ID,
    });
    var DUMPFILE = chevrotain.createToken({
        name: 'DUMPFILE',
        pattern: /DUMPFILE/i,
        longer_alt: ID,
    });
    var GET_FORMAT = chevrotain.createToken({
        name: 'GET_FORMAT',
        pattern: /GET_FORMAT/i,
        longer_alt: ID,
    });
    var CONVERT = chevrotain.createToken({
        name: 'CONVERT',
        pattern: /CONVERT/i,
        longer_alt: ID,
    });
    var WEIGHT_STRING = chevrotain.createToken({
        name: 'WEIGHT_STRING',
        pattern: /WEIGHT_STRING/i,
        longer_alt: ID,
    });
    var TRIM = chevrotain.createToken({
        name: 'TRIM',
        pattern: /TRIM/i,
        longer_alt: ID,
    });
    var SYSDATE = chevrotain.createToken({
        name: 'SYSDATE',
        pattern: /SYSDATE/i,
        longer_alt: ID,
    });
    var SUBSTRING = chevrotain.createToken({
        name: 'SUBSTRING',
        pattern: /SUBSTRING/i,
        longer_alt: ID,
    });
    var SUBSTR = chevrotain.createToken({
        name: 'SUBSTR',
        pattern: /SUBSTR/i,
        longer_alt: ID,
    });
    var POSITION = chevrotain.createToken({
        name: 'POSITION',
        pattern: /POSITION/i,
        longer_alt: ID,
    });
    var NOW = chevrotain.createToken({
        name: 'NOW',
        pattern: /NOW/i,
        longer_alt: ID,
    });
    var LOCALTIMESTAMP = chevrotain.createToken({
        name: 'LOCALTIMESTAMP',
        pattern: /LOCALTIMESTAMP/i,
        longer_alt: ID,
    });
    var EXTRACT = chevrotain.createToken({
        name: 'EXTRACT',
        pattern: /EXTRACT/i,
        longer_alt: ID,
    });
    var DATE_SUB = chevrotain.createToken({
        name: 'DATE_SUB',
        pattern: /DATE_SUB/i,
        longer_alt: ID,
    });
    var DATE_ADD = chevrotain.createToken({
        name: 'DATE_ADD',
        pattern: /DATE_ADD/i,
        longer_alt: ID,
    });
    var CURTIME = chevrotain.createToken({
        name: 'CURTIME',
        pattern: /CURTIME/i,
        longer_alt: ID,
    });
    var CURDATE = chevrotain.createToken({
        name: 'CURDATE',
        pattern: /CURDATE/i,
        longer_alt: ID,
    });
    var LOCALTIME = chevrotain.createToken({
        name: 'LOCALTIME',
        pattern: /LOCALTIME/i,
        longer_alt: ID,
    });
    var CURRENT_USER = chevrotain.createToken({
        name: 'CURRENT_USER',
        pattern: /CURRENT_USER/i,
        longer_alt: ID,
    });
    var CURRENT_TIMESTAMP = chevrotain.createToken({
        name: 'CURRENT_TIMESTAMP',
        pattern: /CURRENT_TIMESTAMP/i,
        longer_alt: ID,
    });
    var CURRENT_TIME = chevrotain.createToken({
        name: 'CURRENT_TIME',
        pattern: /CURRENT_TIME/i,
        longer_alt: ID,
    });
    var CURRENT_DATE = chevrotain.createToken({
        name: 'CURRENT_DATE',
        pattern: /CURRENT_DATE/i,
        longer_alt: ID,
    });
    var QUARTER = chevrotain.createToken({
        name: 'QUARTER',
        pattern: /QUARTER/i,
        longer_alt: ID,
    });
    var VARIANCE = chevrotain.createToken({
        name: 'VARIANCE',
        pattern: /VARIANCE/i,
        longer_alt: ID,
    });
    var VAR_SAMP = chevrotain.createToken({
        name: 'VAR_SAMP',
        pattern: /VAR_SAMP/i,
        longer_alt: ID,
    });
    var VAR_POP = chevrotain.createToken({
        name: 'VAR_POP',
        pattern: /VAR_POP/i,
        longer_alt: ID,
    });
    var SUM = chevrotain.createToken({
        name: 'SUM',
        pattern: /SUM/i,
        longer_alt: ID,
    });
    var STDDEV_SAMP = chevrotain.createToken({
        name: 'STDDEV_SAMP',
        pattern: /STDDEV_SAMP/i,
        longer_alt: ID,
    });
    var STDDEV_POP = chevrotain.createToken({
        name: 'STDDEV_POP',
        pattern: /STDDEV_POP/i,
        longer_alt: ID,
    });
    var STDDEV = chevrotain.createToken({
        name: 'STDDEV',
        pattern: /STDDEV/i,
        longer_alt: ID,
    });
    var STD = chevrotain.createToken({
        name: 'STD',
        pattern: /STD/i,
        longer_alt: ID,
    });
    var MAX = chevrotain.createToken({
        name: 'MAX',
        pattern: /MAX/i,
        longer_alt: ID,
    });
    var GROUP_CONCAT = chevrotain.createToken({
        name: 'GROUP_CONCAT',
        pattern: /GROUP_CONCAT/i,
        longer_alt: ID,
    });
    var COUNT = chevrotain.createToken({
        name: 'COUNT',
        pattern: /COUNT/i,
        longer_alt: ID,
    });
    var BIT_XOR = chevrotain.createToken({
        name: 'BIT_XOR',
        pattern: /BIT_XOR/i,
        longer_alt: ID,
    });
    var BIT_OR = chevrotain.createToken({
        name: 'BIT_OR',
        pattern: /BIT_OR/i,
        longer_alt: ID,
    });
    var BIT_AND = chevrotain.createToken({
        name: 'BIT_AND',
        pattern: /BIT_AND/i,
        longer_alt: ID,
    });
    var BIT = chevrotain.createToken({
        name: 'BIT',
        pattern: /BIT/i,
        longer_alt: ID,
    });
    var AVG = chevrotain.createToken({
        name: 'AVG',
        pattern: /AVG/i,
        longer_alt: ID,
    });
    var UTC_TIMESTAMP = chevrotain.createToken({
        name: 'UTC_TIMESTAMP',
        pattern: /UTC_TIMESTAMP/i,
        longer_alt: ID,
    });
    var UTC_TIME = chevrotain.createToken({
        name: 'UTC_TIME',
        pattern: /UTC_TIME/i,
        longer_alt: ID,
    });
    var UTC_DATE = chevrotain.createToken({
        name: 'UTC_DATE',
        pattern: /UTC_DATE/i,
        longer_alt: ID,
    });
    var TRAILING = chevrotain.createToken({
        name: 'TRAILING',
        pattern: /TRAILING/i,
        longer_alt: ID,
    });
    var LEADING = chevrotain.createToken({
        name: 'LEADING',
        pattern: /LEADING/i,
        longer_alt: ID,
    });
    var REVERSE = chevrotain.createToken({
        name: 'REVERSE',
        pattern: /REVERSE/i,
        longer_alt: ID,
    });
    var LEVEL = chevrotain.createToken({
        name: 'LEVEL',
        pattern: /LEVEL/i,
        longer_alt: ID,
    });
    var WEEK = chevrotain.createToken({
        name: 'WEEK',
        pattern: /WEEK/i,
        longer_alt: ID,
    });
    var DAY_MICROSECOND = chevrotain.createToken({
        name: 'DAY_MICROSECOND',
        pattern: /DAY_MICROSECOND/i,
        longer_alt: ID,
    });
    var HOUR_MICROSECOND = chevrotain.createToken({
        name: 'HOUR_MICROSECOND',
        pattern: /HOUR_MICROSECOND/i,
        longer_alt: ID,
    });
    var MINUTE_MICROSECOND = chevrotain.createToken({
        name: 'MINUTE_MICROSECOND',
        pattern: /MINUTE_MICROSECOND/i,
        longer_alt: ID,
    });
    var SECOND_MICROSECOND = chevrotain.createToken({
        name: 'SECOND_MICROSECOND',
        pattern: /SECOND_MICROSECOND/i,
        longer_alt: ID,
    });
    var MICROSECOND = chevrotain.createToken({
        name: 'MICROSECOND',
        pattern: /MICROSECOND/i,
        longer_alt: ID,
    });
    var MINUTE_SECOND = chevrotain.createToken({
        name: 'MINUTE_SECOND',
        pattern: /MINUTE_SECOND/i,
        longer_alt: ID,
    });
    var HOUR_SECOND = chevrotain.createToken({
        name: 'HOUR_SECOND',
        pattern: /HOUR_SECOND/i,
        longer_alt: ID,
    });
    var HOUR_MINUTE = chevrotain.createToken({
        name: 'HOUR_MINUTE',
        pattern: /HOUR_MINUTE/i,
        longer_alt: ID,
    });
    var DAY_SECOND = chevrotain.createToken({
        name: 'DAY_SECOND',
        pattern: /DAY_SECOND/i,
        longer_alt: ID,
    });
    var SECOND = chevrotain.createToken({
        name: 'SECOND',
        pattern: /SECOND/i,
        longer_alt: ID,
    });
    var DAY_MINUTE = chevrotain.createToken({
        name: 'DAY_MINUTE',
        pattern: /DAY_MINUTE/i,
        longer_alt: ID,
    });
    var MINUTE = chevrotain.createToken({
        name: 'MINUTE',
        pattern: /MINUTE/i,
        longer_alt: ID,
    });
    var DAY_HOUR = chevrotain.createToken({
        name: 'DAY_HOUR',
        pattern: /DAY_HOUR/i,
        longer_alt: ID,
    });
    var HOUR = chevrotain.createToken({
        name: 'HOUR',
        pattern: /HOUR/i,
        longer_alt: ID,
    });
    var DAY = chevrotain.createToken({
        name: 'DAY',
        pattern: /DAY/i,
        longer_alt: ID,
    });
    var YEAR_MONTH = chevrotain.createToken({
        name: 'YEAR_MONTH',
        pattern: /YEAR_MONTH/i,
        longer_alt: ID,
    });
    var MONTH = chevrotain.createToken({
        name: 'MONTH',
        pattern: /MONTH/i,
        longer_alt: ID,
    });
    var YEAR = chevrotain.createToken({
        name: 'YEAR',
        pattern: /YEAR/i,
        longer_alt: ID,
    });
    var INTEGER = chevrotain.createToken({
        name: 'INTEGER',
        pattern: /INTEGER/i,
        longer_alt: ID,
    });
    var CHARACTER = chevrotain.createToken({
        name: 'CHARACTER',
        pattern: /CHARACTER/i,
        longer_alt: ID,
    });
    var NCHAR = chevrotain.createToken({
        name: 'NCHAR',
        pattern: /NCHAR/i,
        longer_alt: ID,
    });
    var CHAR = chevrotain.createToken({
        name: 'CHAR',
        pattern: /CHAR/i,
        longer_alt: ID,
    });
    var VALUES = chevrotain.createToken({
        name: 'VALUES',
        pattern: /VALUES/i,
        longer_alt: ID,
    });
    var VALUE = chevrotain.createToken({
        name: 'VALUE',
        pattern: /VALUE/i,
        longer_alt: ID,
    });
    var EXCHANGE = chevrotain.createToken({
        name: 'EXCHANGE',
        pattern: /EXCHANGE/i,
        longer_alt: ID,
    });
    var INNER = chevrotain.createToken({
        name: 'INNER',
        pattern: /INNER/i,
        longer_alt: ID,
    });
    var ROLE = chevrotain.createToken({
        name: 'ROLE',
        pattern: /ROLE/i,
        longer_alt: ID,
    });
    var USER = chevrotain.createToken({
        name: 'USER',
        pattern: /USER/i,
        longer_alt: ID,
    });
    var PARTIALSCAN = chevrotain.createToken({
        name: 'PARTIALSCAN',
        pattern: /PARTIALSCAN/i,
        longer_alt: ID,
    });
    var NOSCAN = chevrotain.createToken({
        name: 'NOSCAN',
        pattern: /NOSCAN/i,
        longer_alt: ID,
    });
    var TRUNCATE = chevrotain.createToken({
        name: 'TRUNCATE',
        pattern: /TRUNCATE/i,
        longer_alt: ID,
    });
    var SETS = chevrotain.createToken({
        name: 'SETS',
        pattern: /SETS/i,
        longer_alt: ID,
    });
    var GROUPING = chevrotain.createToken({
        name: 'GROUPING',
        pattern: /GROUPING/i,
        longer_alt: ID,
    });
    var MORE = chevrotain.createToken({
        name: 'MORE',
        pattern: /MORE/i,
        longer_alt: ID,
    });
    var LESS = chevrotain.createToken({
        name: 'LESS',
        pattern: /LESS/i,
        longer_alt: ID,
    });
    var CURRENT = chevrotain.createToken({
        name: 'CURRENT',
        pattern: /CURRENT/i,
        longer_alt: ID,
    });
    var FOLLOWING = chevrotain.createToken({
        name: 'FOLLOWING',
        pattern: /FOLLOWING/i,
        longer_alt: ID,
    });
    var PRECEDING = chevrotain.createToken({
        name: 'PRECEDING',
        pattern: /PRECEDING/i,
        longer_alt: ID,
    });
    var UNBOUNDED = chevrotain.createToken({
        name: 'UNBOUNDED',
        pattern: /UNBOUNDED/i,
        longer_alt: ID,
    });
    var WINDOW = chevrotain.createToken({
        name: 'WINDOW',
        pattern: /WINDOW/i,
        longer_alt: ID,
    });
    var DIRECTORIES = chevrotain.createToken({
        name: 'DIRECTORIES',
        pattern: /DIRECTORIES/i,
        longer_alt: ID,
    });
    var CUBE = chevrotain.createToken({
        name: 'CUBE',
        pattern: /CUBE/i,
        longer_alt: ID,
    });
    var ROLLUP = chevrotain.createToken({
        name: 'ROLLUP',
        pattern: /ROLLUP/i,
        longer_alt: ID,
    });
    var SKEWED = chevrotain.createToken({
        name: 'SKEWED',
        pattern: /SKEWED/i,
        longer_alt: ID,
    });
    var CASCADE = chevrotain.createToken({
        name: 'CASCADE',
        pattern: /CASCADE/i,
        longer_alt: ID,
    });
    var RESTRICT = chevrotain.createToken({
        name: 'RESTRICT',
        pattern: /RESTRICT/i,
        longer_alt: ID,
    });
    var UPDATE = chevrotain.createToken({
        name: 'UPDATE',
        pattern: /UPDATE/i,
        longer_alt: ID,
    });
    var SHOW_DATABASE = chevrotain.createToken({
        name: 'SHOW_DATABASE',
        pattern: /SHOW_DATABASE/i,
        longer_alt: ID,
    });
    var CONCATENATE = chevrotain.createToken({
        name: 'CONCATENATE',
        pattern: /CONCATENATE/i,
        longer_alt: ID,
    });
    var OPTION = chevrotain.createToken({
        name: 'OPTION',
        pattern: /OPTION/i,
        longer_alt: ID,
    });
    var USE = chevrotain.createToken({
        name: 'USE',
        pattern: /USE/i,
        longer_alt: ID,
    });
    var STATISTICS = chevrotain.createToken({
        name: 'STATISTICS',
        pattern: /STATISTICS/i,
        longer_alt: ID,
    });
    var COMPUTE = chevrotain.createToken({
        name: 'COMPUTE',
        pattern: /COMPUTE/i,
        longer_alt: ID,
    });
    var UNARCHIVE = chevrotain.createToken({
        name: 'UNARCHIVE',
        pattern: /UNARCHIVE/i,
        longer_alt: ID,
    });
    var ARCHIVE = chevrotain.createToken({
        name: 'ARCHIVE',
        pattern: /ARCHIVE/i,
        longer_alt: ID,
    });
    var TOUCH = chevrotain.createToken({
        name: 'TOUCH',
        pattern: /TOUCH/i,
        longer_alt: ID,
    });
    var LATERAL = chevrotain.createToken({
        name: 'LATERAL',
        pattern: /LATERAL/i,
        longer_alt: ID,
    });
    var SEMI = chevrotain.createToken({
        name: 'SEMI',
        pattern: /SEMI/i,
        longer_alt: ID,
    });
    var RECORDWRITER = chevrotain.createToken({
        name: 'RECORDWRITER',
        pattern: /RECORDWRITER/i,
        longer_alt: ID,
    });
    var RECORDREADER = chevrotain.createToken({
        name: 'RECORDREADER',
        pattern: /RECORDREADER/i,
        longer_alt: ID,
    });
    var TRIGGER = chevrotain.createToken({
        name: 'TRIGGER',
        pattern: /TRIGGER/i,
        longer_alt: ID,
    });
    var CURSOR = chevrotain.createToken({
        name: 'CURSOR',
        pattern: /CURSOR/i,
        longer_alt: ID,
    });
    var CONTINUE = chevrotain.createToken({
        name: 'CONTINUE',
        pattern: /CONTINUE/i,
        longer_alt: ID,
    });
    var CROSS = chevrotain.createToken({
        name: 'CROSS',
        pattern: /CROSS/i,
        longer_alt: ID,
    });
    var BINARY = chevrotain.createToken({
        name: 'BINARY',
        pattern: /BINARY/i,
        longer_alt: ID,
    });
    var BOTH = chevrotain.createToken({
        name: 'BOTH',
        pattern: /BOTH/i,
        longer_alt: ID,
    });
    var BETWEEN = chevrotain.createToken({
        name: 'BETWEEN',
        pattern: /BETWEEN/i,
        longer_alt: ID,
    });
    var BEFORE = chevrotain.createToken({
        name: 'BEFORE',
        pattern: /BEFORE/i,
        longer_alt: ID,
    });
    var ANALYZE = chevrotain.createToken({
        name: 'ANALYZE',
        pattern: /ANALYZE/i,
        longer_alt: ID,
    });
    var RANGE = chevrotain.createToken({
        name: 'RANGE',
        pattern: /RANGE/i,
        longer_alt: ID,
    });
    var PURGE = chevrotain.createToken({
        name: 'PURGE',
        pattern: /PURGE/i,
        longer_alt: ID,
    });
    var READS = chevrotain.createToken({
        name: 'READS',
        pattern: /READS/i,
        longer_alt: ID,
    });
    var WHILE = chevrotain.createToken({
        name: 'WHILE',
        pattern: /WHILE/i,
        longer_alt: ID,
    });
    var UNSIGNED = chevrotain.createToken({
        name: 'UNSIGNED',
        pattern: /UNSIGNED/i,
        longer_alt: ID,
    });
    var SIGNED = chevrotain.createToken({
        name: 'SIGNED',
        pattern: /SIGNED/i,
        longer_alt: ID,
    });
    var PROCEDURE = chevrotain.createToken({
        name: 'PROCEDURE',
        pattern: /PROCEDURE/i,
        longer_alt: ID,
    });
    var EXCLUSIVE = chevrotain.createToken({
        name: 'EXCLUSIVE',
        pattern: /EXCLUSIVE/i,
        longer_alt: ID,
    });
    var SHARED = chevrotain.createToken({
        name: 'SHARED',
        pattern: /SHARED/i,
        longer_alt: ID,
    });
    var UNLOCK = chevrotain.createToken({
        name: 'UNLOCK',
        pattern: /UNLOCK/i,
        longer_alt: ID,
    });
    var LOCKS = chevrotain.createToken({
        name: 'LOCKS',
        pattern: /LOCKS/i,
        longer_alt: ID,
    });
    var LOCK = chevrotain.createToken({
        name: 'LOCK',
        pattern: /LOCK/i,
        longer_alt: ID,
    });
    var UNDO = chevrotain.createToken({
        name: 'UNDO',
        pattern: /UNDO/i,
        longer_alt: ID,
    });
    var SSL = chevrotain.createToken({
        name: 'SSL',
        pattern: /SSL/i,
        longer_alt: ID,
    });
    var REVOKE = chevrotain.createToken({
        name: 'REVOKE',
        pattern: /REVOKE/i,
        longer_alt: ID,
    });
    var GRANT = chevrotain.createToken({
        name: 'GRANT',
        pattern: /GRANT/i,
        longer_alt: ID,
    });
    var SCHEMAS = chevrotain.createToken({
        name: 'SCHEMAS',
        pattern: /SCHEMAS/i,
        longer_alt: ID,
    });
    var SCHEMA = chevrotain.createToken({
        name: 'SCHEMA',
        pattern: /SCHEMA/i,
        longer_alt: ID,
    });
    var MATERIALIZED = chevrotain.createToken({
        name: 'MATERIALIZED',
        pattern: /MATERIALIZED/i,
        longer_alt: ID,
    });
    var DATABASES = chevrotain.createToken({
        name: 'DATABASES',
        pattern: /DATABASES/i,
        longer_alt: ID,
    });
    var DATABASE = chevrotain.createToken({
        name: 'DATABASE',
        pattern: /DATABASE/i,
        longer_alt: ID,
    });
    var VIEW = chevrotain.createToken({
        name: 'VIEW',
        pattern: /VIEW/i,
        longer_alt: ID,
    });
    var INTERSECT = chevrotain.createToken({
        name: 'INTERSECT',
        pattern: /INTERSECT/i,
        longer_alt: ID,
    });
    var FETCH = chevrotain.createToken({
        name: 'FETCH',
        pattern: /FETCH/i,
        longer_alt: ID,
    });
    var KWMINUS = chevrotain.createToken({
        name: 'KWMINUS',
        pattern: /KWMINUS/i,
        longer_alt: ID,
    });
    var KWPLUS = chevrotain.createToken({
        name: 'KWPLUS',
        pattern: /KWPLUS/i,
        longer_alt: ID,
    });
    var DELETE = chevrotain.createToken({
        name: 'DELETE',
        pattern: /DELETE/i,
        longer_alt: ID,
    });
    var LONG = chevrotain.createToken({
        name: 'LONG',
        pattern: /LONG/i,
        longer_alt: ID,
    });
    var UTCTIMESTAMP = chevrotain.createToken({
        name: 'UTCTIMESTAMP',
        pattern: /UTC_TMESTAMP/i,
        longer_alt: ID,
    });
    var UTC = chevrotain.createToken({
        name: 'UTC',
        pattern: /UTC/i,
        longer_alt: ID,
    });
    var CLUSTERSTATUS = chevrotain.createToken({
        name: 'CLUSTERSTATUS',
        pattern: /CLUSTERSTATUS/i,
        longer_alt: ID,
    });
    var HOLD_DDLTIME = chevrotain.createToken({
        name: 'HOLD_DDLTIME',
        pattern: /HOLD_DDLTIME/i,
        longer_alt: ID,
    });
    var STREAMTABLE = chevrotain.createToken({
        name: 'STREAMTABLE',
        pattern: /STREAMTABLE/i,
        longer_alt: ID,
    });
    var MAPJOIN = chevrotain.createToken({
        name: 'MAPJOIN',
        pattern: /MAPJOIN/i,
        longer_alt: ID,
    });
    var ELSE = chevrotain.createToken({
        name: 'ELSE',
        pattern: /ELSE/i,
        longer_alt: ID,
    });
    var THEN = chevrotain.createToken({
        name: 'THEN',
        pattern: /THEN/i,
        longer_alt: ID,
    });
    var WHEN = chevrotain.createToken({
        name: 'WHEN',
        pattern: /WHEN/i,
        longer_alt: ID,
    });
    var CASE = chevrotain.createToken({
        name: 'CASE',
        pattern: /CASE/i,
        longer_alt: ID,
    });
    var ELEM_TYPE = chevrotain.createToken({
        name: 'ELEM_TYPE',
        pattern: /\$ELEM\$/i,
        longer_alt: ID,
    });
    var VALUE_TYPE = chevrotain.createToken({
        name: 'VALUE_TYPE',
        pattern: /\$VALUE\$/i,
        longer_alt: ID,
    });
    var IDXPROPERTIES = chevrotain.createToken({
        name: 'IDXPROPERTIES',
        pattern: /IDXPROPERTIES/i,
        longer_alt: ID,
    });
    var TBLPROPERTIES = chevrotain.createToken({
        name: 'TBLPROPERTIES',
        pattern: /TBLPROPERTIES/i,
        longer_alt: ID,
    });
    var UNSET = chevrotain.createToken({
        name: 'UNSET',
        pattern: /UNSET/i,
        longer_alt: ID,
    });
    var SET = chevrotain.createToken({
        name: 'SET',
        pattern: /SET/i,
        longer_alt: ID,
    });
    var DBPROPERTIES = chevrotain.createToken({
        name: 'DBPROPERTIES',
        pattern: /DBPROPERTIES/i,
        longer_alt: ID,
    });
    var SERDEPROPERTIES = chevrotain.createToken({
        name: 'SERDEPROPERTIES',
        pattern: /SERDEPROPERTIES/i,
        longer_alt: ID,
    });
    var DEFERRED = chevrotain.createToken({
        name: 'DEFERRED',
        pattern: /DEFERRED/i,
        longer_alt: ID,
    });
    var WITH = chevrotain.createToken({
        name: 'WITH',
        pattern: /WITH/i,
        longer_alt: ID,
    });
    var SERDE = chevrotain.createToken({
        name: 'SERDE',
        pattern: /SERDE/i,
        longer_alt: ID,
    });
    var LOGICAL = chevrotain.createToken({
        name: 'LOGICAL',
        pattern: /LOGICAL/i,
        longer_alt: ID,
    });
    var DEPENDENCY = chevrotain.createToken({
        name: 'DEPENDENCY',
        pattern: /DEPENDENCY/i,
        longer_alt: ID,
    });
    var PRETTY = chevrotain.createToken({
        name: 'PRETTY',
        pattern: /PRETTY/i,
        longer_alt: ID,
    });
    var FORMATTED = chevrotain.createToken({
        name: 'FORMATTED',
        pattern: /FORMATTED/i,
        longer_alt: ID,
    });
    var EXTENDED = chevrotain.createToken({
        name: 'EXTENDED',
        pattern: /EXTENDED/i,
        longer_alt: ID,
    });
    var END = chevrotain.createToken({
        name: 'END',
        pattern: /END/i,
        longer_alt: ID,
    });
    var EXPLAIN = chevrotain.createToken({
        name: 'EXPLAIN',
        pattern: /EXPLAIN/i,
        longer_alt: ID,
    });
    var MACRO = chevrotain.createToken({
        name: 'MACRO',
        pattern: /MACRO/i,
        longer_alt: ID,
    });
    var TEMPORARY = chevrotain.createToken({
        name: 'TEMPORARY',
        pattern: /TEMPORARY/i,
        longer_alt: ID,
    });
    var REGEXP = chevrotain.createToken({
        name: 'REGEXP',
        pattern: /REGEXP/i,
        longer_alt: ID,
    });
    var RLIKE = chevrotain.createToken({
        name: 'RLIKE',
        pattern: /RLIKE/i,
        longer_alt: ID,
    });
    var REPLACE = chevrotain.createToken({
        name: 'REPLACE',
        pattern: /REPLACE/i,
        longer_alt: ID,
    });
    var ADD = chevrotain.createToken({
        name: 'ADD',
        pattern: /ADD/i,
        longer_alt: ID,
    });
    var CAST = chevrotain.createToken({
        name: 'CAST',
        pattern: /CAST/i,
        longer_alt: ID,
    });
    var PERCENT = chevrotain.createToken({
        name: 'PERCENT',
        pattern: /PERCENT/i,
        longer_alt: ID,
    });
    var TABLESAMPLE = chevrotain.createToken({
        name: 'TABLESAMPLE',
        pattern: /TABLESAMPLE/i,
        longer_alt: ID,
    });
    var LOCATION = chevrotain.createToken({
        name: 'LOCATION',
        pattern: /LOCATION/i,
        longer_alt: ID,
    });
    var NO_DROP = chevrotain.createToken({
        name: 'NO_DROP',
        pattern: /NO_DROP/i,
        longer_alt: ID,
    });
    var CharSetName = chevrotain.createToken({
        name: 'CharSetName',
        pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
        longer_alt: ID,
    });
    var READONLY = chevrotain.createToken({
        name: 'READONLY',
        pattern: /READONLY/i,
        longer_alt: ID,
    });
    var READ = chevrotain.createToken({
        name: 'READ',
        pattern: /READ/i,
        longer_alt: ID,
    });
    var DISABLE = chevrotain.createToken({
        name: 'DISABLE',
        pattern: /DISABLE/i,
        longer_alt: ID,
    });
    var ENABLE = chevrotain.createToken({
        name: 'ENABLE',
        pattern: /ENABLE/i,
        longer_alt: ID,
    });
    var OFFLINE = chevrotain.createToken({
        name: 'OFFLINE',
        pattern: /OFFLINE/i,
        longer_alt: ID,
    });
    var OF = chevrotain.createToken({
        name: 'OF',
        pattern: /OF/i,
        longer_alt: ID,
    });
    var OUTPUTDRIVER = chevrotain.createToken({
        name: 'OUTPUTDRIVER',
        pattern: /OUTPUTDRIVER/i,
        longer_alt: ID,
    });
    var INPUTDRIVER = chevrotain.createToken({
        name: 'INPUTDRIVER',
        pattern: /INPUTDRIVER/i,
        longer_alt: ID,
    });
    var OUTPUTFORMAT = chevrotain.createToken({
        name: 'OUTPUTFORMAT',
        pattern: /OUTPUTFORMAT/i,
        longer_alt: ID,
    });
    var INPUTFORMAT = chevrotain.createToken({
        name: 'INPUTFORMAT',
        pattern: /INPUTFORMAT/i,
        longer_alt: ID,
    });
    var ORCFILE = chevrotain.createToken({
        name: 'ORCFILE',
        pattern: /ORC/i,
        longer_alt: ID,
    });
    var RCFILE = chevrotain.createToken({
        name: 'RCFILE',
        pattern: /RCFILE/i,
        longer_alt: ID,
    });
    var TEXTFILE = chevrotain.createToken({
        name: 'TEXTFILE',
        pattern: /TEXTFILE/i,
        longer_alt: ID,
    });
    var TEXT = chevrotain.createToken({
        name: 'TEXT',
        pattern: /TEXT/i,
        longer_alt: ID,
    });
    var SEQUENCEFILE = chevrotain.createToken({
        name: 'SEQUENCEFILE',
        pattern: /SEQUENCEFILE/i,
        longer_alt: ID,
    });
    var FILEFORMAT = chevrotain.createToken({
        name: 'FILEFORMAT',
        pattern: /FILEFORMAT/i,
        longer_alt: ID,
    });
    var STORED = chevrotain.createToken({
        name: 'STORED',
        pattern: /STORED/i,
        longer_alt: ID,
    });
    var LINES = chevrotain.createToken({
        name: 'LINES',
        pattern: /LINES/i,
        longer_alt: ID,
    });
    var KEY_TYPE = chevrotain.createToken({
        name: 'KEY_TYPE',
        pattern: /\$KEY\$/i,
        longer_alt: ID,
    });
    var KEYS = chevrotain.createToken({
        name: 'KEYS',
        pattern: /KEYS/i,
        longer_alt: ID,
    });
    var KEY = chevrotain.createToken({
        name: 'KEY',
        pattern: /KEY/i,
        longer_alt: ID,
    });
    var ITEMS = chevrotain.createToken({
        name: 'ITEMS',
        pattern: /ITEMS/i,
        longer_alt: ID,
    });
    var COLLECTION = chevrotain.createToken({
        name: 'COLLECTION',
        pattern: /COLLECTION/i,
        longer_alt: ID,
    });
    var ESCAPED = chevrotain.createToken({
        name: 'ESCAPED',
        pattern: /ESCAPED/i,
        longer_alt: ID,
    });
    var TERMINATED = chevrotain.createToken({
        name: 'TERMINATED',
        pattern: /TERMINATED/i,
        longer_alt: ID,
    });
    var MIN = chevrotain.createToken({
        name: 'MIN',
        pattern: /MIN/i,
        longer_alt: ID,
    });
    var FIELDS = chevrotain.createToken({
        name: 'FIELDS',
        pattern: /FIELDS/i,
        longer_alt: ID,
    });
    var DELIMITED = chevrotain.createToken({
        name: 'DELIMITED',
        pattern: /DELIMITED/i,
        longer_alt: ID,
    });
    var LIMIT = chevrotain.createToken({
        name: 'LIMIT',
        pattern: /LIMIT/i,
        longer_alt: ID,
    });
    var FORMAT = chevrotain.createToken({
        name: 'FORMAT',
        pattern: /FORMAT/i,
        longer_alt: ID,
    });
    var ROWS = chevrotain.createToken({
        name: 'ROWS',
        pattern: /ROWS/i,
        longer_alt: ID,
    });
    var ROW = chevrotain.createToken({
        name: 'ROW',
        pattern: /ROW/i,
        longer_alt: ID,
    });
    var BUCKETS = chevrotain.createToken({
        name: 'BUCKETS',
        pattern: /BUCKETS/i,
        longer_alt: ID,
    });
    var BUCKET = chevrotain.createToken({
        name: 'BUCKET',
        pattern: /BUCKET/i,
        longer_alt: ID,
    });
    var INTO = chevrotain.createToken({
        name: 'INTO',
        pattern: /INTO/i,
        longer_alt: ID,
    });
    var SORTED = chevrotain.createToken({
        name: 'SORTED',
        pattern: /SORTED/i,
        longer_alt: ID,
    });
    var CLUSTERED = chevrotain.createToken({
        name: 'CLUSTERED',
        pattern: /CLUSTERED/i,
        longer_alt: ID,
    });
    var PARTITIONED = chevrotain.createToken({
        name: 'PARTITIONED',
        pattern: /PARTITIONED/i,
        longer_alt: ID,
    });
    var REDUCE = chevrotain.createToken({
        name: 'REDUCE',
        pattern: /REDUCE/i,
        longer_alt: ID,
    });
    var UNIONTYPE = chevrotain.createToken({
        name: 'UNIONTYPE',
        pattern: /UNIONTYPE/i,
        longer_alt: ID,
    });
    var MAP = chevrotain.createToken({
        name: 'MAP',
        pattern: /MAP/i,
        longer_alt: ID,
    });
    var STRUCT = chevrotain.createToken({
        name: 'STRUCT',
        pattern: /STRUCT/i,
        longer_alt: ID,
    });
    var ARRAY = chevrotain.createToken({
        name: 'ARRAY',
        pattern: /ARRAY/i,
        longer_alt: ID,
    });
    var STRING = chevrotain.createToken({
        name: 'STRING',
        pattern: /STRING/i,
        longer_alt: ID,
    });
    var DECIMAL = chevrotain.createToken({
        name: 'DECIMAL',
        pattern: /DECIMAL/i,
        longer_alt: ID,
    });
    var TIMESTAMP = chevrotain.createToken({
        name: 'TIMESTAMP',
        pattern: /TIMESTAMP/i,
        longer_alt: ID,
    });
    var DATETIME = chevrotain.createToken({
        name: 'DATETIME',
        pattern: /DATETIME/i,
        longer_alt: ID,
    });
    var TIME = chevrotain.createToken({
        name: 'TIME',
        pattern: /TIME/i,
        longer_alt: ID,
    });
    var DATE = chevrotain.createToken({
        name: 'DATE',
        pattern: /DATE/i,
        longer_alt: ID,
    });
    var DOUBLE = chevrotain.createToken({
        name: 'DOUBLE',
        pattern: /DOUBLE/i,
        longer_alt: ID,
    });
    var FLOAT = chevrotain.createToken({
        name: 'FLOAT',
        pattern: /FLOAT/i,
        longer_alt: ID,
    });
    var BIGINT = chevrotain.createToken({
        name: 'BIGINT',
        pattern: /BIGINT/i,
        longer_alt: ID,
    });
    var SMALLINT = chevrotain.createToken({
        name: 'SMALLINT',
        pattern: /SMALLINT/i,
        longer_alt: ID,
    });
    var TINYINT = chevrotain.createToken({
        name: 'TINYINT',
        pattern: /TINYINT/i,
        longer_alt: ID,
    });
    var INT = chevrotain.createToken({
        name: 'INT',
        pattern: /INT/i,
        longer_alt: ID,
    });
    var BOOLEAN = chevrotain.createToken({
        name: 'BOOLEAN',
        pattern: /BOOLEAN/i,
        longer_alt: ID,
    });
    var BOOL = chevrotain.createToken({
        name: 'BOOL',
        pattern: /BOOL/i,
        longer_alt: ID,
    });
    var COMMENT = chevrotain.createToken({
        name: 'COMMENT',
        pattern: /KWCOMMENT/i,
        longer_alt: ID,
    });
    var PROTECTION = chevrotain.createToken({
        name: 'PROTECTION',
        pattern: /PROTECTION/i,
        longer_alt: ID,
    });
    var IGNORE = chevrotain.createToken({
        name: 'IGNORE',
        pattern: /IGNORE/i,
        longer_alt: ID,
    });
    var NO = chevrotain.createToken({
        name: 'NO',
        pattern: /NO/i,
        longer_alt: ID,
    });
    var RENAME = chevrotain.createToken({
        name: 'RENAME',
        pattern: /RENAME/i,
        longer_alt: ID,
    });
    var DROP = chevrotain.createToken({
        name: 'DROP',
        pattern: /DROP/i,
        longer_alt: ID,
    });
    var DESCRIBE = chevrotain.createToken({
        name: 'DESCRIBE',
        pattern: /DESCRIBE/i,
        longer_alt: ID,
    });
    var AFTER = chevrotain.createToken({
        name: 'AFTER',
        pattern: /AFTER/i,
        longer_alt: ID,
    });
    var FIRST = chevrotain.createToken({
        name: 'FIRST',
        pattern: /FIRST/i,
        longer_alt: ID,
    });
    var CHANGE = chevrotain.createToken({
        name: 'CHANGE',
        pattern: /CHANGE/i,
        longer_alt: ID,
    });
    var ALTER = chevrotain.createToken({
        name: 'ALTER',
        pattern: /ALTER/i,
        longer_alt: ID,
    });
    var EXTERNAL = chevrotain.createToken({
        name: 'EXTERNAL',
        pattern: /EXTERNAL/i,
        longer_alt: ID,
    });
    var CREATE = chevrotain.createToken({
        name: 'CREATE',
        pattern: /CREATE/i,
        longer_alt: ID,
    });
    var NULL = chevrotain.createToken({
        name: 'NULL',
        pattern: /NULL/i,
        longer_alt: ID,
    });
    var INPATH = chevrotain.createToken({
        name: 'INPATH',
        pattern: /INPATH/i,
        longer_alt: ID,
    });
    var DATA = chevrotain.createToken({
        name: 'DATA',
        pattern: /DATA/i,
        longer_alt: ID,
    });
    var IMPORT = chevrotain.createToken({
        name: 'IMPORT',
        pattern: /IMPORT/i,
        longer_alt: ID,
    });
    var EXPORT = chevrotain.createToken({
        name: 'EXPORT',
        pattern: /EXPORT/i,
        longer_alt: ID,
    });
    var LOAD = chevrotain.createToken({
        name: 'LOAD',
        pattern: /LOAD/i,
        longer_alt: ID,
    });
    var UNION = chevrotain.createToken({
        name: 'UNION',
        pattern: /UNION/i,
        longer_alt: ID,
    });
    var SORT = chevrotain.createToken({
        name: 'SORT',
        pattern: /SORT/i,
        longer_alt: ID,
    });
    var DISTRIBUTE = chevrotain.createToken({
        name: 'DISTRIBUTE',
        pattern: /DISTRIBUTE/i,
        longer_alt: ID,
    });
    var CLUSTER = chevrotain.createToken({
        name: 'CLUSTER',
        pattern: /CLUSTER/i,
        longer_alt: ID,
    });
    var USING = chevrotain.createToken({
        name: 'USING',
        pattern: /USING/i,
        longer_alt: ID,
    });
    var TRANSFORM = chevrotain.createToken({
        name: 'TRANSFORM',
        pattern: /TRANSFORM/i,
        longer_alt: ID,
    });
    var FOR = chevrotain.createToken({
        name: 'FOR',
        pattern: /FOR/i,
        longer_alt: ID,
    });
    var LOCAL = chevrotain.createToken({
        name: 'LOCAL',
        pattern: /LOCAL/i,
        longer_alt: ID,
    });
    var DIRECTORY = chevrotain.createToken({
        name: 'DIRECTORY',
        pattern: /DIRECTORY/i,
        longer_alt: ID,
    });
    var TO = chevrotain.createToken({
        name: 'TO',
        pattern: /TO/i,
        longer_alt: ID,
    });
    var REPAIR = chevrotain.createToken({
        name: 'REPAIR',
        pattern: /REPAIR/i,
        longer_alt: ID,
    });
    var MSCK = chevrotain.createToken({
        name: 'MSCK',
        pattern: /MSCK/i,
        longer_alt: ID,
    });
    var SHOW = chevrotain.createToken({
        name: 'SHOW',
        pattern: /SHOW/i,
        longer_alt: ID,
    });
    var FUNCTIONS = chevrotain.createToken({
        name: 'FUNCTIONS',
        pattern: /FUNCTIONS/i,
        longer_alt: ID,
    });
    var FUNCTION = chevrotain.createToken({
        name: 'FUNCTION',
        pattern: /FUNCTION/i,
        longer_alt: ID,
    });
    var REBUILD = chevrotain.createToken({
        name: 'REBUILD',
        pattern: /REBUILD/i,
        longer_alt: ID,
    });
    var INDEXES = chevrotain.createToken({
        name: 'INDEXES',
        pattern: /INDEXES/i,
        longer_alt: ID,
    });
    var INDEX = chevrotain.createToken({
        name: 'INDEX',
        pattern: /INDEX/i,
        longer_alt: ID,
    });
    var COLUMNS = chevrotain.createToken({
        name: 'COLUMNS',
        pattern: /COLUMNS/i,
        longer_alt: ID,
    });
    var COLUMN = chevrotain.createToken({
        name: 'COLUMN',
        pattern: /COLUMN/i,
        longer_alt: ID,
    });
    var TABLES = chevrotain.createToken({
        name: 'TABLES',
        pattern: /TABLES/i,
        longer_alt: ID,
    });
    var TABLE = chevrotain.createToken({
        name: 'TABLE',
        pattern: /TABLE/i,
        longer_alt: ID,
    });
    var PARTITIONS = chevrotain.createToken({
        name: 'PARTITIONS',
        pattern: /PARTITIONS/i,
        longer_alt: ID,
    });
    var PARTITION = chevrotain.createToken({
        name: 'PARTITION',
        pattern: /PARTITION/i,
        longer_alt: ID,
    });
    var ON = chevrotain.createToken({
        name: 'ON',
        pattern: /ON/i,
        longer_alt: ID,
    });
    var FULL = chevrotain.createToken({
        name: 'FULL',
        pattern: /FULL/i,
        longer_alt: ID,
    });
    var RIGHT = chevrotain.createToken({
        name: 'RIGHT',
        pattern: /RIGHT/i,
        longer_alt: ID,
    });
    var LEFT = chevrotain.createToken({
        name: 'LEFT',
        pattern: /LEFT/i,
        longer_alt: ID,
    });
    var PRESERVE = chevrotain.createToken({
        name: 'PRESERVE',
        pattern: /PRESERVE/i,
        longer_alt: ID,
    });
    var UNIQUEJOIN = chevrotain.createToken({
        name: 'UNIQUEJOIN',
        pattern: /UNIQUEJOIN/i,
        longer_alt: ID,
    });
    var UNIQUE = chevrotain.createToken({
        name: 'UNIQUE',
        pattern: /UNIQUE/i,
        longer_alt: ID,
    });
    var OUTER = chevrotain.createToken({
        name: 'OUTER',
        pattern: /OUTER/i,
        longer_alt: ID,
    });
    var OUT = chevrotain.createToken({
        name: 'OUT',
        pattern: /OUT/i,
        longer_alt: ID,
    });
    var OVERWRITE = chevrotain.createToken({
        name: 'OVERWRITE',
        pattern: /OVERWRITE/i,
        longer_alt: ID,
    });
    var OVER = chevrotain.createToken({
        name: 'OVER',
        pattern: /OVER/i,
        longer_alt: ID,
    });
    var INSERT = chevrotain.createToken({
        name: 'INSERT',
        pattern: /INSERT/i,
        longer_alt: ID,
    });
    var DISTINCT = chevrotain.createToken({
        name: 'DISTINCT',
        pattern: /DISTINCT/i,
        longer_alt: ID,
    });
    var SELECT = chevrotain.createToken({
        name: 'SELECT',
        pattern: /SELECT/i,
        longer_alt: ID,
    });
    var FROM = chevrotain.createToken({
        name: 'FROM',
        pattern: /FROM/i,
        longer_alt: ID,
    });
    var WHERE = chevrotain.createToken({
        name: 'WHERE',
        pattern: /WHERE/i,
        longer_alt: ID,
    });
    var HAVING = chevrotain.createToken({
        name: 'HAVING',
        pattern: /HAVING/i,
        longer_alt: ID,
    });
    var BY = chevrotain.createToken({
        name: 'BY',
        pattern: /BY/i,
        longer_alt: ID,
    });
    var GROUP = chevrotain.createToken({
        name: 'GROUP',
        pattern: /GROUP/i,
        longer_alt: ID,
    });
    var ORDER = chevrotain.createToken({
        name: 'ORDER',
        pattern: /ORDER/i,
        longer_alt: ID,
    });
    var DESC = chevrotain.createToken({
        name: 'DESC',
        pattern: /DESC/i,
        longer_alt: ID,
    });
    var ASC = chevrotain.createToken({
        name: 'ASC',
        pattern: /ASC/i,
        longer_alt: ID,
    });
    var AS = chevrotain.createToken({
        name: 'AS',
        pattern: /AS/i,
        longer_alt: ID,
    });
    var EXISTS = chevrotain.createToken({
        name: 'EXISTS',
        pattern: /EXISTS/i,
        longer_alt: ID,
    });
    var IS = chevrotain.createToken({
        name: 'IS',
        pattern: /IS/i,
        longer_alt: ID,
    });
    var IF = chevrotain.createToken({
        name: 'IF',
        pattern: /IF/i,
        longer_alt: ID,
    });
    var JOIN = chevrotain.createToken({
        name: 'JOIN',
        pattern: /JOIN/i,
        longer_alt: ID,
    });
    var IN = chevrotain.createToken({
        name: 'IN',
        pattern: /IN/i,
        longer_alt: ID,
    });
    var LIKE = chevrotain.createToken({
        name: 'LIKE',
        pattern: /LIKE/i,
        longer_alt: ID,
    });
    var NOT = chevrotain.createToken({
        name: 'NOT',
        pattern: /(NOT|\!)/i,
        longer_alt: ID,
    });
    var OR = chevrotain.createToken({
        name: 'OR',
        pattern: /OR/i,
        longer_alt: ID,
    });
    var AND = chevrotain.createToken({
        name: 'AND',
        pattern: /AND/i,
        longer_alt: ID,
    });
    var ALL = chevrotain.createToken({
        name: 'ALL',
        pattern: /ALL/i,
        longer_alt: ID,
    });
    var FALSE = chevrotain.createToken({
        name: 'FALSE',
        pattern: /FALSE/i,
        longer_alt: ID,
    });
    var TRUE = chevrotain.createToken({
        name: 'TRUE',
        pattern: /TRUE/i,
        longer_alt: ID,
    });
    var TokenEnum;
    (function (TokenEnum) {
        TokenEnum["WS"] = "WS";
        TokenEnum["ByteLengthLiteral"] = "ByteLengthLiteral";
        TokenEnum["DecimalLiteral"] = "DecimalLiteral";
        TokenEnum["TinyintLiteral"] = "TinyintLiteral";
        TokenEnum["SmallintLiteral"] = "SmallintLiteral";
        TokenEnum["BigintLiteral"] = "BigintLiteral";
        TokenEnum["CharSetLiteral"] = "CharSetLiteral";
        TokenEnum["STRING_LITERAL"] = "STRING_LITERAL";
        TokenEnum["DOLLAR"] = "DOLLAR";
        TokenEnum["QUESTION"] = "QUESTION";
        TokenEnum["BITWISEXOR"] = "BITWISEXOR";
        TokenEnum["BITWISEOR"] = "BITWISEOR";
        TokenEnum["TILDE"] = "TILDE";
        TokenEnum["AMPERSAND"] = "AMPERSAND";
        TokenEnum["DIV"] = "DIV";
        TokenEnum["MOD"] = "MOD";
        TokenEnum["STAR"] = "STAR";
        TokenEnum["MINUS"] = "MINUS";
        TokenEnum["PLUS"] = "PLUS";
        TokenEnum["DIVIDE"] = "DIVIDE";
        TokenEnum["GREATERTHAN"] = "GREATERTHAN";
        TokenEnum["GREATERTHANOREQUALTO"] = "GREATERTHANOREQUALTO";
        TokenEnum["LESSTHAN"] = "LESSTHAN";
        TokenEnum["LESSTHANOREQUALTO"] = "LESSTHANOREQUALTO";
        TokenEnum["NOTEQUAL"] = "NOTEQUAL";
        TokenEnum["EQUAL_NS"] = "EQUAL_NS";
        TokenEnum["EQUAL"] = "EQUAL";
        TokenEnum["RCURLY"] = "RCURLY";
        TokenEnum["LCURLY"] = "LCURLY";
        TokenEnum["RSQUARE"] = "RSQUARE";
        TokenEnum["LSQUARE"] = "LSQUARE";
        TokenEnum["RPAREN"] = "RPAREN";
        TokenEnum["LPAREN"] = "LPAREN";
        TokenEnum["SEMICOLON"] = "SEMICOLON";
        TokenEnum["COMMA"] = "COMMA";
        TokenEnum["COLON"] = "COLON";
        TokenEnum["DOT"] = "DOT";
        TokenEnum["ONE_DECIMAL"] = "ONE_DECIMAL";
        TokenEnum["ZERO_DECIMAL"] = "ZERO_DECIMAL";
        TokenEnum["Number"] = "Number";
        TokenEnum["LIFECYCLE"] = "LIFECYCLE";
        TokenEnum["TABLESPACE"] = "TABLESPACE";
        TokenEnum["STATS_PERSISTENT"] = "STATS_PERSISTENT";
        TokenEnum["STATS_AUTO_RECALC"] = "STATS_AUTO_RECALC";
        TokenEnum["COMPACT"] = "COMPACT";
        TokenEnum["REDUNDANT"] = "REDUNDANT";
        TokenEnum["COMPRESSED"] = "COMPRESSED";
        TokenEnum["ROW_FORMAT"] = "ROW_FORMAT";
        TokenEnum["PASSWORD"] = "PASSWORD";
        TokenEnum["PACK_KEYS"] = "PACK_KEYS";
        TokenEnum["MIN_ROWS"] = "MIN_ROWS";
        TokenEnum["MAX_ROWS"] = "MAX_ROWS";
        TokenEnum["KEY_BLOCK_SIZE"] = "KEY_BLOCK_SIZE";
        TokenEnum["LAST"] = "LAST";
        TokenEnum["INSERT_METHOD"] = "INSERT_METHOD";
        TokenEnum["ENCRYPTION"] = "ENCRYPTION";
        TokenEnum["DELAY_KEY_WRITE"] = "DELAY_KEY_WRITE";
        TokenEnum["CONNECTION"] = "CONNECTION";
        TokenEnum["COMPRESSION"] = "COMPRESSION";
        TokenEnum["AVG_ROW_LENGTH"] = "AVG_ROW_LENGTH";
        TokenEnum["ENGINE"] = "ENGINE";
        TokenEnum["CHECKSUM"] = "CHECKSUM";
        TokenEnum["CHARSET"] = "CHARSET";
        TokenEnum["PERFOMANCE_SCHEMA"] = "PERFOMANCE_SCHEMA";
        TokenEnum["NDBCLUSTER"] = "NDBCLUSTER";
        TokenEnum["NDB"] = "NDB";
        TokenEnum["MRG_MYISAM"] = "MRG_MYISAM";
        TokenEnum["MYISAM"] = "MYISAM";
        TokenEnum["INNODB"] = "INNODB";
        TokenEnum["FEDERATED"] = "FEDERATED";
        TokenEnum["CSV"] = "CSV";
        TokenEnum["BLACKHOLE"] = "BLACKHOLE";
        TokenEnum["MULTIPOLYGON"] = "MULTIPOLYGON";
        TokenEnum["POLYGON"] = "POLYGON";
        TokenEnum["MULTIPOINT"] = "MULTIPOINT";
        TokenEnum["POINT"] = "POINT";
        TokenEnum["MULTILINESTRING"] = "MULTILINESTRING";
        TokenEnum["LINESTRING"] = "LINESTRING";
        TokenEnum["GEOMETRYCOLLECTION"] = "GEOMETRYCOLLECTION";
        TokenEnum["ENUM"] = "ENUM";
        TokenEnum["VARBINARY"] = "VARBINARY";
        TokenEnum["LONGBLOB"] = "LONGBLOB";
        TokenEnum["MEDIUMBLOB"] = "MEDIUMBLOB";
        TokenEnum["TINYBLOB"] = "TINYBLOB";
        TokenEnum["BLOB"] = "BLOB";
        TokenEnum["NUMERIC"] = "NUMERIC";
        TokenEnum["REAL"] = "REAL";
        TokenEnum["ZEROFILL"] = "ZEROFILL";
        TokenEnum["MEDIUMINT"] = "MEDIUMINT";
        TokenEnum["COLLATE"] = "COLLATE";
        TokenEnum["LONGTEXT"] = "LONGTEXT";
        TokenEnum["MEDIUMTEXT"] = "MEDIUMTEXT";
        TokenEnum["TINYTEXT"] = "TINYTEXT";
        TokenEnum["VARCHAR"] = "VARCHAR";
        TokenEnum["MEMORY"] = "MEMORY";
        TokenEnum["DISK"] = "DISK";
        TokenEnum["STORAGE"] = "STORAGE";
        TokenEnum["DYNAMIC"] = "DYNAMIC";
        TokenEnum["FIXED"] = "FIXED";
        TokenEnum["COLUMN_FORMAT"] = "COLUMN_FORMAT";
        TokenEnum["PRIMARY"] = "PRIMARY";
        TokenEnum["AUTO_INCREMENT"] = "AUTO_INCREMENT";
        TokenEnum["DEFAULT"] = "DEFAULT";
        TokenEnum["STRAIGHT_JOIN"] = "STRAIGHT_JOIN";
        TokenEnum["STARTING"] = "STARTING";
        TokenEnum["ENCLOSED"] = "ENCLOSED";
        TokenEnum["OPTIONALLY"] = "OPTIONALLY";
        TokenEnum["OUTFILE"] = "OUTFILE";
        TokenEnum["DUMPFILE"] = "DUMPFILE";
        TokenEnum["GET_FORMAT"] = "GET_FORMAT";
        TokenEnum["CONVERT"] = "CONVERT";
        TokenEnum["WEIGHT_STRING"] = "WEIGHT_STRING";
        TokenEnum["TRIM"] = "TRIM";
        TokenEnum["SYSDATE"] = "SYSDATE";
        TokenEnum["SUBSTRING"] = "SUBSTRING";
        TokenEnum["SUBSTR"] = "SUBSTR";
        TokenEnum["POSITION"] = "POSITION";
        TokenEnum["NOW"] = "NOW";
        TokenEnum["LOCALTIMESTAMP"] = "LOCALTIMESTAMP";
        TokenEnum["EXTRACT"] = "EXTRACT";
        TokenEnum["DATE_SUB"] = "DATE_SUB";
        TokenEnum["DATE_ADD"] = "DATE_ADD";
        TokenEnum["CURTIME"] = "CURTIME";
        TokenEnum["CURDATE"] = "CURDATE";
        TokenEnum["LOCALTIME"] = "LOCALTIME";
        TokenEnum["CURRENT_USER"] = "CURRENT_USER";
        TokenEnum["CURRENT_TIMESTAMP"] = "CURRENT_TIMESTAMP";
        TokenEnum["CURRENT_TIME"] = "CURRENT_TIME";
        TokenEnum["CURRENT_DATE"] = "CURRENT_DATE";
        TokenEnum["QUARTER"] = "QUARTER";
        TokenEnum["VARIANCE"] = "VARIANCE";
        TokenEnum["VAR_SAMP"] = "VAR_SAMP";
        TokenEnum["VAR_POP"] = "VAR_POP";
        TokenEnum["SUM"] = "SUM";
        TokenEnum["STDDEV_SAMP"] = "STDDEV_SAMP";
        TokenEnum["STDDEV_POP"] = "STDDEV_POP";
        TokenEnum["STDDEV"] = "STDDEV";
        TokenEnum["STD"] = "STD";
        TokenEnum["MAX"] = "MAX";
        TokenEnum["GROUP_CONCAT"] = "GROUP_CONCAT";
        TokenEnum["COUNT"] = "COUNT";
        TokenEnum["BIT_XOR"] = "BIT_XOR";
        TokenEnum["BIT_OR"] = "BIT_OR";
        TokenEnum["BIT_AND"] = "BIT_AND";
        TokenEnum["BIT"] = "BIT";
        TokenEnum["AVG"] = "AVG";
        TokenEnum["UTC_TIMESTAMP"] = "UTC_TIMESTAMP";
        TokenEnum["UTC_TIME"] = "UTC_TIME";
        TokenEnum["UTC_DATE"] = "UTC_DATE";
        TokenEnum["TRAILING"] = "TRAILING";
        TokenEnum["LEADING"] = "LEADING";
        TokenEnum["REVERSE"] = "REVERSE";
        TokenEnum["LEVEL"] = "LEVEL";
        TokenEnum["WEEK"] = "WEEK";
        TokenEnum["DAY_MICROSECOND"] = "DAY_MICROSECOND";
        TokenEnum["HOUR_MICROSECOND"] = "HOUR_MICROSECOND";
        TokenEnum["MINUTE_MICROSECOND"] = "MINUTE_MICROSECOND";
        TokenEnum["SECOND_MICROSECOND"] = "SECOND_MICROSECOND";
        TokenEnum["MICROSECOND"] = "MICROSECOND";
        TokenEnum["MINUTE_SECOND"] = "MINUTE_SECOND";
        TokenEnum["HOUR_SECOND"] = "HOUR_SECOND";
        TokenEnum["HOUR_MINUTE"] = "HOUR_MINUTE";
        TokenEnum["DAY_SECOND"] = "DAY_SECOND";
        TokenEnum["SECOND"] = "SECOND";
        TokenEnum["DAY_MINUTE"] = "DAY_MINUTE";
        TokenEnum["MINUTE"] = "MINUTE";
        TokenEnum["DAY_HOUR"] = "DAY_HOUR";
        TokenEnum["HOUR"] = "HOUR";
        TokenEnum["DAY"] = "DAY";
        TokenEnum["YEAR_MONTH"] = "YEAR_MONTH";
        TokenEnum["MONTH"] = "MONTH";
        TokenEnum["YEAR"] = "YEAR";
        TokenEnum["INTEGER"] = "INTEGER";
        TokenEnum["CHARACTER"] = "CHARACTER";
        TokenEnum["NCHAR"] = "NCHAR";
        TokenEnum["CHAR"] = "CHAR";
        TokenEnum["VALUES"] = "VALUES";
        TokenEnum["VALUE"] = "VALUE";
        TokenEnum["EXCHANGE"] = "EXCHANGE";
        TokenEnum["INNER"] = "INNER";
        TokenEnum["ROLE"] = "ROLE";
        TokenEnum["USER"] = "USER";
        TokenEnum["PARTIALSCAN"] = "PARTIALSCAN";
        TokenEnum["NOSCAN"] = "NOSCAN";
        TokenEnum["TRUNCATE"] = "TRUNCATE";
        TokenEnum["SETS"] = "SETS";
        TokenEnum["GROUPING"] = "GROUPING";
        TokenEnum["MORE"] = "MORE";
        TokenEnum["LESS"] = "LESS";
        TokenEnum["CURRENT"] = "CURRENT";
        TokenEnum["FOLLOWING"] = "FOLLOWING";
        TokenEnum["PRECEDING"] = "PRECEDING";
        TokenEnum["UNBOUNDED"] = "UNBOUNDED";
        TokenEnum["WINDOW"] = "WINDOW";
        TokenEnum["DIRECTORIES"] = "DIRECTORIES";
        TokenEnum["CUBE"] = "CUBE";
        TokenEnum["ROLLUP"] = "ROLLUP";
        TokenEnum["SKEWED"] = "SKEWED";
        TokenEnum["CASCADE"] = "CASCADE";
        TokenEnum["RESTRICT"] = "RESTRICT";
        TokenEnum["UPDATE"] = "UPDATE";
        TokenEnum["SHOW_DATABASE"] = "SHOW_DATABASE";
        TokenEnum["CONCATENATE"] = "CONCATENATE";
        TokenEnum["OPTION"] = "OPTION";
        TokenEnum["USE"] = "USE";
        TokenEnum["STATISTICS"] = "STATISTICS";
        TokenEnum["COMPUTE"] = "COMPUTE";
        TokenEnum["UNARCHIVE"] = "UNARCHIVE";
        TokenEnum["ARCHIVE"] = "ARCHIVE";
        TokenEnum["TOUCH"] = "TOUCH";
        TokenEnum["LATERAL"] = "LATERAL";
        TokenEnum["SEMI"] = "SEMI";
        TokenEnum["RECORDWRITER"] = "RECORDWRITER";
        TokenEnum["RECORDREADER"] = "RECORDREADER";
        TokenEnum["TRIGGER"] = "TRIGGER";
        TokenEnum["CURSOR"] = "CURSOR";
        TokenEnum["CONTINUE"] = "CONTINUE";
        TokenEnum["CROSS"] = "CROSS";
        TokenEnum["BINARY"] = "BINARY";
        TokenEnum["BOTH"] = "BOTH";
        TokenEnum["BETWEEN"] = "BETWEEN";
        TokenEnum["BEFORE"] = "BEFORE";
        TokenEnum["ANALYZE"] = "ANALYZE";
        TokenEnum["RANGE"] = "RANGE";
        TokenEnum["PURGE"] = "PURGE";
        TokenEnum["READS"] = "READS";
        TokenEnum["WHILE"] = "WHILE";
        TokenEnum["UNSIGNED"] = "UNSIGNED";
        TokenEnum["SIGNED"] = "SIGNED";
        TokenEnum["PROCEDURE"] = "PROCEDURE";
        TokenEnum["EXCLUSIVE"] = "EXCLUSIVE";
        TokenEnum["SHARED"] = "SHARED";
        TokenEnum["UNLOCK"] = "UNLOCK";
        TokenEnum["LOCKS"] = "LOCKS";
        TokenEnum["LOCK"] = "LOCK";
        TokenEnum["UNDO"] = "UNDO";
        TokenEnum["SSL"] = "SSL";
        TokenEnum["REVOKE"] = "REVOKE";
        TokenEnum["GRANT"] = "GRANT";
        TokenEnum["SCHEMAS"] = "SCHEMAS";
        TokenEnum["SCHEMA"] = "SCHEMA";
        TokenEnum["MATERIALIZED"] = "MATERIALIZED";
        TokenEnum["DATABASES"] = "DATABASES";
        TokenEnum["DATABASE"] = "DATABASE";
        TokenEnum["VIEW"] = "VIEW";
        TokenEnum["INTERSECT"] = "INTERSECT";
        TokenEnum["FETCH"] = "FETCH";
        TokenEnum["KWMINUS"] = "KWMINUS";
        TokenEnum["KWPLUS"] = "KWPLUS";
        TokenEnum["DELETE"] = "DELETE";
        TokenEnum["LONG"] = "LONG";
        TokenEnum["UTCTIMESTAMP"] = "UTCTIMESTAMP";
        TokenEnum["UTC"] = "UTC";
        TokenEnum["CLUSTERSTATUS"] = "CLUSTERSTATUS";
        TokenEnum["HOLD_DDLTIME"] = "HOLD_DDLTIME";
        TokenEnum["STREAMTABLE"] = "STREAMTABLE";
        TokenEnum["MAPJOIN"] = "MAPJOIN";
        TokenEnum["ELSE"] = "ELSE";
        TokenEnum["THEN"] = "THEN";
        TokenEnum["WHEN"] = "WHEN";
        TokenEnum["CASE"] = "CASE";
        TokenEnum["ELEM_TYPE"] = "ELEM_TYPE";
        TokenEnum["VALUE_TYPE"] = "VALUE_TYPE";
        TokenEnum["IDXPROPERTIES"] = "IDXPROPERTIES";
        TokenEnum["TBLPROPERTIES"] = "TBLPROPERTIES";
        TokenEnum["UNSET"] = "UNSET";
        TokenEnum["SET"] = "SET";
        TokenEnum["DBPROPERTIES"] = "DBPROPERTIES";
        TokenEnum["SERDEPROPERTIES"] = "SERDEPROPERTIES";
        TokenEnum["DEFERRED"] = "DEFERRED";
        TokenEnum["WITH"] = "WITH";
        TokenEnum["SERDE"] = "SERDE";
        TokenEnum["LOGICAL"] = "LOGICAL";
        TokenEnum["DEPENDENCY"] = "DEPENDENCY";
        TokenEnum["PRETTY"] = "PRETTY";
        TokenEnum["FORMATTED"] = "FORMATTED";
        TokenEnum["EXTENDED"] = "EXTENDED";
        TokenEnum["END"] = "END";
        TokenEnum["EXPLAIN"] = "EXPLAIN";
        TokenEnum["MACRO"] = "MACRO";
        TokenEnum["TEMPORARY"] = "TEMPORARY";
        TokenEnum["REGEXP"] = "REGEXP";
        TokenEnum["RLIKE"] = "RLIKE";
        TokenEnum["REPLACE"] = "REPLACE";
        TokenEnum["ADD"] = "ADD";
        TokenEnum["CAST"] = "CAST";
        TokenEnum["PERCENT"] = "PERCENT";
        TokenEnum["TABLESAMPLE"] = "TABLESAMPLE";
        TokenEnum["LOCATION"] = "LOCATION";
        TokenEnum["NO_DROP"] = "NO_DROP";
        TokenEnum["CharSetName"] = "CharSetName";
        TokenEnum["READONLY"] = "READONLY";
        TokenEnum["READ"] = "READ";
        TokenEnum["DISABLE"] = "DISABLE";
        TokenEnum["ENABLE"] = "ENABLE";
        TokenEnum["OFFLINE"] = "OFFLINE";
        TokenEnum["OF"] = "OF";
        TokenEnum["OUTPUTDRIVER"] = "OUTPUTDRIVER";
        TokenEnum["INPUTDRIVER"] = "INPUTDRIVER";
        TokenEnum["OUTPUTFORMAT"] = "OUTPUTFORMAT";
        TokenEnum["INPUTFORMAT"] = "INPUTFORMAT";
        TokenEnum["ORCFILE"] = "ORCFILE";
        TokenEnum["RCFILE"] = "RCFILE";
        TokenEnum["TEXTFILE"] = "TEXTFILE";
        TokenEnum["TEXT"] = "TEXT";
        TokenEnum["SEQUENCEFILE"] = "SEQUENCEFILE";
        TokenEnum["FILEFORMAT"] = "FILEFORMAT";
        TokenEnum["STORED"] = "STORED";
        TokenEnum["LINES"] = "LINES";
        TokenEnum["KEY_TYPE"] = "KEY_TYPE";
        TokenEnum["KEYS"] = "KEYS";
        TokenEnum["KEY"] = "KEY";
        TokenEnum["ITEMS"] = "ITEMS";
        TokenEnum["COLLECTION"] = "COLLECTION";
        TokenEnum["ESCAPED"] = "ESCAPED";
        TokenEnum["TERMINATED"] = "TERMINATED";
        TokenEnum["MIN"] = "MIN";
        TokenEnum["FIELDS"] = "FIELDS";
        TokenEnum["DELIMITED"] = "DELIMITED";
        TokenEnum["LIMIT"] = "LIMIT";
        TokenEnum["FORMAT"] = "FORMAT";
        TokenEnum["ROWS"] = "ROWS";
        TokenEnum["ROW"] = "ROW";
        TokenEnum["BUCKETS"] = "BUCKETS";
        TokenEnum["BUCKET"] = "BUCKET";
        TokenEnum["INTO"] = "INTO";
        TokenEnum["SORTED"] = "SORTED";
        TokenEnum["CLUSTERED"] = "CLUSTERED";
        TokenEnum["PARTITIONED"] = "PARTITIONED";
        TokenEnum["REDUCE"] = "REDUCE";
        TokenEnum["UNIONTYPE"] = "UNIONTYPE";
        TokenEnum["MAP"] = "MAP";
        TokenEnum["STRUCT"] = "STRUCT";
        TokenEnum["ARRAY"] = "ARRAY";
        TokenEnum["STRING"] = "STRING";
        TokenEnum["DECIMAL"] = "DECIMAL";
        TokenEnum["TIMESTAMP"] = "TIMESTAMP";
        TokenEnum["DATETIME"] = "DATETIME";
        TokenEnum["TIME"] = "TIME";
        TokenEnum["DATE"] = "DATE";
        TokenEnum["DOUBLE"] = "DOUBLE";
        TokenEnum["FLOAT"] = "FLOAT";
        TokenEnum["BIGINT"] = "BIGINT";
        TokenEnum["SMALLINT"] = "SMALLINT";
        TokenEnum["TINYINT"] = "TINYINT";
        TokenEnum["INT"] = "INT";
        TokenEnum["BOOLEAN"] = "BOOLEAN";
        TokenEnum["BOOL"] = "BOOL";
        TokenEnum["COMMENT"] = "COMMENT";
        TokenEnum["PROTECTION"] = "PROTECTION";
        TokenEnum["IGNORE"] = "IGNORE";
        TokenEnum["NO"] = "NO";
        TokenEnum["RENAME"] = "RENAME";
        TokenEnum["DROP"] = "DROP";
        TokenEnum["DESCRIBE"] = "DESCRIBE";
        TokenEnum["AFTER"] = "AFTER";
        TokenEnum["FIRST"] = "FIRST";
        TokenEnum["CHANGE"] = "CHANGE";
        TokenEnum["ALTER"] = "ALTER";
        TokenEnum["EXTERNAL"] = "EXTERNAL";
        TokenEnum["CREATE"] = "CREATE";
        TokenEnum["NULL"] = "NULL";
        TokenEnum["INPATH"] = "INPATH";
        TokenEnum["DATA"] = "DATA";
        TokenEnum["IMPORT"] = "IMPORT";
        TokenEnum["EXPORT"] = "EXPORT";
        TokenEnum["LOAD"] = "LOAD";
        TokenEnum["UNION"] = "UNION";
        TokenEnum["SORT"] = "SORT";
        TokenEnum["DISTRIBUTE"] = "DISTRIBUTE";
        TokenEnum["CLUSTER"] = "CLUSTER";
        TokenEnum["USING"] = "USING";
        TokenEnum["TRANSFORM"] = "TRANSFORM";
        TokenEnum["FOR"] = "FOR";
        TokenEnum["LOCAL"] = "LOCAL";
        TokenEnum["DIRECTORY"] = "DIRECTORY";
        TokenEnum["TO"] = "TO";
        TokenEnum["REPAIR"] = "REPAIR";
        TokenEnum["MSCK"] = "MSCK";
        TokenEnum["SHOW"] = "SHOW";
        TokenEnum["FUNCTIONS"] = "FUNCTIONS";
        TokenEnum["FUNCTION"] = "FUNCTION";
        TokenEnum["REBUILD"] = "REBUILD";
        TokenEnum["INDEXES"] = "INDEXES";
        TokenEnum["INDEX"] = "INDEX";
        TokenEnum["COLUMNS"] = "COLUMNS";
        TokenEnum["COLUMN"] = "COLUMN";
        TokenEnum["TABLES"] = "TABLES";
        TokenEnum["TABLE"] = "TABLE";
        TokenEnum["PARTITIONS"] = "PARTITIONS";
        TokenEnum["PARTITION"] = "PARTITION";
        TokenEnum["ON"] = "ON";
        TokenEnum["FULL"] = "FULL";
        TokenEnum["RIGHT"] = "RIGHT";
        TokenEnum["LEFT"] = "LEFT";
        TokenEnum["PRESERVE"] = "PRESERVE";
        TokenEnum["UNIQUEJOIN"] = "UNIQUEJOIN";
        TokenEnum["UNIQUE"] = "UNIQUE";
        TokenEnum["OUTER"] = "OUTER";
        TokenEnum["OUT"] = "OUT";
        TokenEnum["OVERWRITE"] = "OVERWRITE";
        TokenEnum["OVER"] = "OVER";
        TokenEnum["INSERT"] = "INSERT";
        TokenEnum["DISTINCT"] = "DISTINCT";
        TokenEnum["SELECT"] = "SELECT";
        TokenEnum["FROM"] = "FROM";
        TokenEnum["WHERE"] = "WHERE";
        TokenEnum["HAVING"] = "HAVING";
        TokenEnum["BY"] = "BY";
        TokenEnum["GROUP"] = "GROUP";
        TokenEnum["ORDER"] = "ORDER";
        TokenEnum["DESC"] = "DESC";
        TokenEnum["ASC"] = "ASC";
        TokenEnum["AS"] = "AS";
        TokenEnum["EXISTS"] = "EXISTS";
        TokenEnum["IS"] = "IS";
        TokenEnum["IF"] = "IF";
        TokenEnum["JOIN"] = "JOIN";
        TokenEnum["IN"] = "IN";
        TokenEnum["LIKE"] = "LIKE";
        TokenEnum["NOT"] = "NOT";
        TokenEnum["OR"] = "OR";
        TokenEnum["AND"] = "AND";
        TokenEnum["ALL"] = "ALL";
        TokenEnum["FALSE"] = "FALSE";
        TokenEnum["TRUE"] = "TRUE";
        TokenEnum["ID"] = "ID";
    })(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
    exports.Tokens = {
        WS: WS,
        ByteLengthLiteral: ByteLengthLiteral,
        DecimalLiteral: DecimalLiteral,
        TinyintLiteral: TinyintLiteral,
        SmallintLiteral: SmallintLiteral,
        BigintLiteral: BigintLiteral,
        CharSetLiteral: CharSetLiteral,
        STRING_LITERAL: STRING_LITERAL,
        DOLLAR: DOLLAR,
        QUESTION: QUESTION,
        BITWISEXOR: BITWISEXOR,
        BITWISEOR: BITWISEOR,
        TILDE: TILDE,
        AMPERSAND: AMPERSAND,
        DIV: DIV,
        MOD: MOD,
        STAR: STAR,
        MINUS: MINUS,
        PLUS: PLUS,
        DIVIDE: DIVIDE,
        GREATERTHAN: GREATERTHAN,
        GREATERTHANOREQUALTO: GREATERTHANOREQUALTO,
        LESSTHAN: LESSTHAN,
        LESSTHANOREQUALTO: LESSTHANOREQUALTO,
        NOTEQUAL: NOTEQUAL,
        EQUAL_NS: EQUAL_NS,
        EQUAL: EQUAL,
        RCURLY: RCURLY,
        LCURLY: LCURLY,
        RSQUARE: RSQUARE,
        LSQUARE: LSQUARE,
        RPAREN: RPAREN,
        LPAREN: LPAREN,
        SEMICOLON: SEMICOLON,
        COMMA: COMMA,
        COLON: COLON,
        DOT: DOT,
        ONE_DECIMAL: ONE_DECIMAL,
        ZERO_DECIMAL: ZERO_DECIMAL,
        Number: Number,
        LIFECYCLE: LIFECYCLE,
        TABLESPACE: TABLESPACE,
        STATS_PERSISTENT: STATS_PERSISTENT,
        STATS_AUTO_RECALC: STATS_AUTO_RECALC,
        COMPACT: COMPACT,
        REDUNDANT: REDUNDANT,
        COMPRESSED: COMPRESSED,
        ROW_FORMAT: ROW_FORMAT,
        PASSWORD: PASSWORD,
        PACK_KEYS: PACK_KEYS,
        MIN_ROWS: MIN_ROWS,
        MAX_ROWS: MAX_ROWS,
        KEY_BLOCK_SIZE: KEY_BLOCK_SIZE,
        LAST: LAST,
        INSERT_METHOD: INSERT_METHOD,
        ENCRYPTION: ENCRYPTION,
        DELAY_KEY_WRITE: DELAY_KEY_WRITE,
        CONNECTION: CONNECTION,
        COMPRESSION: COMPRESSION,
        AVG_ROW_LENGTH: AVG_ROW_LENGTH,
        ENGINE: ENGINE,
        CHECKSUM: CHECKSUM,
        CHARSET: CHARSET,
        PERFOMANCE_SCHEMA: PERFOMANCE_SCHEMA,
        NDBCLUSTER: NDBCLUSTER,
        NDB: NDB,
        MRG_MYISAM: MRG_MYISAM,
        MYISAM: MYISAM,
        INNODB: INNODB,
        FEDERATED: FEDERATED,
        CSV: CSV,
        BLACKHOLE: BLACKHOLE,
        MULTIPOLYGON: MULTIPOLYGON,
        POLYGON: POLYGON,
        MULTIPOINT: MULTIPOINT,
        POINT: POINT,
        MULTILINESTRING: MULTILINESTRING,
        LINESTRING: LINESTRING,
        GEOMETRYCOLLECTION: GEOMETRYCOLLECTION,
        ENUM: ENUM,
        VARBINARY: VARBINARY,
        LONGBLOB: LONGBLOB,
        MEDIUMBLOB: MEDIUMBLOB,
        TINYBLOB: TINYBLOB,
        BLOB: BLOB,
        NUMERIC: NUMERIC,
        REAL: REAL,
        ZEROFILL: ZEROFILL,
        MEDIUMINT: MEDIUMINT,
        COLLATE: COLLATE,
        LONGTEXT: LONGTEXT,
        MEDIUMTEXT: MEDIUMTEXT,
        TINYTEXT: TINYTEXT,
        VARCHAR: VARCHAR,
        MEMORY: MEMORY,
        DISK: DISK,
        STORAGE: STORAGE,
        DYNAMIC: DYNAMIC,
        FIXED: FIXED,
        COLUMN_FORMAT: COLUMN_FORMAT,
        PRIMARY: PRIMARY,
        AUTO_INCREMENT: AUTO_INCREMENT,
        DEFAULT: DEFAULT,
        STRAIGHT_JOIN: STRAIGHT_JOIN,
        STARTING: STARTING,
        ENCLOSED: ENCLOSED,
        OPTIONALLY: OPTIONALLY,
        OUTFILE: OUTFILE,
        DUMPFILE: DUMPFILE,
        GET_FORMAT: GET_FORMAT,
        CONVERT: CONVERT,
        WEIGHT_STRING: WEIGHT_STRING,
        TRIM: TRIM,
        SYSDATE: SYSDATE,
        SUBSTRING: SUBSTRING,
        SUBSTR: SUBSTR,
        POSITION: POSITION,
        NOW: NOW,
        LOCALTIMESTAMP: LOCALTIMESTAMP,
        EXTRACT: EXTRACT,
        DATE_SUB: DATE_SUB,
        DATE_ADD: DATE_ADD,
        CURTIME: CURTIME,
        CURDATE: CURDATE,
        LOCALTIME: LOCALTIME,
        CURRENT_USER: CURRENT_USER,
        CURRENT_TIMESTAMP: CURRENT_TIMESTAMP,
        CURRENT_TIME: CURRENT_TIME,
        CURRENT_DATE: CURRENT_DATE,
        QUARTER: QUARTER,
        VARIANCE: VARIANCE,
        VAR_SAMP: VAR_SAMP,
        VAR_POP: VAR_POP,
        SUM: SUM,
        STDDEV_SAMP: STDDEV_SAMP,
        STDDEV_POP: STDDEV_POP,
        STDDEV: STDDEV,
        STD: STD,
        MAX: MAX,
        GROUP_CONCAT: GROUP_CONCAT,
        COUNT: COUNT,
        BIT_XOR: BIT_XOR,
        BIT_OR: BIT_OR,
        BIT_AND: BIT_AND,
        BIT: BIT,
        AVG: AVG,
        UTC_TIMESTAMP: UTC_TIMESTAMP,
        UTC_TIME: UTC_TIME,
        UTC_DATE: UTC_DATE,
        TRAILING: TRAILING,
        LEADING: LEADING,
        REVERSE: REVERSE,
        LEVEL: LEVEL,
        WEEK: WEEK,
        DAY_MICROSECOND: DAY_MICROSECOND,
        HOUR_MICROSECOND: HOUR_MICROSECOND,
        MINUTE_MICROSECOND: MINUTE_MICROSECOND,
        SECOND_MICROSECOND: SECOND_MICROSECOND,
        MICROSECOND: MICROSECOND,
        MINUTE_SECOND: MINUTE_SECOND,
        HOUR_SECOND: HOUR_SECOND,
        HOUR_MINUTE: HOUR_MINUTE,
        DAY_SECOND: DAY_SECOND,
        SECOND: SECOND,
        DAY_MINUTE: DAY_MINUTE,
        MINUTE: MINUTE,
        DAY_HOUR: DAY_HOUR,
        HOUR: HOUR,
        DAY: DAY,
        YEAR_MONTH: YEAR_MONTH,
        MONTH: MONTH,
        YEAR: YEAR,
        INTEGER: INTEGER,
        CHARACTER: CHARACTER,
        NCHAR: NCHAR,
        CHAR: CHAR,
        VALUES: VALUES,
        VALUE: VALUE,
        EXCHANGE: EXCHANGE,
        INNER: INNER,
        ROLE: ROLE,
        USER: USER,
        PARTIALSCAN: PARTIALSCAN,
        NOSCAN: NOSCAN,
        TRUNCATE: TRUNCATE,
        SETS: SETS,
        GROUPING: GROUPING,
        MORE: MORE,
        LESS: LESS,
        CURRENT: CURRENT,
        FOLLOWING: FOLLOWING,
        PRECEDING: PRECEDING,
        UNBOUNDED: UNBOUNDED,
        WINDOW: WINDOW,
        DIRECTORIES: DIRECTORIES,
        CUBE: CUBE,
        ROLLUP: ROLLUP,
        SKEWED: SKEWED,
        CASCADE: CASCADE,
        RESTRICT: RESTRICT,
        UPDATE: UPDATE,
        SHOW_DATABASE: SHOW_DATABASE,
        CONCATENATE: CONCATENATE,
        OPTION: OPTION,
        USE: USE,
        STATISTICS: STATISTICS,
        COMPUTE: COMPUTE,
        UNARCHIVE: UNARCHIVE,
        ARCHIVE: ARCHIVE,
        TOUCH: TOUCH,
        LATERAL: LATERAL,
        SEMI: SEMI,
        RECORDWRITER: RECORDWRITER,
        RECORDREADER: RECORDREADER,
        TRIGGER: TRIGGER,
        CURSOR: CURSOR,
        CONTINUE: CONTINUE,
        CROSS: CROSS,
        BINARY: BINARY,
        BOTH: BOTH,
        BETWEEN: BETWEEN,
        BEFORE: BEFORE,
        ANALYZE: ANALYZE,
        RANGE: RANGE,
        PURGE: PURGE,
        READS: READS,
        WHILE: WHILE,
        UNSIGNED: UNSIGNED,
        SIGNED: SIGNED,
        PROCEDURE: PROCEDURE,
        EXCLUSIVE: EXCLUSIVE,
        SHARED: SHARED,
        UNLOCK: UNLOCK,
        LOCKS: LOCKS,
        LOCK: LOCK,
        UNDO: UNDO,
        SSL: SSL,
        REVOKE: REVOKE,
        GRANT: GRANT,
        SCHEMAS: SCHEMAS,
        SCHEMA: SCHEMA,
        MATERIALIZED: MATERIALIZED,
        DATABASES: DATABASES,
        DATABASE: DATABASE,
        VIEW: VIEW,
        INTERSECT: INTERSECT,
        FETCH: FETCH,
        KWMINUS: KWMINUS,
        KWPLUS: KWPLUS,
        DELETE: DELETE,
        LONG: LONG,
        UTCTIMESTAMP: UTCTIMESTAMP,
        UTC: UTC,
        CLUSTERSTATUS: CLUSTERSTATUS,
        HOLD_DDLTIME: HOLD_DDLTIME,
        STREAMTABLE: STREAMTABLE,
        MAPJOIN: MAPJOIN,
        ELSE: ELSE,
        THEN: THEN,
        WHEN: WHEN,
        CASE: CASE,
        ELEM_TYPE: ELEM_TYPE,
        VALUE_TYPE: VALUE_TYPE,
        IDXPROPERTIES: IDXPROPERTIES,
        TBLPROPERTIES: TBLPROPERTIES,
        UNSET: UNSET,
        SET: SET,
        DBPROPERTIES: DBPROPERTIES,
        SERDEPROPERTIES: SERDEPROPERTIES,
        DEFERRED: DEFERRED,
        WITH: WITH,
        SERDE: SERDE,
        LOGICAL: LOGICAL,
        DEPENDENCY: DEPENDENCY,
        PRETTY: PRETTY,
        FORMATTED: FORMATTED,
        EXTENDED: EXTENDED,
        END: END,
        EXPLAIN: EXPLAIN,
        MACRO: MACRO,
        TEMPORARY: TEMPORARY,
        REGEXP: REGEXP,
        RLIKE: RLIKE,
        REPLACE: REPLACE,
        ADD: ADD,
        CAST: CAST,
        PERCENT: PERCENT,
        TABLESAMPLE: TABLESAMPLE,
        LOCATION: LOCATION,
        NO_DROP: NO_DROP,
        CharSetName: CharSetName,
        READONLY: READONLY,
        READ: READ,
        DISABLE: DISABLE,
        ENABLE: ENABLE,
        OFFLINE: OFFLINE,
        OF: OF,
        OUTPUTDRIVER: OUTPUTDRIVER,
        INPUTDRIVER: INPUTDRIVER,
        OUTPUTFORMAT: OUTPUTFORMAT,
        INPUTFORMAT: INPUTFORMAT,
        ORCFILE: ORCFILE,
        RCFILE: RCFILE,
        TEXTFILE: TEXTFILE,
        TEXT: TEXT,
        SEQUENCEFILE: SEQUENCEFILE,
        FILEFORMAT: FILEFORMAT,
        STORED: STORED,
        LINES: LINES,
        KEY_TYPE: KEY_TYPE,
        KEYS: KEYS,
        KEY: KEY,
        ITEMS: ITEMS,
        COLLECTION: COLLECTION,
        ESCAPED: ESCAPED,
        TERMINATED: TERMINATED,
        MIN: MIN,
        FIELDS: FIELDS,
        DELIMITED: DELIMITED,
        LIMIT: LIMIT,
        FORMAT: FORMAT,
        ROWS: ROWS,
        ROW: ROW,
        BUCKETS: BUCKETS,
        BUCKET: BUCKET,
        INTO: INTO,
        SORTED: SORTED,
        CLUSTERED: CLUSTERED,
        PARTITIONED: PARTITIONED,
        REDUCE: REDUCE,
        UNIONTYPE: UNIONTYPE,
        MAP: MAP,
        STRUCT: STRUCT,
        ARRAY: ARRAY,
        STRING: STRING,
        DECIMAL: DECIMAL,
        TIMESTAMP: TIMESTAMP,
        DATETIME: DATETIME,
        TIME: TIME,
        DATE: DATE,
        DOUBLE: DOUBLE,
        FLOAT: FLOAT,
        BIGINT: BIGINT,
        SMALLINT: SMALLINT,
        TINYINT: TINYINT,
        INT: INT,
        BOOLEAN: BOOLEAN,
        BOOL: BOOL,
        COMMENT: COMMENT,
        PROTECTION: PROTECTION,
        IGNORE: IGNORE,
        NO: NO,
        RENAME: RENAME,
        DROP: DROP,
        DESCRIBE: DESCRIBE,
        AFTER: AFTER,
        FIRST: FIRST,
        CHANGE: CHANGE,
        ALTER: ALTER,
        EXTERNAL: EXTERNAL,
        CREATE: CREATE,
        NULL: NULL,
        INPATH: INPATH,
        DATA: DATA,
        IMPORT: IMPORT,
        EXPORT: EXPORT,
        LOAD: LOAD,
        UNION: UNION,
        SORT: SORT,
        DISTRIBUTE: DISTRIBUTE,
        CLUSTER: CLUSTER,
        USING: USING,
        TRANSFORM: TRANSFORM,
        FOR: FOR,
        LOCAL: LOCAL,
        DIRECTORY: DIRECTORY,
        TO: TO,
        REPAIR: REPAIR,
        MSCK: MSCK,
        SHOW: SHOW,
        FUNCTIONS: FUNCTIONS,
        FUNCTION: FUNCTION,
        REBUILD: REBUILD,
        INDEXES: INDEXES,
        INDEX: INDEX,
        COLUMNS: COLUMNS,
        COLUMN: COLUMN,
        TABLES: TABLES,
        TABLE: TABLE,
        PARTITIONS: PARTITIONS,
        PARTITION: PARTITION,
        ON: ON,
        FULL: FULL,
        RIGHT: RIGHT,
        LEFT: LEFT,
        PRESERVE: PRESERVE,
        UNIQUEJOIN: UNIQUEJOIN,
        UNIQUE: UNIQUE,
        OUTER: OUTER,
        OUT: OUT,
        OVERWRITE: OVERWRITE,
        OVER: OVER,
        INSERT: INSERT,
        DISTINCT: DISTINCT,
        SELECT: SELECT,
        FROM: FROM,
        WHERE: WHERE,
        HAVING: HAVING,
        BY: BY,
        GROUP: GROUP,
        ORDER: ORDER,
        DESC: DESC,
        ASC: ASC,
        AS: AS,
        EXISTS: EXISTS,
        IS: IS,
        IF: IF,
        JOIN: JOIN,
        IN: IN,
        LIKE: LIKE,
        NOT: NOT,
        OR: OR,
        AND: AND,
        ALL: ALL,
        FALSE: FALSE,
        TRUE: TRUE,
        ID: ID,
    };
    exports.tokens = [
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
    exports.Lexer = new chevrotain.Lexer(exports.tokens, {
        positionTracking: 'onlyStart',
    });
});
//# sourceMappingURL=lexer.g.js.map