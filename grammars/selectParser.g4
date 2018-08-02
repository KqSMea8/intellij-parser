root: sqlStatements?;

sqlStatements: (sqlStatement SEMI)*;

emptyStatement: SEMI;

sqlStatement: ddlStatement | dmlStatement;

dmlStatement:
	selectStatement
	| insertStatement
	| updateStatement
	| deleteStatement;

ddlStatement: createTable;

createTable:
	CREATE TEMPORARY? TABLE ifNotExists? tableName createDefinitions (
		tableOption (','? tableOption)*
	)?;

engineName:
	ARCHIVE
	| BLACKHOLE
	| CSV
	| FEDERATED
	| INNODB
	| MEMORY
	| MRG_MYISAM
	| MYISAM
	| NDB
	| NDBCLUSTER
	| PERFOMANCE_SCHEMA;

fileSizeLiteral: FILESIZE_LITERAL | decimalLiteral;

tableOption:
	ENGINE '='? engineName
	| AUTO_INCREMENT '='? decimalLiteral
	| AVG_ROW_LENGTH '='? decimalLiteral
	| DEFAULT? (CHARACTER SET | CHARSET) '='? charsetName
	| CHECKSUM '='? boolValue = ('0' | '1')
	| DEFAULT? COLLATE '='? collationName
	| COMMENT '='? STRING_LITERAL
	| COMPRESSION '='? STRING_LITERAL
	| CONNECTION '='? STRING_LITERAL
	| DATA DIRECTORY '='? STRING_LITERAL
	| DELAY_KEY_WRITE '='? boolValue = ('0' | '1')
	| ENCRYPTION '='? STRING_LITERAL
	| INDEX DIRECTORY '='? STRING_LITERAL
	| INSERT_METHOD '='? insertMethod = (NO | FIRST | LAST)
	| KEY_BLOCK_SIZE '='? fileSizeLiteral
	| MAX_ROWS '='? decimalLiteral
	| MIN_ROWS '='? decimalLiteral
	| PACK_KEYS '='? extBoolValue = ('0' | '1' | DEFAULT)
	| PASSWORD '='? STRING_LITERAL
	| ROW_FORMAT '='? rowFormat = (
		DEFAULT
		| DYNAMIC
		| FIXED
		| COMPRESSED
		| REDUNDANT
		| COMPACT
	)
	| STATS_AUTO_RECALC '='? extBoolValue = (DEFAULT | '0' | '1')
	| STATS_PERSISTENT '='? extBoolValue = (DEFAULT | '0' | '1')
	| TABLESPACE uid tablespaceStorage?
	| UNION '='? '(' tables ')';

tablespaceStorage: STORAGE (DISK | MEMORY | DEFAULT);

tables: tableName (',' tableName)*;

ifNotExists: IF NOT EXISTS;

createDefinitions:
	'(' createDefinition (',' createDefinition)* ')';

createDefinition: uid columnDefinition;

columnDefinition: dataType columnConstraint*;

columnConstraint:
	nullNotnull
	| DEFAULT defaultValue
	| AUTO_INCREMENT
	| PRIMARY? KEY
	| UNIQUE KEY?
	| COMMENT STRING_LITERAL
	| COLUMN_FORMAT colformat = (FIXED | DYNAMIC | DEFAULT)
	| STORAGE storageval = (DISK | MEMORY | DEFAULT);

nullNotnull: NOT? (NULL_LITERAL | NULL_SPEC_LITERAL);

defaultValue:
	constant
	| CURRENT_TIMESTAMP (ON UPDATE LOCALTIMESTAMP)?;

lengthOneDimension: '(' decimalLiteral+ ')';

lengthTwoDimension: '(' decimalLiteral ',' decimalLiteral ')';

lengthTwoOptionalDimension:
	'(' decimalLiteral (',' decimalLiteral)? ')';

