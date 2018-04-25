import * as prettier from 'prettier';
import * as chevrotain from 'chevrotain';
import * as fs from 'fs-extra';
import * as path from 'path';
import { parseGCode } from './MetaGenerator';

class MetaParserConfig {
  prettierConfig: prettier.Options = {};
  gCodePath = '../meta/MySqlParser.g4';
  templatePath = '../parser/parserTemplate';
  outDir = '../parser/test.json';
}

function metaGenerator(config = new MetaParserConfig()) {
  const gCode = fs.readFileSync(path.join(__dirname, config.gCodePath)).toString('utf8');
  const { ast, lexErrors, parseErrors } = parseGCode(gCode);

  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }

  fs.writeFileSync(path.join(__dirname, '../meta/mysql_g_ast.json'), JSON.stringify(ast, null, 2));

  console.log(ast);
}

metaGenerator();
