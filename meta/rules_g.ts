
  import * as chevrotain from 'chevrotain';
  import { tokens, Lexer, Tokens } from './MetaLexer';
  
  export class MetaParser extends chevrotain.Parser {
    constructor(input) {
      super(input, tokens, {
        recoveryEnabled: true,
        outputCst: true
      });
      
      this.RULE('root', () => {
        
        this.OPTION(() => {
          this.SUBRULE(this.sqlStatements);
        });
      

        
        this.OPTION(() => {
          this.CONSUME(Tokens.MINUSMINUS);
        });
      
this.CONSUME(Tokens.EOF);
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
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.emptyStatement);
          }
        }
      ])
        });
      
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.sqlStatement);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.MINUSMINUS);
        });
      
this.CONSUME(Tokens.SEMI);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.emptyStatement);
          }
        }
      ])
      });
    

      this.RULE('sqlStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.ddlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dmlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.transactionStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.replicationStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.preparedStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.administrationStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.utilityStatement);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createIndex);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createTablespaceInnodb);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createTablespaceNdb);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createTrigger);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterDatabase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterInstance);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterTablespace);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.alterView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropDatabase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropIndex);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropTablespace);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropTrigger);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.renameTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.truncateTable);
          }
        }
      ]);
      });
    

      this.RULE('dmlStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.updateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.deleteStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.replaceStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.callStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.loadDataStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.loadXmlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.doStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.handlerStatement);
          }
        }
      ]);
      });
    

      this.RULE('transactionStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.startTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.beginWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.commitWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.rollbackWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.savepointStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.rollbackStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.releaseStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.lockTables);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.unlockTables);
          }
        }
      ]);
      });
    

      this.RULE('replicationStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.changeMaster);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.changeReplicationFilter);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.purgeBinaryLogs);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.resetMaster);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.resetSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.startSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.stopSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.startGroupReplication);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.stopGroupReplication);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaStartTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaEndTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaPrepareStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaCommitWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaRollbackWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.xaRecoverWork);
          }
        }
      ]);
      });
    

      this.RULE('preparedStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.prepareStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.executeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.deallocatePrepare);
          }
        }
      ]);
      });
    

      this.RULE('compoundStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.blockStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.caseStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.ifStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.leaveStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.loopStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.repeatStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.whileStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.iterateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.returnStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.cursorStatement);
          }
        }
      ]);
      });
    

      this.RULE('administrationStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.alterUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dropUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.grantStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.grantProxy);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.renameUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.revokeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.revokeProxy);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.analyzeTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.checkTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.checksumTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.optimizeTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.repairTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.createUdfunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.installPlugin);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.uninstallPlugin);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.setStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.showStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.binlogStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.cacheIndexStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.flushStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.killStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.loadIndexIntoCache);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.resetStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.shutdownStatement);
          }
        }
      ]);
      });
    

      this.RULE('utilityStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleDescribeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullDescribeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.helpStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.useStatement);
          }
        }
      ]);
      });
    

      this.RULE('createDatabase', () => {
        this.CONSUME(Tokens.CREATE);
this.SUBRULE(this.dbFormat);

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

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.fullId);
this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.SCHEDULE);
this.SUBRULE(this.scheduleExpression);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.COMPLETION);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.CONSUME(Tokens.PRESERVE);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.enableType);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COMMENT);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
this.CONSUME(Tokens.DO);
this.SUBRULE(this.routineBody);
      });
    

      this.RULE('createIndex', () => {
        this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULE(this.intimeAction);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexCategory);
        });
      
this.CONSUME(Tokens.INDEX);
this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.CONSUME(Tokens.ON);
this.SUBRULE(this.tableName);
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.algType);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.lockType);
          }
        }
      ])
        });
      
      });
    

      this.RULE('createLogfileGroup', () => {
        this.CONSUME(Tokens.CREATE);
this.CONSUME(Tokens.LOGFILE);
this.CONSUME(Tokens.GROUP);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.ADD);
this.CONSUME(Tokens.UNDOFILE);
this.SUBRULE(this.undoFile);

        this.OPTION(() => {
          this.CONSUME(Tokens.INITIAL_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.initSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNDO_BUFFER_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.undoSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.REDO_BUFFER_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.redoSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.NODEGROUP);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WAIT);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.comment);
        });
      
this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
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
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.procedureParameter);
        });
      

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.procedureParameter);
        });
      
this.CONSUME(Tokens.OP);

        this.MANY(() => {
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
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.functionParameter);
        });
      

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.functionParameter);
        });
      
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.RETURNS);
this.SUBRULE(this.dataType);

        this.MANY(() => {
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
this.SUBRULE(this.wrapperName);
this.CONSUME(Tokens.OPTIONS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.serverOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.serverOption);
        });
      
this.CONSUME(Tokens.OP);
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

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.tableName);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LIKE);
this.SUBRULE(this.tableName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.LIKE);
this.SUBRULE(this.parenthesisTable);
this.CONSUME(Tokens.OP);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.TEMPORARY);
        });
      
this.CONSUME(Tokens.TABLE);

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.SUBRULE(this.createDefinitions);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.tableOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.tableOption);
        });
      
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.partitionDefinitions);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.keyViolate);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.TEMPORARY);
        });
      
this.CONSUME(Tokens.TABLE);

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.tableName);
this.SUBRULE(this.createDefinitions);

        this.OPTION(() => {
          this.SUBRULE(this.tableOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.tableOption);
        });
      
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.partitionDefinitions);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('createTablespaceInnodb', () => {
        this.CONSUME(Tokens.CREATE);
this.CONSUME(Tokens.TABLESPACE);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.ADD);
this.CONSUME(Tokens.DATAFILE);
this.SUBRULE(this.datafile);

        this.OPTION(() => {
          this.CONSUME(Tokens.FILE_BLOCK_SIZE);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.fileBlockSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
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
this.SUBRULE(this.datafile);
this.CONSUME(Tokens.USE);
this.CONSUME(Tokens.LOGFILE);
this.CONSUME(Tokens.GROUP);
this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.CONSUME(Tokens.EXTENT_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.extentSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.INITIAL_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.initialSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.AUTOEXTEND_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.autoextendSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.MAX_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.maxSize);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.NODEGROUP);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WAIT);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.comment);
        });
      
this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.engineName);
      });
    

      this.RULE('createTrigger', () => {
        this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULE(this.ownerStatement);
        });
      
this.CONSUME(Tokens.TRIGGER);
this.SUBRULE(this.thisTrigger);
this.SUBRULE(this.triggerTime);
this.SUBRULE(this.triggerEvent);
this.CONSUME(Tokens.ON);
this.SUBRULE(this.tableName);
this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.EACH);
this.CONSUME(Tokens.ROW);

        this.OPTION(() => {
          this.SUBRULE(this.triggerPlace);
this.SUBRULE(this.otherTrigger);
        });
      
this.SUBRULE(this.routineBody);
      });
    

      this.RULE('createView', () => {
        this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OR);
this.CONSUME(Tokens.REPLACE);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ALGORITHM);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.algType);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.ownerStatement);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SQL);
this.CONSUME(Tokens.SECURITY);
this.SUBRULE(this.secContext);
        });
      
this.CONSUME(Tokens.VIEW);
this.SUBRULE(this.fullId);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.AS);
this.SUBRULE(this.selectStatement);

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);

        this.OPTION(() => {
          this.SUBRULE(this.checkOption);
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

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.charsetName);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.DEFAULT);
        });
      
this.CONSUME(Tokens.COLLATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.collationName);
          }
        }
      ]);
      });
    

      this.RULE('ownerStatement', () => {
        this.CONSUME(Tokens.DEFINER);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.userName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_USER);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      
          }
        }
      ])
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
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVERY);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])
this.SUBRULE(this.intervalType);

        this.OPTION(() => {
          this.CONSUME(Tokens.STARTS);
this.SUBRULE(this.start);

        this.MANY(() => {
          this.SUBRULE(this.startIntervals);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ENDS);
this.SUBRULE(this.end);

        this.MANY(() => {
          this.SUBRULE(this.endIntervals);
        });
      
        });
      
          }
        }
      ]);
      });
    

      this.RULE('timestampValue', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ]);
      });
    

      this.RULE('intervalExpr', () => {
        this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.INTERVAL);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])
