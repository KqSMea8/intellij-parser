(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sql-parser/ODPS", "./sql-parser/Hive", "./utils/index"], factory);
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
    var ODPS_1 = require("./sql-parser/ODPS");
    var Hive_1 = require("./sql-parser/Hive");
    var utils = require("./utils/index");
    var ODPS = {
        getAvailableTokens: ODPS_1.getAvailableTokens,
        parseMysql: ODPS_1.parseMysql,
        utils: utils,
    };
    exports.ODPS = ODPS;
    var Hive = {
        getAvailableTokens: Hive_1.getAvailableTokens,
        parseMysql: Hive_1.parseMysql
    };
    exports.Hive = Hive;
});
//# sourceMappingURL=index.js.map