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
	)? # columnCreateTable;

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
	ENGINE '='? engineName									# tableOptionEngine
	| AUTO_INCREMENT '='? decimalLiteral					# tableOptionAutoIncrement
	| AVG_ROW_LENGTH '='? decimalLiteral					# tableOptionAverage
	| DEFAULT? (CHARACTER SET | CHARSET) '='? charsetName	# tableOptionCharset
	| CHECKSUM '='? boolValue = ('0' | '1')					# tableOptionChecksum
	| DEFAULT? COLLATE '='? collationName					# tableOptionCollate
	| COMMENT '='? STRING_LITERAL							# tableOptionComment
	| COMPRESSION '='? STRING_LITERAL						# tableOptionCompression
	| CONNECTION '='? STRING_LITERAL						# tableOptionConnection
	| DATA DIRECTORY '='? STRING_LITERAL					# tableOptionDataDirectory
	| DELAY_KEY_WRITE '='? boolValue = ('0' | '1')			# tableOptionDelay
	| ENCRYPTION '='? STRING_LITERAL						# tableOptionEncryption
	| INDEX DIRECTORY '='? STRING_LITERAL					# tableOptionIndexDirectory
	| INSERT_METHOD '='? insertMethod = (NO | FIRST | LAST)	# tableOptionInsertMethod
	| KEY_BLOCK_SIZE '='? fileSizeLiteral					# tableOptionKeyBlockSize
	| MAX_ROWS '='? decimalLiteral							# tableOptionMaxRows
	| MIN_ROWS '='? decimalLiteral							# tableOptionMinRows
	| PACK_KEYS '='? extBoolValue = ('0' | '1' | DEFAULT)	# tableOptionPackKeys
	| PASSWORD '='? STRING_LITERAL							# tableOptionPassword
	| ROW_FORMAT '='? rowFormat = (
		DEFAULT
		| DYNAMIC
		| FIXED
		| COMPRESSED
		| REDUNDANT
		| COMPACT
	)																# tableOptionRowFormat
	| STATS_AUTO_RECALC '='? extBoolValue = (DEFAULT | '0' | '1')	# tableOptionRecalculation
	| STATS_PERSISTENT '='? extBoolValue = (DEFAULT | '0' | '1')	# tableOptionPersistent
	| STATS_SAMPLE_PAGES '='? decimalLiteral						# tableOptionSamplePage
	| TABLESPACE uid tablespaceStorage?								# tableOptionTablespace
	| UNION '='? '(' tables ')'										# tableOptionUnion;

tablespaceStorage: STORAGE (DISK | MEMORY | DEFAULT);

tables: tableName (',' tableName)*;

ifNotExists: IF NOT EXISTS;

createDefinitions:
	'(' createDefinition (',' createDefinition)* ')';

createDefinition:
	uid columnDefinition	# columnDeclaration;

columnDefinition: dataType columnConstraint*;

columnConstraint:
	nullNotnull												# nullColumnConstraint
	| DEFAULT defaultValue									# defaultColumnConstraint
	| AUTO_INCREMENT										# autoIncrementColumnConstraint
	| PRIMARY? KEY											# primaryKeyColumnConstraint
	| UNIQUE KEY?											# uniqueKeyColumnConstraint
	| COMMENT STRING_LITERAL								# commentColumnConstraint
	| COLUMN_FORMAT colformat = (FIXED | DYNAMIC | DEFAULT)	# formatColumnConstraint
	| STORAGE storageval = (DISK | MEMORY | DEFAULT)		# storageColumnConstraint;

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
	)? # stringDataType
	| typeName = (
		TINYINT
		| SMALLINT
		| MEDIUMINT
		| INT
		| INTEGER
		| BIGINT
	) lengthOneDimension? UNSIGNED? ZEROFILL?											# dimensionDataType
	| typeName = (REAL | DOUBLE | FLOAT) lengthTwoDimension? UNSIGNED? ZEROFILL?		# dimensionDataType
	| typeName = (DECIMAL | NUMERIC) lengthTwoOptionalDimension? UNSIGNED? ZEROFILL?	# dimensionDataType
	| typeName = (
		DATE
		| TINYBLOB
		| BLOB
		| MEDIUMBLOB
		| LONGBLOB
		| BOOL
		| BOOLEAN
	) # simpleDataType
	| typeName = (
		BIT
		| TIME
		| TIMESTAMP
		| DATETIME
		| BINARY
		| VARBINARY
		| YEAR
	) lengthOneDimension? # dimensionDataType
	| typeName = (ENUM | SET) '(' STRING_LITERAL (
		',' STRING_LITERAL
	)* ')' BINARY? (CHARACTER SET charsetName)? (
		COLLATE collationName
	)? # collectionDataType
	| typeName = (
		GEOMETRYCOLLECTION
		| LINESTRING
		| MULTILINESTRING
		| MULTIPOINT
		| MULTIPOLYGON
		| POINT
		| POLYGON
	) # spatialDataType;

selectStatement: querySpecification | queryExpression;

updateStatement: singleUpdateStatement;

insertStatement: 
	INSERT INTO? tableName (
		PARTITION '(' partitions = uidList ')'
	)? (
		('(' columns = uidList ')')? insertStatementValue
	);

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

querySpecification: SELECT selectSpec* selectElements selectIntoExpression? fromClause? orderByClause? limitClause?;

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

limitClause:
	LIMIT decimalLiteral+ OFFSET decimalLiteral;

expression: fullColumnName logicalOperator? fullColumnName? | predicate;

predicate:
 expressionAtom							# expressionAtomPredicate;

expressionAtom:
	constant													# constantExpressionAtom;

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

fromClause: FROM tableSources;

tableSources: tableSource (',' tableSource)*;

tableSource: tableSourceItem;

tableSourceItem: tableName;

tableName: fullId;

selectElement:
	fullId '*'					
	| fullColumnName (AS? uid)?;

fullColumnName: uid (dottedId dottedId?)?;

dottedId: DOT_ID | '.' uid;

fullId: uid (DOT_ID | '.' uid)*;

uid:
	simpleId
	| REVERSE_QUOTE_ID
	| CHARSET_REVERSE_QOUTE_STRING;

simpleId: ID;

