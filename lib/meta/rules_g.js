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
var MetaParser = (function (_super) {
    __extends(MetaParser, _super);
    function MetaParser(input) {
        var _this = _super.call(this, input, MetaLexer_1.tokens, {
            recoveryEnabled: true,
            outputCst: true
        }) || this;
        _this.RULE('root', function () {
            _this.OPTION(function () {
                _this.SUBRULE(_this.sqlStatements);
            });
            _this.OPTION(function () {
                _this.CONSUME(MetaLexer_1.Tokens.MINUSMINUS);
            });
            _this.CONSUME(MetaLexer_1.Tokens.EOF);
        });
        _this.RULE('sqlStatements', function () {
            _this.MANY(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.sqlStatement);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.MINUSMINUS);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.emptyStatement);
                        }
                    }
                ]);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.sqlStatement);
                        _this.OPTION(function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.MINUSMINUS);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                        });
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.emptyStatement);
                    }
                }
            ]);
        });
        _this.RULE('sqlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.ddlStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dmlStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.transactionStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.replicationStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.preparedStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.administrationStatement);
                    }
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.utilityStatement);
                    }
                }
            ]);
            _this.RULE('emptyStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SEMI);
            });
            _this.RULE('ddlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createDatabase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createEvent);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createIndex);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createLogfileGroup);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createProcedure);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createFunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createServer);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTablespaceInnodb);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTablespaceNdb);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createTrigger);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createView);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterDatabase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterEvent);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterFunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterInstance);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterLogfileGroup);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterProcedure);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterServer);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterTablespace);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterView);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropDatabase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropEvent);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropIndex);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropLogfileGroup);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropProcedure);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropFunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropServer);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropTablespace);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropTrigger);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropView);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.renameTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.truncateTable);
                        }
                    }
                ]);
            });
            _this.RULE('dmlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.insertStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.updateStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.deleteStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.replaceStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.callStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.loadDataStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.loadXmlStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.doStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.handlerStatement);
                        }
                    }
                ]);
            });
            _this.RULE('transactionStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.startTransaction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.beginWork);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.commitWork);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.rollbackWork);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.savepointStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.rollbackStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.releaseStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.lockTables);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.unlockTables);
                        }
                    }
                ]);
            });
            _this.RULE('replicationStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.changeMaster);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.changeReplicationFilter);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.purgeBinaryLogs);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.resetMaster);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.resetSlave);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.startSlave);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stopSlave);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.startGroupReplication);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stopGroupReplication);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaStartTransaction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaEndTransaction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaPrepareStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaCommitWork);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaRollbackWork);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.xaRecoverWork);
                        }
                    }
                ]);
            });
            _this.RULE('preparedStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.prepareStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.executeStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.deallocatePrepare);
                        }
                    }
                ]);
            });
            _this.RULE('compoundStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.blockStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.caseStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.ifStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.leaveStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.loopStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.repeatStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.whileStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.iterateStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.returnStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.cursorStatement);
                        }
                    }
                ]);
            });
            _this.RULE('administrationStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.alterUser);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createUser);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dropUser);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.grantStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.grantProxy);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.renameUser);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.revokeStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.revokeProxy);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.analyzeTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.checkTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.checksumTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.optimizeTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.repairTable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.createUdfunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.installPlugin);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uninstallPlugin);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.setStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.showStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.binlogStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.cacheIndexStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.flushStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.killStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.loadIndexIntoCache);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.resetStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.shutdownStatement);
                        }
                    }
                ]);
            });
            _this.RULE('utilityStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.simpleDescribeStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullDescribeStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.helpStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.useStatement);
                        }
                    }
                ]);
            });
            _this.RULE('createDatabase', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.SUBRULE(_this.dbFormat);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.SUBRULE(_this.createDatabaseOption);
                });
            });
            _this.RULE('createEvent', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.EVENT);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifNotExists);
                });
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.CONSUME(MetaLexer_1.Tokens.SCHEDULE);
                _this.SUBRULE(_this.scheduleExpression);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ON);
                    _this.CONSUME(MetaLexer_1.Tokens.COMPLETION);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.NOT);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.PRESERVE);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.enableType);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                    _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                });
                _this.CONSUME(MetaLexer_1.Tokens.DO);
                _this.SUBRULE(_this.routineBody);
            });
            _this.RULE('createIndex', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.intimeAction);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.indexCategory);
                });
                _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.indexType);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.indexColumnNames);
                _this.MANY(function () {
                    _this.SUBRULE(_this.indexOption);
                });
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                                _this.SUBRULE(_this.algType);
                            }
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                                _this.SUBRULE(_this.lockType);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('createLogfileGroup', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.CONSUME(MetaLexer_1.Tokens.LOGFILE);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ADD);
                _this.CONSUME(MetaLexer_1.Tokens.UNDOFILE);
                _this.SUBRULE(_this.undoFile);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INITIAL_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.initSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.UNDO_BUFFER_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.undoSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.REDO_BUFFER_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.redoSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.NODEGROUP);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.uid);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WAIT);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.comment);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.SUBRULE(_this.engineName);
            });
            _this.RULE('createProcedure', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.PROCEDURE);
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.procedureParameter);
                });
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.procedureParameter);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.MANY(function () {
                    _this.SUBRULE(_this.routineOption);
                });
                _this.SUBRULE(_this.routineBody);
            });
            _this.RULE('createFunction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                _this.SUBRULE(_this.fullId);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.functionParameter);
                });
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.functionParameter);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.CONSUME(MetaLexer_1.Tokens.RETURNS);
                _this.SUBRULE(_this.dataType);
                _this.MANY(function () {
                    _this.SUBRULE(_this.routineOption);
                });
                _this.SUBRULE(_this.routineBody);
            });
            _this.RULE('createServer', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.CONSUME(MetaLexer_1.Tokens.SERVER);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.FOREIGN);
                _this.CONSUME(MetaLexer_1.Tokens.DATA);
                _this.CONSUME(MetaLexer_1.Tokens.WRAPPER);
                _this.SUBRULE(_this.wrapperName);
                _this.CONSUME(MetaLexer_1.Tokens.OPTIONS);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.serverOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.serverOption);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('createTable', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifNotExists);
                            });
                            _this.SUBRULE(_this.tableName);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.LIKE);
                                        _this.SUBRULE(_this.tableName);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.CONSUME(MetaLexer_1.Tokens.LIKE);
                                        _this.SUBRULE(_this.parenthesisTable);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifNotExists);
                            });
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.createDefinitions);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.tableOption);
                                _this.MANY(function () {
                                    _this.OPTION(function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    });
                                    _this.SUBRULE(_this.tableOption);
                                });
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.partitionDefinitions);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.keyViolate);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.AS);
                            });
                            _this.SUBRULE(_this.selectStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifNotExists);
                            });
                            _this.SUBRULE(_this.tableName);
                            _this.SUBRULE(_this.createDefinitions);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.tableOption);
                                _this.MANY(function () {
                                    _this.OPTION(function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    });
                                    _this.SUBRULE(_this.tableOption);
                                });
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.partitionDefinitions);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('createTablespaceInnodb', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ADD);
                _this.CONSUME(MetaLexer_1.Tokens.DATAFILE);
                _this.SUBRULE(_this.datafile);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.FILE_BLOCK_SIZE);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.fileBlockSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.engineName);
                });
            });
            _this.RULE('createTablespaceNdb', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ADD);
                _this.CONSUME(MetaLexer_1.Tokens.DATAFILE);
                _this.SUBRULE(_this.datafile);
                _this.CONSUME(MetaLexer_1.Tokens.USE);
                _this.CONSUME(MetaLexer_1.Tokens.LOGFILE);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.EXTENT_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.extentSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INITIAL_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.initialSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.AUTOEXTEND_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.autoextendSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.MAX_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.maxSize);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.NODEGROUP);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.uid);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WAIT);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.comment);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.SUBRULE(_this.engineName);
            });
            _this.RULE('createTrigger', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TRIGGER);
                _this.SUBRULE(_this.thisTrigger);
                _this.SUBRULE(_this.triggerTime);
                _this.SUBRULE(_this.triggerEvent);
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                _this.CONSUME(MetaLexer_1.Tokens.EACH);
                _this.CONSUME(MetaLexer_1.Tokens.ROW);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.triggerPlace);
                    _this.SUBRULE(_this.otherTrigger);
                });
                _this.SUBRULE(_this.routineBody);
            });
            _this.RULE('createView', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OR);
                    _this.CONSUME(MetaLexer_1.Tokens.REPLACE);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.algType);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SQL);
                    _this.CONSUME(MetaLexer_1.Tokens.SECURITY);
                    _this.SUBRULE(_this.secContext);
                });
                _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                _this.SUBRULE(_this.fullId);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.AS);
                _this.SUBRULE(_this.selectStatement);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WITH);
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.checkOption);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.CHECK);
                    _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                });
            });
            _this.RULE('createDatabaseOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.charsetName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.collationName);
                        }
                    }
                ]);
            });
            _this.RULE('ownerStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DEFINER);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.userName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_USER);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('scheduleExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AT);
                            _this.SUBRULE(_this.timestampValue);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.intervalExpr);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVERY);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.decimalLiteral);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.expression);
                                    }
                                }
                            ]);
                            _this.SUBRULE(_this.intervalType);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.STARTS);
                                _this.SUBRULE(_this.start);
                                _this.MANY(function () {
                                    _this.SUBRULE(_this.startIntervals);
                                });
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ENDS);
                                _this.SUBRULE(_this.end);
                                _this.MANY(function () {
                                    _this.SUBRULE(_this.endIntervals);
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
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stringLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
            });
            _this.RULE('intervalExpr', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.CONSUME(MetaLexer_1.Tokens.INTERVAL);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
                _this.SUBRULE(_this.intervalType);
            });
            _this.RULE('intervalType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.intervalTypeBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.YEAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.YEAR_MONTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY_HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY_MINUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY_SECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOUR_MINUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOUR_SECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MINUTE_SECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SECOND_MICROSECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MINUTE_MICROSECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOUR_MICROSECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY_MICROSECOND);
                        }
                    }
                ]);
            });
            _this.RULE('enableType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.ON);
                            _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                        }
                    }
                ]);
            });
            _this.RULE('indexType', function () {
                _this.CONSUME(MetaLexer_1.Tokens.USING);
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BTREE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HASH);
                        }
                    }
                ]);
            });
            _this.RULE('indexOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KEY_BLOCK_SIZE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.fileSizeLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.indexType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                            _this.CONSUME(MetaLexer_1.Tokens.PARSER);
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('procedureParameter', function () {
                _this.SUBRULE(_this.direction);
                _this.SUBRULE(_this.uid);
                _this.SUBRULE(_this.dataType);
            });
            _this.RULE('functionParameter', function () {
                _this.SUBRULE(_this.uid);
                _this.SUBRULE(_this.dataType);
            });
            _this.RULE('routineOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LANGUAGE);
                            _this.CONSUME(MetaLexer_1.Tokens.SQL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.DETERMINISTIC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CONTAINS);
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.NO);
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.READS);
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL);
                                        _this.CONSUME(MetaLexer_1.Tokens.DATA);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.MODIFIES);
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL);
                                        _this.CONSUME(MetaLexer_1.Tokens.DATA);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL);
                            _this.CONSUME(MetaLexer_1.Tokens.SECURITY);
                            _this.SUBRULE(_this.context);
                        }
                    }
                ]);
            });
            _this.RULE('serverOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOST);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATABASE);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOCKET);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OWNER);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PORT);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    }
                ]);
            });
            _this.RULE('createDefinitions', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.createDefinition);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.createDefinition);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('createDefinition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                            _this.SUBRULE(_this.columnDefinition);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableConstraint);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.indexColumnDefinition);
                        }
                    }
                ]);
            });
            _this.RULE('columnDefinition', function () {
                _this.SUBRULE(_this.dataType);
                _this.MANY(function () {
                    _this.SUBRULE(_this.columnConstraint);
                });
            });
            _this.RULE('columnConstraint', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.nullNotnull);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            _this.SUBRULE(_this.defaultValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTO_INCREMENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.PRIMARY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNIQUE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COLUMN_FORMAT);
                            _this.SUBRULE(_this.colformat);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STORAGE);
                            _this.SUBRULE(_this.storageval);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.referenceDefinition);
                        }
                    }
                ]);
            });
            _this.RULE('tableConstraint', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.PRIMARY);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.UNIQUE);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexFormat);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.index);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.FOREIGN);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.index);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.SUBRULE(_this.referenceDefinition);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHECK);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('referenceDefinition', function () {
                _this.CONSUME(MetaLexer_1.Tokens.REFERENCES);
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.indexColumnNames);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.MATCH);
                    _this.SUBRULE(_this.matchType);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.referenceAction);
                });
            });
            _this.RULE('referenceAction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ON);
                            _this.CONSUME(MetaLexer_1.Tokens.DELETE);
                            _this.SUBRULE(_this.onDelete);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ON);
                                _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                                _this.SUBRULE(_this.onUpdate);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ON);
                            _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                            _this.SUBRULE(_this.onUpdate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ON);
                                _this.CONSUME(MetaLexer_1.Tokens.DELETE);
                                _this.SUBRULE(_this.onDelete);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('referenceControlType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RESTRICT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CASCADE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.CONSUME(MetaLexer_1.Tokens.NULL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NO);
                            _this.CONSUME(MetaLexer_1.Tokens.ACTION);
                        }
                    }
                ]);
            });
            _this.RULE('indexColumnDefinition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.indexFormat);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.FULLTEXT);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SPATIAL);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexFormat);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('tableOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.engineName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTO_INCREMENT);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AVG_ROW_LENGTH);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                        _this.CONSUME(MetaLexer_1.Tokens.SET);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CHARSET);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.charsetName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHECKSUM);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.boolValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.collationName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPRESSION);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONNECTION);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATA);
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DELAY_KEY_WRITE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.boolValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENCRYPTION);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSERT_METHOD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.insertMethod);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KEY_BLOCK_SIZE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.fileSizeLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_ROWS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MIN_ROWS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PACK_KEYS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.extBoolValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROW_FORMAT);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.rowFormat);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_AUTO_RECALC);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.extBoolValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_PERSISTENT);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.extBoolValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_SAMPLE_PAGES);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                            _this.SUBRULE(_this.uid);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.tablespaceStorage);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNION);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tables);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('tablespaceStorage', function () {
                _this.CONSUME(MetaLexer_1.Tokens.STORAGE);
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MEMORY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                        }
                    }
                ]);
            });
            _this.RULE('partitionDefinitions', function () {
                _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                _this.CONSUME(MetaLexer_1.Tokens.BY);
                _this.SUBRULE(_this.partitionFunctionDefinition);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITIONS);
                    _this.SUBRULE(_this.count);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SUBPARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.BY);
                    _this.SUBRULE(_this.subpartitionFunctionDefinition);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.SUBPARTITIONS);
                        _this.SUBRULE(_this.subCount);
                    });
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.partitionDefinition);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.partitionDefinition);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
            });
            _this.RULE('partitionFunctionDefinition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LINEAR);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.HASH);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LINEAR);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.algType);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uidList);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RANGE);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.expression);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.COLUMNS);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.uidList);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LIST);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.expression);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.COLUMNS);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.uidList);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
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
                                _this.CONSUME(MetaLexer_1.Tokens.LINEAR);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.HASH);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LINEAR);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.algType);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uidList);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('partitionDefinition', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.VALUES);
                            _this.CONSUME(MetaLexer_1.Tokens.LESS);
                            _this.CONSUME(MetaLexer_1.Tokens.THAN);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.partitionDefinerAtom);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.partitionDefinerAtom);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.partitionOption);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.subpartitionDefinition);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.subpartitionDefinition);
                                });
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.VALUES);
                            _this.CONSUME(MetaLexer_1.Tokens.IN);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.partitionDefinerAtom);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.partitionDefinerAtom);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.partitionOption);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.subpartitionDefinition);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.subpartitionDefinition);
                                });
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.VALUES);
                            _this.CONSUME(MetaLexer_1.Tokens.IN);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.partitionDefinerVector);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.partitionDefinerVector);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.partitionOption);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.subpartitionDefinition);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.subpartitionDefinition);
                                });
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uid);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.partitionOption);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.subpartitionDefinition);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.subpartitionDefinition);
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
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAXVALUE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
            });
            _this.RULE('partitionDefinerVector', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.partitionDefinerAtom);
                _this.AT_LEAST_ONE(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.partitionDefinerAtom);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('subpartitionDefinition', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SUBPARTITION);
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.SUBRULE(_this.partitionOption);
                });
            });
            _this.RULE('partitionOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.STORAGE);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.engineName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.comment);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATA);
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.dataDirectory);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.indexDirectory);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_ROWS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.maxRows);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MIN_ROWS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.minRows);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.tablespace);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NODEGROUP);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.nodegroup);
                        }
                    }
                ]);
            });
            _this.RULE('alterDatabase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.SUBRULE(_this.dbFormat);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                            });
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.createDatabaseOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.SUBRULE(_this.dbFormat);
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.UPGRADE);
                            _this.CONSUME(MetaLexer_1.Tokens.DATA);
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                            _this.CONSUME(MetaLexer_1.Tokens.NAME);
                        }
                    }
                ]);
            });
            _this.RULE('alterEvent', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.EVENT);
                _this.SUBRULE(_this.fullId);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ON);
                    _this.CONSUME(MetaLexer_1.Tokens.SCHEDULE);
                    _this.SUBRULE(_this.scheduleExpression);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ON);
                    _this.CONSUME(MetaLexer_1.Tokens.COMPLETION);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.NOT);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.PRESERVE);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.RENAME);
                    _this.CONSUME(MetaLexer_1.Tokens.TO);
                    _this.SUBRULE(_this.fullId);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.enableType);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                    _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.DO);
                    _this.SUBRULE(_this.routineBody);
                });
            });
            _this.RULE('alterFunction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                _this.SUBRULE(_this.fullId);
                _this.MANY(function () {
                    _this.SUBRULE(_this.routineOption);
                });
            });
            _this.RULE('alterInstance', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.INSTANCE);
                _this.CONSUME(MetaLexer_1.Tokens.ROTATE);
                _this.CONSUME(MetaLexer_1.Tokens.INNODB);
                _this.CONSUME(MetaLexer_1.Tokens.MASTER);
                _this.CONSUME(MetaLexer_1.Tokens.KEY);
            });
            _this.RULE('alterLogfileGroup', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.LOGFILE);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ADD);
                _this.CONSUME(MetaLexer_1.Tokens.UNDOFILE);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INITIAL_SIZE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.fileSizeLiteral);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WAIT);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.SUBRULE(_this.engineName);
            });
            _this.RULE('alterProcedure', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.PROCEDURE);
                _this.SUBRULE(_this.fullId);
                _this.MANY(function () {
                    _this.SUBRULE(_this.routineOption);
                });
            });
            _this.RULE('alterServer', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.SERVER);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.OPTIONS);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.serverOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.serverOption);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('alterTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.intimeAction);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tableName);
                _this.SUBRULE(_this.alterSpecification);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.alterSpecification);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.partitionDefinitions);
                });
            });
            _this.RULE('alterTablespace', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                _this.SUBRULE(_this.uid);
                _this.SUBRULE(_this.objectAction);
                _this.CONSUME(MetaLexer_1.Tokens.DATAFILE);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INITIAL_SIZE);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.fileSizeLiteral);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WAIT);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.SUBRULE(_this.engineName);
            });
            _this.RULE('alterView', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.algType);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ownerStatement);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SQL);
                    _this.CONSUME(MetaLexer_1.Tokens.SECURITY);
                    _this.SUBRULE(_this.secContext);
                });
                _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                _this.SUBRULE(_this.fullId);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.AS);
                _this.SUBRULE(_this.selectStatement);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WITH);
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.checkOpt);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.CHECK);
                    _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                });
            });
            _this.RULE('alterSpecification', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableOption);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE(_this.uid);
                            _this.SUBRULE(_this.columnDefinition);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.FIRST);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.AFTER);
                                            _this.SUBRULE(_this.uid);
                                        }
                                    }
                                ]);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uid);
                            _this.SUBRULE(_this.columnDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.uid);
                                _this.SUBRULE(_this.columnDefinition);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.SUBRULE(_this.indexFormat);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.PRIMARY);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.UNIQUE);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexFormat);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexName);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexType);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.SUBRULE(_this.keyType);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexFormat);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.indexOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CONSTRAINT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.name);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.FOREIGN);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexName);
                            });
                            _this.SUBRULE(_this.indexColumnNames);
                            _this.SUBRULE(_this.referenceDefinition);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.algType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE(_this.uid);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SET);
                                        _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                                        _this.SUBRULE(_this.defaultValue);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DROP);
                                        _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHANGE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE(_this.oldColumn);
                            _this.SUBRULE(_this.newColumn);
                            _this.SUBRULE(_this.columnDefinition);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.FIRST);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.AFTER);
                                            _this.SUBRULE(_this.afterColumn);
                                        }
                                    }
                                ]);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.lockType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MODIFY);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE(_this.uid);
                            _this.SUBRULE(_this.columnDefinition);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.FIRST);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.AFTER);
                                            _this.SUBRULE(_this.uid);
                                        }
                                    }
                                ]);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLUMN);
                            });
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                            _this.CONSUME(MetaLexer_1.Tokens.PRIMARY);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                            _this.SUBRULE(_this.indexFormat);
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                            _this.CONSUME(MetaLexer_1.Tokens.FOREIGN);
                            _this.CONSUME(MetaLexer_1.Tokens.KEY);
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.KEYS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.KEYS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RENAME);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.renameFormat);
                            });
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ORDER);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.uidList);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONVERT);
                            _this.CONSUME(MetaLexer_1.Tokens.TO);
                            _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.SUBRULE(_this.charsetName);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                _this.SUBRULE(_this.collationName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.charsetName);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.collationName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISCARD);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IMPORT);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FORCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.validationFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.VALIDATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADD);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.partitionDefinition);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uidList);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISCARD);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IMPORT);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRUNCATE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COALESCE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REORGANIZE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uidList);
                            _this.CONSUME(MetaLexer_1.Tokens.INTO);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.partitionDefinition);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.partitionDefinition);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXCHANGE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.validationFormat);
                                _this.CONSUME(MetaLexer_1.Tokens.VALIDATION);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ANALYZE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHECK);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OPTIMIZE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REBUILD);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPAIR);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.uidList);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REMOVE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITIONING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UPGRADE);
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITIONING);
                        }
                    }
                ]);
            });
            _this.RULE('dropDatabase', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.SUBRULE(_this.dbFormat);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('dropEvent', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.EVENT);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('dropIndex', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.intimeAction);
                });
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.algType);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.lockType);
                });
            });
            _this.RULE('dropLogfileGroup', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.LOGFILE);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.engineName);
            });
            _this.RULE('dropProcedure', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.PROCEDURE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('dropFunction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('dropServer', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.SERVER);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('dropTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.tables);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.dropType);
                });
            });
            _this.RULE('dropTablespace', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                    });
                    _this.SUBRULE(_this.engineName);
                });
            });
            _this.RULE('dropTrigger', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.TRIGGER);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('dropView', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.fullId);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.fullId);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.dropType);
                });
            });
            _this.RULE('renameTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RENAME);
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.renameTableClause);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.renameTableClause);
                });
            });
            _this.RULE('renameTableClause', function () {
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('truncateTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.TRUNCATE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                });
                _this.SUBRULE(_this.tableName);
            });
            _this.RULE('callStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CALL);
                _this.SUBRULE(_this.fullId);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.OPTION(function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.constants);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.expressions);
                                }
                            }
                        ]);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
            });
            _this.RULE('deleteStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.singleDeleteStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.multipleDeleteStatement);
                        }
                    }
                ]);
            });
            _this.RULE('doStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DO);
                _this.SUBRULE(_this.expressions);
            });
            _this.RULE('handlerStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.handlerOpenStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.handlerReadIndexStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.handlerReadStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.handlerCloseStatement);
                        }
                    }
                ]);
            });
            _this.RULE('insertStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.INSERT);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INTO);
                });
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.partitions);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.columns);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.insertStatementValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.SUBRULE(_this.setFirst);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.setElements);
                            });
                        }
                    }
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ON);
                    _this.CONSUME(MetaLexer_1.Tokens.DUPLICATE);
                    _this.CONSUME(MetaLexer_1.Tokens.KEY);
                    _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                    _this.SUBRULE(_this.duplicatedFirst);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.duplicatedElements);
                    });
                });
            });
            _this.RULE('loadDataStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LOAD);
                _this.CONSUME(MetaLexer_1.Tokens.DATA);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LOCAL);
                });
                _this.CONSUME(MetaLexer_1.Tokens.INFILE);
                _this.SUBRULE(_this.filename);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.violation);
                });
                _this.CONSUME(MetaLexer_1.Tokens.INTO);
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                    _this.CONSUME(MetaLexer_1.Tokens.SET);
                    _this.SUBRULE(_this.charset);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.fieldsFormat);
                    _this.AT_LEAST_ONE(function () {
                        _this.SUBRULE(_this.selectFieldsInto);
                    });
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LINES);
                    _this.AT_LEAST_ONE(function () {
                        _this.SUBRULE(_this.selectLinesInto);
                    });
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                    _this.SUBRULE(_this.decimalLiteral);
                    _this.SUBRULE(_this.linesFormat);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.assignmentField);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.assignmentField);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SET);
                    _this.SUBRULE(_this.updatedElement);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.updatedElement);
                    });
                });
            });
            _this.RULE('loadXmlStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LOAD);
                _this.CONSUME(MetaLexer_1.Tokens.XML);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LOCAL);
                });
                _this.CONSUME(MetaLexer_1.Tokens.INFILE);
                _this.SUBRULE(_this.filename);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.violation);
                });
                _this.CONSUME(MetaLexer_1.Tokens.INTO);
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                    _this.CONSUME(MetaLexer_1.Tokens.SET);
                    _this.SUBRULE(_this.charset);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ROWS);
                    _this.CONSUME(MetaLexer_1.Tokens.IDENTIFIED);
                    _this.CONSUME(MetaLexer_1.Tokens.BY);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.tag);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                    _this.SUBRULE(_this.decimalLiteral);
                    _this.SUBRULE(_this.linesFormat);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.assignmentField);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.assignmentField);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SET);
                    _this.SUBRULE(_this.updatedElement);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.updatedElement);
                    });
                });
            });
            _this.RULE('replaceStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.REPLACE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.INTO);
                });
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.partitions);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.columns);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.insertStatementValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.SUBRULE(_this.setFirst);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.setElements);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('selectStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecification);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lockClause);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpression);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lockClause);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecificationNointo);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.unionStatement);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.UNION);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.unionType);
                                });
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.querySpecification);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.queryExpression);
                                        }
                                    }
                                ]);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lockClause);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpressionNointo);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.unionParenthesis);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.UNION);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.unionType);
                                });
                                _this.SUBRULE(_this.queryExpression);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lockClause);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('updateStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.singleUpdateStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.multipleUpdateStatement);
                        }
                    }
                ]);
            });
            _this.RULE('insertStatementValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.insertFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expressionsWithDefaults);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.expressionsWithDefaults);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('updatedElement', function () {
                _this.SUBRULE(_this.fullColumnName);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                        }
                    }
                ]);
            });
            _this.RULE('assignmentField', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                        }
                    }
                ]);
            });
            _this.RULE('lockClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOR);
                            _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                            _this.CONSUME(MetaLexer_1.Tokens.IN);
                            _this.CONSUME(MetaLexer_1.Tokens.SHARE);
                            _this.CONSUME(MetaLexer_1.Tokens.MODE);
                        }
                    }
                ]);
            });
            _this.RULE('singleDeleteStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DELETE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.QUICK);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                    _this.SUBRULE(_this.decimalLiteral);
                });
            });
            _this.RULE('multipleDeleteStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DELETE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.QUICK);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.tableName);
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.SUBRULE(_this.tableSources);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.tableName);
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.USING);
                            _this.SUBRULE(_this.tableSources);
                        }
                    }
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('handlerOpenStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.HANDLER);
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.OPEN);
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('handlerReadIndexStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.HANDLER);
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.READ);
                _this.SUBRULE(_this.index);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.comparisonOperator);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.constants);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.moveOrder);
                        }
                    }
                ]);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                    _this.SUBRULE(_this.decimalLiteral);
                });
            });
            _this.RULE('handlerReadStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.HANDLER);
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.READ);
                _this.SUBRULE(_this.moveOrder);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                    _this.SUBRULE(_this.decimalLiteral);
                });
            });
            _this.RULE('handlerCloseStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.HANDLER);
                _this.SUBRULE(_this.tableName);
                _this.CONSUME(MetaLexer_1.Tokens.CLOSE);
            });
            _this.RULE('singleUpdateStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.uid);
                });
                _this.CONSUME(MetaLexer_1.Tokens.SET);
                _this.SUBRULE(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.updatedElement);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.limitClause);
                });
            });
            _this.RULE('multipleUpdateStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.priority);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                });
                _this.SUBRULE(_this.tableSources);
                _this.CONSUME(MetaLexer_1.Tokens.SET);
                _this.SUBRULE(_this.updatedElement);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.updatedElement);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('orderByClause', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ORDER);
                _this.CONSUME(MetaLexer_1.Tokens.BY);
                _this.SUBRULE(_this.orderByExpression);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.orderByExpression);
                });
            });
            _this.RULE('orderByExpression', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.order);
                });
            });
            _this.RULE('tableSources', function () {
                _this.SUBRULE(_this.tableSource);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.tableSource);
                });
            });
            _this.RULE('tableSource', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.joinPart);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.joinPart);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('tableSourceItem', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.uidList);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.alias);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.indexHint);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.indexHint);
                                });
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.parenthesisSubquery);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.AS);
                            });
                            _this.SUBRULE(_this.alias);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tableSources);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('indexHint', function () {
                _this.SUBRULE(_this.indexHintAction);
                _this.SUBRULE(_this.keyFormat);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.FOR);
                    _this.SUBRULE(_this.indexHintType);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.uidList);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('indexHintType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.JOIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ORDER);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
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
                                            _this.CONSUME(MetaLexer_1.Tokens.INNER);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.CROSS);
                                        }
                                    }
                                ]);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.JOIN);
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.ON);
                                            _this.SUBRULE(_this.expression);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.USING);
                                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                                            _this.SUBRULE(_this.uidList);
                                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        }
                                    }
                                ]);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRAIGHT_JOIN);
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ON);
                                _this.SUBRULE(_this.expression);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.LEFT);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.RIGHT);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OUTER);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.JOIN);
                            _this.SUBRULE(_this.tableSourceItem);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.ON);
                                        _this.SUBRULE(_this.expression);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.USING);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                        _this.SUBRULE(_this.uidList);
                                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NATURAL);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.LEFT);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.RIGHT);
                                        }
                                    }
                                ]);
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OUTER);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.JOIN);
                            _this.SUBRULE(_this.tableSourceItem);
                        }
                    }
                ]);
            });
            _this.RULE('queryExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.querySpecification);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.queryExpression);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('queryExpressionNointo', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.querySpecificationNointo);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.queryExpressionNointo);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('querySpecification', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SELECT);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.selectSpec);
                            });
                            _this.SUBRULE(_this.selectElements);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.selectIntoExpression);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.fromClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SELECT);
                            _this.MANY(function () {
                                _this.SUBRULE(_this.selectSpec);
                            });
                            _this.SUBRULE(_this.selectElements);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.fromClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.orderByClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.limitClause);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.selectIntoExpression);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('querySpecificationNointo', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SELECT);
                _this.MANY(function () {
                    _this.SUBRULE(_this.selectSpec);
                });
                _this.SUBRULE(_this.selectElements);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.fromClause);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.orderByClause);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.limitClause);
                });
            });
            _this.RULE('unionParenthesis', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.unionType);
                });
                _this.SUBRULE(_this.queryExpressionNointo);
            });
            _this.RULE('unionStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UNION);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.unionType);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.querySpecificationNointo);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.queryExpressionNointo);
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
                                        _this.CONSUME(MetaLexer_1.Tokens.ALL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DISTINCT);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DISTINCTROW);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HIGH_PRIORITY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRAIGHT_JOIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_SMALL_RESULT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_BIG_RESULT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_BUFFER_RESULT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL_CACHE);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SQL_NO_CACHE);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_CALC_FOUND_ROWS);
                        }
                    }
                ]);
            });
            _this.RULE('selectElements', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.star);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.selectElement);
                        }
                    }
                ]);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.selectElement);
                });
            });
            _this.RULE('selectElement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                                _this.CONSUME(MetaLexer_1.Tokens.VAR_ASSIGN);
                            });
                            _this.SUBRULE(_this.expression);
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.AS);
                                });
                                _this.SUBRULE(_this.uid);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('selectIntoExpression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTO);
                            _this.SUBRULE(_this.assignmentField);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.assignmentField);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTO);
                            _this.CONSUME(MetaLexer_1.Tokens.DUMPFILE);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTO);
                            _this.CONSUME(MetaLexer_1.Tokens.OUTFILE);
                            _this.SUBRULE(_this.filename);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                _this.CONSUME(MetaLexer_1.Tokens.SET);
                                _this.SUBRULE(_this.charset);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.fieldsFormat);
                                _this.AT_LEAST_ONE(function () {
                                    _this.SUBRULE(_this.selectFieldsInto);
                                });
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LINES);
                                _this.AT_LEAST_ONE(function () {
                                    _this.SUBRULE(_this.selectLinesInto);
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
                            _this.CONSUME(MetaLexer_1.Tokens.TERMINATED);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.terminationField);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OPTIONALLY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.ENCLOSED);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.enclosion);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ESCAPED);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.escaping);
                        }
                    }
                ]);
            });
            _this.RULE('selectLinesInto', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STARTING);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.starting);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TERMINATED);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.SUBRULE(_this.terminationLine);
                        }
                    }
                ]);
            });
            _this.RULE('fromClause', function () {
                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                _this.SUBRULE(_this.tableSources);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                    _this.SUBRULE(_this.whereExpr);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.GROUP);
                    _this.CONSUME(MetaLexer_1.Tokens.BY);
                    _this.SUBRULE(_this.groupByItem);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.groupByItem);
                    });
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.WITH);
                        _this.CONSUME(MetaLexer_1.Tokens.ROLLUP);
                    });
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.HAVING);
                    _this.SUBRULE(_this.havingExpr);
                });
            });
            _this.RULE('groupByItem', function () {
                _this.SUBRULE(_this.expression);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.order);
                });
            });
            _this.RULE('limitClause', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.offset);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.limit);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.limit);
                            _this.CONSUME(MetaLexer_1.Tokens.OFFSET);
                            _this.SUBRULE(_this.offset);
                        }
                    }
                ]);
            });
            _this.RULE('startTransaction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.START);
                _this.CONSUME(MetaLexer_1.Tokens.TRANSACTION);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.transactionMode);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.transactionMode);
                    });
                });
            });
            _this.RULE('beginWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.BEGIN);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WORK);
                });
            });
            _this.RULE('commitWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.COMMIT);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WORK);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.AND);
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.nochain);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.CHAIN);
                });
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.norelease);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.RELEASE);
                });
            });
            _this.RULE('rollbackWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ROLLBACK);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WORK);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.AND);
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.nochain);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.CHAIN);
                });
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.norelease);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.RELEASE);
                });
            });
            _this.RULE('savepointStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SAVEPOINT);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('rollbackStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ROLLBACK);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WORK);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SAVEPOINT);
                });
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('releaseStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RELEASE);
                _this.CONSUME(MetaLexer_1.Tokens.SAVEPOINT);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('lockTables', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                _this.SUBRULE(_this.lockTableElement);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.lockTableElement);
                });
            });
            _this.RULE('unlockTables', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UNLOCK);
                _this.CONSUME(MetaLexer_1.Tokens.TABLES);
            });
            _this.RULE('setAutocommitStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SET);
                _this.CONSUME(MetaLexer_1.Tokens.AUTOCOMMIT);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.autocommitValue);
            });
            _this.RULE('setTransactionStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SET);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.transactionContext);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TRANSACTION);
                _this.SUBRULE(_this.transactionOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.transactionOption);
                });
            });
            _this.RULE('transactionMode', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                            _this.CONSUME(MetaLexer_1.Tokens.CONSISTENT);
                            _this.CONSUME(MetaLexer_1.Tokens.SNAPSHOT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.WRITE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.ONLY);
                        }
                    }
                ]);
            });
            _this.RULE('lockTableElement', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.AS);
                    });
                    _this.SUBRULE(_this.uid);
                });
                _this.SUBRULE(_this.lockAction);
            });
            _this.RULE('lockAction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LOCAL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LOW_PRIORITY);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.WRITE);
                        }
                    }
                ]);
            });
            _this.RULE('transactionOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISOLATION);
                            _this.CONSUME(MetaLexer_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.transactionLevel);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.WRITE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.ONLY);
                        }
                    }
                ]);
            });
            _this.RULE('transactionLevel', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPEATABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.COMMITTED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.UNCOMMITTED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SERIALIZABLE);
                        }
                    }
                ]);
            });
            _this.RULE('changeMaster', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CHANGE);
                _this.CONSUME(MetaLexer_1.Tokens.MASTER);
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.SUBRULE(_this.masterOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.masterOption);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.channelOption);
                });
            });
            _this.RULE('changeReplicationFilter', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CHANGE);
                _this.CONSUME(MetaLexer_1.Tokens.REPLICATION);
                _this.CONSUME(MetaLexer_1.Tokens.FILTER);
                _this.SUBRULE(_this.replicationFilter);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.replicationFilter);
                });
            });
            _this.RULE('purgeBinaryLogs', function () {
                _this.CONSUME(MetaLexer_1.Tokens.PURGE);
                _this.SUBRULE(_this.purgeFormat);
                _this.CONSUME(MetaLexer_1.Tokens.LOGS);
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TO);
                            _this.SUBRULE(_this.fileName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BEFORE);
                            _this.SUBRULE(_this.timeValue);
                        }
                    }
                ]);
            });
            _this.RULE('resetMaster', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RESET);
                _this.CONSUME(MetaLexer_1.Tokens.MASTER);
            });
            _this.RULE('resetSlave', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RESET);
                _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ALL);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.channelOption);
                });
            });
            _this.RULE('startSlave', function () {
                _this.CONSUME(MetaLexer_1.Tokens.START);
                _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.threadType);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.threadType);
                    });
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.UNTIL);
                    _this.SUBRULE(_this.untilOption);
                });
                _this.MANY(function () {
                    _this.SUBRULE(_this.connectionOption);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.channelOption);
                });
            });
            _this.RULE('stopSlave', function () {
                _this.CONSUME(MetaLexer_1.Tokens.STOP);
                _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.threadType);
                    _this.MANY(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.threadType);
                    });
                });
            });
            _this.RULE('startGroupReplication', function () {
                _this.CONSUME(MetaLexer_1.Tokens.START);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP_REPLICATION);
            });
            _this.RULE('stopGroupReplication', function () {
                _this.CONSUME(MetaLexer_1.Tokens.STOP);
                _this.CONSUME(MetaLexer_1.Tokens.GROUP_REPLICATION);
            });
            _this.RULE('masterOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stringMasterOption);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalMasterOption);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.boolMasterOption);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.boolVal);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_HEARTBEAT_PERIOD);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.REAL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IGNORE_SERVER_IDS);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.uid);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.uid);
                                });
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('stringMasterOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_BIND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_HOST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_USER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_PASSWORD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CAPATH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CERT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CRL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CRLPATH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CIPHER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_TLS_VERSION);
                        }
                    }
                ]);
            });
            _this.RULE('decimalMasterOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_PORT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_CONNECT_RETRY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_RETRY_COUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_DELAY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_POS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_POS);
                        }
                    }
                ]);
            });
            _this.RULE('boolMasterOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_AUTO_POSITION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
                        }
                    }
                ]);
            });
            _this.RULE('channelOption', function () {
                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                _this.CONSUME(MetaLexer_1.Tokens.CHANNEL);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
            });
            _this.RULE('replicationFilter', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_DO_DB);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uidList);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_IGNORE_DB);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uidList);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_DO_TABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tables);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_IGNORE_TABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tables);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_WILD_DO_TABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.simpleStrings);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_WILD_IGNORE_TABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.simpleStrings);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_REWRITE_DB);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.tablePair);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.tablePair);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('tablePair', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.firstTable);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.secondTable);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('threadType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IO_THREAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_THREAD);
                        }
                    }
                ]);
            });
            _this.RULE('untilOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.gtids);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.gtuidSet);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_FILE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_POS);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_FILE);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_POS);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_AFTER_MTS_GAPS);
                        }
                    }
                ]);
            });
            _this.RULE('connectionOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.conOptUser);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.conOptPassword);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT_AUTH);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.conOptDefAuth);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PLUGIN_DIR);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.conOptPluginDir);
                        }
                    }
                ]);
            });
            _this.RULE('gtuidSet', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uuidSet);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.uuidSet);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('xaStartTransaction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.SUBRULE(_this.xaStart);
                _this.SUBRULE(_this.xid);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.xaAction);
                });
            });
            _this.RULE('xaEndTransaction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.SUBRULE(_this.xid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.SUSPEND);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.FOR);
                        _this.CONSUME(MetaLexer_1.Tokens.MIGRATE);
                    });
                });
            });
            _this.RULE('xaPrepareStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.CONSUME(MetaLexer_1.Tokens.PREPARE);
                _this.SUBRULE(_this.xid);
            });
            _this.RULE('xaCommitWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.CONSUME(MetaLexer_1.Tokens.COMMIT);
                _this.SUBRULE(_this.xid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ONE);
                    _this.CONSUME(MetaLexer_1.Tokens.PHASE);
                });
            });
            _this.RULE('xaRollbackWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.CONSUME(MetaLexer_1.Tokens.ROLLBACK);
                _this.SUBRULE(_this.xid);
            });
            _this.RULE('xaRecoverWork', function () {
                _this.CONSUME(MetaLexer_1.Tokens.XA);
                _this.CONSUME(MetaLexer_1.Tokens.RECOVER);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.CONVERT);
                    _this.SUBRULE(_this.xid);
                });
            });
            _this.RULE('prepareStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.PREPARE);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.query);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.variable);
                        }
                    }
                ]);
            });
            _this.RULE('executeStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.EXECUTE);
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.USING);
                    _this.SUBRULE(_this.userVariables);
                });
            });
            _this.RULE('deallocatePrepare', function () {
                _this.SUBRULE(_this.dropFormat);
                _this.CONSUME(MetaLexer_1.Tokens.PREPARE);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('routineBody', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.blockStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.sqlStatement);
                        }
                    }
                ]);
            });
            _this.RULE('blockStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.BEGIN);
                _this.OPTION(function () {
                    _this.MANY(function () {
                        _this.SUBRULE(_this.declareVariable);
                        _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                    });
                    _this.MANY(function () {
                        _this.SUBRULE(_this.declareCondition);
                        _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                    });
                    _this.MANY(function () {
                        _this.SUBRULE(_this.declareCursor);
                        _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                    });
                    _this.MANY(function () {
                        _this.SUBRULE(_this.declareHandler);
                        _this.CONSUME(MetaLexer_1.Tokens.SEMI);
                    });
                    _this.AT_LEAST_ONE(function () {
                        _this.SUBRULE(_this.procedureSqlStatement);
                    });
                });
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('caseStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CASE);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.uid);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expression);
                            }
                        }
                    ]);
                });
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.caseAlternative);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ELSE);
                    _this.AT_LEAST_ONE(function () {
                        _this.SUBRULE(_this.procedureSqlStatement);
                    });
                });
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.CONSUME(MetaLexer_1.Tokens.CASE);
            });
            _this.RULE('ifStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.IF);
                _this.SUBRULE(_this.expression);
                _this.CONSUME(MetaLexer_1.Tokens.THEN);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.thenStatements);
                });
                _this.MANY(function () {
                    _this.SUBRULE(_this.elifAlternative);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.ELSE);
                    _this.AT_LEAST_ONE(function () {
                        _this.SUBRULE(_this.elseStatements);
                    });
                });
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.CONSUME(MetaLexer_1.Tokens.IF);
            });
            _this.RULE('iterateStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ITERATE);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('leaveStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LEAVE);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('loopStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.LOOP);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.CONSUME(MetaLexer_1.Tokens.LOOP);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('repeatStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.REPEAT);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.UNTIL);
                _this.SUBRULE(_this.expression);
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.CONSUME(MetaLexer_1.Tokens.REPEAT);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('returnStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RETURN);
                _this.SUBRULE(_this.expression);
            });
            _this.RULE('whileStatement', function () {
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.WHILE);
                _this.SUBRULE(_this.expression);
                _this.CONSUME(MetaLexer_1.Tokens.DO);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
                _this.CONSUME(MetaLexer_1.Tokens.END);
                _this.CONSUME(MetaLexer_1.Tokens.WHILE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('cursorStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CLOSE);
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FETCH);
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.NEXT);
                                });
                                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            });
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.INTO);
                            _this.SUBRULE(_this.uidList);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OPEN);
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
            });
            _this.RULE('declareVariable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DECLARE);
                _this.SUBRULE(_this.uidList);
                _this.SUBRULE(_this.dataType);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                    _this.SUBRULE(_this.defaultValue);
                });
            });
            _this.RULE('declareCondition', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DECLARE);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.CONDITION);
                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQLSTATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.VALUE);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('declareCursor', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DECLARE);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.CURSOR);
                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                _this.SUBRULE(_this.selectStatement);
            });
            _this.RULE('declareHandler', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DECLARE);
                _this.SUBRULE(_this.handlerAction);
                _this.CONSUME(MetaLexer_1.Tokens.HANDLER);
                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                _this.SUBRULE(_this.handlerConditionValue);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.handlerConditionValue);
                });
                _this.SUBRULE(_this.routineBody);
            });
            _this.RULE('handlerConditionValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQLSTATE);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.VALUE);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQLWARNING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            _this.CONSUME(MetaLexer_1.Tokens.FOUND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQLEXCEPTION);
                        }
                    }
                ]);
            });
            _this.RULE('procedureSqlStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.compoundStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.sqlStatement);
                        }
                    }
                ]);
                _this.CONSUME(MetaLexer_1.Tokens.SEMI);
            });
            _this.RULE('caseAlternative', function () {
                _this.CONSUME(MetaLexer_1.Tokens.WHEN);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
                _this.CONSUME(MetaLexer_1.Tokens.THEN);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
            });
            _this.RULE('elifAlternative', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ELSEIF);
                _this.SUBRULE(_this.expression);
                _this.CONSUME(MetaLexer_1.Tokens.THEN);
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
            });
            _this.RULE('alterUser', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.SUBRULE(_this.userSpecification);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userSpecification);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifExists);
                            });
                            _this.SUBRULE(_this.userAuthOption);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userAuthOption);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.REQUIRE);
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.tlsNone);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.tlsOption);
                                            _this.MANY(function () {
                                                _this.OPTION(function () {
                                                    _this.CONSUME(MetaLexer_1.Tokens.AND);
                                                });
                                                _this.SUBRULE(_this.tlsOption);
                                            });
                                        }
                                    }
                                ]);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.WITH);
                                _this.AT_LEAST_ONE(function () {
                                    _this.SUBRULE(_this.userResourceOption);
                                });
                            });
                            _this.MANY(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.userPasswordOption);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.userLockOption);
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
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.SUBRULE(_this.userAuthOption);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userAuthOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifNotExists);
                            });
                            _this.SUBRULE(_this.userAuthOption);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userAuthOption);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.REQUIRE);
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.tlsNone);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.tlsOption);
                                            _this.MANY(function () {
                                                _this.OPTION(function () {
                                                    _this.CONSUME(MetaLexer_1.Tokens.AND);
                                                });
                                                _this.SUBRULE(_this.tlsOption);
                                            });
                                        }
                                    }
                                ]);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.WITH);
                                _this.AT_LEAST_ONE(function () {
                                    _this.SUBRULE(_this.userResourceOption);
                                });
                            });
                            _this.MANY(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.userPasswordOption);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.userLockOption);
                                        }
                                    }
                                ]);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('dropUser', function () {
                _this.CONSUME(MetaLexer_1.Tokens.DROP);
                _this.CONSUME(MetaLexer_1.Tokens.USER);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.ifExists);
                });
                _this.SUBRULE(_this.userName);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.userName);
                });
            });
            _this.RULE('grantStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                _this.SUBRULE(_this.privelegeClause);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.privelegeClause);
                });
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.privilegeObject);
                });
                _this.SUBRULE(_this.privilegeLevel);
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.SUBRULE(_this.userAuthOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.userAuthOption);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.REQUIRE);
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.tlsNone);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.tlsOption);
                                _this.MANY(function () {
                                    _this.OPTION(function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.AND);
                                    });
                                    _this.SUBRULE(_this.tlsOption);
                                });
                            }
                        }
                    ]);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WITH);
                    _this.MANY(function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                                    _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                                }
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.userResourceOption);
                                }
                            }
                        ]);
                    });
                });
            });
            _this.RULE('grantProxy', function () {
                _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                _this.CONSUME(MetaLexer_1.Tokens.PROXY);
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.SUBRULE(_this.fromFirst);
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.SUBRULE(_this.toFirst);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.toOther);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.WITH);
                    _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                    _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                });
            });
            _this.RULE('renameUser', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RENAME);
                _this.CONSUME(MetaLexer_1.Tokens.USER);
                _this.SUBRULE(_this.renameUserClause);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.renameUserClause);
                });
            });
            _this.RULE('revokeStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REVOKE);
                            _this.SUBRULE(_this.privelegeClause);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.privelegeClause);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.ON);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.privilegeObject);
                            });
                            _this.SUBRULE(_this.privilegeLevel);
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.SUBRULE(_this.userName);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REVOKE);
                            _this.CONSUME(MetaLexer_1.Tokens.ALL);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.PRIVILEGES);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                            _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.SUBRULE(_this.userName);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.userName);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('revokeProxy', function () {
                _this.CONSUME(MetaLexer_1.Tokens.REVOKE);
                _this.CONSUME(MetaLexer_1.Tokens.PROXY);
                _this.CONSUME(MetaLexer_1.Tokens.ON);
                _this.SUBRULE(_this.onUser);
                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                _this.SUBRULE(_this.fromFirst);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.fromOther);
                });
            });
            _this.RULE('setPasswordStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SET);
                _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.FOR);
                    _this.SUBRULE(_this.userName);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.passwordFunctionClause);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('userSpecification', function () {
                _this.SUBRULE(_this.userName);
                _this.SUBRULE(_this.userPasswordOption);
            });
            _this.RULE('userAuthOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.userName);
                            _this.CONSUME(MetaLexer_1.Tokens.IDENTIFIED);
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                            _this.SUBRULE(_this.hashed);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.userName);
                            _this.CONSUME(MetaLexer_1.Tokens.IDENTIFIED);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.WITH);
                                _this.SUBRULE(_this.authPlugin);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.BY);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.userName);
                            _this.CONSUME(MetaLexer_1.Tokens.IDENTIFIED);
                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                            _this.SUBRULE(_this.authPlugin);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.AS);
                                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.userName);
                        }
                    }
                ]);
            });
            _this.RULE('tlsOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SSL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.X509);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CIPHER);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISSUER);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBJECT);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('userResourceOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_QUERIES_PER_HOUR);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_UPDATES_PER_HOUR);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_CONNECTIONS_PER_HOUR);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_USER_CONNECTIONS);
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    }
                ]);
            });
            _this.RULE('userPasswordOption', function () {
                _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                _this.CONSUME(MetaLexer_1.Tokens.EXPIRE);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expireType);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expireType);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expireType);
                                _this.SUBRULE(_this.decimalLiteral);
                                _this.CONSUME(MetaLexer_1.Tokens.DAY);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('userLockOption', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ACCOUNT);
                _this.SUBRULE(_this.lockType);
            });
            _this.RULE('privelegeClause', function () {
                _this.SUBRULE(_this.privilege);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
            });
            _this.RULE('privilege', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALL);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.PRIVILEGES);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALTER);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ROUTINE);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.ROUTINE);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                                        }
                                    }
                                ]);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DELETE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DROP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXECUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GRANT);
                            _this.CONSUME(MetaLexer_1.Tokens.OPTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSERT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROCESS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROXY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REFERENCES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELOAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATION);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CLIENT);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SELECT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DATABASES);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHUTDOWN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUPER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRIGGER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.USAGE);
                        }
                    }
                ]);
            });
            _this.RULE('privilegeLevel', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
            });
            _this.RULE('renameUserClause', function () {
                _this.SUBRULE(_this.fromFirst);
                _this.CONSUME(MetaLexer_1.Tokens.TO);
                _this.SUBRULE(_this.toFirst);
            });
            _this.RULE('analyzeTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.ANALYZE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.actionOption);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tables);
            });
            _this.RULE('checkTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CHECK);
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tables);
                _this.MANY(function () {
                    _this.SUBRULE(_this.checkTableOption);
                });
            });
            _this.RULE('checksumTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CHECKSUM);
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tables);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.actionOption);
                });
            });
            _this.RULE('optimizeTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OPTIMIZE);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.actionOption);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tables);
            });
            _this.RULE('repairTable', function () {
                _this.CONSUME(MetaLexer_1.Tokens.REPAIR);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.actionOption);
                });
                _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                _this.SUBRULE(_this.tables);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.QUICK);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.EXTENDED);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.USE_FRM);
                });
            });
            _this.RULE('checkTableOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOR);
                            _this.CONSUME(MetaLexer_1.Tokens.UPGRADE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUICK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FAST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MEDIUM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXTENDED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHANGED);
                        }
                    }
                ]);
            });
            _this.RULE('createUdfunction', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.AGGREGATE);
                });
                _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.RETURNS);
                _this.SUBRULE(_this.returnType);
                _this.CONSUME(MetaLexer_1.Tokens.SONAME);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
            });
            _this.RULE('installPlugin', function () {
                _this.CONSUME(MetaLexer_1.Tokens.INSTALL);
                _this.CONSUME(MetaLexer_1.Tokens.PLUGIN);
                _this.SUBRULE(_this.uid);
                _this.CONSUME(MetaLexer_1.Tokens.SONAME);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
            });
            _this.RULE('uninstallPlugin', function () {
                _this.CONSUME(MetaLexer_1.Tokens.UNINSTALL);
                _this.CONSUME(MetaLexer_1.Tokens.PLUGIN);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('setStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.SUBRULE(_this.variableClause);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.variableClause);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.expression);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                        _this.CONSUME(MetaLexer_1.Tokens.SET);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CHARSET);
                                    }
                                }
                            ]);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.charsetName);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                            _this.CONSUME(MetaLexer_1.Tokens.NAMES);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.charsetName);
                                        _this.OPTION(function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                            _this.SUBRULE(_this.collationName);
                                        });
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.setPasswordStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.setTransactionStatement);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.setAutocommitStatement);
                        }
                    }
                ]);
            });
            _this.RULE('showStatement', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.logFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.LOGS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.logFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.EVENTS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.IN);
                                _this.SUBRULE(_this.filename);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FROM);
                                _this.SUBRULE(_this.fromPosition);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                                _this.OPTION(function () {
                                    _this.SUBRULE(_this.offset);
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                                _this.SUBRULE(_this.rowCount);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.showCommonEntity);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.showFilter);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FULL);
                            });
                            _this.SUBRULE(_this.columnsFormat);
                            _this.SUBRULE(_this.tableFormat);
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.schemaFormat);
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.showFilter);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.SUBRULE(_this.schemaFormat);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.ifNotExists);
                            });
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.SUBRULE(_this.namedEntity);
                            _this.SUBRULE(_this.fullId);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE);
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                            _this.SUBRULE(_this.userName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                            _this.SUBRULE(_this.engineName);
                            _this.SUBRULE(_this.engineOption);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.showGlobalInfoClause);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.errorFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.offset);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.rowCount);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.COUNT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.errorFormat);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.showSchemaEntity);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.schemaFormat);
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.showFilter);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.routine);
                            _this.CONSUME(MetaLexer_1.Tokens.CODE);
                            _this.SUBRULE(_this.fullId);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.GRANTS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                                _this.SUBRULE(_this.userName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.SUBRULE(_this.indexFormat);
                            _this.SUBRULE(_this.tableFormat);
                            _this.SUBRULE(_this.tableName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.schemaFormat);
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                                _this.SUBRULE(_this.expression);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.OPEN);
                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.schemaFormat);
                                _this.SUBRULE(_this.uid);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.showFilter);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.PROFILE);
                            _this.SUBRULE(_this.showProfileType);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.showProfileType);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                                _this.CONSUME(MetaLexer_1.Tokens.QUERY);
                                _this.SUBRULE(_this.queryCount);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.LIMIT);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.offset);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.SUBRULE(_this.rowCount);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHOW);
                            _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                                _this.CONSUME(MetaLexer_1.Tokens.CHANNEL);
                                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('variableClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GLOBAL_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.OPTION(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                });
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.GLOBAL);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.SESSION);
                                        }
                                    }
                                ]);
                            });
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
            });
            _this.RULE('showCommonEntity', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                            _this.CONSUME(MetaLexer_1.Tokens.SET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COLLATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATABASES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SCHEMAS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROCEDURE);
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.GLOBAL);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.SESSION);
                                        }
                                    }
                                ]);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.VARIABLES);
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
                            _this.CONSUME(MetaLexer_1.Tokens.LIKE);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WHERE);
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
            });
            _this.RULE('showGlobalInfoClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.STORAGE);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER);
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PLUGINS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PRIVILEGES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FULL);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.PROCESSLIST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROFILES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                            _this.CONSUME(MetaLexer_1.Tokens.HOSTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTHORS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONTRIBUTORS);
                        }
                    }
                ]);
            });
            _this.RULE('showSchemaEntity', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVENTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLE);
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FULL);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRIGGERS);
                        }
                    }
                ]);
            });
            _this.RULE('showProfileType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BLOCK);
                            _this.CONSUME(MetaLexer_1.Tokens.IO);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONTEXT);
                            _this.CONSUME(MetaLexer_1.Tokens.SWITCHES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CPU);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IPC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MEMORY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PAGE);
                            _this.CONSUME(MetaLexer_1.Tokens.FAULTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOURCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SWAPS);
                        }
                    }
                ]);
            });
            _this.RULE('binlogStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.BINLOG);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
            });
            _this.RULE('cacheIndexStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.CACHE);
                _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                _this.SUBRULE(_this.tableIndexes);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.tableIndexes);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.uidList);
                            }
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ALL);
                            }
                        }
                    ]);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.CONSUME(MetaLexer_1.Tokens.IN);
                _this.SUBRULE(_this.schema);
            });
            _this.RULE('flushStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.FLUSH);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.flushFormat);
                });
                _this.SUBRULE(_this.flushOption);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.flushOption);
                });
            });
            _this.RULE('killStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.KILL);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.connectionFormat);
                });
                _this.AT_LEAST_ONE(function () {
                    _this.SUBRULE(_this.decimalLiteral);
                });
            });
            _this.RULE('loadIndexIntoCache', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LOAD);
                _this.CONSUME(MetaLexer_1.Tokens.INDEX);
                _this.CONSUME(MetaLexer_1.Tokens.INTO);
                _this.CONSUME(MetaLexer_1.Tokens.CACHE);
                _this.SUBRULE(_this.loadedTableIndexes);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.loadedTableIndexes);
                });
            });
            _this.RULE('resetStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.RESET);
                _this.CONSUME(MetaLexer_1.Tokens.QUERY);
                _this.CONSUME(MetaLexer_1.Tokens.CACHE);
            });
            _this.RULE('shutdownStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.SHUTDOWN);
            });
            _this.RULE('tableIndexes', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.indexFormat);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uidList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
            });
            _this.RULE('flushOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.DES_KEY_FILE);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.HOSTS);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.OPTION(function () {
                                            _this.OR([
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.BINARY);
                                                    }
                                                },
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                                                    }
                                                },
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.ERROR);
                                                    }
                                                },
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.GENERAL);
                                                    }
                                                },
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.RELAY);
                                                    }
                                                },
                                                {
                                                    ALT: function () {
                                                        _this.CONSUME(MetaLexer_1.Tokens.SLOW);
                                                    }
                                                }
                                            ]);
                                        });
                                        _this.CONSUME(MetaLexer_1.Tokens.LOGS);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.OPTIMIZER_COSTS);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.PRIVILEGES);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.QUERY);
                                        _this.CONSUME(MetaLexer_1.Tokens.CACHE);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.USER_RESOURCES);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                                        _this.OPTION(function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                                            _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                                        });
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY);
                            _this.CONSUME(MetaLexer_1.Tokens.LOGS);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.channelOption);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                            _this.SUBRULE(_this.tables);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.flushTableOption);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('flushTableOption', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WITH);
                            _this.CONSUME(MetaLexer_1.Tokens.READ);
                            _this.CONSUME(MetaLexer_1.Tokens.LOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOR);
                            _this.CONSUME(MetaLexer_1.Tokens.EXPORT);
                        }
                    }
                ]);
            });
            _this.RULE('loadedTableIndexes', function () {
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.PARTITION);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.partitionList);
                            }
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ALL);
                            }
                        }
                    ]);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.indexFormat);
                    });
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.indexList);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.IGNORE);
                    _this.CONSUME(MetaLexer_1.Tokens.LEAVES);
                });
            });
            _this.RULE('simpleDescribeStatement', function () {
                _this.SUBRULE(_this.command);
                _this.SUBRULE(_this.tableName);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.column);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.pattern);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('fullDescribeStatement', function () {
                _this.SUBRULE(_this.command);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.formatType);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.formatValue);
                });
                _this.SUBRULE(_this.describeObjectClause);
            });
            _this.RULE('helpStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.HELP);
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
            });
            _this.RULE('useStatement', function () {
                _this.CONSUME(MetaLexer_1.Tokens.USE);
                _this.SUBRULE(_this.uid);
            });
            _this.RULE('describeObjectClause', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.deleteStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.insertStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.replaceStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.updateStatement);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOR);
                            _this.CONSUME(MetaLexer_1.Tokens.CONNECTION);
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
            });
            _this.RULE('fullId', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.DOT_ID);
                            }
                        },
                        {
                            ALT: function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.uid);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('tableName', function () {
                _this.SUBRULE(_this.fullId);
            });
            _this.RULE('fullColumnName', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.dottedId);
                    _this.OPTION(function () {
                        _this.SUBRULE(_this.dottedId);
                    });
                });
            });
            _this.RULE('indexColumnName', function () {
                _this.SUBRULE(_this.uid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.decimalLiteral);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                });
                _this.OPTION(function () {
                    _this.SUBRULE(_this.sortType);
                });
            });
            _this.RULE('userName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_USER_NAME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ID);
                        }
                    }
                ]);
            });
            _this.RULE('mysqlVariable', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GLOBAL_ID);
                        }
                    }
                ]);
            });
            _this.RULE('charsetName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BINARY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.charsetNameBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHARSET_REVERSE_QOUTE_STRING);
                        }
                    }
                ]);
            });
            _this.RULE('collationName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('engineName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ARCHIVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BLACKHOLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CSV);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FEDERATED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INNODB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MEMORY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MRG_MYISAM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MYISAM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NDB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NDBCLUSTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PERFOMANCE_SCHEMA);
                        }
                    }
                ]);
            });
            _this.RULE('uuidSet', function () {
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.AT_LEAST_ONE(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.decimalLiteral);
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.decimalLiteral);
                });
            });
            _this.RULE('xid', function () {
                _this.SUBRULE(_this.globalTableUid);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.qualifier);
                    _this.OPTION(function () {
                        _this.CONSUME(MetaLexer_1.Tokens.OP);
                        _this.SUBRULE(_this.idFormat);
                    });
                });
            });
            _this.RULE('xuidStringId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIT_STRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.AT_LEAST_ONE(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.HEXADECIMAL_LITERAL);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('authPlugin', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.uid);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('uid', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.simpleId);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REVERSE_QUOTE_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHARSET_REVERSE_QOUTE_STRING);
                        }
                    }
                ]);
            });
            _this.RULE('simpleId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.charsetNameBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.transactionLevelBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.engineName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.privilegesBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.intervalTypeBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.dataTypeBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.keywordsCanBeId);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionNameBase);
                        }
                    }
                ]);
            });
            _this.RULE('dottedId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DOT_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.uid);
                        }
                    }
                ]);
            });
            _this.RULE('decimalLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DECIMAL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ZERO_DECIMAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ONE_DECIMAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TWO_DECIMAL);
                        }
                    }
                ]);
            });
            _this.RULE('fileSizeLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FILESIZE_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
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
                                            _this.CONSUME(MetaLexer_1.Tokens.STRING_CHARSET_NAME);
                                        });
                                        _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.START_NATIONAL_STRING_LITERAL);
                                    }
                                }
                            ]);
                            _this.AT_LEAST_ONE(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.OPTION(function () {
                                            _this.CONSUME(MetaLexer_1.Tokens.STRING_CHARSET_NAME);
                                        });
                                        _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.START_NATIONAL_STRING_LITERAL);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                _this.SUBRULE(_this.collationName);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('booleanLiteral', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRUE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FALSE);
                        }
                    }
                ]);
            });
            _this.RULE('hexadecimalLiteral', function () {
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.STRING_CHARSET_NAME);
                });
                _this.CONSUME(MetaLexer_1.Tokens.HEXADECIMAL_LITERAL);
            });
            _this.RULE('nullNotnull', function () {
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.NOT);
                });
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NULL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NULL_SPEC_LITERAL);
                        }
                    }
                ]);
            });
            _this.RULE('constant', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.stringLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.decimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.hexadecimalLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.booleanLiteral);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REAL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIT_STRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.SUBRULE(_this.nullLiteral);
                        }
                    }
                ]);
            });
            _this.RULE('dataType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.BINARY);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                _this.CONSUME(MetaLexer_1.Tokens.SET);
                                _this.SUBRULE(_this.charsetName);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                _this.SUBRULE(_this.collationName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.UNSIGNED);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ZEROFILL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthTwoDimension);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.UNSIGNED);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ZEROFILL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthTwoOptionalDimension);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.UNSIGNED);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ZEROFILL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.BINARY);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                _this.CONSUME(MetaLexer_1.Tokens.SET);
                                _this.SUBRULE(_this.charsetName);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                                _this.SUBRULE(_this.collationName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                        }
                    }
                ]);
            });
            _this.RULE('convertedDataType', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthOneDimension);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.CHARACTER);
                                _this.CONSUME(MetaLexer_1.Tokens.SET);
                                _this.SUBRULE(_this.charsetName);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.typeName);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.lengthTwoDimension);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SIGNED);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.UNSIGNED);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.INTEGER);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('lengthOneDimension', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('lengthTwoDimension', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('lengthTwoOptionalDimension', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.decimalLiteral);
                _this.OPTION(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.decimalLiteral);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('uidList', function () {
                _this.SUBRULE(_this.uid);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.uid);
                });
            });
            _this.RULE('tables', function () {
                _this.SUBRULE(_this.tableName);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.tableName);
                });
            });
            _this.RULE('indexColumnNames', function () {
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.indexColumnName);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.indexColumnName);
                });
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('expressions', function () {
                _this.SUBRULE(_this.expression);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.expression);
                });
            });
            _this.RULE('expressionsWithDefaults', function () {
                _this.SUBRULE(_this.expressionOrDefault);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.expressionOrDefault);
                });
            });
            _this.RULE('constants', function () {
                _this.SUBRULE(_this.constant);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.SUBRULE(_this.constant);
                });
            });
            _this.RULE('simpleStrings', function () {
                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                });
            });
            _this.RULE('userVariables', function () {
                _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                });
            });
            _this.RULE('defaultValue', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NULL_LITERAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIMESTAMP);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ON);
                                _this.CONSUME(MetaLexer_1.Tokens.UPDATE);
                                _this.CONSUME(MetaLexer_1.Tokens.LOCALTIMESTAMP);
                            });
                        }
                    }
                ]);
            });
            _this.RULE('expressionOrDefault', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT);
                        }
                    }
                ]);
            });
            _this.RULE('ifExists', function () {
                _this.CONSUME(MetaLexer_1.Tokens.IF);
                _this.CONSUME(MetaLexer_1.Tokens.EXISTS);
            });
            _this.RULE('ifNotExists', function () {
                _this.CONSUME(MetaLexer_1.Tokens.IF);
                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                _this.CONSUME(MetaLexer_1.Tokens.EXISTS);
            });
            _this.RULE('functionCall', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.specificFunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.aggregateWindowedFunction);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.scalarFunctionName);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.functionArgs);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullId);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.functionArgs);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.passwordFunctionClause);
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
                                        _this.CONSUME(MetaLexer_1.Tokens.CURRENT_DATE);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIME);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIMESTAMP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.CURRENT_USER);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.LOCALTIME);
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONVERT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.SUBRULE(_this.separator);
                            _this.SUBRULE(_this.convertedDataType);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONVERT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(MetaLexer_1.Tokens.USING);
                            _this.SUBRULE(_this.charsetName);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CAST);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.CONSUME(MetaLexer_1.Tokens.AS);
                            _this.SUBRULE(_this.convertedDataType);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VALUES);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.fullColumnName);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CASE);
                            _this.SUBRULE(_this.expression);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.caseFuncAlternative);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ELSE);
                                _this.SUBRULE(_this.elseArg);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.END);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CASE);
                            _this.AT_LEAST_ONE(function () {
                                _this.SUBRULE(_this.caseFuncAlternative);
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ELSE);
                                _this.SUBRULE(_this.elseArg);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.END);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHAR);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.functionArgs);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.USING);
                                _this.SUBRULE(_this.charsetName);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POSITION);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.positionString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.positionExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.IN);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.inString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.inExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SUBSTR);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SUBSTRING);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromDecimal);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromExpression);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.FOR);
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.forDecimal);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.forExpression);
                                        }
                                    }
                                ]);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRIM);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.positioinForm);
                            _this.OPTION(function () {
                                _this.OR([
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.sourceString);
                                        }
                                    },
                                    {
                                        ALT: function () {
                                            _this.SUBRULE(_this.sourceExpression);
                                        }
                                    }
                                ]);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRIM);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.fromExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEIGHT_STRING);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.stringLiteral);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.expression);
                                    }
                                }
                            ]);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.AS);
                                _this.SUBRULE(_this.stringFormat);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.decimalLiteral);
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                            });
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.levelsInWeightString);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXTRACT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.intervalType);
                            _this.CONSUME(MetaLexer_1.Tokens.FROM);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceString);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.sourceExpression);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GET_FORMAT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.datetimeFormat);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.stringLiteral);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('caseFuncAlternative', function () {
                _this.CONSUME(MetaLexer_1.Tokens.WHEN);
                _this.SUBRULE(_this.condition);
                _this.CONSUME(MetaLexer_1.Tokens.THEN);
                _this.SUBRULE(_this.consequent);
            });
            _this.RULE('levelsInWeightString', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.levelInWeightListElement);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.levelInWeightListElement);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEVEL);
                            _this.SUBRULE(_this.firstLevel);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.lastLevel);
                        }
                    }
                ]);
            });
            _this.RULE('levelInWeightListElement', function () {
                _this.SUBRULE(_this.decimalLiteral);
                _this.OPTION(function () {
                    _this.SUBRULE(_this.orderType);
                });
            });
            _this.RULE('aggregateWindowedFunction', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.AVG);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.MAX);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.MIN);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.SUM);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.aggregator);
                            });
                            _this.SUBRULE(_this.functionArg);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COUNT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.starArg);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.OPTION(function () {
                                            _this.SUBRULE(_this.aggregator);
                                        });
                                        _this.SUBRULE(_this.functionArg);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COUNT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.aggregator);
                            _this.SUBRULE(_this.functionArgs);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.BIT_AND);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.BIT_OR);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.BIT_XOR);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STD);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STDDEV);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STDDEV_POP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.STDDEV_SAMP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.VAR_POP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.VAR_SAMP);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(MetaLexer_1.Tokens.VARIANCE);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.aggregator);
                            });
                            _this.SUBRULE(_this.functionArg);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GROUP_CONCAT);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OPTION(function () {
                                _this.SUBRULE(_this.aggregator);
                            });
                            _this.SUBRULE(_this.functionArgs);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ORDER);
                                _this.CONSUME(MetaLexer_1.Tokens.BY);
                                _this.SUBRULE(_this.orderByExpression);
                                _this.MANY(function () {
                                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                                    _this.SUBRULE(_this.orderByExpression);
                                });
                            });
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.SEPARATOR);
                                _this.SUBRULE(_this.separator);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('scalarFunctionName', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionNameBase);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASCII);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_DATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURRENT_TIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CURTIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATE_ADD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATE_SUB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSERT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCALTIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCALTIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NOW);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBSTR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBSTRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SYSDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRIM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTC_DATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTC_TIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTC_TIMESTAMP);
                        }
                    }
                ]);
            });
            _this.RULE('passwordFunctionClause', function () {
                _this.SUBRULE(_this.functionName);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
                _this.SUBRULE(_this.functionArg);
                _this.CONSUME(MetaLexer_1.Tokens.OP);
            });
            _this.RULE('functionArgs', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
                _this.MANY(function () {
                    _this.CONSUME(MetaLexer_1.Tokens.OP);
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.constant);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.fullColumnName);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.functionCall);
                            }
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expression);
                            }
                        }
                    ]);
                });
            });
            _this.RULE('functionArg', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                        }
                    }
                ]);
            });
            _this.RULE('expression', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.notOperator);
                            _this.SUBRULE(_this.expression);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expression);
                            _this.SUBRULE(_this.logicalOperator);
                            _this.SUBRULE(_this.expression);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.CONSUME(MetaLexer_1.Tokens.IS);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.SUBRULE(_this.testValue);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                        }
                    }
                ]);
            });
            _this.RULE('predicate', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.IN);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.selectStatement);
                                    }
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.expressions);
                                    }
                                }
                            ]);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.CONSUME(MetaLexer_1.Tokens.IS);
                            _this.SUBRULE(_this.nullNotnull);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.left);
                            _this.SUBRULE(_this.comparisonOperator);
                            _this.SUBRULE(_this.right);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.SUBRULE(_this.comparisonOperator);
                            _this.SUBRULE(_this.quantifier);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.selectStatement);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.BETWEEN);
                            _this.SUBRULE(_this.predicate);
                            _this.CONSUME(MetaLexer_1.Tokens.AND);
                            _this.SUBRULE(_this.predicate);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.CONSUME(MetaLexer_1.Tokens.SOUNDS);
                            _this.CONSUME(MetaLexer_1.Tokens.LIKE);
                            _this.SUBRULE(_this.predicate);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.LIKE);
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.ESCAPE);
                                _this.CONSUME(MetaLexer_1.Tokens.STRING_LITERAL);
                            });
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.predicate);
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.NOT);
                            });
                            _this.SUBRULE(_this.regex);
                            _this.SUBRULE(_this.predicate);
                        }
                    },
                    {
                        ALT: function () {
                            _this.OPTION(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.LOCAL_ID);
                                _this.CONSUME(MetaLexer_1.Tokens.VAR_ASSIGN);
                            });
                            _this.SUBRULE(_this.expressionAtom);
                        }
                    }
                ]);
            });
            _this.RULE('expressionAtom', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.constant);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.fullColumnName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.functionCall);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expressionAtom);
                            _this.CONSUME(MetaLexer_1.Tokens.COLLATE);
                            _this.SUBRULE(_this.collationName);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.mysqlVariable);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.unaryOperator);
                            _this.SUBRULE(_this.expressionAtom);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BINARY);
                            _this.SUBRULE(_this.expressionAtom);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.MANY(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.expression);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROW);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.expression);
                            _this.AT_LEAST_ONE(function () {
                                _this.CONSUME(MetaLexer_1.Tokens.OP);
                                _this.SUBRULE(_this.expression);
                            });
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXISTS);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.selectStatement);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.SUBRULE(_this.selectStatement);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTERVAL);
                            _this.SUBRULE(_this.expression);
                            _this.SUBRULE(_this.intervalType);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.left);
                            _this.SUBRULE(_this.bitOperator);
                            _this.SUBRULE(_this.right);
                        }
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.left);
                            _this.SUBRULE(_this.mathOperator);
                            _this.SUBRULE(_this.right);
                        }
                    }
                ]);
            });
            _this.RULE('unaryOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NOT);
                        }
                    }
                ]);
            });
            _this.RULE('comparisonOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('logicalOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.XOR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('bitOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('mathOperator', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DIV);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MOD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OP);
                        }
                    }
                ]);
            });
            _this.RULE('charsetNameBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ARMSCII8);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASCII);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIG5);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP1250);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP1251);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP1256);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP1257);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP850);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP852);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP866);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CP932);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEC8);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EUCJPMS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EUCKR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GB2312);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GBK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOSTD8);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GREEK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HEBREW);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HP8);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KEYBCS2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KOI8R);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KOI8U);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LATIN1);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LATIN2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LATIN5);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LATIN7);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MACCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MACROMAN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SJIS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SWE7);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIS620);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UCS2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UJIS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF16);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF16LE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF32);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF8);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF8MB3);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UTF8MB4);
                        }
                    }
                ]);
            });
            _this.RULE('transactionLevelBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPEATABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMITTED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNCOMMITTED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SERIALIZABLE);
                        }
                    }
                ]);
            });
            _this.RULE('privilegesBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROUTINE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXECUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROCESS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELOAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHUTDOWN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUPER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PRIVILEGES);
                        }
                    }
                ]);
            });
            _this.RULE('intervalTypeBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUARTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MONTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MINUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEEK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MICROSECOND);
                        }
                    }
                ]);
            });
            _this.RULE('dataTypeBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATETIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.YEAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENUM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TEXT);
                        }
                    }
                ]);
            });
            _this.RULE('keywordsCanBeId', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ACCOUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ACTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AFTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AGGREGATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ALGORITHM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ANY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTHORS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTOCOMMIT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTOEXTEND_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AUTO_INCREMENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AVG_ROW_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BEGIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BINLOG);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BLOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BOOL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BOOLEAN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BTREE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CASCADED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHAIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHANNEL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHECKSUM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CIPHER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CLIENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COALESCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CODE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COLUMNS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COLUMN_FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMMIT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPACT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPLETION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPRESSED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPRESSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONCURRENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONNECTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONSISTENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONTAINS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONTRIBUTORS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COPY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CPU);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATAFILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEALLOCATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFAULT_AUTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEFINER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DELAY_KEY_WRITE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DIRECTORY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISCARD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DO);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DUMPFILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DUPLICATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DYNAMIC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENCRYPTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENGINES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ERROR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ERRORS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ESCAPE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVEN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVENTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EVERY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXCHANGE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXCLUSIVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXPIRE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXTENT_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FAULTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FIELDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FILE_BLOCK_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FILTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FIRST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FIXED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOLLOWS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FULL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FUNCTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GLOBAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GRANTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GROUP_REPLICATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HASH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IDENTIFIED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IGNORE_SERVER_IDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IMPORT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INDEXES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INITIAL_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INPLACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSERT_METHOD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSTANCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INVOKER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IO);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IO_THREAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IPC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISOLATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISSUER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.KEY_BLOCK_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LANGUAGE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LAST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEAVES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LESS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEVEL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LIST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOGFILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOGS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_AUTO_POSITION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_CONNECT_RETRY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_DELAY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_HEARTBEAT_PERIOD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_HOST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_LOG_POS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_PASSWORD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_PORT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_RETRY_COUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CAPATH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CERT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CIPHER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CRL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_CRLPATH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_SSL_KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_TLS_VERSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_USER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_CONNECTIONS_PER_HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_QUERIES_PER_HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_ROWS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_UPDATES_PER_HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAX_USER_CONNECTIONS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MEMORY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MERGE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MIGRATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MIN_ROWS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MODIFY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MUTEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MYSQL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NAME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NAMES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NCHAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NEVER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NO);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NODEGROUP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NONE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OFFLINE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OFFSET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OJ);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OLD_PASSWORD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ONE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ONLINE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ONLY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OPTIMIZER_COSTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OPTIONS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OWNER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PACK_KEYS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PAGE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARSER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTIAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITIONING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PARTITIONS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PASSWORD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PHASE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PLUGINS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PLUGIN_DIR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PORT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PRECEDES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PREPARE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PRESERVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PREV);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROCESSLIST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROFILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROFILES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PROXY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUERY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUICK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REBUILD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RECOVER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REDO_BUFFER_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REDUNDANT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAYLOG);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELAY_LOG_POS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REMOVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REORGANIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPAIR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_DO_DB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_DO_TABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_IGNORE_DB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_IGNORE_TABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_REWRITE_DB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_WILD_DO_TABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATE_WILD_IGNORE_TABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REPLICATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RESUME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RETURNS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROLLBACK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROLLUP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROTATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROW);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROWS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROW_FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SAVEPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SCHEDULE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SECURITY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SERVER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SESSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHARE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHARED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SIGNED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SIMPLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SLAVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SNAPSHOT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOCKET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOUNDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOURCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_AFTER_GTIDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_AFTER_MTS_GAPS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_BEFORE_GTIDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_BUFFER_RESULT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_CACHE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_NO_CACHE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_THREAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.START);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STARTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_AUTO_RECALC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_PERSISTENT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATS_SAMPLE_PAGES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STATUS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STOP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STORAGE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBJECT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBPARTITION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBPARTITIONS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUSPEND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SWAPS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SWITCHES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TABLESPACE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TEMPORARY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TEMPTABLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.THAN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRANSACTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TRUNCATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNDEFINED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNDOFILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNDO_BUFFER_SIZE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNKNOWN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UPGRADE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.USER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VALIDATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VALUE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VARIABLES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VIEW);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WAIT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WARNINGS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WITHOUT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WORK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WRAPPER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.X509);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.XA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.XML);
                        }
                    }
                ]);
            });
            _this.RULE('functionNameBase', function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ABS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ACOS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADDDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ADDTIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AES_DECRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AES_ENCRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.AREA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASBINARY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASWKT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASYMMETRIC_DECRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASYMMETRIC_DERIVE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASYMMETRIC_ENCRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASYMMETRIC_SIGN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ASYMMETRIC_VERIFY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ATAN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ATAN2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BENCHMARK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIT_COUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BIT_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.BUFFER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CEIL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CEILING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CENTROID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHARACTER_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHARSET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CHAR_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COERCIBILITY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COLLATION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COMPRESS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONCAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONCAT_WS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONNECTION_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONV);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CONVERT_TZ);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.COUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CRC32);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE_ASYMMETRIC_PUB_KEY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE_DH_PARAMETERS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CREATE_DIGEST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.CROSSES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATEDIFF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DATE_FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAYNAME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAYOFMONTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAYOFWEEK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DAYOFYEAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DECODE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DEGREES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DES_DECRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DES_ENCRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DIMENSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.DISJOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ELT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENCODE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENCRYPT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENDPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ENVELOPE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EQUALS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXPORT_SET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXTERIORRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.EXTRACTVALUE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FIELD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FIND_IN_SET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FLOOR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FOUND_ROWS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FROM_BASE64);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FROM_DAYS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.FROM_UNIXTIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMCOLLFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMCOLLFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYCOLLECTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYCOLLECTIONFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYCOLLECTIONFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMETRYTYPE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GEOMFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GET_FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GET_LOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GLENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GREATEST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GTID_SUBSET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.GTID_SUBTRACT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.HOUR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IFNULL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INET6_ATON);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INET6_NTOA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INET_ATON);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INET_NTOA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INSTR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTERIORRINGN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.INTERSECTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISCLOSED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISEMPTY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISNULL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ISSIMPLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_FREE_LOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_IPV4);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_IPV4_COMPAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_IPV4_MAPPED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_IPV6);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.IS_USED_LOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LAST_INSERT_ID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LCASE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEAST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LEFT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LINEFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LINEFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LINESTRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LINESTRINGFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LINESTRINGFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOAD_FILE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOCATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOG);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOG10);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOG2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LOWER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LPAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.LTRIM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAKEDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAKETIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MAKE_SET);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MASTER_POS_WAIT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBRCONTAINS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBRDISJOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBREQUAL);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBRINTERSECTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBROVERLAPS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBRTOUCHES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MBRWITHIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MD5);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MICROSECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MINUTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MLINEFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MLINEFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MONTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MONTHNAME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MPOINTFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MPOINTFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MPOLYFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MPOLYFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTILINESTRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTILINESTRINGFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTILINESTRINGFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOINTFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOINTFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOLYGON);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOLYGONFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.MULTIPOLYGONFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NAME_CONST);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NULLIF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NUMGEOMETRIES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NUMINTERIORRINGS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.NUMPOINTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OCT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OCTET_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ORD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.OVERLAPS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PERIOD_ADD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PERIOD_DIFF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.PI);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POINTFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POINTFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POINTN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POLYFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POLYFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POLYGON);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POLYGONFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POLYGONFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POSITION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POW);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.POWER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUARTER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.QUOTE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RADIANS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RAND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RANDOM_BYTES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RELEASE_LOCK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.REVERSE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RIGHT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROUND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ROW_COUNT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RPAD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.RTRIM);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SECOND);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SEC_TO_TIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SESSION_USER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHA1);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SHA2);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SIGN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SLEEP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SOUNDEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SQRT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SRID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STARTPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STRCMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.STR_TO_DATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_AREA);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ASBINARY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ASTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ASWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ASWKT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_BUFFER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_CENTROID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_CONTAINS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_CROSSES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_DIFFERENCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_DIMENSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_DISJOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_DISTANCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ENDPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ENVELOPE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_EQUALS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_EXTERIORRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMCOLLFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMCOLLFROMTXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMCOLLFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMETRYTYPE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_GEOMFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_INTERIORRINGN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_INTERSECTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_INTERSECTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ISCLOSED);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ISEMPTY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_ISSIMPLE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_LINEFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_LINEFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_LINESTRINGFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_LINESTRINGFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_NUMGEOMETRIES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_NUMINTERIORRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_NUMINTERIORRINGS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_NUMPOINTS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_OVERLAPS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POINTFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POINTFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POINTN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POLYFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POLYFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POLYGONFROMTEXT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_POLYGONFROMWKB);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_SRID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_STARTPOINT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_SYMDIFFERENCE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_TOUCHES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_UNION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_WITHIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_X);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.ST_Y);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBDATE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBSTRING_INDEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SUBTIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.SYSTEM_USER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TAN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIME);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIMEDIFF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIMESTAMPADD);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIMESTAMPDIFF);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIME_FORMAT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TIME_TO_SEC);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TOUCHES);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TO_BASE64);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TO_DAYS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.TO_SECONDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UCASE);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNCOMPRESS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNCOMPRESSED_LENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNHEX);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UNIX_TIMESTAMP);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UPDATEXML);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UPPER);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UUID);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.UUID_SHORT);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VALIDATE_PASSWORD_STRENGTH);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.VERSION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEEK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEEKDAY);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEEKOFYEAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WEIGHT_STRING);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.WITHIN);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.YEAR);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.YEARWEEK);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.Y_FUNCTION);
                        }
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(MetaLexer_1.Tokens.X_FUNCTION);
                        }
                    }
                ]);
            });
            chevrotain.Parser.performSelfAnalysis(_this);
        });
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
exports.MetaParser = MetaParser;
//# sourceMappingURL=rules_g.js.map