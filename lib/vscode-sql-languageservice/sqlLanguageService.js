'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
exports.Range = vscode_languageserver_types_1.Range;
exports.TextEdit = vscode_languageserver_types_1.TextEdit;
var parser_g_1 = require("../sql-parser/parser.g");
var sqlCompletion_1 = require("./services/sqlCompletion");
var sqlHover_1 = require("./services/sqlHover");
var sqlNavigation_1 = require("./services/sqlNavigation");
var sqlCodeActions_1 = require("./services/sqlCodeActions");
var sqlValidation_1 = require("./services/sqlValidation");
function createFacade(parser, completion, hover, navigation, codeActions, validation) {
    return {
        configure: validation.configure.bind(validation),
        doValidation: validation.doValidation.bind(validation),
        parseSQLDocument: parser.parseStylesheet.bind(parser),
        doComplete: completion.doComplete.bind(completion),
        setCompletionParticipants: completion.setCompletionParticipants.bind(completion),
        doHover: hover.doHover.bind(hover),
        findDefinition: navigation.findDefinition.bind(navigation),
        findReferences: navigation.findReferences.bind(navigation),
        findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
        findDocumentSymbols: navigation.findDocumentSymbols.bind(navigation),
        doCodeActions: codeActions.doCodeActions.bind(codeActions),
        findColorSymbols: function (d, s) { return navigation.findDocumentColors(d, s).map(function (s) { return s.range; }); },
        findDocumentColors: navigation.findDocumentColors.bind(navigation),
        getColorPresentations: navigation.getColorPresentations.bind(navigation),
        doRename: navigation.doRename.bind(navigation),
        findFoldingRegions: navigation.findFoldingRegions.bind(navigation)
    };
}
function getSQLLanguageService() {
    return createFacade(new parser_g_1.Parser([]), new sqlCompletion_1.SQLCompletion(), new sqlHover_1.SQLHover(), new sqlNavigation_1.SQLNavigation(), new sqlCodeActions_1.SQLCodeActions(), new sqlValidation_1.SQLValidation());
}
exports.getSQLLanguageService = getSQLLanguageService;
//# sourceMappingURL=sqlLanguageService.js.map