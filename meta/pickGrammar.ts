/** 工具方法：从产生式中抽取完整语法子句 */
import * as fs from 'fs-extra';
import * as path from 'path';
import * as _ from 'lodash';

const grammarFile = fs.readFileSync(path.join(__dirname, '../../grammars/MySqlParser.g4'));
const generatedFile = fs.readFileSync(path.join(__dirname, '../../grammars/SelectParser.g4'));

const grammarFileArr = grammarFile
  .toString()
  .replace(/\n/g, '')
  .replace(/\t/g, '')
  .replace(/#\s\w+/g, '')
  .split(';');
const generatedFileArr = generatedFile
  .toString()
  .replace(/\n/g, '')
  .replace(/\t/g, '')
  .replace(/#\s\w+/g, '')
  .split(';');

const grammarFileObj = {} as any;
grammarFileArr.map(item => (grammarFileObj[item.split(':')[0]] = item.split(':')[1]));
const generatedFileObj = {} as any;
generatedFileArr.map(item => (generatedFileObj[item.split(':')[0]] = item.split(':')[1]));

const readRule = {};
let outputRules = '';
function findRule(ruleName) {
  if (grammarFileObj[ruleName] && !readRule[ruleName] && !generatedFileObj[ruleName]) {
    outputRules += `${ruleName}: ${grammarFileObj[ruleName]};\n\n`;
    readRule[ruleName] = true;
  } else {
    return;
  }
  const subRules = _.uniq(grammarFileObj[ruleName].match(/\w+/g));
  subRules.map(subRule => findRule(subRule));
}

findRule('alterTable');

fs.writeFileSync(path.join(__dirname, '../../grammars/pickParser.g4'), outputRules);
