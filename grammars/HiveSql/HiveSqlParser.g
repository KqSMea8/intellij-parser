statement: explainStatement | execStatement;

explainStatement:
	KW_EXPLAIN (
		explainOptions = KW_EXTENDED
		| explainOptions = KW_FORMATTED
		| explainOptions = KW_DEPENDENCY
		| explainOptions = KW_LOGICAL
	)? execStatement;

execStatement:
	queryStatementExpression
	| loadStatement
	| exportStatement
	| importStatement
	| ddlStatement;

loadStatement:
	KW_LOAD KW_DATA (islocal = KW_LOCAL)? KW_INPATH (
		path = StringLiteral
	) (isoverwrite = KW_OVERWRITE)? KW_INTO KW_TABLE (
		tab = tableOrPartition
	);

exportStatement:
	KW_EXPORT KW_TABLE (tab = tableOrPartition) KW_TO (
		path = StringLiteral
	);

importStatement:
	KW_IMPORT (
		(ext = KW_EXTERNAL)? KW_TABLE (tab = tableOrPartition)
	)? KW_FROM (path = StringLiteral) tableLocation?;

ddlStatement:
	createDatabaseStatement
	| switchDatabaseStatement
	| dropDatabaseStatement
	| createTableStatement
	| dropTableStatement
	| truncateTableStatement
	| alterStatement
	| descStatement
	| showStatement
	| metastoreCheck
	| createViewStatement
	| dropViewStatement
	| createFunctionStatement
	| createMacroStatement
	| createIndexStatement
	| dropIndexStatement
	| dropFunctionStatement
	| dropMacroStatement
	| analyzeStatement
	| lockStatement
	| unlockStatement
	| createRoleStatement
	| dropRoleStatement
	| grantPrivileges
	| revokePrivileges
	| showGrants
	| showRoleGrants
	| grantRole
	| revokeRole;

ifExists: KW_IF KW_EXISTS;

restrictOrCascade: KW_RESTRICT | KW_CASCADE;

ifNotExists: KW_IF KW_NOT KW_EXISTS;

storedAsDirs: KW_STORED KW_AS KW_DIRECTORIES;

orReplace: KW_OR KW_REPLACE;

ignoreProtection: KW_IGNORE KW_PROTECTION;

createDatabaseStatement:
	KW_CREATE (KW_DATABASE | KW_SCHEMA) ifNotExists? name = identifier databaseComment? dbLocation?
		(
		KW_WITH KW_DBPROPERTIES dbprops = dbProperties
	)?;

dbLocation: KW_LOCATION locn = StringLiteral;

dbProperties: LPAREN dbPropertiesList RPAREN;

dbPropertiesList: keyValueProperty (COMMA keyValueProperty)*;

switchDatabaseStatement: KW_USE identifier;

dropDatabaseStatement:
	KW_DROP (KW_DATABASE | KW_SCHEMA) ifExists? identifier restrictOrCascade?;

databaseComment: KW_COMMENT comment = StringLiteral;

createTableStatement:
	KW_CREATE (ext = KW_EXTERNAL)? KW_TABLE ifNotExists? name = tableName (
		like = KW_LIKE likeName = tableName tableLocation? tablePropertiesPrefixed?
		| (LPAREN columnNameTypeList RPAREN)? tableComment? tablePartition? tableBuckets?
			tableSkewed? tableRowFormat? tableFileFormat? tableLocation? tablePropertiesPrefixed? (
			KW_AS selectStatement
		)?
	);

truncateTableStatement:
	KW_TRUNCATE KW_TABLE tablePartitionPrefix (
		KW_COLUMNS LPAREN columnNameList RPAREN
	)?;

createIndexStatement:
	KW_CREATE KW_INDEX indexName = identifier KW_ON KW_TABLE tab = tableName LPAREN indexedCols =
		columnNameList RPAREN KW_AS typeName = StringLiteral autoRebuild? indexPropertiesPrefixed?
		indexTblName? tableRowFormat? tableFileFormat? tableLocation? tablePropertiesPrefixed?
		indexComment?;

