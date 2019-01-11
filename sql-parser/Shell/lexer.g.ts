import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const ID = chevrotain.createToken({
  name: 'ID',
  pattern: /\$?[A-Za-z_\-\.\/0-9]+/i,
});
const STRING_LITERAL = chevrotain.createToken({
  name: 'STRING_LITERAL',
  pattern: /("(\.|""|[^("|\)])*"|'(\.|''|[^('|\)])*')/i,
  categories: [ID],
});
const DIGIT = chevrotain.createToken({
  name: 'DIGIT',
  pattern: /[0-9]+/i,
  categories: [ID],
});
const DIGIT_TO_SEVEN = chevrotain.createToken({
  name: 'DIGIT_TO_SEVEN',
  pattern: /[0-7][0-7][0-7]/i,
  longer_alt: DIGIT,
  categories: [ID],
});

const CLI_CHMOD_MOD = chevrotain.createToken({
  name: 'CLI_CHMOD_MOD',
  pattern: /[ugoa]*[+\-=][rwxX]+/,
  longer_alt: ID,
});
const NO_CREATE = chevrotain.createToken({
  name: 'NO_CREATE',
  pattern: /\-\-no\-create/i,
  longer_alt: ID,
});
const PIP = chevrotain.createToken({
  name: 'PIP',
  pattern: /PIP/i,
  longer_alt: ID,
});
const PYTHON = chevrotain.createToken({
  name: 'PYTHON',
  pattern: /PYTHON/i,
  longer_alt: ID,
});
const DOLLAR_WITH_LEFT_BRACKET = chevrotain.createToken({
  name: 'DOLLAR_WITH_LEFT_BRACKET',
  pattern: /\$\(/i,
  longer_alt: ID,
});
const COMMENT = chevrotain.createToken({
  name: 'COMMENT',
  pattern: /\#+(.)*/i,
  longer_alt: ID,
});
const ECHO = chevrotain.createToken({
  name: 'ECHO',
  pattern: /ECHO/i,
  longer_alt: ID,
});
const DEVIDE = chevrotain.createToken({
  name: 'DEVIDE',
  pattern: /\//i,
  longer_alt: ID,
});
const MULTI = chevrotain.createToken({
  name: 'MULTI',
  pattern: /\*/i,
  longer_alt: ID,
});
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /\+/i,
  longer_alt: ID,
});
const SLEEP = chevrotain.createToken({
  name: 'SLEEP',
  pattern: /SLEEP/i,
  longer_alt: ID,
});
const EXIT = chevrotain.createToken({
  name: 'EXIT',
  pattern: /EXIT/i,
  longer_alt: ID,
});
const CAT = chevrotain.createToken({
  name: 'CAT',
  pattern: /CAT/i,
  longer_alt: ID,
});
const CHOWN = chevrotain.createToken({
  name: 'CHOWN',
  pattern: /CHOWN/i,
  longer_alt: ID,
});
const CHMOD = chevrotain.createToken({
  name: 'CHMOD',
  pattern: /CHMOD/i,
  longer_alt: ID,
});
const TOUCH = chevrotain.createToken({
  name: 'TOUCH',
  pattern: /TOUCH/i,
  longer_alt: ID,
});
const COLON = chevrotain.createToken({
  name: 'COLON',
  pattern: /\:/i,
  longer_alt: ID,
});
const COMMA = chevrotain.createToken({
  name: 'COMMA',
  pattern: /\,/i,
  longer_alt: ID,
});
const NOT_GREATER_SYMBOL = chevrotain.createToken({
  name: 'NOT_GREATER_SYMBOL',
  pattern: /\-?le/i,
  longer_alt: ID,
});
const NOT_GREATER = chevrotain.createToken({
  name: 'NOT_GREATER',
  pattern: /\<\=/i,
  longer_alt: ID,
});
const NOT_SMALLER_SYMBOL = chevrotain.createToken({
  name: 'NOT_SMALLER_SYMBOL',
  pattern: /\-?ge/i,
  longer_alt: ID,
});
const NOT_SMALLER = chevrotain.createToken({
  name: 'NOT_SMALLER',
  pattern: /\>\=/i,
  longer_alt: ID,
});
const SMALLER_SYMBOL = chevrotain.createToken({
  name: 'SMALLER_SYMBOL',
  pattern: /\-?lt/i,
  longer_alt: ID,
});
const GREATER_SYMBOL = chevrotain.createToken({
  name: 'GREATER_SYMBOL',
  pattern: /\-?gt/i,
  longer_alt: ID,
});
const NOT_EQUAL_TO_SYMBOL = chevrotain.createToken({
  name: 'NOT_EQUAL_TO_SYMBOL',
  pattern: /\-?ne/i,
  longer_alt: ID,
});
const NOT_EQUAL_TO = chevrotain.createToken({
  name: 'NOT_EQUAL_TO',
  pattern: /\!\=/i,
  longer_alt: ID,
});
const EQUAL_TO_SYMBOL = chevrotain.createToken({
  name: 'EQUAL_TO_SYMBOL',
  pattern: /\-?eq/i,
  longer_alt: ID,
});
const EQUAL_TO = chevrotain.createToken({
  name: 'EQUAL_TO',
  pattern: /\=\=/i,
  longer_alt: ID,
});
const EQUAL_SYMBOL = chevrotain.createToken({
  name: 'EQUAL_SYMBOL',
  pattern: /\=/i,
  longer_alt: ID,
});
const TIME_OPT = chevrotain.createToken({
  name: 'TIME_OPT',
  pattern: /\-p/i,
  longer_alt: ID,
});
const EXCLAMATION_SYMBOL = chevrotain.createToken({
  name: 'EXCLAMATION_SYMBOL',
  pattern: /\!/i,
  longer_alt: ID,
});
const DOUBLE_SEMI = chevrotain.createToken({
  name: 'DOUBLE_SEMI',
  pattern: /\;\;/i,
  longer_alt: ID,
});
const SEMI = chevrotain.createToken({
  name: 'SEMI',
  pattern: /\;/i,
  longer_alt: ID,
});
const DOUBLE_LEFT_SQUARE_BRACKET = chevrotain.createToken({
  name: 'DOUBLE_LEFT_SQUARE_BRACKET',
  pattern: /\[\[/i,
  longer_alt: ID,
});
const DOUBLE_RIGHT_SQUARE_BRACKET = chevrotain.createToken({
  name: 'DOUBLE_RIGHT_SQUARE_BRACKET',
  pattern: /\]\]/i,
  longer_alt: ID,
});
const LEFT_SQUARE_BRACKET = chevrotain.createToken({
  name: 'LEFT_SQUARE_BRACKET',
  pattern: /\[/i,
  longer_alt: ID,
});
const RIGHT_SQUARE_BRACKET = chevrotain.createToken({
  name: 'RIGHT_SQUARE_BRACKET',
  pattern: /\]/i,
  longer_alt: ID,
});
const RIGHT_BRACKET = chevrotain.createToken({
  name: 'RIGHT_BRACKET',
  pattern: /\)/i,
  longer_alt: ID,
});
const RIGHT_BRACE = chevrotain.createToken({
  name: 'RIGHT_BRACE',
  pattern: /\}/i,
  longer_alt: ID,
});
const LEFT_BRACKET = chevrotain.createToken({
  name: 'LEFT_BRACKET',
  pattern: /\(/i,
  longer_alt: ID,
});
const LEFT_BRACE = chevrotain.createToken({
  name: 'LEFT_BRACE',
  pattern: /\{/i,
  longer_alt: ID,
});
const OR = chevrotain.createToken({
  name: 'OR',
  pattern: /\|\|/i,
  longer_alt: ID,
});
const AND = chevrotain.createToken({
  name: 'AND',
  pattern: /\&\&/i,
  longer_alt: ID,
});
const BIT_AND_OP = chevrotain.createToken({
  name: 'BIT_AND_OP',
  pattern: /\&/i,
  longer_alt: ID,
});
const BIT_OR_OP = chevrotain.createToken({
  name: 'BIT_OR_OP',
  pattern: /\|/i,
  longer_alt: ID,
});
const HYPHEN = chevrotain.createToken({
  name: 'HYPHEN',
  pattern: /\-/i,
  longer_alt: ID,
});
const DESCRIPTOR_TO_FILE = chevrotain.createToken({
  name: 'DESCRIPTOR_TO_FILE',
  pattern: /\&\>/i,
  longer_alt: ID,
});
const RIGHT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION_WITH_MERGE',
  pattern: /\>\&/i,
  longer_alt: ID,
});
const LEFT_REDIRECTION_WITH_MERGE = chevrotain.createToken({
  name: 'LEFT_REDIRECTION_WITH_MERGE',
  pattern: /\<\&/i,
  longer_alt: ID,
});
const RIGHT_REDIRECTION_WITH_ADD = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION_WITH_ADD',
  pattern: /\>\>/i,
  longer_alt: ID,
});
const LEFT_REDIRECTION_WITH_ADD = chevrotain.createToken({
  name: 'LEFT_REDIRECTION_WITH_ADD',
  pattern: /\<\</i,
  longer_alt: ID,
});
const RIGHT_REDIRECTION = chevrotain.createToken({
  name: 'RIGHT_REDIRECTION',
  pattern: /\>/i,
  longer_alt: ID,
});
const LEFT_REDIRECTION = chevrotain.createToken({
  name: 'LEFT_REDIRECTION',
  pattern: /\</i,
  longer_alt: ID,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/i,
  longer_alt: ID,
});
const ELSE_IF = chevrotain.createToken({
  name: 'ELSE_IF',
  pattern: /ELIF/i,
  longer_alt: ID,
});
const ELSE = chevrotain.createToken({
  name: 'ELSE',
  pattern: /ELSE/i,
  longer_alt: ID,
});
const THEN = chevrotain.createToken({
  name: 'THEN',
  pattern: /THEN/i,
  longer_alt: ID,
});
const IF_END = chevrotain.createToken({
  name: 'IF_END',
  pattern: /FI/i,
  longer_alt: ID,
});
const IF = chevrotain.createToken({
  name: 'IF',
  pattern: /IF/i,
  longer_alt: ID,
});
const FUNCTION = chevrotain.createToken({
  name: 'FUNCTION',
  pattern: /FUNCTION/i,
  longer_alt: ID,
});
const CASE_END = chevrotain.createToken({
  name: 'CASE_END',
  pattern: /ESAC/i,
  longer_alt: ID,
});
const CASE = chevrotain.createToken({
  name: 'CASE',
  pattern: /CASE/i,
  longer_alt: ID,
});
const SELECT = chevrotain.createToken({
  name: 'SELECT',
  pattern: /SELECT/i,
  longer_alt: ID,
});
const IN = chevrotain.createToken({
  name: 'IN',
  pattern: /IN/i,
  longer_alt: ID,
});
const FOR = chevrotain.createToken({
  name: 'FOR',
  pattern: /FOR/i,
  longer_alt: ID,
});
const DONE = chevrotain.createToken({
  name: 'DONE',
  pattern: /DONE/i,
  longer_alt: ID,
});
const DO = chevrotain.createToken({
  name: 'DO',
  pattern: /DO/i,
  longer_alt: ID,
});
const UNTIL = chevrotain.createToken({
  name: 'UNTIL',
  pattern: /UNTIL/i,
  longer_alt: ID,
});
const WHILE = chevrotain.createToken({
  name: 'WHILE',
  pattern: /WHILE/i,
  longer_alt: ID,
});