this.SUBRULE(this.intervalType);
      });
    

      this.RULE('intervalType', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR_MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY_MICROSECOND);
          }
        }
      ]);
      });
    

      this.RULE('enableType', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.SLAVE);
          }
        }
      ]);
      });
    

      this.RULE('indexType', () => {
        this.CONSUME(Tokens.USING);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BTREE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HASH);
          }
        }
      ])
      });
    

      this.RULE('indexOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.fileSizeLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.indexType);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.PARSER);
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ]);
      });
    

      this.RULE('procedureParameter', () => {
        this.SUBRULE(this.direction);
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LANGUAGE);
this.CONSUME(Tokens.SQL);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.CONSUME(Tokens.DETERMINISTIC);
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTAINS);
this.CONSUME(Tokens.SQL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
this.CONSUME(Tokens.SQL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READS);
this.CONSUME(Tokens.SQL);
this.CONSUME(Tokens.DATA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFIES);
this.CONSUME(Tokens.SQL);
this.CONSUME(Tokens.DATA);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL);
this.CONSUME(Tokens.SECURITY);
this.SUBRULE(this.context);
          }
        }
      ]);
      });
    

      this.RULE('serverOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.HOST);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASE);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOCKET);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OWNER);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PORT);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ]);
      });
    

      this.RULE('createDefinitions', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.createDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.createDefinition);
        });
      
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('createDefinition', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
this.SUBRULE(this.columnDefinition);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.tableConstraint);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.indexColumnDefinition);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
this.SUBRULE(this.defaultValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.PRIMARY);
        });
      
this.CONSUME(Tokens.KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIQUE);

        this.OPTION(() => {
          this.CONSUME(Tokens.KEY);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
this.SUBRULE(this.colformat);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
this.SUBRULE(this.storageval);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.referenceDefinition);
          }
        }
      ]);
      });
    

      this.RULE('tableConstraint', () => {
        this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.PRIMARY);
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.UNIQUE);

        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.index);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.FOREIGN);
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.SUBRULE(this.index);
        });
      
this.SUBRULE(this.indexColumnNames);
this.SUBRULE(this.referenceDefinition);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECK);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('referenceDefinition', () => {
        this.CONSUME(Tokens.REFERENCES);
this.SUBRULE(this.tableName);
this.SUBRULE(this.indexColumnNames);

        this.OPTION(() => {
          this.CONSUME(Tokens.MATCH);
this.SUBRULE(this.matchType);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.referenceAction);
        });
      
      });
    

      this.RULE('referenceAction', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.DELETE);
this.SUBRULE(this.onDelete);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.UPDATE);
this.SUBRULE(this.onUpdate);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.UPDATE);
this.SUBRULE(this.onUpdate);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.DELETE);
this.SUBRULE(this.onDelete);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('referenceControlType', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.RESTRICT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.NULL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
this.CONSUME(Tokens.ACTION);
          }
        }
      ]);
      });
    

      this.RULE('indexColumnDefinition', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.indexFormat);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FULLTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SPATIAL);
          }
        }
      ])

        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('tableOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.engineName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.DEFAULT);
        });
      
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.charsetName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.boolValue);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.DEFAULT);
        });
      
this.CONSUME(Tokens.COLLATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.collationName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
this.CONSUME(Tokens.DIRECTORY);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.boolValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
this.CONSUME(Tokens.DIRECTORY);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.insertMethod);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.fileSizeLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.extBoolValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.rowFormat);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.extBoolValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.extBoolValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_SAMPLE_PAGES);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.SUBRULE(this.tablespaceStorage);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNION);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.tables);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('tablespaceStorage', () => {
        this.CONSUME(Tokens.STORAGE);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
      ])
      });
    

      this.RULE('partitionDefinitions', () => {
        this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.partitionFunctionDefinition);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITIONS);
this.SUBRULE(this.count);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SUBPARTITION);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.subpartitionFunctionDefinition);

        this.OPTION(() => {
          this.CONSUME(Tokens.SUBPARTITIONS);
this.SUBRULE(this.subCount);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinition);
        });
      
this.CONSUME(Tokens.OP);
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
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.LINEAR);
        });
      
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.CONSUME(Tokens.ALGORITHM);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.algType);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RANGE);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LIST);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ])
          }
        }
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
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.LINEAR);
        });
      
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.CONSUME(Tokens.ALGORITHM);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.algType);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
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
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);
        });
      
this.CONSUME(Tokens.OP);

        this.MANY(() => {
          this.SUBRULE(this.partitionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.subpartitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.subpartitionDefinition);
        });
      
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.VALUES);
this.CONSUME(Tokens.IN);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);
        });
      
this.CONSUME(Tokens.OP);

        this.MANY(() => {
          this.SUBRULE(this.partitionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.subpartitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.subpartitionDefinition);
        });
      
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.VALUES);
this.CONSUME(Tokens.IN);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerVector);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerVector);
        });
      
this.CONSUME(Tokens.OP);

        this.MANY(() => {
          this.SUBRULE(this.partitionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.subpartitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.subpartitionDefinition);
        });
      
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uid);

        this.MANY(() => {
          this.SUBRULE(this.partitionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.subpartitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.subpartitionDefinition);
        });
      
        });
      
          }
        }
      ]);
      });
    

      this.RULE('partitionDefinerAtom', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAXVALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ]);
      });
    

      this.RULE('partitionDefinerVector', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);

        this.AT_LEAST_ONE(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinerAtom);
        });
      
this.CONSUME(Tokens.OP);
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

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.engineName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.comment);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
this.CONSUME(Tokens.DIRECTORY);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.dataDirectory);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
this.CONSUME(Tokens.DIRECTORY);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.indexDirectory);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.maxRows);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.minRows);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.tablespace);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NODEGROUP);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.nodegroup);
          }
        }
      ]);
      });
    

      this.RULE('alterDatabase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
this.SUBRULE(this.dbFormat);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.createDatabaseOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
this.SUBRULE(this.dbFormat);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.UPGRADE);
this.CONSUME(Tokens.DATA);
this.CONSUME(Tokens.DIRECTORY);
this.CONSUME(Tokens.NAME);
          }
        }
      ]);
      });
    

      this.RULE('alterEvent', () => {
        this.CONSUME(Tokens.ALTER);

        this.OPTION(() => {
          this.SUBRULE(this.ownerStatement);
        });
      
this.CONSUME(Tokens.EVENT);
this.SUBRULE(this.fullId);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.SCHEDULE);
this.SUBRULE(this.scheduleExpression);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.COMPLETION);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.CONSUME(Tokens.PRESERVE);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.RENAME);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.fullId);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.enableType);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COMMENT);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      

        this.OPTION(() => {
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

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.fileSizeLiteral);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WAIT);
        });
      
this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
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
this.CONSUME(Tokens.OP);
this.SUBRULE(this.serverOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.serverOption);
        });
      
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('alterTable', () => {
        this.CONSUME(Tokens.ALTER);

        this.OPTION(() => {
          this.SUBRULE(this.intimeAction);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tableName);
this.SUBRULE(this.alterSpecification);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.alterSpecification);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.partitionDefinitions);
        });
      
      });
    

      this.RULE('alterTablespace', () => {
        this.CONSUME(Tokens.ALTER);
this.CONSUME(Tokens.TABLESPACE);
this.SUBRULE(this.uid);
this.SUBRULE(this.objectAction);
this.CONSUME(Tokens.DATAFILE);
this.CONSUME(Tokens.STRING_LITERAL);

        this.OPTION(() => {
          this.CONSUME(Tokens.INITIAL_SIZE);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.fileSizeLiteral);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WAIT);
        });
      
this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.engineName);
      });
    

      this.RULE('alterView', () => {
        this.CONSUME(Tokens.ALTER);

        this.OPTION(() => {
          this.CONSUME(Tokens.ALGORITHM);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.algType);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.ownerStatement);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SQL);
this.CONSUME(Tokens.SECURITY);
this.SUBRULE(this.secContext);
        });
      
this.CONSUME(Tokens.VIEW);
this.SUBRULE(this.fullId);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.AS);
this.SUBRULE(this.selectStatement);

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);

        this.OPTION(() => {
          this.SUBRULE(this.checkOpt);
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.SUBRULE(this.uid);
this.SUBRULE(this.columnDefinition);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
this.SUBRULE(this.uid);
          }
        }
      ])
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
this.SUBRULE(this.columnDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
this.SUBRULE(this.columnDefinition);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
this.SUBRULE(this.indexFormat);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.PRIMARY);
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.UNIQUE);

        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexName);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexType);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
this.SUBRULE(this.keyType);

        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
this.SUBRULE(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULE(this.indexOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);

        this.OPTION(() => {
          this.CONSUME(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULE(this.name);
        });
      
        });
      
this.CONSUME(Tokens.FOREIGN);
this.CONSUME(Tokens.KEY);

        this.OPTION(() => {
          this.SUBRULE(this.indexName);
        });
      
