import * as prettier from 'prettier';
import * as chevrotain from 'chevrotain';
import * as fs from 'fs-extra';
import * as path from 'path';

interface RULE_TYPE {
  name: string;
  children: {
    ruleName: any;
    Colon: any;
    atoms: any;
    Semi: any;
  };
}

interface AST_TYPE {
  name: string;
  children: {
    rule: RULE_TYPE[];
  };
}

function astToParser(ast: AST_TYPE, tokens) {
  const astRules = ast.children.rule.map(rule => ruleToParser(rule, tokens));
  return astRules.join(';\n');
}

function ruleToParser(rule: RULE_TYPE, tokens) {
  const ruleName = findLeafNode(rule.children.ruleName[0]);
  const atoms = findLeafNode(rule.children.atoms[0]);
  const atomRules = atoms.map(atom => {
    if (tokens.indexOf(atom) > -1) {
      return `this.CONSUME(${atom})`;
    } else {
      return `this.SUBRULE(this.${atom})`;
    }
  });
  return `this.RULE("${ruleName[0]}", () => {
    ${atomRules.join(';\n')}
  })`;
}

function findLeafNode(node, leafNode = []) {
  if (!node.children) {
    leafNode.push(node.image);
  } else {
    const children = node.children;
    Object.keys(children).map(key => {
      children[key].map(item => findLeafNode(item, leafNode));
    });
  }
  return leafNode;
}
