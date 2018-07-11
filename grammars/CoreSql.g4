sqlStatements: (sqlStatement MINUSMINUS? SEMI | emptyStatement)* (
		sqlStatement (MINUSMINUS? SEMI)?
		| emptyStatement
	);

emptyStatement: SEMI;

sqlStatement:
	ddlStatement
	| dmlStatement;

ddlStatement:
	createDatabase
	| createTable;

dmlStatement:
	selectStatement;

createDatabase:
	CREATE dbFormat = (DATABASE | SCHEMA) ifNotExists? uid createDatabaseOption*;

createTable:
	CREATE TEMPORARY? TABLE ifNotExists? tableName (
		LIKE tableName
	);


selectStatement:
	querySpecification lockClause?	
	| queryExpression lockClause?	
	| querySpecificationNointo unionStatement+ (
		UNION unionType = (ALL | DISTINCT)? (
			querySpecification
			| queryExpression
		)
	)? orderByClause? limitClause? lockClause? 
	| queryExpressionNointo unionParenthesis+ (
		UNION unionType = (ALL | DISTINCT)? queryExpression
	)? orderByClause? limitClause? lockClause?;

lockClause: FOR UPDATE | LOCK IN SHARE MODE;

unionStatement:
	UNION unionType = (ALL | DISTINCT)? (
		querySpecificationNointo
		| queryExpressionNointo
	);

unionParenthesis:
	UNION unionType = (ALL | DISTINCT)? queryExpressionNointo;

queryExpression:
	'(' querySpecification ')'
	| '(' queryExpression ')';

queryExpressionNointo:
	'(' querySpecificationNointo ')'
	| '(' queryExpressionNointo ')';

querySpecificationNointo:
	SELECT selectSpec* selectElements fromClause? orderByClause? limitClause?;

querySpecification:
	SELECT selectSpec* selectElements selectIntoExpression? fromClause? orderByClause? limitClause?
	| SELECT selectSpec* selectElements fromClause? orderByClause? limitClause? selectIntoExpression
		?;

limitClause:
	LIMIT (
		(offset = decimalLiteral ',')? limit = decimalLiteral
		| limit = decimalLiteral OFFSET offset = decimalLiteral
	);	

fromClause:
	FROM tableSources (WHERE whereExpr = expression)? (
		GROUP BY groupByItem (',' groupByItem)* (WITH ROLLUP)?
	)? (HAVING havingExpr = expression)?;

groupByItem: expression order = (ASC | DESC)?;

orderByClause:
	ORDER BY orderByExpression (',' orderByExpression)*;

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

uidList: uid (',' uid)*;

indexHint:
	indexHintAction = (USE | IGNORE | FORCE) keyFormat = (
		INDEX
		| KEY
	) (FOR indexHintType)? '(' uidList ')';

indexHintType: JOIN | ORDER BY | GROUP BY;

tableSourceItem:
	tableName (PARTITION '(' uidList ')')? (AS? alias = uid)? (
		indexHint (',' indexHint)*
	)? 
	| (
		selectStatement
		| '(' parenthesisSubquery = selectStatement ')'
	) AS? alias = uid
	| '(' tableSources ')';

selectIntoExpression:
	INTO assignmentField (',' assignmentField)*	
	| INTO DUMPFILE STRING_LITERAL				
	| (
		INTO OUTFILE filename = STRING_LITERAL (
			CHARACTER SET charset = charsetName
		)? (fieldsFormat = (FIELDS | COLUMNS) selectFieldsInto+)? (
			LINES selectLinesInto+
		)?
	);

assignmentField: uid | LOCAL_ID;

selectLinesInto:
	STARTING BY starting = STRING_LITERAL
	| TERMINATED BY terminationLine = STRING_LITERAL;

selectFieldsInto:
	TERMINATED BY terminationField = STRING_LITERAL
	| OPTIONALLY? ENCLOSED BY enclosion = STRING_LITERAL
	| ESCAPED BY escaping = STRING_LITERAL;

