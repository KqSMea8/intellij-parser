import * as chevrotain from 'chevrotain';

const WhiteSpace = chevrotain.createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true,
});
const ID = chevrotain.createToken({
  name: 'ID',
  pattern: /[A-Za-z_$0-9*]+/i,
});
const VARIABLE = chevrotain.createToken({
  name: 'VARIABLE',
  pattern: /\$[A-Za-z_0-9*]+/i,
  longer_alt: ID,
});
const STRING_LITERAL = chevrotain.createToken({
  name: 'STRING_LITERAL',
  pattern: /(\"(\\.|\"\"|[^(\"|\\)])*\"|\'(\\.|\'\'|[^(\'|\\)])*\')/i,
  longer_alt: ID,
});
const OPTION_X = chevrotain.createToken({
  name: 'OPTION_X',
  pattern: /X/,
  longer_alt: ID,
});
const OPTION_X_LOWER = chevrotain.createToken({
  name: 'OPTION_X_LOWER',
  pattern: /x/,
  longer_alt: ID,
});
const OPTION_W_LOWER = chevrotain.createToken({
  name: 'OPTION_W_LOWER',
  pattern: /w/,
  longer_alt: ID,
});
const OPTION_V_LOWER = chevrotain.createToken({
  name: 'OPTION_V_LOWER',
  pattern: /v/,
  longer_alt: ID,
});
const OPTION_U_LOWER = chevrotain.createToken({
  name: 'OPTION_U_LOWER',
  pattern: /u/,
  longer_alt: ID,
});
const OPTION_T_LOWER = chevrotain.createToken({
  name: 'OPTION_T_LOWER',
  pattern: /t/,
  longer_alt: ID,
});
const OPTION_R_LOWER = chevrotain.createToken({
  name: 'OPTION_R_LOWER',
  pattern: /r/,
  longer_alt: ID,
});
const OPTION_O_LOWER = chevrotain.createToken({
  name: 'OPTION_O_LOWER',
  pattern: /o/,
  longer_alt: ID,
});
const OPTION_M_LOWER = chevrotain.createToken({
  name: 'OPTION_M_LOWER',
  pattern: /m/,
  longer_alt: ID,
});
const OPTION_G_LOWER = chevrotain.createToken({
  name: 'OPTION_G_LOWER',
  pattern: /g/,
  longer_alt: ID,
});
const OPTION_F_LOWER = chevrotain.createToken({
  name: 'OPTION_F_LOWER',
  pattern: /f/,
  longer_alt: ID,
});
const OPTION_D_LOWER = chevrotain.createToken({
  name: 'OPTION_D_LOWER',
  pattern: /d/,
  longer_alt: ID,
});
const OPTION_C_LOWER = chevrotain.createToken({
  name: 'OPTION_C_LOWER',
  pattern: /c/,
  longer_alt: ID,
});
const OPTION_A_LOWER = chevrotain.createToken({
  name: 'OPTION_A_LOWER',
  pattern: /a/,
  longer_alt: ID,
});
const NO_CREATE = chevrotain.createToken({
  name: 'NO_CREATE',
  pattern: /no\-create/i,
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
const ADD = chevrotain.createToken({
  name: 'ADD',
  pattern: /\+/i,
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
const DOUBLE_HYPHEN = chevrotain.createToken({
  name: 'DOUBLE_HYPHEN',
  pattern: /\-\-/i,
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
const DIGIT_TO_SEVEN = chevrotain.createToken({
  name: 'DIGIT_TO_SEVEN',
  pattern: /[0-7][0-7][0-7]/i,
  longer_alt: ID,
});
const DIGIT = chevrotain.createToken({
  name: 'DIGIT',
  pattern: /[0-9]+/i,
  longer_alt: ID,
});
const TIME = chevrotain.createToken({
  name: 'TIME',
  pattern: /TIME/i,
  longer_alt: ID,
});
const ELSE_END = chevrotain.createToken({
  name: 'ELSE_END',
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
const OPTION_R = chevrotain.createToken({
  name: 'OPTION_R',
  pattern: /R/,
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
const FILEPATH = chevrotain.createToken({
  name: 'FILEPATH',
  pattern: /(\.\/|\.\.\/|\/|[A-Za-z0-9\$_-])(.)*/i,
  longer_alt: ID,
});

export enum TokenEnum {
  VARIABLE = 'VARIABLE',
  STRING_LITERAL = 'STRING_LITERAL',
  OPTION_X = 'OPTION_X',
  OPTION_X_LOWER = 'OPTION_X_LOWER',
  OPTION_W_LOWER = 'OPTION_W_LOWER',
  OPTION_V_LOWER = 'OPTION_V_LOWER',
  OPTION_U_LOWER = 'OPTION_U_LOWER',
  OPTION_T_LOWER = 'OPTION_T_LOWER',
  OPTION_R_LOWER = 'OPTION_R_LOWER',
  OPTION_O_LOWER = 'OPTION_O_LOWER',
  OPTION_M_LOWER = 'OPTION_M_LOWER',
  OPTION_G_LOWER = 'OPTION_G_LOWER',
  OPTION_F_LOWER = 'OPTION_F_LOWER',
  OPTION_D_LOWER = 'OPTION_D_LOWER',
  OPTION_C_LOWER = 'OPTION_C_LOWER',
  OPTION_A_LOWER = 'OPTION_A_LOWER',
  NO_CREATE = 'NO_CREATE',
  COMMENT = 'COMMENT',
  ECHO = 'ECHO',
  ADD = 'ADD',
  CHMOD = 'CHMOD',
  TOUCH = 'TOUCH',
  DOUBLE_HYPHEN = 'DOUBLE_HYPHEN',
  EQUAL_SYMBOL = 'EQUAL_SYMBOL',
  TIME_OPT = 'TIME_OPT',
  EXCLAMATION_SYMBOL = 'EXCLAMATION_SYMBOL',
  DOUBLE_SEMI = 'DOUBLE_SEMI',
  SEMI = 'SEMI',
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
  DIGIT_TO_SEVEN = 'DIGIT_TO_SEVEN',
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
  OPTION_R = 'OPTION_R',
  DONE = 'DONE',
  DO = 'DO',
  UNTIL = 'UNTIL',
  WHILE = 'WHILE',
  FILEPATH = 'FILEPATH',
  ID = 'ID',
}

export const Tokens = {
  VARIABLE,
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
  FILEPATH,
  ID,
};

export const tokens = [
  WhiteSpace,
  VARIABLE,
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
  FILEPATH,
  ID,
];

export const Lexer = new chevrotain.Lexer(tokens, {
  positionTracking: 'onlyStart',
});
