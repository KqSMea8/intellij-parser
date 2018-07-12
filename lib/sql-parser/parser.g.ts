import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  root = 'root',
  sqlStatements = 'sqlStatements',
  sqlStatement = 'sqlStatement',
  emptyStatement = 'emptyStatement',
  ddlStatement = 'ddlStatement',
  dmlStatement = 'dmlStatement',
  transactionStatement = 'transactionStatement',
  replicationStatement = 'replicationStatement',
  preparedStatement = 'preparedStatement',
  compoundStatement = 'compoundStatement',
  administrationStatement = 'administrationStatement',
  utilityStatement = 'utilityStatement',
  createDatabase = 'createDatabase',
  createEvent = 'createEvent',
  createIndex = 'createIndex',
  createLogfileGroup = 'createLogfileGroup',
  createProcedure = 'createProcedure',
  createFunction = 'createFunction',
  createServer = 'createServer',
  createTable = 'createTable',
  createTablespaceInnodb = 'createTablespaceInnodb',
  createTablespaceNdb = 'createTablespaceNdb',
  createTrigger = 'createTrigger',
  createView = 'createView',
  createDatabaseOption = 'createDatabaseOption',
  ownerStatement = 'ownerStatement',
  scheduleExpression = 'scheduleExpression',
  timestampValue = 'timestampValue',
  intervalExpr = 'intervalExpr',
  intervalType = 'intervalType',
  enableType = 'enableType',
  indexType = 'indexType',
  indexOption = 'indexOption',
  procedureParameter = 'procedureParameter',
  functionParameter = 'functionParameter',
  routineOption = 'routineOption',
  serverOption = 'serverOption',
  createDefinitions = 'createDefinitions',
  createDefinition = 'createDefinition',
  columnDefinition = 'columnDefinition',
  columnConstraint = 'columnConstraint',
  tableConstraint = 'tableConstraint',
  referenceDefinition = 'referenceDefinition',
  referenceAction = 'referenceAction',
  referenceControlType = 'referenceControlType',
  indexColumnDefinition = 'indexColumnDefinition',
  tableOption = 'tableOption',
  tablespaceStorage = 'tablespaceStorage',
  partitionDefinitions = 'partitionDefinitions',
  partitionFunctionDefinition = 'partitionFunctionDefinition',
  subpartitionFunctionDefinition = 'subpartitionFunctionDefinition',
  partitionDefinition = 'partitionDefinition',
  partitionDefinerAtom = 'partitionDefinerAtom',
  partitionDefinerVector = 'partitionDefinerVector',
  subpartitionDefinition = 'subpartitionDefinition',
  partitionOption = 'partitionOption',
  alterDatabase = 'alterDatabase',
  alterEvent = 'alterEvent',
  alterFunction = 'alterFunction',
  alterInstance = 'alterInstance',
  alterLogfileGroup = 'alterLogfileGroup',
  alterProcedure = 'alterProcedure',
  alterServer = 'alterServer',
  alterTable = 'alterTable',
  alterTablespace = 'alterTablespace',
  alterView = 'alterView',
  alterSpecification = 'alterSpecification',
  dropDatabase = 'dropDatabase',
  dropEvent = 'dropEvent',
  dropIndex = 'dropIndex',
  dropLogfileGroup = 'dropLogfileGroup',
  dropProcedure = 'dropProcedure',
  dropFunction = 'dropFunction',
  dropServer = 'dropServer',
  dropTable = 'dropTable',
  dropTablespace = 'dropTablespace',
  dropTrigger = 'dropTrigger',
  dropView = 'dropView',
  renameTable = 'renameTable',
  renameTableClause = 'renameTableClause',
  truncateTable = 'truncateTable',
  callStatement = 'callStatement',
  deleteStatement = 'deleteStatement',
  doStatement = 'doStatement',
  handlerStatement = 'handlerStatement',
  insertStatement = 'insertStatement',
  loadDataStatement = 'loadDataStatement',
  loadXmlStatement = 'loadXmlStatement',
  replaceStatement = 'replaceStatement',
  selectStatement = 'selectStatement',
  updateStatement = 'updateStatement',
  insertStatementValue = 'insertStatementValue',
  updatedElement = 'updatedElement',
  assignmentField = 'assignmentField',
  lockClause = 'lockClause',
  singleDeleteStatement = 'singleDeleteStatement',
  multipleDeleteStatement = 'multipleDeleteStatement',
  handlerOpenStatement = 'handlerOpenStatement',
  handlerReadIndexStatement = 'handlerReadIndexStatement',
  handlerReadStatement = 'handlerReadStatement',
  handlerCloseStatement = 'handlerCloseStatement',
  singleUpdateStatement = 'singleUpdateStatement',
  multipleUpdateStatement = 'multipleUpdateStatement',
  orderByClause = 'orderByClause',
  orderByExpression = 'orderByExpression',
  tableSources = 'tableSources',
  tableSource = 'tableSource',
  tableSourceItem = 'tableSourceItem',
  indexHint = 'indexHint',
  indexHintType = 'indexHintType',
  joinPart = 'joinPart',
  queryExpression = 'queryExpression',
  queryExpressionNointo = 'queryExpressionNointo',
  querySpecification = 'querySpecification',
  querySpecificationNointo = 'querySpecificationNointo',
  unionParenthesis = 'unionParenthesis',
  unionStatement = 'unionStatement',
  selectSpec = 'selectSpec',
  selectElements = 'selectElements',
  selectElement = 'selectElement',
  selectIntoExpression = 'selectIntoExpression',
  selectFieldsInto = 'selectFieldsInto',
  selectLinesInto = 'selectLinesInto',
  fromClause = 'fromClause',
  groupByItem = 'groupByItem',
  limitClause = 'limitClause',
  startTransaction = 'startTransaction',
  beginWork = 'beginWork',
  commitWork = 'commitWork',
  rollbackWork = 'rollbackWork',
  savepointStatement = 'savepointStatement',
  rollbackStatement = 'rollbackStatement',
  releaseStatement = 'releaseStatement',
  lockTables = 'lockTables',
  unlockTables = 'unlockTables',
  setAutocommitStatement = 'setAutocommitStatement',
  setTransactionStatement = 'setTransactionStatement',
  transactionMode = 'transactionMode',
  lockTableElement = 'lockTableElement',
  lockAction = 'lockAction',
  transactionOption = 'transactionOption',
  transactionLevel = 'transactionLevel',
  changeMaster = 'changeMaster',
  changeReplicationFilter = 'changeReplicationFilter',
  purgeBinaryLogs = 'purgeBinaryLogs',
  resetMaster = 'resetMaster',
  resetSlave = 'resetSlave',
  startSlave = 'startSlave',
  stopSlave = 'stopSlave',
  startGroupReplication = 'startGroupReplication',
  stopGroupReplication = 'stopGroupReplication',
  masterOption = 'masterOption',
  stringMasterOption = 'stringMasterOption',
  decimalMasterOption = 'decimalMasterOption',
  boolMasterOption = 'boolMasterOption',
  channelOption = 'channelOption',
  replicationFilter = 'replicationFilter',
  tablePair = 'tablePair',
  threadType = 'threadType',
  untilOption = 'untilOption',
  connectionOption = 'connectionOption',
  gtuidSet = 'gtuidSet',
  xaStartTransaction = 'xaStartTransaction',
  xaEndTransaction = 'xaEndTransaction',
  xaPrepareStatement = 'xaPrepareStatement',
  xaCommitWork = 'xaCommitWork',
  xaRollbackWork = 'xaRollbackWork',
  xaRecoverWork = 'xaRecoverWork',
  prepareStatement = 'prepareStatement',
  executeStatement = 'executeStatement',
  deallocatePrepare = 'deallocatePrepare',
  routineBody = 'routineBody',
  blockStatement = 'blockStatement',
  caseStatement = 'caseStatement',
  ifStatement = 'ifStatement',
  iterateStatement = 'iterateStatement',
  leaveStatement = 'leaveStatement',
  loopStatement = 'loopStatement',
  repeatStatement = 'repeatStatement',
  returnStatement = 'returnStatement',
  whileStatement = 'whileStatement',
  cursorStatement = 'cursorStatement',
  declareVariable = 'declareVariable',
  declareCondition = 'declareCondition',
  declareCursor = 'declareCursor',
  declareHandler = 'declareHandler',
  handlerConditionValue = 'handlerConditionValue',
  procedureSqlStatement = 'procedureSqlStatement',
  caseAlternative = 'caseAlternative',
  elifAlternative = 'elifAlternative',
  alterUser = 'alterUser',
  createUser = 'createUser',
  dropUser = 'dropUser',
  grantStatement = 'grantStatement',
  grantProxy = 'grantProxy',
  renameUser = 'renameUser',
  revokeStatement = 'revokeStatement',
  revokeProxy = 'revokeProxy',
  setPasswordStatement = 'setPasswordStatement',
  userSpecification = 'userSpecification',
  userAuthOption = 'userAuthOption',
  tlsOption = 'tlsOption',
  userResourceOption = 'userResourceOption',
  userPasswordOption = 'userPasswordOption',
  userLockOption = 'userLockOption',
  privelegeClause = 'privelegeClause',
  privilege = 'privilege',
  privilegeLevel = 'privilegeLevel',
  renameUserClause = 'renameUserClause',
  analyzeTable = 'analyzeTable',
  checkTable = 'checkTable',
  checksumTable = 'checksumTable',
  optimizeTable = 'optimizeTable',
  repairTable = 'repairTable',
  checkTableOption = 'checkTableOption',
  createUdfunction = 'createUdfunction',
  installPlugin = 'installPlugin',
  uninstallPlugin = 'uninstallPlugin',
  setStatement = 'setStatement',
  showStatement = 'showStatement',
  variableClause = 'variableClause',
  showCommonEntity = 'showCommonEntity',
  showFilter = 'showFilter',
  showGlobalInfoClause = 'showGlobalInfoClause',
  showSchemaEntity = 'showSchemaEntity',
  showProfileType = 'showProfileType',
  binlogStatement = 'binlogStatement',
  cacheIndexStatement = 'cacheIndexStatement',
  flushStatement = 'flushStatement',
  killStatement = 'killStatement',
  loadIndexIntoCache = 'loadIndexIntoCache',
  resetStatement = 'resetStatement',
  shutdownStatement = 'shutdownStatement',
  tableIndexes = 'tableIndexes',
  flushOption = 'flushOption',
  flushTableOption = 'flushTableOption',
  loadedTableIndexes = 'loadedTableIndexes',
  simpleDescribeStatement = 'simpleDescribeStatement',
  fullDescribeStatement = 'fullDescribeStatement',
  helpStatement = 'helpStatement',
  useStatement = 'useStatement',
  describeObjectClause = 'describeObjectClause',
  fullId = 'fullId',
  tableName = 'tableName',
  fullColumnName = 'fullColumnName',
  indexColumnName = 'indexColumnName',
  userName = 'userName',
  mysqlVariable = 'mysqlVariable',
  charsetName = 'charsetName',
  collationName = 'collationName',
  engineName = 'engineName',
  uuidSet = 'uuidSet',
  xid = 'xid',
  xuidStringId = 'xuidStringId',
  authPlugin = 'authPlugin',
  uid = 'uid',
  simpleId = 'simpleId',
  dottedId = 'dottedId',
  decimalLiteral = 'decimalLiteral',
  fileSizeLiteral = 'fileSizeLiteral',
  stringLiteral = 'stringLiteral',
  booleanLiteral = 'booleanLiteral',
  hexadecimalLiteral = 'hexadecimalLiteral',
  nullNotnull = 'nullNotnull',
  constant = 'constant',
  dataType = 'dataType',
  convertedDataType = 'convertedDataType',
  lengthOneDimension = 'lengthOneDimension',
  lengthTwoDimension = 'lengthTwoDimension',
  lengthTwoOptionalDimension = 'lengthTwoOptionalDimension',
  uidList = 'uidList',
  tables = 'tables',
  indexColumnNames = 'indexColumnNames',
  expressions = 'expressions',
  expressionsWithDefaults = 'expressionsWithDefaults',
  constants = 'constants',
  simpleStrings = 'simpleStrings',
  userVariables = 'userVariables',
  defaultValue = 'defaultValue',
  expressionOrDefault = 'expressionOrDefault',
  ifExists = 'ifExists',
  ifNotExists = 'ifNotExists',
  functionCall = 'functionCall',
  specificFunction = 'specificFunction',
  caseFuncAlternative = 'caseFuncAlternative',
  levelsInWeightString = 'levelsInWeightString',
  levelInWeightListElement = 'levelInWeightListElement',
  aggregateWindowedFunction = 'aggregateWindowedFunction',
  scalarFunctionName = 'scalarFunctionName',
  passwordFunctionClause = 'passwordFunctionClause',
  functionArgs = 'functionArgs',
  functionArg = 'functionArg',
  expression = 'expression',
  predicate = 'predicate',
  expressionAtom = 'expressionAtom',
  unaryOperator = 'unaryOperator',
  comparisonOperator = 'comparisonOperator',
  logicalOperator = 'logicalOperator',
  bitOperator = 'bitOperator',
  mathOperator = 'mathOperator',
  charsetNameBase = 'charsetNameBase',
  transactionLevelBase = 'transactionLevelBase',
  privilegesBase = 'privilegesBase',
  intervalTypeBase = 'intervalTypeBase',
  dataTypeBase = 'dataTypeBase',
  keywordsCanBeId = 'keywordsCanBeId',
  functionNameBase = 'functionNameBase',
}

export class BaseNode {
  private _source = '';

  kind: SyntaxKind | TokenEnum;
  pos: number;
  end: number;

  get width() {
    return this.end - this.pos;
  }

  get fullText() {
    return this._source.slice(this.pos, this.end);
  }

  get children(): BaseNode[] {
    return [];
  }

  forEach(callback: ((child: BaseNode) => any)) {
    if (!this.children.length) {
      return;
    }

    this.children.forEach(callback);
  }
}

