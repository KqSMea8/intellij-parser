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

alterStatementSuffixProtectMode:
	alterProtectMode -> (TOK_ALTERTABLE_ALTERPARTS_PROTECTMODE alterProtectMode);

alterStatementSuffixRenamePart:
	KW_RENAME KW_TO partitionSpec -> (TOK_ALTERTABLE_RENAMEPART partitionSpec);

alterStatementSuffixMergeFiles:
	KW_CONCATENATE -> (TOK_ALTERTABLE_ALTERPARTS_MERGEFILES);

alterProtectMode:
	KW_ENABLE alterProtectModeMode -> (TOK_ENABLE alterProtectModeMode)
	| KW_DISABLE alterProtectModeMode -> (TOK_DISABLE alterProtectModeMode);

alterProtectModeMode:
	KW_OFFLINE -> (TOK_OFFLINE)
	| KW_NO_DROP KW_CASCADE? -> (TOK_NO_DROP KW_CASCADE? )
	| KW_READONLY -> (TOK_READONLY);

alterStatementSuffixBucketNum:
	KW_INTO num = Number KW_BUCKETS -> (TOK_TABLEBUCKETS $num);

fileFormat:
	KW_SEQUENCEFILE -> (TOK_TBLSEQUENCEFILE)
	| KW_TEXTFILE -> (TOK_TBLTEXTFILE)
	| KW_RCFILE -> (TOK_TBLRCFILE)
	| KW_ORCFILE -> (TOK_TBLORCFILE)
	| KW_INPUTFORMAT inFmt = StringLiteral KW_OUTPUTFORMAT outFmt = StringLiteral ( KW_INPUTDRIVER
		inDriver = StringLiteral KW_OUTPUTDRIVER outDriver = StringLiteral)? -> (
		TOK_TABLEFILEFORMAT $inFmt $outFmt $inDriver? $outDriver? )
	| genericSpec = identifier -> (TOK_FILEFORMAT_GENERIC $genericSpec);

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

partTypeExpr:
	tabTypeExpr partitionSpec? -> (TOK_TABTYPE tabTypeExpr partitionSpec? );

descPartTypeExpr:
	descTabTypeExpr partitionSpec? -> (TOK_TABTYPE descTabTypeExpr partitionSpec? );

descStatement: (KW_DESCRIBE | KW_DESC) (
		descOptions = KW_FORMATTED
		| descOptions = KW_EXTENDED
		| descOptions = KW_PRETTY
	)? (parttype = descPartTypeExpr) -> (TOK_DESCTABLE $parttype $descOptions? )
	| (KW_DESCRIBE
	| KW_DESC) KW_FUNCTION KW_EXTENDED? (name = descFuncNames) -> (TOK_DESCFUNCTION $name
		KW_EXTENDED? )
	| (KW_DESCRIBE
	| KW_DESC) KW_DATABASE KW_EXTENDED? (dbName = identifier) -> (TOK_DESCDATABASE $dbName
		KW_EXTENDED? );

analyzeStatement:
	KW_ANALYZE KW_TABLE (parttype = tableOrPartition) KW_COMPUTE KW_STATISTICS (
		(noscan = KW_NOSCAN)
		| (partialscan = KW_PARTIALSCAN)
		| (KW_FOR KW_COLUMNS statsColumnName = columnNameList)
	)? -> (TOK_ANALYZE $parttype $noscan? $partialscan? $statsColumnName? );

