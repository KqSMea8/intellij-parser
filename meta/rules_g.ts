class A {
  constructor() {
      this.RULE('root', () => {
        
        this.OPTION(() => {
          this.SUBRULENaN(this.sqlStatements);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.MINUSMINUS);
        });
      
this.CONSUMENaN(Tokens.EOF);
      });
    


      this.RULE('sqlStatements', () => {
        
        this.MANY(() => {
          this.SUBRULENaN(this.sqlStatement);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.MINUSMINUS);
        });
      
this.CONSUMENaN(Tokens.SEMI);

this.SUBRULENaN(this.emptyStatement);
        });
      
this.SUBRULENaN(this.sqlStatement);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.MINUSMINUS);
        });
      
this.CONSUMENaN(Tokens.SEMI);
        });
      

this.SUBRULENaN(this.emptyStatement);
      });
    


      this.RULE('sqlStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.ddlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dmlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.transactionStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.replicationStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.preparedStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.administrationStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.utilityStatement);
          }
        }
      ]);
    


      this.RULE('emptyStatement', () => {
        this.CONSUMENaN(Tokens.SEMI);
      });
    


      this.RULE('ddlStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.createDatabase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createIndex);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createTablespaceInnodb);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createTablespaceNdb);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createTrigger);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterDatabase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterInstance);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterTablespace);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.alterView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropDatabase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropEvent);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropIndex);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropLogfileGroup);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropProcedure);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropFunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropServer);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropTablespace);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropTrigger);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropView);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.renameTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.truncateTable);
          }
        }
      ]);
    


      this.RULE('dmlStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.insertStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.updateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.deleteStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.replaceStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.callStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.loadDataStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.loadXmlStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.doStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.handlerStatement);
          }
        }
      ]);
    


      this.RULE('transactionStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.startTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.beginWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.commitWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.rollbackWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.savepointStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.rollbackStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.releaseStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.lockTables);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.unlockTables);
          }
        }
      ]);
    


      this.RULE('replicationStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.changeMaster);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.changeReplicationFilter);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.purgeBinaryLogs);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.resetMaster);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.resetSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.startSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.stopSlave);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.startGroupReplication);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.stopGroupReplication);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaStartTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaEndTransaction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaPrepareStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaCommitWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaRollbackWork);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.xaRecoverWork);
          }
        }
      ]);
    


      this.RULE('preparedStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.prepareStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.executeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.deallocatePrepare);
          }
        }
      ]);
    


      this.RULE('compoundStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.blockStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.caseStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.ifStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.leaveStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.loopStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.repeatStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.whileStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.iterateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.returnStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.cursorStatement);
          }
        }
      ]);
    


      this.RULE('administrationStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.alterUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dropUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.grantStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.grantProxy);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.renameUser);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.revokeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.revokeProxy);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.analyzeTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.checkTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.checksumTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.optimizeTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.repairTable);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.createUdfunction);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.installPlugin);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.uninstallPlugin);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.setStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.showStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.binlogStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.cacheIndexStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.flushStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.killStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.loadIndexIntoCache);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.resetStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.shutdownStatement);
          }
        }
      ]);
    


      this.RULE('utilityStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.simpleDescribeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.fullDescribeStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.helpStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.useStatement);
          }
        }
      ]);
    


      this.RULE('createDatabase', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.SUBRULENaN(this.dbFormat);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifNotExists);
        });
      
this.SUBRULENaN(this.uid);

        this.MANY(() => {
          this.SUBRULENaN(this.createDatabaseOption);
        });
      
      });
    


      this.RULE('createEvent', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      
this.CONSUMENaN(Tokens.EVENT);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifNotExists);
        });
      
this.SUBRULENaN(this.fullId);
this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.SCHEDULE);
this.SUBRULENaN(this.scheduleExpression);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.COMPLETION);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NOT);
        });
      
this.CONSUMENaN(Tokens.PRESERVE);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.enableType);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COMMENT);
this.CONSUMENaN(Tokens.STRING_LITERAL);
        });
      
this.CONSUMENaN(Tokens.DO);
this.SUBRULENaN(this.routineBody);
      });
    


      this.RULE('createIndex', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.intimeAction);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.indexCategory);
        });
      
this.CONSUMENaN(Tokens.INDEX);
this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.SUBRULENaN(this.indexType);
        });
      
this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.tableName);
this.SUBRULENaN(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULENaN(this.indexOption);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ALGORITHM);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.algType);

this.CONSUMENaN(Tokens.LOCK);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.lockType);
        });
      
      });
    


      this.RULE('createLogfileGroup', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.CONSUMENaN(Tokens.LOGFILE);
this.CONSUMENaN(Tokens.GROUP);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ADD);
this.CONSUMENaN(Tokens.UNDOFILE);
this.SUBRULENaN(this.undoFile);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INITIAL_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.initSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.UNDO_BUFFER_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.undoSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.REDO_BUFFER_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.redoSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NODEGROUP);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.uid);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WAIT);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.comment);
        });
      
this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('createProcedure', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      
this.CONSUMENaN(Tokens.PROCEDURE);
this.SUBRULENaN(this.fullId);
this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.procedureParameter);
        });
      

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.procedureParameter);
        });
      
this.CONSUMENaN(Tokens.OP);

        this.MANY(() => {
          this.SUBRULENaN(this.routineOption);
        });
      
this.SUBRULENaN(this.routineBody);
      });
    


      this.RULE('createFunction', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      
this.CONSUMENaN(Tokens.FUNCTION);
this.SUBRULENaN(this.fullId);
this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.functionParameter);
        });
      

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.functionParameter);
        });
      
this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.RETURNS);
this.SUBRULENaN(this.dataType);

        this.MANY(() => {
          this.SUBRULENaN(this.routineOption);
        });
      
this.SUBRULENaN(this.routineBody);
      });
    


      this.RULE('createServer', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.CONSUMENaN(Tokens.SERVER);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.FOREIGN);
this.CONSUMENaN(Tokens.DATA);
this.CONSUMENaN(Tokens.WRAPPER);
this.SUBRULENaN(this.wrapperName);
this.CONSUMENaN(Tokens.OPTIONS);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.serverOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.serverOption);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('createTable', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.TEMPORARY);
        });
      
this.CONSUMENaN(Tokens.TABLE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifNotExists);
        });
      
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.LIKE);
this.SUBRULENaN(this.tableName);

this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.LIKE);
this.SUBRULENaN(this.parenthesisTable);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('createTablespaceInnodb', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.CONSUMENaN(Tokens.TABLESPACE);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ADD);
this.CONSUMENaN(Tokens.DATAFILE);
this.SUBRULENaN(this.datafile);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FILE_BLOCK_SIZE);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.fileBlockSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
        });
      
      });
    


      this.RULE('createTablespaceNdb', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.CONSUMENaN(Tokens.TABLESPACE);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ADD);
this.CONSUMENaN(Tokens.DATAFILE);
this.SUBRULENaN(this.datafile);
this.CONSUMENaN(Tokens.USE);
this.CONSUMENaN(Tokens.LOGFILE);
this.CONSUMENaN(Tokens.GROUP);
this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.EXTENT_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.extentSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INITIAL_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.initialSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AUTOEXTEND_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.autoextendSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.MAX_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.maxSize);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NODEGROUP);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.uid);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WAIT);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COMMENT);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.comment);
        });
      
this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('createTrigger', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      
this.CONSUMENaN(Tokens.TRIGGER);
this.SUBRULENaN(this.thisTrigger);
this.SUBRULENaN(this.triggerTime);
this.SUBRULENaN(this.triggerEvent);
this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.EACH);
this.CONSUMENaN(Tokens.ROW);

        this.OPTION(() => {
          this.SUBRULENaN(this.triggerPlace);
this.SUBRULENaN(this.otherTrigger);
        });
      
this.SUBRULENaN(this.routineBody);
      });
    


      this.RULE('createView', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OR);
this.CONSUMENaN(Tokens.REPLACE);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ALGORITHM);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.algType);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SQL);
this.CONSUMENaN(Tokens.SECURITY);
this.SUBRULENaN(this.secContext);
        });
      
this.CONSUMENaN(Tokens.VIEW);
this.SUBRULENaN(this.fullId);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.AS);
this.SUBRULENaN(this.selectStatement);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);

        this.OPTION(() => {
          this.SUBRULENaN(this.checkOption);
        });
      
this.CONSUMENaN(Tokens.CHECK);
this.CONSUMENaN(Tokens.OPTION);
        });
      
      });
    


      this.RULE('createDatabaseOption', this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.DEFAULT);
        });
      
this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.charsetName);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.DEFAULT);
        });
      
this.CONSUMENaN(Tokens.COLLATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.collationName);
          }
        }
      ]);
    


      this.RULE('ownerStatement', () => {
        this.CONSUMENaN(Tokens.DEFINER);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userName);

this.CONSUMENaN(Tokens.CURRENT_USER);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('scheduleExpression', () => {
        this.CONSUMENaN(Tokens.AT);
this.SUBRULENaN(this.timestampValue);

        this.MANY(() => {
          this.SUBRULENaN(this.intervalExpr);
        });
      
      });
    


      this.RULE('timestampValue', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURRENT_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.stringLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.expression);
          }
        }
      ]);
    


      this.RULE('intervalExpr', () => {
        this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.INTERVAL);
this.SUBRULENaN(this.decimalLiteral);

this.SUBRULENaN(this.expression);
this.SUBRULENaN(this.intervalType);
      });
    


      this.RULE('intervalType', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.intervalTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.YEAR_MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY_MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOUR_MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOUR_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MINUTE_SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SECOND_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MINUTE_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOUR_MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY_MICROSECOND);
          }
        }
      ]);
    


      this.RULE('enableType', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISABLE);