dataType:
	typeName = (
		CHAR
		| VARCHAR
		| TINYTEXT
		| TEXT
		| MEDIUMTEXT
		| LONGTEXT
	) lengthOneDimension? BINARY? (CHARACTER SET charsetName)? (
		COLLATE collationName
	)?
	| typeName = (
		TINYINT
		| SMALLINT
		| MEDIUMINT
		| INT
		| INTEGER
		| BIGINT
	) lengthOneDimension? UNSIGNED? ZEROFILL?
	| typeName = (REAL | DOUBLE | FLOAT) lengthTwoDimension? UNSIGNED? ZEROFILL?
	| typeName = (DECIMAL | NUMERIC) lengthTwoOptionalDimension? UNSIGNED? ZEROFILL?
	| typeName = (
		DATE
		| TINYBLOB
		| BLOB
		| MEDIUMBLOB
		| LONGBLOB
		| BOOL
		| BOOLEAN
	)
	| typeName = (
		BIT
		| TIME
		| TIMESTAMP
		| DATETIME
		| BINARY
		| VARBINARY
		| YEAR
	) lengthOneDimension?
	| typeName = (ENUM | SET) '(' STRING_LITERAL (
		',' STRING_LITERAL
	)* ')' BINARY? (CHARACTER SET charsetName)? (
		COLLATE collationName
	)?
	| typeName = (
		GEOMETRYCOLLECTION
		| LINESTRING
		| MULTILINESTRING
		| MULTIPOINT
		| MULTIPOLYGON
		| POINT
		| POLYGON
	);

selectStatement: querySpecification | queryExpression;

updateStatement: singleUpdateStatement;

insertStatement:
	INSERT INTO? tableName (
		PARTITION '(' partitions = uidList ')'
	)? (('(' columns = uidList ')')? insertStatementValue);

deleteStatement: singleDeleteStatement;

singleDeleteStatement:
	DELETE FROM tableName (WHERE expression)?;

singleUpdateStatement:
	UPDATE tableName (AS? uid)? SET updatedElement (
		',' updatedElement
	)* (WHERE expression)?;

updatedElement: fullColumnName '=' expression;

insertStatementValue:
	insertFormat = (VALUES | VALUE) '(' expressionsWithDefaults ')' (
		',' '(' expressionsWithDefaults ')'
	)*
	| selectStatement;

expressionsWithDefaults:
	expressionOrDefault (',' expressionOrDefault)*;

expressionOrDefault: expression | DEFAULT;

uidList: uid (',' uid)*;

logicalOperator: AND | '&' '&' | XOR | OR | '|' '|';

querySpecification:
	SELECT selectSpec* selectElements selectIntoExpression? fromClause? orderByClause? limitClause?;

querySpecificationNointo:
	SELECT selectSpec* selectElements fromClause? orderByClause? limitClause?;

unionStatement:
	UNION unionType = (ALL | DISTINCT)? (
		querySpecificationNointo
		| queryExpressionNointo
	);

selectIntoExpression:
	INTO assignmentField (',' assignmentField)*
	| INTO DUMPFILE STRING_LITERAL
	| (
		INTO OUTFILE filename = STRING_LITERAL (
			CHARACTER SET charset = charsetName
		)? (fieldsFormat = (FIELDS | COLUMNS) selectFieldsInto+)? (
			LINES selectLinesInto+
		)?
	);

charsetName:
	BINARY
	| charsetNameBase
	| STRING_LITERAL
	| CHARSET_REVERSE_QOUTE_STRING;

charsetNameBase:
	ARMSCII8
	| ASCII
	| BIG5
	| CP1250
	| CP1251
	| CP1256
	| CP1257
	| CP850
	| CP852
	| CP866
	| CP932
	| DEC8
	| EUCJPMS
	| EUCKR
	| GB2312
	| GBK
	| GEOSTD8
	| GREEK
	| HEBREW
	| HP8
	| KEYBCS2
	| KOI8R
	| KOI8U
	| LATIN1
	| LATIN2
	| LATIN5
	| LATIN7
	| MACCE
	| MACROMAN
	| SJIS
	| SWE7
	| TIS620
	| UCS2
	| UJIS
	| UTF16
	| UTF16LE
	| UTF32
	| UTF8
	| UTF8MB3
	| UTF8MB4;

