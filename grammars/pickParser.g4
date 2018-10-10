alterTable:
	ALTER intimeAction = (ONLINE | OFFLINE)? IGNORE? TABLE tableName alterSpecification (
		',' alterSpecification
	)* partitionDefinitions?;

alterSpecification:
	tableOption
	| ADD COLUMN? uid columnDefinition (FIRST | AFTER uid)?
	| ADD COLUMN? '(' uid columnDefinition (
		',' uid columnDefinition
	)* ')'
	| ADD indexFormat = (INDEX | KEY) uid? indexType? indexColumnNames indexOption*
	| ADD (CONSTRAINT name = uid?)? PRIMARY KEY indexType? indexColumnNames indexOption* #
		alterByAddPrimaryKey
	| ADD (CONSTRAINT name = uid?)? UNIQUE indexFormat = (
		INDEX
		| KEY
	)? indexName = uid? indexType? indexColumnNames indexOption*
	| ADD keyType = (FULLTEXT | SPATIAL) indexFormat = (
		INDEX
		| KEY
	)? uid? indexColumnNames indexOption*
	| ADD (CONSTRAINT name = uid?)? FOREIGN KEY indexName = uid? indexColumnNames
		referenceDefinition
	| ALGORITHM '='? algType = (DEFAULT | INPLACE | COPY)
	| ALTER COLUMN? uid (SET DEFAULT defaultValue | DROP DEFAULT)
	| CHANGE COLUMN? oldColumn = uid newColumn = uid columnDefinition (
		FIRST
		| AFTER afterColumn = uid
	)?
	| LOCK '='? lockType = (DEFAULT | NONE | SHARED | EXCLUSIVE)
	| MODIFY COLUMN? uid columnDefinition (FIRST | AFTER uid)?
	| DROP COLUMN? uid
	| DROP PRIMARY KEY
	| DROP indexFormat = (INDEX | KEY) uid
	| DROP FOREIGN KEY uid
	| DISABLE KEYS
	| ENABLE KEYS
	| RENAME renameFormat = (TO | AS)? uid
	| ORDER BY uidList
	| CONVERT TO CHARACTER SET charsetName (
		COLLATE collationName
	)?
	| DEFAULT? CHARACTER SET '=' charsetName (
		COLLATE '=' collationName
	)?
	| DISCARD TABLESPACE
	| IMPORT TABLESPACE
	| FORCE
	| validationFormat = (WITHOUT | WITH) VALIDATION
	| ADD PARTITION partitionDefinition
	| DROP PARTITION uidList
	| DISCARD PARTITION (uidList | ALL) TABLESPACE
	| IMPORT PARTITION (uidList | ALL) TABLESPACE
	| TRUNCATE PARTITION (uidList | ALL)
	| COALESCE PARTITION decimalLiteral
	| REORGANIZE PARTITION uidList INTO '(' partitionDefinition (
		',' partitionDefinition
	)* ')'
	| EXCHANGE PARTITION uid WITH TABLE tableName (
		validationFormat = (WITH | WITHOUT) VALIDATION
	)?
	| ANALYZE PARTITION (uidList | ALL)
	| CHECK PARTITION (uidList | ALL)
	| OPTIMIZE PARTITION (uidList | ALL)
	| REBUILD PARTITION (uidList | ALL)
	| REPAIR PARTITION (uidList | ALL)
	| REMOVE PARTITIONING
	| UPGRADE PARTITIONING;

indexType: USING (BTREE | HASH);

indexColumnNames:
	'(' indexColumnName (',' indexColumnName)* ')';

indexColumnName:
	uid ('(' decimalLiteral ')')? sortType = (ASC | DESC)?;

indexOption:
	KEY_BLOCK_SIZE '='? fileSizeLiteral
	| indexType
	| WITH PARSER uid
	| COMMENT STRING_LITERAL;

referenceDefinition:
	REFERENCES tableName indexColumnNames (
		MATCH matchType = (FULL | PARTIAL | SIMPLE)
	)? referenceAction?;

referenceAction:
	ON DELETE onDelete = referenceControlType (
		ON UPDATE onUpdate = referenceControlType
	)?
	| ON UPDATE onUpdate = referenceControlType (
		ON DELETE onDelete = referenceControlType
	)?;

referenceControlType:
	RESTRICT
	| CASCADE
	| SET NULL_LITERAL
	| NO ACTION;

partitionDefinition:
	PARTITION uid VALUES LESS THAN '(' partitionDefinerAtom (
		',' partitionDefinerAtom
	)* ')' partitionOption* (
		subpartitionDefinition (',' subpartitionDefinition)*
	)?
	| PARTITION uid VALUES IN '(' partitionDefinerAtom (
		',' partitionDefinerAtom
	)* ')' partitionOption* (
		subpartitionDefinition (',' subpartitionDefinition)*
	)?
	| PARTITION uid VALUES IN '(' partitionDefinerVector (
		',' partitionDefinerVector
	)* ')' partitionOption* (
		subpartitionDefinition (',' subpartitionDefinition)*
	)?
	| PARTITION uid partitionOption* (
		subpartitionDefinition (',' subpartitionDefinition)*
	)?;

partitionDefinerAtom: constant | MAXVALUE | expression;

partitionOption:
	STORAGE? ENGINE '='? engineName
	| COMMENT '='? comment = STRING_LITERAL
	| DATA DIRECTORY '='? dataDirectory = STRING_LITERAL
	| INDEX DIRECTORY '='? indexDirectory = STRING_LITERAL
	| MAX_ROWS '='? maxRows = decimalLiteral
	| MIN_ROWS '='? minRows = decimalLiteral
	| TABLESPACE '='? tablespace = uid
	| NODEGROUP '='? nodegroup = uid;

subpartitionDefinition: SUBPARTITION uid partitionOption*;

partitionDefinerVector:
	'(' partitionDefinerAtom (',' partitionDefinerAtom)+ ')';

