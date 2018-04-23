import * as chevrotain from "chevrotain";
import { tokens, Lexer, Tokens } from "./MetaLexer";

export class MetaParser extends chevrotain.Parser {
  rules;
  rule;
  ruleName;
  atoms;
  atom;
  items;
  item;
  suff;
  alias;

  constructor(input) {
    super(input, tokens, {
      recoveryEnabled: true,
      outputCst: true
    });

    this.RULE("rules", () => {
      // rules: rule*;
      this.MANY(() => {
        this.SUBRULE(this.rule);
      });
    });

    this.RULE("rule", () => {
      // rule: ruleName ':' atoms ';';
      this.SUBRULE(this.ruleName);
      this.CONSUME(Tokens.Colon);
      this.SUBRULE(this.atoms);
      this.CONSUME(Tokens.Semi);
    });

    this.RULE("ruleName", () => {
      // ruleName: LowerName;
      this.CONSUME(Tokens.LowerName);
    });

    this.RULE("atoms", () => {
      // atoms: atom ('|' atom)*;
      this.SUBRULE(this.atom);
      this.MANY(() => {
        this.CONSUME(Tokens.Bar);
        this.SUBRULE2(this.atom);
      });
    });

    this.RULE("atom", () => {
      // item: item | item '?' | item '*';
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.item);
        this.OPTION(() => {
          this.SUBRULE(this.suff);
        });
      });
    });

    this.RULE("suff", () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.Optional);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Asterisk);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Plus);
          }
        }
      ]);
    });

    this.RULE("item", () => {
      // item: '(' atoms ')' | UpperName | Stringliteral | LowerName | LowerName = itemCase
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.LeftBracket);
            this.SUBRULE2(this.atoms);
            this.CONSUME(Tokens.RightBracket);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.UpperName);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.Stringliteral);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LowerName);
            this.OPTION(() => {
              this.SUBRULE(this.alias);
            });
          }
        }
      ]);
    });

    this.RULE("alias", () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME2(Tokens.Equal);
            this.SUBRULE(this.item);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.PlusEquals);
            this.SUBRULE2(this.item);
          }
        }
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}
