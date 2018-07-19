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
    var ErrorType;
    (function (ErrorType) {
        ErrorType["NoViableAltException"] = "NoViableAltException";
    })(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
    exports.ErrorPrefix = [
        {
            type: 'singleMissingToken',
            key: 'Expecting token of type --> ',
            pattern: /Expecting token of type --> (.*) <-- but/
        }, {
            type: 'multiMissingToken',
            key: 'Expecting: one of these possible Token sequences:',
            pattern: /\[.*?\]/g
        }
    ];
    var ErrorToken;
    (function (ErrorToken) {
        ErrorToken["singleMissingToken"] = "singleMissingToken";
        ErrorToken["multiMissingToken"] = "multiMissingToken";
    })(ErrorToken = exports.ErrorToken || (exports.ErrorToken = {}));
});
//# sourceMappingURL=definations.js.map