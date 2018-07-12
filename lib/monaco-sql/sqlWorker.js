'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = monaco.Promise;
var sqlService = require("../vscode-sql-languageservice/sqlLanguageService");
var ls = require("vscode-languageserver-types");
var SQLWorker = (function () {
    function SQLWorker(ctx, createData) {
        this._ctx = ctx;
        this._languageSettings = createData.languageSettings;
        this._languageId = createData.languageId;
        this._languageService = sqlService.getSQLLanguageService();
        this._languageService.configure(this._languageSettings);
    }
    SQLWorker.prototype.doValidation = function (uri) {
        var document = this._getTextDocument(uri);
        if (document) {
            var sqlDocument = this._languageService.parseSQLDocument(document);
            return Promise.as(this._languageService.doValidation(document, sqlDocument));
        }
        return Promise.as([]);
    };
    SQLWorker.prototype.doComplete = function (uri, position) {
        var document = this._getTextDocument(uri);
        var sqlDocument = this._languageService.parseSQLDocument(document);
        return Promise.as(this._languageService.doComplete(document, position, sqlDocument));
    };
    SQLWorker.prototype.doHover = function (uri, position) {
        var document = this._getTextDocument(uri);
        var sqlDocument = this._languageService.parseSQLDocument(document);
        return Promise.as(this._languageService.doHover(document, position, sqlDocument));
    };
    SQLWorker.prototype.findDocumentSymbols = function (uri) {
        var document = this._getTextDocument(uri);
        var sqlDocument = this._languageService.parseSQLDocument(document);
        var symbols = this._languageService.findDocumentSymbols(document, sqlDocument);
        return Promise.as(symbols);
    };
    SQLWorker.prototype._getTextDocument = function (uri) {
        var models = this._ctx.getMirrorModels();
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var model = models_1[_i];
            if (model.uri.toString() === uri) {
                return ls.TextDocument.create(uri, this._languageId, model.version, model.getValue());
            }
        }
        return null;
    };
    return SQLWorker;
}());
exports.SQLWorker = SQLWorker;
function create(ctx, createData) {
    return new SQLWorker(ctx, createData);
}
exports.create = create;
//# sourceMappingURL=sqlWorker.js.map