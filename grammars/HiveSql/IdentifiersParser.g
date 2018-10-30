groupByClause:
	KW_GROUP KW_BY groupByExpression (COMMA groupByExpression)* (
		(rollup = KW_WITH KW_ROLLUP)
		| (cube = KW_WITH KW_CUBE)
	)? (
		sets = KW_GROUPING KW_SETS LPAREN groupingSetExpression (
			COMMA groupingSetExpression
		)* RPAREN
	)?;

groupingSetExpression:
	groupByExpression
	| LPAREN groupByExpression (COMMA groupByExpression)* RPAREN
	| LPAREN RPAREN;

groupByExpression: expression;

havingClause: KW_HAVING havingCondition;

havingCondition: expression;

orderByClause:
	KW_ORDER KW_BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KW_ORDER KW_BY columnRefOrder (COMMA columnRefOrder)*;

clusterByClause:
	KW_CLUSTER KW_BY LPAREN expression (COMMA expression)* RPAREN
	| KW_CLUSTER KW_BY expression;

partitionByClause:
	KW_PARTITION KW_BY LPAREN expression (COMMA expression)* RPAREN
	| KW_PARTITION KW_BY expression;

distributeByClause:
	KW_DISTRIBUTE KW_BY LPAREN expression (COMMA expression)* RPAREN
	| KW_DISTRIBUTE KW_BY expression;

sortByClause:
	KW_SORT KW_BY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KW_SORT KW_BY columnRefOrder;

function:
	functionName LPAREN (
		(star = STAR)
		| (dist = KW_DISTINCT)? (
			selectExpression (COMMA selectExpression)*
		)?
	) RPAREN (KW_OVER ws = window_specification)?;

functionName:
	KW_IF
	| KW_ARRAY
	| KW_MAP
	| KW_STRUCT
	| KW_UNIONTYPE
	| identifier;

castExpression:
	KW_CAST LPAREN expression KW_AS primitiveType RPAREN;

caseExpression:
	KW_CASE expression (KW_WHEN expression KW_THEN expression)+ (
		KW_ELSE expression
	)? KW_END;

whenExpression:
	KW_CASE (KW_WHEN expression KW_THEN expression)+ (
		KW_ELSE expression
	)? KW_END;

constant:
	Number
	| dateLiteral
	| StringLiteral
	| stringLiteralSequence
	| BigintLiteral
	| SmallintLiteral
	| TinyintLiteral
	| DecimalLiteral
	| charSetStringLiteral
	| booleanValue;

stringLiteralSequence: StringLiteral StringLiteral+;

charSetStringLiteral:
	csName = CharSetName csLiteral = CharSetLiteral;

dateLiteral: KW_DATE StringLiteral;

expression: precedenceOrExpression;

atomExpression:
	KW_NULL
	| dateLiteral
	| constant
	| function
	| castExpression
	| caseExpression
	| whenExpression
	| tableOrColumn
	| LPAREN expression RPAREN;

precedenceFieldExpression:
	atomExpression (
		(LSQUARE expression RSQUARE)
		| (DOT identifier)
	)*;

precedenceUnaryOperator: PLUS | MINUS | TILDE;

nullCondition: KW_NULL | KW_NOT KW_NULL;

precedenceUnaryPrefixExpression:
	(precedenceUnaryOperator)* precedenceFieldExpression;

precedenceUnarySuffixExpression:
	precedenceUnaryPrefixExpression (a = KW_IS nullCondition)?;

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

precedenceEqualNegatableOperator:
	KW_LIKE
	| KW_RLIKE
	| KW_REGEXP;

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
	(left = precedenceBitwiseOrExpression) (
		(
			KW_NOT precedenceEqualNegatableOperator notExpr = precedenceBitwiseOrExpression
		)
		| (
			precedenceEqualOperator equalExpr = precedenceBitwiseOrExpression
		)
		| (KW_NOT KW_IN expressions)
		| (KW_IN expressions)
		| (
			KW_NOT KW_BETWEEN (
				min = precedenceBitwiseOrExpression
			) KW_AND (max = precedenceBitwiseOrExpression)
		)
		| (
			KW_BETWEEN (min = precedenceBitwiseOrExpression) KW_AND (
				max = precedenceBitwiseOrExpression
			)
		)
	)*;