this.SUBRULE(this.indexColumnNames);
this.SUBRULE(this.referenceDefinition);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.algType);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.SUBRULE(this.uid);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.DEFAULT);
this.SUBRULE(this.defaultValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.DEFAULT);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANGE);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.SUBRULE(this.oldColumn);
this.SUBRULE(this.newColumn);
this.SUBRULE(this.columnDefinition);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
this.SUBRULE(this.afterColumn);
          }
        }
      ])
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.lockType);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFY);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.SUBRULE(this.uid);
this.SUBRULE(this.columnDefinition);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
this.SUBRULE(this.uid);
          }
        }
      ])
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLUMN);
        });
      
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.PRIMARY);
this.CONSUME(Tokens.KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
this.SUBRULE(this.indexFormat);
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.FOREIGN);
this.CONSUME(Tokens.KEY);
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
this.CONSUME(Tokens.KEYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
this.CONSUME(Tokens.KEYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RENAME);

        this.OPTION(() => {
          this.SUBRULE(this.renameFormat);
        });
      
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
this.CONSUME(Tokens.TO);
this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charsetName);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.DEFAULT);
        });
      
this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.charsetName);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FORCE);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.validationFormat);
this.CONSUME(Tokens.VALIDATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADD);
this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.partitionDefinition);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COALESCE);
this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REORGANIZE);
this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.INTO);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinition);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitionDefinition);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCHANGE);
this.CONSUME(Tokens.PARTITION);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.SUBRULE(this.validationFormat);
this.CONSUME(Tokens.VALIDATION);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ANALYZE);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECK);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZE);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
this.CONSUME(Tokens.PARTITION);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REMOVE);
this.CONSUME(Tokens.PARTITIONING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UPGRADE);
this.CONSUME(Tokens.PARTITIONING);
          }
        }
      ]);
      });
    

      this.RULE('dropDatabase', () => {
        this.CONSUME(Tokens.DROP);
this.SUBRULE(this.dbFormat);

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
          this.SUBRULE(this.intimeAction);
        });
      
this.SUBRULE(this.uid);
this.CONSUME(Tokens.ON);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.ALGORITHM);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.algType);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LOCK);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.lockType);
        });
      
      });
    

      this.RULE('dropLogfileGroup', () => {
        this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.LOGFILE);
this.CONSUME(Tokens.GROUP);
this.SUBRULE(this.uid);
this.CONSUME(Tokens.ENGINE);
this.CONSUME(Tokens.OP);
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

        this.OPTION(() => {
          this.SUBRULE(this.ifExists);
        });
      
this.SUBRULE(this.tables);

        this.OPTION(() => {
          this.SUBRULE(this.dropType);
        });
      
      });
    

      this.RULE('dropTablespace', () => {
        this.CONSUME(Tokens.DROP);
this.CONSUME(Tokens.TABLESPACE);
this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.CONSUME(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.fullId);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.dropType);
        });
      
      });
    

      this.RULE('renameTable', () => {
        this.CONSUME(Tokens.RENAME);
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.renameTableClause);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.renameTableClause);
        });
      
      });
    

      this.RULE('renameTableClause', () => {
        this.SUBRULE(this.tableName);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.tableName);
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
          this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constants);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expressions);
          }
        }
      ])
        });
      
this.CONSUME(Tokens.OP);
        });
      
      });
    

      this.RULE('deleteStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.singleDeleteStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.multipleDeleteStatement);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.handlerReadIndexStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.handlerReadStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.handlerCloseStatement);
          }
        }
      ]);
      });
    

      this.RULE('insertStatement', () => {
        this.CONSUME(Tokens.INSERT);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.INTO);
        });
      
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitions);
this.CONSUME(Tokens.OP);
        });
      
this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.columns);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.insertStatementValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.SUBRULE(this.setFirst);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.setElements);
        });
      
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.DUPLICATE);
this.CONSUME(Tokens.KEY);
this.CONSUME(Tokens.UPDATE);
this.SUBRULE(this.duplicatedFirst);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.duplicatedElements);
        });
      
        });
      
      });
    

      this.RULE('loadDataStatement', () => {
        this.CONSUME(Tokens.LOAD);
this.CONSUME(Tokens.DATA);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LOCAL);
        });
      
this.CONSUME(Tokens.INFILE);
this.SUBRULE(this.filename);

        this.OPTION(() => {
          this.SUBRULE(this.violation);
        });
      
this.CONSUME(Tokens.INTO);
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charset);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.fieldsFormat);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.selectFieldsInto);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LINES);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.selectLinesInto);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
this.SUBRULE(this.decimalLiteral);
this.SUBRULE(this.linesFormat);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.assignmentField);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.assignmentField);
        });
      
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SET);
this.SUBRULE(this.updatedElement);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.updatedElement);
        });
      
        });
      
      });
    

      this.RULE('loadXmlStatement', () => {
        this.CONSUME(Tokens.LOAD);
this.CONSUME(Tokens.XML);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LOCAL);
        });
      
this.CONSUME(Tokens.INFILE);
this.SUBRULE(this.filename);

        this.OPTION(() => {
          this.SUBRULE(this.violation);
        });
      
this.CONSUME(Tokens.INTO);
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charset);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ROWS);
this.CONSUME(Tokens.IDENTIFIED);
this.CONSUME(Tokens.BY);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.tag);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
this.SUBRULE(this.decimalLiteral);
this.SUBRULE(this.linesFormat);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.assignmentField);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.assignmentField);
        });
      
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SET);
this.SUBRULE(this.updatedElement);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.updatedElement);
        });
      
        });
      
      });
    

      this.RULE('replaceStatement', () => {
        this.CONSUME(Tokens.REPLACE);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.INTO);
        });
      
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.partitions);
this.CONSUME(Tokens.OP);
        });
      
this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.columns);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.insertStatementValue);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.SUBRULE(this.setFirst);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.setElements);
        });
      
          }
        }
      ])
      });
    

      this.RULE('selectStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);

        this.OPTION(() => {
          this.SUBRULE(this.lockClause);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);

        this.OPTION(() => {
          this.SUBRULE(this.lockClause);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.unionStatement);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULE(this.unionType);
        });
      
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecification);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.queryExpression);
          }
        }
      ])
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.lockClause);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.unionParenthesis);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULE(this.unionType);
        });
      
this.SUBRULE(this.queryExpression);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.lockClause);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('updateStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.singleUpdateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.multipleUpdateStatement);
          }
        }
      ]);
      });
    

      this.RULE('insertStatementValue', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.insertFormat);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expressionsWithDefaults);
this.CONSUME(Tokens.OP);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expressionsWithDefaults);
this.CONSUME(Tokens.OP);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('updatedElement', () => {
        this.SUBRULE(this.fullColumnName);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
      ])
      });
    

      this.RULE('assignmentField', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          }
        }
      ]);
      });
    

      this.RULE('lockClause', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.UPDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
this.CONSUME(Tokens.IN);
this.CONSUME(Tokens.SHARE);
this.CONSUME(Tokens.MODE);
          }
        }
      ]);
      });
    

      this.RULE('singleDeleteStatement', () => {
        this.CONSUME(Tokens.DELETE);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      
this.CONSUME(Tokens.FROM);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LIMIT);
this.SUBRULE(this.decimalLiteral);
        });
      
      });
    

      this.RULE('multipleDeleteStatement', () => {
        this.CONSUME(Tokens.DELETE);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      
        });
      
this.CONSUME(Tokens.FROM);
this.SUBRULE(this.tableSources);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      
        });
      
this.CONSUME(Tokens.USING);
this.SUBRULE(this.tableSources);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      
      });
    

      this.RULE('handlerOpenStatement', () => {
        this.CONSUME(Tokens.HANDLER);
this.SUBRULE(this.tableName);
this.CONSUME(Tokens.OPEN);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('handlerReadIndexStatement', () => {
        this.CONSUME(Tokens.HANDLER);
this.SUBRULE(this.tableName);
this.CONSUME(Tokens.READ);
this.SUBRULE(this.index);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.comparisonOperator);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.constants);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.moveOrder);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LIMIT);
this.SUBRULE(this.decimalLiteral);
        });
      
      });
    

      this.RULE('handlerReadStatement', () => {
        this.CONSUME(Tokens.HANDLER);
this.SUBRULE(this.tableName);
this.CONSUME(Tokens.READ);
this.SUBRULE(this.moveOrder);

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      

        this.OPTION(() => {
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
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.uid);
        });
      
this.CONSUME(Tokens.SET);
this.SUBRULE(this.updatedElement);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.updatedElement);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      
      });
    

      this.RULE('multipleUpdateStatement', () => {
        this.CONSUME(Tokens.UPDATE);

        this.OPTION(() => {
          this.SUBRULE(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
        });
      
this.SUBRULE(this.tableSources);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.updatedElement);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.updatedElement);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      
      });
    

      this.RULE('orderByClause', () => {
        this.CONSUME(Tokens.ORDER);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.orderByExpression);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.orderByExpression);
        });
      
      });
    

      this.RULE('orderByExpression', () => {
        this.SUBRULE(this.expression);

        this.OPTION(() => {
          this.SUBRULE(this.order);
        });
      
      });
    

      this.RULE('tableSources', () => {
        this.SUBRULE(this.tableSource);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableSource);
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
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableSourceItem);

        this.MANY(() => {
          this.SUBRULE(this.joinPart);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('tableSourceItem', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.alias);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.indexHint);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.indexHint);
        });
      
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.parenthesisSubquery);
this.CONSUME(Tokens.OP);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.alias);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableSources);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('indexHint', () => {
        this.SUBRULE(this.indexHintAction);
this.SUBRULE(this.keyFormat);

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.SUBRULE(this.indexHintType);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('indexHintType', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.JOIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ORDER);
this.CONSUME(Tokens.BY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP);
this.CONSUME(Tokens.BY);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CROSS);
          }
        }
      ])
        });
      
