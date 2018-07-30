"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chevrotain = require("chevrotain");
var Bar = chevrotain.createToken({
    name: 'Bar',
    pattern: /\|/
});
var Semi = chevrotain.createToken({
    name: 'Semi',
    pattern: /;/
});
var Colon = chevrotain.createToken({
    name: 'Colon',
    pattern: /:/
});
var Asterisk = chevrotain.createToken({
    name: 'Asterisk',
    pattern: /\*/
});
var Optional = chevrotain.createToken({
    name: 'Optional',
    pattern: /\?/
});
var LeftBracket = chevrotain.createToken({
    name: 'LeftBracket',
    pattern: /\(/
});
var RightBracket = chevrotain.createToken({
    name: 'RightBracket',
    pattern: /\)/
});
var Stringliteral = chevrotain.createToken({
    name: 'Stringliteral',
    pattern: /\'(\\.|[^'\\])*\'/
});
var UpperName = chevrotain.createToken({
    name: 'UpperName',
    pattern: /[A-Z][a-z0-9A-Z_]*/
});
var LowerName = chevrotain.createToken({
    name: 'LowerName',
    pattern: /[a-z][a-z0-9A-Z_]*/
});
var Equal = chevrotain.createToken({
    name: 'Equal',
    pattern: '='
});
var Comment = chevrotain.createToken({
    name: 'Comment',
    group: chevrotain.Lexer.SKIPPED,
    pattern: /#[^;\n]*/
});
var SlashComment = chevrotain.createToken({
    name: 'SlashComment',
    group: chevrotain.Lexer.SKIPPED,
    pattern: /\/\/.*/
});
var PlusEquals = chevrotain.createToken({
    name: 'PlusEquals',
    pattern: /\+=/
});
var Plus = chevrotain.createToken({
    name: 'Plus',
    pattern: '+'
});
var Fragment = chevrotain.createToken({
    name: 'Fragment',
    pattern: /fragment/
});
var ReExp = chevrotain.createToken({
    name: 'ReExp',
    pattern: /\[.+?\][\*\?\+]*/
});
var Not = chevrotain.createToken({
    name: 'Not',
    pattern: '~'
});
var All = chevrotain.createToken({
    name: 'All',
    pattern: '.'
});
var WhiteSpace = chevrotain.createToken({
    name: 'WhiteSpace',
    pattern: /\s+/,
    group: chevrotain.Lexer.SKIPPED,
    line_breaks: true
});
var TokenEnum;
(function (TokenEnum) {
    TokenEnum["Fragment"] = "Fragment";
    TokenEnum["Bar"] = "Bar";
    TokenEnum["Semi"] = "Semi";
    TokenEnum["All"] = "All";
    TokenEnum["Colon"] = "Colon";
    TokenEnum["PlusEquals"] = "PlusEquals";
    TokenEnum["Equal"] = "Equal";
    TokenEnum["Asterisk"] = "Asterisk";
    TokenEnum["Optional"] = "Optional";
    TokenEnum["LeftBracket"] = "LeftBracket";
    TokenEnum["RightBracket"] = "RightBracket";
    TokenEnum["Stringliteral"] = "Stringliteral";
    TokenEnum["Not"] = "Not";
    TokenEnum["UpperName"] = "UpperName";
    TokenEnum["LowerName"] = "LowerName";
    TokenEnum["WhiteSpace"] = "WhiteSpace";
    TokenEnum["SlashComment"] = "SlashComment";
    TokenEnum["Comment"] = "Comment";
    TokenEnum["Plus"] = "Plus";
    TokenEnum["ReExp"] = "ReExp";
})(TokenEnum = exports.TokenEnum || (exports.TokenEnum = {}));
exports.Tokens = {
    Fragment: Fragment,
    Bar: Bar,
    Semi: Semi,
    Colon: Colon,
    PlusEquals: PlusEquals,
    Equal: Equal,
    Asterisk: Asterisk,
    Optional: Optional,
    Not: Not,
    LeftBracket: LeftBracket,
    RightBracket: RightBracket,
    Stringliteral: Stringliteral,
    UpperName: UpperName,
    LowerName: LowerName,
    WhiteSpace: WhiteSpace,
    SlashComment: SlashComment,
    All: All,
    Comment: Comment,
    ReExp: ReExp,
    Plus: Plus
};
exports.tokens = [
    WhiteSpace,
    Fragment,
    Bar,
    Not,
    Semi,
    Colon,
    PlusEquals,
    Asterisk,
    Optional,
    LeftBracket,
    All,
    RightBracket,
    Stringliteral,
    Equal,
    UpperName,
    LowerName,
    SlashComment,
    Plus,
    ReExp,
    Comment
];
Equal.LABEL = '=';
Bar.LABEL = '|';
Semi.LABEL = ';';
Colon.LABEL = ':';
Asterisk.LABEL = '*';
Optional.LABEL = '?';
LeftBracket.LABEL = '(';
RightBracket.LABEL = ')';
exports.Lexer = new chevrotain.Lexer(exports.tokens, {
    positionTracking: 'onlyStart'
});
//# sourceMappingURL=MetaLexer.js.map