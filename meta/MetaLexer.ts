import * as chevrotain from "chevrotain";

const Bar = chevrotain.createToken({
  name: "Bar",
  pattern: /\|/
});
const Semi = chevrotain.createToken({
  name: "Semi",
  pattern: /;/
});
const Colon = chevrotain.createToken({
  name: "Colon",
  pattern: /:/
});
const Asterisk = chevrotain.createToken({
  name: "Asterisk",
  pattern: /\*/
});
const Optional = chevrotain.createToken({
  name: "Optional",
  pattern: /\?/
});
const LeftBracket = chevrotain.createToken({
  name: "LeftBracket",
  pattern: /\(/
});
const RightBracket = chevrotain.createToken({
  name: "RightBracket",
  pattern: /\)/
});
const Stringliteral = chevrotain.createToken({
  name: "Stringliteral",
  pattern: /\'(.)*?\'/
});
const UpperName = chevrotain.createToken({
  name: "UpperName",
  pattern: /[A-Z][a-z0-9A-Z_]*/
});
const LowerName = chevrotain.createToken({
  name: "LowerName",
  pattern: /[a-z][a-z0-9A-Z_]*/
});
const Equal = chevrotain.createToken({
  name: "Equal",
  pattern: /=/
});
const Comment = chevrotain.createToken({
  name: "Comment",
  group: chevrotain.Lexer.SKIPPED,
  pattern: /#[^;]*/
});
const SlashComment = chevrotain.createToken({
  name: "SlashComment",
  group: chevrotain.Lexer.SKIPPED,
  pattern: /\/\/.*/
});
const Plus = chevrotain.createToken({
  name: "Plus",
  pattern: /\+/
});

const WhiteSpace = chevrotain.createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true
});

export const Tokens = {
  Bar,
  Semi,
  Colon,
  Equal,
  Asterisk,
  Optional,
  LeftBracket,
  RightBracket,
  Stringliteral,
  UpperName,
  LowerName,
  WhiteSpace,
  SlashComment,
  Comment,
  Plus
};

export const tokens = [
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

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: "onlyStart"
});