showStatement:
	KW_SHOW (KW_DATABASES | KW_SCHEMAS) (
		KW_LIKE showStmtIdentifier
	)? -> (TOK_SHOWDATABASES showStmtIdentifier? )
	| KW_SHOW KW_TABLES ((KW_FROM
	| KW_IN) db_name = identifier)? (KW_LIKE showStmtIdentifier
	| showStmtIdentifier)? -> (TOK_SHOWTABLES (TOK_FROM $db_name)? showStmtIdentifier? )
	| KW_SHOW KW_COLUMNS (KW_FROM
	| KW_IN) tabname = tableName ((KW_FROM
	| KW_IN) db_name = identifier)? -> (TOK_SHOWCOLUMNS $db_name? $tabname)
	| KW_SHOW KW_FUNCTIONS showStmtIdentifier? -> (TOK_SHOWFUNCTIONS showStmtIdentifier? )
	| KW_SHOW KW_PARTITIONS identifier partitionSpec? -> (TOK_SHOWPARTITIONS identifier
		partitionSpec? )
	| KW_SHOW KW_CREATE KW_TABLE tabName = tableName -> (TOK_SHOW_CREATETABLE $tabName)
	| KW_SHOW KW_TABLE KW_EXTENDED ((KW_FROM
	| KW_IN) db_name = identifier)? KW_LIKE showStmtIdentifier partitionSpec? -> (
		TOK_SHOW_TABLESTATUS showStmtIdentifier $db_name? partitionSpec? )
	| KW_SHOW KW_TBLPROPERTIES tblName = identifier (LPAREN prptyName = StringLiteral RPAREN)? -> (
		TOK_SHOW_TBLPROPERTIES $tblName $prptyName? )
	| KW_SHOW KW_LOCKS (parttype = partTypeExpr)? (isExtended = KW_EXTENDED)? -> (TOK_SHOWLOCKS $
		parttype? $isExtended? )
	| KW_SHOW (showOptions = KW_FORMATTED)? (KW_INDEX
	| KW_INDEXES) KW_ON showStmtIdentifier ((KW_FROM
	| KW_IN) db_name = identifier)? -> (TOK_SHOWINDEXES showStmtIdentifier $showOptions? $ db_name?
		);

lockStatement:
	KW_LOCK KW_TABLE tableName partitionSpec? lockMode -> (TOK_LOCKTABLE tableName lockMode
		partitionSpec? );

lockMode: KW_SHARED | KW_EXCLUSIVE;

unlockStatement:
	KW_UNLOCK KW_TABLE tableName partitionSpec? -> (TOK_UNLOCKTABLE tableName partitionSpec? );

createRoleStatement:
	KW_CREATE KW_ROLE roleName = identifier -> (TOK_CREATEROLE $roleName);

dropRoleStatement:
	KW_DROP KW_ROLE roleName = identifier -> (TOK_DROPROLE $roleName);

grantPrivileges:
	KW_GRANT privList = privilegeList privilegeObject? KW_TO principalSpecification (
		KW_WITH withOption
	)? -> (TOK_GRANT $privList principalSpecification privilegeObject? withOption? );

revokePrivileges
	@afer {msgs.pop();}:
	KW_REVOKE privilegeList privilegeObject? KW_FROM principalSpecification -> (TOK_REVOKE
		privilegeList principalSpecification privilegeObject? );

grantRole:
	KW_GRANT KW_ROLE identifier (COMMA identifier)* KW_TO principalSpecification -> ( TOK_GRANT_ROLE
		principalSpecification identifier+ );

revokeRole:
	KW_REVOKE KW_ROLE identifier (COMMA identifier)* KW_FROM principalSpecification -> (
		TOK_REVOKE_ROLE principalSpecification identifier+ );

showRoleGrants:
	KW_SHOW KW_ROLE KW_GRANT principalName -> (TOK_SHOW_ROLE_GRANT principalName);

showGrants:
	KW_SHOW KW_GRANT principalName privilegeIncludeColObject? -> (TOK_SHOW_GRANT principalName
		privilegeIncludeColObject? );

privilegeIncludeColObject:
	KW_ON (table = KW_TABLE | KW_DATABASE) identifier (
		LPAREN cols = columnNameList RPAREN
	)? partitionSpec? -> (TOK_PRIV_OBJECT_COL identifier $table? $cols? partitionSpec? );

