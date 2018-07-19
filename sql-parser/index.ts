import { Lexer, TokenEnum } from './lexer.g';
import { Parser, SyntaxKind } from './parser.g';
// import { SelectParser, SelectLexer } from './tmp.g';
// import * as fs from 'fs';
// import * as path from 'path';

class CstNode {
  name: SyntaxKind | TokenEnum;
  /** 内容 */
  image?: string;
  startOffset = 0;
  children: { [x in SyntaxKind | TokenEnum]: CstNode[] };
}

export function parseMysql(mysqlCode: string) {
  const lexResult = Lexer.tokenize(mysqlCode);

  const parser = new Parser([]);
  parser.input = lexResult.tokens;

  const cst = parser.selectStatement() as CstNode;
  // const ast = cst2ast(cst) as AstNode;

  return {
    //    ast,
    cst,
    lexErrors: lexResult.errors,
    parseErrors: parser.errors
  };
}

// (function test() {
//   const mysqlCode = fs.readFileSync(path.join(__dirname, '../../sql-parser/mysql.sql')).toString('utf8');

//   try {
//     const { cst, lexErrors, parseErrors } = parseMysql(mysqlCode);

//     console.log(lexErrors, parseErrors);

//     fs.writeFileSync(path.join(__dirname, '../../sql-parser/mysql_output_cst.json'), JSON.stringify(cst));
//   } catch (e) {
//     debugger;
//     console.log(e);
//   }
// })();
