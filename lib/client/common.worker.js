"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Const_ts_1 = require("./Const.ts");
var service = require("../service/index.ts");
var utils_ts_1 = require("../src/utils.ts");
var hoverCount = 0;
var validationCount = 0;
var completeCount = 0;
onmessage = function (e) {
    var _a = e.data, actionType = _a.actionType, doc = _a.doc, pos = _a.pos;
    switch (actionType) {
        case Const_ts_1.Actions.hover: {
            var result = utils_ts_1.absorbing(++hoverCount, function () { return service.doHover(doc, pos); });
            if (result.count === hoverCount) {
                postMessage({
                    actionType: Const_ts_1.Actions.hover,
                    result: result.data
                });
            }
            return;
        }
        case Const_ts_1.Actions.validation: {
            var result = utils_ts_1.absorbing(++validationCount, function () { return service.doValidation(doc); });
            if (result.count === validationCount) {
                postMessage({
                    actionType: Const_ts_1.Actions.validation,
                    result: result.data
                });
            }
            return;
        }
        case Const_ts_1.Actions.complete: {
            var result = utils_ts_1.absorbing(++completeCount, function () { return service.doComplete(doc, pos); });
            if (result.count === completeCount) {
                postMessage({
                    actionType: Const_ts_1.Actions.complete,
                    result: result.data
                });
            }
            return;
        }
    }
};
//# sourceMappingURL=common.worker.js.map