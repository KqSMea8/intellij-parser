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
    var DECIMAL_LITERAL = chevrotain.createToken({
        name: 'DECIMAL_LITERAL',
        pattern: /[0-9]+/,
    });
    var ID = chevrotain.createToken({
        name: 'ID',
        pattern: /[A-Za-z_$0-9*]+/i,
    });
    var WS = chevrotain.createToken({
        name: 'WS',
        pattern: /(\ |\r|\t|\n)/i,
    });
    var Number = chevrotain.createToken({
        name: 'Number',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
    });
    var ByteLengthLiteral = chevrotain.createToken({
        name: 'ByteLengthLiteral',
        pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
    });
    var DecimalLiteral = chevrotain.createToken({
        name: 'DecimalLiteral',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
    });
    var TinyintLiteral = chevrotain.createToken({
        name: 'TinyintLiteral',
        pattern: /([0-9])+Y/i,
    });
    var SmallintLiteral = chevrotain.createToken({
        name: 'SmallintLiteral',
        pattern: /([0-9])+S/i,
    });
    var BigintLiteral = chevrotain.createToken({
        name: 'BigintLiteral',
        pattern: /([0-9])+L/i,
    });
    var CharSetLiteral = chevrotain.createToken({
        name: 'CharSetLiteral',
        pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
    });
    var StringLiteral = chevrotain.createToken({
        name: 'StringLiteral',
        pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
    });
    var DOLLAR = chevrotain.createToken({
        name: 'DOLLAR',
        pattern: /\$/i,
    });
    var QUESTION = chevrotain.createToken({
        name: 'QUESTION',
        pattern: /\?/i,
    });
    var BITWISEXOR = chevrotain.createToken({
        name: 'BITWISEXOR',
        pattern: /\^/i,
    });
    var BITWISEOR = chevrotain.createToken({
        name: 'BITWISEOR',
        pattern: /\|/i,
    });
    var TILDE = chevrotain.createToken({
        name: 'TILDE',
        pattern: /\~/i,
    });
    var AMPERSAND = chevrotain.createToken({
        name: 'AMPERSAND',
        pattern: /\&/i,
    });
    var DIV = chevrotain.createToken({
        name: 'DIV',
        pattern: /DIV/i,
    });
    var MOD = chevrotain.createToken({
        name: 'MOD',
        pattern: /\%/i,
    });
    var STAR = chevrotain.createToken({
        name: 'STAR',
        pattern: /\*/i,
    });
    var MINUS = chevrotain.createToken({
        name: 'MINUS',
        pattern: /\-/i,
    });
    var PLUS = chevrotain.createToken({
        name: 'PLUS',
        pattern: /\+/i,
    });
    var DIVIDE = chevrotain.createToken({
        name: 'DIVIDE',
        pattern: /\//i,
    });
    var GREATERTHAN = chevrotain.createToken({
        name: 'GREATERTHAN',
        pattern: /\>/i,
    });
    var GREATERTHANOREQUALTO = chevrotain.createToken({
        name: 'GREATERTHANOREQUALTO',
        pattern: /\>\=/i,
    });
    var LESSTHAN = chevrotain.createToken({
        name: 'LESSTHAN',
        pattern: /\</i,
    });
    var LESSTHANOREQUALTO = chevrotain.createToken({
        name: 'LESSTHANOREQUALTO',
        pattern: /\<\=/i,
    });
    var NOTEQUAL = chevrotain.createToken({
        name: 'NOTEQUAL',
        pattern: /(\<\>|\!\=)/i,
    });
    var EQUAL_NS = chevrotain.createToken({
        name: 'EQUAL_NS',
        pattern: /\<\=\>/i,
    });
    var EQUAL = chevrotain.createToken({
        name: 'EQUAL',
        pattern: /(\=|\=\=)/i,
    });
    var RCURLY = chevrotain.createToken({
        name: 'RCURLY',
        pattern: /\}/i,
    });
    var LCURLY = chevrotain.createToken({
        name: 'LCURLY',
        pattern: /\{/i,
    });
    var RSQUARE = chevrotain.createToken({
        name: 'RSQUARE',
        pattern: /\]/i,
    });
    var LSQUARE = chevrotain.createToken({
        name: 'LSQUARE',
        pattern: /\[/i,
    });
    var RPAREN = chevrotain.createToken({
        name: 'RPAREN',
        pattern: /\)/i,
    });
    var LPAREN = chevrotain.createToken({
        name: 'LPAREN',
        pattern: /\(/i,
    });
    var SEMICOLON = chevrotain.createToken({
        name: 'SEMICOLON',
        pattern: /\;/i,
    });
    var COMMA = chevrotain.createToken({
        name: 'COMMA',
        pattern: /\,/i,
    });
    var COLON = chevrotain.createToken({
        name: 'COLON',
        pattern: /\:/i,
    });
    var DOT = chevrotain.createToken({
        name: 'DOT',
        pattern: /\./i,
    });
    var VALUES = chevrotain.createToken({
        name: 'VALUES',
        pattern: /VALUES/i,
    });
    var VALUE = chevrotain.createToken({
        name: 'VALUE',
        pattern: /VALUE/i,
    });
    var EXCHANGE = chevrotain.createToken({
        name: 'EXCHANGE',
        pattern: /EXCHANGE/i,
    });
    var INNER = chevrotain.createToken({
        name: 'INNER',
        pattern: /INNER/i,
    });
    var ROLE = chevrotain.createToken({
        name: 'ROLE',
        pattern: /ROLE/i,
    });
    var USER = chevrotain.createToken({
        name: 'USER',
        pattern: /USER/i,
    });
    var PARTIALSCAN = chevrotain.createToken({
        name: 'PARTIALSCAN',
        pattern: /PARTIALSCAN/i,
    });
    var NOSCAN = chevrotain.createToken({
        name: 'NOSCAN',
        pattern: /NOSCAN/i,
    });
    var TRUNCATE = chevrotain.createToken({
        name: 'TRUNCATE',
        pattern: /TRUNCATE/i,
    });
    var SETS = chevrotain.createToken({
        name: 'SETS',
        pattern: /SETS/i,
    });
    var GROUPING = chevrotain.createToken({
        name: 'GROUPING',
        pattern: /GROUPING/i,
    });
    var MORE = chevrotain.createToken({
        name: 'MORE',
        pattern: /MORE/i,
    });
    var LESS = chevrotain.createToken({
        name: 'LESS',
        pattern: /LESS/i,
    });
    var CURRENT = chevrotain.createToken({
        name: 'CURRENT',
        pattern: /CURRENT/i,
    });
    var FOLLOWING = chevrotain.createToken({
        name: 'FOLLOWING',
        pattern: /FOLLOWING/i,
    });
    var PRECEDING = chevrotain.createToken({
        name: 'PRECEDING',
        pattern: /PRECEDING/i,
    });
    var UNBOUNDED = chevrotain.createToken({
        name: 'UNBOUNDED',
        pattern: /UNBOUNDED/i,
    });
    var WINDOW = chevrotain.createToken({
        name: 'WINDOW',
        pattern: /WINDOW/i,
    });
    var DIRECTORIES = chevrotain.createToken({
        name: 'DIRECTORIES',
        pattern: /DIRECTORIES/i,
    });
    var CUBE = chevrotain.createToken({
        name: 'CUBE',
        pattern: /CUBE/i,
    });
    var ROLLUP = chevrotain.createToken({
        name: 'ROLLUP',
        pattern: /ROLLUP/i,
    });
    var SKEWED = chevrotain.createToken({
        name: 'SKEWED',
        pattern: /SKEWED/i,
    });
    var CASCADE = chevrotain.createToken({
        name: 'CASCADE',
        pattern: /CASCADE/i,
    });
    var RESTRICT = chevrotain.createToken({
        name: 'RESTRICT',
        pattern: /RESTRICT/i,
    });
    var UPDATE = chevrotain.createToken({
        name: 'UPDATE',
        pattern: /UPDATE/i,
    });
    var SHOW_DATABASE = chevrotain.createToken({
        name: 'SHOW_DATABASE',
        pattern: /SHOW_DATABASE/i,
    });
    var CONCATENATE = chevrotain.createToken({
        name: 'CONCATENATE',
        pattern: /CONCATENATE/i,
    });
    var OPTION = chevrotain.createToken({
        name: 'OPTION',
        pattern: /OPTION/i,
    });
    var USE = chevrotain.createToken({
        name: 'USE',
        pattern: /USE/i,
    });
    var STATISTICS = chevrotain.createToken({
        name: 'STATISTICS',
        pattern: /STATISTICS/i,
    });
    var COMPUTE = chevrotain.createToken({
        name: 'COMPUTE',
        pattern: /COMPUTE/i,
    });
    var UNARCHIVE = chevrotain.createToken({
        name: 'UNARCHIVE',
        pattern: /UNARCHIVE/i,
    });
    var ARCHIVE = chevrotain.createToken({
        name: 'ARCHIVE',
        pattern: /ARCHIVE/i,
    });
    var TOUCH = chevrotain.createToken({
        name: 'TOUCH',
        pattern: /TOUCH/i,
    });
    var LATERAL = chevrotain.createToken({
        name: 'LATERAL',
        pattern: /LATERAL/i,
    });
    var SEMI = chevrotain.createToken({
        name: 'SEMI',
        pattern: /SEMI/i,
    });
    var RECORDWRITER = chevrotain.createToken({
        name: 'RECORDWRITER',
        pattern: /RECORDWRITER/i,
    });
    var RECORDREADER = chevrotain.createToken({
        name: 'RECORDREADER',
        pattern: /RECORDREADER/i,
    });
    var TRIGGER = chevrotain.createToken({
        name: 'TRIGGER',
        pattern: /TRIGGER/i,
    });
    var CURSOR = chevrotain.createToken({
        name: 'CURSOR',
        pattern: /CURSOR/i,
    });
    var CONTINUE = chevrotain.createToken({
        name: 'CONTINUE',
        pattern: /CONTINUE/i,
    });
    var CROSS = chevrotain.createToken({
        name: 'CROSS',
        pattern: /CROSS/i,
    });
    var BINARY = chevrotain.createToken({
        name: 'BINARY',
        pattern: /BINARY/i,
    });
    var BOTH = chevrotain.createToken({
        name: 'BOTH',
        pattern: /BOTH/i,
    });
    var BETWEEN = chevrotain.createToken({
        name: 'BETWEEN',
        pattern: /BETWEEN/i,
    });
    var BEFORE = chevrotain.createToken({
        name: 'BEFORE',
        pattern: /BEFORE/i,
    });
    var ANALYZE = chevrotain.createToken({
        name: 'ANALYZE',
        pattern: /ANALYZE/i,
    });
    var RANGE = chevrotain.createToken({
        name: 'RANGE',
        pattern: /RANGE/i,
    });
    var PURGE = chevrotain.createToken({
        name: 'PURGE',
        pattern: /PURGE/i,
    });
    var READS = chevrotain.createToken({
        name: 'READS',
        pattern: /READS/i,
    });
    var WHILE = chevrotain.createToken({
        name: 'WHILE',
        pattern: /WHILE/i,
    });
    var UNSIGNED = chevrotain.createToken({
        name: 'UNSIGNED',
        pattern: /UNSIGNED/i,
    });
    var PROCEDURE = chevrotain.createToken({
        name: 'PROCEDURE',
        pattern: /PROCEDURE/i,
    });
    var EXCLUSIVE = chevrotain.createToken({
        name: 'EXCLUSIVE',
        pattern: /EXCLUSIVE/i,
    });
    var SHARED = chevrotain.createToken({
        name: 'SHARED',
        pattern: /SHARED/i,
    });
    var UNLOCK = chevrotain.createToken({
        name: 'UNLOCK',
        pattern: /UNLOCK/i,
    });
    var LOCKS = chevrotain.createToken({
        name: 'LOCKS',
        pattern: /LOCKS/i,
    });
    var LOCK = chevrotain.createToken({
        name: 'LOCK',
        pattern: /LOCK/i,
    });
    var UNDO = chevrotain.createToken({
        name: 'UNDO',
        pattern: /UNDO/i,
    });
    var SSL = chevrotain.createToken({
        name: 'SSL',
        pattern: /SSL/i,
    });
    var REVOKE = chevrotain.createToken({
        name: 'REVOKE',
        pattern: /REVOKE/i,
    });
    var GRANT = chevrotain.createToken({
        name: 'GRANT',
        pattern: /GRANT/i,
    });
    var SCHEMAS = chevrotain.createToken({
        name: 'SCHEMAS',
        pattern: /SCHEMAS/i,
    });
    var SCHEMA = chevrotain.createToken({
        name: 'SCHEMA',
        pattern: /SCHEMA/i,
    });
    var MATERIALIZED = chevrotain.createToken({
        name: 'MATERIALIZED',
        pattern: /MATERIALIZED/i,
    });
    var DATABASES = chevrotain.createToken({
        name: 'DATABASES',
        pattern: /DATABASES/i,
    });
    var DATABASE = chevrotain.createToken({
        name: 'DATABASE',
        pattern: /DATABASE/i,
    });
    var VIEW = chevrotain.createToken({
        name: 'VIEW',
        pattern: /VIEW/i,
    });
    var INTERSECT = chevrotain.createToken({
        name: 'INTERSECT',
        pattern: /INTERSECT/i,
    });
    var FETCH = chevrotain.createToken({
        name: 'FETCH',
        pattern: /FETCH/i,
    });
    var KWMINUS = chevrotain.createToken({
        name: 'KWMINUS',
        pattern: /KWMINUS/i,
    });
    var KWPLUS = chevrotain.createToken({
        name: 'KWPLUS',
        pattern: /KWPLUS/i,
    });
    var DELETE = chevrotain.createToken({
        name: 'DELETE',
        pattern: /DELETE/i,
    });
    var LONG = chevrotain.createToken({
        name: 'LONG',
        pattern: /LONG/i,
    });
    var UTCTIMESTAMP = chevrotain.createToken({
        name: 'UTCTIMESTAMP',
        pattern: /UTC_TMESTAMP/i,
    });
    var UTC = chevrotain.createToken({
        name: 'UTC',
        pattern: /UTC/i,
    });
    var CLUSTERSTATUS = chevrotain.createToken({
        name: 'CLUSTERSTATUS',
        pattern: /CLUSTERSTATUS/i,
    });
    var HOLD_DDLTIME = chevrotain.createToken({
        name: 'HOLD_DDLTIME',
        pattern: /HOLD_DDLTIME/i,
    });
    var STREAMTABLE = chevrotain.createToken({
        name: 'STREAMTABLE',
        pattern: /STREAMTABLE/i,
    });
    var MAPJOIN = chevrotain.createToken({
        name: 'MAPJOIN',
        pattern: /MAPJOIN/i,
    });
    var ELSE = chevrotain.createToken({
        name: 'ELSE',
        pattern: /ELSE/i,
    });
    var THEN = chevrotain.createToken({
        name: 'THEN',
        pattern: /THEN/i,
    });
    var WHEN = chevrotain.createToken({
        name: 'WHEN',
        pattern: /WHEN/i,
    });
    var CASE = chevrotain.createToken({
        name: 'CASE',
        pattern: /CASE/i,
    });
    var ELEM_TYPE = chevrotain.createToken({
        name: 'ELEM_TYPE',
        pattern: /\$ELEM\$/i,
    });
    var VALUE_TYPE = chevrotain.createToken({
        name: 'VALUE_TYPE',
        pattern: /\$VALUE\$/i,
    });
    var IDXPROPERTIES = chevrotain.createToken({
        name: 'IDXPROPERTIES',
        pattern: /IDXPROPERTIES/i,
    });
    var TBLPROPERTIES = chevrotain.createToken({
        name: 'TBLPROPERTIES',
        pattern: /TBLPROPERTIES/i,
    });
    var UNSET = chevrotain.createToken({
        name: 'UNSET',
        pattern: /UNSET/i,
    });
    var SET = chevrotain.createToken({
        name: 'SET',
        pattern: /SET/i,
    });
    var DBPROPERTIES = chevrotain.createToken({
        name: 'DBPROPERTIES',
        pattern: /DBPROPERTIES/i,
    });
    var SERDEPROPERTIES = chevrotain.createToken({
        name: 'SERDEPROPERTIES',
        pattern: /SERDEPROPERTIES/i,
    });
    var DEFERRED = chevrotain.createToken({
        name: 'DEFERRED',
        pattern: /DEFERRED/i,
    });
    var WITH = chevrotain.createToken({
        name: 'WITH',
        pattern: /WITH/i,
    });
    var SERDE = chevrotain.createToken({
        name: 'SERDE',
        pattern: /SERDE/i,
    });
    var LOGICAL = chevrotain.createToken({
        name: 'LOGICAL',
        pattern: /LOGICAL/i,
    });
    var DEPENDENCY = chevrotain.createToken({
        name: 'DEPENDENCY',
        pattern: /DEPENDENCY/i,
    });
    var PRETTY = chevrotain.createToken({
        name: 'PRETTY',
        pattern: /PRETTY/i,
    });
    var FORMATTED = chevrotain.createToken({
        name: 'FORMATTED',
        pattern: /FORMATTED/i,
    });
    var EXTENDED = chevrotain.createToken({
        name: 'EXTENDED',
        pattern: /EXTENDED/i,
    });
    var END = chevrotain.createToken({
        name: 'END',
        pattern: /END/i,
    });
    var EXPLAIN = chevrotain.createToken({
        name: 'EXPLAIN',
        pattern: /EXPLAIN/i,
    });
    var MACRO = chevrotain.createToken({
        name: 'MACRO',
        pattern: /MACRO/i,
    });
    var TEMPORARY = chevrotain.createToken({
        name: 'TEMPORARY',
        pattern: /TEMPORARY/i,
    });
    var REGEXP = chevrotain.createToken({
        name: 'REGEXP',
        pattern: /REGEXP/i,
    });
    var RLIKE = chevrotain.createToken({
        name: 'RLIKE',
        pattern: /RLIKE/i,
    });
    var REPLACE = chevrotain.createToken({
        name: 'REPLACE',
        pattern: /REPLACE/i,
    });
    var ADD = chevrotain.createToken({
        name: 'ADD',
        pattern: /ADD/i,
    });
    var CAST = chevrotain.createToken({
        name: 'CAST',
        pattern: /CAST/i,
    });
    var PERCENT = chevrotain.createToken({
        name: 'PERCENT',
        pattern: /PERCENT/i,
    });
    var TABLESAMPLE = chevrotain.createToken({
        name: 'TABLESAMPLE',
        pattern: /TABLESAMPLE/i,
    });
    var LOCATION = chevrotain.createToken({
        name: 'LOCATION',
        pattern: /LOCATION/i,
    });
    var NO_DROP = chevrotain.createToken({
        name: 'NO_DROP',
        pattern: /NO_DROP/i,
    });
    var CharSetName = chevrotain.createToken({
        name: 'CharSetName',
        pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
    });
    var READONLY = chevrotain.createToken({
        name: 'READONLY',
        pattern: /READONLY/i,
    });
    var READ = chevrotain.createToken({
        name: 'READ',
        pattern: /READ/i,
    });
    var DISABLE = chevrotain.createToken({
        name: 'DISABLE',
        pattern: /DISABLE/i,
    });
    var ENABLE = chevrotain.createToken({
        name: 'ENABLE',
        pattern: /ENABLE/i,
    });
    var OFFLINE = chevrotain.createToken({
        name: 'OFFLINE',
        pattern: /OFFLINE/i,
    });
    var OF = chevrotain.createToken({
        name: 'OF',
        pattern: /OF/i,
    });
    var OUTPUTDRIVER = chevrotain.createToken({
        name: 'OUTPUTDRIVER',
        pattern: /OUTPUTDRIVER/i,
    });
    var INPUTDRIVER = chevrotain.createToken({
        name: 'INPUTDRIVER',
        pattern: /INPUTDRIVER/i,
    });
    var OUTPUTFORMAT = chevrotain.createToken({
        name: 'OUTPUTFORMAT',
        pattern: /OUTPUTFORMAT/i,
    });
    var INPUTFORMAT = chevrotain.createToken({
        name: 'INPUTFORMAT',
        pattern: /INPUTFORMAT/i,
    });
    var ORCFILE = chevrotain.createToken({
        name: 'ORCFILE',
        pattern: /ORC/i,
    });
    var RCFILE = chevrotain.createToken({
        name: 'RCFILE',
        pattern: /RCFILE/i,
    });
    var TEXTFILE = chevrotain.createToken({
        name: 'TEXTFILE',
        pattern: /TEXTFILE/i,
    });
    var SEQUENCEFILE = chevrotain.createToken({
        name: 'SEQUENCEFILE',
        pattern: /SEQUENCEFILE/i,
    });
    var FILEFORMAT = chevrotain.createToken({
        name: 'FILEFORMAT',
        pattern: /FILEFORMAT/i,
    });
    var STORED = chevrotain.createToken({
        name: 'STORED',
        pattern: /STORED/i,
    });
    var LINES = chevrotain.createToken({
        name: 'LINES',
        pattern: /LINES/i,
    });
    var KEY_TYPE = chevrotain.createToken({
        name: 'KEY_TYPE',
        pattern: /\$KEY\$/i,
    });
    var KEYS = chevrotain.createToken({
        name: 'KEYS',
        pattern: /KEYS/i,
    });
    var ITEMS = chevrotain.createToken({
        name: 'ITEMS',
        pattern: /ITEMS/i,
    });
    var COLLECTION = chevrotain.createToken({
        name: 'COLLECTION',
        pattern: /COLLECTION/i,
    });
    var ESCAPED = chevrotain.createToken({
        name: 'ESCAPED',
        pattern: /ESCAPED/i,
    });
    var TERMINATED = chevrotain.createToken({
        name: 'TERMINATED',
        pattern: /TERMINATED/i,
    });
    var FIELDS = chevrotain.createToken({
        name: 'FIELDS',
        pattern: /FIELDS/i,
    });
    var DELIMITED = chevrotain.createToken({
        name: 'DELIMITED',
        pattern: /DELIMITED/i,
    });
    var LIMIT = chevrotain.createToken({
        name: 'LIMIT',
        pattern: /LIMIT/i,
    });
    var FORMAT = chevrotain.createToken({
        name: 'FORMAT',
        pattern: /FORMAT/i,
    });
    var ROWS = chevrotain.createToken({
        name: 'ROWS',
        pattern: /ROWS/i,
    });
    var ROW = chevrotain.createToken({
        name: 'ROW',
        pattern: /ROW/i,
    });
    var BUCKETS = chevrotain.createToken({
        name: 'BUCKETS',
        pattern: /BUCKETS/i,
    });
    var BUCKET = chevrotain.createToken({
        name: 'BUCKET',
        pattern: /BUCKET/i,
    });
    var INTO = chevrotain.createToken({
        name: 'INTO',
        pattern: /INTO/i,
    });
    var SORTED = chevrotain.createToken({
        name: 'SORTED',
        pattern: /SORTED/i,
    });
    var CLUSTERED = chevrotain.createToken({
        name: 'CLUSTERED',
        pattern: /CLUSTERED/i,
    });
    var PARTITIONED = chevrotain.createToken({
        name: 'PARTITIONED',
        pattern: /PARTITIONED/i,
    });
    var REDUCE = chevrotain.createToken({
        name: 'REDUCE',
        pattern: /REDUCE/i,
    });
    var UNIONTYPE = chevrotain.createToken({
        name: 'UNIONTYPE',
        pattern: /UNIONTYPE/i,
    });
    var MAP = chevrotain.createToken({
        name: 'MAP',
        pattern: /MAP/i,
    });
    var STRUCT = chevrotain.createToken({
        name: 'STRUCT',
        pattern: /STRUCT/i,
    });
    var ARRAY = chevrotain.createToken({
        name: 'ARRAY',
        pattern: /ARRAY/i,
    });
    var STRING = chevrotain.createToken({
        name: 'STRING',
        pattern: /STRING/i,
    });
    var DECIMAL = chevrotain.createToken({
        name: 'DECIMAL',
        pattern: /DECIMAL/i,
    });
    var TIMESTAMP = chevrotain.createToken({
        name: 'TIMESTAMP',
        pattern: /TIMESTAMP/i,
    });
    var DATETIME = chevrotain.createToken({
        name: 'DATETIME',
        pattern: /DATETIME/i,
    });
    var DATE = chevrotain.createToken({
        name: 'DATE',
        pattern: /DATE/i,
    });
    var DOUBLE = chevrotain.createToken({
        name: 'DOUBLE',
        pattern: /DOUBLE/i,
    });
    var FLOAT = chevrotain.createToken({
        name: 'FLOAT',
        pattern: /FLOAT/i,
    });
    var BIGINT = chevrotain.createToken({
        name: 'BIGINT',
        pattern: /BIGINT/i,
    });
    var SMALLINT = chevrotain.createToken({
        name: 'SMALLINT',
        pattern: /SMALLINT/i,
    });
    var TINYINT = chevrotain.createToken({
        name: 'TINYINT',
        pattern: /TINYINT/i,
    });
    var INT = chevrotain.createToken({
        name: 'INT',
        pattern: /INT/i,
    });
    var BOOLEAN = chevrotain.createToken({
        name: 'BOOLEAN',
        pattern: /BOOLEAN/i,
    });
    var COMMENT = chevrotain.createToken({
        name: 'COMMENT',
        pattern: /KWCOMMENT/i,
    });
    var PROTECTION = chevrotain.createToken({
        name: 'PROTECTION',
        pattern: /PROTECTION/i,
    });
    var IGNORE = chevrotain.createToken({
        name: 'IGNORE',
        pattern: /IGNORE/i,
    });
    var RENAME = chevrotain.createToken({
        name: 'RENAME',
        pattern: /RENAME/i,
    });
    var DROP = chevrotain.createToken({
        name: 'DROP',
        pattern: /DROP/i,
    });
    var DESCRIBE = chevrotain.createToken({
        name: 'DESCRIBE',
        pattern: /DESCRIBE/i,
    });
    var AFTER = chevrotain.createToken({
        name: 'AFTER',
        pattern: /AFTER/i,
    });
    var FIRST = chevrotain.createToken({
        name: 'FIRST',
        pattern: /FIRST/i,
    });
    var CHANGE = chevrotain.createToken({
        name: 'CHANGE',
        pattern: /CHANGE/i,
    });
    var ALTER = chevrotain.createToken({
        name: 'ALTER',
        pattern: /ALTER/i,
    });
    var EXTERNAL = chevrotain.createToken({
        name: 'EXTERNAL',
        pattern: /EXTERNAL/i,
    });
    var CREATE = chevrotain.createToken({
        name: 'CREATE',
        pattern: /CREATE/i,
    });
    var NULL = chevrotain.createToken({
        name: 'NULL',
        pattern: /NULL/i,
    });
    var INPATH = chevrotain.createToken({
        name: 'INPATH',
        pattern: /INPATH/i,
    });
    var DATA = chevrotain.createToken({
        name: 'DATA',
        pattern: /DATA/i,
    });
    var IMPORT = chevrotain.createToken({
        name: 'IMPORT',
        pattern: /IMPORT/i,
    });
    var EXPORT = chevrotain.createToken({
        name: 'EXPORT',
        pattern: /EXPORT/i,
    });
    var LOAD = chevrotain.createToken({
        name: 'LOAD',
        pattern: /LOAD/i,
    });
    var UNION = chevrotain.createToken({
        name: 'UNION',
        pattern: /UNION/i,
    });
    var SORT = chevrotain.createToken({
        name: 'SORT',
        pattern: /SORT/i,
    });
    var DISTRIBUTE = chevrotain.createToken({
        name: 'DISTRIBUTE',
        pattern: /DISTRIBUTE/i,
    });
    var CLUSTER = chevrotain.createToken({
        name: 'CLUSTER',
        pattern: /CLUSTER/i,
    });
    var USING = chevrotain.createToken({
        name: 'USING',
        pattern: /USING/i,
    });
    var TRANSFORM = chevrotain.createToken({
        name: 'TRANSFORM',
        pattern: /TRANSFORM/i,
    });
    var FOR = chevrotain.createToken({
        name: 'FOR',
        pattern: /FOR/i,
    });
    var LOCAL = chevrotain.createToken({
        name: 'LOCAL',
        pattern: /LOCAL/i,
    });
    var DIRECTORY = chevrotain.createToken({
        name: 'DIRECTORY',
        pattern: /DIRECTORY/i,
    });
    var TO = chevrotain.createToken({
        name: 'TO',
        pattern: /TO/i,
    });
    var REPAIR = chevrotain.createToken({
        name: 'REPAIR',
        pattern: /REPAIR/i,
    });
    var MSCK = chevrotain.createToken({
        name: 'MSCK',
        pattern: /MSCK/i,
    });
    var SHOW = chevrotain.createToken({
        name: 'SHOW',
        pattern: /SHOW/i,
    });
    var FUNCTIONS = chevrotain.createToken({
        name: 'FUNCTIONS',
        pattern: /FUNCTIONS/i,
    });
    var FUNCTION = chevrotain.createToken({
        name: 'FUNCTION',
        pattern: /FUNCTION/i,
    });
    var REBUILD = chevrotain.createToken({
        name: 'REBUILD',
        pattern: /REBUILD/i,
    });
    var INDEXES = chevrotain.createToken({
        name: 'INDEXES',
        pattern: /INDEXES/i,
    });
    var INDEX = chevrotain.createToken({
        name: 'INDEX',
        pattern: /INDEX/i,
    });
    var COLUMNS = chevrotain.createToken({
        name: 'COLUMNS',
        pattern: /COLUMNS/i,
    });
    var COLUMN = chevrotain.createToken({
        name: 'COLUMN',
        pattern: /COLUMN/i,
    });
    var TABLES = chevrotain.createToken({
        name: 'TABLES',
        pattern: /TABLES/i,
    });
    var TABLE = chevrotain.createToken({
        name: 'TABLE',
        pattern: /TABLE/i,
    });
    var PARTITIONS = chevrotain.createToken({
        name: 'PARTITIONS',
        pattern: /PARTITIONS/i,
    });
    var PARTITION = chevrotain.createToken({
        name: 'PARTITION',
        pattern: /PARTITION/i,
    });
    var ON = chevrotain.createToken({
        name: 'ON',
        pattern: /ON/i,
    });
    var FULL = chevrotain.createToken({
        name: 'FULL',
        pattern: /FULL/i,
    });
    var RIGHT = chevrotain.createToken({
        name: 'RIGHT',
        pattern: /RIGHT/i,
    });
    var LEFT = chevrotain.createToken({
        name: 'LEFT',
        pattern: /LEFT/i,
    });
    var PRESERVE = chevrotain.createToken({
        name: 'PRESERVE',
        pattern: /PRESERVE/i,
    });
    var UNIQUEJOIN = chevrotain.createToken({
        name: 'UNIQUEJOIN',
        pattern: /UNIQUEJOIN/i,
    });
    var OUTER = chevrotain.createToken({
        name: 'OUTER',
        pattern: /OUTER/i,
    });
    var OUT = chevrotain.createToken({
        name: 'OUT',
        pattern: /OUT/i,
    });
    var OVERWRITE = chevrotain.createToken({
        name: 'OVERWRITE',
        pattern: /OVERWRITE/i,
    });
    var OVER = chevrotain.createToken({
        name: 'OVER',
        pattern: /OVER/i,
    });
    var INSERT = chevrotain.createToken({
        name: 'INSERT',
        pattern: /INSERT/i,
    });
    var DISTINCT = chevrotain.createToken({
        name: 'DISTINCT',
        pattern: /DISTINCT/i,
    });
    var SELECT = chevrotain.createToken({
        name: 'SELECT',
        pattern: /SELECT/i,
    });
    var FROM = chevrotain.createToken({
        name: 'FROM',
        pattern: /FROM/i,
    });
    var WHERE = chevrotain.createToken({
        name: 'WHERE',
        pattern: /WHERE/i,
    });
    var HAVING = chevrotain.createToken({
        name: 'HAVING',
        pattern: /HAVING/i,
    });
    var BY = chevrotain.createToken({
        name: 'BY',
        pattern: /BY/i,
    });
    var GROUP = chevrotain.createToken({
        name: 'GROUP',
        pattern: /GROUP/i,
    });
    var ORDER = chevrotain.createToken({
        name: 'ORDER',
        pattern: /ORDER/i,
    });
    var DESC = chevrotain.createToken({
        name: 'DESC',
        pattern: /DESC/i,
    });
    var ASC = chevrotain.createToken({
        name: 'ASC',
        pattern: /ASC/i,
    });
    var AS = chevrotain.createToken({
        name: 'AS',
        pattern: /AS/i,
    });
    var EXISTS = chevrotain.createToken({
        name: 'EXISTS',
        pattern: /EXISTS/i,
    });
    var IS = chevrotain.createToken({
        name: 'IS',
        pattern: /IS/i,
    });
    var IF = chevrotain.createToken({
        name: 'IF',
        pattern: /IF/i,
    });
    var JOIN = chevrotain.createToken({
        name: 'JOIN',
        pattern: /JOIN/i,
    });
    var IN = chevrotain.createToken({
        name: 'IN',
        pattern: /IN/i,
    });
    var LIKE = chevrotain.createToken({
        name: 'LIKE',
        pattern: /LIKE/i,
    });
    var NOT = chevrotain.createToken({
        name: 'NOT',
        pattern: /(NOT|\!)/i,
    });
    var OR = chevrotain.createToken({
        name: 'OR',
        pattern: /OR/i,
    });
    var AND = chevrotain.createToken({
        name: 'AND',
        pattern: /AND/i,
    });
    var ALL = chevrotain.createToken({
        name: 'ALL',
        pattern: /ALL/i,
    });
    var FALSE = chevrotain.createToken({
        name: 'FALSE',
        pattern: /FALSE/i,
    });
    var TRUE = chevrotain.createToken({
        name: 'TRUE',
        pattern: /TRUE/i,
    });
    var Identifier = chevrotain.createToken({
        name: 'Identifier',
        pattern: /(([A-Za-z]|[0-9])([A-Za-z]|[0-9]|_)*|\`([A-Za-z0-9_]|\+|\*|\?|\-|\.|\(|\)|\[|\]|\{|\}|\^|\||\$)+\`)/i,
    });
    var TokenEnum;
    (function (TokenEnum) {
        TokenEnum["WS"] = "WS";
        TokenEnum["Number"] = "Number";
        TokenEnum["ByteLengthLiteral"] = "ByteLengthLiteral";
        TokenEnum["DecimalLiteral"] = "DecimalLiteral";
        TokenEnum["TinyintLiteral"] = "TinyintLiteral";
        TokenEnum["SmallintLiteral"] = "SmallintLiteral";
        TokenEnum["BigintLiteral"] = "BigintLiteral";
        TokenEnum["CharSetLiteral"] = "CharSetLiteral";
        TokenEnum["StringLiteral"] = "StringLiteral";
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
        TokenEnum["SEQUENCEFILE"] = "SEQUENCEFILE";
        TokenEnum["FILEFORMAT"] = "FILEFORMAT";
        TokenEnum["STORED"] = "STORED";
        TokenEnum["LINES"] = "LINES";
        TokenEnum["KEY_TYPE"] = "KEY_TYPE";
        TokenEnum["KEYS"] = "KEYS";
        TokenEnum["ITEMS"] = "ITEMS";
        TokenEnum["COLLECTION"] = "COLLECTION";
        TokenEnum["ESCAPED"] = "ESCAPED";
        TokenEnum["TERMINATED"] = "TERMINATED";
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
        TokenEnum["DATE"] = "DATE";
        TokenEnum["DOUBLE"] = "DOUBLE";
        TokenEnum["FLOAT"] = "FLOAT";
        TokenEnum["BIGINT"] = "BIGINT";
        TokenEnum["SMALLINT"] = "SMALLINT";
        TokenEnum["TINYINT"] = "TINYINT";
        TokenEnum["INT"] = "INT";
        TokenEnum["BOOLEAN"] = "BOOLEAN";
        TokenEnum["COMMENT"] = "COMMENT";
        TokenEnum["PROTECTION"] = "PROTECTION";
        TokenEnum["IGNORE"] = "IGNORE";
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
        TokenEnum["Identifier"] = "Identifier";
    })(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
    exports.Tokens = {
        WS: WS,
        Number: Number,
        ByteLengthLiteral: ByteLengthLiteral,
        DecimalLiteral: DecimalLiteral,
        TinyintLiteral: TinyintLiteral,
        SmallintLiteral: SmallintLiteral,
        BigintLiteral: BigintLiteral,
        CharSetLiteral: CharSetLiteral,
        StringLiteral: StringLiteral,
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
        SEQUENCEFILE: SEQUENCEFILE,
        FILEFORMAT: FILEFORMAT,
        STORED: STORED,
        LINES: LINES,
        KEY_TYPE: KEY_TYPE,
        KEYS: KEYS,
        ITEMS: ITEMS,
        COLLECTION: COLLECTION,
        ESCAPED: ESCAPED,
        TERMINATED: TERMINATED,
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
        DATE: DATE,
        DOUBLE: DOUBLE,
        FLOAT: FLOAT,
        BIGINT: BIGINT,
        SMALLINT: SMALLINT,
        TINYINT: TINYINT,
        INT: INT,
        BOOLEAN: BOOLEAN,
        COMMENT: COMMENT,
        PROTECTION: PROTECTION,
        IGNORE: IGNORE,
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
        Identifier: Identifier,
    };
    exports.tokens = [
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
    exports.Lexer = new chevrotain.Lexer(exports.tokens, {
        positionTracking: 'onlyStart',
    });
});
//# sourceMappingURL=lexer.g.js.map