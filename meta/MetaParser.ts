import * as chevrotain from "chevrotain";
import { tokens, Lexer, Tokens } from "./MetaLexer";

class MetaParser extends chevrotain.Parser {
  rules;
  rule;
  ruleName;
  atoms;
  atom;
  items;
  item;
  itemCase;
  sufs;
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
      // atom : items;
      this.SUBRULE(this.items);
    });

    this.RULE("items", () => {
      // items: item item*;
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.item);
      });
    });

    this.RULE("item", () => {
      // item: itemCase | itemCase '?' | itemCase '*';
      this.SUBRULE(this.itemCase);
      this.OPTION(() => {
        this.SUBRULE(this.sufs);
      });
    });

    this.RULE("sufs", () => {
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
        }
      ]);
    });

    this.RULE("itemCase", () => {
      // itemCase: '(' atoms ')' | UpperName | Stringliteral | itemCaseName | itemCaseName = itemCase
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
      this.CONSUME(Tokens.Equal);
      this.SUBRULE(this.itemCase);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}

export function parseGCode(gCode: string) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const value = metaParser.rules();

  return {
    value,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
