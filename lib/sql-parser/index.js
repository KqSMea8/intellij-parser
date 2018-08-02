(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lexer.g", "./parser.g", "fs", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parser_g_1 = require("./parser.g");
    var fs = require("fs");
    var path = require("path");
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
    (function test() {
        var mysqlCode = fs.readFileSync(path.join(__dirname, '../../sql-parser/mysql.sql')).toString('utf8');
        try {
            var _a = parseMysql(mysqlCode), cst = _a.cst, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
            console.log(lexErrors, parseErrors);
            fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_output_cst.json'), JSON.stringify(cst));
        }
        catch (e) {
            debugger;
            console.log(e);
        }
    })();
});
//# sourceMappingURL=index.js.map