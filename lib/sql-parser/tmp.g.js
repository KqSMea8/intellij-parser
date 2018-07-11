var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var _a = require("chevrotain"), Parser = _a.Parser, createToken = _a.createToken, Lexer = _a.Lexer;
    var Identifier = createToken({ name: "Identifier", pattern: /[a-zA-Z]\w*/ });
    var Select = createToken({
        name: "Select",
        pattern: /SELECT|select/,
    });
    var From = createToken({
        name: "From",
        pattern: /FROM/,
    });
    var Where = createToken({
        name: "Where",
        pattern: /WHERE/,
    });
    var Comma = createToken({ name: "Comma", pattern: /,/ });
    var Integer = createToken({ name: "Integer", pattern: /0|[1-9]\d*/ });
    var GreaterThan = createToken({ name: "GreaterThan", pattern: />/ });
    var LessThan = createToken({ name: "LessThan", pattern: /</ });
    var WhiteSpace = createToken({
        name: "WhiteSpace",
        pattern: /\s+/,
        group: Lexer.SKIPPED
    });
    var allTokens = [
        WhiteSpace,
        Select,
        From,
        Where,
        Comma,
        Identifier,
        Integer,
        GreaterThan,
        LessThan
    ];
    exports.SelectLexer = new Lexer(allTokens, {
        positionTracking: 'onlyStart',
    });
    var SelectParser = (function (_super) {
        __extends(SelectParser, _super);
        function SelectParser(input) {
            var _this = _super.call(this, input, allTokens, {
                recoveryEnabled: true,
                outputCst: true,
            }) || this;
            var $ = _this;
            $.RULE("selectStatement", function () {
                $.SUBRULE($.selectClause);
                $.SUBRULE($.fromClause);
                $.OPTION(function () {
                    $.SUBRULE($.whereClause);
                });
            });
            $.RULE("selectClause", function () {
                $.CONSUME(Select);
                $.AT_LEAST_ONE_SEP({
                    SEP: Comma,
                    DEF: function () {
                        $.CONSUME(Identifier);
                    }
                });
            });
            $.RULE("fromClause", function () {
                $.CONSUME(From);
                $.CONSUME(Identifier);
            });
            $.RULE("whereClause", function () {
                $.CONSUME(Where);
                $.SUBRULE($.expression);
            });
            $.RULE("expression", function () {
                $.SUBRULE($.atomicExpression, { LABEL: "lhs" });
                $.SUBRULE($.relationalOperator);
                $.SUBRULE2($.atomicExpression, { LABEL: "rhs" });
            });
            $.RULE("atomicExpression", function () {
                $.OR([
                    { ALT: function () { return $.CONSUME(Integer); } },
                    { ALT: function () { return $.CONSUME(Identifier); } }
                ]);
            });
            $.RULE("relationalOperator", function () {
                $.OR([
                    { ALT: function () { return $.CONSUME(GreaterThan); } },
                    { ALT: function () { return $.CONSUME(LessThan); } }
                ]);
            });
            _this.performSelfAnalysis();
            return _this;
        }
        return SelectParser;
    }(Parser));
    exports.SelectParser = SelectParser;
});
//# sourceMappingURL=tmp.g.js.map