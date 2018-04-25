"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defination_1 = require("./defination");
var service = require("../service");
var utils = require("./utils");
var hoverIdx = 0;
var completeIdx = 0;
var validationIdx = 0;
onmessage = function (e) {
    var _a = e.data, actionType = _a.actionType, doc = _a.doc;
    switch (actionType) {
        case defination_1.Actions.hover: {
        }
        case defination_1.Actions.validation: {
            var result = utils.safePost(service.doValidation(doc), ++validationIdx);
            if (result.idx === validationIdx) {
                postMessage({
                    actionType: defination_1.Actions.validation,
                    result: result.data
                }, null);
            }
        }
        case defination_1.Actions.complete: {
        }
    }
};
//# sourceMappingURL=common.worker.js.map