this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.SLAVE);
          }
        }
      ]);
    


      this.RULE('indexType', () => {
        this.CONSUMENaN(Tokens.USING);
this.CONSUMENaN(Tokens.BTREE);

this.CONSUMENaN(Tokens.HASH);
      });
    


      this.RULE('indexOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.KEY_BLOCK_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.fileSizeLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.indexType);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.PARSER);
this.SUBRULENaN(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMMENT);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ]);
    


      this.RULE('procedureParameter', () => {
        this.SUBRULENaN(this.direction);
this.SUBRULENaN(this.uid);
this.SUBRULENaN(this.dataType);
      });
    


      this.RULE('functionParameter', () => {
        this.SUBRULENaN(this.uid);
this.SUBRULENaN(this.dataType);
      });
    


      this.RULE('routineOption', () => {
        this.CONSUMENaN(Tokens.COMMENT);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('serverOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOST);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATABASE);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.USER);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PASSWORD);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOCKET);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OWNER);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PORT);
this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ]);
    


      this.RULE('createDefinitions', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.createDefinition);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.createDefinition);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('createDefinition', () => {
        this.SUBRULENaN(this.uid);
this.SUBRULENaN(this.columnDefinition);
      });
    


      this.RULE('columnDefinition', () => {
        this.SUBRULENaN(this.dataType);

        this.MANY(() => {
          this.SUBRULENaN(this.columnConstraint);
        });
      
      });
    


      this.RULE('columnConstraint', () => {
        this.SUBRULENaN(this.nullNotnull);
      });
    


      this.RULE('tableConstraint', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CONSTRAINT);

        this.OPTION(() => {
          this.SUBRULENaN(this.name);
        });
      
        });
      
this.CONSUMENaN(Tokens.PRIMARY);
this.CONSUMENaN(Tokens.KEY);

        this.OPTION(() => {
          this.SUBRULENaN(this.indexType);
        });
      
this.SUBRULENaN(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULENaN(this.indexOption);
        });
      
      });
    


      this.RULE('referenceDefinition', () => {
        this.CONSUMENaN(Tokens.REFERENCES);
this.SUBRULENaN(this.tableName);
this.SUBRULENaN(this.indexColumnNames);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.MATCH);
this.SUBRULENaN(this.matchType);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.referenceAction);
        });
      
      });
    


      this.RULE('referenceAction', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.DELETE);
this.SUBRULENaN(this.onDelete);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.UPDATE);
this.SUBRULENaN(this.onUpdate);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.UPDATE);
this.SUBRULENaN(this.onUpdate);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.DELETE);
this.SUBRULENaN(this.onDelete);
        });
      
          }
        }
      ]);
    


      this.RULE('referenceControlType', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RESTRICT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CASCADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SET);
this.CONSUMENaN(Tokens.NULL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NO);
this.CONSUMENaN(Tokens.ACTION);
          }
        }
      ]);
    


      this.RULE('indexColumnDefinition', () => {
        this.SUBRULENaN(this.indexFormat);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.indexType);
        });
      
this.SUBRULENaN(this.indexColumnNames);

        this.MANY(() => {
          this.SUBRULENaN(this.indexOption);
        });
      
      });
    


      this.RULE('tableOption', () => {
        this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('tablespaceStorage', () => {
        this.CONSUMENaN(Tokens.STORAGE);
this.CONSUMENaN(Tokens.DISK);

this.CONSUMENaN(Tokens.MEMORY);

this.CONSUMENaN(Tokens.DEFAULT);
      });
    


      this.RULE('partitionDefinitions', () => {
        this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.partitionFunctionDefinition);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITIONS);
this.SUBRULENaN(this.count);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SUBPARTITION);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.subpartitionFunctionDefinition);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SUBPARTITIONS);
this.SUBRULENaN(this.subCount);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinition);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinition);
        });
      
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('partitionFunctionDefinition', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LINEAR);
        });
      
this.CONSUMENaN(Tokens.HASH);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('subpartitionFunctionDefinition', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LINEAR);
        });
      
this.CONSUMENaN(Tokens.HASH);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('partitionDefinition', () => {
        this.CONSUMENaN(Tokens.PARTITION);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.VALUES);
this.CONSUMENaN(Tokens.LESS);
this.CONSUMENaN(Tokens.THAN);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinerAtom);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinerAtom);
        });
      
this.CONSUMENaN(Tokens.OP);

        this.MANY(() => {
          this.SUBRULENaN(this.partitionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.subpartitionDefinition);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.subpartitionDefinition);
        });
      
        });
      
      });
    


      this.RULE('partitionDefinerAtom', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAXVALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.expression);
          }
        }
      ]);
    


      this.RULE('partitionDefinerVector', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinerAtom);

        this.AT_LEAST_ONE(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionDefinerAtom);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('subpartitionDefinition', () => {
        this.CONSUMENaN(Tokens.SUBPARTITION);
this.SUBRULENaN(this.uid);

        this.MANY(() => {
          this.SUBRULENaN(this.partitionOption);
        });
      
      });
    


      this.RULE('partitionOption', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.STORAGE);
        });
      
this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('alterDatabase', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.SUBRULENaN(this.dbFormat);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.createDatabaseOption);
        });
      
      });
    


      this.RULE('alterEvent', () => {
        this.CONSUMENaN(Tokens.ALTER);

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      
this.CONSUMENaN(Tokens.EVENT);
this.SUBRULENaN(this.fullId);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.SCHEDULE);
this.SUBRULENaN(this.scheduleExpression);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.COMPLETION);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NOT);
        });
      
this.CONSUMENaN(Tokens.PRESERVE);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.RENAME);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.fullId);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.enableType);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COMMENT);
this.CONSUMENaN(Tokens.STRING_LITERAL);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.DO);
this.SUBRULENaN(this.routineBody);
        });
      
      });
    


      this.RULE('alterFunction', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.FUNCTION);
this.SUBRULENaN(this.fullId);

        this.MANY(() => {
          this.SUBRULENaN(this.routineOption);
        });
      
      });
    


      this.RULE('alterInstance', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.INSTANCE);
this.CONSUMENaN(Tokens.ROTATE);
this.CONSUMENaN(Tokens.INNODB);
this.CONSUMENaN(Tokens.MASTER);
this.CONSUMENaN(Tokens.KEY);
      });
    


      this.RULE('alterLogfileGroup', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.LOGFILE);
this.CONSUMENaN(Tokens.GROUP);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ADD);
this.CONSUMENaN(Tokens.UNDOFILE);
this.CONSUMENaN(Tokens.STRING_LITERAL);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INITIAL_SIZE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.fileSizeLiteral);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WAIT);
        });
      
this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('alterProcedure', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.PROCEDURE);
this.SUBRULENaN(this.fullId);

        this.MANY(() => {
          this.SUBRULENaN(this.routineOption);
        });
      
      });
    


      this.RULE('alterServer', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.SERVER);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.OPTIONS);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.serverOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.serverOption);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('alterTable', () => {
        this.CONSUMENaN(Tokens.ALTER);

        this.OPTION(() => {
          this.SUBRULENaN(this.intimeAction);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tableName);
this.SUBRULENaN(this.alterSpecification);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.alterSpecification);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.partitionDefinitions);
        });
      
      });
    


      this.RULE('alterTablespace', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.TABLESPACE);
this.SUBRULENaN(this.uid);
this.SUBRULENaN(this.objectAction);
this.CONSUMENaN(Tokens.DATAFILE);
this.CONSUMENaN(Tokens.STRING_LITERAL);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INITIAL_SIZE);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.fileSizeLiteral);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WAIT);
        });
      
this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('alterView', () => {
        this.CONSUMENaN(Tokens.ALTER);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ALGORITHM);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.algType);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.ownerStatement);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SQL);
this.CONSUMENaN(Tokens.SECURITY);
this.SUBRULENaN(this.secContext);
        });
      
this.CONSUMENaN(Tokens.VIEW);
this.SUBRULENaN(this.fullId);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.AS);
this.SUBRULENaN(this.selectStatement);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);

        this.OPTION(() => {
          this.SUBRULENaN(this.checkOpt);
        });
      
this.CONSUMENaN(Tokens.CHECK);
this.CONSUMENaN(Tokens.OPTION);
        });
      
      });
    


      this.RULE('alterSpecification', () => {
        this.SUBRULENaN(this.tableOption);
      });
    


      this.RULE('dropDatabase', () => {
        this.CONSUMENaN(Tokens.DROP);
this.SUBRULENaN(this.dbFormat);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('dropEvent', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.EVENT);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.fullId);
      });
    


      this.RULE('dropIndex', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.INDEX);

        this.OPTION(() => {
          this.SUBRULENaN(this.intimeAction);
        });
      
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ALGORITHM);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.algType);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LOCK);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.lockType);
        });
      
      });
    


      this.RULE('dropLogfileGroup', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.LOGFILE);
this.CONSUMENaN(Tokens.GROUP);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.ENGINE);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.engineName);
      });
    


      this.RULE('dropProcedure', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.PROCEDURE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.fullId);
      });
    


      this.RULE('dropFunction', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.FUNCTION);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.fullId);
      });
    


      this.RULE('dropServer', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.SERVER);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('dropTable', () => {
        this.CONSUMENaN(Tokens.DROP);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.TEMPORARY);
        });
      
this.CONSUMENaN(Tokens.TABLE);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.tables);

        this.OPTION(() => {
          this.SUBRULENaN(this.dropType);
        });
      
      });
    


      this.RULE('dropTablespace', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.TABLESPACE);
this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ENGINE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.engineName);
        });
      
      });
    


      this.RULE('dropTrigger', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.TRIGGER);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.fullId);
      });
    


      this.RULE('dropView', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.VIEW);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.fullId);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.fullId);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.dropType);
        });
      
      });
    


      this.RULE('renameTable', () => {
        this.CONSUMENaN(Tokens.RENAME);
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.renameTableClause);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.renameTableClause);
        });
      
      });
    


      this.RULE('renameTableClause', () => {
        this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.tableName);
      });
    


      this.RULE('truncateTable', () => {
        this.CONSUMENaN(Tokens.TRUNCATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.TABLE);
        });
      
