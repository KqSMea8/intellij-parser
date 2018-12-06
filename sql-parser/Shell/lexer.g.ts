import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const EQUAL_SYMBOL = chevrotain.createToken({
  name: 'EQUAL_SYMBOL',
  pattern: /\=/,
});
const TIME_OPT = chevrotain.createToken({
  name: 'TIME_OPT',
  pattern: /\-p/,
});
const EXCLAMATION_SYMBOL = chevrotain.createToken({
  name: 'EXCLAMATION_SYMBOL',
  pattern: /\!/,
});
const DOUBLE_SEMI = chevrotain.createToken({
  name: 'DOUBLE_SEMI',
  pattern: /\;\;/,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /\;/,
});
const LINE_FEED = chevrotain.createToken({
  name: 'LINE_FEED',
  pattern: /\n/,
});
const RIGHT_BRACKET = chevrotain.createToken({
  name: 'RIGHT_BRACKET',
  pattern: /\)/,
});
const RIGHT_BRACE = chevrotain.createToken({
  name: 'RIGHT_BRACE',
  pattern: /\}/,
});
const LEFT_BRACKET = chevrotain.createToken({
  name: 'LEFT_BRACKET',
  pattern: /\(/,
});
const LEFT_BRACE = chevrotain.createToken({
  name: 'LEFT_BRACE',
  pattern: /\{/,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /\|\|/,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /\&\&/,
});
const BIT_AND_OP = chevrotain.createToken({
  name: 'BIT_AND_OP',
  pattern: /\&/,
});
const BIT_OR_OP = chevrotain.createToken({
  name: 'BIT_OR_OP',
  pattern: /\|/,
});
const UNDERLINE = chevrotain.createToken({
  name: 'UNDERLINE',
  pattern: /_/,
});
const HYPHEN = chevrotain.createToken({
  name: 'HYPHEN',
  pattern: /\-/,
});
const DESCRIPTOR_TO_FILE = chevrotain.createToken({
  name: 'DESCRIPTOR_TO_FILE',
  pattern: /\&\>/,
});
const RIGHT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION_WITH_MERGE',
  pattern: /\>\&/,
});
const LEFT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
  name: 'LEFT_REDIRECTION_WITH_MERGE',
  pattern: /\<\&/,
});
const RIGHT_REDIRECTION_WITH_ADD = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION_WITH_ADD',
  pattern: /\>\>/,
});
const LEFT_REDIRECTION_WITH_ADD = chevrotain.createToken({
  name: 'LEFT_REDIRECTION_WITH_ADD',
  pattern: /\<\</,
});
const RIGHT_REDIRECTION = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION',
  pattern: /\>/,
});
const LEFT_REDIRECTION = chevrotain.createToken({
  name: 'LEFT_REDIRECTION',
  pattern: /\</,
});
const DIGIT = chevrotain.createToken({
  name: 'DIGIT',
  pattern: /[0-9]+/,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/,
});
const ELSE_END = chevrotain.createToken({
  name: 'ELSE_END',
  pattern: /ELIF/,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/,
});
const IF_END = chevrotain.createToken({
  name: 'IF_END',
  pattern: /FI/,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/,
});
const CASE_END = chevrotain.createToken({
  name: 'CASE_END',
  pattern: /ESAC/,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/,
});
const DONE = chevrotain.createToken({
  name: 'DONE',
  pattern: /DONE/,
});
const DO = chevrotain.createToken({
  name: 'DO',
  pattern: /DO/,
});
const UNTIL = chevrotain.createToken({
  name: 'UNTIL',
  pattern: /UNTIL/,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/,
});
const LETTER = chevrotain.createToken({
  name: 'LETTER',
  pattern: /[A-Za-z]+/,
});

export enum TokenEnum {
  EQUAL_SYMBOL = 'EQUAL_SYMBOL',
  TIME_OPT = 'TIME_OPT',
  EXCLAMATION_SYMBOL = 'EXCLAMATION_SYMBOL',
  DOUBLE_SEMI = 'DOUBLE_SEMI',
  SEMI = 'SEMI',
  LINE_FEED = 'LINE_FEED',
  RIGHT_BRACKET = 'RIGHT_BRACKET',
  RIGHT_BRACE = 'RIGHT_BRACE',
  LEFT_BRACKET = 'LEFT_BRACKET',
  LEFT_BRACE = 'LEFT_BRACE',
  OR = 'OR',
  AND = 'AND',
  BIT_AND_OP = 'BIT_AND_OP',
  BIT_OR_OP = 'BIT_OR_OP',
  UNDERLINE = 'UNDERLINE',
  HYPHEN = 'HYPHEN',
  DESCRIPTOR_TO_FILE = 'DESCRIPTOR_TO_FILE',
  RIGHT_REDIRECTION_WITH_MERGE = 'RIGHT_REDIRECTION_WITH_MERGE',
  LEFT_REDIRECTION_WITH_MERGE = 'LEFT_REDIRECTION_WITH_MERGE',
  RIGHT_REDIRECTION_WITH_ADD = 'RIGHT_REDIRECTION_WITH_ADD',
  LEFT_REDIRECTION_WITH_ADD = 'LEFT_REDIRECTION_WITH_ADD',
  RIGHT_REDIRECTION = 'RIGHT_REDIRECTION',
  LEFT_REDIRECTION = 'LEFT_REDIRECTION',
  DIGIT = 'DIGIT',
  TIME = 'TIME',
  ELSE_END = 'ELSE_END',
  ELSE = 'ELSE',
  THEN = 'THEN',
  IF_END = 'IF_END',
  IF = 'IF',
  FUNCTION = 'FUNCTION',
  CASE_END = 'CASE_END',
  CASE = 'CASE',
  SELECT = 'SELECT',
  IN = 'IN',
  FOR = 'FOR',
  DONE = 'DONE',
  DO = 'DO',
  UNTIL = 'UNTIL',
  WHILE = 'WHILE',
  LETTER = 'LETTER',
}

export const Tokens = {
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
};

export const tokens = [
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

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
