(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sql-parser/ODPS/index", "./sql-parser/Hive/index", "./sql-parser/Shell/index", "./utils/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IntellijSqlEditor;
    (function (IntellijSqlEditor) {
        var SyntaxKind;
        (function (SyntaxKind) {
        })(SyntaxKind || (SyntaxKind = {}));
    })(IntellijSqlEditor || (IntellijSqlEditor = {}));
    var index_1 = require("./sql-parser/ODPS/index");
    var index_2 = require("./sql-parser/Hive/index");
    var index_3 = require("./sql-parser/Shell/index");
    var utils = require("./utils/index");
    var ODPS = {
        getAvailableTokens: index_1.getAvailableTokens,
        parser: index_1.parseMysql,
        utils: utils,
    };
    exports.ODPS = ODPS;
    var Hive = {
        getAvailableTokens: index_2.getAvailableTokens,
        parser: index_2.parseMysql,
        utils: utils
    };
    exports.Hive = Hive;
    var Shell = {
        getAvailableTokens: index_3.getAvailableTokens,
        parser: index_3.parseMysql,
        utils: utils
    };
    exports.Shell = Shell;
});
//# sourceMappingURL=index.js.map