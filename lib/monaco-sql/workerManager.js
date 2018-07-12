'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = monaco.Promise;
var STOP_WHEN_IDLE_FOR = 2 * 60 * 1000;
var WorkerManager = (function () {
    function WorkerManager(defaults) {
        var _this = this;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                moduleId: 'vs/language/sql/sqlWorker',
                label: this._defaults.languageId,
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId
                }
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return toShallowCancelPromise(this._getClient()
            .then(function (client) {
            _client = client;
        })
            .then(function (_) {
            return _this._worker.withSyncedResources(resources);
        })
            .then(function (_) { return _client; }));
    };
    return WorkerManager;
}());
exports.WorkerManager = WorkerManager;
function toShallowCancelPromise(p) {
    var completeCallback;
    var errorCallback;
    var r = new Promise(function (c, e) {
        completeCallback = c;
        errorCallback = e;
    }, function () { });
    p.then(completeCallback, errorCallback);
    return r;
}
//# sourceMappingURL=workerManager.js.map