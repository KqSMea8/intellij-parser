root: sqlStatements?;

sqlStatements: (sqlStatement SEMI)*;

emptyStatement: SEMI;

sqlStatement: ddlStatement | dmlStatement;

dmlStatement:
	selectStatement
	| insertStatement
	| updateStatement
	| deleteStatement;

ddlStatement: createTable | dropTable;

createTable:
	CREATE TEMPORARY? TABLE ifNotExists? tableName createDefinitions (
		tableOption (','? tableOption)*
	)?;

dropTable:
	DROP TEMPORARY? TABLE ifExists? tables dropType = (
		RESTRICT
		| CASCADE
	)?;

partitionDefinitions: PARTITION BY '(' createDefinition ')';

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
	tableOption1
	| tableOption2
	| tableOption3
	| tableOption4
	| tableOption5;

tableOption1:
	ENGINE '='? engineName
	| AUTO_INCREMENT '='? decimalLiteral
	| AVG_ROW_LENGTH '='? decimalLiteral
	| DEFAULT? (CHARACTER SET | CHARSET) '='? charsetName
	| CHECKSUM '='? boolValue = ('0' | '1')
	| DEFAULT? COLLATE '='? collationName;

tableOption2:
	COMMENT '='? STRING_LITERAL
	| COMPRESSION '='? STRING_LITERAL
	| CONNECTION '='? STRING_LITERAL
	| DATA DIRECTORY '='? STRING_LITERAL
	| DELAY_KEY_WRITE '='? boolValue = ('0' | '1')
	| ENCRYPTION '='? STRING_LITERAL
	| INDEX DIRECTORY '='? STRING_LITERAL
	| partitionDefinitions;

tableOption3:
	INSERT_METHOD '='? insertMethod = (NO | FIRST | LAST)
	| KEY_BLOCK_SIZE '='? fileSizeLiteral
	| MAX_ROWS '='? decimalLiteral
	| MIN_ROWS '='? decimalLiteral
	| PACK_KEYS '='? extBoolValue = ('0' | '1' | DEFAULT);

tableOption4:
	PASSWORD '='? STRING_LITERAL
	| ROW_FORMAT '='? rowFormat = (
		DEFAULT
		| DYNAMIC
		| FIXED
		| COMPRESSED
		| REDUNDANT
		| COMPACT
	);

tableOption5:
	STATS_AUTO_RECALC '='? extBoolValue = (DEFAULT | '0' | '1')
	| STATS_PERSISTENT '='? extBoolValue = (DEFAULT | '0' | '1')
	| TABLESPACE uid tablespaceStorage?
	| LIFECYCLE DECIMAL_LITERAL
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
	dataType1
	| dataType2
	| dataType3
	| dataType4
	| dataType5
	| dataType6
	| dataType7;

dataType1:
	typeName = (
		CHAR
		| VARCHAR
		| TINYTEXT
		| TEXT
		| MEDIUMTEXT
		| LONGTEXT
	) lengthOneDimension? BINARY? (CHARACTER SET charsetName)? (
		COLLATE collationName
	)?;

dataType2:
	typeName = (
		TINYINT
		| SMALLINT
		| MEDIUMINT
		| INT
		| INTEGER
		| BIGINT
	) lengthOneDimension? UNSIGNED? ZEROFILL?;

dataType3:
	typeName = (REAL | DOUBLE | FLOAT) lengthTwoDimension? UNSIGNED? ZEROFILL?
	| typeName = (DECIMAL | NUMERIC) lengthTwoOptionalDimension? UNSIGNED? ZEROFILL?;

dataType4:
	typeName = (
		DATE
		| TINYBLOB
		| BLOB
		| MEDIUMBLOB
		| LONGBLOB
		| BOOL
		| BOOLEAN
	);

dataType5:
	typeName = (
		BIT
		| TIME
		| TIMESTAMP
		| DATETIME
		| BINARY
		| VARBINARY
		| YEAR
	) lengthOneDimension?;

dataType6:
	typeName = (ENUM | SET) '(' STRING_LITERAL (
		',' STRING_LITERAL
	)* ')' BINARY? (CHARACTER SET charsetName)? (
		COLLATE collationName
	)?;

dataType7:
	typeName = (
		GEOMETRYCOLLECTION
		| LINESTRING
		| STRING
		| MULTILINESTRING
		| MULTIPOINT
		| MULTIPOLYGON
		| POINT
		| POLYGON
	);

selectStatement:
	queryExpression
	| querySpecification (
		unionStatement* orderByClause? limitClause?
	)?;

updateStatement: singleUpdateStatement;

insertStatement:
	INSERT INTO? OVERWRITE? TABLE? tableName partitionInsertDefinitions? (
		('(' columns = uidList ')')? insertStatementValue
	);