this.SUBRULENaN(this.tableName);
      });
    


      this.RULE('callStatement', () => {
        this.CONSUMENaN(Tokens.CALL);
this.SUBRULENaN(this.fullId);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.constants);

this.SUBRULENaN(this.expressions);
        });
      
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('deleteStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.singleDeleteStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.multipleDeleteStatement);
          }
        }
      ]);
    


      this.RULE('doStatement', () => {
        this.CONSUMENaN(Tokens.DO);
this.SUBRULENaN(this.expressions);
      });
    


      this.RULE('handlerStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.handlerOpenStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.handlerReadIndexStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.handlerReadStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.handlerCloseStatement);
          }
        }
      ]);
    


      this.RULE('insertStatement', () => {
        this.CONSUMENaN(Tokens.INSERT);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INTO);
        });
      
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitions);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.columns);
this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.insertStatementValue);

this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.setFirst);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.setElements);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.DUPLICATE);
this.CONSUMENaN(Tokens.KEY);
this.CONSUMENaN(Tokens.UPDATE);
this.SUBRULENaN(this.duplicatedFirst);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.duplicatedElements);
        });
      
        });
      
      });
    


      this.RULE('loadDataStatement', () => {
        this.CONSUMENaN(Tokens.LOAD);
this.CONSUMENaN(Tokens.DATA);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LOCAL);
        });
      
this.CONSUMENaN(Tokens.INFILE);
this.SUBRULENaN(this.filename);

        this.OPTION(() => {
          this.SUBRULENaN(this.violation);
        });
      
this.CONSUMENaN(Tokens.INTO);
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.charset);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.fieldsFormat);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.selectFieldsInto);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LINES);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.selectLinesInto);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
this.SUBRULENaN(this.decimalLiteral);
this.SUBRULENaN(this.linesFormat);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.assignmentField);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.assignmentField);
        });
      
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.updatedElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.updatedElement);
        });
      
        });
      
      });
    


      this.RULE('loadXmlStatement', () => {
        this.CONSUMENaN(Tokens.LOAD);
this.CONSUMENaN(Tokens.XML);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LOCAL);
        });
      
this.CONSUMENaN(Tokens.INFILE);
this.SUBRULENaN(this.filename);

        this.OPTION(() => {
          this.SUBRULENaN(this.violation);
        });
      
this.CONSUMENaN(Tokens.INTO);
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.charset);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ROWS);
this.CONSUMENaN(Tokens.IDENTIFIED);
this.CONSUMENaN(Tokens.BY);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tag);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
this.SUBRULENaN(this.decimalLiteral);
this.SUBRULENaN(this.linesFormat);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.assignmentField);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.assignmentField);
        });
      
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.updatedElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.updatedElement);
        });
      
        });
      
      });
    


      this.RULE('replaceStatement', () => {
        this.CONSUMENaN(Tokens.REPLACE);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INTO);
        });
      
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitions);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.columns);
this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.insertStatementValue);

this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.setFirst);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.setElements);
        });
      
      });
    


      this.RULE('selectStatement', () => {
        this.SUBRULENaN(this.querySpecification);

        this.OPTION(() => {
          this.SUBRULENaN(this.lockClause);
        });
      
      });
    


      this.RULE('updateStatement', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.singleUpdateStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.multipleUpdateStatement);
          }
        }
      ]);
    


      this.RULE('insertStatementValue', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.selectStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.insertFormat);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expressionsWithDefaults);
this.CONSUMENaN(Tokens.OP);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expressionsWithDefaults);
this.CONSUMENaN(Tokens.OP);
        });
      
          }
        }
      ]);
    


      this.RULE('updatedElement', () => {
        this.SUBRULENaN(this.fullColumnName);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);

this.CONSUMENaN(Tokens.DEFAULT);
      });
    


      this.RULE('assignmentField', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCAL_ID);
          }
        }
      ]);
    


      this.RULE('lockClause', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.UPDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCK);
this.CONSUMENaN(Tokens.IN);
this.CONSUMENaN(Tokens.SHARE);
this.CONSUMENaN(Tokens.MODE);
          }
        }
      ]);
    


      this.RULE('singleDeleteStatement', () => {
        this.CONSUMENaN(Tokens.DELETE);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      
this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LIMIT);
this.SUBRULENaN(this.decimalLiteral);
        });
      
      });
    


      this.RULE('multipleDeleteStatement', () => {
        this.CONSUMENaN(Tokens.DELETE);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      
        });
      
this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.tableSources);

this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      
        });
      
this.CONSUMENaN(Tokens.USING);
this.SUBRULENaN(this.tableSources);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      
      });
    


      this.RULE('handlerOpenStatement', () => {
        this.CONSUMENaN(Tokens.HANDLER);
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.OPEN);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AS);
        });
      
this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('handlerReadIndexStatement', () => {
        this.CONSUMENaN(Tokens.HANDLER);
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.READ);
this.SUBRULENaN(this.index);
this.SUBRULENaN(this.comparisonOperator);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.constants);
this.CONSUMENaN(Tokens.OP);

this.SUBRULENaN(this.moveOrder);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LIMIT);
this.SUBRULENaN(this.decimalLiteral);
        });
      
      });
    


      this.RULE('handlerReadStatement', () => {
        this.CONSUMENaN(Tokens.HANDLER);
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.READ);
this.SUBRULENaN(this.moveOrder);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LIMIT);
this.SUBRULENaN(this.decimalLiteral);
        });
      
      });
    


      this.RULE('handlerCloseStatement', () => {
        this.CONSUMENaN(Tokens.HANDLER);
this.SUBRULENaN(this.tableName);
this.CONSUMENaN(Tokens.CLOSE);
      });
    


      this.RULE('singleUpdateStatement', () => {
        this.CONSUMENaN(Tokens.UPDATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AS);
        });
      
this.SUBRULENaN(this.uid);
        });
      
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.updatedElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.updatedElement);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.limitClause);
        });
      
      });
    


      this.RULE('multipleUpdateStatement', () => {
        this.CONSUMENaN(Tokens.UPDATE);

        this.OPTION(() => {
          this.SUBRULENaN(this.priority);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
        });
      
this.SUBRULENaN(this.tableSources);
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.updatedElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.updatedElement);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
        });
      
      });
    


      this.RULE('orderByClause', () => {
        this.CONSUMENaN(Tokens.ORDER);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.orderByExpression);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.orderByExpression);
        });
      
      });
    


      this.RULE('orderByExpression', () => {
        this.SUBRULENaN(this.expression);

        this.OPTION(() => {
          this.SUBRULENaN(this.order);
        });
      
      });
    


      this.RULE('tableSources', () => {
        this.SUBRULENaN(this.tableSource);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tableSource);
        });
      
      });
    


      this.RULE('tableSource', () => {
        this.SUBRULENaN(this.tableSourceItem);

        this.MANY(() => {
          this.SUBRULENaN(this.joinPart);
        });
      
      });
    


      this.RULE('tableSourceItem', () => {
        this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AS);
        });
      
this.SUBRULENaN(this.alias);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.indexHint);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.indexHint);
        });
      
        });
      
      });
    


      this.RULE('indexHint', () => {
        this.SUBRULENaN(this.indexHintAction);
this.SUBRULENaN(this.keyFormat);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FOR);
this.SUBRULENaN(this.indexHintType);
        });
      
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('indexHintType', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.JOIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ORDER);
this.CONSUMENaN(Tokens.BY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GROUP);
this.CONSUMENaN(Tokens.BY);
          }
        }
      ]);
    


      this.RULE('joinPart', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INNER);

this.CONSUMENaN(Tokens.CROSS);
        });
      
this.CONSUMENaN(Tokens.JOIN);
this.SUBRULENaN(this.tableSourceItem);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.expression);

this.CONSUMENaN(Tokens.USING);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('queryExpression', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.querySpecification);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.queryExpression);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('queryExpressionNointo', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.querySpecificationNointo);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.queryExpressionNointo);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('querySpecification', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SELECT);

        this.MANY(() => {
          this.SUBRULENaN(this.selectSpec);
        });
      
this.SUBRULENaN(this.selectElements);

        this.OPTION(() => {
          this.SUBRULENaN(this.selectIntoExpression);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.fromClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.limitClause);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SELECT);

        this.MANY(() => {
          this.SUBRULENaN(this.selectSpec);
        });
      
this.SUBRULENaN(this.selectElements);

        this.OPTION(() => {
          this.SUBRULENaN(this.fromClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.limitClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.selectIntoExpression);
        });
      
          }
        }
      ]);
    


      this.RULE('querySpecificationNointo', () => {
        this.CONSUMENaN(Tokens.SELECT);

        this.MANY(() => {
          this.SUBRULENaN(this.selectSpec);
        });
      
this.SUBRULENaN(this.selectElements);

        this.OPTION(() => {
          this.SUBRULENaN(this.fromClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.orderByClause);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.limitClause);
        });
      
      });
    


      this.RULE('unionParenthesis', () => {
        this.CONSUMENaN(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULENaN(this.unionType);
        });
      
this.SUBRULENaN(this.queryExpressionNointo);
      });
    


      this.RULE('unionStatement', () => {
        this.CONSUMENaN(Tokens.UNION);

        this.OPTION(() => {
          this.SUBRULENaN(this.unionType);
        });
      
this.SUBRULENaN(this.querySpecificationNointo);

this.SUBRULENaN(this.queryExpressionNointo);
      });
    


      this.RULE('selectSpec', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ALL);

this.CONSUMENaN(Tokens.DISTINCT);

this.CONSUMENaN(Tokens.DISTINCTROW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HIGH_PRIORITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRAIGHT_JOIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_SMALL_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_BIG_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_BUFFER_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_CACHE);

this.CONSUMENaN(Tokens.SQL_NO_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_CALC_FOUND_ROWS);
          }
        }
      ]);
    


      this.RULE('selectElements', () => {
        this.SUBRULENaN(this.star);

this.SUBRULENaN(this.selectElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.selectElement);
        });
      
      });
    


      this.RULE('selectElement', () => {
        this.SUBRULENaN(this.fullId);
this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('selectIntoExpression', () => {
        this.CONSUMENaN(Tokens.INTO);
this.SUBRULENaN(this.assignmentField);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.assignmentField);
        });
      
      });
    


      this.RULE('selectFieldsInto', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TERMINATED);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.terminationField);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OPTIONALLY);
        });
      