privilegeObject:
	KW_ON (table = KW_TABLE | KW_DATABASE) identifier partitionSpec? -> (TOK_PRIV_OBJECT identifier
		$table? partitionSpec? );

privilegeList:
	privlegeDef (COMMA privlegeDef)* -> (TOK_PRIVILEGE_LIST privlegeDef+ );

privlegeDef:
	privilegeType (LPAREN cols = columnNameList RPAREN)? -> (TOK_PRIVILEGE privilegeType $cols? );

privilegeType:
	KW_ALL -> (TOK_PRIV_ALL)
	| KW_ALTER -> (TOK_PRIV_ALTER_METADATA)
	| KW_UPDATE -> (TOK_PRIV_ALTER_DATA)
	| KW_CREATE -> (TOK_PRIV_CREATE)
	| KW_DROP -> (TOK_PRIV_DROP)
	| KW_INDEX -> (TOK_PRIV_INDEX)
	| KW_LOCK -> (TOK_PRIV_LOCK)
	| KW_SELECT -> (TOK_PRIV_SELECT)
	| KW_SHOW_DATABASE -> (TOK_PRIV_SHOW_DATABASE);

principalSpecification:
	principalName (COMMA principalName)* -> (TOK_PRINCIPAL_NAME principalName+ );

principalName:
	KW_USER identifier -> (TOK_USER identifier)
	| KW_GROUP identifier -> (TOK_GROUP identifier)
	| KW_ROLE identifier -> (TOK_ROLE identifier);

withOption: KW_GRANT KW_OPTION -> (TOK_GRANT_WITH_OPTION);

metastoreCheck:
	KW_MSCK (repair = KW_REPAIR)? (
		KW_TABLE table = identifier partitionSpec? (
			COMMA partitionSpec
		)*
	)? -> (TOK_MSCK $repair? ($table partitionSpec* )? );

createFunctionStatement:
	KW_CREATE KW_TEMPORARY KW_FUNCTION identifier KW_AS StringLiteral -> (TOK_CREATEFUNCTION
		identifier StringLiteral);

dropFunctionStatement:
	KW_DROP KW_TEMPORARY KW_FUNCTION ifExists? identifier -> (TOK_DROPFUNCTION identifier ifExists?
		);

createMacroStatement:
	KW_CREATE KW_TEMPORARY KW_MACRO Identifier LPAREN columnNameTypeList? RPAREN expression -> (
		TOK_CREATEMACRO Identifier columnNameTypeList? expression);

dropMacroStatement:
	KW_DROP KW_TEMPORARY KW_MACRO ifExists? Identifier -> (TOK_DROPMACRO Identifier ifExists? );

createViewStatement:
	KW_CREATE (orReplace)? KW_VIEW (ifNotExists)? name = tableName (
		LPAREN columnNameCommentList RPAREN
	)? tableComment? viewPartition? tablePropertiesPrefixed? KW_AS selectStatement -> (
		TOK_CREATEVIEW $name orReplace? ifNotExists? columnNameCommentList? tableComment?
		viewPartition? tablePropertiesPrefixed? selectStatement );

viewPartition:
	KW_PARTITIONED KW_ON LPAREN columnNameList RPAREN -> (TOK_VIEWPARTCOLS columnNameList);

dropViewStatement:
	KW_DROP KW_VIEW ifExists? viewName -> (TOK_DROPVIEW viewName ifExists? );

showStmtIdentifier: identifier | StringLiteral;

tableComment:
	KW_COMMENT comment = StringLiteral -> (TOK_TABLECOMMENT $comment);

tablePartition:
	KW_PARTITIONED KW_BY LPAREN columnNameTypeList RPAREN -> (TOK_TABLEPARTCOLS columnNameTypeList);

