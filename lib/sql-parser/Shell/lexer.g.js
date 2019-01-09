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
    var STRING_LITERAL = chevrotain.createToken({
        name: 'STRING_LITERAL',
        pattern: /("(\.|""|[^("|\)])*"|'(\.|''|[^('|\)])*')/i,
    });
    var DIGIT = chevrotain.createToken({
        name: 'DIGIT',
        pattern: /[0-9]+/i,
        longer_alt: STRING_LITERAL,
    });
    var DIGIT_TO_SEVEN = chevrotain.createToken({
        name: 'DIGIT_TO_SEVEN',
        pattern: /[0-7][0-7][0-7]/i,
        longer_alt: DIGIT,
    });
    var ID = chevrotain.createToken({
        name: 'ID',
        pattern: /[A-Za-z_$0-9*]+/i,
        longer_alt: DIGIT_TO_SEVEN,
    });
    var OPTION_X = chevrotain.createToken({
        name: 'OPTION_X',
        pattern: /X/,
    });
    var OPTION_X_LOWER = chevrotain.createToken({
        name: 'OPTION_X_LOWER',
        pattern: /x/,
    });
    var OPTION_W_LOWER = chevrotain.createToken({
        name: 'OPTION_W_LOWER',
        pattern: /w/,
    });
    var OPTION_V_LOWER = chevrotain.createToken({
        name: 'OPTION_V_LOWER',
        pattern: /v/,
    });
    var OPTION_U_LOWER = chevrotain.createToken({
        name: 'OPTION_U_LOWER',
        pattern: /u/,
    });
    var OPTION_T_LOWER = chevrotain.createToken({
        name: 'OPTION_T_LOWER',
        pattern: /t/,
    });
    var OPTION_R_LOWER = chevrotain.createToken({
        name: 'OPTION_R_LOWER',
        pattern: /r/,
    });
    var OPTION_O_LOWER = chevrotain.createToken({
        name: 'OPTION_O_LOWER',
        pattern: /o/,
    });
    var OPTION_M_LOWER = chevrotain.createToken({
        name: 'OPTION_M_LOWER',
        pattern: /m/,
    });
    var OPTION_G_LOWER = chevrotain.createToken({
        name: 'OPTION_G_LOWER',
        pattern: /g/,
    });
    var OPTION_F_LOWER = chevrotain.createToken({
        name: 'OPTION_F_LOWER',
        pattern: /f/,
    });
    var OPTION_D_LOWER = chevrotain.createToken({
        name: 'OPTION_D_LOWER',
        pattern: /d/,
    });
    var OPTION_C_LOWER = chevrotain.createToken({
        name: 'OPTION_C_LOWER',
        pattern: /c/,
    });
    var OPTION_A_LOWER = chevrotain.createToken({
        name: 'OPTION_A_LOWER',
        pattern: /a/,
    });
    var NO_CREATE = chevrotain.createToken({
        name: 'NO_CREATE',
        pattern: /no\-create/i,
        longer_alt: ID,
    });
    var COMMENT = chevrotain.createToken({
        name: 'COMMENT',
        pattern: /\#+(.)*/i,
        longer_alt: ID,
    });
    var ECHO = chevrotain.createToken({
        name: 'ECHO',
        pattern: /ECHO/i,
        longer_alt: ID,
    });
    var ADD = chevrotain.createToken({
        name: 'ADD',
        pattern: /\+/i,
        longer_alt: ID,
    });
    var CHMOD = chevrotain.createToken({
        name: 'CHMOD',
        pattern: /CHMOD/i,
        longer_alt: ID,
    });
    var TOUCH = chevrotain.createToken({
        name: 'TOUCH',
        pattern: /TOUCH/i,
        longer_alt: ID,
    });
    var DOUBLE_HYPHEN = chevrotain.createToken({
        name: 'DOUBLE_HYPHEN',
        pattern: /\-\-/i,
        longer_alt: ID,
    });
    var EQUAL_SYMBOL = chevrotain.createToken({
        name: 'EQUAL_SYMBOL',
        pattern: /\=/i,
        longer_alt: ID,
    });
    var TIME_OPT = chevrotain.createToken({
        name: 'TIME_OPT',
        pattern: /\-p/i,
        longer_alt: ID,
    });
    var EXCLAMATION_SYMBOL = chevrotain.createToken({
        name: 'EXCLAMATION_SYMBOL',
        pattern: /\!/i,
        longer_alt: ID,
    });
    var DOUBLE_SEMI = chevrotain.createToken({
        name: 'DOUBLE_SEMI',
        pattern: /\;\;/i,
        longer_alt: ID,
    });
    var SEMI = chevrotain.createToken({
        name: 'SEMI',
        pattern: /\;/i,
        longer_alt: ID,
    });
    var LEFT_SQUARE_BRACKET = chevrotain.createToken({
        name: 'LEFT_SQUARE_BRACKET',
        pattern: /\[/i,
        longer_alt: ID,
    });
    var RIGHT_SQUARE_BRACKET = chevrotain.createToken({
        name: 'RIGHT_SQUARE_BRACKET',
        pattern: /\]/i,
        longer_alt: ID,
    });
    var RIGHT_BRACKET = chevrotain.createToken({
        name: 'RIGHT_BRACKET',
        pattern: /\)/i,
        longer_alt: ID,
    });
    var RIGHT_BRACE = chevrotain.createToken({
        name: 'RIGHT_BRACE',
        pattern: /\}/i,
        longer_alt: ID,
    });
    var LEFT_BRACKET = chevrotain.createToken({
        name: 'LEFT_BRACKET',
        pattern: /\(/i,
        longer_alt: ID,
    });
    var LEFT_BRACE = chevrotain.createToken({
        name: 'LEFT_BRACE',
        pattern: /\{/i,
        longer_alt: ID,
    });
    var OR = chevrotain.createToken({
        name: 'OR',
        pattern: /\|\|/i,
        longer_alt: ID,
    });
    var AND = chevrotain.createToken({
        name: 'AND',
        pattern: /\&\&/i,
        longer_alt: ID,
    });
    var BIT_AND_OP = chevrotain.createToken({
        name: 'BIT_AND_OP',
        pattern: /\&/i,
        longer_alt: ID,
    });
    var BIT_OR_OP = chevrotain.createToken({
        name: 'BIT_OR_OP',
        pattern: /\|/i,
        longer_alt: ID,
    });
    var HYPHEN = chevrotain.createToken({
        name: 'HYPHEN',
        pattern: /\-/i,
        longer_alt: ID,
    });
    var DESCRIPTOR_TO_FILE = chevrotain.createToken({
        name: 'DESCRIPTOR_TO_FILE',
        pattern: /\&\>/i,
        longer_alt: ID,
    });
    var RIGHT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION_WITH_MERGE',
        pattern: /\>\&/i,
        longer_alt: ID,
    });
    var LEFT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
        name: 'LEFT_REDIRECTION_WITH_MERGE',
        pattern: /\<\&/i,
        longer_alt: ID,
    });
    var RIGHT_REDIRECTION_WITH_ADD = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION_WITH_ADD',
        pattern: /\>\>/i,
        longer_alt: ID,
    });
    var LEFT_REDIRECTION_WITH_ADD = chevrotain.createToken({
        name: 'LEFT_REDIRECTION_WITH_ADD',
        pattern: /\<\</i,
        longer_alt: ID,
    });
    var RIGHT_REDIRECTION = chevrotain.createToken({
        name: 'RIGHT_REDIRECTION',
        pattern: /\>/i,
        longer_alt: ID,
    });
    var LEFT_REDIRECTION = chevrotain.createToken({
        name: 'LEFT_REDIRECTION',
        pattern: /\</i,
        longer_alt: ID,
    });
    var TIME = chevrotain.createToken({
        name: 'TIME',
        pattern: /TIME/i,
        longer_alt: ID,
    });
    var ELSE_END = chevrotain.createToken({
        name: 'ELSE_END',
        pattern: /ELIF/i,
        longer_alt: ID,
    });
    var ELSE = chevrotain.createToken({
        name: 'ELSE',
        pattern: /ELSE/i,
        longer_alt: ID,
    });
    var THEN = chevrotain.createToken({
        name: 'THEN',
        pattern: /THEN/i,
        longer_alt: ID,
    });
    var IF_END = chevrotain.createToken({
        name: 'IF_END',
        pattern: /FI/i,
        longer_alt: ID,
    });
    var IF = chevrotain.createToken({
        name: 'IF',
        pattern: /IF/i,
        longer_alt: ID,
    });
    var FUNCTION = chevrotain.createToken({
        name: 'FUNCTION',
        pattern: /FUNCTION/i,
        longer_alt: ID,
    });
    var CASE_END = chevrotain.createToken({
        name: 'CASE_END',
        pattern: /ESAC/i,
        longer_alt: ID,
    });
    var CASE = chevrotain.createToken({
        name: 'CASE',
        pattern: /CASE/i,
        longer_alt: ID,
    });
    var SELECT = chevrotain.createToken({
        name: 'SELECT',
        pattern: /SELECT/i,
        longer_alt: ID,
    });
    var IN = chevrotain.createToken({
        name: 'IN',
        pattern: /IN/i,
        longer_alt: ID,
    });
    var FOR = chevrotain.createToken({
        name: 'FOR',
        pattern: /FOR/i,
        longer_alt: ID,
    });
    var OPTION_R = chevrotain.createToken({
        name: 'OPTION_R',
        pattern: /R/,
    });
    var DONE = chevrotain.createToken({
        name: 'DONE',
        pattern: /DONE/i,
        longer_alt: ID,
    });
    var DO = chevrotain.createToken({
        name: 'DO',
        pattern: /DO/i,
        longer_alt: ID,
    });
    var UNTIL = chevrotain.createToken({
        name: 'UNTIL',
        pattern: /UNTIL/i,
        longer_alt: ID,
    });
    var WHILE = chevrotain.createToken({
        name: 'WHILE',
        pattern: /WHILE/i,
        longer_alt: ID,
    });
    var TokenEnum;
    (function (TokenEnum) {
        TokenEnum["STRING_LITERAL"] = "STRING_LITERAL";
        TokenEnum["OPTION_X"] = "OPTION_X";
        TokenEnum["OPTION_X_LOWER"] = "OPTION_X_LOWER";
        TokenEnum["OPTION_W_LOWER"] = "OPTION_W_LOWER";
        TokenEnum["OPTION_V_LOWER"] = "OPTION_V_LOWER";
        TokenEnum["OPTION_U_LOWER"] = "OPTION_U_LOWER";
        TokenEnum["OPTION_T_LOWER"] = "OPTION_T_LOWER";
        TokenEnum["OPTION_R_LOWER"] = "OPTION_R_LOWER";
        TokenEnum["OPTION_O_LOWER"] = "OPTION_O_LOWER";
        TokenEnum["OPTION_M_LOWER"] = "OPTION_M_LOWER";
        TokenEnum["OPTION_G_LOWER"] = "OPTION_G_LOWER";
        TokenEnum["OPTION_F_LOWER"] = "OPTION_F_LOWER";
        TokenEnum["OPTION_D_LOWER"] = "OPTION_D_LOWER";
        TokenEnum["OPTION_C_LOWER"] = "OPTION_C_LOWER";
        TokenEnum["OPTION_A_LOWER"] = "OPTION_A_LOWER";
        TokenEnum["NO_CREATE"] = "NO_CREATE";
        TokenEnum["COMMENT"] = "COMMENT";
        TokenEnum["ECHO"] = "ECHO";
        TokenEnum["ADD"] = "ADD";
        TokenEnum["CHMOD"] = "CHMOD";
        TokenEnum["TOUCH"] = "TOUCH";
        TokenEnum["DOUBLE_HYPHEN"] = "DOUBLE_HYPHEN";
        TokenEnum["EQUAL_SYMBOL"] = "EQUAL_SYMBOL";
        TokenEnum["TIME_OPT"] = "TIME_OPT";
        TokenEnum["EXCLAMATION_SYMBOL"] = "EXCLAMATION_SYMBOL";
        TokenEnum["DOUBLE_SEMI"] = "DOUBLE_SEMI";
        TokenEnum["SEMI"] = "SEMI";
        TokenEnum["LEFT_SQUARE_BRACKET"] = "LEFT_SQUARE_BRACKET";
        TokenEnum["RIGHT_SQUARE_BRACKET"] = "RIGHT_SQUARE_BRACKET";
        TokenEnum["RIGHT_BRACKET"] = "RIGHT_BRACKET";
        TokenEnum["RIGHT_BRACE"] = "RIGHT_BRACE";
        TokenEnum["LEFT_BRACKET"] = "LEFT_BRACKET";
        TokenEnum["LEFT_BRACE"] = "LEFT_BRACE";
        TokenEnum["OR"] = "OR";
        TokenEnum["AND"] = "AND";
        TokenEnum["BIT_AND_OP"] = "BIT_AND_OP";
        TokenEnum["BIT_OR_OP"] = "BIT_OR_OP";
        TokenEnum["HYPHEN"] = "HYPHEN";
        TokenEnum["DESCRIPTOR_TO_FILE"] = "DESCRIPTOR_TO_FILE";
        TokenEnum["RIGHT_REDIRECTION_WITH_MERGE"] = "RIGHT_REDIRECTION_WITH_MERGE";
        TokenEnum["LEFT_REDIRECTION_WITH_MERGE"] = "LEFT_REDIRECTION_WITH_MERGE";
        TokenEnum["RIGHT_REDIRECTION_WITH_ADD"] = "RIGHT_REDIRECTION_WITH_ADD";
        TokenEnum["LEFT_REDIRECTION_WITH_ADD"] = "LEFT_REDIRECTION_WITH_ADD";
        TokenEnum["RIGHT_REDIRECTION"] = "RIGHT_REDIRECTION";
        TokenEnum["LEFT_REDIRECTION"] = "LEFT_REDIRECTION";
        TokenEnum["DIGIT_TO_SEVEN"] = "DIGIT_TO_SEVEN";
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
        TokenEnum["OPTION_R"] = "OPTION_R";
        TokenEnum["DONE"] = "DONE";
        TokenEnum["DO"] = "DO";
        TokenEnum["UNTIL"] = "UNTIL";
        TokenEnum["WHILE"] = "WHILE";
        TokenEnum["ID"] = "ID";
    })(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
    exports.Tokens = {
        STRING_LITERAL: STRING_LITERAL,
        OPTION_X: OPTION_X,
        OPTION_X_LOWER: OPTION_X_LOWER,
        OPTION_W_LOWER: OPTION_W_LOWER,
        OPTION_V_LOWER: OPTION_V_LOWER,
        OPTION_U_LOWER: OPTION_U_LOWER,
        OPTION_T_LOWER: OPTION_T_LOWER,
        OPTION_R_LOWER: OPTION_R_LOWER,
        OPTION_O_LOWER: OPTION_O_LOWER,
        OPTION_M_LOWER: OPTION_M_LOWER,
        OPTION_G_LOWER: OPTION_G_LOWER,
        OPTION_F_LOWER: OPTION_F_LOWER,
        OPTION_D_LOWER: OPTION_D_LOWER,
        OPTION_C_LOWER: OPTION_C_LOWER,
        OPTION_A_LOWER: OPTION_A_LOWER,
        NO_CREATE: NO_CREATE,
        COMMENT: COMMENT,
        ECHO: ECHO,
        ADD: ADD,
        CHMOD: CHMOD,
        TOUCH: TOUCH,
        DOUBLE_HYPHEN: DOUBLE_HYPHEN,
        EQUAL_SYMBOL: EQUAL_SYMBOL,
        TIME_OPT: TIME_OPT,
        EXCLAMATION_SYMBOL: EXCLAMATION_SYMBOL,
        DOUBLE_SEMI: DOUBLE_SEMI,
        SEMI: SEMI,
        LEFT_SQUARE_BRACKET: LEFT_SQUARE_BRACKET,
        RIGHT_SQUARE_BRACKET: RIGHT_SQUARE_BRACKET,
        RIGHT_BRACKET: RIGHT_BRACKET,
        RIGHT_BRACE: RIGHT_BRACE,
        LEFT_BRACKET: LEFT_BRACKET,
        LEFT_BRACE: LEFT_BRACE,
        OR: OR,
        AND: AND,
        BIT_AND_OP: BIT_AND_OP,
        BIT_OR_OP: BIT_OR_OP,
        HYPHEN: HYPHEN,
        DESCRIPTOR_TO_FILE: DESCRIPTOR_TO_FILE,
        RIGHT_REDIRECTION_WITH_MERGE: RIGHT_REDIRECTION_WITH_MERGE,
        LEFT_REDIRECTION_WITH_MERGE: LEFT_REDIRECTION_WITH_MERGE,
        RIGHT_REDIRECTION_WITH_ADD: RIGHT_REDIRECTION_WITH_ADD,
        LEFT_REDIRECTION_WITH_ADD: LEFT_REDIRECTION_WITH_ADD,
        RIGHT_REDIRECTION: RIGHT_REDIRECTION,
        LEFT_REDIRECTION: LEFT_REDIRECTION,
        DIGIT_TO_SEVEN: DIGIT_TO_SEVEN,
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
        OPTION_R: OPTION_R,
        DONE: DONE,
        DO: DO,
        UNTIL: UNTIL,
        WHILE: WHILE,
        ID: ID,
    };
    exports.tokens = [
        WhiteSpace,
        STRING_LITERAL,
        OPTION_X,
        OPTION_X_LOWER,
        OPTION_W_LOWER,
        OPTION_V_LOWER,
        OPTION_U_LOWER,
        OPTION_T_LOWER,
        OPTION_R_LOWER,
        OPTION_O_LOWER,
        OPTION_M_LOWER,
        OPTION_G_LOWER,
        OPTION_F_LOWER,
        OPTION_D_LOWER,
        OPTION_C_LOWER,
        OPTION_A_LOWER,
        NO_CREATE,
        COMMENT,
        ECHO,
        ADD,
        CHMOD,
        TOUCH,
        DOUBLE_HYPHEN,
        EQUAL_SYMBOL,
        TIME_OPT,
        EXCLAMATION_SYMBOL,
        DOUBLE_SEMI,
        SEMI,
        LEFT_SQUARE_BRACKET,
        RIGHT_SQUARE_BRACKET,
        RIGHT_BRACKET,
        RIGHT_BRACE,
        LEFT_BRACKET,
        LEFT_BRACE,
        OR,
        AND,
        BIT_AND_OP,
        BIT_OR_OP,
        HYPHEN,
        DESCRIPTOR_TO_FILE,
        RIGHT_REDIRECTION_WITH_MERGE,
        LEFT_REDIRECTION_WITH_MERGE,
        RIGHT_REDIRECTION_WITH_ADD,
        LEFT_REDIRECTION_WITH_ADD,
        RIGHT_REDIRECTION,
        LEFT_REDIRECTION,
        DIGIT_TO_SEVEN,
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
        OPTION_R,
        DONE,
        DO,
        UNTIL,
        WHILE,
        ID,
    ];
    exports.Lexer = new chevrotain.Lexer(exports.tokens, {
        positionTracking: 'onlyStart',
    });
});
//# sourceMappingURL=lexer.g.js.map