this.CONSUMENaN(Tokens.ENCLOSED);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.enclosion);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ESCAPED);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.escaping);
          }
        }
      ]);
    


      this.RULE('selectLinesInto', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STARTING);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.starting);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TERMINATED);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.terminationLine);
          }
        }
      ]);
    


      this.RULE('fromClause', () => {
        this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.tableSources);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.whereExpr);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.GROUP);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.groupByItem);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.groupByItem);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.ROLLUP);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.HAVING);
this.SUBRULENaN(this.havingExpr);
        });
      
      });
    


      this.RULE('groupByItem', () => {
        this.SUBRULENaN(this.expression);

        this.OPTION(() => {
          this.SUBRULENaN(this.order);
        });
      
      });
    


      this.RULE('limitClause', () => {
        this.CONSUMENaN(Tokens.LIMIT);

        this.OPTION(() => {
          this.SUBRULENaN(this.offset);
this.CONSUMENaN(Tokens.OP);
        });
      
this.SUBRULENaN(this.limit);

this.SUBRULENaN(this.limit);
this.CONSUMENaN(Tokens.OFFSET);
this.SUBRULENaN(this.offset);
      });
    


      this.RULE('startTransaction', () => {
        this.CONSUMENaN(Tokens.START);
this.CONSUMENaN(Tokens.TRANSACTION);

        this.OPTION(() => {
          this.SUBRULENaN(this.transactionMode);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.transactionMode);
        });
      
        });
      
      });
    


      this.RULE('beginWork', () => {
        this.CONSUMENaN(Tokens.BEGIN);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WORK);
        });
      
      });
    


      this.RULE('commitWork', () => {
        this.CONSUMENaN(Tokens.COMMIT);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WORK);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AND);

        this.OPTION(() => {
          this.SUBRULENaN(this.nochain);
        });
      
this.CONSUMENaN(Tokens.CHAIN);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULENaN(this.norelease);
        });
      
this.CONSUMENaN(Tokens.RELEASE);
        });
      
      });
    


      this.RULE('rollbackWork', () => {
        this.CONSUMENaN(Tokens.ROLLBACK);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WORK);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AND);

        this.OPTION(() => {
          this.SUBRULENaN(this.nochain);
        });
      
this.CONSUMENaN(Tokens.CHAIN);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULENaN(this.norelease);
        });
      
this.CONSUMENaN(Tokens.RELEASE);
        });
      
      });
    


      this.RULE('savepointStatement', () => {
        this.CONSUMENaN(Tokens.SAVEPOINT);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('rollbackStatement', () => {
        this.CONSUMENaN(Tokens.ROLLBACK);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WORK);
        });
      
this.CONSUMENaN(Tokens.TO);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SAVEPOINT);
        });
      
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('releaseStatement', () => {
        this.CONSUMENaN(Tokens.RELEASE);
this.CONSUMENaN(Tokens.SAVEPOINT);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('lockTables', () => {
        this.CONSUMENaN(Tokens.LOCK);
this.CONSUMENaN(Tokens.TABLES);
this.SUBRULENaN(this.lockTableElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.lockTableElement);
        });
      
      });
    


      this.RULE('unlockTables', () => {
        this.CONSUMENaN(Tokens.UNLOCK);
this.CONSUMENaN(Tokens.TABLES);
      });
    


      this.RULE('setAutocommitStatement', () => {
        this.CONSUMENaN(Tokens.SET);
this.CONSUMENaN(Tokens.AUTOCOMMIT);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.autocommitValue);
      });
    


      this.RULE('setTransactionStatement', () => {
        this.CONSUMENaN(Tokens.SET);

        this.OPTION(() => {
          this.SUBRULENaN(this.transactionContext);
        });
      
this.CONSUMENaN(Tokens.TRANSACTION);
this.SUBRULENaN(this.transactionOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.transactionOption);
        });
      
      });
    


      this.RULE('transactionMode', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.CONSISTENT);
this.CONSUMENaN(Tokens.SNAPSHOT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.ONLY);
          }
        }
      ]);
    


      this.RULE('lockTableElement', () => {
        this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AS);
        });
      
this.SUBRULENaN(this.uid);
        });
      
this.SUBRULENaN(this.lockAction);
      });
    


      this.RULE('lockAction', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LOCAL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.LOW_PRIORITY);
        });
      
this.CONSUMENaN(Tokens.WRITE);
          }
        }
      ]);
    


      this.RULE('transactionOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISOLATION);
this.CONSUMENaN(Tokens.LEVEL);
this.SUBRULENaN(this.transactionLevel);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.ONLY);
          }
        }
      ]);
    


      this.RULE('transactionLevel', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPEATABLE);
this.CONSUMENaN(Tokens.READ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.COMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.UNCOMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SERIALIZABLE);
          }
        }
      ]);
    


      this.RULE('changeMaster', () => {
        this.CONSUMENaN(Tokens.CHANGE);
this.CONSUMENaN(Tokens.MASTER);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.masterOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.masterOption);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.channelOption);
        });
      
      });
    


      this.RULE('changeReplicationFilter', () => {
        this.CONSUMENaN(Tokens.CHANGE);
this.CONSUMENaN(Tokens.REPLICATION);
this.CONSUMENaN(Tokens.FILTER);
this.SUBRULENaN(this.replicationFilter);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.replicationFilter);
        });
      
      });
    


      this.RULE('purgeBinaryLogs', () => {
        this.CONSUMENaN(Tokens.PURGE);
this.SUBRULENaN(this.purgeFormat);
this.CONSUMENaN(Tokens.LOGS);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.fileName);

this.CONSUMENaN(Tokens.BEFORE);
this.SUBRULENaN(this.timeValue);
      });
    


      this.RULE('resetMaster', () => {
        this.CONSUMENaN(Tokens.RESET);
this.CONSUMENaN(Tokens.MASTER);
      });
    


      this.RULE('resetSlave', () => {
        this.CONSUMENaN(Tokens.RESET);
this.CONSUMENaN(Tokens.SLAVE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ALL);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.channelOption);
        });
      
      });
    


      this.RULE('startSlave', () => {
        this.CONSUMENaN(Tokens.START);
this.CONSUMENaN(Tokens.SLAVE);

        this.OPTION(() => {
          this.SUBRULENaN(this.threadType);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.threadType);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.UNTIL);
this.SUBRULENaN(this.untilOption);
        });
      

        this.MANY(() => {
          this.SUBRULENaN(this.connectionOption);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.channelOption);
        });
      
      });
    


      this.RULE('stopSlave', () => {
        this.CONSUMENaN(Tokens.STOP);
this.CONSUMENaN(Tokens.SLAVE);

        this.OPTION(() => {
          this.SUBRULENaN(this.threadType);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.threadType);
        });
      
        });
      
      });
    


      this.RULE('startGroupReplication', () => {
        this.CONSUMENaN(Tokens.START);
this.CONSUMENaN(Tokens.GROUP_REPLICATION);
      });
    


      this.RULE('stopGroupReplication', () => {
        this.CONSUMENaN(Tokens.STOP);
this.CONSUMENaN(Tokens.GROUP_REPLICATION);
      });
    


      this.RULE('masterOption', () => {
        this.SUBRULENaN(this.stringMasterOption);
this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('stringMasterOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_BIND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELAY_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CAPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CRL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CRLPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_TLS_VERSION);
          }
        }
      ]);
    


      this.RULE('decimalMasterOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_CONNECT_RETRY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_RETRY_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_DELAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELAY_LOG_POS);
          }
        }
      ]);
    


      this.RULE('boolMasterOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_AUTO_POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
          }
        }
      ]);
    


      this.RULE('channelOption', () => {
        this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.CHANNEL);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('replicationFilter', () => {
        this.CONSUMENaN(Tokens.REPLICATE_DO_DB);
this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('tablePair', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.firstTable);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.secondTable);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('threadType', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IO_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_THREAD);
          }
        }
      ]);
    


      this.RULE('untilOption', () => {
        this.SUBRULENaN(this.gtids);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.gtuidSet);
      });
    


      this.RULE('connectionOption', () => {
        this.CONSUMENaN(Tokens.USER);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.conOptUser);
      });
    


      this.RULE('gtuidSet', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.uuidSet);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uuidSet);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ]);
    


      this.RULE('xaStartTransaction', () => {
        this.CONSUMENaN(Tokens.XA);
this.SUBRULENaN(this.xaStart);
this.SUBRULENaN(this.xid);

        this.OPTION(() => {
          this.SUBRULENaN(this.xaAction);
        });
      
      });
    


      this.RULE('xaEndTransaction', () => {
        this.CONSUMENaN(Tokens.XA);
this.CONSUMENaN(Tokens.END);
this.SUBRULENaN(this.xid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SUSPEND);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.MIGRATE);
        });
      
        });
      
      });
    


      this.RULE('xaPrepareStatement', () => {
        this.CONSUMENaN(Tokens.XA);
this.CONSUMENaN(Tokens.PREPARE);
this.SUBRULENaN(this.xid);
      });
    


      this.RULE('xaCommitWork', () => {
        this.CONSUMENaN(Tokens.XA);
this.CONSUMENaN(Tokens.COMMIT);
this.SUBRULENaN(this.xid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ONE);
this.CONSUMENaN(Tokens.PHASE);
        });
      
      });
    


      this.RULE('xaRollbackWork', () => {
        this.CONSUMENaN(Tokens.XA);
this.CONSUMENaN(Tokens.ROLLBACK);
this.SUBRULENaN(this.xid);
      });
    


      this.RULE('xaRecoverWork', () => {
        this.CONSUMENaN(Tokens.XA);
this.CONSUMENaN(Tokens.RECOVER);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CONVERT);
this.SUBRULENaN(this.xid);
        });
      
      });
    


      this.RULE('prepareStatement', () => {
        this.CONSUMENaN(Tokens.PREPARE);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.query);

this.SUBRULENaN(this.variable);
      });
    


      this.RULE('executeStatement', () => {
        this.CONSUMENaN(Tokens.EXECUTE);
this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.USING);
this.SUBRULENaN(this.userVariables);
        });
      
      });
    


      this.RULE('deallocatePrepare', () => {
        this.SUBRULENaN(this.dropFormat);
this.CONSUMENaN(Tokens.PREPARE);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('routineBody', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.blockStatement);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.sqlStatement);
          }
        }
      ]);
    


      this.RULE('blockStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.BEGIN);

        this.OPTION(() => {
          
        this.MANY(() => {
          this.SUBRULENaN(this.declareVariable);
this.CONSUMENaN(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULENaN(this.declareCondition);
this.CONSUMENaN(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULENaN(this.declareCursor);
this.CONSUMENaN(Tokens.SEMI);
        });
      

        this.MANY(() => {
          this.SUBRULENaN(this.declareHandler);
this.CONSUMENaN(Tokens.SEMI);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
        });
      
this.CONSUMENaN(Tokens.END);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('caseStatement', () => {
        this.CONSUMENaN(Tokens.CASE);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);

this.SUBRULENaN(this.expression);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.caseAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ELSE);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
        });
      
this.CONSUMENaN(Tokens.END);
this.CONSUMENaN(Tokens.CASE);
      });
    


      this.RULE('ifStatement', () => {
        this.CONSUMENaN(Tokens.IF);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.THEN);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.thenStatements);
        });
      

        this.MANY(() => {
          this.SUBRULENaN(this.elifAlternative);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ELSE);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.elseStatements);
        });
      
        });
      