tableBuckets:
	KW_CLUSTERED KW_BY LPAREN bucketCols = columnNameList RPAREN (
		KW_SORTED KW_BY LPAREN sortCols = columnNameOrderList RPAREN
	)? KW_INTO num = Number KW_BUCKETS -> (TOK_TABLEBUCKETS $bucketCols $sortCols? $num);

tableSkewed:
	KW_SKEWED KW_BY LPAREN skewedCols = columnNameList RPAREN KW_ON LPAREN (
		skewedValues = skewedValueElement
	) RPAREN (storedAsDirs)? -> (TOK_TABLESKEWED $skewedCols $skewedValues storedAsDirs? );

rowFormat:
	rowFormatSerde -> (TOK_SERDE rowFormatSerde)
	| rowFormatDelimited -> (TOK_SERDE rowFormatDelimited)
	| -> (TOK_SERDE);

recordReader:
	KW_RECORDREADER StringLiteral -> (TOK_RECORDREADER StringLiteral)
	| -> (TOK_RECORDREADER);

recordWriter:
	KW_RECORDWRITER StringLiteral -> (TOK_RECORDWRITER StringLiteral)
	| -> (TOK_RECORDWRITER);

rowFormatSerde:
	KW_ROW KW_FORMAT KW_SERDE name = StringLiteral (
		KW_WITH KW_SERDEPROPERTIES serdeprops = tableProperties
	)? -> (TOK_SERDENAME $name $serdeprops? );

rowFormatDelimited:
	KW_ROW KW_FORMAT KW_DELIMITED tableRowFormatFieldIdentifier? tableRowFormatCollItemsIdentifier?
		tableRowFormatMapKeysIdentifier? tableRowFormatLinesIdentifier? -> (TOK_SERDEPROPS
		tableRowFormatFieldIdentifier? tableRowFormatCollItemsIdentifier?
		tableRowFormatMapKeysIdentifier? tableRowFormatLinesIdentifier? );

tableRowFormat:
	rowFormatDelimited -> (TOK_TABLEROWFORMAT rowFormatDelimited)
	| rowFormatSerde -> (TOK_TABLESERIALIZER rowFormatSerde);

tablePropertiesPrefixed: KW_TBLPROPERTIES tableProperties;

tableProperties:
	LPAREN tablePropertiesList RPAREN -> (TOK_TABLEPROPERTIES tablePropertiesList);

tablePropertiesList:
	keyValueProperty (COMMA keyValueProperty)* -> (TOK_TABLEPROPLIST keyValueProperty+ )
	| keyProperty (COMMA keyProperty)* -> (TOK_TABLEPROPLIST keyProperty+ );

keyValueProperty:
	key = StringLiteral EQUAL value = StringLiteral -> (TOK_TABLEPROPERTY $key $value);

keyProperty:
	key = StringLiteral -> (TOK_TABLEPROPERTY $key TOK_NULL);

tableRowFormatFieldIdentifier:
	KW_FIELDS KW_TERMINATED KW_BY fldIdnt = StringLiteral (
		KW_ESCAPED KW_BY fldEscape = StringLiteral
	)? -> (TOK_TABLEROWFORMATFIELD $fldIdnt $fldEscape? );

tableRowFormatCollItemsIdentifier:
	KW_COLLECTION KW_ITEMS KW_TERMINATED KW_BY collIdnt = StringLiteral -> (
		TOK_TABLEROWFORMATCOLLITEMS $collIdnt);

tableRowFormatMapKeysIdentifier:
	KW_MAP KW_KEYS KW_TERMINATED KW_BY mapKeysIdnt = StringLiteral -> (TOK_TABLEROWFORMATMAPKEYS $
		mapKeysIdnt);

tableRowFormatLinesIdentifier:
	KW_LINES KW_TERMINATED KW_BY linesIdnt = StringLiteral -> (TOK_TABLEROWFORMATLINES $ linesIdnt);