expressions: LPAREN expression (COMMA expression)* RPAREN;

precedenceNotOperator: KW_NOT;

precedenceNotExpression:
	(precedenceNotOperator)* precedenceEqualExpression;

precedenceAndOperator: KW_AND;

precedenceAndExpression:
	precedenceNotExpression (
		precedenceAndOperator precedenceNotExpression
	)*;

precedenceOrOperator: KW_OR;

precedenceOrExpression:
	precedenceAndExpression (
		precedenceOrOperator precedenceAndExpression
	)*;

booleanValue: KW_TRUE | KW_FALSE;

tableOrPartition: tableName partitionSpec?;

partitionSpec:
	KW_PARTITION LPAREN partitionVal (COMMA partitionVal)* RPAREN;

partitionVal: identifier (EQUAL constant)?;

dropPartitionSpec:
	KW_PARTITION LPAREN dropPartitionVal (COMMA dropPartitionVal)* RPAREN;

dropPartitionVal: identifier dropPartitionOperator constant;

dropPartitionOperator:
	EQUAL
	| NOTEQUAL
	| LESSTHANOREQUALTO
	| LESSTHAN
	| GREATERTHANOREQUALTO
	| GREATERTHAN;

sysFuncNames:
	KW_AND
	| KW_OR
	| KW_NOT
	| KW_LIKE
	| KW_IF
	| KW_CASE
	| KW_WHEN
	| KW_TINYINT
	| KW_SMALLINT
	| KW_INT
	| KW_BIGINT
	| KW_FLOAT
	| KW_DOUBLE
	| KW_BOOLEAN
	| KW_STRING
	| KW_BINARY
	| KW_ARRAY
	| KW_MAP
	| KW_STRUCT
	| KW_UNIONTYPE
	| EQUAL
	| EQUAL_NS
	| NOTEQUAL
	| LESSTHANOREQUALTO
	| LESSTHAN
	| GREATERTHANOREQUALTO
	| GREATERTHAN
	| DIVIDE
	| PLUS
	| MINUS
	| STAR
	| MOD
	| DIV
	| AMPERSAND
	| TILDE
	| BITWISEOR
	| BITWISEXOR
	| KW_RLIKE
	| KW_REGEXP
	| KW_IN
	| KW_BETWEEN;

descFuncNames: sysFuncNames | StringLiteral | identifier;

identifier: Identifier | nonReserved;