this.CONSUMENaN(Tokens.END);
this.CONSUMENaN(Tokens.IF);
      });
    


      this.RULE('iterateStatement', () => {
        this.CONSUMENaN(Tokens.ITERATE);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('leaveStatement', () => {
        this.CONSUMENaN(Tokens.LEAVE);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('loopStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.LOOP);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
this.CONSUMENaN(Tokens.END);
this.CONSUMENaN(Tokens.LOOP);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('repeatStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.REPEAT);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
this.CONSUMENaN(Tokens.UNTIL);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.END);
this.CONSUMENaN(Tokens.REPEAT);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('returnStatement', () => {
        this.CONSUMENaN(Tokens.RETURN);
this.SUBRULENaN(this.expression);
      });
    


      this.RULE('whileStatement', () => {
        
        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.WHILE);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.DO);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
this.CONSUMENaN(Tokens.END);
this.CONSUMENaN(Tokens.WHILE);

        this.OPTION(() => {
          this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('cursorStatement', () => {
        this.CONSUMENaN(Tokens.CLOSE);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('declareVariable', () => {
        this.CONSUMENaN(Tokens.DECLARE);
this.SUBRULENaN(this.uidList);
this.SUBRULENaN(this.dataType);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.DEFAULT);
this.SUBRULENaN(this.defaultValue);
        });
      
      });
    


      this.RULE('declareCondition', () => {
        this.CONSUMENaN(Tokens.DECLARE);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.CONDITION);
this.CONSUMENaN(Tokens.FOR);
this.SUBRULENaN(this.decimalLiteral);

this.CONSUMENaN(Tokens.SQLSTATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.VALUE);
        });
      
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('declareCursor', () => {
        this.CONSUMENaN(Tokens.DECLARE);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.CURSOR);
this.CONSUMENaN(Tokens.FOR);
this.SUBRULENaN(this.selectStatement);
      });
    


      this.RULE('declareHandler', () => {
        this.CONSUMENaN(Tokens.DECLARE);
this.SUBRULENaN(this.handlerAction);
this.CONSUMENaN(Tokens.HANDLER);
this.CONSUMENaN(Tokens.FOR);
this.SUBRULENaN(this.handlerConditionValue);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.handlerConditionValue);
        });
      
this.SUBRULENaN(this.routineBody);
      });
    


      this.RULE('handlerConditionValue', () => {
        this.SUBRULENaN(this.decimalLiteral);
      });
    


      this.RULE('procedureSqlStatement', () => {
        this.SUBRULENaN(this.compoundStatement);

this.SUBRULENaN(this.sqlStatement);
this.CONSUMENaN(Tokens.SEMI);
      });
    


      this.RULE('caseAlternative', () => {
        this.CONSUMENaN(Tokens.WHEN);
this.SUBRULENaN(this.constant);

this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.THEN);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
      });
    


      this.RULE('elifAlternative', () => {
        this.CONSUMENaN(Tokens.ELSEIF);
this.SUBRULENaN(this.expression);
this.CONSUMENaN(Tokens.THEN);

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.procedureSqlStatement);
        });
      
      });
    


      this.RULE('alterUser', () => {
        this.CONSUMENaN(Tokens.ALTER);
this.CONSUMENaN(Tokens.USER);
this.SUBRULENaN(this.userSpecification);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userSpecification);
        });
      
      });
    


      this.RULE('createUser', () => {
        this.CONSUMENaN(Tokens.CREATE);
this.CONSUMENaN(Tokens.USER);
this.SUBRULENaN(this.userAuthOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userAuthOption);
        });
      
      });
    


      this.RULE('dropUser', () => {
        this.CONSUMENaN(Tokens.DROP);
this.CONSUMENaN(Tokens.USER);

        this.OPTION(() => {
          this.SUBRULENaN(this.ifExists);
        });
      
this.SUBRULENaN(this.userName);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userName);
        });
      
      });
    


      this.RULE('grantStatement', () => {
        this.CONSUMENaN(Tokens.GRANT);
this.SUBRULENaN(this.privelegeClause);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.privelegeClause);
        });
      
this.CONSUMENaN(Tokens.ON);

        this.OPTION(() => {
          this.SUBRULENaN(this.privilegeObject);
        });
      
this.SUBRULENaN(this.privilegeLevel);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.userAuthOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userAuthOption);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.REQUIRE);
this.SUBRULENaN(this.tlsNone);

this.SUBRULENaN(this.tlsOption);

        this.MANY(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AND);
        });
      
this.SUBRULENaN(this.tlsOption);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.GRANT);
this.CONSUMENaN(Tokens.OPTION);

this.SUBRULENaN(this.userResourceOption);
        });
      
        });
      
      });
    


      this.RULE('grantProxy', () => {
        this.CONSUMENaN(Tokens.GRANT);
this.CONSUMENaN(Tokens.PROXY);
this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.fromFirst);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.toFirst);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.toOther);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.GRANT);
this.CONSUMENaN(Tokens.OPTION);
        });
      
      });
    


      this.RULE('renameUser', () => {
        this.CONSUMENaN(Tokens.RENAME);
this.CONSUMENaN(Tokens.USER);
this.SUBRULENaN(this.renameUserClause);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.renameUserClause);
        });
      
      });
    


      this.RULE('revokeStatement', () => {
        this.CONSUMENaN(Tokens.REVOKE);
this.SUBRULENaN(this.privelegeClause);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.privelegeClause);
        });
      
this.CONSUMENaN(Tokens.ON);

        this.OPTION(() => {
          this.SUBRULENaN(this.privilegeObject);
        });
      
this.SUBRULENaN(this.privilegeLevel);
this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.userName);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.userName);
        });
      
      });
    


      this.RULE('revokeProxy', () => {
        this.CONSUMENaN(Tokens.REVOKE);
this.CONSUMENaN(Tokens.PROXY);
this.CONSUMENaN(Tokens.ON);
this.SUBRULENaN(this.onUser);
this.CONSUMENaN(Tokens.FROM);
this.SUBRULENaN(this.fromFirst);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.fromOther);
        });
      
      });
    


      this.RULE('setPasswordStatement', () => {
        this.CONSUMENaN(Tokens.SET);
this.CONSUMENaN(Tokens.PASSWORD);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FOR);
this.SUBRULENaN(this.userName);
        });
      
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.passwordFunctionClause);

this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('userSpecification', () => {
        this.SUBRULENaN(this.userName);
this.SUBRULENaN(this.userPasswordOption);
      });
    


      this.RULE('userAuthOption', () => {
        this.SUBRULENaN(this.userName);
this.CONSUMENaN(Tokens.IDENTIFIED);
this.CONSUMENaN(Tokens.BY);
this.CONSUMENaN(Tokens.PASSWORD);
this.SUBRULENaN(this.hashed);
      });
    


      this.RULE('tlsOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.X509);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CIPHER);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISSUER);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBJECT);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ]);
    


      this.RULE('userResourceOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_QUERIES_PER_HOUR);
this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_UPDATES_PER_HOUR);
this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_CONNECTIONS_PER_HOUR);
this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_USER_CONNECTIONS);
this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ]);
    


      this.RULE('userPasswordOption', () => {
        this.CONSUMENaN(Tokens.PASSWORD);
this.CONSUMENaN(Tokens.EXPIRE);

        this.OPTION(() => {
          this.SUBRULENaN(this.expireType);

this.SUBRULENaN(this.expireType);

this.SUBRULENaN(this.expireType);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.DAY);
        });
      
      });
    


      this.RULE('userLockOption', () => {
        this.CONSUMENaN(Tokens.ACCOUNT);
this.SUBRULENaN(this.lockType);
      });
    


      this.RULE('privelegeClause', () => {
        this.SUBRULENaN(this.privilege);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('privilege', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ALL);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PRIVILEGES);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ALTER);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ROUTINE);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.TEMPORARY);
this.CONSUMENaN(Tokens.TABLES);

this.CONSUMENaN(Tokens.ROUTINE);

this.CONSUMENaN(Tokens.VIEW);

this.CONSUMENaN(Tokens.USER);

this.CONSUMENaN(Tokens.TABLESPACE);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DELETE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DROP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXECUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GRANT);
this.CONSUMENaN(Tokens.OPTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INSERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCK);
this.CONSUMENaN(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROCESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROXY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REFERENCES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELOAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATION);
this.CONSUMENaN(Tokens.CLIENT);

this.CONSUMENaN(Tokens.SLAVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SELECT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHOW);
this.CONSUMENaN(Tokens.VIEW);

