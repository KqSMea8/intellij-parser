import * as chevrotain from 'chevrotain';
import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';

export enum SyntaxKind {
  number = 'number',
  word = 'word',
  word_list = 'word_list',
  assignment_word = 'assignment_word',
  redirection = 'redirection',
  simple_command_element = 'simple_command_element',
  redirection_list = 'redirection_list',
  simple_command = 'simple_command',
  command = 'command',
  shell_command = 'shell_command',
  for_command = 'for_command',
  select_command = 'select_command',
  case_command = 'case_command',
  function_def = 'function_def',
  subshell = 'subshell',
  if_command = 'if_command',
  group_command = 'group_command',
  elif_clause = 'elif_clause',
  case_clause = 'case_clause',
  pattern_list = 'pattern_list',
  case_clause_sequence = 'case_clause_sequence',
  pattern = 'pattern',
  list = 'list',
  compound_list = 'compound_list',
  list0 = 'list0',
  list1 = 'list1',
  list_terminator = 'list_terminator',
  newline_list = 'newline_list',
  simple_list = 'simple_list',
  simple_list1 = 'simple_list1',
  pipeline_command = 'pipeline_command',
  pipeline = 'pipeline',
  time_opt = 'time_opt',
  timespec = 'timespec',
}

export { tokens, Lexer, Tokens, TokenEnum };

export class BaseNode {
  private _source = '';

  kind: SyntaxKind | TokenEnum;
  pos: number;
  end: number;

  get width() {
    return this.end - this.pos;
  }

  get fullText() {
    return this._source.slice(this.pos, this.end);
  }

  get children(): BaseNode[] {
    return [];
  }

  forEach(callback: ((child: BaseNode) => any)) {
    if (!this.children.length) {
      return;
    }

    this.children.forEach(callback);
  }
}

