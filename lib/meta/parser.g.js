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
var lexer_g_1 = require("./lexer.g");
var Tokens = {};
var MetaParser = (function (_super) {
    __extends(MetaParser, _super);
    function MetaParser(input) {
        var _this = _super.call(this, input, lexer_g_1.tokens, {
            recoveryEnabled: true,
            outputCst: true,
        }) || this;
        _this.RULE('root', function () {
            _this.OPTION(function () {
                _this.SUBRULE(_this.sqlStatements);
            });
            _this.OPTION2(function () {
                _this.CONSUME(Tokens.MINUSMINUS);
            });
            _this.CONSUME(Tokens.EOF);
        });
        _this.RULE('sqlStatements', function () {
            _this.MANY(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.sqlStatement);
                            _this.OPTION3(function () {
                                _this.CONSUME2(Tokens.MINUSMINUS);
                            });
                            _this.CONSUME(Tokens.SEMI);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.emptyStatement);
                        },
                    },
                ]);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.sqlStatement);
                        _this.OPTION4(function () {
                            _this.OPTION5(function () {
                                _this.CONSUME3(Tokens.MINUSMINUS);
                            });
                            _this.CONSUME2(Tokens.SEMI);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.emptyStatement);
                    },
                },
            ]);
        });
        _this.RULE('sqlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.ddlStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dmlStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.transactionStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.replicationStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.preparedStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.administrationStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.utilityStatement);
                    },
                },
            ]);
        });
        _this.RULE('emptyStatement', function () {
            _this.CONSUME3(Tokens.SEMI);
        });
        _this.RULE('ddlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createDatabase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createEvent);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createIndex);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createLogfileGroup);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createProcedure);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createFunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createServer);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createTablespaceInnodb);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createTablespaceNdb);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createTrigger);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createView);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterDatabase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterEvent);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterFunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterInstance);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterLogfileGroup);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterProcedure);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterServer);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterTablespace);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterView);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropDatabase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropEvent);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropIndex);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropLogfileGroup);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropProcedure);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropFunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropServer);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropTablespace);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropTrigger);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropView);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.renameTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.truncateTable);
                    },
                },
            ]);
        });
        _this.RULE('dmlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.selectStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.insertStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.updateStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.deleteStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.replaceStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.callStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.loadDataStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.loadXmlStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.doStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.handlerStatement);
                    },
                },
            ]);
        });
        _this.RULE('transactionStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.startTransaction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.beginWork);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.commitWork);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.rollbackWork);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.savepointStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.rollbackStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.releaseStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.lockTables);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.unlockTables);
                    },
                },
            ]);
        });
        _this.RULE('replicationStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.changeMaster);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.changeReplicationFilter);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.purgeBinaryLogs);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.resetMaster);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.resetSlave);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.startSlave);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.stopSlave);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.startGroupReplication);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.stopGroupReplication);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaStartTransaction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaEndTransaction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaPrepareStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaCommitWork);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaRollbackWork);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.xaRecoverWork);
                    },
                },
            ]);
        });
        _this.RULE('preparedStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.prepareStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.executeStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.deallocatePrepare);
                    },
                },
            ]);
        });
        _this.RULE('compoundStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.blockStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.caseStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.ifStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.leaveStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.loopStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.repeatStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.whileStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.iterateStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.returnStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.cursorStatement);
                    },
                },
            ]);
        });
        _this.RULE('administrationStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.alterUser);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createUser);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dropUser);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.grantStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.grantProxy);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.renameUser);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.revokeStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.revokeProxy);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.analyzeTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.checkTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.checksumTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.optimizeTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.repairTable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.createUdfunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.installPlugin);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.uninstallPlugin);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.setStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.showStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.binlogStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.cacheIndexStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.flushStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.killStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.loadIndexIntoCache);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.resetStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.shutdownStatement);
                    },
                },
            ]);
        });
        _this.RULE('utilityStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.simpleDescribeStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.fullDescribeStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.helpStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.useStatement);
                    },
                },
            ]);
        });
        _this.RULE('createDatabase', function () {
            _this.CONSUME(Tokens.CREATE);
            _this.SUBRULE(_this.dbFormat);
            _this.OPTION6(function () {
                _this.SUBRULE(_this.ifNotExists);
            });
            _this.SUBRULE(_this.uid);
            _this.MANY2(function () {
                _this.SUBRULE(_this.createDatabaseOption);
            });
        });
        _this.RULE('createEvent', function () {
            _this.CONSUME2(Tokens.CREATE);
            _this.OPTION7(function () {
                _this.SUBRULE(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.EVENT);
            _this.OPTION8(function () {
                _this.SUBRULE2(_this.ifNotExists);
            });
            _this.SUBRULE(_this.fullId);
            _this.CONSUME(Tokens.ON);
            _this.CONSUME(Tokens.SCHEDULE);
            _this.SUBRULE(_this.scheduleExpression);
            _this.OPTION9(function () {
                _this.CONSUME2(Tokens.ON);
                _this.CONSUME(Tokens.COMPLETION);
                _this.OPTION10(function () {
                    _this.CONSUME(Tokens.NOT);
                });
                _this.CONSUME(Tokens.PRESERVE);
            });
            _this.OPTION11(function () {
                _this.SUBRULE(_this.enableType);
            });
            _this.OPTION12(function () {
                _this.CONSUME(Tokens.COMMENT);
                _this.CONSUME(Tokens.STRING_LITERAL);
            });
            _this.CONSUME(Tokens.DO);
            _this.SUBRULE(_this.routineBody);
        });
        _this.RULE('createIndex', function () {
            _this.CONSUME3(Tokens.CREATE);
            _this.OPTION13(function () {
                _this.SUBRULE(_this.intimeAction);
            });
            _this.OPTION14(function () {
                _this.SUBRULE(_this.indexCategory);
            });
            _this.CONSUME(Tokens.INDEX);
            _this.SUBRULE2(_this.uid);
            _this.OPTION15(function () {
                _this.SUBRULE(_this.indexType);
            });
            _this.CONSUME3(Tokens.ON);
            _this.SUBRULE(_this.tableName);
            _this.SUBRULE(_this.indexColumnNames);
            _this.MANY3(function () {
                _this.SUBRULE(_this.indexOption);
            });
            _this.OPTION16(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.ALGORITHM);
                            _this.OPTION17(function () {
                                _this.CONSUME(Tokens.OP);
                            });
                            _this.SUBRULE(_this.algType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.LOCK);
                            _this.OPTION18(function () {
                                _this.CONSUME2(Tokens.OP);
                            });
                            _this.SUBRULE(_this.lockType);
                        },
                    },
                ]);
            });
        });
        _this.RULE('createLogfileGroup', function () {
            _this.CONSUME4(Tokens.CREATE);
            _this.CONSUME(Tokens.LOGFILE);
            _this.CONSUME(Tokens.GROUP);
            _this.SUBRULE3(_this.uid);
            _this.CONSUME(Tokens.ADD);
            _this.CONSUME(Tokens.UNDOFILE);
            _this.SUBRULE(_this.undoFile);
            _this.OPTION19(function () {
                _this.CONSUME(Tokens.INITIAL_SIZE);
                _this.OPTION20(function () {
                    _this.CONSUME3(Tokens.OP);
                });
                _this.SUBRULE(_this.initSize);
            });
            _this.OPTION21(function () {
                _this.CONSUME(Tokens.UNDO_BUFFER_SIZE);
                _this.OPTION22(function () {
                    _this.CONSUME4(Tokens.OP);
                });
                _this.SUBRULE(_this.undoSize);
            });
            _this.OPTION23(function () {
                _this.CONSUME(Tokens.REDO_BUFFER_SIZE);
                _this.OPTION24(function () {
                    _this.CONSUME5(Tokens.OP);
                });
                _this.SUBRULE(_this.redoSize);
            });
            _this.OPTION25(function () {
                _this.CONSUME(Tokens.NODEGROUP);
                _this.OPTION26(function () {
                    _this.CONSUME6(Tokens.OP);
                });
                _this.SUBRULE4(_this.uid);
            });
            _this.OPTION27(function () {
                _this.CONSUME(Tokens.WAIT);
            });
            _this.OPTION28(function () {
                _this.CONSUME2(Tokens.COMMENT);
                _this.OPTION29(function () {
                    _this.CONSUME7(Tokens.OP);
                });
                _this.SUBRULE(_this.comment);
            });
            _this.CONSUME(Tokens.ENGINE);
            _this.OPTION30(function () {
                _this.CONSUME8(Tokens.OP);
            });
            _this.SUBRULE(_this.engineName);
        });
        _this.RULE('createProcedure', function () {
            _this.CONSUME5(Tokens.CREATE);
            _this.OPTION31(function () {
                _this.SUBRULE2(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.PROCEDURE);
            _this.SUBRULE2(_this.fullId);
            _this.CONSUME(Tokens.OP);
            _this.OPTION32(function () {
                _this.SUBRULE(_this.procedureParameter);
            });
            _this.MANY4(function () {
                _this.CONSUME(Tokens.OP);
                _this.SUBRULE2(_this.procedureParameter);
            });
            _this.CONSUME(Tokens.OP);
            _this.MANY5(function () {
                _this.SUBRULE(_this.routineOption);
            });
            _this.SUBRULE2(_this.routineBody);
        });
        _this.RULE('createFunction', function () {
            _this.CONSUME6(Tokens.CREATE);
            _this.OPTION33(function () {
                _this.SUBRULE3(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.FUNCTION);
            _this.SUBRULE3(_this.fullId);
            _this.CONSUME2(Tokens.OP);
            _this.OPTION34(function () {
                _this.SUBRULE(_this.functionParameter);
            });
            _this.MANY6(function () {
                _this.CONSUME2(Tokens.OP);
                _this.SUBRULE2(_this.functionParameter);
            });
            _this.CONSUME2(Tokens.OP);
            _this.CONSUME(Tokens.RETURNS);
            _this.SUBRULE(_this.dataType);
            _this.MANY7(function () {
                _this.SUBRULE2(_this.routineOption);
            });
            _this.SUBRULE3(_this.routineBody);
        });
        _this.RULE('createServer', function () {
            _this.CONSUME7(Tokens.CREATE);
            _this.CONSUME(Tokens.SERVER);
            _this.SUBRULE5(_this.uid);
            _this.CONSUME(Tokens.FOREIGN);
            _this.CONSUME(Tokens.DATA);
            _this.CONSUME(Tokens.WRAPPER);
            _this.SUBRULE(_this.wrapperName);
            _this.CONSUME(Tokens.OPTIONS);
            _this.CONSUME3(Tokens.OP);
            _this.SUBRULE(_this.serverOption);
            _this.MANY8(function () {
                _this.CONSUME3(Tokens.OP);
                _this.SUBRULE2(_this.serverOption);
            });
            _this.CONSUME3(Tokens.OP);
        });
        _this.RULE('createTable', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.CREATE);
                        _this.OPTION35(function () {
                            _this.CONSUME(Tokens.TEMPORARY);
                        });
                        _this.CONSUME(Tokens.TABLE);
                        _this.OPTION36(function () {
                            _this.SUBRULE3(_this.ifNotExists);
                        });
                        _this.SUBRULE2(_this.tableName);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LIKE);
                                    _this.SUBRULE3(_this.tableName);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.OP);
                                    _this.CONSUME2(Tokens.LIKE);
                                    _this.SUBRULE(_this.parenthesisTable);
                                    _this.CONSUME4(Tokens.OP);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.CREATE);
                        _this.OPTION37(function () {
                            _this.CONSUME2(Tokens.TEMPORARY);
                        });
                        _this.CONSUME2(Tokens.TABLE);
                        _this.OPTION38(function () {
                            _this.SUBRULE4(_this.ifNotExists);
                        });
                        _this.SUBRULE4(_this.tableName);
                        _this.OPTION39(function () {
                            _this.SUBRULE(_this.createDefinitions);
                        });
                        _this.OPTION40(function () {
                            _this.SUBRULE(_this.tableOption);
                            _this.MANY9(function () {
                                _this.OPTION41(function () {
                                    _this.CONSUME4(Tokens.OP);
                                });
                                _this.SUBRULE2(_this.tableOption);
                            });
                        });
                        _this.OPTION42(function () {
                            _this.SUBRULE(_this.partitionDefinitions);
                        });
                        _this.OPTION43(function () {
                            _this.SUBRULE(_this.keyViolate);
                        });
                        _this.OPTION44(function () {
                            _this.CONSUME(Tokens.AS);
                        });
                        _this.SUBRULE2(_this.selectStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.CREATE);
                        _this.OPTION45(function () {
                            _this.CONSUME3(Tokens.TEMPORARY);
                        });
                        _this.CONSUME3(Tokens.TABLE);
                        _this.OPTION46(function () {
                            _this.SUBRULE5(_this.ifNotExists);
                        });
                        _this.SUBRULE5(_this.tableName);
                        _this.SUBRULE2(_this.createDefinitions);
                        _this.OPTION47(function () {
                            _this.SUBRULE3(_this.tableOption);
                            _this.MANY10(function () {
                                _this.OPTION48(function () {
                                    _this.CONSUME5(Tokens.OP);
                                });
                                _this.SUBRULE4(_this.tableOption);
                            });
                        });
                        _this.OPTION49(function () {
                            _this.SUBRULE2(_this.partitionDefinitions);
                        });
                    },
                },
            ]);
        });
        _this.RULE('createTablespaceInnodb', function () {
            _this.CONSUME11(Tokens.CREATE);
            _this.CONSUME(Tokens.TABLESPACE);
            _this.SUBRULE6(_this.uid);
            _this.CONSUME2(Tokens.ADD);
            _this.CONSUME(Tokens.DATAFILE);
            _this.SUBRULE(_this.datafile);
            _this.OPTION50(function () {
                _this.CONSUME(Tokens.FILE_BLOCK_SIZE);
                _this.CONSUME9(Tokens.OP);
                _this.SUBRULE(_this.fileBlockSize);
            });
            _this.OPTION51(function () {
                _this.CONSUME2(Tokens.ENGINE);
                _this.OPTION52(function () {
                    _this.CONSUME10(Tokens.OP);
                });
                _this.SUBRULE2(_this.engineName);
            });
        });
        _this.RULE('createTablespaceNdb', function () {
            _this.CONSUME12(Tokens.CREATE);
            _this.CONSUME2(Tokens.TABLESPACE);
            _this.SUBRULE7(_this.uid);
            _this.CONSUME3(Tokens.ADD);
            _this.CONSUME2(Tokens.DATAFILE);
            _this.SUBRULE2(_this.datafile);
            _this.CONSUME(Tokens.USE);
            _this.CONSUME2(Tokens.LOGFILE);
            _this.CONSUME2(Tokens.GROUP);
            _this.SUBRULE8(_this.uid);
            _this.OPTION53(function () {
                _this.CONSUME(Tokens.EXTENT_SIZE);
                _this.OPTION54(function () {
                    _this.CONSUME11(Tokens.OP);
                });
                _this.SUBRULE(_this.extentSize);
            });
            _this.OPTION55(function () {
                _this.CONSUME2(Tokens.INITIAL_SIZE);
                _this.OPTION56(function () {
                    _this.CONSUME12(Tokens.OP);
                });
                _this.SUBRULE(_this.initialSize);
            });
            _this.OPTION57(function () {
                _this.CONSUME(Tokens.AUTOEXTEND_SIZE);
                _this.OPTION58(function () {
                    _this.CONSUME13(Tokens.OP);
                });
                _this.SUBRULE(_this.autoextendSize);
            });
            _this.OPTION59(function () {
                _this.CONSUME(Tokens.MAX_SIZE);
                _this.OPTION60(function () {
                    _this.CONSUME14(Tokens.OP);
                });
                _this.SUBRULE(_this.maxSize);
            });
            _this.OPTION61(function () {
                _this.CONSUME2(Tokens.NODEGROUP);
                _this.OPTION62(function () {
                    _this.CONSUME15(Tokens.OP);
                });
                _this.SUBRULE9(_this.uid);
            });
            _this.OPTION63(function () {
                _this.CONSUME2(Tokens.WAIT);
            });
            _this.OPTION64(function () {
                _this.CONSUME3(Tokens.COMMENT);
                _this.OPTION65(function () {
                    _this.CONSUME16(Tokens.OP);
                });
                _this.SUBRULE2(_this.comment);
            });
            _this.CONSUME3(Tokens.ENGINE);
            _this.OPTION66(function () {
                _this.CONSUME17(Tokens.OP);
            });
            _this.SUBRULE3(_this.engineName);
        });
        _this.RULE('createTrigger', function () {
            _this.CONSUME13(Tokens.CREATE);
            _this.OPTION67(function () {
                _this.SUBRULE4(_this.ownerStatement);
            });
            _this.CONSUME(Tokens.TRIGGER);
            _this.SUBRULE(_this.thisTrigger);
            _this.SUBRULE(_this.triggerTime);
            _this.SUBRULE(_this.triggerEvent);
            _this.CONSUME4(Tokens.ON);
            _this.SUBRULE6(_this.tableName);
            _this.CONSUME(Tokens.FOR);
            _this.CONSUME(Tokens.EACH);
            _this.CONSUME(Tokens.ROW);
            _this.OPTION68(function () {
                _this.SUBRULE(_this.triggerPlace);
                _this.SUBRULE(_this.otherTrigger);
            });
            _this.SUBRULE4(_this.routineBody);
        });
        _this.RULE('createView', function () {
            _this.CONSUME14(Tokens.CREATE);
            _this.OPTION69(function () {
                _this.CONSUME(Tokens.OR);
                _this.CONSUME(Tokens.REPLACE);
            });
            _this.OPTION70(function () {
                _this.CONSUME2(Tokens.ALGORITHM);
                _this.CONSUME18(Tokens.OP);
                _this.SUBRULE2(_this.algType);
            });
            _this.OPTION71(function () {
                _this.SUBRULE5(_this.ownerStatement);
            });
            _this.OPTION72(function () {
                _this.CONSUME(Tokens.SQL);
                _this.CONSUME(Tokens.SECURITY);
                _this.SUBRULE(_this.secContext);
            });
            _this.CONSUME(Tokens.VIEW);
            _this.SUBRULE4(_this.fullId);
            _this.OPTION73(function () {
                _this.CONSUME5(Tokens.OP);
                _this.SUBRULE(_this.uidList);
                _this.CONSUME5(Tokens.OP);
            });
            _this.CONSUME2(Tokens.AS);
            _this.SUBRULE3(_this.selectStatement);
            _this.OPTION74(function () {
                _this.CONSUME(Tokens.WITH);
                _this.OPTION75(function () {
                    _this.SUBRULE(_this.checkOption);
                });
                _this.CONSUME(Tokens.CHECK);
                _this.CONSUME(Tokens.OPTION);
            });
        });
        _this.RULE('createDatabaseOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION76(function () {
                            _this.CONSUME(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.CHARACTER);
                        _this.CONSUME(Tokens.SET);
                        _this.OPTION77(function () {
                            _this.CONSUME19(Tokens.OP);
                        });
                        _this.SUBRULE(_this.charsetName);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION78(function () {
                            _this.CONSUME2(Tokens.DEFAULT);
                        });
                        _this.CONSUME(Tokens.COLLATE);
                        _this.OPTION79(function () {
                            _this.CONSUME20(Tokens.OP);
                        });
                        _this.SUBRULE(_this.collationName);
                    },
                },
            ]);
        });
        _this.RULE('ownerStatement', function () {
            _this.CONSUME(Tokens.DEFINER);
            _this.CONSUME21(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.userName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_USER);
                        _this.OPTION80(function () {
                            _this.CONSUME6(Tokens.OP);
                            _this.CONSUME6(Tokens.OP);
                        });
                    },
                },
            ]);
        });
        _this.RULE('scheduleExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AT);
                        _this.SUBRULE(_this.timestampValue);
                        _this.MANY11(function () {
                            _this.SUBRULE(_this.intervalExpr);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVERY);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.decimalLiteral);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.expression);
                                },
                            },
                        ]);
                        _this.SUBRULE(_this.intervalType);
                        _this.OPTION81(function () {
                            _this.CONSUME(Tokens.STARTS);
                            _this.SUBRULE(_this.start);
                            _this.MANY12(function () {
                                _this.SUBRULE(_this.startIntervals);
                            });
                        });
                        _this.OPTION82(function () {
                            _this.CONSUME(Tokens.ENDS);
                            _this.SUBRULE(_this.end);
                            _this.MANY13(function () {
                                _this.SUBRULE(_this.endIntervals);
                            });
                        });
                    },
                },
            ]);
        });
        _this.RULE('timestampValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURRENT_TIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.stringLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.expression);
                    },
                },
            ]);
        });
        _this.RULE('intervalExpr', function () {
            _this.CONSUME(Tokens.OP);
            _this.CONSUME(Tokens.INTERVAL);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.expression);
                    },
                },
            ]);
            _this.SUBRULE2(_this.intervalType);
        });
        _this.RULE('intervalType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.intervalTypeBase);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEAR_MONTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_MINUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_SECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_MINUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_SECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE_SECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECOND_MICROSECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE_MICROSECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR_MICROSECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAY_MICROSECOND);
                    },
                },
            ]);
        });
        _this.RULE('enableType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DISABLE);
                        _this.CONSUME5(Tokens.ON);
                        _this.CONSUME(Tokens.SLAVE);
                    },
                },
            ]);
        });
        _this.RULE('indexType', function () {
            _this.CONSUME(Tokens.USING);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BTREE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HASH);
                    },
                },
            ]);
        });
        _this.RULE('indexOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEY_BLOCK_SIZE);
                        _this.OPTION83(function () {
                            _this.CONSUME22(Tokens.OP);
                        });
                        _this.SUBRULE(_this.fileSizeLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.indexType);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.WITH);
                        _this.CONSUME(Tokens.PARSER);
                        _this.SUBRULE10(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.COMMENT);
                        _this.CONSUME2(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('procedureParameter', function () {
            _this.SUBRULE(_this.direction);
            _this.SUBRULE11(_this.uid);
            _this.SUBRULE2(_this.dataType);
        });
        _this.RULE('functionParameter', function () {
            _this.SUBRULE12(_this.uid);
            _this.SUBRULE3(_this.dataType);
        });
        _this.RULE('routineOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.COMMENT);
                        _this.CONSUME3(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LANGUAGE);
                        _this.CONSUME2(Tokens.SQL);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION84(function () {
                            _this.CONSUME2(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.DETERMINISTIC);
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CONTAINS);
                                    _this.CONSUME3(Tokens.SQL);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.NO);
                                    _this.CONSUME4(Tokens.SQL);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.READS);
                                    _this.CONSUME5(Tokens.SQL);
                                    _this.CONSUME2(Tokens.DATA);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MODIFIES);
                                    _this.CONSUME6(Tokens.SQL);
                                    _this.CONSUME3(Tokens.DATA);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.SQL);
                        _this.CONSUME2(Tokens.SECURITY);
                        _this.SUBRULE(_this.context);
                    },
                },
            ]);
        });
        _this.RULE('serverOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOST);
                        _this.CONSUME4(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATABASE);
                        _this.CONSUME5(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USER);
                        _this.CONSUME6(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PASSWORD);
                        _this.CONSUME7(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOCKET);
                        _this.CONSUME8(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OWNER);
                        _this.CONSUME9(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PORT);
                        _this.SUBRULE4(_this.decimalLiteral);
                    },
                },
            ]);
        });
        _this.RULE('createDefinitions', function () {
            _this.CONSUME7(Tokens.OP);
            _this.SUBRULE(_this.createDefinition);
            _this.MANY14(function () {
                _this.CONSUME6(Tokens.OP);
                _this.SUBRULE2(_this.createDefinition);
            });
            _this.CONSUME7(Tokens.OP);
        });
        _this.RULE('createDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE13(_this.uid);
                        _this.SUBRULE(_this.columnDefinition);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.tableConstraint);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.indexColumnDefinition);
                    },
                },
            ]);
        });
        _this.RULE('columnDefinition', function () {
            _this.SUBRULE4(_this.dataType);
            _this.MANY15(function () {
                _this.SUBRULE(_this.columnConstraint);
            });
        });
        _this.RULE('columnConstraint', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.nullNotnull);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.DEFAULT);
                        _this.SUBRULE(_this.defaultValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTO_INCREMENT);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION85(function () {
                            _this.CONSUME(Tokens.PRIMARY);
                        });
                        _this.CONSUME(Tokens.KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNIQUE);
                        _this.OPTION86(function () {
                            _this.CONSUME2(Tokens.KEY);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.COMMENT);
                        _this.CONSUME10(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLUMN_FORMAT);
                        _this.SUBRULE(_this.colformat);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STORAGE);
                        _this.SUBRULE(_this.storageval);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.referenceDefinition);
                    },
                },
            ]);
        });
        _this.RULE('tableConstraint', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION87(function () {
                            _this.CONSUME(Tokens.CONSTRAINT);
                            _this.OPTION88(function () {
                                _this.SUBRULE(_this.name);
                            });
                        });
                        _this.CONSUME2(Tokens.PRIMARY);
                        _this.CONSUME3(Tokens.KEY);
                        _this.OPTION89(function () {
                            _this.SUBRULE3(_this.indexType);
                        });
                        _this.SUBRULE2(_this.indexColumnNames);
                        _this.MANY16(function () {
                            _this.SUBRULE2(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION90(function () {
                            _this.CONSUME2(Tokens.CONSTRAINT);
                            _this.OPTION91(function () {
                                _this.SUBRULE2(_this.name);
                            });
                        });
                        _this.CONSUME2(Tokens.UNIQUE);
                        _this.OPTION92(function () {
                            _this.SUBRULE(_this.indexFormat);
                        });
                        _this.OPTION93(function () {
                            _this.SUBRULE(_this.index);
                        });
                        _this.OPTION94(function () {
                            _this.SUBRULE4(_this.indexType);
                        });
                        _this.SUBRULE3(_this.indexColumnNames);
                        _this.MANY17(function () {
                            _this.SUBRULE3(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION95(function () {
                            _this.CONSUME3(Tokens.CONSTRAINT);
                            _this.OPTION96(function () {
                                _this.SUBRULE3(_this.name);
                            });
                        });
                        _this.CONSUME2(Tokens.FOREIGN);
                        _this.CONSUME4(Tokens.KEY);
                        _this.OPTION97(function () {
                            _this.SUBRULE2(_this.index);
                        });
                        _this.SUBRULE4(_this.indexColumnNames);
                        _this.SUBRULE2(_this.referenceDefinition);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CHECK);
                        _this.CONSUME8(Tokens.OP);
                        _this.SUBRULE4(_this.expression);
                        _this.CONSUME8(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('referenceDefinition', function () {
            _this.CONSUME(Tokens.REFERENCES);
            _this.SUBRULE7(_this.tableName);
            _this.SUBRULE5(_this.indexColumnNames);
            _this.OPTION98(function () {
                _this.CONSUME(Tokens.MATCH);
                _this.SUBRULE(_this.matchType);
            });
            _this.OPTION99(function () {
                _this.SUBRULE(_this.referenceAction);
            });
        });
        _this.RULE('referenceAction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.ON);
                        _this.CONSUME(Tokens.DELETE);
                        _this.SUBRULE(_this.onDelete);
                        _this.OPTION100(function () {
                            _this.CONSUME7(Tokens.ON);
                            _this.CONSUME(Tokens.UPDATE);
                            _this.SUBRULE(_this.onUpdate);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.ON);
                        _this.CONSUME2(Tokens.UPDATE);
                        _this.SUBRULE2(_this.onUpdate);
                        _this.OPTION101(function () {
                            _this.CONSUME9(Tokens.ON);
                            _this.CONSUME2(Tokens.DELETE);
                            _this.SUBRULE2(_this.onDelete);
                        });
                    },
                },
            ]);
        });
        _this.RULE('referenceControlType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RESTRICT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASCADE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SET);
                        _this.CONSUME(Tokens.NULL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.NO);
                        _this.CONSUME(Tokens.ACTION);
                    },
                },
            ]);
        });
        _this.RULE('indexColumnDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.indexFormat);
                        _this.OPTION102(function () {
                            _this.SUBRULE14(_this.uid);
                        });
                        _this.OPTION103(function () {
                            _this.SUBRULE5(_this.indexType);
                        });
                        _this.SUBRULE6(_this.indexColumnNames);
                        _this.MANY18(function () {
                            _this.SUBRULE4(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.FULLTEXT);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SPATIAL);
                                },
                            },
                        ]);
                        _this.OPTION104(function () {
                            _this.SUBRULE3(_this.indexFormat);
                        });
                        _this.OPTION105(function () {
                            _this.SUBRULE15(_this.uid);
                        });
                        _this.SUBRULE7(_this.indexColumnNames);
                        _this.MANY19(function () {
                            _this.SUBRULE5(_this.indexOption);
                        });
                    },
                },
            ]);
        });
        _this.RULE('tableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.ENGINE);
                        _this.OPTION106(function () {
                            _this.CONSUME23(Tokens.OP);
                        });
                        _this.SUBRULE4(_this.engineName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AUTO_INCREMENT);
                        _this.OPTION107(function () {
                            _this.CONSUME24(Tokens.OP);
                        });
                        _this.SUBRULE5(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AVG_ROW_LENGTH);
                        _this.OPTION108(function () {
                            _this.CONSUME25(Tokens.OP);
                        });
                        _this.SUBRULE6(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION109(function () {
                            _this.CONSUME4(Tokens.DEFAULT);
                        });
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.CHARACTER);
                                    _this.CONSUME3(Tokens.SET);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CHARSET);
                                },
                            },
                        ]);
                        _this.OPTION110(function () {
                            _this.CONSUME26(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.charsetName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHECKSUM);
                        _this.OPTION111(function () {
                            _this.CONSUME27(Tokens.OP);
                        });
                        _this.SUBRULE(_this.boolValue);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION112(function () {
                            _this.CONSUME5(Tokens.DEFAULT);
                        });
                        _this.CONSUME2(Tokens.COLLATE);
                        _this.OPTION113(function () {
                            _this.CONSUME28(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.collationName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.COMMENT);
                        _this.OPTION114(function () {
                            _this.CONSUME29(Tokens.OP);
                        });
                        _this.CONSUME11(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESSION);
                        _this.OPTION115(function () {
                            _this.CONSUME30(Tokens.OP);
                        });
                        _this.CONSUME12(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONNECTION);
                        _this.OPTION116(function () {
                            _this.CONSUME31(Tokens.OP);
                        });
                        _this.CONSUME13(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.DATA);
                        _this.CONSUME(Tokens.DIRECTORY);
                        _this.OPTION117(function () {
                            _this.CONSUME32(Tokens.OP);
                        });
                        _this.CONSUME14(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DELAY_KEY_WRITE);
                        _this.OPTION118(function () {
                            _this.CONSUME33(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.boolValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCRYPTION);
                        _this.OPTION119(function () {
                            _this.CONSUME34(Tokens.OP);
                        });
                        _this.CONSUME15(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INDEX);
                        _this.CONSUME2(Tokens.DIRECTORY);
                        _this.OPTION120(function () {
                            _this.CONSUME35(Tokens.OP);
                        });
                        _this.CONSUME16(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSERT_METHOD);
                        _this.OPTION121(function () {
                            _this.CONSUME36(Tokens.OP);
                        });
                        _this.SUBRULE(_this.insertMethod);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.KEY_BLOCK_SIZE);
                        _this.OPTION122(function () {
                            _this.CONSUME37(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.fileSizeLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_ROWS);
                        _this.OPTION123(function () {
                            _this.CONSUME38(Tokens.OP);
                        });
                        _this.SUBRULE7(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MIN_ROWS);
                        _this.OPTION124(function () {
                            _this.CONSUME39(Tokens.OP);
                        });
                        _this.SUBRULE8(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PACK_KEYS);
                        _this.OPTION125(function () {
                            _this.CONSUME40(Tokens.OP);
                        });
                        _this.SUBRULE(_this.extBoolValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PASSWORD);
                        _this.OPTION126(function () {
                            _this.CONSUME41(Tokens.OP);
                        });
                        _this.CONSUME17(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW_FORMAT);
                        _this.OPTION127(function () {
                            _this.CONSUME42(Tokens.OP);
                        });
                        _this.SUBRULE(_this.rowFormat);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_AUTO_RECALC);
                        _this.OPTION128(function () {
                            _this.CONSUME43(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.extBoolValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_PERSISTENT);
                        _this.OPTION129(function () {
                            _this.CONSUME44(Tokens.OP);
                        });
                        _this.SUBRULE3(_this.extBoolValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STATS_SAMPLE_PAGES);
                        _this.OPTION130(function () {
                            _this.CONSUME45(Tokens.OP);
                        });
                        _this.SUBRULE9(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.TABLESPACE);
                        _this.SUBRULE16(_this.uid);
                        _this.OPTION131(function () {
                            _this.SUBRULE(_this.tablespaceStorage);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNION);
                        _this.OPTION132(function () {
                            _this.CONSUME46(Tokens.OP);
                        });
                        _this.CONSUME9(Tokens.OP);
                        _this.SUBRULE(_this.tables);
                        _this.CONSUME9(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('tablespaceStorage', function () {
            _this.CONSUME2(Tokens.STORAGE);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEMORY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.DEFAULT);
                    },
                },
            ]);
        });
        _this.RULE('partitionDefinitions', function () {
            _this.CONSUME(Tokens.PARTITION);
            _this.CONSUME(Tokens.BY);
            _this.SUBRULE(_this.partitionFunctionDefinition);
            _this.OPTION133(function () {
                _this.CONSUME(Tokens.PARTITIONS);
                _this.SUBRULE(_this.count);
            });
            _this.OPTION134(function () {
                _this.CONSUME(Tokens.SUBPARTITION);
                _this.CONSUME2(Tokens.BY);
                _this.SUBRULE(_this.subpartitionFunctionDefinition);
                _this.OPTION135(function () {
                    _this.CONSUME(Tokens.SUBPARTITIONS);
                    _this.SUBRULE(_this.subCount);
                });
            });
            _this.OPTION136(function () {
                _this.CONSUME10(Tokens.OP);
                _this.SUBRULE(_this.partitionDefinition);
                _this.MANY20(function () {
                    _this.CONSUME7(Tokens.OP);
                    _this.SUBRULE2(_this.partitionDefinition);
                });
                _this.CONSUME10(Tokens.OP);
            });
        });
        _this.RULE('partitionFunctionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION137(function () {
                            _this.CONSUME(Tokens.LINEAR);
                        });
                        _this.CONSUME2(Tokens.HASH);
                        _this.CONSUME11(Tokens.OP);
                        _this.SUBRULE5(_this.expression);
                        _this.CONSUME11(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION138(function () {
                            _this.CONSUME2(Tokens.LINEAR);
                        });
                        _this.CONSUME5(Tokens.KEY);
                        _this.OPTION139(function () {
                            _this.CONSUME3(Tokens.ALGORITHM);
                            _this.CONSUME47(Tokens.OP);
                            _this.SUBRULE3(_this.algType);
                        });
                        _this.CONSUME12(Tokens.OP);
                        _this.SUBRULE2(_this.uidList);
                        _this.CONSUME12(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RANGE);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME13(Tokens.OP);
                                    _this.SUBRULE6(_this.expression);
                                    _this.CONSUME13(Tokens.OP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.COLUMNS);
                                    _this.CONSUME14(Tokens.OP);
                                    _this.SUBRULE3(_this.uidList);
                                    _this.CONSUME14(Tokens.OP);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LIST);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME15(Tokens.OP);
                                    _this.SUBRULE7(_this.expression);
                                    _this.CONSUME15(Tokens.OP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.COLUMNS);
                                    _this.CONSUME16(Tokens.OP);
                                    _this.SUBRULE4(_this.uidList);
                                    _this.CONSUME16(Tokens.OP);
                                },
                            },
                        ]);
                    },
                },
            ]);
        });
        _this.RULE('subpartitionFunctionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION140(function () {
                            _this.CONSUME3(Tokens.LINEAR);
                        });
                        _this.CONSUME3(Tokens.HASH);
                        _this.CONSUME17(Tokens.OP);
                        _this.SUBRULE8(_this.expression);
                        _this.CONSUME17(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION141(function () {
                            _this.CONSUME4(Tokens.LINEAR);
                        });
                        _this.CONSUME6(Tokens.KEY);
                        _this.OPTION142(function () {
                            _this.CONSUME4(Tokens.ALGORITHM);
                            _this.CONSUME48(Tokens.OP);
                            _this.SUBRULE4(_this.algType);
                        });
                        _this.CONSUME18(Tokens.OP);
                        _this.SUBRULE5(_this.uidList);
                        _this.CONSUME18(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('partitionDefinition', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PARTITION);
                        _this.SUBRULE17(_this.uid);
                        _this.CONSUME(Tokens.VALUES);
                        _this.CONSUME(Tokens.LESS);
                        _this.CONSUME(Tokens.THAN);
                        _this.CONSUME19(Tokens.OP);
                        _this.SUBRULE(_this.partitionDefinerAtom);
                        _this.MANY21(function () {
                            _this.CONSUME8(Tokens.OP);
                            _this.SUBRULE2(_this.partitionDefinerAtom);
                        });
                        _this.CONSUME19(Tokens.OP);
                        _this.MANY22(function () {
                            _this.SUBRULE(_this.partitionOption);
                        });
                        _this.OPTION143(function () {
                            _this.SUBRULE(_this.subpartitionDefinition);
                            _this.MANY23(function () {
                                _this.CONSUME9(Tokens.OP);
                                _this.SUBRULE2(_this.subpartitionDefinition);
                            });
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PARTITION);
                        _this.SUBRULE18(_this.uid);
                        _this.CONSUME2(Tokens.VALUES);
                        _this.CONSUME(Tokens.IN);
                        _this.CONSUME20(Tokens.OP);
                        _this.SUBRULE3(_this.partitionDefinerAtom);
                        _this.MANY24(function () {
                            _this.CONSUME10(Tokens.OP);
                            _this.SUBRULE4(_this.partitionDefinerAtom);
                        });
                        _this.CONSUME20(Tokens.OP);
                        _this.MANY25(function () {
                            _this.SUBRULE2(_this.partitionOption);
                        });
                        _this.OPTION144(function () {
                            _this.SUBRULE3(_this.subpartitionDefinition);
                            _this.MANY26(function () {
                                _this.CONSUME11(Tokens.OP);
                                _this.SUBRULE4(_this.subpartitionDefinition);
                            });
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.PARTITION);
                        _this.SUBRULE19(_this.uid);
                        _this.CONSUME3(Tokens.VALUES);
                        _this.CONSUME2(Tokens.IN);
                        _this.CONSUME21(Tokens.OP);
                        _this.SUBRULE(_this.partitionDefinerVector);
                        _this.MANY27(function () {
                            _this.CONSUME12(Tokens.OP);
                            _this.SUBRULE2(_this.partitionDefinerVector);
                        });
                        _this.CONSUME21(Tokens.OP);
                        _this.MANY28(function () {
                            _this.SUBRULE3(_this.partitionOption);
                        });
                        _this.OPTION145(function () {
                            _this.SUBRULE5(_this.subpartitionDefinition);
                            _this.MANY29(function () {
                                _this.CONSUME13(Tokens.OP);
                                _this.SUBRULE6(_this.subpartitionDefinition);
                            });
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.PARTITION);
                        _this.SUBRULE20(_this.uid);
                        _this.MANY30(function () {
                            _this.SUBRULE4(_this.partitionOption);
                        });
                        _this.OPTION146(function () {
                            _this.SUBRULE7(_this.subpartitionDefinition);
                            _this.MANY31(function () {
                                _this.CONSUME14(Tokens.OP);
                                _this.SUBRULE8(_this.subpartitionDefinition);
                            });
                        });
                    },
                },
            ]);
        });
        _this.RULE('partitionDefinerAtom', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAXVALUE);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE9(_this.expression);
                    },
                },
            ]);
        });
        _this.RULE('partitionDefinerVector', function () {
            _this.CONSUME22(Tokens.OP);
            _this.SUBRULE5(_this.partitionDefinerAtom);
            _this.AT_LEAST_ONE(function () {
                _this.CONSUME15(Tokens.OP);
                _this.SUBRULE6(_this.partitionDefinerAtom);
            });
            _this.CONSUME22(Tokens.OP);
        });
        _this.RULE('subpartitionDefinition', function () {
            _this.CONSUME2(Tokens.SUBPARTITION);
            _this.SUBRULE21(_this.uid);
            _this.MANY32(function () {
                _this.SUBRULE5(_this.partitionOption);
            });
        });
        _this.RULE('partitionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION147(function () {
                            _this.CONSUME3(Tokens.STORAGE);
                        });
                        _this.CONSUME5(Tokens.ENGINE);
                        _this.OPTION148(function () {
                            _this.CONSUME49(Tokens.OP);
                        });
                        _this.SUBRULE5(_this.engineName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.COMMENT);
                        _this.OPTION149(function () {
                            _this.CONSUME50(Tokens.OP);
                        });
                        _this.SUBRULE3(_this.comment);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.DATA);
                        _this.CONSUME3(Tokens.DIRECTORY);
                        _this.OPTION150(function () {
                            _this.CONSUME51(Tokens.OP);
                        });
                        _this.SUBRULE(_this.dataDirectory);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.INDEX);
                        _this.CONSUME4(Tokens.DIRECTORY);
                        _this.OPTION151(function () {
                            _this.CONSUME52(Tokens.OP);
                        });
                        _this.SUBRULE(_this.indexDirectory);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_ROWS);
                        _this.OPTION152(function () {
                            _this.CONSUME53(Tokens.OP);
                        });
                        _this.SUBRULE(_this.maxRows);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MIN_ROWS);
                        _this.OPTION153(function () {
                            _this.CONSUME54(Tokens.OP);
                        });
                        _this.SUBRULE(_this.minRows);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.TABLESPACE);
                        _this.OPTION154(function () {
                            _this.CONSUME55(Tokens.OP);
                        });
                        _this.SUBRULE(_this.tablespace);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.NODEGROUP);
                        _this.OPTION155(function () {
                            _this.CONSUME56(Tokens.OP);
                        });
                        _this.SUBRULE(_this.nodegroup);
                    },
                },
            ]);
        });
        _this.RULE('alterDatabase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ALTER);
                        _this.SUBRULE2(_this.dbFormat);
                        _this.OPTION156(function () {
                            _this.SUBRULE22(_this.uid);
                        });
                        _this.AT_LEAST_ONE2(function () {
                            _this.SUBRULE2(_this.createDatabaseOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ALTER);
                        _this.SUBRULE3(_this.dbFormat);
                        _this.SUBRULE23(_this.uid);
                        _this.CONSUME(Tokens.UPGRADE);
                        _this.CONSUME6(Tokens.DATA);
                        _this.CONSUME5(Tokens.DIRECTORY);
                        _this.CONSUME(Tokens.NAME);
                    },
                },
            ]);
        });
        _this.RULE('alterEvent', function () {
            _this.CONSUME3(Tokens.ALTER);
            _this.OPTION157(function () {
                _this.SUBRULE6(_this.ownerStatement);
            });
            _this.CONSUME2(Tokens.EVENT);
            _this.SUBRULE5(_this.fullId);
            _this.OPTION158(function () {
                _this.CONSUME10(Tokens.ON);
                _this.CONSUME2(Tokens.SCHEDULE);
                _this.SUBRULE2(_this.scheduleExpression);
            });
            _this.OPTION159(function () {
                _this.CONSUME11(Tokens.ON);
                _this.CONSUME2(Tokens.COMPLETION);
                _this.OPTION160(function () {
                    _this.CONSUME3(Tokens.NOT);
                });
                _this.CONSUME2(Tokens.PRESERVE);
            });
            _this.OPTION161(function () {
                _this.CONSUME(Tokens.RENAME);
                _this.CONSUME(Tokens.TO);
                _this.SUBRULE6(_this.fullId);
            });
            _this.OPTION162(function () {
                _this.SUBRULE2(_this.enableType);
            });
            _this.OPTION163(function () {
                _this.CONSUME9(Tokens.COMMENT);
                _this.CONSUME18(Tokens.STRING_LITERAL);
            });
            _this.OPTION164(function () {
                _this.CONSUME2(Tokens.DO);
                _this.SUBRULE5(_this.routineBody);
            });
        });
        _this.RULE('alterFunction', function () {
            _this.CONSUME4(Tokens.ALTER);
            _this.CONSUME2(Tokens.FUNCTION);
            _this.SUBRULE7(_this.fullId);
            _this.MANY33(function () {
                _this.SUBRULE3(_this.routineOption);
            });
        });
        _this.RULE('alterInstance', function () {
            _this.CONSUME5(Tokens.ALTER);
            _this.CONSUME(Tokens.INSTANCE);
            _this.CONSUME(Tokens.ROTATE);
            _this.CONSUME(Tokens.INNODB);
            _this.CONSUME(Tokens.MASTER);
            _this.CONSUME7(Tokens.KEY);
        });
        _this.RULE('alterLogfileGroup', function () {
            _this.CONSUME6(Tokens.ALTER);
            _this.CONSUME3(Tokens.LOGFILE);
            _this.CONSUME3(Tokens.GROUP);
            _this.SUBRULE24(_this.uid);
            _this.CONSUME4(Tokens.ADD);
            _this.CONSUME2(Tokens.UNDOFILE);
            _this.CONSUME19(Tokens.STRING_LITERAL);
            _this.OPTION165(function () {
                _this.CONSUME3(Tokens.INITIAL_SIZE);
                _this.OPTION166(function () {
                    _this.CONSUME57(Tokens.OP);
                });
                _this.SUBRULE3(_this.fileSizeLiteral);
            });
            _this.OPTION167(function () {
                _this.CONSUME3(Tokens.WAIT);
            });
            _this.CONSUME6(Tokens.ENGINE);
            _this.OPTION168(function () {
                _this.CONSUME58(Tokens.OP);
            });
            _this.SUBRULE6(_this.engineName);
        });
        _this.RULE('alterProcedure', function () {
            _this.CONSUME7(Tokens.ALTER);
            _this.CONSUME2(Tokens.PROCEDURE);
            _this.SUBRULE8(_this.fullId);
            _this.MANY34(function () {
                _this.SUBRULE4(_this.routineOption);
            });
        });
        _this.RULE('alterServer', function () {
            _this.CONSUME8(Tokens.ALTER);
            _this.CONSUME2(Tokens.SERVER);
            _this.SUBRULE25(_this.uid);
            _this.CONSUME2(Tokens.OPTIONS);
            _this.CONSUME23(Tokens.OP);
            _this.SUBRULE3(_this.serverOption);
            _this.MANY35(function () {
                _this.CONSUME16(Tokens.OP);
                _this.SUBRULE4(_this.serverOption);
            });
            _this.CONSUME23(Tokens.OP);
        });
        _this.RULE('alterTable', function () {
            _this.CONSUME9(Tokens.ALTER);
            _this.OPTION169(function () {
                _this.SUBRULE2(_this.intimeAction);
            });
            _this.OPTION170(function () {
                _this.CONSUME(Tokens.IGNORE);
            });
            _this.CONSUME4(Tokens.TABLE);
            _this.SUBRULE8(_this.tableName);
            _this.SUBRULE(_this.alterSpecification);
            _this.MANY36(function () {
                _this.CONSUME17(Tokens.OP);
                _this.SUBRULE2(_this.alterSpecification);
            });
            _this.OPTION171(function () {
                _this.SUBRULE3(_this.partitionDefinitions);
            });
        });
        _this.RULE('alterTablespace', function () {
            _this.CONSUME10(Tokens.ALTER);
            _this.CONSUME5(Tokens.TABLESPACE);
            _this.SUBRULE26(_this.uid);
            _this.SUBRULE(_this.objectAction);
            _this.CONSUME3(Tokens.DATAFILE);
            _this.CONSUME20(Tokens.STRING_LITERAL);
            _this.OPTION172(function () {
                _this.CONSUME4(Tokens.INITIAL_SIZE);
                _this.CONSUME59(Tokens.OP);
                _this.SUBRULE4(_this.fileSizeLiteral);
            });
            _this.OPTION173(function () {
                _this.CONSUME4(Tokens.WAIT);
            });
            _this.CONSUME7(Tokens.ENGINE);
            _this.OPTION174(function () {
                _this.CONSUME60(Tokens.OP);
            });
            _this.SUBRULE7(_this.engineName);
        });
        _this.RULE('alterView', function () {
            _this.CONSUME11(Tokens.ALTER);
            _this.OPTION175(function () {
                _this.CONSUME5(Tokens.ALGORITHM);
                _this.CONSUME61(Tokens.OP);
                _this.SUBRULE5(_this.algType);
            });
            _this.OPTION176(function () {
                _this.SUBRULE7(_this.ownerStatement);
            });
            _this.OPTION177(function () {
                _this.CONSUME8(Tokens.SQL);
                _this.CONSUME3(Tokens.SECURITY);
                _this.SUBRULE2(_this.secContext);
            });
            _this.CONSUME2(Tokens.VIEW);
            _this.SUBRULE9(_this.fullId);
            _this.OPTION178(function () {
                _this.CONSUME24(Tokens.OP);
                _this.SUBRULE6(_this.uidList);
                _this.CONSUME24(Tokens.OP);
            });
            _this.CONSUME3(Tokens.AS);
            _this.SUBRULE4(_this.selectStatement);
            _this.OPTION179(function () {
                _this.CONSUME3(Tokens.WITH);
                _this.OPTION180(function () {
                    _this.SUBRULE(_this.checkOpt);
                });
                _this.CONSUME3(Tokens.CHECK);
                _this.CONSUME2(Tokens.OPTION);
            });
        });
        _this.RULE('alterSpecification', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.tableOption);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.ADD);
                        _this.OPTION181(function () {
                            _this.CONSUME(Tokens.COLUMN);
                        });
                        _this.SUBRULE27(_this.uid);
                        _this.SUBRULE2(_this.columnDefinition);
                        _this.OPTION182(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.FIRST);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.AFTER);
                                        _this.SUBRULE28(_this.uid);
                                    },
                                },
                            ]);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.ADD);
                        _this.OPTION183(function () {
                            _this.CONSUME2(Tokens.COLUMN);
                        });
                        _this.CONSUME25(Tokens.OP);
                        _this.SUBRULE29(_this.uid);
                        _this.SUBRULE3(_this.columnDefinition);
                        _this.MANY37(function () {
                            _this.CONSUME18(Tokens.OP);
                            _this.SUBRULE30(_this.uid);
                            _this.SUBRULE4(_this.columnDefinition);
                        });
                        _this.CONSUME25(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.ADD);
                        _this.SUBRULE4(_this.indexFormat);
                        _this.OPTION184(function () {
                            _this.SUBRULE31(_this.uid);
                        });
                        _this.OPTION185(function () {
                            _this.SUBRULE6(_this.indexType);
                        });
                        _this.SUBRULE8(_this.indexColumnNames);
                        _this.MANY38(function () {
                            _this.SUBRULE6(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.ADD);
                        _this.OPTION186(function () {
                            _this.CONSUME4(Tokens.CONSTRAINT);
                            _this.OPTION187(function () {
                                _this.SUBRULE4(_this.name);
                            });
                        });
                        _this.CONSUME3(Tokens.PRIMARY);
                        _this.CONSUME8(Tokens.KEY);
                        _this.OPTION188(function () {
                            _this.SUBRULE7(_this.indexType);
                        });
                        _this.SUBRULE9(_this.indexColumnNames);
                        _this.MANY39(function () {
                            _this.SUBRULE7(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.ADD);
                        _this.OPTION189(function () {
                            _this.CONSUME5(Tokens.CONSTRAINT);
                            _this.OPTION190(function () {
                                _this.SUBRULE5(_this.name);
                            });
                        });
                        _this.CONSUME3(Tokens.UNIQUE);
                        _this.OPTION191(function () {
                            _this.SUBRULE5(_this.indexFormat);
                        });
                        _this.OPTION192(function () {
                            _this.SUBRULE(_this.indexName);
                        });
                        _this.OPTION193(function () {
                            _this.SUBRULE8(_this.indexType);
                        });
                        _this.SUBRULE10(_this.indexColumnNames);
                        _this.MANY40(function () {
                            _this.SUBRULE8(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.ADD);
                        _this.SUBRULE(_this.keyType);
                        _this.OPTION194(function () {
                            _this.SUBRULE6(_this.indexFormat);
                        });
                        _this.OPTION195(function () {
                            _this.SUBRULE32(_this.uid);
                        });
                        _this.SUBRULE11(_this.indexColumnNames);
                        _this.MANY41(function () {
                            _this.SUBRULE9(_this.indexOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME11(Tokens.ADD);
                        _this.OPTION196(function () {
                            _this.CONSUME6(Tokens.CONSTRAINT);
                            _this.OPTION197(function () {
                                _this.SUBRULE6(_this.name);
                            });
                        });
                        _this.CONSUME3(Tokens.FOREIGN);
                        _this.CONSUME9(Tokens.KEY);
                        _this.OPTION198(function () {
                            _this.SUBRULE2(_this.indexName);
                        });
                        _this.SUBRULE12(_this.indexColumnNames);
                        _this.SUBRULE3(_this.referenceDefinition);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.ALGORITHM);
                        _this.OPTION199(function () {
                            _this.CONSUME62(Tokens.OP);
                        });
                        _this.SUBRULE6(_this.algType);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.ALTER);
                        _this.OPTION200(function () {
                            _this.CONSUME3(Tokens.COLUMN);
                        });
                        _this.SUBRULE33(_this.uid);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.SET);
                                    _this.CONSUME7(Tokens.DEFAULT);
                                    _this.SUBRULE2(_this.defaultValue);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DROP);
                                    _this.CONSUME8(Tokens.DEFAULT);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHANGE);
                        _this.OPTION201(function () {
                            _this.CONSUME4(Tokens.COLUMN);
                        });
                        _this.SUBRULE(_this.oldColumn);
                        _this.SUBRULE(_this.newColumn);
                        _this.SUBRULE5(_this.columnDefinition);
                        _this.OPTION202(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.FIRST);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.AFTER);
                                        _this.SUBRULE(_this.afterColumn);
                                    },
                                },
                            ]);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LOCK);
                        _this.OPTION203(function () {
                            _this.CONSUME63(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.lockType);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MODIFY);
                        _this.OPTION204(function () {
                            _this.CONSUME5(Tokens.COLUMN);
                        });
                        _this.SUBRULE34(_this.uid);
                        _this.SUBRULE6(_this.columnDefinition);
                        _this.OPTION205(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME3(Tokens.FIRST);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME3(Tokens.AFTER);
                                        _this.SUBRULE35(_this.uid);
                                    },
                                },
                            ]);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DROP);
                        _this.OPTION206(function () {
                            _this.CONSUME6(Tokens.COLUMN);
                        });
                        _this.SUBRULE36(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.DROP);
                        _this.CONSUME4(Tokens.PRIMARY);
                        _this.CONSUME10(Tokens.KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.DROP);
                        _this.SUBRULE7(_this.indexFormat);
                        _this.SUBRULE37(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.DROP);
                        _this.CONSUME4(Tokens.FOREIGN);
                        _this.CONSUME11(Tokens.KEY);
                        _this.SUBRULE38(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.DISABLE);
                        _this.CONSUME(Tokens.KEYS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ENABLE);
                        _this.CONSUME2(Tokens.KEYS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.RENAME);
                        _this.OPTION207(function () {
                            _this.SUBRULE(_this.renameFormat);
                        });
                        _this.SUBRULE39(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ORDER);
                        _this.CONSUME3(Tokens.BY);
                        _this.SUBRULE7(_this.uidList);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT);
                        _this.CONSUME2(Tokens.TO);
                        _this.CONSUME3(Tokens.CHARACTER);
                        _this.CONSUME5(Tokens.SET);
                        _this.SUBRULE3(_this.charsetName);
                        _this.OPTION208(function () {
                            _this.CONSUME3(Tokens.COLLATE);
                            _this.SUBRULE3(_this.collationName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION209(function () {
                            _this.CONSUME9(Tokens.DEFAULT);
                        });
                        _this.CONSUME4(Tokens.CHARACTER);
                        _this.CONSUME6(Tokens.SET);
                        _this.CONSUME64(Tokens.OP);
                        _this.SUBRULE4(_this.charsetName);
                        _this.OPTION210(function () {
                            _this.CONSUME4(Tokens.COLLATE);
                            _this.CONSUME65(Tokens.OP);
                            _this.SUBRULE4(_this.collationName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISCARD);
                        _this.CONSUME6(Tokens.TABLESPACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IMPORT);
                        _this.CONSUME7(Tokens.TABLESPACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FORCE);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.validationFormat);
                        _this.CONSUME(Tokens.VALIDATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.ADD);
                        _this.CONSUME6(Tokens.PARTITION);
                        _this.SUBRULE3(_this.partitionDefinition);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.DROP);
                        _this.CONSUME7(Tokens.PARTITION);
                        _this.SUBRULE8(_this.uidList);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DISCARD);
                        _this.CONSUME8(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE9(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.ALL);
                                },
                            },
                        ]);
                        _this.CONSUME8(Tokens.TABLESPACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.IMPORT);
                        _this.CONSUME9(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE10(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.ALL);
                                },
                            },
                        ]);
                        _this.CONSUME9(Tokens.TABLESPACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRUNCATE);
                        _this.CONSUME10(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE11(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME3(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COALESCE);
                        _this.CONSUME11(Tokens.PARTITION);
                        _this.SUBRULE10(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REORGANIZE);
                        _this.CONSUME12(Tokens.PARTITION);
                        _this.SUBRULE12(_this.uidList);
                        _this.CONSUME(Tokens.INTO);
                        _this.CONSUME26(Tokens.OP);
                        _this.SUBRULE4(_this.partitionDefinition);
                        _this.MANY42(function () {
                            _this.CONSUME19(Tokens.OP);
                            _this.SUBRULE5(_this.partitionDefinition);
                        });
                        _this.CONSUME26(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXCHANGE);
                        _this.CONSUME13(Tokens.PARTITION);
                        _this.SUBRULE40(_this.uid);
                        _this.CONSUME4(Tokens.WITH);
                        _this.CONSUME5(Tokens.TABLE);
                        _this.SUBRULE9(_this.tableName);
                        _this.OPTION211(function () {
                            _this.SUBRULE2(_this.validationFormat);
                            _this.CONSUME2(Tokens.VALIDATION);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ANALYZE);
                        _this.CONSUME14(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE13(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.CHECK);
                        _this.CONSUME15(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE14(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME5(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OPTIMIZE);
                        _this.CONSUME16(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE15(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME6(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REBUILD);
                        _this.CONSUME17(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE16(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME7(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPAIR);
                        _this.CONSUME18(Tokens.PARTITION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE17(_this.uidList);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME8(Tokens.ALL);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REMOVE);
                        _this.CONSUME(Tokens.PARTITIONING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.UPGRADE);
                        _this.CONSUME2(Tokens.PARTITIONING);
                    },
                },
            ]);
        });
        _this.RULE('dropDatabase', function () {
            _this.CONSUME7(Tokens.DROP);
            _this.SUBRULE4(_this.dbFormat);
            _this.OPTION212(function () {
                _this.SUBRULE(_this.ifExists);
            });
            _this.SUBRULE41(_this.uid);
        });
        _this.RULE('dropEvent', function () {
            _this.CONSUME8(Tokens.DROP);
            _this.CONSUME3(Tokens.EVENT);
            _this.OPTION213(function () {
                _this.SUBRULE2(_this.ifExists);
            });
            _this.SUBRULE10(_this.fullId);
        });
        _this.RULE('dropIndex', function () {
            _this.CONSUME9(Tokens.DROP);
            _this.CONSUME4(Tokens.INDEX);
            _this.OPTION214(function () {
                _this.SUBRULE3(_this.intimeAction);
            });
            _this.SUBRULE42(_this.uid);
            _this.CONSUME12(Tokens.ON);
            _this.SUBRULE10(_this.tableName);
            _this.OPTION215(function () {
                _this.CONSUME7(Tokens.ALGORITHM);
                _this.OPTION216(function () {
                    _this.CONSUME66(Tokens.OP);
                });
                _this.SUBRULE7(_this.algType);
            });
            _this.OPTION217(function () {
                _this.CONSUME3(Tokens.LOCK);
                _this.OPTION218(function () {
                    _this.CONSUME67(Tokens.OP);
                });
                _this.SUBRULE3(_this.lockType);
            });
        });
        _this.RULE('dropLogfileGroup', function () {
            _this.CONSUME10(Tokens.DROP);
            _this.CONSUME4(Tokens.LOGFILE);
            _this.CONSUME4(Tokens.GROUP);
            _this.SUBRULE43(_this.uid);
            _this.CONSUME8(Tokens.ENGINE);
            _this.CONSUME68(Tokens.OP);
            _this.SUBRULE8(_this.engineName);
        });
        _this.RULE('dropProcedure', function () {
            _this.CONSUME11(Tokens.DROP);
            _this.CONSUME3(Tokens.PROCEDURE);
            _this.OPTION219(function () {
                _this.SUBRULE3(_this.ifExists);
            });
            _this.SUBRULE11(_this.fullId);
        });
        _this.RULE('dropFunction', function () {
            _this.CONSUME12(Tokens.DROP);
            _this.CONSUME3(Tokens.FUNCTION);
            _this.OPTION220(function () {
                _this.SUBRULE4(_this.ifExists);
            });
            _this.SUBRULE12(_this.fullId);
        });
        _this.RULE('dropServer', function () {
            _this.CONSUME13(Tokens.DROP);
            _this.CONSUME3(Tokens.SERVER);
            _this.OPTION221(function () {
                _this.SUBRULE5(_this.ifExists);
            });
            _this.SUBRULE44(_this.uid);
        });
        _this.RULE('dropTable', function () {
            _this.CONSUME14(Tokens.DROP);
            _this.OPTION222(function () {
                _this.CONSUME4(Tokens.TEMPORARY);
            });
            _this.CONSUME6(Tokens.TABLE);
            _this.OPTION223(function () {
                _this.SUBRULE6(_this.ifExists);
            });
            _this.SUBRULE2(_this.tables);
            _this.OPTION224(function () {
                _this.SUBRULE(_this.dropType);
            });
        });
        _this.RULE('dropTablespace', function () {
            _this.CONSUME15(Tokens.DROP);
            _this.CONSUME10(Tokens.TABLESPACE);
            _this.SUBRULE45(_this.uid);
            _this.OPTION225(function () {
                _this.CONSUME9(Tokens.ENGINE);
                _this.OPTION226(function () {
                    _this.CONSUME69(Tokens.OP);
                });
                _this.SUBRULE9(_this.engineName);
            });
        });
        _this.RULE('dropTrigger', function () {
            _this.CONSUME16(Tokens.DROP);
            _this.CONSUME2(Tokens.TRIGGER);
            _this.OPTION227(function () {
                _this.SUBRULE7(_this.ifExists);
            });
            _this.SUBRULE13(_this.fullId);
        });
        _this.RULE('dropView', function () {
            _this.CONSUME17(Tokens.DROP);
            _this.CONSUME3(Tokens.VIEW);
            _this.OPTION228(function () {
                _this.SUBRULE8(_this.ifExists);
            });
            _this.SUBRULE14(_this.fullId);
            _this.MANY43(function () {
                _this.CONSUME20(Tokens.OP);
                _this.SUBRULE15(_this.fullId);
            });
            _this.OPTION229(function () {
                _this.SUBRULE2(_this.dropType);
            });
        });
        _this.RULE('renameTable', function () {
            _this.CONSUME3(Tokens.RENAME);
            _this.CONSUME7(Tokens.TABLE);
            _this.SUBRULE(_this.renameTableClause);
            _this.MANY44(function () {
                _this.CONSUME21(Tokens.OP);
                _this.SUBRULE2(_this.renameTableClause);
            });
        });
        _this.RULE('renameTableClause', function () {
            _this.SUBRULE11(_this.tableName);
            _this.CONSUME3(Tokens.TO);
            _this.SUBRULE12(_this.tableName);
        });
        _this.RULE('truncateTable', function () {
            _this.CONSUME2(Tokens.TRUNCATE);
            _this.OPTION230(function () {
                _this.CONSUME8(Tokens.TABLE);
            });
            _this.SUBRULE13(_this.tableName);
        });
        _this.RULE('callStatement', function () {
            _this.CONSUME(Tokens.CALL);
            _this.SUBRULE16(_this.fullId);
            _this.OPTION231(function () {
                _this.CONSUME27(Tokens.OP);
                _this.OPTION232(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.constants);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE(_this.expressions);
                            },
                        },
                    ]);
                });
                _this.CONSUME27(Tokens.OP);
            });
        });
        _this.RULE('deleteStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.singleDeleteStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.multipleDeleteStatement);
                    },
                },
            ]);
        });
        _this.RULE('doStatement', function () {
            _this.CONSUME3(Tokens.DO);
            _this.SUBRULE2(_this.expressions);
        });
        _this.RULE('handlerStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.handlerOpenStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.handlerReadIndexStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.handlerReadStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.handlerCloseStatement);
                    },
                },
            ]);
        });
        _this.RULE('insertStatement', function () {
            _this.CONSUME(Tokens.INSERT);
            _this.OPTION233(function () {
                _this.SUBRULE(_this.priority);
            });
            _this.OPTION234(function () {
                _this.CONSUME2(Tokens.IGNORE);
            });
            _this.OPTION235(function () {
                _this.CONSUME2(Tokens.INTO);
            });
            _this.SUBRULE14(_this.tableName);
            _this.OPTION236(function () {
                _this.CONSUME19(Tokens.PARTITION);
                _this.CONSUME28(Tokens.OP);
                _this.SUBRULE(_this.partitions);
                _this.CONSUME28(Tokens.OP);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION237(function () {
                            _this.CONSUME29(Tokens.OP);
                            _this.SUBRULE(_this.columns);
                            _this.CONSUME29(Tokens.OP);
                        });
                        _this.SUBRULE(_this.insertStatementValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.SET);
                        _this.SUBRULE(_this.setFirst);
                        _this.MANY45(function () {
                            _this.CONSUME22(Tokens.OP);
                            _this.SUBRULE(_this.setElements);
                        });
                    },
                },
            ]);
            _this.OPTION238(function () {
                _this.CONSUME13(Tokens.ON);
                _this.CONSUME(Tokens.DUPLICATE);
                _this.CONSUME12(Tokens.KEY);
                _this.CONSUME3(Tokens.UPDATE);
                _this.SUBRULE(_this.duplicatedFirst);
                _this.MANY46(function () {
                    _this.CONSUME23(Tokens.OP);
                    _this.SUBRULE(_this.duplicatedElements);
                });
            });
        });
        _this.RULE('loadDataStatement', function () {
            _this.CONSUME(Tokens.LOAD);
            _this.CONSUME7(Tokens.DATA);
            _this.OPTION239(function () {
                _this.SUBRULE2(_this.priority);
            });
            _this.OPTION240(function () {
                _this.CONSUME(Tokens.LOCAL);
            });
            _this.CONSUME(Tokens.INFILE);
            _this.SUBRULE(_this.filename);
            _this.OPTION241(function () {
                _this.SUBRULE(_this.violation);
            });
            _this.CONSUME3(Tokens.INTO);
            _this.CONSUME9(Tokens.TABLE);
            _this.SUBRULE15(_this.tableName);
            _this.OPTION242(function () {
                _this.CONSUME20(Tokens.PARTITION);
                _this.CONSUME30(Tokens.OP);
                _this.SUBRULE18(_this.uidList);
                _this.CONSUME30(Tokens.OP);
            });
            _this.OPTION243(function () {
                _this.CONSUME5(Tokens.CHARACTER);
                _this.CONSUME8(Tokens.SET);
                _this.SUBRULE(_this.charset);
            });
            _this.OPTION244(function () {
                _this.SUBRULE(_this.fieldsFormat);
                _this.AT_LEAST_ONE3(function () {
                    _this.SUBRULE(_this.selectFieldsInto);
                });
            });
            _this.OPTION245(function () {
                _this.CONSUME(Tokens.LINES);
                _this.AT_LEAST_ONE4(function () {
                    _this.SUBRULE(_this.selectLinesInto);
                });
            });
            _this.OPTION246(function () {
                _this.CONSUME3(Tokens.IGNORE);
                _this.SUBRULE11(_this.decimalLiteral);
                _this.SUBRULE(_this.linesFormat);
            });
            _this.OPTION247(function () {
                _this.CONSUME31(Tokens.OP);
                _this.SUBRULE(_this.assignmentField);
                _this.MANY47(function () {
                    _this.CONSUME24(Tokens.OP);
                    _this.SUBRULE2(_this.assignmentField);
                });
                _this.CONSUME31(Tokens.OP);
            });
            _this.OPTION248(function () {
                _this.CONSUME9(Tokens.SET);
                _this.SUBRULE(_this.updatedElement);
                _this.MANY48(function () {
                    _this.CONSUME25(Tokens.OP);
                    _this.SUBRULE2(_this.updatedElement);
                });
            });
        });
        _this.RULE('loadXmlStatement', function () {
            _this.CONSUME2(Tokens.LOAD);
            _this.CONSUME(Tokens.XML);
            _this.OPTION249(function () {
                _this.SUBRULE3(_this.priority);
            });
            _this.OPTION250(function () {
                _this.CONSUME2(Tokens.LOCAL);
            });
            _this.CONSUME2(Tokens.INFILE);
            _this.SUBRULE2(_this.filename);
            _this.OPTION251(function () {
                _this.SUBRULE2(_this.violation);
            });
            _this.CONSUME4(Tokens.INTO);
            _this.CONSUME10(Tokens.TABLE);
            _this.SUBRULE16(_this.tableName);
            _this.OPTION252(function () {
                _this.CONSUME6(Tokens.CHARACTER);
                _this.CONSUME10(Tokens.SET);
                _this.SUBRULE2(_this.charset);
            });
            _this.OPTION253(function () {
                _this.CONSUME(Tokens.ROWS);
                _this.CONSUME(Tokens.IDENTIFIED);
                _this.CONSUME4(Tokens.BY);
                _this.CONSUME(Tokens.OP);
                _this.SUBRULE(_this.tag);
                _this.CONSUME(Tokens.OP);
            });
            _this.OPTION254(function () {
                _this.CONSUME4(Tokens.IGNORE);
                _this.SUBRULE12(_this.decimalLiteral);
                _this.SUBRULE2(_this.linesFormat);
            });
            _this.OPTION255(function () {
                _this.CONSUME32(Tokens.OP);
                _this.SUBRULE3(_this.assignmentField);
                _this.MANY49(function () {
                    _this.CONSUME26(Tokens.OP);
                    _this.SUBRULE4(_this.assignmentField);
                });
                _this.CONSUME32(Tokens.OP);
            });
            _this.OPTION256(function () {
                _this.CONSUME11(Tokens.SET);
                _this.SUBRULE3(_this.updatedElement);
                _this.MANY50(function () {
                    _this.CONSUME27(Tokens.OP);
                    _this.SUBRULE4(_this.updatedElement);
                });
            });
        });
        _this.RULE('replaceStatement', function () {
            _this.CONSUME2(Tokens.REPLACE);
            _this.OPTION257(function () {
                _this.SUBRULE4(_this.priority);
            });
            _this.OPTION258(function () {
                _this.CONSUME5(Tokens.INTO);
            });
            _this.SUBRULE17(_this.tableName);
            _this.OPTION259(function () {
                _this.CONSUME21(Tokens.PARTITION);
                _this.CONSUME33(Tokens.OP);
                _this.SUBRULE2(_this.partitions);
                _this.CONSUME33(Tokens.OP);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION260(function () {
                            _this.CONSUME34(Tokens.OP);
                            _this.SUBRULE2(_this.columns);
                            _this.CONSUME34(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.insertStatementValue);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.SET);
                        _this.SUBRULE2(_this.setFirst);
                        _this.MANY51(function () {
                            _this.CONSUME28(Tokens.OP);
                            _this.SUBRULE2(_this.setElements);
                        });
                    },
                },
            ]);
        });
        _this.RULE('selectStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.querySpecification);
                        _this.OPTION261(function () {
                            _this.SUBRULE(_this.lockClause);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.queryExpression);
                        _this.OPTION262(function () {
                            _this.SUBRULE2(_this.lockClause);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.querySpecificationNointo);
                        _this.AT_LEAST_ONE5(function () {
                            _this.SUBRULE(_this.unionStatement);
                        });
                        _this.OPTION263(function () {
                            _this.CONSUME2(Tokens.UNION);
                            _this.OPTION264(function () {
                                _this.SUBRULE(_this.unionType);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.querySpecification);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.queryExpression);
                                    },
                                },
                            ]);
                        });
                        _this.OPTION265(function () {
                            _this.SUBRULE(_this.orderByClause);
                        });
                        _this.OPTION266(function () {
                            _this.SUBRULE(_this.limitClause);
                        });
                        _this.OPTION267(function () {
                            _this.SUBRULE3(_this.lockClause);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.queryExpressionNointo);
                        _this.AT_LEAST_ONE6(function () {
                            _this.SUBRULE(_this.unionParenthesis);
                        });
                        _this.OPTION268(function () {
                            _this.CONSUME3(Tokens.UNION);
                            _this.OPTION269(function () {
                                _this.SUBRULE2(_this.unionType);
                            });
                            _this.SUBRULE3(_this.queryExpression);
                        });
                        _this.OPTION270(function () {
                            _this.SUBRULE2(_this.orderByClause);
                        });
                        _this.OPTION271(function () {
                            _this.SUBRULE2(_this.limitClause);
                        });
                        _this.OPTION272(function () {
                            _this.SUBRULE4(_this.lockClause);
                        });
                    },
                },
            ]);
        });
        _this.RULE('updateStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.singleUpdateStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.multipleUpdateStatement);
                    },
                },
            ]);
        });
        _this.RULE('insertStatementValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.selectStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.insertFormat);
                        _this.CONSUME35(Tokens.OP);
                        _this.SUBRULE(_this.expressionsWithDefaults);
                        _this.CONSUME35(Tokens.OP);
                        _this.MANY52(function () {
                            _this.CONSUME29(Tokens.OP);
                            _this.CONSUME36(Tokens.OP);
                            _this.SUBRULE2(_this.expressionsWithDefaults);
                            _this.CONSUME36(Tokens.OP);
                        });
                    },
                },
            ]);
        });
        _this.RULE('updatedElement', function () {
            _this.SUBRULE(_this.fullColumnName);
            _this.CONSUME70(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE10(_this.expression);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.DEFAULT);
                    },
                },
            ]);
        });
        _this.RULE('assignmentField', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE46(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCAL_ID);
                    },
                },
            ]);
        });
        _this.RULE('lockClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.FOR);
                        _this.CONSUME4(Tokens.UPDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.LOCK);
                        _this.CONSUME3(Tokens.IN);
                        _this.CONSUME(Tokens.SHARE);
                        _this.CONSUME(Tokens.MODE);
                    },
                },
            ]);
        });
        _this.RULE('singleDeleteStatement', function () {
            _this.CONSUME3(Tokens.DELETE);
            _this.OPTION273(function () {
                _this.SUBRULE5(_this.priority);
            });
            _this.OPTION274(function () {
                _this.CONSUME(Tokens.QUICK);
            });
            _this.OPTION275(function () {
                _this.CONSUME5(Tokens.IGNORE);
            });
            _this.CONSUME(Tokens.FROM);
            _this.SUBRULE18(_this.tableName);
            _this.OPTION276(function () {
                _this.CONSUME22(Tokens.PARTITION);
                _this.CONSUME37(Tokens.OP);
                _this.SUBRULE19(_this.uidList);
                _this.CONSUME37(Tokens.OP);
            });
            _this.OPTION277(function () {
                _this.CONSUME(Tokens.WHERE);
                _this.SUBRULE11(_this.expression);
            });
            _this.OPTION278(function () {
                _this.SUBRULE3(_this.orderByClause);
            });
            _this.OPTION279(function () {
                _this.CONSUME(Tokens.LIMIT);
                _this.SUBRULE13(_this.decimalLiteral);
            });
        });
        _this.RULE('multipleDeleteStatement', function () {
            _this.CONSUME4(Tokens.DELETE);
            _this.OPTION280(function () {
                _this.SUBRULE6(_this.priority);
            });
            _this.OPTION281(function () {
                _this.CONSUME2(Tokens.QUICK);
            });
            _this.OPTION282(function () {
                _this.CONSUME6(Tokens.IGNORE);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE19(_this.tableName);
                        _this.OPTION283(function () {
                            _this.CONSUME(Tokens.OP);
                            _this.CONSUME(Tokens.OP);
                        });
                        _this.MANY53(function () {
                            _this.CONSUME30(Tokens.OP);
                            _this.SUBRULE20(_this.tableName);
                            _this.OPTION284(function () {
                                _this.CONSUME2(Tokens.OP);
                                _this.CONSUME2(Tokens.OP);
                            });
                        });
                        _this.CONSUME2(Tokens.FROM);
                        _this.SUBRULE(_this.tableSources);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.FROM);
                        _this.SUBRULE21(_this.tableName);
                        _this.OPTION285(function () {
                            _this.CONSUME3(Tokens.OP);
                            _this.CONSUME3(Tokens.OP);
                        });
                        _this.MANY54(function () {
                            _this.CONSUME31(Tokens.OP);
                            _this.SUBRULE22(_this.tableName);
                            _this.OPTION286(function () {
                                _this.CONSUME4(Tokens.OP);
                                _this.CONSUME4(Tokens.OP);
                            });
                        });
                        _this.CONSUME2(Tokens.USING);
                        _this.SUBRULE2(_this.tableSources);
                    },
                },
            ]);
            _this.OPTION287(function () {
                _this.CONSUME2(Tokens.WHERE);
                _this.SUBRULE12(_this.expression);
            });
        });
        _this.RULE('handlerOpenStatement', function () {
            _this.CONSUME(Tokens.HANDLER);
            _this.SUBRULE23(_this.tableName);
            _this.CONSUME(Tokens.OPEN);
            _this.OPTION288(function () {
                _this.OPTION289(function () {
                    _this.CONSUME4(Tokens.AS);
                });
                _this.SUBRULE47(_this.uid);
            });
        });
        _this.RULE('handlerReadIndexStatement', function () {
            _this.CONSUME2(Tokens.HANDLER);
            _this.SUBRULE24(_this.tableName);
            _this.CONSUME(Tokens.READ);
            _this.SUBRULE3(_this.index);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.comparisonOperator);
                        _this.CONSUME38(Tokens.OP);
                        _this.SUBRULE2(_this.constants);
                        _this.CONSUME38(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.moveOrder);
                    },
                },
            ]);
            _this.OPTION290(function () {
                _this.CONSUME3(Tokens.WHERE);
                _this.SUBRULE13(_this.expression);
            });
            _this.OPTION291(function () {
                _this.CONSUME2(Tokens.LIMIT);
                _this.SUBRULE14(_this.decimalLiteral);
            });
        });
        _this.RULE('handlerReadStatement', function () {
            _this.CONSUME3(Tokens.HANDLER);
            _this.SUBRULE25(_this.tableName);
            _this.CONSUME2(Tokens.READ);
            _this.SUBRULE2(_this.moveOrder);
            _this.OPTION292(function () {
                _this.CONSUME4(Tokens.WHERE);
                _this.SUBRULE14(_this.expression);
            });
            _this.OPTION293(function () {
                _this.CONSUME3(Tokens.LIMIT);
                _this.SUBRULE15(_this.decimalLiteral);
            });
        });
        _this.RULE('handlerCloseStatement', function () {
            _this.CONSUME4(Tokens.HANDLER);
            _this.SUBRULE26(_this.tableName);
            _this.CONSUME(Tokens.CLOSE);
        });
        _this.RULE('singleUpdateStatement', function () {
            _this.CONSUME5(Tokens.UPDATE);
            _this.OPTION294(function () {
                _this.SUBRULE7(_this.priority);
            });
            _this.OPTION295(function () {
                _this.CONSUME7(Tokens.IGNORE);
            });
            _this.SUBRULE27(_this.tableName);
            _this.OPTION296(function () {
                _this.OPTION297(function () {
                    _this.CONSUME5(Tokens.AS);
                });
                _this.SUBRULE48(_this.uid);
            });
            _this.CONSUME13(Tokens.SET);
            _this.SUBRULE5(_this.updatedElement);
            _this.MANY55(function () {
                _this.CONSUME32(Tokens.OP);
                _this.SUBRULE6(_this.updatedElement);
            });
            _this.OPTION298(function () {
                _this.CONSUME5(Tokens.WHERE);
                _this.SUBRULE15(_this.expression);
            });
            _this.OPTION299(function () {
                _this.SUBRULE4(_this.orderByClause);
            });
            _this.OPTION300(function () {
                _this.SUBRULE3(_this.limitClause);
            });
        });
        _this.RULE('multipleUpdateStatement', function () {
            _this.CONSUME6(Tokens.UPDATE);
            _this.OPTION301(function () {
                _this.SUBRULE8(_this.priority);
            });
            _this.OPTION302(function () {
                _this.CONSUME8(Tokens.IGNORE);
            });
            _this.SUBRULE3(_this.tableSources);
            _this.CONSUME14(Tokens.SET);
            _this.SUBRULE7(_this.updatedElement);
            _this.MANY56(function () {
                _this.CONSUME33(Tokens.OP);
                _this.SUBRULE8(_this.updatedElement);
            });
            _this.OPTION303(function () {
                _this.CONSUME6(Tokens.WHERE);
                _this.SUBRULE16(_this.expression);
            });
        });
        _this.RULE('orderByClause', function () {
            _this.CONSUME2(Tokens.ORDER);
            _this.CONSUME5(Tokens.BY);
            _this.SUBRULE(_this.orderByExpression);
            _this.MANY57(function () {
                _this.CONSUME34(Tokens.OP);
                _this.SUBRULE2(_this.orderByExpression);
            });
        });
        _this.RULE('orderByExpression', function () {
            _this.SUBRULE17(_this.expression);
            _this.OPTION304(function () {
                _this.SUBRULE(_this.order);
            });
        });
        _this.RULE('tableSources', function () {
            _this.SUBRULE(_this.tableSource);
            _this.MANY58(function () {
                _this.CONSUME35(Tokens.OP);
                _this.SUBRULE2(_this.tableSource);
            });
        });
        _this.RULE('tableSource', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.tableSourceItem);
                        _this.MANY59(function () {
                            _this.SUBRULE(_this.joinPart);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME39(Tokens.OP);
                        _this.SUBRULE2(_this.tableSourceItem);
                        _this.MANY60(function () {
                            _this.SUBRULE2(_this.joinPart);
                        });
                        _this.CONSUME39(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('tableSourceItem', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE28(_this.tableName);
                        _this.OPTION305(function () {
                            _this.CONSUME23(Tokens.PARTITION);
                            _this.CONSUME40(Tokens.OP);
                            _this.SUBRULE20(_this.uidList);
                            _this.CONSUME40(Tokens.OP);
                        });
                        _this.OPTION306(function () {
                            _this.OPTION307(function () {
                                _this.CONSUME6(Tokens.AS);
                            });
                            _this.SUBRULE(_this.alias);
                        });
                        _this.OPTION308(function () {
                            _this.SUBRULE(_this.indexHint);
                            _this.MANY61(function () {
                                _this.CONSUME36(Tokens.OP);
                                _this.SUBRULE2(_this.indexHint);
                            });
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE6(_this.selectStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME41(Tokens.OP);
                                    _this.SUBRULE(_this.parenthesisSubquery);
                                    _this.CONSUME41(Tokens.OP);
                                },
                            },
                        ]);
                        _this.OPTION309(function () {
                            _this.CONSUME7(Tokens.AS);
                        });
                        _this.SUBRULE2(_this.alias);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME42(Tokens.OP);
                        _this.SUBRULE4(_this.tableSources);
                        _this.CONSUME42(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('indexHint', function () {
            _this.SUBRULE(_this.indexHintAction);
            _this.SUBRULE(_this.keyFormat);
            _this.OPTION310(function () {
                _this.CONSUME3(Tokens.FOR);
                _this.SUBRULE(_this.indexHintType);
            });
            _this.CONSUME43(Tokens.OP);
            _this.SUBRULE21(_this.uidList);
            _this.CONSUME43(Tokens.OP);
        });
        _this.RULE('indexHintType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.JOIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.ORDER);
                        _this.CONSUME6(Tokens.BY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.GROUP);
                        _this.CONSUME7(Tokens.BY);
                    },
                },
            ]);
        });
        _this.RULE('joinPart', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION311(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.INNER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.CROSS);
                                    },
                                },
                            ]);
                        });
                        _this.CONSUME2(Tokens.JOIN);
                        _this.SUBRULE3(_this.tableSourceItem);
                        _this.OPTION312(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME14(Tokens.ON);
                                        _this.SUBRULE18(_this.expression);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME3(Tokens.USING);
                                        _this.CONSUME44(Tokens.OP);
                                        _this.SUBRULE22(_this.uidList);
                                        _this.CONSUME44(Tokens.OP);
                                    },
                                },
                            ]);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRAIGHT_JOIN);
                        _this.SUBRULE4(_this.tableSourceItem);
                        _this.OPTION313(function () {
                            _this.CONSUME15(Tokens.ON);
                            _this.SUBRULE19(_this.expression);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LEFT);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.RIGHT);
                                },
                            },
                        ]);
                        _this.OPTION314(function () {
                            _this.CONSUME(Tokens.OUTER);
                        });
                        _this.CONSUME3(Tokens.JOIN);
                        _this.SUBRULE5(_this.tableSourceItem);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME16(Tokens.ON);
                                    _this.SUBRULE20(_this.expression);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.USING);
                                    _this.CONSUME45(Tokens.OP);
                                    _this.SUBRULE23(_this.uidList);
                                    _this.CONSUME45(Tokens.OP);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NATURAL);
                        _this.OPTION315(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.LEFT);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.RIGHT);
                                    },
                                },
                            ]);
                            _this.OPTION316(function () {
                                _this.CONSUME2(Tokens.OUTER);
                            });
                        });
                        _this.CONSUME4(Tokens.JOIN);
                        _this.SUBRULE6(_this.tableSourceItem);
                    },
                },
            ]);
        });
        _this.RULE('queryExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME46(Tokens.OP);
                        _this.SUBRULE3(_this.querySpecification);
                        _this.CONSUME46(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME47(Tokens.OP);
                        _this.SUBRULE4(_this.queryExpression);
                        _this.CONSUME47(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('queryExpressionNointo', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME48(Tokens.OP);
                        _this.SUBRULE2(_this.querySpecificationNointo);
                        _this.CONSUME48(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME49(Tokens.OP);
                        _this.SUBRULE2(_this.queryExpressionNointo);
                        _this.CONSUME49(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('querySpecification', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SELECT);
                        _this.MANY62(function () {
                            _this.SUBRULE(_this.selectSpec);
                        });
                        _this.SUBRULE(_this.selectElements);
                        _this.OPTION317(function () {
                            _this.SUBRULE(_this.selectIntoExpression);
                        });
                        _this.OPTION318(function () {
                            _this.SUBRULE(_this.fromClause);
                        });
                        _this.OPTION319(function () {
                            _this.SUBRULE5(_this.orderByClause);
                        });
                        _this.OPTION320(function () {
                            _this.SUBRULE4(_this.limitClause);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SELECT);
                        _this.MANY63(function () {
                            _this.SUBRULE2(_this.selectSpec);
                        });
                        _this.SUBRULE2(_this.selectElements);
                        _this.OPTION321(function () {
                            _this.SUBRULE2(_this.fromClause);
                        });
                        _this.OPTION322(function () {
                            _this.SUBRULE6(_this.orderByClause);
                        });
                        _this.OPTION323(function () {
                            _this.SUBRULE5(_this.limitClause);
                        });
                        _this.OPTION324(function () {
                            _this.SUBRULE2(_this.selectIntoExpression);
                        });
                    },
                },
            ]);
        });
        _this.RULE('querySpecificationNointo', function () {
            _this.CONSUME3(Tokens.SELECT);
            _this.MANY64(function () {
                _this.SUBRULE3(_this.selectSpec);
            });
            _this.SUBRULE3(_this.selectElements);
            _this.OPTION325(function () {
                _this.SUBRULE3(_this.fromClause);
            });
            _this.OPTION326(function () {
                _this.SUBRULE7(_this.orderByClause);
            });
            _this.OPTION327(function () {
                _this.SUBRULE6(_this.limitClause);
            });
        });
        _this.RULE('unionParenthesis', function () {
            _this.CONSUME4(Tokens.UNION);
            _this.OPTION328(function () {
                _this.SUBRULE3(_this.unionType);
            });
            _this.SUBRULE3(_this.queryExpressionNointo);
        });
        _this.RULE('unionStatement', function () {
            _this.CONSUME5(Tokens.UNION);
            _this.OPTION329(function () {
                _this.SUBRULE4(_this.unionType);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.querySpecificationNointo);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.queryExpressionNointo);
                    },
                },
            ]);
        });
        _this.RULE('selectSpec', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME9(Tokens.ALL);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DISTINCT);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DISTINCTROW);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HIGH_PRIORITY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.STRAIGHT_JOIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_SMALL_RESULT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BIG_RESULT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BUFFER_RESULT);
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SQL_CACHE);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SQL_NO_CACHE);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_CALC_FOUND_ROWS);
                    },
                },
            ]);
        });
        _this.RULE('selectElements', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.star);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.selectElement);
                    },
                },
            ]);
            _this.MANY65(function () {
                _this.CONSUME37(Tokens.OP);
                _this.SUBRULE2(_this.selectElement);
            });
        });
        _this.RULE('selectElement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE17(_this.fullId);
                        _this.CONSUME5(Tokens.OP);
                        _this.CONSUME5(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.fullColumnName);
                        _this.OPTION330(function () {
                            _this.OPTION331(function () {
                                _this.CONSUME8(Tokens.AS);
                            });
                            _this.SUBRULE49(_this.uid);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.functionCall);
                        _this.OPTION332(function () {
                            _this.OPTION333(function () {
                                _this.CONSUME9(Tokens.AS);
                            });
                            _this.SUBRULE50(_this.uid);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION334(function () {
                            _this.CONSUME2(Tokens.LOCAL_ID);
                            _this.CONSUME(Tokens.VAR_ASSIGN);
                        });
                        _this.SUBRULE21(_this.expression);
                        _this.OPTION335(function () {
                            _this.OPTION336(function () {
                                _this.CONSUME10(Tokens.AS);
                            });
                            _this.SUBRULE51(_this.uid);
                        });
                    },
                },
            ]);
        });
        _this.RULE('selectIntoExpression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.INTO);
                        _this.SUBRULE5(_this.assignmentField);
                        _this.MANY66(function () {
                            _this.CONSUME38(Tokens.OP);
                            _this.SUBRULE6(_this.assignmentField);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.INTO);
                        _this.CONSUME(Tokens.DUMPFILE);
                        _this.CONSUME21(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.INTO);
                        _this.CONSUME(Tokens.OUTFILE);
                        _this.SUBRULE3(_this.filename);
                        _this.OPTION337(function () {
                            _this.CONSUME7(Tokens.CHARACTER);
                            _this.CONSUME15(Tokens.SET);
                            _this.SUBRULE3(_this.charset);
                        });
                        _this.OPTION338(function () {
                            _this.SUBRULE2(_this.fieldsFormat);
                            _this.AT_LEAST_ONE7(function () {
                                _this.SUBRULE2(_this.selectFieldsInto);
                            });
                        });
                        _this.OPTION339(function () {
                            _this.CONSUME2(Tokens.LINES);
                            _this.AT_LEAST_ONE8(function () {
                                _this.SUBRULE2(_this.selectLinesInto);
                            });
                        });
                    },
                },
            ]);
        });
        _this.RULE('selectFieldsInto', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TERMINATED);
                        _this.CONSUME8(Tokens.BY);
                        _this.SUBRULE(_this.terminationField);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION340(function () {
                            _this.CONSUME(Tokens.OPTIONALLY);
                        });
                        _this.CONSUME(Tokens.ENCLOSED);
                        _this.CONSUME9(Tokens.BY);
                        _this.SUBRULE(_this.enclosion);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ESCAPED);
                        _this.CONSUME10(Tokens.BY);
                        _this.SUBRULE(_this.escaping);
                    },
                },
            ]);
        });
        _this.RULE('selectLinesInto', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STARTING);
                        _this.CONSUME11(Tokens.BY);
                        _this.SUBRULE(_this.starting);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.TERMINATED);
                        _this.CONSUME12(Tokens.BY);
                        _this.SUBRULE(_this.terminationLine);
                    },
                },
            ]);
        });
        _this.RULE('fromClause', function () {
            _this.CONSUME4(Tokens.FROM);
            _this.SUBRULE5(_this.tableSources);
            _this.OPTION341(function () {
                _this.CONSUME7(Tokens.WHERE);
                _this.SUBRULE(_this.whereExpr);
            });
            _this.OPTION342(function () {
                _this.CONSUME6(Tokens.GROUP);
                _this.CONSUME13(Tokens.BY);
                _this.SUBRULE(_this.groupByItem);
                _this.MANY67(function () {
                    _this.CONSUME39(Tokens.OP);
                    _this.SUBRULE2(_this.groupByItem);
                });
                _this.OPTION343(function () {
                    _this.CONSUME5(Tokens.WITH);
                    _this.CONSUME(Tokens.ROLLUP);
                });
            });
            _this.OPTION344(function () {
                _this.CONSUME(Tokens.HAVING);
                _this.SUBRULE(_this.havingExpr);
            });
        });
        _this.RULE('groupByItem', function () {
            _this.SUBRULE22(_this.expression);
            _this.OPTION345(function () {
                _this.SUBRULE2(_this.order);
            });
        });
        _this.RULE('limitClause', function () {
            _this.CONSUME4(Tokens.LIMIT);
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION346(function () {
                            _this.SUBRULE(_this.offset);
                            _this.CONSUME40(Tokens.OP);
                        });
                        _this.SUBRULE(_this.limit);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.limit);
                        _this.CONSUME(Tokens.OFFSET);
                        _this.SUBRULE2(_this.offset);
                    },
                },
            ]);
        });
        _this.RULE('startTransaction', function () {
            _this.CONSUME(Tokens.START);
            _this.CONSUME(Tokens.TRANSACTION);
            _this.OPTION347(function () {
                _this.SUBRULE(_this.transactionMode);
                _this.MANY68(function () {
                    _this.CONSUME41(Tokens.OP);
                    _this.SUBRULE2(_this.transactionMode);
                });
            });
        });
        _this.RULE('beginWork', function () {
            _this.CONSUME(Tokens.BEGIN);
            _this.OPTION348(function () {
                _this.CONSUME(Tokens.WORK);
            });
        });
        _this.RULE('commitWork', function () {
            _this.CONSUME(Tokens.COMMIT);
            _this.OPTION349(function () {
                _this.CONSUME2(Tokens.WORK);
            });
            _this.OPTION350(function () {
                _this.CONSUME(Tokens.AND);
                _this.OPTION351(function () {
                    _this.SUBRULE(_this.nochain);
                });
                _this.CONSUME(Tokens.CHAIN);
            });
            _this.OPTION352(function () {
                _this.OPTION353(function () {
                    _this.SUBRULE(_this.norelease);
                });
                _this.CONSUME(Tokens.RELEASE);
            });
        });
        _this.RULE('rollbackWork', function () {
            _this.CONSUME(Tokens.ROLLBACK);
            _this.OPTION354(function () {
                _this.CONSUME3(Tokens.WORK);
            });
            _this.OPTION355(function () {
                _this.CONSUME2(Tokens.AND);
                _this.OPTION356(function () {
                    _this.SUBRULE2(_this.nochain);
                });
                _this.CONSUME2(Tokens.CHAIN);
            });
            _this.OPTION357(function () {
                _this.OPTION358(function () {
                    _this.SUBRULE2(_this.norelease);
                });
                _this.CONSUME2(Tokens.RELEASE);
            });
        });
        _this.RULE('savepointStatement', function () {
            _this.CONSUME(Tokens.SAVEPOINT);
            _this.SUBRULE52(_this.uid);
        });
        _this.RULE('rollbackStatement', function () {
            _this.CONSUME2(Tokens.ROLLBACK);
            _this.OPTION359(function () {
                _this.CONSUME4(Tokens.WORK);
            });
            _this.CONSUME4(Tokens.TO);
            _this.OPTION360(function () {
                _this.CONSUME2(Tokens.SAVEPOINT);
            });
            _this.SUBRULE53(_this.uid);
        });
        _this.RULE('releaseStatement', function () {
            _this.CONSUME3(Tokens.RELEASE);
            _this.CONSUME3(Tokens.SAVEPOINT);
            _this.SUBRULE54(_this.uid);
        });
        _this.RULE('lockTables', function () {
            _this.CONSUME5(Tokens.LOCK);
            _this.CONSUME(Tokens.TABLES);
            _this.SUBRULE(_this.lockTableElement);
            _this.MANY69(function () {
                _this.CONSUME42(Tokens.OP);
                _this.SUBRULE2(_this.lockTableElement);
            });
        });
        _this.RULE('unlockTables', function () {
            _this.CONSUME(Tokens.UNLOCK);
            _this.CONSUME2(Tokens.TABLES);
        });
        _this.RULE('setAutocommitStatement', function () {
            _this.CONSUME16(Tokens.SET);
            _this.CONSUME(Tokens.AUTOCOMMIT);
            _this.CONSUME71(Tokens.OP);
            _this.SUBRULE(_this.autocommitValue);
        });
        _this.RULE('setTransactionStatement', function () {
            _this.CONSUME17(Tokens.SET);
            _this.OPTION361(function () {
                _this.SUBRULE(_this.transactionContext);
            });
            _this.CONSUME2(Tokens.TRANSACTION);
            _this.SUBRULE(_this.transactionOption);
            _this.MANY70(function () {
                _this.CONSUME43(Tokens.OP);
                _this.SUBRULE2(_this.transactionOption);
            });
        });
        _this.RULE('transactionMode', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.WITH);
                        _this.CONSUME(Tokens.CONSISTENT);
                        _this.CONSUME(Tokens.SNAPSHOT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.READ);
                        _this.CONSUME(Tokens.WRITE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.READ);
                        _this.CONSUME(Tokens.ONLY);
                    },
                },
            ]);
        });
        _this.RULE('lockTableElement', function () {
            _this.SUBRULE29(_this.tableName);
            _this.OPTION362(function () {
                _this.OPTION363(function () {
                    _this.CONSUME11(Tokens.AS);
                });
                _this.SUBRULE55(_this.uid);
            });
            _this.SUBRULE(_this.lockAction);
        });
        _this.RULE('lockAction', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.READ);
                        _this.OPTION364(function () {
                            _this.CONSUME3(Tokens.LOCAL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION365(function () {
                            _this.CONSUME(Tokens.LOW_PRIORITY);
                        });
                        _this.CONSUME2(Tokens.WRITE);
                    },
                },
            ]);
        });
        _this.RULE('transactionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISOLATION);
                        _this.CONSUME(Tokens.LEVEL);
                        _this.SUBRULE(_this.transactionLevel);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.READ);
                        _this.CONSUME3(Tokens.WRITE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.READ);
                        _this.CONSUME2(Tokens.ONLY);
                    },
                },
            ]);
        });
        _this.RULE('transactionLevel', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPEATABLE);
                        _this.CONSUME8(Tokens.READ);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.READ);
                        _this.CONSUME(Tokens.COMMITTED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.READ);
                        _this.CONSUME(Tokens.UNCOMMITTED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SERIALIZABLE);
                    },
                },
            ]);
        });
        _this.RULE('changeMaster', function () {
            _this.CONSUME2(Tokens.CHANGE);
            _this.CONSUME2(Tokens.MASTER);
            _this.CONSUME5(Tokens.TO);
            _this.SUBRULE(_this.masterOption);
            _this.MANY71(function () {
                _this.CONSUME44(Tokens.OP);
                _this.SUBRULE2(_this.masterOption);
            });
            _this.OPTION366(function () {
                _this.SUBRULE(_this.channelOption);
            });
        });
        _this.RULE('changeReplicationFilter', function () {
            _this.CONSUME3(Tokens.CHANGE);
            _this.CONSUME(Tokens.REPLICATION);
            _this.CONSUME(Tokens.FILTER);
            _this.SUBRULE(_this.replicationFilter);
            _this.MANY72(function () {
                _this.CONSUME45(Tokens.OP);
                _this.SUBRULE2(_this.replicationFilter);
            });
        });
        _this.RULE('purgeBinaryLogs', function () {
            _this.CONSUME(Tokens.PURGE);
            _this.SUBRULE(_this.purgeFormat);
            _this.CONSUME(Tokens.LOGS);
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.TO);
                        _this.SUBRULE(_this.fileName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BEFORE);
                        _this.SUBRULE(_this.timeValue);
                    },
                },
            ]);
        });
        _this.RULE('resetMaster', function () {
            _this.CONSUME(Tokens.RESET);
            _this.CONSUME3(Tokens.MASTER);
        });
        _this.RULE('resetSlave', function () {
            _this.CONSUME2(Tokens.RESET);
            _this.CONSUME2(Tokens.SLAVE);
            _this.OPTION367(function () {
                _this.CONSUME10(Tokens.ALL);
            });
            _this.OPTION368(function () {
                _this.SUBRULE2(_this.channelOption);
            });
        });
        _this.RULE('startSlave', function () {
            _this.CONSUME2(Tokens.START);
            _this.CONSUME3(Tokens.SLAVE);
            _this.OPTION369(function () {
                _this.SUBRULE(_this.threadType);
                _this.MANY73(function () {
                    _this.CONSUME46(Tokens.OP);
                    _this.SUBRULE2(_this.threadType);
                });
            });
            _this.OPTION370(function () {
                _this.CONSUME(Tokens.UNTIL);
                _this.SUBRULE(_this.untilOption);
            });
            _this.MANY74(function () {
                _this.SUBRULE(_this.connectionOption);
            });
            _this.OPTION371(function () {
                _this.SUBRULE3(_this.channelOption);
            });
        });
        _this.RULE('stopSlave', function () {
            _this.CONSUME(Tokens.STOP);
            _this.CONSUME4(Tokens.SLAVE);
            _this.OPTION372(function () {
                _this.SUBRULE3(_this.threadType);
                _this.MANY75(function () {
                    _this.CONSUME47(Tokens.OP);
                    _this.SUBRULE4(_this.threadType);
                });
            });
        });
        _this.RULE('startGroupReplication', function () {
            _this.CONSUME3(Tokens.START);
            _this.CONSUME(Tokens.GROUP_REPLICATION);
        });
        _this.RULE('stopGroupReplication', function () {
            _this.CONSUME2(Tokens.STOP);
            _this.CONSUME2(Tokens.GROUP_REPLICATION);
        });
        _this.RULE('masterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.stringMasterOption);
                        _this.CONSUME72(Tokens.OP);
                        _this.CONSUME22(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.decimalMasterOption);
                        _this.CONSUME73(Tokens.OP);
                        _this.SUBRULE16(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.boolMasterOption);
                        _this.CONSUME74(Tokens.OP);
                        _this.SUBRULE(_this.boolVal);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HEARTBEAT_PERIOD);
                        _this.CONSUME75(Tokens.OP);
                        _this.CONSUME(Tokens.REAL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IGNORE_SERVER_IDS);
                        _this.CONSUME76(Tokens.OP);
                        _this.CONSUME50(Tokens.OP);
                        _this.OPTION373(function () {
                            _this.SUBRULE56(_this.uid);
                            _this.MANY76(function () {
                                _this.CONSUME48(Tokens.OP);
                                _this.SUBRULE57(_this.uid);
                            });
                        });
                        _this.CONSUME50(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('stringMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_BIND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_HOST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_USER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PASSWORD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CAPATH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CERT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CRLPATH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_CIPHER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_TLS_VERSION);
                    },
                },
            ]);
        });
        _this.RULE('decimalMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_PORT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_CONNECT_RETRY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_RETRY_COUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_DELAY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_LOG_POS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAY_LOG_POS);
                    },
                },
            ]);
        });
        _this.RULE('boolMasterOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_AUTO_POSITION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_SSL_VERIFY_SERVER_CERT);
                    },
                },
            ]);
        });
        _this.RULE('channelOption', function () {
            _this.CONSUME4(Tokens.FOR);
            _this.CONSUME(Tokens.CHANNEL);
            _this.CONSUME23(Tokens.STRING_LITERAL);
        });
        _this.RULE('replicationFilter', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_DB);
                        _this.CONSUME77(Tokens.OP);
                        _this.CONSUME51(Tokens.OP);
                        _this.SUBRULE24(_this.uidList);
                        _this.CONSUME51(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_DB);
                        _this.CONSUME78(Tokens.OP);
                        _this.CONSUME52(Tokens.OP);
                        _this.SUBRULE25(_this.uidList);
                        _this.CONSUME52(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_DO_TABLE);
                        _this.CONSUME79(Tokens.OP);
                        _this.CONSUME53(Tokens.OP);
                        _this.SUBRULE3(_this.tables);
                        _this.CONSUME53(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_IGNORE_TABLE);
                        _this.CONSUME80(Tokens.OP);
                        _this.CONSUME54(Tokens.OP);
                        _this.SUBRULE4(_this.tables);
                        _this.CONSUME54(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_DO_TABLE);
                        _this.CONSUME81(Tokens.OP);
                        _this.CONSUME55(Tokens.OP);
                        _this.SUBRULE(_this.simpleStrings);
                        _this.CONSUME55(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_WILD_IGNORE_TABLE);
                        _this.CONSUME82(Tokens.OP);
                        _this.CONSUME56(Tokens.OP);
                        _this.SUBRULE2(_this.simpleStrings);
                        _this.CONSUME56(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REPLICATE_REWRITE_DB);
                        _this.CONSUME83(Tokens.OP);
                        _this.CONSUME57(Tokens.OP);
                        _this.SUBRULE(_this.tablePair);
                        _this.MANY77(function () {
                            _this.CONSUME49(Tokens.OP);
                            _this.SUBRULE2(_this.tablePair);
                        });
                        _this.CONSUME57(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('tablePair', function () {
            _this.CONSUME58(Tokens.OP);
            _this.SUBRULE(_this.firstTable);
            _this.CONSUME50(Tokens.OP);
            _this.SUBRULE(_this.secondTable);
            _this.CONSUME58(Tokens.OP);
        });
        _this.RULE('threadType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IO_THREAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_THREAD);
                    },
                },
            ]);
        });
        _this.RULE('untilOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.gtids);
                        _this.CONSUME84(Tokens.OP);
                        _this.SUBRULE(_this.gtuidSet);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_LOG_FILE);
                        _this.CONSUME85(Tokens.OP);
                        _this.CONSUME24(Tokens.STRING_LITERAL);
                        _this.CONSUME51(Tokens.OP);
                        _this.CONSUME2(Tokens.MASTER_LOG_POS);
                        _this.CONSUME86(Tokens.OP);
                        _this.SUBRULE17(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.RELAY_LOG_FILE);
                        _this.CONSUME87(Tokens.OP);
                        _this.CONSUME25(Tokens.STRING_LITERAL);
                        _this.CONSUME52(Tokens.OP);
                        _this.CONSUME2(Tokens.RELAY_LOG_POS);
                        _this.CONSUME88(Tokens.OP);
                        _this.SUBRULE18(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_AFTER_MTS_GAPS);
                    },
                },
            ]);
        });
        _this.RULE('connectionOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.USER);
                        _this.CONSUME89(Tokens.OP);
                        _this.SUBRULE(_this.conOptUser);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PASSWORD);
                        _this.CONSUME90(Tokens.OP);
                        _this.SUBRULE(_this.conOptPassword);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEFAULT_AUTH);
                        _this.CONSUME91(Tokens.OP);
                        _this.SUBRULE(_this.conOptDefAuth);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGIN_DIR);
                        _this.CONSUME92(Tokens.OP);
                        _this.SUBRULE(_this.conOptPluginDir);
                    },
                },
            ]);
        });
        _this.RULE('gtuidSet', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.uuidSet);
                        _this.MANY78(function () {
                            _this.CONSUME53(Tokens.OP);
                            _this.SUBRULE2(_this.uuidSet);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME26(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('xaStartTransaction', function () {
            _this.CONSUME(Tokens.XA);
            _this.SUBRULE(_this.xaStart);
            _this.SUBRULE(_this.xid);
            _this.OPTION374(function () {
                _this.SUBRULE(_this.xaAction);
            });
        });
        _this.RULE('xaEndTransaction', function () {
            _this.CONSUME2(Tokens.XA);
            _this.CONSUME(Tokens.END);
            _this.SUBRULE2(_this.xid);
            _this.OPTION375(function () {
                _this.CONSUME(Tokens.SUSPEND);
                _this.OPTION376(function () {
                    _this.CONSUME5(Tokens.FOR);
                    _this.CONSUME(Tokens.MIGRATE);
                });
            });
        });
        _this.RULE('xaPrepareStatement', function () {
            _this.CONSUME3(Tokens.XA);
            _this.CONSUME(Tokens.PREPARE);
            _this.SUBRULE3(_this.xid);
        });
        _this.RULE('xaCommitWork', function () {
            _this.CONSUME4(Tokens.XA);
            _this.CONSUME2(Tokens.COMMIT);
            _this.SUBRULE4(_this.xid);
            _this.OPTION377(function () {
                _this.CONSUME(Tokens.ONE);
                _this.CONSUME(Tokens.PHASE);
            });
        });
        _this.RULE('xaRollbackWork', function () {
            _this.CONSUME5(Tokens.XA);
            _this.CONSUME3(Tokens.ROLLBACK);
            _this.SUBRULE5(_this.xid);
        });
        _this.RULE('xaRecoverWork', function () {
            _this.CONSUME6(Tokens.XA);
            _this.CONSUME(Tokens.RECOVER);
            _this.OPTION378(function () {
                _this.CONSUME2(Tokens.CONVERT);
                _this.SUBRULE6(_this.xid);
            });
        });
        _this.RULE('prepareStatement', function () {
            _this.CONSUME2(Tokens.PREPARE);
            _this.SUBRULE58(_this.uid);
            _this.CONSUME5(Tokens.FROM);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.query);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.variable);
                    },
                },
            ]);
        });
        _this.RULE('executeStatement', function () {
            _this.CONSUME(Tokens.EXECUTE);
            _this.SUBRULE59(_this.uid);
            _this.OPTION379(function () {
                _this.CONSUME5(Tokens.USING);
                _this.SUBRULE(_this.userVariables);
            });
        });
        _this.RULE('deallocatePrepare', function () {
            _this.SUBRULE(_this.dropFormat);
            _this.CONSUME3(Tokens.PREPARE);
            _this.SUBRULE60(_this.uid);
        });
        _this.RULE('routineBody', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.blockStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.sqlStatement);
                    },
                },
            ]);
        });
        _this.RULE('blockStatement', function () {
            _this.OPTION380(function () {
                _this.SUBRULE61(_this.uid);
                _this.CONSUME(Tokens.OP);
            });
            _this.CONSUME2(Tokens.BEGIN);
            _this.OPTION381(function () {
                _this.MANY79(function () {
                    _this.SUBRULE(_this.declareVariable);
                    _this.CONSUME4(Tokens.SEMI);
                });
                _this.MANY80(function () {
                    _this.SUBRULE(_this.declareCondition);
                    _this.CONSUME5(Tokens.SEMI);
                });
                _this.MANY81(function () {
                    _this.SUBRULE(_this.declareCursor);
                    _this.CONSUME6(Tokens.SEMI);
                });
                _this.MANY82(function () {
                    _this.SUBRULE(_this.declareHandler);
                    _this.CONSUME7(Tokens.SEMI);
                });
                _this.AT_LEAST_ONE9(function () {
                    _this.SUBRULE(_this.procedureSqlStatement);
                });
            });
            _this.CONSUME2(Tokens.END);
            _this.OPTION382(function () {
                _this.SUBRULE62(_this.uid);
            });
        });
        _this.RULE('caseStatement', function () {
            _this.CONSUME(Tokens.CASE);
            _this.OPTION383(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE63(_this.uid);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE23(_this.expression);
                        },
                    },
                ]);
            });
            _this.AT_LEAST_ONE10(function () {
                _this.SUBRULE(_this.caseAlternative);
            });
            _this.OPTION384(function () {
                _this.CONSUME(Tokens.ELSE);
                _this.AT_LEAST_ONE11(function () {
                    _this.SUBRULE2(_this.procedureSqlStatement);
                });
            });
            _this.CONSUME3(Tokens.END);
            _this.CONSUME2(Tokens.CASE);
        });
        _this.RULE('ifStatement', function () {
            _this.CONSUME(Tokens.IF);
            _this.SUBRULE24(_this.expression);
            _this.CONSUME(Tokens.THEN);
            _this.AT_LEAST_ONE12(function () {
                _this.SUBRULE(_this.thenStatements);
            });
            _this.MANY83(function () {
                _this.SUBRULE(_this.elifAlternative);
            });
            _this.OPTION385(function () {
                _this.CONSUME2(Tokens.ELSE);
                _this.AT_LEAST_ONE13(function () {
                    _this.SUBRULE(_this.elseStatements);
                });
            });
            _this.CONSUME4(Tokens.END);
            _this.CONSUME2(Tokens.IF);
        });
        _this.RULE('iterateStatement', function () {
            _this.CONSUME(Tokens.ITERATE);
            _this.SUBRULE64(_this.uid);
        });
        _this.RULE('leaveStatement', function () {
            _this.CONSUME(Tokens.LEAVE);
            _this.SUBRULE65(_this.uid);
        });
        _this.RULE('loopStatement', function () {
            _this.OPTION386(function () {
                _this.SUBRULE66(_this.uid);
                _this.CONSUME2(Tokens.OP);
            });
            _this.CONSUME(Tokens.LOOP);
            _this.AT_LEAST_ONE14(function () {
                _this.SUBRULE3(_this.procedureSqlStatement);
            });
            _this.CONSUME5(Tokens.END);
            _this.CONSUME2(Tokens.LOOP);
            _this.OPTION387(function () {
                _this.SUBRULE67(_this.uid);
            });
        });
        _this.RULE('repeatStatement', function () {
            _this.OPTION388(function () {
                _this.SUBRULE68(_this.uid);
                _this.CONSUME3(Tokens.OP);
            });
            _this.CONSUME(Tokens.REPEAT);
            _this.AT_LEAST_ONE15(function () {
                _this.SUBRULE4(_this.procedureSqlStatement);
            });
            _this.CONSUME2(Tokens.UNTIL);
            _this.SUBRULE25(_this.expression);
            _this.CONSUME6(Tokens.END);
            _this.CONSUME2(Tokens.REPEAT);
            _this.OPTION389(function () {
                _this.SUBRULE69(_this.uid);
            });
        });
        _this.RULE('returnStatement', function () {
            _this.CONSUME(Tokens.RETURN);
            _this.SUBRULE26(_this.expression);
        });
        _this.RULE('whileStatement', function () {
            _this.OPTION390(function () {
                _this.SUBRULE70(_this.uid);
                _this.CONSUME4(Tokens.OP);
            });
            _this.CONSUME(Tokens.WHILE);
            _this.SUBRULE27(_this.expression);
            _this.CONSUME4(Tokens.DO);
            _this.AT_LEAST_ONE16(function () {
                _this.SUBRULE5(_this.procedureSqlStatement);
            });
            _this.CONSUME7(Tokens.END);
            _this.CONSUME2(Tokens.WHILE);
            _this.OPTION391(function () {
                _this.SUBRULE71(_this.uid);
            });
        });
        _this.RULE('cursorStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CLOSE);
                        _this.SUBRULE72(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FETCH);
                        _this.OPTION392(function () {
                            _this.OPTION393(function () {
                                _this.CONSUME(Tokens.NEXT);
                            });
                            _this.CONSUME6(Tokens.FROM);
                        });
                        _this.SUBRULE73(_this.uid);
                        _this.CONSUME9(Tokens.INTO);
                        _this.SUBRULE26(_this.uidList);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OPEN);
                        _this.SUBRULE74(_this.uid);
                    },
                },
            ]);
        });
        _this.RULE('declareVariable', function () {
            _this.CONSUME(Tokens.DECLARE);
            _this.SUBRULE27(_this.uidList);
            _this.SUBRULE5(_this.dataType);
            _this.OPTION394(function () {
                _this.CONSUME11(Tokens.DEFAULT);
                _this.SUBRULE3(_this.defaultValue);
            });
        });
        _this.RULE('declareCondition', function () {
            _this.CONSUME2(Tokens.DECLARE);
            _this.SUBRULE75(_this.uid);
            _this.CONSUME(Tokens.CONDITION);
            _this.CONSUME6(Tokens.FOR);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE19(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLSTATE);
                        _this.OPTION395(function () {
                            _this.CONSUME(Tokens.VALUE);
                        });
                        _this.CONSUME27(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('declareCursor', function () {
            _this.CONSUME3(Tokens.DECLARE);
            _this.SUBRULE76(_this.uid);
            _this.CONSUME(Tokens.CURSOR);
            _this.CONSUME7(Tokens.FOR);
            _this.SUBRULE7(_this.selectStatement);
        });
        _this.RULE('declareHandler', function () {
            _this.CONSUME4(Tokens.DECLARE);
            _this.SUBRULE(_this.handlerAction);
            _this.CONSUME5(Tokens.HANDLER);
            _this.CONSUME8(Tokens.FOR);
            _this.SUBRULE(_this.handlerConditionValue);
            _this.MANY84(function () {
                _this.CONSUME54(Tokens.OP);
                _this.SUBRULE2(_this.handlerConditionValue);
            });
            _this.SUBRULE6(_this.routineBody);
        });
        _this.RULE('handlerConditionValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE20(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQLSTATE);
                        _this.OPTION396(function () {
                            _this.CONSUME2(Tokens.VALUE);
                        });
                        _this.CONSUME28(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE77(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLWARNING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.NOT);
                        _this.CONSUME(Tokens.FOUND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQLEXCEPTION);
                    },
                },
            ]);
        });
        _this.RULE('procedureSqlStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.compoundStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.sqlStatement);
                    },
                },
            ]);
            _this.CONSUME8(Tokens.SEMI);
        });
        _this.RULE('caseAlternative', function () {
            _this.CONSUME(Tokens.WHEN);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE28(_this.expression);
                    },
                },
            ]);
            _this.CONSUME2(Tokens.THEN);
            _this.AT_LEAST_ONE17(function () {
                _this.SUBRULE6(_this.procedureSqlStatement);
            });
        });
        _this.RULE('elifAlternative', function () {
            _this.CONSUME(Tokens.ELSEIF);
            _this.SUBRULE29(_this.expression);
            _this.CONSUME3(Tokens.THEN);
            _this.AT_LEAST_ONE18(function () {
                _this.SUBRULE7(_this.procedureSqlStatement);
            });
        });
        _this.RULE('alterUser', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME13(Tokens.ALTER);
                        _this.CONSUME3(Tokens.USER);
                        _this.SUBRULE(_this.userSpecification);
                        _this.MANY85(function () {
                            _this.CONSUME55(Tokens.OP);
                            _this.SUBRULE2(_this.userSpecification);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME14(Tokens.ALTER);
                        _this.CONSUME4(Tokens.USER);
                        _this.OPTION397(function () {
                            _this.SUBRULE9(_this.ifExists);
                        });
                        _this.SUBRULE(_this.userAuthOption);
                        _this.MANY86(function () {
                            _this.CONSUME56(Tokens.OP);
                            _this.SUBRULE2(_this.userAuthOption);
                        });
                        _this.OPTION398(function () {
                            _this.CONSUME(Tokens.REQUIRE);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.tlsNone);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.tlsOption);
                                        _this.MANY87(function () {
                                            _this.OPTION399(function () {
                                                _this.CONSUME3(Tokens.AND);
                                            });
                                            _this.SUBRULE2(_this.tlsOption);
                                        });
                                    },
                                },
                            ]);
                        });
                        _this.OPTION400(function () {
                            _this.CONSUME7(Tokens.WITH);
                            _this.AT_LEAST_ONE19(function () {
                                _this.SUBRULE(_this.userResourceOption);
                            });
                        });
                        _this.MANY88(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.userPasswordOption);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.userLockOption);
                                    },
                                },
                            ]);
                        });
                    },
                },
            ]);
        });
        _this.RULE('createUser', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME15(Tokens.CREATE);
                        _this.CONSUME5(Tokens.USER);
                        _this.SUBRULE3(_this.userAuthOption);
                        _this.MANY89(function () {
                            _this.CONSUME57(Tokens.OP);
                            _this.SUBRULE4(_this.userAuthOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME16(Tokens.CREATE);
                        _this.CONSUME6(Tokens.USER);
                        _this.OPTION401(function () {
                            _this.SUBRULE6(_this.ifNotExists);
                        });
                        _this.SUBRULE5(_this.userAuthOption);
                        _this.MANY90(function () {
                            _this.CONSUME58(Tokens.OP);
                            _this.SUBRULE6(_this.userAuthOption);
                        });
                        _this.OPTION402(function () {
                            _this.CONSUME2(Tokens.REQUIRE);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.tlsNone);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE3(_this.tlsOption);
                                        _this.MANY91(function () {
                                            _this.OPTION403(function () {
                                                _this.CONSUME4(Tokens.AND);
                                            });
                                            _this.SUBRULE4(_this.tlsOption);
                                        });
                                    },
                                },
                            ]);
                        });
                        _this.OPTION404(function () {
                            _this.CONSUME8(Tokens.WITH);
                            _this.AT_LEAST_ONE20(function () {
                                _this.SUBRULE2(_this.userResourceOption);
                            });
                        });
                        _this.MANY92(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.userPasswordOption);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.userLockOption);
                                    },
                                },
                            ]);
                        });
                    },
                },
            ]);
        });
        _this.RULE('dropUser', function () {
            _this.CONSUME18(Tokens.DROP);
            _this.CONSUME7(Tokens.USER);
            _this.OPTION405(function () {
                _this.SUBRULE10(_this.ifExists);
            });
            _this.SUBRULE2(_this.userName);
            _this.MANY93(function () {
                _this.CONSUME59(Tokens.OP);
                _this.SUBRULE3(_this.userName);
            });
        });
        _this.RULE('grantStatement', function () {
            _this.CONSUME(Tokens.GRANT);
            _this.SUBRULE(_this.privelegeClause);
            _this.MANY94(function () {
                _this.CONSUME60(Tokens.OP);
                _this.SUBRULE2(_this.privelegeClause);
            });
            _this.CONSUME17(Tokens.ON);
            _this.OPTION406(function () {
                _this.SUBRULE(_this.privilegeObject);
            });
            _this.SUBRULE(_this.privilegeLevel);
            _this.CONSUME7(Tokens.TO);
            _this.SUBRULE7(_this.userAuthOption);
            _this.MANY95(function () {
                _this.CONSUME61(Tokens.OP);
                _this.SUBRULE8(_this.userAuthOption);
            });
            _this.OPTION407(function () {
                _this.CONSUME3(Tokens.REQUIRE);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.tlsNone);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE5(_this.tlsOption);
                            _this.MANY96(function () {
                                _this.OPTION408(function () {
                                    _this.CONSUME5(Tokens.AND);
                                });
                                _this.SUBRULE6(_this.tlsOption);
                            });
                        },
                    },
                ]);
            });
            _this.OPTION409(function () {
                _this.CONSUME9(Tokens.WITH);
                _this.MANY97(function () {
                    _this.OR([
                        {
                            ALT: function () {
                                _this.CONSUME2(Tokens.GRANT);
                                _this.CONSUME3(Tokens.OPTION);
                            },
                        },
                        {
                            ALT: function () {
                                _this.SUBRULE3(_this.userResourceOption);
                            },
                        },
                    ]);
                });
            });
        });
        _this.RULE('grantProxy', function () {
            _this.CONSUME3(Tokens.GRANT);
            _this.CONSUME(Tokens.PROXY);
            _this.CONSUME18(Tokens.ON);
            _this.SUBRULE(_this.fromFirst);
            _this.CONSUME8(Tokens.TO);
            _this.SUBRULE(_this.toFirst);
            _this.MANY98(function () {
                _this.CONSUME62(Tokens.OP);
                _this.SUBRULE(_this.toOther);
            });
            _this.OPTION410(function () {
                _this.CONSUME10(Tokens.WITH);
                _this.CONSUME4(Tokens.GRANT);
                _this.CONSUME4(Tokens.OPTION);
            });
        });
        _this.RULE('renameUser', function () {
            _this.CONSUME4(Tokens.RENAME);
            _this.CONSUME8(Tokens.USER);
            _this.SUBRULE(_this.renameUserClause);
            _this.MANY99(function () {
                _this.CONSUME63(Tokens.OP);
                _this.SUBRULE2(_this.renameUserClause);
            });
        });
        _this.RULE('revokeStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVOKE);
                        _this.SUBRULE3(_this.privelegeClause);
                        _this.MANY100(function () {
                            _this.CONSUME64(Tokens.OP);
                            _this.SUBRULE4(_this.privelegeClause);
                        });
                        _this.CONSUME19(Tokens.ON);
                        _this.OPTION411(function () {
                            _this.SUBRULE2(_this.privilegeObject);
                        });
                        _this.SUBRULE2(_this.privilegeLevel);
                        _this.CONSUME7(Tokens.FROM);
                        _this.SUBRULE4(_this.userName);
                        _this.MANY101(function () {
                            _this.CONSUME65(Tokens.OP);
                            _this.SUBRULE5(_this.userName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REVOKE);
                        _this.CONSUME11(Tokens.ALL);
                        _this.OPTION412(function () {
                            _this.CONSUME(Tokens.PRIVILEGES);
                        });
                        _this.CONSUME66(Tokens.OP);
                        _this.CONSUME5(Tokens.GRANT);
                        _this.CONSUME5(Tokens.OPTION);
                        _this.CONSUME8(Tokens.FROM);
                        _this.SUBRULE6(_this.userName);
                        _this.MANY102(function () {
                            _this.CONSUME67(Tokens.OP);
                            _this.SUBRULE7(_this.userName);
                        });
                    },
                },
            ]);
        });
        _this.RULE('revokeProxy', function () {
            _this.CONSUME3(Tokens.REVOKE);
            _this.CONSUME2(Tokens.PROXY);
            _this.CONSUME20(Tokens.ON);
            _this.SUBRULE(_this.onUser);
            _this.CONSUME9(Tokens.FROM);
            _this.SUBRULE2(_this.fromFirst);
            _this.MANY103(function () {
                _this.CONSUME68(Tokens.OP);
                _this.SUBRULE(_this.fromOther);
            });
        });
        _this.RULE('setPasswordStatement', function () {
            _this.CONSUME18(Tokens.SET);
            _this.CONSUME4(Tokens.PASSWORD);
            _this.OPTION413(function () {
                _this.CONSUME9(Tokens.FOR);
                _this.SUBRULE8(_this.userName);
            });
            _this.CONSUME93(Tokens.OP);
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.passwordFunctionClause);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME29(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('userSpecification', function () {
            _this.SUBRULE9(_this.userName);
            _this.SUBRULE3(_this.userPasswordOption);
        });
        _this.RULE('userAuthOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE10(_this.userName);
                        _this.CONSUME2(Tokens.IDENTIFIED);
                        _this.CONSUME14(Tokens.BY);
                        _this.CONSUME5(Tokens.PASSWORD);
                        _this.SUBRULE(_this.hashed);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE11(_this.userName);
                        _this.CONSUME3(Tokens.IDENTIFIED);
                        _this.OPTION414(function () {
                            _this.CONSUME11(Tokens.WITH);
                            _this.SUBRULE(_this.authPlugin);
                        });
                        _this.CONSUME15(Tokens.BY);
                        _this.CONSUME30(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE12(_this.userName);
                        _this.CONSUME4(Tokens.IDENTIFIED);
                        _this.CONSUME12(Tokens.WITH);
                        _this.SUBRULE2(_this.authPlugin);
                        _this.OPTION415(function () {
                            _this.CONSUME12(Tokens.AS);
                            _this.CONSUME31(Tokens.STRING_LITERAL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE13(_this.userName);
                    },
                },
            ]);
        });
        _this.RULE('tlsOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SSL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.X509);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CIPHER);
                        _this.CONSUME32(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISSUER);
                        _this.CONSUME33(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBJECT);
                        _this.CONSUME34(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('userResourceOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_QUERIES_PER_HOUR);
                        _this.SUBRULE21(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_UPDATES_PER_HOUR);
                        _this.SUBRULE22(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_CONNECTIONS_PER_HOUR);
                        _this.SUBRULE23(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAX_USER_CONNECTIONS);
                        _this.SUBRULE24(_this.decimalLiteral);
                    },
                },
            ]);
        });
        _this.RULE('userPasswordOption', function () {
            _this.CONSUME6(Tokens.PASSWORD);
            _this.CONSUME(Tokens.EXPIRE);
            _this.OPTION416(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.expireType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE2(_this.expireType);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.expireType);
                            _this.SUBRULE25(_this.decimalLiteral);
                            _this.CONSUME(Tokens.DAY);
                        },
                    },
                ]);
            });
        });
        _this.RULE('userLockOption', function () {
            _this.CONSUME(Tokens.ACCOUNT);
            _this.SUBRULE4(_this.lockType);
        });
        _this.RULE('privelegeClause', function () {
            _this.SUBRULE(_this.privilege);
            _this.OPTION417(function () {
                _this.CONSUME59(Tokens.OP);
                _this.SUBRULE28(_this.uidList);
                _this.CONSUME59(Tokens.OP);
            });
        });
        _this.RULE('privilege', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.ALL);
                        _this.OPTION418(function () {
                            _this.CONSUME2(Tokens.PRIVILEGES);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME15(Tokens.ALTER);
                        _this.OPTION419(function () {
                            _this.CONSUME(Tokens.ROUTINE);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME17(Tokens.CREATE);
                        _this.OPTION420(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME5(Tokens.TEMPORARY);
                                        _this.CONSUME3(Tokens.TABLES);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.ROUTINE);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME4(Tokens.VIEW);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME9(Tokens.USER);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME11(Tokens.TABLESPACE);
                                    },
                                },
                            ]);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.DELETE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME19(Tokens.DROP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.EVENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EXECUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.GRANT);
                        _this.CONSUME6(Tokens.OPTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.INDEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INSERT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.LOCK);
                        _this.CONSUME4(Tokens.TABLES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROCESS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PROXY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REFERENCES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELOAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATION);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CLIENT);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME5(Tokens.SLAVE);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.SELECT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHOW);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME5(Tokens.VIEW);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.DATABASES);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHUTDOWN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUPER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.TRIGGER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.UPDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.USAGE);
                    },
                },
            ]);
        });
        _this.RULE('privilegeLevel', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.OP);
                        _this.CONSUME6(Tokens.OP);
                        _this.CONSUME8(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE78(_this.uid);
                        _this.CONSUME7(Tokens.OP);
                        _this.CONSUME9(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE79(_this.uid);
                        _this.CONSUME8(Tokens.OP);
                        _this.SUBRULE80(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE81(_this.uid);
                    },
                },
            ]);
        });
        _this.RULE('renameUserClause', function () {
            _this.SUBRULE3(_this.fromFirst);
            _this.CONSUME9(Tokens.TO);
            _this.SUBRULE2(_this.toFirst);
        });
        _this.RULE('analyzeTable', function () {
            _this.CONSUME2(Tokens.ANALYZE);
            _this.OPTION421(function () {
                _this.SUBRULE(_this.actionOption);
            });
            _this.CONSUME11(Tokens.TABLE);
            _this.SUBRULE5(_this.tables);
        });
        _this.RULE('checkTable', function () {
            _this.CONSUME5(Tokens.CHECK);
            _this.CONSUME12(Tokens.TABLE);
            _this.SUBRULE6(_this.tables);
            _this.MANY104(function () {
                _this.SUBRULE(_this.checkTableOption);
            });
        });
        _this.RULE('checksumTable', function () {
            _this.CONSUME2(Tokens.CHECKSUM);
            _this.CONSUME13(Tokens.TABLE);
            _this.SUBRULE7(_this.tables);
            _this.OPTION422(function () {
                _this.SUBRULE2(_this.actionOption);
            });
        });
        _this.RULE('optimizeTable', function () {
            _this.CONSUME2(Tokens.OPTIMIZE);
            _this.OPTION423(function () {
                _this.SUBRULE3(_this.actionOption);
            });
            _this.CONSUME14(Tokens.TABLE);
            _this.SUBRULE8(_this.tables);
        });
        _this.RULE('repairTable', function () {
            _this.CONSUME2(Tokens.REPAIR);
            _this.OPTION424(function () {
                _this.SUBRULE4(_this.actionOption);
            });
            _this.CONSUME15(Tokens.TABLE);
            _this.SUBRULE9(_this.tables);
            _this.OPTION425(function () {
                _this.CONSUME3(Tokens.QUICK);
            });
            _this.OPTION426(function () {
                _this.CONSUME(Tokens.EXTENDED);
            });
            _this.OPTION427(function () {
                _this.CONSUME(Tokens.USE_FRM);
            });
        });
        _this.RULE('checkTableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.FOR);
                        _this.CONSUME3(Tokens.UPGRADE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.QUICK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FAST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MEDIUM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EXTENDED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHANGED);
                    },
                },
            ]);
        });
        _this.RULE('createUdfunction', function () {
            _this.CONSUME18(Tokens.CREATE);
            _this.OPTION428(function () {
                _this.CONSUME(Tokens.AGGREGATE);
            });
            _this.CONSUME4(Tokens.FUNCTION);
            _this.SUBRULE82(_this.uid);
            _this.CONSUME2(Tokens.RETURNS);
            _this.SUBRULE(_this.returnType);
            _this.CONSUME(Tokens.SONAME);
            _this.CONSUME35(Tokens.STRING_LITERAL);
        });
        _this.RULE('installPlugin', function () {
            _this.CONSUME(Tokens.INSTALL);
            _this.CONSUME(Tokens.PLUGIN);
            _this.SUBRULE83(_this.uid);
            _this.CONSUME2(Tokens.SONAME);
            _this.CONSUME36(Tokens.STRING_LITERAL);
        });
        _this.RULE('uninstallPlugin', function () {
            _this.CONSUME(Tokens.UNINSTALL);
            _this.CONSUME2(Tokens.PLUGIN);
            _this.SUBRULE84(_this.uid);
        });
        _this.RULE('setStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME19(Tokens.SET);
                        _this.SUBRULE(_this.variableClause);
                        _this.CONSUME94(Tokens.OP);
                        _this.SUBRULE30(_this.expression);
                        _this.MANY105(function () {
                            _this.CONSUME69(Tokens.OP);
                            _this.SUBRULE2(_this.variableClause);
                            _this.CONSUME95(Tokens.OP);
                            _this.SUBRULE31(_this.expression);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME20(Tokens.SET);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME8(Tokens.CHARACTER);
                                    _this.CONSUME21(Tokens.SET);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.CHARSET);
                                },
                            },
                        ]);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE5(_this.charsetName);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME12(Tokens.DEFAULT);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME22(Tokens.SET);
                        _this.CONSUME(Tokens.NAMES);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE6(_this.charsetName);
                                    _this.OPTION429(function () {
                                        _this.CONSUME5(Tokens.COLLATE);
                                        _this.SUBRULE5(_this.collationName);
                                    });
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME13(Tokens.DEFAULT);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.setPasswordStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.setTransactionStatement);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.setAutocommitStatement);
                    },
                },
            ]);
        });
        _this.RULE('showStatement', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SHOW);
                        _this.SUBRULE(_this.logFormat);
                        _this.CONSUME2(Tokens.LOGS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.SHOW);
                        _this.SUBRULE2(_this.logFormat);
                        _this.CONSUME(Tokens.EVENTS);
                        _this.OPTION430(function () {
                            _this.CONSUME4(Tokens.IN);
                            _this.SUBRULE4(_this.filename);
                        });
                        _this.OPTION431(function () {
                            _this.CONSUME10(Tokens.FROM);
                            _this.SUBRULE(_this.fromPosition);
                        });
                        _this.OPTION432(function () {
                            _this.CONSUME5(Tokens.LIMIT);
                            _this.OPTION433(function () {
                                _this.SUBRULE3(_this.offset);
                                _this.CONSUME70(Tokens.OP);
                            });
                            _this.SUBRULE(_this.rowCount);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.SHOW);
                        _this.SUBRULE(_this.showCommonEntity);
                        _this.OPTION434(function () {
                            _this.SUBRULE(_this.showFilter);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.SHOW);
                        _this.OPTION435(function () {
                            _this.CONSUME(Tokens.FULL);
                        });
                        _this.SUBRULE(_this.columnsFormat);
                        _this.SUBRULE(_this.tableFormat);
                        _this.SUBRULE30(_this.tableName);
                        _this.OPTION436(function () {
                            _this.SUBRULE(_this.schemaFormat);
                            _this.SUBRULE85(_this.uid);
                        });
                        _this.OPTION437(function () {
                            _this.SUBRULE2(_this.showFilter);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.SHOW);
                        _this.CONSUME19(Tokens.CREATE);
                        _this.SUBRULE2(_this.schemaFormat);
                        _this.OPTION438(function () {
                            _this.SUBRULE7(_this.ifNotExists);
                        });
                        _this.SUBRULE86(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.SHOW);
                        _this.CONSUME20(Tokens.CREATE);
                        _this.SUBRULE(_this.namedEntity);
                        _this.SUBRULE18(_this.fullId);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.SHOW);
                        _this.CONSUME21(Tokens.CREATE);
                        _this.CONSUME10(Tokens.USER);
                        _this.SUBRULE14(_this.userName);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.SHOW);
                        _this.CONSUME10(Tokens.ENGINE);
                        _this.SUBRULE10(_this.engineName);
                        _this.SUBRULE(_this.engineOption);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.SHOW);
                        _this.SUBRULE(_this.showGlobalInfoClause);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME11(Tokens.SHOW);
                        _this.SUBRULE(_this.errorFormat);
                        _this.CONSUME6(Tokens.LIMIT);
                        _this.OPTION439(function () {
                            _this.SUBRULE4(_this.offset);
                            _this.CONSUME71(Tokens.OP);
                        });
                        _this.SUBRULE2(_this.rowCount);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.SHOW);
                        _this.CONSUME(Tokens.COUNT);
                        _this.CONSUME60(Tokens.OP);
                        _this.CONSUME10(Tokens.OP);
                        _this.CONSUME60(Tokens.OP);
                        _this.SUBRULE2(_this.errorFormat);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME13(Tokens.SHOW);
                        _this.SUBRULE(_this.showSchemaEntity);
                        _this.OPTION440(function () {
                            _this.SUBRULE3(_this.schemaFormat);
                            _this.SUBRULE87(_this.uid);
                        });
                        _this.OPTION441(function () {
                            _this.SUBRULE3(_this.showFilter);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME14(Tokens.SHOW);
                        _this.SUBRULE(_this.routine);
                        _this.CONSUME(Tokens.CODE);
                        _this.SUBRULE19(_this.fullId);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME15(Tokens.SHOW);
                        _this.CONSUME(Tokens.GRANTS);
                        _this.OPTION442(function () {
                            _this.CONSUME11(Tokens.FOR);
                            _this.SUBRULE15(_this.userName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME16(Tokens.SHOW);
                        _this.SUBRULE8(_this.indexFormat);
                        _this.SUBRULE2(_this.tableFormat);
                        _this.SUBRULE31(_this.tableName);
                        _this.OPTION443(function () {
                            _this.SUBRULE4(_this.schemaFormat);
                            _this.SUBRULE88(_this.uid);
                        });
                        _this.OPTION444(function () {
                            _this.CONSUME8(Tokens.WHERE);
                            _this.SUBRULE32(_this.expression);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME17(Tokens.SHOW);
                        _this.CONSUME3(Tokens.OPEN);
                        _this.CONSUME5(Tokens.TABLES);
                        _this.OPTION445(function () {
                            _this.SUBRULE5(_this.schemaFormat);
                            _this.SUBRULE89(_this.uid);
                        });
                        _this.OPTION446(function () {
                            _this.SUBRULE4(_this.showFilter);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME18(Tokens.SHOW);
                        _this.CONSUME(Tokens.PROFILE);
                        _this.SUBRULE(_this.showProfileType);
                        _this.MANY106(function () {
                            _this.CONSUME72(Tokens.OP);
                            _this.SUBRULE2(_this.showProfileType);
                        });
                        _this.OPTION447(function () {
                            _this.CONSUME12(Tokens.FOR);
                            _this.CONSUME(Tokens.QUERY);
                            _this.SUBRULE(_this.queryCount);
                        });
                        _this.CONSUME7(Tokens.LIMIT);
                        _this.OPTION448(function () {
                            _this.SUBRULE5(_this.offset);
                            _this.CONSUME73(Tokens.OP);
                        });
                        _this.SUBRULE3(_this.rowCount);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME19(Tokens.SHOW);
                        _this.CONSUME6(Tokens.SLAVE);
                        _this.CONSUME(Tokens.STATUS);
                        _this.OPTION449(function () {
                            _this.CONSUME13(Tokens.FOR);
                            _this.CONSUME2(Tokens.CHANNEL);
                            _this.CONSUME37(Tokens.STRING_LITERAL);
                        });
                    },
                },
            ]);
        });
        _this.RULE('variableClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.LOCAL_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLOBAL_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION450(function () {
                            _this.OPTION451(function () {
                                _this.CONSUME(Tokens.OP);
                                _this.CONSUME2(Tokens.OP);
                            });
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.GLOBAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME(Tokens.SESSION);
                                    },
                                },
                            ]);
                        });
                        _this.SUBRULE90(_this.uid);
                    },
                },
            ]);
        });
        _this.RULE('showCommonEntity', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.CHARACTER);
                        _this.CONSUME23(Tokens.SET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COLLATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DATABASES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SCHEMAS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.FUNCTION);
                        _this.CONSUME2(Tokens.STATUS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.PROCEDURE);
                        _this.CONSUME3(Tokens.STATUS);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION452(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.GLOBAL);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.CONSUME2(Tokens.SESSION);
                                    },
                                },
                            ]);
                        });
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.STATUS);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VARIABLES);
                                },
                            },
                        ]);
                    },
                },
            ]);
        });
        _this.RULE('showFilter', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.LIKE);
                        _this.CONSUME38(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.WHERE);
                        _this.SUBRULE33(_this.expression);
                    },
                },
            ]);
        });
        _this.RULE('showGlobalInfoClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OPTION453(function () {
                            _this.CONSUME4(Tokens.STORAGE);
                        });
                        _this.CONSUME(Tokens.ENGINES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.MASTER);
                        _this.CONSUME5(Tokens.STATUS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PLUGINS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PRIVILEGES);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION454(function () {
                            _this.CONSUME2(Tokens.FULL);
                        });
                        _this.CONSUME(Tokens.PROCESSLIST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PROFILES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.SLAVE);
                        _this.CONSUME(Tokens.HOSTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AUTHORS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTRIBUTORS);
                    },
                },
            ]);
        });
        _this.RULE('showSchemaEntity', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EVENTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME16(Tokens.TABLE);
                        _this.CONSUME6(Tokens.STATUS);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION455(function () {
                            _this.CONSUME3(Tokens.FULL);
                        });
                        _this.CONSUME6(Tokens.TABLES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIGGERS);
                    },
                },
            ]);
        });
        _this.RULE('showProfileType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME13(Tokens.ALL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BLOCK);
                        _this.CONSUME(Tokens.IO);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONTEXT);
                        _this.CONSUME(Tokens.SWITCHES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CPU);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IPC);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MEMORY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PAGE);
                        _this.CONSUME(Tokens.FAULTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOURCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWAPS);
                    },
                },
            ]);
        });
        _this.RULE('binlogStatement', function () {
            _this.CONSUME(Tokens.BINLOG);
            _this.CONSUME39(Tokens.STRING_LITERAL);
        });
        _this.RULE('cacheIndexStatement', function () {
            _this.CONSUME(Tokens.CACHE);
            _this.CONSUME6(Tokens.INDEX);
            _this.SUBRULE(_this.tableIndexes);
            _this.MANY107(function () {
                _this.CONSUME74(Tokens.OP);
                _this.SUBRULE2(_this.tableIndexes);
            });
            _this.OPTION456(function () {
                _this.CONSUME24(Tokens.PARTITION);
                _this.CONSUME61(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE29(_this.uidList);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME14(Tokens.ALL);
                        },
                    },
                ]);
                _this.CONSUME61(Tokens.OP);
            });
            _this.CONSUME5(Tokens.IN);
            _this.SUBRULE(_this.schema);
        });
        _this.RULE('flushStatement', function () {
            _this.CONSUME(Tokens.FLUSH);
            _this.OPTION457(function () {
                _this.SUBRULE(_this.flushFormat);
            });
            _this.SUBRULE(_this.flushOption);
            _this.MANY108(function () {
                _this.CONSUME75(Tokens.OP);
                _this.SUBRULE2(_this.flushOption);
            });
        });
        _this.RULE('killStatement', function () {
            _this.CONSUME(Tokens.KILL);
            _this.OPTION458(function () {
                _this.SUBRULE(_this.connectionFormat);
            });
            _this.AT_LEAST_ONE21(function () {
                _this.SUBRULE26(_this.decimalLiteral);
            });
        });
        _this.RULE('loadIndexIntoCache', function () {
            _this.CONSUME3(Tokens.LOAD);
            _this.CONSUME7(Tokens.INDEX);
            _this.CONSUME10(Tokens.INTO);
            _this.CONSUME2(Tokens.CACHE);
            _this.SUBRULE(_this.loadedTableIndexes);
            _this.MANY109(function () {
                _this.CONSUME76(Tokens.OP);
                _this.SUBRULE2(_this.loadedTableIndexes);
            });
        });
        _this.RULE('resetStatement', function () {
            _this.CONSUME3(Tokens.RESET);
            _this.CONSUME2(Tokens.QUERY);
            _this.CONSUME3(Tokens.CACHE);
        });
        _this.RULE('shutdownStatement', function () {
            _this.CONSUME2(Tokens.SHUTDOWN);
        });
        _this.RULE('tableIndexes', function () {
            _this.SUBRULE32(_this.tableName);
            _this.OPTION459(function () {
                _this.OPTION460(function () {
                    _this.SUBRULE9(_this.indexFormat);
                });
                _this.CONSUME62(Tokens.OP);
                _this.SUBRULE30(_this.uidList);
                _this.CONSUME62(Tokens.OP);
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
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.HOSTS);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.OPTION461(function () {
                                        _this.OR([
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.BINARY);
                                                },
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME11(Tokens.ENGINE);
                                                },
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.ERROR);
                                                },
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.GENERAL);
                                                },
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.RELAY);
                                                },
                                            },
                                            {
                                                ALT: function () {
                                                    _this.CONSUME(Tokens.SLOW);
                                                },
                                            },
                                        ]);
                                    });
                                    _this.CONSUME3(Tokens.LOGS);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.OPTIMIZER_COSTS);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.PRIVILEGES);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME3(Tokens.QUERY);
                                    _this.CONSUME4(Tokens.CACHE);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME7(Tokens.STATUS);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.USER_RESOURCES);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME7(Tokens.TABLES);
                                    _this.OPTION462(function () {
                                        _this.CONSUME13(Tokens.WITH);
                                        _this.CONSUME11(Tokens.READ);
                                        _this.CONSUME7(Tokens.LOCK);
                                    });
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.RELAY);
                        _this.CONSUME4(Tokens.LOGS);
                        _this.OPTION463(function () {
                            _this.SUBRULE4(_this.channelOption);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.TABLES);
                        _this.SUBRULE10(_this.tables);
                        _this.OPTION464(function () {
                            _this.SUBRULE(_this.flushTableOption);
                        });
                    },
                },
            ]);
        });
        _this.RULE('flushTableOption', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME14(Tokens.WITH);
                        _this.CONSUME12(Tokens.READ);
                        _this.CONSUME8(Tokens.LOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME14(Tokens.FOR);
                        _this.CONSUME(Tokens.EXPORT);
                    },
                },
            ]);
        });
        _this.RULE('loadedTableIndexes', function () {
            _this.SUBRULE33(_this.tableName);
            _this.OPTION465(function () {
                _this.CONSUME25(Tokens.PARTITION);
                _this.CONSUME63(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.partitionList);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME15(Tokens.ALL);
                        },
                    },
                ]);
                _this.CONSUME63(Tokens.OP);
            });
            _this.OPTION466(function () {
                _this.OPTION467(function () {
                    _this.SUBRULE10(_this.indexFormat);
                });
                _this.CONSUME64(Tokens.OP);
                _this.SUBRULE(_this.indexList);
                _this.CONSUME64(Tokens.OP);
            });
            _this.OPTION468(function () {
                _this.CONSUME9(Tokens.IGNORE);
                _this.CONSUME(Tokens.LEAVES);
            });
        });
        _this.RULE('simpleDescribeStatement', function () {
            _this.SUBRULE(_this.command);
            _this.SUBRULE34(_this.tableName);
            _this.OPTION469(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.column);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE(_this.pattern);
                        },
                    },
                ]);
            });
        });
        _this.RULE('fullDescribeStatement', function () {
            _this.SUBRULE2(_this.command);
            _this.OPTION470(function () {
                _this.SUBRULE(_this.formatType);
                _this.CONSUME96(Tokens.OP);
                _this.SUBRULE(_this.formatValue);
            });
            _this.SUBRULE(_this.describeObjectClause);
        });
        _this.RULE('helpStatement', function () {
            _this.CONSUME(Tokens.HELP);
            _this.CONSUME40(Tokens.STRING_LITERAL);
        });
        _this.RULE('useStatement', function () {
            _this.CONSUME2(Tokens.USE);
            _this.SUBRULE91(_this.uid);
        });
        _this.RULE('describeObjectClause', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE8(_this.selectStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.deleteStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.insertStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.replaceStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.updateStatement);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME15(Tokens.FOR);
                        _this.CONSUME2(Tokens.CONNECTION);
                        _this.SUBRULE92(_this.uid);
                    },
                },
            ]);
        });
        _this.RULE('fullId', function () {
            _this.SUBRULE93(_this.uid);
            _this.OPTION471(function () {
                _this.OR([
                    {
                        ALT: function () {
                            _this.CONSUME(Tokens.DOT_ID);
                        },
                    },
                    {
                        ALT: function () {
                            _this.CONSUME9(Tokens.OP);
                            _this.SUBRULE94(_this.uid);
                        },
                    },
                ]);
            });
        });
        _this.RULE('tableName', function () {
            _this.SUBRULE20(_this.fullId);
        });
        _this.RULE('fullColumnName', function () {
            _this.SUBRULE95(_this.uid);
            _this.OPTION472(function () {
                _this.SUBRULE(_this.dottedId);
                _this.OPTION473(function () {
                    _this.SUBRULE2(_this.dottedId);
                });
            });
        });
        _this.RULE('indexColumnName', function () {
            _this.SUBRULE96(_this.uid);
            _this.OPTION474(function () {
                _this.CONSUME65(Tokens.OP);
                _this.SUBRULE27(_this.decimalLiteral);
                _this.CONSUME65(Tokens.OP);
            });
            _this.OPTION475(function () {
                _this.SUBRULE(_this.sortType);
            });
        });
        _this.RULE('userName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING_USER_NAME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ID);
                    },
                },
            ]);
        });
        _this.RULE('mysqlVariable', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.LOCAL_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.GLOBAL_ID);
                    },
                },
            ]);
        });
        _this.RULE('charsetName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.BINARY);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.charsetNameBase);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME41(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARSET_REVERSE_QOUTE_STRING);
                    },
                },
            ]);
        });
        _this.RULE('collationName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE97(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME42(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('engineName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ARCHIVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BLACKHOLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CSV);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FEDERATED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INNODB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.MEMORY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MRG_MYISAM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MYISAM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NDB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NDBCLUSTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERFOMANCE_SCHEMA);
                    },
                },
            ]);
        });
        _this.RULE('uuidSet', function () {
            _this.SUBRULE28(_this.decimalLiteral);
            _this.CONSUME(Tokens.OP);
            _this.SUBRULE29(_this.decimalLiteral);
            _this.CONSUME2(Tokens.OP);
            _this.SUBRULE30(_this.decimalLiteral);
            _this.CONSUME3(Tokens.OP);
            _this.SUBRULE31(_this.decimalLiteral);
            _this.CONSUME4(Tokens.OP);
            _this.SUBRULE32(_this.decimalLiteral);
            _this.AT_LEAST_ONE22(function () {
                _this.CONSUME5(Tokens.OP);
                _this.SUBRULE33(_this.decimalLiteral);
                _this.CONSUME5(Tokens.OP);
                _this.SUBRULE34(_this.decimalLiteral);
            });
        });
        _this.RULE('xid', function () {
            _this.SUBRULE(_this.globalTableUid);
            _this.OPTION476(function () {
                _this.CONSUME77(Tokens.OP);
                _this.SUBRULE(_this.qualifier);
                _this.OPTION477(function () {
                    _this.CONSUME78(Tokens.OP);
                    _this.SUBRULE(_this.idFormat);
                });
            });
        });
        _this.RULE('xuidStringId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME43(Tokens.STRING_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_STRING);
                    },
                },
                {
                    ALT: function () {
                        _this.AT_LEAST_ONE23(function () {
                            _this.CONSUME(Tokens.HEXADECIMAL_LITERAL);
                        });
                    },
                },
            ]);
        });
        _this.RULE('authPlugin', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE98(_this.uid);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME44(Tokens.STRING_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('uid', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.simpleId);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVERSE_QUOTE_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CHARSET_REVERSE_QOUTE_STRING);
                    },
                },
            ]);
        });
        _this.RULE('simpleId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ID);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.charsetNameBase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.transactionLevelBase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE11(_this.engineName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.privilegesBase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.intervalTypeBase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.dataTypeBase);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.keywordsCanBeId);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.functionNameBase);
                    },
                },
            ]);
        });
        _this.RULE('dottedId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DOT_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.OP);
                        _this.SUBRULE99(_this.uid);
                    },
                },
            ]);
        });
        _this.RULE('decimalLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DECIMAL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ZERO_DECIMAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONE_DECIMAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TWO_DECIMAL);
                    },
                },
            ]);
        });
        _this.RULE('fileSizeLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FILESIZE_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE35(_this.decimalLiteral);
                    },
                },
            ]);
        });
        _this.RULE('stringLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.OPTION478(function () {
                                        _this.CONSUME(Tokens.STRING_CHARSET_NAME);
                                    });
                                    _this.CONSUME45(Tokens.STRING_LITERAL);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.START_NATIONAL_STRING_LITERAL);
                                },
                            },
                        ]);
                        _this.AT_LEAST_ONE24(function () {
                            _this.CONSUME46(Tokens.STRING_LITERAL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.OPTION479(function () {
                                        _this.CONSUME2(Tokens.STRING_CHARSET_NAME);
                                    });
                                    _this.CONSUME47(Tokens.STRING_LITERAL);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.START_NATIONAL_STRING_LITERAL);
                                },
                            },
                        ]);
                        _this.OPTION480(function () {
                            _this.CONSUME6(Tokens.COLLATE);
                            _this.SUBRULE6(_this.collationName);
                        });
                    },
                },
            ]);
        });
        _this.RULE('booleanLiteral', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRUE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FALSE);
                    },
                },
            ]);
        });
        _this.RULE('hexadecimalLiteral', function () {
            _this.OPTION481(function () {
                _this.CONSUME3(Tokens.STRING_CHARSET_NAME);
            });
            _this.CONSUME2(Tokens.HEXADECIMAL_LITERAL);
        });
        _this.RULE('nullNotnull', function () {
            _this.OPTION482(function () {
                _this.CONSUME5(Tokens.NOT);
            });
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.NULL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULL_SPEC_LITERAL);
                    },
                },
            ]);
        });
        _this.RULE('constant', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.stringLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE36(_this.decimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.hexadecimalLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.booleanLiteral);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REAL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.BIT_STRING);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION483(function () {
                            _this.CONSUME6(Tokens.NOT);
                        });
                        _this.SUBRULE(_this.nullLiteral);
                    },
                },
            ]);
        });
        _this.RULE('dataType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.typeName);
                        _this.OPTION484(function () {
                            _this.SUBRULE(_this.lengthOneDimension);
                        });
                        _this.OPTION485(function () {
                            _this.CONSUME3(Tokens.BINARY);
                        });
                        _this.OPTION486(function () {
                            _this.CONSUME10(Tokens.CHARACTER);
                            _this.CONSUME24(Tokens.SET);
                            _this.SUBRULE7(_this.charsetName);
                        });
                        _this.OPTION487(function () {
                            _this.CONSUME7(Tokens.COLLATE);
                            _this.SUBRULE7(_this.collationName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.typeName);
                        _this.OPTION488(function () {
                            _this.SUBRULE2(_this.lengthOneDimension);
                        });
                        _this.OPTION489(function () {
                            _this.CONSUME(Tokens.UNSIGNED);
                        });
                        _this.OPTION490(function () {
                            _this.CONSUME(Tokens.ZEROFILL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.typeName);
                        _this.OPTION491(function () {
                            _this.SUBRULE(_this.lengthTwoDimension);
                        });
                        _this.OPTION492(function () {
                            _this.CONSUME2(Tokens.UNSIGNED);
                        });
                        _this.OPTION493(function () {
                            _this.CONSUME2(Tokens.ZEROFILL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.typeName);
                        _this.OPTION494(function () {
                            _this.SUBRULE(_this.lengthTwoOptionalDimension);
                        });
                        _this.OPTION495(function () {
                            _this.CONSUME3(Tokens.UNSIGNED);
                        });
                        _this.OPTION496(function () {
                            _this.CONSUME3(Tokens.ZEROFILL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.typeName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE6(_this.typeName);
                        _this.OPTION497(function () {
                            _this.SUBRULE3(_this.lengthOneDimension);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE7(_this.typeName);
                        _this.CONSUME66(Tokens.OP);
                        _this.CONSUME48(Tokens.STRING_LITERAL);
                        _this.MANY110(function () {
                            _this.CONSUME79(Tokens.OP);
                            _this.CONSUME49(Tokens.STRING_LITERAL);
                        });
                        _this.CONSUME66(Tokens.OP);
                        _this.OPTION498(function () {
                            _this.CONSUME4(Tokens.BINARY);
                        });
                        _this.OPTION499(function () {
                            _this.CONSUME11(Tokens.CHARACTER);
                            _this.CONSUME25(Tokens.SET);
                            _this.SUBRULE8(_this.charsetName);
                        });
                        _this.OPTION500(function () {
                            _this.CONSUME8(Tokens.COLLATE);
                            _this.SUBRULE8(_this.collationName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE8(_this.typeName);
                    },
                },
            ]);
        });
        _this.RULE('convertedDataType', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE9(_this.typeName);
                        _this.OPTION501(function () {
                            _this.SUBRULE4(_this.lengthOneDimension);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE10(_this.typeName);
                        _this.OPTION502(function () {
                            _this.SUBRULE5(_this.lengthOneDimension);
                        });
                        _this.OPTION503(function () {
                            _this.CONSUME12(Tokens.CHARACTER);
                            _this.CONSUME26(Tokens.SET);
                            _this.SUBRULE9(_this.charsetName);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE11(_this.typeName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE12(_this.typeName);
                        _this.OPTION504(function () {
                            _this.SUBRULE2(_this.lengthTwoDimension);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SIGNED);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME4(Tokens.UNSIGNED);
                                },
                            },
                        ]);
                        _this.OPTION505(function () {
                            _this.CONSUME(Tokens.INTEGER);
                        });
                    },
                },
            ]);
        });
        _this.RULE('lengthOneDimension', function () {
            _this.CONSUME67(Tokens.OP);
            _this.SUBRULE37(_this.decimalLiteral);
            _this.CONSUME67(Tokens.OP);
        });
        _this.RULE('lengthTwoDimension', function () {
            _this.CONSUME68(Tokens.OP);
            _this.SUBRULE38(_this.decimalLiteral);
            _this.CONSUME80(Tokens.OP);
            _this.SUBRULE39(_this.decimalLiteral);
            _this.CONSUME68(Tokens.OP);
        });
        _this.RULE('lengthTwoOptionalDimension', function () {
            _this.CONSUME69(Tokens.OP);
            _this.SUBRULE40(_this.decimalLiteral);
            _this.OPTION506(function () {
                _this.CONSUME81(Tokens.OP);
                _this.SUBRULE41(_this.decimalLiteral);
            });
            _this.CONSUME69(Tokens.OP);
        });
        _this.RULE('uidList', function () {
            _this.SUBRULE100(_this.uid);
            _this.MANY111(function () {
                _this.CONSUME82(Tokens.OP);
                _this.SUBRULE101(_this.uid);
            });
        });
        _this.RULE('tables', function () {
            _this.SUBRULE35(_this.tableName);
            _this.MANY112(function () {
                _this.CONSUME83(Tokens.OP);
                _this.SUBRULE36(_this.tableName);
            });
        });
        _this.RULE('indexColumnNames', function () {
            _this.CONSUME70(Tokens.OP);
            _this.SUBRULE(_this.indexColumnName);
            _this.MANY113(function () {
                _this.CONSUME84(Tokens.OP);
                _this.SUBRULE2(_this.indexColumnName);
            });
            _this.CONSUME70(Tokens.OP);
        });
        _this.RULE('expressions', function () {
            _this.SUBRULE34(_this.expression);
            _this.MANY114(function () {
                _this.CONSUME85(Tokens.OP);
                _this.SUBRULE35(_this.expression);
            });
        });
        _this.RULE('expressionsWithDefaults', function () {
            _this.SUBRULE(_this.expressionOrDefault);
            _this.MANY115(function () {
                _this.CONSUME86(Tokens.OP);
                _this.SUBRULE2(_this.expressionOrDefault);
            });
        });
        _this.RULE('constants', function () {
            _this.SUBRULE3(_this.constant);
            _this.MANY116(function () {
                _this.CONSUME87(Tokens.OP);
                _this.SUBRULE4(_this.constant);
            });
        });
        _this.RULE('simpleStrings', function () {
            _this.CONSUME50(Tokens.STRING_LITERAL);
            _this.MANY117(function () {
                _this.CONSUME88(Tokens.OP);
                _this.CONSUME51(Tokens.STRING_LITERAL);
            });
        });
        _this.RULE('userVariables', function () {
            _this.CONSUME5(Tokens.LOCAL_ID);
            _this.MANY118(function () {
                _this.CONSUME89(Tokens.OP);
                _this.CONSUME6(Tokens.LOCAL_ID);
            });
        });
        _this.RULE('defaultValue', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.NULL_LITERAL);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CURRENT_TIMESTAMP);
                        _this.OPTION507(function () {
                            _this.CONSUME21(Tokens.ON);
                            _this.CONSUME8(Tokens.UPDATE);
                            _this.CONSUME(Tokens.LOCALTIMESTAMP);
                        });
                    },
                },
            ]);
        });
        _this.RULE('expressionOrDefault', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE36(_this.expression);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME14(Tokens.DEFAULT);
                    },
                },
            ]);
        });
        _this.RULE('ifExists', function () {
            _this.CONSUME3(Tokens.IF);
            _this.CONSUME(Tokens.EXISTS);
        });
        _this.RULE('ifNotExists', function () {
            _this.CONSUME4(Tokens.IF);
            _this.CONSUME7(Tokens.NOT);
            _this.CONSUME2(Tokens.EXISTS);
        });
        _this.RULE('functionCall', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.specificFunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.aggregateWindowedFunction);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.scalarFunctionName);
                        _this.CONSUME71(Tokens.OP);
                        _this.OPTION508(function () {
                            _this.SUBRULE(_this.functionArgs);
                        });
                        _this.CONSUME71(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE21(_this.fullId);
                        _this.CONSUME72(Tokens.OP);
                        _this.OPTION509(function () {
                            _this.SUBRULE2(_this.functionArgs);
                        });
                        _this.CONSUME72(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.passwordFunctionClause);
                    },
                },
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
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.CURRENT_TIME);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME3(Tokens.CURRENT_TIMESTAMP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME2(Tokens.CURRENT_USER);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.LOCALTIME);
                                },
                            },
                        ]);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CONVERT);
                        _this.CONSUME73(Tokens.OP);
                        _this.SUBRULE37(_this.expression);
                        _this.SUBRULE(_this.separator);
                        _this.SUBRULE(_this.convertedDataType);
                        _this.CONSUME73(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.CONVERT);
                        _this.CONSUME74(Tokens.OP);
                        _this.SUBRULE38(_this.expression);
                        _this.CONSUME6(Tokens.USING);
                        _this.SUBRULE10(_this.charsetName);
                        _this.CONSUME74(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CAST);
                        _this.CONSUME75(Tokens.OP);
                        _this.SUBRULE39(_this.expression);
                        _this.CONSUME13(Tokens.AS);
                        _this.SUBRULE2(_this.convertedDataType);
                        _this.CONSUME75(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.VALUES);
                        _this.CONSUME76(Tokens.OP);
                        _this.SUBRULE3(_this.fullColumnName);
                        _this.CONSUME76(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CASE);
                        _this.SUBRULE40(_this.expression);
                        _this.AT_LEAST_ONE25(function () {
                            _this.SUBRULE(_this.caseFuncAlternative);
                        });
                        _this.OPTION510(function () {
                            _this.CONSUME3(Tokens.ELSE);
                            _this.SUBRULE(_this.elseArg);
                        });
                        _this.CONSUME8(Tokens.END);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.CASE);
                        _this.AT_LEAST_ONE26(function () {
                            _this.SUBRULE2(_this.caseFuncAlternative);
                        });
                        _this.OPTION511(function () {
                            _this.CONSUME4(Tokens.ELSE);
                            _this.SUBRULE2(_this.elseArg);
                        });
                        _this.CONSUME9(Tokens.END);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHAR);
                        _this.CONSUME77(Tokens.OP);
                        _this.SUBRULE3(_this.functionArgs);
                        _this.OPTION512(function () {
                            _this.CONSUME7(Tokens.USING);
                            _this.SUBRULE11(_this.charsetName);
                        });
                        _this.CONSUME77(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POSITION);
                        _this.CONSUME78(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.positionString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.positionExpression);
                                },
                            },
                        ]);
                        _this.CONSUME6(Tokens.IN);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.inString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.inExpression);
                                },
                            },
                        ]);
                        _this.CONSUME78(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUBSTR);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUBSTRING);
                                },
                            },
                        ]);
                        _this.CONSUME79(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.sourceString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.sourceExpression);
                                },
                            },
                        ]);
                        _this.CONSUME11(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.fromDecimal);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.fromExpression);
                                },
                            },
                        ]);
                        _this.OPTION513(function () {
                            _this.CONSUME16(Tokens.FOR);
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.forDecimal);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE(_this.forExpression);
                                    },
                                },
                            ]);
                        });
                        _this.CONSUME79(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TRIM);
                        _this.CONSUME80(Tokens.OP);
                        _this.SUBRULE(_this.positioinForm);
                        _this.OPTION514(function () {
                            _this.OR([
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.sourceString);
                                    },
                                },
                                {
                                    ALT: function () {
                                        _this.SUBRULE2(_this.sourceExpression);
                                    },
                                },
                            ]);
                        });
                        _this.CONSUME12(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.fromString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.fromExpression);
                                },
                            },
                        ]);
                        _this.CONSUME80(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.TRIM);
                        _this.CONSUME81(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE3(_this.sourceString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE3(_this.sourceExpression);
                                },
                            },
                        ]);
                        _this.CONSUME13(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE2(_this.fromString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE3(_this.fromExpression);
                                },
                            },
                        ]);
                        _this.CONSUME81(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEIGHT_STRING);
                        _this.CONSUME82(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE3(_this.stringLiteral);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE41(_this.expression);
                                },
                            },
                        ]);
                        _this.OPTION515(function () {
                            _this.CONSUME14(Tokens.AS);
                            _this.SUBRULE(_this.stringFormat);
                            _this.CONSUME83(Tokens.OP);
                            _this.SUBRULE42(_this.decimalLiteral);
                            _this.CONSUME82(Tokens.OP);
                        });
                        _this.OPTION516(function () {
                            _this.SUBRULE(_this.levelsInWeightString);
                        });
                        _this.CONSUME83(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTRACT);
                        _this.CONSUME84(Tokens.OP);
                        _this.SUBRULE3(_this.intervalType);
                        _this.CONSUME14(Tokens.FROM);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE4(_this.sourceString);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE4(_this.sourceExpression);
                                },
                            },
                        ]);
                        _this.CONSUME84(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GET_FORMAT);
                        _this.CONSUME85(Tokens.OP);
                        _this.SUBRULE(_this.datetimeFormat);
                        _this.CONSUME90(Tokens.OP);
                        _this.SUBRULE4(_this.stringLiteral);
                        _this.CONSUME85(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('caseFuncAlternative', function () {
            _this.CONSUME2(Tokens.WHEN);
            _this.SUBRULE(_this.condition);
            _this.CONSUME4(Tokens.THEN);
            _this.SUBRULE(_this.consequent);
        });
        _this.RULE('levelsInWeightString', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LEVEL);
                        _this.SUBRULE(_this.levelInWeightListElement);
                        _this.MANY119(function () {
                            _this.CONSUME91(Tokens.OP);
                            _this.SUBRULE2(_this.levelInWeightListElement);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.LEVEL);
                        _this.SUBRULE(_this.firstLevel);
                        _this.CONSUME6(Tokens.OP);
                        _this.SUBRULE(_this.lastLevel);
                    },
                },
            ]);
        });
        _this.RULE('levelInWeightListElement', function () {
            _this.SUBRULE43(_this.decimalLiteral);
            _this.OPTION517(function () {
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
                                    _this.CONSUME(Tokens.AVG);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MAX);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.MIN);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.SUM);
                                },
                            },
                        ]);
                        _this.CONSUME86(Tokens.OP);
                        _this.OPTION518(function () {
                            _this.SUBRULE(_this.aggregator);
                        });
                        _this.SUBRULE(_this.functionArg);
                        _this.CONSUME86(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COUNT);
                        _this.CONSUME87(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE(_this.starArg);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.OPTION519(function () {
                                        _this.SUBRULE2(_this.aggregator);
                                    });
                                    _this.SUBRULE2(_this.functionArg);
                                },
                            },
                        ]);
                        _this.CONSUME87(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.COUNT);
                        _this.CONSUME88(Tokens.OP);
                        _this.SUBRULE3(_this.aggregator);
                        _this.SUBRULE4(_this.functionArgs);
                        _this.CONSUME88(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_AND);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_OR);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.BIT_XOR);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STD);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV_POP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.STDDEV_SAMP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VAR_POP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VAR_SAMP);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.CONSUME(Tokens.VARIANCE);
                                },
                            },
                        ]);
                        _this.CONSUME89(Tokens.OP);
                        _this.OPTION520(function () {
                            _this.SUBRULE4(_this.aggregator);
                        });
                        _this.SUBRULE3(_this.functionArg);
                        _this.CONSUME89(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GROUP_CONCAT);
                        _this.CONSUME90(Tokens.OP);
                        _this.OPTION521(function () {
                            _this.SUBRULE5(_this.aggregator);
                        });
                        _this.SUBRULE5(_this.functionArgs);
                        _this.OPTION522(function () {
                            _this.CONSUME4(Tokens.ORDER);
                            _this.CONSUME16(Tokens.BY);
                            _this.SUBRULE3(_this.orderByExpression);
                            _this.MANY120(function () {
                                _this.CONSUME92(Tokens.OP);
                                _this.SUBRULE4(_this.orderByExpression);
                            });
                        });
                        _this.OPTION523(function () {
                            _this.CONSUME(Tokens.SEPARATOR);
                            _this.SUBRULE2(_this.separator);
                        });
                        _this.CONSUME90(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('scalarFunctionName', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.functionNameBase);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASCII);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CURRENT_DATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CURRENT_TIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.CURRENT_TIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CURTIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_ADD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_SUB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.IF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.INSERT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LOCALTIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LOCALTIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NOW);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.REPLACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUBSTR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUBSTRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SYSDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.TRIM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_DATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_TIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTC_TIMESTAMP);
                    },
                },
            ]);
        });
        _this.RULE('passwordFunctionClause', function () {
            _this.SUBRULE(_this.functionName);
            _this.CONSUME91(Tokens.OP);
            _this.SUBRULE4(_this.functionArg);
            _this.CONSUME91(Tokens.OP);
        });
        _this.RULE('functionArgs', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE6(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.fullColumnName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.functionCall);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE42(_this.expression);
                    },
                },
            ]);
            _this.MANY121(function () {
                _this.CONSUME93(Tokens.OP);
                _this.OR([
                    {
                        ALT: function () {
                            _this.SUBRULE7(_this.constant);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE5(_this.fullColumnName);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE3(_this.functionCall);
                        },
                    },
                    {
                        ALT: function () {
                            _this.SUBRULE43(_this.expression);
                        },
                    },
                ]);
            });
        });
        _this.RULE('functionArg', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE8(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE6(_this.fullColumnName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.functionCall);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE44(_this.expression);
                    },
                },
            ]);
        });
        _this.RULE('expression', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE(_this.notOperator);
                        _this.SUBRULE45(_this.expression);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE46(_this.expression);
                        _this.SUBRULE(_this.logicalOperator);
                        _this.SUBRULE47(_this.expression);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.predicate);
                        _this.CONSUME(Tokens.IS);
                        _this.OPTION524(function () {
                            _this.CONSUME8(Tokens.NOT);
                        });
                        _this.SUBRULE(_this.testValue);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.predicate);
                    },
                },
            ]);
        });
        _this.RULE('predicate', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.predicate);
                        _this.OPTION525(function () {
                            _this.CONSUME9(Tokens.NOT);
                        });
                        _this.CONSUME7(Tokens.IN);
                        _this.CONSUME92(Tokens.OP);
                        _this.OR([
                            {
                                ALT: function () {
                                    _this.SUBRULE9(_this.selectStatement);
                                },
                            },
                            {
                                ALT: function () {
                                    _this.SUBRULE3(_this.expressions);
                                },
                            },
                        ]);
                        _this.CONSUME92(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE4(_this.predicate);
                        _this.CONSUME2(Tokens.IS);
                        _this.SUBRULE2(_this.nullNotnull);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.left);
                        _this.SUBRULE2(_this.comparisonOperator);
                        _this.SUBRULE(_this.right);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.predicate);
                        _this.SUBRULE3(_this.comparisonOperator);
                        _this.SUBRULE(_this.quantifier);
                        _this.CONSUME93(Tokens.OP);
                        _this.SUBRULE10(_this.selectStatement);
                        _this.CONSUME93(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE6(_this.predicate);
                        _this.OPTION526(function () {
                            _this.CONSUME10(Tokens.NOT);
                        });
                        _this.CONSUME(Tokens.BETWEEN);
                        _this.SUBRULE7(_this.predicate);
                        _this.CONSUME6(Tokens.AND);
                        _this.SUBRULE8(_this.predicate);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE9(_this.predicate);
                        _this.CONSUME(Tokens.SOUNDS);
                        _this.CONSUME4(Tokens.LIKE);
                        _this.SUBRULE10(_this.predicate);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE11(_this.predicate);
                        _this.OPTION527(function () {
                            _this.CONSUME11(Tokens.NOT);
                        });
                        _this.CONSUME5(Tokens.LIKE);
                        _this.SUBRULE12(_this.predicate);
                        _this.OPTION528(function () {
                            _this.CONSUME(Tokens.ESCAPE);
                            _this.CONSUME52(Tokens.STRING_LITERAL);
                        });
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE13(_this.predicate);
                        _this.OPTION529(function () {
                            _this.CONSUME12(Tokens.NOT);
                        });
                        _this.SUBRULE(_this.regex);
                        _this.SUBRULE14(_this.predicate);
                    },
                },
                {
                    ALT: function () {
                        _this.OPTION530(function () {
                            _this.CONSUME7(Tokens.LOCAL_ID);
                            _this.CONSUME2(Tokens.VAR_ASSIGN);
                        });
                        _this.SUBRULE(_this.expressionAtom);
                    },
                },
            ]);
        });
        _this.RULE('expressionAtom', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.SUBRULE9(_this.constant);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE7(_this.fullColumnName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE5(_this.functionCall);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.expressionAtom);
                        _this.CONSUME9(Tokens.COLLATE);
                        _this.SUBRULE9(_this.collationName);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.mysqlVariable);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE(_this.unaryOperator);
                        _this.SUBRULE3(_this.expressionAtom);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.BINARY);
                        _this.SUBRULE4(_this.expressionAtom);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME94(Tokens.OP);
                        _this.SUBRULE48(_this.expression);
                        _this.MANY122(function () {
                            _this.CONSUME94(Tokens.OP);
                            _this.SUBRULE49(_this.expression);
                        });
                        _this.CONSUME94(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ROW);
                        _this.CONSUME95(Tokens.OP);
                        _this.SUBRULE50(_this.expression);
                        _this.AT_LEAST_ONE27(function () {
                            _this.CONSUME95(Tokens.OP);
                            _this.SUBRULE51(_this.expression);
                        });
                        _this.CONSUME95(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.EXISTS);
                        _this.CONSUME96(Tokens.OP);
                        _this.SUBRULE11(_this.selectStatement);
                        _this.CONSUME96(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME97(Tokens.OP);
                        _this.SUBRULE12(_this.selectStatement);
                        _this.CONSUME97(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INTERVAL);
                        _this.SUBRULE52(_this.expression);
                        _this.SUBRULE4(_this.intervalType);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE2(_this.left);
                        _this.SUBRULE(_this.bitOperator);
                        _this.SUBRULE2(_this.right);
                    },
                },
                {
                    ALT: function () {
                        _this.SUBRULE3(_this.left);
                        _this.SUBRULE(_this.mathOperator);
                        _this.SUBRULE3(_this.right);
                    },
                },
            ]);
        });
        _this.RULE('unaryOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME13(Tokens.NOT);
                    },
                },
            ]);
        });
        _this.RULE('comparisonOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME97(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OP);
                        _this.CONSUME98(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OP);
                        _this.CONSUME99(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.OP);
                        _this.CONSUME4(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OP);
                        _this.CONSUME100(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.OP);
                        _this.CONSUME101(Tokens.OP);
                        _this.CONSUME5(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('logicalOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.AND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME2(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.XOR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                        _this.CONSUME2(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('bitOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.OP);
                        _this.CONSUME7(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.OP);
                        _this.CONSUME7(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('mathOperator', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME11(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DIV);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MOD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.OP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OP);
                    },
                },
            ]);
        });
        _this.RULE('charsetNameBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ARMSCII8);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ASCII);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIG5);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1250);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1251);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1256);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP1257);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP850);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP852);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP866);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CP932);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEC8);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EUCJPMS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EUCKR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GB2312);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GBK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOSTD8);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GREEK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HEBREW);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HP8);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KEYBCS2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KOI8R);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.KOI8U);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN1);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN5);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LATIN7);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MACCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MACROMAN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SJIS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SWE7);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIS620);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UCS2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UJIS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF16);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF16LE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF32);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8MB3);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UTF8MB4);
                    },
                },
            ]);
        });
        _this.RULE('transactionLevelBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPEATABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COMMITTED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.UNCOMMITTED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SERIALIZABLE);
                    },
                },
            ]);
        });
        _this.RULE('privilegesBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME9(Tokens.TABLES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.ROUTINE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.EXECUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PROCESS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.RELOAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.SHUTDOWN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUPER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.PRIVILEGES);
                    },
                },
            ]);
        });
        _this.RULE('intervalTypeBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUARTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MONTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DAY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MINUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MICROSECOND);
                    },
                },
            ]);
        });
        _this.RULE('dataTypeBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATETIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.YEAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENUM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TEXT);
                    },
                },
            ]);
        });
        _this.RULE('keywordsCanBeId', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ACCOUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ACTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.AFTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AGGREGATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.ALGORITHM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ANY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AUTHORS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AUTOCOMMIT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AUTOEXTEND_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.AUTO_INCREMENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.AVG_ROW_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.BEGIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.BINLOG);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.BLOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BOOL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BOOLEAN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.BTREE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CASCADED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CHAIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CHANNEL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CHECKSUM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CIPHER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CLIENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COALESCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CODE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.COLUMNS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COLUMN_FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME10(Tokens.COMMENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.COMMIT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPACT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.COMPLETION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESSED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COMPRESSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCURRENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CONNECTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CONSISTENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CONTAINS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CONTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CONTRIBUTORS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COPY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.CPU);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.DATA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.DATAFILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEALLOCATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DEFAULT_AUTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DEFINER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DELAY_KEY_WRITE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.DIRECTORY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.DISABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.DISCARD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DISK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.DO);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DUMPFILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DUPLICATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DYNAMIC);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.ENABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ENCRYPTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ENDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.ENGINE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ENGINES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ERROR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ERRORS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ESCAPE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EVEN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.EVENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.EVENTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EVERY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EXCHANGE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXCLUSIVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EXPIRE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.EXTENT_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.FAULTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIELDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.FILE_BLOCK_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.FILTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.FIRST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIXED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOLLOWS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.FULL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.FUNCTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.GLOBAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.GRANTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.GROUP_REPLICATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.HASH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.HOST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.IDENTIFIED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.IGNORE_SERVER_IDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.IMPORT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INDEXES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.INITIAL_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INPLACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INSERT_METHOD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.INSTANCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INVOKER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.IO);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.IO_THREAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.IPC);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ISOLATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ISSUER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.KEY_BLOCK_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LANGUAGE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LAST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LEAVES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LESS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.LEVEL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.LIST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.LOCAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.LOGFILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.LOGS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.MASTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_AUTO_POSITION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_CONNECT_RETRY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_DELAY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_HEARTBEAT_PERIOD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_HOST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.MASTER_LOG_FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.MASTER_LOG_POS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_PASSWORD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_PORT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_RETRY_COUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CAPATH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CERT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CIPHER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CRL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_CRLPATH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_SSL_KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_TLS_VERSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MASTER_USER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_CONNECTIONS_PER_HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_QUERIES_PER_HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.MAX_ROWS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_UPDATES_PER_HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MAX_USER_CONNECTIONS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.MEMORY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MERGE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MIGRATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.MIN_ROWS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MODIFY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MUTEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MYSQL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.NAME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.NAMES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NCHAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NEVER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.NO);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.NODEGROUP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NONE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OFFLINE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OFFSET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OJ);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OLD_PASSWORD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ONE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ONLINE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.ONLY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OPTIMIZER_COSTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.OPTIONS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.OWNER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PACK_KEYS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PAGE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PARSER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PARTIAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PARTITIONING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PARTITIONS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.PASSWORD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PHASE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PLUGINS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PLUGIN_DIR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PORT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PRECEDES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.PREPARE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.PRESERVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PREV);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PROCESSLIST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PROFILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.PROFILES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.PROXY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.QUERY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.QUICK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REBUILD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.RECOVER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REDO_BUFFER_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REDUNDANT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELAYLOG);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.RELAY_LOG_FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.RELAY_LOG_POS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REMOVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REORGANIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.REPAIR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_DO_DB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_DO_TABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_IGNORE_DB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_IGNORE_TABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_REWRITE_DB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_WILD_DO_TABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.REPLICATE_WILD_IGNORE_TABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.REPLICATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RESUME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.RETURNS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.ROLLBACK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ROLLUP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ROTATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.ROW);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ROWS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.ROW_FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.SAVEPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.SCHEDULE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.SECURITY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.SERVER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.SESSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SHARE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHARED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SIGNED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIMPLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.SLAVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SNAPSHOT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SOCKET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SOUNDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SOURCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_AFTER_GTIDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQL_AFTER_MTS_GAPS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_BEFORE_GTIDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQL_BUFFER_RESULT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQL_CACHE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQL_NO_CACHE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SQL_THREAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.START);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.STARTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.STATS_AUTO_RECALC);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.STATS_PERSISTENT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.STATS_SAMPLE_PAGES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME8(Tokens.STATUS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.STOP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.STORAGE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUBJECT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.SUBPARTITION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUBPARTITIONS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SUSPEND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SWAPS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SWITCHES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME12(Tokens.TABLESPACE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.TEMPORARY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TEMPTABLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.THAN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.TRANSACTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.TRUNCATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNDEFINED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.UNDOFILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.UNDO_BUFFER_SIZE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNKNOWN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.UPGRADE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME11(Tokens.USER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.VALIDATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.VALUE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.VARIABLES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME6(Tokens.VIEW);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.WAIT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WARNINGS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITHOUT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME5(Tokens.WORK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.WRAPPER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.X509);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME7(Tokens.XA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.XML);
                    },
                },
            ]);
        });
        _this.RULE('functionNameBase', function () {
            _this.OR([
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ABS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ACOS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADDDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ADDTIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AES_DECRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AES_ENCRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.AREA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASBINARY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASWKT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_DECRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_DERIVE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_ENCRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_SIGN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ASYMMETRIC_VERIFY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ATAN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ATAN2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BENCHMARK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_COUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BIT_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.BUFFER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CEIL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CEILING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CENTROID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHARACTER_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.CHARSET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CHAR_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COERCIBILITY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.COLLATION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COMPRESS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONCAT_WS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONNECTION_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONV);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CONVERT_TZ);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.COT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME4(Tokens.COUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CRC32);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_ASYMMETRIC_PRIV_KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_ASYMMETRIC_PUB_KEY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_DH_PARAMETERS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CREATE_DIGEST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.CROSSES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.DATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATEDIFF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DATE_FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.DAY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYNAME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFMONTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFWEEK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DAYOFYEAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DECODE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DEGREES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DES_DECRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DES_ENCRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DIMENSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.DISJOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ELT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCODE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENCRYPT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENDPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ENVELOPE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EQUALS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXPORT_SET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTERIORRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.EXTRACTVALUE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIELD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FIND_IN_SET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FLOOR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FOUND_ROWS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_BASE64);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_DAYS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.FROM_UNIXTIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMCOLLFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMCOLLFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYCOLLECTIONFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMETRYTYPE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GEOMFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.GET_FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GET_LOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GLENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GREATEST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GTID_SUBSET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.GTID_SUBTRACT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.HEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.HOUR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IFNULL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET6_ATON);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET6_NTOA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET_ATON);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INET_NTOA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INSTR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTERIORRINGN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.INTERSECTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISCLOSED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISEMPTY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISNULL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ISSIMPLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_FREE_LOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4_COMPAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV4_MAPPED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_IPV6);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.IS_USED_LOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LAST_INSERT_ID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LCASE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LEAST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.LEFT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINEFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINEFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRINGFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LINESTRINGFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOAD_FILE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOCATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG10);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOG2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LOWER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LPAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.LTRIM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKEDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKETIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MAKE_SET);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MASTER_POS_WAIT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRCONTAINS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRDISJOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBREQUAL);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRINTERSECTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBROVERLAPS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRTOUCHES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MBRWITHIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MD5);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MICROSECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MINUTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MLINEFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MLINEFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.MONTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MONTHNAME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOINTFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOINTFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOLYFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MPOLYFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRINGFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTILINESTRINGFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINTFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOINTFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGON);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGONFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.MULTIPOLYGONFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NAME_CONST);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NULLIF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMGEOMETRIES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMINTERIORRINGS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.NUMPOINTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OCT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OCTET_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ORD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.OVERLAPS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERIOD_ADD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PERIOD_DIFF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.PI);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POINTN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGON);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGONFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POLYGONFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.POSITION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POW);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.POWER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.QUARTER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.QUOTE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RADIANS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RAND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RANDOM_BYTES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RELEASE_LOCK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.REVERSE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.RIGHT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROUND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ROW_COUNT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RPAD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.RTRIM);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.SECOND);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SEC_TO_TIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SESSION_USER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA1);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SHA2);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIGN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SLEEP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SOUNDEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQL_THREAD_WAIT_AFTER_GTIDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SQRT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SRID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STARTPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STRCMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.STR_TO_DATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_AREA);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASBINARY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ASWKT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_BUFFER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CENTROID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CONTAINS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_CROSSES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DIFFERENCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DIMENSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DISJOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_DISTANCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ENDPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ENVELOPE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_EQUALS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_EXTERIORRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMTXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMCOLLFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYCOLLECTIONFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMETRYTYPE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_GEOMFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERIORRINGN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERSECTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_INTERSECTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISCLOSED);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISEMPTY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_ISSIMPLE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINEFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINEFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINESTRINGFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_LINESTRINGFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMGEOMETRIES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMINTERIORRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMINTERIORRINGS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_NUMPOINTS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_OVERLAPS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POINTN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYGONFROMTEXT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_POLYGONFROMWKB);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_SRID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_STARTPOINT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_SYMDIFFERENCE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_TOUCHES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_UNION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_WITHIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_X);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.ST_Y);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBDATE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBSTRING_INDEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SUBTIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.SYSTEM_USER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TAN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.TIME);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMEDIFF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.TIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMPADD);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIMESTAMPDIFF);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME_FORMAT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TIME_TO_SEC);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TOUCHES);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_BASE64);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_DAYS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.TO_SECONDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UCASE);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNCOMPRESS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNCOMPRESSED_LENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNHEX);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UNIX_TIMESTAMP);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPDATEXML);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UPPER);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UUID);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.UUID_SHORT);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VALIDATE_PASSWORD_STRENGTH);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.VERSION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.WEEK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEKDAY);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WEEKOFYEAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME2(Tokens.WEIGHT_STRING);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.WITHIN);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME3(Tokens.YEAR);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.YEARWEEK);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.Y_FUNCTION);
                    },
                },
                {
                    ALT: function () {
                        _this.CONSUME(Tokens.X_FUNCTION);
                    },
                },
            ]);
        });
        chevrotain.Parser.performSelfAnalysis(_this);
        return _this;
    }
    return MetaParser;
}(chevrotain.Parser));
exports.MetaParser = MetaParser;
//# sourceMappingURL=parser.g.js.map