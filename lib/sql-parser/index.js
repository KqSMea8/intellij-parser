(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lexer.g", "./parser.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lexer_g_1 = require("./lexer.g");
    var parser_g_1 = require("./parser.g");
    var CstNode = (function () {
        function CstNode() {
            this.startOffset = 0;
        }
        return CstNode;
    }());
    var parser = new parser_g_1.Parser([]);
    function parseMysql(mysqlCode) {
        var lexResult = lexer_g_1.Lexer.tokenize(mysqlCode);
        parser.input = lexResult.tokens;
        var cst = parser.root();
        return {
            cst: cst,
            lexErrors: lexResult.errors,
            parseErrors: parser.errors
        };
    }
    exports.parseMysql = parseMysql;
    function getAvailableTokens(text) {
        var lexResult = lexer_g_1.Lexer.tokenize(text);
        if (lexResult.errors.length > 0) {
            throw new Error('sad sad panda, lexing errors detected');
        }
        var parser = new parser_g_1.Parser([]);
        var assistanceTokenVector = lexResult.tokens;
        var syntacticSuggestions = parser.computeContentAssist('root', assistanceTokenVector);
        var finalSuggestions = syntacticSuggestions.map(function (item) { return item.nextTokenType.tokenName; });
        return Array.from(new Set(finalSuggestions));
    }
    exports.getAvailableTokens = getAvailableTokens;
    function dd() {
        return Array.from(new Set([1, 1, 2, 3, 1, 2, 3, 4, 4, 45]));
    }
    console.log(dd());
});
//# sourceMappingURL=index.js.map