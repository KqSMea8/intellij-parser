import { ErrorType, ErrorPrefix, ErrorToken } from './definations';
import { Tokens, TokenEnum } from '../sql-parser/lexer.g';
/** ast解析方法 */
const getClassification = (ast, pos) => {
  const queue = [ast.cst];
  while(true) {
    let target = queue.shift();
    const { startColumn, startLine, image } = target;
    if(target) {
      queue.push(...(Object as any).values(target.children||[]).reduce((sum, item) => sum.concat(item), []))
      if(startColumn && startLine - 1 === pos.line && startColumn - 1 <= pos.character && image.length + startColumn - 1 >= pos.character) {
        return target;
      }
    }
  }
}

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
      }
    // }
  })
  return errorMsg;
}

const getKeywords = () => {
  return TokenEnum;
}

export {
  getClassification,
  getCompleteInfo,
  getKeywords
}