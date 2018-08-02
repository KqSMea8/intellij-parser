(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./parser.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parser_g_1 = require("./parser.g");
    var CstNode = (function () {
        function CstNode() {
            this.startOffset = 0;
        }
        return CstNode;
    }());
    function parseMysql(mysqlCode) {
        var lexResult = parser_g_1.Lexer.tokenize(mysqlCode);
        var parser = new parser_g_1.Parser([]);
        parser.input = lexResult.tokens;
        var cst = parser.root();
        return {
            cst: cst,
            lexErrors: lexResult.errors,
            parseErrors: parser.errors
        };
    }
    exports.parseMysql = parseMysql;
});
//# sourceMappingURL=index.js.map