'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const fs = require('fs-extra');
const path = require('path');
const MetaGenerator_1 = require('./MetaGenerator');
class MetaParserConfig {
  constructor() {
    this.prettierConfig = {};
    this.gCodePath = '../meta/MySqlParser.g4';
    this.templatePath = '../parser/parserTemplate';
    this.outDir = '../parser/test.json';
  }
}
function metaGenerator(config = new MetaParserConfig()) {
  const gCode = fs.readFileSync(path.join(__dirname, config.gCodePath)).toString('utf8');
  const { ast, lexErrors, parseErrors } = MetaGenerator_1.parseGCode(gCode);
  if (lexErrors) {
    console.log(...lexErrors);
  }
  if (parseErrors) {
    console.log(...parseErrors);
  }
  fs.writeFileSync(path.join(__dirname, '../meta/mysql_g_ast.json'), JSON.stringify(ast, null, 2));
  console.log(ast);
  console.log(typeof ast);
  fs.writeFileSync(path.join(__dirname, config.outDir), JSON.stringify(ast));
}
metaGenerator();
//# sourceMappingURL=index.js.map
