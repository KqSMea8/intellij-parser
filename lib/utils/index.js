(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ = require("lodash");
    var getClassification = function (cst, pos) {
        var queue = [cst];
        while (true) {
            var target = queue.pop();
            if (target) {
                var children = Object.values(target.children || []);
                queue.push.apply(queue, _.flattenDeep(children));
                if (target.startOffset && target.startOffset <= pos && target.endOffset >= pos) {
                    return target;
                }
            }
        }
    };
    exports.getClassification = getClassification;
});
//# sourceMappingURL=index.js.map