indexComment: KW_COMMENT comment = StringLiteral;

autoRebuild: KW_WITH KW_DEFERRED KW_REBUILD;

indexTblName: KW_IN KW_TABLE indexTbl = tableName;

indexPropertiesPrefixed: KW_IDXPROPERTIES indexProperties;

indexProperties: LPAREN indexPropertiesList RPAREN;

indexPropertiesList: keyValueProperty (COMMA keyValueProperty)*;

dropIndexStatement:
	KW_DROP KW_INDEX ifExists? indexName = identifier KW_ON tab = tableName;

dropTableStatement: KW_DROP KW_TABLE ifExists? tableName;

alterStatement:
	KW_ALTER (
		KW_TABLE alterTableStatementSuffix
		| KW_VIEW alterViewStatementSuffix
		| KW_INDEX alterIndexStatementSuffix
		| KW_DATABASE alterDatabaseStatementSuffix
	);

alterTableStatementSuffix:
	alterStatementSuffixRename
	| alterStatementSuffixAddCol
	| alterStatementSuffixRenameCol
	| alterStatementSuffixDropPartitions
	| alterStatementSuffixAddPartitions
	| alterStatementSuffixTouch
	| alterStatementSuffixArchive
	| alterStatementSuffixUnArchive
	| alterStatementSuffixProperties
	| alterTblPartitionStatement
	| alterStatementSuffixSkewedby
	| alterStatementSuffixExchangePartition;

alterViewStatementSuffix:
	alterViewSuffixProperties
	| alterStatementSuffixRename
	| alterStatementSuffixAddPartitions
	| alterStatementSuffixDropPartitions
	| name = tableName KW_AS selectStatement;

alterIndexStatementSuffix:
	indexName = identifier (KW_ON tableNameId = identifier) partitionSpec? (
		KW_REBUILD
		| KW_SET KW_IDXPROPERTIES indexProperties
	);

alterDatabaseStatementSuffix: alterDatabaseSuffixProperties;

alterDatabaseSuffixProperties:
	name = identifier KW_SET KW_DBPROPERTIES dbProperties;

alterStatementSuffixRename:
	oldName = identifier KW_RENAME KW_TO newName = identifier;

alterStatementSuffixAddCol:
	identifier (add = KW_ADD | replace = KW_REPLACE) KW_COLUMNS LPAREN columnNameTypeList RPAREN;

alterStatementSuffixRenameCol:
	identifier KW_CHANGE KW_COLUMN? oldName = identifier newName = identifier colType (
		KW_COMMENT comment = StringLiteral
	)? alterStatementChangeColPosition?;

alterStatementChangeColPosition:
	first = KW_FIRST
	| KW_AFTER afterCol = identifier;

alterStatementSuffixAddPartitions:
	identifier KW_ADD ifNotExists? partitionSpec partitionLocation? (
		partitionSpec partitionLocation?
	)*;

alterStatementSuffixTouch: identifier KW_TOUCH (partitionSpec)*;

alterStatementSuffixArchive:
	identifier KW_ARCHIVE (partitionSpec)*;

alterStatementSuffixUnArchive:
	identifier KW_UNARCHIVE (partitionSpec)*;

partitionLocation: KW_LOCATION locn = StringLiteral;

alterStatementSuffixDropPartitions:
	identifier KW_DROP ifExists? dropPartitionSpec (
		COMMA dropPartitionSpec
	)* ignoreProtection?;

alterStatementSuffixProperties:
	name = identifier KW_SET KW_TBLPROPERTIES tableProperties
	| name = identifier KW_UNSET KW_TBLPROPERTIES ifExists? tableProperties;

alterViewSuffixProperties:
	name = identifier KW_SET KW_TBLPROPERTIES tableProperties
	| name = identifier KW_UNSET KW_TBLPROPERTIES ifExists? tableProperties;

