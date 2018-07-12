root: sqlStatements;

sqlStatements: sqlStatement;

sqlStatement: dmlStatement;

dmlStatement: selectStatement;

selectStatement: querySpecification? # simpleSelect;

querySpecification: SELECT selectElements fromClause?;

selectElements: (star = '*' | selectElement) (',' selectElement)*;

fromClause: FROM tableSources;

tableSources: tableSource (',' tableSource)*;

tableSource: tableSourceItem # tableSourceBase;

tableSourceItem: tableName # atomTableItem;

tableName: fullId;

selectElement: fullId '.' '*' # selectStarElement;

fullId: uid (DOT_ID | '.' uid)?;

uid: simpleId;

simpleId: ID;

