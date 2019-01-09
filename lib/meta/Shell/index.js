(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "prettier", "fs-extra", "path", "./ShellMetaGenerator", "../../common/utils", "../MetaLexer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prettier = require("prettier");
    var fs = require("fs-extra");
    var path = require("path");
    var ShellMetaGenerator_1 = require("./ShellMetaGenerator");
    var utils_1 = require("../../common/utils");
    var MetaLexer_1 = require("../MetaLexer");
    var MetaParserConfig = (function () {
        function MetaParserConfig() {
            this.prettierConfig = {
                parser: 'typescript',
                trailingComma: 'all',
                singleQuote: true
            };
            this.parserCodePath = '../../../grammars/Shell/CoreParser.g4';
            this.lexerCodePath = '../../../grammars/Shell/ShellLexer.g4';
        }
        return MetaParserConfig;
    }());
    function metaLexerGenerator(lexerGCode, config) {
        var _a = ShellMetaGenerator_1.parseGCode(lexerGCode, false), ast = _a.ast, cst = _a.cst, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
        fs.writeFileSync('./test.js', JSON.stringify(cst));
        if (lexErrors && lexErrors.length) {
            console.log.apply(console, lexErrors);
            debugger;
        }
        if (parseErrors && parseErrors.length) {
            console.log.apply(console, parseErrors);
            debugger;
        }
        ast.sortRules();
        var tokenNames = ast.rules.filter(function (rule) { return !rule.fragName; }).map(function (rule) { return rule.tokenName; });
        var parserCode = "\n    import * as chevrotain from 'chevrotain';\n\n    const WhiteSpace = chevrotain.createToken({\n      name: 'WhiteSpace',\n      pattern: /\\s+/,\n      group: chevrotain.Lexer.SKIPPED,\n      line_breaks: true\n    });\n    const ID = chevrotain.createToken({\n      name: 'ID',\n      pattern: /[A-Za-z_$0-9*]+/i,\n    });  \n    " + ast.toLexerCode() + "\n\n    export enum TokenEnum {\n      " + tokenNames.map(function (name) { return name + " = '" + name + "'"; }).join(',') + "\n    }\n\n    export const Tokens = {\n      " + tokenNames.map(function (name) { return "" + name; }).join(',') + "\n    };\n\n    export const tokens = [\n      WhiteSpace,\n      " + tokenNames.map(function (name) { return "" + name; }).join(',') + "\n    ];\n\n    export const Lexer = new chevrotain.Lexer(tokens, {\n      positionTracking: 'onlyStart'\n    });\n  ";
        try {
            var beautifiedCode = prettier.format(parserCode, config.prettierConfig);
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/shell_lexer_cst.g.json'), JSON.stringify(cst, null, 2));
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/shell_lexer_ast.g.json'), JSON.stringify(ast, null, 2));
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/Shell/lexer.g.ts'), beautifiedCode);
        }
        catch (e) {
            console.error(e);
            debugger;
        }
    }
    function metaParserGenerator(parserGCode, config, tokens) {
        var _a = ShellMetaGenerator_1.parseGCode(parserGCode, true, tokens), ast = _a.ast, cst = _a.cst, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
        if (lexErrors && lexErrors.length) {
            console.log.apply(console, lexErrors);
            debugger;
        }
        if (parseErrors && parseErrors.length) {
            console.log.apply(console, parseErrors);
            debugger;
        }
        var rules = ast.rules.map(function (rule) {
            return {
                name: rule.ruleName,
                atoms: rule.atoms
            };
        });
        var nodes = ast.rules.map(function (rule) {
            var atoms = rule.atoms, ruleName = rule.ruleName;
            var subRuleNames = [];
            var tokenNames = [];
            ShellMetaGenerator_1.traverse(rule, MetaLexer_1.TokenEnum.LowerName, function (node) {
                subRuleNames.push(node.name);
            });
            ShellMetaGenerator_1.traverse(rule, MetaLexer_1.TokenEnum.UpperName, function (up) {
                var foundToken = tokens.find(function (t) { return t.name === up.name; });
                if (foundToken && !foundToken.ignorable) {
                    tokenNames.push(foundToken.name);
                }
            });
            return "\n      export class " + utils_1.toUCamelCase(ruleName) + "Node extends BaseNode {\n        " + tokenNames
                .map(function (name) {
                return name + ": string;";
            })
                .join('\n') + "\n\n        " + subRuleNames
                .map(function (name) {
                return name + ": " + utils_1.toUCamelCase(name) + "Node;";
            })
                .join('\n') + "\n      }\n    ";
        });
        var parserCode = "\n    import * as chevrotain from 'chevrotain';\n    import { tokens, Lexer, Tokens, TokenEnum } from './lexer.g';\n\n    export enum SyntaxKind {\n      " + rules
            .map(function (rule) {
            return rule.name + " = '" + rule.name + "'";
        })
            .join(',\n') + "\n    }\n\n    export {\n      tokens, Lexer, Tokens, TokenEnum\n    }\n\n    export class BaseNode {\n      private _source = '';\n    \n      kind: SyntaxKind | TokenEnum;\n      pos: number;\n      end: number;\n    \n      get width() {\n        return this.end - this.pos;\n      }\n    \n      get fullText() {\n        return this._source.slice(this.pos, this.end);\n      }\n    \n      get children(): BaseNode[] {\n        return [];\n      }\n    \n      forEach(callback: ((child: BaseNode) => any)) {\n        if (!this.children.length) {\n          return;\n        }\n    \n        this.children.forEach(callback);\n      }\n    }\n\n    export class Parser extends chevrotain.Parser {\n      [x: string]: any;\n      constructor(input) {\n        super(input, tokens, {\n          recoveryEnabled: true,\n          outputCst: true,\n          maxLookahead: 6\n        });\n        " + ast.toCode() + "\n        chevrotain.Parser.performSelfAnalysis(this);\n      }}\n  ";
        try {
            var beautifiedCode = prettier.format(parserCode, config.prettierConfig);
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/shell_parser_cst.g.json'), JSON.stringify(cst, null, 2));
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/shell_parser_ast.g.json'), JSON.stringify(ast, null, 2));
            fs.writeFileSync(path.join(__dirname, '../../../sql-parser/shell/parser.g.ts'), beautifiedCode);
        }
        catch (e) {
            console.error(e);
            debugger;
        }
    }
    function getTokens(lexerGCode) {
        var _a = ShellMetaGenerator_1.parseGCode(lexerGCode, false), ast = _a.ast, cst = _a.cst, lexErrors = _a.lexErrors, parseErrors = _a.parseErrors;
        var tokens = ast.rules.filter(function (rule) { return !rule.fragName; }).map(function (rule) {
            return {
                name: rule.tokenName,
                content: new RegExp(rule.pattern || rule.setPattern()),
                ignorable: rule.ignorable
            };
        });
        return tokens;
    }
    function metaGenerator(config) {
        if (config === void 0) { config = new MetaParserConfig(); }
        var lexerCode = fs.readFileSync(path.join(__dirname, config.lexerCodePath)).toString('utf8');
        var parserCode = fs.readFileSync(path.join(__dirname, config.parserCodePath)).toString('utf8');
        var tokens = getTokens(lexerCode);
        metaLexerGenerator(lexerCode, config);
        metaParserGenerator(parserCode, config, tokens);
    }
    metaGenerator();
});
//# sourceMappingURL=index.js.map