"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chevrotain = require("chevrotain");
var MetaLexer_1 = require("./MetaLexer");
var Tokens = {};
var MetaParser = (function (_super) {
    __extends(MetaParser, _super);
    function MetaParser(input) {
        var _this = _super.call(this, input, MetaLexer_1.tokens, {
            recoveryEnabled: true,
            outputCst: true
        }) || this;
        _this.RULE('root', function () {
            _this.OPTION(function () {
                _this.SUBRUL(_this.sqlStatements);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.MINUSMINUS);
            });
            _this.CONSUME(Tokens.EOF);
        });
        _this.RULE('sqlStatements', function () {
            _this.MANY(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.sqlStatement);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.MINUSMINUS);
                            });
                            _this.CONSUME(Tokens.SEMI);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.emptyStatement);
                        }
                    }
                ]);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.sqlStatement);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.MINUSMINUS);
                            });
                            _this.CONSUME(Tokens.SEMI);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.emptyStatement);
                    }
                }
            ]);
        });
        _this.RULE('sqlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.ddlStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dmlStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.transactionStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.replicationStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.preparedStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.administrationStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.utilityStatement);
                    }
                }
            ]);
        });
        _this.RULE('emptyStatement', function () {
            _this.CONSUME(Tokens.SEMI);
        });
        _this.RULE('ddlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createDatabase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createEvent);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createIndex);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createLogfileGroup);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createProcedure);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createFunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createServer);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createTablespaceInnodb);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createTablespaceNdb);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createTrigger);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createView);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterDatabase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterEvent);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterFunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterInstance);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterLogfileGroup);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterProcedure);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterServer);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterTablespace);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterView);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropDatabase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropEvent);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropIndex);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropLogfileGroup);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropProcedure);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropFunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropServer);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropTablespace);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropTrigger);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropView);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.renameTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.truncateTable);
                    }
                }
            ]);
        });
        _this.RULE('dmlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.selectStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.insertStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.updateStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.deleteStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.replaceStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.callStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.loadDataStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.loadXmlStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.doStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.handlerStatement);
                    }
                }
            ]);
        });
        _this.RULE('transactionStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.startTransaction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.beginWork);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.commitWork);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.rollbackWork);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.savepointStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.rollbackStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.releaseStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.lockTables);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.unlockTables);
                    }
                }
            ]);
        });
        _this.RULE('replicationStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.changeMaster);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.changeReplicationFilter);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.purgeBinaryLogs);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.resetMaster);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.resetSlave);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.startSlave);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.stopSlave);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.startGroupReplication);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.stopGroupReplication);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaStartTransaction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaEndTransaction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaPrepareStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaCommitWork);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaRollbackWork);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.xaRecoverWork);
                    }
                }
            ]);
        });
        _this.RULE('preparedStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.prepareStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.executeStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.deallocatePrepare);
                    }
                }
            ]);
        });
        _this.RULE('compoundStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.blockStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.caseStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.ifStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.leaveStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.loopStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.repeatStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.whileStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.iterateStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.returnStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.cursorStatement);
                    }
                }
            ]);
        });
        _this.RULE('administrationStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.alterUser);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createUser);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dropUser);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.grantStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.grantProxy);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.renameUser);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.revokeStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.revokeProxy);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.analyzeTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.checkTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.checksumTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.optimizeTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.repairTable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.createUdfunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.installPlugin);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uninstallPlugin);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.setStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.showStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.binlogStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.cacheIndexStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.flushStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.killStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.loadIndexIntoCache);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.resetStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.shutdownStatement);
                    }
                }
            ]);
        });
        _this.RULE('utilityStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.simpleDescribeStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullDescribeStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.helpStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.useStatement);
                    }
                }
            ]);
        });
        _this.RULE('createDatabase', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.SUBRUL(_this.dbFormat);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifNotExists);
            });
            _this.SUBRUL(_this.uid);
            _this.MANY(function () {
                _this.SUBRUL(_this.createDatabaseOption);
            });
        });
        _this.RULE('createEvent', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.EVENT);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifNotExists);
            });
            _this.SUBRUL(_this.fullId);
            _this.CONSUME(Tokens.ON);
            _this.CONSUME(Tokens.SCHEDULE);
            _this.SUBRUL(_this.scheduleExpression);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ON);
                _this.CONSUME(Tokens.COMPLETION);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.NOT);
                });
                _this.CONSUME(Tokens.PRESERVE);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.enableType);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.COMMENT);
                _this.CONSUME(Tokens.STRING_LITERAL);
            });
            _this.CONSUME(Tokens.DO);
            _this.SUBRUL(_this.routineBody);
        });
        _this.RULE('createIndex', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.intimeAction);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.indexCategory);
            });
            _this.CONSUME(Tokens.INDEX);
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.SUBRUL(_this.indexType);
            });
            _this.CONSUME(Tokens.ON);
            _this.SUBRUL(_this.tableName);
            _this.SUBRUL(_this.indexColumnNames);
            _this.MANY(function () {
                _this.SUBRUL(_this.indexOption);
            });
            _this.OPTION(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.ALGORITHM);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OP);
                            });
                            _this.SUBRUL(_this.algType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.LOCK);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OP);
                            });
                            _this.SUBRUL(_this.lockType);
                        }
                    }
                ]);
            });
        });
        _this.RULE('createLogfileGroup', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.CONSUME(Tokens.LOGFILE);
            _this.CONSUME(Tokens.GROUP);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ADD);
            _this.CONSUME(Tokens.UNDOFILE);
            _this.SUBRUL(_this.undoFile);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INITIAL_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.initSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.undoSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.REDO_BUFFER_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.redoSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.NODEGROUP);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.uid);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WAIT);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.COMMENT);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.comment);
            });
            _this.CONSUME(Tokens.ENGINE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
            });
            _this.SUBRUL(_this.engineName);
        });
        _this.RULE('createProcedure', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.PROCEDURE);
            _this.SUBRUL(_this.fullId);
            _this.CONSUME(Tokens.OP);
            _this.OPTION(function () {
                _this.SUBRUL(_this.procedureParameter);
            });
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.procedureParameter);
            });
            _this.CONSUME(Tokens.OP);
            _this.MANY(function () {
                _this.SUBRUL(_this.routineOption);
            });
            _this.SUBRUL(_this.routineBody);
        });
        _this.RULE('createFunction', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.FUNCTION);
            _this.SUBRUL(_this.fullId);
            _this.CONSUME(Tokens.OP);
            _this.OPTION(function () {
                _this.SUBRUL(_this.functionParameter);
            });
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.functionParameter);
            });
            _this.CONSUME(Tokens.OP);
            _this.CONSUME(Tokens.RETURNS);
            _this.SUBRUL(_this.dataType);
            _this.MANY(function () {
                _this.SUBRUL(_this.routineOption);
            });
            _this.SUBRUL(_this.routineBody);
        });
        _this.RULE('createServer', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.CONSUME(Tokens.SERVER);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.FOREIGN);
            _this.CONSUME(Tokens.DATA);
            _this.CONSUME(Tokens.WRAPPER);
            _this.SUBRUL(_this.wrapperName);
            _this.CONSUME(Tokens.OPTIONS);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.serverOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.serverOption);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('createTable', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.TEMPORARY);
                        });
                        _this.CONSUME(Tokens.TABLE);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifNotExists);
                        });
                        _this.SUBRUL(_this.tableName);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LIKE);
                                    _this.SUBRUL(_this.tableName);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OP);
                                    _this.CONSUME(Tokens.LIKE);
                                    _this.SUBRUL(_this.parenthesisTable);
                                    _this.CONSUME(Tokens.OP);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.TEMPORARY);
                        });
                        _this.CONSUME(Tokens.TABLE);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifNotExists);
                        });
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.createDefinitions);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.tableOption);
                            _this.MANY(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(Tokens.OP);
                                });
                                _this.SUBRUL(_this.tableOption);
                            });
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.partitionDefinitions);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.keyViolate);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.AS);
                        });
                        _this.SUBRUL(_this.selectStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.TEMPORARY);
                        });
                        _this.CONSUME(Tokens.TABLE);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifNotExists);
                        });
                        _this.SUBRUL(_this.tableName);
                        _this.SUBRUL(_this.createDefinitions);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.tableOption);
                            _this.MANY(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(Tokens.OP);
                                });
                                _this.SUBRUL(_this.tableOption);
                            });
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.partitionDefinitions);
                        });
                    }
                }
            ]);
        });
        _this.RULE('createTablespaceInnodb', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.CONSUME(Tokens.TABLESPACE);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ADD);
            _this.CONSUME(Tokens.DATAFILE);
            _this.SUBRUL(_this.datafile);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.FILE_BLOCK_SIZE);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.fileBlockSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.engineName);
            });
        });
        _this.RULE('createTablespaceNdb', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.CONSUME(Tokens.TABLESPACE);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ADD);
            _this.CONSUME(Tokens.DATAFILE);
            _this.SUBRUL(_this.datafile);
            _this.CONSUME(Tokens.USE);
            _this.CONSUME(Tokens.LOGFILE);
            _this.CONSUME(Tokens.GROUP);
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.EXTENT_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.extentSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INITIAL_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.initialSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.AUTOEXTEND_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.autoextendSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.MAX_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.maxSize);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.NODEGROUP);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.uid);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WAIT);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.COMMENT);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.comment);
            });
            _this.CONSUME(Tokens.ENGINE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
            });
            _this.SUBRUL(_this.engineName);
        });
        _this.RULE('createTrigger', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.TRIGGER);
            _this.SUBRUL(_this.thisTrigger);
            _this.SUBRUL(_this.triggerTime);
            _this.SUBRUL(_this.triggerEvent);
            _this.CONSUME(Tokens.ON);
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.FOR);
            _this.CONSUME(Tokens.EACH);
            _this.CONSUME(Tokens.ROW);
            _this.OPTION(function () {
                _this.SUBRUL(_this.triggerPlace);
                _this.SUBRUL(_this.otherTrigger);
            });
            _this.SUBRUL(_this.routineBody);
        });
        _this.RULE('createView', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OR);
                _this.CONSUME(Tokens.REPLACE);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ALGORITHM);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.algType);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SQL);
                _this.CONSUME(Tokens.SECURITY);
                _this.SUBRUL(_this.secContext);
            });
            _this.CONSUME(Tokens.VIEW);
            _this.SUBRUL(_this.fullId);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.AS);
            _this.SUBRUL(_this.selectStatement);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WITH);
                _this.OPTION(function () {
                    _this.SUBRUL(_this.checkOption);
                });
                _this.CONSUME(Tokens.CHECK);
                _this.CONSUME(Tokens.OPTION);
            });
        });
        _this.RULE('createDatabaseOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.CHARACTER);
                        _this.CONSUME(Tokens.SET);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.charsetName);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.COLLATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.collationName);
                    }
                }
            ]);
        });
        _this.RULE('ownerStatement', function () {
            _this.CONSUME(Tokens.DEFINER);
            _this.CONSUME(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.userName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_USER);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.OP);
                        });
                    }
                }
            ]);
        });
        _this.RULE('scheduleExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AT);
                        _this.SUBRUL(_this.timestampValue);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.intervalExpr);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVERY);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.decimalLiteral);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.expression);
                                }
                            }
                        ]);
                        _this.SUBRUL(_this.intervalType);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.STARTS);
                            _this.SUBRUL(_this.start);
                            _this.MANY(function () {
                                _this.SUBRUL(_this.startIntervals);
                            });
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ENDS);
                            _this.SUBRUL(_this.end);
                            _this.MANY(function () {
                                _this.SUBRUL(_this.endIntervals);
                            });
                        });
                    }
                }
            ]);
        });
        _this.RULE('timestampValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.stringLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
        });
        _this.RULE('intervalExpr', function () {
            _this.CONSUME(Tokens.OP);
            _this.CONSUME(Tokens.INTERVAL);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
            _this.SUBRUL(_this.intervalType);
        });
        _this.RULE('intervalType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.intervalTypeBase);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR_MONTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_MINUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_SECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_MINUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_SECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE_SECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECOND_MICROSECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE_MICROSECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_MICROSECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_MICROSECOND);
                    }
                }
            ]);
        });
        _this.RULE('enableType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISABLE);
                        _this.CONSUME(Tokens.ON);
                        _this.CONSUME(Tokens.SLAVE);
                    }
                }
            ]);
        });
        _this.RULE('indexType', function () {
            _this.CONSUME(Tokens.USING);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BTREE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HASH);
                    }
                }
            ]);
        });
        _this.RULE('indexOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEY_BLOCK_SIZE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.fileSizeLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.indexType);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITH);
                        _this.CONSUME(Tokens.PARSER);
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('procedureParameter', function () {
            _this.SUBRUL(_this.direction);
            _this.SUBRUL(_this.uid);
            _this.SUBRUL(_this.dataType);
        });
        _this.RULE('functionParameter', function () {
            _this.SUBRUL(_this.uid);
            _this.SUBRUL(_this.dataType);
        });
        _this.RULE('routineOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LANGUAGE);
                        _this.CONSUME(Tokens.SQL);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.DETERMINISTIC);
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CONTAINS);
                                    _this.CONSUME(Tokens.SQL);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.NO);
                                    _this.CONSUME(Tokens.SQL);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.READS);
                                    _this.CONSUME(Tokens.SQL);
                                    _this.CONSUME(Tokens.DATA);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MODIFIES);
                                    _this.CONSUME(Tokens.SQL);
                                    _this.CONSUME(Tokens.DATA);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL);
                        _this.CONSUME(Tokens.SECURITY);
                        _this.SUBRUL(_this.context);
                    }
                }
            ]);
        });
        _this.RULE('serverOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOST);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATABASE);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USER);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PASSWORD);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOCKET);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OWNER);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PORT);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                }
            ]);
        });
        _this.RULE('createDefinitions', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.createDefinition);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.createDefinition);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('createDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                        _this.SUBRUL(_this.columnDefinition);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.tableConstraint);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.indexColumnDefinition);
                    }
                }
            ]);
        });
        _this.RULE('columnDefinition', function () {
            _this.SUBRUL(_this.dataType);
            _this.MANY(function () {
                _this.SUBRUL(_this.columnConstraint);
            });
        });
        _this.RULE('columnConstraint', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.nullNotnull);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT);
                        _this.SUBRUL(_this.defaultValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTO_INCREMENT);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.PRIMARY);
                        });
                        _this.CONSUME(Tokens.KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNIQUE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.KEY);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLUMN_FORMAT);
                        _this.SUBRUL(_this.colformat);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STORAGE);
                        _this.SUBRUL(_this.storageval);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.referenceDefinition);
                    }
                }
            ]);
        });
        _this.RULE('tableConstraint', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.PRIMARY);
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.UNIQUE);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexFormat);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.index);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.FOREIGN);
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.index);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.SUBRUL(_this.referenceDefinition);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHECK);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('referenceDefinition', function () {
            _this.CONSUME(Tokens.REFERENCES);
            _this.SUBRUL(_this.tableName);
            _this.SUBRUL(_this.indexColumnNames);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.MATCH);
                _this.SUBRUL(_this.matchType);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.referenceAction);
            });
        });
        _this.RULE('referenceAction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ON);
                        _this.CONSUME(Tokens.DELETE);
                        _this.SUBRUL(_this.onDelete);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ON);
                            _this.CONSUME(Tokens.UPDATE);
                            _this.SUBRUL(_this.onUpdate);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ON);
                        _this.CONSUME(Tokens.UPDATE);
                        _this.SUBRUL(_this.onUpdate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ON);
                            _this.CONSUME(Tokens.DELETE);
                            _this.SUBRUL(_this.onDelete);
                        });
                    }
                }
            ]);
        });
        _this.RULE('referenceControlType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RESTRICT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASCADE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.CONSUME(Tokens.NULL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NO);
                        _this.CONSUME(Tokens.ACTION);
                    }
                }
            ]);
        });
        _this.RULE('indexColumnDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.indexFormat);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.FULLTEXT);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SPATIAL);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexFormat);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                }
            ]);
        });
        _this.RULE('tableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENGINE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.engineName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTO_INCREMENT);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AVG_ROW_LENGTH);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CHARACTER);
                                    _this.CONSUME(Tokens.SET);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CHARSET);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.charsetName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHECKSUM);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.boolValue);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.COLLATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.collationName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESSION);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONNECTION);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATA);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DELAY_KEY_WRITE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.boolValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCRYPTION);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INDEX);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSERT_METHOD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.insertMethod);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEY_BLOCK_SIZE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.fileSizeLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_ROWS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MIN_ROWS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PACK_KEYS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.extBoolValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PASSWORD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW_FORMAT);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.rowFormat);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_AUTO_RECALC);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.extBoolValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_PERSISTENT);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.extBoolValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLESPACE);
                        _this.SUBRUL(_this.uid);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.tablespaceStorage);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNION);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tables);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('tablespaceStorage', function () {
            _this.CONSUME(Tokens.STORAGE);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEMORY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT);
                    }
                }
            ]);
        });
        _this.RULE('partitionDefinitions', function () {
            _this.CONSUME(Tokens.PARTITION);
            _this.CONSUME(Tokens.BY);
            _this.SUBRUL(_this.partitionFunctionDefinition);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITIONS);
                _this.SUBRUL(_this.count);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SUBPARTITION);
                _this.CONSUME(Tokens.BY);
                _this.SUBRUL(_this.subpartitionFunctionDefinition);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.SUBPARTITIONS);
                    _this.SUBRUL(_this.subCount);
                });
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.partitionDefinition);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.partitionDefinition);
                });
                _this.CONSUME(Tokens.OP);
            });
        });
        _this.RULE('partitionFunctionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LINEAR);
                        });
                        _this.CONSUME(Tokens.HASH);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LINEAR);
                        });
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ALGORITHM);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.algType);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uidList);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RANGE);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.expression);
                                    _this.CONSUME(Tokens.OP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.COLUMNS);
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.uidList);
                                    _this.CONSUME(Tokens.OP);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LIST);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.expression);
                                    _this.CONSUME(Tokens.OP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.COLUMNS);
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.uidList);
                                    _this.CONSUME(Tokens.OP);
                                }
                            }
                        ]);
                    }
                }
            ]);
        });
        _this.RULE('subpartitionFunctionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LINEAR);
                        });
                        _this.CONSUME(Tokens.HASH);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LINEAR);
                        });
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ALGORITHM);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.algType);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uidList);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('partitionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.VALUES);
                        _this.CONSUME(Tokens.LESS);
                        _this.CONSUME(Tokens.THAN);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.partitionDefinerAtom);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.partitionDefinerAtom);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.partitionOption);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.subpartitionDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.subpartitionDefinition);
                            });
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.VALUES);
                        _this.CONSUME(Tokens.IN);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.partitionDefinerAtom);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.partitionDefinerAtom);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.partitionOption);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.subpartitionDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.subpartitionDefinition);
                            });
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.VALUES);
                        _this.CONSUME(Tokens.IN);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.partitionDefinerVector);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.partitionDefinerVector);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.partitionOption);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.subpartitionDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.subpartitionDefinition);
                            });
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uid);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.partitionOption);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.subpartitionDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.subpartitionDefinition);
                            });
                        });
                    }
                }
            ]);
        });
        _this.RULE('partitionDefinerAtom', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAXVALUE);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
        });
        _this.RULE('partitionDefinerVector', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.partitionDefinerAtom);
            _this.AT_LEAST_ONE(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.partitionDefinerAtom);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('subpartitionDefinition', function () {
            _this.CONSUME(Tokens.SUBPARTITION);
            _this.SUBRUL(_this.uid);
            _this.MANY(function () {
                _this.SUBRUL(_this.partitionOption);
            });
        });
        _this.RULE('partitionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.STORAGE);
                        });
                        _this.CONSUME(Tokens.ENGINE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.engineName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.comment);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATA);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.dataDirectory);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INDEX);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.indexDirectory);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_ROWS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.maxRows);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MIN_ROWS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.minRows);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLESPACE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.tablespace);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NODEGROUP);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.nodegroup);
                    }
                }
            ]);
        });
        _this.RULE('alterDatabase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.SUBRUL(_this.dbFormat);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                        });
                        _this.AT_LEAST_ONE(function () {
                            _this.SUBRUL(_this.createDatabaseOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.SUBRUL(_this.dbFormat);
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.UPGRADE);
                        _this.CONSUME(Tokens.DATA);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.CONSUME(Tokens.NAME);
                    }
                }
            ]);
        });
        _this.RULE('alterEvent', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.EVENT);
            _this.SUBRUL(_this.fullId);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ON);
                _this.CONSUME(Tokens.SCHEDULE);
                _this.SUBRUL(_this.scheduleExpression);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ON);
                _this.CONSUME(Tokens.COMPLETION);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.NOT);
                });
                _this.CONSUME(Tokens.PRESERVE);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.RENAME);
                _this.CONSUME(Tokens.TO);
                _this.SUBRUL(_this.fullId);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.enableType);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.COMMENT);
                _this.CONSUME(Tokens.STRING_LITERAL);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.DO);
                _this.SUBRUL(_this.routineBody);
            });
        });
        _this.RULE('alterFunction', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.FUNCTION);
            _this.SUBRUL(_this.fullId);
            _this.MANY(function () {
                _this.SUBRUL(_this.routineOption);
            });
        });
        _this.RULE('alterInstance', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.INSTANCE);
            _this.CONSUME(Tokens.ROTATE);
            _this.CONSUME(Tokens.INNODB);
            _this.CONSUME(Tokens.MASTER);
            _this.CONSUME(Tokens.KEY);
        });
        _this.RULE('alterLogfileGroup', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.LOGFILE);
            _this.CONSUME(Tokens.GROUP);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ADD);
            _this.CONSUME(Tokens.UNDOFILE);
            _this.CONSUME(Tokens.STRING_LITERAL);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INITIAL_SIZE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.fileSizeLiteral);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WAIT);
            });
            _this.CONSUME(Tokens.ENGINE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
            });
            _this.SUBRUL(_this.engineName);
        });
        _this.RULE('alterProcedure', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.PROCEDURE);
            _this.SUBRUL(_this.fullId);
            _this.MANY(function () {
                _this.SUBRUL(_this.routineOption);
            });
        });
        _this.RULE('alterServer', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.SERVER);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.OPTIONS);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.serverOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.serverOption);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('alterTable', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.OPTION(function () {
                _this.SUBRUL(_this.intimeAction);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tableName);
            _this.SUBRUL(_this.alterSpecification);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.alterSpecification);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.partitionDefinitions);
            });
        });
        _this.RULE('alterTablespace', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.CONSUME(Tokens.TABLESPACE);
            _this.SUBRUL(_this.uid);
            _this.SUBRUL(_this.objectAction);
            _this.CONSUME(Tokens.DATAFILE);
            _this.CONSUME(Tokens.STRING_LITERAL);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INITIAL_SIZE);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.fileSizeLiteral);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WAIT);
            });
            _this.CONSUME(Tokens.ENGINE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
            });
            _this.SUBRUL(_this.engineName);
        });
        _this.RULE('alterView', function () {
            _this.CONSUME(Tokens.ALTER);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ALGORITHM);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.algType);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.ownerStatement);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SQL);
                _this.CONSUME(Tokens.SECURITY);
                _this.SUBRUL(_this.secContext);
            });
            _this.CONSUME(Tokens.VIEW);
            _this.SUBRUL(_this.fullId);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.AS);
            _this.SUBRUL(_this.selectStatement);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WITH);
                _this.OPTION(function () {
                    _this.SUBRUL(_this.checkOpt);
                });
                _this.CONSUME(Tokens.CHECK);
                _this.CONSUME(Tokens.OPTION);
            });
        });
        _this.RULE('alterSpecification', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.tableOption);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRUL(_this.uid);
                        _this.SUBRUL(_this.columnDefinition);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.FIRST);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.AFTER);
                                        _this.SUBRUL(_this.uid);
                                    }
                                }
                            ]);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uid);
                        _this.SUBRUL(_this.columnDefinition);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.uid);
                            _this.SUBRUL(_this.columnDefinition);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.SUBRUL(_this.indexFormat);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.PRIMARY);
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.UNIQUE);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexFormat);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexName);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexType);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.SUBRUL(_this.keyType);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexFormat);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.indexOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.name);
                            });
                        });
                        _this.CONSUME(Tokens.FOREIGN);
                        _this.CONSUME(Tokens.KEY);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexName);
                        });
                        _this.SUBRUL(_this.indexColumnNames);
                        _this.SUBRUL(_this.referenceDefinition);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALGORITHM);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.algType);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRUL(_this.uid);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SET);
                                    _this.CONSUME(Tokens.DEFAULT);
                                    _this.SUBRUL(_this.defaultValue);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DROP);
                                    _this.CONSUME(Tokens.DEFAULT);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHANGE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRUL(_this.oldColumn);
                        _this.SUBRUL(_this.newColumn);
                        _this.SUBRUL(_this.columnDefinition);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.FIRST);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.AFTER);
                                        _this.SUBRUL(_this.afterColumn);
                                    }
                                }
                            ]);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCK);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.lockType);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MODIFY);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRUL(_this.uid);
                        _this.SUBRUL(_this.columnDefinition);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.FIRST);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.AFTER);
                                        _this.SUBRUL(_this.uid);
                                    }
                                }
                            ]);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                        _this.CONSUME(Tokens.PRIMARY);
                        _this.CONSUME(Tokens.KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                        _this.SUBRUL(_this.indexFormat);
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                        _this.CONSUME(Tokens.FOREIGN);
                        _this.CONSUME(Tokens.KEY);
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISABLE);
                        _this.CONSUME(Tokens.KEYS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENABLE);
                        _this.CONSUME(Tokens.KEYS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RENAME);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.renameFormat);
                        });
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ORDER);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.uidList);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT);
                        _this.CONSUME(Tokens.TO);
                        _this.CONSUME(Tokens.CHARACTER);
                        _this.CONSUME(Tokens.SET);
                        _this.SUBRUL(_this.charsetName);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLLATE);
                            _this.SUBRUL(_this.collationName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.CHARACTER);
                        _this.CONSUME(Tokens.SET);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.charsetName);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLLATE);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.collationName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISCARD);
                        _this.CONSUME(Tokens.TABLESPACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IMPORT);
                        _this.CONSUME(Tokens.TABLESPACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FORCE);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.validationFormat);
                        _this.CONSUME(Tokens.VALIDATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADD);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.partitionDefinition);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uidList);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISCARD);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.TABLESPACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IMPORT);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.TABLESPACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRUNCATE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COALESCE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REORGANIZE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uidList);
                        _this.CONSUME(Tokens.INTO);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.partitionDefinition);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.partitionDefinition);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXCHANGE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.WITH);
                        _this.CONSUME(Tokens.TABLE);
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.validationFormat);
                            _this.CONSUME(Tokens.VALIDATION);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ANALYZE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHECK);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OPTIMIZE);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REBUILD);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPAIR);
                        _this.CONSUME(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.uidList);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REMOVE);
                        _this.CONSUME(Tokens.PARTITIONING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPGRADE);
                        _this.CONSUME(Tokens.PARTITIONING);
                    }
                }
            ]);
        });
        _this.RULE('dropDatabase', function () {
            _this.CONSUME(Tokens.DROP);
            _this.SUBRUL(_this.dbFormat);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('dropEvent', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.EVENT);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.fullId);
        });
        _this.RULE('dropIndex', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.INDEX);
            _this.OPTION(function () {
                _this.SUBRUL(_this.intimeAction);
            });
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ON);
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ALGORITHM);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.algType);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LOCK);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.lockType);
            });
        });
        _this.RULE('dropLogfileGroup', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.LOGFILE);
            _this.CONSUME(Tokens.GROUP);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.ENGINE);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.engineName);
        });
        _this.RULE('dropProcedure', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.PROCEDURE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.fullId);
        });
        _this.RULE('dropFunction', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.FUNCTION);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.fullId);
        });
        _this.RULE('dropServer', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.SERVER);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('dropTable', function () {
            _this.CONSUME(Tokens.DROP);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.TEMPORARY);
            });
            _this.CONSUME(Tokens.TABLE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.tables);
            _this.OPTION(function () {
                _this.SUBRUL(_this.dropType);
            });
        });
        _this.RULE('dropTablespace', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.TABLESPACE);
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                });
                _this.SUBRUL(_this.engineName);
            });
        });
        _this.RULE('dropTrigger', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.TRIGGER);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.fullId);
        });
        _this.RULE('dropView', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.VIEW);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.fullId);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.fullId);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.dropType);
            });
        });
        _this.RULE('renameTable', function () {
            _this.CONSUME(Tokens.RENAME);
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.renameTableClause);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.renameTableClause);
            });
        });
        _this.RULE('renameTableClause', function () {
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.TO);
            _this.SUBRUL(_this.tableName);
        });
        _this.RULE('truncateTable', function () {
            _this.CONSUME(Tokens.TRUNCATE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.TABLE);
            });
            _this.SUBRUL(_this.tableName);
        });
        _this.RULE('callStatement', function () {
            _this.CONSUME(Tokens.CALL);
            _this.SUBRUL(_this.fullId);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRUL(_this.constants);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRUL(_this.expressions);
                            }
                        }
                    ]);
                });
                _this.CONSUME(Tokens.OP);
            });
        });
        _this.RULE('deleteStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.singleDeleteStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.multipleDeleteStatement);
                    }
                }
            ]);
        });
        _this.RULE('doStatement', function () {
            _this.CONSUME(Tokens.DO);
            _this.SUBRUL(_this.expressions);
        });
        _this.RULE('handlerStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.handlerOpenStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.handlerReadIndexStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.handlerReadStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.handlerCloseStatement);
                    }
                }
            ]);
        });
        _this.RULE('insertStatement', function () {
            _this.CONSUME(Tokens.INSERT);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INTO);
            });
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.partitions);
                _this.CONSUME(Tokens.OP);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.columns);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.insertStatementValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.SUBRUL(_this.setFirst);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.setElements);
                        });
                    }
                }
            ]);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ON);
                _this.CONSUME(Tokens.DUPLICATE);
                _this.CONSUME(Tokens.KEY);
                _this.CONSUME(Tokens.UPDATE);
                _this.SUBRUL(_this.duplicatedFirst);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.duplicatedElements);
                });
            });
        });
        _this.RULE('loadDataStatement', function () {
            _this.CONSUME(Tokens.LOAD);
            _this.CONSUME(Tokens.DATA);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LOCAL);
            });
            _this.CONSUME(Tokens.INFILE);
            _this.SUBRUL(_this.filename);
            _this.OPTION(function () {
                _this.SUBRUL(_this.violation);
            });
            _this.CONSUME(Tokens.INTO);
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.CHARACTER);
                _this.CONSUME(Tokens.SET);
                _this.SUBRUL(_this.charset);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.fieldsFormat);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRUL(_this.selectFieldsInto);
                });
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LINES);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRUL(_this.selectLinesInto);
                });
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
                _this.SUBRUL(_this.decimalLiteral);
                _this.SUBRUL(_this.linesFormat);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.assignmentField);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.assignmentField);
                });
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SET);
                _this.SUBRUL(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.updatedElement);
                });
            });
        });
        _this.RULE('loadXmlStatement', function () {
            _this.CONSUME(Tokens.LOAD);
            _this.CONSUME(Tokens.XML);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LOCAL);
            });
            _this.CONSUME(Tokens.INFILE);
            _this.SUBRUL(_this.filename);
            _this.OPTION(function () {
                _this.SUBRUL(_this.violation);
            });
            _this.CONSUME(Tokens.INTO);
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.CHARACTER);
                _this.CONSUME(Tokens.SET);
                _this.SUBRUL(_this.charset);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ROWS);
                _this.CONSUME(Tokens.IDENTIFIED);
                _this.CONSUME(Tokens.BY);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.tag);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
                _this.SUBRUL(_this.decimalLiteral);
                _this.SUBRUL(_this.linesFormat);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.assignmentField);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.assignmentField);
                });
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SET);
                _this.SUBRUL(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.updatedElement);
                });
            });
        });
        _this.RULE('replaceStatement', function () {
            _this.CONSUME(Tokens.REPLACE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.INTO);
            });
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.partitions);
                _this.CONSUME(Tokens.OP);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.columns);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.insertStatementValue);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.SUBRUL(_this.setFirst);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.setElements);
                        });
                    }
                }
            ]);
        });
        _this.RULE('selectStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.querySpecification);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lockClause);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.queryExpression);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lockClause);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.querySpecificationNointo);
                        _this.AT_LEAST_ONE(function () {
                            _this.SUBRUL(_this.unionStatement);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.UNION);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.unionType);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.querySpecification);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.queryExpression);
                                    }
                                }
                            ]);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.orderByClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.limitClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lockClause);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.queryExpressionNointo);
                        _this.AT_LEAST_ONE(function () {
                            _this.SUBRUL(_this.unionParenthesis);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.UNION);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.unionType);
                            });
                            _this.SUBRUL(_this.queryExpression);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.orderByClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.limitClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lockClause);
                        });
                    }
                }
            ]);
        });
        _this.RULE('updateStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.singleUpdateStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.multipleUpdateStatement);
                    }
                }
            ]);
        });
        _this.RULE('insertStatementValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.selectStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.insertFormat);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expressionsWithDefaults);
                        _this.CONSUME(Tokens.OP);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.expressionsWithDefaults);
                            _this.CONSUME(Tokens.OP);
                        });
                    }
                }
            ]);
        });
        _this.RULE('updatedElement', function () {
            _this.SUBRUL(_this.fullColumnName);
            _this.CONSUME(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT);
                    }
                }
            ]);
        });
        _this.RULE('assignmentField', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCAL_ID);
                    }
                }
            ]);
        });
        _this.RULE('lockClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOR);
                        _this.CONSUME(Tokens.UPDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCK);
                        _this.CONSUME(Tokens.IN);
                        _this.CONSUME(Tokens.SHARE);
                        _this.CONSUME(Tokens.MODE);
                    }
                }
            ]);
        });
        _this.RULE('singleDeleteStatement', function () {
            _this.CONSUME(Tokens.DELETE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.QUICK);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.CONSUME(Tokens.FROM);
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.orderByClause);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LIMIT);
                _this.SUBRUL(_this.decimalLiteral);
            });
        });
        _this.RULE('multipleDeleteStatement', function () {
            _this.CONSUME(Tokens.DELETE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.QUICK);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.tableName);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.CONSUME(Tokens.OP);
                            });
                        });
                        _this.CONSUME(Tokens.FROM);
                        _this.SUBRUL(_this.tableSources);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM);
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.tableName);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.CONSUME(Tokens.OP);
                            });
                        });
                        _this.CONSUME(Tokens.USING);
                        _this.SUBRUL(_this.tableSources);
                    }
                }
            ]);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
        });
        _this.RULE('handlerOpenStatement', function () {
            _this.CONSUME(Tokens.HANDLER);
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.OPEN);
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.AS);
                });
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('handlerReadIndexStatement', function () {
            _this.CONSUME(Tokens.HANDLER);
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.READ);
            _this.SUBRUL(_this.index);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.comparisonOperator);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.constants);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.moveOrder);
                    }
                }
            ]);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LIMIT);
                _this.SUBRUL(_this.decimalLiteral);
            });
        });
        _this.RULE('handlerReadStatement', function () {
            _this.CONSUME(Tokens.HANDLER);
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.READ);
            _this.SUBRUL(_this.moveOrder);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.LIMIT);
                _this.SUBRUL(_this.decimalLiteral);
            });
        });
        _this.RULE('handlerCloseStatement', function () {
            _this.CONSUME(Tokens.HANDLER);
            _this.SUBRUL(_this.tableName);
            _this.CONSUME(Tokens.CLOSE);
        });
        _this.RULE('singleUpdateStatement', function () {
            _this.CONSUME(Tokens.UPDATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.AS);
                });
                _this.SUBRUL(_this.uid);
            });
            _this.CONSUME(Tokens.SET);
            _this.SUBRUL(_this.updatedElement);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.updatedElement);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.orderByClause);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.limitClause);
            });
        });
        _this.RULE('multipleUpdateStatement', function () {
            _this.CONSUME(Tokens.UPDATE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.priority);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.SUBRUL(_this.tableSources);
            _this.CONSUME(Tokens.SET);
            _this.SUBRUL(_this.updatedElement);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.updatedElement);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.expression);
            });
        });
        _this.RULE('orderByClause', function () {
            _this.CONSUME(Tokens.ORDER);
            _this.CONSUME(Tokens.BY);
            _this.SUBRUL(_this.orderByExpression);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.orderByExpression);
            });
        });
        _this.RULE('orderByExpression', function () {
            _this.SUBRUL(_this.expression);
            _this.OPTION(function () {
                _this.SUBRUL(_this.order);
            });
        });
        _this.RULE('tableSources', function () {
            _this.SUBRUL(_this.tableSource);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.tableSource);
            });
        });
        _this.RULE('tableSource', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.tableSourceItem);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.joinPart);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tableSourceItem);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.joinPart);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('tableSourceItem', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.PARTITION);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.uidList);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.AS);
                            });
                            _this.SUBRUL(_this.alias);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.indexHint);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.indexHint);
                            });
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.selectStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.parenthesisSubquery);
                                    _this.CONSUME(Tokens.OP);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.AS);
                        });
                        _this.SUBRUL(_this.alias);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tableSources);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('indexHint', function () {
            _this.SUBRUL(_this.indexHintAction);
            _this.SUBRUL(_this.keyFormat);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.FOR);
                _this.SUBRUL(_this.indexHintType);
            });
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.uidList);
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('indexHintType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.JOIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ORDER);
                        _this.CONSUME(Tokens.BY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GROUP);
                        _this.CONSUME(Tokens.BY);
                    }
                }
            ]);
        });
        _this.RULE('joinPart', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.INNER);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.CROSS);
                                    }
                                }
                            ]);
                        });
                        _this.CONSUME(Tokens.JOIN);
                        _this.SUBRUL(_this.tableSourceItem);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.ON);
                                        _this.SUBRUL(_this.expression);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.USING);
                                        _this.CONSUME(Tokens.OP);
                                        _this.SUBRUL(_this.uidList);
                                        _this.CONSUME(Tokens.OP);
                                    }
                                }
                            ]);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRAIGHT_JOIN);
                        _this.SUBRUL(_this.tableSourceItem);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ON);
                            _this.SUBRUL(_this.expression);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LEFT);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.RIGHT);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OUTER);
                        });
                        _this.CONSUME(Tokens.JOIN);
                        _this.SUBRUL(_this.tableSourceItem);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ON);
                                    _this.SUBRUL(_this.expression);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.USING);
                                    _this.CONSUME(Tokens.OP);
                                    _this.SUBRUL(_this.uidList);
                                    _this.CONSUME(Tokens.OP);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NATURAL);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.LEFT);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.RIGHT);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OUTER);
                            });
                        });
                        _this.CONSUME(Tokens.JOIN);
                        _this.SUBRUL(_this.tableSourceItem);
                    }
                }
            ]);
        });
        _this.RULE('queryExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.querySpecification);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.queryExpression);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('queryExpressionNointo', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.querySpecificationNointo);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.queryExpressionNointo);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('querySpecification', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SELECT);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.selectSpec);
                        });
                        _this.SUBRUL(_this.selectElements);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.selectIntoExpression);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.fromClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.orderByClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.limitClause);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SELECT);
                        _this.MANY(function () {
                            _this.SUBRUL(_this.selectSpec);
                        });
                        _this.SUBRUL(_this.selectElements);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.fromClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.orderByClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.limitClause);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.selectIntoExpression);
                        });
                    }
                }
            ]);
        });
        _this.RULE('querySpecificationNointo', function () {
            _this.CONSUME(Tokens.SELECT);
            _this.MANY(function () {
                _this.SUBRUL(_this.selectSpec);
            });
            _this.SUBRUL(_this.selectElements);
            _this.OPTION(function () {
                _this.SUBRUL(_this.fromClause);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.orderByClause);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.limitClause);
            });
        });
        _this.RULE('unionParenthesis', function () {
            _this.CONSUME(Tokens.UNION);
            _this.OPTION(function () {
                _this.SUBRUL(_this.unionType);
            });
            _this.SUBRUL(_this.queryExpressionNointo);
        });
        _this.RULE('unionStatement', function () {
            _this.CONSUME(Tokens.UNION);
            _this.OPTION(function () {
                _this.SUBRUL(_this.unionType);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.querySpecificationNointo);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.queryExpressionNointo);
                    }
                }
            ]);
        });
        _this.RULE('selectSpec', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DISTINCT);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DISTINCTROW);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HIGH_PRIORITY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRAIGHT_JOIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_SMALL_RESULT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BIG_RESULT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BUFFER_RESULT);
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SQL_CACHE);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SQL_NO_CACHE);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_CALC_FOUND_ROWS);
                    }
                }
            ]);
        });
        _this.RULE('selectElements', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.star);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.selectElement);
                    }
                }
            ]);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.selectElement);
            });
        });
        _this.RULE('selectElement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullId);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullColumnName);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.AS);
                            });
                            _this.SUBRUL(_this.uid);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionCall);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.AS);
                            });
                            _this.SUBRUL(_this.uid);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LOCAL_ID);
                            _this.CONSUME(Tokens.VAR_ASSIGN);
                        });
                        _this.SUBRUL(_this.expression);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.AS);
                            });
                            _this.SUBRUL(_this.uid);
                        });
                    }
                }
            ]);
        });
        _this.RULE('selectIntoExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTO);
                        _this.SUBRUL(_this.assignmentField);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.assignmentField);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTO);
                        _this.CONSUME(Tokens.DUMPFILE);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTO);
                        _this.CONSUME(Tokens.OUTFILE);
                        _this.SUBRUL(_this.filename);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CHARACTER);
                            _this.CONSUME(Tokens.SET);
                            _this.SUBRUL(_this.charset);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.fieldsFormat);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRUL(_this.selectFieldsInto);
                            });
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LINES);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRUL(_this.selectLinesInto);
                            });
                        });
                    }
                }
            ]);
        });
        _this.RULE('selectFieldsInto', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TERMINATED);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.terminationField);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.OPTIONALLY);
                        });
                        _this.CONSUME(Tokens.ENCLOSED);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.enclosion);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ESCAPED);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.escaping);
                    }
                }
            ]);
        });
        _this.RULE('selectLinesInto', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STARTING);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.starting);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TERMINATED);
                        _this.CONSUME(Tokens.BY);
                        _this.SUBRUL(_this.terminationLine);
                    }
                }
            ]);
        });
        _this.RULE('fromClause', function () {
            _this.CONSUME(Tokens.FROM);
            _this.SUBRUL(_this.tableSources);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRUL(_this.whereExpr);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.GROUP);
                _this.CONSUME(Tokens.BY);
                _this.SUBRUL(_this.groupByItem);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.groupByItem);
                });
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.WITH);
                    _this.CONSUME(Tokens.ROLLUP);
                });
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.HAVING);
                _this.SUBRUL(_this.havingExpr);
            });
        });
        _this.RULE('groupByItem', function () {
            _this.SUBRUL(_this.expression);
            _this.OPTION(function () {
                _this.SUBRUL(_this.order);
            });
        });
        _this.RULE('limitClause', function () {
            _this.CONSUME(Tokens.LIMIT);
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.offset);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.limit);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.limit);
                        _this.CONSUME(Tokens.OFFSET);
                        _this.SUBRUL(_this.offset);
                    }
                }
            ]);
        });
        _this.RULE('startTransaction', function () {
            _this.CONSUME(Tokens.START);
            _this.CONSUME(Tokens.TRANSACTION);
            _this.OPTION(function () {
                _this.SUBRUL(_this.transactionMode);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.transactionMode);
                });
            });
        });
        _this.RULE('beginWork', function () {
            _this.CONSUME(Tokens.BEGIN);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WORK);
            });
        });
        _this.RULE('commitWork', function () {
            _this.CONSUME(Tokens.COMMIT);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WORK);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.AND);
                _this.OPTION(function () {
                    _this.SUBRUL(_this.nochain);
                });
                _this.CONSUME(Tokens.CHAIN);
            });
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.SUBRUL(_this.norelease);
                });
                _this.CONSUME(Tokens.RELEASE);
            });
        });
        _this.RULE('rollbackWork', function () {
            _this.CONSUME(Tokens.ROLLBACK);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WORK);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.AND);
                _this.OPTION(function () {
                    _this.SUBRUL(_this.nochain);
                });
                _this.CONSUME(Tokens.CHAIN);
            });
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.SUBRUL(_this.norelease);
                });
                _this.CONSUME(Tokens.RELEASE);
            });
        });
        _this.RULE('savepointStatement', function () {
            _this.CONSUME(Tokens.SAVEPOINT);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('rollbackStatement', function () {
            _this.CONSUME(Tokens.ROLLBACK);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WORK);
            });
            _this.CONSUME(Tokens.TO);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SAVEPOINT);
            });
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('releaseStatement', function () {
            _this.CONSUME(Tokens.RELEASE);
            _this.CONSUME(Tokens.SAVEPOINT);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('lockTables', function () {
            _this.CONSUME(Tokens.LOCK);
            _this.CONSUME(Tokens.TABLES);
            _this.SUBRUL(_this.lockTableElement);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.lockTableElement);
            });
        });
        _this.RULE('unlockTables', function () {
            _this.CONSUME(Tokens.UNLOCK);
            _this.CONSUME(Tokens.TABLES);
        });
        _this.RULE('setAutocommitStatement', function () {
            _this.CONSUME(Tokens.SET);
            _this.CONSUME(Tokens.AUTOCOMMIT);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.autocommitValue);
        });
        _this.RULE('setTransactionStatement', function () {
            _this.CONSUME(Tokens.SET);
            _this.OPTION(function () {
                _this.SUBRUL(_this.transactionContext);
            });
            _this.CONSUME(Tokens.TRANSACTION);
            _this.SUBRUL(_this.transactionOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.transactionOption);
            });
        });
        _this.RULE('transactionMode', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITH);
                        _this.CONSUME(Tokens.CONSISTENT);
                        _this.CONSUME(Tokens.SNAPSHOT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.WRITE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.ONLY);
                    }
                }
            ]);
        });
        _this.RULE('lockTableElement', function () {
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.AS);
                });
                _this.SUBRUL(_this.uid);
            });
            _this.SUBRUL(_this.lockAction);
        });
        _this.RULE('lockAction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LOCAL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LOW_PRIORITY);
                        });
                        _this.CONSUME(Tokens.WRITE);
                    }
                }
            ]);
        });
        _this.RULE('transactionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISOLATION);
                        _this.CONSUME(Tokens.LEVEL);
                        _this.SUBRUL(_this.transactionLevel);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.WRITE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.ONLY);
                    }
                }
            ]);
        });
        _this.RULE('transactionLevel', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPEATABLE);
                        _this.CONSUME(Tokens.READ);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.COMMITTED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.UNCOMMITTED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SERIALIZABLE);
                    }
                }
            ]);
        });
        _this.RULE('changeMaster', function () {
            _this.CONSUME(Tokens.CHANGE);
            _this.CONSUME(Tokens.MASTER);
            _this.CONSUME(Tokens.TO);
            _this.SUBRUL(_this.masterOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.masterOption);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.channelOption);
            });
        });
        _this.RULE('changeReplicationFilter', function () {
            _this.CONSUME(Tokens.CHANGE);
            _this.CONSUME(Tokens.REPLICATION);
            _this.CONSUME(Tokens.FILTER);
            _this.SUBRUL(_this.replicationFilter);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.replicationFilter);
            });
        });
        _this.RULE('purgeBinaryLogs', function () {
            _this.CONSUME(Tokens.PURGE);
            _this.SUBRUL(_this.purgeFormat);
            _this.CONSUME(Tokens.LOGS);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO);
                        _this.SUBRUL(_this.fileName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BEFORE);
                        _this.SUBRUL(_this.timeValue);
                    }
                }
            ]);
        });
        _this.RULE('resetMaster', function () {
            _this.CONSUME(Tokens.RESET);
            _this.CONSUME(Tokens.MASTER);
        });
        _this.RULE('resetSlave', function () {
            _this.CONSUME(Tokens.RESET);
            _this.CONSUME(Tokens.SLAVE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ALL);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.channelOption);
            });
        });
        _this.RULE('startSlave', function () {
            _this.CONSUME(Tokens.START);
            _this.CONSUME(Tokens.SLAVE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.threadType);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.threadType);
                });
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.UNTIL);
                _this.SUBRUL(_this.untilOption);
            });
            _this.MANY(function () {
                _this.SUBRUL(_this.connectionOption);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.channelOption);
            });
        });
        _this.RULE('stopSlave', function () {
            _this.CONSUME(Tokens.STOP);
            _this.CONSUME(Tokens.SLAVE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.threadType);
                _this.MANY(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.threadType);
                });
            });
        });
        _this.RULE('startGroupReplication', function () {
            _this.CONSUME(Tokens.START);
            _this.CONSUME(Tokens.GROUP_REPLICATION);
        });
        _this.RULE('stopGroupReplication', function () {
            _this.CONSUME(Tokens.STOP);
            _this.CONSUME(Tokens.GROUP_REPLICATION);
        });
        _this.RULE('masterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.stringMasterOption);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalMasterOption);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.boolMasterOption);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.boolVal);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.REAL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IGNORE_SERVER_IDS);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.uid);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.uid);
                            });
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('stringMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_BIND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HOST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_USER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PASSWORD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CAPATH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CERT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CIPHER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_TLS_VERSION);
                    }
                }
            ]);
        });
        _this.RULE('decimalMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PORT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_RETRY_COUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_DELAY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_POS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_POS);
                    }
                }
            ]);
        });
        _this.RULE('boolMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_AUTO_POSITION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
                    }
                }
            ]);
        });
        _this.RULE('channelOption', function () {
            _this.CONSUME(Tokens.FOR);
            _this.CONSUME(Tokens.CHANNEL);
            _this.CONSUME(Tokens.STRING_LITERAL);
        });
        _this.RULE('replicationFilter', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_DB);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uidList);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uidList);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_TABLE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tables);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tables);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.simpleStrings);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.simpleStrings);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.tablePair);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.tablePair);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('tablePair', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.firstTable);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.secondTable);
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('threadType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IO_THREAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_THREAD);
                    }
                }
            ]);
        });
        _this.RULE('untilOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.gtids);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.gtuidSet);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_FILE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.MASTER_LOG_POS);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_FILE);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.RELAY_LOG_POS);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
                    }
                }
            ]);
        });
        _this.RULE('connectionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USER);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.conOptUser);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PASSWORD);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.conOptPassword);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT_AUTH);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.conOptDefAuth);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGIN_DIR);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.conOptPluginDir);
                    }
                }
            ]);
        });
        _this.RULE('gtuidSet', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uuidSet);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.uuidSet);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('xaStartTransaction', function () {
            _this.CONSUME(Tokens.XA);
            _this.SUBRUL(_this.xaStart);
            _this.SUBRUL(_this.xid);
            _this.OPTION(function () {
                _this.SUBRUL(_this.xaAction);
            });
        });
        _this.RULE('xaEndTransaction', function () {
            _this.CONSUME(Tokens.XA);
            _this.CONSUME(Tokens.END);
            _this.SUBRUL(_this.xid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.SUSPEND);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.FOR);
                    _this.CONSUME(Tokens.MIGRATE);
                });
            });
        });
        _this.RULE('xaPrepareStatement', function () {
            _this.CONSUME(Tokens.XA);
            _this.CONSUME(Tokens.PREPARE);
            _this.SUBRUL(_this.xid);
        });
        _this.RULE('xaCommitWork', function () {
            _this.CONSUME(Tokens.XA);
            _this.CONSUME(Tokens.COMMIT);
            _this.SUBRUL(_this.xid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ONE);
                _this.CONSUME(Tokens.PHASE);
            });
        });
        _this.RULE('xaRollbackWork', function () {
            _this.CONSUME(Tokens.XA);
            _this.CONSUME(Tokens.ROLLBACK);
            _this.SUBRUL(_this.xid);
        });
        _this.RULE('xaRecoverWork', function () {
            _this.CONSUME(Tokens.XA);
            _this.CONSUME(Tokens.RECOVER);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.CONVERT);
                _this.SUBRUL(_this.xid);
            });
        });
        _this.RULE('prepareStatement', function () {
            _this.CONSUME(Tokens.PREPARE);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.FROM);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.query);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.variable);
                    }
                }
            ]);
        });
        _this.RULE('executeStatement', function () {
            _this.CONSUME(Tokens.EXECUTE);
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.USING);
                _this.SUBRUL(_this.userVariables);
            });
        });
        _this.RULE('deallocatePrepare', function () {
            _this.SUBRUL(_this.dropFormat);
            _this.CONSUME(Tokens.PREPARE);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('routineBody', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.blockStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.sqlStatement);
                    }
                }
            ]);
        });
        _this.RULE('blockStatement', function () {
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.BEGIN);
            _this.OPTION(function () {
                _this.MANY(function () {
                    _this.SUBRUL(_this.declareVariable);
                    _this.CONSUME(Tokens.SEMI);
                });
                _this.MANY(function () {
                    _this.SUBRUL(_this.declareCondition);
                    _this.CONSUME(Tokens.SEMI);
                });
                _this.MANY(function () {
                    _this.SUBRUL(_this.declareCursor);
                    _this.CONSUME(Tokens.SEMI);
                });
                _this.MANY(function () {
                    _this.SUBRUL(_this.declareHandler);
                    _this.CONSUME(Tokens.SEMI);
                });
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRUL(_this.procedureSqlStatement);
                });
            });
            _this.CONSUME(Tokens.END);
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('caseStatement', function () {
            _this.CONSUME(Tokens.CASE);
            _this.OPTION(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.expression);
                        }
                    }
                ]);
            });
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.caseAlternative);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ELSE);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRUL(_this.procedureSqlStatement);
                });
            });
            _this.CONSUME(Tokens.END);
            _this.CONSUME(Tokens.CASE);
        });
        _this.RULE('ifStatement', function () {
            _this.CONSUME(Tokens.IF);
            _this.SUBRUL(_this.expression);
            _this.CONSUME(Tokens.THEN);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.thenStatements);
            });
            _this.MANY(function () {
                _this.SUBRUL(_this.elifAlternative);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.ELSE);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRUL(_this.elseStatements);
                });
            });
            _this.CONSUME(Tokens.END);
            _this.CONSUME(Tokens.IF);
        });
        _this.RULE('iterateStatement', function () {
            _this.CONSUME(Tokens.ITERATE);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('leaveStatement', function () {
            _this.CONSUME(Tokens.LEAVE);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('loopStatement', function () {
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.LOOP);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.procedureSqlStatement);
            });
            _this.CONSUME(Tokens.END);
            _this.CONSUME(Tokens.LOOP);
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('repeatStatement', function () {
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.REPEAT);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.procedureSqlStatement);
            });
            _this.CONSUME(Tokens.UNTIL);
            _this.SUBRUL(_this.expression);
            _this.CONSUME(Tokens.END);
            _this.CONSUME(Tokens.REPEAT);
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('returnStatement', function () {
            _this.CONSUME(Tokens.RETURN);
            _this.SUBRUL(_this.expression);
        });
        _this.RULE('whileStatement', function () {
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.WHILE);
            _this.SUBRUL(_this.expression);
            _this.CONSUME(Tokens.DO);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.procedureSqlStatement);
            });
            _this.CONSUME(Tokens.END);
            _this.CONSUME(Tokens.WHILE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('cursorStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CLOSE);
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FETCH);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.NEXT);
                            });
                            _this.CONSUME(Tokens.FROM);
                        });
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.INTO);
                        _this.SUBRUL(_this.uidList);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OPEN);
                        _this.SUBRUL(_this.uid);
                    }
                }
            ]);
        });
        _this.RULE('declareVariable', function () {
            _this.CONSUME(Tokens.DECLARE);
            _this.SUBRUL(_this.uidList);
            _this.SUBRUL(_this.dataType);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.DEFAULT);
                _this.SUBRUL(_this.defaultValue);
            });
        });
        _this.RULE('declareCondition', function () {
            _this.CONSUME(Tokens.DECLARE);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.CONDITION);
            _this.CONSUME(Tokens.FOR);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLSTATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.VALUE);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('declareCursor', function () {
            _this.CONSUME(Tokens.DECLARE);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.CURSOR);
            _this.CONSUME(Tokens.FOR);
            _this.SUBRUL(_this.selectStatement);
        });
        _this.RULE('declareHandler', function () {
            _this.CONSUME(Tokens.DECLARE);
            _this.SUBRUL(_this.handlerAction);
            _this.CONSUME(Tokens.HANDLER);
            _this.CONSUME(Tokens.FOR);
            _this.SUBRUL(_this.handlerConditionValue);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.handlerConditionValue);
            });
            _this.SUBRUL(_this.routineBody);
        });
        _this.RULE('handlerConditionValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLSTATE);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.VALUE);
                        });
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLWARNING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NOT);
                        _this.CONSUME(Tokens.FOUND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLEXCEPTION);
                    }
                }
            ]);
        });
        _this.RULE('procedureSqlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.compoundStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.sqlStatement);
                    }
                }
            ]);
            _this.CONSUME(Tokens.SEMI);
        });
        _this.RULE('caseAlternative', function () {
            _this.CONSUME(Tokens.WHEN);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
            _this.CONSUME(Tokens.THEN);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.procedureSqlStatement);
            });
        });
        _this.RULE('elifAlternative', function () {
            _this.CONSUME(Tokens.ELSEIF);
            _this.SUBRUL(_this.expression);
            _this.CONSUME(Tokens.THEN);
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.procedureSqlStatement);
            });
        });
        _this.RULE('alterUser', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.CONSUME(Tokens.USER);
                        _this.SUBRUL(_this.userSpecification);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userSpecification);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.CONSUME(Tokens.USER);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifExists);
                        });
                        _this.SUBRUL(_this.userAuthOption);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userAuthOption);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.REQUIRE);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.tlsNone);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.tlsOption);
                                        _this.MANY(function () {
                                            _this.OPTION(function () {
                                                _this.CONSUME(Tokens.AND);
                                            });
                                            _this.SUBRUL(_this.tlsOption);
                                        });
                                    }
                                }
                            ]);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.WITH);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRUL(_this.userResourceOption);
                            });
                        });
                        _this.MANY(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.userPasswordOption);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.userLockOption);
                                    }
                                }
                            ]);
                        });
                    }
                }
            ]);
        });
        _this.RULE('createUser', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.CONSUME(Tokens.USER);
                        _this.SUBRUL(_this.userAuthOption);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userAuthOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.CONSUME(Tokens.USER);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifNotExists);
                        });
                        _this.SUBRUL(_this.userAuthOption);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userAuthOption);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.REQUIRE);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.tlsNone);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.tlsOption);
                                        _this.MANY(function () {
                                            _this.OPTION(function () {
                                                _this.CONSUME(Tokens.AND);
                                            });
                                            _this.SUBRUL(_this.tlsOption);
                                        });
                                    }
                                }
                            ]);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.WITH);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRUL(_this.userResourceOption);
                            });
                        });
                        _this.MANY(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.userPasswordOption);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.userLockOption);
                                    }
                                }
                            ]);
                        });
                    }
                }
            ]);
        });
        _this.RULE('dropUser', function () {
            _this.CONSUME(Tokens.DROP);
            _this.CONSUME(Tokens.USER);
            _this.OPTION(function () {
                _this.SUBRUL(_this.ifExists);
            });
            _this.SUBRUL(_this.userName);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.userName);
            });
        });
        _this.RULE('grantStatement', function () {
            _this.CONSUME(Tokens.GRANT);
            _this.SUBRUL(_this.privelegeClause);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.privelegeClause);
            });
            _this.CONSUME(Tokens.ON);
            _this.OPTION(function () {
                _this.SUBRUL(_this.privilegeObject);
            });
            _this.SUBRUL(_this.privilegeLevel);
            _this.CONSUME(Tokens.TO);
            _this.SUBRUL(_this.userAuthOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.userAuthOption);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.REQUIRE);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.tlsNone);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.tlsOption);
                            _this.MANY(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(Tokens.AND);
                                });
                                _this.SUBRUL(_this.tlsOption);
                            });
                        }
                    }
                ]);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WITH);
                _this.MANY(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME(Tokens.GRANT);
                                _this.CONSUME(Tokens.OPTION);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRUL(_this.userResourceOption);
                            }
                        }
                    ]);
                });
            });
        });
        _this.RULE('grantProxy', function () {
            _this.CONSUME(Tokens.GRANT);
            _this.CONSUME(Tokens.PROXY);
            _this.CONSUME(Tokens.ON);
            _this.SUBRUL(_this.fromFirst);
            _this.CONSUME(Tokens.TO);
            _this.SUBRUL(_this.toFirst);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.toOther);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.WITH);
                _this.CONSUME(Tokens.GRANT);
                _this.CONSUME(Tokens.OPTION);
            });
        });
        _this.RULE('renameUser', function () {
            _this.CONSUME(Tokens.RENAME);
            _this.CONSUME(Tokens.USER);
            _this.SUBRUL(_this.renameUserClause);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.renameUserClause);
            });
        });
        _this.RULE('revokeStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVOKE);
                        _this.SUBRUL(_this.privelegeClause);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.privelegeClause);
                        });
                        _this.CONSUME(Tokens.ON);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.privilegeObject);
                        });
                        _this.SUBRUL(_this.privilegeLevel);
                        _this.CONSUME(Tokens.FROM);
                        _this.SUBRUL(_this.userName);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVOKE);
                        _this.CONSUME(Tokens.ALL);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.PRIVILEGES);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.GRANT);
                        _this.CONSUME(Tokens.OPTION);
                        _this.CONSUME(Tokens.FROM);
                        _this.SUBRUL(_this.userName);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.userName);
                        });
                    }
                }
            ]);
        });
        _this.RULE('revokeProxy', function () {
            _this.CONSUME(Tokens.REVOKE);
            _this.CONSUME(Tokens.PROXY);
            _this.CONSUME(Tokens.ON);
            _this.SUBRUL(_this.onUser);
            _this.CONSUME(Tokens.FROM);
            _this.SUBRUL(_this.fromFirst);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.fromOther);
            });
        });
        _this.RULE('setPasswordStatement', function () {
            _this.CONSUME(Tokens.SET);
            _this.CONSUME(Tokens.PASSWORD);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.FOR);
                _this.SUBRUL(_this.userName);
            });
            _this.CONSUME(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.passwordFunctionClause);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('userSpecification', function () {
            _this.SUBRUL(_this.userName);
            _this.SUBRUL(_this.userPasswordOption);
        });
        _this.RULE('userAuthOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.userName);
                        _this.CONSUME(Tokens.IDENTIFIED);
                        _this.CONSUME(Tokens.BY);
                        _this.CONSUME(Tokens.PASSWORD);
                        _this.SUBRUL(_this.hashed);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.userName);
                        _this.CONSUME(Tokens.IDENTIFIED);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.WITH);
                            _this.SUBRUL(_this.authPlugin);
                        });
                        _this.CONSUME(Tokens.BY);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.userName);
                        _this.CONSUME(Tokens.IDENTIFIED);
                        _this.CONSUME(Tokens.WITH);
                        _this.SUBRUL(_this.authPlugin);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.AS);
                            _this.CONSUME(Tokens.STRING_LITERAL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.userName);
                    }
                }
            ]);
        });
        _this.RULE('tlsOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SSL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.X509);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CIPHER);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISSUER);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBJECT);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('userResourceOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                }
            ]);
        });
        _this.RULE('userPasswordOption', function () {
            _this.CONSUME(Tokens.PASSWORD);
            _this.CONSUME(Tokens.EXPIRE);
            _this.OPTION(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.expireType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.expireType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.expireType);
                            _this.SUBRUL(_this.decimalLiteral);
                            _this.CONSUME(Tokens.DAY);
                        }
                    }
                ]);
            });
        });
        _this.RULE('userLockOption', function () {
            _this.CONSUME(Tokens.ACCOUNT);
            _this.SUBRUL(_this.lockType);
        });
        _this.RULE('privelegeClause', function () {
            _this.SUBRUL(_this.privilege);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
        });
        _this.RULE('privilege', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALL);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.PRIVILEGES);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ROUTINE);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.TEMPORARY);
                                        _this.CONSUME(Tokens.TABLES);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.ROUTINE);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.VIEW);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.USER);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.TABLESPACE);
                                    }
                                }
                            ]);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DELETE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DROP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXECUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GRANT);
                        _this.CONSUME(Tokens.OPTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INDEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSERT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCK);
                        _this.CONSUME(Tokens.TABLES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROCESS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROXY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REFERENCES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELOAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CLIENT);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SLAVE);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SELECT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VIEW);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DATABASES);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHUTDOWN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUPER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIGGER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USAGE);
                    }
                }
            ]);
        });
        _this.RULE('privilegeLevel', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                    }
                }
            ]);
        });
        _this.RULE('renameUserClause', function () {
            _this.SUBRUL(_this.fromFirst);
            _this.CONSUME(Tokens.TO);
            _this.SUBRUL(_this.toFirst);
        });
        _this.RULE('analyzeTable', function () {
            _this.CONSUME(Tokens.ANALYZE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.actionOption);
            });
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tables);
        });
        _this.RULE('checkTable', function () {
            _this.CONSUME(Tokens.CHECK);
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tables);
            _this.MANY(function () {
                _this.SUBRUL(_this.checkTableOption);
            });
        });
        _this.RULE('checksumTable', function () {
            _this.CONSUME(Tokens.CHECKSUM);
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tables);
            _this.OPTION(function () {
                _this.SUBRUL(_this.actionOption);
            });
        });
        _this.RULE('optimizeTable', function () {
            _this.CONSUME(Tokens.OPTIMIZE);
            _this.OPTION(function () {
                _this.SUBRUL(_this.actionOption);
            });
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tables);
        });
        _this.RULE('repairTable', function () {
            _this.CONSUME(Tokens.REPAIR);
            _this.OPTION(function () {
                _this.SUBRUL(_this.actionOption);
            });
            _this.CONSUME(Tokens.TABLE);
            _this.SUBRUL(_this.tables);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.QUICK);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.EXTENDED);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.USE_FRM);
            });
        });
        _this.RULE('checkTableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOR);
                        _this.CONSUME(Tokens.UPGRADE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUICK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FAST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEDIUM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTENDED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHANGED);
                    }
                }
            ]);
        });
        _this.RULE('createUdfunction', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.AGGREGATE);
            });
            _this.CONSUME(Tokens.FUNCTION);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.RETURNS);
            _this.SUBRUL(_this.returnType);
            _this.CONSUME(Tokens.SONAME);
            _this.CONSUME(Tokens.STRING_LITERAL);
        });
        _this.RULE('installPlugin', function () {
            _this.CONSUME(Tokens.INSTALL);
            _this.CONSUME(Tokens.PLUGIN);
            _this.SUBRUL(_this.uid);
            _this.CONSUME(Tokens.SONAME);
            _this.CONSUME(Tokens.STRING_LITERAL);
        });
        _this.RULE('uninstallPlugin', function () {
            _this.CONSUME(Tokens.UNINSTALL);
            _this.CONSUME(Tokens.PLUGIN);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('setStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.SUBRUL(_this.variableClause);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.variableClause);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.expression);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CHARACTER);
                                    _this.CONSUME(Tokens.SET);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CHARSET);
                                }
                            }
                        ]);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.charsetName);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DEFAULT);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SET);
                        _this.CONSUME(Tokens.NAMES);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.charsetName);
                                    _this.OPTION(function () {
                                        _this.CONSUME(Tokens.COLLATE);
                                        _this.SUBRUL(_this.collationName);
                                    });
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DEFAULT);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.setPasswordStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.setTransactionStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.setAutocommitStatement);
                    }
                }
            ]);
        });
        _this.RULE('showStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.logFormat);
                        _this.CONSUME(Tokens.LOGS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.logFormat);
                        _this.CONSUME(Tokens.EVENTS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.IN);
                            _this.SUBRUL(_this.filename);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FROM);
                            _this.SUBRUL(_this.fromPosition);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LIMIT);
                            _this.OPTION(function () {
                                _this.SUBRUL(_this.offset);
                                _this.CONSUME(Tokens.OP);
                            });
                            _this.SUBRUL(_this.rowCount);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.showCommonEntity);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.showFilter);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FULL);
                        });
                        _this.SUBRUL(_this.columnsFormat);
                        _this.SUBRUL(_this.tableFormat);
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.schemaFormat);
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.showFilter);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.CREATE);
                        _this.SUBRUL(_this.schemaFormat);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.ifNotExists);
                        });
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.CREATE);
                        _this.SUBRUL(_this.namedEntity);
                        _this.SUBRUL(_this.fullId);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.CREATE);
                        _this.CONSUME(Tokens.USER);
                        _this.SUBRUL(_this.userName);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.ENGINE);
                        _this.SUBRUL(_this.engineName);
                        _this.SUBRUL(_this.engineOption);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.showGlobalInfoClause);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.errorFormat);
                        _this.CONSUME(Tokens.LIMIT);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.offset);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.rowCount);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.COUNT);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.errorFormat);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.showSchemaEntity);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.schemaFormat);
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.showFilter);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.routine);
                        _this.CONSUME(Tokens.CODE);
                        _this.SUBRUL(_this.fullId);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.GRANTS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FOR);
                            _this.SUBRUL(_this.userName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.SUBRUL(_this.indexFormat);
                        _this.SUBRUL(_this.tableFormat);
                        _this.SUBRUL(_this.tableName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.schemaFormat);
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.WHERE);
                            _this.SUBRUL(_this.expression);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.OPEN);
                        _this.CONSUME(Tokens.TABLES);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.schemaFormat);
                            _this.SUBRUL(_this.uid);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.showFilter);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.PROFILE);
                        _this.SUBRUL(_this.showProfileType);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.showProfileType);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FOR);
                            _this.CONSUME(Tokens.QUERY);
                            _this.SUBRUL(_this.queryCount);
                        });
                        _this.CONSUME(Tokens.LIMIT);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.offset);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.SUBRUL(_this.rowCount);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.CONSUME(Tokens.SLAVE);
                        _this.CONSUME(Tokens.STATUS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FOR);
                            _this.CONSUME(Tokens.CHANNEL);
                            _this.CONSUME(Tokens.STRING_LITERAL);
                        });
                    }
                }
            ]);
        });
        _this.RULE('variableClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCAL_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLOBAL_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.CONSUME(Tokens.OP);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.GLOBAL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.SESSION);
                                    }
                                }
                            ]);
                        });
                        _this.SUBRUL(_this.uid);
                    }
                }
            ]);
        });
        _this.RULE('showCommonEntity', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARACTER);
                        _this.CONSUME(Tokens.SET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLLATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATABASES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SCHEMAS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FUNCTION);
                        _this.CONSUME(Tokens.STATUS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROCEDURE);
                        _this.CONSUME(Tokens.STATUS);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.GLOBAL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.SESSION);
                                    }
                                }
                            ]);
                        });
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STATUS);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VARIABLES);
                                }
                            }
                        ]);
                    }
                }
            ]);
        });
        _this.RULE('showFilter', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LIKE);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WHERE);
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
        });
        _this.RULE('showGlobalInfoClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.STORAGE);
                        });
                        _this.CONSUME(Tokens.ENGINES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER);
                        _this.CONSUME(Tokens.STATUS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGINS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PRIVILEGES);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FULL);
                        });
                        _this.CONSUME(Tokens.PROCESSLIST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROFILES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SLAVE);
                        _this.CONSUME(Tokens.HOSTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTHORS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTRIBUTORS);
                    }
                }
            ]);
        });
        _this.RULE('showSchemaEntity', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVENTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLE);
                        _this.CONSUME(Tokens.STATUS);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FULL);
                        });
                        _this.CONSUME(Tokens.TABLES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIGGERS);
                    }
                }
            ]);
        });
        _this.RULE('showProfileType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BLOCK);
                        _this.CONSUME(Tokens.IO);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTEXT);
                        _this.CONSUME(Tokens.SWITCHES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CPU);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IPC);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEMORY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PAGE);
                        _this.CONSUME(Tokens.FAULTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOURCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWAPS);
                    }
                }
            ]);
        });
        _this.RULE('binlogStatement', function () {
            _this.CONSUME(Tokens.BINLOG);
            _this.CONSUME(Tokens.STRING_LITERAL);
        });
        _this.RULE('cacheIndexStatement', function () {
            _this.CONSUME(Tokens.CACHE);
            _this.CONSUME(Tokens.INDEX);
            _this.SUBRUL(_this.tableIndexes);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.tableIndexes);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.uidList);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.ALL);
                        }
                    }
                ]);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME(Tokens.IN);
            _this.SUBRUL(_this.schema);
        });
        _this.RULE('flushStatement', function () {
            _this.CONSUME(Tokens.FLUSH);
            _this.OPTION(function () {
                _this.SUBRUL(_this.flushFormat);
            });
            _this.SUBRUL(_this.flushOption);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.flushOption);
            });
        });
        _this.RULE('killStatement', function () {
            _this.CONSUME(Tokens.KILL);
            _this.OPTION(function () {
                _this.SUBRUL(_this.connectionFormat);
            });
            _this.AT_LEAST_ONE(function () {
                _this.SUBRUL(_this.decimalLiteral);
            });
        });
        _this.RULE('loadIndexIntoCache', function () {
            _this.CONSUME(Tokens.LOAD);
            _this.CONSUME(Tokens.INDEX);
            _this.CONSUME(Tokens.INTO);
            _this.CONSUME(Tokens.CACHE);
            _this.SUBRUL(_this.loadedTableIndexes);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.loadedTableIndexes);
            });
        });
        _this.RULE('resetStatement', function () {
            _this.CONSUME(Tokens.RESET);
            _this.CONSUME(Tokens.QUERY);
            _this.CONSUME(Tokens.CACHE);
        });
        _this.RULE('shutdownStatement', function () {
            _this.CONSUME(Tokens.SHUTDOWN);
        });
        _this.RULE('tableIndexes', function () {
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.SUBRUL(_this.indexFormat);
                });
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uidList);
                _this.CONSUME(Tokens.OP);
            });
        });
        _this.RULE('flushOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DES_KEY_FILE);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.HOSTS);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.OPTION(function () {
                                        _this.OR([
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.BINARY);
                                                }
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.ENGINE);
                                                }
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.ERROR);
                                                }
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.GENERAL);
                                                }
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.RELAY);
                                                }
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.SLOW);
                                                }
                                            }
                                        ]);
                                    });
                                    _this.CONSUME(Tokens.LOGS);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OPTIMIZER_COSTS);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.PRIVILEGES);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.QUERY);
                                    _this.CONSUME(Tokens.CACHE);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STATUS);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.USER_RESOURCES);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.TABLES);
                                    _this.OPTION(function () {
                                        _this.CONSUME(Tokens.WITH);
                                        _this.CONSUME(Tokens.READ);
                                        _this.CONSUME(Tokens.LOCK);
                                    });
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY);
                        _this.CONSUME(Tokens.LOGS);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.channelOption);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLES);
                        _this.SUBRUL(_this.tables);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.flushTableOption);
                        });
                    }
                }
            ]);
        });
        _this.RULE('flushTableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITH);
                        _this.CONSUME(Tokens.READ);
                        _this.CONSUME(Tokens.LOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOR);
                        _this.CONSUME(Tokens.EXPORT);
                    }
                }
            ]);
        });
        _this.RULE('loadedTableIndexes', function () {
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.PARTITION);
                _this.CONSUME(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.partitionList);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.ALL);
                        }
                    }
                ]);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.OPTION(function () {
                    _this.SUBRUL(_this.indexFormat);
                });
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.indexList);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.CONSUME(Tokens.IGNORE);
                _this.CONSUME(Tokens.LEAVES);
            });
        });
        _this.RULE('simpleDescribeStatement', function () {
            _this.SUBRUL(_this.command);
            _this.SUBRUL(_this.tableName);
            _this.OPTION(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.column);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.pattern);
                        }
                    }
                ]);
            });
        });
        _this.RULE('fullDescribeStatement', function () {
            _this.SUBRUL(_this.command);
            _this.OPTION(function () {
                _this.SUBRUL(_this.formatType);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.formatValue);
            });
            _this.SUBRUL(_this.describeObjectClause);
        });
        _this.RULE('helpStatement', function () {
            _this.CONSUME(Tokens.HELP);
            _this.CONSUME(Tokens.STRING_LITERAL);
        });
        _this.RULE('useStatement', function () {
            _this.CONSUME(Tokens.USE);
            _this.SUBRUL(_this.uid);
        });
        _this.RULE('describeObjectClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.selectStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.deleteStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.insertStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.replaceStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.updateStatement);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOR);
                        _this.CONSUME(Tokens.CONNECTION);
                        _this.SUBRUL(_this.uid);
                    }
                }
            ]);
        });
        _this.RULE('fullId', function () {
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.DOT_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.uid);
                        }
                    }
                ]);
            });
        });
        _this.RULE('tableName', function () {
            _this.SUBRUL(_this.fullId);
        });
        _this.RULE('fullColumnName', function () {
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.SUBRUL(_this.dottedId);
                _this.OPTION(function () {
                    _this.SUBRUL(_this.dottedId);
                });
            });
        });
        _this.RULE('indexColumnName', function () {
            _this.SUBRUL(_this.uid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.decimalLiteral);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION(function () {
                _this.SUBRUL(_this.sortType);
            });
        });
        _this.RULE('userName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_USER_NAME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ID);
                    }
                }
            ]);
        });
        _this.RULE('mysqlVariable', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCAL_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLOBAL_ID);
                    }
                }
            ]);
        });
        _this.RULE('charsetName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BINARY);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.charsetNameBase);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
                    }
                }
            ]);
        });
        _this.RULE('collationName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('engineName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ARCHIVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BLACKHOLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CSV);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FEDERATED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INNODB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEMORY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MRG_MYISAM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MYISAM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NDB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NDBCLUSTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERFOMANCE_SCHEMA);
                    }
                }
            ]);
        });
        _this.RULE('uuidSet', function () {
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.AT_LEAST_ONE(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.decimalLiteral);
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.decimalLiteral);
            });
        });
        _this.RULE('xid', function () {
            _this.SUBRUL(_this.globalTableUid);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.qualifier);
                _this.OPTION(function () {
                    _this.CONSUME(Tokens.OP);
                    _this.SUBRUL(_this.idFormat);
                });
            });
        });
        _this.RULE('xuidStringId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_STRING);
                    }
                },
                {
                    ALT: function () {
                        _this.AT_LEAST_ONE(function () {
                            _this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
                        });
                    }
                }
            ]);
        });
        _this.RULE('authPlugin', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.uid);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('uid', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.simpleId);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVERSE_QUOTE_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
                    }
                }
            ]);
        });
        _this.RULE('simpleId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ID);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.charsetNameBase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.transactionLevelBase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.engineName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.privilegesBase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.intervalTypeBase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.dataTypeBase);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.keywordsCanBeId);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionNameBase);
                    }
                }
            ]);
        });
        _this.RULE('dottedId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DOT_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.uid);
                    }
                }
            ]);
        });
        _this.RULE('decimalLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DECIMAL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ZERO_DECIMAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONE_DECIMAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TWO_DECIMAL);
                    }
                }
            ]);
        });
        _this.RULE('fileSizeLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILESIZE_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                }
            ]);
        });
        _this.RULE('stringLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.OPTION(function () {
                                        _this.CONSUME(Tokens.STRING_CHARSET_NAME);
                                    });
                                    _this.CONSUME(Tokens.STRING_LITERAL);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
                                }
                            }
                        ]);
                        _this.AT_LEAST_ONE(function () {
                            _this.CONSUME(Tokens.STRING_LITERAL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.OPTION(function () {
                                        _this.CONSUME(Tokens.STRING_CHARSET_NAME);
                                    });
                                    _this.CONSUME(Tokens.STRING_LITERAL);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLLATE);
                            _this.SUBRUL(_this.collationName);
                        });
                    }
                }
            ]);
        });
        _this.RULE('booleanLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRUE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FALSE);
                    }
                }
            ]);
        });
        _this.RULE('hexadecimalLiteral', function () {
            _this.OPTION(function () {
                _this.CONSUME(Tokens.STRING_CHARSET_NAME);
            });
            _this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
        });
        _this.RULE('nullNotnull', function () {
            _this.OPTION(function () {
                _this.CONSUME(Tokens.NOT);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULL_SPEC_LITERAL);
                    }
                }
            ]);
        });
        _this.RULE('constant', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.stringLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.decimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.hexadecimalLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.booleanLiteral);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REAL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_STRING);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.SUBRUL(_this.nullLiteral);
                    }
                }
            ]);
        });
        _this.RULE('dataType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthOneDimension);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.BINARY);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CHARACTER);
                            _this.CONSUME(Tokens.SET);
                            _this.SUBRUL(_this.charsetName);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLLATE);
                            _this.SUBRUL(_this.collationName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthOneDimension);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.UNSIGNED);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ZEROFILL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthTwoDimension);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.UNSIGNED);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ZEROFILL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthTwoOptionalDimension);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.UNSIGNED);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ZEROFILL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthOneDimension);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.STRING_LITERAL);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.STRING_LITERAL);
                        });
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.BINARY);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CHARACTER);
                            _this.CONSUME(Tokens.SET);
                            _this.SUBRUL(_this.charsetName);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.COLLATE);
                            _this.SUBRUL(_this.collationName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                    }
                }
            ]);
        });
        _this.RULE('convertedDataType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthOneDimension);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthOneDimension);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.CHARACTER);
                            _this.CONSUME(Tokens.SET);
                            _this.SUBRUL(_this.charsetName);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.typeName);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.lengthTwoDimension);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SIGNED);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.UNSIGNED);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.INTEGER);
                        });
                    }
                }
            ]);
        });
        _this.RULE('lengthOneDimension', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('lengthTwoDimension', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('lengthTwoOptionalDimension', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.decimalLiteral);
            _this.OPTION(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.decimalLiteral);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('uidList', function () {
            _this.SUBRUL(_this.uid);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.uid);
            });
        });
        _this.RULE('tables', function () {
            _this.SUBRUL(_this.tableName);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.tableName);
            });
        });
        _this.RULE('indexColumnNames', function () {
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.indexColumnName);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.indexColumnName);
            });
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('expressions', function () {
            _this.SUBRUL(_this.expression);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.expression);
            });
        });
        _this.RULE('expressionsWithDefaults', function () {
            _this.SUBRUL(_this.expressionOrDefault);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.expressionOrDefault);
            });
        });
        _this.RULE('constants', function () {
            _this.SUBRUL(_this.constant);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRUL(_this.constant);
            });
        });
        _this.RULE('simpleStrings', function () {
            _this.CONSUME(Tokens.STRING_LITERAL);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.CONSUME(Tokens.STRING_LITERAL);
            });
        });
        _this.RULE('userVariables', function () {
            _this.CONSUME(Tokens.LOCAL_ID);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.CONSUME(Tokens.LOCAL_ID);
            });
        });
        _this.RULE('defaultValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULL_LITERAL);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ON);
                            _this.CONSUME(Tokens.UPDATE);
                            _this.CONSUME(Tokens.LOCALTIMESTAMP);
                        });
                    }
                }
            ]);
        });
        _this.RULE('expressionOrDefault', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT);
                    }
                }
            ]);
        });
        _this.RULE('ifExists', function () {
            _this.CONSUME(Tokens.IF);
            _this.CONSUME(Tokens.EXISTS);
        });
        _this.RULE('ifNotExists', function () {
            _this.CONSUME(Tokens.IF);
            _this.CONSUME(Tokens.NOT);
            _this.CONSUME(Tokens.EXISTS);
        });
        _this.RULE('functionCall', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.specificFunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.aggregateWindowedFunction);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.scalarFunctionName);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.functionArgs);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullId);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.functionArgs);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.passwordFunctionClause);
                    }
                }
            ]);
        });
        _this.RULE('specificFunction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CURRENT_DATE);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CURRENT_TIME);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CURRENT_USER);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LOCALTIME);
                                }
                            }
                        ]);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.SUBRUL(_this.separator);
                        _this.SUBRUL(_this.convertedDataType);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.CONSUME(Tokens.USING);
                        _this.SUBRUL(_this.charsetName);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CAST);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.CONSUME(Tokens.AS);
                        _this.SUBRUL(_this.convertedDataType);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VALUES);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.fullColumnName);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASE);
                        _this.SUBRUL(_this.expression);
                        _this.AT_LEAST_ONE(function () {
                            _this.SUBRUL(_this.caseFuncAlternative);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ELSE);
                            _this.SUBRUL(_this.elseArg);
                        });
                        _this.CONSUME(Tokens.END);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASE);
                        _this.AT_LEAST_ONE(function () {
                            _this.SUBRUL(_this.caseFuncAlternative);
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ELSE);
                            _this.SUBRUL(_this.elseArg);
                        });
                        _this.CONSUME(Tokens.END);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHAR);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.functionArgs);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.USING);
                            _this.SUBRUL(_this.charsetName);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POSITION);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.positionString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.positionExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.IN);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.inString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.inExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUBSTR);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUBSTRING);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromDecimal);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromExpression);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.FOR);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.forDecimal);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.forExpression);
                                    }
                                }
                            ]);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIM);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.positioinForm);
                        _this.OPTION(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.sourceString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRUL(_this.sourceExpression);
                                    }
                                }
                            ]);
                        });
                        _this.CONSUME(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIM);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.fromExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEIGHT_STRING);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.stringLiteral);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.expression);
                                }
                            }
                        ]);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.AS);
                            _this.SUBRUL(_this.stringFormat);
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.decimalLiteral);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.levelsInWeightString);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTRACT);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.intervalType);
                        _this.CONSUME(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceString);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.sourceExpression);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GET_FORMAT);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.datetimeFormat);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.stringLiteral);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('caseFuncAlternative', function () {
            _this.CONSUME(Tokens.WHEN);
            _this.SUBRUL(_this.condition);
            _this.CONSUME(Tokens.THEN);
            _this.SUBRUL(_this.consequent);
        });
        _this.RULE('levelsInWeightString', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEVEL);
                        _this.SUBRUL(_this.levelInWeightListElement);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.levelInWeightListElement);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEVEL);
                        _this.SUBRUL(_this.firstLevel);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.lastLevel);
                    }
                }
            ]);
        });
        _this.RULE('levelInWeightListElement', function () {
            _this.SUBRUL(_this.decimalLiteral);
            _this.OPTION(function () {
                _this.SUBRUL(_this.orderType);
            });
        });
        _this.RULE('aggregateWindowedFunction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.AVG);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MAX);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MIN);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUM);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.aggregator);
                        });
                        _this.SUBRUL(_this.functionArg);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COUNT);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.starArg);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.OPTION(function () {
                                        _this.SUBRUL(_this.aggregator);
                                    });
                                    _this.SUBRUL(_this.functionArg);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COUNT);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.aggregator);
                        _this.SUBRUL(_this.functionArgs);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_AND);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_OR);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_XOR);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STD);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV_POP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV_SAMP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VAR_POP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VAR_SAMP);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VARIANCE);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.aggregator);
                        });
                        _this.SUBRUL(_this.functionArg);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GROUP_CONCAT);
                        _this.CONSUME(Tokens.OP);
                        _this.OPTION(function () {
                            _this.SUBRUL(_this.aggregator);
                        });
                        _this.SUBRUL(_this.functionArgs);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ORDER);
                            _this.CONSUME(Tokens.BY);
                            _this.SUBRUL(_this.orderByExpression);
                            _this.MANY(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.SUBRUL(_this.orderByExpression);
                            });
                        });
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.SEPARATOR);
                            _this.SUBRUL(_this.separator);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('scalarFunctionName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionNameBase);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASCII);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_DATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_TIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURTIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_ADD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_SUB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSERT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCALTIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCALTIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NOW);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBSTR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBSTRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SYSDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_DATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_TIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_TIMESTAMP);
                    }
                }
            ]);
        });
        _this.RULE('passwordFunctionClause', function () {
            _this.SUBRUL(_this.functionName);
            _this.CONSUME(Tokens.OP);
            _this.SUBRUL(_this.functionArg);
            _this.CONSUME(Tokens.OP);
        });
        _this.RULE('functionArgs', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullColumnName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionCall);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
            _this.MANY(function () {
                _this.CONSUME(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.fullColumnName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.functionCall);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRUL(_this.expression);
                        }
                    }
                ]);
            });
        });
        _this.RULE('functionArg', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullColumnName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionCall);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                    }
                }
            ]);
        });
        _this.RULE('expression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.notOperator);
                        _this.SUBRUL(_this.expression);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expression);
                        _this.SUBRUL(_this.logicalOperator);
                        _this.SUBRUL(_this.expression);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.CONSUME(Tokens.IS);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.SUBRUL(_this.testValue);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                    }
                }
            ]);
        });
        _this.RULE('predicate', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.IN);
                        _this.CONSUME(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.selectStatement);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRUL(_this.expressions);
                                }
                            }
                        ]);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.CONSUME(Tokens.IS);
                        _this.SUBRUL(_this.nullNotnull);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.left);
                        _this.SUBRUL(_this.comparisonOperator);
                        _this.SUBRUL(_this.right);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.SUBRUL(_this.comparisonOperator);
                        _this.SUBRUL(_this.quantifier);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.selectStatement);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.BETWEEN);
                        _this.SUBRUL(_this.predicate);
                        _this.CONSUME(Tokens.AND);
                        _this.SUBRUL(_this.predicate);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.CONSUME(Tokens.SOUNDS);
                        _this.CONSUME(Tokens.LIKE);
                        _this.SUBRUL(_this.predicate);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.LIKE);
                        _this.SUBRUL(_this.predicate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.ESCAPE);
                            _this.CONSUME(Tokens.STRING_LITERAL);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.predicate);
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.NOT);
                        });
                        _this.SUBRUL(_this.regex);
                        _this.SUBRUL(_this.predicate);
                    }
                },
                {
                    ALT: function () {
                        _this.OPTION(function () {
                            _this.CONSUME(Tokens.LOCAL_ID);
                            _this.CONSUME(Tokens.VAR_ASSIGN);
                        });
                        _this.SUBRUL(_this.expressionAtom);
                    }
                }
            ]);
        });
        _this.RULE('expressionAtom', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRUL(_this.constant);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.fullColumnName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.functionCall);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.expressionAtom);
                        _this.CONSUME(Tokens.COLLATE);
                        _this.SUBRUL(_this.collationName);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.mysqlVariable);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.unaryOperator);
                        _this.SUBRUL(_this.expressionAtom);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BINARY);
                        _this.SUBRUL(_this.expressionAtom);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.MANY(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.expression);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.expression);
                        _this.AT_LEAST_ONE(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.SUBRUL(_this.expression);
                        });
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXISTS);
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.selectStatement);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.SUBRUL(_this.selectStatement);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTERVAL);
                        _this.SUBRUL(_this.expression);
                        _this.SUBRUL(_this.intervalType);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.left);
                        _this.SUBRUL(_this.bitOperator);
                        _this.SUBRUL(_this.right);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRUL(_this.left);
                        _this.SUBRUL(_this.mathOperator);
                        _this.SUBRUL(_this.right);
                    }
                }
            ]);
        });
        _this.RULE('unaryOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NOT);
                    }
                }
            ]);
        });
        _this.RULE('comparisonOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('logicalOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.XOR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('bitOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('mathOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DIV);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MOD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    }
                }
            ]);
        });
        _this.RULE('charsetNameBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ARMSCII8);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASCII);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIG5);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1250);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1251);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1256);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1257);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP850);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP852);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP866);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP932);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEC8);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EUCJPMS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EUCKR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GB2312);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GBK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOSTD8);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GREEK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HEBREW);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HP8);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEYBCS2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KOI8R);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KOI8U);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN1);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN5);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN7);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MACCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MACROMAN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SJIS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWE7);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIS620);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UCS2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UJIS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF16);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF16LE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF32);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8MB3);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8MB4);
                    }
                }
            ]);
        });
        _this.RULE('transactionLevelBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPEATABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMITTED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNCOMMITTED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SERIALIZABLE);
                    }
                }
            ]);
        });
        _this.RULE('privilegesBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROUTINE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXECUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROCESS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELOAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHUTDOWN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUPER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PRIVILEGES);
                    }
                }
            ]);
        });
        _this.RULE('intervalTypeBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUARTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MONTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MICROSECOND);
                    }
                }
            ]);
        });
        _this.RULE('dataTypeBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATETIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENUM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TEXT);
                    }
                }
            ]);
        });
        _this.RULE('keywordsCanBeId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ACCOUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ACTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AFTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AGGREGATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALGORITHM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ANY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTHORS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTOCOMMIT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTOEXTEND_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTO_INCREMENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AVG_ROW_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BEGIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BINLOG);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BLOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BOOL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BOOLEAN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BTREE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASCADED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHAIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHANNEL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHECKSUM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CIPHER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CLIENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COALESCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CODE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLUMNS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLUMN_FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMMIT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPACT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPLETION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESSED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCURRENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONNECTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONSISTENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTAINS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTRIBUTORS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COPY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CPU);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATAFILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEALLOCATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT_AUTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFINER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DELAY_KEY_WRITE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DIRECTORY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISCARD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DO);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DUMPFILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DUPLICATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DYNAMIC);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCRYPTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENGINE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENGINES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ERROR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ERRORS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ESCAPE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVEN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVENTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVERY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXCHANGE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXCLUSIVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXPIRE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTENT_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FAULTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIELDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILE_BLOCK_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIRST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIXED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOLLOWS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FULL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FUNCTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLOBAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GRANTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GROUP_REPLICATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HASH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IDENTIFIED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IGNORE_SERVER_IDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IMPORT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INDEXES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INITIAL_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INPLACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSERT_METHOD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSTANCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INVOKER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IO);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IO_THREAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IPC);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISOLATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISSUER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEY_BLOCK_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LANGUAGE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LAST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEAVES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LESS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEVEL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LIST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOGFILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOGS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_AUTO_POSITION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_DELAY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HOST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_POS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PASSWORD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PORT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_RETRY_COUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CAPATH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CERT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CIPHER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_TLS_VERSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_USER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_ROWS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEMORY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MERGE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MIGRATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MIN_ROWS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MODIFY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MUTEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MYSQL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NAME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NAMES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NCHAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NEVER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NO);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NODEGROUP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NONE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OFFLINE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OFFSET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OJ);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OLD_PASSWORD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONLINE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONLY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OPTIMIZER_COSTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OPTIONS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OWNER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PACK_KEYS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PAGE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARSER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTIAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITIONING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTITIONS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PASSWORD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PHASE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGINS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGIN_DIR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PORT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PRECEDES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PREPARE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PRESERVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PREV);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROCESSLIST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROFILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROFILES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROXY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUERY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUICK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REBUILD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RECOVER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REDO_BUFFER_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REDUNDANT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAYLOG);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_POS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REMOVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REORGANIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPAIR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_DB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_TABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RESUME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RETURNS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROLLBACK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROLLUP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROTATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROWS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW_FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SAVEPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SCHEDULE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECURITY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SERVER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SESSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHARE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHARED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIGNED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIMPLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SLAVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SNAPSHOT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOCKET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOUNDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOURCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_AFTER_GTIDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BUFFER_RESULT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_CACHE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_NO_CACHE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_THREAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.START);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STARTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_AUTO_RECALC);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_PERSISTENT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATUS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STOP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STORAGE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBJECT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBPARTITION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBPARTITIONS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUSPEND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWAPS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWITCHES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TABLESPACE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TEMPORARY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TEMPTABLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.THAN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRANSACTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRUNCATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNDEFINED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNDOFILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNKNOWN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPGRADE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VALIDATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VALUE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VARIABLES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VIEW);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WAIT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WARNINGS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITHOUT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WORK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WRAPPER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.X509);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.XA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.XML);
                    }
                }
            ]);
        });
        _this.RULE('functionNameBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ABS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ACOS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADDDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADDTIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AES_DECRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AES_ENCRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AREA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASBINARY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASWKT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_DECRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_DERIVE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_ENCRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_SIGN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_VERIFY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ATAN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ATAN2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BENCHMARK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_COUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BUFFER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CEIL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CEILING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CENTROID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARACTER_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARSET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHAR_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COERCIBILITY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLLATION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCAT_WS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONNECTION_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONV);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT_TZ);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CRC32);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_DH_PARAMETERS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_DIGEST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CROSSES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATEDIFF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYNAME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFMONTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFWEEK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFYEAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DECODE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEGREES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DES_DECRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DES_ENCRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DIMENSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISJOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ELT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCODE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCRYPT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENDPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENVELOPE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EQUALS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXPORT_SET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTERIORRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTRACTVALUE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIELD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIND_IN_SET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FLOOR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOUND_ROWS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_BASE64);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_DAYS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_UNIXTIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMCOLLFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMCOLLFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYTYPE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GET_FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GET_LOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GREATEST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GTID_SUBSET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GTID_SUBTRACT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IFNULL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET6_ATON);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET6_NTOA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET_ATON);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET_NTOA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSTR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTERIORRINGN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTERSECTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISCLOSED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISEMPTY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISNULL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISSIMPLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_FREE_LOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4_COMPAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4_MAPPED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV6);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_USED_LOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LAST_INSERT_ID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LCASE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEAST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEFT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINEFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINEFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRINGFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRINGFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOAD_FILE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG10);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOWER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LPAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LTRIM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKEDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKETIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKE_SET);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_POS_WAIT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRCONTAINS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRDISJOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBREQUAL);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRINTERSECTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBROVERLAPS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRTOUCHES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRWITHIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MD5);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MICROSECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MLINEFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MLINEFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MONTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MONTHNAME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOINTFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOINTFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOLYFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOLYFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRINGFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRINGFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINTFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINTFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGON);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGONFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGONFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NAME_CONST);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULLIF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMGEOMETRIES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMINTERIORRINGS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMPOINTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OCT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OCTET_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ORD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OVERLAPS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERIOD_ADD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERIOD_DIFF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PI);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGON);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGONFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGONFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POSITION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POW);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POWER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUARTER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUOTE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RADIANS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RAND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RANDOM_BYTES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELEASE_LOCK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVERSE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RIGHT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROUND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW_COUNT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RPAD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RTRIM);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECOND);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SEC_TO_TIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SESSION_USER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA1);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA2);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIGN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SLEEP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOUNDEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQRT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SRID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STARTPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRCMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STR_TO_DATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_AREA);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASBINARY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASWKT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_BUFFER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CENTROID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CONTAINS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CROSSES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DIFFERENCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DIMENSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DISJOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DISTANCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ENDPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ENVELOPE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_EQUALS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_EXTERIORRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMTXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYTYPE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERIORRINGN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERSECTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERSECTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISCLOSED);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISEMPTY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISSIMPLE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINEFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINEFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINESTRINGFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINESTRINGFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMGEOMETRIES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMINTERIORRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMINTERIORRINGS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMPOINTS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_OVERLAPS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYGONFROMTEXT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYGONFROMWKB);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_SRID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_STARTPOINT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_SYMDIFFERENCE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_TOUCHES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_UNION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_WITHIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_X);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_Y);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBDATE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBSTRING_INDEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBTIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SYSTEM_USER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TAN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMEDIFF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMPADD);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMPDIFF);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME_FORMAT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME_TO_SEC);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TOUCHES);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_BASE64);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_DAYS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_SECONDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UCASE);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNCOMPRESS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNCOMPRESSED_LENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNHEX);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNIX_TIMESTAMP);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPDATEXML);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPPER);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UUID);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UUID_SHORT);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VALIDATE_PASSWORD_STRENGTH);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VERSION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEKDAY);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEKOFYEAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEIGHT_STRING);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITHIN);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEARWEEK);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.Y_FUNCTION);
                    }
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.X_FUNCTION);
                    }
                }
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(_this);
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
exports.MetaParser = MetaParser;
//# sourceMappingURL=rules.g.js.map