alterStatementSuffixSerdeProperties:
	KW_SET KW_SERDE serdeName = StringLiteral (
		KW_WITH KW_SERDEPROPERTIES tableProperties
	)?
	| KW_SET KW_SERDEPROPERTIES tableProperties;

tablePartitionPrefix: name = identifier partitionSpec?;

alterTblPartitionStatement:
	tablePartitionPrefix alterTblPartitionStatementSuffix
	| Identifier KW_PARTITION KW_COLUMN LPAREN columnNameType RPAREN;

alterTblPartitionStatementSuffix:
	alterStatementSuffixFileFormat
	| alterStatementSuffixLocation
	| alterStatementSuffixProtectMode
	| alterStatementSuffixMergeFiles
	| alterStatementSuffixSerdeProperties
	| alterStatementSuffixRenamePart
	| alterStatementSuffixBucketNum
	| alterTblPartitionStatementSuffixSkewedLocation
	| alterStatementSuffixClusterbySortby;

alterStatementSuffixFileFormat: KW_SET KW_FILEFORMAT fileFormat;

alterStatementSuffixClusterbySortby:
	KW_NOT KW_CLUSTERED
	| KW_NOT KW_SORTED
	| tableBuckets;

alterTblPartitionStatementSuffixSkewedLocation:
	KW_SET KW_SKEWED KW_LOCATION skewedLocations;

skewedLocations: LPAREN skewedLocationsList RPAREN;

skewedLocationsList:
	skewedLocationMap (COMMA skewedLocationMap)*;

skewedLocationMap:
	key = skewedValueLocationElement EQUAL value = StringLiteral;

alterStatementSuffixLocation:
	KW_SET KW_LOCATION newLoc = StringLiteral;

alterStatementSuffixSkewedby:
	name = identifier tableSkewed
	| name = identifier KW_NOT KW_SKEWED
	| name = identifier KW_NOT storedAsDirs;

alterStatementSuffixExchangePartition:
	name = tableName KW_EXCHANGE partitionSpec KW_WITH KW_TABLE exchangename = tableName;

alterStatementSuffixProtectMode: alterProtectMode;

alterStatementSuffixRenamePart: KW_RENAME KW_TO partitionSpec;

alterStatementSuffixMergeFiles: KW_CONCATENATE;

alterProtectMode:
	KW_ENABLE alterProtectModeMode
	| KW_DISABLE alterProtectModeMode;

alterProtectModeMode:
	KW_OFFLINE
	| KW_NO_DROP KW_CASCADE?
	| KW_READONLY;

alterStatementSuffixBucketNum: KW_INTO num = Number KW_BUCKETS;

fileFormat:
	KW_SEQUENCEFILE
	| KW_TEXTFILE
	| KW_RCFILE
	| KW_ORCFILE
	| KW_INPUTFORMAT inFmt = StringLiteral KW_OUTPUTFORMAT outFmt = StringLiteral (
		KW_INPUTDRIVER inDriver = StringLiteral KW_OUTPUTDRIVER outDriver = StringLiteral
	)?
	| genericSpec = identifier;

tabTypeExpr:
	identifier (
		DOT (
			KW_ELEM_TYPE
			| KW_KEY_TYPE
			| KW_VALUE_TYPE
			| identifier
		)
	)*;

descTabTypeExpr:
	identifier (
		DOT (
			KW_ELEM_TYPE
			| KW_KEY_TYPE
			| KW_VALUE_TYPE
			| identifier
		)
	)* identifier?;

partTypeExpr: tabTypeExpr partitionSpec?;

descPartTypeExpr: descTabTypeExpr partitionSpec?;

descStatement: (KW_DESCRIBE | KW_DESC) (
		descOptions = KW_FORMATTED
		| descOptions = KW_EXTENDED
		| descOptions = KW_PRETTY
	)? (parttype = descPartTypeExpr)
	| (KW_DESCRIBE | KW_DESC) KW_FUNCTION KW_EXTENDED? (
		name = descFuncNames
	)
	| (KW_DESCRIBE | KW_DESC) KW_DATABASE KW_EXTENDED? (
		dbName = identifier
	);

