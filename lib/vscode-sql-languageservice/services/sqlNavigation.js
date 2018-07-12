'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodes = require("../parser/sqlNodes");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var sqlSymbolScope_1 = require("../parser/sqlSymbolScope");
var languageFacts_1 = require("../services/languageFacts");
var nls = require("vscode-nls");
var sqlFolding_1 = require("./sqlFolding");
var localize = nls.loadMessageBundle();
var SQLNavigation = (function () {
    function SQLNavigation() {
    }
    SQLNavigation.prototype.findDefinition = function (document, position, stylesheet) {
        var symbols = new sqlSymbolScope_1.Symbols(stylesheet);
        var offset = document.offsetAt(position);
        var node = nodes.getNodeAtOffset(stylesheet, offset);
        if (!node) {
            return null;
        }
        var symbol = symbols.findSymbolFromNode(node);
        if (!symbol) {
            return null;
        }
        return {
            uri: document.uri,
            range: getRange(symbol.node, document)
        };
    };
    SQLNavigation.prototype.findReferences = function (document, position, stylesheet) {
        var highlights = this.findDocumentHighlights(document, position, stylesheet);
        return highlights.map(function (h) {
            return {
                uri: document.uri,
                range: h.range
            };
        });
    };
    SQLNavigation.prototype.findDocumentHighlights = function (document, position, stylesheet) {
        var result = [];
        var offset = document.offsetAt(position);
        var node = nodes.getNodeAtOffset(stylesheet, offset);
        if (!node || node.type === nodes.NodeType.Stylesheet || node.type === nodes.NodeType.Declarations) {
            return result;
        }
        var symbols = new sqlSymbolScope_1.Symbols(stylesheet);
        var symbol = symbols.findSymbolFromNode(node);
        var name = node.getText();
        stylesheet.accept(function (candidate) {
            if (symbol) {
                if (symbols.matchesSymbol(candidate, symbol)) {
                    result.push({
                        kind: getHighlightKind(candidate),
                        range: getRange(candidate, document)
                    });
                    return false;
                }
            }
            else if (node.type === candidate.type && node.length === candidate.length && name === candidate.getText()) {
                result.push({
                    kind: getHighlightKind(candidate),
                    range: getRange(candidate, document)
                });
            }
            return true;
        });
        return result;
    };
    SQLNavigation.prototype.findDocumentSymbols = function (document, stylesheet) {
        var result = [];
        stylesheet.accept(function (node) {
            var entry = {
                name: null,
                kind: vscode_languageserver_types_1.SymbolKind.Class,
                location: null
            };
            var locationNode = node;
            if (node instanceof nodes.Selector) {
                entry.name = node.getText();
                locationNode = node.findParent(nodes.NodeType.Ruleset);
            }
            else if (node instanceof nodes.VariableDeclaration) {
                entry.name = node.getName();
                entry.kind = vscode_languageserver_types_1.SymbolKind.Variable;
            }
            else if (node instanceof nodes.MixinDeclaration) {
                entry.name = node.getName();
                entry.kind = vscode_languageserver_types_1.SymbolKind.Method;
            }
            else if (node instanceof nodes.FunctionDeclaration) {
                entry.name = node.getName();
                entry.kind = vscode_languageserver_types_1.SymbolKind.Function;
            }
            else if (node instanceof nodes.Keyframe) {
                entry.name = localize('literal.keyframes', '@keyframes {0}', node.getName());
            }
            else if (node instanceof nodes.FontFace) {
                entry.name = localize('literal.fontface', '@font-face');
            }
            if (entry.name) {
                entry.location = vscode_languageserver_types_1.Location.create(document.uri, getRange(locationNode, document));
                result.push(entry);
            }
            return true;
        });
        return result;
    };
    SQLNavigation.prototype.findDocumentColors = function (document, stylesheet) {
        var result = [];
        stylesheet.accept(function (node) {
            var colorInfo = getColorInformation(node, document);
            if (colorInfo) {
                result.push(colorInfo);
            }
            return true;
        });
        return result;
    };
    SQLNavigation.prototype.getColorPresentations = function (document, stylesheet, color, range) {
        var result = [];
        var red256 = Math.round(color.red * 255), green256 = Math.round(color.green * 255), blue256 = Math.round(color.blue * 255);
        var label;
        if (color.alpha === 1) {
            label = "rgb(" + red256 + ", " + green256 + ", " + blue256 + ")";
        }
        else {
            label = "rgba(" + red256 + ", " + green256 + ", " + blue256 + ", " + color.alpha + ")";
        }
        result.push({ label: label, textEdit: vscode_languageserver_types_1.TextEdit.replace(range, label) });
        if (color.alpha === 1) {
            label = "#" + toTwoDigitHex(red256) + toTwoDigitHex(green256) + toTwoDigitHex(blue256);
        }
        else {
            label = "#" + toTwoDigitHex(red256) + toTwoDigitHex(green256) + toTwoDigitHex(blue256) + toTwoDigitHex(Math.round(color.alpha * 255));
        }
        result.push({ label: label, textEdit: vscode_languageserver_types_1.TextEdit.replace(range, label) });
        var hsl = languageFacts_1.hslFromColor(color);
        if (hsl.a === 1) {
            label = "hsl(" + hsl.h + ", " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%)";
        }
        else {
            label = "hsla(" + hsl.h + ", " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%, " + hsl.a + ")";
        }
        result.push({ label: label, textEdit: vscode_languageserver_types_1.TextEdit.replace(range, label) });
        return result;
    };
    SQLNavigation.prototype.doRename = function (document, position, newName, stylesheet) {
        var highlights = this.findDocumentHighlights(document, position, stylesheet);
        var edits = highlights.map(function (h) { return vscode_languageserver_types_1.TextEdit.replace(h.range, newName); });
        return {
            changes: (_a = {}, _a[document.uri] = edits, _a)
        };
        var _a;
    };
    SQLNavigation.prototype.findFoldingRegions = function (document) {
        return sqlFolding_1.getFoldingRegions(document);
    };
    return SQLNavigation;
}());
exports.SQLNavigation = SQLNavigation;
function getColorInformation(node, document) {
    var color = languageFacts_1.getColorValue(node);
    if (color) {
        var range = getRange(node, document);
        return { color: color, range: range };
    }
    return null;
}
function getRange(node, document) {
    return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
}
function getHighlightKind(node) {
    if (node.type === nodes.NodeType.Selector) {
        return vscode_languageserver_types_1.DocumentHighlightKind.Write;
    }
    if (node instanceof nodes.Identifier) {
        if (node.parent && node.parent instanceof nodes.Property) {
            if (node.isCustomProperty) {
                return vscode_languageserver_types_1.DocumentHighlightKind.Write;
            }
        }
    }
    if (node.parent) {
        switch (node.parent.type) {
            case nodes.NodeType.FunctionDeclaration:
            case nodes.NodeType.MixinDeclaration:
            case nodes.NodeType.Keyframe:
            case nodes.NodeType.VariableDeclaration:
            case nodes.NodeType.FunctionParameter:
                return vscode_languageserver_types_1.DocumentHighlightKind.Write;
        }
    }
    return vscode_languageserver_types_1.DocumentHighlightKind.Read;
}
function toTwoDigitHex(n) {
    var r = n.toString(16);
    return r.length !== 2 ? '0' + r : r;
}
//# sourceMappingURL=sqlNavigation.js.map