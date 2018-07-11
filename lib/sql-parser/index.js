(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lexer.g", "./tmp.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lexer_g_1 = require("./lexer.g");
    var tmp_g_1 = require("./tmp.g");
    var CstNode = (function () {
        function CstNode() {
            this.startOffset = 0;
        }
        return CstNode;
    }());
    function parseMysql(mysqlCode) {
        var lexResult = lexer_g_1.Lexer.tokenize(mysqlCode);
        var parser = new tmp_g_1.SelectParser([]);
        parser.input = lexResult.tokens;
        var cst = parser.selectStatement();
        return {
            cst: cst,
            lexErrors: lexResult.errors,
            parseErrors: parser.errors
        };
    }
    exports.parseMysql = parseMysql;
});
//# sourceMappingURL=index.js.map