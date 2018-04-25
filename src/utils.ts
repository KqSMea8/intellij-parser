export function walker(node, pos) {
  if(node.children) {
    const values = Object.values(node.children);
    for(let i=0; i<values.length; i++) {
      const result = walker(values[i], pos);
      if(result) {
        return result;
      }
    }
  }

  if(node.startOffset < pos && node.endOffset > pos) {
    return node
  }
    
  return null;
}

/** 防抖动 */
export function absorbing(count, cb) {
  const data = cb();
  return {
    data,
    count
  }
}