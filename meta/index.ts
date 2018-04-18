import * as prettier from "prettier";
import * as ts from "typescript";

class MetaParserConfig {
  prettierConfig: prettier.Options = {};
  templatePath = "../parser/parserTemplate";
  outDir = "../parser";
}

function metaParser(lexer: string): IntellijSqlEditor.Node {
  // d.ts & parser

  return;
}

function metaGenerator(ast: IntellijSqlEditor.Node, config: MetaParserConfig) {
  // todo
}
