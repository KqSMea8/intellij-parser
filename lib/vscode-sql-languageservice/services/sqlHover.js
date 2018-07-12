'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodes = require("../parser/sqlNodes");
var languageFacts = require("./languageFacts");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var selectorPrinting_1 = require("./selectorPrinting");
var SQLHover = (function () {
    function SQLHover() {
    }
    SQLHover.prototype.doHover = function (document, position, stylesheet) {
        function getRange(node) {
            return vscode_languageserver_types_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
        }
        var offset = document.offsetAt(position);
        var nodepath = nodes.getNodePath(stylesheet, offset);
        for (var i = 0; i < nodepath.length; i++) {
            var node = nodepath[i];
            if (node instanceof nodes.Selector) {
                return {
                    contents: selectorPrinting_1.selectorToMarkedString(node),
                    range: getRange(node)
                };
            }
            if (node instanceof nodes.SimpleSelector) {
                return {
                    contents: selectorPrinting_1.simpleSelectorToMarkedString(node),
                    range: getRange(node)
                };
            }
            if (node instanceof nodes.Declaration) {
                var propertyName = node.getFullPropertyName();
                var entry = languageFacts.getProperties()[propertyName];
                if (entry) {
                    var contents = [];
                    if (entry.description) {
                        contents.push(vscode_languageserver_types_1.MarkedString.fromPlainText(entry.description));
                    }
                    var browserLabel = languageFacts.getBrowserLabel(entry.browsers);
                    if (browserLabel) {
                        contents.push(vscode_languageserver_types_1.MarkedString.fromPlainText(browserLabel));
                    }
                    if (contents.length) {
                        return {
                            contents: contents,
                            range: getRange(node)
                        };
                    }
                }
            }
        }
        return null;
    };
    return SQLHover;
}());
exports.SQLHover = SQLHover;
//# sourceMappingURL=sqlHover.js.map