selectSpec: (ALL | DISTINCT | DISTINCTROW)
	| HIGH_PRIORITY
	| STRAIGHT_JOIN
	| SQL_SMALL_RESULT
	| SQL_BIG_RESULT
	| SQL_BUFFER_RESULT
	| (SQL_CACHE | SQL_NO_CACHE)
	| SQL_CALC_FOUND_ROWS;

selectElements: (star = '*' | selectElement) (',' selectElement)*;

selectElement:
	fullId '.' '*'								
	| fullColumnName (AS? uid)?					
	| functionCall (AS? uid)?						
	| (LOCAL_ID VAR_ASSIGN)? expression (AS? uid)?;

functionCall:
	specificFunction						
	| aggregateWindowedFunction					
	| scalarFunctionName '(' functionArgs? ')'	
	| fullId '(' functionArgs? ')'			
	| passwordFunctionClause;

passwordFunctionClause:
	functionName = (PASSWORD | OLD_PASSWORD) '(' functionArg ')';

scalarFunctionName:
	functionNameBase
	| ASCII
	| CURDATE
	| CURRENT_DATE
	| CURRENT_TIME
	| CURRENT_TIMESTAMP
	| CURTIME
	| DATE_ADD
	| DATE_SUB
	| IF
	| INSERT
	| LOCALTIME
	| LOCALTIMESTAMP
	| MID
	| NOW
	| REPLACE
	| SUBSTR
	| SUBSTRING
	| SYSDATE
	| TRIM
	| UTC_DATE
	| UTC_TIME
	| UTC_TIMESTAMP;

expression:
	notOperator = (NOT | '!') expression						
	| expression logicalOperator expression					
	| predicate IS NOT? testValue = (TRUE | FALSE | UNKNOWN)	
	| predicate;

predicate:
	predicate NOT? IN '(' (selectStatement | expressions) ')'	
	| predicate IS nullNotnull								
	| left = predicate comparisonOperator right = predicate		
	| predicate comparisonOperator quantifier = (
		ALL
		| ANY
		| SOME
	) '(' selectStatement ')'									
	| predicate NOT? BETWEEN predicate AND predicate			
	| predicate SOUNDS LIKE predicate						
	| predicate NOT? LIKE predicate (ESCAPE STRING_LITERAL)?
	| predicate NOT? regex = (REGEXP | RLIKE) predicate			
	| (LOCAL_ID VAR_ASSIGN)? expressionAtom;

nullNotnull: NOT? (NULL_LITERAL | NULL_SPEC_LITERAL);

aggregateWindowedFunction: (AVG | MAX | MIN | SUM) '(' aggregator = (
		ALL
		| DISTINCT
	)? functionArg ')'
	| COUNT '(' (starArg = '*' | aggregator = ALL? functionArg) ')'
	| COUNT '(' aggregator = DISTINCT functionArgs ')'
	| (
		BIT_AND
		| BIT_OR
		| BIT_XOR
		| STD
		| STDDEV
		| STDDEV_POP
		| STDDEV_SAMP
		| VAR_POP
		| VAR_SAMP
		| VARIANCE
	) '(' aggregator = ALL? functionArg ')'
	| GROUP_CONCAT '(' aggregator = DISTINCT? functionArgs (
		ORDER BY orderByExpression (',' orderByExpression)*
	)? (SEPARATOR separator = STRING_LITERAL)? ')';

orderByExpression: expression order = (ASC | DESC)?;

