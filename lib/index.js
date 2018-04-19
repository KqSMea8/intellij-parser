"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
var MetaParser_1 = require("./MetaParser");
var MetaParserConfig = /** @class */ (function () {
    function MetaParserConfig() {
        this.prettierConfig = {};
        this.gCodePath = "./MySqlParser.g4";
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
    debugger;
    var _a = MetaParser_1.parseGCode(gCode), value = _a.value, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
    if (lexErrors) {
        console.log.apply(console, lexErrors);
    }
    if (parseErrors) {
        console.log.apply(console, parseErrors);
    }
    console.log(value);
}
metaGenerator();
//# sourceMappingURL=index.js.map