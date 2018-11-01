root: execStatement;

execStatement: ddlStatement;

ddlStatement:
	createDatabaseStatement
	| switchDatabaseStatement
	| dropDatabaseStatement
	| createTableStatement
	| dropTableStatement
	| alterStatement;

createDatabaseStatement:
	KWCREATE (KWDATABASE | KWSCHEMA) ifNotExists? name = identifier;

ifExists: KWIF KWEXISTS;

switchDatabaseStatement: KWUSE identifier;

dropDatabaseStatement:
	KWDROP (KWDATABASE | KWSCHEMA) ifExists? identifier;

createTableStatement:
	KWCREATE (ext = KWEXTERNAL)? KWTABLE ifNotExists? name = tableName (
		like = KWLIKE likeName = tableName
		| ( KWAS selectStatement)?
	);

dropTableStatement: KWDROP KWTABLE ifExists? tableName;

alterStatement: KWALTER ( KWTABLE alterTableStatementSuffix);

alterTableStatementSuffix: alterStatementSuffixRename;

alterStatementSuffixRename:
	oldName = identifier KWRENAME KWTO newName = identifier;

ifNotExists: KWIF KWNOT KWEXISTS;

columnNameList: columnName (COMMA columnName)*;

columnName: identifier;

columnRefOrder: (asc = KWASC | desc = KWDESC)?;

queryOperator: KWUNION KWALL;

selectStatement:
	selectClause fromClause orderByClause? sortByClause? limitClause?;

limitClause: KWLIMIT num = Number;

selectClause:
	KWSELECT (((KWALL | dist = KWDISTINCT)? selectList));

selectList: selectItem ( COMMA selectItem)*;

selectItem: selectExpression ( KWAS? identifier)?;

selectExpression: tableAllColumns;

tableAllColumns: STAR | tableName DOT STAR;

fromClause: KWFROM joinSource;

joinSource: fromSource (joinToken fromSource)*;

joinToken:
	KWJOIN
	| KWINNER KWJOIN
	| KWCROSS KWJOIN
	| KWLEFT (KWOUTER)? KWJOIN
	| KWRIGHT (KWOUTER)? KWJOIN
	| KWFULL (KWOUTER)? KWJOIN
	| KWLEFT KWSEMI KWJOIN;

fromSource: (tableSource);

tableSource: tabname = tableName ( KWAS? alias = Identifier)?;

tableName:
	db = identifier DOT tab = identifier
	| tab = identifier;

orderByClause:
	KWORDER KWBY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KWORDER KWBY columnRefOrder (COMMA columnRefOrder)*;

sortByClause:
	KWSORT KWBY LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
	| KWSORT KWBY columnRefOrder;

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
