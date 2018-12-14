root: sqlStatements?;

sqlStatements: (sqlStatement SEMI)*;

sqlStatement: ddlStatement | dmlStatement | dqlStatement;

dqlStatement: selectStatement | showTable;

ddlStatement:
	createTable
	| dropTable
	| alterTable
	| createDatabaseStatement
	| switchDatabaseStatement
	| dropDatabaseStatement;

dmlStatement:
	insertStatement
	| updateStatement
	| deleteStatement;

showTable: SHOW tableName;

selectStatement:
	queryExpression
	| querySpecification ( unionStatement*)?;

unionStatement:
	UNION unionType = (ALL | DISTINCT)? (
		querySpecification
		| queryExpression
	);

queryExpression:
	'(' querySpecification ')'
	| '(' queryExpression ')';

querySpecification:
	SELECT (ALL | DISTINCT)? selectElements selectIntoExpression? fromClause whereClause?
		groupByClause? havingClause? orderByClause? distributeByClause? sortByClause? limitClause?;

selectElements: ('*' | selectElement) (',' selectElement)*;

selectIntoExpression:
	INTO uid (',' uid)*
	| INTO DUMPFILE STRING_LITERAL
	| (
		INTO OUTFILE filename = STRING_LITERAL (
			CHARACTER SET charset = CharSetName
		)? (fieldsFormat = (FIELDS | COLUMNS) selectFieldsInto+)? (
			LINES selectLinesInto+
		)?
	);

selectFieldsInto:
	TERMINATED BY terminationField = STRING_LITERAL
	| OPTIONALLY? ENCLOSED BY enclosion = STRING_LITERAL
	| ESCAPED BY escaping = STRING_LITERAL;

selectLinesInto:
	STARTING BY starting = STRING_LITERAL
	| TERMINATED BY terminationLine = STRING_LITERAL;

selectElement:
	fullId '*'
	| functionCall (AS? uid)?
	| fullColumnName (AS? uid)?;

fullColumnName: constant | uid (dottedId dottedId?)?;

dottedId: '.' uid;

functionCall:
	specificFunction
	| scalarFunctionName
	| customFunction;

functionArgs: functionArg (',' functionArg)*;

functionArg: functionCall | expression;

customFunction: fullId '(' functionArgs? ')';

scalarFunctionName:
	COUNT '(' functionArgs? ')'
	| SUBSTR '(' functionArgs? ')';

specificFunction: (
		CURRENT_DATE
		| CURRENT_TIME
		| CURRENT_TIMESTAMP
		| CURRENT_USER
		| LOCALTIME
	)
	| (
		CONVERT '(' expression (
			',' convertedDataType
			| USING CharSetLiteral
		) ')'
	)
	| CAST '(' expression AS convertedDataType ')'
	| VALUES '(' fullColumnName ')'
	| CASE expression caseFuncAlternative+ (
		ELSE elseArg = functionArg
	)? END
	| CASE caseFuncAlternative+ (ELSE elseArg = functionArg)? END (
		AS expressionAtom
	)?
	| CHAR '(' functionArgs (USING CharSetLiteral)? ')'
	| POSITION '(' expression IN expression ')'
	| TRIM '(' positioinForm = (BOTH | LEADING | TRAILING) expression? FROM expression ')'
	| TRIM '(' expression FROM expression ')'
	| WEIGHT_STRING '(' expression (
		AS stringFormat = (CHAR | BINARY) '(' DecimalLiteral ')'
	)? levelsInWeightString? ')'
	| EXTRACT '(' intervalType FROM expression ')'
	| GET_FORMAT '(' datetimeFormat = (DATE | TIME | DATETIME) ',' STRING_LITERAL ')';

expressionAtom: fullColumnName;

intervalTypeBase:
	QUARTER
	| MONTH
	| DAY
	| HOUR
	| MINUTE
	| WEEK
	| SECOND
	| MICROSECOND;

intervalType:
	intervalTypeBase
	| YEAR
	| YEAR_MONTH
	| DAY_HOUR
	| DAY_MINUTE
	| DAY_SECOND
	| HOUR_MINUTE
	| HOUR_SECOND
	| MINUTE_SECOND
	| SECOND_MICROSECOND
	| MINUTE_MICROSECOND
	| HOUR_MICROSECOND
	| DAY_MICROSECOND;

levelsInWeightString:
	LEVEL DecimalLiteral (
		orderType = (ASC | DESC | REVERSE)? (
			',' levelInWeightListElement
		)*
	)
	| '-' DecimalLiteral;

