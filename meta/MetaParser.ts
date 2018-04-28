import * as chevrotain from "chevrotain";
import { tokens, Lexer, Tokens } from "./MetaLexer";

export class MetaParser extends chevrotain.Parser {
  rules;
  rule;
  atoms;
  atom;
  items;
  itemSuff;
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
      this.OR([
        {
          ALT: () => {
            this.CONSUME(Tokens.Fragment);
            this.CONSUME(Tokens.UpperName);
            this.CONSUME(Tokens.Colon);
            this.SUBRULE(this.atoms);
            this.CONSUME(Tokens.Semi);
          }
        },
        {
          ALT: () => {
            this.CONSUME2(Tokens.UpperName);
            this.CONSUME2(Tokens.Colon);
            this.SUBRULE2(this.atoms);
            this.CONSUME2(Tokens.Semi);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.LowerName);
            this.CONSUME3(Tokens.Colon);
            this.SUBRULE3(this.atoms);
            this.CONSUME3(Tokens.Semi);
          }
        }
      ]);
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
      // atom: itemSuffs
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.itemSuff);
      });
    });

    this.RULE("itemSuff", () => {
      // itemSuff: item | item '?' | item '*';
      this.OPTION(() => {
        this.CONSUME(Tokens.Not);
      });
      this.SUBRULE(this.item);
      this.OPTION2(() => {
        this.SUBRULE(this.suff);
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
            this.CONSUME(Tokens.All);
          }
        },
        {
          ALT: () => {
            this.CONSUME(Tokens.ReExp);
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
            this.CONSUME(Tokens.Equal);
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
