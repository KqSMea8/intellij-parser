"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MetaLexer_1 = require("./MetaLexer");
const _ = require("lodash");
const MetaParser_1 = require("./MetaParser");
var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind["alias"] = "alias";
    SyntaxKind["rules"] = "rules";
    SyntaxKind["rule"] = "rule";
    SyntaxKind["atoms"] = "atoms";
    SyntaxKind["atom"] = "atom";
    SyntaxKind["itemSuff"] = "itemSuff";
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
            rulesNode.kind = SyntaxKind.rules;
            rulesNode.rules = cst.children.rule.map(rule => {
                return cstToAst(rule);
            });
            return rulesNode;
        }
        case SyntaxKind.rule: {
            const ruleNode = new RuleNode();
            ruleNode.kind = SyntaxKind.rule;
            ruleNode.atoms = cst.children.atoms.map(atom => {
                return cstToAst(atom);
            });
            return ruleNode;
        }
        case SyntaxKind.atoms: {
            const atomNode = new AtomNode();
            atomNode.kind = SyntaxKind.atoms;
            atomNode.itemSuffs = cst.children.atom[0].children.itemSuff.map(itemSuff => {
                return cstToAst(itemSuff);
            });
            return atomNode;
        }
        case SyntaxKind.itemSuff: {
            const itemSuffNode = new ItemSuffNode();
            itemSuffNode.kind = SyntaxKind.itemSuff;
            if (_.get(cst, 'children.suff[0].children')) {
                const { Asterisk, Plus, Optional } = _.get(cst, 'children.suff[0].children');
                if (Asterisk) {
                    itemSuffNode.suff = SuffEnum.MANY;
                }
                else if (Plus) {
                    itemSuffNode.suff = SuffEnum.AT_LEAST_ONE;
                }
                else if (Optional) {
                    itemSuffNode.suff = SuffEnum.OPTION;
                }
            }
            itemSuffNode.item = cstToAst(cst.children.item[0]);
            return itemSuffNode;
        }
        case SyntaxKind.item: {
            const { LowerName, UpperName, LeftBracket, atoms, RightBracket, Stringliteral } = cst.children;
            let itemNode;
            if (LowerName) {
                itemNode = new LowerNameNode();
                itemNode.kind = SyntaxKind.item;
                itemNode.name = LowerName[0].image;
            }
            else if (UpperName) {
                itemNode = new UpperNameNode();
                itemNode.kind = SyntaxKind.item;
                itemNode.name = UpperName[0].image;
            }
            else if (Stringliteral) {
                itemNode = new StringliteralNode();
                itemNode.kind = SyntaxKind.item;
                itemNode.name = Stringliteral[0].name;
            }
            else if (LeftBracket && atoms && Stringliteral) {
                itemNode = new BracketExpNode();
                itemNode.kind = SyntaxKind.item;
                itemNode.atoms = atoms.map(atom => {
                    return cstToAst(atom);
                });
            }
            return itemNode;
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
        return this.rules.map(rule => rule.toCode()).join('\n\n');
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
        let rule = '';
        if (this.atoms.length > 1) {
            rule = `this.OR([${orStrs.join(',')}]`;
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
        return `this.AT_LEAST_ONE(() => {
      this.SUBRULE(${this.itemSuffs.map(itemSuff => itemSuff.toCode()).join(',')});
    });`;
    }
}
exports.AtomNode = AtomNode;
class ItemSuffNode extends BaseNode {
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
exports.ItemSuffNode = ItemSuffNode;
class BracketExpNode extends BaseNode {
    toCode() {
        return this.atoms.map(atom => atom.toCode()).join('\n\n');
    }
}
exports.BracketExpNode = BracketExpNode;
class StringliteralNode {
    toCode() {
        return `this.CONSUME${this.index === 0 ? '' : this.index + 1}(Tokens.${this.name});`;
    }
}
exports.StringliteralNode = StringliteralNode;
class LowerNameNode {
    toCode() {
        return `this.SUBRULE${this.index === 0 ? '' : this.index + 1}(Tokens.${name});`;
    }
}
exports.LowerNameNode = LowerNameNode;
class UpperNameNode {
    toCode() {
        return `this.CONSUME(Tokens${this.index === 0 ? '' : this.index + 1}.${name});`;
    }
}
exports.UpperNameNode = UpperNameNode;
function parseGCode(gCode) {
    const lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    const metaParser = new MetaParser_1.MetaParser([]);
    metaParser.input = lexResult.tokens;
    const cst = metaParser.rules();
    return {
        cst,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaGenerator.js.map