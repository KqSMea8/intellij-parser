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
	querySpecification;

querySpecification:
	SELECT selectSpec* selectElements fromClause? orderByClause? limitClause?;

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

fromClause: FROM tableSources;

tableSources: tableSource (',' tableSource)*;

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