levelInWeightListElement:
	DecimalLiteral orderType = (ASC | DESC | REVERSE)?;

convertedDataType:
	typeName = (BINARY | NCHAR) lengthOneDimension?
	| typeName = CHAR lengthOneDimension? (
		CHARACTER SET CharSetLiteral
	)?
	| typeName = (DATE | DATETIME | TIME)
	| typeName = DECIMAL lengthTwoDimension?
	| (SIGNED | UNSIGNED) INTEGER?;

caseFuncAlternative:
	WHEN condition = functionArg THEN consequent = functionArg;

lengthOneDimension: '(' DecimalLiteral+ ')';

lengthTwoDimension: '(' DecimalLiteral ',' DecimalLiteral ')';

fromClause: FROM tableSources;

tableSources: tableSource (',' tableSource)*;

tableSource: tableSourceItem joinPart*;

joinPart: (INNER | CROSS)? JOIN tableSourceItem (
		ON expression
		| USING '(' uidList ')'
	)?
	| (LEFT | RIGHT | FULL) OUTER? JOIN tableSourceItem (
		ON expression
		| USING '(' uidList ')'
	);

tableSourceItem:
	tableName (AS? alias = uid)?
	| '('? selectStatement ')'? AS? alias = uid?;

uid: ID;

fullId: uid (DOT uid)*;

tableName: fullId;

insertStatement:
	INSERT INTO? OVERWRITE? TABLE? tableName partitionInsertDefinitions? (
		('(' uidList ')')? insertStatementValue
	);

partitionInsertDefinitions:
	(PARTITIONED | PARTITION) BY? (
		uidList
		| '(' fullColumnName '=' constant ')'
	);

insertStatementValue:
	insertFormat = (VALUES | VALUE) '(' expression ')' (
		',' '(' expression ')'
	)*
	| selectStatement;

updateStatement:
	UPDATE tableName (AS? uid)? SET updatedElement (
		',' updatedElement
	)* (WHERE expression)?;

updatedElement: fullColumnName '=' expression;

deleteStatement: DELETE FROM tableName (WHERE expression)?;

createDatabaseStatement:
	CREATE (DATABASE | SCHEMA) ifNotExists? name = identifier;

ifExists: IF EXISTS;

switchDatabaseStatement: USE identifier;

dropDatabaseStatement:
	DROP (DATABASE | SCHEMA) ifExists? identifier;

createTable:
	CREATE (ext = EXTERNAL)? TABLE ifNotExists? name = tableName (
		like = LIKE likeName = tableName
		| ( AS selectStatement)?
	);

dropTable: DROP TABLE ifExists? tableName;

alterTable: ALTER ( TABLE alterTableStatementSuffix);

alterTableStatementSuffix:
	alterStatementSuffixRename
	| alterStatementSuffixAddCol
	| alterStatementSuffixRenameCol;

alterStatementSuffixRename:
	oldName = identifier RENAME TO newName = identifier;

alterStatementSuffixRenameCol:
	identifier CHANGE COLUMN? oldName = identifier newName = identifier colType (
		COMMENT comment = STRING_LITERAL
	)? alterStatementChangeColPosition?;

alterStatementChangeColPosition:
	first = FIRST
	| AFTER afterCol = identifier;

alterStatementSuffixAddCol:
	identifier (add = ADD | replace = REPLACE) COLUMNS LPAREN columnNameTypeList RPAREN;

columnNameTypeList: columnNameType (COMMA columnNameType)*;

columnNameType:
	colName = identifier colType (
		COMMENT comment = STRING_LITERAL
	)?;

colType: type;

colTypeList: colType (COMMA colType)*;

type: primitiveType | listType | mapType | unionType;

primitiveType:
	TINYINT
	| SMALLINT
	| INT
	| BIGINT
	| BOOLEAN
	| FLOAT
	| DOUBLE
	| DATE
	| DATETIME
	| TIMESTAMP
	| STRING
	| BINARY
	| DECIMAL;

listType: ARRAY LESSTHAN type GREATERTHAN;

mapType:
	MAP LESSTHAN left = primitiveType COMMA right = type GREATERTHAN;

unionType: UNIONTYPE LESSTHAN colTypeList GREATERTHAN;

ifNotExists: IF NOT EXISTS;

columnNameList: columnName (COMMA columnName)*;

columnName: identifier;

