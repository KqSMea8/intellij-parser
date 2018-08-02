var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./definations", "../sql-parser/parser.g", "lodash/lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var definations_1 = require("./definations");
    var parser_g_1 = require("../sql-parser/parser.g");
    var _ = require("lodash/lodash");
    var getLeafNode = function (cst) {
        return getFilteredNode(cst, function (target) { return target.image; });
    };
    var getFilteredNode = function (cst, filter, global) {
        var queue = [cst];
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
        return getFilteredNode(ast.cst, function (target) {
            return target.startColumn && target.startLine - 1 === pos.line && target.startColumn - 1 <= pos.character && target.image.length + target.startColumn - 1 >= pos.character;
        });
    };
    exports.getClassification = getClassification;
    var getCompleteInfo = function (ast, pos) {
        var errorMsg = [];
        ast.parseErrors.forEach(function (err) {
            var singleError = {
                previousToken: err.previousToken,
                completeType: []
            };
            var errorType = definations_1.ErrorPrefix.filter(function (item) { return err.message.match(item.key); })[0] || {};
            if (errorType.type === definations_1.ErrorToken.singleMissingToken) {
                singleError.completeType.push(__assign({ errType: err.message.match(errorType.pattern)[1] }, err));
            }
            else if (errorType.type === definations_1.ErrorToken.multiMissingToken) {
                (err.message.match(errorType.pattern) || []).forEach(function (item) {
                    var content = item.slice(1, -1);
                    if (parser_g_1.Tokens[content]) {
                        console.log(parser_g_1.Tokens[content]);
                    }
                    singleError.completeType.push(__assign({ errType: content }, err));
                });
            }
            else if (errorType.type === definations_1.ErrorToken.initMissingToken) {
                Object.keys(definations_1.CommonStartToken).filter(function (item) { return item.indexOf(err.message.match(errorType.pattern)[1]) === 0; }).forEach(function (errType) {
                    singleError.completeType.push(__assign({ errType: errType }, err));
                });
            }
            errorMsg.push(singleError);
        });
        return errorMsg;
    };
    exports.getCompleteInfo = getCompleteInfo;
    var getAliasMap = function (ast) {
        var raw = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.tableSourceItem; }, true);
        return raw.map(function (item) {
            var singleMap = [];
            Object.entries(item.children).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (key !== parser_g_1.TokenEnum.AS) {
                    singleMap.push(getLeafNode(value[0]));
                }
            });
            return singleMap;
        });
    };
    exports.getAliasMap = getAliasMap;
    var getNextToken = function (ast, token) {
        var parent = getFilteredNode(ast.cst, function (target) { return target.children && target.children[token]; });
        return parent && Object.values(parent.children)[_.findIndex(Object.keys(parent.children), function (o) { return o === token; }) + 1];
    };
    exports.getNextToken = getNextToken;
    var getTotalPath = function (ast, token) {
        var columnRoot = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.fullColumnName; }, true);
        var targetColumn = _.find(columnRoot, function (o) { return getFilteredNode(o, function (target) { return target === token; }); });
        return _.flatten(Object.values(targetColumn.children)).map(function (node) { return getLeafNode(node).image; });
    };
    exports.getTotalPath = getTotalPath;
    var getKeywords = function () {
        return parser_g_1.TokenEnum;
    };
    exports.getKeywords = getKeywords;
});
//# sourceMappingURL=index.js.map