'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Emitter = monaco.Emitter;
var LanguageServiceDefaultsImpl = (function () {
    function LanguageServiceDefaultsImpl(languageId, diagnosticsOptions) {
        this._onDidChange = new Emitter();
        this._languageId = languageId;
        this.setDiagnosticsOptions(diagnosticsOptions);
    }
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "diagnosticsOptions", {
        get: function () {
            return this._diagnosticsOptions;
        },
        enumerable: true,
        configurable: true
    });
    LanguageServiceDefaultsImpl.prototype.setDiagnosticsOptions = function (options) {
        this._diagnosticsOptions = options || Object.create(null);
        this._onDidChange.fire(this);
    };
    return LanguageServiceDefaultsImpl;
}());
exports.LanguageServiceDefaultsImpl = LanguageServiceDefaultsImpl;
var diagnosticDefault = {
    validate: true,
    allowComments: true,
    schemas: []
};
var sqlDefaults = new LanguageServiceDefaultsImpl('sql', diagnosticDefault);
function createAPI() {
    return {
        sqlDefaults: sqlDefaults
    };
}
monaco.languages.sql = createAPI();
function getMode() {
    return monaco.Promise.wrap(Promise.resolve().then(function () { return require('./sqlMode'); }));
}
monaco.languages.register({
    id: 'sql',
    extensions: ['.sql'],
    aliases: ['SQL', 'sql']
});
monaco.languages.onLanguage('sql', function () {
    getMode().then(function (mode) { return mode.setupMode(sqlDefaults); });
});
//# sourceMappingURL=monaco.contribution.js.map