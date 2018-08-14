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
        define(["require", "exports", "./definations", "../sql-parser/parser.g", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var definations_1 = require("./definations");
    var parser_g_1 = require("../sql-parser/parser.g");
    var _ = require("lodash");
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
    exports.getFilteredNode = getFilteredNode;
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
    var getTabelDetails = function (init, fromClause, more) {
        return _.flattenDeep(_.get(getFilteredNode(fromClause, function (target) { return target.name === parser_g_1.SyntaxKind.tableSources; }), '[0].children.tableSource', []).map(function (tableSource) {
            var tableSourceItems = [];
            if (tableSource.children[parser_g_1.SyntaxKind.joinPart]) {
                tableSource.children[parser_g_1.SyntaxKind.joinPart].forEach(function (join) {
                    tableSourceItems.push(getFilteredNode(join, function (target) { return target.name === parser_g_1.SyntaxKind.tableSourceItem; }));
                });
            }
            if (tableSource.children[parser_g_1.SyntaxKind.tableSourceItem]) {
                tableSourceItems.push(tableSource.children[parser_g_1.SyntaxKind.tableSourceItem]);
            }
            return tableSourceItems;
        })).map(function (table) {
            var tableInfo = __assign({ exportsFields: [], availableFields: [], alias: '', table: 'SUBQUERY' }, init);
            if (table.children[parser_g_1.SyntaxKind.uid]) {
                tableInfo.alias = getLeafNode(table.children[parser_g_1.SyntaxKind.uid][0])[0].image;
            }
            if (table.children[parser_g_1.SyntaxKind.tableName]) {
                var tableName_1 = getLeafNode(table.children[parser_g_1.SyntaxKind.tableName][0])[0].image;
                tableInfo.table = tableName_1,
                    tableInfo.availableFields = [{
                            name: '*',
                            alias: '',
                            origin: tableName_1
                        }];
                tableInfo.exportsFields = tableInfo.exportsFields.map(function (item) { return (__assign({}, item, { origin: tableName_1 })); });
            }
            if (more && table.children[parser_g_1.SyntaxKind.selectStatement]) {
                var recurive = _.flattenDeep(Object.values(table.children[parser_g_1.SyntaxKind.selectStatement][0].children)).map(function (child) { return peel(child); });
                tableInfo.availableFields = recurive;
                if (tableInfo.exportsFields[0] && tableInfo.exportsFields[0].name === "*") {
                    tableInfo.exportsFields = recurive;
                }
            }
            return tableInfo;
        });
    };
    var peel = function (cst) {
        var query = getFilteredNode(cst, function (target) { return target.name === parser_g_1.SyntaxKind.querySpecification; })[0];
        var hasStar = query && query.children[parser_g_1.SyntaxKind.selectElements][0].children[parser_g_1.TokenEnum.STAR];
        var exportsFields = [];
        if (hasStar) {
            exportsFields.push({
                name: '*',
                alias: ''
            });
        }
        if (query) {
            exportsFields = _.uniqBy(exportsFields.concat(_.flatten((query.children[parser_g_1.SyntaxKind.selectElements][0].children[parser_g_1.SyntaxKind.selectElement] || []).map(function (fields) {
                var name = '';
                var alias = fields.children[parser_g_1.SyntaxKind.uid] ? getLeafNode(fields.children[parser_g_1.SyntaxKind.uid][0])[0].image : '';
                if (fields.children[parser_g_1.SyntaxKind.functionCall]) {
                    var functionCallStructure = fields.children[parser_g_1.SyntaxKind.functionCall][0].children;
                    var args = functionCallStructure[parser_g_1.SyntaxKind.functionArgs] ? _.filter(getLeafNode(functionCallStructure[parser_g_1.SyntaxKind.functionArgs][0], true), function (leaf) { return leaf.tokenTypeIdx !== parser_g_1.Tokens.COMMA.tokenTypeIdx; }) : [];
                    var func = (getLeafNode((functionCallStructure[parser_g_1.SyntaxKind.scalarFunctionName] || [])[0] || (functionCallStructure[parser_g_1.SyntaxKind.specificFunction] || [])[0])[0] || {}).image;
                    name = func ? func + "(" + args.map(function (arg) { return arg.image; }).join(', ') + ")" : '';
                }
                else if (fields.children[parser_g_1.SyntaxKind.fullColumnName] && !hasStar) {
                    var fullColumnNameStructure = fields.children[parser_g_1.SyntaxKind.fullColumnName][0].children;
                    if (fullColumnNameStructure[parser_g_1.SyntaxKind.dottedId]) {
                        name = getLeafNode(fullColumnNameStructure[parser_g_1.SyntaxKind.dottedId].slice(-1)[0])[0].image.slice(1);
                    }
                    else {
                        name = getLeafNode(fullColumnNameStructure[parser_g_1.SyntaxKind.uid][0])[0].image;
                    }
                }
                else {
                    name = '*';
                    alias = '';
                }
                return {
                    name: name,
                    alias: alias
                };
            }))), 'name');
        }
        var tableInfo = {
            exportsFields: exportsFields
        };
        return query ? getTabelDetails(tableInfo, (query.children[parser_g_1.SyntaxKind.fromClause] || [])[0], true) : {};
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
    var getNextTableSource = function (ast, token, more) {
        var parent = getFilteredNode(ast.cst, function (target) { return target.name === parser_g_1.SyntaxKind.fromClause && target.children[parser_g_1.TokenEnum.FROM][0].startOffset === token.startOffset; });
        return parent ? getTabelDetails({}, parent[0], more) : [];
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