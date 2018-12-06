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
	selectClause fromClause whereClause? groupByClause? havingClause? orderByClause?
		distributeByClause? sortByClause? limitClause?;

selectClause:
	SELECT (ALL | DISTINCT)? selectList;

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
	UPDATE tableName (AS? Identifier)? SET updatedElement (
		',' updatedElement
	)* (WHERE expression)?;

updatedElement: fullColumnName '=' expression;

fullColumnName: constant | Identifier;

deleteStatement:
	DELETE FROM tableName (WHERE expression)?;

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
		COMMENT comment = StringLiteral
	)? alterStatementChangeColPosition?;

alterStatementChangeColPosition:
	first = FIRST
	| AFTER afterCol = identifier;

alterStatementSuffixAddCol:
	identifier (add = ADD | replace = REPLACE) COLUMNS LPAREN columnNameTypeList RPAREN;

columnNameTypeList: columnNameType (COMMA columnNameType)*;

columnNameType:
	colName = identifier colType (
		COMMENT comment = StringLiteral
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

dateLiteral: DATE? StringLiteral+;

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
	(precedenceUnaryOperator)* precedenceFieldExpression;

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
			NOT? BETWEEN (
				min = precedenceBitwiseOrExpression
			) AND (max = precedenceBitwiseOrExpression)
		)
	)*;

expressions: LPAREN expression (COMMA expression)* RPAREN;

precedenceNotOperator: NOT;

precedenceNotExpression:
	(precedenceNotOperator)* precedenceEqualExpression;

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

selectList: selectItem ( COMMA selectItem)*;

selectItem: selectExpression ( AS? identifier)?;

selectExpression: tableAllColumns;

tableAllColumns: STAR | tableName DOT STAR;

fromClause: FROM joinSource;

joinSource: fromSource joinPart;

joinPart: (joinToken fromSource)*;

joinToken:
	JOIN
	| INNER JOIN
	| CROSS JOIN
	| LEFT (OUTER)? JOIN
	| RIGHT (OUTER)? JOIN
	| FULL (OUTER)? JOIN
	| LEFT SEMI JOIN;

fromSource: (tableSource);

tableSource: tabname = tableName (AS? alias = Identifier)?;

tableName:
	db = identifier DOT tab = identifier
	| tab = identifier;

orderByClause:
	ORDER BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| ORDER BY columnRefOrder (COMMA columnRefOrder)*;

sortByClause:
	SORT BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| SORT BY columnRefOrder;

identifier: Identifier | nonReserved;

uidList: Identifier (',' Identifier)*;

nonReserved:
	TRUE
	| FALSE
	| LIKE
	| EXISTS
	| ASC
	| DESC
	| ORDER
	| GROUP
	| BY
	| AS
	| INSERT
	| OVERWRITE
	| OUTER
	| LEFT
	| RIGHT
	| FULL
	| PARTITION
	| PARTITIONS
	| TABLE
	| TABLES
	| COLUMNS
	| INDEX
	| INDEXES
	| REBUILD
	| SHOW
	| MSCK
	| REPAIR
	| DIRECTORY
	| LOCAL
	| USING
	| CLUSTER
	| DISTRIBUTE
	| SORT
	| UNION
	| LOAD
	| EXPORT
	| IMPORT
	| DATA
	| INPATH
	| IS
	| NULL
	| CREATE
	| EXTERNAL
	| ALTER
	| CHANGE
	| FIRST
	| AFTER
	| DESCRIBE
	| DROP
	| RENAME
	| IGNORE
	| PROTECTION
	| TO
	| COMMENT
	| BOOLEAN
	| TINYINT
	| SMALLINT
	| INT
	| BIGINT
	| FLOAT
	| DOUBLE
	| DATE
	| DATETIME
	| TIMESTAMP
	| DECIMAL
	| STRING
	| ARRAY
	| STRUCT
	| UNIONTYPE
	| PARTITIONED
	| CLUSTERED
	| SORTED
	| INTO
	| BUCKETS
	| ROW
	| ROWS
	| FORMAT
	| DELIMITED
	| FIELDS
	| TERMINATED
	| ESCAPED
	| COLLECTION
	| ITEMS
	| KEYS
	| KEY_TYPE
	| LINES
	| STORED
	| FILEFORMAT
	| SEQUENCEFILE
	| TEXTFILE
	| RCFILE
	| ORCFILE
	| INPUTFORMAT
	| OUTPUTFORMAT
	| INPUTDRIVER
	| OUTPUTDRIVER
	| OFFLINE
	| ENABLE
	| DISABLE
	| READONLY
	| NO_DROP
	| LOCATION
	| BUCKET
	| OUT
	| OF
	| PERCENT
	| ADD
	| REPLACE
	| RLIKE
	| REGEXP
	| TEMPORARY
	| EXPLAIN
	| FORMATTED
	| PRETTY
	| DEPENDENCY
	| LOGICAL
	| SERDE
	| WITH
	| DEFERRED
	| SERDEPROPERTIES
	| DBPROPERTIES
	| LIMIT
	| SET
	| UNSET
	| TBLPROPERTIES
	| IDXPROPERTIES
	| VALUE_TYPE
	| ELEM_TYPE
	| MAPJOIN
	| STREAMTABLE
	| HOLD_DDLTIME
	| CLUSTERSTATUS
	| UTC
	| UTCTIMESTAMP
	| LONG
	| DELETE
	| PLUS
	| KWPLUS
	| MINUS
	| KWMINUS
	| FETCH
	| INTERSECT
	| VIEW
	| IN
	| DATABASES
	| MATERIALIZED
	| SCHEMA
	| SCHEMAS
	| GRANT
	| REVOKE
	| SSL
	| UNDO
	| LOCK
	| LOCKS
	| UNLOCK
	| SHARED
	| EXCLUSIVE
	| PROCEDURE
	| UNSIGNED
	| WHILE
	| READ
	| READS
	| PURGE
	| RANGE
	| ANALYZE
	| BEFORE
	| BETWEEN
	| BOTH
	| BINARY
	| CONTINUE
	| CURSOR
	| TRIGGER
	| RECORDREADER
	| RECORDWRITER
	| SEMI
	| LATERAL
	| TOUCH
	| ARCHIVE
	| UNARCHIVE
	| COMPUTE
	| STATISTICS
	| USE
	| OPTION
	| CONCATENATE
	| SHOW_DATABASE
	| UPDATE
	| RESTRICT
	| CASCADE
	| SKEWED
	| ROLLUP
	| CUBE
	| DIRECTORIES
	| FOR
	| GROUPING
	| SETS
	| TRUNCATE
	| NOSCAN
	| USER
	| ROLE
	| INNER;
