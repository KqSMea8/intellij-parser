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
    var Identifier = chevrotain.createToken({
        name: 'Identifier',
        pattern: /[A-Za-z_$0-9*]+/i,
    });
    var WS = chevrotain.createToken({
        name: 'WS',
        pattern: /(\ |\r|\t|\n)/i,
        longer_alt: Identifier,
    });
    var Number = chevrotain.createToken({
        name: 'Number',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?/i,
        longer_alt: Identifier,
    });
    var ByteLengthLiteral = chevrotain.createToken({
        name: 'ByteLengthLiteral',
        pattern: /([0-9])+(b|B|k|K|m|M|g|G)/i,
        longer_alt: Identifier,
    });
    var DecimalLiteral = chevrotain.createToken({
        name: 'DecimalLiteral',
        pattern: /([0-9])+(\.([0-9])*((e|E)(\+|\-)?([0-9])+)?|(e|E)(\+|\-)?([0-9])+)?BD/i,
        longer_alt: Identifier,
    });
    var TinyintLiteral = chevrotain.createToken({
        name: 'TinyintLiteral',
        pattern: /([0-9])+Y/i,
        longer_alt: Identifier,
    });
    var SmallintLiteral = chevrotain.createToken({
        name: 'SmallintLiteral',
        pattern: /([0-9])+S/i,
        longer_alt: Identifier,
    });
    var BigintLiteral = chevrotain.createToken({
        name: 'BigintLiteral',
        pattern: /([0-9])+L/i,
        longer_alt: Identifier,
    });
    var CharSetLiteral = chevrotain.createToken({
        name: 'CharSetLiteral',
        pattern: /((\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+|0X([A-Fa-f]|[0-9])+)/i,
        longer_alt: Identifier,
    });
    var StringLiteral = chevrotain.createToken({
        name: 'StringLiteral',
        pattern: /(\'([^(\'|\\)]|(\\))*\'|\"([^(\"|\\)]|(\\))*\")+/i,
        longer_alt: Identifier,
    });
    var DOLLAR = chevrotain.createToken({
        name: 'DOLLAR',
        pattern: /\$/i,
        longer_alt: Identifier,
    });
    var QUESTION = chevrotain.createToken({
        name: 'QUESTION',
        pattern: /\?/i,
        longer_alt: Identifier,
    });
    var BITWISEXOR = chevrotain.createToken({
        name: 'BITWISEXOR',
        pattern: /\^/i,
        longer_alt: Identifier,
    });
    var BITWISEOR = chevrotain.createToken({
        name: 'BITWISEOR',
        pattern: /\|/i,
        longer_alt: Identifier,
    });
    var TILDE = chevrotain.createToken({
        name: 'TILDE',
        pattern: /\~/i,
        longer_alt: Identifier,
    });
    var AMPERSAND = chevrotain.createToken({
        name: 'AMPERSAND',
        pattern: /\&/i,
        longer_alt: Identifier,
    });
    var DIV = chevrotain.createToken({
        name: 'DIV',
        pattern: /DIV/i,
        longer_alt: Identifier,
    });
    var MOD = chevrotain.createToken({
        name: 'MOD',
        pattern: /\%/i,
        longer_alt: Identifier,
    });
    var STAR = chevrotain.createToken({
        name: 'STAR',
        pattern: /\*/i,
        longer_alt: Identifier,
    });
    var MINUS = chevrotain.createToken({
        name: 'MINUS',
        pattern: /\-/i,
        longer_alt: Identifier,
    });
    var PLUS = chevrotain.createToken({
        name: 'PLUS',
        pattern: /\+/i,
        longer_alt: Identifier,
    });
    var DIVIDE = chevrotain.createToken({
        name: 'DIVIDE',
        pattern: /\//i,
        longer_alt: Identifier,
    });
    var GREATERTHAN = chevrotain.createToken({
        name: 'GREATERTHAN',
        pattern: /\>/i,
        longer_alt: Identifier,
    });
    var GREATERTHANOREQUALTO = chevrotain.createToken({
        name: 'GREATERTHANOREQUALTO',
        pattern: /\>\=/i,
        longer_alt: Identifier,
    });
    var LESSTHAN = chevrotain.createToken({
        name: 'LESSTHAN',
        pattern: /\</i,
        longer_alt: Identifier,
    });
    var LESSTHANOREQUALTO = chevrotain.createToken({
        name: 'LESSTHANOREQUALTO',
        pattern: /\<\=/i,
        longer_alt: Identifier,
    });
    var NOTEQUAL = chevrotain.createToken({
        name: 'NOTEQUAL',
        pattern: /(\<\>|\!\=)/i,
        longer_alt: Identifier,
    });
    var EQUAL_NS = chevrotain.createToken({
        name: 'EQUAL_NS',
        pattern: /\<\=\>/i,
        longer_alt: Identifier,
    });
    var EQUAL = chevrotain.createToken({
        name: 'EQUAL',
        pattern: /(\=|\=\=)/i,
        longer_alt: Identifier,
    });
    var RCURLY = chevrotain.createToken({
        name: 'RCURLY',
        pattern: /\}/i,
        longer_alt: Identifier,
    });
    var LCURLY = chevrotain.createToken({
        name: 'LCURLY',
        pattern: /\{/i,
        longer_alt: Identifier,
    });
    var RSQUARE = chevrotain.createToken({
        name: 'RSQUARE',
        pattern: /\]/i,
        longer_alt: Identifier,
    });
    var LSQUARE = chevrotain.createToken({
        name: 'LSQUARE',
        pattern: /\[/i,
        longer_alt: Identifier,
    });
    var RPAREN = chevrotain.createToken({
        name: 'RPAREN',
        pattern: /\)/i,
        longer_alt: Identifier,
    });
    var LPAREN = chevrotain.createToken({
        name: 'LPAREN',
        pattern: /\(/i,
        longer_alt: Identifier,
    });
    var SEMICOLON = chevrotain.createToken({
        name: 'SEMICOLON',
        pattern: /\;/i,
        longer_alt: Identifier,
    });
    var COMMA = chevrotain.createToken({
        name: 'COMMA',
        pattern: /\,/i,
        longer_alt: Identifier,
    });
    var COLON = chevrotain.createToken({
        name: 'COLON',
        pattern: /\:/i,
        longer_alt: Identifier,
    });
    var DOT = chevrotain.createToken({
        name: 'DOT',
        pattern: /\./i,
        longer_alt: Identifier,
    });
    var VALUES = chevrotain.createToken({
        name: 'VALUES',
        pattern: /VALUES/i,
        longer_alt: Identifier,
    });
    var VALUE = chevrotain.createToken({
        name: 'VALUE',
        pattern: /VALUE/i,
        longer_alt: Identifier,
    });
    var EXCHANGE = chevrotain.createToken({
        name: 'EXCHANGE',
        pattern: /EXCHANGE/i,
        longer_alt: Identifier,
    });
    var INNER = chevrotain.createToken({
        name: 'INNER',
        pattern: /INNER/i,
        longer_alt: Identifier,
    });
    var ROLE = chevrotain.createToken({
        name: 'ROLE',
        pattern: /ROLE/i,
        longer_alt: Identifier,
    });
    var USER = chevrotain.createToken({
        name: 'USER',
        pattern: /USER/i,
        longer_alt: Identifier,
    });
    var PARTIALSCAN = chevrotain.createToken({
        name: 'PARTIALSCAN',
        pattern: /PARTIALSCAN/i,
        longer_alt: Identifier,
    });
    var NOSCAN = chevrotain.createToken({
        name: 'NOSCAN',
        pattern: /NOSCAN/i,
        longer_alt: Identifier,
    });
    var TRUNCATE = chevrotain.createToken({
        name: 'TRUNCATE',
        pattern: /TRUNCATE/i,
        longer_alt: Identifier,
    });
    var SETS = chevrotain.createToken({
        name: 'SETS',
        pattern: /SETS/i,
        longer_alt: Identifier,
    });
    var GROUPING = chevrotain.createToken({
        name: 'GROUPING',
        pattern: /GROUPING/i,
        longer_alt: Identifier,
    });
    var MORE = chevrotain.createToken({
        name: 'MORE',
        pattern: /MORE/i,
        longer_alt: Identifier,
    });
    var LESS = chevrotain.createToken({
        name: 'LESS',
        pattern: /LESS/i,
        longer_alt: Identifier,
    });
    var CURRENT = chevrotain.createToken({
        name: 'CURRENT',
        pattern: /CURRENT/i,
        longer_alt: Identifier,
    });
    var FOLLOWING = chevrotain.createToken({
        name: 'FOLLOWING',
        pattern: /FOLLOWING/i,
        longer_alt: Identifier,
    });
    var PRECEDING = chevrotain.createToken({
        name: 'PRECEDING',
        pattern: /PRECEDING/i,
        longer_alt: Identifier,
    });
    var UNBOUNDED = chevrotain.createToken({
        name: 'UNBOUNDED',
        pattern: /UNBOUNDED/i,
        longer_alt: Identifier,
    });
    var WINDOW = chevrotain.createToken({
        name: 'WINDOW',
        pattern: /WINDOW/i,
        longer_alt: Identifier,
    });
    var DIRECTORIES = chevrotain.createToken({
        name: 'DIRECTORIES',
        pattern: /DIRECTORIES/i,
        longer_alt: Identifier,
    });
    var CUBE = chevrotain.createToken({
        name: 'CUBE',
        pattern: /CUBE/i,
        longer_alt: Identifier,
    });
    var ROLLUP = chevrotain.createToken({
        name: 'ROLLUP',
        pattern: /ROLLUP/i,
        longer_alt: Identifier,
    });
    var SKEWED = chevrotain.createToken({
        name: 'SKEWED',
        pattern: /SKEWED/i,
        longer_alt: Identifier,
    });
    var CASCADE = chevrotain.createToken({
        name: 'CASCADE',
        pattern: /CASCADE/i,
        longer_alt: Identifier,
    });
    var RESTRICT = chevrotain.createToken({
        name: 'RESTRICT',
        pattern: /RESTRICT/i,
        longer_alt: Identifier,
    });
    var UPDATE = chevrotain.createToken({
        name: 'UPDATE',
        pattern: /UPDATE/i,
        longer_alt: Identifier,
    });
    var SHOW_DATABASE = chevrotain.createToken({
        name: 'SHOW_DATABASE',
        pattern: /SHOW_DATABASE/i,
        longer_alt: Identifier,
    });
    var CONCATENATE = chevrotain.createToken({
        name: 'CONCATENATE',
        pattern: /CONCATENATE/i,
        longer_alt: Identifier,
    });
    var OPTION = chevrotain.createToken({
        name: 'OPTION',
        pattern: /OPTION/i,
        longer_alt: Identifier,
    });
    var USE = chevrotain.createToken({
        name: 'USE',
        pattern: /USE/i,
        longer_alt: Identifier,
    });
    var STATISTICS = chevrotain.createToken({
        name: 'STATISTICS',
        pattern: /STATISTICS/i,
        longer_alt: Identifier,
    });
    var COMPUTE = chevrotain.createToken({
        name: 'COMPUTE',
        pattern: /COMPUTE/i,
        longer_alt: Identifier,
    });
    var UNARCHIVE = chevrotain.createToken({
        name: 'UNARCHIVE',
        pattern: /UNARCHIVE/i,
        longer_alt: Identifier,
    });
    var ARCHIVE = chevrotain.createToken({
        name: 'ARCHIVE',
        pattern: /ARCHIVE/i,
        longer_alt: Identifier,
    });
    var TOUCH = chevrotain.createToken({
        name: 'TOUCH',
        pattern: /TOUCH/i,
        longer_alt: Identifier,
    });
    var LATERAL = chevrotain.createToken({
        name: 'LATERAL',
        pattern: /LATERAL/i,
        longer_alt: Identifier,
    });
    var SEMI = chevrotain.createToken({
        name: 'SEMI',
        pattern: /SEMI/i,
        longer_alt: Identifier,
    });
    var RECORDWRITER = chevrotain.createToken({
        name: 'RECORDWRITER',
        pattern: /RECORDWRITER/i,
        longer_alt: Identifier,
    });
    var RECORDREADER = chevrotain.createToken({
        name: 'RECORDREADER',
        pattern: /RECORDREADER/i,
        longer_alt: Identifier,
    });
    var TRIGGER = chevrotain.createToken({
        name: 'TRIGGER',
        pattern: /TRIGGER/i,
        longer_alt: Identifier,
    });
    var CURSOR = chevrotain.createToken({
        name: 'CURSOR',
        pattern: /CURSOR/i,
        longer_alt: Identifier,
    });
    var CONTINUE = chevrotain.createToken({
        name: 'CONTINUE',
        pattern: /CONTINUE/i,
        longer_alt: Identifier,
    });
    var CROSS = chevrotain.createToken({
        name: 'CROSS',
        pattern: /CROSS/i,
        longer_alt: Identifier,
    });
    var BINARY = chevrotain.createToken({
        name: 'BINARY',
        pattern: /BINARY/i,
        longer_alt: Identifier,
    });
    var BOTH = chevrotain.createToken({
        name: 'BOTH',
        pattern: /BOTH/i,
        longer_alt: Identifier,
    });
    var BETWEEN = chevrotain.createToken({
        name: 'BETWEEN',
        pattern: /BETWEEN/i,
        longer_alt: Identifier,
    });
    var BEFORE = chevrotain.createToken({
        name: 'BEFORE',
        pattern: /BEFORE/i,
        longer_alt: Identifier,
    });
    var ANALYZE = chevrotain.createToken({
        name: 'ANALYZE',
        pattern: /ANALYZE/i,
        longer_alt: Identifier,
    });
    var RANGE = chevrotain.createToken({
        name: 'RANGE',
        pattern: /RANGE/i,
        longer_alt: Identifier,
    });
    var PURGE = chevrotain.createToken({
        name: 'PURGE',
        pattern: /PURGE/i,
        longer_alt: Identifier,
    });
    var READS = chevrotain.createToken({
        name: 'READS',
        pattern: /READS/i,
        longer_alt: Identifier,
    });
    var WHILE = chevrotain.createToken({
        name: 'WHILE',
        pattern: /WHILE/i,
        longer_alt: Identifier,
    });
    var UNSIGNED = chevrotain.createToken({
        name: 'UNSIGNED',
        pattern: /UNSIGNED/i,
        longer_alt: Identifier,
    });
    var PROCEDURE = chevrotain.createToken({
        name: 'PROCEDURE',
        pattern: /PROCEDURE/i,
        longer_alt: Identifier,
    });
    var EXCLUSIVE = chevrotain.createToken({
        name: 'EXCLUSIVE',
        pattern: /EXCLUSIVE/i,
        longer_alt: Identifier,
    });
    var SHARED = chevrotain.createToken({
        name: 'SHARED',
        pattern: /SHARED/i,
        longer_alt: Identifier,
    });
    var UNLOCK = chevrotain.createToken({
        name: 'UNLOCK',
        pattern: /UNLOCK/i,
        longer_alt: Identifier,
    });
    var LOCKS = chevrotain.createToken({
        name: 'LOCKS',
        pattern: /LOCKS/i,
        longer_alt: Identifier,
    });
    var LOCK = chevrotain.createToken({
        name: 'LOCK',
        pattern: /LOCK/i,
        longer_alt: Identifier,
    });
    var UNDO = chevrotain.createToken({
        name: 'UNDO',
        pattern: /UNDO/i,
        longer_alt: Identifier,
    });
    var SSL = chevrotain.createToken({
        name: 'SSL',
        pattern: /SSL/i,
        longer_alt: Identifier,
    });
    var REVOKE = chevrotain.createToken({
        name: 'REVOKE',
        pattern: /REVOKE/i,
        longer_alt: Identifier,
    });
    var GRANT = chevrotain.createToken({
        name: 'GRANT',
        pattern: /GRANT/i,
        longer_alt: Identifier,
    });
    var SCHEMAS = chevrotain.createToken({
        name: 'SCHEMAS',
        pattern: /SCHEMAS/i,
        longer_alt: Identifier,
    });
    var SCHEMA = chevrotain.createToken({
        name: 'SCHEMA',
        pattern: /SCHEMA/i,
        longer_alt: Identifier,
    });
    var MATERIALIZED = chevrotain.createToken({
        name: 'MATERIALIZED',
        pattern: /MATERIALIZED/i,
        longer_alt: Identifier,
    });
    var DATABASES = chevrotain.createToken({
        name: 'DATABASES',
        pattern: /DATABASES/i,
        longer_alt: Identifier,
    });
    var DATABASE = chevrotain.createToken({
        name: 'DATABASE',
        pattern: /DATABASE/i,
        longer_alt: Identifier,
    });
    var VIEW = chevrotain.createToken({
        name: 'VIEW',
        pattern: /VIEW/i,
        longer_alt: Identifier,
    });
    var INTERSECT = chevrotain.createToken({
        name: 'INTERSECT',
        pattern: /INTERSECT/i,
        longer_alt: Identifier,
    });
    var FETCH = chevrotain.createToken({
        name: 'FETCH',
        pattern: /FETCH/i,
        longer_alt: Identifier,
    });
    var KWMINUS = chevrotain.createToken({
        name: 'KWMINUS',
        pattern: /KWMINUS/i,
        longer_alt: Identifier,
    });
    var KWPLUS = chevrotain.createToken({
        name: 'KWPLUS',
        pattern: /KWPLUS/i,
        longer_alt: Identifier,
    });
    var DELETE = chevrotain.createToken({
        name: 'DELETE',
        pattern: /DELETE/i,
        longer_alt: Identifier,
    });
    var LONG = chevrotain.createToken({
        name: 'LONG',
        pattern: /LONG/i,
        longer_alt: Identifier,
    });
    var UTCTIMESTAMP = chevrotain.createToken({
        name: 'UTCTIMESTAMP',
        pattern: /UTC_TMESTAMP/i,
        longer_alt: Identifier,
    });
    var UTC = chevrotain.createToken({
        name: 'UTC',
        pattern: /UTC/i,
        longer_alt: Identifier,
    });
    var CLUSTERSTATUS = chevrotain.createToken({
        name: 'CLUSTERSTATUS',
        pattern: /CLUSTERSTATUS/i,
        longer_alt: Identifier,
    });
    var HOLD_DDLTIME = chevrotain.createToken({
        name: 'HOLD_DDLTIME',
        pattern: /HOLD_DDLTIME/i,
        longer_alt: Identifier,
    });
    var STREAMTABLE = chevrotain.createToken({
        name: 'STREAMTABLE',
        pattern: /STREAMTABLE/i,
        longer_alt: Identifier,
    });
    var MAPJOIN = chevrotain.createToken({
        name: 'MAPJOIN',
        pattern: /MAPJOIN/i,
        longer_alt: Identifier,
    });
    var ELSE = chevrotain.createToken({
        name: 'ELSE',
        pattern: /ELSE/i,
        longer_alt: Identifier,
    });
    var THEN = chevrotain.createToken({
        name: 'THEN',
        pattern: /THEN/i,
        longer_alt: Identifier,
    });
    var WHEN = chevrotain.createToken({
        name: 'WHEN',
        pattern: /WHEN/i,
        longer_alt: Identifier,
    });
    var CASE = chevrotain.createToken({
        name: 'CASE',
        pattern: /CASE/i,
        longer_alt: Identifier,
    });
    var ELEM_TYPE = chevrotain.createToken({
        name: 'ELEM_TYPE',
        pattern: /\$ELEM\$/i,
        longer_alt: Identifier,
    });
    var VALUE_TYPE = chevrotain.createToken({
        name: 'VALUE_TYPE',
        pattern: /\$VALUE\$/i,
        longer_alt: Identifier,
    });
    var IDXPROPERTIES = chevrotain.createToken({
        name: 'IDXPROPERTIES',
        pattern: /IDXPROPERTIES/i,
        longer_alt: Identifier,
    });
    var TBLPROPERTIES = chevrotain.createToken({
        name: 'TBLPROPERTIES',
        pattern: /TBLPROPERTIES/i,
        longer_alt: Identifier,
    });
    var UNSET = chevrotain.createToken({
        name: 'UNSET',
        pattern: /UNSET/i,
        longer_alt: Identifier,
    });
    var SET = chevrotain.createToken({
        name: 'SET',
        pattern: /SET/i,
        longer_alt: Identifier,
    });
    var DBPROPERTIES = chevrotain.createToken({
        name: 'DBPROPERTIES',
        pattern: /DBPROPERTIES/i,
        longer_alt: Identifier,
    });
    var SERDEPROPERTIES = chevrotain.createToken({
        name: 'SERDEPROPERTIES',
        pattern: /SERDEPROPERTIES/i,
        longer_alt: Identifier,
    });
    var DEFERRED = chevrotain.createToken({
        name: 'DEFERRED',
        pattern: /DEFERRED/i,
        longer_alt: Identifier,
    });
    var WITH = chevrotain.createToken({
        name: 'WITH',
        pattern: /WITH/i,
        longer_alt: Identifier,
    });
    var SERDE = chevrotain.createToken({
        name: 'SERDE',
        pattern: /SERDE/i,
        longer_alt: Identifier,
    });
    var LOGICAL = chevrotain.createToken({
        name: 'LOGICAL',
        pattern: /LOGICAL/i,
        longer_alt: Identifier,
    });
    var DEPENDENCY = chevrotain.createToken({
        name: 'DEPENDENCY',
        pattern: /DEPENDENCY/i,
        longer_alt: Identifier,
    });
    var PRETTY = chevrotain.createToken({
        name: 'PRETTY',
        pattern: /PRETTY/i,
        longer_alt: Identifier,
    });
    var FORMATTED = chevrotain.createToken({
        name: 'FORMATTED',
        pattern: /FORMATTED/i,
        longer_alt: Identifier,
    });
    var EXTENDED = chevrotain.createToken({
        name: 'EXTENDED',
        pattern: /EXTENDED/i,
        longer_alt: Identifier,
    });
    var END = chevrotain.createToken({
        name: 'END',
        pattern: /END/i,
        longer_alt: Identifier,
    });
    var EXPLAIN = chevrotain.createToken({
        name: 'EXPLAIN',
        pattern: /EXPLAIN/i,
        longer_alt: Identifier,
    });
    var MACRO = chevrotain.createToken({
        name: 'MACRO',
        pattern: /MACRO/i,
        longer_alt: Identifier,
    });
    var TEMPORARY = chevrotain.createToken({
        name: 'TEMPORARY',
        pattern: /TEMPORARY/i,
        longer_alt: Identifier,
    });
    var REGEXP = chevrotain.createToken({
        name: 'REGEXP',
        pattern: /REGEXP/i,
        longer_alt: Identifier,
    });
    var RLIKE = chevrotain.createToken({
        name: 'RLIKE',
        pattern: /RLIKE/i,
        longer_alt: Identifier,
    });
    var REPLACE = chevrotain.createToken({
        name: 'REPLACE',
        pattern: /REPLACE/i,
        longer_alt: Identifier,
    });
    var ADD = chevrotain.createToken({
        name: 'ADD',
        pattern: /ADD/i,
        longer_alt: Identifier,
    });
    var CAST = chevrotain.createToken({
        name: 'CAST',
        pattern: /CAST/i,
        longer_alt: Identifier,
    });
    var PERCENT = chevrotain.createToken({
        name: 'PERCENT',
        pattern: /PERCENT/i,
        longer_alt: Identifier,
    });
    var TABLESAMPLE = chevrotain.createToken({
        name: 'TABLESAMPLE',
        pattern: /TABLESAMPLE/i,
        longer_alt: Identifier,
    });
    var LOCATION = chevrotain.createToken({
        name: 'LOCATION',
        pattern: /LOCATION/i,
        longer_alt: Identifier,
    });
    var NO_DROP = chevrotain.createToken({
        name: 'NO_DROP',
        pattern: /NO_DROP/i,
        longer_alt: Identifier,
    });
    var CharSetName = chevrotain.createToken({
        name: 'CharSetName',
        pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
        longer_alt: Identifier,
    });
    var READONLY = chevrotain.createToken({
        name: 'READONLY',
        pattern: /READONLY/i,
        longer_alt: Identifier,
    });
    var READ = chevrotain.createToken({
        name: 'READ',
        pattern: /READ/i,
        longer_alt: Identifier,
    });
    var DISABLE = chevrotain.createToken({
        name: 'DISABLE',
        pattern: /DISABLE/i,
        longer_alt: Identifier,
    });
    var ENABLE = chevrotain.createToken({
        name: 'ENABLE',
        pattern: /ENABLE/i,
        longer_alt: Identifier,
    });
    var OFFLINE = chevrotain.createToken({
        name: 'OFFLINE',
        pattern: /OFFLINE/i,
        longer_alt: Identifier,
    });
    var OF = chevrotain.createToken({
        name: 'OF',
        pattern: /OF/i,
        longer_alt: Identifier,
    });
    var OUTPUTDRIVER = chevrotain.createToken({
        name: 'OUTPUTDRIVER',
        pattern: /OUTPUTDRIVER/i,
        longer_alt: Identifier,
    });
    var INPUTDRIVER = chevrotain.createToken({
        name: 'INPUTDRIVER',
        pattern: /INPUTDRIVER/i,
        longer_alt: Identifier,
    });
    var OUTPUTFORMAT = chevrotain.createToken({
        name: 'OUTPUTFORMAT',
        pattern: /OUTPUTFORMAT/i,
        longer_alt: Identifier,
    });
    var INPUTFORMAT = chevrotain.createToken({
        name: 'INPUTFORMAT',
        pattern: /INPUTFORMAT/i,
        longer_alt: Identifier,
    });
    var ORCFILE = chevrotain.createToken({
        name: 'ORCFILE',
        pattern: /ORC/i,
        longer_alt: Identifier,
    });
    var RCFILE = chevrotain.createToken({
        name: 'RCFILE',
        pattern: /RCFILE/i,
        longer_alt: Identifier,
    });
    var TEXTFILE = chevrotain.createToken({
        name: 'TEXTFILE',
        pattern: /TEXTFILE/i,
        longer_alt: Identifier,
    });
    var SEQUENCEFILE = chevrotain.createToken({
        name: 'SEQUENCEFILE',
        pattern: /SEQUENCEFILE/i,
        longer_alt: Identifier,
    });
    var FILEFORMAT = chevrotain.createToken({
        name: 'FILEFORMAT',
        pattern: /FILEFORMAT/i,
        longer_alt: Identifier,
    });
    var STORED = chevrotain.createToken({
        name: 'STORED',
        pattern: /STORED/i,
        longer_alt: Identifier,
    });
    var LINES = chevrotain.createToken({
        name: 'LINES',
        pattern: /LINES/i,
        longer_alt: Identifier,
    });
    var KEY_TYPE = chevrotain.createToken({
        name: 'KEY_TYPE',
        pattern: /\$KEY\$/i,
        longer_alt: Identifier,
    });
    var KEYS = chevrotain.createToken({
        name: 'KEYS',
        pattern: /KEYS/i,
        longer_alt: Identifier,
    });
    var ITEMS = chevrotain.createToken({
        name: 'ITEMS',
        pattern: /ITEMS/i,
        longer_alt: Identifier,
    });
    var COLLECTION = chevrotain.createToken({
        name: 'COLLECTION',
        pattern: /COLLECTION/i,
        longer_alt: Identifier,
    });
    var ESCAPED = chevrotain.createToken({
        name: 'ESCAPED',
        pattern: /ESCAPED/i,
        longer_alt: Identifier,
    });
    var TERMINATED = chevrotain.createToken({
        name: 'TERMINATED',
        pattern: /TERMINATED/i,
        longer_alt: Identifier,
    });
    var FIELDS = chevrotain.createToken({
        name: 'FIELDS',
        pattern: /FIELDS/i,
        longer_alt: Identifier,
    });
    var DELIMITED = chevrotain.createToken({
        name: 'DELIMITED',
        pattern: /DELIMITED/i,
        longer_alt: Identifier,
    });
    var LIMIT = chevrotain.createToken({
        name: 'LIMIT',
        pattern: /LIMIT/i,
        longer_alt: Identifier,
    });
    var FORMAT = chevrotain.createToken({
        name: 'FORMAT',
        pattern: /FORMAT/i,
        longer_alt: Identifier,
    });
    var ROWS = chevrotain.createToken({
        name: 'ROWS',
        pattern: /ROWS/i,
        longer_alt: Identifier,
    });
    var ROW = chevrotain.createToken({
        name: 'ROW',
        pattern: /ROW/i,
        longer_alt: Identifier,
    });
    var BUCKETS = chevrotain.createToken({
        name: 'BUCKETS',
        pattern: /BUCKETS/i,
        longer_alt: Identifier,
    });
    var BUCKET = chevrotain.createToken({
        name: 'BUCKET',
        pattern: /BUCKET/i,
        longer_alt: Identifier,
    });
    var INTO = chevrotain.createToken({
        name: 'INTO',
        pattern: /INTO/i,
        longer_alt: Identifier,
    });
    var SORTED = chevrotain.createToken({
        name: 'SORTED',
        pattern: /SORTED/i,
        longer_alt: Identifier,
    });
    var CLUSTERED = chevrotain.createToken({
        name: 'CLUSTERED',
        pattern: /CLUSTERED/i,
        longer_alt: Identifier,
    });
    var PARTITIONED = chevrotain.createToken({
        name: 'PARTITIONED',
        pattern: /PARTITIONED/i,
        longer_alt: Identifier,
    });
    var REDUCE = chevrotain.createToken({
        name: 'REDUCE',
        pattern: /REDUCE/i,
        longer_alt: Identifier,
    });
    var UNIONTYPE = chevrotain.createToken({
        name: 'UNIONTYPE',
        pattern: /UNIONTYPE/i,
        longer_alt: Identifier,
    });
    var MAP = chevrotain.createToken({
        name: 'MAP',
        pattern: /MAP/i,
        longer_alt: Identifier,
    });
    var STRUCT = chevrotain.createToken({
        name: 'STRUCT',
        pattern: /STRUCT/i,
        longer_alt: Identifier,
    });
    var ARRAY = chevrotain.createToken({
        name: 'ARRAY',
        pattern: /ARRAY/i,
        longer_alt: Identifier,
    });
    var STRING = chevrotain.createToken({
        name: 'STRING',
        pattern: /STRING/i,
        longer_alt: Identifier,
    });
    var DECIMAL = chevrotain.createToken({
        name: 'DECIMAL',
        pattern: /DECIMAL/i,
        longer_alt: Identifier,
    });
    var TIMESTAMP = chevrotain.createToken({
        name: 'TIMESTAMP',
        pattern: /TIMESTAMP/i,
        longer_alt: Identifier,
    });
    var DATETIME = chevrotain.createToken({
        name: 'DATETIME',
        pattern: /DATETIME/i,
        longer_alt: Identifier,
    });
    var DATE = chevrotain.createToken({
        name: 'DATE',
        pattern: /DATE/i,
        longer_alt: Identifier,
    });
    var DOUBLE = chevrotain.createToken({
        name: 'DOUBLE',
        pattern: /DOUBLE/i,
        longer_alt: Identifier,
    });
    var FLOAT = chevrotain.createToken({
        name: 'FLOAT',
        pattern: /FLOAT/i,
        longer_alt: Identifier,
    });
    var BIGINT = chevrotain.createToken({
        name: 'BIGINT',
        pattern: /BIGINT/i,
        longer_alt: Identifier,
    });
    var SMALLINT = chevrotain.createToken({
        name: 'SMALLINT',
        pattern: /SMALLINT/i,
        longer_alt: Identifier,
    });
    var TINYINT = chevrotain.createToken({
        name: 'TINYINT',
        pattern: /TINYINT/i,
        longer_alt: Identifier,
    });
    var INT = chevrotain.createToken({
        name: 'INT',
        pattern: /INT/i,
        longer_alt: Identifier,
    });
    var BOOLEAN = chevrotain.createToken({
        name: 'BOOLEAN',
        pattern: /BOOLEAN/i,
        longer_alt: Identifier,
    });
    var COMMENT = chevrotain.createToken({
        name: 'COMMENT',
        pattern: /KWCOMMENT/i,
        longer_alt: Identifier,
    });
    var PROTECTION = chevrotain.createToken({
        name: 'PROTECTION',
        pattern: /PROTECTION/i,
        longer_alt: Identifier,
    });
    var IGNORE = chevrotain.createToken({
        name: 'IGNORE',
        pattern: /IGNORE/i,
        longer_alt: Identifier,
    });
    var RENAME = chevrotain.createToken({
        name: 'RENAME',
        pattern: /RENAME/i,
        longer_alt: Identifier,
    });
    var DROP = chevrotain.createToken({
        name: 'DROP',
        pattern: /DROP/i,
        longer_alt: Identifier,
    });
    var DESCRIBE = chevrotain.createToken({
        name: 'DESCRIBE',
        pattern: /DESCRIBE/i,
        longer_alt: Identifier,
    });
    var AFTER = chevrotain.createToken({
        name: 'AFTER',
        pattern: /AFTER/i,
        longer_alt: Identifier,
    });
    var FIRST = chevrotain.createToken({
        name: 'FIRST',
        pattern: /FIRST/i,
        longer_alt: Identifier,
    });
    var CHANGE = chevrotain.createToken({
        name: 'CHANGE',
        pattern: /CHANGE/i,
        longer_alt: Identifier,
    });
    var ALTER = chevrotain.createToken({
        name: 'ALTER',
        pattern: /ALTER/i,
        longer_alt: Identifier,
    });
    var EXTERNAL = chevrotain.createToken({
        name: 'EXTERNAL',
        pattern: /EXTERNAL/i,
        longer_alt: Identifier,
    });
    var CREATE = chevrotain.createToken({
        name: 'CREATE',
        pattern: /CREATE/i,
        longer_alt: Identifier,
    });
    var NULL = chevrotain.createToken({
        name: 'NULL',
        pattern: /NULL/i,
        longer_alt: Identifier,
    });
    var INPATH = chevrotain.createToken({
        name: 'INPATH',
        pattern: /INPATH/i,
        longer_alt: Identifier,
    });
    var DATA = chevrotain.createToken({
        name: 'DATA',
        pattern: /DATA/i,
        longer_alt: Identifier,
    });
    var IMPORT = chevrotain.createToken({
        name: 'IMPORT',
        pattern: /IMPORT/i,
        longer_alt: Identifier,
    });
    var EXPORT = chevrotain.createToken({
        name: 'EXPORT',
        pattern: /EXPORT/i,
        longer_alt: Identifier,
    });
    var LOAD = chevrotain.createToken({
        name: 'LOAD',
        pattern: /LOAD/i,
        longer_alt: Identifier,
    });
    var UNION = chevrotain.createToken({
        name: 'UNION',
        pattern: /UNION/i,
        longer_alt: Identifier,
    });
    var SORT = chevrotain.createToken({
        name: 'SORT',
        pattern: /SORT/i,
        longer_alt: Identifier,
    });
    var DISTRIBUTE = chevrotain.createToken({
        name: 'DISTRIBUTE',
        pattern: /DISTRIBUTE/i,
        longer_alt: Identifier,
    });
    var CLUSTER = chevrotain.createToken({
        name: 'CLUSTER',
        pattern: /CLUSTER/i,
        longer_alt: Identifier,
    });
    var USING = chevrotain.createToken({
        name: 'USING',
        pattern: /USING/i,
        longer_alt: Identifier,
    });
    var TRANSFORM = chevrotain.createToken({
        name: 'TRANSFORM',
        pattern: /TRANSFORM/i,
        longer_alt: Identifier,
    });
    var FOR = chevrotain.createToken({
        name: 'FOR',
        pattern: /FOR/i,
        longer_alt: Identifier,
    });
    var LOCAL = chevrotain.createToken({
        name: 'LOCAL',
        pattern: /LOCAL/i,
        longer_alt: Identifier,
    });
    var DIRECTORY = chevrotain.createToken({
        name: 'DIRECTORY',
        pattern: /DIRECTORY/i,
        longer_alt: Identifier,
    });
    var TO = chevrotain.createToken({
        name: 'TO',
        pattern: /TO/i,
        longer_alt: Identifier,
    });
    var REPAIR = chevrotain.createToken({
        name: 'REPAIR',
        pattern: /REPAIR/i,
        longer_alt: Identifier,
    });
    var MSCK = chevrotain.createToken({
        name: 'MSCK',
        pattern: /MSCK/i,
        longer_alt: Identifier,
    });
    var SHOW = chevrotain.createToken({
        name: 'SHOW',
        pattern: /SHOW/i,
        longer_alt: Identifier,
    });
    var FUNCTIONS = chevrotain.createToken({
        name: 'FUNCTIONS',
        pattern: /FUNCTIONS/i,
        longer_alt: Identifier,
    });
    var FUNCTION = chevrotain.createToken({
        name: 'FUNCTION',
        pattern: /FUNCTION/i,
        longer_alt: Identifier,
    });
    var REBUILD = chevrotain.createToken({
        name: 'REBUILD',
        pattern: /REBUILD/i,
        longer_alt: Identifier,
    });
    var INDEXES = chevrotain.createToken({
        name: 'INDEXES',
        pattern: /INDEXES/i,
        longer_alt: Identifier,
    });
    var INDEX = chevrotain.createToken({
        name: 'INDEX',
        pattern: /INDEX/i,
        longer_alt: Identifier,
    });
    var COLUMNS = chevrotain.createToken({
        name: 'COLUMNS',
        pattern: /COLUMNS/i,
        longer_alt: Identifier,
    });
    var COLUMN = chevrotain.createToken({
        name: 'COLUMN',
        pattern: /COLUMN/i,
        longer_alt: Identifier,
    });
    var TABLES = chevrotain.createToken({
        name: 'TABLES',
        pattern: /TABLES/i,
        longer_alt: Identifier,
    });
    var TABLE = chevrotain.createToken({
        name: 'TABLE',
        pattern: /TABLE/i,
        longer_alt: Identifier,
    });
    var PARTITIONS = chevrotain.createToken({
        name: 'PARTITIONS',
        pattern: /PARTITIONS/i,
        longer_alt: Identifier,
    });
    var PARTITION = chevrotain.createToken({
        name: 'PARTITION',
        pattern: /PARTITION/i,
        longer_alt: Identifier,
    });
    var ON = chevrotain.createToken({
        name: 'ON',
        pattern: /ON/i,
        longer_alt: Identifier,
    });
    var FULL = chevrotain.createToken({
        name: 'FULL',
        pattern: /FULL/i,
        longer_alt: Identifier,
    });
    var RIGHT = chevrotain.createToken({
        name: 'RIGHT',
        pattern: /RIGHT/i,
        longer_alt: Identifier,
    });
    var LEFT = chevrotain.createToken({
        name: 'LEFT',
        pattern: /LEFT/i,
        longer_alt: Identifier,
    });
    var PRESERVE = chevrotain.createToken({
        name: 'PRESERVE',
        pattern: /PRESERVE/i,
        longer_alt: Identifier,
    });
    var UNIQUEJOIN = chevrotain.createToken({
        name: 'UNIQUEJOIN',
        pattern: /UNIQUEJOIN/i,
        longer_alt: Identifier,
    });
    var OUTER = chevrotain.createToken({
        name: 'OUTER',
        pattern: /OUTER/i,
        longer_alt: Identifier,
    });
    var OUT = chevrotain.createToken({
        name: 'OUT',
        pattern: /OUT/i,
        longer_alt: Identifier,
    });
    var OVERWRITE = chevrotain.createToken({
        name: 'OVERWRITE',
        pattern: /OVERWRITE/i,
        longer_alt: Identifier,
    });
    var OVER = chevrotain.createToken({
        name: 'OVER',
        pattern: /OVER/i,
        longer_alt: Identifier,
    });
    var INSERT = chevrotain.createToken({
        name: 'INSERT',
        pattern: /INSERT/i,
        longer_alt: Identifier,
    });
    var DISTINCT = chevrotain.createToken({
        name: 'DISTINCT',
        pattern: /DISTINCT/i,
        longer_alt: Identifier,
    });
    var SELECT = chevrotain.createToken({
        name: 'SELECT',
        pattern: /SELECT/i,
        longer_alt: Identifier,
    });
    var FROM = chevrotain.createToken({
        name: 'FROM',
        pattern: /FROM/i,
        longer_alt: Identifier,
    });
    var WHERE = chevrotain.createToken({
        name: 'WHERE',
        pattern: /WHERE/i,
        longer_alt: Identifier,
    });
    var HAVING = chevrotain.createToken({
        name: 'HAVING',
        pattern: /HAVING/i,
        longer_alt: Identifier,
    });
    var BY = chevrotain.createToken({
        name: 'BY',
        pattern: /BY/i,
        longer_alt: Identifier,
    });
    var GROUP = chevrotain.createToken({
        name: 'GROUP',
        pattern: /GROUP/i,
        longer_alt: Identifier,
    });
    var ORDER = chevrotain.createToken({
        name: 'ORDER',
        pattern: /ORDER/i,
        longer_alt: Identifier,
    });
    var DESC = chevrotain.createToken({
        name: 'DESC',
        pattern: /DESC/i,
        longer_alt: Identifier,
    });
    var ASC = chevrotain.createToken({
        name: 'ASC',
        pattern: /ASC/i,
        longer_alt: Identifier,
    });
    var AS = chevrotain.createToken({
        name: 'AS',
        pattern: /AS/i,
        longer_alt: Identifier,
    });
    var EXISTS = chevrotain.createToken({
        name: 'EXISTS',
        pattern: /EXISTS/i,
        longer_alt: Identifier,
    });
    var IS = chevrotain.createToken({
        name: 'IS',
        pattern: /IS/i,
        longer_alt: Identifier,
    });
    var IF = chevrotain.createToken({
        name: 'IF',
        pattern: /IF/i,
        longer_alt: Identifier,
    });
    var JOIN = chevrotain.createToken({
        name: 'JOIN',
        pattern: /JOIN/i,
        longer_alt: Identifier,
    });
    var IN = chevrotain.createToken({
        name: 'IN',
        pattern: /IN/i,
        longer_alt: Identifier,
    });
    var LIKE = chevrotain.createToken({
        name: 'LIKE',
        pattern: /LIKE/i,
        longer_alt: Identifier,
    });
    var NOT = chevrotain.createToken({
        name: 'NOT',
        pattern: /(NOT|\!)/i,
        longer_alt: Identifier,
    });
    var OR = chevrotain.createToken({
        name: 'OR',
        pattern: /OR/i,
        longer_alt: Identifier,
    });
    var AND = chevrotain.createToken({
        name: 'AND',
        pattern: /AND/i,
        longer_alt: Identifier,
    });
    var ALL = chevrotain.createToken({
        name: 'ALL',
        pattern: /ALL/i,
        longer_alt: Identifier,
    });
    var FALSE = chevrotain.createToken({
        name: 'FALSE',
        pattern: /FALSE/i,
        longer_alt: Identifier,
    });
    var TRUE = chevrotain.createToken({
        name: 'TRUE',
        pattern: /TRUE/i,
        longer_alt: Identifier,
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