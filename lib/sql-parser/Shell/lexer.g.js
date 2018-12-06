(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chevrotain"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chevrotain = require("chevrotain");
    var WhiteSpace = chevrotain.createToken({
        name: 'WhiteSpace',
        pattern: /\s+/,
        group: chevrotain.Lexer.SKIPPED,
        line_breaks: true,
    });
    var EQUAL_SYMBOL = chevrotain.createToken({
        name: 'EQUAL_SYMBOL',
        pattern: /\=/,
    });
    var TIME_OPT = chevrotain.createToken({
        name: 'TIME_OPT',
        pattern: /\-p/,
    });
    var EXCLAMATION_SYMBOL = chevrotain.createToken({
        name: 'EXCLAMATION_SYMBOL',
        pattern: /\!/,
    });
    var DOUBLE_SEMI = chevrotain.createToken({
        name: 'DOUBLE_SEMI',
        pattern: /\;\;/,
    });
    var SEMI = chevrotain.createToken({
        name: 'SEMI',
        pattern: /\;/,
    });
    var LINE_FEED = chevrotain.createToken({
        name: 'LINE_FEED',
        pattern: /\n/,
    });
    var RIGHT_BRACKET = chevrotain.createToken({
        name: 'RIGHT_BRACKET',
        pattern: /\)/,
    });
    var RIGHT_BRACE = chevrotain.createToken({
        name: 'RIGHT_BRACE',
        pattern: /\}/,
    });
    var LEFT_BRACKET = chevrotain.createToken({
        name: 'LEFT_BRACKET',
        pattern: /\(/,
    });
    var LEFT_BRACE = chevrotain.createToken({
        name: 'LEFT_BRACE',
        pattern: /\{/,
    });
    var OR = chevrotain.createToken({
        name: 'OR',
        pattern: /\|\|/,
    });
    var AND = chevrotain.createToken({
        name: 'AND',
        pattern: /\&\&/,
    });
    var BIT_AND_OP = chevrotain.createToken({
        name: 'BIT_AND_OP',
        pattern: /\&/,
    });
    var BIT_OR_OP = chevrotain.createToken({
        name: 'BIT_OR_OP',
        pattern: /\|/,
    });
    var UNDERLINE = chevrotain.createToken({
        name: 'UNDERLINE',
        pattern: /_/,
    });
    var HYPHEN = chevrotain.createToken({
        name: 'HYPHEN',
        pattern: /\-/,
    });
    var DESCRIPTOR_TO_FILE = chevrotain.createToken({
        name: 'DESCRIPTOR_TO_FILE',
        pattern: /\&\>/,
    });
    var RIGHT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION_WITH_MERGE',
        pattern: /\>\&/,
    });
    var LEFT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
        name: 'LEFT_REDIRECTION_WITH_MERGE',
        pattern: /\<\&/,
    });
    var RIGHT_REDIRECTION_WITH_ADD = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION_WITH_ADD',
        pattern: /\>\>/,
    });
    var LEFT_REDIRECTION_WITH_ADD = chevrotain.createToken({
        name: 'LEFT_REDIRECTION_WITH_ADD',
        pattern: /\<\</,
    });
    var RIGHT_REDIRECTION = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION',
        pattern: /\>/,
    });
    var LEFT_REDIRECTION = chevrotain.createToken({
        name: 'LEFT_REDIRECTION',
        pattern: /\</,
    });
    var DIGIT = chevrotain.createToken({
        name: 'DIGIT',
        pattern: /[0-9]+/,
    });
    var TIME = chevrotain.createToken({
        name: 'TIME',
        pattern: /TIME/,
    });
    var ELSE_END = chevrotain.createToken({
        name: 'ELSE_END',
        pattern: /ELIF/,
    });
    var ELSE = chevrotain.createToken({
        name: 'ELSE',
        pattern: /ELSE/,
    });
    var THEN = chevrotain.createToken({
        name: 'THEN',
        pattern: /THEN/,
    });
    var IF_END = chevrotain.createToken({
        name: 'IF_END',
        pattern: /FI/,
    });
    var IF = chevrotain.createToken({
        name: 'IF',
        pattern: /IF/,
    });
    var FUNCTION = chevrotain.createToken({
        name: 'FUNCTION',
        pattern: /FUNCTION/,
    });
    var CASE_END = chevrotain.createToken({
        name: 'CASE_END',
        pattern: /ESAC/,
    });
    var CASE = chevrotain.createToken({
        name: 'CASE',
        pattern: /CASE/,
    });
    var SELECT = chevrotain.createToken({
        name: 'SELECT',
        pattern: /SELECT/,
    });
    var IN = chevrotain.createToken({
        name: 'IN',
        pattern: /IN/,
    });
    var FOR = chevrotain.createToken({
        name: 'FOR',
        pattern: /FOR/,
    });
    var DONE = chevrotain.createToken({
        name: 'DONE',
        pattern: /DONE/,
    });
    var DO = chevrotain.createToken({
        name: 'DO',
        pattern: /DO/,
    });
    var UNTIL = chevrotain.createToken({
        name: 'UNTIL',
        pattern: /UNTIL/,
    });
    var WHILE = chevrotain.createToken({
        name: 'WHILE',
        pattern: /WHILE/,
    });
    var LETTER = chevrotain.createToken({
        name: 'LETTER',
        pattern: /[A-Za-z]+/,
    });
    var TokenEnum;
    (function (TokenEnum) {
        TokenEnum["EQUAL_SYMBOL"] = "EQUAL_SYMBOL";
        TokenEnum["TIME_OPT"] = "TIME_OPT";
        TokenEnum["EXCLAMATION_SYMBOL"] = "EXCLAMATION_SYMBOL";
        TokenEnum["DOUBLE_SEMI"] = "DOUBLE_SEMI";
        TokenEnum["SEMI"] = "SEMI";
        TokenEnum["LINE_FEED"] = "LINE_FEED";
        TokenEnum["RIGHT_BRACKET"] = "RIGHT_BRACKET";
        TokenEnum["RIGHT_BRACE"] = "RIGHT_BRACE";
        TokenEnum["LEFT_BRACKET"] = "LEFT_BRACKET";
        TokenEnum["LEFT_BRACE"] = "LEFT_BRACE";
        TokenEnum["OR"] = "OR";
        TokenEnum["AND"] = "AND";
        TokenEnum["BIT_AND_OP"] = "BIT_AND_OP";
        TokenEnum["BIT_OR_OP"] = "BIT_OR_OP";
        TokenEnum["UNDERLINE"] = "UNDERLINE";
        TokenEnum["HYPHEN"] = "HYPHEN";
        TokenEnum["DESCRIPTOR_TO_FILE"] = "DESCRIPTOR_TO_FILE";
        TokenEnum["RIGHT_REDIRECTION_WITH_MERGE"] = "RIGHT_REDIRECTION_WITH_MERGE";
        TokenEnum["LEFT_REDIRECTION_WITH_MERGE"] = "LEFT_REDIRECTION_WITH_MERGE";
        TokenEnum["RIGHT_REDIRECTION_WITH_ADD"] = "RIGHT_REDIRECTION_WITH_ADD";
        TokenEnum["LEFT_REDIRECTION_WITH_ADD"] = "LEFT_REDIRECTION_WITH_ADD";
        TokenEnum["RIGHT_REDIRECTION"] = "RIGHT_REDIRECTION";
        TokenEnum["LEFT_REDIRECTION"] = "LEFT_REDIRECTION";
        TokenEnum["DIGIT"] = "DIGIT";
        TokenEnum["TIME"] = "TIME";
        TokenEnum["ELSE_END"] = "ELSE_END";
        TokenEnum["ELSE"] = "ELSE";
        TokenEnum["THEN"] = "THEN";
        TokenEnum["IF_END"] = "IF_END";
        TokenEnum["IF"] = "IF";
        TokenEnum["FUNCTION"] = "FUNCTION";
        TokenEnum["CASE_END"] = "CASE_END";
        TokenEnum["CASE"] = "CASE";
        TokenEnum["SELECT"] = "SELECT";
        TokenEnum["IN"] = "IN";
        TokenEnum["FOR"] = "FOR";
        TokenEnum["DONE"] = "DONE";
        TokenEnum["DO"] = "DO";
        TokenEnum["UNTIL"] = "UNTIL";
        TokenEnum["WHILE"] = "WHILE";
        TokenEnum["LETTER"] = "LETTER";
    })(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
    exports.Tokens = {
        EQUAL_SYMBOL: EQUAL_SYMBOL,
        TIME_OPT: TIME_OPT,
        EXCLAMATION_SYMBOL: EXCLAMATION_SYMBOL,
        DOUBLE_SEMI: DOUBLE_SEMI,
        SEMI: SEMI,
        LINE_FEED: LINE_FEED,
        RIGHT_BRACKET: RIGHT_BRACKET,
        RIGHT_BRACE: RIGHT_BRACE,
        LEFT_BRACKET: LEFT_BRACKET,
        LEFT_BRACE: LEFT_BRACE,
        OR: OR,
        AND: AND,
        BIT_AND_OP: BIT_AND_OP,
        BIT_OR_OP: BIT_OR_OP,
        UNDERLINE: UNDERLINE,
        HYPHEN: HYPHEN,
        DESCRIPTOR_TO_FILE: DESCRIPTOR_TO_FILE,
        RIGHT_REDIRECTION_WITH_MERGE: RIGHT_REDIRECTION_WITH_MERGE,
        LEFT_REDIRECTION_WITH_MERGE: LEFT_REDIRECTION_WITH_MERGE,
        RIGHT_REDIRECTION_WITH_ADD: RIGHT_REDIRECTION_WITH_ADD,
        LEFT_REDIRECTION_WITH_ADD: LEFT_REDIRECTION_WITH_ADD,
        RIGHT_REDIRECTION: RIGHT_REDIRECTION,
        LEFT_REDIRECTION: LEFT_REDIRECTION,
        DIGIT: DIGIT,
        TIME: TIME,
        ELSE_END: ELSE_END,
        ELSE: ELSE,
        THEN: THEN,
        IF_END: IF_END,
        IF: IF,
        FUNCTION: FUNCTION,
        CASE_END: CASE_END,
        CASE: CASE,
        SELECT: SELECT,
        IN: IN,
        FOR: FOR,
        DONE: DONE,
        DO: DO,
        UNTIL: UNTIL,
        WHILE: WHILE,
        LETTER: LETTER,
    };
    exports.tokens = [
        WhiteSpace,
        EQUAL_SYMBOL,
        TIME_OPT,
        EXCLAMATION_SYMBOL,
        DOUBLE_SEMI,
        SEMI,
        LINE_FEED,
        RIGHT_BRACKET,
        RIGHT_BRACE,
        LEFT_BRACKET,
        LEFT_BRACE,
        OR,
        AND,
        BIT_AND_OP,
        BIT_OR_OP,
        UNDERLINE,
        HYPHEN,
        DESCRIPTOR_TO_FILE,
        RIGHT_REDIRECTION_WITH_MERGE,
        LEFT_REDIRECTION_WITH_MERGE,
        RIGHT_REDIRECTION_WITH_ADD,
        LEFT_REDIRECTION_WITH_ADD,
        RIGHT_REDIRECTION,
        LEFT_REDIRECTION,
        DIGIT,
        TIME,
        ELSE_END,
        ELSE,
        THEN,
        IF_END,
        IF,
        FUNCTION,
        CASE_END,
        CASE,
        SELECT,
        IN,
        FOR,
        DONE,
        DO,
        UNTIL,
        WHILE,
        LETTER,
    ];
    exports.Lexer = new chevrotain.Lexer(exports.tokens, {
        positionTracking: 'onlyStart',
    });
});
//# sourceMappingURL=lexer.g.js.map