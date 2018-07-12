'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var nodes = require("../parser/sqlNodes");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var lintRules_1 = require("./lintRules");
var lint_1 = require("./lint");
var SQLValidation = (function () {
    function SQLValidation() {
    }
    SQLValidation.prototype.configure = function (settings) {
        this.settings = settings;
    };
    SQLValidation.prototype.doValidation = function (document, stylesheet, settings) {
        if (settings === void 0) { settings = this.settings; }
        if (settings && settings.validate === false) {
            return [];
        }
        var entries = [];
        entries.push.apply(entries, nodes.ParseErrorCollector.entries(stylesheet));
        entries.push.apply(entries, lint_1.LintVisitor.entries(stylesheet, document, new lintRules_1.LintConfigurationSettings(settings && settings.lint)));
        function toDiagnostic(marker) {
            var range = vscode_languageserver_types_1.Range.create(document.positionAt(marker.getOffset()), document.positionAt(marker.getOffset() + marker.getLength()));
            return {
                code: marker.getRule().id,
                source: document.languageId,
                message: marker.getMessage(),
                severity: marker.getLevel() === nodes.Level.Warning ? vscode_languageserver_types_1.DiagnosticSeverity.Warning : vscode_languageserver_types_1.DiagnosticSeverity.Error,
                range: range
            };
        }
        return entries.filter(function (entry) { return entry.getLevel() !== nodes.Level.Ignore; }).map(toDiagnostic);
    };
    return SQLValidation;
}());
exports.SQLValidation = SQLValidation;
//# sourceMappingURL=sqlValidation.js.map