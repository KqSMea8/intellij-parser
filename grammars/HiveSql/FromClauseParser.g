tableAllColumns: STAR | tableName DOT STAR;

tableOrColumn: identifier;

expressionList: expression (COMMA expression)*;

aliasList: identifier (COMMA identifier)*;

fromClause: KW_FROM joinSource;

joinSource:
	fromSource (joinToken fromSource (KW_ON expression)?)*
	| uniqueJoinToken uniqueJoinSource (COMMA uniqueJoinSource)+;

uniqueJoinSource: KW_PRESERVE? fromSource uniqueJoinExpr;

uniqueJoinExpr:
	LPAREN e1 += expression (COMMA e1 += expression)* RPAREN;

uniqueJoinToken: KW_UNIQUEJOIN;

joinToken:
	KW_JOIN
	| KW_INNER KW_JOIN
	| KW_CROSS KW_JOIN
	| KW_LEFT (KW_OUTER)? KW_JOIN
	| KW_RIGHT (KW_OUTER)? KW_JOIN
	| KW_FULL (KW_OUTER)? KW_JOIN
	| KW_LEFT KW_SEMI KW_JOIN;

lateralView:
	KW_LATERAL KW_VIEW KW_OUTER function tableAlias (
		KW_AS identifier (COMMA identifier)*
	)?
	| KW_LATERAL KW_VIEW function tableAlias (
		KW_AS identifier (COMMA identifier)*
	)?;

tableAlias: identifier;

fromSource: (tableSource | subQuerySource) ( lateralView)*;

tableBucketSample:
	KW_TABLESAMPLE LPAREN KW_BUCKET (numerator = Number) KW_OUT KW_OF (
		denominator = Number
	) (KW_ON expr += expression (COMMA expr += expression)*)? RPAREN;

splitSample:
	KW_TABLESAMPLE LPAREN (numerator = Number) (
		percent = KW_PERCENT
		| KW_ROWS
	) RPAREN
	| KW_TABLESAMPLE LPAREN (numerator = ByteLengthLiteral) RPAREN;

tableSample: tableBucketSample | splitSample;

tableSource:
	tabname = tableName (props = tableProperties)? (
		ts = tableSample
	)? (KW_AS? alias = Identifier)?;

tableName:
	db = identifier DOT tab = identifier
	| tab = identifier;

viewName: (db = identifier DOT)? view = identifier;

subQuerySource:
	LPAREN queryStatementExpression RPAREN identifier;

partitioningSpec:
	partitionByClause orderByClause?
	| orderByClause
	| distributeByClause sortByClause?
	| sortByClause
	| clusterByClause;

partitionTableFunctionSource: subQuerySource | tableSource;

whereClause: KW_WHERE searchCondition;

searchCondition: expression;
