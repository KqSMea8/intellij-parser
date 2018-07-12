import * as chevrotain from 'chevrotain';

const Bar = chevrotain.createToken({
  name: 'Bar',
  pattern: /\|/
});
const Semi = chevrotain.createToken({
  name: 'Semi',
  pattern: /;/
});
const Colon = chevrotain.createToken({
  name: 'Colon',
  pattern: /:/
});
const Asterisk = chevrotain.createToken({
  name: 'Asterisk',
  pattern: /\*/
});
const Optional = chevrotain.createToken({
  name: 'Optional',
  pattern: /\?/
});
const LeftBracket = chevrotain.createToken({
  name: 'LeftBracket',
  pattern: /\(/
});
const RightBracket = chevrotain.createToken({
  name: 'RightBracket',
  pattern: /\)/
});
const Stringliteral = chevrotain.createToken({
  name: 'Stringliteral',
  pattern: /\'(\\.|[^'\\])*\'/
});
const UpperName = chevrotain.createToken({
  name: 'UpperName',
  pattern: /[A-Z][a-z0-9A-Z_]*/
});
const LowerName = chevrotain.createToken({
  name: 'LowerName',
  pattern: /[a-z][a-z0-9A-Z_]*/
});
const Equal = chevrotain.createToken({
  name: 'Equal',
  pattern: '='
});
const Comment = chevrotain.createToken({
  name: 'Comment',
  group: chevrotain.Lexer.SKIPPED,
  pattern: /#[^;\n]*/
});
const SlashComment = chevrotain.createToken({
  name: 'SlashComment',
  group: chevrotain.Lexer.SKIPPED,
  pattern: /\/\/.*/
});
const PlusEquals = chevrotain.createToken({
  name: 'PlusEquals',
  pattern: /\+=/
});
const Plus = chevrotain.createToken({
  name: 'Plus',
  pattern: '+'
});
const Fragment = chevrotain.createToken({
  name: 'Fragment',
  pattern: /fragment/
});
const ReExp = chevrotain.createToken({
  name: 'ReExp',
  pattern: /\[.+?\][\*\?\+]*/
});
const Not = chevrotain.createToken({
  name: 'Not',
  pattern: '~'
});
const All = chevrotain.createToken({
  name: 'All',
  pattern: '.'
});

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true
});

export enum TokenEnum {
  Fragment = 'Fragment',
  Bar = 'Bar',
  Semi = 'Semi',
  All = 'All',
  Colon = 'Colon',
  PlusEquals = 'PlusEquals',
  Equal = 'Equal',
  Asterisk = 'Asterisk',
  Optional = 'Optional',
  LeftBracket = 'LeftBracket',
  RightBracket = 'RightBracket',
  Stringliteral = 'Stringliteral',
  Not = 'Not',
  UpperName = 'UpperName',
  LowerName = 'LowerName',
  WhiteSpace = 'WhiteSpace',
  SlashComment = 'SlashComment',
  Comment = 'Comment',
  Plus = 'Plus',
  ReExp = 'ReExp'
}

export const Tokens = {
  Fragment,
  Bar,
  Semi,
  Colon,
  PlusEquals,
  Equal,
  Asterisk,
  Optional,
  Not,
  LeftBracket,
  RightBracket,
  Stringliteral,
  UpperName,
  LowerName,
  WhiteSpace,
  SlashComment,
  All,
  Comment,
  ReExp,
  Plus
};

export const tokens = [
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

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart'
});
