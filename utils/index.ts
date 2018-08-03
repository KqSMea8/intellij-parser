import { ErrorType, ErrorPrefix, ErrorToken, CommonStartToken } from './definations';
import { SyntaxKind, Tokens, TokenEnum } from '../sql-parser/parser.g';
import * as _ from 'lodash/lodash';

// ----------- private func ------ //、
/** 获取节点的叶子节点 */
const getLeafNode = (cst, global?) => {
  return getFilteredNode(cst, target => target.image, global);
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
          return [target];
        }
      }
    } else {
      return result;
    }
  }
}

// -------------- public func -------- //
/** 获取hover对象类型 */
const getClassification = (ast, pos) => {
  return getFilteredNode(ast.cst, target =>
    target.startColumn && target.startLine - 1 === pos.line && target.startColumn - 1 <= pos.character && target.image.length + target.startColumn - 1 >= pos.character)
}
/** 获取补全信息 */
const getCompleteInfo = (ast, pos) => {
  const errorMsg = [];
  ast.parseErrors.forEach(err => {
    const singleError = {
      previousToken: err.previousToken,
      completeType: []
    }
    // if(err.name === ErrorType.NoViableAltException) {
      // errorMsg[ErrorType.NoViableAltException] = [];
      const errorType = ErrorPrefix.filter(item => err.message.match(item.key))[0] || {} as any;
      if(errorType.type === ErrorToken.singleMissingToken) {
        singleError.completeType.push({
          errType: err.message.match(errorType.pattern)[1],
          ...err
        });
      } else if(errorType.type === ErrorToken.multiMissingToken) {
        (err.message.match(errorType.pattern) || []).forEach(item => {
          const content = item.slice(1, -1);
          if(Tokens[content]) {
            console.log(Tokens[content]);
          }
          singleError.completeType.push({
            errType: content,
            ...err
          });
        })
      } else if(errorType.type === ErrorToken.initMissingToken) {
        Object.keys(CommonStartToken).filter(item => item.indexOf(err.message.match(errorType.pattern)[1]) === 0).forEach(errType => {
          singleError.completeType.push({
            errType,
            ...err
          })
        })
      }

      errorMsg.push(singleError)
    // }
  })
  return errorMsg;
}

/** 获取字段和表名的map */
const getFieldsMap = (ast) => {
  return Object.values(ast.children).map(child => {
    const subSelectElement = {
      exportsFields: [],
      alias: '',
      table: 'SUBQUERY'
    };
    const singleSelect = getFilteredNode(child[0], target => target.name === SyntaxKind.querySpecification)[0];
    const fields = _.filter(getLeafNode(singleSelect.children[SyntaxKind.selectElements][0], true), o => o.tokenTypeIdx !== Tokens.COMMA.tokenTypeIdx);
    const tableName = getFilteredNode(singleSelect.children[SyntaxKind.fromClause][0], target => target.name === SyntaxKind.tableSourceItem);
    if(tableName[0].children[SyntaxKind.uid]) {
      subSelectElement.alias = getLeafNode(tableName[0].children[SyntaxKind.uid][0])[0].image
    }
    if(tableName[0].children[SyntaxKind.tableName]) {
      subSelectElement.table = getLeafNode(tableName[0].children[SyntaxKind.tableName][0])[0].image,
      subSelectElement.exportsFields = fields
    }
    if(tableName[0].children[SyntaxKind.selectStatement]) {
      getFieldsMap(tableName[0].children[SyntaxKind.selectStatement][0])
    }

    return subSelectElement
  })
}

// const peel = (cst) => {
//   return _.flatten(Object.values(cst.children).map(child => getFilteredNode(child[0], target => target.name === SyntaxKind.tableSources || SyntaxKind.selectElements))).map(tableSource => {
//     return _.flatten(tableSource.children[SyntaxKind.tableSource].map(src => {
//       const tableInfo = {
//         /** 子查询透出给父查询的字段 */
//         exportsFields: [],
//         /** 子查询中可以自动补全的字段 */
//         availableFields: [],
//         alias: '',
//         table: 'SUBQUERY'
//       };
  
//       const table = getFilteredNode(src, target => target.name === SyntaxKind.tableSourceItem)[0];
//       /** 获取别名 */
//       if(table.children[SyntaxKind.uid]) {
//         tableInfo.alias = getLeafNode(table.children[SyntaxKind.uid][0])[0].image
//       }
  
//       /** 获取表名，如果可以得到表名，export字段为表的全字段 */
//       if(table.children[SyntaxKind.tableName]) {
//         tableInfo.table = getLeafNode(table.children[SyntaxKind.tableName][0])[0].image,
//         tableInfo.availableFields = ['*']
//       }
  
//       if(table.children[SyntaxKind.selectStatement]) {
//         tableInfo.exportsFields = peel(table.children[SyntaxKind.selectStatement][0])
//         // selectElement.exportsFields.nestFields = getAliasMap({cst: item.children[SyntaxKind.selectStatement][0]})
//       }
  
//       return tableInfo;
//     }))
//   })
// }

