(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./definations", "../sql-parser/lexer.g"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var definations_1 = require("./definations");
    var lexer_g_1 = require("../sql-parser/lexer.g");
    var getClassification = function (ast, pos) {
        var queue = [ast.cst];
        while (true) {
            var target = queue.shift();
            var startColumn = target.startColumn, startLine = target.startLine, image = target.image;
            if (target) {
                queue.push.apply(queue, Object.values(target.children || []).reduce(function (sum, item) { return sum.concat(item); }, []));
                if (startColumn && startLine - 1 === pos.line && startColumn - 1 <= pos.character && image.length + startColumn - 1 >= pos.character) {
                    return target;
                }
            }
        }
    };
    exports.getClassification = getClassification;
    var getCompleteInfo = function (ast, pos) {
        var errorMsg = [];
        ast.parseErrors.forEach(function (err) {
            var errorType = definations_1.ErrorPrefix.filter(function (item) { return err.message.match(item.key); })[0] || {};
            if (errorType.type === definations_1.ErrorToken.singleMissingToken) {
                errorMsg.push(err.message.match(errorType.pattern)[1]);
            }
            else if (errorType.type === definations_1.ErrorToken.multiMissingToken) {
                (err.message.match(errorType.pattern) || []).forEach(function (item) {
                    var content = item.slice(1, -1);
                    if (lexer_g_1.Tokens[content]) {
                        console.log(lexer_g_1.Tokens[content]);
                    }
                    errorMsg.push(content);
                });
            }
        });
        return errorMsg;
    };
    exports.getCompleteInfo = getCompleteInfo;
});
//# sourceMappingURL=index.js.map