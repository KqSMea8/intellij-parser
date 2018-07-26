import { ErrorType, ErrorPrefix, ErrorToken, CommonStartToken } from './definations';
import { Tokens, TokenEnum } from '../sql-parser/lexer.g';

// ----------- private func ------ //、
/** 获取节点的叶子节点 */
const getLeafNode = (cst) => {
  return getFilteredNode(cst, target => target.image);
}

/** 筛选符合条件的节点 */
const getFilteredNode = (cst, filter, global?: boolean): any | any[] => {
  const queue = [cst];
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
  return getFilteredNode(ast.cst, target =>
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
        errorMsg.push({
          errType: err.message.match(errorType.pattern)[1],
          ...err
        });
      } else if(errorType.type === ErrorToken.multiMissingToken) {
        (err.message.match(errorType.pattern) || []).forEach(item => {
          const content = item.slice(1, -1);
          if(Tokens[content]) {
            console.log(Tokens[content]);
          }
          errorMsg.push({
            errType: content,
            ...err
          });
        })
      } else if(errorType.type === ErrorToken.initMissingToken) {
        Object.keys(CommonStartToken).filter(item => item.indexOf(err.message.match(errorType.pattern)[1]) === 0).forEach(errType => {
          errorMsg.push({
            errType,
            ...err
          })
        })
      }
    // }
  })
  return errorMsg;
}

/** 获取别名Map */
const getAliasMap = (ast) => {
  const raw = getFilteredNode(ast.cst, target => target.children && (Object.keys(target.children) as any).find(item => item === TokenEnum.AS), true)
  return raw.map(item => {
    const singleMap = [];
    (Object as any).entries(item.children).forEach(([key, value]) => {
      if(key !== TokenEnum.AS) {
        singleMap.push(getLeafNode(value[0]));
      }
    })
    return singleMap;
  })
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