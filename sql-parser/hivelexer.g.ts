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
const GLOBAL_ID = chevrotain.createToken({
  name: 'GLOBAL_ID',
  pattern: /\@\@([A-Za-z0-9._\$]+|\`(\\|\`\`|[^(\`|\\)])*)/i,
  longer_alt: ID,
});
const LOCAL_ID = chevrotain.createToken({
  name: 'LOCAL_ID',
  pattern: /\@([A-Za-z0-9._\$]+|\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*)/i,
  longer_alt: ID,
});
const STRING_USER_NAME = chevrotain.createToken({
  name: 'STRING_USER_NAME',
  pattern: /(\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*|[A-Za-z_\$0-9*]+)\@(\'(\\|\'\'|[^(\'|\\)])*\'|\"(\\|\"\"|[^(\"|\\)])*\"|\`(\\|\`\`|[^(\`|\\)])*|[A-Za-z_\$0-9*]+)/i,
  longer_alt: ID,
});
const REVERSE_QUOTE_ID = chevrotain.createToken({
  name: 'REVERSE_QUOTE_ID',
  pattern: /\`[^\`]+\`/i,
  longer_alt: ID,
});
const DOT_ID = chevrotain.createToken({
  name: 'DOT_ID',
  pattern: /\.[A-Za-z_\$0-9*]+/i,
  longer_alt: ID,
});
const STRING_CHARSET_NAME = chevrotain.createToken({
  name: 'STRING_CHARSET_NAME',
  pattern: /_(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)/i,
  longer_alt: ID,
});
const BIT_STRING = chevrotain.createToken({
  name: 'BIT_STRING',
  pattern: /B\'[01]+\'/i,
  longer_alt: ID,
});
const NULL_SPEC_LITERAL = chevrotain.createToken({
  name: 'NULL_SPEC_LITERAL',
  pattern: /\\N/i,
  longer_alt: ID,
});
const REAL_LITERAL = chevrotain.createToken({
  name: 'REAL_LITERAL',
  pattern: /(([0-9]+)?\.[0-9]+|[0-9]+\.E\-?[0-9]+|([0-9]+)?\.([0-9]+E\-?[0-9]+)|[0-9]+E\-?[0-9]+)/i,
  longer_alt: ID,
});
const HEXADECIMAL_LITERAL = chevrotain.createToken({
  name: 'HEXADECIMAL_LITERAL',
  pattern: /(X\'([0-9A-F][0-9A-F])+\'|0X[0-9A-F]+)/i,
  longer_alt: ID,
});
const STRING_LITERAL = chevrotain.createToken({
  name: 'STRING_LITERAL',
  pattern: /(\"(\\|\"\"|[^(\"|\\)])*\"|\'(\\|\'\'|[^(\'|\\)])*\')/i,
  longer_alt: ID,
});
const START_NATIONAL_STRING_LITERAL = chevrotain.createToken({
  name: 'START_NATIONAL_STRING_LITERAL',
  pattern: /N\'(\\|\'\'|[^(\'|\\)])*\'/i,
  longer_alt: ID,
});
const CHARSET_REVERSE_QOUTE_STRING = chevrotain.createToken({
  name: 'CHARSET_REVERSE_QOUTE_STRING',
  pattern: /\`(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)\`/i,
  longer_alt: ID,
});
const COLON_SYMB = chevrotain.createToken({
  name: 'COLON_SYMB',
  pattern: /\:/i,
  longer_alt: ID,
});
const REVERSE_QUOTE_SYMB = chevrotain.createToken({
  name: 'REVERSE_QUOTE_SYMB',
  pattern: /\`/i,
  longer_alt: ID,
});
const DOUBLE_QUOTE_SYMB = chevrotain.createToken({
  name: 'DOUBLE_QUOTE_SYMB',
  pattern: /\"/i,
  longer_alt: ID,
});
const SINGLE_QUOTE_SYMB = chevrotain.createToken({
  name: 'SINGLE_QUOTE_SYMB',
  pattern: /\'/i,
  longer_alt: ID,
});
const AT_SIGN = chevrotain.createToken({
  name: 'AT_SIGN',
  pattern: /\@/i,
  longer_alt: ID,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /\;/i,
  longer_alt: ID,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/i,
  longer_alt: ID,
});
const RR_BRACKET = chevrotain.createToken({
  name: 'RR_BRACKET',
  pattern: /\)/i,
  longer_alt: ID,
});
const LR_BRACKET = chevrotain.createToken({
  name: 'LR_BRACKET',
  pattern: /\(/i,
  longer_alt: ID,
});
const DOT = chevrotain.createToken({
  name: 'DOT',
  pattern: /\./i,
  longer_alt: ID,
});
const BIT_XOR_OP = chevrotain.createToken({
  name: 'BIT_XOR_OP',
  pattern: /\^/i,
  longer_alt: ID,
});
const BIT_AND_OP = chevrotain.createToken({
  name: 'BIT_AND_OP',
  pattern: /\&/i,
  longer_alt: ID,
});
const BIT_OR_OP = chevrotain.createToken({
  name: 'BIT_OR_OP',
  pattern: /\|/i,
  longer_alt: ID,
});
const BIT_NOT_OP = chevrotain.createToken({
  name: 'BIT_NOT_OP',
  pattern: /\~/i,
  longer_alt: ID,
});
const EXCLAMATION_SYMBOL = chevrotain.createToken({
  name: 'EXCLAMATION_SYMBOL',
  pattern: /\!/i,
  longer_alt: ID,
});
const LESS_SYMBOL = chevrotain.createToken({
  name: 'LESS_SYMBOL',
  pattern: /\</i,
  longer_alt: ID,
});
const GREATER_SYMBOL = chevrotain.createToken({
  name: 'GREATER_SYMBOL',
  pattern: /\>/i,
  longer_alt: ID,
});
const EQUAL_SYMBOL = chevrotain.createToken({
  name: 'EQUAL_SYMBOL',
  pattern: /\=/i,
  longer_alt: ID,
});
const DIV = chevrotain.createToken({
  name: 'DIV',
  pattern: /DIV/i,
  longer_alt: ID,
});
const MINUS = chevrotain.createToken({
  name: 'MINUS',
  pattern: /\-/i,
  longer_alt: ID,
});
const MINUSMINUS = chevrotain.createToken({
  name: 'MINUSMINUS',
  pattern: /\-\-/i,
  longer_alt: ID,
});
const PLUS = chevrotain.createToken({
  name: 'PLUS',
  pattern: /\+/i,
  longer_alt: ID,
});
const MODULE = chevrotain.createToken({
  name: 'MODULE',
  pattern: /\%/i,
  longer_alt: ID,
});
const DIVIDE = chevrotain.createToken({
  name: 'DIVIDE',
  pattern: /\//i,
  longer_alt: ID,
});
const STAR = chevrotain.createToken({
  name: 'STAR',
  pattern: /\*/i,
  longer_alt: ID,
});
const OR_ASSIGN = chevrotain.createToken({
  name: 'OR_ASSIGN',
  pattern: /\|\=/i,
  longer_alt: ID,
});
const XOR_ASSIGN = chevrotain.createToken({
  name: 'XOR_ASSIGN',
  pattern: /\^\=/i,
  longer_alt: ID,
});
const AND_ASSIGN = chevrotain.createToken({
  name: 'AND_ASSIGN',
  pattern: /\&\=/i,
  longer_alt: ID,
});
const MOD_ASSIGN = chevrotain.createToken({
  name: 'MOD_ASSIGN',
  pattern: /\%\=/i,
  longer_alt: ID,
});
const DIV_ASSIGN = chevrotain.createToken({
  name: 'DIV_ASSIGN',
  pattern: /\/\=/i,
  longer_alt: ID,
});
const MULT_ASSIGN = chevrotain.createToken({
  name: 'MULT_ASSIGN',
  pattern: /\*\=/i,
  longer_alt: ID,
});
const MINUS_ASSIGN = chevrotain.createToken({
  name: 'MINUS_ASSIGN',
  pattern: /\-\=/i,
  longer_alt: ID,
});
const PLUS_ASSIGN = chevrotain.createToken({
  name: 'PLUS_ASSIGN',
  pattern: /\+\=/i,
  longer_alt: ID,
});
const VAR_ASSIGN = chevrotain.createToken({
  name: 'VAR_ASSIGN',
  pattern: /\:\=/i,
  longer_alt: ID,
});
const YEARWEEK = chevrotain.createToken({
  name: 'YEARWEEK',
  pattern: /YEARWEEK/i,
  longer_alt: ID,
});
const WEIGHT_STRING = chevrotain.createToken({
  name: 'WEIGHT_STRING',
  pattern: /WEIGHT_STRING/i,
  longer_alt: ID,
});
const WEEKOFYEAR = chevrotain.createToken({
  name: 'WEEKOFYEAR',
  pattern: /WEEKOFYEAR/i,
  longer_alt: ID,
});
const WEEKDAY = chevrotain.createToken({
  name: 'WEEKDAY',
  pattern: /WEEKDAY/i,
  longer_alt: ID,
});
const WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = chevrotain.createToken({
  name: 'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS',
  pattern: /WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS/i,
  longer_alt: ID,
});
const VALIDATE_PASSWORD_STRENGTH = chevrotain.createToken({
  name: 'VALIDATE_PASSWORD_STRENGTH',
  pattern: /VALIDATE_PASSWORD_STRENGTH/i,
  longer_alt: ID,
});
const UUID_SHORT = chevrotain.createToken({
  name: 'UUID_SHORT',
  pattern: /UUID_SHORT/i,
  longer_alt: ID,
});
const UUID = chevrotain.createToken({
  name: 'UUID',
  pattern: /UUID/i,
  longer_alt: ID,
});
const UPPER = chevrotain.createToken({
  name: 'UPPER',
  pattern: /UPPER/i,
  longer_alt: ID,
});
const UPDATEXML = chevrotain.createToken({
  name: 'UPDATEXML',
  pattern: /UPDATEXML/i,
  longer_alt: ID,
});
const UNIX_TIMESTAMP = chevrotain.createToken({
  name: 'UNIX_TIMESTAMP',
  pattern: /UNIX_TIMESTAMP/i,
  longer_alt: ID,
});
const UNHEX = chevrotain.createToken({
  name: 'UNHEX',
  pattern: /UNHEX/i,
  longer_alt: ID,
});
const UNCOMPRESSED_LENGTH = chevrotain.createToken({
  name: 'UNCOMPRESSED_LENGTH',
  pattern: /UNCOMPRESSED_LENGTH/i,
  longer_alt: ID,
});
const UNCOMPRESS = chevrotain.createToken({
  name: 'UNCOMPRESS',
  pattern: /UNCOMPRESS/i,
  longer_alt: ID,
});
const UCASE = chevrotain.createToken({
  name: 'UCASE',
  pattern: /UCASE/i,
  longer_alt: ID,
});
const TO_SECONDS = chevrotain.createToken({
  name: 'TO_SECONDS',
  pattern: /TO_SECONDS/i,
  longer_alt: ID,
});
const TO_DAYS = chevrotain.createToken({
  name: 'TO_DAYS',
  pattern: /TO_DAYS/i,
  longer_alt: ID,
});
const TO_BASE64 = chevrotain.createToken({
  name: 'TO_BASE64',
  pattern: /TO_BASE64/i,
  longer_alt: ID,
});
const TIME_TO_SEC = chevrotain.createToken({
  name: 'TIME_TO_SEC',
  pattern: /TIME_TO_SEC/i,
  longer_alt: ID,
});
const TIME_FORMAT = chevrotain.createToken({
  name: 'TIME_FORMAT',
  pattern: /TIME_FORMAT/i,
  longer_alt: ID,
});
const TIMESTAMPDIFF = chevrotain.createToken({
  name: 'TIMESTAMPDIFF',
  pattern: /TIMESTAMPDIFF/i,
  longer_alt: ID,
});
const TIMESTAMPADD = chevrotain.createToken({
  name: 'TIMESTAMPADD',
  pattern: /TIMESTAMPADD/i,
  longer_alt: ID,
});
const TIMEDIFF = chevrotain.createToken({
  name: 'TIMEDIFF',
  pattern: /TIMEDIFF/i,
  longer_alt: ID,
});
const SYSTEM_USER = chevrotain.createToken({
  name: 'SYSTEM_USER',
  pattern: /SYSTEM_USER/i,
  longer_alt: ID,
});
const SUBTIME = chevrotain.createToken({
  name: 'SUBTIME',
  pattern: /SUBTIME/i,
  longer_alt: ID,
});
const SUBSTRING_INDEX = chevrotain.createToken({
  name: 'SUBSTRING_INDEX',
  pattern: /SUBSTRING_INDEX/i,
  longer_alt: ID,
});
const SUBDATE = chevrotain.createToken({
  name: 'SUBDATE',
  pattern: /SUBDATE/i,
  longer_alt: ID,
});
const ST_Y = chevrotain.createToken({
  name: 'ST_Y',
  pattern: /ST_Y/i,
  longer_alt: ID,
});
const ST_X = chevrotain.createToken({
  name: 'ST_X',
  pattern: /ST_X/i,
  longer_alt: ID,
});
const ST_WITHIN = chevrotain.createToken({
  name: 'ST_WITHIN',
  pattern: /ST_WITHIN/i,
  longer_alt: ID,
});
const ST_UNION = chevrotain.createToken({
  name: 'ST_UNION',
  pattern: /ST_UNION/i,
  longer_alt: ID,
});
const ST_TOUCHES = chevrotain.createToken({
  name: 'ST_TOUCHES',
  pattern: /ST_TOUCHES/i,
  longer_alt: ID,
});
const ST_SYMDIFFERENCE = chevrotain.createToken({
  name: 'ST_SYMDIFFERENCE',
  pattern: /ST_SYMDIFFERENCE/i,
  longer_alt: ID,
});
const ST_STARTPOINT = chevrotain.createToken({
  name: 'ST_STARTPOINT',
  pattern: /ST_STARTPOINT/i,
  longer_alt: ID,
});
const ST_SRID = chevrotain.createToken({
  name: 'ST_SRID',
  pattern: /ST_SRID/i,
  longer_alt: ID,
});
const ST_POLYGONFROMWKB = chevrotain.createToken({
  name: 'ST_POLYGONFROMWKB',
  pattern: /ST_POLYGONFROMWKB/i,
  longer_alt: ID,
});
const ST_POLYGONFROMTEXT = chevrotain.createToken({
  name: 'ST_POLYGONFROMTEXT',
  pattern: /ST_POLYGONFROMTEXT/i,
  longer_alt: ID,
});
const ST_POLYFROMWKB = chevrotain.createToken({
  name: 'ST_POLYFROMWKB',
  pattern: /ST_POLYFROMWKB/i,
  longer_alt: ID,
});
const ST_POLYFROMTEXT = chevrotain.createToken({
  name: 'ST_POLYFROMTEXT',
  pattern: /ST_POLYFROMTEXT/i,
  longer_alt: ID,
});
const ST_POINTN = chevrotain.createToken({
  name: 'ST_POINTN',
  pattern: /ST_POINTN/i,
  longer_alt: ID,
});
const ST_POINTFROMWKB = chevrotain.createToken({
  name: 'ST_POINTFROMWKB',
  pattern: /ST_POINTFROMWKB/i,
  longer_alt: ID,
});
const ST_POINTFROMTEXT = chevrotain.createToken({
  name: 'ST_POINTFROMTEXT',
  pattern: /ST_POINTFROMTEXT/i,
  longer_alt: ID,
});
const ST_OVERLAPS = chevrotain.createToken({
  name: 'ST_OVERLAPS',
  pattern: /ST_OVERLAPS/i,
  longer_alt: ID,
});
const ST_NUMPOINTS = chevrotain.createToken({
  name: 'ST_NUMPOINTS',
  pattern: /ST_NUMPOINTS/i,
  longer_alt: ID,
});
const ST_NUMINTERIORRINGS = chevrotain.createToken({
  name: 'ST_NUMINTERIORRINGS',
  pattern: /ST_NUMINTERIORRINGS/i,
  longer_alt: ID,
});
const ST_NUMINTERIORRING = chevrotain.createToken({
  name: 'ST_NUMINTERIORRING',
  pattern: /ST_NUMINTERIORRING/i,
  longer_alt: ID,
});
const ST_NUMGEOMETRIES = chevrotain.createToken({
  name: 'ST_NUMGEOMETRIES',
  pattern: /ST_NUMGEOMETRIES/i,
  longer_alt: ID,
});
const ST_LINESTRINGFROMWKB = chevrotain.createToken({
  name: 'ST_LINESTRINGFROMWKB',
  pattern: /ST_LINESTRINGFROMWKB/i,
  longer_alt: ID,
});
const ST_LINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'ST_LINESTRINGFROMTEXT',
  pattern: /ST_LINESTRINGFROMTEXT/i,
  longer_alt: ID,
});
const ST_LINEFROMWKB = chevrotain.createToken({
  name: 'ST_LINEFROMWKB',
  pattern: /ST_LINEFROMWKB/i,
  longer_alt: ID,
});
const ST_LINEFROMTEXT = chevrotain.createToken({
  name: 'ST_LINEFROMTEXT',
  pattern: /ST_LINEFROMTEXT/i,
  longer_alt: ID,
});
const ST_ISSIMPLE = chevrotain.createToken({
  name: 'ST_ISSIMPLE',
  pattern: /ST_ISSIMPLE/i,
  longer_alt: ID,
});
const ST_ISEMPTY = chevrotain.createToken({
  name: 'ST_ISEMPTY',
  pattern: /ST_ISEMPTY/i,
  longer_alt: ID,
});
const ST_ISCLOSED = chevrotain.createToken({
  name: 'ST_ISCLOSED',
  pattern: /ST_ISCLOSED/i,
  longer_alt: ID,
});
const ST_INTERSECTS = chevrotain.createToken({
  name: 'ST_INTERSECTS',
  pattern: /ST_INTERSECTS/i,
  longer_alt: ID,
});
const ST_INTERSECTION = chevrotain.createToken({
  name: 'ST_INTERSECTION',
  pattern: /ST_INTERSECTION/i,
  longer_alt: ID,
});
const ST_INTERIORRINGN = chevrotain.createToken({
  name: 'ST_INTERIORRINGN',
  pattern: /ST_INTERIORRINGN/i,
  longer_alt: ID,
});
const ST_GEOMFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMFROMWKB',
  pattern: /ST_GEOMFROMWKB/i,
  longer_alt: ID,
});
const ST_GEOMFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMFROMTEXT',
  pattern: /ST_GEOMFROMTEXT/i,
  longer_alt: ID,
});
const ST_GEOMETRYTYPE = chevrotain.createToken({
  name: 'ST_GEOMETRYTYPE',
  pattern: /ST_GEOMETRYTYPE/i,
  longer_alt: ID,
});
const ST_GEOMETRYN = chevrotain.createToken({
  name: 'ST_GEOMETRYN',
  pattern: /ST_GEOMETRYN/i,
  longer_alt: ID,
});
const ST_GEOMETRYFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMETRYFROMWKB',
  pattern: /ST_GEOMETRYFROMWKB/i,
  longer_alt: ID,
});
const ST_GEOMETRYFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMETRYFROMTEXT',
  pattern: /ST_GEOMETRYFROMTEXT/i,
  longer_alt: ID,
});
const ST_GEOMETRYCOLLECTIONFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMETRYCOLLECTIONFROMWKB',
  pattern: /ST_GEOMETRYCOLLECTIONFROMWKB/i,
  longer_alt: ID,
});
const ST_GEOMETRYCOLLECTIONFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMETRYCOLLECTIONFROMTEXT',
  pattern: /ST_GEOMETRYCOLLECTIONFROMTEXT/i,
  longer_alt: ID,
});
const ST_GEOMCOLLFROMWKB = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMWKB',
  pattern: /ST_GEOMCOLLFROMWKB/i,
  longer_alt: ID,
});
const ST_GEOMCOLLFROMTXT = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMTXT',
  pattern: /ST_GEOMCOLLFROMTXT/i,
  longer_alt: ID,
});
const ST_GEOMCOLLFROMTEXT = chevrotain.createToken({
  name: 'ST_GEOMCOLLFROMTEXT',
  pattern: /ST_GEOMCOLLFROMTEXT/i,
  longer_alt: ID,
});
const ST_EXTERIORRING = chevrotain.createToken({
  name: 'ST_EXTERIORRING',
  pattern: /ST_EXTERIORRING/i,
  longer_alt: ID,
});
const ST_EQUALS = chevrotain.createToken({
  name: 'ST_EQUALS',
  pattern: /ST_EQUALS/i,
  longer_alt: ID,
});
const ST_ENVELOPE = chevrotain.createToken({
  name: 'ST_ENVELOPE',
  pattern: /ST_ENVELOPE/i,
  longer_alt: ID,
});
const ST_ENDPOINT = chevrotain.createToken({
  name: 'ST_ENDPOINT',
  pattern: /ST_ENDPOINT/i,
  longer_alt: ID,
});
const ST_DISTANCE = chevrotain.createToken({
  name: 'ST_DISTANCE',
  pattern: /ST_DISTANCE/i,
  longer_alt: ID,
});
const ST_DISJOINT = chevrotain.createToken({
  name: 'ST_DISJOINT',
  pattern: /ST_DISJOINT/i,
  longer_alt: ID,
});
const ST_DIMENSION = chevrotain.createToken({
  name: 'ST_DIMENSION',
  pattern: /ST_DIMENSION/i,
  longer_alt: ID,
});
const ST_DIFFERENCE = chevrotain.createToken({
  name: 'ST_DIFFERENCE',
  pattern: /ST_DIFFERENCE/i,
  longer_alt: ID,
});
const ST_CROSSES = chevrotain.createToken({
  name: 'ST_CROSSES',
  pattern: /ST_CROSSES/i,
  longer_alt: ID,
});
const ST_CONTAINS = chevrotain.createToken({
  name: 'ST_CONTAINS',
  pattern: /ST_CONTAINS/i,
  longer_alt: ID,
});
const ST_CENTROID = chevrotain.createToken({
  name: 'ST_CENTROID',
  pattern: /ST_CENTROID/i,
  longer_alt: ID,
});
const ST_BUFFER = chevrotain.createToken({
  name: 'ST_BUFFER',
  pattern: /ST_BUFFER/i,
  longer_alt: ID,
});
const ST_ASWKT = chevrotain.createToken({
  name: 'ST_ASWKT',
  pattern: /ST_ASWKT/i,
  longer_alt: ID,
});
const ST_ASWKB = chevrotain.createToken({
  name: 'ST_ASWKB',
  pattern: /ST_ASWKB/i,
  longer_alt: ID,
});
const ST_ASTEXT = chevrotain.createToken({
  name: 'ST_ASTEXT',
  pattern: /ST_ASTEXT/i,
  longer_alt: ID,
});
const ST_ASBINARY = chevrotain.createToken({
  name: 'ST_ASBINARY',
  pattern: /ST_ASBINARY/i,
  longer_alt: ID,
});
const ST_AREA = chevrotain.createToken({
  name: 'ST_AREA',
  pattern: /ST_AREA/i,
  longer_alt: ID,
});
const STR_TO_DATE = chevrotain.createToken({
  name: 'STR_TO_DATE',
  pattern: /STR_TO_DATE/i,
  longer_alt: ID,
});
const STRCMP = chevrotain.createToken({
  name: 'STRCMP',
  pattern: /STRCMP/i,
  longer_alt: ID,
});
const STARTPOINT = chevrotain.createToken({
  name: 'STARTPOINT',
  pattern: /STARTPOINT/i,
  longer_alt: ID,
});
const SRID = chevrotain.createToken({
  name: 'SRID',
  pattern: /SRID/i,
  longer_alt: ID,
});
const SQRT = chevrotain.createToken({
  name: 'SQRT',
  pattern: /SQRT/i,
  longer_alt: ID,
});
const SQL_THREAD_WAIT_AFTER_GTIDS = chevrotain.createToken({
  name: 'SQL_THREAD_WAIT_AFTER_GTIDS',
  pattern: /SQL_THREAD_WAIT_AFTER_GTIDS/i,
  longer_alt: ID,
});
const SOUNDEX = chevrotain.createToken({
  name: 'SOUNDEX',
  pattern: /SOUNDEX/i,
  longer_alt: ID,
});
const SLEEP = chevrotain.createToken({
  name: 'SLEEP',
  pattern: /SLEEP/i,
  longer_alt: ID,
});
const SHA2 = chevrotain.createToken({
  name: 'SHA2',
  pattern: /SHA2/i,
  longer_alt: ID,
});
const SHA1 = chevrotain.createToken({
  name: 'SHA1',
  pattern: /SHA1/i,
  longer_alt: ID,
});
const SESSION_USER = chevrotain.createToken({
  name: 'SESSION_USER',
  pattern: /SESSION_USER/i,
  longer_alt: ID,
});
const SEC_TO_TIME = chevrotain.createToken({
  name: 'SEC_TO_TIME',
  pattern: /SEC_TO_TIME/i,
  longer_alt: ID,
});
const RTRIM = chevrotain.createToken({
  name: 'RTRIM',
  pattern: /RTRIM/i,
  longer_alt: ID,
});
const RPAD = chevrotain.createToken({
  name: 'RPAD',
  pattern: /RPAD/i,
  longer_alt: ID,
});
const ROW_COUNT = chevrotain.createToken({
  name: 'ROW_COUNT',
  pattern: /ROW_COUNT/i,
  longer_alt: ID,
});
const ROUND = chevrotain.createToken({
  name: 'ROUND',
  pattern: /ROUND/i,
  longer_alt: ID,
});
const REVERSE = chevrotain.createToken({
  name: 'REVERSE',
  pattern: /REVERSE/i,
  longer_alt: ID,
});
const RELEASE_LOCK = chevrotain.createToken({
  name: 'RELEASE_LOCK',
  pattern: /RELEASE_LOCK/i,
  longer_alt: ID,
});
const RANDOM_BYTES = chevrotain.createToken({
  name: 'RANDOM_BYTES',
  pattern: /RANDOM_BYTES/i,
  longer_alt: ID,
});
const RAND = chevrotain.createToken({
  name: 'RAND',
  pattern: /RAND/i,
  longer_alt: ID,
});
const RADIANS = chevrotain.createToken({
  name: 'RADIANS',
  pattern: /RADIANS/i,
  longer_alt: ID,
});
const QUOTE = chevrotain.createToken({
  name: 'QUOTE',
  pattern: /QUOTE/i,
  longer_alt: ID,
});
const POWER = chevrotain.createToken({
  name: 'POWER',
  pattern: /POWER/i,
  longer_alt: ID,
});
const POW = chevrotain.createToken({
  name: 'POW',
  pattern: /POW/i,
  longer_alt: ID,
});
const POINTN = chevrotain.createToken({
  name: 'POINTN',
  pattern: /POINTN/i,
  longer_alt: ID,
});
const PERIOD_DIFF = chevrotain.createToken({
  name: 'PERIOD_DIFF',
  pattern: /PERIOD_DIFF/i,
  longer_alt: ID,
});
const PERIOD_ADD = chevrotain.createToken({
  name: 'PERIOD_ADD',
  pattern: /PERIOD_ADD/i,
  longer_alt: ID,
});
const OCTET_LENGTH = chevrotain.createToken({
  name: 'OCTET_LENGTH',
  pattern: /OCTET_LENGTH/i,
  longer_alt: ID,
});
const OCT = chevrotain.createToken({
  name: 'OCT',
  pattern: /OCT/i,
  longer_alt: ID,
});
const NUMPOINTS = chevrotain.createToken({
  name: 'NUMPOINTS',
  pattern: /NUMPOINTS/i,
  longer_alt: ID,
});
const NUMINTERIORRINGS = chevrotain.createToken({
  name: 'NUMINTERIORRINGS',
  pattern: /NUMINTERIORRINGS/i,
  longer_alt: ID,
});
const NUMGEOMETRIES = chevrotain.createToken({
  name: 'NUMGEOMETRIES',
  pattern: /NUMGEOMETRIES/i,
  longer_alt: ID,
});
const NULLIF = chevrotain.createToken({
  name: 'NULLIF',
  pattern: /NULLIF/i,
  longer_alt: ID,
});
const NAME_CONST = chevrotain.createToken({
  name: 'NAME_CONST',
  pattern: /NAME_CONST/i,
  longer_alt: ID,
});
const MULTIPOLYGONFROMWKB = chevrotain.createToken({
  name: 'MULTIPOLYGONFROMWKB',
  pattern: /MULTIPOLYGONFROMWKB/i,
  longer_alt: ID,
});
const POLYGONFROMWKB = chevrotain.createToken({
  name: 'POLYGONFROMWKB',
  pattern: /POLYGONFROMWKB/i,
  longer_alt: ID,
});
const MULTIPOLYGONFROMTEXT = chevrotain.createToken({
  name: 'MULTIPOLYGONFROMTEXT',
  pattern: /MULTIPOLYGONFROMTEXT/i,
  longer_alt: ID,
});
const POLYGONFROMTEXT = chevrotain.createToken({
  name: 'POLYGONFROMTEXT',
  pattern: /POLYGONFROMTEXT/i,
  longer_alt: ID,
});
const MULTIPOINTFROMWKB = chevrotain.createToken({
  name: 'MULTIPOINTFROMWKB',
  pattern: /MULTIPOINTFROMWKB/i,
  longer_alt: ID,
});
const MULTIPOINTFROMTEXT = chevrotain.createToken({
  name: 'MULTIPOINTFROMTEXT',
  pattern: /MULTIPOINTFROMTEXT/i,
  longer_alt: ID,
});
const MULTILINESTRINGFROMWKB = chevrotain.createToken({
  name: 'MULTILINESTRINGFROMWKB',
  pattern: /MULTILINESTRINGFROMWKB/i,
  longer_alt: ID,
});
const MULTILINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'MULTILINESTRINGFROMTEXT',
  pattern: /MULTILINESTRINGFROMTEXT/i,
  longer_alt: ID,
});
const MPOLYFROMWKB = chevrotain.createToken({
  name: 'MPOLYFROMWKB',
  pattern: /MPOLYFROMWKB/i,
  longer_alt: ID,
});
const POLYFROMWKB = chevrotain.createToken({
  name: 'POLYFROMWKB',
  pattern: /POLYFROMWKB/i,
  longer_alt: ID,
});
const MPOLYFROMTEXT = chevrotain.createToken({
  name: 'MPOLYFROMTEXT',
  pattern: /MPOLYFROMTEXT/i,
  longer_alt: ID,
});
const POLYFROMTEXT = chevrotain.createToken({
  name: 'POLYFROMTEXT',
  pattern: /POLYFROMTEXT/i,
  longer_alt: ID,
});
const MPOINTFROMWKB = chevrotain.createToken({
  name: 'MPOINTFROMWKB',
  pattern: /MPOINTFROMWKB/i,
  longer_alt: ID,
});
const POINTFROMWKB = chevrotain.createToken({
  name: 'POINTFROMWKB',
  pattern: /POINTFROMWKB/i,
  longer_alt: ID,
});
const MPOINTFROMTEXT = chevrotain.createToken({
  name: 'MPOINTFROMTEXT',
  pattern: /MPOINTFROMTEXT/i,
  longer_alt: ID,
});
const POINTFROMTEXT = chevrotain.createToken({
  name: 'POINTFROMTEXT',
  pattern: /POINTFROMTEXT/i,
  longer_alt: ID,
});
const MONTHNAME = chevrotain.createToken({
  name: 'MONTHNAME',
  pattern: /MONTHNAME/i,
  longer_alt: ID,
});
const MLINEFROMWKB = chevrotain.createToken({
  name: 'MLINEFROMWKB',
  pattern: /MLINEFROMWKB/i,
  longer_alt: ID,
});
const MLINEFROMTEXT = chevrotain.createToken({
  name: 'MLINEFROMTEXT',
  pattern: /MLINEFROMTEXT/i,
  longer_alt: ID,
});
const MD5 = chevrotain.createToken({
  name: 'MD5',
  pattern: /MD5/i,
  longer_alt: ID,
});
const MBRWITHIN = chevrotain.createToken({
  name: 'MBRWITHIN',
  pattern: /MBRWITHIN/i,
  longer_alt: ID,
});
const WITHIN = chevrotain.createToken({
  name: 'WITHIN',
  pattern: /WITHIN/i,
  longer_alt: ID,
});
const MBRTOUCHES = chevrotain.createToken({
  name: 'MBRTOUCHES',
  pattern: /MBRTOUCHES/i,
  longer_alt: ID,
});
const TOUCHES = chevrotain.createToken({
  name: 'TOUCHES',
  pattern: /TOUCHES/i,
  longer_alt: ID,
});
const MBROVERLAPS = chevrotain.createToken({
  name: 'MBROVERLAPS',
  pattern: /MBROVERLAPS/i,
  longer_alt: ID,
});
const OVERLAPS = chevrotain.createToken({
  name: 'OVERLAPS',
  pattern: /OVERLAPS/i,
  longer_alt: ID,
});
const MBRINTERSECTS = chevrotain.createToken({
  name: 'MBRINTERSECTS',
  pattern: /MBRINTERSECTS/i,
  longer_alt: ID,
});
const MBREQUAL = chevrotain.createToken({
  name: 'MBREQUAL',
  pattern: /MBREQUAL/i,
  longer_alt: ID,
});
const MBRDISJOINT = chevrotain.createToken({
  name: 'MBRDISJOINT',
  pattern: /MBRDISJOINT/i,
  longer_alt: ID,
});
const MBRCONTAINS = chevrotain.createToken({
  name: 'MBRCONTAINS',
  pattern: /MBRCONTAINS/i,
  longer_alt: ID,
});
const MASTER_POS_WAIT = chevrotain.createToken({
  name: 'MASTER_POS_WAIT',
  pattern: /MASTER_POS_WAIT/i,
  longer_alt: ID,
});
const MAKE_SET = chevrotain.createToken({
  name: 'MAKE_SET',
  pattern: /MAKE_SET/i,
  longer_alt: ID,
});
const MAKETIME = chevrotain.createToken({
  name: 'MAKETIME',
  pattern: /MAKETIME/i,
  longer_alt: ID,
});
const MAKEDATE = chevrotain.createToken({
  name: 'MAKEDATE',
  pattern: /MAKEDATE/i,
  longer_alt: ID,
});
const LTRIM = chevrotain.createToken({
  name: 'LTRIM',
  pattern: /LTRIM/i,
  longer_alt: ID,
});
const LPAD = chevrotain.createToken({
  name: 'LPAD',
  pattern: /LPAD/i,
  longer_alt: ID,
});
const LOWER = chevrotain.createToken({
  name: 'LOWER',
  pattern: /LOWER/i,
  longer_alt: ID,
});
const LOG2 = chevrotain.createToken({
  name: 'LOG2',
  pattern: /LOG2/i,
  longer_alt: ID,
});
const LOG10 = chevrotain.createToken({
  name: 'LOG10',
  pattern: /LOG10/i,
  longer_alt: ID,
});
const LOAD_FILE = chevrotain.createToken({
  name: 'LOAD_FILE',
  pattern: /LOAD_FILE/i,
  longer_alt: ID,
});
const LN = chevrotain.createToken({
  name: 'LN',
  pattern: /LN/i,
  longer_alt: ID,
});
const LINESTRINGFROMWKB = chevrotain.createToken({
  name: 'LINESTRINGFROMWKB',
  pattern: /LINESTRINGFROMWKB/i,
  longer_alt: ID,
});
const LINESTRINGFROMTEXT = chevrotain.createToken({
  name: 'LINESTRINGFROMTEXT',
  pattern: /LINESTRINGFROMTEXT/i,
  longer_alt: ID,
});
const LINEFROMWKB = chevrotain.createToken({
  name: 'LINEFROMWKB',
  pattern: /LINEFROMWKB/i,
  longer_alt: ID,
});
const LINEFROMTEXT = chevrotain.createToken({
  name: 'LINEFROMTEXT',
  pattern: /LINEFROMTEXT/i,
  longer_alt: ID,
});
const LEAST = chevrotain.createToken({
  name: 'LEAST',
  pattern: /LEAST/i,
  longer_alt: ID,
});
const LCASE = chevrotain.createToken({
  name: 'LCASE',
  pattern: /LCASE/i,
  longer_alt: ID,
});
const LAST_INSERT_ID = chevrotain.createToken({
  name: 'LAST_INSERT_ID',
  pattern: /LAST_INSERT_ID/i,
  longer_alt: ID,
});
const IS_USED_LOCK = chevrotain.createToken({
  name: 'IS_USED_LOCK',
  pattern: /IS_USED_LOCK/i,
  longer_alt: ID,
});
const IS_IPV6 = chevrotain.createToken({
  name: 'IS_IPV6',
  pattern: /IS_IPV6/i,
  longer_alt: ID,
});
const IS_IPV4_MAPPED = chevrotain.createToken({
  name: 'IS_IPV4_MAPPED',
  pattern: /IS_IPV4_MAPPED/i,
  longer_alt: ID,
});
const IS_IPV4_COMPAT = chevrotain.createToken({
  name: 'IS_IPV4_COMPAT',
  pattern: /IS_IPV4_COMPAT/i,
  longer_alt: ID,
});
const IS_IPV4 = chevrotain.createToken({
  name: 'IS_IPV4',
  pattern: /IS_IPV4/i,
  longer_alt: ID,
});
const IS_FREE_LOCK = chevrotain.createToken({
  name: 'IS_FREE_LOCK',
  pattern: /IS_FREE_LOCK/i,
  longer_alt: ID,
});
const ISSIMPLE = chevrotain.createToken({
  name: 'ISSIMPLE',
  pattern: /ISSIMPLE/i,
  longer_alt: ID,
});
const ISNULL = chevrotain.createToken({
  name: 'ISNULL',
  pattern: /ISNULL/i,
  longer_alt: ID,
});
const ISEMPTY = chevrotain.createToken({
  name: 'ISEMPTY',
  pattern: /ISEMPTY/i,
  longer_alt: ID,
});
const ISCLOSED = chevrotain.createToken({
  name: 'ISCLOSED',
  pattern: /ISCLOSED/i,
  longer_alt: ID,
});
const INTERSECTS = chevrotain.createToken({
  name: 'INTERSECTS',
  pattern: /INTERSECTS/i,
  longer_alt: ID,
});
const INTERIORRINGN = chevrotain.createToken({
  name: 'INTERIORRINGN',
  pattern: /INTERIORRINGN/i,
  longer_alt: ID,
});
const INSTR = chevrotain.createToken({
  name: 'INSTR',
  pattern: /INSTR/i,
  longer_alt: ID,
});
const INET_NTOA = chevrotain.createToken({
  name: 'INET_NTOA',
  pattern: /INET_NTOA/i,
  longer_alt: ID,
});
const INET_ATON = chevrotain.createToken({
  name: 'INET_ATON',
  pattern: /INET_ATON/i,
  longer_alt: ID,
});
const INET6_NTOA = chevrotain.createToken({
  name: 'INET6_NTOA',
  pattern: /INET6_NTOA/i,
  longer_alt: ID,
});
const INET6_ATON = chevrotain.createToken({
  name: 'INET6_ATON',
  pattern: /INET6_ATON/i,
  longer_alt: ID,
});
const IFNULL = chevrotain.createToken({
  name: 'IFNULL',
  pattern: /IFNULL/i,
  longer_alt: ID,
});
const HEX = chevrotain.createToken({
  name: 'HEX',
  pattern: /HEX/i,
  longer_alt: ID,
});
const GTID_SUBTRACT = chevrotain.createToken({
  name: 'GTID_SUBTRACT',
  pattern: /GTID_SUBTRACT/i,
  longer_alt: ID,
});
const GTID_SUBSET = chevrotain.createToken({
  name: 'GTID_SUBSET',
  pattern: /GTID_SUBSET/i,
  longer_alt: ID,
});
const GREATEST = chevrotain.createToken({
  name: 'GREATEST',
  pattern: /GREATEST/i,
  longer_alt: ID,
});
const GLENGTH = chevrotain.createToken({
  name: 'GLENGTH',
  pattern: /GLENGTH/i,
  longer_alt: ID,
});
const GET_LOCK = chevrotain.createToken({
  name: 'GET_LOCK',
  pattern: /GET_LOCK/i,
  longer_alt: ID,
});
const GET_FORMAT = chevrotain.createToken({
  name: 'GET_FORMAT',
  pattern: /GET_FORMAT/i,
  longer_alt: ID,
});
const GEOMFROMWKB = chevrotain.createToken({
  name: 'GEOMFROMWKB',
  pattern: /GEOMFROMWKB/i,
  longer_alt: ID,
});
const GEOMFROMTEXT = chevrotain.createToken({
  name: 'GEOMFROMTEXT',
  pattern: /GEOMFROMTEXT/i,
  longer_alt: ID,
});
const GEOMETRYTYPE = chevrotain.createToken({
  name: 'GEOMETRYTYPE',
  pattern: /GEOMETRYTYPE/i,
  longer_alt: ID,
});
const GEOMETRYN = chevrotain.createToken({
  name: 'GEOMETRYN',
  pattern: /GEOMETRYN/i,
  longer_alt: ID,
});
const GEOMETRYFROMWKB = chevrotain.createToken({
  name: 'GEOMETRYFROMWKB',
  pattern: /GEOMETRYFROMWKB/i,
  longer_alt: ID,
});
const GEOMETRYFROMTEXT = chevrotain.createToken({
  name: 'GEOMETRYFROMTEXT',
  pattern: /GEOMETRYFROMTEXT/i,
  longer_alt: ID,
});
const GEOMETRYCOLLECTIONFROMWKB = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTIONFROMWKB',
  pattern: /GEOMETRYCOLLECTIONFROMWKB/i,
  longer_alt: ID,
});
const GEOMETRYCOLLECTIONFROMTEXT = chevrotain.createToken({
  name: 'GEOMETRYCOLLECTIONFROMTEXT',
  pattern: /GEOMETRYCOLLECTIONFROMTEXT/i,
  longer_alt: ID,
});
const GEOMCOLLFROMWKB = chevrotain.createToken({
  name: 'GEOMCOLLFROMWKB',
  pattern: /GEOMCOLLFROMWKB/i,
  longer_alt: ID,
});
const GEOMCOLLFROMTEXT = chevrotain.createToken({
  name: 'GEOMCOLLFROMTEXT',
  pattern: /GEOMCOLLFROMTEXT/i,
  longer_alt: ID,
});
const FROM_UNIXTIME = chevrotain.createToken({
  name: 'FROM_UNIXTIME',
  pattern: /FROM_UNIXTIME/i,
  longer_alt: ID,
});
const FROM_DAYS = chevrotain.createToken({
  name: 'FROM_DAYS',
  pattern: /FROM_DAYS/i,
  longer_alt: ID,
});
const FROM_BASE64 = chevrotain.createToken({
  name: 'FROM_BASE64',
  pattern: /FROM_BASE64/i,
  longer_alt: ID,
});
const FLOOR = chevrotain.createToken({
  name: 'FLOOR',
  pattern: /FLOOR/i,
  longer_alt: ID,
});
const FIND_IN_SET = chevrotain.createToken({
  name: 'FIND_IN_SET',
  pattern: /FIND_IN_SET/i,
  longer_alt: ID,
});
const EXTRACTVALUE = chevrotain.createToken({
  name: 'EXTRACTVALUE',
  pattern: /EXTRACTVALUE/i,
  longer_alt: ID,
});
const EXTERIORRING = chevrotain.createToken({
  name: 'EXTERIORRING',
  pattern: /EXTERIORRING/i,
  longer_alt: ID,
});
const EXPORT_SET = chevrotain.createToken({
  name: 'EXPORT_SET',
  pattern: /EXPORT_SET/i,
  longer_alt: ID,
});
const EQUALS = chevrotain.createToken({
  name: 'EQUALS',
  pattern: /EQUALS/i,
  longer_alt: ID,
});
const ENVELOPE = chevrotain.createToken({
  name: 'ENVELOPE',
  pattern: /ENVELOPE/i,
  longer_alt: ID,
});
const ENDPOINT = chevrotain.createToken({
  name: 'ENDPOINT',
  pattern: /ENDPOINT/i,
  longer_alt: ID,
});
const ENCODE = chevrotain.createToken({
  name: 'ENCODE',
  pattern: /ENCODE/i,
  longer_alt: ID,
});
const ELT = chevrotain.createToken({
  name: 'ELT',
  pattern: /ELT/i,
  longer_alt: ID,
});
const DISJOINT = chevrotain.createToken({
  name: 'DISJOINT',
  pattern: /DISJOINT/i,
  longer_alt: ID,
});
const DIMENSION = chevrotain.createToken({
  name: 'DIMENSION',
  pattern: /DIMENSION/i,
  longer_alt: ID,
});
const DES_ENCRYPT = chevrotain.createToken({
  name: 'DES_ENCRYPT',
  pattern: /DES_ENCRYPT/i,
  longer_alt: ID,
});
const DES_DECRYPT = chevrotain.createToken({
  name: 'DES_DECRYPT',
  pattern: /DES_DECRYPT/i,
  longer_alt: ID,
});
const DEGREES = chevrotain.createToken({
  name: 'DEGREES',
  pattern: /DEGREES/i,
  longer_alt: ID,
});
const DECODE = chevrotain.createToken({
  name: 'DECODE',
  pattern: /DECODE/i,
  longer_alt: ID,
});
const DAYOFYEAR = chevrotain.createToken({
  name: 'DAYOFYEAR',
  pattern: /DAYOFYEAR/i,
  longer_alt: ID,
});
const DAYOFWEEK = chevrotain.createToken({
  name: 'DAYOFWEEK',
  pattern: /DAYOFWEEK/i,
  longer_alt: ID,
});
const DAYOFMONTH = chevrotain.createToken({
  name: 'DAYOFMONTH',
  pattern: /DAYOFMONTH/i,
  longer_alt: ID,
});
const DAYNAME = chevrotain.createToken({
  name: 'DAYNAME',
  pattern: /DAYNAME/i,
  longer_alt: ID,
});
const DATE_FORMAT = chevrotain.createToken({
  name: 'DATE_FORMAT',
  pattern: /DATE_FORMAT/i,
  longer_alt: ID,
});
const DATEDIFF = chevrotain.createToken({
  name: 'DATEDIFF',
  pattern: /DATEDIFF/i,
  longer_alt: ID,
});
const CROSSES = chevrotain.createToken({
  name: 'CROSSES',
  pattern: /CROSSES/i,
  longer_alt: ID,
});
const CREATE_DIGEST = chevrotain.createToken({
  name: 'CREATE_DIGEST',
  pattern: /CREATE_DIGEST/i,
  longer_alt: ID,
});
const CREATE_DH_PARAMETERS = chevrotain.createToken({
  name: 'CREATE_DH_PARAMETERS',
  pattern: /CREATE_DH_PARAMETERS/i,
  longer_alt: ID,
});
const CREATE_ASYMMETRIC_PUB_KEY = chevrotain.createToken({
  name: 'CREATE_ASYMMETRIC_PUB_KEY',
  pattern: /CREATE_ASYMMETRIC_PUB_KEY/i,
  longer_alt: ID,
});
const CREATE_ASYMMETRIC_PRIV_KEY = chevrotain.createToken({
  name: 'CREATE_ASYMMETRIC_PRIV_KEY',
  pattern: /CREATE_ASYMMETRIC_PRIV_KEY/i,
  longer_alt: ID,
});
const CRC32 = chevrotain.createToken({
  name: 'CRC32',
  pattern: /CRC32/i,
  longer_alt: ID,
});
const COT = chevrotain.createToken({
  name: 'COT',
  pattern: /COT/i,
  longer_alt: ID,
});
const CONVERT_TZ = chevrotain.createToken({
  name: 'CONVERT_TZ',
  pattern: /CONVERT_TZ/i,
  longer_alt: ID,
});
const CONNECTION_ID = chevrotain.createToken({
  name: 'CONNECTION_ID',
  pattern: /CONNECTION_ID/i,
  longer_alt: ID,
});
const CONCAT_WS = chevrotain.createToken({
  name: 'CONCAT_WS',
  pattern: /CONCAT_WS/i,
  longer_alt: ID,
});
const COLLATION = chevrotain.createToken({
  name: 'COLLATION',
  pattern: /COLLATION/i,
  longer_alt: ID,
});
const COERCIBILITY = chevrotain.createToken({
  name: 'COERCIBILITY',
  pattern: /COERCIBILITY/i,
  longer_alt: ID,
});
const CHAR_LENGTH = chevrotain.createToken({
  name: 'CHAR_LENGTH',
  pattern: /CHAR_LENGTH/i,
  longer_alt: ID,
});
const CHARSET = chevrotain.createToken({
  name: 'CHARSET',
  pattern: /CHARSET/i,
  longer_alt: ID,
});
const CHARACTER_LENGTH = chevrotain.createToken({
  name: 'CHARACTER_LENGTH',
  pattern: /CHARACTER_LENGTH/i,
  longer_alt: ID,
});
const CENTROID = chevrotain.createToken({
  name: 'CENTROID',
  pattern: /CENTROID/i,
  longer_alt: ID,
});
const CEILING = chevrotain.createToken({
  name: 'CEILING',
  pattern: /CEILING/i,
  longer_alt: ID,
});
const CEIL = chevrotain.createToken({
  name: 'CEIL',
  pattern: /CEIL/i,
  longer_alt: ID,
});
const BIT_LENGTH = chevrotain.createToken({
  name: 'BIT_LENGTH',
  pattern: /BIT_LENGTH/i,
  longer_alt: ID,
});
const BIT_COUNT = chevrotain.createToken({
  name: 'BIT_COUNT',
  pattern: /BIT_COUNT/i,
  longer_alt: ID,
});
const BENCHMARK = chevrotain.createToken({
  name: 'BENCHMARK',
  pattern: /BENCHMARK/i,
  longer_alt: ID,
});
const ATAN2 = chevrotain.createToken({
  name: 'ATAN2',
  pattern: /ATAN2/i,
  longer_alt: ID,
});
const ATAN = chevrotain.createToken({
  name: 'ATAN',
  pattern: /ATAN/i,
  longer_alt: ID,
});
const ASYMMETRIC_VERIFY = chevrotain.createToken({
  name: 'ASYMMETRIC_VERIFY',
  pattern: /ASYMMETRIC_VERIFY/i,
  longer_alt: ID,
});
const ASYMMETRIC_SIGN = chevrotain.createToken({
  name: 'ASYMMETRIC_SIGN',
  pattern: /ASYMMETRIC_SIGN/i,
  longer_alt: ID,
});
const ASYMMETRIC_ENCRYPT = chevrotain.createToken({
  name: 'ASYMMETRIC_ENCRYPT',
  pattern: /ASYMMETRIC_ENCRYPT/i,
  longer_alt: ID,
});
const ASYMMETRIC_DERIVE = chevrotain.createToken({
  name: 'ASYMMETRIC_DERIVE',
  pattern: /ASYMMETRIC_DERIVE/i,
  longer_alt: ID,
});
const ASYMMETRIC_DECRYPT = chevrotain.createToken({
  name: 'ASYMMETRIC_DECRYPT',
  pattern: /ASYMMETRIC_DECRYPT/i,
  longer_alt: ID,
});
const ASWKT = chevrotain.createToken({
  name: 'ASWKT',
  pattern: /ASWKT/i,
  longer_alt: ID,
});
const ASWKB = chevrotain.createToken({
  name: 'ASWKB',
  pattern: /ASWKB/i,
  longer_alt: ID,
});
const ASTEXT = chevrotain.createToken({
  name: 'ASTEXT',
  pattern: /ASTEXT/i,
  longer_alt: ID,
});
const ASIN = chevrotain.createToken({
  name: 'ASIN',
  pattern: /ASIN/i,
  longer_alt: ID,
});
const ASBINARY = chevrotain.createToken({
  name: 'ASBINARY',
  pattern: /ASBINARY/i,
  longer_alt: ID,
});
const AREA = chevrotain.createToken({
  name: 'AREA',
  pattern: /AREA/i,
  longer_alt: ID,
});
const AES_ENCRYPT = chevrotain.createToken({
  name: 'AES_ENCRYPT',
  pattern: /AES_ENCRYPT/i,
  longer_alt: ID,
});
const AES_DECRYPT = chevrotain.createToken({
  name: 'AES_DECRYPT',
  pattern: /AES_DECRYPT/i,
  longer_alt: ID,
});
const ADDTIME = chevrotain.createToken({
  name: 'ADDTIME',
  pattern: /ADDTIME/i,
  longer_alt: ID,
});
const ADDDATE = chevrotain.createToken({
  name: 'ADDDATE',
  pattern: /ADDDATE/i,
  longer_alt: ID,
});
const ACOS = chevrotain.createToken({
  name: 'ACOS',
  pattern: /ACOS/i,
  longer_alt: ID,
});
const ABS = chevrotain.createToken({
  name: 'ABS',
  pattern: /ABS/i,
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
const SERIALIZABLE = chevrotain.createToken({
  name: 'SERIALIZABLE',
  pattern: /SERIALIZABLE/i,
  longer_alt: ID,
});
const UNCOMMITTED = chevrotain.createToken({
  name: 'UNCOMMITTED',
  pattern: /UNCOMMITTED/i,
  longer_alt: ID,
});
const COMMITTED = chevrotain.createToken({
  name: 'COMMITTED',
  pattern: /COMMITTED/i,
  longer_alt: ID,
});
const REPEATABLE = chevrotain.createToken({
  name: 'REPEATABLE',
  pattern: /REPEATABLE/i,
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
const MEMORY = chevrotain.createToken({
  name: 'MEMORY',
  pattern: /MEMORY/i,
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
const ARCHIVE = chevrotain.createToken({
  name: 'ARCHIVE',
  pattern: /ARCHIVE/i,
  longer_alt: ID,
});
const UTF8MB4 = chevrotain.createToken({
  name: 'UTF8MB4',
  pattern: /UTF8MB4/i,
  longer_alt: ID,
});
const UTF8MB3 = chevrotain.createToken({
  name: 'UTF8MB3',
  pattern: /UTF8MB3/i,
  longer_alt: ID,
});
const FILESIZE_LITERAL = chevrotain.createToken({
  name: 'FILESIZE_LITERAL',
  pattern: /[0-9]+(K|M|G|T)/i,
  longer_alt: ID,
});
const UTF8 = chevrotain.createToken({
  name: 'UTF8',
  pattern: /UTF8/i,
  longer_alt: ID,
});
const UTF32 = chevrotain.createToken({
  name: 'UTF32',
  pattern: /UTF32/i,
  longer_alt: ID,
});
const UTF16LE = chevrotain.createToken({
  name: 'UTF16LE',
  pattern: /UTF16LE/i,
  longer_alt: ID,
});
const UTF16 = chevrotain.createToken({
  name: 'UTF16',
  pattern: /UTF16/i,
  longer_alt: ID,
});
const UJIS = chevrotain.createToken({
  name: 'UJIS',
  pattern: /UJIS/i,
  longer_alt: ID,
});
const UCS2 = chevrotain.createToken({
  name: 'UCS2',
  pattern: /UCS2/i,
  longer_alt: ID,
});
const TIS620 = chevrotain.createToken({
  name: 'TIS620',
  pattern: /TIS620/i,
  longer_alt: ID,
});
const SWE7 = chevrotain.createToken({
  name: 'SWE7',
  pattern: /SWE7/i,
  longer_alt: ID,
});
const SJIS = chevrotain.createToken({
  name: 'SJIS',
  pattern: /SJIS/i,
  longer_alt: ID,
});
const MACROMAN = chevrotain.createToken({
  name: 'MACROMAN',
  pattern: /MACROMAN/i,
  longer_alt: ID,
});
const MACCE = chevrotain.createToken({
  name: 'MACCE',
  pattern: /MACCE/i,
  longer_alt: ID,
});
const LATIN7 = chevrotain.createToken({
  name: 'LATIN7',
  pattern: /LATIN7/i,
  longer_alt: ID,
});
const LATIN5 = chevrotain.createToken({
  name: 'LATIN5',
  pattern: /LATIN5/i,
  longer_alt: ID,
});
const LATIN2 = chevrotain.createToken({
  name: 'LATIN2',
  pattern: /LATIN2/i,
  longer_alt: ID,
});
const LATIN1 = chevrotain.createToken({
  name: 'LATIN1',
  pattern: /LATIN1/i,
  longer_alt: ID,
});
const KOI8U = chevrotain.createToken({
  name: 'KOI8U',
  pattern: /KOI8U/i,
  longer_alt: ID,
});
const KOI8R = chevrotain.createToken({
  name: 'KOI8R',
  pattern: /KOI8R/i,
  longer_alt: ID,
});
const KEYBCS2 = chevrotain.createToken({
  name: 'KEYBCS2',
  pattern: /KEYBCS2/i,
  longer_alt: ID,
});
const HP8 = chevrotain.createToken({
  name: 'HP8',
  pattern: /HP8/i,
  longer_alt: ID,
});
const HEBREW = chevrotain.createToken({
  name: 'HEBREW',
  pattern: /HEBREW/i,
  longer_alt: ID,
});
const GREEK = chevrotain.createToken({
  name: 'GREEK',
  pattern: /GREEK/i,
  longer_alt: ID,
});
const GEOSTD8 = chevrotain.createToken({
  name: 'GEOSTD8',
  pattern: /GEOSTD8/i,
  longer_alt: ID,
});
const GBK = chevrotain.createToken({
  name: 'GBK',
  pattern: /GBK/i,
  longer_alt: ID,
});
const GB2312 = chevrotain.createToken({
  name: 'GB2312',
  pattern: /GB2312/i,
  longer_alt: ID,
});
const EUCKR = chevrotain.createToken({
  name: 'EUCKR',
  pattern: /EUCKR/i,
  longer_alt: ID,
});
const EUCJPMS = chevrotain.createToken({
  name: 'EUCJPMS',
  pattern: /EUCJPMS/i,
  longer_alt: ID,
});
const DEC8 = chevrotain.createToken({
  name: 'DEC8',
  pattern: /DEC8/i,
  longer_alt: ID,
});
const CP932 = chevrotain.createToken({
  name: 'CP932',
  pattern: /CP932/i,
  longer_alt: ID,
});
const CP866 = chevrotain.createToken({
  name: 'CP866',
  pattern: /CP866/i,
  longer_alt: ID,
});
const CP852 = chevrotain.createToken({
  name: 'CP852',
  pattern: /CP852/i,
  longer_alt: ID,
});
const CP850 = chevrotain.createToken({
  name: 'CP850',
  pattern: /CP850/i,
  longer_alt: ID,
});
const CP1257 = chevrotain.createToken({
  name: 'CP1257',
  pattern: /CP1257/i,
  longer_alt: ID,
});
const CP1256 = chevrotain.createToken({
  name: 'CP1256',
  pattern: /CP1256/i,
  longer_alt: ID,
});
const CP1251 = chevrotain.createToken({
  name: 'CP1251',
  pattern: /CP1251/i,
  longer_alt: ID,
});
const CP1250 = chevrotain.createToken({
  name: 'CP1250',
  pattern: /CP1250/i,
  longer_alt: ID,
});
const TWO_DECIMAL = chevrotain.createToken({
  name: 'TWO_DECIMAL',
  pattern: /2/,
  longer_alt: DECIMAL_LITERAL,
});
const ONE_DECIMAL = chevrotain.createToken({
  name: 'ONE_DECIMAL',
  pattern: /1/,
  longer_alt: DECIMAL_LITERAL,
});
const BIG5 = chevrotain.createToken({
  name: 'BIG5',
  pattern: /BIG5/i,
  longer_alt: ID,
});
const ASCII = chevrotain.createToken({
  name: 'ASCII',
  pattern: /ASCII/i,
  longer_alt: ID,
});
const ARMSCII8 = chevrotain.createToken({
  name: 'ARMSCII8',
  pattern: /ARMSCII8/i,
  longer_alt: ID,
});
const PRIVILEGES = chevrotain.createToken({
  name: 'PRIVILEGES',
  pattern: /PRIVILEGES/i,
  longer_alt: ID,
});
const SUPER = chevrotain.createToken({
  name: 'SUPER',
  pattern: /SUPER/i,
  longer_alt: ID,
});
const SHUTDOWN = chevrotain.createToken({
  name: 'SHUTDOWN',
  pattern: /SHUTDOWN/i,
  longer_alt: ID,
});
const RELOAD = chevrotain.createToken({
  name: 'RELOAD',
  pattern: /RELOAD/i,
  longer_alt: ID,
});
const EXECUTE = chevrotain.createToken({
  name: 'EXECUTE',
  pattern: /EXECUTE/i,
  longer_alt: ID,
});
const ROUTINE = chevrotain.createToken({
  name: 'ROUTINE',
  pattern: /ROUTINE/i,
  longer_alt: ID,
});
const WEEK = chevrotain.createToken({
  name: 'WEEK',
  pattern: /WEEK/i,
  longer_alt: ID,
});
const QUARTER = chevrotain.createToken({
  name: 'QUARTER',
  pattern: /QUARTER/i,
  longer_alt: ID,
});
const INTERNAL = chevrotain.createToken({
  name: 'INTERNAL',
  pattern: /INTERNAL/i,
  longer_alt: ID,
});
const JIS = chevrotain.createToken({
  name: 'JIS',
  pattern: /JIS/i,
  longer_alt: ID,
});
const EUR = chevrotain.createToken({
  name: 'EUR',
  pattern: /EUR/i,
  longer_alt: ID,
});
const XML = chevrotain.createToken({
  name: 'XML',
  pattern: /XML/i,
  longer_alt: ID,
});
const XA = chevrotain.createToken({
  name: 'XA',
  pattern: /XA/i,
  longer_alt: ID,
});
const X509 = chevrotain.createToken({
  name: 'X509',
  pattern: /X509/i,
  longer_alt: ID,
});
const ZERO_DECIMAL = chevrotain.createToken({
  name: 'ZERO_DECIMAL',
  pattern: /0/,
  longer_alt: DECIMAL_LITERAL,
});
const WRAPPER = chevrotain.createToken({
  name: 'WRAPPER',
  pattern: /WRAPPER/i,
  longer_alt: ID,
});
const WORK = chevrotain.createToken({
  name: 'WORK',
  pattern: /WORK/i,
  longer_alt: ID,
});
const WITHOUT = chevrotain.createToken({
  name: 'WITHOUT',
  pattern: /WITHOUT/i,
  longer_alt: ID,
});
const WARNINGS = chevrotain.createToken({
  name: 'WARNINGS',
  pattern: /WARNINGS/i,
  longer_alt: ID,
});
const WAIT = chevrotain.createToken({
  name: 'WAIT',
  pattern: /WAIT/i,
  longer_alt: ID,
});
const VIEW = chevrotain.createToken({
  name: 'VIEW',
  pattern: /VIEW/i,
  longer_alt: ID,
});
const VARIABLES = chevrotain.createToken({
  name: 'VARIABLES',
  pattern: /VARIABLES/i,
  longer_alt: ID,
});
const VALIDATION = chevrotain.createToken({
  name: 'VALIDATION',
  pattern: /VALIDATION/i,
  longer_alt: ID,
});
const USER_RESOURCES = chevrotain.createToken({
  name: 'USER_RESOURCES',
  pattern: /USER_RESOURCES/i,
  longer_alt: ID,
});
const USE_FRM = chevrotain.createToken({
  name: 'USE_FRM',
  pattern: /USE_FRM/i,
  longer_alt: ID,
});
const UPGRADE = chevrotain.createToken({
  name: 'UPGRADE',
  pattern: /UPGRADE/i,
  longer_alt: ID,
});
const UNTIL = chevrotain.createToken({
  name: 'UNTIL',
  pattern: /UNTIL/i,
  longer_alt: ID,
});
const UNKNOWN = chevrotain.createToken({
  name: 'UNKNOWN',
  pattern: /UNKNOWN/i,
  longer_alt: ID,
});
const UNINSTALL = chevrotain.createToken({
  name: 'UNINSTALL',
  pattern: /UNINSTALL/i,
  longer_alt: ID,
});
const UNDO_BUFFER_SIZE = chevrotain.createToken({
  name: 'UNDO_BUFFER_SIZE',
  pattern: /UNDO_BUFFER_SIZE/i,
  longer_alt: ID,
});
const UNDOFILE = chevrotain.createToken({
  name: 'UNDOFILE',
  pattern: /UNDOFILE/i,
  longer_alt: ID,
});
const UNDEFINED = chevrotain.createToken({
  name: 'UNDEFINED',
  pattern: /UNDEFINED/i,
  longer_alt: ID,
});
const TRUNCATE = chevrotain.createToken({
  name: 'TRUNCATE',
  pattern: /TRUNCATE/i,
  longer_alt: ID,
});
const TRIGGERS = chevrotain.createToken({
  name: 'TRIGGERS',
  pattern: /TRIGGERS/i,
  longer_alt: ID,
});
const TRANSACTION = chevrotain.createToken({
  name: 'TRANSACTION',
  pattern: /TRANSACTION/i,
  longer_alt: ID,
});
const TRADITIONAL = chevrotain.createToken({
  name: 'TRADITIONAL',
  pattern: /TRADITIONAL/i,
  longer_alt: ID,
});
const THAN = chevrotain.createToken({
  name: 'THAN',
  pattern: /THAN/i,
  longer_alt: ID,
});
const TEMPTABLE = chevrotain.createToken({
  name: 'TEMPTABLE',
  pattern: /TEMPTABLE/i,
  longer_alt: ID,
});
const TEMPORARY = chevrotain.createToken({
  name: 'TEMPORARY',
  pattern: /TEMPORARY/i,
  longer_alt: ID,
});
const TABLESPACE = chevrotain.createToken({
  name: 'TABLESPACE',
  pattern: /TABLESPACE/i,
  longer_alt: ID,
});
const TABLES = chevrotain.createToken({
  name: 'TABLES',
  pattern: /TABLES/i,
  longer_alt: ID,
});
const SWITCHES = chevrotain.createToken({
  name: 'SWITCHES',
  pattern: /SWITCHES/i,
  longer_alt: ID,
});
const SWAPS = chevrotain.createToken({
  name: 'SWAPS',
  pattern: /SWAPS/i,
  longer_alt: ID,
});
const SUSPEND = chevrotain.createToken({
  name: 'SUSPEND',
  pattern: /SUSPEND/i,
  longer_alt: ID,
});
const SUBPARTITIONS = chevrotain.createToken({
  name: 'SUBPARTITIONS',
  pattern: /SUBPARTITIONS/i,
  longer_alt: ID,
});
const SUBPARTITION = chevrotain.createToken({
  name: 'SUBPARTITION',
  pattern: /SUBPARTITION/i,
  longer_alt: ID,
});
const SUBJECT = chevrotain.createToken({
  name: 'SUBJECT',
  pattern: /SUBJECT/i,
  longer_alt: ID,
});
const STORAGE = chevrotain.createToken({
  name: 'STORAGE',
  pattern: /STORAGE/i,
  longer_alt: ID,
});
const STOP = chevrotain.createToken({
  name: 'STOP',
  pattern: /STOP/i,
  longer_alt: ID,
});
const STATUS = chevrotain.createToken({
  name: 'STATUS',
  pattern: /STATUS/i,
  longer_alt: ID,
});
const STATS_SAMPLE_PAGES = chevrotain.createToken({
  name: 'STATS_SAMPLE_PAGES',
  pattern: /STATS_SAMPLE_PAGES/i,
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
const STARTS = chevrotain.createToken({
  name: 'STARTS',
  pattern: /STARTS/i,
  longer_alt: ID,
});
const SQL_THREAD = chevrotain.createToken({
  name: 'SQL_THREAD',
  pattern: /SQL_THREAD/i,
  longer_alt: ID,
});
const SQL_NO_CACHE = chevrotain.createToken({
  name: 'SQL_NO_CACHE',
  pattern: /SQL_NO_CACHE/i,
  longer_alt: ID,
});
const SQL_CACHE = chevrotain.createToken({
  name: 'SQL_CACHE',
  pattern: /SQL_CACHE/i,
  longer_alt: ID,
});
const SQL_BUFFER_RESULT = chevrotain.createToken({
  name: 'SQL_BUFFER_RESULT',
  pattern: /SQL_BUFFER_RESULT/i,
  longer_alt: ID,
});
const SQL_BEFORE_GTIDS = chevrotain.createToken({
  name: 'SQL_BEFORE_GTIDS',
  pattern: /SQL_BEFORE_GTIDS/i,
  longer_alt: ID,
});
const SQL_AFTER_MTS_GAPS = chevrotain.createToken({
  name: 'SQL_AFTER_MTS_GAPS',
  pattern: /SQL_AFTER_MTS_GAPS/i,
  longer_alt: ID,
});
const SQL_AFTER_GTIDS = chevrotain.createToken({
  name: 'SQL_AFTER_GTIDS',
  pattern: /SQL_AFTER_GTIDS/i,
  longer_alt: ID,
});
const SOURCE = chevrotain.createToken({
  name: 'SOURCE',
  pattern: /SOURCE/i,
  longer_alt: ID,
});
const SOUNDS = chevrotain.createToken({
  name: 'SOUNDS',
  pattern: /SOUNDS/i,
  longer_alt: ID,
});
const SONAME = chevrotain.createToken({
  name: 'SONAME',
  pattern: /SONAME/i,
  longer_alt: ID,
});
const SOME = chevrotain.createToken({
  name: 'SOME',
  pattern: /SOME/i,
  longer_alt: ID,
});
const SOCKET = chevrotain.createToken({
  name: 'SOCKET',
  pattern: /SOCKET/i,
  longer_alt: ID,
});
const SNAPSHOT = chevrotain.createToken({
  name: 'SNAPSHOT',
  pattern: /SNAPSHOT/i,
  longer_alt: ID,
});
const SLOW = chevrotain.createToken({
  name: 'SLOW',
  pattern: /SLOW/i,
  longer_alt: ID,
});
const SLAVE = chevrotain.createToken({
  name: 'SLAVE',
  pattern: /SLAVE/i,
  longer_alt: ID,
});
const SIMPLE = chevrotain.createToken({
  name: 'SIMPLE',
  pattern: /SIMPLE/i,
  longer_alt: ID,
});
const SHARED = chevrotain.createToken({
  name: 'SHARED',
  pattern: /SHARED/i,
  longer_alt: ID,
});
const SHARE = chevrotain.createToken({
  name: 'SHARE',
  pattern: /SHARE/i,
  longer_alt: ID,
});
const SHA = chevrotain.createToken({
  name: 'SHA',
  pattern: /SHA/i,
  longer_alt: ID,
});
const SESSION = chevrotain.createToken({
  name: 'SESSION',
  pattern: /SESSION/i,
  longer_alt: ID,
});
const SECURITY = chevrotain.createToken({
  name: 'SECURITY',
  pattern: /SECURITY/i,
  longer_alt: ID,
});
const SCHEDULE = chevrotain.createToken({
  name: 'SCHEDULE',
  pattern: /SCHEDULE/i,
  longer_alt: ID,
});
const SAVEPOINT = chevrotain.createToken({
  name: 'SAVEPOINT',
  pattern: /SAVEPOINT/i,
  longer_alt: ID,
});
const POINT = chevrotain.createToken({
  name: 'POINT',
  pattern: /POINT/i,
  longer_alt: ID,
});
const ROW_FORMAT = chevrotain.createToken({
  name: 'ROW_FORMAT',
  pattern: /ROW_FORMAT/i,
  longer_alt: ID,
});
const ROTATE = chevrotain.createToken({
  name: 'ROTATE',
  pattern: /ROTATE/i,
  longer_alt: ID,
});
const ROLLUP = chevrotain.createToken({
  name: 'ROLLUP',
  pattern: /ROLLUP/i,
  longer_alt: ID,
});
const ROLLBACK = chevrotain.createToken({
  name: 'ROLLBACK',
  pattern: /ROLLBACK/i,
  longer_alt: ID,
});
const RETURNS = chevrotain.createToken({
  name: 'RETURNS',
  pattern: /RETURNS/i,
  longer_alt: ID,
});
const RESUME = chevrotain.createToken({
  name: 'RESUME',
  pattern: /RESUME/i,
  longer_alt: ID,
});
const RESET = chevrotain.createToken({
  name: 'RESET',
  pattern: /RESET/i,
  longer_alt: ID,
});
const REPLICATE_WILD_IGNORE_TABLE = chevrotain.createToken({
  name: 'REPLICATE_WILD_IGNORE_TABLE',
  pattern: /REPLICATE_WILD_IGNORE_TABLE/i,
  longer_alt: ID,
});
const REPLICATE_WILD_DO_TABLE = chevrotain.createToken({
  name: 'REPLICATE_WILD_DO_TABLE',
  pattern: /REPLICATE_WILD_DO_TABLE/i,
  longer_alt: ID,
});
const REPLICATE_REWRITE_DB = chevrotain.createToken({
  name: 'REPLICATE_REWRITE_DB',
  pattern: /REPLICATE_REWRITE_DB/i,
  longer_alt: ID,
});
const REPLICATE_IGNORE_TABLE = chevrotain.createToken({
  name: 'REPLICATE_IGNORE_TABLE',
  pattern: /REPLICATE_IGNORE_TABLE/i,
  longer_alt: ID,
});
const REPLICATE_IGNORE_DB = chevrotain.createToken({
  name: 'REPLICATE_IGNORE_DB',
  pattern: /REPLICATE_IGNORE_DB/i,
  longer_alt: ID,
});
const REPLICATE_DO_TABLE = chevrotain.createToken({
  name: 'REPLICATE_DO_TABLE',
  pattern: /REPLICATE_DO_TABLE/i,
  longer_alt: ID,
});
const REPLICATE_DO_DB = chevrotain.createToken({
  name: 'REPLICATE_DO_DB',
  pattern: /REPLICATE_DO_DB/i,
  longer_alt: ID,
});
const REPAIR = chevrotain.createToken({
  name: 'REPAIR',
  pattern: /REPAIR/i,
  longer_alt: ID,
});
const REORGANIZE = chevrotain.createToken({
  name: 'REORGANIZE',
  pattern: /REORGANIZE/i,
  longer_alt: ID,
});
const REMOVE = chevrotain.createToken({
  name: 'REMOVE',
  pattern: /REMOVE/i,
  longer_alt: ID,
});
const RELAYLOG = chevrotain.createToken({
  name: 'RELAYLOG',
  pattern: /RELAYLOG/i,
  longer_alt: ID,
});
const RELAY_LOG_POS = chevrotain.createToken({
  name: 'RELAY_LOG_POS',
  pattern: /RELAY_LOG_POS/i,
  longer_alt: ID,
});
const RELAY_LOG_FILE = chevrotain.createToken({
  name: 'RELAY_LOG_FILE',
  pattern: /RELAY_LOG_FILE/i,
  longer_alt: ID,
});
const RELAY = chevrotain.createToken({
  name: 'RELAY',
  pattern: /RELAY/i,
  longer_alt: ID,
});
const REDUNDANT = chevrotain.createToken({
  name: 'REDUNDANT',
  pattern: /REDUNDANT/i,
  longer_alt: ID,
});
const REDO_BUFFER_SIZE = chevrotain.createToken({
  name: 'REDO_BUFFER_SIZE',
  pattern: /REDO_BUFFER_SIZE/i,
  longer_alt: ID,
});
const BUFFER = chevrotain.createToken({
  name: 'BUFFER',
  pattern: /BUFFER/i,
  longer_alt: ID,
});
const RECOVER = chevrotain.createToken({
  name: 'RECOVER',
  pattern: /RECOVER/i,
  longer_alt: ID,
});
const REBUILD = chevrotain.createToken({
  name: 'REBUILD',
  pattern: /REBUILD/i,
  longer_alt: ID,
});
const QUICK = chevrotain.createToken({
  name: 'QUICK',
  pattern: /QUICK/i,
  longer_alt: ID,
});
const QUERY = chevrotain.createToken({
  name: 'QUERY',
  pattern: /QUERY/i,
  longer_alt: ID,
});
const PROXY = chevrotain.createToken({
  name: 'PROXY',
  pattern: /PROXY/i,
  longer_alt: ID,
});
const PROFILES = chevrotain.createToken({
  name: 'PROFILES',
  pattern: /PROFILES/i,
  longer_alt: ID,
});
const PROFILE = chevrotain.createToken({
  name: 'PROFILE',
  pattern: /PROFILE/i,
  longer_alt: ID,
});
const PROCESSLIST = chevrotain.createToken({
  name: 'PROCESSLIST',
  pattern: /PROCESSLIST/i,
  longer_alt: ID,
});
const PROCESS = chevrotain.createToken({
  name: 'PROCESS',
  pattern: /PROCESS/i,
  longer_alt: ID,
});
const PREV = chevrotain.createToken({
  name: 'PREV',
  pattern: /PREV/i,
  longer_alt: ID,
});
const PRESERVE = chevrotain.createToken({
  name: 'PRESERVE',
  pattern: /PRESERVE/i,
  longer_alt: ID,
});
const PREPARE = chevrotain.createToken({
  name: 'PREPARE',
  pattern: /PREPARE/i,
  longer_alt: ID,
});
const PRECEDES = chevrotain.createToken({
  name: 'PRECEDES',
  pattern: /PRECEDES/i,
  longer_alt: ID,
});
const PLUGINS = chevrotain.createToken({
  name: 'PLUGINS',
  pattern: /PLUGINS/i,
  longer_alt: ID,
});
const PLUGIN_DIR = chevrotain.createToken({
  name: 'PLUGIN_DIR',
  pattern: /PLUGIN_DIR/i,
  longer_alt: ID,
});
const PLUGIN = chevrotain.createToken({
  name: 'PLUGIN',
  pattern: /PLUGIN/i,
  longer_alt: ID,
});
const PHASE = chevrotain.createToken({
  name: 'PHASE',
  pattern: /PHASE/i,
  longer_alt: ID,
});
const PARTITIONS = chevrotain.createToken({
  name: 'PARTITIONS',
  pattern: /PARTITIONS/i,
  longer_alt: ID,
});
const PARTITIONING = chevrotain.createToken({
  name: 'PARTITIONING',
  pattern: /PARTITIONING/i,
  longer_alt: ID,
});
const PARTIAL = chevrotain.createToken({
  name: 'PARTIAL',
  pattern: /PARTIAL/i,
  longer_alt: ID,
});
const PARSER = chevrotain.createToken({
  name: 'PARSER',
  pattern: /PARSER/i,
  longer_alt: ID,
});
const PAGE = chevrotain.createToken({
  name: 'PAGE',
  pattern: /PAGE/i,
  longer_alt: ID,
});
const PACK_KEYS = chevrotain.createToken({
  name: 'PACK_KEYS',
  pattern: /PACK_KEYS/i,
  longer_alt: ID,
});
const OWNER = chevrotain.createToken({
  name: 'OWNER',
  pattern: /OWNER/i,
  longer_alt: ID,
});
const OPTIONS = chevrotain.createToken({
  name: 'OPTIONS',
  pattern: /OPTIONS/i,
  longer_alt: ID,
});
const OPTIMIZER_COSTS = chevrotain.createToken({
  name: 'OPTIMIZER_COSTS',
  pattern: /OPTIMIZER_COSTS/i,
  longer_alt: ID,
});
const COS = chevrotain.createToken({
  name: 'COS',
  pattern: /COS/i,
  longer_alt: ID,
});
const OPEN = chevrotain.createToken({
  name: 'OPEN',
  pattern: /OPEN/i,
  longer_alt: ID,
});
const ONLY = chevrotain.createToken({
  name: 'ONLY',
  pattern: /ONLY/i,
  longer_alt: ID,
});
const ONLINE = chevrotain.createToken({
  name: 'ONLINE',
  pattern: /ONLINE/i,
  longer_alt: ID,
});
const OLD_PASSWORD = chevrotain.createToken({
  name: 'OLD_PASSWORD',
  pattern: /OLD_PASSWORD/i,
  longer_alt: ID,
});
const OJ = chevrotain.createToken({
  name: 'OJ',
  pattern: /OJ/i,
  longer_alt: ID,
});
const OFFSET = chevrotain.createToken({
  name: 'OFFSET',
  pattern: /OFFSET/i,
  longer_alt: ID,
});
const OFFLINE = chevrotain.createToken({
  name: 'OFFLINE',
  pattern: /OFFLINE/i,
  longer_alt: ID,
});
const NONE = chevrotain.createToken({
  name: 'NONE',
  pattern: /NONE/i,
  longer_alt: ID,
});
const NODEGROUP = chevrotain.createToken({
  name: 'NODEGROUP',
  pattern: /NODEGROUP/i,
  longer_alt: ID,
});
const NEXT = chevrotain.createToken({
  name: 'NEXT',
  pattern: /NEXT/i,
  longer_alt: ID,
});
const NEVER = chevrotain.createToken({
  name: 'NEVER',
  pattern: /NEVER/i,
  longer_alt: ID,
});
const NCHAR = chevrotain.createToken({
  name: 'NCHAR',
  pattern: /NCHAR/i,
  longer_alt: ID,
});
const NAMES = chevrotain.createToken({
  name: 'NAMES',
  pattern: /NAMES/i,
  longer_alt: ID,
});
const MYSQL = chevrotain.createToken({
  name: 'MYSQL',
  pattern: /MYSQL/i,
  longer_alt: ID,
});
const MUTEX = chevrotain.createToken({
  name: 'MUTEX',
  pattern: /MUTEX/i,
  longer_alt: ID,
});
const MODIFY = chevrotain.createToken({
  name: 'MODIFY',
  pattern: /MODIFY/i,
  longer_alt: ID,
});
const MODE = chevrotain.createToken({
  name: 'MODE',
  pattern: /MODE/i,
  longer_alt: ID,
});
const MIN_ROWS = chevrotain.createToken({
  name: 'MIN_ROWS',
  pattern: /MIN_ROWS/i,
  longer_alt: ID,
});
const MIGRATE = chevrotain.createToken({
  name: 'MIGRATE',
  pattern: /MIGRATE/i,
  longer_alt: ID,
});
const MID = chevrotain.createToken({
  name: 'MID',
  pattern: /MID/i,
  longer_alt: ID,
});
const MERGE = chevrotain.createToken({
  name: 'MERGE',
  pattern: /MERGE/i,
  longer_alt: ID,
});
const MAX_USER_CONNECTIONS = chevrotain.createToken({
  name: 'MAX_USER_CONNECTIONS',
  pattern: /MAX_USER_CONNECTIONS/i,
  longer_alt: ID,
});
const MAX_UPDATES_PER_HOUR = chevrotain.createToken({
  name: 'MAX_UPDATES_PER_HOUR',
  pattern: /MAX_UPDATES_PER_HOUR/i,
  longer_alt: ID,
});
const MAX_SIZE = chevrotain.createToken({
  name: 'MAX_SIZE',
  pattern: /MAX_SIZE/i,
  longer_alt: ID,
});
const MAX_ROWS = chevrotain.createToken({
  name: 'MAX_ROWS',
  pattern: /MAX_ROWS/i,
  longer_alt: ID,
});
const MAX_QUERIES_PER_HOUR = chevrotain.createToken({
  name: 'MAX_QUERIES_PER_HOUR',
  pattern: /MAX_QUERIES_PER_HOUR/i,
  longer_alt: ID,
});
const MAX_CONNECTIONS_PER_HOUR = chevrotain.createToken({
  name: 'MAX_CONNECTIONS_PER_HOUR',
  pattern: /MAX_CONNECTIONS_PER_HOUR/i,
  longer_alt: ID,
});
const MASTER_USER = chevrotain.createToken({
  name: 'MASTER_USER',
  pattern: /MASTER_USER/i,
  longer_alt: ID,
});
const MASTER_TLS_VERSION = chevrotain.createToken({
  name: 'MASTER_TLS_VERSION',
  pattern: /MASTER_TLS_VERSION/i,
  longer_alt: ID,
});
const VERSION = chevrotain.createToken({
  name: 'VERSION',
  pattern: /VERSION/i,
  longer_alt: ID,
});
const MASTER_SSL_KEY = chevrotain.createToken({
  name: 'MASTER_SSL_KEY',
  pattern: /MASTER_SSL_KEY/i,
  longer_alt: ID,
});
const MASTER_SSL_CRLPATH = chevrotain.createToken({
  name: 'MASTER_SSL_CRLPATH',
  pattern: /MASTER_SSL_CRLPATH/i,
  longer_alt: ID,
});
const MASTER_SSL_CRL = chevrotain.createToken({
  name: 'MASTER_SSL_CRL',
  pattern: /MASTER_SSL_CRL/i,
  longer_alt: ID,
});
const MASTER_SSL_CIPHER = chevrotain.createToken({
  name: 'MASTER_SSL_CIPHER',
  pattern: /MASTER_SSL_CIPHER/i,
  longer_alt: ID,
});
const MASTER_SSL_CERT = chevrotain.createToken({
  name: 'MASTER_SSL_CERT',
  pattern: /MASTER_SSL_CERT/i,
  longer_alt: ID,
});
const MASTER_SSL_CAPATH = chevrotain.createToken({
  name: 'MASTER_SSL_CAPATH',
  pattern: /MASTER_SSL_CAPATH/i,
  longer_alt: ID,
});
const MASTER_SSL_CA = chevrotain.createToken({
  name: 'MASTER_SSL_CA',
  pattern: /MASTER_SSL_CA/i,
  longer_alt: ID,
});
const MASTER_RETRY_COUNT = chevrotain.createToken({
  name: 'MASTER_RETRY_COUNT',
  pattern: /MASTER_RETRY_COUNT/i,
  longer_alt: ID,
});
const MASTER_PORT = chevrotain.createToken({
  name: 'MASTER_PORT',
  pattern: /MASTER_PORT/i,
  longer_alt: ID,
});
const MASTER_PASSWORD = chevrotain.createToken({
  name: 'MASTER_PASSWORD',
  pattern: /MASTER_PASSWORD/i,
  longer_alt: ID,
});
const PASSWORD = chevrotain.createToken({
  name: 'PASSWORD',
  pattern: /PASSWORD/i,
  longer_alt: ID,
});
const MASTER_LOG_POS = chevrotain.createToken({
  name: 'MASTER_LOG_POS',
  pattern: /MASTER_LOG_POS/i,
  longer_alt: ID,
});
const MASTER_LOG_FILE = chevrotain.createToken({
  name: 'MASTER_LOG_FILE',
  pattern: /MASTER_LOG_FILE/i,
  longer_alt: ID,
});
const MASTER_HOST = chevrotain.createToken({
  name: 'MASTER_HOST',
  pattern: /MASTER_HOST/i,
  longer_alt: ID,
});
const MASTER_HEARTBEAT_PERIOD = chevrotain.createToken({
  name: 'MASTER_HEARTBEAT_PERIOD',
  pattern: /MASTER_HEARTBEAT_PERIOD/i,
  longer_alt: ID,
});
const MASTER_DELAY = chevrotain.createToken({
  name: 'MASTER_DELAY',
  pattern: /MASTER_DELAY/i,
  longer_alt: ID,
});
const MASTER_CONNECT_RETRY = chevrotain.createToken({
  name: 'MASTER_CONNECT_RETRY',
  pattern: /MASTER_CONNECT_RETRY/i,
  longer_alt: ID,
});
const MASTER_AUTO_POSITION = chevrotain.createToken({
  name: 'MASTER_AUTO_POSITION',
  pattern: /MASTER_AUTO_POSITION/i,
  longer_alt: ID,
});
const LOGS = chevrotain.createToken({
  name: 'LOGS',
  pattern: /LOGS/i,
  longer_alt: ID,
});
const LOGFILE = chevrotain.createToken({
  name: 'LOGFILE',
  pattern: /LOGFILE/i,
  longer_alt: ID,
});
const LIST = chevrotain.createToken({
  name: 'LIST',
  pattern: /LIST/i,
  longer_alt: ID,
});
const LEVEL = chevrotain.createToken({
  name: 'LEVEL',
  pattern: /LEVEL/i,
  longer_alt: ID,
});
const LESS = chevrotain.createToken({
  name: 'LESS',
  pattern: /LESS/i,
  longer_alt: ID,
});
const LEAVES = chevrotain.createToken({
  name: 'LEAVES',
  pattern: /LEAVES/i,
  longer_alt: ID,
});
const LAST = chevrotain.createToken({
  name: 'LAST',
  pattern: /LAST/i,
  longer_alt: ID,
});
const LANGUAGE = chevrotain.createToken({
  name: 'LANGUAGE',
  pattern: /LANGUAGE/i,
  longer_alt: ID,
});
const KEY_BLOCK_SIZE = chevrotain.createToken({
  name: 'KEY_BLOCK_SIZE',
  pattern: /KEY_BLOCK_SIZE/i,
  longer_alt: ID,
});
const JSON = chevrotain.createToken({
  name: 'JSON',
  pattern: /JSON/i,
  longer_alt: ID,
});
const ISSUER = chevrotain.createToken({
  name: 'ISSUER',
  pattern: /ISSUER/i,
  longer_alt: ID,
});
const ISOLATION = chevrotain.createToken({
  name: 'ISOLATION',
  pattern: /ISOLATION/i,
  longer_alt: ID,
});
const ISO = chevrotain.createToken({
  name: 'ISO',
  pattern: /ISO/i,
  longer_alt: ID,
});
const IPC = chevrotain.createToken({
  name: 'IPC',
  pattern: /IPC/i,
  longer_alt: ID,
});
const IO_THREAD = chevrotain.createToken({
  name: 'IO_THREAD',
  pattern: /IO_THREAD/i,
  longer_alt: ID,
});
const INVOKER = chevrotain.createToken({
  name: 'INVOKER',
  pattern: /INVOKER/i,
  longer_alt: ID,
});
const INSTANCE = chevrotain.createToken({
  name: 'INSTANCE',
  pattern: /INSTANCE/i,
  longer_alt: ID,
});
const TAN = chevrotain.createToken({
  name: 'TAN',
  pattern: /TAN/i,
  longer_alt: ID,
});
const INSTALL = chevrotain.createToken({
  name: 'INSTALL',
  pattern: /INSTALL/i,
  longer_alt: ID,
});
const INSERT_METHOD = chevrotain.createToken({
  name: 'INSERT_METHOD',
  pattern: /INSERT_METHOD/i,
  longer_alt: ID,
});
const INPLACE = chevrotain.createToken({
  name: 'INPLACE',
  pattern: /INPLACE/i,
  longer_alt: ID,
});
const INITIAL_SIZE = chevrotain.createToken({
  name: 'INITIAL_SIZE',
  pattern: /INITIAL_SIZE/i,
  longer_alt: ID,
});
const INDEXES = chevrotain.createToken({
  name: 'INDEXES',
  pattern: /INDEXES/i,
  longer_alt: ID,
});
const IMPORT = chevrotain.createToken({
  name: 'IMPORT',
  pattern: /IMPORT/i,
  longer_alt: ID,
});
const IGNORE_SERVER_IDS = chevrotain.createToken({
  name: 'IGNORE_SERVER_IDS',
  pattern: /IGNORE_SERVER_IDS/i,
  longer_alt: ID,
});
const IDENTIFIED = chevrotain.createToken({
  name: 'IDENTIFIED',
  pattern: /IDENTIFIED/i,
  longer_alt: ID,
});
const HOSTS = chevrotain.createToken({
  name: 'HOSTS',
  pattern: /HOSTS/i,
  longer_alt: ID,
});
const HOST = chevrotain.createToken({
  name: 'HOST',
  pattern: /HOST/i,
  longer_alt: ID,
});
const HELP = chevrotain.createToken({
  name: 'HELP',
  pattern: /HELP/i,
  longer_alt: ID,
});
const HASH = chevrotain.createToken({
  name: 'HASH',
  pattern: /HASH/i,
  longer_alt: ID,
});
const HANDLER = chevrotain.createToken({
  name: 'HANDLER',
  pattern: /HANDLER/i,
  longer_alt: ID,
});
const GROUP_REPLICATION = chevrotain.createToken({
  name: 'GROUP_REPLICATION',
  pattern: /GROUP_REPLICATION/i,
  longer_alt: ID,
});
const REPLICATION = chevrotain.createToken({
  name: 'REPLICATION',
  pattern: /REPLICATION/i,
  longer_alt: ID,
});
const GRANTS = chevrotain.createToken({
  name: 'GRANTS',
  pattern: /GRANTS/i,
  longer_alt: ID,
});
const GLOBAL = chevrotain.createToken({
  name: 'GLOBAL',
  pattern: /GLOBAL/i,
  longer_alt: ID,
});
const GENERAL = chevrotain.createToken({
  name: 'GENERAL',
  pattern: /GENERAL/i,
  longer_alt: ID,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/i,
  longer_alt: ID,
});
const FOLLOWS = chevrotain.createToken({
  name: 'FOLLOWS',
  pattern: /FOLLOWS/i,
  longer_alt: ID,
});
const FLUSH = chevrotain.createToken({
  name: 'FLUSH',
  pattern: /FLUSH/i,
  longer_alt: ID,
});
const FIXED = chevrotain.createToken({
  name: 'FIXED',
  pattern: /FIXED/i,
  longer_alt: ID,
});
const FIRST = chevrotain.createToken({
  name: 'FIRST',
  pattern: /FIRST/i,
  longer_alt: ID,
});
const FILTER = chevrotain.createToken({
  name: 'FILTER',
  pattern: /FILTER/i,
  longer_alt: ID,
});
const FILE_BLOCK_SIZE = chevrotain.createToken({
  name: 'FILE_BLOCK_SIZE',
  pattern: /FILE_BLOCK_SIZE/i,
  longer_alt: ID,
});
const FIELDS = chevrotain.createToken({
  name: 'FIELDS',
  pattern: /FIELDS/i,
  longer_alt: ID,
});
const FIELD = chevrotain.createToken({
  name: 'FIELD',
  pattern: /FIELD/i,
  longer_alt: ID,
});
const FAULTS = chevrotain.createToken({
  name: 'FAULTS',
  pattern: /FAULTS/i,
  longer_alt: ID,
});
const FAST = chevrotain.createToken({
  name: 'FAST',
  pattern: /FAST/i,
  longer_alt: ID,
});
const EXTENT_SIZE = chevrotain.createToken({
  name: 'EXTENT_SIZE',
  pattern: /EXTENT_SIZE/i,
  longer_alt: ID,
});
const EXTENDED = chevrotain.createToken({
  name: 'EXTENDED',
  pattern: /EXTENDED/i,
  longer_alt: ID,
});
const EXPORT = chevrotain.createToken({
  name: 'EXPORT',
  pattern: /EXPORT/i,
  longer_alt: ID,
});
const PORT = chevrotain.createToken({
  name: 'PORT',
  pattern: /PORT/i,
  longer_alt: ID,
});
const EXPIRE = chevrotain.createToken({
  name: 'EXPIRE',
  pattern: /EXPIRE/i,
  longer_alt: ID,
});
const PI = chevrotain.createToken({
  name: 'PI',
  pattern: /PI/i,
  longer_alt: ID,
});
const EXCLUSIVE = chevrotain.createToken({
  name: 'EXCLUSIVE',
  pattern: /EXCLUSIVE/i,
  longer_alt: ID,
});
const EXCHANGE = chevrotain.createToken({
  name: 'EXCHANGE',
  pattern: /EXCHANGE/i,
  longer_alt: ID,
});
const EVERY = chevrotain.createToken({
  name: 'EVERY',
  pattern: /EVERY/i,
  longer_alt: ID,
});
const EVENTS = chevrotain.createToken({
  name: 'EVENTS',
  pattern: /EVENTS/i,
  longer_alt: ID,
});
const EVENT = chevrotain.createToken({
  name: 'EVENT',
  pattern: /EVENT/i,
  longer_alt: ID,
});
const EVEN = chevrotain.createToken({
  name: 'EVEN',
  pattern: /EVEN/i,
  longer_alt: ID,
});
const ERRORS = chevrotain.createToken({
  name: 'ERRORS',
  pattern: /ERRORS/i,
  longer_alt: ID,
});
const ERROR = chevrotain.createToken({
  name: 'ERROR',
  pattern: /ERROR/i,
  longer_alt: ID,
});
const ENGINES = chevrotain.createToken({
  name: 'ENGINES',
  pattern: /ENGINES/i,
  longer_alt: ID,
});
const ENGINE = chevrotain.createToken({
  name: 'ENGINE',
  pattern: /ENGINE/i,
  longer_alt: ID,
});
const ENDS = chevrotain.createToken({
  name: 'ENDS',
  pattern: /ENDS/i,
  longer_alt: ID,
});
const ENCRYPTION = chevrotain.createToken({
  name: 'ENCRYPTION',
  pattern: /ENCRYPTION/i,
  longer_alt: ID,
});
const ENCRYPT = chevrotain.createToken({
  name: 'ENCRYPT',
  pattern: /ENCRYPT/i,
  longer_alt: ID,
});
const ENABLE = chevrotain.createToken({
  name: 'ENABLE',
  pattern: /ENABLE/i,
  longer_alt: ID,
});
const DYNAMIC = chevrotain.createToken({
  name: 'DYNAMIC',
  pattern: /DYNAMIC/i,
  longer_alt: ID,
});
const DUPLICATE = chevrotain.createToken({
  name: 'DUPLICATE',
  pattern: /DUPLICATE/i,
  longer_alt: ID,
});
const DUMPFILE = chevrotain.createToken({
  name: 'DUMPFILE',
  pattern: /DUMPFILE/i,
  longer_alt: ID,
});
const DISK = chevrotain.createToken({
  name: 'DISK',
  pattern: /DISK/i,
  longer_alt: ID,
});
const DISCARD = chevrotain.createToken({
  name: 'DISCARD',
  pattern: /DISCARD/i,
  longer_alt: ID,
});
const DISABLE = chevrotain.createToken({
  name: 'DISABLE',
  pattern: /DISABLE/i,
  longer_alt: ID,
});
const DIRECTORY = chevrotain.createToken({
  name: 'DIRECTORY',
  pattern: /DIRECTORY/i,
  longer_alt: ID,
});
const DES_KEY_FILE = chevrotain.createToken({
  name: 'DES_KEY_FILE',
  pattern: /DES_KEY_FILE/i,
  longer_alt: ID,
});
const DELAY_KEY_WRITE = chevrotain.createToken({
  name: 'DELAY_KEY_WRITE',
  pattern: /DELAY_KEY_WRITE/i,
  longer_alt: ID,
});
const DEFINER = chevrotain.createToken({
  name: 'DEFINER',
  pattern: /DEFINER/i,
  longer_alt: ID,
});
const DEFAULT_AUTH = chevrotain.createToken({
  name: 'DEFAULT_AUTH',
  pattern: /DEFAULT_AUTH/i,
  longer_alt: ID,
});
const DEALLOCATE = chevrotain.createToken({
  name: 'DEALLOCATE',
  pattern: /DEALLOCATE/i,
  longer_alt: ID,
});
const LOCATE = chevrotain.createToken({
  name: 'LOCATE',
  pattern: /LOCATE/i,
  longer_alt: ID,
});
const DATAFILE = chevrotain.createToken({
  name: 'DATAFILE',
  pattern: /DATAFILE/i,
  longer_alt: ID,
});
const CPU = chevrotain.createToken({
  name: 'CPU',
  pattern: /CPU/i,
  longer_alt: ID,
});
const COPY = chevrotain.createToken({
  name: 'COPY',
  pattern: /COPY/i,
  longer_alt: ID,
});
const CONTRIBUTORS = chevrotain.createToken({
  name: 'CONTRIBUTORS',
  pattern: /CONTRIBUTORS/i,
  longer_alt: ID,
});
const CONTEXT = chevrotain.createToken({
  name: 'CONTEXT',
  pattern: /CONTEXT/i,
  longer_alt: ID,
});
const CONTAINS = chevrotain.createToken({
  name: 'CONTAINS',
  pattern: /CONTAINS/i,
  longer_alt: ID,
});
const CONSISTENT = chevrotain.createToken({
  name: 'CONSISTENT',
  pattern: /CONSISTENT/i,
  longer_alt: ID,
});
const CONNECTION = chevrotain.createToken({
  name: 'CONNECTION',
  pattern: /CONNECTION/i,
  longer_alt: ID,
});
const CONCURRENT = chevrotain.createToken({
  name: 'CONCURRENT',
  pattern: /CONCURRENT/i,
  longer_alt: ID,
});
const COMPRESSION = chevrotain.createToken({
  name: 'COMPRESSION',
  pattern: /COMPRESSION/i,
  longer_alt: ID,
});
const COMPRESSED = chevrotain.createToken({
  name: 'COMPRESSED',
  pattern: /COMPRESSED/i,
  longer_alt: ID,
});
const COMPRESS = chevrotain.createToken({
  name: 'COMPRESS',
  pattern: /COMPRESS/i,
  longer_alt: ID,
});
const COMPLETION = chevrotain.createToken({
  name: 'COMPLETION',
  pattern: /COMPLETION/i,
  longer_alt: ID,
});
const COMPACT = chevrotain.createToken({
  name: 'COMPACT',
  pattern: /COMPACT/i,
  longer_alt: ID,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /COMMENT/i,
  longer_alt: ID,
});
const COLUMN_FORMAT = chevrotain.createToken({
  name: 'COLUMN_FORMAT',
  pattern: /COLUMN_FORMAT/i,
  longer_alt: ID,
});
const FORMAT = chevrotain.createToken({
  name: 'FORMAT',
  pattern: /FORMAT/i,
  longer_alt: ID,
});
const COLUMNS = chevrotain.createToken({
  name: 'COLUMNS',
  pattern: /COLUMNS/i,
  longer_alt: ID,
});
const CODE = chevrotain.createToken({
  name: 'CODE',
  pattern: /CODE/i,
  longer_alt: ID,
});
const COALESCE = chevrotain.createToken({
  name: 'COALESCE',
  pattern: /COALESCE/i,
  longer_alt: ID,
});
const CLIENT = chevrotain.createToken({
  name: 'CLIENT',
  pattern: /CLIENT/i,
  longer_alt: ID,
});
const CIPHER = chevrotain.createToken({
  name: 'CIPHER',
  pattern: /CIPHER/i,
  longer_alt: ID,
});
const CHECKSUM = chevrotain.createToken({
  name: 'CHECKSUM',
  pattern: /CHECKSUM/i,
  longer_alt: ID,
});
const CHANNEL = chevrotain.createToken({
  name: 'CHANNEL',
  pattern: /CHANNEL/i,
  longer_alt: ID,
});
const CHANGED = chevrotain.createToken({
  name: 'CHANGED',
  pattern: /CHANGED/i,
  longer_alt: ID,
});
const CHAIN = chevrotain.createToken({
  name: 'CHAIN',
  pattern: /CHAIN/i,
  longer_alt: ID,
});
const CASCADED = chevrotain.createToken({
  name: 'CASCADED',
  pattern: /CASCADED/i,
  longer_alt: ID,
});
const CACHE = chevrotain.createToken({
  name: 'CACHE',
  pattern: /CACHE/i,
  longer_alt: ID,
});
const BTREE = chevrotain.createToken({
  name: 'BTREE',
  pattern: /BTREE/i,
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
const BLOCK = chevrotain.createToken({
  name: 'BLOCK',
  pattern: /BLOCK/i,
  longer_alt: ID,
});
const BEGIN = chevrotain.createToken({
  name: 'BEGIN',
  pattern: /BEGIN/i,
  longer_alt: ID,
});
const AVG_ROW_LENGTH = chevrotain.createToken({
  name: 'AVG_ROW_LENGTH',
  pattern: /AVG_ROW_LENGTH/i,
  longer_alt: ID,
});
const LENGTH = chevrotain.createToken({
  name: 'LENGTH',
  pattern: /LENGTH/i,
  longer_alt: ID,
});
const AUTO_INCREMENT = chevrotain.createToken({
  name: 'AUTO_INCREMENT',
  pattern: /AUTO_INCREMENT/i,
  longer_alt: ID,
});
const AUTOEXTEND_SIZE = chevrotain.createToken({
  name: 'AUTOEXTEND_SIZE',
  pattern: /AUTOEXTEND_SIZE/i,
  longer_alt: ID,
});
const END = chevrotain.createToken({
  name: 'END',
  pattern: /END/i,
  longer_alt: ID,
});
const AUTOCOMMIT = chevrotain.createToken({
  name: 'AUTOCOMMIT',
  pattern: /AUTOCOMMIT/i,
  longer_alt: ID,
});
const COMMIT = chevrotain.createToken({
  name: 'COMMIT',
  pattern: /COMMIT/i,
  longer_alt: ID,
});
const AUTHORS = chevrotain.createToken({
  name: 'AUTHORS',
  pattern: /AUTHORS/i,
  longer_alt: ID,
});
const ANY = chevrotain.createToken({
  name: 'ANY',
  pattern: /ANY/i,
  longer_alt: ID,
});
const ALGORITHM = chevrotain.createToken({
  name: 'ALGORITHM',
  pattern: /ALGORITHM/i,
  longer_alt: ID,
});
const AGGREGATE = chevrotain.createToken({
  name: 'AGGREGATE',
  pattern: /AGGREGATE/i,
  longer_alt: ID,
});
const AFTER = chevrotain.createToken({
  name: 'AFTER',
  pattern: /AFTER/i,
  longer_alt: ID,
});
const ACTION = chevrotain.createToken({
  name: 'ACTION',
  pattern: /ACTION/i,
  longer_alt: ID,
});
const ACCOUNT = chevrotain.createToken({
  name: 'ACCOUNT',
  pattern: /ACCOUNT/i,
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
const STRING = chevrotain.createToken({
  name: 'STRING',
  pattern: /STRING/i,
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
const LOCAL = chevrotain.createToken({
  name: 'LOCAL',
  pattern: /LOCAL/i,
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
const GROUP_CONCAT = chevrotain.createToken({
  name: 'GROUP_CONCAT',
  pattern: /GROUP_CONCAT/i,
  longer_alt: ID,
});
const CONCAT = chevrotain.createToken({
  name: 'CONCAT',
  pattern: /CONCAT/i,
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
const ENUM = chevrotain.createToken({
  name: 'ENUM',
  pattern: /ENUM/i,
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
const VARBINARY = chevrotain.createToken({
  name: 'VARBINARY',
  pattern: /VARBINARY/i,
  longer_alt: ID,
});
const BINARY = chevrotain.createToken({
  name: 'BINARY',
  pattern: /BINARY/i,
  longer_alt: ID,
});
const CHARSET_NAME_L = chevrotain.createToken({
  name: 'CHARSET_NAME_L',
  pattern: /(ARMSCII8|ASCII|BIG5|BINARY|CP1250|CP1251|CP1256|CP1257|CP850|CP852|CP866|CP932|DEC8|EUCJPMS|EUCKR|GB2312|GBK|GEOSTD8|GREEK|HEBREW|HP8|KEYBCS2|KOI8R|KOI8U|LATIN1|LATIN2|LATIN5|LATIN7|MACCE|MACROMAN|SJIS|SWE7|TIS620|UCS2|UJIS|UTF16|UTF16LE|UTF32|UTF8|UTF8MB4)/i,
  longer_alt: ID,
});
const VARCHAR = chevrotain.createToken({
  name: 'VARCHAR',
  pattern: /VARCHAR/i,
  longer_alt: ID,
});
const YEAR = chevrotain.createToken({
  name: 'YEAR',
  pattern: /YEAR/i,
  longer_alt: ID,
});
const DATETIME = chevrotain.createToken({
  name: 'DATETIME',
  pattern: /DATETIME/i,
  longer_alt: ID,
});
const TIMESTAMP = chevrotain.createToken({
  name: 'TIMESTAMP',
  pattern: /TIMESTAMP/i,
  longer_alt: ID,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/i,
  longer_alt: ID,
});
const NUMERIC = chevrotain.createToken({
  name: 'NUMERIC',
  pattern: /NUMERIC/i,
  longer_alt: ID,
});
const DECIMAL = chevrotain.createToken({
  name: 'DECIMAL',
  pattern: /DECIMAL/i,
  longer_alt: ID,
});
const FLOAT = chevrotain.createToken({
  name: 'FLOAT',
  pattern: /FLOAT/i,
  longer_alt: ID,
});
const DOUBLE = chevrotain.createToken({
  name: 'DOUBLE',
  pattern: /DOUBLE/i,
  longer_alt: ID,
});
const REAL = chevrotain.createToken({
  name: 'REAL',
  pattern: /REAL/i,
  longer_alt: ID,
});
const BIGINT = chevrotain.createToken({
  name: 'BIGINT',
  pattern: /BIGINT/i,
  longer_alt: ID,
});
const INTEGER = chevrotain.createToken({
  name: 'INTEGER',
  pattern: /INTEGER/i,
  longer_alt: ID,
});
const MEDIUMINT = chevrotain.createToken({
  name: 'MEDIUMINT',
  pattern: /MEDIUMINT/i,
  longer_alt: ID,
});
const MEDIUM = chevrotain.createToken({
  name: 'MEDIUM',
  pattern: /MEDIUM/i,
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
const LIFECYCLE = chevrotain.createToken({
  name: 'LIFECYCLE',
  pattern: /LIFECYCLE/i,
  longer_alt: ID,
});
const OVERWRITE = chevrotain.createToken({
  name: 'OVERWRITE',
  pattern: /OVERWRITE/i,
  longer_alt: ID,
});
const ZEROFILL = chevrotain.createToken({
  name: 'ZEROFILL',
  pattern: /ZEROFILL/i,
  longer_alt: ID,
});
const XOR = chevrotain.createToken({
  name: 'XOR',
  pattern: /XOR/i,
  longer_alt: ID,
});
const WITH = chevrotain.createToken({
  name: 'WITH',
  pattern: /WITH/i,
  longer_alt: ID,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/i,
  longer_alt: ID,
});
const WHERE = chevrotain.createToken({
  name: 'WHERE',
  pattern: /WHERE/i,
  longer_alt: ID,
});
const WHEN = chevrotain.createToken({
  name: 'WHEN',
  pattern: /WHEN/i,
  longer_alt: ID,
});
const VALUES = chevrotain.createToken({
  name: 'VALUES',
  pattern: /VALUES/i,
  longer_alt: ID,
});
const USING = chevrotain.createToken({
  name: 'USING',
  pattern: /USING/i,
  longer_alt: ID,
});
const SIN = chevrotain.createToken({
  name: 'SIN',
  pattern: /SIN/i,
  longer_alt: ID,
});
const USAGE = chevrotain.createToken({
  name: 'USAGE',
  pattern: /USAGE/i,
  longer_alt: ID,
});
const USA = chevrotain.createToken({
  name: 'USA',
  pattern: /USA/i,
  longer_alt: ID,
});
const UPDATE = chevrotain.createToken({
  name: 'UPDATE',
  pattern: /UPDATE/i,
  longer_alt: ID,
});
const DATE = chevrotain.createToken({
  name: 'DATE',
  pattern: /DATE/i,
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
const SIGN = chevrotain.createToken({
  name: 'SIGN',
  pattern: /SIGN/i,
  longer_alt: ID,
});
const UNLOCK = chevrotain.createToken({
  name: 'UNLOCK',
  pattern: /UNLOCK/i,
  longer_alt: ID,
});
const UNIQUE = chevrotain.createToken({
  name: 'UNIQUE',
  pattern: /UNIQUE/i,
  longer_alt: ID,
});
const UNION = chevrotain.createToken({
  name: 'UNION',
  pattern: /UNION/i,
  longer_alt: ID,
});
const UNDO = chevrotain.createToken({
  name: 'UNDO',
  pattern: /UNDO/i,
  longer_alt: ID,
});
const DO = chevrotain.createToken({
  name: 'DO',
  pattern: /DO/i,
  longer_alt: ID,
});
const TRUE = chevrotain.createToken({
  name: 'TRUE',
  pattern: /TRUE/i,
  longer_alt: ID,
});
const TRIGGER = chevrotain.createToken({
  name: 'TRIGGER',
  pattern: /TRIGGER/i,
  longer_alt: ID,
});
const TRAILING = chevrotain.createToken({
  name: 'TRAILING',
  pattern: /TRAILING/i,
  longer_alt: ID,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/i,
  longer_alt: ID,
});
const TERMINATED = chevrotain.createToken({
  name: 'TERMINATED',
  pattern: /TERMINATED/i,
  longer_alt: ID,
});
const TABLE = chevrotain.createToken({
  name: 'TABLE',
  pattern: /TABLE/i,
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
const START = chevrotain.createToken({
  name: 'START',
  pattern: /START/i,
  longer_alt: ID,
});
const SQL_SMALL_RESULT = chevrotain.createToken({
  name: 'SQL_SMALL_RESULT',
  pattern: /SQL_SMALL_RESULT/i,
  longer_alt: ID,
});
const SQL_CALC_FOUND_ROWS = chevrotain.createToken({
  name: 'SQL_CALC_FOUND_ROWS',
  pattern: /SQL_CALC_FOUND_ROWS/i,
  longer_alt: ID,
});
const FOUND_ROWS = chevrotain.createToken({
  name: 'FOUND_ROWS',
  pattern: /FOUND_ROWS/i,
  longer_alt: ID,
});
const ROWS = chevrotain.createToken({
  name: 'ROWS',
  pattern: /ROWS/i,
  longer_alt: ID,
});
const FOUND = chevrotain.createToken({
  name: 'FOUND',
  pattern: /FOUND/i,
  longer_alt: ID,
});
const SQL_BIG_RESULT = chevrotain.createToken({
  name: 'SQL_BIG_RESULT',
  pattern: /SQL_BIG_RESULT/i,
  longer_alt: ID,
});
const SQLWARNING = chevrotain.createToken({
  name: 'SQLWARNING',
  pattern: /SQLWARNING/i,
  longer_alt: ID,
});
const SQLSTATE = chevrotain.createToken({
  name: 'SQLSTATE',
  pattern: /SQLSTATE/i,
  longer_alt: ID,
});
const SQLEXCEPTION = chevrotain.createToken({
  name: 'SQLEXCEPTION',
  pattern: /SQLEXCEPTION/i,
  longer_alt: ID,
});
const SQL = chevrotain.createToken({
  name: 'SQL',
  pattern: /SQL/i,
  longer_alt: ID,
});
const SPATIAL = chevrotain.createToken({
  name: 'SPATIAL',
  pattern: /SPATIAL/i,
  longer_alt: ID,
});
const SHOW = chevrotain.createToken({
  name: 'SHOW',
  pattern: /SHOW/i,
  longer_alt: ID,
});
const SEPARATOR = chevrotain.createToken({
  name: 'SEPARATOR',
  pattern: /SEPARATOR/i,
  longer_alt: ID,
});
const SET = chevrotain.createToken({
  name: 'SET',
  pattern: /SET/i,
  longer_alt: ID,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/i,
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
const RLIKE = chevrotain.createToken({
  name: 'RLIKE',
  pattern: /RLIKE/i,
  longer_alt: ID,
});
const RIGHT = chevrotain.createToken({
  name: 'RIGHT',
  pattern: /RIGHT/i,
  longer_alt: ID,
});
const REVOKE = chevrotain.createToken({
  name: 'REVOKE',
  pattern: /REVOKE/i,
  longer_alt: ID,
});
const RETURN = chevrotain.createToken({
  name: 'RETURN',
  pattern: /RETURN/i,
  longer_alt: ID,
});
const RESTRICT = chevrotain.createToken({
  name: 'RESTRICT',
  pattern: /RESTRICT/i,
  longer_alt: ID,
});
const REQUIRE = chevrotain.createToken({
  name: 'REQUIRE',
  pattern: /REQUIRE/i,
  longer_alt: ID,
});
const REPLACE = chevrotain.createToken({
  name: 'REPLACE',
  pattern: /REPLACE/i,
  longer_alt: ID,
});
const REPEAT = chevrotain.createToken({
  name: 'REPEAT',
  pattern: /REPEAT/i,
  longer_alt: ID,
});
const RENAME = chevrotain.createToken({
  name: 'RENAME',
  pattern: /RENAME/i,
  longer_alt: ID,
});
const NAME = chevrotain.createToken({
  name: 'NAME',
  pattern: /NAME/i,
  longer_alt: ID,
});
const RELEASE = chevrotain.createToken({
  name: 'RELEASE',
  pattern: /RELEASE/i,
  longer_alt: ID,
});
const REGEXP = chevrotain.createToken({
  name: 'REGEXP',
  pattern: /REGEXP/i,
  longer_alt: ID,
});
const REFERENCES = chevrotain.createToken({
  name: 'REFERENCES',
  pattern: /REFERENCES/i,
  longer_alt: ID,
});
const READS = chevrotain.createToken({
  name: 'READS',
  pattern: /READS/i,
  longer_alt: ID,
});
const READ = chevrotain.createToken({
  name: 'READ',
  pattern: /READ/i,
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
const PROCEDURE = chevrotain.createToken({
  name: 'PROCEDURE',
  pattern: /PROCEDURE/i,
  longer_alt: ID,
});
const PRIMARY = chevrotain.createToken({
  name: 'PRIMARY',
  pattern: /PRIMARY/i,
  longer_alt: ID,
});
const PARTITIONED = chevrotain.createToken({
  name: 'PARTITIONED',
  pattern: /PARTITIONED/i,
  longer_alt: ID,
});
const ONE = chevrotain.createToken({
  name: 'ONE',
  pattern: /ONE/i,
  longer_alt: ID,
});
const PARTITION = chevrotain.createToken({
  name: 'PARTITION',
  pattern: /PARTITION/i,
  longer_alt: ID,
});
const OUTFILE = chevrotain.createToken({
  name: 'OUTFILE',
  pattern: /OUTFILE/i,
  longer_alt: ID,
});
const OUTER = chevrotain.createToken({
  name: 'OUTER',
  pattern: /OUTER/i,
  longer_alt: ID,
});
const ORDER = chevrotain.createToken({
  name: 'ORDER',
  pattern: /ORDER/i,
  longer_alt: ID,
});
const ORD = chevrotain.createToken({
  name: 'ORD',
  pattern: /ORD/i,
  longer_alt: ID,
});
const OPTIONALLY = chevrotain.createToken({
  name: 'OPTIONALLY',
  pattern: /OPTIONALLY/i,
  longer_alt: ID,
});
const OPTION = chevrotain.createToken({
  name: 'OPTION',
  pattern: /OPTION/i,
  longer_alt: ID,
});
const OPTIMIZE = chevrotain.createToken({
  name: 'OPTIMIZE',
  pattern: /OPTIMIZE/i,
  longer_alt: ID,
});
const NULL_LITERAL = chevrotain.createToken({
  name: 'NULL_LITERAL',
  pattern: /NULL/i,
  longer_alt: ID,
});
const NO_WRITE_TO_BINLOG = chevrotain.createToken({
  name: 'NO_WRITE_TO_BINLOG',
  pattern: /NO_WRITE_TO_BINLOG/i,
  longer_alt: ID,
});
const BINLOG = chevrotain.createToken({
  name: 'BINLOG',
  pattern: /BINLOG/i,
  longer_alt: ID,
});
const LOG = chevrotain.createToken({
  name: 'LOG',
  pattern: /LOG/i,
  longer_alt: ID,
});
const WRITE = chevrotain.createToken({
  name: 'WRITE',
  pattern: /WRITE/i,
  longer_alt: ID,
});
const NOT = chevrotain.createToken({
  name: 'NOT',
  pattern: /NOT/i,
  longer_alt: ID,
});
const NATURAL = chevrotain.createToken({
  name: 'NATURAL',
  pattern: /NATURAL/i,
  longer_alt: ID,
});
const MODIFIES = chevrotain.createToken({
  name: 'MODIFIES',
  pattern: /MODIFIES/i,
  longer_alt: ID,
});
const MOD = chevrotain.createToken({
  name: 'MOD',
  pattern: /MOD/i,
  longer_alt: ID,
});
const MAXVALUE = chevrotain.createToken({
  name: 'MAXVALUE',
  pattern: /MAXVALUE/i,
  longer_alt: ID,
});
const VALUE = chevrotain.createToken({
  name: 'VALUE',
  pattern: /VALUE/i,
  longer_alt: ID,
});
const MAX = chevrotain.createToken({
  name: 'MAX',
  pattern: /MAX/i,
  longer_alt: ID,
});
const MATCH = chevrotain.createToken({
  name: 'MATCH',
  pattern: /MATCH/i,
  longer_alt: ID,
});
const MASTER_SSL_VERIFY_SERVER_CERT = chevrotain.createToken({
  name: 'MASTER_SSL_VERIFY_SERVER_CERT',
  pattern: /MASTER_SSL_VERIFY_SERVER_CERT/i,
  longer_alt: ID,
});
const SERVER = chevrotain.createToken({
  name: 'SERVER',
  pattern: /SERVER/i,
  longer_alt: ID,
});
const MASTER_SSL = chevrotain.createToken({
  name: 'MASTER_SSL',
  pattern: /MASTER_SSL/i,
  longer_alt: ID,
});
const SSL = chevrotain.createToken({
  name: 'SSL',
  pattern: /SSL/i,
  longer_alt: ID,
});
const MASTER_BIND = chevrotain.createToken({
  name: 'MASTER_BIND',
  pattern: /MASTER_BIND/i,
  longer_alt: ID,
});
const BIN = chevrotain.createToken({
  name: 'BIN',
  pattern: /BIN/i,
  longer_alt: ID,
});
const MASTER = chevrotain.createToken({
  name: 'MASTER',
  pattern: /MASTER/i,
  longer_alt: ID,
});
const LOW_PRIORITY = chevrotain.createToken({
  name: 'LOW_PRIORITY',
  pattern: /LOW_PRIORITY/i,
  longer_alt: ID,
});
const LOOP = chevrotain.createToken({
  name: 'LOOP',
  pattern: /LOOP/i,
  longer_alt: ID,
});
const LOCK = chevrotain.createToken({
  name: 'LOCK',
  pattern: /LOCK/i,
  longer_alt: ID,
});
const LOAD = chevrotain.createToken({
  name: 'LOAD',
  pattern: /LOAD/i,
  longer_alt: ID,
});
const LINES = chevrotain.createToken({
  name: 'LINES',
  pattern: /LINES/i,
  longer_alt: ID,
});
const LINEAR = chevrotain.createToken({
  name: 'LINEAR',
  pattern: /LINEAR/i,
  longer_alt: ID,
});
const LIMIT = chevrotain.createToken({
  name: 'LIMIT',
  pattern: /LIMIT/i,
  longer_alt: ID,
});
const LIKE = chevrotain.createToken({
  name: 'LIKE',
  pattern: /LIKE/i,
  longer_alt: ID,
});
const LEFT = chevrotain.createToken({
  name: 'LEFT',
  pattern: /LEFT/i,
  longer_alt: ID,
});
const LEAVE = chevrotain.createToken({
  name: 'LEAVE',
  pattern: /LEAVE/i,
  longer_alt: ID,
});
const LEADING = chevrotain.createToken({
  name: 'LEADING',
  pattern: /LEADING/i,
  longer_alt: ID,
});
const KILL = chevrotain.createToken({
  name: 'KILL',
  pattern: /KILL/i,
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
const JOIN = chevrotain.createToken({
  name: 'JOIN',
  pattern: /JOIN/i,
  longer_alt: ID,
});
const ITERATE = chevrotain.createToken({
  name: 'ITERATE',
  pattern: /ITERATE/i,
  longer_alt: ID,
});
const INTO = chevrotain.createToken({
  name: 'INTO',
  pattern: /INTO/i,
  longer_alt: ID,
});
const TO = chevrotain.createToken({
  name: 'TO',
  pattern: /TO/i,
  longer_alt: ID,
});
const INTERVAL = chevrotain.createToken({
  name: 'INTERVAL',
  pattern: /INTERVAL/i,
  longer_alt: ID,
});
const INSERT = chevrotain.createToken({
  name: 'INSERT',
  pattern: /INSERT/i,
  longer_alt: ID,
});
const INOUT = chevrotain.createToken({
  name: 'INOUT',
  pattern: /INOUT/i,
  longer_alt: ID,
});
const OUT = chevrotain.createToken({
  name: 'OUT',
  pattern: /OUT/i,
  longer_alt: ID,
});
const INNER = chevrotain.createToken({
  name: 'INNER',
  pattern: /INNER/i,
  longer_alt: ID,
});
const INFILE = chevrotain.createToken({
  name: 'INFILE',
  pattern: /INFILE/i,
  longer_alt: ID,
});
const FILE = chevrotain.createToken({
  name: 'FILE',
  pattern: /FILE/i,
  longer_alt: ID,
});
const INDEX = chevrotain.createToken({
  name: 'INDEX',
  pattern: /INDEX/i,
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
const HIGH_PRIORITY = chevrotain.createToken({
  name: 'HIGH_PRIORITY',
  pattern: /HIGH_PRIORITY/i,
  longer_alt: ID,
});
const HAVING = chevrotain.createToken({
  name: 'HAVING',
  pattern: /HAVING/i,
  longer_alt: ID,
});
const GROUP = chevrotain.createToken({
  name: 'GROUP',
  pattern: /GROUP/i,
  longer_alt: ID,
});
const GRANT = chevrotain.createToken({
  name: 'GRANT',
  pattern: /GRANT/i,
  longer_alt: ID,
});
const FULLTEXT = chevrotain.createToken({
  name: 'FULLTEXT',
  pattern: /FULLTEXT/i,
  longer_alt: ID,
});
const FULL = chevrotain.createToken({
  name: 'FULL',
  pattern: /FULL/i,
  longer_alt: ID,
});
const TEXT = chevrotain.createToken({
  name: 'TEXT',
  pattern: /TEXT/i,
  longer_alt: ID,
});
const FROM = chevrotain.createToken({
  name: 'FROM',
  pattern: /FROM/i,
  longer_alt: ID,
});
const FOREIGN = chevrotain.createToken({
  name: 'FOREIGN',
  pattern: /FOREIGN/i,
  longer_alt: ID,
});
const FORCE = chevrotain.createToken({
  name: 'FORCE',
  pattern: /FORCE/i,
  longer_alt: ID,
});
const FETCH = chevrotain.createToken({
  name: 'FETCH',
  pattern: /FETCH/i,
  longer_alt: ID,
});
const FALSE = chevrotain.createToken({
  name: 'FALSE',
  pattern: /FALSE/i,
  longer_alt: ID,
});
const EXPLAIN = chevrotain.createToken({
  name: 'EXPLAIN',
  pattern: /EXPLAIN/i,
  longer_alt: ID,
});
const EXP = chevrotain.createToken({
  name: 'EXP',
  pattern: /EXP/i,
  longer_alt: ID,
});
const EXIT = chevrotain.createToken({
  name: 'EXIT',
  pattern: /EXIT/i,
  longer_alt: ID,
});
const EXISTS = chevrotain.createToken({
  name: 'EXISTS',
  pattern: /EXISTS/i,
  longer_alt: ID,
});
const X_FUNCTION = chevrotain.createToken({
  name: 'X_FUNCTION',
  pattern: /X/i,
  longer_alt: ID,
});
const ESCAPED = chevrotain.createToken({
  name: 'ESCAPED',
  pattern: /ESCAPED/i,
  longer_alt: ID,
});
const ESCAPE = chevrotain.createToken({
  name: 'ESCAPE',
  pattern: /ESCAPE/i,
  longer_alt: ID,
});
const ENCLOSED = chevrotain.createToken({
  name: 'ENCLOSED',
  pattern: /ENCLOSED/i,
  longer_alt: ID,
});
const CLOSE = chevrotain.createToken({
  name: 'CLOSE',
  pattern: /CLOSE/i,
  longer_alt: ID,
});
const ELSEIF = chevrotain.createToken({
  name: 'ELSEIF',
  pattern: /ELSEIF/i,
  longer_alt: ID,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/i,
  longer_alt: ID,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/i,
  longer_alt: ID,
});
const EACH = chevrotain.createToken({
  name: 'EACH',
  pattern: /EACH/i,
  longer_alt: ID,
});
const DROP = chevrotain.createToken({
  name: 'DROP',
  pattern: /DROP/i,
  longer_alt: ID,
});
const DISTINCTROW = chevrotain.createToken({
  name: 'DISTINCTROW',
  pattern: /DISTINCTROW/i,
  longer_alt: ID,
});
const ROW = chevrotain.createToken({
  name: 'ROW',
  pattern: /ROW/i,
  longer_alt: ID,
});
const DISTINCT = chevrotain.createToken({
  name: 'DISTINCT',
  pattern: /DISTINCT/i,
  longer_alt: ID,
});
const DETERMINISTIC = chevrotain.createToken({
  name: 'DETERMINISTIC',
  pattern: /DETERMINISTIC/i,
  longer_alt: ID,
});
const MIN = chevrotain.createToken({
  name: 'MIN',
  pattern: /MIN/i,
  longer_alt: ID,
});
const IS = chevrotain.createToken({
  name: 'IS',
  pattern: /IS/i,
  longer_alt: ID,
});
const DESCRIBE = chevrotain.createToken({
  name: 'DESCRIBE',
  pattern: /DESCRIBE/i,
  longer_alt: ID,
});
const DESC = chevrotain.createToken({
  name: 'DESC',
  pattern: /DESC/i,
  longer_alt: ID,
});
const DELETE = chevrotain.createToken({
  name: 'DELETE',
  pattern: /DELETE/i,
  longer_alt: ID,
});
const DELAYED = chevrotain.createToken({
  name: 'DELAYED',
  pattern: /DELAYED/i,
  longer_alt: ID,
});
const DEFAULT = chevrotain.createToken({
  name: 'DEFAULT',
  pattern: /DEFAULT/i,
  longer_alt: ID,
});
const DECLARE = chevrotain.createToken({
  name: 'DECLARE',
  pattern: /DECLARE/i,
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
const DATA = chevrotain.createToken({
  name: 'DATA',
  pattern: /DATA/i,
  longer_alt: ID,
});
const CURSOR = chevrotain.createToken({
  name: 'CURSOR',
  pattern: /CURSOR/i,
  longer_alt: ID,
});
const CURRENT_USER = chevrotain.createToken({
  name: 'CURRENT_USER',
  pattern: /CURRENT_USER/i,
  longer_alt: ID,
});
const USER = chevrotain.createToken({
  name: 'USER',
  pattern: /USER/i,
  longer_alt: ID,
});
const USE = chevrotain.createToken({
  name: 'USE',
  pattern: /USE/i,
  longer_alt: ID,
});
const CROSS = chevrotain.createToken({
  name: 'CROSS',
  pattern: /CROSS/i,
  longer_alt: ID,
});
const CREATE = chevrotain.createToken({
  name: 'CREATE',
  pattern: /CREATE/i,
  longer_alt: ID,
});
const CONVERT = chevrotain.createToken({
  name: 'CONVERT',
  pattern: /CONVERT/i,
  longer_alt: ID,
});
const CONV = chevrotain.createToken({
  name: 'CONV',
  pattern: /CONV/i,
  longer_alt: ID,
});
const CONTINUE = chevrotain.createToken({
  name: 'CONTINUE',
  pattern: /CONTINUE/i,
  longer_alt: ID,
});
const CONSTRAINT = chevrotain.createToken({
  name: 'CONSTRAINT',
  pattern: /CONSTRAINT/i,
  longer_alt: ID,
});
const INT = chevrotain.createToken({
  name: 'INT',
  pattern: /INT/i,
  longer_alt: ID,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/i,
  longer_alt: ID,
});
const CONDITION = chevrotain.createToken({
  name: 'CONDITION',
  pattern: /CONDITION/i,
  longer_alt: ID,
});
const IO = chevrotain.createToken({
  name: 'IO',
  pattern: /IO/i,
  longer_alt: ID,
});
const ON = chevrotain.createToken({
  name: 'ON',
  pattern: /ON/i,
  longer_alt: ID,
});
const COLUMN = chevrotain.createToken({
  name: 'COLUMN',
  pattern: /COLUMN/i,
  longer_alt: ID,
});
const COLLATE = chevrotain.createToken({
  name: 'COLLATE',
  pattern: /COLLATE/i,
  longer_alt: ID,
});
const AT = chevrotain.createToken({
  name: 'AT',
  pattern: /AT/i,
  longer_alt: ID,
});
const CHECK = chevrotain.createToken({
  name: 'CHECK',
  pattern: /CHECK/i,
  longer_alt: ID,
});
const CHARACTER = chevrotain.createToken({
  name: 'CHARACTER',
  pattern: /CHARACTER/i,
  longer_alt: ID,
});
const CHAR = chevrotain.createToken({
  name: 'CHAR',
  pattern: /CHAR/i,
  longer_alt: ID,
});
const CHANGE = chevrotain.createToken({
  name: 'CHANGE',
  pattern: /CHANGE/i,
  longer_alt: ID,
});
const CAST = chevrotain.createToken({
  name: 'CAST',
  pattern: /CAST/i,
  longer_alt: ID,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/i,
  longer_alt: ID,
});
const CASCADE = chevrotain.createToken({
  name: 'CASCADE',
  pattern: /CASCADE/i,
  longer_alt: ID,
});
const CALL = chevrotain.createToken({
  name: 'CALL',
  pattern: /CALL/i,
  longer_alt: ID,
});
const BY = chevrotain.createToken({
  name: 'BY',
  pattern: /BY/i,
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
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/i,
  longer_alt: ID,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /OR/i,
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
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /AND/i,
  longer_alt: ID,
});
const ANALYZE = chevrotain.createToken({
  name: 'ANALYZE',
  pattern: /ANALYZE/i,
  longer_alt: ID,
});
const Y_FUNCTION = chevrotain.createToken({
  name: 'Y_FUNCTION',
  pattern: /Y/i,
  longer_alt: ID,
});
const ALTER = chevrotain.createToken({
  name: 'ALTER',
  pattern: /ALTER/i,
  longer_alt: ID,
});
const ALL = chevrotain.createToken({
  name: 'ALL',
  pattern: /ALL/i,
  longer_alt: ID,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /ADD/i,
  longer_alt: ID,
});
const SKIP = chevrotain.createToken({
  name: 'SKIP',
  pattern: /SKIP/i,
  longer_alt: ID,
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
  LIFECYCLE = 'LIFECYCLE',
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
  PARTITIONED = 'PARTITIONED',
  ONE = 'ONE',
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
  LIFECYCLE,
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
  PARTITIONED,
  ONE,
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
  LIFECYCLE,
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
  PARTITIONED,
  ONE,
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
