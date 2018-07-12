'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var languageFacts = require("./languageFacts");
var lintRules_1 = require("./lintRules");
var nodes = require("../parser/sqlNodes");
var nls = require("vscode-nls");
var localize = nls.loadMessageBundle();
var Element = (function () {
    function Element(text, data) {
        this.name = text;
        this.node = data;
    }
    return Element;
}());
var NodesByRootMap = (function () {
    function NodesByRootMap() {
        this.data = {};
    }
    NodesByRootMap.prototype.add = function (root, name, node) {
        var entry = this.data[root];
        if (!entry) {
            entry = { nodes: [], names: [] };
            this.data[root] = entry;
        }
        entry.names.push(name);
        if (node) {
            entry.nodes.push(node);
        }
    };
    return NodesByRootMap;
}());
var LintVisitor = (function () {
    function LintVisitor(document, settings) {
        this.warnings = [];
        this.settings = settings;
        this.documentText = document.getText();
        this.keyframes = new NodesByRootMap();
    }
    LintVisitor.entries = function (node, document, settings, entryFilter) {
        var visitor = new LintVisitor(document, settings);
        node.acceptVisitor(visitor);
        visitor.completeValidations();
        return visitor.getEntries(entryFilter);
    };
    LintVisitor.prototype.fetch = function (input, s) {
        var elements = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var curr = input_1[_i];
            if (curr.name === s) {
                elements.push(curr);
            }
        }
        return elements;
    };
    LintVisitor.prototype.fetchWithValue = function (input, s, v) {
        var elements = [];
        for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
            var inputElement = input_2[_i];
            if (inputElement.name === s) {
                var expression = inputElement.node.getValue();
                if (expression && this.findValueInExpression(expression, v)) {
                    elements.push(inputElement);
                }
            }
        }
        return elements;
    };
    LintVisitor.prototype.findValueInExpression = function (expression, v) {
        var found = false;
        expression.accept(function (node) {
            if (node.type === nodes.NodeType.Identifier && node.getText() === v) {
                found = true;
            }
            return !found;
        });
        return found;
    };
    LintVisitor.prototype.getEntries = function (filter) {
        if (filter === void 0) { filter = (nodes.Level.Warning | nodes.Level.Error); }
        return this.warnings.filter(function (entry) {
            return (entry.getLevel() & filter) !== 0;
        });
    };
    LintVisitor.prototype.addEntry = function (node, rule, details) {
        var entry = new nodes.Marker(node, rule, this.settings.get(rule), details);
        this.warnings.push(entry);
    };
    LintVisitor.prototype.getMissingNames = function (expected, actual) {
        expected = expected.slice(0);
        for (var i = 0; i < actual.length; i++) {
            var k = expected.indexOf(actual[i]);
            if (k !== -1) {
                expected[k] = null;
            }
        }
        var result = null;
        for (var i = 0; i < expected.length; i++) {
            var curr = expected[i];
            if (curr) {
                if (result === null) {
                    result = localize('namelist.single', "'{0}'", curr);
                }
                else {
                    result = localize('namelist.concatenated', "{0}, '{1}'", result, curr);
                }
            }
        }
        return result;
    };
    LintVisitor.prototype.visitNode = function (node) {
        switch (node.type) {
            case nodes.NodeType.Keyframe:
                return this.visitKeyframe(node);
            case nodes.NodeType.FontFace:
                return this.visitFontFace(node);
            case nodes.NodeType.Ruleset:
                return this.visitRuleSet(node);
            case nodes.NodeType.SimpleSelector:
                return this.visitSimpleSelector(node);
            case nodes.NodeType.Function:
                return this.visitFunction(node);
            case nodes.NodeType.NumericValue:
                return this.visitNumericValue(node);
            case nodes.NodeType.Import:
                return this.visitImport(node);
            case nodes.NodeType.HexColorValue:
                return this.visitHexColorValue(node);
            case nodes.NodeType.Prio:
                return this.visitPrio(node);
        }
        return true;
    };
    LintVisitor.prototype.completeValidations = function () {
        this.validateKeyframes();
    };
    LintVisitor.prototype.visitKeyframe = function (node) {
        var keyword = node.getKeyword();
        var text = keyword.getText();
        this.keyframes.add(node.getName(), text, (text !== '@keyframes') ? keyword : null);
        return true;
    };
    LintVisitor.prototype.validateKeyframes = function () {
        var expected = ['@-webkit-keyframes', '@-moz-keyframes', '@-o-keyframes'];
        for (var name_1 in this.keyframes.data) {
            var actual = this.keyframes.data[name_1].names;
            var needsStandard = (actual.indexOf('@keyframes') === -1);
            if (!needsStandard && actual.length === 1) {
                continue;
            }
            var missingVendorSpecific = this.getMissingNames(expected, actual);
            if (missingVendorSpecific || needsStandard) {
                for (var _i = 0, _a = this.keyframes.data[name_1].nodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (needsStandard) {
                        var message = localize('keyframes.standardrule.missing', "Always define standard rule '@keyframes' when defining keyframes.");
                        this.addEntry(node, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix, message);
                    }
                    if (missingVendorSpecific) {
                        var message = localize('keyframes.vendorspecific.missing', "Always include all vendor specific rules: Missing: {0}", missingVendorSpecific);
                        this.addEntry(node, lintRules_1.Rules.AllVendorPrefixes, message);
                    }
                }
            }
        }
        return true;
    };
    LintVisitor.prototype.visitSimpleSelector = function (node) {
        var firstChar = this.documentText.charAt(node.offset);
        if (node.length === 1 && firstChar === '*') {
            this.addEntry(node, lintRules_1.Rules.UniversalSelector);
        }
        if (firstChar === '#') {
            this.addEntry(node, lintRules_1.Rules.AvoidIdSelector);
        }
        return true;
    };
    LintVisitor.prototype.visitImport = function (node) {
        this.addEntry(node, lintRules_1.Rules.ImportStatemement);
        return true;
    };
    LintVisitor.prototype.visitRuleSet = function (node) {
        var declarations = node.getDeclarations();
        if (!declarations) {
            return false;
        }
        if (!declarations.hasChildren()) {
            this.addEntry(node.getSelectors(), lintRules_1.Rules.EmptyRuleSet);
        }
        var self = this;
        var propertyTable = [];
        for (var _i = 0, _a = declarations.getChildren(); _i < _a.length; _i++) {
            var element = _a[_i];
            if (element instanceof nodes.Declaration) {
                var decl = element;
                propertyTable.push(new Element(decl.getFullPropertyName().toLowerCase(), decl));
            }
        }
        if (this.fetch(propertyTable, 'box-sizing').length === 0) {
            var widthEntries = this.fetch(propertyTable, 'width');
            if (widthEntries.length > 0) {
                var problemDetected = false;
                for (var _b = 0, _c = ['border', 'border-left', 'border-right', 'padding', 'padding-left', 'padding-right']; _b < _c.length; _b++) {
                    var p = _c[_b];
                    var elements_1 = this.fetch(propertyTable, p);
                    for (var _d = 0, elements_2 = elements_1; _d < elements_2.length; _d++) {
                        var element = elements_2[_d];
                        var value = element.node.getValue();
                        if (value && !value.matches('none')) {
                            this.addEntry(element.node, lintRules_1.Rules.BewareOfBoxModelSize);
                            problemDetected = true;
                        }
                    }
                }
                if (problemDetected) {
                    for (var _e = 0, widthEntries_1 = widthEntries; _e < widthEntries_1.length; _e++) {
                        var widthEntry = widthEntries_1[_e];
                        this.addEntry(widthEntry.node, lintRules_1.Rules.BewareOfBoxModelSize);
                    }
                }
            }
            var heightEntries = this.fetch(propertyTable, 'height');
            if (heightEntries.length > 0) {
                var problemDetected = false;
                for (var _f = 0, _g = ['border', 'border-top', 'border-bottom', 'padding', 'padding-top', 'padding-bottom']; _f < _g.length; _f++) {
                    var p = _g[_f];
                    var elements_3 = this.fetch(propertyTable, p);
                    for (var _h = 0, elements_4 = elements_3; _h < elements_4.length; _h++) {
                        var element = elements_4[_h];
                        var value = element.node.getValue();
                        if (value && !value.matches('none')) {
                            this.addEntry(element.node, lintRules_1.Rules.BewareOfBoxModelSize);
                            problemDetected = true;
                        }
                    }
                }
                if (problemDetected) {
                    for (var _j = 0, heightEntries_1 = heightEntries; _j < heightEntries_1.length; _j++) {
                        var heightEntry = heightEntries_1[_j];
                        this.addEntry(heightEntry.node, lintRules_1.Rules.BewareOfBoxModelSize);
                    }
                }
            }
        }
        var displayElems = this.fetchWithValue(propertyTable, 'display', 'inline');
        if (displayElems.length > 0) {
            for (var _k = 0, _l = ['width', 'height', 'margin-top', 'margin-bottom', 'float']; _k < _l.length; _k++) {
                var prop = _l[_k];
                var elem = self.fetch(propertyTable, prop);
                for (var index = 0; index < elem.length; index++) {
                    var node_1 = elem[index].node;
                    var value = node_1.getValue();
                    if (prop === 'float' && (!value || value.matches('none'))) {
                        continue;
                    }
                    self.addEntry(node_1, lintRules_1.Rules.PropertyIgnoredDueToDisplay, localize('rule.propertyIgnoredDueToDisplayInline', "Property is ignored due to the display. With 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect."));
                }
            }
        }
        displayElems = this.fetchWithValue(propertyTable, 'display', 'inline-block');
        if (displayElems.length > 0) {
            var elem = this.fetch(propertyTable, 'float');
            for (var index = 0; index < elem.length; index++) {
                var node_2 = elem[index].node;
                var value = node_2.getValue();
                if (value && !value.matches('none')) {
                    this.addEntry(node_2, lintRules_1.Rules.PropertyIgnoredDueToDisplay, localize('rule.propertyIgnoredDueToDisplayInlineBlock', "inline-block is ignored due to the float. If 'float' has a value other than 'none', the box is floated and 'display' is treated as 'block'"));
                }
            }
        }
        displayElems = this.fetchWithValue(propertyTable, 'display', 'block');
        if (displayElems.length > 0) {
            var elem = this.fetch(propertyTable, 'vertical-align');
            for (var index = 0; index < elem.length; index++) {
                this.addEntry(elem[index].node, lintRules_1.Rules.PropertyIgnoredDueToDisplay, localize('rule.propertyIgnoredDueToDisplayBlock', "Property is ignored due to the display. With 'display: block', vertical-align should not be used."));
            }
        }
        var elements = this.fetch(propertyTable, 'float');
        for (var index = 0; index < elements.length; index++) {
            this.addEntry(elements[index].node, lintRules_1.Rules.AvoidFloat);
        }
        for (var i = 0; i < propertyTable.length; i++) {
            var element = propertyTable[i];
            if (element.name !== 'background') {
                var value = element.node.getValue();
                if (value && this.documentText.charAt(value.offset) !== '-') {
                    var elements_5 = this.fetch(propertyTable, element.name);
                    if (elements_5.length > 1) {
                        for (var k = 0; k < elements_5.length; k++) {
                            var value_1 = elements_5[k].node.getValue();
                            if (value_1 && this.documentText.charAt(value_1.offset) !== '-' && elements_5[k] !== element) {
                                this.addEntry(element.node, lintRules_1.Rules.DuplicateDeclarations);
                            }
                        }
                    }
                }
            }
        }
        var propertiesBySuffix = new NodesByRootMap();
        var containsUnknowns = false;
        for (var _m = 0, _o = declarations.getChildren(); _m < _o.length; _m++) {
            var node_3 = _o[_m];
            if (this.isCSSDeclaration(node_3)) {
                var decl = node_3;
                var name_2 = decl.getFullPropertyName();
                var firstChar = name_2.charAt(0);
                if (firstChar === '-') {
                    if (name_2.charAt(1) !== '-') {
                        if (!languageFacts.isKnownProperty(name_2)) {
                            this.addEntry(decl.getProperty(), lintRules_1.Rules.UnknownVendorSpecificProperty);
                        }
                        var nonPrefixedName = decl.getNonPrefixedPropertyName();
                        propertiesBySuffix.add(nonPrefixedName, name_2, decl.getProperty());
                    }
                }
                else {
                    if (firstChar === '*' || firstChar === '_') {
                        this.addEntry(decl.getProperty(), lintRules_1.Rules.IEStarHack);
                        name_2 = name_2.substr(1);
                    }
                    if (!languageFacts.isKnownProperty(name_2)) {
                        this.addEntry(decl.getProperty(), lintRules_1.Rules.UnknownProperty, localize('property.unknownproperty.detailed', "Unknown property: '{0}'", name_2));
                    }
                    propertiesBySuffix.add(name_2, name_2, null);
                }
            }
            else {
                containsUnknowns = true;
            }
        }
        if (!containsUnknowns) {
            for (var suffix in propertiesBySuffix.data) {
                var entry = propertiesBySuffix.data[suffix];
                var actual = entry.names;
                var needsStandard = languageFacts.isKnownProperty(suffix) && (actual.indexOf(suffix) === -1);
                if (!needsStandard && actual.length === 1) {
                    continue;
                }
                var expected = [];
                for (var i = 0, len = LintVisitor.prefixes.length; i < len; i++) {
                    var prefix = LintVisitor.prefixes[i];
                    if (languageFacts.isKnownProperty(prefix + suffix)) {
                        expected.push(prefix + suffix);
                    }
                }
                var missingVendorSpecific = this.getMissingNames(expected, actual);
                if (missingVendorSpecific || needsStandard) {
                    for (var _p = 0, _q = entry.nodes; _p < _q.length; _p++) {
                        var node_4 = _q[_p];
                        if (needsStandard) {
                            var message = localize('property.standard.missing', "Also define the standard property '{0}' for compatibility", suffix);
                            this.addEntry(node_4, lintRules_1.Rules.IncludeStandardPropertyWhenUsingVendorPrefix, message);
                        }
                        if (missingVendorSpecific) {
                            var message = localize('property.vendorspecific.missing', "Always include all vendor specific properties: Missing: {0}", missingVendorSpecific);
                            this.addEntry(node_4, lintRules_1.Rules.AllVendorPrefixes, message);
                        }
                    }
                }
            }
        }
        return true;
    };
    LintVisitor.prototype.visitPrio = function (node) {
        this.addEntry(node, lintRules_1.Rules.AvoidImportant);
        return true;
    };
    LintVisitor.prototype.visitNumericValue = function (node) {
        var value = node.getValue();
        if (!value.unit || languageFacts.units.length.indexOf(value.unit.toLowerCase()) === -1) {
            return true;
        }
        if (parseFloat(value.value) === 0.0 && !!value.unit) {
            this.addEntry(node, lintRules_1.Rules.ZeroWithUnit);
        }
        return true;
    };
    LintVisitor.prototype.visitFontFace = function (node) {
        var declarations = node.getDeclarations();
        if (!declarations) {
            return;
        }
        var definesSrc = false, definesFontFamily = false;
        var containsUnknowns = false;
        for (var _i = 0, _a = declarations.getChildren(); _i < _a.length; _i++) {
            var node_5 = _a[_i];
            if (this.isCSSDeclaration(node_5)) {
                var name_3 = (node_5.getProperty().getName().toLowerCase());
                if (name_3 === 'src') {
                    definesSrc = true;
                }
                if (name_3 === 'font-family') {
                    definesFontFamily = true;
                }
            }
            else {
                containsUnknowns = true;
            }
        }
        if (!containsUnknowns && (!definesSrc || !definesFontFamily)) {
            this.addEntry(node, lintRules_1.Rules.RequiredPropertiesForFontFace);
        }
        return true;
    };
    LintVisitor.prototype.isCSSDeclaration = function (node) {
        if (node instanceof nodes.Declaration) {
            if (!node.getValue()) {
                return false;
            }
            var property = node.getProperty();
            if (!property || property.getIdentifier().containsInterpolation()) {
                return false;
            }
            return true;
        }
        return false;
    };
    LintVisitor.prototype.visitHexColorValue = function (node) {
        var length = node.length;
        if (length !== 9 && length !== 7 && length !== 5 && length !== 4) {
            this.addEntry(node, lintRules_1.Rules.HexColorLength);
        }
        return false;
    };
    LintVisitor.prototype.visitFunction = function (node) {
        var fnName = node.getName().toLowerCase();
        var expectedAttrCount = -1;
        var actualAttrCount = 0;
        switch (fnName) {
            case 'rgb(':
            case 'hsl(':
                expectedAttrCount = 3;
                break;
            case 'rgba(':
            case 'hsla(':
                expectedAttrCount = 4;
                break;
        }
        if (expectedAttrCount !== -1) {
            node.getArguments().accept(function (n) {
                if (n instanceof nodes.BinaryExpression) {
                    actualAttrCount += 1;
                    return false;
                }
                return true;
            });
            if (actualAttrCount !== expectedAttrCount) {
                this.addEntry(node, lintRules_1.Rules.ArgsInColorFunction);
            }
        }
        return true;
    };
    LintVisitor.prefixes = [
        '-ms-', '-moz-', '-o-', '-webkit-',
    ];
    return LintVisitor;
}());
exports.LintVisitor = LintVisitor;
//# sourceMappingURL=lint.js.map