"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const MetaParser_1 = require("./MetaParser");
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
    const { ast, lexErrors, parseErrors } = MetaParser_1.parseGCode(gCode);
    if (lexErrors) {
        console.log(...lexErrors);
    }
    if (parseErrors) {
        console.log(...parseErrors);
    }
    console.log(ast);
    console.log(typeof ast);
    fs.writeFileSync(path.join(__dirname, config.outDir), JSON.stringify(ast));
}
metaGenerator();
//# sourceMappingURL=index.js.map