const peel = (cst) => {
  const query = getFilteredNode(cst, target => target.name === SyntaxKind.querySpecification)[0];

  const exportsFields = _.flatten(getFilteredNode(query.children[SyntaxKind.selectElements][0], target => target.name === SyntaxKind.selectElements, true).map(fields => {
    return _.filter(getLeafNode(fields, true), o => o.tokenTypeIdx !== Tokens.COMMA.tokenTypeIdx)
  })).map(item => item.image);

  return query.children[SyntaxKind.fromClause] ? _.flatten(getFilteredNode(query.children[SyntaxKind.fromClause][0], target => target.name === SyntaxKind.tableSources)[0].children.tableSource.map(tableSource => {
    return getFilteredNode(tableSource, target => target.name === SyntaxKind.tableSourceItem)
  })).map(table => {
    const tableInfo = {
      /** 子查询透出给父查询的字段 */
      exportsFields,
      /** 子查询中可以自动补全的字段 */
      availableFields: [],
      alias: '',
      table: 'SUBQUERY'
    };

    /** 获取别名 */
    if(table.children[SyntaxKind.uid]) {
      tableInfo.alias = getLeafNode(table.children[SyntaxKind.uid][0])[0].image
    }

    /** 获取表名，如果可以得到表名，export字段为表的全字段 */
    if(table.children[SyntaxKind.tableName]) {
      tableInfo.table = getLeafNode(table.children[SyntaxKind.tableName][0])[0].image,
      tableInfo.availableFields = ['*']
    }

    if(table.children[SyntaxKind.selectStatement]) {
      tableInfo.exportsFields = Object.values(table.children[SyntaxKind.selectStatement][0].children).map(child => peel(child[0]))   
    }

    return tableInfo;
  }) : []
}

/** 获取表，别名，字段映射 */
const getAliasMap = (ast) => {
  /** 获取顶层sql数组, 广度优先遍历场景下，查找父节点后获取子节点，性能更好 */
  const topSQl = getFilteredNode(ast.cst, target => target.name === SyntaxKind.sqlStatements)[0].children[SyntaxKind.sqlStatement];
  const topSelect = [];
  (topSQl || []).forEach(sql => {
    /** 查找顶层select语句，顶层select一定只有一条 */
    const isSelect = getFilteredNode(sql, target => target.name === SyntaxKind.querySpecification)[0];
    isSelect && topSelect.push(isSelect);
  })

  return topSelect.map(select => peel(select))
}

/** 获取表，别名，字段映射 */
// const getAliasMap = (ast) => {
//   const raw = getFilteredNode(ast.cst, target => target.name === SyntaxKind.tableSourceItem, true)
//   return raw.map(item => {
//     const selectElement = {
//       exportsFields: {
//         flattenFields: [],
//         nestFields: []
//       },
//       alias: '',
//       table: 'SUBQUERY'
//     };

//     /** 获取别名 */
//     if(item.children[SyntaxKind.uid]) {
//       selectElement.alias = getLeafNode(item.children[SyntaxKind.uid][0])[0].image
//     }

//     /** 获取表名，如果可以得到表名，export字段为表的全字段 */
//     if(item.children[SyntaxKind.tableName]) {
//       selectElement.table = getLeafNode(item.children[SyntaxKind.tableName][0])[0].image,
//       selectElement.exportsFields.flattenFields = ['*']
//     }

//     /** 如果表名位置为子查询，则表名设置为‘SUBQUERY’，在子查询里搜索透出字段 */

//     // getAliasMap({cst: item.children[SyntaxKind.selectStatement]})
//     if(item.children[SyntaxKind.selectStatement]) {
      
//       selectElement.exportsFields.flattenFields = _.flatten(getFilteredNode(item.children[SyntaxKind.selectStatement][0], target => target.name === SyntaxKind.selectElements, true).map(select => {
//         return _.filter(getLeafNode(select, true), o => o.tokenTypeIdx !== Tokens.COMMA.tokenTypeIdx)
//       })).map(item => item.image);



//       selectElement.exportsFields.nestFields = getFieldsMap(item.children[SyntaxKind.selectStatement][0])
//       // selectElement.exportsFields.nestFields = getAliasMap({cst: item.children[SyntaxKind.selectStatement][0]})
//     }

//           // selectElement.exportsFields = getFilteredNode(item.children[SyntaxKind.selectStatement][0], target => target.name === SyntaxKind.querySpecification, true).map(query => {
//       //   /** 透出字段需要记录所属的真实表名或者子查询信息 */
//       //   const fields = _.filter(getLeafNode(query.children[SyntaxKind.selectElements][0], true), o => o.tokenTypeIdx !== Tokens.COMMA.tokenTypeIdx).map(item => item.image);
//       //   const table = query.children[SyntaxKind.fromClause][0]
//       // })

//     return selectElement;
//   })
// }

/** 获取指定关键词之后相邻的信息 */
const getNextToken = (ast, token) => {
  const parent = getFilteredNode(ast.cst, target => target.children && target.children[token]);
  return parent && (Object as any).values(parent.children)[_.findIndex(Object.keys(parent.children), o => o === token) + 1];
}

/** 获取级联字段的完整路径 */
const getTotalPath = (ast, token) => {
  const columnRoot = getFilteredNode(ast.cst, target => target.name === SyntaxKind.fullColumnName, true);
  const targetColumn = _.find(columnRoot, o => getFilteredNode(o, target => target === token));
  return _.flatten(Object.values(targetColumn.children)).map(node => getLeafNode(node).image);
}

const getKeywords = () => {
  return TokenEnum;
}

export {
  getClassification,
  getCompleteInfo,
  getKeywords,
  getAliasMap,
  getNextToken,
  getTotalPath
}