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
    var COMMENT = chevrotain.createToken({
        name: 'COMMENT',
        pattern: /\-\-([^(\n|\r)])*/i,
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
    var KWEXCHANGE = chevrotain.createToken({
        name: 'KWEXCHANGE',
        pattern: /EXCHANGE/i,
    });
    var KWINNER = chevrotain.createToken({
        name: 'KWINNER',
        pattern: /INNER/i,
    });
    var KWROLE = chevrotain.createToken({
        name: 'KWROLE',
        pattern: /ROLE/i,
    });
    var KWUSER = chevrotain.createToken({
        name: 'KWUSER',
        pattern: /USER/i,
    });
    var KWPARTIALSCAN = chevrotain.createToken({
        name: 'KWPARTIALSCAN',
        pattern: /PARTIALSCAN/i,
    });
    var KWNOSCAN = chevrotain.createToken({
        name: 'KWNOSCAN',
        pattern: /NOSCAN/i,
    });
    var KWTRUNCATE = chevrotain.createToken({
        name: 'KWTRUNCATE',
        pattern: /TRUNCATE/i,
    });
    var KWSETS = chevrotain.createToken({
        name: 'KWSETS',
        pattern: /SETS/i,
    });
    var KWGROUPING = chevrotain.createToken({
        name: 'KWGROUPING',
        pattern: /GROUPING/i,
    });
    var KWMORE = chevrotain.createToken({
        name: 'KWMORE',
        pattern: /MORE/i,
    });
    var KWLESS = chevrotain.createToken({
        name: 'KWLESS',
        pattern: /LESS/i,
    });
    var KWCURRENT = chevrotain.createToken({
        name: 'KWCURRENT',
        pattern: /CURRENT/i,
    });
    var KWFOLLOWING = chevrotain.createToken({
        name: 'KWFOLLOWING',
        pattern: /FOLLOWING/i,
    });
    var KWPRECEDING = chevrotain.createToken({
        name: 'KWPRECEDING',
        pattern: /PRECEDING/i,
    });
    var KWUNBOUNDED = chevrotain.createToken({
        name: 'KWUNBOUNDED',
        pattern: /UNBOUNDED/i,
    });
    var KWWINDOW = chevrotain.createToken({
        name: 'KWWINDOW',
        pattern: /WINDOW/i,
    });
    var KWDIRECTORIES = chevrotain.createToken({
        name: 'KWDIRECTORIES',
        pattern: /DIRECTORIES/i,
    });
    var KWCUBE = chevrotain.createToken({
        name: 'KWCUBE',
        pattern: /CUBE/i,
    });
    var KWROLLUP = chevrotain.createToken({
        name: 'KWROLLUP',
        pattern: /ROLLUP/i,
    });
    var KWSKEWED = chevrotain.createToken({
        name: 'KWSKEWED',
        pattern: /SKEWED/i,
    });
    var KWCASCADE = chevrotain.createToken({
        name: 'KWCASCADE',
        pattern: /CASCADE/i,
    });
    var KWRESTRICT = chevrotain.createToken({
        name: 'KWRESTRICT',
        pattern: /RESTRICT/i,
    });
    var KWUPDATE = chevrotain.createToken({
        name: 'KWUPDATE',
        pattern: /UPDATE/i,
    });
    var KWSHOW_DATABASE = chevrotain.createToken({
        name: 'KWSHOW_DATABASE',
        pattern: /SHOW_DATABASE/i,
    });
    var KWCONCATENATE = chevrotain.createToken({
        name: 'KWCONCATENATE',
        pattern: /CONCATENATE/i,
    });
    var KWOPTION = chevrotain.createToken({
        name: 'KWOPTION',
        pattern: /OPTION/i,
    });
    var KWUSE = chevrotain.createToken({
        name: 'KWUSE',
        pattern: /USE/i,
    });
    var KWSTATISTICS = chevrotain.createToken({
        name: 'KWSTATISTICS',
        pattern: /STATISTICS/i,
    });
    var KWCOMPUTE = chevrotain.createToken({
        name: 'KWCOMPUTE',
        pattern: /COMPUTE/i,
    });
    var KWUNARCHIVE = chevrotain.createToken({
        name: 'KWUNARCHIVE',
        pattern: /UNARCHIVE/i,
    });
    var KWARCHIVE = chevrotain.createToken({
        name: 'KWARCHIVE',
        pattern: /ARCHIVE/i,
    });
    var KWTOUCH = chevrotain.createToken({
        name: 'KWTOUCH',
        pattern: /TOUCH/i,
    });
    var KWLATERAL = chevrotain.createToken({
        name: 'KWLATERAL',
        pattern: /LATERAL/i,
    });
    var KWSEMI = chevrotain.createToken({
        name: 'KWSEMI',
        pattern: /SEMI/i,
    });
    var KWRECORDWRITER = chevrotain.createToken({
        name: 'KWRECORDWRITER',
        pattern: /RECORDWRITER/i,
    });
    var KWRECORDREADER = chevrotain.createToken({
        name: 'KWRECORDREADER',
        pattern: /RECORDREADER/i,
    });
    var KWTRIGGER = chevrotain.createToken({
        name: 'KWTRIGGER',
        pattern: /TRIGGER/i,
    });
    var KWCURSOR = chevrotain.createToken({
        name: 'KWCURSOR',
        pattern: /CURSOR/i,
    });
    var KWCONTINUE = chevrotain.createToken({
        name: 'KWCONTINUE',
        pattern: /CONTINUE/i,
    });
    var KWCROSS = chevrotain.createToken({
        name: 'KWCROSS',
        pattern: /CROSS/i,
    });
    var KWBINARY = chevrotain.createToken({
        name: 'KWBINARY',
        pattern: /BINARY/i,
    });
    var KWBOTH = chevrotain.createToken({
        name: 'KWBOTH',
        pattern: /BOTH/i,
    });
    var KWBETWEEN = chevrotain.createToken({
        name: 'KWBETWEEN',
        pattern: /BETWEEN/i,
    });
    var KWBEFORE = chevrotain.createToken({
        name: 'KWBEFORE',
        pattern: /BEFORE/i,
    });
    var KWANALYZE = chevrotain.createToken({
        name: 'KWANALYZE',
        pattern: /ANALYZE/i,
    });
    var KWRANGE = chevrotain.createToken({
        name: 'KWRANGE',
        pattern: /RANGE/i,
    });
    var KWPURGE = chevrotain.createToken({
        name: 'KWPURGE',
        pattern: /PURGE/i,
    });
    var KWREADS = chevrotain.createToken({
        name: 'KWREADS',
        pattern: /READS/i,
    });
    var KWWHILE = chevrotain.createToken({
        name: 'KWWHILE',
        pattern: /WHILE/i,
    });
    var KWUNSIGNED = chevrotain.createToken({
        name: 'KWUNSIGNED',
        pattern: /UNSIGNED/i,
    });
    var KWPROCEDURE = chevrotain.createToken({
        name: 'KWPROCEDURE',
        pattern: /PROCEDURE/i,
    });
    var KWEXCLUSIVE = chevrotain.createToken({
        name: 'KWEXCLUSIVE',
        pattern: /EXCLUSIVE/i,
    });
    var KWSHARED = chevrotain.createToken({
        name: 'KWSHARED',
        pattern: /SHARED/i,
    });
    var KWUNLOCK = chevrotain.createToken({
        name: 'KWUNLOCK',
        pattern: /UNLOCK/i,
    });
    var KWLOCKS = chevrotain.createToken({
        name: 'KWLOCKS',
        pattern: /LOCKS/i,
    });
    var KWLOCK = chevrotain.createToken({
        name: 'KWLOCK',
        pattern: /LOCK/i,
    });
    var KWUNDO = chevrotain.createToken({
        name: 'KWUNDO',
        pattern: /UNDO/i,
    });
    var KWSSL = chevrotain.createToken({
        name: 'KWSSL',
        pattern: /SSL/i,
    });
    var KWREVOKE = chevrotain.createToken({
        name: 'KWREVOKE',
        pattern: /REVOKE/i,
    });
    var KWGRANT = chevrotain.createToken({
        name: 'KWGRANT',
        pattern: /GRANT/i,
    });
    var KWSCHEMAS = chevrotain.createToken({
        name: 'KWSCHEMAS',
        pattern: /SCHEMAS/i,
    });
    var KWSCHEMA = chevrotain.createToken({
        name: 'KWSCHEMA',
        pattern: /SCHEMA/i,
    });
    var KWMATERIALIZED = chevrotain.createToken({
        name: 'KWMATERIALIZED',
        pattern: /MATERIALIZED/i,
    });
    var KWDATABASES = chevrotain.createToken({
        name: 'KWDATABASES',
        pattern: /DATABASES/i,
    });
    var KWDATABASE = chevrotain.createToken({
        name: 'KWDATABASE',
        pattern: /DATABASE/i,
    });
    var KWVIEW = chevrotain.createToken({
        name: 'KWVIEW',
        pattern: /VIEW/i,
    });
    var KWINTERSECT = chevrotain.createToken({
        name: 'KWINTERSECT',
        pattern: /INTERSECT/i,
    });
    var KWFETCH = chevrotain.createToken({
        name: 'KWFETCH',
        pattern: /FETCH/i,
    });
    var KWMINUS = chevrotain.createToken({
        name: 'KWMINUS',
        pattern: /MINUS/i,
    });
    var KWPLUS = chevrotain.createToken({
        name: 'KWPLUS',
        pattern: /PLUS/i,
    });
    var KWDELETE = chevrotain.createToken({
        name: 'KWDELETE',
        pattern: /DELETE/i,
    });
    var KWLONG = chevrotain.createToken({
        name: 'KWLONG',
        pattern: /LONG/i,
    });
    var KWUTCTIMESTAMP = chevrotain.createToken({
        name: 'KWUTCTIMESTAMP',
        pattern: /UTC_TMESTAMP/i,
    });
    var KWUTC = chevrotain.createToken({
        name: 'KWUTC',
        pattern: /UTC/i,
    });
    var KWCLUSTERSTATUS = chevrotain.createToken({
        name: 'KWCLUSTERSTATUS',
        pattern: /CLUSTERSTATUS/i,
    });
    var KWHOLD_DDLTIME = chevrotain.createToken({
        name: 'KWHOLD_DDLTIME',
        pattern: /HOLD_DDLTIME/i,
    });
    var KWSTREAMTABLE = chevrotain.createToken({
        name: 'KWSTREAMTABLE',
        pattern: /STREAMTABLE/i,
    });
    var KWMAPJOIN = chevrotain.createToken({
        name: 'KWMAPJOIN',
        pattern: /MAPJOIN/i,
    });
    var KWELSE = chevrotain.createToken({
        name: 'KWELSE',
        pattern: /ELSE/i,
    });
    var KWTHEN = chevrotain.createToken({
        name: 'KWTHEN',
        pattern: /THEN/i,
    });
    var KWWHEN = chevrotain.createToken({
        name: 'KWWHEN',
        pattern: /WHEN/i,
    });
    var KWCASE = chevrotain.createToken({
        name: 'KWCASE',
        pattern: /CASE/i,
    });
    var KWELEM_TYPE = chevrotain.createToken({
        name: 'KWELEM_TYPE',
        pattern: /\$ELEM\$/i,
    });
    var KWVALUE_TYPE = chevrotain.createToken({
        name: 'KWVALUE_TYPE',
        pattern: /\$VALUE\$/i,
    });
    var KWIDXPROPERTIES = chevrotain.createToken({
        name: 'KWIDXPROPERTIES',
        pattern: /IDXPROPERTIES/i,
    });
    var KWTBLPROPERTIES = chevrotain.createToken({
        name: 'KWTBLPROPERTIES',
        pattern: /TBLPROPERTIES/i,
    });
    var KWUNSET = chevrotain.createToken({
        name: 'KWUNSET',
        pattern: /UNSET/i,
    });
    var KWSET = chevrotain.createToken({
        name: 'KWSET',
        pattern: /SET/i,
    });
    var KWDBPROPERTIES = chevrotain.createToken({
        name: 'KWDBPROPERTIES',
        pattern: /DBPROPERTIES/i,
    });
    var KWSERDEPROPERTIES = chevrotain.createToken({
        name: 'KWSERDEPROPERTIES',
        pattern: /SERDEPROPERTIES/i,
    });
    var KWDEFERRED = chevrotain.createToken({
        name: 'KWDEFERRED',
        pattern: /DEFERRED/i,
    });
    var KWWITH = chevrotain.createToken({
        name: 'KWWITH',
        pattern: /WITH/i,
    });
    var KWSERDE = chevrotain.createToken({
        name: 'KWSERDE',
        pattern: /SERDE/i,
    });
    var KWLOGICAL = chevrotain.createToken({
        name: 'KWLOGICAL',
        pattern: /LOGICAL/i,
    });
    var KWDEPENDENCY = chevrotain.createToken({
        name: 'KWDEPENDENCY',
        pattern: /DEPENDENCY/i,
    });
    var KWPRETTY = chevrotain.createToken({
        name: 'KWPRETTY',
        pattern: /PRETTY/i,
    });
    var KWFORMATTED = chevrotain.createToken({
        name: 'KWFORMATTED',
        pattern: /FORMATTED/i,
    });
    var KWEXTENDED = chevrotain.createToken({
        name: 'KWEXTENDED',
        pattern: /EXTENDED/i,
    });
    var KWEND = chevrotain.createToken({
        name: 'KWEND',
        pattern: /END/i,
    });
    var KWEXPLAIN = chevrotain.createToken({
        name: 'KWEXPLAIN',
        pattern: /EXPLAIN/i,
    });
    var KWMACRO = chevrotain.createToken({
        name: 'KWMACRO',
        pattern: /MACRO/i,
    });
    var KWTEMPORARY = chevrotain.createToken({
        name: 'KWTEMPORARY',
        pattern: /TEMPORARY/i,
    });
    var KWREGEXP = chevrotain.createToken({
        name: 'KWREGEXP',
        pattern: /REGEXP/i,
    });
    var KWRLIKE = chevrotain.createToken({
        name: 'KWRLIKE',
        pattern: /RLIKE/i,
    });
    var KWREPLACE = chevrotain.createToken({
        name: 'KWREPLACE',
        pattern: /REPLACE/i,
    });
    var KWADD = chevrotain.createToken({
        name: 'KWADD',
        pattern: /ADD/i,
    });
    var KWCAST = chevrotain.createToken({
        name: 'KWCAST',
        pattern: /CAST/i,
    });
    var KWPERCENT = chevrotain.createToken({
        name: 'KWPERCENT',
        pattern: /PERCENT/i,
    });
    var KWTABLESAMPLE = chevrotain.createToken({
        name: 'KWTABLESAMPLE',
        pattern: /TABLESAMPLE/i,
    });
    var KWLOCATION = chevrotain.createToken({
        name: 'KWLOCATION',
        pattern: /LOCATION/i,
    });
    var KWNO_DROP = chevrotain.createToken({
        name: 'KWNO_DROP',
        pattern: /NO_DROP/i,
    });
    var CharSetName = chevrotain.createToken({
        name: 'CharSetName',
        pattern: /_([A-Za-z]|[0-9]|_|\-|\.|\:)+/i,
    });
    var KWREADONLY = chevrotain.createToken({
        name: 'KWREADONLY',
        pattern: /READONLY/i,
    });
    var KWREAD = chevrotain.createToken({
        name: 'KWREAD',
        pattern: /READ/i,
    });
    var KWDISABLE = chevrotain.createToken({
        name: 'KWDISABLE',
        pattern: /DISABLE/i,
    });
    var KWENABLE = chevrotain.createToken({
        name: 'KWENABLE',
        pattern: /ENABLE/i,
    });
    var KWOFFLINE = chevrotain.createToken({
        name: 'KWOFFLINE',
        pattern: /OFFLINE/i,
    });
    var KWOF = chevrotain.createToken({
        name: 'KWOF',
        pattern: /OF/i,
    });
    var KWOUTPUTDRIVER = chevrotain.createToken({
        name: 'KWOUTPUTDRIVER',
        pattern: /OUTPUTDRIVER/i,
    });
    var KWINPUTDRIVER = chevrotain.createToken({
        name: 'KWINPUTDRIVER',
        pattern: /INPUTDRIVER/i,
    });
    var KWOUTPUTFORMAT = chevrotain.createToken({
        name: 'KWOUTPUTFORMAT',
        pattern: /OUTPUTFORMAT/i,
    });
    var KWINPUTFORMAT = chevrotain.createToken({
        name: 'KWINPUTFORMAT',
        pattern: /INPUTFORMAT/i,
    });
    var KWORCFILE = chevrotain.createToken({
        name: 'KWORCFILE',
        pattern: /ORC/i,
    });
    var KWRCFILE = chevrotain.createToken({
        name: 'KWRCFILE',
        pattern: /RCFILE/i,
    });
    var KWTEXTFILE = chevrotain.createToken({
        name: 'KWTEXTFILE',
        pattern: /TEXTFILE/i,
    });
    var KWSEQUENCEFILE = chevrotain.createToken({
        name: 'KWSEQUENCEFILE',
        pattern: /SEQUENCEFILE/i,
    });
    var KWFILEFORMAT = chevrotain.createToken({
        name: 'KWFILEFORMAT',
        pattern: /FILEFORMAT/i,
    });
    var KWSTORED = chevrotain.createToken({
        name: 'KWSTORED',
        pattern: /STORED/i,
    });
    var KWLINES = chevrotain.createToken({
        name: 'KWLINES',
        pattern: /LINES/i,
    });
    var KWKEY_TYPE = chevrotain.createToken({
        name: 'KWKEY_TYPE',
        pattern: /\$KEY\$/i,
    });
    var KWKEYS = chevrotain.createToken({
        name: 'KWKEYS',
        pattern: /KEYS/i,
    });
    var KWITEMS = chevrotain.createToken({
        name: 'KWITEMS',
        pattern: /ITEMS/i,
    });
    var KWCOLLECTION = chevrotain.createToken({
        name: 'KWCOLLECTION',
        pattern: /COLLECTION/i,
    });
    var KWESCAPED = chevrotain.createToken({
        name: 'KWESCAPED',
        pattern: /ESCAPED/i,
    });
    var KWTERMINATED = chevrotain.createToken({
        name: 'KWTERMINATED',
        pattern: /TERMINATED/i,
    });
    var KWFIELDS = chevrotain.createToken({
        name: 'KWFIELDS',
        pattern: /FIELDS/i,
    });
    var KWDELIMITED = chevrotain.createToken({
        name: 'KWDELIMITED',
        pattern: /DELIMITED/i,
    });
    var KWLIMIT = chevrotain.createToken({
        name: 'KWLIMIT',
        pattern: /LIMIT/i,
    });
    var KWFORMAT = chevrotain.createToken({
        name: 'KWFORMAT',
        pattern: /FORMAT/i,
    });
    var KWROWS = chevrotain.createToken({
        name: 'KWROWS',
        pattern: /ROWS/i,
    });
    var KWROW = chevrotain.createToken({
        name: 'KWROW',
        pattern: /ROW/i,
    });
    var KWBUCKETS = chevrotain.createToken({
        name: 'KWBUCKETS',
        pattern: /BUCKETS/i,
    });
    var KWBUCKET = chevrotain.createToken({
        name: 'KWBUCKET',
        pattern: /BUCKET/i,
    });
    var KWINTO = chevrotain.createToken({
        name: 'KWINTO',
        pattern: /INTO/i,
    });
    var KWSORTED = chevrotain.createToken({
        name: 'KWSORTED',
        pattern: /SORTED/i,
    });
    var KWCLUSTERED = chevrotain.createToken({
        name: 'KWCLUSTERED',
        pattern: /CLUSTERED/i,
    });
    var KWPARTITIONED = chevrotain.createToken({
        name: 'KWPARTITIONED',
        pattern: /PARTITIONED/i,
    });
    var KWREDUCE = chevrotain.createToken({
        name: 'KWREDUCE',
        pattern: /REDUCE/i,
    });
    var KWUNIONTYPE = chevrotain.createToken({
        name: 'KWUNIONTYPE',
        pattern: /UNIONTYPE/i,
    });
    var KWMAP = chevrotain.createToken({
        name: 'KWMAP',
        pattern: /MAP/i,
    });
    var KWSTRUCT = chevrotain.createToken({
        name: 'KWSTRUCT',
        pattern: /STRUCT/i,
    });
    var KWARRAY = chevrotain.createToken({
        name: 'KWARRAY',
        pattern: /ARRAY/i,
    });
    var KWSTRING = chevrotain.createToken({
        name: 'KWSTRING',
        pattern: /STRING/i,
    });
    var KWDECIMAL = chevrotain.createToken({
        name: 'KWDECIMAL',
        pattern: /DECIMAL/i,
    });
    var KWTIMESTAMP = chevrotain.createToken({
        name: 'KWTIMESTAMP',
        pattern: /TIMESTAMP/i,
    });
    var KWDATETIME = chevrotain.createToken({
        name: 'KWDATETIME',
        pattern: /DATETIME/i,
    });
    var KWDATE = chevrotain.createToken({
        name: 'KWDATE',
        pattern: /DATE/i,
    });
    var KWDOUBLE = chevrotain.createToken({
        name: 'KWDOUBLE',
        pattern: /DOUBLE/i,
    });
    var KWFLOAT = chevrotain.createToken({
        name: 'KWFLOAT',
        pattern: /FLOAT/i,
    });
    var KWBIGINT = chevrotain.createToken({
        name: 'KWBIGINT',
        pattern: /BIGINT/i,
    });
    var KWSMALLINT = chevrotain.createToken({
        name: 'KWSMALLINT',
        pattern: /SMALLINT/i,
    });
    var KWTINYINT = chevrotain.createToken({
        name: 'KWTINYINT',
        pattern: /TINYINT/i,
    });
    var KWINT = chevrotain.createToken({
        name: 'KWINT',
        pattern: /INT/i,
    });
    var KWBOOLEAN = chevrotain.createToken({
        name: 'KWBOOLEAN',
        pattern: /BOOLEAN/i,
    });
    var KWCOMMENT = chevrotain.createToken({
        name: 'KWCOMMENT',
        pattern: /COMMENT/i,
    });
    var KWPROTECTION = chevrotain.createToken({
        name: 'KWPROTECTION',
        pattern: /PROTECTION/i,
    });
    var KWIGNORE = chevrotain.createToken({
        name: 'KWIGNORE',
        pattern: /IGNORE/i,
    });
    var KWRENAME = chevrotain.createToken({
        name: 'KWRENAME',
        pattern: /RENAME/i,
    });
    var KWDROP = chevrotain.createToken({
        name: 'KWDROP',
        pattern: /DROP/i,
    });
    var KWDESCRIBE = chevrotain.createToken({
        name: 'KWDESCRIBE',
        pattern: /DESCRIBE/i,
    });
    var KWAFTER = chevrotain.createToken({
        name: 'KWAFTER',
        pattern: /AFTER/i,
    });
    var KWFIRST = chevrotain.createToken({
        name: 'KWFIRST',
        pattern: /FIRST/i,
    });
    var KWCHANGE = chevrotain.createToken({
        name: 'KWCHANGE',
        pattern: /CHANGE/i,
    });
    var KWALTER = chevrotain.createToken({
        name: 'KWALTER',
        pattern: /ALTER/i,
    });
    var KWEXTERNAL = chevrotain.createToken({
        name: 'KWEXTERNAL',
        pattern: /EXTERNAL/i,
    });
    var KWCREATE = chevrotain.createToken({
        name: 'KWCREATE',
        pattern: /CREATE/i,
    });
    var KWNULL = chevrotain.createToken({
        name: 'KWNULL',
        pattern: /NULL/i,
    });
    var KWINPATH = chevrotain.createToken({
        name: 'KWINPATH',
        pattern: /INPATH/i,
    });
    var KWDATA = chevrotain.createToken({
        name: 'KWDATA',
        pattern: /DATA/i,
    });
    var KWIMPORT = chevrotain.createToken({
        name: 'KWIMPORT',
        pattern: /IMPORT/i,
    });
    var KWEXPORT = chevrotain.createToken({
        name: 'KWEXPORT',
        pattern: /EXPORT/i,
    });
    var KWLOAD = chevrotain.createToken({
        name: 'KWLOAD',
        pattern: /LOAD/i,
    });
    var KWUNION = chevrotain.createToken({
        name: 'KWUNION',
        pattern: /UNION/i,
    });
    var KWSORT = chevrotain.createToken({
        name: 'KWSORT',
        pattern: /SORT/i,
    });
    var KWDISTRIBUTE = chevrotain.createToken({
        name: 'KWDISTRIBUTE',
        pattern: /DISTRIBUTE/i,
    });
    var KWCLUSTER = chevrotain.createToken({
        name: 'KWCLUSTER',
        pattern: /CLUSTER/i,
    });
    var KWUSING = chevrotain.createToken({
        name: 'KWUSING',
        pattern: /USING/i,
    });
    var KWTRANSFORM = chevrotain.createToken({
        name: 'KWTRANSFORM',
        pattern: /TRANSFORM/i,
    });
    var KWFOR = chevrotain.createToken({
        name: 'KWFOR',
        pattern: /FOR/i,
    });
    var KWLOCAL = chevrotain.createToken({
        name: 'KWLOCAL',
        pattern: /LOCAL/i,
    });
    var KWDIRECTORY = chevrotain.createToken({
        name: 'KWDIRECTORY',
        pattern: /DIRECTORY/i,
    });
    var KWTO = chevrotain.createToken({
        name: 'KWTO',
        pattern: /TO/i,
    });
    var KWREPAIR = chevrotain.createToken({
        name: 'KWREPAIR',
        pattern: /REPAIR/i,
    });
    var KWMSCK = chevrotain.createToken({
        name: 'KWMSCK',
        pattern: /MSCK/i,
    });
    var KWSHOW = chevrotain.createToken({
        name: 'KWSHOW',
        pattern: /SHOW/i,
    });
    var KWFUNCTIONS = chevrotain.createToken({
        name: 'KWFUNCTIONS',
        pattern: /FUNCTIONS/i,
    });
    var KWFUNCTION = chevrotain.createToken({
        name: 'KWFUNCTION',
        pattern: /FUNCTION/i,
    });
    var KWREBUILD = chevrotain.createToken({
        name: 'KWREBUILD',
        pattern: /REBUILD/i,
    });
    var KWINDEXES = chevrotain.createToken({
        name: 'KWINDEXES',
        pattern: /INDEXES/i,
    });
    var KWINDEX = chevrotain.createToken({
        name: 'KWINDEX',
        pattern: /INDEX/i,
    });
    var KWCOLUMNS = chevrotain.createToken({
        name: 'KWCOLUMNS',
        pattern: /COLUMNS/i,
    });
    var KWCOLUMN = chevrotain.createToken({
        name: 'KWCOLUMN',
        pattern: /COLUMN/i,
    });
    var KWTABLES = chevrotain.createToken({
        name: 'KWTABLES',
        pattern: /TABLES/i,
    });
    var KWTABLE = chevrotain.createToken({
        name: 'KWTABLE',
        pattern: /TABLE/i,
    });
    var KWPARTITIONS = chevrotain.createToken({
        name: 'KWPARTITIONS',
        pattern: /PARTITIONS/i,
    });
    var KWPARTITION = chevrotain.createToken({
        name: 'KWPARTITION',
        pattern: /PARTITION/i,
    });
    var KWON = chevrotain.createToken({
        name: 'KWON',
        pattern: /ON/i,
    });
    var KWFULL = chevrotain.createToken({
        name: 'KWFULL',
        pattern: /FULL/i,
    });
    var KWRIGHT = chevrotain.createToken({
        name: 'KWRIGHT',
        pattern: /RIGHT/i,
    });
    var KWLEFT = chevrotain.createToken({
        name: 'KWLEFT',
        pattern: /LEFT/i,
    });
    var KWPRESERVE = chevrotain.createToken({
        name: 'KWPRESERVE',
        pattern: /PRESERVE/i,
    });
    var KWUNIQUEJOIN = chevrotain.createToken({
        name: 'KWUNIQUEJOIN',
        pattern: /UNIQUEJOIN/i,
    });
    var KWJOIN = chevrotain.createToken({
        name: 'KWJOIN',
        pattern: /JOIN/i,
    });
    var KWOUTER = chevrotain.createToken({
        name: 'KWOUTER',
        pattern: /OUTER/i,
    });
    var KWOUT = chevrotain.createToken({
        name: 'KWOUT',
        pattern: /OUT/i,
    });
    var KWOVERWRITE = chevrotain.createToken({
        name: 'KWOVERWRITE',
        pattern: /OVERWRITE/i,
    });
    var KWOVER = chevrotain.createToken({
        name: 'KWOVER',
        pattern: /OVER/i,
    });
    var KWINSERT = chevrotain.createToken({
        name: 'KWINSERT',
        pattern: /INSERT/i,
    });
    var KWDISTINCT = chevrotain.createToken({
        name: 'KWDISTINCT',
        pattern: /DISTINCT/i,
    });
    var KWSELECT = chevrotain.createToken({
        name: 'KWSELECT',
        pattern: /SELECT/i,
    });
    var KWFROM = chevrotain.createToken({
        name: 'KWFROM',
        pattern: /FROM/i,
    });
    var KWWHERE = chevrotain.createToken({
        name: 'KWWHERE',
        pattern: /WHERE/i,
    });
    var KWHAVING = chevrotain.createToken({
        name: 'KWHAVING',
        pattern: /HAVING/i,
    });
    var KWIN = chevrotain.createToken({
        name: 'KWIN',
        pattern: /IN/i,
    });
    var KWBY = chevrotain.createToken({
        name: 'KWBY',
        pattern: /BY/i,
    });
    var KWGROUP = chevrotain.createToken({
        name: 'KWGROUP',
        pattern: /GROUP/i,
    });
    var KWORDER = chevrotain.createToken({
        name: 'KWORDER',
        pattern: /ORDER/i,
    });
    var KWDESC = chevrotain.createToken({
        name: 'KWDESC',
        pattern: /DESC/i,
    });
    var KWASC = chevrotain.createToken({
        name: 'KWASC',
        pattern: /ASC/i,
    });
    var KWAS = chevrotain.createToken({
        name: 'KWAS',
        pattern: /AS/i,
    });
    var KWEXISTS = chevrotain.createToken({
        name: 'KWEXISTS',
        pattern: /EXISTS/i,
    });
    var KWIS = chevrotain.createToken({
        name: 'KWIS',
        pattern: /IS/i,
    });
    var KWIF = chevrotain.createToken({
        name: 'KWIF',
        pattern: /IF/i,
    });
    var KWLIKE = chevrotain.createToken({
        name: 'KWLIKE',
        pattern: /LIKE/i,
    });
    var KWNOT = chevrotain.createToken({
        name: 'KWNOT',
        pattern: /(NOT|\!)/i,
    });
    var KWOR = chevrotain.createToken({
        name: 'KWOR',
        pattern: /OR/i,
    });
    var KWAND = chevrotain.createToken({
        name: 'KWAND',
        pattern: /AND/i,
    });
    var KWALL = chevrotain.createToken({
        name: 'KWALL',
        pattern: /ALL/i,
    });
    var KWFALSE = chevrotain.createToken({
        name: 'KWFALSE',
        pattern: /FALSE/i,
    });
    var KWTRUE = chevrotain.createToken({
        name: 'KWTRUE',
        pattern: /TRUE/i,
    });
    var Identifier = chevrotain.createToken({
        name: 'Identifier',
        pattern: /(([A-Za-z]|[0-9])([A-Za-z]|[0-9]|_)*|\`([A-Za-z0-9_]|\+|\*|\?|\-|\.|\(|\)|\[|\]|\{|\}|\^|\||\$)+\`)/i,
    });
    var TokenEnum;
    (function (TokenEnum) {
        TokenEnum["COMMENT"] = "COMMENT";
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
        TokenEnum["KWEXCHANGE"] = "KWEXCHANGE";
        TokenEnum["KWINNER"] = "KWINNER";
        TokenEnum["KWROLE"] = "KWROLE";
        TokenEnum["KWUSER"] = "KWUSER";
        TokenEnum["KWPARTIALSCAN"] = "KWPARTIALSCAN";
        TokenEnum["KWNOSCAN"] = "KWNOSCAN";
        TokenEnum["KWTRUNCATE"] = "KWTRUNCATE";
        TokenEnum["KWSETS"] = "KWSETS";
        TokenEnum["KWGROUPING"] = "KWGROUPING";
        TokenEnum["KWMORE"] = "KWMORE";
        TokenEnum["KWLESS"] = "KWLESS";
        TokenEnum["KWCURRENT"] = "KWCURRENT";
        TokenEnum["KWFOLLOWING"] = "KWFOLLOWING";
        TokenEnum["KWPRECEDING"] = "KWPRECEDING";
        TokenEnum["KWUNBOUNDED"] = "KWUNBOUNDED";
        TokenEnum["KWWINDOW"] = "KWWINDOW";
        TokenEnum["KWDIRECTORIES"] = "KWDIRECTORIES";
        TokenEnum["KWCUBE"] = "KWCUBE";
        TokenEnum["KWROLLUP"] = "KWROLLUP";
        TokenEnum["KWSKEWED"] = "KWSKEWED";
        TokenEnum["KWCASCADE"] = "KWCASCADE";
        TokenEnum["KWRESTRICT"] = "KWRESTRICT";
        TokenEnum["KWUPDATE"] = "KWUPDATE";
        TokenEnum["KWSHOW_DATABASE"] = "KWSHOW_DATABASE";
        TokenEnum["KWCONCATENATE"] = "KWCONCATENATE";
        TokenEnum["KWOPTION"] = "KWOPTION";
        TokenEnum["KWUSE"] = "KWUSE";
        TokenEnum["KWSTATISTICS"] = "KWSTATISTICS";
        TokenEnum["KWCOMPUTE"] = "KWCOMPUTE";
        TokenEnum["KWUNARCHIVE"] = "KWUNARCHIVE";
        TokenEnum["KWARCHIVE"] = "KWARCHIVE";
        TokenEnum["KWTOUCH"] = "KWTOUCH";
        TokenEnum["KWLATERAL"] = "KWLATERAL";
        TokenEnum["KWSEMI"] = "KWSEMI";
        TokenEnum["KWRECORDWRITER"] = "KWRECORDWRITER";
        TokenEnum["KWRECORDREADER"] = "KWRECORDREADER";
        TokenEnum["KWTRIGGER"] = "KWTRIGGER";
        TokenEnum["KWCURSOR"] = "KWCURSOR";
        TokenEnum["KWCONTINUE"] = "KWCONTINUE";
        TokenEnum["KWCROSS"] = "KWCROSS";
        TokenEnum["KWBINARY"] = "KWBINARY";
        TokenEnum["KWBOTH"] = "KWBOTH";
        TokenEnum["KWBETWEEN"] = "KWBETWEEN";
        TokenEnum["KWBEFORE"] = "KWBEFORE";
        TokenEnum["KWANALYZE"] = "KWANALYZE";
        TokenEnum["KWRANGE"] = "KWRANGE";
        TokenEnum["KWPURGE"] = "KWPURGE";
        TokenEnum["KWREADS"] = "KWREADS";
        TokenEnum["KWWHILE"] = "KWWHILE";
        TokenEnum["KWUNSIGNED"] = "KWUNSIGNED";
        TokenEnum["KWPROCEDURE"] = "KWPROCEDURE";
        TokenEnum["KWEXCLUSIVE"] = "KWEXCLUSIVE";
        TokenEnum["KWSHARED"] = "KWSHARED";
        TokenEnum["KWUNLOCK"] = "KWUNLOCK";
        TokenEnum["KWLOCKS"] = "KWLOCKS";
        TokenEnum["KWLOCK"] = "KWLOCK";
        TokenEnum["KWUNDO"] = "KWUNDO";
        TokenEnum["KWSSL"] = "KWSSL";
        TokenEnum["KWREVOKE"] = "KWREVOKE";
        TokenEnum["KWGRANT"] = "KWGRANT";
        TokenEnum["KWSCHEMAS"] = "KWSCHEMAS";
        TokenEnum["KWSCHEMA"] = "KWSCHEMA";
        TokenEnum["KWMATERIALIZED"] = "KWMATERIALIZED";
        TokenEnum["KWDATABASES"] = "KWDATABASES";
        TokenEnum["KWDATABASE"] = "KWDATABASE";
        TokenEnum["KWVIEW"] = "KWVIEW";
        TokenEnum["KWINTERSECT"] = "KWINTERSECT";
        TokenEnum["KWFETCH"] = "KWFETCH";
        TokenEnum["KWMINUS"] = "KWMINUS";
        TokenEnum["KWPLUS"] = "KWPLUS";
        TokenEnum["KWDELETE"] = "KWDELETE";
        TokenEnum["KWLONG"] = "KWLONG";
        TokenEnum["KWUTCTIMESTAMP"] = "KWUTCTIMESTAMP";
        TokenEnum["KWUTC"] = "KWUTC";
        TokenEnum["KWCLUSTERSTATUS"] = "KWCLUSTERSTATUS";
        TokenEnum["KWHOLD_DDLTIME"] = "KWHOLD_DDLTIME";
        TokenEnum["KWSTREAMTABLE"] = "KWSTREAMTABLE";
        TokenEnum["KWMAPJOIN"] = "KWMAPJOIN";
        TokenEnum["KWELSE"] = "KWELSE";
        TokenEnum["KWTHEN"] = "KWTHEN";
        TokenEnum["KWWHEN"] = "KWWHEN";
        TokenEnum["KWCASE"] = "KWCASE";
        TokenEnum["KWELEM_TYPE"] = "KWELEM_TYPE";
        TokenEnum["KWVALUE_TYPE"] = "KWVALUE_TYPE";
        TokenEnum["KWIDXPROPERTIES"] = "KWIDXPROPERTIES";
        TokenEnum["KWTBLPROPERTIES"] = "KWTBLPROPERTIES";
        TokenEnum["KWUNSET"] = "KWUNSET";
        TokenEnum["KWSET"] = "KWSET";
        TokenEnum["KWDBPROPERTIES"] = "KWDBPROPERTIES";
        TokenEnum["KWSERDEPROPERTIES"] = "KWSERDEPROPERTIES";
        TokenEnum["KWDEFERRED"] = "KWDEFERRED";
        TokenEnum["KWWITH"] = "KWWITH";
        TokenEnum["KWSERDE"] = "KWSERDE";
        TokenEnum["KWLOGICAL"] = "KWLOGICAL";
        TokenEnum["KWDEPENDENCY"] = "KWDEPENDENCY";
        TokenEnum["KWPRETTY"] = "KWPRETTY";
        TokenEnum["KWFORMATTED"] = "KWFORMATTED";
        TokenEnum["KWEXTENDED"] = "KWEXTENDED";
        TokenEnum["KWEND"] = "KWEND";
        TokenEnum["KWEXPLAIN"] = "KWEXPLAIN";
        TokenEnum["KWMACRO"] = "KWMACRO";
        TokenEnum["KWTEMPORARY"] = "KWTEMPORARY";
        TokenEnum["KWREGEXP"] = "KWREGEXP";
        TokenEnum["KWRLIKE"] = "KWRLIKE";
        TokenEnum["KWREPLACE"] = "KWREPLACE";
        TokenEnum["KWADD"] = "KWADD";
        TokenEnum["KWCAST"] = "KWCAST";
        TokenEnum["KWPERCENT"] = "KWPERCENT";
        TokenEnum["KWTABLESAMPLE"] = "KWTABLESAMPLE";
        TokenEnum["KWLOCATION"] = "KWLOCATION";
        TokenEnum["KWNO_DROP"] = "KWNO_DROP";
        TokenEnum["CharSetName"] = "CharSetName";
        TokenEnum["KWREADONLY"] = "KWREADONLY";
        TokenEnum["KWREAD"] = "KWREAD";
        TokenEnum["KWDISABLE"] = "KWDISABLE";
        TokenEnum["KWENABLE"] = "KWENABLE";
        TokenEnum["KWOFFLINE"] = "KWOFFLINE";
        TokenEnum["KWOF"] = "KWOF";
        TokenEnum["KWOUTPUTDRIVER"] = "KWOUTPUTDRIVER";
        TokenEnum["KWINPUTDRIVER"] = "KWINPUTDRIVER";
        TokenEnum["KWOUTPUTFORMAT"] = "KWOUTPUTFORMAT";
        TokenEnum["KWINPUTFORMAT"] = "KWINPUTFORMAT";
        TokenEnum["KWORCFILE"] = "KWORCFILE";
        TokenEnum["KWRCFILE"] = "KWRCFILE";
        TokenEnum["KWTEXTFILE"] = "KWTEXTFILE";
        TokenEnum["KWSEQUENCEFILE"] = "KWSEQUENCEFILE";
        TokenEnum["KWFILEFORMAT"] = "KWFILEFORMAT";
        TokenEnum["KWSTORED"] = "KWSTORED";
        TokenEnum["KWLINES"] = "KWLINES";
        TokenEnum["KWKEY_TYPE"] = "KWKEY_TYPE";
        TokenEnum["KWKEYS"] = "KWKEYS";
        TokenEnum["KWITEMS"] = "KWITEMS";
        TokenEnum["KWCOLLECTION"] = "KWCOLLECTION";
        TokenEnum["KWESCAPED"] = "KWESCAPED";
        TokenEnum["KWTERMINATED"] = "KWTERMINATED";
        TokenEnum["KWFIELDS"] = "KWFIELDS";
        TokenEnum["KWDELIMITED"] = "KWDELIMITED";
        TokenEnum["KWLIMIT"] = "KWLIMIT";
        TokenEnum["KWFORMAT"] = "KWFORMAT";
        TokenEnum["KWROWS"] = "KWROWS";
        TokenEnum["KWROW"] = "KWROW";
        TokenEnum["KWBUCKETS"] = "KWBUCKETS";
        TokenEnum["KWBUCKET"] = "KWBUCKET";
        TokenEnum["KWINTO"] = "KWINTO";
        TokenEnum["KWSORTED"] = "KWSORTED";
        TokenEnum["KWCLUSTERED"] = "KWCLUSTERED";
        TokenEnum["KWPARTITIONED"] = "KWPARTITIONED";
        TokenEnum["KWREDUCE"] = "KWREDUCE";
        TokenEnum["KWUNIONTYPE"] = "KWUNIONTYPE";
        TokenEnum["KWMAP"] = "KWMAP";
        TokenEnum["KWSTRUCT"] = "KWSTRUCT";
        TokenEnum["KWARRAY"] = "KWARRAY";
        TokenEnum["KWSTRING"] = "KWSTRING";
        TokenEnum["KWDECIMAL"] = "KWDECIMAL";
        TokenEnum["KWTIMESTAMP"] = "KWTIMESTAMP";
        TokenEnum["KWDATETIME"] = "KWDATETIME";
        TokenEnum["KWDATE"] = "KWDATE";
        TokenEnum["KWDOUBLE"] = "KWDOUBLE";
        TokenEnum["KWFLOAT"] = "KWFLOAT";
        TokenEnum["KWBIGINT"] = "KWBIGINT";
        TokenEnum["KWSMALLINT"] = "KWSMALLINT";
        TokenEnum["KWTINYINT"] = "KWTINYINT";
        TokenEnum["KWINT"] = "KWINT";
        TokenEnum["KWBOOLEAN"] = "KWBOOLEAN";
        TokenEnum["KWCOMMENT"] = "KWCOMMENT";
        TokenEnum["KWPROTECTION"] = "KWPROTECTION";
        TokenEnum["KWIGNORE"] = "KWIGNORE";
        TokenEnum["KWRENAME"] = "KWRENAME";
        TokenEnum["KWDROP"] = "KWDROP";
        TokenEnum["KWDESCRIBE"] = "KWDESCRIBE";
        TokenEnum["KWAFTER"] = "KWAFTER";
        TokenEnum["KWFIRST"] = "KWFIRST";
        TokenEnum["KWCHANGE"] = "KWCHANGE";
        TokenEnum["KWALTER"] = "KWALTER";
        TokenEnum["KWEXTERNAL"] = "KWEXTERNAL";
        TokenEnum["KWCREATE"] = "KWCREATE";
        TokenEnum["KWNULL"] = "KWNULL";
        TokenEnum["KWINPATH"] = "KWINPATH";
        TokenEnum["KWDATA"] = "KWDATA";
        TokenEnum["KWIMPORT"] = "KWIMPORT";
        TokenEnum["KWEXPORT"] = "KWEXPORT";
        TokenEnum["KWLOAD"] = "KWLOAD";
        TokenEnum["KWUNION"] = "KWUNION";
        TokenEnum["KWSORT"] = "KWSORT";
        TokenEnum["KWDISTRIBUTE"] = "KWDISTRIBUTE";
        TokenEnum["KWCLUSTER"] = "KWCLUSTER";
        TokenEnum["KWUSING"] = "KWUSING";
        TokenEnum["KWTRANSFORM"] = "KWTRANSFORM";
        TokenEnum["KWFOR"] = "KWFOR";
        TokenEnum["KWLOCAL"] = "KWLOCAL";
        TokenEnum["KWDIRECTORY"] = "KWDIRECTORY";
        TokenEnum["KWTO"] = "KWTO";
        TokenEnum["KWREPAIR"] = "KWREPAIR";
        TokenEnum["KWMSCK"] = "KWMSCK";
        TokenEnum["KWSHOW"] = "KWSHOW";
        TokenEnum["KWFUNCTIONS"] = "KWFUNCTIONS";
        TokenEnum["KWFUNCTION"] = "KWFUNCTION";
        TokenEnum["KWREBUILD"] = "KWREBUILD";
        TokenEnum["KWINDEXES"] = "KWINDEXES";
        TokenEnum["KWINDEX"] = "KWINDEX";
        TokenEnum["KWCOLUMNS"] = "KWCOLUMNS";
        TokenEnum["KWCOLUMN"] = "KWCOLUMN";
        TokenEnum["KWTABLES"] = "KWTABLES";
        TokenEnum["KWTABLE"] = "KWTABLE";
        TokenEnum["KWPARTITIONS"] = "KWPARTITIONS";
        TokenEnum["KWPARTITION"] = "KWPARTITION";
        TokenEnum["KWON"] = "KWON";
        TokenEnum["KWFULL"] = "KWFULL";
        TokenEnum["KWRIGHT"] = "KWRIGHT";
        TokenEnum["KWLEFT"] = "KWLEFT";
        TokenEnum["KWPRESERVE"] = "KWPRESERVE";
        TokenEnum["KWUNIQUEJOIN"] = "KWUNIQUEJOIN";
        TokenEnum["KWJOIN"] = "KWJOIN";
        TokenEnum["KWOUTER"] = "KWOUTER";
        TokenEnum["KWOUT"] = "KWOUT";
        TokenEnum["KWOVERWRITE"] = "KWOVERWRITE";
        TokenEnum["KWOVER"] = "KWOVER";
        TokenEnum["KWINSERT"] = "KWINSERT";
        TokenEnum["KWDISTINCT"] = "KWDISTINCT";
        TokenEnum["KWSELECT"] = "KWSELECT";
        TokenEnum["KWFROM"] = "KWFROM";
        TokenEnum["KWWHERE"] = "KWWHERE";
        TokenEnum["KWHAVING"] = "KWHAVING";
        TokenEnum["KWIN"] = "KWIN";
        TokenEnum["KWBY"] = "KWBY";
        TokenEnum["KWGROUP"] = "KWGROUP";
        TokenEnum["KWORDER"] = "KWORDER";
        TokenEnum["KWDESC"] = "KWDESC";
        TokenEnum["KWASC"] = "KWASC";
        TokenEnum["KWAS"] = "KWAS";
        TokenEnum["KWEXISTS"] = "KWEXISTS";
        TokenEnum["KWIS"] = "KWIS";
        TokenEnum["KWIF"] = "KWIF";
        TokenEnum["KWLIKE"] = "KWLIKE";
        TokenEnum["KWNOT"] = "KWNOT";
        TokenEnum["KWOR"] = "KWOR";
        TokenEnum["KWAND"] = "KWAND";
        TokenEnum["KWALL"] = "KWALL";
        TokenEnum["KWFALSE"] = "KWFALSE";
        TokenEnum["KWTRUE"] = "KWTRUE";
        TokenEnum["Identifier"] = "Identifier";
    })(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
    exports.Tokens = {
        COMMENT: COMMENT,
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
        KWEXCHANGE: KWEXCHANGE,
        KWINNER: KWINNER,
        KWROLE: KWROLE,
        KWUSER: KWUSER,
        KWPARTIALSCAN: KWPARTIALSCAN,
        KWNOSCAN: KWNOSCAN,
        KWTRUNCATE: KWTRUNCATE,
        KWSETS: KWSETS,
        KWGROUPING: KWGROUPING,
        KWMORE: KWMORE,
        KWLESS: KWLESS,
        KWCURRENT: KWCURRENT,
        KWFOLLOWING: KWFOLLOWING,
        KWPRECEDING: KWPRECEDING,
        KWUNBOUNDED: KWUNBOUNDED,
        KWWINDOW: KWWINDOW,
        KWDIRECTORIES: KWDIRECTORIES,
        KWCUBE: KWCUBE,
        KWROLLUP: KWROLLUP,
        KWSKEWED: KWSKEWED,
        KWCASCADE: KWCASCADE,
        KWRESTRICT: KWRESTRICT,
        KWUPDATE: KWUPDATE,
        KWSHOW_DATABASE: KWSHOW_DATABASE,
        KWCONCATENATE: KWCONCATENATE,
        KWOPTION: KWOPTION,
        KWUSE: KWUSE,
        KWSTATISTICS: KWSTATISTICS,
        KWCOMPUTE: KWCOMPUTE,
        KWUNARCHIVE: KWUNARCHIVE,
        KWARCHIVE: KWARCHIVE,
        KWTOUCH: KWTOUCH,
        KWLATERAL: KWLATERAL,
        KWSEMI: KWSEMI,
        KWRECORDWRITER: KWRECORDWRITER,
        KWRECORDREADER: KWRECORDREADER,
        KWTRIGGER: KWTRIGGER,
        KWCURSOR: KWCURSOR,
        KWCONTINUE: KWCONTINUE,
        KWCROSS: KWCROSS,
        KWBINARY: KWBINARY,
        KWBOTH: KWBOTH,
        KWBETWEEN: KWBETWEEN,
        KWBEFORE: KWBEFORE,
        KWANALYZE: KWANALYZE,
        KWRANGE: KWRANGE,
        KWPURGE: KWPURGE,
        KWREADS: KWREADS,
        KWWHILE: KWWHILE,
        KWUNSIGNED: KWUNSIGNED,
        KWPROCEDURE: KWPROCEDURE,
        KWEXCLUSIVE: KWEXCLUSIVE,
        KWSHARED: KWSHARED,
        KWUNLOCK: KWUNLOCK,
        KWLOCKS: KWLOCKS,
        KWLOCK: KWLOCK,
        KWUNDO: KWUNDO,
        KWSSL: KWSSL,
        KWREVOKE: KWREVOKE,
        KWGRANT: KWGRANT,
        KWSCHEMAS: KWSCHEMAS,
        KWSCHEMA: KWSCHEMA,
        KWMATERIALIZED: KWMATERIALIZED,
        KWDATABASES: KWDATABASES,
        KWDATABASE: KWDATABASE,
        KWVIEW: KWVIEW,
        KWINTERSECT: KWINTERSECT,
        KWFETCH: KWFETCH,
        KWMINUS: KWMINUS,
        KWPLUS: KWPLUS,
        KWDELETE: KWDELETE,
        KWLONG: KWLONG,
        KWUTCTIMESTAMP: KWUTCTIMESTAMP,
        KWUTC: KWUTC,
        KWCLUSTERSTATUS: KWCLUSTERSTATUS,
        KWHOLD_DDLTIME: KWHOLD_DDLTIME,
        KWSTREAMTABLE: KWSTREAMTABLE,
        KWMAPJOIN: KWMAPJOIN,
        KWELSE: KWELSE,
        KWTHEN: KWTHEN,
        KWWHEN: KWWHEN,
        KWCASE: KWCASE,
        KWELEM_TYPE: KWELEM_TYPE,
        KWVALUE_TYPE: KWVALUE_TYPE,
        KWIDXPROPERTIES: KWIDXPROPERTIES,
        KWTBLPROPERTIES: KWTBLPROPERTIES,
        KWUNSET: KWUNSET,
        KWSET: KWSET,
        KWDBPROPERTIES: KWDBPROPERTIES,
        KWSERDEPROPERTIES: KWSERDEPROPERTIES,
        KWDEFERRED: KWDEFERRED,
        KWWITH: KWWITH,
        KWSERDE: KWSERDE,
        KWLOGICAL: KWLOGICAL,
        KWDEPENDENCY: KWDEPENDENCY,
        KWPRETTY: KWPRETTY,
        KWFORMATTED: KWFORMATTED,
        KWEXTENDED: KWEXTENDED,
        KWEND: KWEND,
        KWEXPLAIN: KWEXPLAIN,
        KWMACRO: KWMACRO,
        KWTEMPORARY: KWTEMPORARY,
        KWREGEXP: KWREGEXP,
        KWRLIKE: KWRLIKE,
        KWREPLACE: KWREPLACE,
        KWADD: KWADD,
        KWCAST: KWCAST,
        KWPERCENT: KWPERCENT,
        KWTABLESAMPLE: KWTABLESAMPLE,
        KWLOCATION: KWLOCATION,
        KWNO_DROP: KWNO_DROP,
        CharSetName: CharSetName,
        KWREADONLY: KWREADONLY,
        KWREAD: KWREAD,
        KWDISABLE: KWDISABLE,
        KWENABLE: KWENABLE,
        KWOFFLINE: KWOFFLINE,
        KWOF: KWOF,
        KWOUTPUTDRIVER: KWOUTPUTDRIVER,
        KWINPUTDRIVER: KWINPUTDRIVER,
        KWOUTPUTFORMAT: KWOUTPUTFORMAT,
        KWINPUTFORMAT: KWINPUTFORMAT,
        KWORCFILE: KWORCFILE,
        KWRCFILE: KWRCFILE,
        KWTEXTFILE: KWTEXTFILE,
        KWSEQUENCEFILE: KWSEQUENCEFILE,
        KWFILEFORMAT: KWFILEFORMAT,
        KWSTORED: KWSTORED,
        KWLINES: KWLINES,
        KWKEY_TYPE: KWKEY_TYPE,
        KWKEYS: KWKEYS,
        KWITEMS: KWITEMS,
        KWCOLLECTION: KWCOLLECTION,
        KWESCAPED: KWESCAPED,
        KWTERMINATED: KWTERMINATED,
        KWFIELDS: KWFIELDS,
        KWDELIMITED: KWDELIMITED,
        KWLIMIT: KWLIMIT,
        KWFORMAT: KWFORMAT,
        KWROWS: KWROWS,
        KWROW: KWROW,
        KWBUCKETS: KWBUCKETS,
        KWBUCKET: KWBUCKET,
        KWINTO: KWINTO,
        KWSORTED: KWSORTED,
        KWCLUSTERED: KWCLUSTERED,
        KWPARTITIONED: KWPARTITIONED,
        KWREDUCE: KWREDUCE,
        KWUNIONTYPE: KWUNIONTYPE,
        KWMAP: KWMAP,
        KWSTRUCT: KWSTRUCT,
        KWARRAY: KWARRAY,
        KWSTRING: KWSTRING,
        KWDECIMAL: KWDECIMAL,
        KWTIMESTAMP: KWTIMESTAMP,
        KWDATETIME: KWDATETIME,
        KWDATE: KWDATE,
        KWDOUBLE: KWDOUBLE,
        KWFLOAT: KWFLOAT,
        KWBIGINT: KWBIGINT,
        KWSMALLINT: KWSMALLINT,
        KWTINYINT: KWTINYINT,
        KWINT: KWINT,
        KWBOOLEAN: KWBOOLEAN,
        KWCOMMENT: KWCOMMENT,
        KWPROTECTION: KWPROTECTION,
        KWIGNORE: KWIGNORE,
        KWRENAME: KWRENAME,
        KWDROP: KWDROP,
        KWDESCRIBE: KWDESCRIBE,
        KWAFTER: KWAFTER,
        KWFIRST: KWFIRST,
        KWCHANGE: KWCHANGE,
        KWALTER: KWALTER,
        KWEXTERNAL: KWEXTERNAL,
        KWCREATE: KWCREATE,
        KWNULL: KWNULL,
        KWINPATH: KWINPATH,
        KWDATA: KWDATA,
        KWIMPORT: KWIMPORT,
        KWEXPORT: KWEXPORT,
        KWLOAD: KWLOAD,
        KWUNION: KWUNION,
        KWSORT: KWSORT,
        KWDISTRIBUTE: KWDISTRIBUTE,
        KWCLUSTER: KWCLUSTER,
        KWUSING: KWUSING,
        KWTRANSFORM: KWTRANSFORM,
        KWFOR: KWFOR,
        KWLOCAL: KWLOCAL,
        KWDIRECTORY: KWDIRECTORY,
        KWTO: KWTO,
        KWREPAIR: KWREPAIR,
        KWMSCK: KWMSCK,
        KWSHOW: KWSHOW,
        KWFUNCTIONS: KWFUNCTIONS,
        KWFUNCTION: KWFUNCTION,
        KWREBUILD: KWREBUILD,
        KWINDEXES: KWINDEXES,
        KWINDEX: KWINDEX,
        KWCOLUMNS: KWCOLUMNS,
        KWCOLUMN: KWCOLUMN,
        KWTABLES: KWTABLES,
        KWTABLE: KWTABLE,
        KWPARTITIONS: KWPARTITIONS,
        KWPARTITION: KWPARTITION,
        KWON: KWON,
        KWFULL: KWFULL,
        KWRIGHT: KWRIGHT,
        KWLEFT: KWLEFT,
        KWPRESERVE: KWPRESERVE,
        KWUNIQUEJOIN: KWUNIQUEJOIN,
        KWJOIN: KWJOIN,
        KWOUTER: KWOUTER,
        KWOUT: KWOUT,
        KWOVERWRITE: KWOVERWRITE,
        KWOVER: KWOVER,
        KWINSERT: KWINSERT,
        KWDISTINCT: KWDISTINCT,
        KWSELECT: KWSELECT,
        KWFROM: KWFROM,
        KWWHERE: KWWHERE,
        KWHAVING: KWHAVING,
        KWIN: KWIN,
        KWBY: KWBY,
        KWGROUP: KWGROUP,
        KWORDER: KWORDER,
        KWDESC: KWDESC,
        KWASC: KWASC,
        KWAS: KWAS,
        KWEXISTS: KWEXISTS,
        KWIS: KWIS,
        KWIF: KWIF,
        KWLIKE: KWLIKE,
        KWNOT: KWNOT,
        KWOR: KWOR,
        KWAND: KWAND,
        KWALL: KWALL,
        KWFALSE: KWFALSE,
        KWTRUE: KWTRUE,
        Identifier: Identifier,
    };
    exports.tokens = [
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
    exports.Lexer = new chevrotain.Lexer(exports.tokens, {
        positionTracking: 'onlyStart',
    });
});
//# sourceMappingURL=lexer.g.js.map