this.CONSUME(Tokens.JOIN);
this.SUBRULE(this.tableSourceItem);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ON);
this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USING);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ])
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
this.SUBRULE(this.tableSourceItem);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.SUBRULE(this.expression);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.OUTER);
        });
      
this.CONSUME(Tokens.JOIN);
this.SUBRULE(this.tableSourceItem);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ON);
this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USING);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NATURAL);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.OUTER);
        });
      
        });
      
this.CONSUME(Tokens.JOIN);
this.SUBRULE(this.tableSourceItem);
          }
        }
      ]);
      });
    

      this.RULE('queryExpression', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.querySpecification);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.queryExpression);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('queryExpressionNointo', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.querySpecificationNointo);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.queryExpressionNointo);
this.CONSUME(Tokens.OP);
          }
        }
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
      

        this.OPTION(() => {
          this.SUBRULE(this.fromClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);

        this.MANY(() => {
          this.SUBRULE(this.selectSpec);
        });
      
this.SUBRULE(this.selectElements);

        this.OPTION(() => {
          this.SUBRULE(this.fromClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.selectIntoExpression);
        });
      
          }
        }
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
      

        this.OPTION(() => {
          this.SUBRULE(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.limitClause);
        });
      
      });
    

      this.RULE('unionParenthesis', () => {
        this.CONSUME(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULE(this.unionType);
        });
      
this.SUBRULE(this.queryExpressionNointo);
      });
    

      this.RULE('unionStatement', () => {
        this.CONSUME(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULE(this.unionType);
        });
      
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.querySpecificationNointo);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.queryExpressionNointo);
          }
        }
      ])
      });
    

      this.RULE('selectSpec', () => {
        this.OR([
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISTINCT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISTINCTROW);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HIGH_PRIORITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRAIGHT_JOIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_SMALL_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BIG_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_NO_CACHE);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CALC_FOUND_ROWS);
          }
        }
      ]);
      });
    

      this.RULE('selectElements', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.star);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.selectElement);
          }
        }
      ])

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.selectElement);
        });
      
      });
    

      this.RULE('selectElement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.uid);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.uid);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.LOCAL_ID);
this.CONSUME(Tokens.VAR_ASSIGN);
        });
      
this.SUBRULE(this.expression);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
        });
      
this.SUBRULE(this.uid);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('selectIntoExpression', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
this.SUBRULE(this.assignmentField);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.assignmentField);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
this.CONSUME(Tokens.DUMPFILE);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INTO);
this.CONSUME(Tokens.OUTFILE);
this.SUBRULE(this.filename);

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charset);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.fieldsFormat);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.selectFieldsInto);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LINES);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.selectLinesInto);
        });
      
        });
      
          }
        }
      ]);
      });
    

      this.RULE('selectFieldsInto', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.terminationField);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.OPTIONALLY);
        });
      
this.CONSUME(Tokens.ENCLOSED);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.enclosion);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPED);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.escaping);
          }
        }
      ]);
      });
    

      this.RULE('selectLinesInto', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTING);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.starting);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TERMINATED);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.terminationLine);
          }
        }
      ]);
      });
    

      this.RULE('fromClause', () => {
        this.CONSUME(Tokens.FROM);
this.SUBRULE(this.tableSources);

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.whereExpr);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.GROUP);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.groupByItem);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.groupByItem);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.ROLLUP);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.HAVING);
this.SUBRULE(this.havingExpr);
        });
      
      });
    

      this.RULE('groupByItem', () => {
        this.SUBRULE(this.expression);

        this.OPTION(() => {
          this.SUBRULE(this.order);
        });
      
      });
    

      this.RULE('limitClause', () => {
        this.CONSUME(Tokens.LIMIT);
this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.SUBRULE(this.offset);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.limit);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.limit);
this.CONSUME(Tokens.OFFSET);
this.SUBRULE(this.offset);
          }
        }
      ])
      });
    

      this.RULE('startTransaction', () => {
        this.CONSUME(Tokens.START);
this.CONSUME(Tokens.TRANSACTION);

        this.OPTION(() => {
          this.SUBRULE(this.transactionMode);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.transactionMode);
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
      

        this.OPTION(() => {
          this.CONSUME(Tokens.AND);

        this.OPTION(() => {
          this.SUBRULE(this.nochain);
        });
      
this.CONSUME(Tokens.CHAIN);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULE(this.norelease);
        });
      
this.CONSUME(Tokens.RELEASE);
        });
      
      });
    

      this.RULE('rollbackWork', () => {
        this.CONSUME(Tokens.ROLLBACK);

        this.OPTION(() => {
          this.CONSUME(Tokens.WORK);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.AND);

        this.OPTION(() => {
          this.SUBRULE(this.nochain);
        });
      
this.CONSUME(Tokens.CHAIN);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULE(this.norelease);
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

        this.OPTION(() => {
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.lockTableElement);
        });
      
      });
    

      this.RULE('unlockTables', () => {
        this.CONSUME(Tokens.UNLOCK);
this.CONSUME(Tokens.TABLES);
      });
    

      this.RULE('setAutocommitStatement', () => {
        this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.AUTOCOMMIT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.autocommitValue);
      });
    

      this.RULE('setTransactionStatement', () => {
        this.CONSUME(Tokens.SET);

        this.OPTION(() => {
          this.SUBRULE(this.transactionContext);
        });
      
this.CONSUME(Tokens.TRANSACTION);
this.SUBRULE(this.transactionOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.transactionOption);
        });
      
      });
    

      this.RULE('transactionMode', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.CONSISTENT);
this.CONSUME(Tokens.SNAPSHOT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.ONLY);
          }
        }
      ]);
      });
    

      this.RULE('lockTableElement', () => {
        this.SUBRULE(this.tableName);

        this.OPTION(() => {
          
        this.OPTION(() => {
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
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.LOW_PRIORITY);
        });
      
this.CONSUME(Tokens.WRITE);
          }
        }
      ]);
      });
    

      this.RULE('transactionOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ISOLATION);
this.CONSUME(Tokens.LEVEL);
this.SUBRULE(this.transactionLevel);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.ONLY);
          }
        }
      ]);
      });
    

      this.RULE('transactionLevel', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPEATABLE);
this.CONSUME(Tokens.READ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.COMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.UNCOMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SERIALIZABLE);
          }
        }
      ]);
      });
    

      this.RULE('changeMaster', () => {
        this.CONSUME(Tokens.CHANGE);
this.CONSUME(Tokens.MASTER);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.masterOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.masterOption);
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.replicationFilter);
        });
      
      });
    

      this.RULE('purgeBinaryLogs', () => {
        this.CONSUME(Tokens.PURGE);
this.SUBRULE(this.purgeFormat);
this.CONSUME(Tokens.LOGS);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TO);
this.SUBRULE(this.fileName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BEFORE);
this.SUBRULE(this.timeValue);
          }
        }
      ])
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
      

        this.OPTION(() => {
          this.SUBRULE(this.channelOption);
        });
      
      });
    

      this.RULE('startSlave', () => {
        this.CONSUME(Tokens.START);
this.CONSUME(Tokens.SLAVE);

        this.OPTION(() => {
          this.SUBRULE(this.threadType);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.threadType);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNTIL);
this.SUBRULE(this.untilOption);
        });
      

        this.MANY(() => {
          this.SUBRULE(this.connectionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.channelOption);
        });
      
      });
    

      this.RULE('stopSlave', () => {
        this.CONSUME(Tokens.STOP);
this.CONSUME(Tokens.SLAVE);

        this.OPTION(() => {
          this.SUBRULE(this.threadType);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.threadType);
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
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.decimalMasterOption);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.boolMasterOption);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.boolVal);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.REAL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE_SERVER_IDS);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.uid);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
        });
      
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('stringMasterOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_BIND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CAPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_TLS_VERSION);
          }
        }
      ]);
      });
    

      this.RULE('decimalMasterOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_RETRY_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_DELAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_POS);
          }
        }
      ]);
      });
    

      this.RULE('boolMasterOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_AUTO_POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
          }
        }
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
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_TABLE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.tables);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.tables);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.simpleStrings);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.simpleStrings);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.tablePair);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tablePair);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('tablePair', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.firstTable);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.secondTable);
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('threadType', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.IO_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD);
          }
        }
      ]);
      });
    

      this.RULE('untilOption', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.gtids);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.gtuidSet);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.MASTER_LOG_POS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.RELAY_LOG_POS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
          }
        }
      ]);
      });
    

      this.RULE('connectionOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.conOptUser);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.conOptPassword);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT_AUTH);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.conOptDefAuth);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGIN_DIR);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.conOptPluginDir);
          }
        }
      ]);
      });
    

      this.RULE('gtuidSet', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uuidSet);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uuidSet);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ]);
      });
    

      this.RULE('xaStartTransaction', () => {
        this.CONSUME(Tokens.XA);
this.SUBRULE(this.xaStart);
this.SUBRULE(this.xid);

        this.OPTION(() => {
          this.SUBRULE(this.xaAction);
        });
      
      });
    

      this.RULE('xaEndTransaction', () => {
        this.CONSUME(Tokens.XA);
this.CONSUME(Tokens.END);
this.SUBRULE(this.xid);

        this.OPTION(() => {
          this.CONSUME(Tokens.SUSPEND);

        this.OPTION(() => {
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
            this.SUBRULE(this.query);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.variable);
          }
        }
      ])
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
        this.SUBRULE(this.dropFormat);
this.CONSUME(Tokens.PREPARE);
this.SUBRULE(this.uid);
      });
    

      this.RULE('routineBody', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.blockStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sqlStatement);
          }
        }
      ]);
      });
    

      this.RULE('blockStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULE(this.uid);
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.BEGIN);

        this.OPTION(() => {
          
        this.MANY(() => {
          this.SUBRULE(this.declareVariable);
this.CONSUME(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULE(this.declareCondition);
this.CONSUME(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULE(this.declareCursor);
this.CONSUME(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULE(this.declareHandler);
this.CONSUME(Tokens.SEMI);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      
        });
      
this.CONSUME(Tokens.END);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('caseStatement', () => {
        this.CONSUME(Tokens.CASE);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.caseAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ELSE);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      
        });
      
this.CONSUME(Tokens.END);
this.CONSUME(Tokens.CASE);
      });
    

      this.RULE('ifStatement', () => {
        this.CONSUME(Tokens.IF);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.THEN);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.thenStatements);
        });
      

        this.MANY(() => {
          this.SUBRULE(this.elifAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ELSE);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.elseStatements);
        });
      
        });
      
