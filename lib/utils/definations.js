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
    CommonStartToken["sel"] = "sel";
    CommonStartToken["cre"] = "cre";
})(CommonStartToken = exports.CommonStartToken || (exports.CommonStartToken = {}));
//# sourceMappingURL=definations.js.map