nonReserved:
	KW_TRUE
	| KW_FALSE
	| KW_LIKE
	| KW_EXISTS
	| KW_ASC
	| KW_DESC
	| KW_ORDER
	| KW_GROUP
	| KW_BY
	| KW_AS
	| KW_INSERT
	| KW_OVERWRITE
	| KW_OUTER
	| KW_LEFT
	| KW_RIGHT
	| KW_FULL
	| KW_PARTITION
	| KW_PARTITIONS
	| KW_TABLE
	| KW_TABLES
	| KW_COLUMNS
	| KW_INDEX
	| KW_INDEXES
	| KW_REBUILD
	| KW_FUNCTIONS
	| KW_SHOW
	| KW_MSCK
	| KW_REPAIR
	| KW_DIRECTORY
	| KW_LOCAL
	| KW_USING
	| KW_CLUSTER
	| KW_DISTRIBUTE
	| KW_SORT
	| KW_UNION
	| KW_LOAD
	| KW_EXPORT
	| KW_IMPORT
	| KW_DATA
	| KW_INPATH
	| KW_IS
	| KW_NULL
	| KW_CREATE
	| KW_EXTERNAL
	| KW_ALTER
	| KW_CHANGE
	| KW_FIRST
	| KW_AFTER
	| KW_DESCRIBE
	| KW_DROP
	| KW_RENAME
	| KW_IGNORE
	| KW_PROTECTION
	| KW_TO
	| KW_COMMENT
	| KW_BOOLEAN
	| KW_TINYINT
	| KW_SMALLINT
	| KW_INT
	| KW_BIGINT
	| KW_FLOAT
	| KW_DOUBLE
	| KW_DATE
	| KW_DATETIME
	| KW_TIMESTAMP
	| KW_DECIMAL
	| KW_STRING
	| KW_ARRAY
	| KW_STRUCT
	| KW_UNIONTYPE
	| KW_PARTITIONED
	| KW_CLUSTERED
	| KW_SORTED
	| KW_INTO
	| KW_BUCKETS
	| KW_ROW
	| KW_ROWS
	| KW_FORMAT
	| KW_DELIMITED
	| KW_FIELDS
	| KW_TERMINATED
	| KW_ESCAPED
	| KW_COLLECTION
	| KW_ITEMS
	| KW_KEYS
	| KW_KEY_TYPE
	| KW_LINES
	| KW_STORED
	| KW_FILEFORMAT
	| KW_SEQUENCEFILE
	| KW_TEXTFILE
	| KW_RCFILE
	| KW_ORCFILE
	| KW_INPUTFORMAT
	| KW_OUTPUTFORMAT
	| KW_INPUTDRIVER
	| KW_OUTPUTDRIVER
	| KW_OFFLINE
	| KW_ENABLE
	| KW_DISABLE
	| KW_READONLY
	| KW_NO_DROP
	| KW_LOCATION
	| KW_BUCKET
	| KW_OUT
	| KW_OF
	| KW_PERCENT
	| KW_ADD
	| KW_REPLACE
	| KW_RLIKE
	| KW_REGEXP
	| KW_TEMPORARY
	| KW_EXPLAIN
	| KW_FORMATTED
	| KW_PRETTY
	| KW_DEPENDENCY
	| KW_LOGICAL
	| KW_SERDE
	| KW_WITH
	| KW_DEFERRED
	| KW_SERDEPROPERTIES
	| KW_DBPROPERTIES
	| KW_LIMIT
	| KW_SET
	| KW_UNSET
	| KW_TBLPROPERTIES
	| KW_IDXPROPERTIES
	| KW_VALUE_TYPE
	| KW_ELEM_TYPE
	| KW_MAPJOIN
	| KW_STREAMTABLE
	| KW_HOLD_DDLTIME
	| KW_CLUSTERSTATUS
	| KW_UTC
	| KW_UTCTIMESTAMP
	| KW_LONG
	| KW_DELETE
	| KW_PLUS
	| KW_MINUS
	| KW_FETCH
	| KW_INTERSECT
	| KW_VIEW
	| KW_IN
	| KW_DATABASES
	| KW_MATERIALIZED
	| KW_SCHEMA
	| KW_SCHEMAS
	| KW_GRANT
	| KW_REVOKE
	| KW_SSL
	| KW_UNDO
	| KW_LOCK
	| KW_LOCKS
	| KW_UNLOCK
	| KW_SHARED
	| KW_EXCLUSIVE
	| KW_PROCEDURE
	| KW_UNSIGNED
	| KW_WHILE
	| KW_READ
	| KW_READS
	| KW_PURGE
	| KW_RANGE
	| KW_ANALYZE
	| KW_BEFORE
	| KW_BETWEEN
	| KW_BOTH
	| KW_BINARY
	| KW_CONTINUE
	| KW_CURSOR
	| KW_TRIGGER
	| KW_RECORDREADER
	| KW_RECORDWRITER
	| KW_SEMI
	| KW_LATERAL
	| KW_TOUCH
	| KW_ARCHIVE
	| KW_UNARCHIVE
	| KW_COMPUTE
	| KW_STATISTICS
	| KW_USE
	| KW_OPTION
	| KW_CONCATENATE
	| KW_SHOW_DATABASE
	| KW_UPDATE
	| KW_RESTRICT
	| KW_CASCADE
	| KW_SKEWED
	| KW_ROLLUP
	| KW_CUBE
	| KW_DIRECTORIES
	| KW_FOR
	| KW_GROUPING
	| KW_SETS
	| KW_TRUNCATE
	| KW_NOSCAN
	| KW_USER
	| KW_ROLE
	| KW_INNER;
