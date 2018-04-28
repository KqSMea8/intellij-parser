import * as prettier from "prettier";
import * as chevrotain from "chevrotain";
import * as fs from "fs-extra";
import * as path from "path";
import { parseGCode, cstToAst } from "./MetaGenerator";

class MetaParserConfig {
  prettierConfig: prettier.Options = {};
  gCodePath = "../../meta/MySqlParser.g4";
  lexerCodePath = "../../meta/generatedLexer.g";
  templatePath = "../parser/parserTemplate";
  outDir = "../parser/test.json";
}

function metaGenerator(config = new MetaParserConfig()) {
  const gCode = fs
    .readFileSync(path.join(__dirname, config.lexerCodePath))
    .toString("utf8");
  const { ast, cst, lexErrors, parseErrors } = parseGCode(gCode);

  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }

  fs.writeFileSync(path.join(__dirname, "../../meta/rules_g.ts"), ast.toCode());

  fs.writeFileSync(
    path.join(__dirname, "../../meta/mysql_g_cst.json"),
    JSON.stringify(cst, null, 2)
  );
  fs.writeFileSync(
    path.join(__dirname, "../../meta/mysql_g_ast.json"),
    JSON.stringify(ast, null, 2)
  );
}

metaGenerator();
