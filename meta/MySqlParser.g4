root: sqlStatements? MINUSMINUS? EOF;

sqlStatements: (sqlStatement MINUSMINUS? SEMI | emptyStatement)* (
		sqlStatement (MINUSMINUS? SEMI)?
		| emptyStatement
	);

sqlStatement:
	ddlStatement
	| dmlStatement
	| transactionStatement
	| replicationStatement
	| preparedStatement
	| administrationStatement
	| utilityStatement;

emptyStatement: SEMI;

ddlStatement:
	createDatabase
	| createEvent
	| createIndex
	| createLogfileGroup
	| createProcedure
	| createFunction
	| createServer
	| createTable
	| createTablespaceInnodb
	| createTablespaceNdb
	| createTrigger
	| createView
	| alterDatabase
	| alterEvent
	| alterFunction
	| alterInstance
	| alterLogfileGroup
	| alterProcedure
	| alterServer
	| alterTable
	| alterTablespace
	| alterView
	| dropDatabase
	| dropEvent
	| dropIndex
	| dropLogfileGroup
	| dropProcedure
	| dropFunction
	| dropServer
	| dropTable
	| dropTablespace
	| dropTrigger
	| dropView
	| renameTable
	| truncateTable;

dmlStatement:
	selectStatement
	| insertStatement
	| updateStatement
	| deleteStatement
	| replaceStatement
	| callStatement
	| loadDataStatement
	| loadXmlStatement
	| doStatement
	| handlerStatement;

transactionStatement:
	startTransaction
	| beginWork
	| commitWork
	| rollbackWork
	| savepointStatement
	| rollbackStatement
	| releaseStatement
	| lockTables
	| unlockTables;

replicationStatement:
	changeMaster
	| changeReplicationFilter
	| purgeBinaryLogs
	| resetMaster
	| resetSlave
	| startSlave
	| stopSlave
	| startGroupReplication
	| stopGroupReplication
	| xaStartTransaction
	| xaEndTransaction
	| xaPrepareStatement
	| xaCommitWork
	| xaRollbackWork
	| xaRecoverWork;