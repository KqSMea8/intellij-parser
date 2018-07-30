(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sql-parser/index", "./utils/index"], factory);
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
    var index_1 = require("./sql-parser/index");
    exports.parseMysql = index_1.parseMysql;
    var utils = require("./utils/index");
    exports.utils = utils;
});
//# sourceMappingURL=index.js.map