root: sqlStatements;

sqlStatements: sqlStatement;

sqlStatement: dmlStatement;

dmlStatement: updateStatement | selectStatement;

selectStatement: querySpecification?;

updateStatement: singleUpdateStatement;

singleUpdateStatement:
	UPDATE tableName (AS? uid)? SET updatedElement (
		',' updatedElement
	)* (WHERE expression)?;

updatedElement: fullColumnName '=' expression;

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
	fullId '.' '*'				# selectStarElement
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