export enum TokenEnum {
  STRING_LITERAL = 'STRING_LITERAL',
  CLI_CHMOD_MOD = 'CLI_CHMOD_MOD',
  NO_CREATE = 'NO_CREATE',
  DIGIT_TO_SEVEN = 'DIGIT_TO_SEVEN',
  DIGIT = 'DIGIT',
  PIP = 'PIP',
  PYTHON = 'PYTHON',
  DOLLAR_WITH_LEFT_BRACKET = 'DOLLAR_WITH_LEFT_BRACKET',
  COMMENT = 'COMMENT',
  ECHO = 'ECHO',
  DEVIDE = 'DEVIDE',
  MULTI = 'MULTI',
  ADD = 'ADD',
  SLEEP = 'SLEEP',
  EXIT = 'EXIT',
  CAT = 'CAT',
  CHOWN = 'CHOWN',
  CHMOD = 'CHMOD',
  TOUCH = 'TOUCH',
  COLON = 'COLON',
  COMMA = 'COMMA',
  NOT_GREATER_SYMBOL = 'NOT_GREATER_SYMBOL',
  NOT_GREATER = 'NOT_GREATER',
  NOT_SMALLER_SYMBOL = 'NOT_SMALLER_SYMBOL',
  NOT_SMALLER = 'NOT_SMALLER',
  SMALLER_SYMBOL = 'SMALLER_SYMBOL',
  GREATER_SYMBOL = 'GREATER_SYMBOL',
  NOT_EQUAL_TO_SYMBOL = 'NOT_EQUAL_TO_SYMBOL',
  NOT_EQUAL_TO = 'NOT_EQUAL_TO',
  EQUAL_TO_SYMBOL = 'EQUAL_TO_SYMBOL',
  EQUAL_TO = 'EQUAL_TO',
  EQUAL_SYMBOL = 'EQUAL_SYMBOL',
  TIME_OPT = 'TIME_OPT',
  EXCLAMATION_SYMBOL = 'EXCLAMATION_SYMBOL',
  DOUBLE_SEMI = 'DOUBLE_SEMI',
  SEMI = 'SEMI',
  DOUBLE_LEFT_SQUARE_BRACKET = 'DOUBLE_LEFT_SQUARE_BRACKET',
  DOUBLE_RIGHT_SQUARE_BRACKET = 'DOUBLE_RIGHT_SQUARE_BRACKET',
  LEFT_SQUARE_BRACKET = 'LEFT_SQUARE_BRACKET',
  RIGHT_SQUARE_BRACKET = 'RIGHT_SQUARE_BRACKET',
  RIGHT_BRACKET = 'RIGHT_BRACKET',
  RIGHT_BRACE = 'RIGHT_BRACE',
  LEFT_BRACKET = 'LEFT_BRACKET',
  LEFT_BRACE = 'LEFT_BRACE',
  OR = 'OR',
  AND = 'AND',
  BIT_AND_OP = 'BIT_AND_OP',
  BIT_OR_OP = 'BIT_OR_OP',
  HYPHEN = 'HYPHEN',
  DESCRIPTOR_TO_FILE = 'DESCRIPTOR_TO_FILE',
  RIGHT_REDIRECTION_WITH_MERGE = 'RIGHT_REDIRECTION_WITH_MERGE',
  LEFT_REDIRECTION_WITH_MERGE = 'LEFT_REDIRECTION_WITH_MERGE',
  RIGHT_REDIRECTION_WITH_ADD = 'RIGHT_REDIRECTION_WITH_ADD',
  LEFT_REDIRECTION_WITH_ADD = 'LEFT_REDIRECTION_WITH_ADD',
  RIGHT_REDIRECTION = 'RIGHT_REDIRECTION',
  LEFT_REDIRECTION = 'LEFT_REDIRECTION',
  TIME = 'TIME',
  ELSE_IF = 'ELSE_IF',
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
  ID = 'ID',
}

