"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defination_1 = require("./defination");
var initialized = false;
function initialize(cb) {
    if (initialized) {
        return;
    }
    initialized = true;
    cb();
}
exports.initialize = initialize;
var SQLWorker = (function () {
    function SQLWorker(config) {
        var _this = this;
        this.doValidation = function (doc) {
            _this._worker.postMessage({
                actionType: defination_1.Actions.validation,
                doc: doc,
            });
            return new Promise(function (resolve) {
                _this._validationResolver = resolve;
            });
        };
        this.doComplete = function (doc, pos) {
            _this._worker.postMessage({
                actionType: defination_1.Actions.complete,
                doc: doc,
                pos: pos
            });
            return new Promise(function (resolve) {
            });
        };
        this._config = config;
        this._worker = new Worker('./common.worker.js');
        this._validationResolver = null;
        this._worker.onmessage = function (e, another) {
            console.log(e, another);
            var _a = e.data, actionType = _a.actionType, result = _a.result;
            _this["_" + actionType + "Resolver"](result);
        };
    }
    SQLWorker.prototype.depose = function () {
        this._worker.terminate();
    };
    SQLWorker.prototype.doHover = function (doc, pos) {
        this._worker.postMessage({
            actionType: defination_1.Actions.hover,
            doc: doc,
            pos: pos
        });
        return new Promise(function (resolve) {
        });
    };
    return SQLWorker;
}());
exports.default = SQLWorker;
//# sourceMappingURL=SQLWorker.js.map