specificFunction: (
		CURRENT_DATE
		| CURRENT_TIME
		| CURRENT_TIMESTAMP
		| CURRENT_USER
		| LOCALTIME
	)																
	| CONVERT '(' expression separator = ',' convertedDataType ')'	
	| CONVERT '(' expression USING charsetName ')'				
	| CAST '(' expression AS convertedDataType ')'				
	| VALUES '(' fullColumnName ')'									
	| CASE expression caseFuncAlternative+ (
		ELSE elseArg = functionArg
	)? END														
	| CASE caseFuncAlternative+ (ELSE elseArg = functionArg)? END	
	| CHAR '(' functionArgs (USING charsetName)? ')'				
	| POSITION '(' (
		positionString = stringLiteral
		| positionExpression = expression
	) IN (inString = stringLiteral | inExpression = expression) ')' 
	| (SUBSTR | SUBSTRING) '(' (
		sourceString = stringLiteral
		| sourceExpression = expression
	) FROM (
		fromDecimal = decimalLiteral
		| fromExpression = expression
	) (
		FOR (
			forDecimal = decimalLiteral
			| forExpression = expression
		)
	)? ')' 
	| TRIM '(' positioinForm = (BOTH | LEADING | TRAILING) (
		sourceString = stringLiteral
		| sourceExpression = expression
	)? FROM (
		fromString = stringLiteral
		| fromExpression = expression
	) ')' 
	| TRIM '(' (
		sourceString = stringLiteral
		| sourceExpression = expression
	) FROM (
		fromString = stringLiteral
		| fromExpression = expression
	) ')' 
	| WEIGHT_STRING '(' (stringLiteral | expression) (
		AS stringFormat = (CHAR | BINARY) '(' decimalLiteral ')'
	)? levelsInWeightString? ')' 
	| EXTRACT '(' intervalType FROM (
		sourceString = stringLiteral
		| sourceExpression = expression
	) ')'																			
	| GET_FORMAT '(' datetimeFormat = (DATE | TIME | DATETIME) ',' stringLiteral ')';

convertedDataType:
	typeName = (BINARY | NCHAR) lengthOneDimension?
	| typeName = CHAR lengthOneDimension? (
		CHARACTER SET charsetName
	)?
	| typeName = (DATE | DATETIME | TIME)
	| typeName = DECIMAL lengthTwoDimension?
	| (SIGNED | UNSIGNED) INTEGER?;

lengthOneDimension: '(' decimalLiteral ')';

lengthTwoDimension: '(' decimalLiteral ',' decimalLiteral ')';

levelsInWeightString:
	LEVEL levelInWeightListElement (',' levelInWeightListElement)*	
	| LEVEL firstLevel = decimalLiteral '-' lastLevel = decimalLiteral;

levelInWeightListElement:
	decimalLiteral orderType = (ASC | DESC | REVERSE)?;

caseFuncAlternative:
	WHEN condition = functionArg THEN consequent = functionArg;

functionArg:
	constant
	| fullColumnName
	| functionCall
	| expression;

functionArgs: (
		constant
		| fullColumnName
		| functionCall
		| expression
	) (
		',' (
			constant
			| fullColumnName
			| functionCall
			| expression
		)
	)*;

comparisonOperator:
	'='
	| '>'
	| '<'
	| '<' '='
	| '>' '='
	| '<' '>'
	| '!' '='
	| '<' '=' '>';

expressionAtom:
	constant													
	| fullColumnName										
	| functionCall											
	| expressionAtom COLLATE collationName					
	| mysqlVariable												
	| unaryOperator expressionAtom								
	| BINARY expressionAtom										
	| '(' expression (',' expression)* ')'					
	| ROW '(' expression (',' expression)+ ')'				
	| EXISTS '(' selectStatement ')'						
	| '(' selectStatement ')'									
	| INTERVAL expression intervalType						
	| left = expressionAtom bitOperator right = expressionAtom
	| left = expressionAtom mathOperator right = expressionAtom;

bitOperator: '<' '<' | '>' '>' | '&' | '^' | '|';

mathOperator: '*' | '/' | '%' | DIV | MOD | '+' | '-' | '--';

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

unaryOperator: '!' | '~' | '+' | '-' | NOT;

mysqlVariable: LOCAL_ID | GLOBAL_ID;