assignmentField: uid | LOCAL_ID;

selectFieldsInto:
	TERMINATED BY terminationField = STRING_LITERAL
	| OPTIONALLY? ENCLOSED BY enclosion = STRING_LITERAL
	| ESCAPED BY escaping = STRING_LITERAL;

selectLinesInto:
	STARTING BY starting = STRING_LITERAL
	| TERMINATED BY terminationLine = STRING_LITERAL;

queryExpressionNointo:
	'(' querySpecificationNointo ')'
	| '(' queryExpressionNointo ')';

queryExpression:
	'(' querySpecification ')'
	| '(' queryExpression ')';

selectSpec: (ALL | DISTINCT | DISTINCTROW)
	| HIGH_PRIORITY
	| STRAIGHT_JOIN
	| SQL_SMALL_RESULT
	| SQL_BIG_RESULT
	| SQL_BUFFER_RESULT
	| (SQL_CACHE | SQL_NO_CACHE)
	| SQL_CALC_FOUND_ROWS;

orderByClause:
	ORDER BY orderByExpression (',' orderByExpression)*;

orderByExpression: expression order = (ASC | DESC)?;

limitClause: LIMIT decimalLiteral+ OFFSET decimalLiteral+;

expression: predicate logicalExpression?;

logicalExpression:
	logicalOperator expression logicalExpression?;

predicate: expressionAtom predicateReplace?;

predicateReplace:
	comparisonOperator predicate predicateReplace?;

expressionAtom: constant | fullColumnName;

expressions: expression (',' expression)*;

constant:
	stringLiteral
	| decimalLiteral
	| hexadecimalLiteral
	| booleanLiteral
	| REAL_LITERAL
	| BIT_STRING
	| NOT? nullLiteral = (NULL_LITERAL | NULL_SPEC_LITERAL);

stringLiteral: (
		STRING_CHARSET_NAME? STRING_LITERAL
		| START_NATIONAL_STRING_LITERAL
	) STRING_LITERAL+
	| (
		STRING_CHARSET_NAME? STRING_LITERAL
		| START_NATIONAL_STRING_LITERAL
	) (COLLATE collationName)?;

hexadecimalLiteral: STRING_CHARSET_NAME? HEXADECIMAL_LITERAL;

booleanLiteral: TRUE | FALSE;

collationName: uid | STRING_LITERAL;

decimalLiteral:
	DECIMAL_LITERAL
	| ZERO_DECIMAL
	| ONE_DECIMAL
	| TWO_DECIMAL;

comparisonOperator:
	'<' '=' '>'
	| '<' '='
	| '>' '='
	| '<' '>'
	| '!' '='
	| '='
	| '>'
	| '<';

selectElements: ('*' | selectElement) (',' selectElement)*;

fromClause:
	FROM tableSources (WHERE whereExpr = expression)? (
		GROUP BY groupByItem (',' groupByItem)* (WITH ROLLUP)?
	)? (HAVING havingExpr = expression)?;

tableSources: tableSource (',' tableSource)*;

groupByItem: expression order = (ASC | DESC)?;

tableSource:
	tableSourceItem joinPart*
	| '(' tableSourceItem joinPart* ')';

joinPart: (INNER | CROSS)? JOIN tableSourceItem (
		ON expression
		| USING '(' uidList ')'
	)?
	| STRAIGHT_JOIN tableSourceItem (ON expression)?
	| (LEFT | RIGHT) OUTER? JOIN tableSourceItem (
		ON expression
		| USING '(' uidList ')'
	)
	| NATURAL ((LEFT | RIGHT) OUTER?)? JOIN tableSourceItem;

tableSourceItem: tableName (AS? alias = uid)?;

tableName: fullId;

selectElement: fullId '*' | fullColumnName (AS? uid)?;

fullColumnName: uid (dottedId dottedId?)?;

dottedId: DOT_ID | '.' uid;

fullId: uid (DOT_ID | '.' uid)*;

uid: simpleId | REVERSE_QUOTE_ID | CHARSET_REVERSE_QOUTE_STRING;

simpleId: ID;

