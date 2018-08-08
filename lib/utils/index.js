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
    var getLeafNode = function (cst, global) {
        return getFilteredNode(cst, function (target) { return target.image; }, global);
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
                        return [target];
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
    var getFieldsMap = function (ast) {
        return Object.values(ast.children).map(function (child) {
            var subSelectElement = {
                exportsFields: [],
                alias: '',
                table: 'SUBQUERY'
            };
            var singleSelect = getFilteredNode(child[0], function (target) { return target.name === parser_g_1.SyntaxKind.querySpecification; })[0];
            var fields = _.filter(getLeafNode(singleSelect.children[parser_g_1.SyntaxKind.selectElements][0], true), function (o) { return o.tokenTypeIdx !== parser_g_1.Tokens.COMMA.tokenTypeIdx; });
            var tableName = getFilteredNode(singleSelect.children[parser_g_1.SyntaxKind.fromClause][0], function (target) { return target.name === parser_g_1.SyntaxKind.tableSourceItem; });
            if (tableName[0].children[parser_g_1.SyntaxKind.uid]) {
                subSelectElement.alias = getLeafNode(tableName[0].children[parser_g_1.SyntaxKind.uid][0])[0].image;
            }
            if (tableName[0].children[parser_g_1.SyntaxKind.tableName]) {
                subSelectElement.table = getLeafNode(tableName[0].children[parser_g_1.SyntaxKind.tableName][0])[0].image,
                    subSelectElement.exportsFields = fields;
            }
            if (tableName[0].children[parser_g_1.SyntaxKind.selectStatement]) {
                getFieldsMap(tableName[0].children[parser_g_1.SyntaxKind.selectStatement][0]);
            }
            return subSelectElement;
        });
    };
    var getTabelDetails = function (init, fromClause, more) {
        return _.flatten(_.get(getFilteredNode(fromClause, function (target) { return target.name === parser_g_1.SyntaxKind.tableSources; }), '[0].children.tableSource', []).map(function (tableSource) {
            return getFilteredNode(tableSource, function (target) { return target.name === parser_g_1.SyntaxKind.tableSourceItem; });
        })).map(function (table) {
            var tableInfo = __assign({ exportsFields: [], availableFields: [], alias: '', table: 'SUBQUERY' }, init);
            if (table.children[parser_g_1.SyntaxKind.uid]) {
                tableInfo.alias = getLeafNode(table.children[parser_g_1.SyntaxKind.uid][0])[0].image;
            }
            if (table.children[parser_g_1.SyntaxKind.tableName]) {
                tableInfo.table = getLeafNode(table.children[parser_g_1.SyntaxKind.tableName][0])[0].image,
                    tableInfo.availableFields = ['*'];
            }
            if (more && table.children[parser_g_1.SyntaxKind.selectStatement]) {
                var recurive = Object.values(table.children[parser_g_1.SyntaxKind.selectStatement][0].children).map(function (child) { return peel(child[0]); });
                tableInfo.availableFields = recurive;
                if (tableInfo.exportsFields[0] === "*") {
                    tableInfo.exportsFields = recurive;
                }
            }
            return tableInfo;
        });
    };
    var peel = function (cst) {
        var query = getFilteredNode(cst, function (target) { return target.name === parser_g_1.SyntaxKind.querySpecification; })[0];
        var exportsFields = _.flatten(getFilteredNode(query.children[parser_g_1.SyntaxKind.selectElements][0], function (target) { return target.name === parser_g_1.SyntaxKind.selectElements; }, true).map(function (fields) {
            return _.filter(getLeafNode(fields, true), function (o) { return o.tokenTypeIdx !== parser_g_1.Tokens.COMMA.tokenTypeIdx; });
        })).map(function (item) { return item.image; });
        var tableInfo = {
            exportsFields: exportsFields
        };
        return getTabelDetails(tableInfo, (query.children[parser_g_1.SyntaxKind.fromClause] || [])[0], true);
    };
    var getAliasMap = function (ast) {
        var topSQl = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.sqlStatements; })[0].children[parser_g_1.SyntaxKind.sqlStatement];
        var topSelect = [];
        (topSQl || []).forEach(function (sql) {
            var isSelect = getFilteredNode(sql, function (target) { return target.name === parser_g_1.SyntaxKind.querySpecification; })[0];
            isSelect && topSelect.push(isSelect);
        });
        return _.flatten(topSelect.map(function (select) { return peel(select); }));
    };
    exports.getAliasMap = getAliasMap;
    var getNextTableSource = function (ast, token) {
        var parent = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.fromClause && target.children[parser_g_1.TokenEnum.FROM][0] === token; });
        return parent ? getTabelDetails({}, parent[0]) : [];
    };
    exports.getNextTableSource = getNextTableSource;
    var getTotalPath = function (ast, token) {
        var columnRoot = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.fullColumnName; }, true);
        var targetColumn = _.find(columnRoot, function (o) { return getFilteredNode(o, function (target) { return target.image === token.image && target.startColumn === token.startColumn; })[0]; });
        return _.flatten(Object.values(targetColumn.children)).map(function (node) { return getLeafNode(node)[0].image; });
    };
    exports.getTotalPath = getTotalPath;
    var getKeywords = function () {
        return parser_g_1.TokenEnum;
    };
    exports.getKeywords = getKeywords;
});
//# sourceMappingURL=index.js.map