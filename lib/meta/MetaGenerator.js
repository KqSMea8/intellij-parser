"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MetaLexer_1 = require("./MetaLexer");
var _ = require("lodash");
var MetaParser_1 = require("./MetaParser");
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
    SyntaxKind["bracketExp"] = "bracketExp";
})(SyntaxKind = exports.SyntaxKind || (exports.SyntaxKind = {}));
var SuffEnum;
(function (SuffEnum) {
    SuffEnum["MANY"] = "*";
    SuffEnum["AT_LEAST_ONE"] = "+";
    SuffEnum["OPTION"] = "?";
})(SuffEnum || (SuffEnum = {}));
function cstToAst(cst) {
    var children = cst.children;
    switch (cst.name) {
        case SyntaxKind.rules: {
            var rulesNode = new RulesNode();
            rulesNode.rules = cst.children.rule.map(function (rule) {
                return cstToAst(rule);
            });
            return rulesNode;
        }
        case SyntaxKind.rule: {
            var ruleNode = new RuleNode();
            var _a = cst.children, LowerName = _a.LowerName, UpperName = _a.UpperName, Fragment = _a.Fragment;
            var atomsCst = cst.children.atoms[0];
            if (LowerName) {
                ruleNode.ruleName = LowerName[0].image;
            }
            else if (UpperName && Fragment) {
                ruleNode.fragName = UpperName[0].image;
            }
            else if (UpperName) {
                ruleNode.tokenName = UpperName[0].image;
            }
            ruleNode.atoms = atomsCst.children.atom.map(function (atom) {
                return cstToAst(atom);
            });
            return ruleNode;
        }
        case SyntaxKind.atom: {
            var atomNode = new AtomNode();
            atomNode.itemSuffs = cst.children.itemSuff.map(function (itemSuff) {
                return cstToAst(itemSuff);
            });
            return atomNode;
        }
        case SyntaxKind.itemSuff: {
            var itemSuffNode = new ItemSuffNode();
            if (cst.children.Not) {
                itemSuffNode.hasNot = true;
            }
            if (_.get(cst, 'children.suff[0].children')) {
                var _b = _.get(cst, 'children.suff[0].children'), Asterisk = _b.Asterisk, Plus = _b.Plus, Optional = _b.Optional;
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
            if (!itemSuffNode.item) {
                debugger;
            }
            return itemSuffNode;
        }
        case SyntaxKind.item: {
            var _c = cst.children, LowerName = _c.LowerName, UpperName = _c.UpperName, LeftBracket = _c.LeftBracket, atoms = _c.atoms, RightBracket = _c.RightBracket, Stringliteral = _c.Stringliteral, ReExp = _c.ReExp, All = _c.All, alias = _c.alias;
            if (alias) {
                return cstToAst(alias[0].children.item[0]);
            }
            else if (LowerName) {
                var itemNode = new LowerNameNode();
                itemNode.name = LowerName[0].image;
                return itemNode;
            }
            else if (UpperName) {
                var itemNode = new UpperNameNode();
                itemNode.name = UpperName[0].image;
                return itemNode;
            }
            else if (Stringliteral) {
                var itemNode = new StringliteralNode();
                itemNode.content = Stringliteral[0].image;
                return itemNode;
            }
            else if (LeftBracket && atoms && RightBracket) {
                var itemNode = new BracketExpNode();
                var atomsCst = cst.children.atoms[0];
                itemNode.atoms = atomsCst.children.atom.map(function (atom) {
                    return cstToAst(atom);
                });
                return itemNode;
            }
            else if (ReExp) {
                var itemNode = new RegExpNode();
                itemNode.content = ReExp[0].image;
                return itemNode;
            }
            else if (All) {
                return new AllNode();
            }
            else {
                debugger;
            }
        }
    }
}
exports.cstToAst = cstToAst;
function getPatternByUpName(ast, upName) {
    var rule = ast.rules.find(function (rule) { return rule.tokenName === upName || rule.fragName === upName; });
    if (!rule.pattern) {
        rule.setPattern();
    }
    return rule.pattern;
}
var BaseNode = (function () {
    function BaseNode() {
        this.index = 0;
    }
    Object.defineProperty(BaseNode.prototype, "children", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.toDebugLexerCode = function () {
        var code = this.toLexerCode();
        if (code === undefined) {
            debugger;
        }
        return code;
    };
    Object.defineProperty(BaseNode.prototype, "tokenizers", {
        get: function () {
            var tokenizers = [];
            this.forEach(function (child) {
                if (!child.children || !child.children.length) {
                    tokenizers.push(child);
                }
                else {
                    tokenizers.push.apply(tokenizers, child.tokenizers);
                }
            });
            return tokenizers;
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.toCode = function () {
        return '';
    };
    BaseNode.prototype.toLexerCode = function () {
        return '';
    };
    Object.defineProperty(BaseNode.prototype, "indexStr", {
        get: function () {
            return this.index === 0 ? '' : this.index + 1;
        },
        enumerable: true,
        configurable: true
    });
    BaseNode.prototype.forEach = function (callback) {
        if (!this.children.length) {
            return;
        }
        this.children.forEach(callback);
    };
    return BaseNode;
}());
function traverse(ast, kind, callback) {
    if (ast.kind === kind) {
        callback(ast);
    }
    ast.forEach(function (child) {
        traverse(child, kind, callback);
    });
}
exports.traverse = traverse;
function quickSort(arr, sortCallback, result) {
    if (result === void 0) { result = []; }
    if (!arr.length) {
        return result;
    }
    var instance = arr[0], rest = arr.slice(1);
    var preItems = quickSort(rest.filter(function (item) { return !sortCallback(item, instance); }), sortCallback);
    var nextItems = quickSort(rest.filter(function (item) { return sortCallback(item, instance); }), sortCallback);
    return preItems.concat([instance], nextItems);
}
function noMeta(pattern) {
    var metaChs = ['.', '\\', '[', ']', '|', '^', '$', '(', ')', '?', '*', '+', '{'];
    return pattern.split('').every(function (ch) { return !metaChs.includes(ch); });
}
var RulesNode = (function (_super) {
    __extends(RulesNode, _super);
    function RulesNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = SyntaxKind.rules;
        _this.rules = [];
        return _this;
    }
    RulesNode.prototype.sortRules = function () {
        this.rules.forEach(function (rule) { return rule.setPattern(); });
        this.rules = quickSort(this.rules, function (inst, curr) {
            if (noMeta(curr.pattern) && curr.pattern.match(RegExp(inst.pattern))) {
                return true;
            }
            return false;
        });
    };
    Object.defineProperty(RulesNode.prototype, "children", {
        get: function () {
            return this.rules;
        },
        enumerable: true,
        configurable: true
    });
    RulesNode.prototype.toLexerCode = function () {
        return this.rules
            .filter(function (rule) { return !rule.fragName; })
            .map(function (rule) { return rule.toDebugLexerCode(); })
            .join('\n');
    };
    RulesNode.prototype.toCode = function () {
        return this.rules.map(function (rule) { return rule.toCode(); }).join('\n');
    };
    return RulesNode;
}(BaseNode));
exports.RulesNode = RulesNode;
var RuleNode = (function (_super) {
    __extends(RuleNode, _super);
    function RuleNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = SyntaxKind.rule;
        return _this;
    }
    Object.defineProperty(RuleNode.prototype, "children", {
        get: function () {
            return this.atoms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleNode.prototype, "ignorable", {
        get: function () {
            if (this.tokenizers && this.tokenizers[0] && this.tokenizers[0].content === this.pattern) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    RuleNode.prototype.setPattern = function () {
        if (this.atoms.length > 1) {
            this.pattern = '(' + this.atoms.map(function (atom) { return atom.toDebugLexerCode(); }).join('|') + ')';
        }
        else {
            this.pattern = this.atoms[0].toDebugLexerCode();
        }
        return this.pattern;
    };
    RuleNode.prototype.toLexerCode = function () {
        return "const " + this.tokenName + " = chevrotain.createToken({\n        name: '" + this.tokenName + "',\n        pattern: /" + this.pattern + "/,\n      });";
    };
    RuleNode.prototype.toCode = function () {
        var orStrs = this.atoms.map(function (atom) {
            return "\n        {\n          ALT: () => {\n            " + atom.toCode() + "\n          }\n        }\n      ";
        });
        var rule = '';
        if (this.atoms.length > 1) {
            rule = "() => {\n        this.OR([" + orStrs.join(',') + "]);\n      }";
        }
        else {
            rule = "() => {\n        " + this.atoms[0].toCode() + "\n      }";
        }
        return "\n      this.RULE('" + this.ruleName + "', " + rule + ");\n    ";
    };
    return RuleNode;
}(BaseNode));
exports.RuleNode = RuleNode;
var AtomNode = (function (_super) {
    __extends(AtomNode, _super);
    function AtomNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = SyntaxKind.atom;
        return _this;
    }
    Object.defineProperty(AtomNode.prototype, "children", {
        get: function () {
            return this.itemSuffs;
        },
        enumerable: true,
        configurable: true
    });
    AtomNode.prototype.toLexerCode = function () {
        return this.itemSuffs.map(function (itemSuff) { return itemSuff.toDebugLexerCode(); }).join('');
    };
    AtomNode.prototype.toCode = function () {
        return this.itemSuffs.map(function (itemSuff) { return itemSuff.toCode(); }).join('\n');
    };
    return AtomNode;
}(BaseNode));
exports.AtomNode = AtomNode;
var ItemSuffNode = (function (_super) {
    __extends(ItemSuffNode, _super);
    function ItemSuffNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.kind = SyntaxKind.itemSuff;
        _this.hasNot = false;
        return _this;
    }
    Object.defineProperty(ItemSuffNode.prototype, "children", {
        get: function () {
            return [this.item];
        },
        enumerable: true,
        configurable: true
    });
    ItemSuffNode.prototype.toLexerCode = function () {
        var itemLexer = this.item.toDebugLexerCode();
        if (this.hasNot) {
            return "[^" + itemLexer + "]" + (this.suff || '');
        }
        return "" + itemLexer + (this.suff || '');
    };
    ItemSuffNode.prototype.toCode = function () {
        if (this.suff === SuffEnum.AT_LEAST_ONE) {
            return "\n        this.AT_LEAST_ONE" + this.indexStr + "(() => {\n          " + this.item.toCode() + "\n        });\n      ";
        }
        else if (this.suff === SuffEnum.MANY) {
            return "\n        this.MANY" + this.indexStr + "(() => {\n          " + this.item.toCode() + "\n        });\n      ";
        }
        else if (this.suff === SuffEnum.OPTION) {
            return "\n        this.OPTION" + this.indexStr + "(() => {\n          " + this.item.toCode() + "\n        });\n      ";
        }
        else {
            return this.item.toCode();
        }
    };
    return ItemSuffNode;
}(BaseNode));
exports.ItemSuffNode = ItemSuffNode;
var BracketExpNode = (function (_super) {
    __extends(BracketExpNode, _super);
    function BracketExpNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.kind = SyntaxKind.bracketExp;
        return _this;
    }
    Object.defineProperty(BracketExpNode.prototype, "children", {
        get: function () {
            return this.atoms;
        },
        enumerable: true,
        configurable: true
    });
    BracketExpNode.prototype.toLexerCode = function () {
        if (this.atoms.length) {
            return "(" + this.atoms.map(function (atom) { return atom.toDebugLexerCode(); }).join('|') + ")";
        }
        return this.atoms[0].toDebugLexerCode();
    };
    BracketExpNode.prototype.toCode = function () {
        var orStrs = this.atoms.map(function (atom) {
            return "\n        {\n          ALT: () => {\n            " + atom.toCode() + "\n          }\n        }\n      ";
        });
        if (this.atoms.length > 1) {
            return "this.OR" + this.indexStr + "([" + orStrs.join(',') + "])";
        }
        else {
            return "" + this.atoms[0].toCode();
        }
    };
    return BracketExpNode;
}(BaseNode));
exports.BracketExpNode = BracketExpNode;
var StringliteralNode = (function (_super) {
    __extends(StringliteralNode, _super);
    function StringliteralNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.kind = MetaLexer_1.TokenEnum.Stringliteral;
        return _this;
    }
    StringliteralNode.prototype.getTokens = function () {
        return [];
    };
    StringliteralNode.prototype.getLexer = function () {
        return;
    };
    StringliteralNode.prototype.toLexerCode = function () {
        var tokenText = this.content.match(/\'(.*)\'/)[1];
        if (tokenText.includes('\\')) {
            return tokenText;
        }
        else {
            return tokenText
                .split('')
                .map(function (ch) {
                if (!ch.match(/[a-zA-Z0-9_]/)) {
                    return "\\" + ch;
                }
                return ch;
            })
                .join('');
        }
    };
    StringliteralNode.prototype.toCode = function () {
        var name = this.content.match(/'(.+)'/)[1];
        if (!name.match(/[a-zA-Z]/)) {
            var foundToken = this.getTokens().find(function (token) { return !!name.match(token.content); });
            if (foundToken) {
                name = foundToken.name;
            }
            else {
                name = 'OP';
            }
        }
        return "this.CONSUME" + this.indexStr + "(Tokens." + name + ");";
    };
    return StringliteralNode;
}(BaseNode));
exports.StringliteralNode = StringliteralNode;
var RegExpNode = (function (_super) {
    __extends(RegExpNode, _super);
    function RegExpNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = MetaLexer_1.TokenEnum.ReExp;
        return _this;
    }
    RegExpNode.prototype.toLexerCode = function () {
        return this.content.replace(/\$/, '\\$');
    };
    return RegExpNode;
}(BaseNode));
exports.RegExpNode = RegExpNode;
var LowerNameNode = (function (_super) {
    __extends(LowerNameNode, _super);
    function LowerNameNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.kind = MetaLexer_1.TokenEnum.LowerName;
        return _this;
    }
    LowerNameNode.prototype.toCode = function () {
        return "this.SUBRULE" + this.indexStr + "(this." + this.name + ");";
    };
    return LowerNameNode;
}(BaseNode));
exports.LowerNameNode = LowerNameNode;
var UpperNameNode = (function (_super) {
    __extends(UpperNameNode, _super);
    function UpperNameNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.kind = MetaLexer_1.TokenEnum.UpperName;
        _this.getAst = function () {
            return undefined;
        };
        return _this;
    }
    UpperNameNode.prototype.toLexerCode = function () {
        return getPatternByUpName(this.getAst(), this.name);
    };
    UpperNameNode.prototype.toCode = function () {
        return "this.CONSUME" + this.indexStr + "(Tokens." + this.name + ");";
    };
    return UpperNameNode;
}(BaseNode));
exports.UpperNameNode = UpperNameNode;
var AllNode = (function (_super) {
    __extends(AllNode, _super);
    function AllNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = MetaLexer_1.TokenEnum.All;
        return _this;
    }
    AllNode.prototype.toCode = function () {
        return '.';
    };
    return AllNode;
}(BaseNode));
exports.AllNode = AllNode;
function parseGCode(gCode, isParser, tokens) {
    if (isParser === void 0) { isParser = true; }
    if (tokens === void 0) { tokens = []; }
    var lexResult = MetaLexer_1.Lexer.tokenize(gCode);
    var metaParser = new MetaParser_1.MetaParser([]);
    metaParser.input = lexResult.tokens;
    var cst = metaParser.rules();
    var ast = cstToAst(cst);
    if (isParser) {
        traverse(ast, SyntaxKind.rule, function (ruleNode) {
            {
                var optionIndex_1 = 0;
                var manyIndex_1 = 0;
                var atLeastOneIndex_1 = 0;
                traverse(ruleNode, SyntaxKind.itemSuff, function (node) {
                    if (node.suff === SuffEnum.AT_LEAST_ONE) {
                        node.index = atLeastOneIndex_1++;
                    }
                    else if (node.suff === SuffEnum.MANY) {
                        node.index = manyIndex_1++;
                    }
                    else if (node.suff === SuffEnum.OPTION) {
                        node.index = optionIndex_1++;
                    }
                });
            }
            {
                var orIndex_1 = 0;
                traverse(ruleNode, SyntaxKind.bracketExp, function (node) {
                    if (node.atoms.length > 1) {
                        node.index = ++orIndex_1;
                    }
                });
            }
            {
                var preRuleNames_1 = [];
                traverse(ruleNode, MetaLexer_1.TokenEnum.LowerName, function (node) {
                    node.index = preRuleNames_1.filter(function (name) { return name === node.name; }).length;
                    preRuleNames_1.push(node.name);
                });
            }
            {
                var uppers_1 = [];
                var strs_1 = [];
                traverse(ruleNode, MetaLexer_1.TokenEnum.UpperName, function (node) {
                    node.index = uppers_1.filter(function (upName) { return upName === node.name; }).length;
                    uppers_1.push(node.name);
                });
                traverse(ruleNode, MetaLexer_1.TokenEnum.Stringliteral, function (node) {
                    node.index = strs_1.filter(function (str) { return str === node.content; }).length;
                    node.getTokens = function () { return tokens; };
                    strs_1.push(node.content);
                });
            }
        });
    }
    else {
        traverse(ast, MetaLexer_1.TokenEnum.UpperName, function (node) {
            node.getAst = function () { return ast; };
        });
    }
    return {
        cst: cst,
        ast: ast,
        lexErrors: lexResult.errors,
        parseErrors: metaParser.errors
    };
}
exports.parseGCode = parseGCode;
//# sourceMappingURL=MetaGenerator.js.map