this.CONSUME(Tokens.END);
this.CONSUME(Tokens.IF);
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
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.LOOP);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      
this.CONSUME(Tokens.END);
this.CONSUME(Tokens.LOOP);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('repeatStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULE(this.uid);
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.REPEAT);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      
this.CONSUME(Tokens.UNTIL);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.END);
this.CONSUME(Tokens.REPEAT);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('returnStatement', () => {
        this.CONSUME(Tokens.RETURN);
this.SUBRULE(this.expression);
      });
    

      this.RULE('whileStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULE(this.uid);
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.WHILE);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.DO);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.procedureSqlStatement);
        });
      
this.CONSUME(Tokens.END);
this.CONSUME(Tokens.WHILE);

        this.OPTION(() => {
          this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('cursorStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CLOSE);
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FETCH);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.NEXT);
        });
      
this.CONSUME(Tokens.FROM);
        });
      
this.SUBRULE(this.uid);
this.CONSUME(Tokens.INTO);
this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OPEN);
this.SUBRULE(this.uid);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLSTATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.VALUE);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ])
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
this.SUBRULE(this.handlerAction);
this.CONSUME(Tokens.HANDLER);
this.CONSUME(Tokens.FOR);
this.SUBRULE(this.handlerConditionValue);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.handlerConditionValue);
        });
      
this.SUBRULE(this.routineBody);
      });
    

      this.RULE('handlerConditionValue', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLSTATE);

        this.OPTION(() => {
          this.CONSUME(Tokens.VALUE);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLWARNING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
this.CONSUME(Tokens.FOUND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQLEXCEPTION);
          }
        }
      ]);
      });
    

      this.RULE('procedureSqlStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.compoundStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sqlStatement);
          }
        }
      ])
this.CONSUME(Tokens.SEMI);
      });
    

      this.RULE('caseAlternative', () => {
        this.CONSUME(Tokens.WHEN);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userSpecification);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);
this.CONSUME(Tokens.USER);

        this.OPTION(() => {
          this.SUBRULE(this.ifExists);
        });
      
this.SUBRULE(this.userAuthOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userAuthOption);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.REQUIRE);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tlsNone);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.tlsOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AND);
        });
      
this.SUBRULE(this.tlsOption);
        });
      
          }
        }
      ])
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.userResourceOption);
        });
      
        });
      

        this.MANY(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.userPasswordOption);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userLockOption);
          }
        }
      ])
        });
      
          }
        }
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userAuthOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);
this.CONSUME(Tokens.USER);

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.userAuthOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userAuthOption);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.REQUIRE);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tlsNone);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.tlsOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AND);
        });
      
this.SUBRULE(this.tlsOption);
        });
      
          }
        }
      ])
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.userResourceOption);
        });
      
        });
      

        this.MANY(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.userPasswordOption);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userLockOption);
          }
        }
      ])
        });
      
          }
        }
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userName);
        });
      
      });
    

      this.RULE('grantStatement', () => {
        this.CONSUME(Tokens.GRANT);
this.SUBRULE(this.privelegeClause);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.privelegeClause);
        });
      
this.CONSUME(Tokens.ON);

        this.OPTION(() => {
          this.SUBRULE(this.privilegeObject);
        });
      
this.SUBRULE(this.privilegeLevel);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.userAuthOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userAuthOption);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.REQUIRE);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.tlsNone);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.tlsOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.AND);
        });
      
this.SUBRULE(this.tlsOption);
        });
      
          }
        }
      ])
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);

        this.MANY(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANT);
this.CONSUME(Tokens.OPTION);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userResourceOption);
          }
        }
      ])
        });
      
        });
      
      });
    

      this.RULE('grantProxy', () => {
        this.CONSUME(Tokens.GRANT);
this.CONSUME(Tokens.PROXY);
this.CONSUME(Tokens.ON);
this.SUBRULE(this.fromFirst);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.toFirst);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.toOther);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.GRANT);
this.CONSUME(Tokens.OPTION);
        });
      
      });
    

      this.RULE('renameUser', () => {
        this.CONSUME(Tokens.RENAME);
this.CONSUME(Tokens.USER);
this.SUBRULE(this.renameUserClause);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.renameUserClause);
        });
      
      });
    

      this.RULE('revokeStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REVOKE);
this.SUBRULE(this.privelegeClause);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.privelegeClause);
        });
      
this.CONSUME(Tokens.ON);

        this.OPTION(() => {
          this.SUBRULE(this.privilegeObject);
        });
      
this.SUBRULE(this.privilegeLevel);
this.CONSUME(Tokens.FROM);
this.SUBRULE(this.userName);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REVOKE);
this.CONSUME(Tokens.ALL);

        this.OPTION(() => {
          this.CONSUME(Tokens.PRIVILEGES);
        });
      
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.GRANT);
this.CONSUME(Tokens.OPTION);
this.CONSUME(Tokens.FROM);
this.SUBRULE(this.userName);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.userName);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('revokeProxy', () => {
        this.CONSUME(Tokens.REVOKE);
this.CONSUME(Tokens.PROXY);
this.CONSUME(Tokens.ON);
this.SUBRULE(this.onUser);
this.CONSUME(Tokens.FROM);
this.SUBRULE(this.fromFirst);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.fromOther);
        });
      
      });
    

      this.RULE('setPasswordStatement', () => {
        this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.PASSWORD);

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.SUBRULE(this.userName);
        });
      
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.passwordFunctionClause);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ])
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
this.SUBRULE(this.hashed);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userName);
this.CONSUME(Tokens.IDENTIFIED);

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);
this.SUBRULE(this.authPlugin);
        });
      