tableFileFormat:
	KW_STORED KW_AS KW_SEQUENCEFILE -> TOK_TBLSEQUENCEFILE
	| KW_STORED KW_AS KW_TEXTFILE -> TOK_TBLTEXTFILE
	| KW_STORED KW_AS KW_RCFILE -> TOK_TBLRCFILE
	| KW_STORED KW_AS KW_ORCFILE -> TOK_TBLORCFILE
	| KW_STORED KW_AS KW_INPUTFORMAT inFmt = StringLiteral KW_OUTPUTFORMAT outFmt = StringLiteral (
		KW_INPUTDRIVER inDriver = StringLiteral KW_OUTPUTDRIVER outDriver = StringLiteral)? -> (
		TOK_TABLEFILEFORMAT $inFmt $outFmt $inDriver? $outDriver? )
	| KW_STORED KW_BY storageHandler = StringLiteral (KW_WITH KW_SERDEPROPERTIES serdeprops =
		tableProperties)? -> (TOK_STORAGEHANDLER $storageHandler $serdeprops? )
	| KW_STORED KW_AS genericSpec = identifier -> (TOK_FILEFORMAT_GENERIC $genericSpec);

tableLocation:
	KW_LOCATION locn = StringLiteral -> (TOK_TABLELOCATION $locn);

columnNameTypeList:
	columnNameType (COMMA columnNameType)* -> (TOK_TABCOLLIST columnNameType+ );

columnNameColonTypeList:
	columnNameColonType (COMMA columnNameColonType)* -> (TOK_TABCOLLIST columnNameColonType+ );

columnNameList:
	columnName (COMMA columnName)* -> (TOK_TABCOLNAME columnName+ );

columnName: identifier;

columnNameOrderList:
	columnNameOrder (COMMA columnNameOrder)* -> (TOK_TABCOLNAME columnNameOrder+ );

skewedValueElement:
	skewedColumnValues
	| skewedColumnValuePairList;

skewedColumnValuePairList:
	skewedColumnValuePair (COMMA skewedColumnValuePair)* -> (TOK_TABCOLVALUE_PAIR
		skewedColumnValuePair+ );

skewedColumnValuePair:
	LPAREN colValues = skewedColumnValues RPAREN -> (TOK_TABCOLVALUES $colValues);

skewedColumnValues:
	skewedColumnValue (COMMA skewedColumnValue)* -> (TOK_TABCOLVALUE skewedColumnValue+ );

skewedColumnValue: constant;

skewedValueLocationElement:
	skewedColumnValue
	| skewedColumnValuePair;

columnNameOrder:
	identifier (asc = KW_ASC | desc = KW_DESC)? -> {$desc == null}? (TOK_TABSORTCOLNAMEASC
		identifier) -> (TOK_TABSORTCOLNAMEDESC identifier);

columnNameCommentList:
	columnNameComment (COMMA columnNameComment)* -> (TOK_TABCOLNAME columnNameComment+ );

columnNameComment:
	colName = identifier (KW_COMMENT comment = StringLiteral)? -> (TOK_TABCOL $colName TOK_NULL $
		comment? );

columnRefOrder:
	expression (asc = KW_ASC | desc = KW_DESC)? -> {$desc == null}? (TOK_TABSORTCOLNAMEASC
		expression) -> (TOK_TABSORTCOLNAMEDESC expression);

columnNameType:
	colName = identifier colType (
		KW_COMMENT comment = StringLiteral
	)? -> {$comment == null}? (TOK_TABCOL $colName colType) -> (TOK_TABCOL $colName colType $
		comment);

columnNameColonType:
	colName = identifier COLON colType (
		KW_COMMENT comment = StringLiteral
	)? -> {$comment == null}? (TOK_TABCOL $colName colType) -> (TOK_TABCOL $colName colType $
		comment);

colType: type;

colTypeList:
	colType (COMMA colType)* -> (TOK_COLTYPELIST colType+ );

type:
	primitiveType
	| listType
	| structType
	| mapType
	| unionType;