export class Parser extends chevrotain.Parser {
  [x: string]: any;
  constructor(input) {
    super(input, tokens, {
      recoveryEnabled: true,
      outputCst: true,
      maxLookahead: 6,
    });

    this.RULE('number', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.DIGIT);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.number);
            this.CONSUME2(Tokens.DIGIT);
          },
        },
      ]);
    });

    this.RULE('word', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LETTER);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.word);
            this.CONSUME2(Tokens.LETTER);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.word);
            this.CONSUME(Tokens.UNDERLINE);
          },
        },
      ]);
    });

    this.RULE('word_list', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.word_list);
            this.SUBRULE2(this.word);
          },
        },
      ]);
    });

    this.RULE('assignment_word', () => {
      this.SUBRULE(this.word);
      this.CONSUME(Tokens.EQUAL_SYMBOL);
      this.SUBRULE2(this.word);
    });

    this.RULE('redirection', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT_REDIRECTION);
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT_REDIRECTION);
            this.SUBRULE2(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.number);
            this.CONSUME2(Tokens.RIGHT_REDIRECTION);
            this.SUBRULE3(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.number);
            this.CONSUME2(Tokens.LEFT_REDIRECTION);
            this.SUBRULE4(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT_REDIRECTION_WITH_ADD);
            this.SUBRULE5(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.number);
            this.CONSUME2(Tokens.RIGHT_REDIRECTION_WITH_ADD);
            this.SUBRULE6(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT_REDIRECTION_WITH_ADD);
            this.SUBRULE7(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.number);
            this.CONSUME2(Tokens.LEFT_REDIRECTION_WITH_ADD);
            this.SUBRULE8(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.SUBRULE5(this.number);
          },
        },
        {
          ALT: () => {
            this.SUBRULE6(this.number);
            this.CONSUME2(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.SUBRULE7(this.number);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.SUBRULE8(this.number);
          },
        },
        {
          ALT: () => {
            this.SUBRULE9(this.number);
            this.CONSUME2(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.SUBRULE10(this.number);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.SUBRULE9(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE11(this.number);
            this.CONSUME4(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.SUBRULE10(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.SUBRULE11(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE12(this.number);
            this.CONSUME4(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.SUBRULE12(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.LEFT_REDIRECTION_WITH_ADD);
            this.CONSUME(Tokens.HYPHEN);
            this.SUBRULE13(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE13(this.number);
            this.CONSUME4(Tokens.LEFT_REDIRECTION_WITH_ADD);
            this.CONSUME2(Tokens.HYPHEN);
            this.SUBRULE14(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.CONSUME3(Tokens.HYPHEN);
          },
        },
        {
          ALT: () => {
            this.SUBRULE14(this.number);
            this.CONSUME6(Tokens.RIGHT_REDIRECTION_WITH_MERGE);
            this.CONSUME4(Tokens.HYPHEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.CONSUME5(Tokens.HYPHEN);
          },
        },
        {
          ALT: () => {
            this.SUBRULE15(this.number);
            this.CONSUME6(Tokens.LEFT_REDIRECTION_WITH_MERGE);
            this.CONSUME6(Tokens.HYPHEN);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.DESCRIPTOR_TO_FILE);
            this.SUBRULE15(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE16(this.number);
            this.CONSUME3(Tokens.LEFT_REDIRECTION);
            this.CONSUME3(Tokens.RIGHT_REDIRECTION);
            this.SUBRULE16(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.LEFT_REDIRECTION);
            this.CONSUME4(Tokens.RIGHT_REDIRECTION);
            this.SUBRULE17(this.word);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.RIGHT_REDIRECTION);
            this.CONSUME(Tokens.BIT_OR_OP);
            this.SUBRULE18(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE17(this.number);
            this.CONSUME6(Tokens.RIGHT_REDIRECTION);
            this.CONSUME2(Tokens.BIT_OR_OP);
            this.SUBRULE19(this.word);
          },
        },
      ]);
    });

    this.RULE('simple_command_element', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.assignment_word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.redirection);
          },
        },
      ]);
    });

    this.RULE('redirection_list', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.redirection);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.redirection_list);
            this.SUBRULE2(this.redirection);
          },
        },
      ]);
    });

    this.RULE('simple_command', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simple_command_element);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.simple_command);
            this.SUBRULE2(this.simple_command_element);
          },
        },
      ]);
    });

    this.RULE('command', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simple_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.shell_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.shell_command);
            this.SUBRULE(this.redirection_list);
          },
        },
      ]);
    });

    this.RULE('shell_command', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.for_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.case_command);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.WHILE);
            this.SUBRULE(this.compound_list);
            this.CONSUME(Tokens.DO);
            this.SUBRULE2(this.compound_list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.until);
            this.SUBRULE3(this.compound_list);
            this.CONSUME2(Tokens.DO);
            this.SUBRULE4(this.compound_list);
            this.CONSUME2(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.select_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.if_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.subshell);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.group_command);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.function_def);
          },
        },
      ]);
    });

    this.RULE('for_command', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.FOR);
            this.SUBRULE(this.word);
            this.SUBRULE(this.newline_list);
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.compound_list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.FOR);
            this.SUBRULE2(this.word);
            this.SUBRULE2(this.newline_list);
            this.CONSUME(Tokens.LEFT_BRACE);
            this.SUBRULE2(this.compound_list);
            this.CONSUME(Tokens.RIGHT_BRACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.FOR);
            this.SUBRULE3(this.word);
            this.CONSUME(Tokens.SEMI);
            this.SUBRULE3(this.newline_list);
            this.CONSUME2(Tokens.DO);
            this.SUBRULE3(this.compound_list);
            this.CONSUME2(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.FOR);
            this.SUBRULE4(this.word);
            this.CONSUME2(Tokens.SEMI);
            this.SUBRULE4(this.newline_list);
            this.CONSUME2(Tokens.LEFT_BRACE);
            this.SUBRULE4(this.compound_list);
            this.CONSUME2(Tokens.RIGHT_BRACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.FOR);
            this.SUBRULE5(this.word);
            this.SUBRULE5(this.newline_list);
            this.CONSUME(Tokens.IN);
            this.SUBRULE(this.word_list);
            this.SUBRULE(this.list_terminator);
            this.SUBRULE6(this.newline_list);
            this.CONSUME3(Tokens.DO);
            this.SUBRULE5(this.compound_list);
            this.CONSUME3(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.FOR);
            this.SUBRULE6(this.word);
            this.SUBRULE7(this.newline_list);
            this.CONSUME2(Tokens.IN);
            this.SUBRULE2(this.word_list);
            this.SUBRULE2(this.list_terminator);
            this.SUBRULE8(this.newline_list);
            this.CONSUME3(Tokens.LEFT_BRACE);
            this.SUBRULE6(this.compound_list);
            this.CONSUME3(Tokens.RIGHT_BRACE);
          },
        },
      ]);
    });

    this.RULE('select_command', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.SELECT);
            this.SUBRULE(this.word);
            this.SUBRULE(this.newline_list);
            this.CONSUME(Tokens.DO);
            this.SUBRULE(this.list);
            this.CONSUME(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.SELECT);
            this.SUBRULE2(this.word);
            this.SUBRULE2(this.newline_list);
            this.CONSUME(Tokens.LEFT_BRACE);
            this.SUBRULE2(this.list);
            this.CONSUME(Tokens.RIGHT_BRACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.SELECT);
            this.SUBRULE3(this.word);
            this.CONSUME(Tokens.SEMI);
            this.SUBRULE3(this.newline_list);
            this.CONSUME2(Tokens.DO);
            this.SUBRULE3(this.list);
            this.CONSUME2(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME4(Tokens.SELECT);
            this.SUBRULE4(this.word);
            this.CONSUME2(Tokens.SEMI);
            this.SUBRULE4(this.newline_list);
            this.CONSUME2(Tokens.LEFT_BRACE);
            this.SUBRULE4(this.list);
            this.CONSUME2(Tokens.RIGHT_BRACE);
          },
        },
        {
          ALT: () => {
            this.CONSUME5(Tokens.SELECT);
            this.SUBRULE5(this.word);
            this.SUBRULE5(this.newline_list);
            this.CONSUME(Tokens.IN);
            this.SUBRULE(this.word_list);
            this.SUBRULE(this.list_terminator);
            this.SUBRULE6(this.newline_list);
            this.CONSUME3(Tokens.DO);
            this.SUBRULE5(this.list);
            this.CONSUME3(Tokens.DONE);
          },
        },
        {
          ALT: () => {
            this.CONSUME6(Tokens.SELECT);
            this.SUBRULE6(this.word);
            this.SUBRULE7(this.newline_list);
            this.CONSUME2(Tokens.IN);
            this.SUBRULE2(this.word_list);
            this.SUBRULE2(this.list_terminator);
            this.SUBRULE8(this.newline_list);
            this.CONSUME3(Tokens.LEFT_BRACE);
            this.SUBRULE6(this.list);
            this.CONSUME3(Tokens.RIGHT_BRACE);
          },
        },
      ]);
    });

    this.RULE('case_command', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.CASE);
            this.SUBRULE(this.word);
            this.SUBRULE(this.newline_list);
            this.CONSUME(Tokens.IN);
            this.SUBRULE2(this.newline_list);
            this.CONSUME(Tokens.CASE_END);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.CASE);
            this.SUBRULE2(this.word);
            this.SUBRULE3(this.newline_list);
            this.CONSUME2(Tokens.IN);
            this.SUBRULE(this.case_clause_sequence);
            this.SUBRULE4(this.newline_list);
            this.CONSUME2(Tokens.CASE_END);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.CASE);
            this.SUBRULE3(this.word);
            this.SUBRULE5(this.newline_list);
            this.CONSUME3(Tokens.IN);
            this.SUBRULE(this.case_clause);
            this.CONSUME3(Tokens.CASE_END);
          },
        },
      ]);
    });

    this.RULE('function_def', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
            this.CONSUME(Tokens.LEFT_BRACKET);
            this.CONSUME(Tokens.RIGHT_BRACKET);
            this.SUBRULE(this.newline_list);
            this.SUBRULE(this.group_command);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.FUNCTION);
            this.SUBRULE2(this.word);
            this.CONSUME2(Tokens.LEFT_BRACKET);
            this.CONSUME2(Tokens.RIGHT_BRACKET);
            this.SUBRULE2(this.newline_list);
            this.SUBRULE2(this.group_command);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.FUNCTION);
            this.SUBRULE3(this.word);
            this.SUBRULE3(this.newline_list);
            this.SUBRULE3(this.group_command);
          },
        },
      ]);
    });

    this.RULE('subshell', () => {
      this.CONSUME(Tokens.LEFT_BRACKET);
      this.SUBRULE(this.compound_list);
      this.CONSUME(Tokens.RIGHT_BRACKET);
    });

    this.RULE('if_command', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.IF);
            this.SUBRULE(this.compound_list);
            this.CONSUME(Tokens.THEN);
            this.SUBRULE2(this.compound_list);
            this.CONSUME(Tokens.IF_END);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.IF);
            this.SUBRULE3(this.compound_list);
            this.CONSUME2(Tokens.THEN);
            this.SUBRULE4(this.compound_list);
            this.CONSUME(Tokens.ELSE);
            this.SUBRULE5(this.compound_list);
            this.CONSUME2(Tokens.IF_END);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.IF);
            this.SUBRULE6(this.compound_list);
            this.CONSUME3(Tokens.THEN);
            this.SUBRULE7(this.compound_list);
            this.SUBRULE(this.elif_clause);
            this.CONSUME3(Tokens.IF_END);
          },
        },
      ]);
    });

    this.RULE('group_command', () => {
      this.CONSUME(Tokens.LEFT_BRACE);
      this.SUBRULE(this.list);
      this.CONSUME(Tokens.RIGHT_BRACE);
    });

    this.RULE('elif_clause', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.ELSE_END);
            this.SUBRULE(this.compound_list);
            this.CONSUME(Tokens.THEN);
            this.SUBRULE2(this.compound_list);
          },
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.ELSE_END);
            this.SUBRULE3(this.compound_list);
            this.CONSUME2(Tokens.THEN);
            this.SUBRULE4(this.compound_list);
            this.CONSUME(Tokens.ELSE);
            this.SUBRULE5(this.compound_list);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.ELSE_END);
            this.SUBRULE6(this.compound_list);
            this.CONSUME3(Tokens.THEN);
            this.SUBRULE7(this.compound_list);
            this.SUBRULE(this.elif_clause);
          },
        },
      ]);
    });

    this.RULE('case_clause', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.pattern_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.case_clause_sequence);
            this.SUBRULE2(this.pattern_list);
          },
        },
      ]);
    });

    this.RULE('pattern_list', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.newline_list);
            this.SUBRULE(this.pattern);
            this.CONSUME(Tokens.RIGHT_BRACKET);
            this.SUBRULE(this.compound_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.newline_list);
            this.SUBRULE2(this.pattern);
            this.CONSUME2(Tokens.RIGHT_BRACKET);
            this.SUBRULE3(this.newline_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE4(this.newline_list);
            this.CONSUME(Tokens.LEFT_BRACKET);
            this.SUBRULE3(this.pattern);
            this.CONSUME3(Tokens.RIGHT_BRACKET);
            this.SUBRULE2(this.compound_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE5(this.newline_list);
            this.CONSUME2(Tokens.LEFT_BRACKET);
            this.SUBRULE4(this.pattern);
            this.CONSUME4(Tokens.RIGHT_BRACKET);
            this.SUBRULE6(this.newline_list);
          },
        },
      ]);
    });

    this.RULE('case_clause_sequence', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.pattern_list);
            this.CONSUME(Tokens.DOUBLE_SEMI);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.case_clause_sequence);
            this.SUBRULE2(this.pattern_list);
            this.CONSUME2(Tokens.DOUBLE_SEMI);
          },
        },
      ]);
    });

    this.RULE('pattern', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.word);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.pattern);
            this.CONSUME(Tokens.BIT_OR_OP);
            this.SUBRULE2(this.word);
          },
        },
      ]);
    });

    this.RULE('list', () => {
      this.SUBRULE(this.newline_list);
      this.SUBRULE(this.list0);
    });

    this.RULE('compound_list', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.newline_list);
            this.SUBRULE(this.list1);
          },
        },
      ]);
    });

    this.RULE('list0', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.list1);
            this.CONSUME(Tokens.LINE_FEED);
            this.SUBRULE(this.newline_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.list1);
            this.CONSUME(Tokens.BIT_AND_OP);
            this.SUBRULE2(this.newline_list);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.list1);
            this.CONSUME(Tokens.SEMI);
            this.SUBRULE3(this.newline_list);
          },
        },
      ]);
    });

    this.RULE('list1', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.list1);
            this.CONSUME(Tokens.AND);
            this.SUBRULE(this.newline_list);
            this.SUBRULE2(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.list1);
            this.CONSUME(Tokens.OR);
            this.SUBRULE2(this.newline_list);
            this.SUBRULE4(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE5(this.list1);
            this.CONSUME(Tokens.BIT_AND_OP);
            this.SUBRULE3(this.newline_list);
            this.SUBRULE6(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE7(this.list1);
            this.CONSUME(Tokens.SEMI);
            this.SUBRULE4(this.newline_list);
            this.SUBRULE8(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE9(this.list1);
            this.CONSUME(Tokens.LINE_FEED);
            this.SUBRULE5(this.newline_list);
            this.SUBRULE10(this.list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.pipeline_command);
          },
        },
      ]);
    });

    this.RULE('list_terminator', () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LINE_FEED);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.SEMI);
          },
        },
      ]);
    });

    this.RULE('newline_list', () => {
      this.OR([
        {
          ALT: () => {},
        },
        {
          ALT: () => {
            this.SUBRULE(this.newline_list);
            this.CONSUME(Tokens.LINE_FEED);
          },
        },
      ]);
    });

    this.RULE('simple_list', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simple_list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.simple_list1);
            this.CONSUME(Tokens.BIT_AND_OP);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.simple_list1);
            this.CONSUME(Tokens.SEMI);
          },
        },
      ]);
    });

    this.RULE('simple_list1', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.simple_list1);
            this.CONSUME(Tokens.AND);
            this.SUBRULE(this.newline_list);
            this.SUBRULE2(this.simple_list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE3(this.simple_list1);
            this.CONSUME(Tokens.OR);
            this.SUBRULE2(this.newline_list);
            this.SUBRULE4(this.simple_list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE5(this.simple_list1);
            this.CONSUME(Tokens.BIT_AND_OP);
            this.SUBRULE6(this.simple_list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE7(this.simple_list1);
            this.CONSUME(Tokens.SEMI);
            this.SUBRULE8(this.simple_list1);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.pipeline_command);
          },
        },
      ]);
    });

    this.RULE('pipeline_command', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.pipeline);
          },
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.EXCLAMATION_SYMBOL);
            this.SUBRULE2(this.pipeline);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.timespec);
            this.SUBRULE3(this.pipeline);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.timespec);
            this.CONSUME2(Tokens.EXCLAMATION_SYMBOL);
            this.SUBRULE4(this.pipeline);
          },
        },
        {
          ALT: () => {
            this.CONSUME3(Tokens.EXCLAMATION_SYMBOL);
            this.SUBRULE3(this.timespec);
            this.SUBRULE5(this.pipeline);
          },
        },
      ]);
    });

    this.RULE('pipeline', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.pipeline);
            this.CONSUME(Tokens.BIT_OR_OP);
            this.SUBRULE(this.newline_list);
            this.SUBRULE2(this.pipeline);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.command);
          },
        },
      ]);
    });

    this.RULE('time_opt', () => {
      this.CONSUME(Tokens.TIME_OPT);
    });

    this.RULE('timespec', () => {
      this.OR([
        {
          ALT: () => {
            this.SUBRULE(this.time);
          },
        },
        {
          ALT: () => {
            this.SUBRULE2(this.time);
            this.SUBRULE(this.time_opt);
          },
        },
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
