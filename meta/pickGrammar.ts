import * as fs from 'fs-extra';
import * as path from 'path';
import * as _ from 'lodash';

const grammarFile = fs.readFileSync(path.join(__dirname, '../../grammars/MySqlParser.g4'));

const grammarFileArr = grammarFile
  .toString()
  .replace(/\n/g, '')
  .replace(/\t/g, '')
  .replace(/#\s\w+/g, '')
  .split(';');

const grammarFileObj = {} as any;
grammarFileArr.map(item => (grammarFileObj[item.split(':')[0]] = item.split(':')[1]));

const readRule = {};
let outputRules = '';
function findRule(ruleName) {
  if (grammarFileObj[ruleName] && !readRule[ruleName]) {
    outputRules += `${ruleName}: ${grammarFileObj[ruleName]};\n\n`;
    readRule[ruleName] = true;
  } else {
    return;
  }
  const subRules = _.uniq(grammarFileObj[ruleName].match(/\w+/g));
  subRules.map(subRule => findRule(subRule));
}

findRule('selectStatement');

fs.writeFileSync(path.join(__dirname, '../../grammars/pickParser.g4'), outputRules);