export const Tokens = {
  STRING_LITERAL,
  CLI_CHMOD_MOD,
  NO_CREATE,
  DIGIT_TO_SEVEN,
  DIGIT,
  PIP,
  PYTHON,
  DOLLAR_WITH_LEFT_BRACKET,
  COMMENT,
  ECHO,
  DEVIDE,
  MULTI,
  ADD,
  SLEEP,
  EXIT,
  CAT,
  CHOWN,
  CHMOD,
  TOUCH,
  COLON,
  COMMA,
  NOT_GREATER_SYMBOL,
  NOT_GREATER,
  NOT_SMALLER_SYMBOL,
  NOT_SMALLER,
  SMALLER_SYMBOL,
  GREATER_SYMBOL,
  NOT_EQUAL_TO_SYMBOL,
  NOT_EQUAL_TO,
  EQUAL_TO_SYMBOL,
  EQUAL_TO,
  EQUAL_SYMBOL,
  TIME_OPT,
  EXCLAMATION_SYMBOL,
  DOUBLE_SEMI,
  SEMI,
  DOUBLE_LEFT_SQUARE_BRACKET,
  DOUBLE_RIGHT_SQUARE_BRACKET,
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
  TIME,
  ELSE_IF,
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
  ID,
};

export const tokens = [
  WhiteSpace,
  STRING_LITERAL,
  CLI_CHMOD_MOD,
  NO_CREATE,
  DIGIT_TO_SEVEN,
  DIGIT,
  PIP,
  PYTHON,
  DOLLAR_WITH_LEFT_BRACKET,
  COMMENT,
  ECHO,
  DEVIDE,
  MULTI,
  ADD,
  SLEEP,
  EXIT,
  CAT,
  CHOWN,
  CHMOD,
  TOUCH,
  COLON,
  COMMA,
  NOT_GREATER_SYMBOL,
  NOT_GREATER,
  NOT_SMALLER_SYMBOL,
  NOT_SMALLER,
  SMALLER_SYMBOL,
  GREATER_SYMBOL,
  NOT_EQUAL_TO_SYMBOL,
  NOT_EQUAL_TO,
  EQUAL_TO_SYMBOL,
  EQUAL_TO,
  EQUAL_SYMBOL,
  TIME_OPT,
  EXCLAMATION_SYMBOL,
  DOUBLE_SEMI,
  SEMI,
  DOUBLE_LEFT_SQUARE_BRACKET,
  DOUBLE_RIGHT_SQUARE_BRACKET,
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
  TIME,
  ELSE_IF,
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
  ID,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