constant:
	stringLiteral
	| decimalLiteral
	| hexadecimalLiteral
	| booleanLiteral
	| REAL_LITERAL
	| BIT_STRING
	| NOT? nullLiteral = (NULL_LITERAL | NULL_SPEC_LITERAL);

stringLiteral: (
		STRING_CHARSET_NAME? STRING_LITERAL
		| START_NATIONAL_STRING_LITERAL
	) STRING_LITERAL+
	| (
		STRING_CHARSET_NAME? STRING_LITERAL
		| START_NATIONAL_STRING_LITERAL
	) (COLLATE collationName)?;

decimalLiteral:
	DECIMAL_LITERAL
	| ZERO_DECIMAL
	| ONE_DECIMAL
	| TWO_DECIMAL;

booleanLiteral: TRUE | FALSE;

hexadecimalLiteral: STRING_CHARSET_NAME? HEXADECIMAL_LITERAL;

expressions: expression (',' expression)*;

logicalOperator: AND | '&' '&' | XOR | OR | '|' '|';

dottedId: DOT_ID | '.' uid;

fullColumnName: uid (dottedId dottedId?)?;

fullId: uid (DOT_ID | '.' uid)?;

tableName: fullId;

ifNotExists: IF NOT EXISTS;

uid:
	simpleId
	 
	| REVERSE_QUOTE_ID
	| CHARSET_REVERSE_QOUTE_STRING;

simpleId:
	ID
	| charsetNameBase
	| transactionLevelBase
	| engineName
	| privilegesBase
	| intervalTypeBase
	| dataTypeBase
	| keywordsCanBeId
	| functionNameBase;

charsetNameBase:
	ARMSCII8
	| ASCII
	| BIG5
	| CP1250
	| CP1251
	| CP1256
	| CP1257
	| CP850
	| CP852
	| CP866
	| CP932
	| DEC8
	| EUCJPMS
	| EUCKR
	| GB2312
	| GBK
	| GEOSTD8
	| GREEK
	| HEBREW
	| HP8
	| KEYBCS2
	| KOI8R
	| KOI8U
	| LATIN1
	| LATIN2
	| LATIN5
	| LATIN7
	| MACCE
	| MACROMAN
	| SJIS
	| SWE7
	| TIS620
	| UCS2
	| UJIS
	| UTF16
	| UTF16LE
	| UTF32
	| UTF8
	| UTF8MB3
	| UTF8MB4;

transactionLevelBase:
	REPEATABLE
	| COMMITTED
	| UNCOMMITTED
	| SERIALIZABLE;

engineName:
	ARCHIVE
	| BLACKHOLE
	| CSV
	| FEDERATED
	| INNODB
	| MEMORY
	| MRG_MYISAM
	| MYISAM
	| NDB
	| NDBCLUSTER
	| PERFOMANCE_SCHEMA;

privilegesBase:
	TABLES
	| ROUTINE
	| EXECUTE
	| FILE
	| PROCESS
	| RELOAD
	| SHUTDOWN
	| SUPER
	| PRIVILEGES;

intervalTypeBase:
	QUARTER
	| MONTH
	| DAY
	| HOUR
	| MINUTE
	| WEEK
	| SECOND
	| MICROSECOND;
dataTypeBase:
	DATE
	| TIME
	| TIMESTAMP
	| DATETIME
	| YEAR
	| ENUM
	| TEXT;