this.CONSUME(Tokens.BY);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userName);
this.CONSUME(Tokens.IDENTIFIED);
this.CONSUME(Tokens.WITH);
this.SUBRULE(this.authPlugin);

        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.userName);
          }
        }
      ]);
      });
    

      this.RULE('tlsOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.X509);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CIPHER);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSUER);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBJECT);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ]);
      });
    

      this.RULE('userResourceOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
this.SUBRULE(this.decimalLiteral);
          }
        }
      ]);
      });
    

      this.RULE('userPasswordOption', () => {
        this.CONSUME(Tokens.PASSWORD);
this.CONSUME(Tokens.EXPIRE);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expireType);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expireType);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expireType);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.DAY);
          }
        }
      ])
        });
      
      });
    

      this.RULE('userLockOption', () => {
        this.CONSUME(Tokens.ACCOUNT);
this.SUBRULE(this.lockType);
      });
    

      this.RULE('privelegeClause', () => {
        this.SUBRULE(this.privilege);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
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
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALTER);

        this.OPTION(() => {
          this.CONSUME(Tokens.ROUTINE);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPORARY);
this.CONSUME(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUTINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ])
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DELETE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DROP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXECUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANT);
this.CONSUME(Tokens.OPTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCK);
this.CONSUME(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROXY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REFERENCES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELOAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATION);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CLIENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASES);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHUTDOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIGGER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USAGE);
          }
        }
      ]);
      });
    

      this.RULE('privilegeLevel', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.uid);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.uid);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ]);
      });
    

      this.RULE('renameUserClause', () => {
        this.SUBRULE(this.fromFirst);
this.CONSUME(Tokens.TO);
this.SUBRULE(this.toFirst);
      });
    

      this.RULE('analyzeTable', () => {
        this.CONSUME(Tokens.ANALYZE);

        this.OPTION(() => {
          this.SUBRULE(this.actionOption);
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
          this.SUBRULE(this.actionOption);
        });
      
      });
    

      this.RULE('optimizeTable', () => {
        this.CONSUME(Tokens.OPTIMIZE);

        this.OPTION(() => {
          this.SUBRULE(this.actionOption);
        });
      
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tables);
      });
    

      this.RULE('repairTable', () => {
        this.CONSUME(Tokens.REPAIR);

        this.OPTION(() => {
          this.SUBRULE(this.actionOption);
        });
      
this.CONSUME(Tokens.TABLE);
this.SUBRULE(this.tables);

        this.OPTION(() => {
          this.CONSUME(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.EXTENDED);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.USE_FRM);
        });
      
      });
    

      this.RULE('checkTableOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.UPGRADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUICK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MEDIUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTENDED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANGED);
          }
        }
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
this.SUBRULE(this.returnType);
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
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.variableClause);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET);
          }
        }
      ])
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.charsetName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SET);
this.CONSUME(Tokens.NAMES);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.charsetName);

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.setPasswordStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.setTransactionStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.setAutocommitStatement);
          }
        }
      ]);
      });
    

      this.RULE('showStatement', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.logFormat);
this.CONSUME(Tokens.LOGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.logFormat);
this.CONSUME(Tokens.EVENTS);

        this.OPTION(() => {
          this.CONSUME(Tokens.IN);
this.SUBRULE(this.filename);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.FROM);
this.SUBRULE(this.fromPosition);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.LIMIT);

        this.OPTION(() => {
          this.SUBRULE(this.offset);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.rowCount);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.showCommonEntity);

        this.OPTION(() => {
          this.SUBRULE(this.showFilter);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);

        this.OPTION(() => {
          this.CONSUME(Tokens.FULL);
        });
      
this.SUBRULE(this.columnsFormat);
this.SUBRULE(this.tableFormat);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.SUBRULE(this.schemaFormat);
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.showFilter);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.CREATE);
this.SUBRULE(this.schemaFormat);

        this.OPTION(() => {
          this.SUBRULE(this.ifNotExists);
        });
      
this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.CREATE);
this.SUBRULE(this.namedEntity);
this.SUBRULE(this.fullId);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.CREATE);
this.CONSUME(Tokens.USER);
this.SUBRULE(this.userName);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.ENGINE);
this.SUBRULE(this.engineName);
this.SUBRULE(this.engineOption);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.showGlobalInfoClause);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.errorFormat);
this.CONSUME(Tokens.LIMIT);

        this.OPTION(() => {
          this.SUBRULE(this.offset);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.rowCount);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.COUNT);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.errorFormat);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.showSchemaEntity);

        this.OPTION(() => {
          this.SUBRULE(this.schemaFormat);
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.showFilter);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.routine);
this.CONSUME(Tokens.CODE);
this.SUBRULE(this.fullId);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.GRANTS);

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.SUBRULE(this.userName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.SUBRULE(this.indexFormat);
this.SUBRULE(this.tableFormat);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.SUBRULE(this.schemaFormat);
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.OPEN);
this.CONSUME(Tokens.TABLES);

        this.OPTION(() => {
          this.SUBRULE(this.schemaFormat);
this.SUBRULE(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.showFilter);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.PROFILE);
this.SUBRULE(this.showProfileType);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.showProfileType);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.QUERY);
this.SUBRULE(this.queryCount);
        });
      
this.CONSUME(Tokens.LIMIT);

        this.OPTION(() => {
          this.SUBRULE(this.offset);
this.CONSUME(Tokens.OP);
        });
      
this.SUBRULE(this.rowCount);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHOW);
this.CONSUME(Tokens.SLAVE);
this.CONSUME(Tokens.STATUS);

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.CHANNEL);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('variableClause', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
        });
      
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION);
          }
        }
      ])
        });
      
this.SUBRULE(this.uid);
          }
        }
      ]);
      });
    

      this.RULE('showCommonEntity', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATABASES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEMAS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCEDURE);
this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION);
          }
        }
      ])
        });
      
this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VARIABLES);
          }
        }
      ])
          }
        }
      ]);
      });
    

      this.RULE('showFilter', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LIKE);
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WHERE);
this.SUBRULE(this.expression);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.FULL);
        });
      
this.CONSUME(Tokens.PROCESSLIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
this.CONSUME(Tokens.HOSTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTHORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTRIBUTORS);
          }
        }
      ]);
      });
    

      this.RULE('showSchemaEntity', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLE);
this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.FULL);
        });
      
this.CONSUME(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIGGERS);
          }
        }
      ]);
      });
    

      this.RULE('showProfileType', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOCK);
this.CONSUME(Tokens.IO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTEXT);
this.CONSUME(Tokens.SWITCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CPU);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IPC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PAGE);
this.CONSUME(Tokens.FAULTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOURCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SWAPS);
          }
        }
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableIndexes);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uidList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
this.CONSUME(Tokens.OP);
        });
      
this.CONSUME(Tokens.IN);
this.SUBRULE(this.schema);
      });
    

      this.RULE('flushStatement', () => {
        this.CONSUME(Tokens.FLUSH);

        this.OPTION(() => {
          this.SUBRULE(this.flushFormat);
        });
      
this.SUBRULE(this.flushOption);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.flushOption);
        });
      
      });
    

      this.RULE('killStatement', () => {
        this.CONSUME(Tokens.KILL);

        this.OPTION(() => {
          this.SUBRULE(this.connectionFormat);
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
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.loadedTableIndexes);
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
          
        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.uidList);
this.CONSUME(Tokens.OP);
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOSTS);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ERROR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GENERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SLOW);
          }
        }
      ])
        });
      
this.CONSUME(Tokens.LOGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZER_COSTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUERY);
this.CONSUME(Tokens.CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USER_RESOURCES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);

        this.OPTION(() => {
          this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.LOCK);
        });
      
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY);
this.CONSUME(Tokens.LOGS);

        this.OPTION(() => {
          this.SUBRULE(this.channelOption);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);
this.SUBRULE(this.tables);

        this.OPTION(() => {
          this.SUBRULE(this.flushTableOption);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('flushTableOption', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.WITH);
this.CONSUME(Tokens.READ);
this.CONSUME(Tokens.LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.EXPORT);
          }
        }
      ]);
      });
    

      this.RULE('loadedTableIndexes', () => {
        this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.CONSUME(Tokens.PARTITION);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.partitionList);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALL);
          }
        }
      ])
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULE(this.indexFormat);
        });
      
this.CONSUME(Tokens.OP);
this.SUBRULE(this.indexList);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.IGNORE);
this.CONSUME(Tokens.LEAVES);
        });
      
      });
    

      this.RULE('simpleDescribeStatement', () => {
        this.SUBRULE(this.command);
this.SUBRULE(this.tableName);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.column);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.pattern);
          }
        }
      ])
        });
      
      });
    

      this.RULE('fullDescribeStatement', () => {
        this.SUBRULE(this.command);

        this.OPTION(() => {
          this.SUBRULE(this.formatType);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.formatValue);
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
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.deleteStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.insertStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.replaceStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.updateStatement);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
this.CONSUME(Tokens.CONNECTION);
this.SUBRULE(this.uid);
          }
        }
      ]);
      });
    

      this.RULE('fullId', () => {
        this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
          }
        }
      ])
        });
      
      });
    

      this.RULE('tableName', () => {
        this.SUBRULE(this.fullId);
      });
    

      this.RULE('fullColumnName', () => {
        this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.SUBRULE(this.dottedId);

        this.OPTION(() => {
          this.SUBRULE(this.dottedId);
        });
      
        });
      
      });
    

      this.RULE('indexColumnName', () => {
        this.SUBRULE(this.uid);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.sortType);
        });
      
      });
    

      this.RULE('userName', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_USER_NAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ID);
          }
        }
      ]);
      });
    

      this.RULE('mysqlVariable', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL_ID);
          }
        }
      ]);
      });
    

      this.RULE('charsetName', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          }
        }
      ]);
      });
    

      this.RULE('collationName', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ]);
      });
    

      this.RULE('engineName', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARCHIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BLACKHOLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CSV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FEDERATED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INNODB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MRG_MYISAM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MYISAM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NDB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NDBCLUSTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PERFOMANCE_SCHEMA);
          }
        }
      ]);
      });
    

      this.RULE('uuidSet', () => {
        this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);

        this.AT_LEAST_ONE(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
        });
      
      });
    

      this.RULE('xid', () => {
        this.SUBRULE(this.globalTableUid);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.qualifier);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.idFormat);
        });
      
        });
      
      });
    

      this.RULE('xuidStringId', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            
        this.AT_LEAST_ONE(() => {
          this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('authPlugin', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ]);
      });
    

      this.RULE('uid', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simpleId);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE_QUOTE_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          }
        }
      ]);
      });
    

      this.RULE('simpleId', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ID);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.charsetNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.transactionLevelBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.engineName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.privilegesBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.intervalTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.dataTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.keywordsCanBeId);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
          }
        }
      ]);
      });
    

      this.RULE('dottedId', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DOT_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
          }
        }
      ]);
      });
    

      this.RULE('decimalLiteral', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DECIMAL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ZERO_DECIMAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE_DECIMAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TWO_DECIMAL);
          }
        }
      ]);
      });
    

      this.RULE('fileSizeLiteral', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FILESIZE_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
          }
        }
      ])

        this.AT_LEAST_ONE(() => {
          this.CONSUME(Tokens.STRING_LITERAL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.STRING_CHARSET_NAME);
        });
      
