"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MetaLexer_1 = require("./MetaLexer");
const MetaParser_1 = require("./MetaParser");
var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind["alias"] = "alias";
    SyntaxKind["rules"] = "rules";
    SyntaxKind["rule"] = "rule";
    SyntaxKind["atoms"] = "atoms";
    SyntaxKind["atom"] = "atom";
    SyntaxKind["item"] = "item";
    SyntaxKind["itemCase"] = "itemCase";
    SyntaxKind["suff"] = "suff";
})(SyntaxKind = exports.SyntaxKind || (exports.SyntaxKind = {}));
var SuffEnum;
(function (SuffEnum) {
    SuffEnum["MANY"] = "*";
    SuffEnum["AT_LEAST_ONE"] = "+";
    SuffEnum["OPTION"] = "?";
})(SuffEnum || (SuffEnum = {}));
function cstToAst(cst) {
    const children = cst.children;
    switch (cst.name) {
        case SyntaxKind.rules: {
            const rulesNode = new RulesNode();
            rulesNode.rules = cst.children.rules.map(rule => {
                return cstToAst(rule);
            });
            return rulesNode;
        }
    }
}
exports.cstToAst = cstToAst;
class BaseNode {
    constructor() {
        this.children = [];
    }
    forEach(callback) {
        if (!this.children.length) {
            return;
        }
        this.children.forEach(callback);
    }
}
function traverse(ast, kind, callback) {
    if (ast.kind === kind) {
        callback(ast);
    }
    ast.forEach(child => {
        traverse(child, kind, callback);
    });
}
exports.traverse = traverse;
class RulesNode extends BaseNode {
    constructor() {
        super(...arguments);
        this.rules = [];
    }
    toCode() {
        return this.rules.map(rule => rule.toCode()).join("\n\n");
    }
}
exports.RulesNode = RulesNode;
class RuleNode extends BaseNode {
    toCode() {
        const orStrs = this.atoms.map(atom => {
            return `
        {
          ALT: () => {
            ${atom.toCode()}
          }
        }
      `;
        });
        let rule = "";
        if (this.atoms.length > 1) {
            rule = `OR([${orStrs.join(",")}]`;
        }
        else {
            rule = `() => {
        ${this.atoms[0].toCode()}
      }`;
        }
        return `
      this.RULE('${this.ruleName}', ${rule});
    `;
    }
}
exports.RuleNode = RuleNode;
class AtomNode extends BaseNode {
    toCode() {
        if (this.suff === SuffEnum.AT_LEAST_ONE) {
            return `
        this.AT_LEAST_ONE(() => {
          ${this.item.toCode()}
        });
      `;
        }
        else if (this.suff === SuffEnum.MANY) {
            return `
        this.MANY(() => {
          ${this.item.toCode()}
        });
      `;
        }
        else if (this.suff === SuffEnum.OPTION) {
            return `
        this.OPTION(() => {
          ${this.item.toCode()}
        });
      `;
        }
    }
}
exports.AtomNode = AtomNode;
class BracketExpNode extends BaseNode {
    toCode() { }
}
exports.BracketExpNode = BracketExpNode;
class StringliteralNode {
    toCode() {
        return `this.CONSUME${this.index === 0 ? "" : this.index + 1}(Tokens.${this.name});`;
    }
}
exports.StringliteralNode = StringliteralNode;
class LowerNameNode {
    toCode() {
        return `this.SUBRULE${this.index === 0 ? "" : this.index + 1}(Tokens.${name});`;
    }
}
exports.LowerNameNode = LowerNameNode;
class UpperNameNode {
    toCode() {
        return `this.CONSUME(Tokens${this.index === 0 ? "" : this.index + 1}.${name});`;
    }
}
exports.UpperNameNode = UpperNameNode;
function parseGCode(gCode) {
    const lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    const metaParser = new MetaParser_1.MetaParser([]);
    metaParser.input = lexResult.tokens;
    const ast = metaParser.rules();
    return {
        ast,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaGenerator.js.map