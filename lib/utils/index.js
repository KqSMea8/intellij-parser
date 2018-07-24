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
    var getLeafNode = function (ast) {
        return getFilteredNode(ast, function (target) { return target.image; });
    };
    var getFilteredNode = function (ast, filter, global) {
        var queue = [ast.cst];
        var result = [];
        while (true) {
            var target = queue.shift();
            if (target) {
                queue.push.apply(queue, Object.values(target.children || []).reduce(function (sum, item) { return sum.concat(item); }, []));
                if (filter(target)) {
                    if (global) {
                        result.push(target);
                    }
                    else {
                        return target;
                    }
                }
            }
            else {
                return result;
            }
        }
    };
    var getClassification = function (ast, pos) {
        getFilteredNode(ast, function (target) {
            return target.startColumn && target.startLine - 1 === pos.line && target.startColumn - 1 <= pos.character && target.image.length + target.startColumn - 1 >= pos.character;
        });
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
            else if (errorType.type === definations_1.ErrorToken.initMissingToken) {
                errorMsg.push.apply(errorMsg, Object.keys(definations_1.CommonStartToken).filter(function (item) { return item.indexOf(err.message.match(errorType.pattern)[1]) === 0; }));
            }
        });
        return errorMsg;
    };
    exports.getCompleteInfo = getCompleteInfo;
    var getAliasMap = function (ast) {
        var raw = getFilteredNode(ast, function (target) { return target.children && Object.keys(target.children).find(function (item) { return item === lexer_g_1.TokenEnum.AS; }); }, true);
        getLeafNode(Object.values(raw.children)[2]);
        console.log(raw);
    };
    exports.getAliasMap = getAliasMap;
    var getKeywords = function () {
        return lexer_g_1.TokenEnum;
    };
    exports.getKeywords = getKeywords;
});
//# sourceMappingURL=index.js.map