this.CONSUME(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('booleanLiteral', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FALSE);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_SPEC_LITERAL);
          }
        }
      ])
      });
    

      this.RULE('constant', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.hexadecimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.booleanLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REAL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.SUBRULE(this.nullLiteral);
          }
        }
      ]);
      });
    

      this.RULE('dataType', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthOneDimension);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.BINARY);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charsetName);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthOneDimension);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNSIGNED);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ZEROFILL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthTwoDimension);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNSIGNED);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ZEROFILL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthTwoOptionalDimension);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.UNSIGNED);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ZEROFILL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthOneDimension);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.CONSUME(Tokens.BINARY);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charsetName);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);
          }
        }
      ]);
      });
    

      this.RULE('convertedDataType', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthOneDimension);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthOneDimension);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.CHARACTER);
this.CONSUME(Tokens.SET);
this.SUBRULE(this.charsetName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.typeName);

        this.OPTION(() => {
          this.SUBRULE(this.lengthTwoDimension);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGNED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNSIGNED);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.INTEGER);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('lengthOneDimension', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('lengthTwoDimension', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('lengthTwoOptionalDimension', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);

        this.OPTION(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
        });
      
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('uidList', () => {
        this.SUBRULE(this.uid);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.uid);
        });
      
      });
    

      this.RULE('tables', () => {
        this.SUBRULE(this.tableName);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.tableName);
        });
      
      });
    

      this.RULE('indexColumnNames', () => {
        this.CONSUME(Tokens.OP);
this.SUBRULE(this.indexColumnName);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.indexColumnName);
        });
      
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('expressions', () => {
        this.SUBRULE(this.expression);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
        });
      
      });
    

      this.RULE('expressionsWithDefaults', () => {
        this.SUBRULE(this.expressionOrDefault);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.expressionOrDefault);
        });
      
      });
    

      this.RULE('constants', () => {
        this.SUBRULE(this.constant);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.constant);
        });
      
      });
    

      this.RULE('simpleStrings', () => {
        this.CONSUME(Tokens.STRING_LITERAL);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
      });
    

      this.RULE('userVariables', () => {
        this.CONSUME(Tokens.LOCAL_ID);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.LOCAL_ID);
        });
      
      });
    

      this.RULE('defaultValue', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.NULL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);

        this.OPTION(() => {
          this.CONSUME(Tokens.ON);
this.CONSUME(Tokens.UPDATE);
this.CONSUME(Tokens.LOCALTIMESTAMP);
        });
      
          }
        }
      ]);
      });
    

      this.RULE('expressionOrDefault', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.aggregateWindowedFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.scalarFunctionName);
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.functionArgs);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullId);
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.functionArgs);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.passwordFunctionClause);
          }
        }
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIME);
          }
        }
      ])
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.SUBRULE(this.separator);
this.SUBRULE(this.convertedDataType);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.USING);
this.SUBRULE(this.charsetName);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CAST);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
this.CONSUME(Tokens.AS);
this.SUBRULE(this.convertedDataType);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUES);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.fullColumnName);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);
this.SUBRULE(this.expression);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.caseFuncAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ELSE);
this.SUBRULE(this.elseArg);
        });
      
this.CONSUME(Tokens.END);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);

        this.AT_LEAST_ONE(() => {
          this.SUBRULE(this.caseFuncAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.ELSE);
this.SUBRULE(this.elseArg);
        });
      
this.CONSUME(Tokens.END);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.functionArgs);

        this.OPTION(() => {
          this.CONSUME(Tokens.USING);
this.SUBRULE(this.charsetName);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.positionString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.positionExpression);
          }
        }
      ])
this.CONSUME(Tokens.IN);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.inString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.inExpression);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING);
          }
        }
      ])
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.sourceString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sourceExpression);
          }
        }
      ])
this.CONSUME(Tokens.FROM);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fromDecimal);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fromExpression);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.FOR);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.forDecimal);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.forExpression);
          }
        }
      ])
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.positioinForm);

        this.OPTION(() => {
          this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.sourceString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sourceExpression);
          }
        }
      ])
        });
      
this.CONSUME(Tokens.FROM);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fromString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fromExpression);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.sourceString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sourceExpression);
          }
        }
      ])
this.CONSUME(Tokens.FROM);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.fromString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fromExpression);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.stringLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])

        this.OPTION(() => {
          this.CONSUME(Tokens.AS);
this.SUBRULE(this.stringFormat);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.decimalLiteral);
this.CONSUME(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.SUBRULE(this.levelsInWeightString);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.intervalType);
this.CONSUME(Tokens.FROM);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.sourceString);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.sourceExpression);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.datetimeFormat);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.stringLiteral);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('caseFuncAlternative', () => {
        this.CONSUME(Tokens.WHEN);
this.SUBRULE(this.condition);
this.CONSUME(Tokens.THEN);
this.SUBRULE(this.consequent);
      });
    

      this.RULE('levelsInWeightString', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
this.SUBRULE(this.levelInWeightListElement);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.levelInWeightListElement);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
this.SUBRULE(this.firstLevel);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.lastLevel);
          }
        }
      ]);
      });
    

      this.RULE('levelInWeightListElement', () => {
        this.SUBRULE(this.decimalLiteral);

        this.OPTION(() => {
          this.SUBRULE(this.orderType);
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
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUM);
          }
        }
      ])
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.aggregator);
        });
      
this.SUBRULE(this.functionArg);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.starArg);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.SUBRULE(this.aggregator);
        });
      
this.SUBRULE(this.functionArg);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.aggregator);
this.SUBRULE(this.functionArgs);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_AND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_OR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_XOR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STDDEV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STDDEV_POP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STDDEV_SAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VAR_POP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VAR_SAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VARIANCE);
          }
        }
      ])
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.aggregator);
        });
      
this.SUBRULE(this.functionArg);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_CONCAT);
this.CONSUME(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULE(this.aggregator);
        });
      
this.SUBRULE(this.functionArgs);

        this.OPTION(() => {
          this.CONSUME(Tokens.ORDER);
this.CONSUME(Tokens.BY);
this.SUBRULE(this.orderByExpression);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.orderByExpression);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUME(Tokens.SEPARATOR);
this.SUBRULE(this.separator);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('scalarFunctionName', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.functionNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURRENT_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CURTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_ADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_SUB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCALTIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NOW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTC_TIMESTAMP);
          }
        }
      ]);
      });
    

      this.RULE('passwordFunctionClause', () => {
        this.SUBRULE(this.functionName);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.functionArg);
this.CONSUME(Tokens.OP);
      });
    

      this.RULE('functionArgs', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ])
        });
      
      });
    

      this.RULE('functionArg', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          }
        }
      ]);
      });
    

      this.RULE('expression', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.notOperator);
this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expression);
this.SUBRULE(this.logicalOperator);
this.SUBRULE(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
this.CONSUME(Tokens.IS);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.SUBRULE(this.testValue);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
          }
        }
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
this.CONSUME(Tokens.OP);
this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expressions);
          }
        }
      ])
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
this.CONSUME(Tokens.IS);
this.SUBRULE(this.nullNotnull);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.left);
this.SUBRULE(this.comparisonOperator);
this.SUBRULE(this.right);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
this.SUBRULE(this.comparisonOperator);
this.SUBRULE(this.quantifier);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.selectStatement);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.CONSUME(Tokens.BETWEEN);
this.SUBRULE(this.predicate);
this.CONSUME(Tokens.AND);
this.SUBRULE(this.predicate);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);
this.CONSUME(Tokens.SOUNDS);
this.CONSUME(Tokens.LIKE);
this.SUBRULE(this.predicate);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.CONSUME(Tokens.LIKE);
this.SUBRULE(this.predicate);

        this.OPTION(() => {
          this.CONSUME(Tokens.ESCAPE);
this.CONSUME(Tokens.STRING_LITERAL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.predicate);

        this.OPTION(() => {
          this.CONSUME(Tokens.NOT);
        });
      
this.SUBRULE(this.regex);
this.SUBRULE(this.predicate);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUME(Tokens.LOCAL_ID);
this.CONSUME(Tokens.VAR_ASSIGN);
        });
      
