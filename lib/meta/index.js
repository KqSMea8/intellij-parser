"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var path = require("path");
var MetaParser_1 = require("./MetaParser");
var MetaParserConfig = (function () {
    function MetaParserConfig() {
        this.prettierConfig = {};
        this.gCodePath = "../meta/MySqlParser.g4";
        this.templatePath = "../parser/parserTemplate";
        this.outDir = "../parser";
    }
    return MetaParserConfig;
}());
function metaGenerator(config) {
    if (config === void 0) { config = new MetaParserConfig(); }
    var gCode = fs
        .readFileSync(path.join(__dirname, config.gCodePath))
        .toString("utf8");
    var _a = MetaParser_1.parseGCode(gCode), ast = _a.ast, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
    if (lexErrors) {
        console.log.apply(console, lexErrors);
    }
    if (parseErrors) {
        console.log.apply(console, parseErrors);
    }
    console.log(ast);
}
metaGenerator();
//# sourceMappingURL=index.js.map