primitiveType:
	KW_TINYINT -> TOK_TINYINT
	| KW_SMALLINT -> TOK_SMALLINT
	| KW_INT -> TOK_INT
	| KW_BIGINT -> TOK_BIGINT
	| KW_BOOLEAN -> TOK_BOOLEAN
	| KW_FLOAT -> TOK_FLOAT
	| KW_DOUBLE -> TOK_DOUBLE
	| KW_DATE -> TOK_DATE
	| KW_DATETIME -> TOK_DATETIME
	| KW_TIMESTAMP -> TOK_TIMESTAMP
	| KW_STRING -> TOK_STRING
	| KW_BINARY -> TOK_BINARY
	| KW_DECIMAL -> TOK_DECIMAL;

listType: KW_ARRAY LESSTHAN type GREATERTHAN -> (TOK_LIST type);

structType:
	KW_STRUCT LESSTHAN columnNameColonTypeList GREATERTHAN -> (TOK_STRUCT columnNameColonTypeList);

mapType:
	KW_MAP LESSTHAN left = primitiveType COMMA right = type GREATERTHAN -> (TOK_MAP $left $right );

unionType:
	KW_UNIONTYPE LESSTHAN colTypeList GREATERTHAN -> (TOK_UNIONTYPE colTypeList);

queryOperator: KW_UNION KW_ALL -> (TOK_UNION);

// select statement select ... from ... where ... group by ... order by ...
queryStatementExpression:
	queryStatement (queryOperator queryStatement)*;

queryStatement:
	fromClause (b += body)+ -> (TOK_QUERY fromClause body+ )
	| regular_body;

regular_body:
	insertClause selectClause fromClause whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause? -> (
		TOK_QUERY fromClause (TOK_INSERT insertClause selectClause whereClause? groupByClause?
		havingClause? orderByClause? clusterByClause? distributeByClause? sortByClause?
		window_clause? limitClause? ))
	| selectStatement;

selectStatement:
	selectClause fromClause whereClause? groupByClause? havingClause? orderByClause? clusterByClause
		? distributeByClause? sortByClause? window_clause? limitClause? -> ( TOK_QUERY fromClause (
		TOK_INSERT (TOK_DESTINATION (TOK_DIR TOK_TMP_FILE)) selectClause whereClause? groupByClause?
		havingClause? orderByClause? clusterByClause? distributeByClause? sortByClause?
		window_clause? limitClause? ));

body:
	insertClause selectClause lateralView? whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause? -> (
		TOK_INSERT insertClause selectClause lateralView? whereClause? groupByClause? havingClause?
		orderByClause? clusterByClause? distributeByClause? sortByClause? window_clause? limitClause
		? )
	| selectClause lateralView? whereClause? groupByClause? havingClause? orderByClause?
		clusterByClause? distributeByClause? sortByClause? window_clause? limitClause? -> (
		TOK_INSERT (TOK_DESTINATION (TOK_DIR TOK_TMP_FILE)) selectClause lateralView? whereClause?
		groupByClause? havingClause? orderByClause? clusterByClause? distributeByClause?
		sortByClause? window_clause? limitClause? );

insertClause:
	KW_INSERT KW_OVERWRITE destination ifNotExists? -> (TOK_DESTINATION destination ifNotExists? )
	| KW_INSERT KW_INTO KW_TABLE tableOrPartition -> (TOK_INSERT_INTO tableOrPartition);

destination:
	KW_LOCAL KW_DIRECTORY StringLiteral tableRowFormat? tableFileFormat? -> (TOK_LOCAL_DIR
		StringLiteral tableRowFormat? tableFileFormat? )
	| KW_DIRECTORY StringLiteral -> (TOK_DIR StringLiteral)
	| KW_TABLE tableOrPartition -> tableOrPartition;

limitClause: KW_LIMIT num = Number -> (TOK_LIMIT $num);

