(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sql-parser", "./utils"], factory);
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
    var sql_parser_1 = require("./sql-parser");
    exports.parseMysql = sql_parser_1.parseMysql;
    exports.getAvailableTokens = sql_parser_1.getAvailableTokens;
    var utils = require("./utils");
    exports.utils = utils;
});
//# sourceMappingURL=index.js.map