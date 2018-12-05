root: explainStatement | execStatement;

explainStatement:
	KWEXPLAIN (
		explainOptions = KWEXTENDED
		| explainOptions = KWFORMATTED
		| explainOptions = KWDEPENDENCY
		| explainOptions = KWLOGICAL
	)? execStatement;

execStatement:
	queryStatementExpression
	| loadStatement
	| exportStatement
	| importStatement
	| ddlStatement;

loadStatement:
	KWLOAD KWDATA (islocal = KWLOCAL)? KWINPATH (
		path = StringLiteral
	) (isoverwrite = KWOVERWRITE)? KWINTO KWTABLE (
		tab = tableOrPartition
	);

exportStatement:
	KWEXPORT KWTABLE (tab = tableOrPartition) KWTO (
		path = StringLiteral
	);

importStatement:
	KWIMPORT (
		(ext = KWEXTERNAL)? KWTABLE (tab = tableOrPartition)
	)? KWFROM (path = StringLiteral) tableLocation?;

ddlStatement:
	createDatabaseStatement
	| switchDatabaseStatement
	| selectStatement
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

ifExists: KWIF KWEXISTS;

restrictOrCascade: KWRESTRICT | KWCASCADE;

ifNotExists: KWIF KWNOT KWEXISTS;

storedAsDirs: KWSTORED KWAS KWDIRECTORIES;

orReplace: KWOR KWREPLACE;

ignoreProtection: KWIGNORE KWPROTECTION;

createDatabaseStatement:
	KWCREATE (KWDATABASE | KWSCHEMA) ifNotExists? name = identifier databaseComment? dbLocation? (
		KWWITH KWDBPROPERTIES dbprops = dbProperties
	)?;

dbLocation: KWLOCATION locn = StringLiteral;

dbProperties: LPAREN dbPropertiesList RPAREN;

dbPropertiesList: keyValueProperty (COMMA keyValueProperty)*;

switchDatabaseStatement: KWUSE identifier;

dropDatabaseStatement:
	KWDROP (KWDATABASE | KWSCHEMA) ifExists? identifier restrictOrCascade?;

databaseComment: KWCOMMENT comment = StringLiteral;

createTableStatement:
	KWCREATE (ext = KWEXTERNAL)? KWTABLE ifNotExists? name = tableName (
		like = KWLIKE likeName = tableName tableLocation? tablePropertiesPrefixed?
		| (LPAREN columnNameTypeList RPAREN)? tableComment? tablePartition? tableBuckets?
			tableSkewed? tableRowFormat? tableFileFormat? tableLocation? tablePropertiesPrefixed? (
			KWAS selectStatement
		)?
	);

truncateTableStatement:
	KWTRUNCATE KWTABLE tablePartitionPrefix (
		KWCOLUMNS LPAREN columnNameList RPAREN
	)?;

createIndexStatement:
	KWCREATE KWINDEX indexName = identifier KWON KWTABLE tab = tableName LPAREN indexedCols =
		columnNameList RPAREN KWAS typeName = StringLiteral autoRebuild? indexPropertiesPrefixed?
		indexTblName? tableRowFormat? tableFileFormat? tableLocation? tablePropertiesPrefixed?
		indexComment?;

indexComment: KWCOMMENT comment = StringLiteral;

autoRebuild: KWWITH KWDEFERRED KWREBUILD;

indexTblName: KWIN KWTABLE indexTbl = tableName;

indexPropertiesPrefixed: KWIDXPROPERTIES indexProperties;

indexProperties: LPAREN indexPropertiesList RPAREN;

indexPropertiesList: keyValueProperty (COMMA keyValueProperty)*;

dropIndexStatement:
	KWDROP KWINDEX ifExists? indexName = identifier KWON tab = tableName;

dropTableStatement: KWDROP KWTABLE ifExists? tableName;

