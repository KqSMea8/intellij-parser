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
        }, {
            type: 'earlyExitException',
            key: 'Expecting: expecting at least one iteration which starts with one of these possible Token sequences::',
            pattern: /\[.*?\]/g
        }
    ];
    var ErrorToken;
    (function (ErrorToken) {
        ErrorToken["singleMissingToken"] = "singleMissingToken";
        ErrorToken["multiMissingToken"] = "multiMissingToken";
        ErrorToken["initMissingToken"] = "initMissingToken";
        ErrorToken["earlyExitException"] = "earlyExitException";
    })(ErrorToken = exports.ErrorToken || (exports.ErrorToken = {}));
    var SQL = [
        'SELECT',
        'UPDATE',
        'CREATE',
        'COUNT',
        'DROP',
        'INSERT',
        'DELETE',
        'SUM',
        'ALTER',
        'SHOW',
        'DESCRIBE',
        'DESC'
    ];
    var Shell = [
        'FOR',
        'CASE',
        'SELECT',
        'WHILE',
        'UNTIL',
        'IF',
        'FUNCTION',
        'TOUCH',
        'CHMOD'
    ];
    exports.CommonStartToken = {
        ODPSSQL: SQL,
        HiveSQL: SQL,
        Shell: Shell
    };
    var Snippets;
    (function (Snippets) {
        Snippets["sel"] = "sel";
        Snippets["cre"] = "cre";
    })(Snippets = exports.Snippets || (exports.Snippets = {}));
});
//# sourceMappingURL=definations.js.map