"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = require("../ast");
var utils_ts_1 = require("../src/utils.ts");
function doValidation(doc) {
    console.log('doValidation');
}
exports.doValidation = doValidation;
function doComplete(doc, pos) {
    console.log('doComplete');
}
exports.doComplete = doComplete;
function doHover(doc, pos) {
    return utils_ts_1.walker(ast_1.testJson, pos);
}
exports.doHover = doHover;
//# sourceMappingURL=index.js.map