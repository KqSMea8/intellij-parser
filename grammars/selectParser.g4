root: sqlStatements;

sqlStatements: sqlStatement;

sqlStatement: dmlStatement;

dmlStatement: selectStatement;

selectStatement: querySpecification?;

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

dottedId: DOT_ID;

fullColumnName: uid (dottedId dottedId?)?;

dottedId: DOT_ID | '.' uid;

