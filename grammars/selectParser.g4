root: sqlStatements?;

sqlStatements: (sqlStatement SEMI)*;

emptyStatement: SEMI;

sqlStatement: dmlStatement;

dmlStatement:
	updateStatement
	| insertStatement
	| deleteStatement
	| selectStatement;

selectStatement:
	querySpecification lockClause?
	| queryExpression lockClause?;
	// | querySpecificationNointo unionStatement+ (
	// 	UNION unionType = (ALL | DISTINCT)? (
	// 		querySpecification
	// 		| queryExpression
	// 	)
	// )? orderByClause? limitClause? lockClause?;
	// | queryExpressionNointo unionParenthesis+ (
	// 	UNION unionType = (ALL | DISTINCT)? queryExpression
	// )? orderByClause? limitClause? lockClause?;

lockClause: FOR UPDATE | LOCK IN SHARE MODE;

unionParenthesis:
	UNION unionType = (ALL | DISTINCT)?;
  // queryExpressionNointo;

queryExpression:
	'(' querySpecification ')'
	| queryExpressionUnit;

queryExpressionUnit: ('(' queryExpression ')')?;

// queryExpressionNointo:
// 	'(' querySpecificationNointo ')'
// 	| '(' queryExpressionNointo ')';

// selectStatement:
// 	querySpecification;

querySpecification:
  SELECT selectSpec* selectElements fromClause? orderByClause? limitClause? selectIntoExpression?;
	// | SELECT selectSpec* selectElements selectIntoExpression? fromClause? orderByClause? limitClause?;

querySpecificationNointo:
	SELECT selectSpec* selectElements fromClause? orderByClause? limitClause?;

unionStatement:
	UNION unionType = (ALL | DISTINCT)? (
		querySpecificationNointo
		// | queryExpressionNointo
	);

// querySpecification:
// 	SELECT selectSpec* selectElements fromClause orderByClause? limitClause?;

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

selectLinesInto:
	STARTING BY starting = STRING_LITERAL
	| TERMINATED BY terminationLine = STRING_LITERAL;

selectFieldsInto:
	TERMINATED BY terminationField = STRING_LITERAL
	| OPTIONALLY? ENCLOSED BY enclosion = STRING_LITERAL
	| ESCAPED BY escaping = STRING_LITERAL;

charsetName:
	BINARY
	| charsetNameBase
	| STRING_LITERAL
	| CHARSET_REVERSE_QOUTE_STRING;

assignmentField: uid | LOCAL_ID;

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

limitClause:
	LIMIT (
    limit = decimalLiteral OFFSET offset = decimalLiteral |
		(offset = decimalLiteral ',')? limit = decimalLiteral
	);

decimalLiteral: DECIMAL_LITERAL;

orderByClause:
	ORDER BY orderByExpression (',' orderByExpression)*;

orderByExpression: expression order = (ASC | DESC)?;

selectSpec: (ALL | DISTINCT | DISTINCTROW)
	| HIGH_PRIORITY
	| STRAIGHT_JOIN
	| SQL_SMALL_RESULT
	| SQL_BIG_RESULT
	| SQL_BUFFER_RESULT
	| (SQL_CACHE | SQL_NO_CACHE)
	| SQL_CALC_FOUND_ROWS;

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

expression: logicalOperator;

logicalOperator: AND | '&' '&' | XOR | OR | '|' '|';

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

