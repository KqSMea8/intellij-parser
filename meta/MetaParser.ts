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
      // items: item item*;
      // item: itemCase | itemCase '?' | itemCase '*';
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.itemCase);
        this.OPTION(() => {
          this.SUBRULE(this.sufs);
        });
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
              this.CONSUME(Tokens.Equal);
              this.SUBRULE2(this.itemCase);
            });
          }
        }
      ]);
    });

    chevrotain.Parser.performSelfAnalysis(this);
  }
}

enum SyntaxKind {
  /** = xx */
  alias,
  rules,
  /** 规则 */
  rule,
  /** 规则名 */
  ruleName,
  /** 产生式可选项 */
  atoms,
  /** 产生式的某个可选项 */
  atom,
  /** 产生式节点列表,包含suff（Many，Option） */
  items,
  /** 产生式节点,包含suff（Many，Option） */
  item,
  /** 产生式节点 */
  itemCase,
  /** 产生式节点名 */
  itemCaseName,
  suffs
}

interface MetaNode {
  kind: SyntaxKind;
  children: { [key in keyof SyntaxKind]: MetaNode[] };
}

export function parseGCode(gCode: string) {
  const lexResult = Lexer.tokenize(gCode);

  const metaParser = new MetaParser([]);
  metaParser.input = lexResult.tokens;

  const ast = metaParser.rules();

  return {
    ast,
    lexErrors: lexResult.errors,
    parseErrors: metaParser.errors
  };
}
