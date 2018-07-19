root: sqlStatements? MINUSMINUS;

sqlStatements: (sqlStatement MINUSMINUS? SEMI)*;

emptyStatement: SEMI;

sqlStatement: dmlStatement;

dmlStatement:
	updateStatement
	| insertStatement
	| selectStatement;

selectStatement: querySpecification?;

updateStatement: singleUpdateStatement;

insertStatement:
	INSERT INTO? tableName (
		('(' columns = uidList ')')? insertStatementValue
	);

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

expression: logicalOperator # logicalExpression;

logicalOperator: AND | '&' '&' | XOR | OR | '|' '|';

querySpecification: SELECT selectElements fromClause;

selectElements: ('*' | selectElement) (',' selectElement)*;

fromClause: FROM tableSources;

tableSources: tableSource (',' tableSource)*;

tableSource: tableSourceItem;

tableSourceItem: tableName;

tableName: fullId;

selectElement:
	fullId '*'					# selectStarElement
	| fullColumnName (AS? uid)?	# selectColumnElement;

fullColumnName: uid (dottedId dottedId?)?;

dottedId: DOT_ID | '.' uid;

fullId: uid (DOT_ID | '.' uid)?;

uid:
	simpleId
	//| DOUBLE_QUOTE_ID
	| REVERSE_QUOTE_ID
	| CHARSET_REVERSE_QOUTE_STRING;

simpleId: ID;

