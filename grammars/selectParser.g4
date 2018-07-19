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

selectElement: fullId (AS? ID)?;

dottedId: DOT_ID;

fullId: ID (dottedId)*;
