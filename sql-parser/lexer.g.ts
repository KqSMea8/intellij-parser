import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const GLOBAL_ID = chevrotain.createToken({
  name: 'GLOBAL_ID',
  pattern: /\@\@([A-Za-z0-9._\$]+|\`(\\|\`\`|[^(\`|\\)])*)/,
});
const LOCAL_ID = chevrotain.createToken({
  name: 'LOCAL_ID',
  pattern: /\@([A-Za-z0-9._\$]+|\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*)/,
});
const STRING_USER_NAME = chevrotain.createToken({
  name: 'STRING_USER_NAME',
  pattern: /(\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*|[A-Za-z_\$0-9]+)\@(\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*|[A-Za-z_\$0-9]+)/,
});
const REVERSE_QUOTE_ID = chevrotain.createToken({
  name: 'REVERSE_QUOTE_ID',
  pattern: /\`[^\`]+\`/,
});
const DOT_ID = chevrotain.createToken({
  name: 'DOT_ID',
  pattern: /\.[A-Za-z_\$0-9]+/,
});
const STRING_CHARSET_NAME = chevrotain.createToken({
  name: 'STRING_CHARSET_NAME',
  pattern: /_(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)/,
});
const BIT_STRING = chevrotain.createToken({
  name: 'BIT_STRING',
  pattern: /B\'[01]+\'/,
});
const NULL_SPEC_LITERAL = chevrotain.createToken({
  name: 'NULL_SPEC_LITERAL',
  pattern: /\\N/,
});
const REAL_LITERAL = chevrotain.createToken({
  name: 'REAL_LITERAL',
  pattern: /(([0-9]+)?\.[0-9]+|[0-9]+\.E\-?[0-9]+|([0-9]+)?\.([0-9]+E\-?[0-9]+)|[0-9]+E\-?[0-9]+)/,
});
const HEXADECIMAL_LITERAL = chevrotain.createToken({
  name: 'HEXADECIMAL_LITERAL',
  pattern: /(X\'([0-9A-F][0-9A-F])+\'|0X[0-9A-F]+)/,
});
const STRING_LITERAL = chevrotain.createToken({
  name: 'STRING_LITERAL',
  pattern: /(\"(\\|\"\"|[^(\"|\\)])*\"|\'(\\|\'\'|[^(\'|\\)])*\')/,
});
const START_NATIONAL_STRING_LITERAL = chevrotain.createToken({
  name: 'START_NATIONAL_STRING_LITERAL',
  pattern: /N\'(\\|\'\'|[^(\'|\\)])*\'/,
});
const CHARSET_REVERSE_QOUTE_STRING = chevrotain.createToken({
  name: 'CHARSET_REVERSE_QOUTE_STRING',
  pattern: /\`(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)\`/,
});
const COLON_SYMB = chevrotain.createToken({
  name: 'COLON_SYMB',
  pattern: /\:/,
});
const REVERSE_QUOTE_SYMB = chevrotain.createToken({
  name: 'REVERSE_QUOTE_SYMB',
  pattern: /\`/,
});
const DOUBLE_QUOTE_SYMB = chevrotain.createToken({
  name: 'DOUBLE_QUOTE_SYMB',
  pattern: /\"/,
});
const SINGLE_QUOTE_SYMB = chevrotain.createToken({
  name: 'SINGLE_QUOTE_SYMB',
  pattern: /\'/,
});
const AT_SIGN = chevrotain.createToken({
  name: 'AT_SIGN',
  pattern: /\@/,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /\;/,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/,
});
const RR_BRACKET = chevrotain.createToken({
  name: 'RR_BRACKET',
  pattern: /\)/,
});
const LR_BRACKET = chevrotain.createToken({
  name: 'LR_BRACKET',
  pattern: /\(/,
});
const DOT = chevrotain.createToken({
  name: 'DOT',
  pattern: /\./,
});
const BIT_XOR_OP = chevrotain.createToken({
  name: 'BIT_XOR_OP',
  pattern: /\^/,
});
const BIT_AND_OP = chevrotain.createToken({
  name: 'BIT_AND_OP',
  pattern: /\&/,
});
const BIT_OR_OP = chevrotain.createToken({
  name: 'BIT_OR_OP',
  pattern: /\|/,
});
const BIT_NOT_OP = chevrotain.createToken({
  name: 'BIT_NOT_OP',
  pattern: /\~/,
});
const EXCLAMATION_SYMBOL = chevrotain.createToken({
  name: 'EXCLAMATION_SYMBOL',
  pattern: /\!/,
});
const LESS_SYMBOL = chevrotain.createToken({
  name: 'LESS_SYMBOL',
  pattern: /\</,
});
const GREATER_SYMBOL = chevrotain.createToken({
  name: 'GREATER_SYMBOL',
  pattern: /\>/,
});
const EQUAL_SYMBOL = chevrotain.createToken({
  name: 'EQUAL_SYMBOL',
  pattern: /\=/,
});
const DIV = chevrotain.createToken({
  name: 'DIV',
  pattern: /DIV/,
});
const MINUS = chevrotain.createToken({
  name: 'MINUS',
  pattern: /\-/,
});
const MINUSMINUS = chevrotain.createToken({
  name: 'MINUSMINUS',
  pattern: /\-\-/,
});
const PLUS = chevrotain.createToken({
  name: 'PLUS',
  pattern: /\+/,
});
const MODULE = chevrotain.createToken({
  name: 'MODULE',
  pattern: /\%/,
});
const DIVIDE = chevrotain.createToken({
  name: 'DIVIDE',
  pattern: /\//,
});
const STAR = chevrotain.createToken({
  name: 'STAR',
  pattern: /\*/,
});
const OR_ASSIGN = chevrotain.createToken({
  name: 'OR_ASSIGN',
  pattern: /\|\=/,
});
const XOR_ASSIGN = chevrotain.createToken({
  name: 'XOR_ASSIGN',
  pattern: /\^\=/,
});
const AND_ASSIGN = chevrotain.createToken({
  name: 'AND_ASSIGN',
  pattern: /\&\=/,
});
const MOD_ASSIGN = chevrotain.createToken({
  name: 'MOD_ASSIGN',
  pattern: /\%\=/,
});
const DIV_ASSIGN = chevrotain.createToken({
  name: 'DIV_ASSIGN',
  pattern: /\/\=/,
});
const MULT_ASSIGN = chevrotain.createToken({
  name: 'MULT_ASSIGN',
  pattern: /\*\=/,
});
const MINUS_ASSIGN = chevrotain.createToken({
  name: 'MINUS_ASSIGN',
  pattern: /\-\=/,
});
const PLUS_ASSIGN = chevrotain.createToken({
  name: 'PLUS_ASSIGN',
  pattern: /\+\=/,
});
const VAR_ASSIGN = chevrotain.createToken({
  name: 'VAR_ASSIGN',
  pattern: /\:\=/,
});
const YEARWEEK = chevrotain.createToken({
  name: 'YEARWEEK',
  pattern: /YEARWEEK/,
});
const WEIGHT_STRING = chevrotain.createToken({
  name: 'WEIGHT_STRING',
  pattern: /WEIGHT_STRING/,
});
const WEEKOFYEAR = chevrotain.createToken({
  name: 'WEEKOFYEAR',
  pattern: /WEEKOFYEAR/,
});
const WEEKDAY = chevrotain.createToken({
  name: 'WEEKDAY',
  pattern: /WEEKDAY/,
});
const WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = chevrotain.createToken({
  name: 'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS',
  pattern: /WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS/,
});
const VALIDATE_PASSWORD_STRENGTH = chevrotain.createToken({
  name: 'VALIDATE_PASSWORD_STRENGTH',
  pattern: /VALIDATE_PASSWORD_STRENGTH/,
});
const UUID_SHORT = chevrotain.createToken({
  name: 'UUID_SHORT',
  pattern: /UUID_SHORT/,
});
const UUID = chevrotain.createToken({
  name: 'UUID',
  pattern: /UUID/,
});
const UPPER = chevrotain.createToken({
  name: 'UPPER',
  pattern: /UPPER/,
});
const UPDATEXML = chevrotain.createToken({
  name: 'UPDATEXML',
  pattern: /UPDATEXML/,
});
const UNIX_TIMESTAMP = chevrotain.createToken({
  name: 'UNIX_TIMESTAMP',
  pattern: /UNIX_TIMESTAMP/,
});
const UNHEX = chevrotain.createToken({
  name: 'UNHEX',
  pattern: /UNHEX/,
});
const UNCOMPRESSED_LENGTH = chevrotain.createToken({
  name: 'UNCOMPRESSED_LENGTH',
  pattern: /UNCOMPRESSED_LENGTH/,
});
const UNCOMPRESS = chevrotain.createToken({
  name: 'UNCOMPRESS',
  pattern: /UNCOMPRESS/,
});
const UCASE = chevrotain.createToken({
  name: 'UCASE',
  pattern: /UCASE/,
});
const TO_SECONDS = chevrotain.createToken({
  name: 'TO_SECONDS',
  pattern: /TO_SECONDS/,
});
const TO_DAYS = chevrotain.createToken({
  name: 'TO_DAYS',
  pattern: /TO_DAYS/,
});
const TO_BASE64 = chevrotain.createToken({
  name: 'TO_BASE64',
  pattern: /TO_BASE64/,
});
const TIME_TO_SEC = chevrotain.createToken({
  name: 'TIME_TO_SEC',
  pattern: /TIME_TO_SEC/,
});
const TIME_FORMAT = chevrotain.createToken({
  name: 'TIME_FORMAT',
  pattern: /TIME_FORMAT/,
});
const TIMESTAMPDIFF = chevrotain.createToken({
  name: 'TIMESTAMPDIFF',
  pattern: /TIMESTAMPDIFF/,
});
const TIMESTAMPADD = chevrotain.createToken({
  name: 'TIMESTAMPADD',
  pattern: /TIMESTAMPADD/,
});
const TIMEDIFF = chevrotain.createToken({
  name: 'TIMEDIFF',
  pattern: /TIMEDIFF/,
});
const SYSTEM_USER = chevrotain.createToken({
  name: 'SYSTEM_USER',
  pattern: /SYSTEM_USER/,
});
const SUBTIME = chevrotain.createToken({
  name: 'SUBTIME',
  pattern: /SUBTIME/,
});
const SUBSTRING_INDEX = chevrotain.createToken({
  name: 'SUBSTRING_INDEX',
  pattern: /SUBSTRING_INDEX/,
});
const SUBDATE = chevrotain.createToken({
  name: 'SUBDATE',
  pattern: /SUBDATE/,
});
const ST_Y = chevrotain.createToken({
  name: 'ST_Y',
  pattern: /ST_Y/,
});
const ST_X = chevrotain.createToken({
  name: 'ST_X',
  pattern: /ST_X/,
});
const ST_WITHIN = chevrotain.createToken({
  name: 'ST_WITHIN',
  pattern: /ST_WITHIN/,
});
const ST_UNION = chevrotain.createToken({
  name: 'ST_UNION',
  pattern: /ST_UNION/,
});
const ST_TOUCHES = chevrotain.createToken({
  name: 'ST_TOUCHES',
  pattern: /ST_TOUCHES/,
});
const ST_SYMDIFFERENCE = chevrotain.createToken({
  name: 'ST_SYMDIFFERENCE',
  pattern: /ST_SYMDIFFERENCE/,
});
const ST_STARTPOINT = chevrotain.createToken({
  name: 'ST_STARTPOINT',
  pattern: /ST_STARTPOINT/,
});
const ST_SRID = chevrotain.createToken({
  name: 'ST_SRID',
  pattern: /ST_SRID/,
});
const ST_POLYGONFROMWKB = chevrotain.createToken({
  name: 'ST_POLYGONFROMWKB',
  pattern: /ST_POLYGONFROMWKB/,
});
const ST_POLYGONFROMTEXT = chevrotain.createToken({
  name: 'ST_POLYGONFROMTEXT',
  pattern: /ST_POLYGONFROMTEXT/,
});
const ST_POLYFROMWKB = chevrotain.createToken({
  name: 'ST_POLYFROMWKB',
  pattern: /ST_POLYFROMWKB/,
});
const ST_POLYFROMTEXT = chevrotain.createToken({
  name: 'ST_POLYFROMTEXT',
  pattern: /ST_POLYFROMTEXT/,
});
const ST_POINTN = chevrotain.createToken({
  name: 'ST_POINTN',
  pattern: /ST_POINTN/,
});
const ST_POINTFROMWKB = chevrotain.createToken({
  name: 'ST_POINTFROMWKB',
  pattern: /ST_POINTFROMWKB/,
});
const ST_POINTFROMTEXT = chevrotain.createToken({
  name: 'ST_POINTFROMTEXT',
  pattern: /ST_POINTFROMTEXT/,
});
const ST_OVERLAPS = chevrotain.createToken({
  name: 'ST_OVERLAPS',
  pattern: /ST_OVERLAPS/,
});
const ST_NUMPOINTS = chevrotain.createToken({
  name: 'ST_NUMPOINTS',
  pattern: /ST_NUMPOINTS/,
});
const ST_NUMINTERIORRINGS = chevrotain.createToken({
  name: 'ST_NUMINTERIORRINGS',
  pattern: /ST_NUMINTERIORRINGS/,
});
const ST_NUMINTERIORRING = chevrotain.createToken({
  name: 'ST_NUMINTERIORRING',
  pattern: /ST_NUMINTERIORRING/,
});
const ST_NUMGEOMETRIES = chevrotain.createToken({
  name: 'ST_NUMGEOMETRIES',
  pattern: /ST_NUMGEOMETRIES/,
});
const ST_LINESTRINGFROMWKB = chevrotain.createToken({
  name: 'ST_LINESTRINGFROMWKB',
  pattern: /ST_LINESTRINGFROMWKB/,
});
const ST_LINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'ST_LINESTRINGFROMTEXT',
  pattern: /ST_LINESTRINGFROMTEXT/,
});
const ST_LINEFROMWKB = chevrotain.createToken({
  name: 'ST_LINEFROMWKB',
  pattern: /ST_LINEFROMWKB/,
});
const ST_LINEFROMTEXT = chevrotain.createToken({
  name: 'ST_LINEFROMTEXT',
  pattern: /ST_LINEFROMTEXT/,
});
const ST_ISSIMPLE = chevrotain.createToken({
  name: 'ST_ISSIMPLE',
  pattern: /ST_ISSIMPLE/,
});
const ST_ISEMPTY = chevrotain.createToken({
  name: 'ST_ISEMPTY',
  pattern: /ST_ISEMPTY/,
});
const ST_ISCLOSED = chevrotain.createToken({
  name: 'ST_ISCLOSED',
  pattern: /ST_ISCLOSED/,
});
const ST_INTERSECTS = chevrotain.createToken({
  name: 'ST_INTERSECTS',
  pattern: /ST_INTERSECTS/,
});
const ST_INTERSECTION = chevrotain.createToken({
  name: 'ST_INTERSECTION',
  pattern: /ST_INTERSECTION/,
});
const ST_INTERIORRINGN = chevrotain.createToken({
  name: 'ST_INTERIORRINGN',
  pattern: /ST_INTERIORRINGN/,
});
const ST_GEOMFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMFROMWKB',
  pattern: /ST_GEOMFROMWKB/,
});
const ST_GEOMFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMFROMTEXT',
  pattern: /ST_GEOMFROMTEXT/,
});
const ST_GEOMETRYTYPE = chevrotain.createToken({
  name: 'ST_GEOMETRYTYPE',
  pattern: /ST_GEOMETRYTYPE/,
});
const ST_GEOMETRYN = chevrotain.createToken({
  name: 'ST_GEOMETRYN',
  pattern: /ST_GEOMETRYN/,
});
const ST_GEOMETRYFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMETRYFROMWKB',
  pattern: /ST_GEOMETRYFROMWKB/,
});
const ST_GEOMETRYFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMETRYFROMTEXT',
  pattern: /ST_GEOMETRYFROMTEXT/,
});
const ST_GEOMETRYCOLLECTIONFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMETRYCOLLECTIONFROMWKB',
  pattern: /ST_GEOMETRYCOLLECTIONFROMWKB/,
});
const ST_GEOMETRYCOLLECTIONFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMETRYCOLLECTIONFROMTEXT',
  pattern: /ST_GEOMETRYCOLLECTIONFROMTEXT/,
});
const ST_GEOMCOLLFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMWKB',
  pattern: /ST_GEOMCOLLFROMWKB/,
});
const ST_GEOMCOLLFROMTXT = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMTXT',
  pattern: /ST_GEOMCOLLFROMTXT/,
});
const ST_GEOMCOLLFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMTEXT',
  pattern: /ST_GEOMCOLLFROMTEXT/,
});
const ST_EXTERIORRING = chevrotain.createToken({
  name: 'ST_EXTERIORRING',
  pattern: /ST_EXTERIORRING/,
});
const ST_EQUALS = chevrotain.createToken({
  name: 'ST_EQUALS',
  pattern: /ST_EQUALS/,
});
const ST_ENVELOPE = chevrotain.createToken({
  name: 'ST_ENVELOPE',
  pattern: /ST_ENVELOPE/,
});
const ST_ENDPOINT = chevrotain.createToken({
  name: 'ST_ENDPOINT',
  pattern: /ST_ENDPOINT/,
});
const ST_DISTANCE = chevrotain.createToken({
  name: 'ST_DISTANCE',
  pattern: /ST_DISTANCE/,
});
const ST_DISJOINT = chevrotain.createToken({
  name: 'ST_DISJOINT',
  pattern: /ST_DISJOINT/,
});
const ST_DIMENSION = chevrotain.createToken({
  name: 'ST_DIMENSION',
  pattern: /ST_DIMENSION/,
});
const ST_DIFFERENCE = chevrotain.createToken({
  name: 'ST_DIFFERENCE',
  pattern: /ST_DIFFERENCE/,
});
const ST_CROSSES = chevrotain.createToken({
  name: 'ST_CROSSES',
  pattern: /ST_CROSSES/,
});
const ST_CONTAINS = chevrotain.createToken({
  name: 'ST_CONTAINS',
  pattern: /ST_CONTAINS/,
});
const ST_CENTROID = chevrotain.createToken({
  name: 'ST_CENTROID',
  pattern: /ST_CENTROID/,
});
const ST_BUFFER = chevrotain.createToken({
  name: 'ST_BUFFER',
  pattern: /ST_BUFFER/,
});
const ST_ASWKT = chevrotain.createToken({
  name: 'ST_ASWKT',
  pattern: /ST_ASWKT/,
});
const ST_ASWKB = chevrotain.createToken({
  name: 'ST_ASWKB',
  pattern: /ST_ASWKB/,
});
const ST_ASTEXT = chevrotain.createToken({
  name: 'ST_ASTEXT',
  pattern: /ST_ASTEXT/,
});
const ST_ASBINARY = chevrotain.createToken({
  name: 'ST_ASBINARY',
  pattern: /ST_ASBINARY/,
});
const ST_AREA = chevrotain.createToken({
  name: 'ST_AREA',
  pattern: /ST_AREA/,
});
const STR_TO_DATE = chevrotain.createToken({
  name: 'STR_TO_DATE',
  pattern: /STR_TO_DATE/,
});
const STRCMP = chevrotain.createToken({
  name: 'STRCMP',
  pattern: /STRCMP/,
});
const STARTPOINT = chevrotain.createToken({
  name: 'STARTPOINT',
  pattern: /STARTPOINT/,
});
const SRID = chevrotain.createToken({
  name: 'SRID',
  pattern: /SRID/,
});
const SQRT = chevrotain.createToken({
  name: 'SQRT',
  pattern: /SQRT/,
});
const SQL_THREAD_WAIT_AFTER_GTIDS = chevrotain.createToken({
  name: 'SQL_THREAD_WAIT_AFTER_GTIDS',
  pattern: /SQL_THREAD_WAIT_AFTER_GTIDS/,
});
const SOUNDEX = chevrotain.createToken({
  name: 'SOUNDEX',
  pattern: /SOUNDEX/,
});
const SLEEP = chevrotain.createToken({
  name: 'SLEEP',
  pattern: /SLEEP/,
});
const SHA2 = chevrotain.createToken({
  name: 'SHA2',
  pattern: /SHA2/,
});
const SHA1 = chevrotain.createToken({
  name: 'SHA1',
  pattern: /SHA1/,
});
const SESSION_USER = chevrotain.createToken({
  name: 'SESSION_USER',
  pattern: /SESSION_USER/,
});
const SEC_TO_TIME = chevrotain.createToken({
  name: 'SEC_TO_TIME',
  pattern: /SEC_TO_TIME/,
});
const RTRIM = chevrotain.createToken({
  name: 'RTRIM',
  pattern: /RTRIM/,
});
const RPAD = chevrotain.createToken({
  name: 'RPAD',
  pattern: /RPAD/,
});
const ROW_COUNT = chevrotain.createToken({
  name: 'ROW_COUNT',
  pattern: /ROW_COUNT/,
});
const ROUND = chevrotain.createToken({
  name: 'ROUND',
  pattern: /ROUND/,
});
const REVERSE = chevrotain.createToken({
  name: 'REVERSE',
  pattern: /REVERSE/,
});
const RELEASE_LOCK = chevrotain.createToken({
  name: 'RELEASE_LOCK',
  pattern: /RELEASE_LOCK/,
});
const RANDOM_BYTES = chevrotain.createToken({
  name: 'RANDOM_BYTES',
  pattern: /RANDOM_BYTES/,
});
const RAND = chevrotain.createToken({
  name: 'RAND',
  pattern: /RAND/,
});
const RADIANS = chevrotain.createToken({
  name: 'RADIANS',
  pattern: /RADIANS/,
});
const QUOTE = chevrotain.createToken({
  name: 'QUOTE',
  pattern: /QUOTE/,
});
const POWER = chevrotain.createToken({
  name: 'POWER',
  pattern: /POWER/,
});
const POW = chevrotain.createToken({
  name: 'POW',
  pattern: /POW/,
});
const POINTN = chevrotain.createToken({
  name: 'POINTN',
  pattern: /POINTN/,
});
const PERIOD_DIFF = chevrotain.createToken({
  name: 'PERIOD_DIFF',
  pattern: /PERIOD_DIFF/,
});
const PERIOD_ADD = chevrotain.createToken({
  name: 'PERIOD_ADD',
  pattern: /PERIOD_ADD/,
});
const OCTET_LENGTH = chevrotain.createToken({
  name: 'OCTET_LENGTH',
  pattern: /OCTET_LENGTH/,
});
const OCT = chevrotain.createToken({
  name: 'OCT',
  pattern: /OCT/,
});
const NUMPOINTS = chevrotain.createToken({
  name: 'NUMPOINTS',
  pattern: /NUMPOINTS/,
});
const NUMINTERIORRINGS = chevrotain.createToken({
  name: 'NUMINTERIORRINGS',
  pattern: /NUMINTERIORRINGS/,
});
const NUMGEOMETRIES = chevrotain.createToken({
  name: 'NUMGEOMETRIES',
  pattern: /NUMGEOMETRIES/,
});
const NULLIF = chevrotain.createToken({
  name: 'NULLIF',
  pattern: /NULLIF/,
});
const NAME_CONST = chevrotain.createToken({
  name: 'NAME_CONST',
  pattern: /NAME_CONST/,
});
const MULTIPOLYGONFROMWKB = chevrotain.createToken({
  name: 'MULTIPOLYGONFROMWKB',
  pattern: /MULTIPOLYGONFROMWKB/,
});
const POLYGONFROMWKB = chevrotain.createToken({
  name: 'POLYGONFROMWKB',
  pattern: /POLYGONFROMWKB/,
});
const MULTIPOLYGONFROMTEXT = chevrotain.createToken({
  name: 'MULTIPOLYGONFROMTEXT',
  pattern: /MULTIPOLYGONFROMTEXT/,
});
const POLYGONFROMTEXT = chevrotain.createToken({
  name: 'POLYGONFROMTEXT',
  pattern: /POLYGONFROMTEXT/,
});
const MULTIPOINTFROMWKB = chevrotain.createToken({
  name: 'MULTIPOINTFROMWKB',
  pattern: /MULTIPOINTFROMWKB/,
});
const MULTIPOINTFROMTEXT = chevrotain.createToken({
  name: 'MULTIPOINTFROMTEXT',
  pattern: /MULTIPOINTFROMTEXT/,
});
const MULTILINESTRINGFROMWKB = chevrotain.createToken({
  name: 'MULTILINESTRINGFROMWKB',
  pattern: /MULTILINESTRINGFROMWKB/,
});
const MULTILINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'MULTILINESTRINGFROMTEXT',
  pattern: /MULTILINESTRINGFROMTEXT/,
});
const MPOLYFROMWKB = chevrotain.createToken({
  name: 'MPOLYFROMWKB',
  pattern: /MPOLYFROMWKB/,
});
const POLYFROMWKB = chevrotain.createToken({
  name: 'POLYFROMWKB',
  pattern: /POLYFROMWKB/,
});
const MPOLYFROMTEXT = chevrotain.createToken({
  name: 'MPOLYFROMTEXT',
  pattern: /MPOLYFROMTEXT/,
});
const POLYFROMTEXT = chevrotain.createToken({
  name: 'POLYFROMTEXT',
  pattern: /POLYFROMTEXT/,
});
const MPOINTFROMWKB = chevrotain.createToken({
  name: 'MPOINTFROMWKB',
  pattern: /MPOINTFROMWKB/,
});
const POINTFROMWKB = chevrotain.createToken({
  name: 'POINTFROMWKB',
  pattern: /POINTFROMWKB/,
});
const MPOINTFROMTEXT = chevrotain.createToken({
  name: 'MPOINTFROMTEXT',
  pattern: /MPOINTFROMTEXT/,
});
const POINTFROMTEXT = chevrotain.createToken({
  name: 'POINTFROMTEXT',
  pattern: /POINTFROMTEXT/,
});
const MONTHNAME = chevrotain.createToken({
  name: 'MONTHNAME',
  pattern: /MONTHNAME/,
});
const MLINEFROMWKB = chevrotain.createToken({
  name: 'MLINEFROMWKB',
  pattern: /MLINEFROMWKB/,
});
const MLINEFROMTEXT = chevrotain.createToken({
  name: 'MLINEFROMTEXT',
  pattern: /MLINEFROMTEXT/,
});
const MD5 = chevrotain.createToken({
  name: 'MD5',
  pattern: /MD5/,
});
const MBRWITHIN = chevrotain.createToken({
  name: 'MBRWITHIN',
  pattern: /MBRWITHIN/,
});
const WITHIN = chevrotain.createToken({
  name: 'WITHIN',
  pattern: /WITHIN/,
});
const MBRTOUCHES = chevrotain.createToken({
  name: 'MBRTOUCHES',
  pattern: /MBRTOUCHES/,
});
const TOUCHES = chevrotain.createToken({
  name: 'TOUCHES',
  pattern: /TOUCHES/,
});
const MBROVERLAPS = chevrotain.createToken({
  name: 'MBROVERLAPS',
  pattern: /MBROVERLAPS/,
});
const OVERLAPS = chevrotain.createToken({
  name: 'OVERLAPS',
  pattern: /OVERLAPS/,
});
const MBRINTERSECTS = chevrotain.createToken({
  name: 'MBRINTERSECTS',
  pattern: /MBRINTERSECTS/,
});
const MBREQUAL = chevrotain.createToken({
  name: 'MBREQUAL',
  pattern: /MBREQUAL/,
});
const MBRDISJOINT = chevrotain.createToken({
  name: 'MBRDISJOINT',
  pattern: /MBRDISJOINT/,
});
const MBRCONTAINS = chevrotain.createToken({
  name: 'MBRCONTAINS',
  pattern: /MBRCONTAINS/,
});
const MASTER_POS_WAIT = chevrotain.createToken({
  name: 'MASTER_POS_WAIT',
  pattern: /MASTER_POS_WAIT/,
});
const MAKE_SET = chevrotain.createToken({
  name: 'MAKE_SET',
  pattern: /MAKE_SET/,
});
const MAKETIME = chevrotain.createToken({
  name: 'MAKETIME',
  pattern: /MAKETIME/,
});
const MAKEDATE = chevrotain.createToken({
  name: 'MAKEDATE',
  pattern: /MAKEDATE/,
});
const LTRIM = chevrotain.createToken({
  name: 'LTRIM',
  pattern: /LTRIM/,
});
const LPAD = chevrotain.createToken({
  name: 'LPAD',
  pattern: /LPAD/,
});
const LOWER = chevrotain.createToken({
  name: 'LOWER',
  pattern: /LOWER/,
});
const LOG2 = chevrotain.createToken({
  name: 'LOG2',
  pattern: /LOG2/,
});
const LOG10 = chevrotain.createToken({
  name: 'LOG10',
  pattern: /LOG10/,
});
const LOAD_FILE = chevrotain.createToken({
  name: 'LOAD_FILE',
  pattern: /LOAD_FILE/,
});
const LN = chevrotain.createToken({
  name: 'LN',
  pattern: /LN/,
});
const LINESTRINGFROMWKB = chevrotain.createToken({
  name: 'LINESTRINGFROMWKB',
  pattern: /LINESTRINGFROMWKB/,
});
const LINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'LINESTRINGFROMTEXT',
  pattern: /LINESTRINGFROMTEXT/,
});
const LINEFROMWKB = chevrotain.createToken({
  name: 'LINEFROMWKB',
  pattern: /LINEFROMWKB/,
});
const LINEFROMTEXT = chevrotain.createToken({
  name: 'LINEFROMTEXT',
  pattern: /LINEFROMTEXT/,
});
const LEAST = chevrotain.createToken({
  name: 'LEAST',
  pattern: /LEAST/,
});
const LCASE = chevrotain.createToken({
  name: 'LCASE',
  pattern: /LCASE/,
});
const LAST_INSERT_ID = chevrotain.createToken({
  name: 'LAST_INSERT_ID',
  pattern: /LAST_INSERT_ID/,
});
const IS_USED_LOCK = chevrotain.createToken({
  name: 'IS_USED_LOCK',
  pattern: /IS_USED_LOCK/,
});
const IS_IPV6 = chevrotain.createToken({
  name: 'IS_IPV6',
  pattern: /IS_IPV6/,
});
const IS_IPV4_MAPPED = chevrotain.createToken({
  name: 'IS_IPV4_MAPPED',
  pattern: /IS_IPV4_MAPPED/,
});
const IS_IPV4_COMPAT = chevrotain.createToken({
  name: 'IS_IPV4_COMPAT',
  pattern: /IS_IPV4_COMPAT/,
});
const IS_IPV4 = chevrotain.createToken({
  name: 'IS_IPV4',
  pattern: /IS_IPV4/,
});
const IS_FREE_LOCK = chevrotain.createToken({
  name: 'IS_FREE_LOCK',
  pattern: /IS_FREE_LOCK/,
});
const ISSIMPLE = chevrotain.createToken({
  name: 'ISSIMPLE',
  pattern: /ISSIMPLE/,
});
const ISNULL = chevrotain.createToken({
  name: 'ISNULL',
  pattern: /ISNULL/,
});
const ISEMPTY = chevrotain.createToken({
  name: 'ISEMPTY',
  pattern: /ISEMPTY/,
});
const ISCLOSED = chevrotain.createToken({
  name: 'ISCLOSED',
  pattern: /ISCLOSED/,
});
const INTERSECTS = chevrotain.createToken({
  name: 'INTERSECTS',
  pattern: /INTERSECTS/,
});
const INTERIORRINGN = chevrotain.createToken({
  name: 'INTERIORRINGN',
  pattern: /INTERIORRINGN/,
});
const INSTR = chevrotain.createToken({
  name: 'INSTR',
  pattern: /INSTR/,
});
const INET_NTOA = chevrotain.createToken({
  name: 'INET_NTOA',
  pattern: /INET_NTOA/,
});
const INET_ATON = chevrotain.createToken({
  name: 'INET_ATON',
  pattern: /INET_ATON/,
});
const INET6_NTOA = chevrotain.createToken({
  name: 'INET6_NTOA',
  pattern: /INET6_NTOA/,
});
const INET6_ATON = chevrotain.createToken({
  name: 'INET6_ATON',
  pattern: /INET6_ATON/,
});
const IFNULL = chevrotain.createToken({
  name: 'IFNULL',
  pattern: /IFNULL/,
});
const HEX = chevrotain.createToken({
  name: 'HEX',
  pattern: /HEX/,
});
const GTID_SUBTRACT = chevrotain.createToken({
  name: 'GTID_SUBTRACT',
  pattern: /GTID_SUBTRACT/,
});
const GTID_SUBSET = chevrotain.createToken({
  name: 'GTID_SUBSET',
  pattern: /GTID_SUBSET/,
});
const GREATEST = chevrotain.createToken({
  name: 'GREATEST',
  pattern: /GREATEST/,
});
const GLENGTH = chevrotain.createToken({
  name: 'GLENGTH',
  pattern: /GLENGTH/,
});
const GET_LOCK = chevrotain.createToken({
  name: 'GET_LOCK',
  pattern: /GET_LOCK/,
});
const GET_FORMAT = chevrotain.createToken({
  name: 'GET_FORMAT',
  pattern: /GET_FORMAT/,
});
const GEOMFROMWKB = chevrotain.createToken({
  name: 'GEOMFROMWKB',
  pattern: /GEOMFROMWKB/,
});
const GEOMFROMTEXT = chevrotain.createToken({
  name: 'GEOMFROMTEXT',
  pattern: /GEOMFROMTEXT/,
});
const GEOMETRYTYPE = chevrotain.createToken({
  name: 'GEOMETRYTYPE',
  pattern: /GEOMETRYTYPE/,
});
const GEOMETRYN = chevrotain.createToken({
  name: 'GEOMETRYN',
  pattern: /GEOMETRYN/,
});
const GEOMETRYFROMWKB = chevrotain.createToken({
  name: 'GEOMETRYFROMWKB',
  pattern: /GEOMETRYFROMWKB/,
});
const GEOMETRYFROMTEXT = chevrotain.createToken({
  name: 'GEOMETRYFROMTEXT',
  pattern: /GEOMETRYFROMTEXT/,
});
const GEOMETRYCOLLECTIONFROMWKB = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTIONFROMWKB',
  pattern: /GEOMETRYCOLLECTIONFROMWKB/,
});
const GEOMETRYCOLLECTIONFROMTEXT = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTIONFROMTEXT',
  pattern: /GEOMETRYCOLLECTIONFROMTEXT/,
});
const GEOMCOLLFROMWKB = chevrotain.createToken({
  name: 'GEOMCOLLFROMWKB',
  pattern: /GEOMCOLLFROMWKB/,
});
const GEOMCOLLFROMTEXT = chevrotain.createToken({
  name: 'GEOMCOLLFROMTEXT',
  pattern: /GEOMCOLLFROMTEXT/,
});
const FROM_UNIXTIME = chevrotain.createToken({
  name: 'FROM_UNIXTIME',
  pattern: /FROM_UNIXTIME/,
});
const FROM_DAYS = chevrotain.createToken({
  name: 'FROM_DAYS',
  pattern: /FROM_DAYS/,
});
const FROM_BASE64 = chevrotain.createToken({
  name: 'FROM_BASE64',
  pattern: /FROM_BASE64/,
});
const FLOOR = chevrotain.createToken({
  name: 'FLOOR',
  pattern: /FLOOR/,
});
const FIND_IN_SET = chevrotain.createToken({
  name: 'FIND_IN_SET',
  pattern: /FIND_IN_SET/,
});
const EXTRACTVALUE = chevrotain.createToken({
  name: 'EXTRACTVALUE',
  pattern: /EXTRACTVALUE/,
});
const EXTERIORRING = chevrotain.createToken({
  name: 'EXTERIORRING',
  pattern: /EXTERIORRING/,
});
const EXPORT_SET = chevrotain.createToken({
  name: 'EXPORT_SET',
  pattern: /EXPORT_SET/,
});
const EQUALS = chevrotain.createToken({
  name: 'EQUALS',
  pattern: /EQUALS/,
});
const ENVELOPE = chevrotain.createToken({
  name: 'ENVELOPE',
  pattern: /ENVELOPE/,
});
const ENDPOINT = chevrotain.createToken({
  name: 'ENDPOINT',
  pattern: /ENDPOINT/,
});
const ENCODE = chevrotain.createToken({
  name: 'ENCODE',
  pattern: /ENCODE/,
});
const ELT = chevrotain.createToken({
  name: 'ELT',
  pattern: /ELT/,
});
const DISJOINT = chevrotain.createToken({
  name: 'DISJOINT',
  pattern: /DISJOINT/,
});
const DIMENSION = chevrotain.createToken({
  name: 'DIMENSION',
  pattern: /DIMENSION/,
});
const DES_ENCRYPT = chevrotain.createToken({
  name: 'DES_ENCRYPT',
  pattern: /DES_ENCRYPT/,
});
const DES_DECRYPT = chevrotain.createToken({
  name: 'DES_DECRYPT',
  pattern: /DES_DECRYPT/,
});
const DEGREES = chevrotain.createToken({
  name: 'DEGREES',
  pattern: /DEGREES/,
});
const DECODE = chevrotain.createToken({
  name: 'DECODE',
  pattern: /DECODE/,
});
const DAYOFYEAR = chevrotain.createToken({
  name: 'DAYOFYEAR',
  pattern: /DAYOFYEAR/,
});
const DAYOFWEEK = chevrotain.createToken({
  name: 'DAYOFWEEK',
  pattern: /DAYOFWEEK/,
});
const DAYOFMONTH = chevrotain.createToken({
  name: 'DAYOFMONTH',
  pattern: /DAYOFMONTH/,
});
const DAYNAME = chevrotain.createToken({
  name: 'DAYNAME',
  pattern: /DAYNAME/,
});
const DATE_FORMAT = chevrotain.createToken({
  name: 'DATE_FORMAT',
  pattern: /DATE_FORMAT/,
});
const DATEDIFF = chevrotain.createToken({
  name: 'DATEDIFF',
  pattern: /DATEDIFF/,
});
const CROSSES = chevrotain.createToken({
  name: 'CROSSES',
  pattern: /CROSSES/,
});
const CREATE_DIGEST = chevrotain.createToken({
  name: 'CREATE_DIGEST',
  pattern: /CREATE_DIGEST/,
});
const CREATE_DH_PARAMETERS = chevrotain.createToken({
  name: 'CREATE_DH_PARAMETERS',
  pattern: /CREATE_DH_PARAMETERS/,
});
const CREATE_ASYMMETRIC_PUB_KEY = chevrotain.createToken({
  name: 'CREATE_ASYMMETRIC_PUB_KEY',
  pattern: /CREATE_ASYMMETRIC_PUB_KEY/,
});
const CREATE_ASYMMETRIC_PRIV_KEY = chevrotain.createToken({
  name: 'CREATE_ASYMMETRIC_PRIV_KEY',
  pattern: /CREATE_ASYMMETRIC_PRIV_KEY/,
});
const CRC32 = chevrotain.createToken({
  name: 'CRC32',
  pattern: /CRC32/,
});
const COT = chevrotain.createToken({
  name: 'COT',
  pattern: /COT/,
});
const CONVERT_TZ = chevrotain.createToken({
  name: 'CONVERT_TZ',
  pattern: /CONVERT_TZ/,
});
const CONNECTION_ID = chevrotain.createToken({
  name: 'CONNECTION_ID',
  pattern: /CONNECTION_ID/,
});
const CONCAT_WS = chevrotain.createToken({
  name: 'CONCAT_WS',
  pattern: /CONCAT_WS/,
});
const COLLATION = chevrotain.createToken({
  name: 'COLLATION',
  pattern: /COLLATION/,
});
const COERCIBILITY = chevrotain.createToken({
  name: 'COERCIBILITY',
  pattern: /COERCIBILITY/,
});
const CHAR_LENGTH = chevrotain.createToken({
  name: 'CHAR_LENGTH',
  pattern: /CHAR_LENGTH/,
});
const CHARSET = chevrotain.createToken({
  name: 'CHARSET',
  pattern: /CHARSET/,
});
const CHARACTER_LENGTH = chevrotain.createToken({
  name: 'CHARACTER_LENGTH',
  pattern: /CHARACTER_LENGTH/,
});
const CENTROID = chevrotain.createToken({
  name: 'CENTROID',
  pattern: /CENTROID/,
});
const CEILING = chevrotain.createToken({
  name: 'CEILING',
  pattern: /CEILING/,
});
const CEIL = chevrotain.createToken({
  name: 'CEIL',
  pattern: /CEIL/,
});
const BIT_LENGTH = chevrotain.createToken({
  name: 'BIT_LENGTH',
  pattern: /BIT_LENGTH/,
});
const BIT_COUNT = chevrotain.createToken({
  name: 'BIT_COUNT',
  pattern: /BIT_COUNT/,
});
const BENCHMARK = chevrotain.createToken({
  name: 'BENCHMARK',
  pattern: /BENCHMARK/,
});
const ATAN2 = chevrotain.createToken({
  name: 'ATAN2',
  pattern: /ATAN2/,
});
const ATAN = chevrotain.createToken({
  name: 'ATAN',
  pattern: /ATAN/,
});
const ASYMMETRIC_VERIFY = chevrotain.createToken({
  name: 'ASYMMETRIC_VERIFY',
  pattern: /ASYMMETRIC_VERIFY/,
});
const ASYMMETRIC_SIGN = chevrotain.createToken({
  name: 'ASYMMETRIC_SIGN',
  pattern: /ASYMMETRIC_SIGN/,
});
const ASYMMETRIC_ENCRYPT = chevrotain.createToken({
  name: 'ASYMMETRIC_ENCRYPT',
  pattern: /ASYMMETRIC_ENCRYPT/,
});
const ASYMMETRIC_DERIVE = chevrotain.createToken({
  name: 'ASYMMETRIC_DERIVE',
  pattern: /ASYMMETRIC_DERIVE/,
});
const ASYMMETRIC_DECRYPT = chevrotain.createToken({
  name: 'ASYMMETRIC_DECRYPT',
  pattern: /ASYMMETRIC_DECRYPT/,
});
const ASWKT = chevrotain.createToken({
  name: 'ASWKT',
  pattern: /ASWKT/,
});
const ASWKB = chevrotain.createToken({
  name: 'ASWKB',
  pattern: /ASWKB/,
});
const ASTEXT = chevrotain.createToken({
  name: 'ASTEXT',
  pattern: /ASTEXT/,
});
const ASIN = chevrotain.createToken({
  name: 'ASIN',
  pattern: /ASIN/,
});
const ASBINARY = chevrotain.createToken({
  name: 'ASBINARY',
  pattern: /ASBINARY/,
});
const AREA = chevrotain.createToken({
  name: 'AREA',
  pattern: /AREA/,
});
const AES_ENCRYPT = chevrotain.createToken({
  name: 'AES_ENCRYPT',
  pattern: /AES_ENCRYPT/,
});
const AES_DECRYPT = chevrotain.createToken({
  name: 'AES_DECRYPT',
  pattern: /AES_DECRYPT/,
});
const ADDTIME = chevrotain.createToken({
  name: 'ADDTIME',
  pattern: /ADDTIME/,
});
const ADDDATE = chevrotain.createToken({
  name: 'ADDDATE',
  pattern: /ADDDATE/,
});
const ACOS = chevrotain.createToken({
  name: 'ACOS',
  pattern: /ACOS/,
});
const ABS = chevrotain.createToken({
  name: 'ABS',
  pattern: /ABS/,
});
const MULTIPOLYGON = chevrotain.createToken({
  name: 'MULTIPOLYGON',
  pattern: /MULTIPOLYGON/,
});
const POLYGON = chevrotain.createToken({
  name: 'POLYGON',
  pattern: /POLYGON/,
});
const MULTIPOINT = chevrotain.createToken({
  name: 'MULTIPOINT',
  pattern: /MULTIPOINT/,
});
const MULTILINESTRING = chevrotain.createToken({
  name: 'MULTILINESTRING',
  pattern: /MULTILINESTRING/,
});
const LINESTRING = chevrotain.createToken({
  name: 'LINESTRING',
  pattern: /LINESTRING/,
});
const GEOMETRYCOLLECTION = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTION',
  pattern: /GEOMETRYCOLLECTION/,
});
const SERIALIZABLE = chevrotain.createToken({
  name: 'SERIALIZABLE',
  pattern: /SERIALIZABLE/,
});
const UNCOMMITTED = chevrotain.createToken({
  name: 'UNCOMMITTED',
  pattern: /UNCOMMITTED/,
});
const COMMITTED = chevrotain.createToken({
  name: 'COMMITTED',
  pattern: /COMMITTED/,
});
const REPEATABLE = chevrotain.createToken({
  name: 'REPEATABLE',
  pattern: /REPEATABLE/,
});
const PERFOMANCE_SCHEMA = chevrotain.createToken({
  name: 'PERFOMANCE_SCHEMA',
  pattern: /PERFOMANCE_SCHEMA/,
});
const NDBCLUSTER = chevrotain.createToken({
  name: 'NDBCLUSTER',
  pattern: /NDBCLUSTER/,
});
const NDB = chevrotain.createToken({
  name: 'NDB',
  pattern: /NDB/,
});
const MRG_MYISAM = chevrotain.createToken({
  name: 'MRG_MYISAM',
  pattern: /MRG_MYISAM/,
});
const MYISAM = chevrotain.createToken({
  name: 'MYISAM',
  pattern: /MYISAM/,
});
const MEMORY = chevrotain.createToken({
  name: 'MEMORY',
  pattern: /MEMORY/,
});
const INNODB = chevrotain.createToken({
  name: 'INNODB',
  pattern: /INNODB/,
});
const FEDERATED = chevrotain.createToken({
  name: 'FEDERATED',
  pattern: /FEDERATED/,
});
const CSV = chevrotain.createToken({
  name: 'CSV',
  pattern: /CSV/,
});
const BLACKHOLE = chevrotain.createToken({
  name: 'BLACKHOLE',
  pattern: /BLACKHOLE/,
});
const ARCHIVE = chevrotain.createToken({
  name: 'ARCHIVE',
  pattern: /ARCHIVE/,
});
const UTF8MB4 = chevrotain.createToken({
  name: 'UTF8MB4',
  pattern: /UTF8MB4/,
});
const UTF8MB3 = chevrotain.createToken({
  name: 'UTF8MB3',
  pattern: /UTF8MB3/,
});
const FILESIZE_LITERAL = chevrotain.createToken({
  name: 'FILESIZE_LITERAL',
  pattern: /[0-9]+(K|M|G|T)/,
});
const UTF8 = chevrotain.createToken({
  name: 'UTF8',
  pattern: /UTF8/,
});
const UTF32 = chevrotain.createToken({
  name: 'UTF32',
  pattern: /UTF32/,
});
const UTF16LE = chevrotain.createToken({
  name: 'UTF16LE',
  pattern: /UTF16LE/,
});
const UTF16 = chevrotain.createToken({
  name: 'UTF16',
  pattern: /UTF16/,
});
const UJIS = chevrotain.createToken({
  name: 'UJIS',
  pattern: /UJIS/,
});
const UCS2 = chevrotain.createToken({
  name: 'UCS2',
  pattern: /UCS2/,
});
const TIS620 = chevrotain.createToken({
  name: 'TIS620',
  pattern: /TIS620/,
});
const SWE7 = chevrotain.createToken({
  name: 'SWE7',
  pattern: /SWE7/,
});
const SJIS = chevrotain.createToken({
  name: 'SJIS',
  pattern: /SJIS/,
});
const MACROMAN = chevrotain.createToken({
  name: 'MACROMAN',
  pattern: /MACROMAN/,
});
const MACCE = chevrotain.createToken({
  name: 'MACCE',
  pattern: /MACCE/,
});
const LATIN7 = chevrotain.createToken({
  name: 'LATIN7',
  pattern: /LATIN7/,
});
const LATIN5 = chevrotain.createToken({
  name: 'LATIN5',
  pattern: /LATIN5/,
});
const LATIN2 = chevrotain.createToken({
  name: 'LATIN2',
  pattern: /LATIN2/,
});
const LATIN1 = chevrotain.createToken({
  name: 'LATIN1',
  pattern: /LATIN1/,
});
const KOI8U = chevrotain.createToken({
  name: 'KOI8U',
  pattern: /KOI8U/,
});
const KOI8R = chevrotain.createToken({
  name: 'KOI8R',
  pattern: /KOI8R/,
});
const KEYBCS2 = chevrotain.createToken({
  name: 'KEYBCS2',
  pattern: /KEYBCS2/,
});
const HP8 = chevrotain.createToken({
  name: 'HP8',
  pattern: /HP8/,
});
const HEBREW = chevrotain.createToken({
  name: 'HEBREW',
  pattern: /HEBREW/,
});
const GREEK = chevrotain.createToken({
  name: 'GREEK',
  pattern: /GREEK/,
});
const GEOSTD8 = chevrotain.createToken({
  name: 'GEOSTD8',
  pattern: /GEOSTD8/,
});
const GBK = chevrotain.createToken({
  name: 'GBK',
  pattern: /GBK/,
});
const GB2312 = chevrotain.createToken({
  name: 'GB2312',
  pattern: /GB2312/,
});
const EUCKR = chevrotain.createToken({
  name: 'EUCKR',
  pattern: /EUCKR/,
});
const EUCJPMS = chevrotain.createToken({
  name: 'EUCJPMS',
  pattern: /EUCJPMS/,
});
const DEC8 = chevrotain.createToken({
  name: 'DEC8',
  pattern: /DEC8/,
});
const CP932 = chevrotain.createToken({
  name: 'CP932',
  pattern: /CP932/,
});
const CP866 = chevrotain.createToken({
  name: 'CP866',
  pattern: /CP866/,
});
const CP852 = chevrotain.createToken({
  name: 'CP852',
  pattern: /CP852/,
});
const CP850 = chevrotain.createToken({
  name: 'CP850',
  pattern: /CP850/,
});
const CP1257 = chevrotain.createToken({
  name: 'CP1257',
  pattern: /CP1257/,
});
const CP1256 = chevrotain.createToken({
  name: 'CP1256',
  pattern: /CP1256/,
});
const CP1251 = chevrotain.createToken({
  name: 'CP1251',
  pattern: /CP1251/,
});
const CP1250 = chevrotain.createToken({
  name: 'CP1250',
  pattern: /CP1250/,
});
const TWO_DECIMAL = chevrotain.createToken({
  name: 'TWO_DECIMAL',
  pattern: /2/,
});
const ONE_DECIMAL = chevrotain.createToken({
  name: 'ONE_DECIMAL',
  pattern: /1/,
});
const BIG5 = chevrotain.createToken({
  name: 'BIG5',
  pattern: /BIG5/,
});
const ASCII = chevrotain.createToken({
  name: 'ASCII',
  pattern: /ASCII/,
});
const ARMSCII8 = chevrotain.createToken({
  name: 'ARMSCII8',
  pattern: /ARMSCII8/,
});
const PRIVILEGES = chevrotain.createToken({
  name: 'PRIVILEGES',
  pattern: /PRIVILEGES/,
});
const SUPER = chevrotain.createToken({
  name: 'SUPER',
  pattern: /SUPER/,
});
const SHUTDOWN = chevrotain.createToken({
  name: 'SHUTDOWN',
  pattern: /SHUTDOWN/,
});
const RELOAD = chevrotain.createToken({
  name: 'RELOAD',
  pattern: /RELOAD/,
});
const EXECUTE = chevrotain.createToken({
  name: 'EXECUTE',
  pattern: /EXECUTE/,
});
const ROUTINE = chevrotain.createToken({
  name: 'ROUTINE',
  pattern: /ROUTINE/,
});
const WEEK = chevrotain.createToken({
  name: 'WEEK',
  pattern: /WEEK/,
});
const QUARTER = chevrotain.createToken({
  name: 'QUARTER',
  pattern: /QUARTER/,
});
const INTERNAL = chevrotain.createToken({
  name: 'INTERNAL',
  pattern: /INTERNAL/,
});
const JIS = chevrotain.createToken({
  name: 'JIS',
  pattern: /JIS/,
});
const EUR = chevrotain.createToken({
  name: 'EUR',
  pattern: /EUR/,
});
const XML = chevrotain.createToken({
  name: 'XML',
  pattern: /XML/,
});
const XA = chevrotain.createToken({
  name: 'XA',
  pattern: /XA/,
});
const X509 = chevrotain.createToken({
  name: 'X509',
  pattern: /X509/,
});
const ZERO_DECIMAL = chevrotain.createToken({
  name: 'ZERO_DECIMAL',
  pattern: /0/,
});
const DECIMAL_LITERAL = chevrotain.createToken({
  name: 'DECIMAL_LITERAL',
  pattern: /[0-9]+/,
});
const WRAPPER = chevrotain.createToken({
  name: 'WRAPPER',
  pattern: /WRAPPER/,
});
const WORK = chevrotain.createToken({
  name: 'WORK',
  pattern: /WORK/,
});
const WITHOUT = chevrotain.createToken({
  name: 'WITHOUT',
  pattern: /WITHOUT/,
});
const WARNINGS = chevrotain.createToken({
  name: 'WARNINGS',
  pattern: /WARNINGS/,
});
const WAIT = chevrotain.createToken({
  name: 'WAIT',
  pattern: /WAIT/,
});
const VIEW = chevrotain.createToken({
  name: 'VIEW',
  pattern: /VIEW/,
});
const VARIABLES = chevrotain.createToken({
  name: 'VARIABLES',
  pattern: /VARIABLES/,
});
const VALIDATION = chevrotain.createToken({
  name: 'VALIDATION',
  pattern: /VALIDATION/,
});
const USER_RESOURCES = chevrotain.createToken({
  name: 'USER_RESOURCES',
  pattern: /USER_RESOURCES/,
});
const USE_FRM = chevrotain.createToken({
  name: 'USE_FRM',
  pattern: /USE_FRM/,
});
const UPGRADE = chevrotain.createToken({
  name: 'UPGRADE',
  pattern: /UPGRADE/,
});
const UNTIL = chevrotain.createToken({
  name: 'UNTIL',
  pattern: /UNTIL/,
});
const UNKNOWN = chevrotain.createToken({
  name: 'UNKNOWN',
  pattern: /UNKNOWN/,
});
const UNINSTALL = chevrotain.createToken({
  name: 'UNINSTALL',
  pattern: /UNINSTALL/,
});
const UNDO_BUFFER_SIZE = chevrotain.createToken({
  name: 'UNDO_BUFFER_SIZE',
  pattern: /UNDO_BUFFER_SIZE/,
});
const UNDOFILE = chevrotain.createToken({
  name: 'UNDOFILE',
  pattern: /UNDOFILE/,
});
const UNDEFINED = chevrotain.createToken({
  name: 'UNDEFINED',
  pattern: /UNDEFINED/,
});
const TRUNCATE = chevrotain.createToken({
  name: 'TRUNCATE',
  pattern: /TRUNCATE/,
});
const TRIGGERS = chevrotain.createToken({
  name: 'TRIGGERS',
  pattern: /TRIGGERS/,
});
const TRANSACTION = chevrotain.createToken({
  name: 'TRANSACTION',
  pattern: /TRANSACTION/,
});
const TRADITIONAL = chevrotain.createToken({
  name: 'TRADITIONAL',
  pattern: /TRADITIONAL/,
});
const THAN = chevrotain.createToken({
  name: 'THAN',
  pattern: /THAN/,
});
const TEMPTABLE = chevrotain.createToken({
  name: 'TEMPTABLE',
  pattern: /TEMPTABLE/,
});
const TEMPORARY = chevrotain.createToken({
  name: 'TEMPORARY',
  pattern: /TEMPORARY/,
});
const TABLESPACE = chevrotain.createToken({
  name: 'TABLESPACE',
  pattern: /TABLESPACE/,
});
const TABLES = chevrotain.createToken({
  name: 'TABLES',
  pattern: /TABLES/,
});
const SWITCHES = chevrotain.createToken({
  name: 'SWITCHES',
  pattern: /SWITCHES/,
});
const SWAPS = chevrotain.createToken({
  name: 'SWAPS',
  pattern: /SWAPS/,
});
const SUSPEND = chevrotain.createToken({
  name: 'SUSPEND',
  pattern: /SUSPEND/,
});
const SUBPARTITIONS = chevrotain.createToken({
  name: 'SUBPARTITIONS',
  pattern: /SUBPARTITIONS/,
});
const SUBPARTITION = chevrotain.createToken({
  name: 'SUBPARTITION',
  pattern: /SUBPARTITION/,
});
const SUBJECT = chevrotain.createToken({
  name: 'SUBJECT',
  pattern: /SUBJECT/,
});
const STORAGE = chevrotain.createToken({
  name: 'STORAGE',
  pattern: /STORAGE/,
});
const STOP = chevrotain.createToken({
  name: 'STOP',
  pattern: /STOP/,
});
const STATUS = chevrotain.createToken({
  name: 'STATUS',
  pattern: /STATUS/,
});
const STATS_SAMPLE_PAGES = chevrotain.createToken({
  name: 'STATS_SAMPLE_PAGES',
  pattern: /STATS_SAMPLE_PAGES/,
});
const STATS_PERSISTENT = chevrotain.createToken({
  name: 'STATS_PERSISTENT',
  pattern: /STATS_PERSISTENT/,
});
const STATS_AUTO_RECALC = chevrotain.createToken({
  name: 'STATS_AUTO_RECALC',
  pattern: /STATS_AUTO_RECALC/,
});
const STARTS = chevrotain.createToken({
  name: 'STARTS',
  pattern: /STARTS/,
});
const SQL_THREAD = chevrotain.createToken({
  name: 'SQL_THREAD',
  pattern: /SQL_THREAD/,
});
const SQL_NO_CACHE = chevrotain.createToken({
  name: 'SQL_NO_CACHE',
  pattern: /SQL_NO_CACHE/,
});
const SQL_CACHE = chevrotain.createToken({
  name: 'SQL_CACHE',
  pattern: /SQL_CACHE/,
});
const SQL_BUFFER_RESULT = chevrotain.createToken({
  name: 'SQL_BUFFER_RESULT',
  pattern: /SQL_BUFFER_RESULT/,
});
const SQL_BEFORE_GTIDS = chevrotain.createToken({
  name: 'SQL_BEFORE_GTIDS',
  pattern: /SQL_BEFORE_GTIDS/,
});
const SQL_AFTER_MTS_GAPS = chevrotain.createToken({
  name: 'SQL_AFTER_MTS_GAPS',
  pattern: /SQL_AFTER_MTS_GAPS/,
});
const SQL_AFTER_GTIDS = chevrotain.createToken({
  name: 'SQL_AFTER_GTIDS',
  pattern: /SQL_AFTER_GTIDS/,
});
const SOURCE = chevrotain.createToken({
  name: 'SOURCE',
  pattern: /SOURCE/,
});
const SOUNDS = chevrotain.createToken({
  name: 'SOUNDS',
  pattern: /SOUNDS/,
});
const SONAME = chevrotain.createToken({
  name: 'SONAME',
  pattern: /SONAME/,
});
const SOME = chevrotain.createToken({
  name: 'SOME',
  pattern: /SOME/,
});
const SOCKET = chevrotain.createToken({
  name: 'SOCKET',
  pattern: /SOCKET/,
});
const SNAPSHOT = chevrotain.createToken({
  name: 'SNAPSHOT',
  pattern: /SNAPSHOT/,
});
const SLOW = chevrotain.createToken({
  name: 'SLOW',
  pattern: /SLOW/,
});
const SLAVE = chevrotain.createToken({
  name: 'SLAVE',
  pattern: /SLAVE/,
});
const SIMPLE = chevrotain.createToken({
  name: 'SIMPLE',
  pattern: /SIMPLE/,
});
const SHARED = chevrotain.createToken({
  name: 'SHARED',
  pattern: /SHARED/,
});
const SHARE = chevrotain.createToken({
  name: 'SHARE',
  pattern: /SHARE/,
});
const SHA = chevrotain.createToken({
  name: 'SHA',
  pattern: /SHA/,
});
const SESSION = chevrotain.createToken({
  name: 'SESSION',
  pattern: /SESSION/,
});
const SECURITY = chevrotain.createToken({
  name: 'SECURITY',
  pattern: /SECURITY/,
});
const SCHEDULE = chevrotain.createToken({
  name: 'SCHEDULE',
  pattern: /SCHEDULE/,
});
const SAVEPOINT = chevrotain.createToken({
  name: 'SAVEPOINT',
  pattern: /SAVEPOINT/,
});
const POINT = chevrotain.createToken({
  name: 'POINT',
  pattern: /POINT/,
});
const ROW_FORMAT = chevrotain.createToken({
  name: 'ROW_FORMAT',
  pattern: /ROW_FORMAT/,
});
const ROTATE = chevrotain.createToken({
  name: 'ROTATE',
  pattern: /ROTATE/,
});
const ROLLUP = chevrotain.createToken({
  name: 'ROLLUP',
  pattern: /ROLLUP/,
});
const ROLLBACK = chevrotain.createToken({
  name: 'ROLLBACK',
  pattern: /ROLLBACK/,
});
const RETURNS = chevrotain.createToken({
  name: 'RETURNS',
  pattern: /RETURNS/,
});
const RESUME = chevrotain.createToken({
  name: 'RESUME',
  pattern: /RESUME/,
});
const RESET = chevrotain.createToken({
  name: 'RESET',
  pattern: /RESET/,
});
const REPLICATE_WILD_IGNORE_TABLE = chevrotain.createToken({
  name: 'REPLICATE_WILD_IGNORE_TABLE',
  pattern: /REPLICATE_WILD_IGNORE_TABLE/,
});
const REPLICATE_WILD_DO_TABLE = chevrotain.createToken({
  name: 'REPLICATE_WILD_DO_TABLE',
  pattern: /REPLICATE_WILD_DO_TABLE/,
});
const REPLICATE_REWRITE_DB = chevrotain.createToken({
  name: 'REPLICATE_REWRITE_DB',
  pattern: /REPLICATE_REWRITE_DB/,
});
const REPLICATE_IGNORE_TABLE = chevrotain.createToken({
  name: 'REPLICATE_IGNORE_TABLE',
  pattern: /REPLICATE_IGNORE_TABLE/,
});
const REPLICATE_IGNORE_DB = chevrotain.createToken({
  name: 'REPLICATE_IGNORE_DB',
  pattern: /REPLICATE_IGNORE_DB/,
});
const REPLICATE_DO_TABLE = chevrotain.createToken({
  name: 'REPLICATE_DO_TABLE',
  pattern: /REPLICATE_DO_TABLE/,
});
const REPLICATE_DO_DB = chevrotain.createToken({
  name: 'REPLICATE_DO_DB',
  pattern: /REPLICATE_DO_DB/,
});
const REPAIR = chevrotain.createToken({
  name: 'REPAIR',
  pattern: /REPAIR/,
});
const REORGANIZE = chevrotain.createToken({
  name: 'REORGANIZE',
  pattern: /REORGANIZE/,
});
const REMOVE = chevrotain.createToken({
  name: 'REMOVE',
  pattern: /REMOVE/,
});
const RELAYLOG = chevrotain.createToken({
  name: 'RELAYLOG',
  pattern: /RELAYLOG/,
});
const RELAY_LOG_POS = chevrotain.createToken({
  name: 'RELAY_LOG_POS',
  pattern: /RELAY_LOG_POS/,
});
const RELAY_LOG_FILE = chevrotain.createToken({
  name: 'RELAY_LOG_FILE',
  pattern: /RELAY_LOG_FILE/,
});
const RELAY = chevrotain.createToken({
  name: 'RELAY',
  pattern: /RELAY/,
});
const REDUNDANT = chevrotain.createToken({
  name: 'REDUNDANT',
  pattern: /REDUNDANT/,
});
const REDO_BUFFER_SIZE = chevrotain.createToken({
  name: 'REDO_BUFFER_SIZE',
  pattern: /REDO_BUFFER_SIZE/,
});
const BUFFER = chevrotain.createToken({
  name: 'BUFFER',
  pattern: /BUFFER/,
});
const RECOVER = chevrotain.createToken({
  name: 'RECOVER',
  pattern: /RECOVER/,
});
const REBUILD = chevrotain.createToken({
  name: 'REBUILD',
  pattern: /REBUILD/,
});
const QUICK = chevrotain.createToken({
  name: 'QUICK',
  pattern: /QUICK/,
});
const QUERY = chevrotain.createToken({
  name: 'QUERY',
  pattern: /QUERY/,
});
const PROXY = chevrotain.createToken({
  name: 'PROXY',
  pattern: /PROXY/,
});
const PROFILES = chevrotain.createToken({
  name: 'PROFILES',
  pattern: /PROFILES/,
});
const PROFILE = chevrotain.createToken({
  name: 'PROFILE',
  pattern: /PROFILE/,
});
const PROCESSLIST = chevrotain.createToken({
  name: 'PROCESSLIST',
  pattern: /PROCESSLIST/,
});
const PROCESS = chevrotain.createToken({
  name: 'PROCESS',
  pattern: /PROCESS/,
});
const PREV = chevrotain.createToken({
  name: 'PREV',
  pattern: /PREV/,
});
const PRESERVE = chevrotain.createToken({
  name: 'PRESERVE',
  pattern: /PRESERVE/,
});
const PREPARE = chevrotain.createToken({
  name: 'PREPARE',
  pattern: /PREPARE/,
});
const PRECEDES = chevrotain.createToken({
  name: 'PRECEDES',
  pattern: /PRECEDES/,
});
const PLUGINS = chevrotain.createToken({
  name: 'PLUGINS',
  pattern: /PLUGINS/,
});
const PLUGIN_DIR = chevrotain.createToken({
  name: 'PLUGIN_DIR',
  pattern: /PLUGIN_DIR/,
});
const PLUGIN = chevrotain.createToken({
  name: 'PLUGIN',
  pattern: /PLUGIN/,
});
const PHASE = chevrotain.createToken({
  name: 'PHASE',
  pattern: /PHASE/,
});
const PARTITIONS = chevrotain.createToken({
  name: 'PARTITIONS',
  pattern: /PARTITIONS/,
});
const PARTITIONING = chevrotain.createToken({
  name: 'PARTITIONING',
  pattern: /PARTITIONING/,
});
const PARTIAL = chevrotain.createToken({
  name: 'PARTIAL',
  pattern: /PARTIAL/,
});
const PARSER = chevrotain.createToken({
  name: 'PARSER',
  pattern: /PARSER/,
});
const PAGE = chevrotain.createToken({
  name: 'PAGE',
  pattern: /PAGE/,
});
const PACK_KEYS = chevrotain.createToken({
  name: 'PACK_KEYS',
  pattern: /PACK_KEYS/,
});
const OWNER = chevrotain.createToken({
  name: 'OWNER',
  pattern: /OWNER/,
});
const OPTIONS = chevrotain.createToken({
  name: 'OPTIONS',
  pattern: /OPTIONS/,
});
const OPTIMIZER_COSTS = chevrotain.createToken({
  name: 'OPTIMIZER_COSTS',
  pattern: /OPTIMIZER_COSTS/,
});
const COS = chevrotain.createToken({
  name: 'COS',
  pattern: /COS/,
});
const OPEN = chevrotain.createToken({
  name: 'OPEN',
  pattern: /OPEN/,
});
const ONLY = chevrotain.createToken({
  name: 'ONLY',
  pattern: /ONLY/,
});
const ONLINE = chevrotain.createToken({
  name: 'ONLINE',
  pattern: /ONLINE/,
});
const OLD_PASSWORD = chevrotain.createToken({
  name: 'OLD_PASSWORD',
  pattern: /OLD_PASSWORD/,
});
const OJ = chevrotain.createToken({
  name: 'OJ',
  pattern: /OJ/,
});
const OFFSET = chevrotain.createToken({
  name: 'OFFSET',
  pattern: /OFFSET/,
});
const OFFLINE = chevrotain.createToken({
  name: 'OFFLINE',
  pattern: /OFFLINE/,
});
const NONE = chevrotain.createToken({
  name: 'NONE',
  pattern: /NONE/,
});
const ONE = chevrotain.createToken({
  name: 'ONE',
  pattern: /ONE/,
});
const NODEGROUP = chevrotain.createToken({
  name: 'NODEGROUP',
  pattern: /NODEGROUP/,
});
const NEXT = chevrotain.createToken({
  name: 'NEXT',
  pattern: /NEXT/,
});
const NEVER = chevrotain.createToken({
  name: 'NEVER',
  pattern: /NEVER/,
});
const NCHAR = chevrotain.createToken({
  name: 'NCHAR',
  pattern: /NCHAR/,
});
const NAMES = chevrotain.createToken({
  name: 'NAMES',
  pattern: /NAMES/,
});
const MYSQL = chevrotain.createToken({
  name: 'MYSQL',
  pattern: /MYSQL/,
});
const MUTEX = chevrotain.createToken({
  name: 'MUTEX',
  pattern: /MUTEX/,
});
const MODIFY = chevrotain.createToken({
  name: 'MODIFY',
  pattern: /MODIFY/,
});
const MODE = chevrotain.createToken({
  name: 'MODE',
  pattern: /MODE/,
});
const MIN_ROWS = chevrotain.createToken({
  name: 'MIN_ROWS',
  pattern: /MIN_ROWS/,
});
const MIGRATE = chevrotain.createToken({
  name: 'MIGRATE',
  pattern: /MIGRATE/,
});
const MID = chevrotain.createToken({
  name: 'MID',
  pattern: /MID/,
});
const MERGE = chevrotain.createToken({
  name: 'MERGE',
  pattern: /MERGE/,
});
const MAX_USER_CONNECTIONS = chevrotain.createToken({
  name: 'MAX_USER_CONNECTIONS',
  pattern: /MAX_USER_CONNECTIONS/,
});
const MAX_UPDATES_PER_HOUR = chevrotain.createToken({
  name: 'MAX_UPDATES_PER_HOUR',
  pattern: /MAX_UPDATES_PER_HOUR/,
});
const MAX_SIZE = chevrotain.createToken({
  name: 'MAX_SIZE',
  pattern: /MAX_SIZE/,
});
const MAX_ROWS = chevrotain.createToken({
  name: 'MAX_ROWS',
  pattern: /MAX_ROWS/,
});
const MAX_QUERIES_PER_HOUR = chevrotain.createToken({
  name: 'MAX_QUERIES_PER_HOUR',
  pattern: /MAX_QUERIES_PER_HOUR/,
});
const MAX_CONNECTIONS_PER_HOUR = chevrotain.createToken({
  name: 'MAX_CONNECTIONS_PER_HOUR',
  pattern: /MAX_CONNECTIONS_PER_HOUR/,
});
const MASTER_USER = chevrotain.createToken({
  name: 'MASTER_USER',
  pattern: /MASTER_USER/,
});
const MASTER_TLS_VERSION = chevrotain.createToken({
  name: 'MASTER_TLS_VERSION',
  pattern: /MASTER_TLS_VERSION/,
});
const VERSION = chevrotain.createToken({
  name: 'VERSION',
  pattern: /VERSION/,
});
const MASTER_SSL_KEY = chevrotain.createToken({
  name: 'MASTER_SSL_KEY',
  pattern: /MASTER_SSL_KEY/,
});
const MASTER_SSL_CRLPATH = chevrotain.createToken({
  name: 'MASTER_SSL_CRLPATH',
  pattern: /MASTER_SSL_CRLPATH/,
});
const MASTER_SSL_CRL = chevrotain.createToken({
  name: 'MASTER_SSL_CRL',
  pattern: /MASTER_SSL_CRL/,
});
const MASTER_SSL_CIPHER = chevrotain.createToken({
  name: 'MASTER_SSL_CIPHER',
  pattern: /MASTER_SSL_CIPHER/,
});
const MASTER_SSL_CERT = chevrotain.createToken({
  name: 'MASTER_SSL_CERT',
  pattern: /MASTER_SSL_CERT/,
});
const MASTER_SSL_CAPATH = chevrotain.createToken({
  name: 'MASTER_SSL_CAPATH',
  pattern: /MASTER_SSL_CAPATH/,
});
const MASTER_SSL_CA = chevrotain.createToken({
  name: 'MASTER_SSL_CA',
  pattern: /MASTER_SSL_CA/,
});
const MASTER_RETRY_COUNT = chevrotain.createToken({
  name: 'MASTER_RETRY_COUNT',
  pattern: /MASTER_RETRY_COUNT/,
});
const MASTER_PORT = chevrotain.createToken({
  name: 'MASTER_PORT',
  pattern: /MASTER_PORT/,
});
const MASTER_PASSWORD = chevrotain.createToken({
  name: 'MASTER_PASSWORD',
  pattern: /MASTER_PASSWORD/,
});
const PASSWORD = chevrotain.createToken({
  name: 'PASSWORD',
  pattern: /PASSWORD/,
});
const MASTER_LOG_POS = chevrotain.createToken({
  name: 'MASTER_LOG_POS',
  pattern: /MASTER_LOG_POS/,
});
const MASTER_LOG_FILE = chevrotain.createToken({
  name: 'MASTER_LOG_FILE',
  pattern: /MASTER_LOG_FILE/,
});
const MASTER_HOST = chevrotain.createToken({
  name: 'MASTER_HOST',
  pattern: /MASTER_HOST/,
});
const MASTER_HEARTBEAT_PERIOD = chevrotain.createToken({
  name: 'MASTER_HEARTBEAT_PERIOD',
  pattern: /MASTER_HEARTBEAT_PERIOD/,
});
const MASTER_DELAY = chevrotain.createToken({
  name: 'MASTER_DELAY',
  pattern: /MASTER_DELAY/,
});
const MASTER_CONNECT_RETRY = chevrotain.createToken({
  name: 'MASTER_CONNECT_RETRY',
  pattern: /MASTER_CONNECT_RETRY/,
});
const MASTER_AUTO_POSITION = chevrotain.createToken({
  name: 'MASTER_AUTO_POSITION',
  pattern: /MASTER_AUTO_POSITION/,
});
const LOGS = chevrotain.createToken({
  name: 'LOGS',
  pattern: /LOGS/,
});
const LOGFILE = chevrotain.createToken({
  name: 'LOGFILE',
  pattern: /LOGFILE/,
});
const LIST = chevrotain.createToken({
  name: 'LIST',
  pattern: /LIST/,
});
const LEVEL = chevrotain.createToken({
  name: 'LEVEL',
  pattern: /LEVEL/,
});
const LESS = chevrotain.createToken({
  name: 'LESS',
  pattern: /LESS/,
});
const LEAVES = chevrotain.createToken({
  name: 'LEAVES',
  pattern: /LEAVES/,
});
const LAST = chevrotain.createToken({
  name: 'LAST',
  pattern: /LAST/,
});
const LANGUAGE = chevrotain.createToken({
  name: 'LANGUAGE',
  pattern: /LANGUAGE/,
});
const KEY_BLOCK_SIZE = chevrotain.createToken({
  name: 'KEY_BLOCK_SIZE',
  pattern: /KEY_BLOCK_SIZE/,
});
const JSON = chevrotain.createToken({
  name: 'JSON',
  pattern: /JSON/,
});
const ISSUER = chevrotain.createToken({
  name: 'ISSUER',
  pattern: /ISSUER/,
});
const ISOLATION = chevrotain.createToken({
  name: 'ISOLATION',
  pattern: /ISOLATION/,
});
const ISO = chevrotain.createToken({
  name: 'ISO',
  pattern: /ISO/,
});
const IPC = chevrotain.createToken({
  name: 'IPC',
  pattern: /IPC/,
});
const IO_THREAD = chevrotain.createToken({
  name: 'IO_THREAD',
  pattern: /IO_THREAD/,
});
const INVOKER = chevrotain.createToken({
  name: 'INVOKER',
  pattern: /INVOKER/,
});
const INSTANCE = chevrotain.createToken({
  name: 'INSTANCE',
  pattern: /INSTANCE/,
});
const TAN = chevrotain.createToken({
  name: 'TAN',
  pattern: /TAN/,
});
const INSTALL = chevrotain.createToken({
  name: 'INSTALL',
  pattern: /INSTALL/,
});
const INSERT_METHOD = chevrotain.createToken({
  name: 'INSERT_METHOD',
  pattern: /INSERT_METHOD/,
});
const INPLACE = chevrotain.createToken({
  name: 'INPLACE',
  pattern: /INPLACE/,
});
const INITIAL_SIZE = chevrotain.createToken({
  name: 'INITIAL_SIZE',
  pattern: /INITIAL_SIZE/,
});
const INDEXES = chevrotain.createToken({
  name: 'INDEXES',
  pattern: /INDEXES/,
});
const IMPORT = chevrotain.createToken({
  name: 'IMPORT',
  pattern: /IMPORT/,
});
const IGNORE_SERVER_IDS = chevrotain.createToken({
  name: 'IGNORE_SERVER_IDS',
  pattern: /IGNORE_SERVER_IDS/,
});
const IDENTIFIED = chevrotain.createToken({
  name: 'IDENTIFIED',
  pattern: /IDENTIFIED/,
});
const HOSTS = chevrotain.createToken({
  name: 'HOSTS',
  pattern: /HOSTS/,
});
const HOST = chevrotain.createToken({
  name: 'HOST',
  pattern: /HOST/,
});
const HELP = chevrotain.createToken({
  name: 'HELP',
  pattern: /HELP/,
});
const HASH = chevrotain.createToken({
  name: 'HASH',
  pattern: /HASH/,
});
const HANDLER = chevrotain.createToken({
  name: 'HANDLER',
  pattern: /HANDLER/,
});
const GROUP_REPLICATION = chevrotain.createToken({
  name: 'GROUP_REPLICATION',
  pattern: /GROUP_REPLICATION/,
});
const REPLICATION = chevrotain.createToken({
  name: 'REPLICATION',
  pattern: /REPLICATION/,
});
const GRANTS = chevrotain.createToken({
  name: 'GRANTS',
  pattern: /GRANTS/,
});
const GLOBAL = chevrotain.createToken({
  name: 'GLOBAL',
  pattern: /GLOBAL/,
});
const GENERAL = chevrotain.createToken({
  name: 'GENERAL',
  pattern: /GENERAL/,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/,
});
const FOLLOWS = chevrotain.createToken({
  name: 'FOLLOWS',
  pattern: /FOLLOWS/,
});
const FLUSH = chevrotain.createToken({
  name: 'FLUSH',
  pattern: /FLUSH/,
});
const FIXED = chevrotain.createToken({
  name: 'FIXED',
  pattern: /FIXED/,
});
const FIRST = chevrotain.createToken({
  name: 'FIRST',
  pattern: /FIRST/,
});
const FILTER = chevrotain.createToken({
  name: 'FILTER',
  pattern: /FILTER/,
});
const FILE_BLOCK_SIZE = chevrotain.createToken({
  name: 'FILE_BLOCK_SIZE',
  pattern: /FILE_BLOCK_SIZE/,
});
const FIELDS = chevrotain.createToken({
  name: 'FIELDS',
  pattern: /FIELDS/,
});
const FIELD = chevrotain.createToken({
  name: 'FIELD',
  pattern: /FIELD/,
});
const FAULTS = chevrotain.createToken({
  name: 'FAULTS',
  pattern: /FAULTS/,
});
const FAST = chevrotain.createToken({
  name: 'FAST',
  pattern: /FAST/,
});
const EXTENT_SIZE = chevrotain.createToken({
  name: 'EXTENT_SIZE',
  pattern: /EXTENT_SIZE/,
});
const EXTENDED = chevrotain.createToken({
  name: 'EXTENDED',
  pattern: /EXTENDED/,
});
const EXPORT = chevrotain.createToken({
  name: 'EXPORT',
  pattern: /EXPORT/,
});
const PORT = chevrotain.createToken({
  name: 'PORT',
  pattern: /PORT/,
});
const EXPIRE = chevrotain.createToken({
  name: 'EXPIRE',
  pattern: /EXPIRE/,
});
const PI = chevrotain.createToken({
  name: 'PI',
  pattern: /PI/,
});
const EXCLUSIVE = chevrotain.createToken({
  name: 'EXCLUSIVE',
  pattern: /EXCLUSIVE/,
});
const EXCHANGE = chevrotain.createToken({
  name: 'EXCHANGE',
  pattern: /EXCHANGE/,
});
const EVERY = chevrotain.createToken({
  name: 'EVERY',
  pattern: /EVERY/,
});
const EVENTS = chevrotain.createToken({
  name: 'EVENTS',
  pattern: /EVENTS/,
});
const EVENT = chevrotain.createToken({
  name: 'EVENT',
  pattern: /EVENT/,
});
const EVEN = chevrotain.createToken({
  name: 'EVEN',
  pattern: /EVEN/,
});
const ERRORS = chevrotain.createToken({
  name: 'ERRORS',
  pattern: /ERRORS/,
});
const ERROR = chevrotain.createToken({
  name: 'ERROR',
  pattern: /ERROR/,
});
const ENGINES = chevrotain.createToken({
  name: 'ENGINES',
  pattern: /ENGINES/,
});
const ENGINE = chevrotain.createToken({
  name: 'ENGINE',
  pattern: /ENGINE/,
});
const ENDS = chevrotain.createToken({
  name: 'ENDS',
  pattern: /ENDS/,
});
const ENCRYPTION = chevrotain.createToken({
  name: 'ENCRYPTION',
  pattern: /ENCRYPTION/,
});
const ENCRYPT = chevrotain.createToken({
  name: 'ENCRYPT',
  pattern: /ENCRYPT/,
});
const ENABLE = chevrotain.createToken({
  name: 'ENABLE',
  pattern: /ENABLE/,
});
const DYNAMIC = chevrotain.createToken({
  name: 'DYNAMIC',
  pattern: /DYNAMIC/,
});
const DUPLICATE = chevrotain.createToken({
  name: 'DUPLICATE',
  pattern: /DUPLICATE/,
});
const DUMPFILE = chevrotain.createToken({
  name: 'DUMPFILE',
  pattern: /DUMPFILE/,
});
const DISK = chevrotain.createToken({
  name: 'DISK',
  pattern: /DISK/,
});
const DISCARD = chevrotain.createToken({
  name: 'DISCARD',
  pattern: /DISCARD/,
});
const DISABLE = chevrotain.createToken({
  name: 'DISABLE',
  pattern: /DISABLE/,
});
const DIRECTORY = chevrotain.createToken({
  name: 'DIRECTORY',
  pattern: /DIRECTORY/,
});
const DES_KEY_FILE = chevrotain.createToken({
  name: 'DES_KEY_FILE',
  pattern: /DES_KEY_FILE/,
});
const DELAY_KEY_WRITE = chevrotain.createToken({
  name: 'DELAY_KEY_WRITE',
  pattern: /DELAY_KEY_WRITE/,
});
const DEFINER = chevrotain.createToken({
  name: 'DEFINER',
  pattern: /DEFINER/,
});
const DEFAULT_AUTH = chevrotain.createToken({
  name: 'DEFAULT_AUTH',
  pattern: /DEFAULT_AUTH/,
});
const DEALLOCATE = chevrotain.createToken({
  name: 'DEALLOCATE',
  pattern: /DEALLOCATE/,
});
const LOCATE = chevrotain.createToken({
  name: 'LOCATE',
  pattern: /LOCATE/,
});
const DATAFILE = chevrotain.createToken({
  name: 'DATAFILE',
  pattern: /DATAFILE/,
});
const CPU = chevrotain.createToken({
  name: 'CPU',
  pattern: /CPU/,
});
const COPY = chevrotain.createToken({
  name: 'COPY',
  pattern: /COPY/,
});
const CONTRIBUTORS = chevrotain.createToken({
  name: 'CONTRIBUTORS',
  pattern: /CONTRIBUTORS/,
});
const CONTEXT = chevrotain.createToken({
  name: 'CONTEXT',
  pattern: /CONTEXT/,
});
const CONTAINS = chevrotain.createToken({
  name: 'CONTAINS',
  pattern: /CONTAINS/,
});
const CONSISTENT = chevrotain.createToken({
  name: 'CONSISTENT',
  pattern: /CONSISTENT/,
});
const CONNECTION = chevrotain.createToken({
  name: 'CONNECTION',
  pattern: /CONNECTION/,
});
const CONCURRENT = chevrotain.createToken({
  name: 'CONCURRENT',
  pattern: /CONCURRENT/,
});
const COMPRESSION = chevrotain.createToken({
  name: 'COMPRESSION',
  pattern: /COMPRESSION/,
});
const COMPRESSED = chevrotain.createToken({
  name: 'COMPRESSED',
  pattern: /COMPRESSED/,
});
const COMPRESS = chevrotain.createToken({
  name: 'COMPRESS',
  pattern: /COMPRESS/,
});
const COMPLETION = chevrotain.createToken({
  name: 'COMPLETION',
  pattern: /COMPLETION/,
});
const COMPACT = chevrotain.createToken({
  name: 'COMPACT',
  pattern: /COMPACT/,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /COMMENT/,
});
const COLUMN_FORMAT = chevrotain.createToken({
  name: 'COLUMN_FORMAT',
  pattern: /COLUMN_FORMAT/,
});
const FORMAT = chevrotain.createToken({
  name: 'FORMAT',
  pattern: /FORMAT/,
});
const COLUMNS = chevrotain.createToken({
  name: 'COLUMNS',
  pattern: /COLUMNS/,
});
const CODE = chevrotain.createToken({
  name: 'CODE',
  pattern: /CODE/,
});
const COALESCE = chevrotain.createToken({
  name: 'COALESCE',
  pattern: /COALESCE/,
});
const CLIENT = chevrotain.createToken({
  name: 'CLIENT',
  pattern: /CLIENT/,
});
const CIPHER = chevrotain.createToken({
  name: 'CIPHER',
  pattern: /CIPHER/,
});
const CHECKSUM = chevrotain.createToken({
  name: 'CHECKSUM',
  pattern: /CHECKSUM/,
});
const CHANNEL = chevrotain.createToken({
  name: 'CHANNEL',
  pattern: /CHANNEL/,
});
const CHANGED = chevrotain.createToken({
  name: 'CHANGED',
  pattern: /CHANGED/,
});
const CHAIN = chevrotain.createToken({
  name: 'CHAIN',
  pattern: /CHAIN/,
});
const CASCADED = chevrotain.createToken({
  name: 'CASCADED',
  pattern: /CASCADED/,
});
const CACHE = chevrotain.createToken({
  name: 'CACHE',
  pattern: /CACHE/,
});
const BTREE = chevrotain.createToken({
  name: 'BTREE',
  pattern: /BTREE/,
});
const BOOLEAN = chevrotain.createToken({
  name: 'BOOLEAN',
  pattern: /BOOLEAN/,
});
const BOOL = chevrotain.createToken({
  name: 'BOOL',
  pattern: /BOOL/,
});
const BLOCK = chevrotain.createToken({
  name: 'BLOCK',
  pattern: /BLOCK/,
});
const BEGIN = chevrotain.createToken({
  name: 'BEGIN',
  pattern: /BEGIN/,
});
const AVG_ROW_LENGTH = chevrotain.createToken({
  name: 'AVG_ROW_LENGTH',
  pattern: /AVG_ROW_LENGTH/,
});
const LENGTH = chevrotain.createToken({
  name: 'LENGTH',
  pattern: /LENGTH/,
});
const AUTO_INCREMENT = chevrotain.createToken({
  name: 'AUTO_INCREMENT',
  pattern: /AUTO_INCREMENT/,
});
const AUTOEXTEND_SIZE = chevrotain.createToken({
  name: 'AUTOEXTEND_SIZE',
  pattern: /AUTOEXTEND_SIZE/,
});
const END = chevrotain.createToken({
  name: 'END',
  pattern: /END/,
});
const AUTOCOMMIT = chevrotain.createToken({
  name: 'AUTOCOMMIT',
  pattern: /AUTOCOMMIT/,
});
const COMMIT = chevrotain.createToken({
  name: 'COMMIT',
  pattern: /COMMIT/,
});
const AUTHORS = chevrotain.createToken({
  name: 'AUTHORS',
  pattern: /AUTHORS/,
});
const ANY = chevrotain.createToken({
  name: 'ANY',
  pattern: /ANY/,
});
const ALGORITHM = chevrotain.createToken({
  name: 'ALGORITHM',
  pattern: /ALGORITHM/,
});
const AGGREGATE = chevrotain.createToken({
  name: 'AGGREGATE',
  pattern: /AGGREGATE/,
});
const AFTER = chevrotain.createToken({
  name: 'AFTER',
  pattern: /AFTER/,
});
const ACTION = chevrotain.createToken({
  name: 'ACTION',
  pattern: /ACTION/,
});
const ACCOUNT = chevrotain.createToken({
  name: 'ACCOUNT',
  pattern: /ACCOUNT/,
});
const UTC_TIMESTAMP = chevrotain.createToken({
  name: 'UTC_TIMESTAMP',
  pattern: /UTC_TIMESTAMP/,
});
const UTC_TIME = chevrotain.createToken({
  name: 'UTC_TIME',
  pattern: /UTC_TIME/,
});
const UTC_DATE = chevrotain.createToken({
  name: 'UTC_DATE',
  pattern: /UTC_DATE/,
});
const TRIM = chevrotain.createToken({
  name: 'TRIM',
  pattern: /TRIM/,
});
const SYSDATE = chevrotain.createToken({
  name: 'SYSDATE',
  pattern: /SYSDATE/,
});
const SUBSTRING = chevrotain.createToken({
  name: 'SUBSTRING',
  pattern: /SUBSTRING/,
});
const STRING = chevrotain.createToken({
  name: 'STRING',
  pattern: /STRING/,
});
const SUBSTR = chevrotain.createToken({
  name: 'SUBSTR',
  pattern: /SUBSTR/,
});
const POSITION = chevrotain.createToken({
  name: 'POSITION',
  pattern: /POSITION/,
});
const NOW = chevrotain.createToken({
  name: 'NOW',
  pattern: /NOW/,
});
const LOCALTIMESTAMP = chevrotain.createToken({
  name: 'LOCALTIMESTAMP',
  pattern: /LOCALTIMESTAMP/,
});
const EXTRACT = chevrotain.createToken({
  name: 'EXTRACT',
  pattern: /EXTRACT/,
});
const DATE_SUB = chevrotain.createToken({
  name: 'DATE_SUB',
  pattern: /DATE_SUB/,
});
const DATE_ADD = chevrotain.createToken({
  name: 'DATE_ADD',
  pattern: /DATE_ADD/,
});
const CURTIME = chevrotain.createToken({
  name: 'CURTIME',
  pattern: /CURTIME/,
});
const CURDATE = chevrotain.createToken({
  name: 'CURDATE',
  pattern: /CURDATE/,
});
const LOCALTIME = chevrotain.createToken({
  name: 'LOCALTIME',
  pattern: /LOCALTIME/,
});
const LOCAL = chevrotain.createToken({
  name: 'LOCAL',
  pattern: /LOCAL/,
});
const CURRENT_TIMESTAMP = chevrotain.createToken({
  name: 'CURRENT_TIMESTAMP',
  pattern: /CURRENT_TIMESTAMP/,
});
const CURRENT_TIME = chevrotain.createToken({
  name: 'CURRENT_TIME',
  pattern: /CURRENT_TIME/,
});
const CURRENT_DATE = chevrotain.createToken({
  name: 'CURRENT_DATE',
  pattern: /CURRENT_DATE/,
});
const VARIANCE = chevrotain.createToken({
  name: 'VARIANCE',
  pattern: /VARIANCE/,
});
const VAR_SAMP = chevrotain.createToken({
  name: 'VAR_SAMP',
  pattern: /VAR_SAMP/,
});
const VAR_POP = chevrotain.createToken({
  name: 'VAR_POP',
  pattern: /VAR_POP/,
});
const SUM = chevrotain.createToken({
  name: 'SUM',
  pattern: /SUM/,
});
const STDDEV_SAMP = chevrotain.createToken({
  name: 'STDDEV_SAMP',
  pattern: /STDDEV_SAMP/,
});
const STDDEV_POP = chevrotain.createToken({
  name: 'STDDEV_POP',
  pattern: /STDDEV_POP/,
});
const STDDEV = chevrotain.createToken({
  name: 'STDDEV',
  pattern: /STDDEV/,
});
const STD = chevrotain.createToken({
  name: 'STD',
  pattern: /STD/,
});
const GROUP_CONCAT = chevrotain.createToken({
  name: 'GROUP_CONCAT',
  pattern: /GROUP_CONCAT/,
});
const CONCAT = chevrotain.createToken({
  name: 'CONCAT',
  pattern: /CONCAT/,
});
const COUNT = chevrotain.createToken({
  name: 'COUNT',
  pattern: /COUNT/,
});
const BIT_XOR = chevrotain.createToken({
  name: 'BIT_XOR',
  pattern: /BIT_XOR/,
});
const BIT_OR = chevrotain.createToken({
  name: 'BIT_OR',
  pattern: /BIT_OR/,
});
const BIT_AND = chevrotain.createToken({
  name: 'BIT_AND',
  pattern: /BIT_AND/,
});
const BIT = chevrotain.createToken({
  name: 'BIT',
  pattern: /BIT/,
});
const AVG = chevrotain.createToken({
  name: 'AVG',
  pattern: /AVG/,
});
const DAY_MICROSECOND = chevrotain.createToken({
  name: 'DAY_MICROSECOND',
  pattern: /DAY_MICROSECOND/,
});
const HOUR_MICROSECOND = chevrotain.createToken({
  name: 'HOUR_MICROSECOND',
  pattern: /HOUR_MICROSECOND/,
});
const MINUTE_MICROSECOND = chevrotain.createToken({
  name: 'MINUTE_MICROSECOND',
  pattern: /MINUTE_MICROSECOND/,
});
const SECOND_MICROSECOND = chevrotain.createToken({
  name: 'SECOND_MICROSECOND',
  pattern: /SECOND_MICROSECOND/,
});
const MICROSECOND = chevrotain.createToken({
  name: 'MICROSECOND',
  pattern: /MICROSECOND/,
});
const MINUTE_SECOND = chevrotain.createToken({
  name: 'MINUTE_SECOND',
  pattern: /MINUTE_SECOND/,
});
const HOUR_SECOND = chevrotain.createToken({
  name: 'HOUR_SECOND',
  pattern: /HOUR_SECOND/,
});
const HOUR_MINUTE = chevrotain.createToken({
  name: 'HOUR_MINUTE',
  pattern: /HOUR_MINUTE/,
});
const DAY_SECOND = chevrotain.createToken({
  name: 'DAY_SECOND',
  pattern: /DAY_SECOND/,
});
const SECOND = chevrotain.createToken({
  name: 'SECOND',
  pattern: /SECOND/,
});
const DAY_MINUTE = chevrotain.createToken({
  name: 'DAY_MINUTE',
  pattern: /DAY_MINUTE/,
});
const MINUTE = chevrotain.createToken({
  name: 'MINUTE',
  pattern: /MINUTE/,
});
const DAY_HOUR = chevrotain.createToken({
  name: 'DAY_HOUR',
  pattern: /DAY_HOUR/,
});
const HOUR = chevrotain.createToken({
  name: 'HOUR',
  pattern: /HOUR/,
});
const DAY = chevrotain.createToken({
  name: 'DAY',
  pattern: /DAY/,
});
const YEAR_MONTH = chevrotain.createToken({
  name: 'YEAR_MONTH',
  pattern: /YEAR_MONTH/,
});
const MONTH = chevrotain.createToken({
  name: 'MONTH',
  pattern: /MONTH/,
});
const ENUM = chevrotain.createToken({
  name: 'ENUM',
  pattern: /ENUM/,
});
const LONGTEXT = chevrotain.createToken({
  name: 'LONGTEXT',
  pattern: /LONGTEXT/,
});
const MEDIUMTEXT = chevrotain.createToken({
  name: 'MEDIUMTEXT',
  pattern: /MEDIUMTEXT/,
});
const TINYTEXT = chevrotain.createToken({
  name: 'TINYTEXT',
  pattern: /TINYTEXT/,
});
const LONGBLOB = chevrotain.createToken({
  name: 'LONGBLOB',
  pattern: /LONGBLOB/,
});
const MEDIUMBLOB = chevrotain.createToken({
  name: 'MEDIUMBLOB',
  pattern: /MEDIUMBLOB/,
});
const TINYBLOB = chevrotain.createToken({
  name: 'TINYBLOB',
  pattern: /TINYBLOB/,
});
const BLOB = chevrotain.createToken({
  name: 'BLOB',
  pattern: /BLOB/,
});
const VARBINARY = chevrotain.createToken({
  name: 'VARBINARY',
  pattern: /VARBINARY/,
});
const BINARY = chevrotain.createToken({
  name: 'BINARY',
  pattern: /BINARY/,
});
const CHARSET_NAME_L = chevrotain.createToken({
  name: 'CHARSET_NAME_L',
  pattern: /(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)/,
});
const VARCHAR = chevrotain.createToken({
  name: 'VARCHAR',
  pattern: /VARCHAR/,
});
const YEAR = chevrotain.createToken({
  name: 'YEAR',
  pattern: /YEAR/,
});
const DATETIME = chevrotain.createToken({
  name: 'DATETIME',
  pattern: /DATETIME/,
});
const TIMESTAMP = chevrotain.createToken({
  name: 'TIMESTAMP',
  pattern: /TIMESTAMP/,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/,
});
const NUMERIC = chevrotain.createToken({
  name: 'NUMERIC',
  pattern: /NUMERIC/,
});
const DECIMAL = chevrotain.createToken({
  name: 'DECIMAL',
  pattern: /DECIMAL/,
});
const FLOAT = chevrotain.createToken({
  name: 'FLOAT',
  pattern: /FLOAT/,
});
const DOUBLE = chevrotain.createToken({
  name: 'DOUBLE',
  pattern: /DOUBLE/,
});
const REAL = chevrotain.createToken({
  name: 'REAL',
  pattern: /REAL/,
});
const BIGINT = chevrotain.createToken({
  name: 'BIGINT',
  pattern: /BIGINT/,
});
const INTEGER = chevrotain.createToken({
  name: 'INTEGER',
  pattern: /INTEGER/,
});
const MEDIUMINT = chevrotain.createToken({
  name: 'MEDIUMINT',
  pattern: /MEDIUMINT/,
});
const MEDIUM = chevrotain.createToken({
  name: 'MEDIUM',
  pattern: /MEDIUM/,
});
const SMALLINT = chevrotain.createToken({
  name: 'SMALLINT',
  pattern: /SMALLINT/,
});
const TINYINT = chevrotain.createToken({
  name: 'TINYINT',
  pattern: /TINYINT/,
});
const OVERWRITE = chevrotain.createToken({
  name: 'OVERWRITE',
  pattern: /OVERWRITE/,
});
const ZEROFILL = chevrotain.createToken({
  name: 'ZEROFILL',
  pattern: /ZEROFILL/,
});
const XOR = chevrotain.createToken({
  name: 'XOR',
  pattern: /XOR/,
});
const WITH = chevrotain.createToken({
  name: 'WITH',
  pattern: /WITH/,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/,
});
const WHERE = chevrotain.createToken({
  name: 'WHERE',
  pattern: /WHERE/,
});
const WHEN = chevrotain.createToken({
  name: 'WHEN',
  pattern: /WHEN/,
});
const VALUES = chevrotain.createToken({
  name: 'VALUES',
  pattern: /VALUES/,
});
const USING = chevrotain.createToken({
  name: 'USING',
  pattern: /USING/,
});
const SIN = chevrotain.createToken({
  name: 'SIN',
  pattern: /SIN/,
});
const USAGE = chevrotain.createToken({
  name: 'USAGE',
  pattern: /USAGE/,
});
const USA = chevrotain.createToken({
  name: 'USA',
  pattern: /USA/,
});
const UPDATE = chevrotain.createToken({
  name: 'UPDATE',
  pattern: /UPDATE/,
});
const DATE = chevrotain.createToken({
  name: 'DATE',
  pattern: /DATE/,
});
const UNSIGNED = chevrotain.createToken({
  name: 'UNSIGNED',
  pattern: /UNSIGNED/,
});
const SIGNED = chevrotain.createToken({
  name: 'SIGNED',
  pattern: /SIGNED/,
});
const SIGN = chevrotain.createToken({
  name: 'SIGN',
  pattern: /SIGN/,
});
const UNLOCK = chevrotain.createToken({
  name: 'UNLOCK',
  pattern: /UNLOCK/,
});
const UNIQUE = chevrotain.createToken({
  name: 'UNIQUE',
  pattern: /UNIQUE/,
});
const UNION = chevrotain.createToken({
  name: 'UNION',
  pattern: /UNION/,
});
const UNDO = chevrotain.createToken({
  name: 'UNDO',
  pattern: /UNDO/,
});
const DO = chevrotain.createToken({
  name: 'DO',
  pattern: /DO/,
});
const TRUE = chevrotain.createToken({
  name: 'TRUE',
  pattern: /TRUE/,
});
const TRIGGER = chevrotain.createToken({
  name: 'TRIGGER',
  pattern: /TRIGGER/,
});
const TRAILING = chevrotain.createToken({
  name: 'TRAILING',
  pattern: /TRAILING/,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/,
});
const TERMINATED = chevrotain.createToken({
  name: 'TERMINATED',
  pattern: /TERMINATED/,
});
const TABLE = chevrotain.createToken({
  name: 'TABLE',
  pattern: /TABLE/,
});
const STRAIGHT_JOIN = chevrotain.createToken({
  name: 'STRAIGHT_JOIN',
  pattern: /STRAIGHT_JOIN/,
});
const STARTING = chevrotain.createToken({
  name: 'STARTING',
  pattern: /STARTING/,
});
const START = chevrotain.createToken({
  name: 'START',
  pattern: /START/,
});
const SQL_SMALL_RESULT = chevrotain.createToken({
  name: 'SQL_SMALL_RESULT',
  pattern: /SQL_SMALL_RESULT/,
});
const SQL_CALC_FOUND_ROWS = chevrotain.createToken({
  name: 'SQL_CALC_FOUND_ROWS',
  pattern: /SQL_CALC_FOUND_ROWS/,
});
const FOUND_ROWS = chevrotain.createToken({
  name: 'FOUND_ROWS',
  pattern: /FOUND_ROWS/,
});
const ROWS = chevrotain.createToken({
  name: 'ROWS',
  pattern: /ROWS/,
});
const FOUND = chevrotain.createToken({
  name: 'FOUND',
  pattern: /FOUND/,
});
const SQL_BIG_RESULT = chevrotain.createToken({
  name: 'SQL_BIG_RESULT',
  pattern: /SQL_BIG_RESULT/,
});
const SQLWARNING = chevrotain.createToken({
  name: 'SQLWARNING',
  pattern: /SQLWARNING/,
});
const SQLSTATE = chevrotain.createToken({
  name: 'SQLSTATE',
  pattern: /SQLSTATE/,
});
const SQLEXCEPTION = chevrotain.createToken({
  name: 'SQLEXCEPTION',
  pattern: /SQLEXCEPTION/,
});
const SQL = chevrotain.createToken({
  name: 'SQL',
  pattern: /SQL/,
});
const SPATIAL = chevrotain.createToken({
  name: 'SPATIAL',
  pattern: /SPATIAL/,
});
const SHOW = chevrotain.createToken({
  name: 'SHOW',
  pattern: /SHOW/,
});
const SEPARATOR = chevrotain.createToken({
  name: 'SEPARATOR',
  pattern: /SEPARATOR/,
});
const SET = chevrotain.createToken({
  name: 'SET',
  pattern: /SET/,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/,
});
const SCHEMAS = chevrotain.createToken({
  name: 'SCHEMAS',
  pattern: /SCHEMAS/,
});
const SCHEMA = chevrotain.createToken({
  name: 'SCHEMA',
  pattern: /SCHEMA/,
});
const RLIKE = chevrotain.createToken({
  name: 'RLIKE',
  pattern: /RLIKE/,
});
const RIGHT = chevrotain.createToken({
  name: 'RIGHT',
  pattern: /RIGHT/,
});
const REVOKE = chevrotain.createToken({
  name: 'REVOKE',
  pattern: /REVOKE/,
});
const RETURN = chevrotain.createToken({
  name: 'RETURN',
  pattern: /RETURN/,
});
const RESTRICT = chevrotain.createToken({
  name: 'RESTRICT',
  pattern: /RESTRICT/,
});
const REQUIRE = chevrotain.createToken({
  name: 'REQUIRE',
  pattern: /REQUIRE/,
});
const REPLACE = chevrotain.createToken({
  name: 'REPLACE',
  pattern: /REPLACE/,
});
const REPEAT = chevrotain.createToken({
  name: 'REPEAT',
  pattern: /REPEAT/,
});
const RENAME = chevrotain.createToken({
  name: 'RENAME',
  pattern: /RENAME/,
});
const NAME = chevrotain.createToken({
  name: 'NAME',
  pattern: /NAME/,
});
const RELEASE = chevrotain.createToken({
  name: 'RELEASE',
  pattern: /RELEASE/,
});
const REGEXP = chevrotain.createToken({
  name: 'REGEXP',
  pattern: /REGEXP/,
});
const REFERENCES = chevrotain.createToken({
  name: 'REFERENCES',
  pattern: /REFERENCES/,
});
const READS = chevrotain.createToken({
  name: 'READS',
  pattern: /READS/,
});
const READ = chevrotain.createToken({
  name: 'READ',
  pattern: /READ/,
});
const RANGE = chevrotain.createToken({
  name: 'RANGE',
  pattern: /RANGE/,
});
const PURGE = chevrotain.createToken({
  name: 'PURGE',
  pattern: /PURGE/,
});
const PROCEDURE = chevrotain.createToken({
  name: 'PROCEDURE',
  pattern: /PROCEDURE/,
});
const PRIMARY = chevrotain.createToken({
  name: 'PRIMARY',
  pattern: /PRIMARY/,
});
const PARTITION = chevrotain.createToken({
  name: 'PARTITION',
  pattern: /PARTITION/,
});
const OUTFILE = chevrotain.createToken({
  name: 'OUTFILE',
  pattern: /OUTFILE/,
});
const OUTER = chevrotain.createToken({
  name: 'OUTER',
  pattern: /OUTER/,
});
const ORDER = chevrotain.createToken({
  name: 'ORDER',
  pattern: /ORDER/,
});
const ORD = chevrotain.createToken({
  name: 'ORD',
  pattern: /ORD/,
});
const OPTIONALLY = chevrotain.createToken({
  name: 'OPTIONALLY',
  pattern: /OPTIONALLY/,
});
const OPTION = chevrotain.createToken({
  name: 'OPTION',
  pattern: /OPTION/,
});
const OPTIMIZE = chevrotain.createToken({
  name: 'OPTIMIZE',
  pattern: /OPTIMIZE/,
});
const NULL_LITERAL = chevrotain.createToken({
  name: 'NULL_LITERAL',
  pattern: /NULL/,
});
const NO_WRITE_TO_BINLOG = chevrotain.createToken({
  name: 'NO_WRITE_TO_BINLOG',
  pattern: /NO_WRITE_TO_BINLOG/,
});
const BINLOG = chevrotain.createToken({
  name: 'BINLOG',
  pattern: /BINLOG/,
});
const LOG = chevrotain.createToken({
  name: 'LOG',
  pattern: /LOG/,
});
const WRITE = chevrotain.createToken({
  name: 'WRITE',
  pattern: /WRITE/,
});
const NOT = chevrotain.createToken({
  name: 'NOT',
  pattern: /NOT/,
});
const NATURAL = chevrotain.createToken({
  name: 'NATURAL',
  pattern: /NATURAL/,
});
const MODIFIES = chevrotain.createToken({
  name: 'MODIFIES',
  pattern: /MODIFIES/,
});
const MOD = chevrotain.createToken({
  name: 'MOD',
  pattern: /MOD/,
});
const MAXVALUE = chevrotain.createToken({
  name: 'MAXVALUE',
  pattern: /MAXVALUE/,
});
const VALUE = chevrotain.createToken({
  name: 'VALUE',
  pattern: /VALUE/,
});
const MAX = chevrotain.createToken({
  name: 'MAX',
  pattern: /MAX/,
});
const MATCH = chevrotain.createToken({
  name: 'MATCH',
  pattern: /MATCH/,
});
const MASTER_SSL_VERIFY_SERVER_CERT = chevrotain.createToken({
  name: 'MASTER_SSL_VERIFY_SERVER_CERT',
  pattern: /MASTER_SSL_VERIFY_SERVER_CERT/,
});
const SERVER = chevrotain.createToken({
  name: 'SERVER',
  pattern: /SERVER/,
});
const MASTER_SSL = chevrotain.createToken({
  name: 'MASTER_SSL',
  pattern: /MASTER_SSL/,
});
const SSL = chevrotain.createToken({
  name: 'SSL',
  pattern: /SSL/,
});
const MASTER_BIND = chevrotain.createToken({
  name: 'MASTER_BIND',
  pattern: /MASTER_BIND/,
});
const BIN = chevrotain.createToken({
  name: 'BIN',
  pattern: /BIN/,
});
const MASTER = chevrotain.createToken({
  name: 'MASTER',
  pattern: /MASTER/,
});
const LOW_PRIORITY = chevrotain.createToken({
  name: 'LOW_PRIORITY',
  pattern: /LOW_PRIORITY/,
});
const LOOP = chevrotain.createToken({
  name: 'LOOP',
  pattern: /LOOP/,
});
const LOCK = chevrotain.createToken({
  name: 'LOCK',
  pattern: /LOCK/,
});
const LOAD = chevrotain.createToken({
  name: 'LOAD',
  pattern: /LOAD/,
});
const LINES = chevrotain.createToken({
  name: 'LINES',
  pattern: /LINES/,
});
const LINEAR = chevrotain.createToken({
  name: 'LINEAR',
  pattern: /LINEAR/,
});
const LIMIT = chevrotain.createToken({
  name: 'LIMIT',
  pattern: /LIMIT/,
});
const LIKE = chevrotain.createToken({
  name: 'LIKE',
  pattern: /LIKE/,
});
const LEFT = chevrotain.createToken({
  name: 'LEFT',
  pattern: /LEFT/,
});
const LEAVE = chevrotain.createToken({
  name: 'LEAVE',
  pattern: /LEAVE/,
});
const LEADING = chevrotain.createToken({
  name: 'LEADING',
  pattern: /LEADING/,
});
const KILL = chevrotain.createToken({
  name: 'KILL',
  pattern: /KILL/,
});
const KEYS = chevrotain.createToken({
  name: 'KEYS',
  pattern: /KEYS/,
});
const KEY = chevrotain.createToken({
  name: 'KEY',
  pattern: /KEY/,
});
const JOIN = chevrotain.createToken({
  name: 'JOIN',
  pattern: /JOIN/,
});
const ITERATE = chevrotain.createToken({
  name: 'ITERATE',
  pattern: /ITERATE/,
});
const INTO = chevrotain.createToken({
  name: 'INTO',
  pattern: /INTO/,
});
const TO = chevrotain.createToken({
  name: 'TO',
  pattern: /TO/,
});
const INTERVAL = chevrotain.createToken({
  name: 'INTERVAL',
  pattern: /INTERVAL/,
});
const INSERT = chevrotain.createToken({
  name: 'INSERT',
  pattern: /INSERT/,
});
const INOUT = chevrotain.createToken({
  name: 'INOUT',
  pattern: /INOUT/,
});
const OUT = chevrotain.createToken({
  name: 'OUT',
  pattern: /OUT/,
});
const INNER = chevrotain.createToken({
  name: 'INNER',
  pattern: /INNER/,
});
const INFILE = chevrotain.createToken({
  name: 'INFILE',
  pattern: /INFILE/,
});
const FILE = chevrotain.createToken({
  name: 'FILE',
  pattern: /FILE/,
});
const INDEX = chevrotain.createToken({
  name: 'INDEX',
  pattern: /INDEX/,
});
const IGNORE = chevrotain.createToken({
  name: 'IGNORE',
  pattern: /IGNORE/,
});
const NO = chevrotain.createToken({
  name: 'NO',
  pattern: /NO/,
});
const HIGH_PRIORITY = chevrotain.createToken({
  name: 'HIGH_PRIORITY',
  pattern: /HIGH_PRIORITY/,
});
const HAVING = chevrotain.createToken({
  name: 'HAVING',
  pattern: /HAVING/,
});
const GROUP = chevrotain.createToken({
  name: 'GROUP',
  pattern: /GROUP/,
});
const GRANT = chevrotain.createToken({
  name: 'GRANT',
  pattern: /GRANT/,
});
const FULLTEXT = chevrotain.createToken({
  name: 'FULLTEXT',
  pattern: /FULLTEXT/,
});
const FULL = chevrotain.createToken({
  name: 'FULL',
  pattern: /FULL/,
});
const TEXT = chevrotain.createToken({
  name: 'TEXT',
  pattern: /TEXT/,
});
const FROM = chevrotain.createToken({
  name: 'FROM',
  pattern: /FROM/,
});
const FOREIGN = chevrotain.createToken({
  name: 'FOREIGN',
  pattern: /FOREIGN/,
});
const FORCE = chevrotain.createToken({
  name: 'FORCE',
  pattern: /FORCE/,
});
const FETCH = chevrotain.createToken({
  name: 'FETCH',
  pattern: /FETCH/,
});
const FALSE = chevrotain.createToken({
  name: 'FALSE',
  pattern: /FALSE/,
});
const EXPLAIN = chevrotain.createToken({
  name: 'EXPLAIN',
  pattern: /EXPLAIN/,
});
const EXP = chevrotain.createToken({
  name: 'EXP',
  pattern: /EXP/,
});
const EXIT = chevrotain.createToken({
  name: 'EXIT',
  pattern: /EXIT/,
});
const EXISTS = chevrotain.createToken({
  name: 'EXISTS',
  pattern: /EXISTS/,
});
const X_FUNCTION = chevrotain.createToken({
  name: 'X_FUNCTION',
  pattern: /X/,
});
const ESCAPED = chevrotain.createToken({
  name: 'ESCAPED',
  pattern: /ESCAPED/,
});
const ESCAPE = chevrotain.createToken({
  name: 'ESCAPE',
  pattern: /ESCAPE/,
});
const ENCLOSED = chevrotain.createToken({
  name: 'ENCLOSED',
  pattern: /ENCLOSED/,
});
const CLOSE = chevrotain.createToken({
  name: 'CLOSE',
  pattern: /CLOSE/,
});
const ELSEIF = chevrotain.createToken({
  name: 'ELSEIF',
  pattern: /ELSEIF/,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/,
});
const EACH = chevrotain.createToken({
  name: 'EACH',
  pattern: /EACH/,
});
const DROP = chevrotain.createToken({
  name: 'DROP',
  pattern: /DROP/,
});
const DISTINCTROW = chevrotain.createToken({
  name: 'DISTINCTROW',
  pattern: /DISTINCTROW/,
});
const ROW = chevrotain.createToken({
  name: 'ROW',
  pattern: /ROW/,
});
const DISTINCT = chevrotain.createToken({
  name: 'DISTINCT',
  pattern: /DISTINCT/,
});
const DETERMINISTIC = chevrotain.createToken({
  name: 'DETERMINISTIC',
  pattern: /DETERMINISTIC/,
});
const MIN = chevrotain.createToken({
  name: 'MIN',
  pattern: /MIN/,
});
const IS = chevrotain.createToken({
  name: 'IS',
  pattern: /IS/,
});
const DESCRIBE = chevrotain.createToken({
  name: 'DESCRIBE',
  pattern: /DESCRIBE/,
});
const DESC = chevrotain.createToken({
  name: 'DESC',
  pattern: /DESC/,
});
const DELETE = chevrotain.createToken({
  name: 'DELETE',
  pattern: /DELETE/,
});
const DELAYED = chevrotain.createToken({
  name: 'DELAYED',
  pattern: /DELAYED/,
});
const DEFAULT = chevrotain.createToken({
  name: 'DEFAULT',
  pattern: /DEFAULT/,
});
const DECLARE = chevrotain.createToken({
  name: 'DECLARE',
  pattern: /DECLARE/,
});
const DATABASES = chevrotain.createToken({
  name: 'DATABASES',
  pattern: /DATABASES/,
});
const DATABASE = chevrotain.createToken({
  name: 'DATABASE',
  pattern: /DATABASE/,
});
const DATA = chevrotain.createToken({
  name: 'DATA',
  pattern: /DATA/,
});
const CURSOR = chevrotain.createToken({
  name: 'CURSOR',
  pattern: /CURSOR/,
});
const CURRENT_USER = chevrotain.createToken({
  name: 'CURRENT_USER',
  pattern: /CURRENT_USER/,
});
const USER = chevrotain.createToken({
  name: 'USER',
  pattern: /USER/,
});
const USE = chevrotain.createToken({
  name: 'USE',
  pattern: /USE/,
});
const CROSS = chevrotain.createToken({
  name: 'CROSS',
  pattern: /CROSS/,
});
const CREATE = chevrotain.createToken({
  name: 'CREATE',
  pattern: /CREATE/,
});
const CONVERT = chevrotain.createToken({
  name: 'CONVERT',
  pattern: /CONVERT/,
});
const CONV = chevrotain.createToken({
  name: 'CONV',
  pattern: /CONV/,
});
const CONTINUE = chevrotain.createToken({
  name: 'CONTINUE',
  pattern: /CONTINUE/,
});
const CONSTRAINT = chevrotain.createToken({
  name: 'CONSTRAINT',
  pattern: /CONSTRAINT/,
});
const INT = chevrotain.createToken({
  name: 'INT',
  pattern: /INT/,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/,
});
const CONDITION = chevrotain.createToken({
  name: 'CONDITION',
  pattern: /CONDITION/,
});
const IO = chevrotain.createToken({
  name: 'IO',
  pattern: /IO/,
});
const ON = chevrotain.createToken({
  name: 'ON',
  pattern: /ON/,
});
const COLUMN = chevrotain.createToken({
  name: 'COLUMN',
  pattern: /COLUMN/,
});
const COLLATE = chevrotain.createToken({
  name: 'COLLATE',
  pattern: /COLLATE/,
});
const AT = chevrotain.createToken({
  name: 'AT',
  pattern: /AT/,
});
const CHECK = chevrotain.createToken({
  name: 'CHECK',
  pattern: /CHECK/,
});
const CHARACTER = chevrotain.createToken({
  name: 'CHARACTER',
  pattern: /CHARACTER/,
});
const CHAR = chevrotain.createToken({
  name: 'CHAR',
  pattern: /CHAR/,
});
const CHANGE = chevrotain.createToken({
  name: 'CHANGE',
  pattern: /CHANGE/,
});
const CAST = chevrotain.createToken({
  name: 'CAST',
  pattern: /CAST/,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/,
});
const CASCADE = chevrotain.createToken({
  name: 'CASCADE',
  pattern: /CASCADE/,
});
const CALL = chevrotain.createToken({
  name: 'CALL',
  pattern: /CALL/,
});
const BY = chevrotain.createToken({
  name: 'BY',
  pattern: /BY/,
});
const BOTH = chevrotain.createToken({
  name: 'BOTH',
  pattern: /BOTH/,
});
const BETWEEN = chevrotain.createToken({
  name: 'BETWEEN',
  pattern: /BETWEEN/,
});
const BEFORE = chevrotain.createToken({
  name: 'BEFORE',
  pattern: /BEFORE/,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /OR/,
});
const ASC = chevrotain.createToken({
  name: 'ASC',
  pattern: /ASC/,
});
const AS = chevrotain.createToken({
  name: 'AS',
  pattern: /AS/,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /AND/,
});
const ANALYZE = chevrotain.createToken({
  name: 'ANALYZE',
  pattern: /ANALYZE/,
});
const Y_FUNCTION = chevrotain.createToken({
  name: 'Y_FUNCTION',
  pattern: /Y/,
});
const ALTER = chevrotain.createToken({
  name: 'ALTER',
  pattern: /ALTER/,
});
const ALL = chevrotain.createToken({
  name: 'ALL',
  pattern: /ALL/,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /ADD/,
});
const SKIP = chevrotain.createToken({
  name: 'SKIP',
  pattern: /SKIP/,
});
const ID = chevrotain.createToken({
  name: 'ID',
  pattern: /[A-Za-z_\$0-9]+/,
});

export enum TokenEnum {
  GLOBAL_ID = 'GLOBAL_ID',
  LOCAL_ID = 'LOCAL_ID',
  STRING_USER_NAME = 'STRING_USER_NAME',
  REVERSE_QUOTE_ID = 'REVERSE_QUOTE_ID',
  DOT_ID = 'DOT_ID',
  STRING_CHARSET_NAME = 'STRING_CHARSET_NAME',
  BIT_STRING = 'BIT_STRING',
  NULL_SPEC_LITERAL = 'NULL_SPEC_LITERAL',
  REAL_LITERAL = 'REAL_LITERAL',
  HEXADECIMAL_LITERAL = 'HEXADECIMAL_LITERAL',
  STRING_LITERAL = 'STRING_LITERAL',
  START_NATIONAL_STRING_LITERAL = 'START_NATIONAL_STRING_LITERAL',
  CHARSET_REVERSE_QOUTE_STRING = 'CHARSET_REVERSE_QOUTE_STRING',
  COLON_SYMB = 'COLON_SYMB',
  REVERSE_QUOTE_SYMB = 'REVERSE_QUOTE_SYMB',
  DOUBLE_QUOTE_SYMB = 'DOUBLE_QUOTE_SYMB',
  SINGLE_QUOTE_SYMB = 'SINGLE_QUOTE_SYMB',
  AT_SIGN = 'AT_SIGN',
  SEMI = 'SEMI',
  COMMA = 'COMMA',
  RR_BRACKET = 'RR_BRACKET',
  LR_BRACKET = 'LR_BRACKET',
  DOT = 'DOT',
  BIT_XOR_OP = 'BIT_XOR_OP',
  BIT_AND_OP = 'BIT_AND_OP',
  BIT_OR_OP = 'BIT_OR_OP',
  BIT_NOT_OP = 'BIT_NOT_OP',
  EXCLAMATION_SYMBOL = 'EXCLAMATION_SYMBOL',
  LESS_SYMBOL = 'LESS_SYMBOL',
  GREATER_SYMBOL = 'GREATER_SYMBOL',
  EQUAL_SYMBOL = 'EQUAL_SYMBOL',
  DIV = 'DIV',
  MINUS = 'MINUS',
  MINUSMINUS = 'MINUSMINUS',
  PLUS = 'PLUS',
  MODULE = 'MODULE',
  DIVIDE = 'DIVIDE',
  STAR = 'STAR',
  OR_ASSIGN = 'OR_ASSIGN',
  XOR_ASSIGN = 'XOR_ASSIGN',
  AND_ASSIGN = 'AND_ASSIGN',
  MOD_ASSIGN = 'MOD_ASSIGN',
  DIV_ASSIGN = 'DIV_ASSIGN',
  MULT_ASSIGN = 'MULT_ASSIGN',
  MINUS_ASSIGN = 'MINUS_ASSIGN',
  PLUS_ASSIGN = 'PLUS_ASSIGN',
  VAR_ASSIGN = 'VAR_ASSIGN',
  YEARWEEK = 'YEARWEEK',
  WEIGHT_STRING = 'WEIGHT_STRING',
  WEEKOFYEAR = 'WEEKOFYEAR',
  WEEKDAY = 'WEEKDAY',
  WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = 'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS',
  VALIDATE_PASSWORD_STRENGTH = 'VALIDATE_PASSWORD_STRENGTH',
  UUID_SHORT = 'UUID_SHORT',
  UUID = 'UUID',
  UPPER = 'UPPER',
  UPDATEXML = 'UPDATEXML',
  UNIX_TIMESTAMP = 'UNIX_TIMESTAMP',
  UNHEX = 'UNHEX',
  UNCOMPRESSED_LENGTH = 'UNCOMPRESSED_LENGTH',
  UNCOMPRESS = 'UNCOMPRESS',
  UCASE = 'UCASE',
  TO_SECONDS = 'TO_SECONDS',
  TO_DAYS = 'TO_DAYS',
  TO_BASE64 = 'TO_BASE64',
  TIME_TO_SEC = 'TIME_TO_SEC',
  TIME_FORMAT = 'TIME_FORMAT',
  TIMESTAMPDIFF = 'TIMESTAMPDIFF',
  TIMESTAMPADD = 'TIMESTAMPADD',
  TIMEDIFF = 'TIMEDIFF',
  SYSTEM_USER = 'SYSTEM_USER',
  SUBTIME = 'SUBTIME',
  SUBSTRING_INDEX = 'SUBSTRING_INDEX',
  SUBDATE = 'SUBDATE',
  ST_Y = 'ST_Y',
  ST_X = 'ST_X',
  ST_WITHIN = 'ST_WITHIN',
  ST_UNION = 'ST_UNION',
  ST_TOUCHES = 'ST_TOUCHES',
  ST_SYMDIFFERENCE = 'ST_SYMDIFFERENCE',
  ST_STARTPOINT = 'ST_STARTPOINT',
  ST_SRID = 'ST_SRID',
  ST_POLYGONFROMWKB = 'ST_POLYGONFROMWKB',
  ST_POLYGONFROMTEXT = 'ST_POLYGONFROMTEXT',
  ST_POLYFROMWKB = 'ST_POLYFROMWKB',
  ST_POLYFROMTEXT = 'ST_POLYFROMTEXT',
  ST_POINTN = 'ST_POINTN',
  ST_POINTFROMWKB = 'ST_POINTFROMWKB',
  ST_POINTFROMTEXT = 'ST_POINTFROMTEXT',
  ST_OVERLAPS = 'ST_OVERLAPS',
  ST_NUMPOINTS = 'ST_NUMPOINTS',
  ST_NUMINTERIORRINGS = 'ST_NUMINTERIORRINGS',
  ST_NUMINTERIORRING = 'ST_NUMINTERIORRING',
  ST_NUMGEOMETRIES = 'ST_NUMGEOMETRIES',
  ST_LINESTRINGFROMWKB = 'ST_LINESTRINGFROMWKB',
  ST_LINESTRINGFROMTEXT = 'ST_LINESTRINGFROMTEXT',
  ST_LINEFROMWKB = 'ST_LINEFROMWKB',
  ST_LINEFROMTEXT = 'ST_LINEFROMTEXT',
  ST_ISSIMPLE = 'ST_ISSIMPLE',
  ST_ISEMPTY = 'ST_ISEMPTY',
  ST_ISCLOSED = 'ST_ISCLOSED',
  ST_INTERSECTS = 'ST_INTERSECTS',
  ST_INTERSECTION = 'ST_INTERSECTION',
  ST_INTERIORRINGN = 'ST_INTERIORRINGN',
  ST_GEOMFROMWKB = 'ST_GEOMFROMWKB',
  ST_GEOMFROMTEXT = 'ST_GEOMFROMTEXT',
  ST_GEOMETRYTYPE = 'ST_GEOMETRYTYPE',
  ST_GEOMETRYN = 'ST_GEOMETRYN',
  ST_GEOMETRYFROMWKB = 'ST_GEOMETRYFROMWKB',
  ST_GEOMETRYFROMTEXT = 'ST_GEOMETRYFROMTEXT',
  ST_GEOMETRYCOLLECTIONFROMWKB = 'ST_GEOMETRYCOLLECTIONFROMWKB',
  ST_GEOMETRYCOLLECTIONFROMTEXT = 'ST_GEOMETRYCOLLECTIONFROMTEXT',
  ST_GEOMCOLLFROMWKB = 'ST_GEOMCOLLFROMWKB',
  ST_GEOMCOLLFROMTXT = 'ST_GEOMCOLLFROMTXT',
  ST_GEOMCOLLFROMTEXT = 'ST_GEOMCOLLFROMTEXT',
  ST_EXTERIORRING = 'ST_EXTERIORRING',
  ST_EQUALS = 'ST_EQUALS',
  ST_ENVELOPE = 'ST_ENVELOPE',
  ST_ENDPOINT = 'ST_ENDPOINT',
  ST_DISTANCE = 'ST_DISTANCE',
  ST_DISJOINT = 'ST_DISJOINT',
  ST_DIMENSION = 'ST_DIMENSION',
  ST_DIFFERENCE = 'ST_DIFFERENCE',
  ST_CROSSES = 'ST_CROSSES',
  ST_CONTAINS = 'ST_CONTAINS',
  ST_CENTROID = 'ST_CENTROID',
  ST_BUFFER = 'ST_BUFFER',
  ST_ASWKT = 'ST_ASWKT',
  ST_ASWKB = 'ST_ASWKB',
  ST_ASTEXT = 'ST_ASTEXT',
  ST_ASBINARY = 'ST_ASBINARY',
  ST_AREA = 'ST_AREA',
  STR_TO_DATE = 'STR_TO_DATE',
  STRCMP = 'STRCMP',
  STARTPOINT = 'STARTPOINT',
  SRID = 'SRID',
  SQRT = 'SQRT',
  SQL_THREAD_WAIT_AFTER_GTIDS = 'SQL_THREAD_WAIT_AFTER_GTIDS',
  SOUNDEX = 'SOUNDEX',
  SLEEP = 'SLEEP',
  SHA2 = 'SHA2',
  SHA1 = 'SHA1',
  SESSION_USER = 'SESSION_USER',
  SEC_TO_TIME = 'SEC_TO_TIME',
  RTRIM = 'RTRIM',
  RPAD = 'RPAD',
  ROW_COUNT = 'ROW_COUNT',
  ROUND = 'ROUND',
  REVERSE = 'REVERSE',
  RELEASE_LOCK = 'RELEASE_LOCK',
  RANDOM_BYTES = 'RANDOM_BYTES',
  RAND = 'RAND',
  RADIANS = 'RADIANS',
  QUOTE = 'QUOTE',
  POWER = 'POWER',
  POW = 'POW',
  POINTN = 'POINTN',
  PERIOD_DIFF = 'PERIOD_DIFF',
  PERIOD_ADD = 'PERIOD_ADD',
  OCTET_LENGTH = 'OCTET_LENGTH',
  OCT = 'OCT',
  NUMPOINTS = 'NUMPOINTS',
  NUMINTERIORRINGS = 'NUMINTERIORRINGS',
  NUMGEOMETRIES = 'NUMGEOMETRIES',
  NULLIF = 'NULLIF',
  NAME_CONST = 'NAME_CONST',
  MULTIPOLYGONFROMWKB = 'MULTIPOLYGONFROMWKB',
  POLYGONFROMWKB = 'POLYGONFROMWKB',
  MULTIPOLYGONFROMTEXT = 'MULTIPOLYGONFROMTEXT',
  POLYGONFROMTEXT = 'POLYGONFROMTEXT',
  MULTIPOINTFROMWKB = 'MULTIPOINTFROMWKB',
  MULTIPOINTFROMTEXT = 'MULTIPOINTFROMTEXT',
  MULTILINESTRINGFROMWKB = 'MULTILINESTRINGFROMWKB',
  MULTILINESTRINGFROMTEXT = 'MULTILINESTRINGFROMTEXT',
  MPOLYFROMWKB = 'MPOLYFROMWKB',
  POLYFROMWKB = 'POLYFROMWKB',
  MPOLYFROMTEXT = 'MPOLYFROMTEXT',
  POLYFROMTEXT = 'POLYFROMTEXT',
  MPOINTFROMWKB = 'MPOINTFROMWKB',
  POINTFROMWKB = 'POINTFROMWKB',
  MPOINTFROMTEXT = 'MPOINTFROMTEXT',
  POINTFROMTEXT = 'POINTFROMTEXT',
  MONTHNAME = 'MONTHNAME',
  MLINEFROMWKB = 'MLINEFROMWKB',
  MLINEFROMTEXT = 'MLINEFROMTEXT',
  MD5 = 'MD5',
  MBRWITHIN = 'MBRWITHIN',
  WITHIN = 'WITHIN',
  MBRTOUCHES = 'MBRTOUCHES',
  TOUCHES = 'TOUCHES',
  MBROVERLAPS = 'MBROVERLAPS',
  OVERLAPS = 'OVERLAPS',
  MBRINTERSECTS = 'MBRINTERSECTS',
  MBREQUAL = 'MBREQUAL',
  MBRDISJOINT = 'MBRDISJOINT',
  MBRCONTAINS = 'MBRCONTAINS',
  MASTER_POS_WAIT = 'MASTER_POS_WAIT',
  MAKE_SET = 'MAKE_SET',
  MAKETIME = 'MAKETIME',
  MAKEDATE = 'MAKEDATE',
  LTRIM = 'LTRIM',
  LPAD = 'LPAD',
  LOWER = 'LOWER',
  LOG2 = 'LOG2',
  LOG10 = 'LOG10',
  LOAD_FILE = 'LOAD_FILE',
  LN = 'LN',
  LINESTRINGFROMWKB = 'LINESTRINGFROMWKB',
  LINESTRINGFROMTEXT = 'LINESTRINGFROMTEXT',
  LINEFROMWKB = 'LINEFROMWKB',
  LINEFROMTEXT = 'LINEFROMTEXT',
  LEAST = 'LEAST',
  LCASE = 'LCASE',
  LAST_INSERT_ID = 'LAST_INSERT_ID',
  IS_USED_LOCK = 'IS_USED_LOCK',
  IS_IPV6 = 'IS_IPV6',
  IS_IPV4_MAPPED = 'IS_IPV4_MAPPED',
  IS_IPV4_COMPAT = 'IS_IPV4_COMPAT',
  IS_IPV4 = 'IS_IPV4',
  IS_FREE_LOCK = 'IS_FREE_LOCK',
  ISSIMPLE = 'ISSIMPLE',
  ISNULL = 'ISNULL',
  ISEMPTY = 'ISEMPTY',
  ISCLOSED = 'ISCLOSED',
  INTERSECTS = 'INTERSECTS',
  INTERIORRINGN = 'INTERIORRINGN',
  INSTR = 'INSTR',
  INET_NTOA = 'INET_NTOA',
  INET_ATON = 'INET_ATON',
  INET6_NTOA = 'INET6_NTOA',
  INET6_ATON = 'INET6_ATON',
  IFNULL = 'IFNULL',
  HEX = 'HEX',
  GTID_SUBTRACT = 'GTID_SUBTRACT',
  GTID_SUBSET = 'GTID_SUBSET',
  GREATEST = 'GREATEST',
  GLENGTH = 'GLENGTH',
  GET_LOCK = 'GET_LOCK',
  GET_FORMAT = 'GET_FORMAT',
  GEOMFROMWKB = 'GEOMFROMWKB',
  GEOMFROMTEXT = 'GEOMFROMTEXT',
  GEOMETRYTYPE = 'GEOMETRYTYPE',
  GEOMETRYN = 'GEOMETRYN',
  GEOMETRYFROMWKB = 'GEOMETRYFROMWKB',
  GEOMETRYFROMTEXT = 'GEOMETRYFROMTEXT',
  GEOMETRYCOLLECTIONFROMWKB = 'GEOMETRYCOLLECTIONFROMWKB',
  GEOMETRYCOLLECTIONFROMTEXT = 'GEOMETRYCOLLECTIONFROMTEXT',
  GEOMCOLLFROMWKB = 'GEOMCOLLFROMWKB',
  GEOMCOLLFROMTEXT = 'GEOMCOLLFROMTEXT',
  FROM_UNIXTIME = 'FROM_UNIXTIME',
  FROM_DAYS = 'FROM_DAYS',
  FROM_BASE64 = 'FROM_BASE64',
  FLOOR = 'FLOOR',
  FIND_IN_SET = 'FIND_IN_SET',
  EXTRACTVALUE = 'EXTRACTVALUE',
  EXTERIORRING = 'EXTERIORRING',
  EXPORT_SET = 'EXPORT_SET',
  EQUALS = 'EQUALS',
  ENVELOPE = 'ENVELOPE',
  ENDPOINT = 'ENDPOINT',
  ENCODE = 'ENCODE',
  ELT = 'ELT',
  DISJOINT = 'DISJOINT',
  DIMENSION = 'DIMENSION',
  DES_ENCRYPT = 'DES_ENCRYPT',
  DES_DECRYPT = 'DES_DECRYPT',
  DEGREES = 'DEGREES',
  DECODE = 'DECODE',
  DAYOFYEAR = 'DAYOFYEAR',
  DAYOFWEEK = 'DAYOFWEEK',
  DAYOFMONTH = 'DAYOFMONTH',
  DAYNAME = 'DAYNAME',
  DATE_FORMAT = 'DATE_FORMAT',
  DATEDIFF = 'DATEDIFF',
  CROSSES = 'CROSSES',
  CREATE_DIGEST = 'CREATE_DIGEST',
  CREATE_DH_PARAMETERS = 'CREATE_DH_PARAMETERS',
  CREATE_ASYMMETRIC_PUB_KEY = 'CREATE_ASYMMETRIC_PUB_KEY',
  CREATE_ASYMMETRIC_PRIV_KEY = 'CREATE_ASYMMETRIC_PRIV_KEY',
  CRC32 = 'CRC32',
  COT = 'COT',
  CONVERT_TZ = 'CONVERT_TZ',
  CONNECTION_ID = 'CONNECTION_ID',
  CONCAT_WS = 'CONCAT_WS',
  COLLATION = 'COLLATION',
  COERCIBILITY = 'COERCIBILITY',
  CHAR_LENGTH = 'CHAR_LENGTH',
  CHARSET = 'CHARSET',
  CHARACTER_LENGTH = 'CHARACTER_LENGTH',
  CENTROID = 'CENTROID',
  CEILING = 'CEILING',
  CEIL = 'CEIL',
  BIT_LENGTH = 'BIT_LENGTH',
  BIT_COUNT = 'BIT_COUNT',
  BENCHMARK = 'BENCHMARK',
  ATAN2 = 'ATAN2',
  ATAN = 'ATAN',
  ASYMMETRIC_VERIFY = 'ASYMMETRIC_VERIFY',
  ASYMMETRIC_SIGN = 'ASYMMETRIC_SIGN',
  ASYMMETRIC_ENCRYPT = 'ASYMMETRIC_ENCRYPT',
  ASYMMETRIC_DERIVE = 'ASYMMETRIC_DERIVE',
  ASYMMETRIC_DECRYPT = 'ASYMMETRIC_DECRYPT',
  ASWKT = 'ASWKT',
  ASWKB = 'ASWKB',
  ASTEXT = 'ASTEXT',
  ASIN = 'ASIN',
  ASBINARY = 'ASBINARY',
  AREA = 'AREA',
  AES_ENCRYPT = 'AES_ENCRYPT',
  AES_DECRYPT = 'AES_DECRYPT',
  ADDTIME = 'ADDTIME',
  ADDDATE = 'ADDDATE',
  ACOS = 'ACOS',
  ABS = 'ABS',
  MULTIPOLYGON = 'MULTIPOLYGON',
  POLYGON = 'POLYGON',
  MULTIPOINT = 'MULTIPOINT',
  MULTILINESTRING = 'MULTILINESTRING',
  LINESTRING = 'LINESTRING',
  GEOMETRYCOLLECTION = 'GEOMETRYCOLLECTION',
  SERIALIZABLE = 'SERIALIZABLE',
  UNCOMMITTED = 'UNCOMMITTED',
  COMMITTED = 'COMMITTED',
  REPEATABLE = 'REPEATABLE',
  PERFOMANCE_SCHEMA = 'PERFOMANCE_SCHEMA',
  NDBCLUSTER = 'NDBCLUSTER',
  NDB = 'NDB',
  MRG_MYISAM = 'MRG_MYISAM',
  MYISAM = 'MYISAM',
  MEMORY = 'MEMORY',
  INNODB = 'INNODB',
  FEDERATED = 'FEDERATED',
  CSV = 'CSV',
  BLACKHOLE = 'BLACKHOLE',
  ARCHIVE = 'ARCHIVE',
  UTF8MB4 = 'UTF8MB4',
  UTF8MB3 = 'UTF8MB3',
  FILESIZE_LITERAL = 'FILESIZE_LITERAL',
  UTF8 = 'UTF8',
  UTF32 = 'UTF32',
  UTF16LE = 'UTF16LE',
  UTF16 = 'UTF16',
  UJIS = 'UJIS',
  UCS2 = 'UCS2',
  TIS620 = 'TIS620',
  SWE7 = 'SWE7',
  SJIS = 'SJIS',
  MACROMAN = 'MACROMAN',
  MACCE = 'MACCE',
  LATIN7 = 'LATIN7',
  LATIN5 = 'LATIN5',
  LATIN2 = 'LATIN2',
  LATIN1 = 'LATIN1',
  KOI8U = 'KOI8U',
  KOI8R = 'KOI8R',
  KEYBCS2 = 'KEYBCS2',
  HP8 = 'HP8',
  HEBREW = 'HEBREW',
  GREEK = 'GREEK',
  GEOSTD8 = 'GEOSTD8',
  GBK = 'GBK',
  GB2312 = 'GB2312',
  EUCKR = 'EUCKR',
  EUCJPMS = 'EUCJPMS',
  DEC8 = 'DEC8',
  CP932 = 'CP932',
  CP866 = 'CP866',
  CP852 = 'CP852',
  CP850 = 'CP850',
  CP1257 = 'CP1257',
  CP1256 = 'CP1256',
  CP1251 = 'CP1251',
  CP1250 = 'CP1250',
  TWO_DECIMAL = 'TWO_DECIMAL',
  ONE_DECIMAL = 'ONE_DECIMAL',
  BIG5 = 'BIG5',
  ASCII = 'ASCII',
  ARMSCII8 = 'ARMSCII8',
  PRIVILEGES = 'PRIVILEGES',
  SUPER = 'SUPER',
  SHUTDOWN = 'SHUTDOWN',
  RELOAD = 'RELOAD',
  EXECUTE = 'EXECUTE',
  ROUTINE = 'ROUTINE',
  WEEK = 'WEEK',
  QUARTER = 'QUARTER',
  INTERNAL = 'INTERNAL',
  JIS = 'JIS',
  EUR = 'EUR',
  XML = 'XML',
  XA = 'XA',
  X509 = 'X509',
  ZERO_DECIMAL = 'ZERO_DECIMAL',
  DECIMAL_LITERAL = 'DECIMAL_LITERAL',
  WRAPPER = 'WRAPPER',
  WORK = 'WORK',
  WITHOUT = 'WITHOUT',
  WARNINGS = 'WARNINGS',
  WAIT = 'WAIT',
  VIEW = 'VIEW',
  VARIABLES = 'VARIABLES',
  VALIDATION = 'VALIDATION',
  USER_RESOURCES = 'USER_RESOURCES',
  USE_FRM = 'USE_FRM',
  UPGRADE = 'UPGRADE',
  UNTIL = 'UNTIL',
  UNKNOWN = 'UNKNOWN',
  UNINSTALL = 'UNINSTALL',
  UNDO_BUFFER_SIZE = 'UNDO_BUFFER_SIZE',
  UNDOFILE = 'UNDOFILE',
  UNDEFINED = 'UNDEFINED',
  TRUNCATE = 'TRUNCATE',
  TRIGGERS = 'TRIGGERS',
  TRANSACTION = 'TRANSACTION',
  TRADITIONAL = 'TRADITIONAL',
  THAN = 'THAN',
  TEMPTABLE = 'TEMPTABLE',
  TEMPORARY = 'TEMPORARY',
  TABLESPACE = 'TABLESPACE',
  TABLES = 'TABLES',
  SWITCHES = 'SWITCHES',
  SWAPS = 'SWAPS',
  SUSPEND = 'SUSPEND',
  SUBPARTITIONS = 'SUBPARTITIONS',
  SUBPARTITION = 'SUBPARTITION',
  SUBJECT = 'SUBJECT',
  STORAGE = 'STORAGE',
  STOP = 'STOP',
  STATUS = 'STATUS',
  STATS_SAMPLE_PAGES = 'STATS_SAMPLE_PAGES',
  STATS_PERSISTENT = 'STATS_PERSISTENT',
  STATS_AUTO_RECALC = 'STATS_AUTO_RECALC',
  STARTS = 'STARTS',
  SQL_THREAD = 'SQL_THREAD',
  SQL_NO_CACHE = 'SQL_NO_CACHE',
  SQL_CACHE = 'SQL_CACHE',
  SQL_BUFFER_RESULT = 'SQL_BUFFER_RESULT',
  SQL_BEFORE_GTIDS = 'SQL_BEFORE_GTIDS',
  SQL_AFTER_MTS_GAPS = 'SQL_AFTER_MTS_GAPS',
  SQL_AFTER_GTIDS = 'SQL_AFTER_GTIDS',
  SOURCE = 'SOURCE',
  SOUNDS = 'SOUNDS',
  SONAME = 'SONAME',
  SOME = 'SOME',
  SOCKET = 'SOCKET',
  SNAPSHOT = 'SNAPSHOT',
  SLOW = 'SLOW',
  SLAVE = 'SLAVE',
  SIMPLE = 'SIMPLE',
  SHARED = 'SHARED',
  SHARE = 'SHARE',
  SHA = 'SHA',
  SESSION = 'SESSION',
  SECURITY = 'SECURITY',
  SCHEDULE = 'SCHEDULE',
  SAVEPOINT = 'SAVEPOINT',
  POINT = 'POINT',
  ROW_FORMAT = 'ROW_FORMAT',
  ROTATE = 'ROTATE',
  ROLLUP = 'ROLLUP',
  ROLLBACK = 'ROLLBACK',
  RETURNS = 'RETURNS',
  RESUME = 'RESUME',
  RESET = 'RESET',
  REPLICATE_WILD_IGNORE_TABLE = 'REPLICATE_WILD_IGNORE_TABLE',
  REPLICATE_WILD_DO_TABLE = 'REPLICATE_WILD_DO_TABLE',
  REPLICATE_REWRITE_DB = 'REPLICATE_REWRITE_DB',
  REPLICATE_IGNORE_TABLE = 'REPLICATE_IGNORE_TABLE',
  REPLICATE_IGNORE_DB = 'REPLICATE_IGNORE_DB',
  REPLICATE_DO_TABLE = 'REPLICATE_DO_TABLE',
  REPLICATE_DO_DB = 'REPLICATE_DO_DB',
  REPAIR = 'REPAIR',
  REORGANIZE = 'REORGANIZE',
  REMOVE = 'REMOVE',
  RELAYLOG = 'RELAYLOG',
  RELAY_LOG_POS = 'RELAY_LOG_POS',
  RELAY_LOG_FILE = 'RELAY_LOG_FILE',
  RELAY = 'RELAY',
  REDUNDANT = 'REDUNDANT',
  REDO_BUFFER_SIZE = 'REDO_BUFFER_SIZE',
  BUFFER = 'BUFFER',
  RECOVER = 'RECOVER',
  REBUILD = 'REBUILD',
  QUICK = 'QUICK',
  QUERY = 'QUERY',
  PROXY = 'PROXY',
  PROFILES = 'PROFILES',
  PROFILE = 'PROFILE',
  PROCESSLIST = 'PROCESSLIST',
  PROCESS = 'PROCESS',
  PREV = 'PREV',
  PRESERVE = 'PRESERVE',
  PREPARE = 'PREPARE',
  PRECEDES = 'PRECEDES',
  PLUGINS = 'PLUGINS',
  PLUGIN_DIR = 'PLUGIN_DIR',
  PLUGIN = 'PLUGIN',
  PHASE = 'PHASE',
  PARTITIONS = 'PARTITIONS',
  PARTITIONING = 'PARTITIONING',
  PARTIAL = 'PARTIAL',
  PARSER = 'PARSER',
  PAGE = 'PAGE',
  PACK_KEYS = 'PACK_KEYS',
  OWNER = 'OWNER',
  OPTIONS = 'OPTIONS',
  OPTIMIZER_COSTS = 'OPTIMIZER_COSTS',
  COS = 'COS',
  OPEN = 'OPEN',
  ONLY = 'ONLY',
  ONLINE = 'ONLINE',
  OLD_PASSWORD = 'OLD_PASSWORD',
  OJ = 'OJ',
  OFFSET = 'OFFSET',
  OFFLINE = 'OFFLINE',
  NONE = 'NONE',
  ONE = 'ONE',
  NODEGROUP = 'NODEGROUP',
  NEXT = 'NEXT',
  NEVER = 'NEVER',
  NCHAR = 'NCHAR',
  NAMES = 'NAMES',
  MYSQL = 'MYSQL',
  MUTEX = 'MUTEX',
  MODIFY = 'MODIFY',
  MODE = 'MODE',
  MIN_ROWS = 'MIN_ROWS',
  MIGRATE = 'MIGRATE',
  MID = 'MID',
  MERGE = 'MERGE',
  MAX_USER_CONNECTIONS = 'MAX_USER_CONNECTIONS',
  MAX_UPDATES_PER_HOUR = 'MAX_UPDATES_PER_HOUR',
  MAX_SIZE = 'MAX_SIZE',
  MAX_ROWS = 'MAX_ROWS',
  MAX_QUERIES_PER_HOUR = 'MAX_QUERIES_PER_HOUR',
  MAX_CONNECTIONS_PER_HOUR = 'MAX_CONNECTIONS_PER_HOUR',
  MASTER_USER = 'MASTER_USER',
  MASTER_TLS_VERSION = 'MASTER_TLS_VERSION',
  VERSION = 'VERSION',
  MASTER_SSL_KEY = 'MASTER_SSL_KEY',
  MASTER_SSL_CRLPATH = 'MASTER_SSL_CRLPATH',
  MASTER_SSL_CRL = 'MASTER_SSL_CRL',
  MASTER_SSL_CIPHER = 'MASTER_SSL_CIPHER',
  MASTER_SSL_CERT = 'MASTER_SSL_CERT',
  MASTER_SSL_CAPATH = 'MASTER_SSL_CAPATH',
  MASTER_SSL_CA = 'MASTER_SSL_CA',
  MASTER_RETRY_COUNT = 'MASTER_RETRY_COUNT',
  MASTER_PORT = 'MASTER_PORT',
  MASTER_PASSWORD = 'MASTER_PASSWORD',
  PASSWORD = 'PASSWORD',
  MASTER_LOG_POS = 'MASTER_LOG_POS',
  MASTER_LOG_FILE = 'MASTER_LOG_FILE',
  MASTER_HOST = 'MASTER_HOST',
  MASTER_HEARTBEAT_PERIOD = 'MASTER_HEARTBEAT_PERIOD',
  MASTER_DELAY = 'MASTER_DELAY',
  MASTER_CONNECT_RETRY = 'MASTER_CONNECT_RETRY',
  MASTER_AUTO_POSITION = 'MASTER_AUTO_POSITION',
  LOGS = 'LOGS',
  LOGFILE = 'LOGFILE',
  LIST = 'LIST',
  LEVEL = 'LEVEL',
  LESS = 'LESS',
  LEAVES = 'LEAVES',
  LAST = 'LAST',
  LANGUAGE = 'LANGUAGE',
  KEY_BLOCK_SIZE = 'KEY_BLOCK_SIZE',
  JSON = 'JSON',
  ISSUER = 'ISSUER',
  ISOLATION = 'ISOLATION',
  ISO = 'ISO',
  IPC = 'IPC',
  IO_THREAD = 'IO_THREAD',
  INVOKER = 'INVOKER',
  INSTANCE = 'INSTANCE',
  TAN = 'TAN',
  INSTALL = 'INSTALL',
  INSERT_METHOD = 'INSERT_METHOD',
  INPLACE = 'INPLACE',
  INITIAL_SIZE = 'INITIAL_SIZE',
  INDEXES = 'INDEXES',
  IMPORT = 'IMPORT',
  IGNORE_SERVER_IDS = 'IGNORE_SERVER_IDS',
  IDENTIFIED = 'IDENTIFIED',
  HOSTS = 'HOSTS',
  HOST = 'HOST',
  HELP = 'HELP',
  HASH = 'HASH',
  HANDLER = 'HANDLER',
  GROUP_REPLICATION = 'GROUP_REPLICATION',
  REPLICATION = 'REPLICATION',
  GRANTS = 'GRANTS',
  GLOBAL = 'GLOBAL',
  GENERAL = 'GENERAL',
  FUNCTION = 'FUNCTION',
  FOLLOWS = 'FOLLOWS',
  FLUSH = 'FLUSH',
  FIXED = 'FIXED',
  FIRST = 'FIRST',
  FILTER = 'FILTER',
  FILE_BLOCK_SIZE = 'FILE_BLOCK_SIZE',
  FIELDS = 'FIELDS',
  FIELD = 'FIELD',
  FAULTS = 'FAULTS',
  FAST = 'FAST',
  EXTENT_SIZE = 'EXTENT_SIZE',
  EXTENDED = 'EXTENDED',
  EXPORT = 'EXPORT',
  PORT = 'PORT',
  EXPIRE = 'EXPIRE',
  PI = 'PI',
  EXCLUSIVE = 'EXCLUSIVE',
  EXCHANGE = 'EXCHANGE',
  EVERY = 'EVERY',
  EVENTS = 'EVENTS',
  EVENT = 'EVENT',
  EVEN = 'EVEN',
  ERRORS = 'ERRORS',
  ERROR = 'ERROR',
  ENGINES = 'ENGINES',
  ENGINE = 'ENGINE',
  ENDS = 'ENDS',
  ENCRYPTION = 'ENCRYPTION',
  ENCRYPT = 'ENCRYPT',
  ENABLE = 'ENABLE',
  DYNAMIC = 'DYNAMIC',
  DUPLICATE = 'DUPLICATE',
  DUMPFILE = 'DUMPFILE',
  DISK = 'DISK',
  DISCARD = 'DISCARD',
  DISABLE = 'DISABLE',
  DIRECTORY = 'DIRECTORY',
  DES_KEY_FILE = 'DES_KEY_FILE',
  DELAY_KEY_WRITE = 'DELAY_KEY_WRITE',
  DEFINER = 'DEFINER',
  DEFAULT_AUTH = 'DEFAULT_AUTH',
  DEALLOCATE = 'DEALLOCATE',
  LOCATE = 'LOCATE',
  DATAFILE = 'DATAFILE',
  CPU = 'CPU',
  COPY = 'COPY',
  CONTRIBUTORS = 'CONTRIBUTORS',
  CONTEXT = 'CONTEXT',
  CONTAINS = 'CONTAINS',
  CONSISTENT = 'CONSISTENT',
  CONNECTION = 'CONNECTION',
  CONCURRENT = 'CONCURRENT',
  COMPRESSION = 'COMPRESSION',
  COMPRESSED = 'COMPRESSED',
  COMPRESS = 'COMPRESS',
  COMPLETION = 'COMPLETION',
  COMPACT = 'COMPACT',
  COMMENT = 'COMMENT',
  COLUMN_FORMAT = 'COLUMN_FORMAT',
  FORMAT = 'FORMAT',
  COLUMNS = 'COLUMNS',
  CODE = 'CODE',
  COALESCE = 'COALESCE',
  CLIENT = 'CLIENT',
  CIPHER = 'CIPHER',
  CHECKSUM = 'CHECKSUM',
  CHANNEL = 'CHANNEL',
  CHANGED = 'CHANGED',
  CHAIN = 'CHAIN',
  CASCADED = 'CASCADED',
  CACHE = 'CACHE',
  BTREE = 'BTREE',
  BOOLEAN = 'BOOLEAN',
  BOOL = 'BOOL',
  BLOCK = 'BLOCK',
  BEGIN = 'BEGIN',
  AVG_ROW_LENGTH = 'AVG_ROW_LENGTH',
  LENGTH = 'LENGTH',
  AUTO_INCREMENT = 'AUTO_INCREMENT',
  AUTOEXTEND_SIZE = 'AUTOEXTEND_SIZE',
  END = 'END',
  AUTOCOMMIT = 'AUTOCOMMIT',
  COMMIT = 'COMMIT',
  AUTHORS = 'AUTHORS',
  ANY = 'ANY',
  ALGORITHM = 'ALGORITHM',
  AGGREGATE = 'AGGREGATE',
  AFTER = 'AFTER',
  ACTION = 'ACTION',
  ACCOUNT = 'ACCOUNT',
  UTC_TIMESTAMP = 'UTC_TIMESTAMP',
  UTC_TIME = 'UTC_TIME',
  UTC_DATE = 'UTC_DATE',
  TRIM = 'TRIM',
  SYSDATE = 'SYSDATE',
  SUBSTRING = 'SUBSTRING',
  STRING = 'STRING',
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
  LOCAL = 'LOCAL',
  CURRENT_TIMESTAMP = 'CURRENT_TIMESTAMP',
  CURRENT_TIME = 'CURRENT_TIME',
  CURRENT_DATE = 'CURRENT_DATE',
  VARIANCE = 'VARIANCE',
  VAR_SAMP = 'VAR_SAMP',
  VAR_POP = 'VAR_POP',
  SUM = 'SUM',
  STDDEV_SAMP = 'STDDEV_SAMP',
  STDDEV_POP = 'STDDEV_POP',
  STDDEV = 'STDDEV',
  STD = 'STD',
  GROUP_CONCAT = 'GROUP_CONCAT',
  CONCAT = 'CONCAT',
  COUNT = 'COUNT',
  BIT_XOR = 'BIT_XOR',
  BIT_OR = 'BIT_OR',
  BIT_AND = 'BIT_AND',
  BIT = 'BIT',
  AVG = 'AVG',
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
  ENUM = 'ENUM',
  LONGTEXT = 'LONGTEXT',
  MEDIUMTEXT = 'MEDIUMTEXT',
  TINYTEXT = 'TINYTEXT',
  LONGBLOB = 'LONGBLOB',
  MEDIUMBLOB = 'MEDIUMBLOB',
  TINYBLOB = 'TINYBLOB',
  BLOB = 'BLOB',
  VARBINARY = 'VARBINARY',
  BINARY = 'BINARY',
  CHARSET_NAME_L = 'CHARSET_NAME_L',
  VARCHAR = 'VARCHAR',
  YEAR = 'YEAR',
  DATETIME = 'DATETIME',
  TIMESTAMP = 'TIMESTAMP',
  TIME = 'TIME',
  NUMERIC = 'NUMERIC',
  DECIMAL = 'DECIMAL',
  FLOAT = 'FLOAT',
  DOUBLE = 'DOUBLE',
  REAL = 'REAL',
  BIGINT = 'BIGINT',
  INTEGER = 'INTEGER',
  MEDIUMINT = 'MEDIUMINT',
  MEDIUM = 'MEDIUM',
  SMALLINT = 'SMALLINT',
  TINYINT = 'TINYINT',
  OVERWRITE = 'OVERWRITE',
  ZEROFILL = 'ZEROFILL',
  XOR = 'XOR',
  WITH = 'WITH',
  WHILE = 'WHILE',
  WHERE = 'WHERE',
  WHEN = 'WHEN',
  VALUES = 'VALUES',
  USING = 'USING',
  SIN = 'SIN',
  USAGE = 'USAGE',
  USA = 'USA',
  UPDATE = 'UPDATE',
  DATE = 'DATE',
  UNSIGNED = 'UNSIGNED',
  SIGNED = 'SIGNED',
  SIGN = 'SIGN',
  UNLOCK = 'UNLOCK',
  UNIQUE = 'UNIQUE',
  UNION = 'UNION',
  UNDO = 'UNDO',
  DO = 'DO',
  TRUE = 'TRUE',
  TRIGGER = 'TRIGGER',
  TRAILING = 'TRAILING',
  THEN = 'THEN',
  TERMINATED = 'TERMINATED',
  TABLE = 'TABLE',
  STRAIGHT_JOIN = 'STRAIGHT_JOIN',
  STARTING = 'STARTING',
  START = 'START',
  SQL_SMALL_RESULT = 'SQL_SMALL_RESULT',
  SQL_CALC_FOUND_ROWS = 'SQL_CALC_FOUND_ROWS',
  FOUND_ROWS = 'FOUND_ROWS',
  ROWS = 'ROWS',
  FOUND = 'FOUND',
  SQL_BIG_RESULT = 'SQL_BIG_RESULT',
  SQLWARNING = 'SQLWARNING',
  SQLSTATE = 'SQLSTATE',
  SQLEXCEPTION = 'SQLEXCEPTION',
  SQL = 'SQL',
  SPATIAL = 'SPATIAL',
  SHOW = 'SHOW',
  SEPARATOR = 'SEPARATOR',
  SET = 'SET',
  SELECT = 'SELECT',
  SCHEMAS = 'SCHEMAS',
  SCHEMA = 'SCHEMA',
  RLIKE = 'RLIKE',
  RIGHT = 'RIGHT',
  REVOKE = 'REVOKE',
  RETURN = 'RETURN',
  RESTRICT = 'RESTRICT',
  REQUIRE = 'REQUIRE',
  REPLACE = 'REPLACE',
  REPEAT = 'REPEAT',
  RENAME = 'RENAME',
  NAME = 'NAME',
  RELEASE = 'RELEASE',
  REGEXP = 'REGEXP',
  REFERENCES = 'REFERENCES',
  READS = 'READS',
  READ = 'READ',
  RANGE = 'RANGE',
  PURGE = 'PURGE',
  PROCEDURE = 'PROCEDURE',
  PRIMARY = 'PRIMARY',
  PARTITION = 'PARTITION',
  OUTFILE = 'OUTFILE',
  OUTER = 'OUTER',
  ORDER = 'ORDER',
  ORD = 'ORD',
  OPTIONALLY = 'OPTIONALLY',
  OPTION = 'OPTION',
  OPTIMIZE = 'OPTIMIZE',
  NULL_LITERAL = 'NULL_LITERAL',
  NO_WRITE_TO_BINLOG = 'NO_WRITE_TO_BINLOG',
  BINLOG = 'BINLOG',
  LOG = 'LOG',
  WRITE = 'WRITE',
  NOT = 'NOT',
  NATURAL = 'NATURAL',
  MODIFIES = 'MODIFIES',
  MOD = 'MOD',
  MAXVALUE = 'MAXVALUE',
  VALUE = 'VALUE',
  MAX = 'MAX',
  MATCH = 'MATCH',
  MASTER_SSL_VERIFY_SERVER_CERT = 'MASTER_SSL_VERIFY_SERVER_CERT',
  SERVER = 'SERVER',
  MASTER_SSL = 'MASTER_SSL',
  SSL = 'SSL',
  MASTER_BIND = 'MASTER_BIND',
  BIN = 'BIN',
  MASTER = 'MASTER',
  LOW_PRIORITY = 'LOW_PRIORITY',
  LOOP = 'LOOP',
  LOCK = 'LOCK',
  LOAD = 'LOAD',
  LINES = 'LINES',
  LINEAR = 'LINEAR',
  LIMIT = 'LIMIT',
  LIKE = 'LIKE',
  LEFT = 'LEFT',
  LEAVE = 'LEAVE',
  LEADING = 'LEADING',
  KILL = 'KILL',
  KEYS = 'KEYS',
  KEY = 'KEY',
  JOIN = 'JOIN',
  ITERATE = 'ITERATE',
  INTO = 'INTO',
  TO = 'TO',
  INTERVAL = 'INTERVAL',
  INSERT = 'INSERT',
  INOUT = 'INOUT',
  OUT = 'OUT',
  INNER = 'INNER',
  INFILE = 'INFILE',
  FILE = 'FILE',
  INDEX = 'INDEX',
  IGNORE = 'IGNORE',
  NO = 'NO',
  HIGH_PRIORITY = 'HIGH_PRIORITY',
  HAVING = 'HAVING',
  GROUP = 'GROUP',
  GRANT = 'GRANT',
  FULLTEXT = 'FULLTEXT',
  FULL = 'FULL',
  TEXT = 'TEXT',
  FROM = 'FROM',
  FOREIGN = 'FOREIGN',
  FORCE = 'FORCE',
  FETCH = 'FETCH',
  FALSE = 'FALSE',
  EXPLAIN = 'EXPLAIN',
  EXP = 'EXP',
  EXIT = 'EXIT',
  EXISTS = 'EXISTS',
  X_FUNCTION = 'X_FUNCTION',
  ESCAPED = 'ESCAPED',
  ESCAPE = 'ESCAPE',
  ENCLOSED = 'ENCLOSED',
  CLOSE = 'CLOSE',
  ELSEIF = 'ELSEIF',
  IF = 'IF',
  ELSE = 'ELSE',
  EACH = 'EACH',
  DROP = 'DROP',
  DISTINCTROW = 'DISTINCTROW',
  ROW = 'ROW',
  DISTINCT = 'DISTINCT',
  DETERMINISTIC = 'DETERMINISTIC',
  MIN = 'MIN',
  IS = 'IS',
  DESCRIBE = 'DESCRIBE',
  DESC = 'DESC',
  DELETE = 'DELETE',
  DELAYED = 'DELAYED',
  DEFAULT = 'DEFAULT',
  DECLARE = 'DECLARE',
  DATABASES = 'DATABASES',
  DATABASE = 'DATABASE',
  DATA = 'DATA',
  CURSOR = 'CURSOR',
  CURRENT_USER = 'CURRENT_USER',
  USER = 'USER',
  USE = 'USE',
  CROSS = 'CROSS',
  CREATE = 'CREATE',
  CONVERT = 'CONVERT',
  CONV = 'CONV',
  CONTINUE = 'CONTINUE',
  CONSTRAINT = 'CONSTRAINT',
  INT = 'INT',
  IN = 'IN',
  CONDITION = 'CONDITION',
  IO = 'IO',
  ON = 'ON',
  COLUMN = 'COLUMN',
  COLLATE = 'COLLATE',
  AT = 'AT',
  CHECK = 'CHECK',
  CHARACTER = 'CHARACTER',
  CHAR = 'CHAR',
  CHANGE = 'CHANGE',
  CAST = 'CAST',
  CASE = 'CASE',
  CASCADE = 'CASCADE',
  CALL = 'CALL',
  BY = 'BY',
  BOTH = 'BOTH',
  BETWEEN = 'BETWEEN',
  BEFORE = 'BEFORE',
  FOR = 'FOR',
  OR = 'OR',
  ASC = 'ASC',
  AS = 'AS',
  AND = 'AND',
  ANALYZE = 'ANALYZE',
  Y_FUNCTION = 'Y_FUNCTION',
  ALTER = 'ALTER',
  ALL = 'ALL',
  ADD = 'ADD',
  SKIP = 'SKIP',
  ID = 'ID',
}

export const Tokens = {
  GLOBAL_ID,
  LOCAL_ID,
  STRING_USER_NAME,
  REVERSE_QUOTE_ID,
  DOT_ID,
  STRING_CHARSET_NAME,
  BIT_STRING,
  NULL_SPEC_LITERAL,
  REAL_LITERAL,
  HEXADECIMAL_LITERAL,
  STRING_LITERAL,
  START_NATIONAL_STRING_LITERAL,
  CHARSET_REVERSE_QOUTE_STRING,
  COLON_SYMB,
  REVERSE_QUOTE_SYMB,
  DOUBLE_QUOTE_SYMB,
  SINGLE_QUOTE_SYMB,
  AT_SIGN,
  SEMI,
  COMMA,
  RR_BRACKET,
  LR_BRACKET,
  DOT,
  BIT_XOR_OP,
  BIT_AND_OP,
  BIT_OR_OP,
  BIT_NOT_OP,
  EXCLAMATION_SYMBOL,
  LESS_SYMBOL,
  GREATER_SYMBOL,
  EQUAL_SYMBOL,
  DIV,
  MINUS,
  MINUSMINUS,
  PLUS,
  MODULE,
  DIVIDE,
  STAR,
  OR_ASSIGN,
  XOR_ASSIGN,
  AND_ASSIGN,
  MOD_ASSIGN,
  DIV_ASSIGN,
  MULT_ASSIGN,
  MINUS_ASSIGN,
  PLUS_ASSIGN,
  VAR_ASSIGN,
  YEARWEEK,
  WEIGHT_STRING,
  WEEKOFYEAR,
  WEEKDAY,
  WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS,
  VALIDATE_PASSWORD_STRENGTH,
  UUID_SHORT,
  UUID,
  UPPER,
  UPDATEXML,
  UNIX_TIMESTAMP,
  UNHEX,
  UNCOMPRESSED_LENGTH,
  UNCOMPRESS,
  UCASE,
  TO_SECONDS,
  TO_DAYS,
  TO_BASE64,
  TIME_TO_SEC,
  TIME_FORMAT,
  TIMESTAMPDIFF,
  TIMESTAMPADD,
  TIMEDIFF,
  SYSTEM_USER,
  SUBTIME,
  SUBSTRING_INDEX,
  SUBDATE,
  ST_Y,
  ST_X,
  ST_WITHIN,
  ST_UNION,
  ST_TOUCHES,
  ST_SYMDIFFERENCE,
  ST_STARTPOINT,
  ST_SRID,
  ST_POLYGONFROMWKB,
  ST_POLYGONFROMTEXT,
  ST_POLYFROMWKB,
  ST_POLYFROMTEXT,
  ST_POINTN,
  ST_POINTFROMWKB,
  ST_POINTFROMTEXT,
  ST_OVERLAPS,
  ST_NUMPOINTS,
  ST_NUMINTERIORRINGS,
  ST_NUMINTERIORRING,
  ST_NUMGEOMETRIES,
  ST_LINESTRINGFROMWKB,
  ST_LINESTRINGFROMTEXT,
  ST_LINEFROMWKB,
  ST_LINEFROMTEXT,
  ST_ISSIMPLE,
  ST_ISEMPTY,
  ST_ISCLOSED,
  ST_INTERSECTS,
  ST_INTERSECTION,
  ST_INTERIORRINGN,
  ST_GEOMFROMWKB,
  ST_GEOMFROMTEXT,
  ST_GEOMETRYTYPE,
  ST_GEOMETRYN,
  ST_GEOMETRYFROMWKB,
  ST_GEOMETRYFROMTEXT,
  ST_GEOMETRYCOLLECTIONFROMWKB,
  ST_GEOMETRYCOLLECTIONFROMTEXT,
  ST_GEOMCOLLFROMWKB,
  ST_GEOMCOLLFROMTXT,
  ST_GEOMCOLLFROMTEXT,
  ST_EXTERIORRING,
  ST_EQUALS,
  ST_ENVELOPE,
  ST_ENDPOINT,
  ST_DISTANCE,
  ST_DISJOINT,
  ST_DIMENSION,
  ST_DIFFERENCE,
  ST_CROSSES,
  ST_CONTAINS,
  ST_CENTROID,
  ST_BUFFER,
  ST_ASWKT,
  ST_ASWKB,
  ST_ASTEXT,
  ST_ASBINARY,
  ST_AREA,
  STR_TO_DATE,
  STRCMP,
  STARTPOINT,
  SRID,
  SQRT,
  SQL_THREAD_WAIT_AFTER_GTIDS,
  SOUNDEX,
  SLEEP,
  SHA2,
  SHA1,
  SESSION_USER,
  SEC_TO_TIME,
  RTRIM,
  RPAD,
  ROW_COUNT,
  ROUND,
  REVERSE,
  RELEASE_LOCK,
  RANDOM_BYTES,
  RAND,
  RADIANS,
  QUOTE,
  POWER,
  POW,
  POINTN,
  PERIOD_DIFF,
  PERIOD_ADD,
  OCTET_LENGTH,
  OCT,
  NUMPOINTS,
  NUMINTERIORRINGS,
  NUMGEOMETRIES,
  NULLIF,
  NAME_CONST,
  MULTIPOLYGONFROMWKB,
  POLYGONFROMWKB,
  MULTIPOLYGONFROMTEXT,
  POLYGONFROMTEXT,
  MULTIPOINTFROMWKB,
  MULTIPOINTFROMTEXT,
  MULTILINESTRINGFROMWKB,
  MULTILINESTRINGFROMTEXT,
  MPOLYFROMWKB,
  POLYFROMWKB,
  MPOLYFROMTEXT,
  POLYFROMTEXT,
  MPOINTFROMWKB,
  POINTFROMWKB,
  MPOINTFROMTEXT,
  POINTFROMTEXT,
  MONTHNAME,
  MLINEFROMWKB,
  MLINEFROMTEXT,
  MD5,
  MBRWITHIN,
  WITHIN,
  MBRTOUCHES,
  TOUCHES,
  MBROVERLAPS,
  OVERLAPS,
  MBRINTERSECTS,
  MBREQUAL,
  MBRDISJOINT,
  MBRCONTAINS,
  MASTER_POS_WAIT,
  MAKE_SET,
  MAKETIME,
  MAKEDATE,
  LTRIM,
  LPAD,
  LOWER,
  LOG2,
  LOG10,
  LOAD_FILE,
  LN,
  LINESTRINGFROMWKB,
  LINESTRINGFROMTEXT,
  LINEFROMWKB,
  LINEFROMTEXT,
  LEAST,
  LCASE,
  LAST_INSERT_ID,
  IS_USED_LOCK,
  IS_IPV6,
  IS_IPV4_MAPPED,
  IS_IPV4_COMPAT,
  IS_IPV4,
  IS_FREE_LOCK,
  ISSIMPLE,
  ISNULL,
  ISEMPTY,
  ISCLOSED,
  INTERSECTS,
  INTERIORRINGN,
  INSTR,
  INET_NTOA,
  INET_ATON,
  INET6_NTOA,
  INET6_ATON,
  IFNULL,
  HEX,
  GTID_SUBTRACT,
  GTID_SUBSET,
  GREATEST,
  GLENGTH,
  GET_LOCK,
  GET_FORMAT,
  GEOMFROMWKB,
  GEOMFROMTEXT,
  GEOMETRYTYPE,
  GEOMETRYN,
  GEOMETRYFROMWKB,
  GEOMETRYFROMTEXT,
  GEOMETRYCOLLECTIONFROMWKB,
  GEOMETRYCOLLECTIONFROMTEXT,
  GEOMCOLLFROMWKB,
  GEOMCOLLFROMTEXT,
  FROM_UNIXTIME,
  FROM_DAYS,
  FROM_BASE64,
  FLOOR,
  FIND_IN_SET,
  EXTRACTVALUE,
  EXTERIORRING,
  EXPORT_SET,
  EQUALS,
  ENVELOPE,
  ENDPOINT,
  ENCODE,
  ELT,
  DISJOINT,
  DIMENSION,
  DES_ENCRYPT,
  DES_DECRYPT,
  DEGREES,
  DECODE,
  DAYOFYEAR,
  DAYOFWEEK,
  DAYOFMONTH,
  DAYNAME,
  DATE_FORMAT,
  DATEDIFF,
  CROSSES,
  CREATE_DIGEST,
  CREATE_DH_PARAMETERS,
  CREATE_ASYMMETRIC_PUB_KEY,
  CREATE_ASYMMETRIC_PRIV_KEY,
  CRC32,
  COT,
  CONVERT_TZ,
  CONNECTION_ID,
  CONCAT_WS,
  COLLATION,
  COERCIBILITY,
  CHAR_LENGTH,
  CHARSET,
  CHARACTER_LENGTH,
  CENTROID,
  CEILING,
  CEIL,
  BIT_LENGTH,
  BIT_COUNT,
  BENCHMARK,
  ATAN2,
  ATAN,
  ASYMMETRIC_VERIFY,
  ASYMMETRIC_SIGN,
  ASYMMETRIC_ENCRYPT,
  ASYMMETRIC_DERIVE,
  ASYMMETRIC_DECRYPT,
  ASWKT,
  ASWKB,
  ASTEXT,
  ASIN,
  ASBINARY,
  AREA,
  AES_ENCRYPT,
  AES_DECRYPT,
  ADDTIME,
  ADDDATE,
  ACOS,
  ABS,
  MULTIPOLYGON,
  POLYGON,
  MULTIPOINT,
  MULTILINESTRING,
  LINESTRING,
  GEOMETRYCOLLECTION,
  SERIALIZABLE,
  UNCOMMITTED,
  COMMITTED,
  REPEATABLE,
  PERFOMANCE_SCHEMA,
  NDBCLUSTER,
  NDB,
  MRG_MYISAM,
  MYISAM,
  MEMORY,
  INNODB,
  FEDERATED,
  CSV,
  BLACKHOLE,
  ARCHIVE,
  UTF8MB4,
  UTF8MB3,
  FILESIZE_LITERAL,
  UTF8,
  UTF32,
  UTF16LE,
  UTF16,
  UJIS,
  UCS2,
  TIS620,
  SWE7,
  SJIS,
  MACROMAN,
  MACCE,
  LATIN7,
  LATIN5,
  LATIN2,
  LATIN1,
  KOI8U,
  KOI8R,
  KEYBCS2,
  HP8,
  HEBREW,
  GREEK,
  GEOSTD8,
  GBK,
  GB2312,
  EUCKR,
  EUCJPMS,
  DEC8,
  CP932,
  CP866,
  CP852,
  CP850,
  CP1257,
  CP1256,
  CP1251,
  CP1250,
  TWO_DECIMAL,
  ONE_DECIMAL,
  BIG5,
  ASCII,
  ARMSCII8,
  PRIVILEGES,
  SUPER,
  SHUTDOWN,
  RELOAD,
  EXECUTE,
  ROUTINE,
  WEEK,
  QUARTER,
  INTERNAL,
  JIS,
  EUR,
  XML,
  XA,
  X509,
  ZERO_DECIMAL,
  DECIMAL_LITERAL,
  WRAPPER,
  WORK,
  WITHOUT,
  WARNINGS,
  WAIT,
  VIEW,
  VARIABLES,
  VALIDATION,
  USER_RESOURCES,
  USE_FRM,
  UPGRADE,
  UNTIL,
  UNKNOWN,
  UNINSTALL,
  UNDO_BUFFER_SIZE,
  UNDOFILE,
  UNDEFINED,
  TRUNCATE,
  TRIGGERS,
  TRANSACTION,
  TRADITIONAL,
  THAN,
  TEMPTABLE,
  TEMPORARY,
  TABLESPACE,
  TABLES,
  SWITCHES,
  SWAPS,
  SUSPEND,
  SUBPARTITIONS,
  SUBPARTITION,
  SUBJECT,
  STORAGE,
  STOP,
  STATUS,
  STATS_SAMPLE_PAGES,
  STATS_PERSISTENT,
  STATS_AUTO_RECALC,
  STARTS,
  SQL_THREAD,
  SQL_NO_CACHE,
  SQL_CACHE,
  SQL_BUFFER_RESULT,
  SQL_BEFORE_GTIDS,
  SQL_AFTER_MTS_GAPS,
  SQL_AFTER_GTIDS,
  SOURCE,
  SOUNDS,
  SONAME,
  SOME,
  SOCKET,
  SNAPSHOT,
  SLOW,
  SLAVE,
  SIMPLE,
  SHARED,
  SHARE,
  SHA,
  SESSION,
  SECURITY,
  SCHEDULE,
  SAVEPOINT,
  POINT,
  ROW_FORMAT,
  ROTATE,
  ROLLUP,
  ROLLBACK,
  RETURNS,
  RESUME,
  RESET,
  REPLICATE_WILD_IGNORE_TABLE,
  REPLICATE_WILD_DO_TABLE,
  REPLICATE_REWRITE_DB,
  REPLICATE_IGNORE_TABLE,
  REPLICATE_IGNORE_DB,
  REPLICATE_DO_TABLE,
  REPLICATE_DO_DB,
  REPAIR,
  REORGANIZE,
  REMOVE,
  RELAYLOG,
  RELAY_LOG_POS,
  RELAY_LOG_FILE,
  RELAY,
  REDUNDANT,
  REDO_BUFFER_SIZE,
  BUFFER,
  RECOVER,
  REBUILD,
  QUICK,
  QUERY,
  PROXY,
  PROFILES,
  PROFILE,
  PROCESSLIST,
  PROCESS,
  PREV,
  PRESERVE,
  PREPARE,
  PRECEDES,
  PLUGINS,
  PLUGIN_DIR,
  PLUGIN,
  PHASE,
  PARTITIONS,
  PARTITIONING,
  PARTIAL,
  PARSER,
  PAGE,
  PACK_KEYS,
  OWNER,
  OPTIONS,
  OPTIMIZER_COSTS,
  COS,
  OPEN,
  ONLY,
  ONLINE,
  OLD_PASSWORD,
  OJ,
  OFFSET,
  OFFLINE,
  NONE,
  ONE,
  NODEGROUP,
  NEXT,
  NEVER,
  NCHAR,
  NAMES,
  MYSQL,
  MUTEX,
  MODIFY,
  MODE,
  MIN_ROWS,
  MIGRATE,
  MID,
  MERGE,
  MAX_USER_CONNECTIONS,
  MAX_UPDATES_PER_HOUR,
  MAX_SIZE,
  MAX_ROWS,
  MAX_QUERIES_PER_HOUR,
  MAX_CONNECTIONS_PER_HOUR,
  MASTER_USER,
  MASTER_TLS_VERSION,
  VERSION,
  MASTER_SSL_KEY,
  MASTER_SSL_CRLPATH,
  MASTER_SSL_CRL,
  MASTER_SSL_CIPHER,
  MASTER_SSL_CERT,
  MASTER_SSL_CAPATH,
  MASTER_SSL_CA,
  MASTER_RETRY_COUNT,
  MASTER_PORT,
  MASTER_PASSWORD,
  PASSWORD,
  MASTER_LOG_POS,
  MASTER_LOG_FILE,
  MASTER_HOST,
  MASTER_HEARTBEAT_PERIOD,
  MASTER_DELAY,
  MASTER_CONNECT_RETRY,
  MASTER_AUTO_POSITION,
  LOGS,
  LOGFILE,
  LIST,
  LEVEL,
  LESS,
  LEAVES,
  LAST,
  LANGUAGE,
  KEY_BLOCK_SIZE,
  JSON,
  ISSUER,
  ISOLATION,
  ISO,
  IPC,
  IO_THREAD,
  INVOKER,
  INSTANCE,
  TAN,
  INSTALL,
  INSERT_METHOD,
  INPLACE,
  INITIAL_SIZE,
  INDEXES,
  IMPORT,
  IGNORE_SERVER_IDS,
  IDENTIFIED,
  HOSTS,
  HOST,
  HELP,
  HASH,
  HANDLER,
  GROUP_REPLICATION,
  REPLICATION,
  GRANTS,
  GLOBAL,
  GENERAL,
  FUNCTION,
  FOLLOWS,
  FLUSH,
  FIXED,
  FIRST,
  FILTER,
  FILE_BLOCK_SIZE,
  FIELDS,
  FIELD,
  FAULTS,
  FAST,
  EXTENT_SIZE,
  EXTENDED,
  EXPORT,
  PORT,
  EXPIRE,
  PI,
  EXCLUSIVE,
  EXCHANGE,
  EVERY,
  EVENTS,
  EVENT,
  EVEN,
  ERRORS,
  ERROR,
  ENGINES,
  ENGINE,
  ENDS,
  ENCRYPTION,
  ENCRYPT,
  ENABLE,
  DYNAMIC,
  DUPLICATE,
  DUMPFILE,
  DISK,
  DISCARD,
  DISABLE,
  DIRECTORY,
  DES_KEY_FILE,
  DELAY_KEY_WRITE,
  DEFINER,
  DEFAULT_AUTH,
  DEALLOCATE,
  LOCATE,
  DATAFILE,
  CPU,
  COPY,
  CONTRIBUTORS,
  CONTEXT,
  CONTAINS,
  CONSISTENT,
  CONNECTION,
  CONCURRENT,
  COMPRESSION,
  COMPRESSED,
  COMPRESS,
  COMPLETION,
  COMPACT,
  COMMENT,
  COLUMN_FORMAT,
  FORMAT,
  COLUMNS,
  CODE,
  COALESCE,
  CLIENT,
  CIPHER,
  CHECKSUM,
  CHANNEL,
  CHANGED,
  CHAIN,
  CASCADED,
  CACHE,
  BTREE,
  BOOLEAN,
  BOOL,
  BLOCK,
  BEGIN,
  AVG_ROW_LENGTH,
  LENGTH,
  AUTO_INCREMENT,
  AUTOEXTEND_SIZE,
  END,
  AUTOCOMMIT,
  COMMIT,
  AUTHORS,
  ANY,
  ALGORITHM,
  AGGREGATE,
  AFTER,
  ACTION,
  ACCOUNT,
  UTC_TIMESTAMP,
  UTC_TIME,
  UTC_DATE,
  TRIM,
  SYSDATE,
  SUBSTRING,
  STRING,
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
  LOCAL,
  CURRENT_TIMESTAMP,
  CURRENT_TIME,
  CURRENT_DATE,
  VARIANCE,
  VAR_SAMP,
  VAR_POP,
  SUM,
  STDDEV_SAMP,
  STDDEV_POP,
  STDDEV,
  STD,
  GROUP_CONCAT,
  CONCAT,
  COUNT,
  BIT_XOR,
  BIT_OR,
  BIT_AND,
  BIT,
  AVG,
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
  ENUM,
  LONGTEXT,
  MEDIUMTEXT,
  TINYTEXT,
  LONGBLOB,
  MEDIUMBLOB,
  TINYBLOB,
  BLOB,
  VARBINARY,
  BINARY,
  CHARSET_NAME_L,
  VARCHAR,
  YEAR,
  DATETIME,
  TIMESTAMP,
  TIME,
  NUMERIC,
  DECIMAL,
  FLOAT,
  DOUBLE,
  REAL,
  BIGINT,
  INTEGER,
  MEDIUMINT,
  MEDIUM,
  SMALLINT,
  TINYINT,
  OVERWRITE,
  ZEROFILL,
  XOR,
  WITH,
  WHILE,
  WHERE,
  WHEN,
  VALUES,
  USING,
  SIN,
  USAGE,
  USA,
  UPDATE,
  DATE,
  UNSIGNED,
  SIGNED,
  SIGN,
  UNLOCK,
  UNIQUE,
  UNION,
  UNDO,
  DO,
  TRUE,
  TRIGGER,
  TRAILING,
  THEN,
  TERMINATED,
  TABLE,
  STRAIGHT_JOIN,
  STARTING,
  START,
  SQL_SMALL_RESULT,
  SQL_CALC_FOUND_ROWS,
  FOUND_ROWS,
  ROWS,
  FOUND,
  SQL_BIG_RESULT,
  SQLWARNING,
  SQLSTATE,
  SQLEXCEPTION,
  SQL,
  SPATIAL,
  SHOW,
  SEPARATOR,
  SET,
  SELECT,
  SCHEMAS,
  SCHEMA,
  RLIKE,
  RIGHT,
  REVOKE,
  RETURN,
  RESTRICT,
  REQUIRE,
  REPLACE,
  REPEAT,
  RENAME,
  NAME,
  RELEASE,
  REGEXP,
  REFERENCES,
  READS,
  READ,
  RANGE,
  PURGE,
  PROCEDURE,
  PRIMARY,
  PARTITION,
  OUTFILE,
  OUTER,
  ORDER,
  ORD,
  OPTIONALLY,
  OPTION,
  OPTIMIZE,
  NULL_LITERAL,
  NO_WRITE_TO_BINLOG,
  BINLOG,
  LOG,
  WRITE,
  NOT,
  NATURAL,
  MODIFIES,
  MOD,
  MAXVALUE,
  VALUE,
  MAX,
  MATCH,
  MASTER_SSL_VERIFY_SERVER_CERT,
  SERVER,
  MASTER_SSL,
  SSL,
  MASTER_BIND,
  BIN,
  MASTER,
  LOW_PRIORITY,
  LOOP,
  LOCK,
  LOAD,
  LINES,
  LINEAR,
  LIMIT,
  LIKE,
  LEFT,
  LEAVE,
  LEADING,
  KILL,
  KEYS,
  KEY,
  JOIN,
  ITERATE,
  INTO,
  TO,
  INTERVAL,
  INSERT,
  INOUT,
  OUT,
  INNER,
  INFILE,
  FILE,
  INDEX,
  IGNORE,
  NO,
  HIGH_PRIORITY,
  HAVING,
  GROUP,
  GRANT,
  FULLTEXT,
  FULL,
  TEXT,
  FROM,
  FOREIGN,
  FORCE,
  FETCH,
  FALSE,
  EXPLAIN,
  EXP,
  EXIT,
  EXISTS,
  X_FUNCTION,
  ESCAPED,
  ESCAPE,
  ENCLOSED,
  CLOSE,
  ELSEIF,
  IF,
  ELSE,
  EACH,
  DROP,
  DISTINCTROW,
  ROW,
  DISTINCT,
  DETERMINISTIC,
  MIN,
  IS,
  DESCRIBE,
  DESC,
  DELETE,
  DELAYED,
  DEFAULT,
  DECLARE,
  DATABASES,
  DATABASE,
  DATA,
  CURSOR,
  CURRENT_USER,
  USER,
  USE,
  CROSS,
  CREATE,
  CONVERT,
  CONV,
  CONTINUE,
  CONSTRAINT,
  INT,
  IN,
  CONDITION,
  IO,
  ON,
  COLUMN,
  COLLATE,
  AT,
  CHECK,
  CHARACTER,
  CHAR,
  CHANGE,
  CAST,
  CASE,
  CASCADE,
  CALL,
  BY,
  BOTH,
  BETWEEN,
  BEFORE,
  FOR,
  OR,
  ASC,
  AS,
  AND,
  ANALYZE,
  Y_FUNCTION,
  ALTER,
  ALL,
  ADD,
  SKIP,
  ID,
};

export const tokens = [
  WhiteSpace,
  GLOBAL_ID,
  LOCAL_ID,
  STRING_USER_NAME,
  REVERSE_QUOTE_ID,
  DOT_ID,
  STRING_CHARSET_NAME,
  BIT_STRING,
  NULL_SPEC_LITERAL,
  REAL_LITERAL,
  HEXADECIMAL_LITERAL,
  STRING_LITERAL,
  START_NATIONAL_STRING_LITERAL,
  CHARSET_REVERSE_QOUTE_STRING,
  COLON_SYMB,
  REVERSE_QUOTE_SYMB,
  DOUBLE_QUOTE_SYMB,
  SINGLE_QUOTE_SYMB,
  AT_SIGN,
  SEMI,
  COMMA,
  RR_BRACKET,
  LR_BRACKET,
  DOT,
  BIT_XOR_OP,
  BIT_AND_OP,
  BIT_OR_OP,
  BIT_NOT_OP,
  EXCLAMATION_SYMBOL,
  LESS_SYMBOL,
  GREATER_SYMBOL,
  EQUAL_SYMBOL,
  DIV,
  MINUS,
  MINUSMINUS,
  PLUS,
  MODULE,
  DIVIDE,
  STAR,
  OR_ASSIGN,
  XOR_ASSIGN,
  AND_ASSIGN,
  MOD_ASSIGN,
  DIV_ASSIGN,
  MULT_ASSIGN,
  MINUS_ASSIGN,
  PLUS_ASSIGN,
  VAR_ASSIGN,
  YEARWEEK,
  WEIGHT_STRING,
  WEEKOFYEAR,
  WEEKDAY,
  WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS,
  VALIDATE_PASSWORD_STRENGTH,
  UUID_SHORT,
  UUID,
  UPPER,
  UPDATEXML,
  UNIX_TIMESTAMP,
  UNHEX,
  UNCOMPRESSED_LENGTH,
  UNCOMPRESS,
  UCASE,
  TO_SECONDS,
  TO_DAYS,
  TO_BASE64,
  TIME_TO_SEC,
  TIME_FORMAT,
  TIMESTAMPDIFF,
  TIMESTAMPADD,
  TIMEDIFF,
  SYSTEM_USER,
  SUBTIME,
  SUBSTRING_INDEX,
  SUBDATE,
  ST_Y,
  ST_X,
  ST_WITHIN,
  ST_UNION,
  ST_TOUCHES,
  ST_SYMDIFFERENCE,
  ST_STARTPOINT,
  ST_SRID,
  ST_POLYGONFROMWKB,
  ST_POLYGONFROMTEXT,
  ST_POLYFROMWKB,
  ST_POLYFROMTEXT,
  ST_POINTN,
  ST_POINTFROMWKB,
  ST_POINTFROMTEXT,
  ST_OVERLAPS,
  ST_NUMPOINTS,
  ST_NUMINTERIORRINGS,
  ST_NUMINTERIORRING,
  ST_NUMGEOMETRIES,
  ST_LINESTRINGFROMWKB,
  ST_LINESTRINGFROMTEXT,
  ST_LINEFROMWKB,
  ST_LINEFROMTEXT,
  ST_ISSIMPLE,
  ST_ISEMPTY,
  ST_ISCLOSED,
  ST_INTERSECTS,
  ST_INTERSECTION,
  ST_INTERIORRINGN,
  ST_GEOMFROMWKB,
  ST_GEOMFROMTEXT,
  ST_GEOMETRYTYPE,
  ST_GEOMETRYN,
  ST_GEOMETRYFROMWKB,
  ST_GEOMETRYFROMTEXT,
  ST_GEOMETRYCOLLECTIONFROMWKB,
  ST_GEOMETRYCOLLECTIONFROMTEXT,
  ST_GEOMCOLLFROMWKB,
  ST_GEOMCOLLFROMTXT,
  ST_GEOMCOLLFROMTEXT,
  ST_EXTERIORRING,
  ST_EQUALS,
  ST_ENVELOPE,
  ST_ENDPOINT,
  ST_DISTANCE,
  ST_DISJOINT,
  ST_DIMENSION,
  ST_DIFFERENCE,
  ST_CROSSES,
  ST_CONTAINS,
  ST_CENTROID,
  ST_BUFFER,
  ST_ASWKT,
  ST_ASWKB,
  ST_ASTEXT,
  ST_ASBINARY,
  ST_AREA,
  STR_TO_DATE,
  STRCMP,
  STARTPOINT,
  SRID,
  SQRT,
  SQL_THREAD_WAIT_AFTER_GTIDS,
  SOUNDEX,
  SLEEP,
  SHA2,
  SHA1,
  SESSION_USER,
  SEC_TO_TIME,
  RTRIM,
  RPAD,
  ROW_COUNT,
  ROUND,
  REVERSE,
  RELEASE_LOCK,
  RANDOM_BYTES,
  RAND,
  RADIANS,
  QUOTE,
  POWER,
  POW,
  POINTN,
  PERIOD_DIFF,
  PERIOD_ADD,
  OCTET_LENGTH,
  OCT,
  NUMPOINTS,
  NUMINTERIORRINGS,
  NUMGEOMETRIES,
  NULLIF,
  NAME_CONST,
  MULTIPOLYGONFROMWKB,
  POLYGONFROMWKB,
  MULTIPOLYGONFROMTEXT,
  POLYGONFROMTEXT,
  MULTIPOINTFROMWKB,
  MULTIPOINTFROMTEXT,
  MULTILINESTRINGFROMWKB,
  MULTILINESTRINGFROMTEXT,
  MPOLYFROMWKB,
  POLYFROMWKB,
  MPOLYFROMTEXT,
  POLYFROMTEXT,
  MPOINTFROMWKB,
  POINTFROMWKB,
  MPOINTFROMTEXT,
  POINTFROMTEXT,
  MONTHNAME,
  MLINEFROMWKB,
  MLINEFROMTEXT,
  MD5,
  MBRWITHIN,
  WITHIN,
  MBRTOUCHES,
  TOUCHES,
  MBROVERLAPS,
  OVERLAPS,
  MBRINTERSECTS,
  MBREQUAL,
  MBRDISJOINT,
  MBRCONTAINS,
  MASTER_POS_WAIT,
  MAKE_SET,
  MAKETIME,
  MAKEDATE,
  LTRIM,
  LPAD,
  LOWER,
  LOG2,
  LOG10,
  LOAD_FILE,
  LN,
  LINESTRINGFROMWKB,
  LINESTRINGFROMTEXT,
  LINEFROMWKB,
  LINEFROMTEXT,
  LEAST,
  LCASE,
  LAST_INSERT_ID,
  IS_USED_LOCK,
  IS_IPV6,
  IS_IPV4_MAPPED,
  IS_IPV4_COMPAT,
  IS_IPV4,
  IS_FREE_LOCK,
  ISSIMPLE,
  ISNULL,
  ISEMPTY,
  ISCLOSED,
  INTERSECTS,
  INTERIORRINGN,
  INSTR,
  INET_NTOA,
  INET_ATON,
  INET6_NTOA,
  INET6_ATON,
  IFNULL,
  HEX,
  GTID_SUBTRACT,
  GTID_SUBSET,
  GREATEST,
  GLENGTH,
  GET_LOCK,
  GET_FORMAT,
  GEOMFROMWKB,
  GEOMFROMTEXT,
  GEOMETRYTYPE,
  GEOMETRYN,
  GEOMETRYFROMWKB,
  GEOMETRYFROMTEXT,
  GEOMETRYCOLLECTIONFROMWKB,
  GEOMETRYCOLLECTIONFROMTEXT,
  GEOMCOLLFROMWKB,
  GEOMCOLLFROMTEXT,
  FROM_UNIXTIME,
  FROM_DAYS,
  FROM_BASE64,
  FLOOR,
  FIND_IN_SET,
  EXTRACTVALUE,
  EXTERIORRING,
  EXPORT_SET,
  EQUALS,
  ENVELOPE,
  ENDPOINT,
  ENCODE,
  ELT,
  DISJOINT,
  DIMENSION,
  DES_ENCRYPT,
  DES_DECRYPT,
  DEGREES,
  DECODE,
  DAYOFYEAR,
  DAYOFWEEK,
  DAYOFMONTH,
  DAYNAME,
  DATE_FORMAT,
  DATEDIFF,
  CROSSES,
  CREATE_DIGEST,
  CREATE_DH_PARAMETERS,
  CREATE_ASYMMETRIC_PUB_KEY,
  CREATE_ASYMMETRIC_PRIV_KEY,
  CRC32,
  COT,
  CONVERT_TZ,
  CONNECTION_ID,
  CONCAT_WS,
  COLLATION,
  COERCIBILITY,
  CHAR_LENGTH,
  CHARSET,
  CHARACTER_LENGTH,
  CENTROID,
  CEILING,
  CEIL,
  BIT_LENGTH,
  BIT_COUNT,
  BENCHMARK,
  ATAN2,
  ATAN,
  ASYMMETRIC_VERIFY,
  ASYMMETRIC_SIGN,
  ASYMMETRIC_ENCRYPT,
  ASYMMETRIC_DERIVE,
  ASYMMETRIC_DECRYPT,
  ASWKT,
  ASWKB,
  ASTEXT,
  ASIN,
  ASBINARY,
  AREA,
  AES_ENCRYPT,
  AES_DECRYPT,
  ADDTIME,
  ADDDATE,
  ACOS,
  ABS,
  MULTIPOLYGON,
  POLYGON,
  MULTIPOINT,
  MULTILINESTRING,
  LINESTRING,
  GEOMETRYCOLLECTION,
  SERIALIZABLE,
  UNCOMMITTED,
  COMMITTED,
  REPEATABLE,
  PERFOMANCE_SCHEMA,
  NDBCLUSTER,
  NDB,
  MRG_MYISAM,
  MYISAM,
  MEMORY,
  INNODB,
  FEDERATED,
  CSV,
  BLACKHOLE,
  ARCHIVE,
  UTF8MB4,
  UTF8MB3,
  FILESIZE_LITERAL,
  UTF8,
  UTF32,
  UTF16LE,
  UTF16,
  UJIS,
  UCS2,
  TIS620,
  SWE7,
  SJIS,
  MACROMAN,
  MACCE,
  LATIN7,
  LATIN5,
  LATIN2,
  LATIN1,
  KOI8U,
  KOI8R,
  KEYBCS2,
  HP8,
  HEBREW,
  GREEK,
  GEOSTD8,
  GBK,
  GB2312,
  EUCKR,
  EUCJPMS,
  DEC8,
  CP932,
  CP866,
  CP852,
  CP850,
  CP1257,
  CP1256,
  CP1251,
  CP1250,
  TWO_DECIMAL,
  ONE_DECIMAL,
  BIG5,
  ASCII,
  ARMSCII8,
  PRIVILEGES,
  SUPER,
  SHUTDOWN,
  RELOAD,
  EXECUTE,
  ROUTINE,
  WEEK,
  QUARTER,
  INTERNAL,
  JIS,
  EUR,
  XML,
  XA,
  X509,
  ZERO_DECIMAL,
  DECIMAL_LITERAL,
  WRAPPER,
  WORK,
  WITHOUT,
  WARNINGS,
  WAIT,
  VIEW,
  VARIABLES,
  VALIDATION,
  USER_RESOURCES,
  USE_FRM,
  UPGRADE,
  UNTIL,
  UNKNOWN,
  UNINSTALL,
  UNDO_BUFFER_SIZE,
  UNDOFILE,
  UNDEFINED,
  TRUNCATE,
  TRIGGERS,
  TRANSACTION,
  TRADITIONAL,
  THAN,
  TEMPTABLE,
  TEMPORARY,
  TABLESPACE,
  TABLES,
  SWITCHES,
  SWAPS,
  SUSPEND,
  SUBPARTITIONS,
  SUBPARTITION,
  SUBJECT,
  STORAGE,
  STOP,
  STATUS,
  STATS_SAMPLE_PAGES,
  STATS_PERSISTENT,
  STATS_AUTO_RECALC,
  STARTS,
  SQL_THREAD,
  SQL_NO_CACHE,
  SQL_CACHE,
  SQL_BUFFER_RESULT,
  SQL_BEFORE_GTIDS,
  SQL_AFTER_MTS_GAPS,
  SQL_AFTER_GTIDS,
  SOURCE,
  SOUNDS,
  SONAME,
  SOME,
  SOCKET,
  SNAPSHOT,
  SLOW,
  SLAVE,
  SIMPLE,
  SHARED,
  SHARE,
  SHA,
  SESSION,
  SECURITY,
  SCHEDULE,
  SAVEPOINT,
  POINT,
  ROW_FORMAT,
  ROTATE,
  ROLLUP,
  ROLLBACK,
  RETURNS,
  RESUME,
  RESET,
  REPLICATE_WILD_IGNORE_TABLE,
  REPLICATE_WILD_DO_TABLE,
  REPLICATE_REWRITE_DB,
  REPLICATE_IGNORE_TABLE,
  REPLICATE_IGNORE_DB,
  REPLICATE_DO_TABLE,
  REPLICATE_DO_DB,
  REPAIR,
  REORGANIZE,
  REMOVE,
  RELAYLOG,
  RELAY_LOG_POS,
  RELAY_LOG_FILE,
  RELAY,
  REDUNDANT,
  REDO_BUFFER_SIZE,
  BUFFER,
  RECOVER,
  REBUILD,
  QUICK,
  QUERY,
  PROXY,
  PROFILES,
  PROFILE,
  PROCESSLIST,
  PROCESS,
  PREV,
  PRESERVE,
  PREPARE,
  PRECEDES,
  PLUGINS,
  PLUGIN_DIR,
  PLUGIN,
  PHASE,
  PARTITIONS,
  PARTITIONING,
  PARTIAL,
  PARSER,
  PAGE,
  PACK_KEYS,
  OWNER,
  OPTIONS,
  OPTIMIZER_COSTS,
  COS,
  OPEN,
  ONLY,
  ONLINE,
  OLD_PASSWORD,
  OJ,
  OFFSET,
  OFFLINE,
  NONE,
  ONE,
  NODEGROUP,
  NEXT,
  NEVER,
  NCHAR,
  NAMES,
  MYSQL,
  MUTEX,
  MODIFY,
  MODE,
  MIN_ROWS,
  MIGRATE,
  MID,
  MERGE,
  MAX_USER_CONNECTIONS,
  MAX_UPDATES_PER_HOUR,
  MAX_SIZE,
  MAX_ROWS,
  MAX_QUERIES_PER_HOUR,
  MAX_CONNECTIONS_PER_HOUR,
  MASTER_USER,
  MASTER_TLS_VERSION,
  VERSION,
  MASTER_SSL_KEY,
  MASTER_SSL_CRLPATH,
  MASTER_SSL_CRL,
  MASTER_SSL_CIPHER,
  MASTER_SSL_CERT,
  MASTER_SSL_CAPATH,
  MASTER_SSL_CA,
  MASTER_RETRY_COUNT,
  MASTER_PORT,
  MASTER_PASSWORD,
  PASSWORD,
  MASTER_LOG_POS,
  MASTER_LOG_FILE,
  MASTER_HOST,
  MASTER_HEARTBEAT_PERIOD,
  MASTER_DELAY,
  MASTER_CONNECT_RETRY,
  MASTER_AUTO_POSITION,
  LOGS,
  LOGFILE,
  LIST,
  LEVEL,
  LESS,
  LEAVES,
  LAST,
  LANGUAGE,
  KEY_BLOCK_SIZE,
  JSON,
  ISSUER,
  ISOLATION,
  ISO,
  IPC,
  IO_THREAD,
  INVOKER,
  INSTANCE,
  TAN,
  INSTALL,
  INSERT_METHOD,
  INPLACE,
  INITIAL_SIZE,
  INDEXES,
  IMPORT,
  IGNORE_SERVER_IDS,
  IDENTIFIED,
  HOSTS,
  HOST,
  HELP,
  HASH,
  HANDLER,
  GROUP_REPLICATION,
  REPLICATION,
  GRANTS,
  GLOBAL,
  GENERAL,
  FUNCTION,
  FOLLOWS,
  FLUSH,
  FIXED,
  FIRST,
  FILTER,
  FILE_BLOCK_SIZE,
  FIELDS,
  FIELD,
  FAULTS,
  FAST,
  EXTENT_SIZE,
  EXTENDED,
  EXPORT,
  PORT,
  EXPIRE,
  PI,
  EXCLUSIVE,
  EXCHANGE,
  EVERY,
  EVENTS,
  EVENT,
  EVEN,
  ERRORS,
  ERROR,
  ENGINES,
  ENGINE,
  ENDS,
  ENCRYPTION,
  ENCRYPT,
  ENABLE,
  DYNAMIC,
  DUPLICATE,
  DUMPFILE,
  DISK,
  DISCARD,
  DISABLE,
  DIRECTORY,
  DES_KEY_FILE,
  DELAY_KEY_WRITE,
  DEFINER,
  DEFAULT_AUTH,
  DEALLOCATE,
  LOCATE,
  DATAFILE,
  CPU,
  COPY,
  CONTRIBUTORS,
  CONTEXT,
  CONTAINS,
  CONSISTENT,
  CONNECTION,
  CONCURRENT,
  COMPRESSION,
  COMPRESSED,
  COMPRESS,
  COMPLETION,
  COMPACT,
  COMMENT,
  COLUMN_FORMAT,
  FORMAT,
  COLUMNS,
  CODE,
  COALESCE,
  CLIENT,
  CIPHER,
  CHECKSUM,
  CHANNEL,
  CHANGED,
  CHAIN,
  CASCADED,
  CACHE,
  BTREE,
  BOOLEAN,
  BOOL,
  BLOCK,
  BEGIN,
  AVG_ROW_LENGTH,
  LENGTH,
  AUTO_INCREMENT,
  AUTOEXTEND_SIZE,
  END,
  AUTOCOMMIT,
  COMMIT,
  AUTHORS,
  ANY,
  ALGORITHM,
  AGGREGATE,
  AFTER,
  ACTION,
  ACCOUNT,
  UTC_TIMESTAMP,
  UTC_TIME,
  UTC_DATE,
  TRIM,
  SYSDATE,
  SUBSTRING,
  STRING,
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
  LOCAL,
  CURRENT_TIMESTAMP,
  CURRENT_TIME,
  CURRENT_DATE,
  VARIANCE,
  VAR_SAMP,
  VAR_POP,
  SUM,
  STDDEV_SAMP,
  STDDEV_POP,
  STDDEV,
  STD,
  GROUP_CONCAT,
  CONCAT,
  COUNT,
  BIT_XOR,
  BIT_OR,
  BIT_AND,
  BIT,
  AVG,
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
  ENUM,
  LONGTEXT,
  MEDIUMTEXT,
  TINYTEXT,
  LONGBLOB,
  MEDIUMBLOB,
  TINYBLOB,
  BLOB,
  VARBINARY,
  BINARY,
  CHARSET_NAME_L,
  VARCHAR,
  YEAR,
  DATETIME,
  TIMESTAMP,
  TIME,
  NUMERIC,
  DECIMAL,
  FLOAT,
  DOUBLE,
  REAL,
  BIGINT,
  INTEGER,
  MEDIUMINT,
  MEDIUM,
  SMALLINT,
  TINYINT,
  OVERWRITE,
  ZEROFILL,
  XOR,
  WITH,
  WHILE,
  WHERE,
  WHEN,
  VALUES,
  USING,
  SIN,
  USAGE,
  USA,
  UPDATE,
  DATE,
  UNSIGNED,
  SIGNED,
  SIGN,
  UNLOCK,
  UNIQUE,
  UNION,
  UNDO,
  DO,
  TRUE,
  TRIGGER,
  TRAILING,
  THEN,
  TERMINATED,
  TABLE,
  STRAIGHT_JOIN,
  STARTING,
  START,
  SQL_SMALL_RESULT,
  SQL_CALC_FOUND_ROWS,
  FOUND_ROWS,
  ROWS,
  FOUND,
  SQL_BIG_RESULT,
  SQLWARNING,
  SQLSTATE,
  SQLEXCEPTION,
  SQL,
  SPATIAL,
  SHOW,
  SEPARATOR,
  SET,
  SELECT,
  SCHEMAS,
  SCHEMA,
  RLIKE,
  RIGHT,
  REVOKE,
  RETURN,
  RESTRICT,
  REQUIRE,
  REPLACE,
  REPEAT,
  RENAME,
  NAME,
  RELEASE,
  REGEXP,
  REFERENCES,
  READS,
  READ,
  RANGE,
  PURGE,
  PROCEDURE,
  PRIMARY,
  PARTITION,
  OUTFILE,
  OUTER,
  ORDER,
  ORD,
  OPTIONALLY,
  OPTION,
  OPTIMIZE,
  NULL_LITERAL,
  NO_WRITE_TO_BINLOG,
  BINLOG,
  LOG,
  WRITE,
  NOT,
  NATURAL,
  MODIFIES,
  MOD,
  MAXVALUE,
  VALUE,
  MAX,
  MATCH,
  MASTER_SSL_VERIFY_SERVER_CERT,
  SERVER,
  MASTER_SSL,
  SSL,
  MASTER_BIND,
  BIN,
  MASTER,
  LOW_PRIORITY,
  LOOP,
  LOCK,
  LOAD,
  LINES,
  LINEAR,
  LIMIT,
  LIKE,
  LEFT,
  LEAVE,
  LEADING,
  KILL,
  KEYS,
  KEY,
  JOIN,
  ITERATE,
  INTO,
  TO,
  INTERVAL,
  INSERT,
  INOUT,
  OUT,
  INNER,
  INFILE,
  FILE,
  INDEX,
  IGNORE,
  NO,
  HIGH_PRIORITY,
  HAVING,
  GROUP,
  GRANT,
  FULLTEXT,
  FULL,
  TEXT,
  FROM,
  FOREIGN,
  FORCE,
  FETCH,
  FALSE,
  EXPLAIN,
  EXP,
  EXIT,
  EXISTS,
  X_FUNCTION,
  ESCAPED,
  ESCAPE,
  ENCLOSED,
  CLOSE,
  ELSEIF,
  IF,
  ELSE,
  EACH,
  DROP,
  DISTINCTROW,
  ROW,
  DISTINCT,
  DETERMINISTIC,
  MIN,
  IS,
  DESCRIBE,
  DESC,
  DELETE,
  DELAYED,
  DEFAULT,
  DECLARE,
  DATABASES,
  DATABASE,
  DATA,
  CURSOR,
  CURRENT_USER,
  USER,
  USE,
  CROSS,
  CREATE,
  CONVERT,
  CONV,
  CONTINUE,
  CONSTRAINT,
  INT,
  IN,
  CONDITION,
  IO,
  ON,
  COLUMN,
  COLLATE,
  AT,
  CHECK,
  CHARACTER,
  CHAR,
  CHANGE,
  CAST,
  CASE,
  CASCADE,
  CALL,
  BY,
  BOTH,
  BETWEEN,
  BEFORE,
  FOR,
  OR,
  ASC,
  AS,
  AND,
  ANALYZE,
  Y_FUNCTION,
  ALTER,
  ALL,
  ADD,
  SKIP,
  ID,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
