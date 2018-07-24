import { ErrorType, ErrorPrefix, ErrorToken, CommonStartToken } from './definations';
import { Tokens, TokenEnum } from '../sql-parser/lexer.g';

// ----------- private func ------ //、
/** 获取节点的叶子节点 */
const getLeafNode = (ast) => {
  return getFilteredNode(ast, target => target.image);
}

/** 筛选符合条件的节点 */
const getFilteredNode = (ast, filter, global?: boolean) => {
  const queue = [ast.cst];
  const result = [];
  while(true) {
    let target = queue.shift();
    if(target) {
      queue.push(...(Object as any).values(target.children||[]).reduce((sum, item) => sum.concat(item), []))
      if(filter(target)) {
        if(global) {
          result.push(target);
        } else {
          return target;
        }
      }
    } else {
      return result;
    }
  }
}
/** 获取hover对象类型 */
const getClassification = (ast, pos) => {
  getFilteredNode(ast, target => 
    target.startColumn && target.startLine - 1 === pos.line && target.startColumn - 1 <= pos.character && target.image.length + target.startColumn - 1 >= pos.character)
}
/** 获取补全信息 */
const getCompleteInfo = (ast, pos) => {
  const errorMsg = [];
  ast.parseErrors.forEach(err => {
    // if(err.name === ErrorType.NoViableAltException) {
      // errorMsg[ErrorType.NoViableAltException] = [];
      const errorType = ErrorPrefix.filter(item => err.message.match(item.key))[0] || {} as any;
      if(errorType.type === ErrorToken.singleMissingToken) {
        errorMsg.push(err.message.match(errorType.pattern)[1]);
      } else if(errorType.type === ErrorToken.multiMissingToken) {
        (err.message.match(errorType.pattern) || []).forEach(item => {
          const content = item.slice(1, -1);
          if(Tokens[content]) {
            console.log(Tokens[content]);
          }
          errorMsg.push(content);
        })
      } else if(errorType.type === ErrorToken.initMissingToken) {
        errorMsg.push(...Object.keys(CommonStartToken).filter(item => item.indexOf(err.message.match(errorType.pattern)[1]) === 0))
      }
    // }
  })
  return errorMsg;
}

/** 获取别名Map */
const getAliasMap = (ast) => {
  const raw = getFilteredNode(ast, target => target.children && Object.keys(target.children).find(item => item === TokenEnum.AS), true)
  getLeafNode(Object.values(raw.children)[2])
  console.log(raw);
}

const getKeywords = () => {
  return TokenEnum;
}

export {
  getClassification,
  getCompleteInfo,
  getKeywords,
  getAliasMap
}