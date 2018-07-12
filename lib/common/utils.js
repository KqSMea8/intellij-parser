(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function toUCamelCase(word) {
        if (!word) {
            return word;
        }
        var firstChar = word.slice(0, 1);
        return firstChar.toUpperCase() + word.slice(1);
    }
    exports.toUCamelCase = toUCamelCase;
});
//# sourceMappingURL=utils.js.map