partitionInsertDefinitions:
	PARTITION BY? (uidList | '(' fullColumnName '=' constant ')');

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
	SELECT selectSpec* selectElements selectIntoExpression? fromClause orderByClause? limitClause?;

querySpecificationNointo:
	SELECT selectSpec* selectElements fromClause orderByClause? limitClause?;

unionStatement:
	UNION unionType = (ALL | DISTINCT)? (
		querySpecification
		| queryExpression
	);

unionParenthesis:
	UNION unionType = (ALL | DISTINCT)? queryExpressionNointo;

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
	| CHARSET_NAME_L
	| STRING_LITERAL
	| CHARSET_REVERSE_QOUTE_STRING;

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

expression: predicate logicalExpression*;

logicalExpression: logicalOperator expression;

predicate: expressionAtom predicateReplace?;

predicateReplace: comparisonOperator predicate | IS nullNotnull;

expressionAtom: fullColumnName;

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

tableSources: tableSource (',' tableSource)*;

fromClause:
	FROM tableSources whereClause? groupClause? havingClause?;

whereClause: WHERE whereExpr = expression;
groupClause:
	GROUP BY groupByItem (',' groupByItem)* (WITH ROLLUP)?;
havingClause: HAVING havingExpr = expression;

groupByItem: expression order = (ASC | DESC)?;

tableSource: tableSourceItem joinPart*;

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

tableSourceItem:
	'('? selectStatement ')'? AS? alias = uid?
	| tableName (AS? alias = uid)?;

tableName: fullId;

selectElement:
	fullId '*'
	| functionCall (AS? uid)?
	| fullColumnName (AS? uid)?;

functionCall:
	specificFunction
	| (scalarFunctionName | fullId) '(' functionArgs? ')';

functionArgs: functionArg (',' functionArg)*;

scalarFunctionName: COUNT | SUBSTR;

specificFunction: (
		CURRENT_DATE
		| CURRENT_TIME
		| CURRENT_TIMESTAMP
		| CURRENT_USER
		| LOCALTIME
	)
	| (
		CONVERT '(' expression (
			',' convertedDataType
			| USING charsetName
		) ')'
	)
	| CAST '(' expression AS convertedDataType ')'
	| VALUES '(' fullColumnName ')'
	| CASE expression caseFuncAlternative+ (
		ELSE elseArg = functionArg
	)? END
	| CASE caseFuncAlternative+ (ELSE elseArg = functionArg)? END (
		AS expressionAtom
	)?
	| CHAR '(' functionArgs (USING charsetName)? ')'
	| POSITION '(' expression IN expression ')'
	| TRIM '(' positioinForm = (BOTH | LEADING | TRAILING) expression? FROM expression ')'
	| TRIM '(' expression FROM expression ')'
	| WEIGHT_STRING '(' expression (
		AS stringFormat = (CHAR | BINARY) '(' decimalLiteral ')'
	)? levelsInWeightString? ')'
	| EXTRACT '(' intervalType FROM expression ')'
	| GET_FORMAT '(' datetimeFormat = (DATE | TIME | DATETIME) ',' stringLiteral ')';

levelsInWeightString:
	LEVEL decimalLiteral (
		orderType = (ASC | DESC | REVERSE)? (
			',' levelInWeightListElement
		)*
	)
	| '-' decimalLiteral;

levelInWeightListElement:
	decimalLiteral orderType = (ASC | DESC | REVERSE)?;

intervalTypeBase:
	QUARTER
	| MONTH
	| DAY
	| HOUR
	| MINUTE
	| WEEK
	| SECOND
	| MICROSECOND;

intervalType:
	intervalTypeBase
	| YEAR
	| YEAR_MONTH
	| DAY_HOUR
	| DAY_MINUTE
	| DAY_SECOND
	| HOUR_MINUTE
	| HOUR_SECOND
	| MINUTE_SECOND
	| SECOND_MICROSECOND
	| MINUTE_MICROSECOND
	| HOUR_MICROSECOND
	| DAY_MICROSECOND;

convertedDataType:
	typeName = (BINARY | NCHAR) lengthOneDimension?
	| typeName = CHAR lengthOneDimension? (
		CHARACTER SET charsetName
	)?
	| typeName = (DATE | DATETIME | TIME)
	| typeName = DECIMAL lengthTwoDimension?
	| (SIGNED | UNSIGNED) INTEGER?;

ifExists: IF EXISTS;

caseFuncAlternative:
	WHEN condition = functionArg THEN consequent = functionArg;

functionArg: functionCall | expression;

fullColumnName: constant | uid (dottedId dottedId?)?;

dottedId: DOT_ID | '.' uid;

fullId: uid (DOT_ID | '.' uid)*;

uid: ID;