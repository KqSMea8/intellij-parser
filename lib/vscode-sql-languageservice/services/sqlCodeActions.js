'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodes = require("../parser/sqlNodes");
var languageFacts = require("./languageFacts");
var strings_1 = require("../utils/strings");
var lintRules_1 = require("../services/lintRules");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var nls = require("vscode-nls");
var localize = nls.loadMessageBundle();
var SQLCodeActions = (function () {
    function SQLCodeActions() {
    }
    SQLCodeActions.prototype.doCodeActions = function (document, range, context, stylesheet) {
        var result = [];
        if (context.diagnostics) {
            for (var _i = 0, _a = context.diagnostics; _i < _a.length; _i++) {
                var diagnostic = _a[_i];
                this.appendFixesForMarker(document, stylesheet, diagnostic, result);
            }
        }
        return result;
    };
    SQLCodeActions.prototype.getFixesForUnknownProperty = function (document, property, marker, result) {
        var propertyName = property.getName();
        var candidates = [];
        for (var p in languageFacts.getProperties()) {
            var score = strings_1.difference(propertyName, p);
            if (score >= propertyName.length / 2) {
                candidates.push({ property: p, score: score });
            }
        }
        candidates.sort(function (a, b) {
            return b.score - a.score;
        });
        var maxActions = 3;
        for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
            var candidate = candidates_1[_i];
            var propertyName_1 = candidate.property;
            var title = localize('css.codeaction.rename', "Rename to '{0}'", propertyName_1);
            var edit = vscode_languageserver_types_1.TextEdit.replace(marker.range, propertyName_1);
            result.push(vscode_languageserver_types_1.Command.create(title, '_css.applyCodeAction', document.uri, document.version, [edit]));
            if (--maxActions <= 0) {
                return;
            }
        }
    };
    SQLCodeActions.prototype.appendFixesForMarker = function (document, stylesheet, marker, result) {
        if (marker.code !== lintRules_1.Rules.UnknownProperty.id) {
            return;
        }
        var offset = document.offsetAt(marker.range.start);
        var end = document.offsetAt(marker.range.end);
        var nodepath = nodes.getNodePath(stylesheet, offset);
        for (var i = nodepath.length - 1; i >= 0; i--) {
            var node = nodepath[i];
            if (node instanceof nodes.Declaration) {
                var property = node.getProperty();
                if (property && property.offset === offset && property.end === end) {
                    this.getFixesForUnknownProperty(document, property, marker, result);
                    return;
                }
            }
        }
    };
    return SQLCodeActions;
}());
exports.SQLCodeActions = SQLCodeActions;
//# sourceMappingURL=sqlCodeActions.js.map