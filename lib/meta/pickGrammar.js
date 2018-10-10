(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs-extra", "path", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs = require("fs-extra");
    var path = require("path");
    var _ = require("lodash");
    var grammarFile = fs.readFileSync(path.join(__dirname, '../../grammars/MySqlParser.g4'));
    var generatedFile = fs.readFileSync(path.join(__dirname, '../../grammars/SelectParser.g4'));
    var grammarFileArr = grammarFile
        .toString()
        .replace(/\n/g, '')
        .replace(/\t/g, '')
        .replace(/#\s\w+/g, '')
        .split(';');
    var generatedFileArr = generatedFile
        .toString()
        .replace(/\n/g, '')
        .replace(/\t/g, '')
        .replace(/#\s\w+/g, '')
        .split(';');
    var grammarFileObj = {};
    grammarFileArr.map(function (item) { return (grammarFileObj[item.split(':')[0]] = item.split(':')[1]); });
    var generatedFileObj = {};
    generatedFileArr.map(function (item) { return (generatedFileObj[item.split(':')[0]] = item.split(':')[1]); });
    var readRule = {};
    var outputRules = '';
    function findRule(ruleName) {
        if (grammarFileObj[ruleName] && !readRule[ruleName] && !generatedFileObj[ruleName]) {
            outputRules += ruleName + ": " + grammarFileObj[ruleName] + ";\n\n";
            readRule[ruleName] = true;
        }
        else {
            return;
        }
        var subRules = _.uniq(grammarFileObj[ruleName].match(/\w+/g));
        subRules.map(function (subRule) { return findRule(subRule); });
    }
    findRule('alterTable');
    fs.writeFileSync(path.join(__dirname, '../../grammars/pickParser.g4'), outputRules);
});
//# sourceMappingURL=pickGrammar.js.map