analyzeStatement:
	KW_ANALYZE KW_TABLE (parttype = tableOrPartition) KW_COMPUTE KW_STATISTICS (
		(noscan = KW_NOSCAN)
		| (partialscan = KW_PARTIALSCAN)
		| (KW_FOR KW_COLUMNS statsColumnName = columnNameList)
	)?;

showStatement:
	KW_SHOW (KW_DATABASES | KW_SCHEMAS) (
		KW_LIKE showStmtIdentifier
	)?
	| KW_SHOW KW_TABLES ((KW_FROM | KW_IN) db_name = identifier)? (
		KW_LIKE showStmtIdentifier
		| showStmtIdentifier
	)?
	| KW_SHOW KW_COLUMNS (KW_FROM | KW_IN) tabname = tableName (
		(KW_FROM | KW_IN) db_name = identifier
	)?
	| KW_SHOW KW_FUNCTIONS showStmtIdentifier?
	| KW_SHOW KW_PARTITIONS identifier partitionSpec?
	| KW_SHOW KW_CREATE KW_TABLE tabName = tableName
	| KW_SHOW KW_TABLE KW_EXTENDED (
		(KW_FROM | KW_IN) db_name = identifier
	)? KW_LIKE showStmtIdentifier partitionSpec?
	| KW_SHOW KW_TBLPROPERTIES tblName = identifier (
		LPAREN prptyName = StringLiteral RPAREN
	)?
	| KW_SHOW KW_LOCKS (parttype = partTypeExpr)? (
		isExtended = KW_EXTENDED
	)?
	| KW_SHOW (showOptions = KW_FORMATTED)? (
		KW_INDEX
		| KW_INDEXES
	) KW_ON showStmtIdentifier (
		(KW_FROM | KW_IN) db_name = identifier
	)?;

lockStatement:
	KW_LOCK KW_TABLE tableName partitionSpec? lockMode;

lockMode: KW_SHARED | KW_EXCLUSIVE;

unlockStatement: KW_UNLOCK KW_TABLE tableName partitionSpec?;

createRoleStatement: KW_CREATE KW_ROLE roleName = identifier;

dropRoleStatement: KW_DROP KW_ROLE roleName = identifier;

grantPrivileges:
	KW_GRANT privList = privilegeList privilegeObject? KW_TO principalSpecification (
		KW_WITH withOption
	)?;

revokePrivileges
	@afer {msgs.pop();}:
	KW_REVOKE privilegeList privilegeObject? KW_FROM principalSpecification;

grantRole:
	KW_GRANT KW_ROLE identifier (COMMA identifier)* KW_TO principalSpecification;

revokeRole:
	KW_REVOKE KW_ROLE identifier (COMMA identifier)* KW_FROM principalSpecification;

showRoleGrants: KW_SHOW KW_ROLE KW_GRANT principalName;

showGrants:
	KW_SHOW KW_GRANT principalName privilegeIncludeColObject?;

privilegeIncludeColObject:
	KW_ON (table = KW_TABLE | KW_DATABASE) identifier (
		LPAREN cols = columnNameList RPAREN
	)? partitionSpec?;

privilegeObject:
	KW_ON (table = KW_TABLE | KW_DATABASE) identifier partitionSpec?;

privilegeList: privlegeDef (COMMA privlegeDef)*;

privlegeDef:
	privilegeType (LPAREN cols = columnNameList RPAREN)?;

privilegeType:
	KW_ALL
	| KW_ALTER
	| KW_UPDATE
	| KW_CREATE
	| KW_DROP
	| KW_INDEX
	| KW_LOCK
	| KW_SELECT
	| KW_SHOW_DATABASE;

principalSpecification: principalName (COMMA principalName)*;

principalName:
	KW_USER identifier
	| KW_GROUP identifier
	| KW_ROLE identifier;