keywordsCanBeId:
	ACCOUNT
	| ACTION
	| AFTER
	| AGGREGATE
	| ALGORITHM
	| ANY
	| AT
	| AUTHORS
	| AUTOCOMMIT
	| AUTOEXTEND_SIZE
	| AUTO_INCREMENT
	| AVG_ROW_LENGTH
	| BEGIN
	| BINLOG
	| BIT
	| BLOCK
	| BOOL
	| BOOLEAN
	| BTREE
	| CASCADED
	| CHAIN
	| CHANNEL
	| CHECKSUM
	| CIPHER
	| CLIENT
	| COALESCE
	| CODE
	| COLUMNS
	| COLUMN_FORMAT
	| COMMENT
	| COMMIT
	| COMPACT
	| COMPLETION
	| COMPRESSED
	| COMPRESSION
	| CONCURRENT
	| CONNECTION
	| CONSISTENT
	| CONTAINS
	| CONTEXT
	| CONTRIBUTORS
	| COPY
	| CPU
	| DATA
	| DATAFILE
	| DEALLOCATE
	| DEFAULT_AUTH
	| DEFINER
	| DELAY_KEY_WRITE
	| DIRECTORY
	| DISABLE
	| DISCARD
	| DISK
	| DO
	| DUMPFILE
	| DUPLICATE
	| DYNAMIC
	| ENABLE
	| ENCRYPTION
	| ENDS
	| ENGINE
	| ENGINES
	| ERROR
	| ERRORS
	| ESCAPE
	| EVEN
	| EVENT
	| EVENTS
	| EVERY
	| EXCHANGE
	| EXCLUSIVE
	| EXPIRE
	| EXTENT_SIZE
	| FAULTS
	| FIELDS
	| FILE_BLOCK_SIZE
	| FILTER
	| FIRST
	| FIXED
	| FOLLOWS
	| FULL
	| FUNCTION
	| GLOBAL
	| GRANTS
	| GROUP_REPLICATION
	| HASH
	| HOST
	| IDENTIFIED
	| IGNORE_SERVER_IDS
	| IMPORT
	| INDEXES
	| INITIAL_SIZE
	| INPLACE
	| INSERT_METHOD
	| INSTANCE
	| INVOKER
	| IO
	| IO_THREAD
	| IPC
	| ISOLATION
	| ISSUER
	| KEY_BLOCK_SIZE
	| LANGUAGE
	| LAST
	| LEAVES
	| LESS
	| LEVEL
	| LIST
	| LOCAL
	| LOGFILE
	| LOGS
	| MASTER
	| MASTER_AUTO_POSITION
	| MASTER_CONNECT_RETRY
	| MASTER_DELAY
	| MASTER_HEARTBEAT_PERIOD
	| MASTER_HOST
	| MASTER_LOG_FILE
	| MASTER_LOG_POS
	| MASTER_PASSWORD
	| MASTER_PORT
	| MASTER_RETRY_COUNT
	| MASTER_SSL
	| MASTER_SSL_CA
	| MASTER_SSL_CAPATH
	| MASTER_SSL_CERT
	| MASTER_SSL_CIPHER
	| MASTER_SSL_CRL
	| MASTER_SSL_CRLPATH
	| MASTER_SSL_KEY
	| MASTER_TLS_VERSION
	| MASTER_USER
	| MAX_CONNECTIONS_PER_HOUR
	| MAX_QUERIES_PER_HOUR
	| MAX_ROWS
	| MAX_SIZE
	| MAX_UPDATES_PER_HOUR
	| MAX_USER_CONNECTIONS
	| MEMORY
	| MERGE
	| MID
	| MIGRATE
	| MIN_ROWS
	| MODIFY
	| MUTEX
	| MYSQL
	| NAME
	| NAMES
	| NCHAR
	| NEVER
	| NO
	| NODEGROUP
	| NONE
	| OFFLINE
	| OFFSET
	| OJ
	| OLD_PASSWORD
	| ONE
	| ONLINE
	| ONLY
	| OPTIMIZER_COSTS
	| OPTIONS
	| OWNER
	| PACK_KEYS
	| PAGE
	| PARSER
	| PARTIAL
	| PARTITIONING
	| PARTITIONS
	| PASSWORD
	| PHASE
	| PLUGINS
	| PLUGIN_DIR
	| PORT
	| PRECEDES
	| PREPARE
	| PRESERVE
	| PREV
	| PROCESSLIST
	| PROFILE
	| PROFILES
	| PROXY
	| QUERY
	| QUICK
	| REBUILD
	| RECOVER
	| REDO_BUFFER_SIZE
	| REDUNDANT
	| RELAYLOG
	| RELAY_LOG_FILE
	| RELAY_LOG_POS
	| REMOVE
	| REORGANIZE
	| REPAIR
	| REPLICATE_DO_DB
	| REPLICATE_DO_TABLE
	| REPLICATE_IGNORE_DB
	| REPLICATE_IGNORE_TABLE
	| REPLICATE_REWRITE_DB
	| REPLICATE_WILD_DO_TABLE
	| REPLICATE_WILD_IGNORE_TABLE
	| REPLICATION
	| RESUME
	| RETURNS
	| ROLLBACK
	| ROLLUP
	| ROTATE
	| ROW
	| ROWS
	| ROW_FORMAT
	| SAVEPOINT
	| SCHEDULE
	| SECURITY
	| SERVER
	| SESSION
	| SHARE
	| SHARED
	| SIGNED
	| SIMPLE
	| SLAVE
	| SNAPSHOT
	| SOCKET
	| SOME
	| SOUNDS
	| SOURCE
	| SQL_AFTER_GTIDS
	| SQL_AFTER_MTS_GAPS
	| SQL_BEFORE_GTIDS
	| SQL_BUFFER_RESULT
	| SQL_CACHE
	| SQL_NO_CACHE
	| SQL_THREAD
	| START
	| STARTS
	| STATS_AUTO_RECALC
	| STATS_PERSISTENT
	| STATS_SAMPLE_PAGES
	| STATUS
	| STOP
	| STORAGE
	| STRING
	| SUBJECT
	| SUBPARTITION
	| SUBPARTITIONS
	| SUSPEND
	| SWAPS
	| SWITCHES
	| TABLESPACE
	| TEMPORARY
	| TEMPTABLE
	| THAN
	| TRANSACTION
	| TRUNCATE
	| UNDEFINED
	| UNDOFILE
	| UNDO_BUFFER_SIZE
	| UNKNOWN
	| UPGRADE
	| USER
	| VALIDATION
	| VALUE
	| VARIABLES
	| VIEW
	| WAIT
	| WARNINGS
	| WITHOUT
	| WORK
	| WRAPPER
	| X509
	| XA
	| XML;

