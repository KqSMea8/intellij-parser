root: sqlStatements?;

sqlStatements: (sqlStatement SEMI)*;

emptyStatement: SEMI;

sqlStatement: dmlStatement;

dmlStatement:
	updateStatement
	| insertStatement
	| deleteStatement
	| selectStatement;

selectStatement: querySpecification | queryExpression;

updateStatement: singleUpdateStatement;

insertStatement:
	INSERT INTO? tableName (
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
	LIMIT decimalLiteral OFFSET decimalLiteral;

expression: fullColumnName logicalOperator? fullColumnName?;

expressions: expression (',' expression)*;

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