withOption: KW_GRANT KW_OPTION;

metastoreCheck:
	KW_MSCK (repair = KW_REPAIR)? (
		KW_TABLE table = identifier partitionSpec? (
			COMMA partitionSpec
		)*
	)?;

createFunctionStatement:
	KW_CREATE KW_TEMPORARY KW_FUNCTION identifier KW_AS StringLiteral;

dropFunctionStatement:
	KW_DROP KW_TEMPORARY KW_FUNCTION ifExists? identifier;

createMacroStatement:
	KW_CREATE KW_TEMPORARY KW_MACRO Identifier LPAREN columnNameTypeList? RPAREN expression;

dropMacroStatement:
	KW_DROP KW_TEMPORARY KW_MACRO ifExists? Identifier;

createViewStatement:
	KW_CREATE (orReplace)? KW_VIEW (ifNotExists)? name = tableName (
		LPAREN columnNameCommentList RPAREN
	)? tableComment? viewPartition? tablePropertiesPrefixed? KW_AS selectStatement;

viewPartition:
	KW_PARTITIONED KW_ON LPAREN columnNameList RPAREN;

dropViewStatement: KW_DROP KW_VIEW ifExists? viewName;

showStmtIdentifier: identifier | StringLiteral;

tableComment: KW_COMMENT comment = StringLiteral;

tablePartition:
	KW_PARTITIONED KW_BY LPAREN columnNameTypeList RPAREN;

tableBuckets:
	KW_CLUSTERED KW_BY LPAREN bucketCols = columnNameList RPAREN (
		KW_SORTED KW_BY LPAREN sortCols = columnNameOrderList RPAREN
	)? KW_INTO num = Number KW_BUCKETS;

tableSkewed:
	KW_SKEWED KW_BY LPAREN skewedCols = columnNameList RPAREN KW_ON LPAREN (
		skewedValues = skewedValueElement
	) RPAREN (storedAsDirs)?;

rowFormat: rowFormatSerde | rowFormatDelimited;

recordReader: KW_RECORDREADER StringLiteral;

recordWriter: KW_RECORDWRITER StringLiteral;

rowFormatSerde:
	KW_ROW KW_FORMAT KW_SERDE name = StringLiteral (
		KW_WITH KW_SERDEPROPERTIES serdeprops = tableProperties
	)?;

rowFormatDelimited:
	KW_ROW KW_FORMAT KW_DELIMITED tableRowFormatFieldIdentifier? tableRowFormatCollItemsIdentifier?
		tableRowFormatMapKeysIdentifier? tableRowFormatLinesIdentifier?;

tableRowFormat: rowFormatDelimited | rowFormatSerde;

tablePropertiesPrefixed: KW_TBLPROPERTIES tableProperties;

tableProperties: LPAREN tablePropertiesList RPAREN;

tablePropertiesList:
	keyValueProperty (COMMA keyValueProperty)*
	| keyProperty (COMMA keyProperty)*;

keyValueProperty:
	key = StringLiteral EQUAL value = StringLiteral;

keyProperty: key = StringLiteral;

tableRowFormatFieldIdentifier:
	KW_FIELDS KW_TERMINATED KW_BY fldIdnt = StringLiteral (
		KW_ESCAPED KW_BY fldEscape = StringLiteral
	)?;

tableRowFormatCollItemsIdentifier:
	KW_COLLECTION KW_ITEMS KW_TERMINATED KW_BY collIdnt = StringLiteral;

tableRowFormatMapKeysIdentifier:
	KW_MAP KW_KEYS KW_TERMINATED KW_BY mapKeysIdnt = StringLiteral;

tableRowFormatLinesIdentifier:
	KW_LINES KW_TERMINATED KW_BY linesIdnt = StringLiteral;