this.CONSUMENaN(Tokens.DATABASES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHUTDOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRIGGER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UPDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.USAGE);
          }
        }
      ]);
    


      this.RULE('privilegeLevel', () => {
        this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('renameUserClause', () => {
        this.SUBRULENaN(this.fromFirst);
this.CONSUMENaN(Tokens.TO);
this.SUBRULENaN(this.toFirst);
      });
    


      this.RULE('analyzeTable', () => {
        this.CONSUMENaN(Tokens.ANALYZE);

        this.OPTION(() => {
          this.SUBRULENaN(this.actionOption);
        });
      
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tables);
      });
    


      this.RULE('checkTable', () => {
        this.CONSUMENaN(Tokens.CHECK);
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tables);

        this.MANY(() => {
          this.SUBRULENaN(this.checkTableOption);
        });
      
      });
    


      this.RULE('checksumTable', () => {
        this.CONSUMENaN(Tokens.CHECKSUM);
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tables);

        this.OPTION(() => {
          this.SUBRULENaN(this.actionOption);
        });
      
      });
    


      this.RULE('optimizeTable', () => {
        this.CONSUMENaN(Tokens.OPTIMIZE);

        this.OPTION(() => {
          this.SUBRULENaN(this.actionOption);
        });
      
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tables);
      });
    


      this.RULE('repairTable', () => {
        this.CONSUMENaN(Tokens.REPAIR);

        this.OPTION(() => {
          this.SUBRULENaN(this.actionOption);
        });
      
this.CONSUMENaN(Tokens.TABLE);
this.SUBRULENaN(this.tables);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.QUICK);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.EXTENDED);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.USE_FRM);
        });
      
      });
    


      this.RULE('checkTableOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.UPGRADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUICK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MEDIUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXTENDED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHANGED);
          }
        }
      ]);
    


      this.RULE('createUdfunction', () => {
        this.CONSUMENaN(Tokens.CREATE);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.AGGREGATE);
        });
      
this.CONSUMENaN(Tokens.FUNCTION);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.RETURNS);
this.SUBRULENaN(this.returnType);
this.CONSUMENaN(Tokens.SONAME);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('installPlugin', () => {
        this.CONSUMENaN(Tokens.INSTALL);
this.CONSUMENaN(Tokens.PLUGIN);
this.SUBRULENaN(this.uid);
this.CONSUMENaN(Tokens.SONAME);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('uninstallPlugin', () => {
        this.CONSUMENaN(Tokens.UNINSTALL);
this.CONSUMENaN(Tokens.PLUGIN);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('setStatement', () => {
        this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.variableClause);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.variableClause);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);
        });
      
      });
    


      this.RULE('showStatement', () => {
        this.CONSUMENaN(Tokens.SHOW);
this.SUBRULENaN(this.logFormat);
this.CONSUMENaN(Tokens.LOGS);
      });
    


      this.RULE('variableClause', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GLOBAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.GLOBAL);

this.CONSUMENaN(Tokens.SESSION);
        });
      
this.SUBRULENaN(this.uid);
          }
        }
      ]);
    


      this.RULE('showCommonEntity', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COLLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATABASES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SCHEMAS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FUNCTION);
this.CONSUMENaN(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROCEDURE);
this.CONSUMENaN(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.GLOBAL);

this.CONSUMENaN(Tokens.SESSION);
        });
      
this.CONSUMENaN(Tokens.STATUS);

this.CONSUMENaN(Tokens.VARIABLES);
          }
        }
      ]);
    


      this.RULE('showFilter', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LIKE);
this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WHERE);
this.SUBRULENaN(this.expression);
          }
        }
      ]);
    


      this.RULE('showGlobalInfoClause', this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.STORAGE);
        });
      
this.CONSUMENaN(Tokens.ENGINES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER);
this.CONSUMENaN(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PLUGINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PRIVILEGES);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FULL);
        });
      
this.CONSUMENaN(Tokens.PROCESSLIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROFILES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SLAVE);
this.CONSUMENaN(Tokens.HOSTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AUTHORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONTRIBUTORS);
          }
        }
      ]);
    


      this.RULE('showSchemaEntity', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVENTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TABLE);
this.CONSUMENaN(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.FULL);
        });
      
this.CONSUMENaN(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRIGGERS);
          }
        }
      ]);
    


      this.RULE('showProfileType', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ALL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BLOCK);
this.CONSUMENaN(Tokens.IO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONTEXT);
this.CONSUMENaN(Tokens.SWITCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CPU);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IPC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PAGE);
this.CONSUMENaN(Tokens.FAULTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOURCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SWAPS);
          }
        }
      ]);
    


      this.RULE('binlogStatement', () => {
        this.CONSUMENaN(Tokens.BINLOG);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('cacheIndexStatement', () => {
        this.CONSUMENaN(Tokens.CACHE);
this.CONSUMENaN(Tokens.INDEX);
this.SUBRULENaN(this.tableIndexes);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tableIndexes);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);

this.CONSUMENaN(Tokens.ALL);
this.CONSUMENaN(Tokens.OP);
        });
      
this.CONSUMENaN(Tokens.IN);
this.SUBRULENaN(this.schema);
      });
    


      this.RULE('flushStatement', () => {
        this.CONSUMENaN(Tokens.FLUSH);

        this.OPTION(() => {
          this.SUBRULENaN(this.flushFormat);
        });
      
this.SUBRULENaN(this.flushOption);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.flushOption);
        });
      
      });
    


      this.RULE('killStatement', () => {
        this.CONSUMENaN(Tokens.KILL);

        this.OPTION(() => {
          this.SUBRULENaN(this.connectionFormat);
        });
      

        this.AT_LEAST_ONE(() => {
          this.SUBRULENaN(this.decimalLiteral);
        });
      
      });
    


      this.RULE('loadIndexIntoCache', () => {
        this.CONSUMENaN(Tokens.LOAD);
this.CONSUMENaN(Tokens.INDEX);
this.CONSUMENaN(Tokens.INTO);
this.CONSUMENaN(Tokens.CACHE);
this.SUBRULENaN(this.loadedTableIndexes);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.loadedTableIndexes);
        });
      
      });
    


      this.RULE('resetStatement', () => {
        this.CONSUMENaN(Tokens.RESET);
this.CONSUMENaN(Tokens.QUERY);
this.CONSUMENaN(Tokens.CACHE);
      });
    


      this.RULE('shutdownStatement', () => {
        this.CONSUMENaN(Tokens.SHUTDOWN);
      });
    


      this.RULE('tableIndexes', () => {
        this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULENaN(this.indexFormat);
        });
      
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uidList);
this.CONSUMENaN(Tokens.OP);
        });
      
      });
    


      this.RULE('flushOption', () => {
        this.CONSUMENaN(Tokens.DES_KEY_FILE);

this.CONSUMENaN(Tokens.HOSTS);


        this.OPTION(() => {
          this.CONSUMENaN(Tokens.BINARY);

this.CONSUMENaN(Tokens.ENGINE);

this.CONSUMENaN(Tokens.ERROR);

this.CONSUMENaN(Tokens.GENERAL);

this.CONSUMENaN(Tokens.RELAY);

this.CONSUMENaN(Tokens.SLOW);
        });
      
this.CONSUMENaN(Tokens.LOGS);

this.CONSUMENaN(Tokens.OPTIMIZER_COSTS);

this.CONSUMENaN(Tokens.PRIVILEGES);

this.CONSUMENaN(Tokens.QUERY);
this.CONSUMENaN(Tokens.CACHE);

this.CONSUMENaN(Tokens.STATUS);

this.CONSUMENaN(Tokens.USER_RESOURCES);

this.CONSUMENaN(Tokens.TABLES);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.LOCK);
        });
      
      });
    


      this.RULE('flushTableOption', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WITH);
this.CONSUMENaN(Tokens.READ);
this.CONSUMENaN(Tokens.LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FOR);
this.CONSUMENaN(Tokens.EXPORT);
          }
        }
      ]);
    


      this.RULE('loadedTableIndexes', () => {
        this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.PARTITION);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.partitionList);

this.CONSUMENaN(Tokens.ALL);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          
        this.OPTION(() => {
          this.SUBRULENaN(this.indexFormat);
        });
      
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.indexList);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.IGNORE);
this.CONSUMENaN(Tokens.LEAVES);
        });
      
      });
    


      this.RULE('simpleDescribeStatement', () => {
        this.SUBRULENaN(this.command);
this.SUBRULENaN(this.tableName);

        this.OPTION(() => {
          this.SUBRULENaN(this.column);

this.SUBRULENaN(this.pattern);
        });
      
      });
    


      this.RULE('fullDescribeStatement', () => {
        this.SUBRULENaN(this.command);

        this.OPTION(() => {
          this.SUBRULENaN(this.formatType);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.formatValue);
        });
      
this.SUBRULENaN(this.describeObjectClause);
      });
    


      this.RULE('helpStatement', () => {
        this.CONSUMENaN(Tokens.HELP);
this.CONSUMENaN(Tokens.STRING_LITERAL);
      });
    


      this.RULE('useStatement', () => {
        this.CONSUMENaN(Tokens.USE);
this.SUBRULENaN(this.uid);
      });
    


      this.RULE('describeObjectClause', () => {
        this.SUBRULENaN(this.selectStatement);

this.SUBRULENaN(this.deleteStatement);

this.SUBRULENaN(this.insertStatement);

this.SUBRULENaN(this.replaceStatement);

this.SUBRULENaN(this.updateStatement);
      });
    


      this.RULE('fullId', () => {
        this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.DOT_ID);

this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('tableName', () => {
        this.SUBRULENaN(this.fullId);
      });
    


      this.RULE('fullColumnName', () => {
        this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.SUBRULENaN(this.dottedId);

        this.OPTION(() => {
          this.SUBRULENaN(this.dottedId);
        });
      
        });
      
      });
    


      this.RULE('indexColumnName', () => {
        this.SUBRULENaN(this.uid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
        });
      

        this.OPTION(() => {
          this.SUBRULENaN(this.sortType);
        });
      
      });
    


      this.RULE('userName', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_USER_NAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ID);
          }
        }
      ]);
    


      this.RULE('mysqlVariable', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCAL_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GLOBAL_ID);
          }
        }
      ]);
    


      this.RULE('charsetName', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.charsetNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          }
        }
      ]);
    


      this.RULE('collationName', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ]);
    


      this.RULE('engineName', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ARCHIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BLACKHOLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CSV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FEDERATED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INNODB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MRG_MYISAM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MYISAM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NDB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NDBCLUSTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PERFOMANCE_SCHEMA);
          }
        }
      ]);
    


      this.RULE('uuidSet', () => {
        this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);

        this.AT_LEAST_ONE(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
        });
      
      });
    


      this.RULE('xid', () => {
        this.SUBRULENaN(this.globalTableUid);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.qualifier);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.idFormat);
        });
      
        });
      
      });
    


      this.RULE('xuidStringId', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            
        this.AT_LEAST_ONE(() => {
          this.CONSUMENaN(Tokens.HEXADECIMAL_LITERAL);
        });
      
          }
        }
      ]);
    


      this.RULE('authPlugin', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.uid);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING_LITERAL);
          }
        }
      ]);
    


      this.RULE('uid', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.simpleId);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REVERSE_QUOTE_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHARSET_REVERSE_QOUTE_STRING);
          }
        }
      ]);
    


      this.RULE('simpleId', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ID);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.charsetNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.transactionLevelBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.engineName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.privilegesBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.intervalTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.dataTypeBase);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.keywordsCanBeId);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.functionNameBase);
          }
        }
      ]);
    


      this.RULE('dottedId', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DOT_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uid);
          }
        }
      ]);
    


      this.RULE('decimalLiteral', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DECIMAL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ZERO_DECIMAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ONE_DECIMAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TWO_DECIMAL);
          }
        }
      ]);
    


      this.RULE('fileSizeLiteral', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FILESIZE_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ]);
    


      this.RULE('stringLiteral', this.OR([
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.STRING_CHARSET_NAME);
        });
      
