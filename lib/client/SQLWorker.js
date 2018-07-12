"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker = require("worker-loader?name=common.worker.js!./common.worker");
var initialized = false;
var Actions;
(function (Actions) {
    Actions["hover"] = "hover";
    Actions["validation"] = "validation";
    Actions["complete"] = "complete";
})(Actions = exports.Actions || (exports.Actions = {}));
var SQLWorker = (function () {
    function SQLWorker(config) {
        var _this = this;
        this.doValidation = function (doc) {
            _this.worker.postMessage({
                actionType: Actions.validation,
                doc: doc
            });
            return new Promise(function (resolve, reject) {
                _this.validationResolver = resolve;
                _this.validationRejects.push(reject);
            });
        };
        this.doComplete = function (doc, pos) {
            _this.worker.postMessage({
                actionType: Actions.complete,
                doc: doc,
                pos: pos
            });
            return new Promise(function (resolve, reject) {
                _this.completeResolver = resolve;
                _this.completeRejects.push(reject);
            });
        };
        this.config = config;
        this.worker = new Worker();
        this.worker.onmessage = function (e) {
            var _a = e.data, actionType = _a.actionType, result = _a.result;
            _this[actionType + "Resolver"](result);
            _this[actionType + "Rejects"].forEach(function (reject) { return reject(); });
            _this[actionType + "Rejects"] = [];
        };
    }
    SQLWorker.prototype.depose = function () {
        this.worker.terminate();
    };
    SQLWorker.prototype.doHover = function (doc, pos) {
        var _this = this;
        this.worker.postMessage({
            actionType: Actions.hover,
            doc: doc,
            pos: pos
        });
        return new Promise(function (resolve, reject) {
            _this.hoverResolver = resolve;
            _this.hoverRejects.push(reject);
        });
    };
    return SQLWorker;
}());
exports.default = SQLWorker;
//# sourceMappingURL=SQLWorker.js.map