tableFileFormat:
	KW_STORED KW_AS KW_SEQUENCEFILE
	| KW_STORED KW_AS KW_TEXTFILE
	| KW_STORED KW_AS KW_RCFILE
	| KW_STORED KW_AS KW_ORCFILE
	| KW_STORED KW_AS KW_INPUTFORMAT inFmt = StringLiteral KW_OUTPUTFORMAT outFmt = StringLiteral (
		KW_INPUTDRIVER inDriver = StringLiteral KW_OUTPUTDRIVER outDriver = StringLiteral
	)?
	| KW_STORED KW_BY storageHandler = StringLiteral (
		KW_WITH KW_SERDEPROPERTIES serdeprops = tableProperties
	)?
	| KW_STORED KW_AS genericSpec = identifier;

tableLocation: KW_LOCATION locn = StringLiteral;

columnNameTypeList: columnNameType (COMMA columnNameType)*;

columnNameColonTypeList:
	columnNameColonType (COMMA columnNameColonType)*;

columnNameList: columnName (COMMA columnName)*;

columnName: identifier;

columnNameOrderList: columnNameOrder (COMMA columnNameOrder)*;

skewedValueElement:
	skewedColumnValues
	| skewedColumnValuePairList;

skewedColumnValuePairList:
	skewedColumnValuePair (COMMA skewedColumnValuePair)*;

skewedColumnValuePair:
	LPAREN colValues = skewedColumnValues RPAREN;

skewedColumnValues:
	skewedColumnValue (COMMA skewedColumnValue)*;

skewedColumnValue: constant;

skewedValueLocationElement:
	skewedColumnValue
	| skewedColumnValuePair;

columnNameOrder: identifier (asc = KW_ASC | desc = KW_DESC)?;

columnNameCommentList:
	columnNameComment (COMMA columnNameComment)*;

columnNameComment:
	colName = identifier (KW_COMMENT comment = StringLiteral)?;

columnRefOrder: expression (asc = KW_ASC | desc = KW_DESC)?;

columnNameType:
	colName = identifier colType (
		KW_COMMENT comment = StringLiteral
	)?;

columnNameColonType:
	colName = identifier COLON colType (
		KW_COMMENT comment = StringLiteral
	)?;

colType: type;

colTypeList: colType (COMMA colType)*;

type:
	primitiveType
	| listType
	| structType
	| mapType
	| unionType;

primitiveType:
	KW_TINYINT
	| KW_SMALLINT
	| KW_INT
	| KW_BIGINT
	| KW_BOOLEAN
	| KW_FLOAT
	| KW_DOUBLE
	| KW_DATE
	| KW_DATETIME
	| KW_TIMESTAMP
	| KW_STRING
	| KW_BINARY
	| KW_DECIMAL;

listType: KW_ARRAY LESSTHAN type GREATERTHAN;

structType:
	KW_STRUCT LESSTHAN columnNameColonTypeList GREATERTHAN;

mapType:
	KW_MAP LESSTHAN left = primitiveType COMMA right = type GREATERTHAN;

unionType: KW_UNIONTYPE LESSTHAN colTypeList GREATERTHAN;

queryOperator: KW_UNION KW_ALL;

// select statement select ... from ... where ... group by ... order by ...
queryStatementExpression:
	queryStatement (queryOperator queryStatement)*;

queryStatement: fromClause (b += body)+ | regular_body;

regular_body:
	insertClause selectClause fromClause whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause?
	| selectStatement;

selectStatement:
	selectClause fromClause whereClause? groupByClause? havingClause? orderByClause? clusterByClause
		? distributeByClause? sortByClause? window_clause? limitClause?;

body:
	insertClause selectClause lateralView? whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause?
	| selectClause lateralView? whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause?;

insertClause:
	KW_INSERT KW_OVERWRITE destination ifNotExists?
	| KW_INSERT KW_INTO KW_TABLE tableOrPartition;

destination:
	KW_LOCAL KW_DIRECTORY StringLiteral tableRowFormat? tableFileFormat?
	| KW_DIRECTORY StringLiteral
	| KW_TABLE tableOrPartition;

limitClause: KW_LIMIT num = Number;