this.CONSUMENaN(Tokens.STRING_LITERAL);

this.CONSUMENaN(Tokens.START_NATIONAL_STRING_LITERAL);

        this.AT_LEAST_ONE(() => {
          this.CONSUMENaN(Tokens.STRING_LITERAL);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.STRING_CHARSET_NAME);
        });
      
this.CONSUMENaN(Tokens.STRING_LITERAL);

this.CONSUMENaN(Tokens.START_NATIONAL_STRING_LITERAL);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COLLATE);
this.SUBRULENaN(this.collationName);
        });
      
          }
        }
      ]);
    


      this.RULE('booleanLiteral', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FALSE);
          }
        }
      ]);
    


      this.RULE('hexadecimalLiteral', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.STRING_CHARSET_NAME);
        });
      
this.CONSUMENaN(Tokens.HEXADECIMAL_LITERAL);
      });
    


      this.RULE('nullNotnull', () => {
        
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NOT);
        });
      
this.CONSUMENaN(Tokens.NULL_LITERAL);

this.CONSUMENaN(Tokens.NULL_SPEC_LITERAL);
      });
    


      this.RULE('constant', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.stringLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.decimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.hexadecimalLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.booleanLiteral);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REAL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            
        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NOT);
        });
      
this.SUBRULENaN(this.nullLiteral);
          }
        }
      ]);
    


      this.RULE('dataType', () => {
        this.SUBRULENaN(this.typeName);

        this.OPTION(() => {
          this.SUBRULENaN(this.lengthOneDimension);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.BINARY);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.charsetName);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.COLLATE);
this.SUBRULENaN(this.collationName);
        });
      
      });
    


      this.RULE('convertedDataType', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.typeName);

        this.OPTION(() => {
          this.SUBRULENaN(this.lengthOneDimension);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.typeName);

        this.OPTION(() => {
          this.SUBRULENaN(this.lengthOneDimension);
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.CHARACTER);
this.CONSUMENaN(Tokens.SET);
this.SUBRULENaN(this.charsetName);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.typeName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.typeName);

        this.OPTION(() => {
          this.SUBRULENaN(this.lengthTwoDimension);
        });
      
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SIGNED);

this.CONSUMENaN(Tokens.UNSIGNED);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.INTEGER);
        });
      
          }
        }
      ]);
    


      this.RULE('lengthOneDimension', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('lengthTwoDimension', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('lengthTwoOptionalDimension', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.decimalLiteral);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('uidList', () => {
        this.SUBRULENaN(this.uid);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.uid);
        });
      
      });
    


      this.RULE('tables', () => {
        this.SUBRULENaN(this.tableName);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.tableName);
        });
      
      });
    


      this.RULE('indexColumnNames', () => {
        this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.indexColumnName);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.indexColumnName);
        });
      
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('expressions', () => {
        this.SUBRULENaN(this.expression);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expression);
        });
      
      });
    


      this.RULE('expressionsWithDefaults', () => {
        this.SUBRULENaN(this.expressionOrDefault);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.expressionOrDefault);
        });
      
      });
    


      this.RULE('constants', () => {
        this.SUBRULENaN(this.constant);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.constant);
        });
      
      });
    


      this.RULE('simpleStrings', () => {
        this.CONSUMENaN(Tokens.STRING_LITERAL);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.STRING_LITERAL);
        });
      
      });
    


      this.RULE('userVariables', () => {
        this.CONSUMENaN(Tokens.LOCAL_ID);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.LOCAL_ID);
        });
      
      });
    


      this.RULE('defaultValue', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NULL_LITERAL);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURRENT_TIMESTAMP);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ON);
this.CONSUMENaN(Tokens.UPDATE);
this.CONSUMENaN(Tokens.LOCALTIMESTAMP);
        });
      
          }
        }
      ]);
    


      this.RULE('expressionOrDefault', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.expression);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEFAULT);
          }
        }
      ]);
    


      this.RULE('ifExists', () => {
        this.CONSUMENaN(Tokens.IF);
this.CONSUMENaN(Tokens.EXISTS);
      });
    


      this.RULE('ifNotExists', () => {
        this.CONSUMENaN(Tokens.IF);
this.CONSUMENaN(Tokens.NOT);
this.CONSUMENaN(Tokens.EXISTS);
      });
    


      this.RULE('functionCall', () => {
        this.SUBRULENaN(this.specificFunction);
      });
    


      this.RULE('specificFunction', () => {
        this.CONSUMENaN(Tokens.CURRENT_DATE);

this.CONSUMENaN(Tokens.CURRENT_TIME);

this.CONSUMENaN(Tokens.CURRENT_TIMESTAMP);

this.CONSUMENaN(Tokens.CURRENT_USER);

this.CONSUMENaN(Tokens.LOCALTIME);
      });
    


      this.RULE('caseFuncAlternative', () => {
        this.CONSUMENaN(Tokens.WHEN);
this.SUBRULENaN(this.condition);
this.CONSUMENaN(Tokens.THEN);
this.SUBRULENaN(this.consequent);
      });
    


      this.RULE('levelsInWeightString', () => {
        this.CONSUMENaN(Tokens.LEVEL);
this.SUBRULENaN(this.levelInWeightListElement);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.levelInWeightListElement);
        });
      
      });
    


      this.RULE('levelInWeightListElement', () => {
        this.SUBRULENaN(this.decimalLiteral);

        this.OPTION(() => {
          this.SUBRULENaN(this.orderType);
        });
      
      });
    


      this.RULE('aggregateWindowedFunction', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AVG);

this.CONSUMENaN(Tokens.MAX);

this.CONSUMENaN(Tokens.MIN);

this.CONSUMENaN(Tokens.SUM);
this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.aggregator);
        });
      
this.SUBRULENaN(this.functionArg);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COUNT);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.starArg);


        this.OPTION(() => {
          this.SUBRULENaN(this.aggregator);
        });
      
this.SUBRULENaN(this.functionArg);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COUNT);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.aggregator);
this.SUBRULENaN(this.functionArgs);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT_AND);

this.CONSUMENaN(Tokens.BIT_OR);

this.CONSUMENaN(Tokens.BIT_XOR);

this.CONSUMENaN(Tokens.STD);

this.CONSUMENaN(Tokens.STDDEV);

this.CONSUMENaN(Tokens.STDDEV_POP);

this.CONSUMENaN(Tokens.STDDEV_SAMP);

this.CONSUMENaN(Tokens.VAR_POP);

this.CONSUMENaN(Tokens.VAR_SAMP);

this.CONSUMENaN(Tokens.VARIANCE);
this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.aggregator);
        });
      
this.SUBRULENaN(this.functionArg);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GROUP_CONCAT);
this.CONSUMENaN(Tokens.OP);

        this.OPTION(() => {
          this.SUBRULENaN(this.aggregator);
        });
      
this.SUBRULENaN(this.functionArgs);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.ORDER);
this.CONSUMENaN(Tokens.BY);
this.SUBRULENaN(this.orderByExpression);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.orderByExpression);
        });
      
        });
      

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.SEPARATOR);
this.SUBRULENaN(this.separator);
        });
      