alterStatement:
	KWALTER (
		KWTABLE alterTableStatementSuffix
		| KWVIEW alterViewStatementSuffix
		| KWINDEX alterIndexStatementSuffix
		| KWDATABASE alterDatabaseStatementSuffix
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
	| name = tableName KWAS selectStatement;

alterIndexStatementSuffix:
	indexName = identifier (KWON tableNameId = identifier) partitionSpec? (
		KWREBUILD
		| KWSET KWIDXPROPERTIES indexProperties
	);

alterDatabaseStatementSuffix: alterDatabaseSuffixProperties;

alterDatabaseSuffixProperties:
	name = identifier KWSET KWDBPROPERTIES dbProperties;

alterStatementSuffixRename:
	oldName = identifier KWRENAME KWTO newName = identifier;

alterStatementSuffixAddCol:
	identifier (add = KWADD | replace = KWREPLACE) KWCOLUMNS LPAREN columnNameTypeList RPAREN;

alterStatementSuffixRenameCol:
	identifier KWCHANGE KWCOLUMN? oldName = identifier newName = identifier colType (
		KWCOMMENT comment = StringLiteral
	)? alterStatementChangeColPosition?;

alterStatementChangeColPosition:
	first = KWFIRST
	| KWAFTER afterCol = identifier;

alterStatementSuffixAddPartitions:
	identifier KWADD ifNotExists? partitionSpec partitionLocation? (
		partitionSpec partitionLocation?
	)*;

alterStatementSuffixTouch: identifier KWTOUCH (partitionSpec)*;

alterStatementSuffixArchive:
	identifier KWARCHIVE (partitionSpec)*;

alterStatementSuffixUnArchive:
	identifier KWUNARCHIVE (partitionSpec)*;

partitionLocation: KWLOCATION locn = StringLiteral;

alterStatementSuffixDropPartitions:
	identifier KWDROP ifExists? dropPartitionSpec (
		COMMA dropPartitionSpec
	)* ignoreProtection?;

alterStatementSuffixProperties:
	name = identifier KWSET KWTBLPROPERTIES tableProperties
	| name = identifier KWUNSET KWTBLPROPERTIES ifExists? tableProperties;

alterViewSuffixProperties:
	name = identifier KWSET KWTBLPROPERTIES tableProperties
	| name = identifier KWUNSET KWTBLPROPERTIES ifExists? tableProperties;

alterStatementSuffixSerdeProperties:
	KWSET KWSERDE serdeName = StringLiteral (
		KWWITH KWSERDEPROPERTIES tableProperties
	)?
	| KWSET KWSERDEPROPERTIES tableProperties;

tablePartitionPrefix: name = identifier partitionSpec?;

alterTblPartitionStatement:
	tablePartitionPrefix alterTblPartitionStatementSuffix
	| Identifier KWPARTITION KWCOLUMN LPAREN columnNameType RPAREN;

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

alterStatementSuffixFileFormat: KWSET KWFILEFORMAT fileFormat;

alterStatementSuffixClusterbySortby:
	KWNOT KWCLUSTERED
	| KWNOT KWSORTED
	| tableBuckets;

alterTblPartitionStatementSuffixSkewedLocation:
	KWSET KWSKEWED KWLOCATION skewedLocations;

skewedLocations: LPAREN skewedLocationsList RPAREN;

skewedLocationsList:
	skewedLocationMap (COMMA skewedLocationMap)*;

skewedLocationMap:
	key = skewedValueLocationElement EQUAL value = StringLiteral;

alterStatementSuffixLocation:
	KWSET KWLOCATION newLoc = StringLiteral;

alterStatementSuffixSkewedby:
	name = identifier tableSkewed
	| name = identifier KWNOT KWSKEWED
	| name = identifier KWNOT storedAsDirs;

alterStatementSuffixExchangePartition:
	name = tableName KWEXCHANGE partitionSpec KWWITH KWTABLE exchangename = tableName;

alterStatementSuffixProtectMode: alterProtectMode;

alterStatementSuffixRenamePart: KWRENAME KWTO partitionSpec;

alterStatementSuffixMergeFiles: KWCONCATENATE;

alterProtectMode:
	KWENABLE alterProtectModeMode
	| KWDISABLE alterProtectModeMode;

alterProtectModeMode:
	KWOFFLINE
	| KWNO_DROP KWCASCADE?
	| KWREADONLY;

alterStatementSuffixBucketNum: KWINTO num = Number KWBUCKETS;

fileFormat:
	KWSEQUENCEFILE
	| KWTEXTFILE
	| KWRCFILE
	| KWORCFILE
	| KWINPUTFORMAT inFmt = StringLiteral KWOUTPUTFORMAT outFmt = StringLiteral (
		KWINPUTDRIVER inDriver = StringLiteral KWOUTPUTDRIVER outDriver = StringLiteral
	)?
	| genericSpec = identifier;

tabTypeExpr:
	identifier (
		DOT (
			KWELEM_TYPE
			| KWKEY_TYPE
			| KWVALUE_TYPE
			| identifier
		)
	)*;

descTabTypeExpr:
	identifier (
		DOT (
			KWELEM_TYPE
			| KWKEY_TYPE
			| KWVALUE_TYPE
			| identifier
		)
	)* identifier?;

partTypeExpr: tabTypeExpr partitionSpec?;

descPartTypeExpr: descTabTypeExpr partitionSpec?;

descStatement: (KWDESCRIBE | KWDESC) (
		descOptions = KWFORMATTED
		| descOptions = KWEXTENDED
		| descOptions = KWPRETTY
	)? (parttype = descPartTypeExpr)
	| (KWDESCRIBE | KWDESC) KWFUNCTION KWEXTENDED? (
		name = descFuncNames
	)
	| (KWDESCRIBE | KWDESC) KWDATABASE KWEXTENDED? (
		dbName = identifier
	);

analyzeStatement:
	KWANALYZE KWTABLE (parttype = tableOrPartition) KWCOMPUTE KWSTATISTICS (
		(noscan = KWNOSCAN)
		| (partialscan = KWPARTIALSCAN)
		| (KWFOR KWCOLUMNS statsColumnName = columnNameList)
	)?;

showStatement:
	KWSHOW (KWDATABASES | KWSCHEMAS) (KWLIKE showStmtIdentifier)?
	| KWSHOW KWTABLES ((KWFROM | KWIN) db_name = identifier)? (
		KWLIKE showStmtIdentifier
		| showStmtIdentifier
	)?
	| KWSHOW KWCOLUMNS (KWFROM | KWIN) tabname = tableName (
		(KWFROM | KWIN) db_name = identifier
	)?
	| KWSHOW KWFUNCTIONS showStmtIdentifier?
	| KWSHOW KWPARTITIONS identifier partitionSpec?
	| KWSHOW KWCREATE KWTABLE tabName = tableName
	| KWSHOW KWTABLE KWEXTENDED (
		(KWFROM | KWIN) db_name = identifier
	)? KWLIKE showStmtIdentifier partitionSpec?
	| KWSHOW KWTBLPROPERTIES tblName = identifier (
		LPAREN prptyName = StringLiteral RPAREN
	)?
	| KWSHOW KWLOCKS (parttype = partTypeExpr)? (
		isExtended = KWEXTENDED
	)?
	| KWSHOW (showOptions = KWFORMATTED)? (KWINDEX | KWINDEXES) KWON showStmtIdentifier (
		(KWFROM | KWIN) db_name = identifier
	)?;

lockStatement: KWLOCK KWTABLE tableName partitionSpec? lockMode;

lockMode: KWSHARED | KWEXCLUSIVE;

unlockStatement: KWUNLOCK KWTABLE tableName partitionSpec?;

createRoleStatement: KWCREATE KWROLE roleName = identifier;

dropRoleStatement: KWDROP KWROLE roleName = identifier;

grantPrivileges:
	KWGRANT privList = privilegeList privilegeObject? KWTO principalSpecification (
		KWWITH withOption
	)?;

revokePrivileges:
	KWREVOKE privilegeList privilegeObject? KWFROM principalSpecification;

grantRole:
	KWGRANT KWROLE identifier (COMMA identifier)* KWTO principalSpecification;

revokeRole:
	KWREVOKE KWROLE identifier (COMMA identifier)* KWFROM principalSpecification;

showRoleGrants: KWSHOW KWROLE KWGRANT principalName;

showGrants:
	KWSHOW KWGRANT principalName privilegeIncludeColObject?;

privilegeIncludeColObject:
	KWON (table = KWTABLE | KWDATABASE) identifier (
		LPAREN cols = columnNameList RPAREN
	)? partitionSpec?;

privilegeObject:
	KWON (table = KWTABLE | KWDATABASE) identifier partitionSpec?;

privilegeList: privlegeDef (COMMA privlegeDef)*;

privlegeDef:
	privilegeType (LPAREN cols = columnNameList RPAREN)?;

privilegeType:
	KWALL
	| KWALTER
	| KWUPDATE
	| KWCREATE
	| KWDROP
	| KWINDEX
	| KWLOCK
	| KWSELECT
	| KWSHOW_DATABASE;

principalSpecification: principalName (COMMA principalName)*;

principalName:
	KWUSER identifier
	| KWGROUP identifier
	| KWROLE identifier;

withOption: KWGRANT KWOPTION;

metastoreCheck:
	KWMSCK (repair = KWREPAIR)? (
		KWTABLE table = identifier partitionSpec? (
			COMMA partitionSpec
		)*
	)?;

createFunctionStatement:
	KWCREATE KWTEMPORARY KWFUNCTION identifier KWAS StringLiteral;

dropFunctionStatement:
	KWDROP KWTEMPORARY KWFUNCTION ifExists? identifier;

createMacroStatement:
	KWCREATE KWTEMPORARY KWMACRO Identifier LPAREN columnNameTypeList? RPAREN expression;

dropMacroStatement:
	KWDROP KWTEMPORARY KWMACRO ifExists? Identifier;

createViewStatement:
	KWCREATE (orReplace)? KWVIEW (ifNotExists)? name = tableName (
		LPAREN columnNameCommentList RPAREN
	)? tableComment? viewPartition? tablePropertiesPrefixed? KWAS selectStatement;

viewPartition: KWPARTITIONED KWON LPAREN columnNameList RPAREN;

dropViewStatement: KWDROP KWVIEW ifExists? viewName;

showStmtIdentifier: identifier | StringLiteral;

tableComment: KWCOMMENT comment = StringLiteral;

tablePartition:
	KWPARTITIONED KWBY LPAREN columnNameTypeList RPAREN;

tableBuckets:
	KWCLUSTERED KWBY LPAREN bucketCols = columnNameList RPAREN (
		KWSORTED KWBY LPAREN sortCols = columnNameOrderList RPAREN
	)? KWINTO num = Number KWBUCKETS;

tableSkewed:
	KWSKEWED KWBY LPAREN skewedCols = columnNameList RPAREN KWON LPAREN (
		skewedValues = skewedValueElement
	) RPAREN (storedAsDirs)?;

rowFormat: rowFormatSerde | rowFormatDelimited;

recordReader: KWRECORDREADER StringLiteral;

recordWriter: KWRECORDWRITER StringLiteral;

rowFormatSerde:
	KWROW KWFORMAT KWSERDE name = StringLiteral (
		KWWITH KWSERDEPROPERTIES serdeprops = tableProperties
	)?;

rowFormatDelimited:
	KWROW KWFORMAT KWDELIMITED tableRowFormatFieldIdentifier? tableRowFormatCollItemsIdentifier?
		tableRowFormatMapKeysIdentifier? tableRowFormatLinesIdentifier?;

tableRowFormat: rowFormatDelimited | rowFormatSerde;

tablePropertiesPrefixed: KWTBLPROPERTIES tableProperties;

tableProperties: LPAREN tablePropertiesList RPAREN;

tablePropertiesList:
	keyValueProperty (COMMA keyValueProperty)*
	| keyProperty (COMMA keyProperty)*;

keyValueProperty:
	key = StringLiteral EQUAL value = StringLiteral;

keyProperty: key = StringLiteral;

tableRowFormatFieldIdentifier:
	KWFIELDS KWTERMINATED KWBY fldIdnt = StringLiteral (
		KWESCAPED KWBY fldEscape = StringLiteral
	)?;

tableRowFormatCollItemsIdentifier:
	KWCOLLECTION KWITEMS KWTERMINATED KWBY collIdnt = StringLiteral;

tableRowFormatMapKeysIdentifier:
	KWMAP KWKEYS KWTERMINATED KWBY mapKeysIdnt = StringLiteral;

tableRowFormatLinesIdentifier:
	KWLINES KWTERMINATED KWBY linesIdnt = StringLiteral;

tableFileFormat:
	KWSTORED KWAS KWSEQUENCEFILE
	| KWSTORED KWAS KWTEXTFILE
	| KWSTORED KWAS KWRCFILE
	| KWSTORED KWAS KWORCFILE
	| KWSTORED KWAS KWINPUTFORMAT inFmt = StringLiteral KWOUTPUTFORMAT outFmt = StringLiteral (
		KWINPUTDRIVER inDriver = StringLiteral KWOUTPUTDRIVER outDriver = StringLiteral
	)?
	| KWSTORED KWBY storageHandler = StringLiteral (
		KWWITH KWSERDEPROPERTIES serdeprops = tableProperties
	)?
	| KWSTORED KWAS genericSpec = identifier;

tableLocation: KWLOCATION locn = StringLiteral;

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

columnNameOrder: identifier (asc = KWASC | desc = KWDESC)?;

columnNameCommentList:
	columnNameComment (COMMA columnNameComment)*;

columnNameComment:
	colName = identifier (KWCOMMENT comment = StringLiteral)?;

columnRefOrder: expression (asc = KWASC | desc = KWDESC)?;

columnNameType:
	colName = identifier colType (
		KWCOMMENT comment = StringLiteral
	)?;

columnNameColonType:
	colName = identifier COLON colType (
		KWCOMMENT comment = StringLiteral
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
	KWTINYINT
	| KWSMALLINT
	| KWINT
	| KWBIGINT
	| KWBOOLEAN
	| KWFLOAT
	| KWDOUBLE
	| KWDATE
	| KWDATETIME
	| KWTIMESTAMP
	| KWSTRING
	| KWBINARY
	| KWDECIMAL;

listType: KWARRAY LESSTHAN type GREATERTHAN;

structType:
	KWSTRUCT LESSTHAN columnNameColonTypeList GREATERTHAN;

mapType:
	KWMAP LESSTHAN left = primitiveType COMMA right = type GREATERTHAN;

unionType: KWUNIONTYPE LESSTHAN colTypeList GREATERTHAN;

queryOperator: KWUNION KWALL;

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
	KWINSERT KWOVERWRITE destination ifNotExists?
	| KWINSERT KWINTO KWTABLE tableOrPartition;

destination:
	KWLOCAL KWDIRECTORY StringLiteral tableRowFormat? tableFileFormat?
	| KWDIRECTORY StringLiteral
	| KWTABLE tableOrPartition;

limitClause: KWLIMIT num = Number;

selectClause:
	KWSELECT hintClause? (
		((KWALL | dist = KWDISTINCT)? selectList)
		| (transform = KWTRANSFORM selectTrfmClause)
	)
	| trfmClause;

selectList: selectItem ( COMMA selectItem)*;

selectTrfmClause:
	LPAREN selectExpressionList RPAREN inSerde = rowFormat inRec = recordWriter KWUSING
		StringLiteral (
		KWAS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

hintClause: DIVIDE STAR PLUS hintList STAR DIVIDE;

hintList: hintItem (COMMA hintItem)*;

hintItem: hintName (LPAREN hintArgs RPAREN)?;

hintName: KWMAPJOIN | KWSTREAMTABLE | KWHOLD_DDLTIME;

hintArgs: hintArgName (COMMA hintArgName)*;

hintArgName: identifier;

selectItem:
	(
		selectExpression (
			(KWAS? identifier)
			| (KWAS LPAREN identifier (COMMA identifier)* RPAREN)
		)?
	);

trfmClause:
	(KWMAP selectExpressionList | KWREDUCE selectExpressionList) inSerde = rowFormat inRec =
		recordWriter KWUSING StringLiteral (
		KWAS (
			(LPAREN (aliasList | columnNameTypeList) RPAREN)
			| (aliasList | columnNameTypeList)
		)
	)? outSerde = rowFormat outRec = recordReader;

selectExpression: expression | tableAllColumns;

selectExpressionList:
	selectExpression (COMMA selectExpression)*;

//---------------------- Rules for windowing clauses -------------------------------
window_clause: KWWINDOW window_defn (COMMA window_defn)*;

window_defn: Identifier KWAS window_specification;

window_specification:
	(
		Identifier
		| (
			LPAREN Identifier? partitioningSpec? window_frame? RPAREN
		)
	);

window_frame: window_range_expression | window_value_expression;

window_range_expression:
	KWROWS sb = window_frame_start_boundary
	| KWROWS KWBETWEEN s = window_frame_boundary KWAND end = window_frame_boundary;

window_value_expression:
	KWRANGE sb = window_frame_start_boundary
	| KWRANGE KWBETWEEN s = window_frame_boundary KWAND end = window_frame_boundary;

window_frame_start_boundary:
	KWUNBOUNDED KWPRECEDING
	| KWCURRENT KWROW
	| Number KWPRECEDING;

window_frame_boundary:
	KWUNBOUNDED (r = KWPRECEDING | r = KWFOLLOWING)
	| KWCURRENT KWROW
	| Number (d = KWPRECEDING | d = KWFOLLOWING);

tableAllColumns: STAR | tableName DOT STAR;

tableOrColumn: identifier;

expressionList: expression (COMMA expression)*;

aliasList: identifier (COMMA identifier)*;

fromClause: KWFROM joinSource;

joinSource:
	fromSource (joinToken fromSource (KWON expression)?)*
	| uniqueJoinToken uniqueJoinSource (COMMA uniqueJoinSource)+;

uniqueJoinSource: KWPRESERVE? fromSource uniqueJoinExpr;

uniqueJoinExpr:
	LPAREN e1 += expression (COMMA e1 += expression)* RPAREN;

uniqueJoinToken: KWUNIQUEJOIN;

joinToken:
	(KWINNER | KWCROSS)? JOIN
	| (KWLEFT | KWFULL | KWRIGHT) (KWOUTER)? JOIN
	| KWLEFT KWSEMI JOIN;

lateralView:
	KWLATERAL KWVIEW KWOUTER function tableAlias (
		KWAS identifier (COMMA identifier)*
	)?
	| KWLATERAL KWVIEW function tableAlias (
		KWAS identifier (COMMA identifier)*
	)?;

tableAlias: identifier;

fromSource: (tableSource | subQuerySource) ( lateralView)*;

tableBucketSample:
	KWTABLESAMPLE LPAREN KWBUCKET (numerator = Number) KWOUT KWOF (
		denominator = Number
	) (KWON expr += expression (COMMA expr += expression)*)? RPAREN;

splitSample:
	KWTABLESAMPLE LPAREN (numerator = Number) (
		percent = KWPERCENT
		| KWROWS
	) RPAREN
	| KWTABLESAMPLE LPAREN (numerator = ByteLengthLiteral) RPAREN;

tableSample: tableBucketSample | splitSample;

tableSource:
	tabname = tableName (props = tableProperties)? (
		ts = tableSample
	)? (KWAS? alias = Identifier)?;

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

whereClause: KWWHERE searchCondition;

searchCondition: expression;

groupByClause:
	KWGROUP KWBY groupByExpression (COMMA groupByExpression)* (
		(rollup = KWWITH KWROLLUP)
		| (cube = KWWITH KWCUBE)
	)? (
		sets = KWGROUPING KWSETS LPAREN groupingSetExpression (
			COMMA groupingSetExpression
		)* RPAREN
	)?;

groupingSetExpression:
	groupByExpression
	| LPAREN groupByExpression (COMMA groupByExpression)* RPAREN
	| LPAREN RPAREN;

groupByExpression: expression;

havingClause: KWHAVING havingCondition;

havingCondition: expression;

orderByClause:
	KWORDER KWBY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KWORDER KWBY columnRefOrder (COMMA columnRefOrder)*;

clusterByClause:
	KWCLUSTER KWBY LPAREN expression (COMMA expression)* RPAREN
	| KWCLUSTER KWBY expression;

partitionByClause:
	KWPARTITION KWBY LPAREN expression (COMMA expression)* RPAREN
	| KWPARTITION KWBY expression;

distributeByClause:
	KWDISTRIBUTE KWBY LPAREN expression (COMMA expression)* RPAREN
	| KWDISTRIBUTE KWBY expression;

sortByClause:
	KWSORT KWBY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KWSORT KWBY columnRefOrder;

function:
	functionName LPAREN (
		(star = STAR)
		| (dist = KWDISTINCT)? (
			selectExpression (COMMA selectExpression)*
		)?
	) RPAREN (KWOVER ws = window_specification)?;

functionName:
	KWIF
	| KWARRAY
	| KWMAP
	| KWSTRUCT
	| KWUNIONTYPE
	| identifier;

castExpression:
	KWCAST LPAREN expression KWAS primitiveType RPAREN;

caseExpression:
	KWCASE expression (KWWHEN expression KWTHEN expression)+ (
		KWELSE expression
	)? KWEND;

whenExpression:
	KWCASE (KWWHEN expression KWTHEN expression)+ (
		KWELSE expression
	)? KWEND;

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

dateLiteral: KWDATE StringLiteral;

expression: precedenceOrExpression;

atomExpression:
	KWNULL
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

nullCondition: KWNULL | KWNOT KWNULL;

precedenceUnaryPrefixExpression:
	(precedenceUnaryOperator)* precedenceFieldExpression;

precedenceUnarySuffixExpression:
	precedenceUnaryPrefixExpression (a = KWIS nullCondition)?;

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

precedenceEqualNegatableOperator: KWLIKE | KWRLIKE | KWREGEXP;

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
			KWNOT precedenceEqualNegatableOperator notExpr = precedenceBitwiseOrExpression
		)
		| (
			precedenceEqualOperator equalExpr = precedenceBitwiseOrExpression
		)
		| (KWNOT KWIN expressions)
		| (KWIN expressions)
		| (
			KWNOT KWBETWEEN (min = precedenceBitwiseOrExpression) KWAND (
				max = precedenceBitwiseOrExpression
			)
		)
		| (
			KWBETWEEN (min = precedenceBitwiseOrExpression) KWAND (
				max = precedenceBitwiseOrExpression
			)
		)
	)*;

expressions: LPAREN expression (COMMA expression)* RPAREN;

precedenceNotOperator: KWNOT;

precedenceNotExpression:
	(precedenceNotOperator)* precedenceEqualExpression;

precedenceAndOperator: KWAND;

precedenceAndExpression:
	precedenceNotExpression (
		precedenceAndOperator precedenceNotExpression
	)*;

precedenceOrOperator: KWOR;

precedenceOrExpression:
	precedenceAndExpression (
		precedenceOrOperator precedenceAndExpression
	)*;

booleanValue: KWTRUE | KWFALSE;

tableOrPartition: tableName partitionSpec?;

partitionSpec:
	KWPARTITION LPAREN partitionVal (COMMA partitionVal)* RPAREN;

partitionVal: identifier (EQUAL constant)?;

dropPartitionSpec:
	KWPARTITION LPAREN dropPartitionVal (COMMA dropPartitionVal)* RPAREN;

dropPartitionVal: identifier dropPartitionOperator constant;

dropPartitionOperator:
	EQUAL
	| NOTEQUAL
	| LESSTHANOREQUALTO
	| LESSTHAN
	| GREATERTHANOREQUALTO
	| GREATERTHAN;

sysFuncNames:
	KWAND
	| KWOR
	| KWNOT
	| KWLIKE
	| KWIF
	| KWCASE
	| KWWHEN
	| KWTINYINT
	| KWSMALLINT
	| KWINT
	| KWBIGINT
	| KWFLOAT
	| KWDOUBLE
	| KWBOOLEAN
	| KWSTRING
	| KWBINARY
	| KWARRAY
	| KWMAP
	| KWSTRUCT
	| KWUNIONTYPE
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
	| KWRLIKE
	| KWREGEXP
	| KWIN
	| KWBETWEEN;

descFuncNames: sysFuncNames | StringLiteral | identifier;

identifier: Identifier | nonReserved;

nonReserved:
	KWTRUE
	| KWFALSE
	| KWLIKE
	| KWEXISTS
	| KWASC
	| KWDESC
	| KWORDER
	| KWGROUP
	| KWBY
	| KWAS
	| KWINSERT
	| KWOVERWRITE
	| KWOUTER
	| KWLEFT
	| KWRIGHT
	| KWFULL
	| KWPARTITION
	| KWPARTITIONS
	| KWTABLE
	| KWTABLES
	| KWCOLUMNS
	| KWINDEX
	| KWINDEXES
	| KWREBUILD
	| KWFUNCTIONS
	| KWSHOW
	| KWMSCK
	| KWREPAIR
	| KWDIRECTORY
	| KWLOCAL
	| KWUSING
	| KWCLUSTER
	| KWDISTRIBUTE
	| KWSORT
	| KWUNION
	| KWLOAD
	| KWEXPORT
	| KWIMPORT
	| KWDATA
	| KWINPATH
	| KWIS
	| KWNULL
	| KWCREATE
	| KWEXTERNAL
	| KWALTER
	| KWCHANGE
	| KWFIRST
	| KWAFTER
	| KWDESCRIBE
	| KWDROP
	| KWRENAME
	| KWIGNORE
	| KWPROTECTION
	| KWTO
	| KWCOMMENT
	| KWBOOLEAN
	| KWTINYINT
	| KWSMALLINT
	| KWINT
	| KWBIGINT
	| KWFLOAT
	| KWDOUBLE
	| KWDATE
	| KWDATETIME
	| KWTIMESTAMP
	| KWDECIMAL
	| KWSTRING
	| KWARRAY
	| KWSTRUCT
	| KWUNIONTYPE
	| KWPARTITIONED
	| KWCLUSTERED
	| KWSORTED
	| KWINTO
	| KWBUCKETS
	| KWROW
	| KWROWS
	| KWFORMAT
	| KWDELIMITED
	| KWFIELDS
	| KWTERMINATED
	| KWESCAPED
	| KWCOLLECTION
	| KWITEMS
	| KWKEYS
	| KWKEY_TYPE
	| KWLINES
	| KWSTORED
	| KWFILEFORMAT
	| KWSEQUENCEFILE
	| KWTEXTFILE
	| KWRCFILE
	| KWORCFILE
	| KWINPUTFORMAT
	| KWOUTPUTFORMAT
	| KWINPUTDRIVER
	| KWOUTPUTDRIVER
	| KWOFFLINE
	| KWENABLE
	| KWDISABLE
	| KWREADONLY
	| KWNO_DROP
	| KWLOCATION
	| KWBUCKET
	| KWOUT
	| KWOF
	| KWPERCENT
	| KWADD
	| KWREPLACE
	| KWRLIKE
	| KWREGEXP
	| KWTEMPORARY
	| KWEXPLAIN
	| KWFORMATTED
	| KWPRETTY
	| KWDEPENDENCY
	| KWLOGICAL
	| KWSERDE
	| KWWITH
	| KWDEFERRED
	| KWSERDEPROPERTIES
	| KWDBPROPERTIES
	| KWLIMIT
	| KWSET
	| KWUNSET
	| KWTBLPROPERTIES
	| KWIDXPROPERTIES
	| KWVALUE_TYPE
	| KWELEM_TYPE
	| KWMAPJOIN
	| KWSTREAMTABLE
	| KWHOLD_DDLTIME
	| KWCLUSTERSTATUS
	| KWUTC
	| KWUTCTIMESTAMP
	| KWLONG
	| KWDELETE
	| KWPLUS
	| KWMINUS
	| KWFETCH
	| KWINTERSECT
	| KWVIEW
	| KWIN
	| KWDATABASES
	| KWMATERIALIZED
	| KWSCHEMA
	| KWSCHEMAS
	| KWGRANT
	| KWREVOKE
	| KWSSL
	| KWUNDO
	| KWLOCK
	| KWLOCKS
	| KWUNLOCK
	| KWSHARED
	| KWEXCLUSIVE
	| KWPROCEDURE
	| KWUNSIGNED
	| KWWHILE
	| KWREAD
	| KWREADS
	| KWPURGE
	| KWRANGE
	| KWANALYZE
	| KWBEFORE
	| KWBETWEEN
	| KWBOTH
	| KWBINARY
	| KWCONTINUE
	| KWCURSOR
	| KWTRIGGER
	| KWRECORDREADER
	| KWRECORDWRITER
	| KWSEMI
	| KWLATERAL
	| KWTOUCH
	| KWARCHIVE
	| KWUNARCHIVE
	| KWCOMPUTE
	| KWSTATISTICS
	| KWUSE
	| KWOPTION
	| KWCONCATENATE
	| KWSHOW_DATABASE
	| KWUPDATE
	| KWRESTRICT
	| KWCASCADE
	| KWSKEWED
	| KWROLLUP
	| KWCUBE
	| KWDIRECTORIES
	| KWFOR
	| KWGROUPING
	| KWSETS
	| KWTRUNCATE
	| KWNOSCAN
	| KWUSER
	| KWROLE
	| KWINNER;
