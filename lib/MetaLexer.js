"use strict";
exports.__esModule = true;
var chevrotain = require("chevrotain");
var Bar = chevrotain.createToken({
    name: "Bar",
    pattern: /\|/
});
var Semi = chevrotain.createToken({
    name: "Semi",
    pattern: /;/
});
var Colon = chevrotain.createToken({
    name: "Colon",
    pattern: /:/
});
var Asterisk = chevrotain.createToken({
    name: "Asterisk",
    pattern: /\*/
});
var Optional = chevrotain.createToken({
    name: "Optional",
    pattern: /\?/
});
var LeftBracket = chevrotain.createToken({
    name: "LeftBracket",
    pattern: /\(/
});
var RightBracket = chevrotain.createToken({
    name: "RightBracket",
    pattern: /\)/
});
var Stringliteral = chevrotain.createToken({
    name: "Stringliteral",
    pattern: /\'(.)*?\'/
});
var UpperName = chevrotain.createToken({
    name: "UpperName",
    pattern: /[A-Z][a-z0-9A-Z_]*/
});
var LowerName = chevrotain.createToken({
    name: "LowerName",
    pattern: /[a-z][a-z0-9A-Z_]*/
});
var Equal = chevrotain.createToken({
    name: "Equal",
    pattern: /=/
});
var Comment = chevrotain.createToken({
    name: "Comment",
    group: chevrotain.Lexer.SKIPPED,
    pattern: /#[^;]*/
});
var SlashComment = chevrotain.createToken({
    name: "SlashComment",
    group: chevrotain.Lexer.SKIPPED,
    pattern: /\/\/.*/
});
var Plus = chevrotain.createToken({
    name: "Plus",
    pattern: /\+/
});
var WhiteSpace = chevrotain.createToken({
    name: "WhiteSpace",
    pattern: /\s+/,
    group: chevrotain.Lexer.SKIPPED,
    line_breaks: true
});
exports.Tokens = {
    Bar: Bar,
    Semi: Semi,
    Colon: Colon,
    Equal: Equal,
    Asterisk: Asterisk,
    Optional: Optional,
    LeftBracket: LeftBracket,
    RightBracket: RightBracket,
    Stringliteral: Stringliteral,
    UpperName: UpperName,
    LowerName: LowerName,
    WhiteSpace: WhiteSpace,
    SlashComment: SlashComment,
    Comment: Comment,
    Plus: Plus
};
exports.tokens = [
    Bar,
    Semi,
    Colon,
    Asterisk,
    Optional,
    LeftBracket,
    RightBracket,
    Stringliteral,
    Equal,
    UpperName,
    LowerName,
    WhiteSpace,
    SlashComment,
    Plus,
    Comment
];
Equal.LABEL = "=";
Bar.LABEL = "|";
Semi.LABEL = ";";
Colon.LABEL = ":";
Asterisk.LABEL = "*";
Optional.LABEL = "?";
LeftBracket.LABEL = "(";
RightBracket.LABEL = ")";
exports.Lexer = new chevrotain.Lexer(exports.tokens, {
    positionTracking: "onlyStart"
});
//# sourceMappingURL=MetaLexer.js.map