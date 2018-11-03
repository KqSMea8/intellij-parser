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
        }, {
            type: 'initMissingToken',
            key: 'Redundant input, expecting EOF but found:',
            pattern: /Redundant input, expecting EOF but found: (.*)/
        }
    ];
    var ErrorToken;
    (function (ErrorToken) {
        ErrorToken["singleMissingToken"] = "singleMissingToken";
        ErrorToken["multiMissingToken"] = "multiMissingToken";
        ErrorToken["initMissingToken"] = "initMissingToken";
    })(ErrorToken = exports.ErrorToken || (exports.ErrorToken = {}));
    var CommonStartToken;
    (function (CommonStartToken) {
        CommonStartToken["SELECT"] = "SELECT";
        CommonStartToken["UPDATE"] = "UPDATE";
        CommonStartToken["CREATE"] = "CREATE";
        CommonStartToken["COUNT"] = "COUNT";
        CommonStartToken["DROP"] = "DROP";
        CommonStartToken["INSERT"] = "INSERT";
        CommonStartToken["DELETE"] = "DELETE";
        CommonStartToken["SUM"] = "SUM";
        CommonStartToken["ALTER"] = "ALTER";
        CommonStartToken["SHOW"] = "SHOW";
    })(CommonStartToken = exports.CommonStartToken || (exports.CommonStartToken = {}));
    var Snippets;
    (function (Snippets) {
        Snippets["sel"] = "sel";
        Snippets["cre"] = "cre";
    })(Snippets = exports.Snippets || (exports.Snippets = {}));
});
//# sourceMappingURL=definations.js.map