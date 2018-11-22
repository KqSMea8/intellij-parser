import { Lexer, TokenEnum } from './lexer.g';
import { Parser, SyntaxKind } from './parser.g';

class CstNode {
  name: SyntaxKind | TokenEnum;
  /** 内容 */
  image?: string;
  startOffset = 0;
  children: { [x in SyntaxKind | TokenEnum]: CstNode[] };
}

const parser = new Parser([]);

export function parseMysql(mysqlCode: string) {
  const lexResult = Lexer.tokenize(mysqlCode);

  parser.input = lexResult.tokens;

  const cst = parser.root() as CstNode;
  // const ast = cst2ast(cst) as AstNode;

  return {
    //    ast,
    cst,
    lexErrors: lexResult.errors,
    parseErrors: parser.errors
  };
}

/**获取下一个可能的token列表 */
export function getAvailableTokens(text) {
  const lexResult = Lexer.tokenize(text);
  if (lexResult.errors.length > 0) {
    throw new Error('sad sad panda, lexing errors detected');
  }

  const parser = new Parser([]);
  let assistanceTokenVector = lexResult.tokens;
  const syntacticSuggestions = parser.computeContentAssist('root', assistanceTokenVector);
  let finalSuggestions = syntacticSuggestions.map(item => item.nextTokenType.tokenName);

  return Array.from(new Set(finalSuggestions));
}
