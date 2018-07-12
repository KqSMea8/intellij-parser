'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var workerManager_1 = require("./workerManager");
var languageFeatures = require("./languageFeatures");
function setupMode(defaults) {
    var disposables = [];
    var client = new workerManager_1.WorkerManager(defaults);
    disposables.push(client);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    var languageId = defaults.languageId;
    var diagnostcsAdapter = new languageFeatures.DiagnostcsAdapter(languageId, worker);
    defaults.onDidChange(function (c) { return diagnostcsAdapter.clearMarkers(); });
    disposables.push(monaco.languages.registerCompletionItemProvider(languageId, new languageFeatures.CompletionAdapter(worker)));
    disposables.push(monaco.languages.registerHoverProvider(languageId, new languageFeatures.HoverAdapter(worker)));
    disposables.push(monaco.languages.registerDocumentSymbolProvider(languageId, new languageFeatures.DocumentSymbolAdapter(worker)));
    disposables.push(diagnostcsAdapter);
    disposables.push(monaco.languages.setLanguageConfiguration(languageId, richEditConfiguration));
}
exports.setupMode = setupMode;
var richEditConfiguration = {
    wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [['{', '}'], ['[', ']']],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] }
    ]
};
//# sourceMappingURL=sqlMode.js.map