export class Parser extends chevrotain.Parser {
  [x: string]: any;
  constructor(input) {
    super(input, tokens, {
      recoveryEnabled: true,
      outputCst: true,
    });

    this.RULE('root', () => {
      this.OPTION(() => {
        this.SUBRULE(this.sqlStatements);
      });

      this.CONSUME(Tokens.MINUSMINUS);
    });

    this.RULE('sqlStatements', () => {
      this.MANY(() => {
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.sqlStatement);

              this.OPTION(() => {
                this.CONSUME(Tokens.MINUSMINUS);
              });

              this.CONSUME(Tokens.SEMI);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.emptyStatement);
            },
          },
        ]);
      });

      this.OR([
        {
          ALT: () => {
            this.SUBRULE2(this.sqlStatement);

            this.OPTION2(() => {
              this.OPTION3(() => {
                this.CONSUME2(Tokens.MINUSMINUS);
              });

              this.CONSUME2(Tokens.SEMI);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.emptyStatement);
          },
        },
      ]);
    });

    this.RULE('sqlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.ddlStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dmlStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.transactionStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.replicationStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.preparedStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.administrationStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.utilityStatement);
          },
        },
      ]);
    });

    this.RULE('emptyStatement', () => {
      this.CONSUME(Tokens.SEMI);
    });

    this.RULE('ddlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.createDatabase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createEvent);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createIndex);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createLogfileGroup);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createProcedure);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createServer);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createTablespaceInnodb);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createTablespaceNdb);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createTrigger);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createView);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterDatabase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterEvent);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterInstance);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterLogfileGroup);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterProcedure);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterServer);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterTablespace);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.alterView);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropDatabase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropEvent);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropIndex);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropLogfileGroup);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropProcedure);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropServer);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropTablespace);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropTrigger);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropView);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.renameTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.truncateTable);
          },
        },
      ]);
    });

    this.RULE('dmlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.updateStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.deleteStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.replaceStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.callStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.loadDataStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.loadXmlStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.doStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.handlerStatement);
          },
        },
      ]);
    });

    this.RULE('transactionStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.startTransaction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.beginWork);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.commitWork);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.rollbackWork);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.savepointStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.rollbackStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.releaseStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.lockTables);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.unlockTables);
          },
        },
      ]);
    });

    this.RULE('replicationStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.changeMaster);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.changeReplicationFilter);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.purgeBinaryLogs);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.resetMaster);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.resetSlave);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.startSlave);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.stopSlave);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.startGroupReplication);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.stopGroupReplication);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaStartTransaction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaEndTransaction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaPrepareStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaCommitWork);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaRollbackWork);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.xaRecoverWork);
          },
        },
      ]);
    });

    this.RULE('preparedStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.prepareStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.executeStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.deallocatePrepare);
          },
        },
      ]);
    });

    this.RULE('compoundStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.blockStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.caseStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.ifStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.leaveStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.loopStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.repeatStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.whileStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.iterateStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.returnStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.cursorStatement);
          },
        },
      ]);
    });

    this.RULE('administrationStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.alterUser);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createUser);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dropUser);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.grantStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.grantProxy);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.renameUser);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.revokeStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.revokeProxy);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.analyzeTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.checkTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.checksumTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.optimizeTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.repairTable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.createUdfunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.installPlugin);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.uninstallPlugin);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.setStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.showStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.binlogStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.cacheIndexStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.flushStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.killStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.loadIndexIntoCache);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.resetStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.shutdownStatement);
          },
        },
      ]);
    });

    this.RULE('utilityStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleDescribeStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullDescribeStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.helpStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.useStatement);
          },
        },
      ]);
    });

    this.RULE('createDatabase', () => {
      this.CONSUME(Tokens.CREATE);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMA);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.SUBRULE(this.createDatabaseOption);
      });
    });

    this.RULE('createEvent', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.CONSUME(Tokens.EVENT);

      this.OPTION2(() => {
        this.SUBRULE(this.ifNotExists);
      });

      this.SUBRULE(this.fullId);
      this.CONSUME(Tokens.ON);
      this.CONSUME(Tokens.SCHEDULE);
      this.SUBRULE(this.scheduleExpression);

      this.OPTION3(() => {
        this.CONSUME2(Tokens.ON);
        this.CONSUME(Tokens.COMPLETION);

        this.OPTION4(() => {
          this.CONSUME(Tokens.NOT);
        });

        this.CONSUME(Tokens.PRESERVE);
      });

      this.OPTION5(() => {
        this.SUBRULE(this.enableType);
      });

      this.OPTION6(() => {
        this.CONSUME(Tokens.COMMENT);
        this.CONSUME(Tokens.STRING_LITERAL);
      });

      this.CONSUME(Tokens.DO);
      this.SUBRULE(this.routineBody);
    });

    this.RULE('createIndex', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ONLINE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.OFFLINE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.UNIQUE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.FULLTEXT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.SPATIAL);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.INDEX);
      this.SUBRULE(this.uid);

      this.OPTION3(() => {
        this.SUBRULE(this.indexType);
      });

      this.CONSUME(Tokens.ON);
      this.SUBRULE(this.tableName);
      this.SUBRULE(this.indexColumnNames);

      this.MANY(() => {
        this.SUBRULE(this.indexOption);
      });

      this.OPTION4(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ALGORITHM);

              this.OPTION5(() => {
                this.CONSUME(Tokens.ADD);
              });

              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.DEFAULT);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.INPLACE);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.COPY);
                  },
                },
              ]);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LOCK);

              this.OPTION6(() => {
                this.CONSUME2(Tokens.ADD);
              });

              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.DEFAULT);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.NONE);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.SHARED);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.EXCLUSIVE);
                  },
                },
              ]);
            },
          },
        ]);
      });
    });

    this.RULE('createLogfileGroup', () => {
      this.CONSUME(Tokens.CREATE);
      this.CONSUME(Tokens.LOGFILE);
      this.CONSUME(Tokens.GROUP);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.UNDOFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION(() => {
        this.CONSUME(Tokens.INITIAL_SIZE);

        this.OPTION2(() => {
          this.CONSUME(Tokens.ADD);
        });

        this.SUBRULE(this.fileSizeLiteral);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.UNDO_BUFFER_SIZE);

        this.OPTION4(() => {
          this.CONSUME2(Tokens.ADD);
        });

        this.SUBRULE2(this.fileSizeLiteral);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.REDO_BUFFER_SIZE);

        this.OPTION6(() => {
          this.CONSUME3(Tokens.ADD);
        });

        this.SUBRULE3(this.fileSizeLiteral);
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.NODEGROUP);

        this.OPTION8(() => {
          this.CONSUME4(Tokens.ADD);
        });

        this.SUBRULE2(this.uid);
      });

      this.OPTION9(() => {
        this.CONSUME(Tokens.WAIT);
      });

      this.OPTION10(() => {
        this.CONSUME(Tokens.COMMENT);

        this.OPTION11(() => {
          this.CONSUME5(Tokens.ADD);
        });

        this.CONSUME2(Tokens.STRING_LITERAL);
      });

      this.CONSUME(Tokens.ENGINE);

      this.OPTION12(() => {
        this.CONSUME6(Tokens.ADD);
      });

      this.SUBRULE(this.engineName);
    });

    this.RULE('createProcedure', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.CONSUME(Tokens.PROCEDURE);
      this.SUBRULE(this.fullId);
      this.CONSUME(Tokens.ADD);

      this.OPTION2(() => {
        this.SUBRULE(this.procedureParameter);
      });

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.procedureParameter);
      });

      this.CONSUME(Tokens.ADD);

      this.MANY2(() => {
        this.SUBRULE(this.routineOption);
      });

      this.SUBRULE(this.routineBody);
    });

    this.RULE('createFunction', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.CONSUME(Tokens.FUNCTION);
      this.SUBRULE(this.fullId);
      this.CONSUME(Tokens.ADD);

      this.OPTION2(() => {
        this.SUBRULE(this.functionParameter);
      });

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.functionParameter);
      });

      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.RETURNS);
      this.SUBRULE(this.dataType);

      this.MANY2(() => {
        this.SUBRULE(this.routineOption);
      });

      this.SUBRULE(this.routineBody);
    });

    this.RULE('createServer', () => {
      this.CONSUME(Tokens.CREATE);
      this.CONSUME(Tokens.SERVER);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.FOREIGN);
      this.CONSUME(Tokens.DATA);
      this.CONSUME(Tokens.WRAPPER);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MYSQL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
      this.CONSUME(Tokens.OPTIONS);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.serverOption);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.serverOption);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('createTable', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);

            this.OPTION(() => {
              this.CONSUME(Tokens.TEMPORARY);
            });

            this.CONSUME(Tokens.TABLE);

            this.OPTION2(() => {
              this.SUBRULE(this.ifNotExists);
            });

            this.SUBRULE(this.tableName);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.LIKE);
                  this.SUBRULE2(this.tableName);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                  this.CONSUME2(Tokens.LIKE);
                  this.SUBRULE3(this.tableName);
                  this.CONSUME(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CREATE);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.TEMPORARY);
            });

            this.CONSUME2(Tokens.TABLE);

            this.OPTION4(() => {
              this.SUBRULE2(this.ifNotExists);
            });

            this.SUBRULE4(this.tableName);

            this.OPTION5(() => {
              this.SUBRULE(this.createDefinitions);
            });

            this.OPTION6(() => {
              this.SUBRULE(this.tableOption);

              this.MANY(() => {
                this.OPTION7(() => {
                  this.CONSUME(Tokens.ADD);
                });

                this.SUBRULE2(this.tableOption);
              });
            });

            this.OPTION8(() => {
              this.SUBRULE(this.partitionDefinitions);
            });

            this.OPTION9(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.IGNORE);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.REPLACE);
                  },
                },
              ]);
            });

            this.OPTION10(() => {
              this.CONSUME(Tokens.AS);
            });

            this.SUBRULE(this.selectStatement);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.CREATE);

            this.OPTION11(() => {
              this.CONSUME3(Tokens.TEMPORARY);
            });

            this.CONSUME3(Tokens.TABLE);

            this.OPTION12(() => {
              this.SUBRULE3(this.ifNotExists);
            });

            this.SUBRULE5(this.tableName);
            this.SUBRULE2(this.createDefinitions);

            this.OPTION13(() => {
              this.SUBRULE3(this.tableOption);

              this.MANY2(() => {
                this.OPTION14(() => {
                  this.CONSUME2(Tokens.ADD);
                });

                this.SUBRULE4(this.tableOption);
              });
            });

            this.OPTION15(() => {
              this.SUBRULE2(this.partitionDefinitions);
            });
          },
        },
      ]);
    });

    this.RULE('createTablespaceInnodb', () => {
      this.CONSUME(Tokens.CREATE);
      this.CONSUME(Tokens.TABLESPACE);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.DATAFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION(() => {
        this.CONSUME(Tokens.FILE_BLOCK_SIZE);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.fileSizeLiteral);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.ENGINE);

        this.OPTION3(() => {
          this.CONSUME2(Tokens.ADD);
        });

        this.SUBRULE(this.engineName);
      });
    });

    this.RULE('createTablespaceNdb', () => {
      this.CONSUME(Tokens.CREATE);
      this.CONSUME(Tokens.TABLESPACE);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.DATAFILE);
      this.CONSUME(Tokens.STRING_LITERAL);
      this.CONSUME(Tokens.USE);
      this.CONSUME(Tokens.LOGFILE);
      this.CONSUME(Tokens.GROUP);
      this.SUBRULE2(this.uid);

      this.OPTION(() => {
        this.CONSUME(Tokens.EXTENT_SIZE);

        this.OPTION2(() => {
          this.CONSUME(Tokens.ADD);
        });

        this.SUBRULE(this.fileSizeLiteral);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.INITIAL_SIZE);

        this.OPTION4(() => {
          this.CONSUME2(Tokens.ADD);
        });

        this.SUBRULE2(this.fileSizeLiteral);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.AUTOEXTEND_SIZE);

        this.OPTION6(() => {
          this.CONSUME3(Tokens.ADD);
        });

        this.SUBRULE3(this.fileSizeLiteral);
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.MAX_SIZE);

        this.OPTION8(() => {
          this.CONSUME4(Tokens.ADD);
        });

        this.SUBRULE4(this.fileSizeLiteral);
      });

      this.OPTION9(() => {
        this.CONSUME(Tokens.NODEGROUP);

        this.OPTION10(() => {
          this.CONSUME5(Tokens.ADD);
        });

        this.SUBRULE3(this.uid);
      });

      this.OPTION11(() => {
        this.CONSUME(Tokens.WAIT);
      });

      this.OPTION12(() => {
        this.CONSUME(Tokens.COMMENT);

        this.OPTION13(() => {
          this.CONSUME6(Tokens.ADD);
        });

        this.CONSUME2(Tokens.STRING_LITERAL);
      });

      this.CONSUME(Tokens.ENGINE);

      this.OPTION14(() => {
        this.CONSUME7(Tokens.ADD);
      });

      this.SUBRULE(this.engineName);
    });

    this.RULE('createTrigger', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.CONSUME(Tokens.TRIGGER);
      this.SUBRULE(this.fullId);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BEFORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
          },
        },
      ]);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELETE);
          },
        },
      ]);
      this.CONSUME(Tokens.ON);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.FOR);
      this.CONSUME(Tokens.EACH);
      this.CONSUME(Tokens.ROW);

      this.OPTION2(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.FOLLOWS);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.PRECEDES);
            },
          },
        ]);
        this.SUBRULE2(this.fullId);
      });

      this.SUBRULE(this.routineBody);
    });

    this.RULE('createView', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.OR);
        this.CONSUME(Tokens.REPLACE);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.ALGORITHM);
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.UNDEFINED);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.MERGE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.TEMPTABLE);
            },
          },
        ]);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.SQL);
        this.CONSUME(Tokens.SECURITY);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DEFINER);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.INVOKER);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.VIEW);
      this.SUBRULE(this.fullId);

      this.OPTION5(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.AS);
      this.SUBRULE(this.selectStatement);

      this.OPTION6(() => {
        this.CONSUME(Tokens.WITH);

        this.OPTION7(() => {
          this.OR([
            {
              ALT: () => {
                this.CONSUME(Tokens.CASCADED);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.LOCAL);
              },
            },
          ]);
        });

        this.CONSUME(Tokens.CHECK);
        this.CONSUME(Tokens.OPTION);
      });
    });

    this.RULE('createDatabaseOption', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.CHARACTER);
            this.CONSUME(Tokens.SET);

            this.OPTION2(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE(this.charsetName);
          },
        },
        {
          ALT: () => {
            this.OPTION3(() => {
              this.CONSUME2(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.COLLATE);

            this.OPTION4(() => {
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE(this.collationName);
          },
        },
      ]);
    });

    this.RULE('ownerStatement', () => {
      this.CONSUME(Tokens.DEFINER);
      this.CONSUME(Tokens.ADD);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.userName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_USER);

            this.OPTION(() => {
              this.CONSUME(Tokens.ADD);
              this.CONSUME(Tokens.ADD);
            });
          },
        },
      ]);
    });

    this.RULE('scheduleExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.AT);
            this.SUBRULE(this.timestampValue);

            this.MANY(() => {
              this.SUBRULE(this.intervalExpr);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVERY);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.decimalLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.expression);
                },
              },
            ]);
            this.SUBRULE(this.intervalType);

            this.OPTION(() => {
              this.CONSUME(Tokens.STARTS);
              this.SUBRULE2(this.timestampValue);

              this.MANY2(() => {
                this.SUBRULE2(this.intervalExpr);
              });
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.ENDS);
              this.SUBRULE3(this.timestampValue);

              this.MANY3(() => {
                this.SUBRULE3(this.intervalExpr);
              });
            });
          },
        },
      ]);
    });

    this.RULE('timestampValue', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('intervalExpr', () => {
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.INTERVAL);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
      this.SUBRULE(this.intervalType);
    });

    this.RULE('intervalType', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR_MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MICROSECOND);
          },
        },
      ]);
    });

    this.RULE('enableType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.DISABLE);
            this.CONSUME(Tokens.ON);
            this.CONSUME(Tokens.SLAVE);
          },
        },
      ]);
    });

    this.RULE('indexType', () => {
      this.CONSUME(Tokens.USING);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BTREE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HASH);
          },
        },
      ]);
    });

    this.RULE('indexOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);

            this.OPTION(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE(this.fileSizeLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.indexType);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
            this.CONSUME(Tokens.PARSER);
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('procedureParameter', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.IN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OUT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INOUT);
          },
        },
      ]);
      this.SUBRULE(this.uid);
      this.SUBRULE(this.dataType);
    });

    this.RULE('functionParameter', () => {
      this.SUBRULE(this.uid);
      this.SUBRULE(this.dataType);
    });

    this.RULE('routineOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LANGUAGE);
            this.CONSUME(Tokens.SQL);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.NOT);
            });

            this.CONSUME(Tokens.DETERMINISTIC);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CONTAINS);
                  this.CONSUME2(Tokens.SQL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NO);
                  this.CONSUME3(Tokens.SQL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.READS);
                  this.CONSUME4(Tokens.SQL);
                  this.CONSUME(Tokens.DATA);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MODIFIES);
                  this.CONSUME5(Tokens.SQL);
                  this.CONSUME2(Tokens.DATA);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.SQL);
            this.CONSUME(Tokens.SECURITY);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DEFINER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.INVOKER);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('serverOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.HOST);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASE);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
            this.CONSUME4(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOCKET);
            this.CONSUME5(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OWNER);
            this.CONSUME6(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PORT);
            this.SUBRULE(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('createDefinitions', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.createDefinition);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.createDefinition);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('createDefinition', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
            this.SUBRULE(this.columnDefinition);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.tableConstraint);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.indexColumnDefinition);
          },
        },
      ]);
    });

    this.RULE('columnDefinition', () => {
      this.SUBRULE(this.dataType);

      this.MANY(() => {
        this.SUBRULE(this.columnConstraint);
      });
    });

    this.RULE('columnConstraint', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.nullNotnull);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
            this.SUBRULE(this.defaultValue);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.PRIMARY);
            });

            this.CONSUME(Tokens.KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIQUE);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.KEY);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIXED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DYNAMIC);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISK);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MEMORY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.referenceDefinition);
          },
        },
      ]);
    });

    this.RULE('tableConstraint', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.CONSTRAINT);

              this.OPTION2(() => {
                this.SUBRULE(this.uid);
              });
            });

            this.CONSUME(Tokens.PRIMARY);
            this.CONSUME(Tokens.KEY);

            this.OPTION3(() => {
              this.SUBRULE(this.indexType);
            });

            this.SUBRULE(this.indexColumnNames);

            this.MANY(() => {
              this.SUBRULE(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION4(() => {
              this.CONSUME2(Tokens.CONSTRAINT);

              this.OPTION5(() => {
                this.SUBRULE2(this.uid);
              });
            });

            this.CONSUME(Tokens.UNIQUE);

            this.OPTION6(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.INDEX);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.KEY);
                  },
                },
              ]);
            });

            this.OPTION7(() => {
              this.SUBRULE3(this.uid);
            });

            this.OPTION8(() => {
              this.SUBRULE2(this.indexType);
            });

            this.SUBRULE2(this.indexColumnNames);

            this.MANY2(() => {
              this.SUBRULE2(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION9(() => {
              this.CONSUME3(Tokens.CONSTRAINT);

              this.OPTION10(() => {
                this.SUBRULE4(this.uid);
              });
            });

            this.CONSUME(Tokens.FOREIGN);
            this.CONSUME3(Tokens.KEY);

            this.OPTION11(() => {
              this.SUBRULE5(this.uid);
            });

            this.SUBRULE3(this.indexColumnNames);
            this.SUBRULE(this.referenceDefinition);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECK);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('referenceDefinition', () => {
      this.CONSUME(Tokens.REFERENCES);
      this.SUBRULE(this.tableName);
      this.SUBRULE(this.indexColumnNames);

      this.OPTION(() => {
        this.CONSUME(Tokens.MATCH);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.FULL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.PARTIAL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.SIMPLE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.referenceAction);
      });
    });

    this.RULE('referenceAction', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ON);
            this.CONSUME(Tokens.DELETE);
            this.SUBRULE(this.referenceControlType);

            this.OPTION(() => {
              this.CONSUME2(Tokens.ON);
              this.CONSUME(Tokens.UPDATE);
              this.SUBRULE2(this.referenceControlType);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ON);
            this.CONSUME2(Tokens.UPDATE);
            this.SUBRULE3(this.referenceControlType);

            this.OPTION2(() => {
              this.CONSUME4(Tokens.ON);
              this.CONSUME2(Tokens.DELETE);
              this.SUBRULE4(this.referenceControlType);
            });
          },
        },
      ]);
    });

    this.RULE('referenceControlType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.RESTRICT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
            this.CONSUME(Tokens.NULL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
            this.CONSUME(Tokens.ACTION);
          },
        },
      ]);
    });

    this.RULE('indexColumnDefinition', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.INDEX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.KEY);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.uid);
            });

            this.OPTION2(() => {
              this.SUBRULE(this.indexType);
            });

            this.SUBRULE(this.indexColumnNames);

            this.MANY(() => {
              this.SUBRULE(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.FULLTEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SPATIAL);
                },
              },
            ]);

            this.OPTION3(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.INDEX);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.KEY);
                  },
                },
              ]);
            });

            this.OPTION4(() => {
              this.SUBRULE2(this.uid);
            });

            this.SUBRULE2(this.indexColumnNames);

            this.MANY2(() => {
              this.SUBRULE2(this.indexOption);
            });
          },
        },
      ]);
    });

    this.RULE('tableOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);

            this.OPTION(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.ADD);
            });

            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.OPTION4(() => {
              this.CONSUME(Tokens.DEFAULT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARACTER);
                  this.CONSUME(Tokens.SET);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARSET);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME4(Tokens.ADD);
            });

            this.SUBRULE(this.charsetName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);

            this.OPTION6(() => {
              this.CONSUME5(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.OPTION7(() => {
              this.CONSUME2(Tokens.DEFAULT);
            });

            this.CONSUME(Tokens.COLLATE);

            this.OPTION8(() => {
              this.CONSUME6(Tokens.ADD);
            });

            this.SUBRULE(this.collationName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

            this.OPTION9(() => {
              this.CONSUME7(Tokens.ADD);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);

            this.OPTION10(() => {
              this.CONSUME8(Tokens.ADD);
            });

            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);

            this.OPTION11(() => {
              this.CONSUME9(Tokens.ADD);
            });

            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
            this.CONSUME(Tokens.DIRECTORY);

            this.OPTION12(() => {
              this.CONSUME10(Tokens.ADD);
            });

            this.CONSUME4(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);

            this.OPTION13(() => {
              this.CONSUME11(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);

            this.OPTION14(() => {
              this.CONSUME12(Tokens.ADD);
            });

            this.CONSUME5(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
            this.CONSUME2(Tokens.DIRECTORY);

            this.OPTION15(() => {
              this.CONSUME13(Tokens.ADD);
            });

            this.CONSUME6(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);

            this.OPTION16(() => {
              this.CONSUME14(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NO);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIRST);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LAST);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);

            this.OPTION17(() => {
              this.CONSUME15(Tokens.ADD);
            });

            this.SUBRULE(this.fileSizeLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

            this.OPTION18(() => {
              this.CONSUME16(Tokens.ADD);
            });

            this.SUBRULE3(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

            this.OPTION19(() => {
              this.CONSUME17(Tokens.ADD);
            });

            this.SUBRULE4(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);

            this.OPTION20(() => {
              this.CONSUME18(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);

            this.OPTION21(() => {
              this.CONSUME19(Tokens.ADD);
            });

            this.CONSUME7(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);

            this.OPTION22(() => {
              this.CONSUME20(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME4(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DYNAMIC);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIXED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COMPRESSED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.REDUNDANT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COMPACT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);

            this.OPTION23(() => {
              this.CONSUME21(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME5(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);

            this.OPTION24(() => {
              this.CONSUME22(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME6(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_SAMPLE_PAGES);

            this.OPTION25(() => {
              this.CONSUME23(Tokens.ADD);
            });

            this.SUBRULE5(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
            this.SUBRULE(this.uid);

            this.OPTION26(() => {
              this.SUBRULE(this.tablespaceStorage);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNION);

            this.OPTION27(() => {
              this.CONSUME24(Tokens.ADD);
            });

            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.tables);
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('tablespaceStorage', () => {
      this.CONSUME(Tokens.STORAGE);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          },
        },
      ]);
    });

    this.RULE('partitionDefinitions', () => {
      this.CONSUME(Tokens.PARTITION);
      this.CONSUME(Tokens.BY);
      this.SUBRULE(this.partitionFunctionDefinition);

      this.OPTION(() => {
        this.CONSUME(Tokens.PARTITIONS);
        this.SUBRULE(this.decimalLiteral);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.SUBPARTITION);
        this.CONSUME2(Tokens.BY);
        this.SUBRULE(this.subpartitionFunctionDefinition);

        this.OPTION3(() => {
          this.CONSUME(Tokens.SUBPARTITIONS);
          this.SUBRULE2(this.decimalLiteral);
        });
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.partitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.partitionDefinition);
        });

        this.CONSUME(Tokens.ADD);
      });
    });

    this.RULE('partitionFunctionDefinition', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.LINEAR);
            });

            this.CONSUME(Tokens.HASH);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OPTION2(() => {
              this.CONSUME2(Tokens.LINEAR);
            });

            this.CONSUME(Tokens.KEY);

            this.OPTION3(() => {
              this.CONSUME(Tokens.ALGORITHM);
              this.CONSUME(Tokens.ADD);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ADD);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ADD);
                  },
                },
              ]);
            });

            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.uidList);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RANGE);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ADD);
                  this.SUBRULE2(this.expression);
                  this.CONSUME3(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COLUMNS);
                  this.CONSUME4(Tokens.ADD);
                  this.SUBRULE2(this.uidList);
                  this.CONSUME4(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LIST);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ADD);
                  this.SUBRULE3(this.expression);
                  this.CONSUME5(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.COLUMNS);
                  this.CONSUME6(Tokens.ADD);
                  this.SUBRULE3(this.uidList);
                  this.CONSUME6(Tokens.ADD);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('subpartitionFunctionDefinition', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.LINEAR);
            });

            this.CONSUME(Tokens.HASH);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OPTION2(() => {
              this.CONSUME2(Tokens.LINEAR);
            });

            this.CONSUME(Tokens.KEY);

            this.OPTION3(() => {
              this.CONSUME(Tokens.ALGORITHM);
              this.CONSUME(Tokens.ADD);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ADD);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ADD);
                  },
                },
              ]);
            });

            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.uidList);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('partitionDefinition', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
            this.SUBRULE(this.uid);
            this.CONSUME(Tokens.VALUES);
            this.CONSUME(Tokens.LESS);
            this.CONSUME(Tokens.THAN);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.partitionDefinerAtom);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.partitionDefinerAtom);
            });

            this.CONSUME(Tokens.ADD);

            this.MANY2(() => {
              this.SUBRULE(this.partitionOption);
            });

            this.OPTION(() => {
              this.SUBRULE(this.subpartitionDefinition);

              this.MANY3(() => {
                this.CONSUME2(Tokens.ADD);
                this.SUBRULE2(this.subpartitionDefinition);
              });
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.PARTITION);
            this.SUBRULE2(this.uid);
            this.CONSUME2(Tokens.VALUES);
            this.CONSUME(Tokens.IN);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE3(this.partitionDefinerAtom);

            this.MANY4(() => {
              this.CONSUME3(Tokens.ADD);
              this.SUBRULE4(this.partitionDefinerAtom);
            });

            this.CONSUME2(Tokens.ADD);

            this.MANY5(() => {
              this.SUBRULE2(this.partitionOption);
            });

            this.OPTION2(() => {
              this.SUBRULE3(this.subpartitionDefinition);

              this.MANY6(() => {
                this.CONSUME4(Tokens.ADD);
                this.SUBRULE4(this.subpartitionDefinition);
              });
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.PARTITION);
            this.SUBRULE3(this.uid);
            this.CONSUME3(Tokens.VALUES);
            this.CONSUME2(Tokens.IN);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.partitionDefinerVector);

            this.MANY7(() => {
              this.CONSUME5(Tokens.ADD);
              this.SUBRULE2(this.partitionDefinerVector);
            });

            this.CONSUME3(Tokens.ADD);

            this.MANY8(() => {
              this.SUBRULE3(this.partitionOption);
            });

            this.OPTION3(() => {
              this.SUBRULE5(this.subpartitionDefinition);

              this.MANY9(() => {
                this.CONSUME6(Tokens.ADD);
                this.SUBRULE6(this.subpartitionDefinition);
              });
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.PARTITION);
            this.SUBRULE4(this.uid);

            this.MANY10(() => {
              this.SUBRULE4(this.partitionOption);
            });

            this.OPTION4(() => {
              this.SUBRULE7(this.subpartitionDefinition);

              this.MANY11(() => {
                this.CONSUME7(Tokens.ADD);
                this.SUBRULE8(this.subpartitionDefinition);
              });
            });
          },
        },
      ]);
    });

    this.RULE('partitionDefinerAtom', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAXVALUE);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('partitionDefinerVector', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.partitionDefinerAtom);

      this.AT_LEAST_ONE(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.partitionDefinerAtom);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('subpartitionDefinition', () => {
      this.CONSUME(Tokens.SUBPARTITION);
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.SUBRULE(this.partitionOption);
      });
    });

    this.RULE('partitionOption', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.STORAGE);
            });

            this.CONSUME(Tokens.ENGINE);

            this.OPTION2(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.ADD);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
            this.CONSUME(Tokens.DIRECTORY);

            this.OPTION4(() => {
              this.CONSUME3(Tokens.ADD);
            });

            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
            this.CONSUME2(Tokens.DIRECTORY);

            this.OPTION5(() => {
              this.CONSUME4(Tokens.ADD);
            });

            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

            this.OPTION6(() => {
              this.CONSUME5(Tokens.ADD);
            });

            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

            this.OPTION7(() => {
              this.CONSUME6(Tokens.ADD);
            });

            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);

            this.OPTION8(() => {
              this.CONSUME7(Tokens.ADD);
            });

            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NODEGROUP);

            this.OPTION9(() => {
              this.CONSUME8(Tokens.ADD);
            });

            this.SUBRULE2(this.uid);
          },
        },
      ]);
    });

    this.RULE('alterDatabase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATABASE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SCHEMA);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.uid);
            });

            this.AT_LEAST_ONE(() => {
              this.SUBRULE(this.createDatabaseOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ALTER);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.DATABASE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.SCHEMA);
                },
              },
            ]);
            this.SUBRULE2(this.uid);
            this.CONSUME(Tokens.UPGRADE);
            this.CONSUME(Tokens.DATA);
            this.CONSUME(Tokens.DIRECTORY);
            this.CONSUME(Tokens.NAME);
          },
        },
      ]);
    });

    this.RULE('alterEvent', () => {
      this.CONSUME(Tokens.ALTER);

      this.OPTION(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.CONSUME(Tokens.EVENT);
      this.SUBRULE(this.fullId);

      this.OPTION2(() => {
        this.CONSUME(Tokens.ON);
        this.CONSUME(Tokens.SCHEDULE);
        this.SUBRULE(this.scheduleExpression);
      });

      this.OPTION3(() => {
        this.CONSUME2(Tokens.ON);
        this.CONSUME(Tokens.COMPLETION);

        this.OPTION4(() => {
          this.CONSUME(Tokens.NOT);
        });

        this.CONSUME(Tokens.PRESERVE);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.RENAME);
        this.CONSUME(Tokens.TO);
        this.SUBRULE2(this.fullId);
      });

      this.OPTION6(() => {
        this.SUBRULE(this.enableType);
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.COMMENT);
        this.CONSUME(Tokens.STRING_LITERAL);
      });

      this.OPTION8(() => {
        this.CONSUME(Tokens.DO);
        this.SUBRULE(this.routineBody);
      });
    });

    this.RULE('alterFunction', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.FUNCTION);
      this.SUBRULE(this.fullId);

      this.MANY(() => {
        this.SUBRULE(this.routineOption);
      });
    });

    this.RULE('alterInstance', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.INSTANCE);
      this.CONSUME(Tokens.ROTATE);
      this.CONSUME(Tokens.INNODB);
      this.CONSUME(Tokens.MASTER);
      this.CONSUME(Tokens.KEY);
    });

    this.RULE('alterLogfileGroup', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.LOGFILE);
      this.CONSUME(Tokens.GROUP);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ADD);
      this.CONSUME(Tokens.UNDOFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION(() => {
        this.CONSUME(Tokens.INITIAL_SIZE);

        this.OPTION2(() => {
          this.CONSUME(Tokens.ADD);
        });

        this.SUBRULE(this.fileSizeLiteral);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.WAIT);
      });

      this.CONSUME(Tokens.ENGINE);

      this.OPTION4(() => {
        this.CONSUME2(Tokens.ADD);
      });

      this.SUBRULE(this.engineName);
    });

    this.RULE('alterProcedure', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.PROCEDURE);
      this.SUBRULE(this.fullId);

      this.MANY(() => {
        this.SUBRULE(this.routineOption);
      });
    });

    this.RULE('alterServer', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.SERVER);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.OPTIONS);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.serverOption);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.serverOption);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('alterTable', () => {
      this.CONSUME(Tokens.ALTER);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ONLINE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.OFFLINE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tableName);
      this.SUBRULE(this.alterSpecification);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.alterSpecification);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.partitionDefinitions);
      });
    });

    this.RULE('alterTablespace', () => {
      this.CONSUME(Tokens.ALTER);
      this.CONSUME(Tokens.TABLESPACE);
      this.SUBRULE(this.uid);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
          },
        },
      ]);
      this.CONSUME(Tokens.DATAFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION(() => {
        this.CONSUME(Tokens.INITIAL_SIZE);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.fileSizeLiteral);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.WAIT);
      });

      this.CONSUME(Tokens.ENGINE);

      this.OPTION3(() => {
        this.CONSUME2(Tokens.ADD);
      });

      this.SUBRULE(this.engineName);
    });

    this.RULE('alterView', () => {
      this.CONSUME(Tokens.ALTER);

      this.OPTION(() => {
        this.CONSUME(Tokens.ALGORITHM);
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.UNDEFINED);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.MERGE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.TEMPTABLE);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.ownerStatement);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.SQL);
        this.CONSUME(Tokens.SECURITY);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DEFINER);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.INVOKER);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.VIEW);
      this.SUBRULE(this.fullId);

      this.OPTION4(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.AS);
      this.SUBRULE(this.selectStatement);

      this.OPTION5(() => {
        this.CONSUME(Tokens.WITH);

        this.OPTION6(() => {
          this.OR([
            {
              ALT: () => {
                this.CONSUME(Tokens.CASCADED);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.LOCAL);
              },
            },
          ]);
        });

        this.CONSUME(Tokens.CHECK);
        this.CONSUME(Tokens.OPTION);
      });
    });

    this.RULE('alterSpecification', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableOption);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.CONSUME(Tokens.COLUMN);
            });

            this.SUBRULE(this.uid);
            this.SUBRULE(this.columnDefinition);

            this.OPTION2(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.FIRST);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.AFTER);
                    this.SUBRULE2(this.uid);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.COLUMN);
            });

            this.CONSUME(Tokens.ADD);
            this.SUBRULE3(this.uid);
            this.SUBRULE2(this.columnDefinition);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE4(this.uid);
              this.SUBRULE3(this.columnDefinition);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.INDEX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.KEY);
                },
              },
            ]);

            this.OPTION4(() => {
              this.SUBRULE5(this.uid);
            });

            this.OPTION5(() => {
              this.SUBRULE(this.indexType);
            });

            this.SUBRULE(this.indexColumnNames);

            this.MANY2(() => {
              this.SUBRULE(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.ADD);

            this.OPTION6(() => {
              this.CONSUME(Tokens.CONSTRAINT);

              this.OPTION7(() => {
                this.SUBRULE6(this.uid);
              });
            });

            this.CONSUME(Tokens.PRIMARY);
            this.CONSUME2(Tokens.KEY);

            this.OPTION8(() => {
              this.SUBRULE2(this.indexType);
            });

            this.SUBRULE2(this.indexColumnNames);

            this.MANY3(() => {
              this.SUBRULE2(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.ADD);

            this.OPTION9(() => {
              this.CONSUME2(Tokens.CONSTRAINT);

              this.OPTION10(() => {
                this.SUBRULE7(this.uid);
              });
            });

            this.CONSUME(Tokens.UNIQUE);

            this.OPTION11(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.INDEX);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.KEY);
                  },
                },
              ]);
            });

            this.OPTION12(() => {
              this.SUBRULE8(this.uid);
            });

            this.OPTION13(() => {
              this.SUBRULE3(this.indexType);
            });

            this.SUBRULE3(this.indexColumnNames);

            this.MANY4(() => {
              this.SUBRULE3(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.FULLTEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SPATIAL);
                },
              },
            ]);

            this.OPTION14(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.INDEX);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME4(Tokens.KEY);
                  },
                },
              ]);
            });

            this.OPTION15(() => {
              this.SUBRULE9(this.uid);
            });

            this.SUBRULE4(this.indexColumnNames);

            this.MANY5(() => {
              this.SUBRULE4(this.indexOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME7(Tokens.ADD);

            this.OPTION16(() => {
              this.CONSUME3(Tokens.CONSTRAINT);

              this.OPTION17(() => {
                this.SUBRULE10(this.uid);
              });
            });

            this.CONSUME(Tokens.FOREIGN);
            this.CONSUME5(Tokens.KEY);

            this.OPTION18(() => {
              this.SUBRULE11(this.uid);
            });

            this.SUBRULE5(this.indexColumnNames);
            this.SUBRULE(this.referenceDefinition);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);

            this.OPTION19(() => {
              this.CONSUME(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.INPLACE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.COPY);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);

            this.OPTION20(() => {
              this.CONSUME3(Tokens.COLUMN);
            });

            this.SUBRULE12(this.uid);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SET);
                  this.CONSUME2(Tokens.DEFAULT);
                  this.SUBRULE(this.defaultValue);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DROP);
                  this.CONSUME3(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANGE);

            this.OPTION21(() => {
              this.CONSUME4(Tokens.COLUMN);
            });

            this.SUBRULE13(this.uid);
            this.SUBRULE14(this.uid);
            this.SUBRULE4(this.columnDefinition);

            this.OPTION22(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.FIRST);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.AFTER);
                    this.SUBRULE15(this.uid);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);

            this.OPTION23(() => {
              this.CONSUME2(Tokens.ADD);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME4(Tokens.DEFAULT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NONE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SHARED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.EXCLUSIVE);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFY);

            this.OPTION24(() => {
              this.CONSUME5(Tokens.COLUMN);
            });

            this.SUBRULE16(this.uid);
            this.SUBRULE5(this.columnDefinition);

            this.OPTION25(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.FIRST);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.AFTER);
                    this.SUBRULE17(this.uid);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.DROP);

            this.OPTION26(() => {
              this.CONSUME6(Tokens.COLUMN);
            });

            this.SUBRULE18(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.DROP);
            this.CONSUME2(Tokens.PRIMARY);
            this.CONSUME6(Tokens.KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.DROP);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME4(Tokens.INDEX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME7(Tokens.KEY);
                },
              },
            ]);
            this.SUBRULE19(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.DROP);
            this.CONSUME2(Tokens.FOREIGN);
            this.CONSUME8(Tokens.KEY);
            this.SUBRULE20(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
            this.CONSUME(Tokens.KEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
            this.CONSUME2(Tokens.KEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RENAME);

            this.OPTION27(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.TO);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.AS);
                  },
                },
              ]);
            });

            this.SUBRULE21(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
            this.CONSUME(Tokens.BY);
            this.SUBRULE(this.uidList);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
            this.CONSUME2(Tokens.TO);
            this.CONSUME(Tokens.CHARACTER);
            this.CONSUME2(Tokens.SET);
            this.SUBRULE(this.charsetName);

            this.OPTION28(() => {
              this.CONSUME(Tokens.COLLATE);
              this.SUBRULE(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION29(() => {
              this.CONSUME5(Tokens.DEFAULT);
            });

            this.CONSUME2(Tokens.CHARACTER);
            this.CONSUME3(Tokens.SET);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE2(this.charsetName);

            this.OPTION30(() => {
              this.CONSUME2(Tokens.COLLATE);
              this.CONSUME4(Tokens.ADD);
              this.SUBRULE2(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
            this.CONSUME(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
            this.CONSUME2(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORCE);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.WITHOUT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.WITH);
                },
              },
            ]);
            this.CONSUME(Tokens.VALIDATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME8(Tokens.ADD);
            this.CONSUME(Tokens.PARTITION);
            this.SUBRULE(this.partitionDefinition);
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.DROP);
            this.CONSUME2(Tokens.PARTITION);
            this.SUBRULE2(this.uidList);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.DISCARD);
            this.CONSUME3(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE3(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ALL);
                },
              },
            ]);
            this.CONSUME3(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.IMPORT);
            this.CONSUME4(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE4(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ALL);
                },
              },
            ]);
            this.CONSUME4(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
            this.CONSUME5(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE5(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COALESCE);
            this.CONSUME6(Tokens.PARTITION);
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REORGANIZE);
            this.CONSUME7(Tokens.PARTITION);
            this.SUBRULE6(this.uidList);
            this.CONSUME(Tokens.INTO);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.partitionDefinition);

            this.MANY6(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE3(this.partitionDefinition);
            });

            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCHANGE);
            this.CONSUME8(Tokens.PARTITION);
            this.SUBRULE22(this.uid);
            this.CONSUME2(Tokens.WITH);
            this.CONSUME(Tokens.TABLE);
            this.SUBRULE(this.tableName);

            this.OPTION31(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.WITH);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.WITHOUT);
                  },
                },
              ]);
              this.CONSUME2(Tokens.VALIDATION);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ANALYZE);
            this.CONSUME9(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE7(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME4(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECK);
            this.CONSUME10(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE8(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZE);
            this.CONSUME11(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE9(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME6(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
            this.CONSUME12(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE10(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME7(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
            this.CONSUME13(Tokens.PARTITION);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE11(this.uidList);
                },
              },
              {
                ALT: () => {
                  this.CONSUME8(Tokens.ALL);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REMOVE);
            this.CONSUME(Tokens.PARTITIONING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPGRADE);
            this.CONSUME2(Tokens.PARTITIONING);
          },
        },
      ]);
    });

    this.RULE('dropDatabase', () => {
      this.CONSUME(Tokens.DROP);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMA);
          },
        },
      ]);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.uid);
    });

    this.RULE('dropEvent', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.EVENT);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.fullId);
    });

    this.RULE('dropIndex', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.INDEX);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ONLINE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.OFFLINE);
            },
          },
        ]);
      });

      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ON);
      this.SUBRULE(this.tableName);

      this.OPTION2(() => {
        this.CONSUME(Tokens.ALGORITHM);

        this.OPTION3(() => {
          this.CONSUME(Tokens.ADD);
        });

        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DEFAULT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.INPLACE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.COPY);
            },
          },
        ]);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.LOCK);

        this.OPTION5(() => {
          this.CONSUME2(Tokens.ADD);
        });

        this.OR([
          {
            ALT: () => {
              this.CONSUME2(Tokens.DEFAULT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NONE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.SHARED);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.EXCLUSIVE);
            },
          },
        ]);
      });
    });

    this.RULE('dropLogfileGroup', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.LOGFILE);
      this.CONSUME(Tokens.GROUP);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.ENGINE);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.engineName);
    });

    this.RULE('dropProcedure', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.PROCEDURE);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.fullId);
    });

    this.RULE('dropFunction', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.FUNCTION);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.fullId);
    });

    this.RULE('dropServer', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.SERVER);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.uid);
    });

    this.RULE('dropTable', () => {
      this.CONSUME(Tokens.DROP);

      this.OPTION(() => {
        this.CONSUME(Tokens.TEMPORARY);
      });

      this.CONSUME(Tokens.TABLE);

      this.OPTION2(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.tables);

      this.OPTION3(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.RESTRICT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.CASCADE);
            },
          },
        ]);
      });
    });

    this.RULE('dropTablespace', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.TABLESPACE);
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.CONSUME(Tokens.ENGINE);

        this.OPTION2(() => {
          this.CONSUME(Tokens.ADD);
        });

        this.SUBRULE(this.engineName);
      });
    });

    this.RULE('dropTrigger', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.TRIGGER);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.fullId);
    });

    this.RULE('dropView', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.VIEW);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.fullId);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.fullId);
      });

      this.OPTION2(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.RESTRICT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.CASCADE);
            },
          },
        ]);
      });
    });

    this.RULE('renameTable', () => {
      this.CONSUME(Tokens.RENAME);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.renameTableClause);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.renameTableClause);
      });
    });

    this.RULE('renameTableClause', () => {
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.TO);
      this.SUBRULE2(this.tableName);
    });

    this.RULE('truncateTable', () => {
      this.CONSUME(Tokens.TRUNCATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.TABLE);
      });

      this.SUBRULE(this.tableName);
    });

    this.RULE('callStatement', () => {
      this.CONSUME(Tokens.CALL);
      this.SUBRULE(this.fullId);

      this.OPTION(() => {
        this.CONSUME(Tokens.ADD);

        this.OPTION2(() => {
          this.OR([
            {
              ALT: () => {
                this.SUBRULE(this.constants);
              },
            },
            {
              ALT: () => {
                this.SUBRULE(this.expressions);
              },
            },
          ]);
        });

        this.CONSUME(Tokens.ADD);
      });
    });

    this.RULE('deleteStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.singleDeleteStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.multipleDeleteStatement);
          },
        },
      ]);
    });

    this.RULE('doStatement', () => {
      this.CONSUME(Tokens.DO);
      this.SUBRULE(this.expressions);
    });

    this.RULE('handlerStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.handlerOpenStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.handlerReadIndexStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.handlerReadStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.handlerCloseStatement);
          },
        },
      ]);
    });

    this.RULE('insertStatement', () => {
      this.CONSUME(Tokens.INSERT);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.LOW_PRIORITY);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DELAYED);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.HIGH_PRIORITY);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.INTO);
      });

      this.SUBRULE(this.tableName);

      this.OPTION4(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.OR([
        {
          ALT: () => {
            this.OPTION5(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.uidList);
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE(this.insertStatementValue);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
            this.SUBRULE(this.updatedElement);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.updatedElement);
            });
          },
        },
      ]);

      this.OPTION6(() => {
        this.CONSUME(Tokens.ON);
        this.CONSUME(Tokens.DUPLICATE);
        this.CONSUME(Tokens.KEY);
        this.CONSUME(Tokens.UPDATE);
        this.SUBRULE3(this.updatedElement);

        this.MANY2(() => {
          this.CONSUME2(Tokens.ADD);
          this.SUBRULE4(this.updatedElement);
        });
      });
    });

    this.RULE('loadDataStatement', () => {
      this.CONSUME(Tokens.LOAD);
      this.CONSUME(Tokens.DATA);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.LOW_PRIORITY);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.CONCURRENT);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.LOCAL);
      });

      this.CONSUME(Tokens.INFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION3(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.REPLACE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.IGNORE);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.INTO);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tableName);

      this.OPTION4(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.CHARACTER);
        this.CONSUME(Tokens.SET);
        this.SUBRULE(this.charsetName);
      });

      this.OPTION6(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.FIELDS);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.COLUMNS);
            },
          },
        ]);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.selectFieldsInto);
        });
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.LINES);

        this.AT_LEAST_ONE2(() => {
          this.SUBRULE(this.selectLinesInto);
        });
      });

      this.OPTION8(() => {
        this.CONSUME2(Tokens.IGNORE);
        this.SUBRULE(this.decimalLiteral);
        this.OR([
          {
            ALT: () => {
              this.CONSUME2(Tokens.LINES);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ROWS);
            },
          },
        ]);
      });

      this.OPTION9(() => {
        this.CONSUME2(Tokens.ADD);
        this.SUBRULE(this.assignmentField);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.assignmentField);
        });

        this.CONSUME2(Tokens.ADD);
      });

      this.OPTION10(() => {
        this.CONSUME2(Tokens.SET);
        this.SUBRULE(this.updatedElement);

        this.MANY2(() => {
          this.CONSUME2(Tokens.ADD);
          this.SUBRULE2(this.updatedElement);
        });
      });
    });

    this.RULE('loadXmlStatement', () => {
      this.CONSUME(Tokens.LOAD);
      this.CONSUME(Tokens.XML);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.LOW_PRIORITY);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.CONCURRENT);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.LOCAL);
      });

      this.CONSUME(Tokens.INFILE);
      this.CONSUME(Tokens.STRING_LITERAL);

      this.OPTION3(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.REPLACE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.IGNORE);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.INTO);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tableName);

      this.OPTION4(() => {
        this.CONSUME(Tokens.CHARACTER);
        this.CONSUME(Tokens.SET);
        this.SUBRULE(this.charsetName);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.ROWS);
        this.CONSUME(Tokens.IDENTIFIED);
        this.CONSUME(Tokens.BY);
        this.CONSUME(Tokens.ADD);
        this.CONSUME2(Tokens.STRING_LITERAL);
        this.CONSUME(Tokens.ADD);
      });

      this.OPTION6(() => {
        this.CONSUME2(Tokens.IGNORE);
        this.SUBRULE(this.decimalLiteral);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.LINES);
            },
          },
          {
            ALT: () => {
              this.CONSUME2(Tokens.ROWS);
            },
          },
        ]);
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.assignmentField);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.assignmentField);
        });

        this.CONSUME(Tokens.ADD);
      });

      this.OPTION8(() => {
        this.CONSUME2(Tokens.SET);
        this.SUBRULE(this.updatedElement);

        this.MANY2(() => {
          this.CONSUME2(Tokens.ADD);
          this.SUBRULE2(this.updatedElement);
        });
      });
    });

    this.RULE('replaceStatement', () => {
      this.CONSUME(Tokens.REPLACE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.LOW_PRIORITY);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DELAYED);
            },
          },
        ]);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.INTO);
      });

      this.SUBRULE(this.tableName);

      this.OPTION3(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.OR([
        {
          ALT: () => {
            this.OPTION4(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.uidList);
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE(this.insertStatementValue);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
            this.SUBRULE(this.updatedElement);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.updatedElement);
            });
          },
        },
      ]);
    });

    this.RULE('selectStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);

            this.OPTION(() => {
              this.SUBRULE(this.lockClause);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);

            this.OPTION2(() => {
              this.SUBRULE2(this.lockClause);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);

            this.AT_LEAST_ONE(() => {
              this.SUBRULE(this.unionStatement);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.UNION);

              this.OPTION4(() => {
                this.OR([
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.ALL);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME(Tokens.DISTINCT);
                    },
                  },
                ]);
              });

              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE2(this.querySpecification);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE2(this.queryExpression);
                  },
                },
              ]);
            });

            this.OPTION5(() => {
              this.SUBRULE(this.orderByClause);
            });

            this.OPTION6(() => {
              this.SUBRULE(this.limitClause);
            });

            this.OPTION7(() => {
              this.SUBRULE3(this.lockClause);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);

            this.AT_LEAST_ONE2(() => {
              this.SUBRULE(this.unionParenthesis);
            });

            this.OPTION8(() => {
              this.CONSUME2(Tokens.UNION);

              this.OPTION9(() => {
                this.OR([
                  {
                    ALT: () => {
                      this.CONSUME2(Tokens.ALL);
                    },
                  },
                  {
                    ALT: () => {
                      this.CONSUME2(Tokens.DISTINCT);
                    },
                  },
                ]);
              });

              this.SUBRULE3(this.queryExpression);
            });

            this.OPTION10(() => {
              this.SUBRULE2(this.orderByClause);
            });

            this.OPTION11(() => {
              this.SUBRULE2(this.limitClause);
            });

            this.OPTION12(() => {
              this.SUBRULE4(this.lockClause);
            });
          },
        },
      ]);
    });

    this.RULE('updateStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.singleUpdateStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.multipleUpdateStatement);
          },
        },
      ]);
    });

    this.RULE('insertStatementValue', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.VALUES);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VALUE);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expressionsWithDefaults);
            this.CONSUME(Tokens.ADD);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.expressionsWithDefaults);
              this.CONSUME2(Tokens.ADD);
            });
          },
        },
      ]);
    });

    this.RULE('updatedElement', () => {
      this.SUBRULE(this.fullColumnName);
      this.CONSUME(Tokens.ADD);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          },
        },
      ]);
    });

    this.RULE('assignmentField', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
      ]);
    });

    this.RULE('lockClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.CONSUME(Tokens.UPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
            this.CONSUME(Tokens.IN);
            this.CONSUME(Tokens.SHARE);
            this.CONSUME(Tokens.MODE);
          },
        },
      ]);
    });

    this.RULE('singleDeleteStatement', () => {
      this.CONSUME(Tokens.DELETE);

      this.OPTION(() => {
        this.CONSUME(Tokens.LOW_PRIORITY);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.QUICK);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableName);

      this.OPTION4(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION6(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION7(() => {
        this.CONSUME(Tokens.LIMIT);
        this.SUBRULE(this.decimalLiteral);
      });
    });

    this.RULE('multipleDeleteStatement', () => {
      this.CONSUME(Tokens.DELETE);

      this.OPTION(() => {
        this.CONSUME(Tokens.LOW_PRIORITY);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.QUICK);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableName);

            this.OPTION4(() => {
              this.CONSUME(Tokens.ADD);
              this.CONSUME(Tokens.ADD);
            });

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.tableName);

              this.OPTION5(() => {
                this.CONSUME2(Tokens.ADD);
                this.CONSUME2(Tokens.ADD);
              });
            });

            this.CONSUME(Tokens.FROM);
            this.SUBRULE(this.tableSources);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.FROM);
            this.SUBRULE3(this.tableName);

            this.OPTION6(() => {
              this.CONSUME3(Tokens.ADD);
              this.CONSUME3(Tokens.ADD);
            });

            this.MANY2(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE4(this.tableName);

              this.OPTION7(() => {
                this.CONSUME4(Tokens.ADD);
                this.CONSUME4(Tokens.ADD);
              });
            });

            this.CONSUME(Tokens.USING);
            this.SUBRULE2(this.tableSources);
          },
        },
      ]);

      this.OPTION8(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });
    });

    this.RULE('handlerOpenStatement', () => {
      this.CONSUME(Tokens.HANDLER);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.OPEN);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.uid);
      });
    });

    this.RULE('handlerReadIndexStatement', () => {
      this.CONSUME(Tokens.HANDLER);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.READ);
      this.SUBRULE(this.uid);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.comparisonOperator);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.constants);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIRST);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.PREV);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LAST);
                },
              },
            ]);
          },
        },
      ]);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.LIMIT);
        this.SUBRULE(this.decimalLiteral);
      });
    });

    this.RULE('handlerReadStatement', () => {
      this.CONSUME(Tokens.HANDLER);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.READ);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NEXT);
          },
        },
      ]);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.LIMIT);
        this.SUBRULE(this.decimalLiteral);
      });
    });

    this.RULE('handlerCloseStatement', () => {
      this.CONSUME(Tokens.HANDLER);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.CLOSE);
    });

    this.RULE('singleUpdateStatement', () => {
      this.CONSUME(Tokens.UPDATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.LOW_PRIORITY);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.SUBRULE(this.tableName);

      this.OPTION3(() => {
        this.OPTION4(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.uid);
      });

      this.CONSUME(Tokens.SET);
      this.SUBRULE(this.updatedElement);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.updatedElement);
      });

      this.OPTION5(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION6(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION7(() => {
        this.SUBRULE(this.limitClause);
      });
    });

    this.RULE('multipleUpdateStatement', () => {
      this.CONSUME(Tokens.UPDATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.LOW_PRIORITY);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.IGNORE);
      });

      this.SUBRULE(this.tableSources);
      this.CONSUME(Tokens.SET);
      this.SUBRULE(this.updatedElement);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.updatedElement);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });
    });

    this.RULE('orderByClause', () => {
      this.CONSUME(Tokens.ORDER);
      this.CONSUME(Tokens.BY);
      this.SUBRULE(this.orderByExpression);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.orderByExpression);
      });
    });

    this.RULE('orderByExpression', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
        ]);
      });
    });

    this.RULE('tableSources', () => {
      this.SUBRULE(this.tableSource);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.tableSource);
      });
    });

    this.RULE('tableSource', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableSourceItem);

            this.MANY(() => {
              this.SUBRULE(this.joinPart);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE2(this.tableSourceItem);

            this.MANY2(() => {
              this.SUBRULE2(this.joinPart);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('tableSourceItem', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableName);

            this.OPTION(() => {
              this.CONSUME(Tokens.PARTITION);
              this.CONSUME(Tokens.ADD);
              this.SUBRULE(this.uidList);
              this.CONSUME(Tokens.ADD);
            });

            this.OPTION2(() => {
              this.OPTION3(() => {
                this.CONSUME(Tokens.AS);
              });

              this.SUBRULE(this.uid);
            });

            this.OPTION4(() => {
              this.SUBRULE(this.indexHint);

              this.MANY(() => {
                this.CONSUME(Tokens.ADD);
                this.SUBRULE2(this.indexHint);
              });
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.selectStatement);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ADD);
                  this.SUBRULE2(this.selectStatement);
                  this.CONSUME2(Tokens.ADD);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME2(Tokens.AS);
            });

            this.SUBRULE2(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.tableSources);
            this.CONSUME3(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('indexHint', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.USE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORCE);
          },
        },
      ]);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY);
          },
        },
      ]);

      this.OPTION(() => {
        this.CONSUME(Tokens.FOR);
        this.SUBRULE(this.indexHintType);
      });

      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.uidList);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('indexHintType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
            this.CONSUME(Tokens.BY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP);
            this.CONSUME2(Tokens.BY);
          },
        },
      ]);
    });

    this.RULE('joinPart', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.INNER);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.CROSS);
                  },
                },
              ]);
            });

            this.CONSUME(Tokens.JOIN);
            this.SUBRULE(this.tableSourceItem);

            this.OPTION2(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ON);
                    this.SUBRULE(this.expression);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.USING);
                    this.CONSUME(Tokens.ADD);
                    this.SUBRULE(this.uidList);
                    this.CONSUME(Tokens.ADD);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
            this.SUBRULE2(this.tableSourceItem);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.ON);
              this.SUBRULE2(this.expression);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEFT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RIGHT);
                },
              },
            ]);

            this.OPTION4(() => {
              this.CONSUME(Tokens.OUTER);
            });

            this.CONSUME2(Tokens.JOIN);
            this.SUBRULE3(this.tableSourceItem);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.ON);
                  this.SUBRULE3(this.expression);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.USING);
                  this.CONSUME2(Tokens.ADD);
                  this.SUBRULE2(this.uidList);
                  this.CONSUME2(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NATURAL);

            this.OPTION5(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.LEFT);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.RIGHT);
                  },
                },
              ]);

              this.OPTION6(() => {
                this.CONSUME2(Tokens.OUTER);
              });
            });

            this.CONSUME3(Tokens.JOIN);
            this.SUBRULE4(this.tableSourceItem);
          },
        },
      ]);
    });

    this.RULE('queryExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.querySpecification);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.queryExpression);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('queryExpressionNointo', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.querySpecificationNointo);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.queryExpressionNointo);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('querySpecification', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);

            this.MANY(() => {
              this.SUBRULE(this.selectSpec);
            });

            this.SUBRULE(this.selectElements);

            this.OPTION(() => {
              this.SUBRULE(this.selectIntoExpression);
            });

            this.OPTION2(() => {
              this.SUBRULE(this.fromClause);
            });

            this.OPTION3(() => {
              this.SUBRULE(this.orderByClause);
            });

            this.OPTION4(() => {
              this.SUBRULE(this.limitClause);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SELECT);

            this.MANY2(() => {
              this.SUBRULE2(this.selectSpec);
            });

            this.SUBRULE2(this.selectElements);

            this.OPTION5(() => {
              this.SUBRULE2(this.fromClause);
            });

            this.OPTION6(() => {
              this.SUBRULE2(this.orderByClause);
            });

            this.OPTION7(() => {
              this.SUBRULE2(this.limitClause);
            });

            this.OPTION8(() => {
              this.SUBRULE2(this.selectIntoExpression);
            });
          },
        },
      ]);
    });

    this.RULE('querySpecificationNointo', () => {
      this.CONSUME(Tokens.SELECT);

      this.MANY(() => {
        this.SUBRULE(this.selectSpec);
      });

      this.SUBRULE(this.selectElements);

      this.OPTION(() => {
        this.SUBRULE(this.fromClause);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.orderByClause);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.limitClause);
      });
    });

    this.RULE('unionParenthesis', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DISTINCT);
            },
          },
        ]);
      });

      this.SUBRULE(this.queryExpressionNointo);
    });

    this.RULE('unionStatement', () => {
      this.CONSUME(Tokens.UNION);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DISTINCT);
            },
          },
        ]);
      });

      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);
          },
        },
      ]);
    });

    this.RULE('selectSpec', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ALL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISTINCT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DISTINCTROW);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HIGH_PRIORITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_SMALL_RESULT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BIG_RESULT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_CACHE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_NO_CACHE);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CALC_FOUND_ROWS);
          },
        },
      ]);
    });

    this.RULE('selectElements', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.selectElement);
      });
    });

    this.RULE('selectElement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);

            this.OPTION(() => {
              this.OPTION2(() => {
                this.CONSUME(Tokens.AS);
              });

              this.SUBRULE(this.uid);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);

            this.OPTION3(() => {
              this.OPTION4(() => {
                this.CONSUME2(Tokens.AS);
              });

              this.SUBRULE2(this.uid);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION5(() => {
              this.CONSUME(Tokens.LOCAL_ID);
              this.CONSUME(Tokens.VAR_ASSIGN);
            });

            this.SUBRULE(this.expression);

            this.OPTION6(() => {
              this.OPTION7(() => {
                this.CONSUME3(Tokens.AS);
              });

              this.SUBRULE3(this.uid);
            });
          },
        },
      ]);
    });

    this.RULE('selectIntoExpression', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
            this.SUBRULE(this.assignmentField);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.assignmentField);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.INTO);
            this.CONSUME(Tokens.DUMPFILE);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.INTO);
            this.CONSUME(Tokens.OUTFILE);
            this.CONSUME2(Tokens.STRING_LITERAL);

            this.OPTION(() => {
              this.CONSUME(Tokens.CHARACTER);
              this.CONSUME(Tokens.SET);
              this.SUBRULE(this.charsetName);
            });

            this.OPTION2(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.FIELDS);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.COLUMNS);
                  },
                },
              ]);

              this.AT_LEAST_ONE(() => {
                this.SUBRULE(this.selectFieldsInto);
              });
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.LINES);

              this.AT_LEAST_ONE2(() => {
                this.SUBRULE(this.selectLinesInto);
              });
            });
          },
        },
      ]);
    });

    this.RULE('selectFieldsInto', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.OPTIONALLY);
            });

            this.CONSUME(Tokens.ENCLOSED);
            this.CONSUME2(Tokens.BY);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPED);
            this.CONSUME3(Tokens.BY);
            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('selectLinesInto', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTING);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
            this.CONSUME2(Tokens.BY);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('fromClause', () => {
      this.CONSUME(Tokens.FROM);
      this.SUBRULE(this.tableSources);

      this.OPTION(() => {
        this.CONSUME(Tokens.WHERE);
        this.SUBRULE(this.expression);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.GROUP);
        this.CONSUME(Tokens.BY);
        this.SUBRULE(this.groupByItem);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.groupByItem);
        });

        this.OPTION3(() => {
          this.CONSUME(Tokens.WITH);
          this.CONSUME(Tokens.ROLLUP);
        });
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.HAVING);
        this.SUBRULE2(this.expression);
      });
    });

    this.RULE('groupByItem', () => {
      this.SUBRULE(this.expression);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
        ]);
      });
    });

    this.RULE('limitClause', () => {
      this.CONSUME(Tokens.LIMIT);
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.SUBRULE(this.decimalLiteral);
              this.CONSUME(Tokens.ADD);
            });

            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.decimalLiteral);
            this.CONSUME(Tokens.OFFSET);
            this.SUBRULE4(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('startTransaction', () => {
      this.CONSUME(Tokens.START);
      this.CONSUME(Tokens.TRANSACTION);

      this.OPTION(() => {
        this.SUBRULE(this.transactionMode);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.transactionMode);
        });
      });
    });

    this.RULE('beginWork', () => {
      this.CONSUME(Tokens.BEGIN);

      this.OPTION(() => {
        this.CONSUME(Tokens.WORK);
      });
    });

    this.RULE('commitWork', () => {
      this.CONSUME(Tokens.COMMIT);

      this.OPTION(() => {
        this.CONSUME(Tokens.WORK);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.AND);

        this.OPTION3(() => {
          this.CONSUME(Tokens.NO);
        });

        this.CONSUME(Tokens.CHAIN);
      });

      this.OPTION4(() => {
        this.OPTION5(() => {
          this.CONSUME2(Tokens.NO);
        });

        this.CONSUME(Tokens.RELEASE);
      });
    });

    this.RULE('rollbackWork', () => {
      this.CONSUME(Tokens.ROLLBACK);

      this.OPTION(() => {
        this.CONSUME(Tokens.WORK);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.AND);

        this.OPTION3(() => {
          this.CONSUME(Tokens.NO);
        });

        this.CONSUME(Tokens.CHAIN);
      });

      this.OPTION4(() => {
        this.OPTION5(() => {
          this.CONSUME2(Tokens.NO);
        });

        this.CONSUME(Tokens.RELEASE);
      });
    });

    this.RULE('savepointStatement', () => {
      this.CONSUME(Tokens.SAVEPOINT);
      this.SUBRULE(this.uid);
    });

    this.RULE('rollbackStatement', () => {
      this.CONSUME(Tokens.ROLLBACK);

      this.OPTION(() => {
        this.CONSUME(Tokens.WORK);
      });

      this.CONSUME(Tokens.TO);

      this.OPTION2(() => {
        this.CONSUME(Tokens.SAVEPOINT);
      });

      this.SUBRULE(this.uid);
    });

    this.RULE('releaseStatement', () => {
      this.CONSUME(Tokens.RELEASE);
      this.CONSUME(Tokens.SAVEPOINT);
      this.SUBRULE(this.uid);
    });

    this.RULE('lockTables', () => {
      this.CONSUME(Tokens.LOCK);
      this.CONSUME(Tokens.TABLES);
      this.SUBRULE(this.lockTableElement);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.lockTableElement);
      });
    });

    this.RULE('unlockTables', () => {
      this.CONSUME(Tokens.UNLOCK);
      this.CONSUME(Tokens.TABLES);
    });

    this.RULE('setAutocommitStatement', () => {
      this.CONSUME(Tokens.SET);
      this.CONSUME(Tokens.AUTOCOMMIT);
      this.CONSUME(Tokens.ADD);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('setTransactionStatement', () => {
      this.CONSUME(Tokens.SET);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.GLOBAL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.SESSION);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.TRANSACTION);
      this.SUBRULE(this.transactionOption);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.transactionOption);
      });
    });

    this.RULE('transactionMode', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
            this.CONSUME(Tokens.CONSISTENT);
            this.CONSUME(Tokens.SNAPSHOT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
            this.CONSUME(Tokens.WRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.READ);
            this.CONSUME(Tokens.ONLY);
          },
        },
      ]);
    });

    this.RULE('lockTableElement', () => {
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.CONSUME(Tokens.AS);
        });

        this.SUBRULE(this.uid);
      });

      this.SUBRULE(this.lockAction);
    });

    this.RULE('lockAction', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);

            this.OPTION(() => {
              this.CONSUME(Tokens.LOCAL);
            });
          },
        },
        {
          ALT: () => {
            this.OPTION2(() => {
              this.CONSUME(Tokens.LOW_PRIORITY);
            });

            this.CONSUME(Tokens.WRITE);
          },
        },
      ]);
    });

    this.RULE('transactionOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ISOLATION);
            this.CONSUME(Tokens.LEVEL);
            this.SUBRULE(this.transactionLevel);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
            this.CONSUME(Tokens.WRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.READ);
            this.CONSUME(Tokens.ONLY);
          },
        },
      ]);
    });

    this.RULE('transactionLevel', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPEATABLE);
            this.CONSUME(Tokens.READ);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.READ);
            this.CONSUME(Tokens.COMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.READ);
            this.CONSUME(Tokens.UNCOMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERIALIZABLE);
          },
        },
      ]);
    });

    this.RULE('changeMaster', () => {
      this.CONSUME(Tokens.CHANGE);
      this.CONSUME(Tokens.MASTER);
      this.CONSUME(Tokens.TO);
      this.SUBRULE(this.masterOption);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.masterOption);
      });

      this.OPTION(() => {
        this.SUBRULE(this.channelOption);
      });
    });

    this.RULE('changeReplicationFilter', () => {
      this.CONSUME(Tokens.CHANGE);
      this.CONSUME(Tokens.REPLICATION);
      this.CONSUME(Tokens.FILTER);
      this.SUBRULE(this.replicationFilter);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.replicationFilter);
      });
    });

    this.RULE('purgeBinaryLogs', () => {
      this.CONSUME(Tokens.PURGE);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
          },
        },
      ]);
      this.CONSUME(Tokens.LOGS);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TO);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BEFORE);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('resetMaster', () => {
      this.CONSUME(Tokens.RESET);
      this.CONSUME(Tokens.MASTER);
    });

    this.RULE('resetSlave', () => {
      this.CONSUME(Tokens.RESET);
      this.CONSUME(Tokens.SLAVE);

      this.OPTION(() => {
        this.CONSUME(Tokens.ALL);
      });

      this.OPTION2(() => {
        this.SUBRULE(this.channelOption);
      });
    });

    this.RULE('startSlave', () => {
      this.CONSUME(Tokens.START);
      this.CONSUME(Tokens.SLAVE);

      this.OPTION(() => {
        this.SUBRULE(this.threadType);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.threadType);
        });
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.UNTIL);
        this.SUBRULE(this.untilOption);
      });

      this.MANY2(() => {
        this.SUBRULE(this.connectionOption);
      });

      this.OPTION3(() => {
        this.SUBRULE(this.channelOption);
      });
    });

    this.RULE('stopSlave', () => {
      this.CONSUME(Tokens.STOP);
      this.CONSUME(Tokens.SLAVE);

      this.OPTION(() => {
        this.SUBRULE(this.threadType);

        this.MANY(() => {
          this.CONSUME(Tokens.ADD);
          this.SUBRULE2(this.threadType);
        });
      });
    });

    this.RULE('startGroupReplication', () => {
      this.CONSUME(Tokens.START);
      this.CONSUME(Tokens.GROUP_REPLICATION);
    });

    this.RULE('stopGroupReplication', () => {
      this.CONSUME(Tokens.STOP);
      this.CONSUME(Tokens.GROUP_REPLICATION);
    });

    this.RULE('masterOption', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.stringMasterOption);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalMasterOption);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.boolMasterOption);
            this.CONSUME3(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
            this.CONSUME4(Tokens.ADD);
            this.CONSUME(Tokens.REAL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE_SERVER_IDS);
            this.CONSUME5(Tokens.ADD);
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.SUBRULE(this.uid);

              this.MANY(() => {
                this.CONSUME(Tokens.ADD);
                this.SUBRULE2(this.uid);
              });
            });

            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('stringMasterOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_BIND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HOST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CAPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CIPHER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_TLS_VERSION);
          },
        },
      ]);
    });

    this.RULE('decimalMasterOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_RETRY_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_DELAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_POS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_POS);
          },
        },
      ]);
    });

    this.RULE('boolMasterOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_AUTO_POSITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
          },
        },
      ]);
    });

    this.RULE('channelOption', () => {
      this.CONSUME(Tokens.FOR);
      this.CONSUME(Tokens.CHANNEL);
      this.CONSUME(Tokens.STRING_LITERAL);
    });

    this.RULE('replicationFilter', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_DB);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.uidList);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
            this.CONSUME2(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.uidList);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_TABLE);
            this.CONSUME3(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.tables);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
            this.CONSUME4(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
            this.SUBRULE2(this.tables);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
            this.CONSUME5(Tokens.ADD);
            this.CONSUME5(Tokens.ADD);
            this.SUBRULE(this.simpleStrings);
            this.CONSUME5(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
            this.CONSUME6(Tokens.ADD);
            this.CONSUME6(Tokens.ADD);
            this.SUBRULE2(this.simpleStrings);
            this.CONSUME6(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
            this.CONSUME7(Tokens.ADD);
            this.CONSUME7(Tokens.ADD);
            this.SUBRULE(this.tablePair);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.tablePair);
            });

            this.CONSUME7(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('tablePair', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.tableName);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE2(this.tableName);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('threadType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.IO_THREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD);
          },
        },
      ]);
    });

    this.RULE('untilOption', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SQL_AFTER_GTIDS);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.gtuidSet);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
            this.CONSUME2(Tokens.ADD);
            this.CONSUME(Tokens.STRING_LITERAL);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.MASTER_LOG_POS);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
            this.CONSUME4(Tokens.ADD);
            this.CONSUME2(Tokens.STRING_LITERAL);
            this.CONSUME2(Tokens.ADD);
            this.CONSUME(Tokens.RELAY_LOG_POS);
            this.CONSUME5(Tokens.ADD);
            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
          },
        },
      ]);
    });

    this.RULE('connectionOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
            this.CONSUME2(Tokens.ADD);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT_AUTH);
            this.CONSUME3(Tokens.ADD);
            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGIN_DIR);
            this.CONSUME4(Tokens.ADD);
            this.CONSUME4(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('gtuidSet', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uuidSet);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.uuidSet);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('xaStartTransaction', () => {
      this.CONSUME(Tokens.XA);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.START);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BEGIN);
          },
        },
      ]);
      this.SUBRULE(this.xid);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.JOIN);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.RESUME);
            },
          },
        ]);
      });
    });

    this.RULE('xaEndTransaction', () => {
      this.CONSUME(Tokens.XA);
      this.CONSUME(Tokens.END);
      this.SUBRULE(this.xid);

      this.OPTION(() => {
        this.CONSUME(Tokens.SUSPEND);

        this.OPTION2(() => {
          this.CONSUME(Tokens.FOR);
          this.CONSUME(Tokens.MIGRATE);
        });
      });
    });

    this.RULE('xaPrepareStatement', () => {
      this.CONSUME(Tokens.XA);
      this.CONSUME(Tokens.PREPARE);
      this.SUBRULE(this.xid);
    });

    this.RULE('xaCommitWork', () => {
      this.CONSUME(Tokens.XA);
      this.CONSUME(Tokens.COMMIT);
      this.SUBRULE(this.xid);

      this.OPTION(() => {
        this.CONSUME(Tokens.ONE);
        this.CONSUME(Tokens.PHASE);
      });
    });

    this.RULE('xaRollbackWork', () => {
      this.CONSUME(Tokens.XA);
      this.CONSUME(Tokens.ROLLBACK);
      this.SUBRULE(this.xid);
    });

    this.RULE('xaRecoverWork', () => {
      this.CONSUME(Tokens.XA);
      this.CONSUME(Tokens.RECOVER);

      this.OPTION(() => {
        this.CONSUME(Tokens.CONVERT);
        this.SUBRULE(this.xid);
      });
    });

    this.RULE('prepareStatement', () => {
      this.CONSUME(Tokens.PREPARE);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.FROM);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
      ]);
    });

    this.RULE('executeStatement', () => {
      this.CONSUME(Tokens.EXECUTE);
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.CONSUME(Tokens.USING);
        this.SUBRULE(this.userVariables);
      });
    });

    this.RULE('deallocatePrepare', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DEALLOCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
          },
        },
      ]);
      this.CONSUME(Tokens.PREPARE);
      this.SUBRULE(this.uid);
    });

    this.RULE('routineBody', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.blockStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.sqlStatement);
          },
        },
      ]);
    });

    this.RULE('blockStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.uid);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.BEGIN);

      this.OPTION2(() => {
        this.MANY(() => {
          this.SUBRULE(this.declareVariable);
          this.CONSUME(Tokens.SEMI);
        });

        this.MANY2(() => {
          this.SUBRULE(this.declareCondition);
          this.CONSUME2(Tokens.SEMI);
        });

        this.MANY3(() => {
          this.SUBRULE(this.declareCursor);
          this.CONSUME3(Tokens.SEMI);
        });

        this.MANY4(() => {
          this.SUBRULE(this.declareHandler);
          this.CONSUME4(Tokens.SEMI);
        });

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      });

      this.CONSUME(Tokens.END);

      this.OPTION3(() => {
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('caseStatement', () => {
      this.CONSUME(Tokens.CASE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.uid);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.expression);
            },
          },
        ]);
      });

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.caseAlternative);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.ELSE);

        this.AT_LEAST_ONE2(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      });

      this.CONSUME(Tokens.END);
      this.CONSUME2(Tokens.CASE);
    });

    this.RULE('ifStatement', () => {
      this.CONSUME(Tokens.IF);
      this.SUBRULE(this.expression);
      this.CONSUME(Tokens.THEN);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });

      this.MANY(() => {
        this.SUBRULE(this.elifAlternative);
      });

      this.OPTION(() => {
        this.CONSUME(Tokens.ELSE);

        this.AT_LEAST_ONE2(() => {
          this.SUBRULE2(this.procedureSqlStatement);
        });
      });

      this.CONSUME(Tokens.END);
      this.CONSUME2(Tokens.IF);
    });

    this.RULE('iterateStatement', () => {
      this.CONSUME(Tokens.ITERATE);
      this.SUBRULE(this.uid);
    });

    this.RULE('leaveStatement', () => {
      this.CONSUME(Tokens.LEAVE);
      this.SUBRULE(this.uid);
    });

    this.RULE('loopStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.uid);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.LOOP);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });

      this.CONSUME(Tokens.END);
      this.CONSUME2(Tokens.LOOP);

      this.OPTION2(() => {
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('repeatStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.uid);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.REPEAT);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });

      this.CONSUME(Tokens.UNTIL);
      this.SUBRULE(this.expression);
      this.CONSUME(Tokens.END);
      this.CONSUME2(Tokens.REPEAT);

      this.OPTION2(() => {
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('returnStatement', () => {
      this.CONSUME(Tokens.RETURN);
      this.SUBRULE(this.expression);
    });

    this.RULE('whileStatement', () => {
      this.OPTION(() => {
        this.SUBRULE(this.uid);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.WHILE);
      this.SUBRULE(this.expression);
      this.CONSUME(Tokens.DO);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });

      this.CONSUME(Tokens.END);
      this.CONSUME2(Tokens.WHILE);

      this.OPTION2(() => {
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('cursorStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CLOSE);
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FETCH);

            this.OPTION(() => {
              this.OPTION2(() => {
                this.CONSUME(Tokens.NEXT);
              });

              this.CONSUME(Tokens.FROM);
            });

            this.SUBRULE2(this.uid);
            this.CONSUME(Tokens.INTO);
            this.SUBRULE(this.uidList);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPEN);
            this.SUBRULE3(this.uid);
          },
        },
      ]);
    });

    this.RULE('declareVariable', () => {
      this.CONSUME(Tokens.DECLARE);
      this.SUBRULE(this.uidList);
      this.SUBRULE(this.dataType);

      this.OPTION(() => {
        this.CONSUME(Tokens.DEFAULT);
        this.SUBRULE(this.defaultValue);
      });
    });

    this.RULE('declareCondition', () => {
      this.CONSUME(Tokens.DECLARE);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.CONDITION);
      this.CONSUME(Tokens.FOR);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLSTATE);

            this.OPTION(() => {
              this.CONSUME(Tokens.VALUE);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('declareCursor', () => {
      this.CONSUME(Tokens.DECLARE);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.CURSOR);
      this.CONSUME(Tokens.FOR);
      this.SUBRULE(this.selectStatement);
    });

    this.RULE('declareHandler', () => {
      this.CONSUME(Tokens.DECLARE);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTINUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDO);
          },
        },
      ]);
      this.CONSUME(Tokens.HANDLER);
      this.CONSUME(Tokens.FOR);
      this.SUBRULE(this.handlerConditionValue);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.handlerConditionValue);
      });

      this.SUBRULE(this.routineBody);
    });

    this.RULE('handlerConditionValue', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLSTATE);

            this.OPTION(() => {
              this.CONSUME(Tokens.VALUE);
            });

            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLWARNING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
            this.CONSUME(Tokens.FOUND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLEXCEPTION);
          },
        },
      ]);
    });

    this.RULE('procedureSqlStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.compoundStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.sqlStatement);
          },
        },
      ]);
      this.CONSUME(Tokens.SEMI);
    });

    this.RULE('caseAlternative', () => {
      this.CONSUME(Tokens.WHEN);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
      this.CONSUME(Tokens.THEN);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });
    });

    this.RULE('elifAlternative', () => {
      this.CONSUME(Tokens.ELSEIF);
      this.SUBRULE(this.expression);
      this.CONSUME(Tokens.THEN);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.procedureSqlStatement);
      });
    });

    this.RULE('alterUser', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
            this.CONSUME(Tokens.USER);
            this.SUBRULE(this.userSpecification);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.userSpecification);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ALTER);
            this.CONSUME2(Tokens.USER);

            this.OPTION(() => {
              this.SUBRULE(this.ifExists);
            });

            this.SUBRULE(this.userAuthOption);

            this.MANY2(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.userAuthOption);
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.REQUIRE);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.NONE);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE(this.tlsOption);

                    this.MANY3(() => {
                      this.OPTION3(() => {
                        this.CONSUME(Tokens.AND);
                      });

                      this.SUBRULE2(this.tlsOption);
                    });
                  },
                },
              ]);
            });

            this.OPTION4(() => {
              this.CONSUME(Tokens.WITH);

              this.AT_LEAST_ONE(() => {
                this.SUBRULE(this.userResourceOption);
              });
            });

            this.MANY4(() => {
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE(this.userPasswordOption);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE(this.userLockOption);
                  },
                },
              ]);
            });
          },
        },
      ]);
    });

    this.RULE('createUser', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);
            this.CONSUME(Tokens.USER);
            this.SUBRULE(this.userAuthOption);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.userAuthOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CREATE);
            this.CONSUME2(Tokens.USER);

            this.OPTION(() => {
              this.SUBRULE(this.ifNotExists);
            });

            this.SUBRULE3(this.userAuthOption);

            this.MANY2(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE4(this.userAuthOption);
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.REQUIRE);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.NONE);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE(this.tlsOption);

                    this.MANY3(() => {
                      this.OPTION3(() => {
                        this.CONSUME(Tokens.AND);
                      });

                      this.SUBRULE2(this.tlsOption);
                    });
                  },
                },
              ]);
            });

            this.OPTION4(() => {
              this.CONSUME(Tokens.WITH);

              this.AT_LEAST_ONE(() => {
                this.SUBRULE(this.userResourceOption);
              });
            });

            this.MANY4(() => {
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE(this.userPasswordOption);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE(this.userLockOption);
                  },
                },
              ]);
            });
          },
        },
      ]);
    });

    this.RULE('dropUser', () => {
      this.CONSUME(Tokens.DROP);
      this.CONSUME(Tokens.USER);

      this.OPTION(() => {
        this.SUBRULE(this.ifExists);
      });

      this.SUBRULE(this.userName);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.userName);
      });
    });

    this.RULE('grantStatement', () => {
      this.CONSUME(Tokens.GRANT);
      this.SUBRULE(this.privelegeClause);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.privelegeClause);
      });

      this.CONSUME(Tokens.ON);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.TABLE);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.FUNCTION);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.PROCEDURE);
            },
          },
        ]);
      });

      this.SUBRULE(this.privilegeLevel);
      this.CONSUME(Tokens.TO);
      this.SUBRULE(this.userAuthOption);

      this.MANY2(() => {
        this.CONSUME2(Tokens.ADD);
        this.SUBRULE2(this.userAuthOption);
      });

      this.OPTION2(() => {
        this.CONSUME(Tokens.REQUIRE);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.NONE);
            },
          },
          {
            ALT: () => {
              this.SUBRULE(this.tlsOption);

              this.MANY3(() => {
                this.OPTION3(() => {
                  this.CONSUME(Tokens.AND);
                });

                this.SUBRULE2(this.tlsOption);
              });
            },
          },
        ]);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.WITH);

        this.MANY4(() => {
          this.OR([
            {
              ALT: () => {
                this.CONSUME2(Tokens.GRANT);
                this.CONSUME(Tokens.OPTION);
              },
            },
            {
              ALT: () => {
                this.SUBRULE(this.userResourceOption);
              },
            },
          ]);
        });
      });
    });

    this.RULE('grantProxy', () => {
      this.CONSUME(Tokens.GRANT);
      this.CONSUME(Tokens.PROXY);
      this.CONSUME(Tokens.ON);
      this.SUBRULE(this.userName);
      this.CONSUME(Tokens.TO);
      this.SUBRULE2(this.userName);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE3(this.userName);
      });

      this.OPTION(() => {
        this.CONSUME(Tokens.WITH);
        this.CONSUME2(Tokens.GRANT);
        this.CONSUME(Tokens.OPTION);
      });
    });

    this.RULE('renameUser', () => {
      this.CONSUME(Tokens.RENAME);
      this.CONSUME(Tokens.USER);
      this.SUBRULE(this.renameUserClause);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.renameUserClause);
      });
    });

    this.RULE('revokeStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REVOKE);
            this.SUBRULE(this.privelegeClause);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.privelegeClause);
            });

            this.CONSUME(Tokens.ON);

            this.OPTION(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.TABLE);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.FUNCTION);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.PROCEDURE);
                  },
                },
              ]);
            });

            this.SUBRULE(this.privilegeLevel);
            this.CONSUME(Tokens.FROM);
            this.SUBRULE(this.userName);

            this.MANY2(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.userName);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.REVOKE);
            this.CONSUME(Tokens.ALL);

            this.OPTION2(() => {
              this.CONSUME(Tokens.PRIVILEGES);
            });

            this.CONSUME3(Tokens.ADD);
            this.CONSUME(Tokens.GRANT);
            this.CONSUME(Tokens.OPTION);
            this.CONSUME2(Tokens.FROM);
            this.SUBRULE3(this.userName);

            this.MANY3(() => {
              this.CONSUME4(Tokens.ADD);
              this.SUBRULE4(this.userName);
            });
          },
        },
      ]);
    });

    this.RULE('revokeProxy', () => {
      this.CONSUME(Tokens.REVOKE);
      this.CONSUME(Tokens.PROXY);
      this.CONSUME(Tokens.ON);
      this.SUBRULE(this.userName);
      this.CONSUME(Tokens.FROM);
      this.SUBRULE2(this.userName);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE3(this.userName);
      });
    });

    this.RULE('setPasswordStatement', () => {
      this.CONSUME(Tokens.SET);
      this.CONSUME(Tokens.PASSWORD);

      this.OPTION(() => {
        this.CONSUME(Tokens.FOR);
        this.SUBRULE(this.userName);
      });

      this.CONSUME(Tokens.ADD);
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.passwordFunctionClause);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('userSpecification', () => {
      this.SUBRULE(this.userName);
      this.SUBRULE(this.userPasswordOption);
    });

    this.RULE('userAuthOption', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.userName);
            this.CONSUME(Tokens.IDENTIFIED);
            this.CONSUME(Tokens.BY);
            this.CONSUME(Tokens.PASSWORD);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.userName);
            this.CONSUME2(Tokens.IDENTIFIED);

            this.OPTION(() => {
              this.CONSUME(Tokens.WITH);
              this.SUBRULE(this.authPlugin);
            });

            this.CONSUME2(Tokens.BY);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.userName);
            this.CONSUME3(Tokens.IDENTIFIED);
            this.CONSUME2(Tokens.WITH);
            this.SUBRULE2(this.authPlugin);

            this.OPTION2(() => {
              this.CONSUME(Tokens.AS);
              this.CONSUME3(Tokens.STRING_LITERAL);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.userName);
          },
        },
      ]);
    });

    this.RULE('tlsOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.X509);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CIPHER);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSUER);
            this.CONSUME2(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBJECT);
            this.CONSUME3(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('userResourceOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
            this.SUBRULE2(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
            this.SUBRULE3(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
            this.SUBRULE4(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('userPasswordOption', () => {
      this.CONSUME(Tokens.PASSWORD);
      this.CONSUME(Tokens.EXPIRE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DEFAULT);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.NEVER);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.INTERVAL);
              this.SUBRULE(this.decimalLiteral);
              this.CONSUME(Tokens.DAY);
            },
          },
        ]);
      });
    });

    this.RULE('userLockOption', () => {
      this.CONSUME(Tokens.ACCOUNT);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNLOCK);
          },
        },
      ]);
    });

    this.RULE('privelegeClause', () => {
      this.SUBRULE(this.privilege);

      this.OPTION(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });
    });

    this.RULE('privilege', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);

            this.OPTION(() => {
              this.CONSUME(Tokens.PRIVILEGES);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);

            this.OPTION2(() => {
              this.CONSUME(Tokens.ROUTINE);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);

            this.OPTION3(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.TEMPORARY);
                    this.CONSUME(Tokens.TABLES);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.ROUTINE);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.VIEW);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.USER);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.TABLESPACE);
                  },
                },
              ]);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELETE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXECUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANT);
            this.CONSUME(Tokens.OPTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
            this.CONSUME2(Tokens.TABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROXY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REFERENCES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELOAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATION);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CLIENT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SLAVE);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.VIEW);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATABASES);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHUTDOWN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIGGER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USAGE);
          },
        },
      ]);
    });

    this.RULE('privilegeLevel', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.uid);
            this.CONSUME2(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.uid);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE3(this.uid);
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.uid);
          },
        },
      ]);
    });

    this.RULE('renameUserClause', () => {
      this.SUBRULE(this.userName);
      this.CONSUME(Tokens.TO);
      this.SUBRULE2(this.userName);
    });

    this.RULE('analyzeTable', () => {
      this.CONSUME(Tokens.ANALYZE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.NO_WRITE_TO_BINLOG);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LOCAL);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tables);
    });

    this.RULE('checkTable', () => {
      this.CONSUME(Tokens.CHECK);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tables);

      this.MANY(() => {
        this.SUBRULE(this.checkTableOption);
      });
    });

    this.RULE('checksumTable', () => {
      this.CONSUME(Tokens.CHECKSUM);
      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tables);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.QUICK);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.EXTENDED);
            },
          },
        ]);
      });
    });

    this.RULE('optimizeTable', () => {
      this.CONSUME(Tokens.OPTIMIZE);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.NO_WRITE_TO_BINLOG);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LOCAL);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tables);
    });

    this.RULE('repairTable', () => {
      this.CONSUME(Tokens.REPAIR);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.NO_WRITE_TO_BINLOG);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LOCAL);
            },
          },
        ]);
      });

      this.CONSUME(Tokens.TABLE);
      this.SUBRULE(this.tables);

      this.OPTION2(() => {
        this.CONSUME(Tokens.QUICK);
      });

      this.OPTION3(() => {
        this.CONSUME(Tokens.EXTENDED);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.USE_FRM);
      });
    });

    this.RULE('checkTableOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.CONSUME(Tokens.UPGRADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUICK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FAST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEDIUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTENDED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANGED);
          },
        },
      ]);
    });

    this.RULE('createUdfunction', () => {
      this.CONSUME(Tokens.CREATE);

      this.OPTION(() => {
        this.CONSUME(Tokens.AGGREGATE);
      });

      this.CONSUME(Tokens.FUNCTION);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.RETURNS);
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTEGER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL);
          },
        },
      ]);
      this.CONSUME(Tokens.SONAME);
      this.CONSUME(Tokens.STRING_LITERAL);
    });

    this.RULE('installPlugin', () => {
      this.CONSUME(Tokens.INSTALL);
      this.CONSUME(Tokens.PLUGIN);
      this.SUBRULE(this.uid);
      this.CONSUME(Tokens.SONAME);
      this.CONSUME(Tokens.STRING_LITERAL);
    });

    this.RULE('uninstallPlugin', () => {
      this.CONSUME(Tokens.UNINSTALL);
      this.CONSUME(Tokens.PLUGIN);
      this.SUBRULE(this.uid);
    });

    this.RULE('setStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
            this.SUBRULE(this.variableClause);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.variableClause);
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE2(this.expression);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SET);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARACTER);
                  this.CONSUME3(Tokens.SET);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHARSET);
                },
              },
            ]);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.charsetName);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.SET);
            this.CONSUME(Tokens.NAMES);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE2(this.charsetName);

                  this.OPTION(() => {
                    this.CONSUME(Tokens.COLLATE);
                    this.SUBRULE(this.collationName);
                  });
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.DEFAULT);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.setPasswordStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.setTransactionStatement);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.setAutocommitStatement);
          },
        },
      ]);
    });

    this.RULE('showStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BINARY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MASTER);
                },
              },
            ]);
            this.CONSUME(Tokens.LOGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BINLOG);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RELAYLOG);
                },
              },
            ]);
            this.CONSUME(Tokens.EVENTS);

            this.OPTION(() => {
              this.CONSUME(Tokens.IN);
              this.CONSUME(Tokens.STRING_LITERAL);
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.FROM);
              this.SUBRULE(this.decimalLiteral);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.LIMIT);

              this.OPTION4(() => {
                this.SUBRULE2(this.decimalLiteral);
                this.CONSUME(Tokens.ADD);
              });

              this.SUBRULE3(this.decimalLiteral);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.SHOW);
            this.SUBRULE(this.showCommonEntity);

            this.OPTION5(() => {
              this.SUBRULE(this.showFilter);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.SHOW);

            this.OPTION6(() => {
              this.CONSUME(Tokens.FULL);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.COLUMNS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FIELDS);
                },
              },
            ]);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.FROM);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.IN);
                },
              },
            ]);
            this.SUBRULE(this.tableName);

            this.OPTION7(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.FROM);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME3(Tokens.IN);
                  },
                },
              ]);
              this.SUBRULE(this.uid);
            });

            this.OPTION8(() => {
              this.SUBRULE2(this.showFilter);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.SHOW);
            this.CONSUME(Tokens.CREATE);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATABASE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SCHEMA);
                },
              },
            ]);

            this.OPTION9(() => {
              this.SUBRULE(this.ifNotExists);
            });

            this.SUBRULE2(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.SHOW);
            this.CONSUME2(Tokens.CREATE);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.EVENT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FUNCTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.PROCEDURE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TABLE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TRIGGER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VIEW);
                },
              },
            ]);
            this.SUBRULE(this.fullId);
          },
        },
        {
          ALT: () => {
            this.CONSUME7(Tokens.SHOW);
            this.CONSUME3(Tokens.CREATE);
            this.CONSUME(Tokens.USER);
            this.SUBRULE(this.userName);
          },
        },
        {
          ALT: () => {
            this.CONSUME8(Tokens.SHOW);
            this.CONSUME(Tokens.ENGINE);
            this.SUBRULE(this.engineName);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.STATUS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MUTEX);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME9(Tokens.SHOW);
            this.SUBRULE(this.showGlobalInfoClause);
          },
        },
        {
          ALT: () => {
            this.CONSUME10(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ERRORS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.WARNINGS);
                },
              },
            ]);
            this.CONSUME2(Tokens.LIMIT);

            this.OPTION10(() => {
              this.SUBRULE4(this.decimalLiteral);
              this.CONSUME2(Tokens.ADD);
            });

            this.SUBRULE5(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME11(Tokens.SHOW);
            this.CONSUME(Tokens.COUNT);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.ERRORS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.WARNINGS);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME12(Tokens.SHOW);
            this.SUBRULE(this.showSchemaEntity);

            this.OPTION11(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME4(Tokens.FROM);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME4(Tokens.IN);
                  },
                },
              ]);
              this.SUBRULE3(this.uid);
            });

            this.OPTION12(() => {
              this.SUBRULE3(this.showFilter);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME13(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME2(Tokens.FUNCTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.PROCEDURE);
                },
              },
            ]);
            this.CONSUME(Tokens.CODE);
            this.SUBRULE2(this.fullId);
          },
        },
        {
          ALT: () => {
            this.CONSUME14(Tokens.SHOW);
            this.CONSUME(Tokens.GRANTS);

            this.OPTION13(() => {
              this.CONSUME(Tokens.FOR);
              this.SUBRULE2(this.userName);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME15(Tokens.SHOW);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.INDEX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.INDEXES);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.KEYS);
                },
              },
            ]);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME5(Tokens.FROM);
                },
              },
              {
                ALT: () => {
                  this.CONSUME5(Tokens.IN);
                },
              },
            ]);
            this.SUBRULE2(this.tableName);

            this.OPTION14(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME6(Tokens.FROM);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME6(Tokens.IN);
                  },
                },
              ]);
              this.SUBRULE4(this.uid);
            });

            this.OPTION15(() => {
              this.CONSUME(Tokens.WHERE);
              this.SUBRULE(this.expression);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME16(Tokens.SHOW);
            this.CONSUME(Tokens.OPEN);
            this.CONSUME(Tokens.TABLES);

            this.OPTION16(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME7(Tokens.FROM);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME7(Tokens.IN);
                  },
                },
              ]);
              this.SUBRULE5(this.uid);
            });

            this.OPTION17(() => {
              this.SUBRULE4(this.showFilter);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME17(Tokens.SHOW);
            this.CONSUME(Tokens.PROFILE);
            this.SUBRULE(this.showProfileType);

            this.MANY(() => {
              this.CONSUME3(Tokens.ADD);
              this.SUBRULE2(this.showProfileType);
            });

            this.OPTION18(() => {
              this.CONSUME2(Tokens.FOR);
              this.CONSUME(Tokens.QUERY);
              this.SUBRULE6(this.decimalLiteral);
            });

            this.CONSUME3(Tokens.LIMIT);

            this.OPTION19(() => {
              this.SUBRULE7(this.decimalLiteral);
              this.CONSUME4(Tokens.ADD);
            });

            this.SUBRULE8(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME18(Tokens.SHOW);
            this.CONSUME(Tokens.SLAVE);
            this.CONSUME2(Tokens.STATUS);

            this.OPTION20(() => {
              this.CONSUME3(Tokens.FOR);
              this.CONSUME(Tokens.CHANNEL);
              this.CONSUME2(Tokens.STRING_LITERAL);
            });
          },
        },
      ]);
    });

    this.RULE('variableClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL_ID);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.OPTION2(() => {
                this.CONSUME(Tokens.ADD);
                this.CONSUME2(Tokens.ADD);
              });

              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.GLOBAL);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.SESSION);
                  },
                },
              ]);
            });

            this.SUBRULE(this.uid);
          },
        },
      ]);
    });

    this.RULE('showCommonEntity', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER);
            this.CONSUME(Tokens.SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMAS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
            this.CONSUME(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCEDURE);
            this.CONSUME2(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.GLOBAL);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.SESSION);
                  },
                },
              ]);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME3(Tokens.STATUS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VARIABLES);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('showFilter', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LIKE);
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WHERE);
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('showGlobalInfoClause', () => {
      this.OR([
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.STORAGE);
            });

            this.CONSUME(Tokens.ENGINES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
            this.CONSUME(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          },
        },
        {
          ALT: () => {
            this.OPTION2(() => {
              this.CONSUME(Tokens.FULL);
            });

            this.CONSUME(Tokens.PROCESSLIST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
            this.CONSUME(Tokens.HOSTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTHORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTRIBUTORS);
          },
        },
      ]);
    });

    this.RULE('showSchemaEntity', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLE);
            this.CONSUME(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.FULL);
            });

            this.CONSUME(Tokens.TABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIGGERS);
          },
        },
      ]);
    });

    this.RULE('showProfileType', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOCK);
            this.CONSUME(Tokens.IO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTEXT);
            this.CONSUME(Tokens.SWITCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CPU);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IPC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PAGE);
            this.CONSUME(Tokens.FAULTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOURCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWAPS);
          },
        },
      ]);
    });

    this.RULE('binlogStatement', () => {
      this.CONSUME(Tokens.BINLOG);
      this.CONSUME(Tokens.STRING_LITERAL);
    });

    this.RULE('cacheIndexStatement', () => {
      this.CONSUME(Tokens.CACHE);
      this.CONSUME(Tokens.INDEX);
      this.SUBRULE(this.tableIndexes);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.tableIndexes);
      });

      this.OPTION(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.uidList);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
        ]);
        this.CONSUME(Tokens.ADD);
      });

      this.CONSUME(Tokens.IN);
      this.SUBRULE(this.uid);
    });

    this.RULE('flushStatement', () => {
      this.CONSUME(Tokens.FLUSH);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.NO_WRITE_TO_BINLOG);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.LOCAL);
            },
          },
        ]);
      });

      this.SUBRULE(this.flushOption);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.flushOption);
      });
    });

    this.RULE('killStatement', () => {
      this.CONSUME(Tokens.KILL);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.CONNECTION);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.QUERY);
            },
          },
        ]);
      });

      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.decimalLiteral);
      });
    });

    this.RULE('loadIndexIntoCache', () => {
      this.CONSUME(Tokens.LOAD);
      this.CONSUME(Tokens.INDEX);
      this.CONSUME(Tokens.INTO);
      this.CONSUME(Tokens.CACHE);
      this.SUBRULE(this.loadedTableIndexes);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.loadedTableIndexes);
      });
    });

    this.RULE('resetStatement', () => {
      this.CONSUME(Tokens.RESET);
      this.CONSUME(Tokens.QUERY);
      this.CONSUME(Tokens.CACHE);
    });

    this.RULE('shutdownStatement', () => {
      this.CONSUME(Tokens.SHUTDOWN);
    });

    this.RULE('tableIndexes', () => {
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OPTION2(() => {
          this.OR([
            {
              ALT: () => {
                this.CONSUME(Tokens.INDEX);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.KEY);
              },
            },
          ]);
        });

        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.uidList);
        this.CONSUME(Tokens.ADD);
      });
    });

    this.RULE('flushOption', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DES_KEY_FILE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.HOSTS);
                },
              },
              {
                ALT: () => {
                  this.OPTION(() => {
                    this.OR([
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.BINARY);
                        },
                      },
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.ENGINE);
                        },
                      },
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.ERROR);
                        },
                      },
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.GENERAL);
                        },
                      },
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.RELAY);
                        },
                      },
                      {
                        ALT: () => {
                          this.CONSUME(Tokens.SLOW);
                        },
                      },
                    ]);
                  });

                  this.CONSUME(Tokens.LOGS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.OPTIMIZER_COSTS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.PRIVILEGES);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.QUERY);
                  this.CONSUME(Tokens.CACHE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STATUS);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.USER_RESOURCES);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TABLES);

                  this.OPTION2(() => {
                    this.CONSUME(Tokens.WITH);
                    this.CONSUME(Tokens.READ);
                    this.CONSUME(Tokens.LOCK);
                  });
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.RELAY);
            this.CONSUME2(Tokens.LOGS);

            this.OPTION3(() => {
              this.SUBRULE(this.channelOption);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.TABLES);
            this.SUBRULE(this.tables);

            this.OPTION4(() => {
              this.SUBRULE(this.flushTableOption);
            });
          },
        },
      ]);
    });

    this.RULE('flushTableOption', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
            this.CONSUME(Tokens.READ);
            this.CONSUME(Tokens.LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.CONSUME(Tokens.EXPORT);
          },
        },
      ]);
    });

    this.RULE('loadedTableIndexes', () => {
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.CONSUME(Tokens.PARTITION);
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.uidList);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ALL);
            },
          },
        ]);
        this.CONSUME(Tokens.ADD);
      });

      this.OPTION2(() => {
        this.OPTION3(() => {
          this.OR([
            {
              ALT: () => {
                this.CONSUME(Tokens.INDEX);
              },
            },
            {
              ALT: () => {
                this.CONSUME(Tokens.KEY);
              },
            },
          ]);
        });

        this.CONSUME2(Tokens.ADD);
        this.SUBRULE2(this.uidList);
        this.CONSUME2(Tokens.ADD);
      });

      this.OPTION4(() => {
        this.CONSUME(Tokens.IGNORE);
        this.CONSUME(Tokens.LEAVES);
      });
    });

    this.RULE('simpleDescribeStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPLAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESCRIBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESC);
          },
        },
      ]);
      this.SUBRULE(this.tableName);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.SUBRULE(this.uid);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.STRING_LITERAL);
            },
          },
        ]);
      });
    });

    this.RULE('fullDescribeStatement', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPLAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESCRIBE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESC);
          },
        },
      ]);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.EXTENDED);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.PARTITIONS);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.FORMAT);
            },
          },
        ]);
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.TRADITIONAL);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.JSON);
            },
          },
        ]);
      });

      this.SUBRULE(this.describeObjectClause);
    });

    this.RULE('helpStatement', () => {
      this.CONSUME(Tokens.HELP);
      this.CONSUME(Tokens.STRING_LITERAL);
    });

    this.RULE('useStatement', () => {
      this.CONSUME(Tokens.USE);
      this.SUBRULE(this.uid);
    });

    this.RULE('describeObjectClause', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.selectStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.deleteStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.insertStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.replaceStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.updateStatement);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.CONSUME(Tokens.CONNECTION);
            this.SUBRULE(this.uid);
          },
        },
      ]);
    });

    this.RULE('fullId', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.DOT_ID);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.uid);
            },
          },
        ]);
      });
    });

    this.RULE('tableName', () => {
      this.SUBRULE(this.fullId);
    });

    this.RULE('fullColumnName', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.SUBRULE(this.dottedId);

        this.OPTION2(() => {
          this.SUBRULE2(this.dottedId);
        });
      });
    });

    this.RULE('indexColumnName', () => {
      this.SUBRULE(this.uid);

      this.OPTION(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE(this.decimalLiteral);
        this.CONSUME(Tokens.ADD);
      });

      this.OPTION2(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
        ]);
      });
    });

    this.RULE('userName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_USER_NAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ID);
          },
        },
      ]);
    });

    this.RULE('mysqlVariable', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL_ID);
          },
        },
      ]);
    });

    this.RULE('charsetName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          },
        },
      ]);
    });

    this.RULE('collationName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('engineName', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARCHIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLACKHOLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CSV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FEDERATED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INNODB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MRG_MYISAM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MYISAM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NDB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NDBCLUSTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERFOMANCE_SCHEMA);
          },
        },
      ]);
    });

    this.RULE('uuidSet', () => {
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE2(this.decimalLiteral);
      this.CONSUME2(Tokens.ADD);
      this.SUBRULE3(this.decimalLiteral);
      this.CONSUME3(Tokens.ADD);
      this.SUBRULE4(this.decimalLiteral);
      this.CONSUME4(Tokens.ADD);
      this.SUBRULE5(this.decimalLiteral);

      this.AT_LEAST_ONE(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE6(this.decimalLiteral);
        this.CONSUME5(Tokens.ADD);
        this.SUBRULE7(this.decimalLiteral);
      });
    });

    this.RULE('xid', () => {
      this.SUBRULE(this.xuidStringId);

      this.OPTION(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.xuidStringId);

        this.OPTION2(() => {
          this.CONSUME2(Tokens.ADD);
          this.SUBRULE(this.decimalLiteral);
        });
      });
    });

    this.RULE('xuidStringId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_STRING);
          },
        },
        {
          ALT: () => {
            this.AT_LEAST_ONE(() => {
              this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
            });
          },
        },
      ]);
    });

    this.RULE('authPlugin', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          },
        },
      ]);
    });

    this.RULE('uid', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleId);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE_QUOTE_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          },
        },
      ]);
    });

    this.RULE('simpleId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ID);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.transactionLevelBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.engineName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.privilegesBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.dataTypeBase);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.keywordsCanBeId);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
          },
        },
      ]);
    });

    this.RULE('dottedId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.uid);
          },
        },
      ]);
    });

    this.RULE('decimalLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ZERO_DECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE_DECIMAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TWO_DECIMAL);
          },
        },
      ]);
    });

    this.RULE('fileSizeLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FILESIZE_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('stringLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.OPTION(() => {
                    this.CONSUME(Tokens.STRING_CHARSET_NAME);
                  });

                  this.CONSUME(Tokens.STRING_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
                },
              },
            ]);

            this.AT_LEAST_ONE(() => {
              this.CONSUME2(Tokens.STRING_LITERAL);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.OPTION2(() => {
                    this.CONSUME2(Tokens.STRING_CHARSET_NAME);
                  });

                  this.CONSUME3(Tokens.STRING_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.START_NATIONAL_STRING_LITERAL);
                },
              },
            ]);

            this.OPTION3(() => {
              this.CONSUME(Tokens.COLLATE);
              this.SUBRULE(this.collationName);
            });
          },
        },
      ]);
    });

    this.RULE('booleanLiteral', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FALSE);
          },
        },
      ]);
    });

    this.RULE('hexadecimalLiteral', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.STRING_CHARSET_NAME);
      });

      this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
    });

    this.RULE('nullNotnull', () => {
      this.OPTION(() => {
        this.CONSUME(Tokens.NOT);
      });

      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_SPEC_LITERAL);
          },
        },
      ]);
    });

    this.RULE('constant', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.hexadecimalLiteral);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.booleanLiteral);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REAL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_STRING);
          },
        },
        {
          ALT: () => {
            this.OPTION(() => {
              this.CONSUME(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NULL_LITERAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NULL_SPEC_LITERAL);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('dataType', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CHAR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VARCHAR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TINYTEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MEDIUMTEXT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LONGTEXT);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.lengthOneDimension);
            });

            this.OPTION2(() => {
              this.CONSUME(Tokens.BINARY);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.CHARACTER);
              this.CONSUME(Tokens.SET);
              this.SUBRULE(this.charsetName);
            });

            this.OPTION4(() => {
              this.CONSUME(Tokens.COLLATE);
              this.SUBRULE(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.TINYINT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SMALLINT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MEDIUMINT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.INT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.INTEGER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIGINT);
                },
              },
            ]);

            this.OPTION5(() => {
              this.SUBRULE2(this.lengthOneDimension);
            });

            this.OPTION6(() => {
              this.CONSUME(Tokens.UNSIGNED);
            });

            this.OPTION7(() => {
              this.CONSUME(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.REAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DOUBLE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FLOAT);
                },
              },
            ]);

            this.OPTION8(() => {
              this.SUBRULE(this.lengthTwoDimension);
            });

            this.OPTION9(() => {
              this.CONSUME2(Tokens.UNSIGNED);
            });

            this.OPTION10(() => {
              this.CONSUME2(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DECIMAL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NUMERIC);
                },
              },
            ]);

            this.OPTION11(() => {
              this.SUBRULE(this.lengthTwoOptionalDimension);
            });

            this.OPTION12(() => {
              this.CONSUME3(Tokens.UNSIGNED);
            });

            this.OPTION13(() => {
              this.CONSUME3(Tokens.ZEROFILL);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TINYBLOB);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BLOB);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MEDIUMBLOB);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LONGBLOB);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BOOL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BOOLEAN);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIMESTAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATETIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.BINARY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VARBINARY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.YEAR);
                },
              },
            ]);

            this.OPTION14(() => {
              this.SUBRULE3(this.lengthOneDimension);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ENUM);
                },
              },
              {
                ALT: () => {
                  this.CONSUME2(Tokens.SET);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);
            this.CONSUME(Tokens.STRING_LITERAL);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.CONSUME2(Tokens.STRING_LITERAL);
            });

            this.CONSUME(Tokens.ADD);

            this.OPTION15(() => {
              this.CONSUME3(Tokens.BINARY);
            });

            this.OPTION16(() => {
              this.CONSUME2(Tokens.CHARACTER);
              this.CONSUME3(Tokens.SET);
              this.SUBRULE2(this.charsetName);
            });

            this.OPTION17(() => {
              this.CONSUME2(Tokens.COLLATE);
              this.SUBRULE2(this.collationName);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.GEOMETRYCOLLECTION);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LINESTRING);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MULTILINESTRING);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MULTIPOINT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MULTIPOLYGON);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.POINT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.POLYGON);
                },
              },
            ]);
          },
        },
      ]);
    });

    this.RULE('convertedDataType', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BINARY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.NCHAR);
                },
              },
            ]);

            this.OPTION(() => {
              this.SUBRULE(this.lengthOneDimension);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);

            this.OPTION2(() => {
              this.SUBRULE2(this.lengthOneDimension);
            });

            this.OPTION3(() => {
              this.CONSUME(Tokens.CHARACTER);
              this.CONSUME(Tokens.SET);
              this.SUBRULE(this.charsetName);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATETIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIME);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL);

            this.OPTION4(() => {
              this.SUBRULE(this.lengthTwoDimension);
            });
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SIGNED);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.UNSIGNED);
                },
              },
            ]);

            this.OPTION5(() => {
              this.CONSUME(Tokens.INTEGER);
            });
          },
        },
      ]);
    });

    this.RULE('lengthOneDimension', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('lengthTwoDimension', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE2(this.decimalLiteral);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('lengthTwoOptionalDimension', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.decimalLiteral);

      this.OPTION(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.decimalLiteral);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('uidList', () => {
      this.SUBRULE(this.uid);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.uid);
      });
    });

    this.RULE('tables', () => {
      this.SUBRULE(this.tableName);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.tableName);
      });
    });

    this.RULE('indexColumnNames', () => {
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.indexColumnName);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.indexColumnName);
      });

      this.CONSUME(Tokens.ADD);
    });

    this.RULE('expressions', () => {
      this.SUBRULE(this.expression);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.expression);
      });
    });

    this.RULE('expressionsWithDefaults', () => {
      this.SUBRULE(this.expressionOrDefault);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.expressionOrDefault);
      });
    });

    this.RULE('constants', () => {
      this.SUBRULE(this.constant);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.SUBRULE2(this.constant);
      });
    });

    this.RULE('simpleStrings', () => {
      this.CONSUME(Tokens.STRING_LITERAL);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.CONSUME2(Tokens.STRING_LITERAL);
      });
    });

    this.RULE('userVariables', () => {
      this.CONSUME(Tokens.LOCAL_ID);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.CONSUME2(Tokens.LOCAL_ID);
      });
    });

    this.RULE('defaultValue', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_LITERAL);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);

            this.OPTION(() => {
              this.CONSUME(Tokens.ON);
              this.CONSUME(Tokens.UPDATE);
              this.CONSUME(Tokens.LOCALTIMESTAMP);
            });
          },
        },
      ]);
    });

    this.RULE('expressionOrDefault', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          },
        },
      ]);
    });

    this.RULE('ifExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.EXISTS);
    });

    this.RULE('ifNotExists', () => {
      this.CONSUME(Tokens.IF);
      this.CONSUME(Tokens.NOT);
      this.CONSUME(Tokens.EXISTS);
    });

    this.RULE('functionCall', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.specificFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.aggregateWindowedFunction);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.scalarFunctionName);
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.SUBRULE(this.functionArgs);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
            this.CONSUME2(Tokens.ADD);

            this.OPTION2(() => {
              this.SUBRULE2(this.functionArgs);
            });

            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.passwordFunctionClause);
          },
        },
      ]);
    });

    this.RULE('specificFunction', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_TIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.CURRENT_USER);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LOCALTIME);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.convertedDataType);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CONVERT);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.expression);
            this.CONSUME(Tokens.USING);
            this.SUBRULE(this.charsetName);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CAST);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE3(this.expression);
            this.CONSUME(Tokens.AS);
            this.SUBRULE2(this.convertedDataType);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUES);
            this.CONSUME4(Tokens.ADD);
            this.SUBRULE(this.fullColumnName);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);
            this.SUBRULE4(this.expression);

            this.AT_LEAST_ONE(() => {
              this.SUBRULE(this.caseFuncAlternative);
            });

            this.OPTION(() => {
              this.CONSUME(Tokens.ELSE);
              this.SUBRULE(this.functionArg);
            });

            this.CONSUME(Tokens.END);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CASE);

            this.AT_LEAST_ONE2(() => {
              this.SUBRULE2(this.caseFuncAlternative);
            });

            this.OPTION2(() => {
              this.CONSUME2(Tokens.ELSE);
              this.SUBRULE2(this.functionArg);
            });

            this.CONSUME2(Tokens.END);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);
            this.CONSUME5(Tokens.ADD);
            this.SUBRULE(this.functionArgs);

            this.OPTION3(() => {
              this.CONSUME2(Tokens.USING);
              this.SUBRULE2(this.charsetName);
            });

            this.CONSUME5(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
            this.CONSUME6(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE5(this.expression);
                },
              },
            ]);
            this.CONSUME(Tokens.IN);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE2(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE6(this.expression);
                },
              },
            ]);
            this.CONSUME6(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUBSTR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUBSTRING);
                },
              },
            ]);
            this.CONSUME7(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE3(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE7(this.expression);
                },
              },
            ]);
            this.CONSUME(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.decimalLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE8(this.expression);
                },
              },
            ]);

            this.OPTION4(() => {
              this.CONSUME(Tokens.FOR);
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE2(this.decimalLiteral);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE9(this.expression);
                  },
                },
              ]);
            });

            this.CONSUME7(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
            this.CONSUME8(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BOTH);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.LEADING);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TRAILING);
                },
              },
            ]);

            this.OPTION5(() => {
              this.OR([
                {
                  ALT: () => {
                    this.SUBRULE4(this.stringLiteral);
                  },
                },
                {
                  ALT: () => {
                    this.SUBRULE10(this.expression);
                  },
                },
              ]);
            });

            this.CONSUME2(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE5(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE11(this.expression);
                },
              },
            ]);
            this.CONSUME8(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.TRIM);
            this.CONSUME9(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE6(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE12(this.expression);
                },
              },
            ]);
            this.CONSUME3(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE7(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE13(this.expression);
                },
              },
            ]);
            this.CONSUME9(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
            this.CONSUME10(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE8(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE14(this.expression);
                },
              },
            ]);

            this.OPTION6(() => {
              this.CONSUME2(Tokens.AS);
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME2(Tokens.CHAR);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.BINARY);
                  },
                },
              ]);
              this.CONSUME11(Tokens.ADD);
              this.SUBRULE3(this.decimalLiteral);
              this.CONSUME10(Tokens.ADD);
            });

            this.OPTION7(() => {
              this.SUBRULE(this.levelsInWeightString);
            });

            this.CONSUME11(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACT);
            this.CONSUME12(Tokens.ADD);
            this.SUBRULE(this.intervalType);
            this.CONSUME4(Tokens.FROM);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE9(this.stringLiteral);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE15(this.expression);
                },
              },
            ]);
            this.CONSUME12(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
            this.CONSUME13(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.TIME);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.DATETIME);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE10(this.stringLiteral);
            this.CONSUME13(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('caseFuncAlternative', () => {
      this.CONSUME(Tokens.WHEN);
      this.SUBRULE(this.functionArg);
      this.CONSUME(Tokens.THEN);
      this.SUBRULE2(this.functionArg);
    });

    this.RULE('levelsInWeightString', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
            this.SUBRULE(this.levelInWeightListElement);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.levelInWeightListElement);
            });
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.LEVEL);
            this.SUBRULE(this.decimalLiteral);
            this.CONSUME(Tokens.ADD);
            this.SUBRULE2(this.decimalLiteral);
          },
        },
      ]);
    });

    this.RULE('levelInWeightListElement', () => {
      this.SUBRULE(this.decimalLiteral);

      this.OPTION(() => {
        this.OR([
          {
            ALT: () => {
              this.CONSUME(Tokens.ASC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.DESC);
            },
          },
          {
            ALT: () => {
              this.CONSUME(Tokens.REVERSE);
            },
          },
        ]);
      });
    });

    this.RULE('aggregateWindowedFunction', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.AVG);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MAX);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.MIN);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SUM);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);

            this.OPTION(() => {
              this.OR([
                {
                  ALT: () => {
                    this.CONSUME(Tokens.ALL);
                  },
                },
                {
                  ALT: () => {
                    this.CONSUME(Tokens.DISTINCT);
                  },
                },
              ]);
            });

            this.SUBRULE(this.functionArg);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
            this.CONSUME2(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
              {
                ALT: () => {
                  this.OPTION2(() => {
                    this.CONSUME2(Tokens.ALL);
                  });

                  this.SUBRULE2(this.functionArg);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.COUNT);
            this.CONSUME3(Tokens.ADD);
            this.CONSUME2(Tokens.DISTINCT);
            this.SUBRULE(this.functionArgs);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_AND);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_OR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.BIT_XOR);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STD);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV_POP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.STDDEV_SAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VAR_POP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VAR_SAMP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.VARIANCE);
                },
              },
            ]);
            this.CONSUME4(Tokens.ADD);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.ALL);
            });

            this.SUBRULE3(this.functionArg);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_CONCAT);
            this.CONSUME5(Tokens.ADD);

            this.OPTION4(() => {
              this.CONSUME3(Tokens.DISTINCT);
            });

            this.SUBRULE2(this.functionArgs);

            this.OPTION5(() => {
              this.CONSUME(Tokens.ORDER);
              this.CONSUME(Tokens.BY);
              this.SUBRULE(this.orderByExpression);

              this.MANY(() => {
                this.CONSUME(Tokens.ADD);
                this.SUBRULE2(this.orderByExpression);
              });
            });

            this.OPTION6(() => {
              this.CONSUME(Tokens.SEPARATOR);
              this.CONSUME(Tokens.STRING_LITERAL);
            });

            this.CONSUME5(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('scalarFunctionName', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CURTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_SUB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIMESTAMP);
          },
        },
      ]);
    });

    this.RULE('passwordFunctionClause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OLD_PASSWORD);
          },
        },
      ]);
      this.CONSUME(Tokens.ADD);
      this.SUBRULE(this.functionArg);
      this.CONSUME(Tokens.ADD);
    });

    this.RULE('functionArgs', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);

      this.MANY(() => {
        this.CONSUME(Tokens.ADD);
        this.OR([
          {
            ALT: () => {
              this.SUBRULE2(this.constant);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.fullColumnName);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.functionCall);
            },
          },
          {
            ALT: () => {
              this.SUBRULE2(this.expression);
            },
          },
        ]);
      });
    });

    this.RULE('functionArg', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.RULE('expression', () => {
      this.OR([
        {
          ALT: () => {
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.NOT);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ADD);
                },
              },
            ]);
            this.SUBRULE(this.expression);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.expression);
            this.SUBRULE(this.logicalOperator);
            this.SUBRULE3(this.expression);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
            this.CONSUME(Tokens.IS);

            this.OPTION(() => {
              this.CONSUME2(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.TRUE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.FALSE);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.UNKNOWN);
                },
              },
            ]);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.predicate);
          },
        },
      ]);
    });

    this.RULE('predicate', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.predicate);

            this.OPTION(() => {
              this.CONSUME(Tokens.NOT);
            });

            this.CONSUME(Tokens.IN);
            this.CONSUME(Tokens.ADD);
            this.OR([
              {
                ALT: () => {
                  this.SUBRULE(this.selectStatement);
                },
              },
              {
                ALT: () => {
                  this.SUBRULE(this.expressions);
                },
              },
            ]);
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.predicate);
            this.CONSUME(Tokens.IS);
            this.SUBRULE(this.nullNotnull);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.predicate);
            this.SUBRULE(this.comparisonOperator);
            this.SUBRULE4(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE5(this.predicate);
            this.SUBRULE2(this.comparisonOperator);
            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.ALL);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.ANY);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.SOME);
                },
              },
            ]);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE2(this.selectStatement);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.SUBRULE6(this.predicate);

            this.OPTION2(() => {
              this.CONSUME2(Tokens.NOT);
            });

            this.CONSUME(Tokens.BETWEEN);
            this.SUBRULE7(this.predicate);
            this.CONSUME(Tokens.AND);
            this.SUBRULE8(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE9(this.predicate);
            this.CONSUME(Tokens.SOUNDS);
            this.CONSUME(Tokens.LIKE);
            this.SUBRULE10(this.predicate);
          },
        },
        {
          ALT: () => {
            this.SUBRULE11(this.predicate);

            this.OPTION3(() => {
              this.CONSUME3(Tokens.NOT);
            });

            this.CONSUME2(Tokens.LIKE);
            this.SUBRULE12(this.predicate);

            this.OPTION4(() => {
              this.CONSUME(Tokens.ESCAPE);
              this.CONSUME(Tokens.STRING_LITERAL);
            });
          },
        },
        {
          ALT: () => {
            this.SUBRULE13(this.predicate);

            this.OPTION5(() => {
              this.CONSUME4(Tokens.NOT);
            });

            this.OR([
              {
                ALT: () => {
                  this.CONSUME(Tokens.REGEXP);
                },
              },
              {
                ALT: () => {
                  this.CONSUME(Tokens.RLIKE);
                },
              },
            ]);
            this.SUBRULE14(this.predicate);
          },
        },
        {
          ALT: () => {
            this.OPTION6(() => {
              this.CONSUME(Tokens.LOCAL_ID);
              this.CONSUME(Tokens.VAR_ASSIGN);
            });

            this.SUBRULE(this.expressionAtom);
          },
        },
      ]);
    });

    this.RULE('expressionAtom', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expressionAtom);
            this.CONSUME(Tokens.COLLATE);
            this.SUBRULE(this.collationName);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.mysqlVariable);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.unaryOperator);
            this.SUBRULE2(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
            this.SUBRULE3(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.SUBRULE(this.expression);

            this.MANY(() => {
              this.CONSUME(Tokens.ADD);
              this.SUBRULE2(this.expression);
            });

            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
            this.CONSUME2(Tokens.ADD);
            this.SUBRULE3(this.expression);

            this.AT_LEAST_ONE(() => {
              this.CONSUME2(Tokens.ADD);
              this.SUBRULE4(this.expression);
            });

            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXISTS);
            this.CONSUME3(Tokens.ADD);
            this.SUBRULE(this.selectStatement);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.ADD);
            this.SUBRULE2(this.selectStatement);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERVAL);
            this.SUBRULE5(this.expression);
            this.SUBRULE(this.intervalType);
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.expressionAtom);
            this.SUBRULE(this.bitOperator);
            this.SUBRULE5(this.expressionAtom);
          },
        },
        {
          ALT: () => {
            this.SUBRULE6(this.expressionAtom);
            this.SUBRULE(this.mathOperator);
            this.SUBRULE7(this.expressionAtom);
          },
        },
      ]);
    });

    this.RULE('unaryOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
          },
        },
      ]);
    });

    this.RULE('comparisonOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ADD);
            this.CONSUME3(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.ADD);
            this.CONSUME5(Tokens.ADD);
            this.CONSUME4(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('logicalOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.AND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('bitOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
            this.CONSUME2(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('mathOperator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
          },
        },
      ]);
    });

    this.RULE('charsetNameBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARMSCII8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIG5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1250);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1251);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1256);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1257);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP850);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP852);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP866);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CP932);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEC8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCJPMS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCKR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GB2312);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GBK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOSTD8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HEBREW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HP8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEYBCS2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8R);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8U);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN1);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN7);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MACCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MACROMAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SJIS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWE7);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIS620);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UCS2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UJIS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16LE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF32);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB3);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB4);
          },
        },
      ]);
    });

    this.RULE('transactionLevelBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPEATABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMMITTED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERIALIZABLE);
          },
        },
      ]);
    });

    this.RULE('privilegesBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUTINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXECUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELOAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHUTDOWN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          },
        },
      ]);
    });

    this.RULE('intervalTypeBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          },
        },
      ]);
    });

    this.RULE('dataTypeBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEXT);
          },
        },
      ]);
    });

    this.RULE('keywordsCanBeId', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ACCOUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ACTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AGGREGATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ANY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTHORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOCOMMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOEXTEND_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BEGIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BINLOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOLEAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BTREE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANNEL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CIPHER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CLIENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COALESCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPACT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPLETION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCURRENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONSISTENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTRIBUTORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COPY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CPU);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATAFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEALLOCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT_AUTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFINER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIRECTORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DUMPFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DUPLICATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DYNAMIC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ERROR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ERRORS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EVERY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCHANGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLUSIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPIRE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTENT_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FAULTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE_BLOCK_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FILTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIXED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOLLOWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_REPLICATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HASH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IDENTIFIED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE_SERVER_IDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEXES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INITIAL_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INPLACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTANCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INVOKER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IO_THREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IPC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISOLATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSUER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LANGUAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAVES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LIST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_AUTO_POSITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_DELAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HOST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_POS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_RETRY_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CAPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CERT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CIPHER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_TLS_VERSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MERGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIGRATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MUTEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MYSQL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAMES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NCHAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NEVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NODEGROUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OJ);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OLD_PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLINE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZER_COSTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OWNER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARSER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTIAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PHASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGIN_DIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRECEDES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PREPARE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PRESERVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PREV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESSLIST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PROXY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUERY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUICK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RECOVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REDO_BUFFER_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REDUNDANT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAYLOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_POS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REMOVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REORGANIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RESUME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RETURNS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLBACK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLUP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROTATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SAVEPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEDULE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECURITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SERVER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGNED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SNAPSHOT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOCKET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOURCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CACHE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_NO_CACHE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.START);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STATUS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STOP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBJECT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITIONS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUSPEND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SWITCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPORARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPTABLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.THAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRANSACTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDEFINED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDOFILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNKNOWN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPGRADE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VARIABLES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WARNINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHOUT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WORK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WRAPPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.X509);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.XML);
          },
        },
      ]);
    });

    this.RULE('functionNameBase', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ABS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ACOS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.AREA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DERIVE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_SIGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_VERIFY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BENCHMARK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.BUFFER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CEIL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CEILING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CENTROID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COERCIBILITY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLATION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT_WS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONV);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT_TZ);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CRC32);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DH_PARAMETERS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DIGEST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.CROSSES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATEDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYNAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFMONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFWEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFYEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DECODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DEGREES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_DECRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DIMENSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ELT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCODE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ENVELOPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EQUALS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPORT_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACTVALUE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FIND_IN_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FLOOR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FOUND_ROWS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_BASE64);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_DAYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_UNIXTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GLENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GREATEST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBSET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBTRACT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IFNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_ATON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_NTOA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_ATON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_NTOA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERIORRINGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISCLOSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISEMPTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISNULL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_FREE_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_COMPAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_MAPPED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV6);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_USED_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST_INSERT_ID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LCASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOAD_FILE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG10);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LOWER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LTRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKEDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKETIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKE_SET);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_POS_WAIT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRCONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRDISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBREQUAL);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRINTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBROVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRTOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRWITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MD5);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTHNAME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME_CONST);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NULLIF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMGEOMETRIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMINTERIORRINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMPOINTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OCT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OCTET_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ORD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.OVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_ADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_DIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PI);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGON);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POW);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.POWER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.QUOTE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RADIANS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RAND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RANDOM_BYTES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RELEASE_LOCK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_COUNT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RPAD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RTRIM);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEC_TO_TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA1);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA2);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SLEEP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SQRT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SRID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STRCMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.STR_TO_DATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_AREA);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASBINARY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_BUFFER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CENTROID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CONTAINS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CROSSES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIFFERENCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIMENSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISJOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISTANCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENDPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENVELOPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EQUALS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EXTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYTYPE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERIORRINGN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISCLOSED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISEMPTY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISSIMPLE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMGEOMETRIES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRINGS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMPOINTS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_OVERLAPS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMTEXT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMWKB);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SRID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_STARTPOINT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SYMDIFFERENCE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_TOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_UNION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_WITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_X);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_Y);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBDATE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING_INDEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBTIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSTEM_USER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TAN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMEDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPADD);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPDIFF);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_FORMAT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_TO_SEC);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TOUCHES);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_BASE64);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_DAYS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_SECONDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UCASE);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESSED_LENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNHEX);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIX_TIMESTAMP);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATEXML);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UPPER);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID_SHORT);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATE_PASSWORD_STRENGTH);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.VERSION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKDAY);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKOFYEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHIN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.YEARWEEK);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Y_FUNCTION);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.X_FUNCTION);
          },
        },
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