this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('scalarFunctionName', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.functionNameBase);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASCII);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURRENT_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURRENT_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURRENT_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CURTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATE_ADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATE_SUB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INSERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCALTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCALTIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NOW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBSTR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBSTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SYSDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTC_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTC_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTC_TIMESTAMP);
          }
        }
      ]);
    


      this.RULE('passwordFunctionClause', () => {
        this.SUBRULENaN(this.functionName);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.functionArg);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('functionArgs', () => {
        this.SUBRULENaN(this.constant);

this.SUBRULENaN(this.fullColumnName);

this.SUBRULENaN(this.functionCall);

this.SUBRULENaN(this.expression);

        this.MANY(() => {
          this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.constant);

this.SUBRULENaN(this.fullColumnName);

this.SUBRULENaN(this.functionCall);

this.SUBRULENaN(this.expression);
        });
      
      });
    


      this.RULE('functionArg', this.OR([
        {
          ALT: () => {
            this.SUBRULENaN(this.constant);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.fullColumnName);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.functionCall);
          }
        }
      ,
        {
          ALT: () => {
            this.SUBRULENaN(this.expression);
          }
        }
      ]);
    


      this.RULE('expression', () => {
        this.SUBRULENaN(this.notOperator);
this.SUBRULENaN(this.expression);
      });
    


      this.RULE('predicate', () => {
        this.SUBRULENaN(this.predicate);

        this.OPTION(() => {
          this.CONSUMENaN(Tokens.NOT);
        });
      
this.CONSUMENaN(Tokens.IN);
this.CONSUMENaN(Tokens.OP);
this.SUBRULENaN(this.selectStatement);

this.SUBRULENaN(this.expressions);
this.CONSUMENaN(Tokens.OP);
      });
    


      this.RULE('expressionAtom', () => {
        this.SUBRULENaN(this.constant);
      });
    


      this.RULE('unaryOperator', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NOT);
          }
        }
      ]);
    


      this.RULE('comparisonOperator', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('logicalOperator', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.XOR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('bitOperator', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('mathOperator', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DIV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OP);
          }
        }
      ]);
    


      this.RULE('charsetNameBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ARMSCII8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASCII);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIG5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP1250);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP1251);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP1256);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP1257);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP850);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP852);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP866);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CP932);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEC8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EUCJPMS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EUCKR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GB2312);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GBK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOSTD8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GREEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HEBREW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HP8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.KEYBCS2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.KOI8R);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.KOI8U);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LATIN1);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LATIN2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LATIN5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LATIN7);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MACCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MACROMAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SJIS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SWE7);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIS620);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UCS2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UJIS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF16);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF16LE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF32);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF8);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF8MB3);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UTF8MB4);
          }
        }
      ]);
    


      this.RULE('transactionLevelBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPEATABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNCOMMITTED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SERIALIZABLE);
          }
        }
      ]);
    


      this.RULE('privilegesBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROUTINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXECUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROCESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELOAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHUTDOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PRIVILEGES);
          }
        }
      ]);
    


      this.RULE('intervalTypeBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUARTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MICROSECOND);
          }
        }
      ]);
    


      this.RULE('dataTypeBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATETIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TEXT);
          }
        }
      ]);
    


      this.RULE('keywordsCanBeId', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ACCOUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ACTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AFTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AGGREGATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ALGORITHM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ANY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AUTHORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AUTOCOMMIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AUTOEXTEND_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AUTO_INCREMENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AVG_ROW_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BEGIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BINLOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BLOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BOOL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BOOLEAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BTREE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CASCADED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHAIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHANNEL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHECKSUM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CLIENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COALESCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COLUMNS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COLUMN_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMMENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMMIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMPACT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMPLETION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMPRESSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMPRESSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONCURRENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONNECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONSISTENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONTRIBUTORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COPY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CPU);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATAFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEALLOCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEFAULT_AUTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEFINER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DELAY_KEY_WRITE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DIRECTORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISCARD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DUMPFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DUPLICATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DYNAMIC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENCRYPTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENGINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENGINES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ERROR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ERRORS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ESCAPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVEN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVENTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EVERY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXCHANGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXCLUSIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXPIRE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXTENT_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FAULTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FIELDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FILE_BLOCK_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FILTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FIRST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FIXED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FOLLOWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FUNCTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GLOBAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GRANTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GROUP_REPLICATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HASH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IDENTIFIED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IGNORE_SERVER_IDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IMPORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INDEXES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INITIAL_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INPLACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INSERT_METHOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INSTANCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INVOKER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IO_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IPC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISOLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISSUER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.KEY_BLOCK_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LANGUAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LEAVES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LEVEL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOGFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_AUTO_POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_CONNECT_RETRY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_DELAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_HEARTBEAT_PERIOD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_HOST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_RETRY_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CAPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CERT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CIPHER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CRL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_CRLPATH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_SSL_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_TLS_VERSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_CONNECTIONS_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_QUERIES_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_UPDATES_PER_HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAX_USER_CONNECTIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MEMORY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MERGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MIGRATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MIN_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MODIFY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MUTEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MYSQL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NAMES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NCHAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NEVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NO);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NODEGROUP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NONE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OFFLINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OFFSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OJ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OLD_PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ONE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ONLINE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ONLY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OPTIMIZER_COSTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OPTIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OWNER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PACK_KEYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PARSER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PARTIAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PARTITIONING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PARTITIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PASSWORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PHASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PLUGINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PLUGIN_DIR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PRECEDES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PREPARE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PRESERVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PREV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROCESSLIST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROFILES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PROXY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUERY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUICK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REBUILD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RECOVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REDO_BUFFER_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REDUNDANT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELAYLOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELAY_LOG_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELAY_LOG_POS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REMOVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REORGANIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPAIR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_DO_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_DO_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_IGNORE_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_IGNORE_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_REWRITE_DB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_WILD_DO_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATE_WILD_IGNORE_TABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REPLICATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RESUME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RETURNS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROLLBACK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROLLUP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROTATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROW_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SAVEPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SCHEDULE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SECURITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SERVER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SESSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHARE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHARED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SIGNED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SLAVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SNAPSHOT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOCKET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOUNDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOURCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_AFTER_MTS_GAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_BEFORE_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_BUFFER_RESULT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_NO_CACHE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_THREAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.START);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STARTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STATS_AUTO_RECALC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STATS_PERSISTENT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STATS_SAMPLE_PAGES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STATUS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STOP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STORAGE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBJECT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBPARTITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBPARTITIONS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUSPEND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SWAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SWITCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TABLESPACE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TEMPORARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TEMPTABLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.THAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRANSACTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TRUNCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNDEFINED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNDOFILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNDO_BUFFER_SIZE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNKNOWN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UPGRADE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VALIDATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VARIABLES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VIEW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WAIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WARNINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WITHOUT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WORK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WRAPPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.X509);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.XA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.XML);
          }
        }
      ]);
    


      this.RULE('functionNameBase', this.OR([
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ABS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ACOS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ADDDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ADDTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AES_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AES_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.AREA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASBINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASWKT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASYMMETRIC_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASYMMETRIC_DERIVE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASYMMETRIC_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASYMMETRIC_SIGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ASYMMETRIC_VERIFY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ATAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ATAN2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BENCHMARK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BIT_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.BUFFER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CEIL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CEILING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CENTROID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHARACTER_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHARSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CHAR_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COERCIBILITY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COLLATION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COMPRESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONCAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONCAT_WS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONNECTION_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONV);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CONVERT_TZ);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CRC32);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CREATE_DH_PARAMETERS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CREATE_DIGEST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.CROSSES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATEDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DATE_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAYNAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAYOFMONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAYOFWEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DAYOFYEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DECODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DEGREES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DES_DECRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DES_ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DIMENSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.DISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ELT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENCODE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENCRYPT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENDPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ENVELOPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EQUALS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXPORT_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.EXTRACTVALUE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FIELD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FIND_IN_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FLOOR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FOUND_ROWS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FROM_BASE64);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FROM_DAYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.FROM_UNIXTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMCOLLFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMCOLLFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYCOLLECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYCOLLECTIONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMETRYTYPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GEOMFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GET_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GET_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GLENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GREATEST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GTID_SUBSET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.GTID_SUBTRACT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.HOUR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IFNULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INET6_ATON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INET6_NTOA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INET_ATON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INET_NTOA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INSTR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INTERIORRINGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.INTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISCLOSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISEMPTY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISNULL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ISSIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_FREE_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_IPV4);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_IPV4_COMPAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_IPV4_MAPPED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_IPV6);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.IS_USED_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LAST_INSERT_ID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LCASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LEAST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LEFT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LINESTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOAD_FILE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOCATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOG);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOG10);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOG2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LOWER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LPAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.LTRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAKEDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAKETIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MAKE_SET);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MASTER_POS_WAIT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBRCONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBRDISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBREQUAL);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBRINTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBROVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBRTOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MBRWITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MD5);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MICROSECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MINUTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MLINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MLINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MONTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MONTHNAME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MPOINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MPOINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MPOLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MPOLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTILINESTRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTILINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTILINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOLYGON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.MULTIPOLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NAME_CONST);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NULLIF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NUMGEOMETRIES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NUMINTERIORRINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.NUMPOINTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OCT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OCTET_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ORD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.OVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PERIOD_ADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PERIOD_DIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.PI);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POINTN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POLYGON);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POSITION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POW);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.POWER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUARTER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.QUOTE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RADIANS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RAND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RANDOM_BYTES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RELEASE_LOCK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.REVERSE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RIGHT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROUND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ROW_COUNT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RPAD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.RTRIM);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SECOND);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SEC_TO_TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SESSION_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHA1);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SHA2);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SIGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SLEEP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SOUNDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SQRT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SRID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STARTPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STRCMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.STR_TO_DATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_AREA);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ASBINARY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ASTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ASWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ASWKT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_BUFFER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_CENTROID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_CONTAINS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_CROSSES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_DIFFERENCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_DIMENSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_DISJOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_DISTANCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ENDPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ENVELOPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_EQUALS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_EXTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMCOLLFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMCOLLFROMTXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMCOLLFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMETRYTYPE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_GEOMFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_INTERIORRINGN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_INTERSECTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_INTERSECTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ISCLOSED);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ISEMPTY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_ISSIMPLE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_LINEFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_LINEFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_LINESTRINGFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_LINESTRINGFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_NUMGEOMETRIES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_NUMINTERIORRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_NUMINTERIORRINGS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_NUMPOINTS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_OVERLAPS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POINTFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POINTFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POINTN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POLYFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POLYFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POLYGONFROMTEXT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_POLYGONFROMWKB);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_SRID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_STARTPOINT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_SYMDIFFERENCE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_TOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_UNION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_WITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_X);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.ST_Y);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBDATE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBSTRING_INDEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SUBTIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.SYSTEM_USER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TAN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIME);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIMEDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIMESTAMPADD);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIMESTAMPDIFF);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIME_FORMAT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TIME_TO_SEC);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TOUCHES);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TO_BASE64);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TO_DAYS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.TO_SECONDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UCASE);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNCOMPRESS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNCOMPRESSED_LENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNHEX);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UNIX_TIMESTAMP);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UPDATEXML);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UPPER);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UUID);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.UUID_SHORT);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VALIDATE_PASSWORD_STRENGTH);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.VERSION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WEEKDAY);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WEEKOFYEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WEIGHT_STRING);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.WITHIN);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.YEAR);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.YEARWEEK);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.Y_FUNCTION);
          }
        }
      ,
        {
          ALT: () => {
            this.CONSUMENaN(Tokens.X_FUNCTION);
          }
        }
      ]);
    }
  }