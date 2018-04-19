import * as prettier from "prettier";
import * as chevrotain from "chevrotain";
import * as fs from "fs-extra";
import * as path from "path";
import { parseGCode } from "./MetaParser";

class MetaParserConfig {
  prettierConfig: prettier.Options = {};
  gCodePath = "./MySqlParser.g4";
  templatePath = "../parser/parserTemplate";
  outDir = "../parser";
}

function metaGenerator(config = new MetaParserConfig()) {
  const gCode = fs
    .readFileSync(path.join(__dirname, config.gCodePath))
    .toString("utf8");
  debugger;
  const { value, lexErrors, parseErrors } = parseGCode(gCode);

  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }

  console.log(value);
}

metaGenerator();