columnRefOrder: expression (asc = ASC | desc = DESC)?;

queryOperator: UNION ALL;

whereClause: WHERE searchCondition;

groupByClause:
	GROUP BY groupByExpression (COMMA groupByExpression)* (
		(rollup = WITH ROLLUP)
		| (cube = WITH CUBE)
	)? (
		sets = GROUPING SETS LPAREN groupingSetExpression (
			COMMA groupingSetExpression
		)* RPAREN
	)?;

groupingSetExpression:
	groupByExpression
	| LPAREN groupByExpression (COMMA groupByExpression)* RPAREN
	| LPAREN RPAREN;

groupByExpression: expression;

havingClause: HAVING havingCondition;

distributeByClause:
	DISTRIBUTE BY LPAREN expression (COMMA expression)* RPAREN
	| DISTRIBUTE BY expression;

havingCondition: expression;

searchCondition: expression;

expression: precedenceOrExpression;

atomExpression: constant | tableOrColumn;

tableOrColumn: identifier;

dateLiteral: DATE? STRING_LITERAL+;

constant:
	Number
	| dateLiteral
	| BigintLiteral
	| SmallintLiteral
	| TinyintLiteral
	| DecimalLiteral
	| charSetStringLiteral;

charSetStringLiteral:
	csName = CharSetName csLiteral = CharSetLiteral;

booleanValue: TRUE | FALSE;

precedenceFieldExpression:
	atomExpression (
		(LSQUARE expression RSQUARE)
		| (DOT identifier)
	)*;

precedenceUnaryOperator: PLUS | MINUS | TILDE;

nullCondition: NULL | NOT NULL;

precedenceUnaryPrefixExpression:
	(precedenceUnaryOperator)? precedenceFieldExpression;

precedenceUnarySuffixExpression:
	precedenceUnaryPrefixExpression (a = IS nullCondition)?;

precedenceBitwiseXorOperator: BITWISEXOR;

precedenceBitwiseXorExpression:
	precedenceUnarySuffixExpression (
		precedenceBitwiseXorOperator precedenceUnarySuffixExpression
	)*;

precedenceStarOperator: STAR | DIVIDE | MOD | DIV;

precedenceStarExpression:
	precedenceBitwiseXorExpression (
		precedenceStarOperator precedenceBitwiseXorExpression
	)*;

precedencePlusOperator: PLUS | MINUS;

precedencePlusExpression:
	precedenceStarExpression (
		precedencePlusOperator precedenceStarExpression
	)*;

precedenceAmpersandOperator: AMPERSAND;

precedenceAmpersandExpression:
	precedencePlusExpression (
		precedenceAmpersandOperator precedencePlusExpression
	)*;

precedenceBitwiseOrOperator: BITWISEOR;

precedenceBitwiseOrExpression:
	precedenceAmpersandExpression (
		precedenceBitwiseOrOperator precedenceAmpersandExpression
	)*;

precedenceEqualNegatableOperator: LIKE | RLIKE | REGEXP;

precedenceEqualOperator:
	precedenceEqualNegatableOperator
	| EQUAL
	| EQUAL_NS
	| NOTEQUAL
	| LESSTHANOREQUALTO
	| LESSTHAN
	| GREATERTHANOREQUALTO
	| GREATERTHAN;

precedenceEqualExpression:
	precedenceBitwiseOrExpression (
		(
			NOT? precedenceEqualOperator notExpr = precedenceBitwiseOrExpression
		)
		| (NOT? IN expressions)
		| (
			NOT? BETWEEN (min = precedenceBitwiseOrExpression) AND (
				max = precedenceBitwiseOrExpression
			)
		)
	)*;

expressions: LPAREN expression (COMMA expression)* RPAREN;

precedenceNotOperator: NOT;

precedenceNotExpression:
	(precedenceNotOperator)? precedenceEqualExpression;

precedenceAndOperator: AND;

precedenceAndExpression:
	precedenceNotExpression (
		precedenceAndOperator precedenceNotExpression
	)*;

precedenceOrOperator: OR;

precedenceOrExpression:
	precedenceAndExpression (
		precedenceOrOperator precedenceAndExpression
	)*;

limitClause: LIMIT num = Number;

orderByClause:
	ORDER BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| ORDER BY columnRefOrder (COMMA columnRefOrder)*;

sortByClause:
	SORT BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| SORT BY columnRefOrder;

identifier: uid;

uidList: uid (',' uid)*;