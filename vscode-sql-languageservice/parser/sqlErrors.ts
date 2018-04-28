/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nodes from './sqlNodes';

import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

export class SQLIssueType implements nodes.IRule {
  id: string;
  message: string;

  public constructor(id: string, message: string) {
    this.id = id;
    this.message = message;
  }
}

export let ParseError = {
  NumberExpected: new SQLIssueType('css-numberexpected', localize('expected.number', 'number expected')),
  ConditionExpected: new SQLIssueType('css-conditionexpected', localize('expected.condt', 'condition expected')),
  RuleOrSelectorExpected: new SQLIssueType(
    'css-ruleorselectorexpected',
    localize('expected.ruleorselector', 'at-rule or selector expected')
  ),
  DotExpected: new SQLIssueType('css-dotexpected', localize('expected.dot', 'dot expected')),
  ColonExpected: new SQLIssueType('css-colonexpected', localize('expected.colon', 'colon expected')),
  SemiColonExpected: new SQLIssueType('css-semicolonexpected', localize('expected.semicolon', 'semi-colon expected')),
  TermExpected: new SQLIssueType('css-termexpected', localize('expected.term', 'term expected')),
  ExpressionExpected: new SQLIssueType(
    'css-expressionexpected',
    localize('expected.expression', 'expression expected')
  ),
  OperatorExpected: new SQLIssueType('css-operatorexpected', localize('expected.operator', 'operator expected')),
  IdentifierExpected: new SQLIssueType('css-identifierexpected', localize('expected.ident', 'identifier expected')),
  PercentageExpected: new SQLIssueType(
    'css-percentageexpected',
    localize('expected.percentage', 'percentage expected')
  ),
  URIOrStringExpected: new SQLIssueType(
    'css-uriorstringexpected',
    localize('expected.uriorstring', 'uri or string expected')
  ),
  URIExpected: new SQLIssueType('css-uriexpected', localize('expected.uri', 'URI expected')),
  VariableNameExpected: new SQLIssueType('css-varnameexpected', localize('expected.varname', 'variable name expected')),
  VariableValueExpected: new SQLIssueType(
    'css-varvalueexpected',
    localize('expected.varvalue', 'variable value expected')
  ),
  PropertyValueExpected: new SQLIssueType(
    'css-propertyvalueexpected',
    localize('expected.propvalue', 'property value expected')
  ),
  LeftCurlyExpected: new SQLIssueType('css-lcurlyexpected', localize('expected.lcurly', '{ expected')),
  RightCurlyExpected: new SQLIssueType('css-rcurlyexpected', localize('expected.rcurly', '} expected')),
  LeftSquareBracketExpected: new SQLIssueType('css-rbracketexpected', localize('expected.lsquare', '[ expected')),
  RightSquareBracketExpected: new SQLIssueType('css-lbracketexpected', localize('expected.rsquare', '] expected')),
  LeftParenthesisExpected: new SQLIssueType('css-lparentexpected', localize('expected.lparen', '( expected')),
  RightParenthesisExpected: new SQLIssueType('css-rparentexpected', localize('expected.rparent', ') expected')),
  CommaExpected: new SQLIssueType('css-commaexpected', localize('expected.comma', 'comma expected')),
  PageDirectiveOrDeclarationExpected: new SQLIssueType(
    'css-pagedirordeclexpected',
    localize('expected.pagedirordecl', 'page directive or declaraton expected')
  ),
  UnknownAtRule: new SQLIssueType('css-unknownatrule', localize('unknown.atrule', 'at-rule unknown')),
  UnknownKeyword: new SQLIssueType('css-unknownkeyword', localize('unknown.keyword', 'unknown keyword')),
  SelectorExpected: new SQLIssueType('css-selectorexpected', localize('expected.selector', 'selector expected')),
  StringLiteralExpected: new SQLIssueType(
    'css-stringliteralexpected',
    localize('expected.stringliteral', 'string literal expected')
  ),
  WhitespaceExpected: new SQLIssueType(
    'css-whitespaceexpected',
    localize('expected.whitespace', 'whitespace expected')
  ),
  MediaQueryExpected: new SQLIssueType(
    'css-mediaqueryexpected',
    localize('expected.mediaquery', 'media query expected')
  )
};