this.SUBRULE(this.expressionAtom);
          }
        }
      ]);
      });
    

      this.RULE('expressionAtom', () => {
        this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.fullColumnName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.functionCall);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.expressionAtom);
this.CONSUME(Tokens.COLLATE);
this.SUBRULE(this.collationName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.mysqlVariable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.unaryOperator);
this.SUBRULE(this.expressionAtom);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BINARY);
this.SUBRULE(this.expressionAtom);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);

        this.MANY(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);

        this.AT_LEAST_ONE(() => {
          this.CONSUME(Tokens.OP);
this.SUBRULE(this.expression);
        });
      
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXISTS);
this.CONSUME(Tokens.OP);
this.SUBRULE(this.selectStatement);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.SUBRULE(this.selectStatement);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERVAL);
this.SUBRULE(this.expression);
this.SUBRULE(this.intervalType);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.left);
this.SUBRULE(this.bitOperator);
this.SUBRULE(this.right);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULE(this.left);
this.SUBRULE(this.mathOperator);
this.SUBRULE(this.right);
          }
        }
      ]);
      });
    

      this.RULE('unaryOperator', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NOT);
          }
        }
      ]);
      });
    

      this.RULE('comparisonOperator', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('logicalOperator', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.AND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.XOR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('bitOperator', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('mathOperator', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DIV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OP);
          }
        }
      ]);
      });
    

      this.RULE('charsetNameBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ARMSCII8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASCII);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIG5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1250);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1251);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1256);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP1257);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP850);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP852);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP866);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CP932);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEC8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCJPMS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EUCKR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GB2312);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GBK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOSTD8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GREEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HEBREW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HP8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.KEYBCS2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8R);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.KOI8U);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN1);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LATIN7);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MACCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MACROMAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SJIS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SWE7);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIS620);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UCS2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UJIS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF16LE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF32);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB3);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UTF8MB4);
          }
        }
      ]);
      });
    

      this.RULE('transactionLevelBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.REPEATABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SERIALIZABLE);
          }
        }
      ]);
      });
    

      this.RULE('privilegesBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUTINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXECUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELOAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHUTDOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PRIVILEGES);
          }
        }
      ]);
      });
    

      this.RULE('intervalTypeBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          }
        }
      ]);
      });
    

      this.RULE('dataTypeBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATETIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TEXT);
          }
        }
      ]);
      });
    

      this.RULE('keywordsCanBeId', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ACCOUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ACTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AFTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AGGREGATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ALGORITHM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ANY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTHORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOCOMMIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTOEXTEND_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AUTO_INCREMENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AVG_ROW_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BEGIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BINLOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BLOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BOOLEAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BTREE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CASCADED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHANNEL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHECKSUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CLIENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COALESCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMNS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLUMN_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMMIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPACT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPLETION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCURRENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONSISTENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONTRIBUTORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COPY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CPU);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATAFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEALLOCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFAULT_AUTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEFINER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DELAY_KEY_WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DIRECTORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISCARD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DUMPFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DUPLICATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DYNAMIC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENGINES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ERROR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ERRORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ESCAPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVEN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVENTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EVERY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCHANGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLUSIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPIRE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTENT_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FAULTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FILE_BLOCK_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FILTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FIRST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FIXED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FOLLOWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GLOBAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GRANTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GROUP_REPLICATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HASH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IDENTIFIED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IGNORE_SERVER_IDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IMPORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INDEXES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INITIAL_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INPLACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSERT_METHOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTANCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INVOKER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IO_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IPC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISOLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSUER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.KEY_BLOCK_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LANGUAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAVES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LEVEL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_AUTO_POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_DELAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_RETRY_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CAPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_SSL_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_TLS_VERSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MERGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MIGRATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MIN_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MODIFY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MUTEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MYSQL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NAMES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NCHAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NEVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NODEGROUP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NONE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFLINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OFFSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OJ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OLD_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ONE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ONLY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIMIZER_COSTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OPTIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OWNER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PACK_KEYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARSER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTIAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PARTITIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PHASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PLUGIN_DIR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PRECEDES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PREPARE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PRESERVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PREV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROCESSLIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROFILES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PROXY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUERY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUICK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REBUILD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RECOVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REDO_BUFFER_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REDUNDANT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAYLOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELAY_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REMOVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REORGANIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPAIR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_DO_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REPLICATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RESUME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RETURNS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLBACK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROLLUP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROTATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SAVEPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SCHEDULE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SECURITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SERVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHARED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGNED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SLAVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SNAPSHOT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOCKET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOURCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_BUFFER_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_NO_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.START);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_AUTO_RECALC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_PERSISTENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STOP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STORAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBJECT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBPARTITIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUSPEND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SWAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SWITCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPORARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TEMPTABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.THAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRANSACTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TRUNCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDEFINED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDOFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNKNOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UPGRADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VARIABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VIEW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WARNINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHOUT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WORK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WRAPPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.X509);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.XA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.XML);
          }
        }
      ]);
      });
    

      this.RULE('functionNameBase', () => {
        this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ABS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ACOS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ADDTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AES_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.AREA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASBINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASWKT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_DERIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_SIGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ASYMMETRIC_VERIFY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ATAN2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BENCHMARK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BIT_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.BUFFER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CEIL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CEILING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CENTROID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARACTER_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHARSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CHAR_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COERCIBILITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COLLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COMPRESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONCAT_WS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONNECTION_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CONVERT_TZ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CRC32);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DH_PARAMETERS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CREATE_DIGEST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.CROSSES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATEDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DATE_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYNAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFMONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFWEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DAYOFYEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DECODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DEGREES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DES_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DIMENSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.DISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ELT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENDPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ENVELOPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EQUALS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXPORT_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.EXTRACTVALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FIELD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FIND_IN_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FLOOR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FOUND_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_BASE64);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_DAYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.FROM_UNIXTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMCOLLFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMETRYTYPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GEOMFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GET_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GLENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GREATEST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.GTID_SUBTRACT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IFNULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_ATON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INET6_NTOA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_ATON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INET_NTOA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INSTR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERIORRINGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.INTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISCLOSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISEMPTY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISNULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ISSIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_FREE_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_COMPAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV4_MAPPED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_IPV6);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.IS_USED_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LAST_INSERT_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LCASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LEAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOAD_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG10);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOG2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LOWER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LPAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.LTRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKEDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKETIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MAKE_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MASTER_POS_WAIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRCONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRDISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBREQUAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRINTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBROVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRTOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MBRWITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MD5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MLINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MONTHNAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MPOLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTILINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.MULTIPOLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NAME_CONST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NULLIF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMGEOMETRIES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMINTERIORRINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.NUMPOINTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OCT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OCTET_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.OVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_ADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PERIOD_DIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.PI);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POINTN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.POWER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUARTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.QUOTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RADIANS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RAND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RANDOM_BYTES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RELEASE_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.REVERSE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROUND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ROW_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RPAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.RTRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SEC_TO_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SESSION_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA1);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SHA2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SIGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SLEEP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SOUNDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SQRT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SRID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STARTPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STRCMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.STR_TO_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_AREA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASBINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ASWKT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_BUFFER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CENTROID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_CROSSES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIFFERENCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DIMENSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_DISTANCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENDPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ENVELOPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EQUALS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_EXTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMTXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMCOLLFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMETRYTYPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_GEOMFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERIORRINGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_INTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISCLOSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISEMPTY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_ISSIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_LINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMGEOMETRIES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMINTERIORRINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_NUMPOINTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_OVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POINTN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_POLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SRID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_STARTPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_SYMDIFFERENCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_TOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_UNION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_WITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_X);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.ST_Y);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBSTRING_INDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SUBTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.SYSTEM_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMEDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIMESTAMPDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TIME_TO_SEC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_BASE64);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_DAYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.TO_SECONDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UCASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNCOMPRESSED_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNHEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UNIX_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UPDATEXML);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UPPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.UUID_SHORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VALIDATE_PASSWORD_STRENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.VERSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKDAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEEKOFYEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WEIGHT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.WITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.YEARWEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.Y_FUNCTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUME(Tokens.X_FUNCTION);
          }
        }
      ]);
      });
    
      chevrotain.Parser.performSelfAnalysis(this);
    }}
  