functionNameBase:
	ABS
	| ACOS
	| ADDDATE
	| ADDTIME
	| AES_DECRYPT
	| AES_ENCRYPT
	| AREA
	| ASBINARY
	| ASIN
	| ASTEXT
	| ASWKB
	| ASWKT
	| ASYMMETRIC_DECRYPT
	| ASYMMETRIC_DERIVE
	| ASYMMETRIC_ENCRYPT
	| ASYMMETRIC_SIGN
	| ASYMMETRIC_VERIFY
	| ATAN
	| ATAN2
	| BENCHMARK
	| BIN
	| BIT_COUNT
	| BIT_LENGTH
	| BUFFER
	| CEIL
	| CEILING
	| CENTROID
	| CHARACTER_LENGTH
	| CHARSET
	| CHAR_LENGTH
	| COERCIBILITY
	| COLLATION
	| COMPRESS
	| CONCAT
	| CONCAT_WS
	| CONNECTION_ID
	| CONV
	| CONVERT_TZ
	| COS
	| COT
	| COUNT
	| CRC32
	| CREATE_ASYMMETRIC_PRIV_KEY
	| CREATE_ASYMMETRIC_PUB_KEY
	| CREATE_DH_PARAMETERS
	| CREATE_DIGEST
	| CROSSES
	| DATE
	| DATEDIFF
	| DATE_FORMAT
	| DAY
	| DAYNAME
	| DAYOFMONTH
	| DAYOFWEEK
	| DAYOFYEAR
	| DECODE
	| DEGREES
	| DES_DECRYPT
	| DES_ENCRYPT
	| DIMENSION
	| DISJOINT
	| ELT
	| ENCODE
	| ENCRYPT
	| ENDPOINT
	| ENVELOPE
	| EQUALS
	| EXP
	| EXPORT_SET
	| EXTERIORRING
	| EXTRACTVALUE
	| FIELD
	| FIND_IN_SET
	| FLOOR
	| FORMAT
	| FOUND_ROWS
	| FROM_BASE64
	| FROM_DAYS
	| FROM_UNIXTIME
	| GEOMCOLLFROMTEXT
	| GEOMCOLLFROMWKB
	| GEOMETRYCOLLECTION
	| GEOMETRYCOLLECTIONFROMTEXT
	| GEOMETRYCOLLECTIONFROMWKB
	| GEOMETRYFROMTEXT
	| GEOMETRYFROMWKB
	| GEOMETRYN
	| GEOMETRYTYPE
	| GEOMFROMTEXT
	| GEOMFROMWKB
	| GET_FORMAT
	| GET_LOCK
	| GLENGTH
	| GREATEST
	| GTID_SUBSET
	| GTID_SUBTRACT
	| HEX
	| HOUR
	| IFNULL
	| INET6_ATON
	| INET6_NTOA
	| INET_ATON
	| INET_NTOA
	| INSTR
	| INTERIORRINGN
	| INTERSECTS
	| ISCLOSED
	| ISEMPTY
	| ISNULL
	| ISSIMPLE
	| IS_FREE_LOCK
	| IS_IPV4
	| IS_IPV4_COMPAT
	| IS_IPV4_MAPPED
	| IS_IPV6
	| IS_USED_LOCK
	| LAST_INSERT_ID
	| LCASE
	| LEAST
	| LEFT
	| LENGTH
	| LINEFROMTEXT
	| LINEFROMWKB
	| LINESTRING
	| LINESTRINGFROMTEXT
	| LINESTRINGFROMWKB
	| LN
	| LOAD_FILE
	| LOCATE
	| LOG
	| LOG10
	| LOG2
	| LOWER
	| LPAD
	| LTRIM
	| MAKEDATE
	| MAKETIME
	| MAKE_SET
	| MASTER_POS_WAIT
	| MBRCONTAINS
	| MBRDISJOINT
	| MBREQUAL
	| MBRINTERSECTS
	| MBROVERLAPS
	| MBRTOUCHES
	| MBRWITHIN
	| MD5
	| MICROSECOND
	| MINUTE
	| MLINEFROMTEXT
	| MLINEFROMWKB
	| MONTH
	| MONTHNAME
	| MPOINTFROMTEXT
	| MPOINTFROMWKB
	| MPOLYFROMTEXT
	| MPOLYFROMWKB
	| MULTILINESTRING
	| MULTILINESTRINGFROMTEXT
	| MULTILINESTRINGFROMWKB
	| MULTIPOINT
	| MULTIPOINTFROMTEXT
	| MULTIPOINTFROMWKB
	| MULTIPOLYGON
	| MULTIPOLYGONFROMTEXT
	| MULTIPOLYGONFROMWKB
	| NAME_CONST
	| NULLIF
	| NUMGEOMETRIES
	| NUMINTERIORRINGS
	| NUMPOINTS
	| OCT
	| OCTET_LENGTH
	| ORD
	| OVERLAPS
	| PERIOD_ADD
	| PERIOD_DIFF
	| PI
	| POINT
	| POINTFROMTEXT
	| POINTFROMWKB
	| POINTN
	| POLYFROMTEXT
	| POLYFROMWKB
	| POLYGON
	| POLYGONFROMTEXT
	| POLYGONFROMWKB
	| POSITION
	| POW
	| POWER
	| QUARTER
	| QUOTE
	| RADIANS
	| RAND
	| RANDOM_BYTES
	| RELEASE_LOCK
	| REVERSE
	| RIGHT
	| ROUND
	| ROW_COUNT
	| RPAD
	| RTRIM
	| SECOND
	| SEC_TO_TIME
	| SESSION_USER
	| SHA
	| SHA1
	| SHA2
	| SIGN
	| SIN
	| SLEEP
	| SOUNDEX
	| SQL_THREAD_WAIT_AFTER_GTIDS
	| SQRT
	| SRID
	| STARTPOINT
	| STRCMP
	| STR_TO_DATE
	| ST_AREA
	| ST_ASBINARY
	| ST_ASTEXT
	| ST_ASWKB
	| ST_ASWKT
	| ST_BUFFER
	| ST_CENTROID
	| ST_CONTAINS
	| ST_CROSSES
	| ST_DIFFERENCE
	| ST_DIMENSION
	| ST_DISJOINT
	| ST_DISTANCE
	| ST_ENDPOINT
	| ST_ENVELOPE
	| ST_EQUALS
	| ST_EXTERIORRING
	| ST_GEOMCOLLFROMTEXT
	| ST_GEOMCOLLFROMTXT
	| ST_GEOMCOLLFROMWKB
	| ST_GEOMETRYCOLLECTIONFROMTEXT
	| ST_GEOMETRYCOLLECTIONFROMWKB
	| ST_GEOMETRYFROMTEXT
	| ST_GEOMETRYFROMWKB
	| ST_GEOMETRYN
	| ST_GEOMETRYTYPE
	| ST_GEOMFROMTEXT
	| ST_GEOMFROMWKB
	| ST_INTERIORRINGN
	| ST_INTERSECTION
	| ST_INTERSECTS
	| ST_ISCLOSED
	| ST_ISEMPTY
	| ST_ISSIMPLE
	| ST_LINEFROMTEXT
	| ST_LINEFROMWKB
	| ST_LINESTRINGFROMTEXT
	| ST_LINESTRINGFROMWKB
	| ST_NUMGEOMETRIES
	| ST_NUMINTERIORRING
	| ST_NUMINTERIORRINGS
	| ST_NUMPOINTS
	| ST_OVERLAPS
	| ST_POINTFROMTEXT
	| ST_POINTFROMWKB
	| ST_POINTN
	| ST_POLYFROMTEXT
	| ST_POLYFROMWKB
	| ST_POLYGONFROMTEXT
	| ST_POLYGONFROMWKB
	| ST_SRID
	| ST_STARTPOINT
	| ST_SYMDIFFERENCE
	| ST_TOUCHES
	| ST_UNION
	| ST_WITHIN
	| ST_X
	| ST_Y
	| SUBDATE
	| SUBSTRING_INDEX
	| SUBTIME
	| SYSTEM_USER
	| TAN
	| TIME
	| TIMEDIFF
	| TIMESTAMP
	| TIMESTAMPADD
	| TIMESTAMPDIFF
	| TIME_FORMAT
	| TIME_TO_SEC
	| TOUCHES
	| TO_BASE64
	| TO_DAYS
	| TO_SECONDS
	| UCASE
	| UNCOMPRESS
	| UNCOMPRESSED_LENGTH
	| UNHEX
	| UNIX_TIMESTAMP
	| UPDATEXML
	| UPPER
	| UUID
	| UUID_SHORT
	| VALIDATE_PASSWORD_STRENGTH
	| VERSION
	| WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS
	| WEEK
	| WEEKDAY
	| WEEKOFYEAR
	| WEIGHT_STRING
	| WITHIN
	| YEAR
	| YEARWEEK
	| Y_FUNCTION
	| X_FUNCTION;

charsetName:
	BINARY
	| charsetNameBase
	| STRING_LITERAL
	| CHARSET_REVERSE_QOUTE_STRING;

collationName: uid | STRING_LITERAL;

createDatabaseOption:
	DEFAULT? CHARACTER SET '='? charsetName
	| DEFAULT? COLLATE '='? collationName;