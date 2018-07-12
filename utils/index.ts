import * as _ from 'lodash';
/** ast解析方法 */
const getClassification = (cst, pos) => {
  const queue = [cst];
  while(true) {
    let target = queue.pop();
    if(target) {
      const children = (Object as any).values(target.children||[]);
      queue.push(..._.flattenDeep(children));
      if(target.startOffset && target.startOffset <= pos && target.endOffset >= pos) {
        return target;
      }
    }
  }
}

export {
  getClassification
}