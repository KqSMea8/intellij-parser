/**
 * 解析 ast 节点
 * @param ast 要被解析的ast
 * @param walker 解析函数
 * @example walker(ast, node => {
 *   switch (node.kind) {
 *      case SyntaxKind.SelectNode {
 *      }
 *   }
 * });
 */
export function walker(ast: IntellijSqlEditor.Node, walker) {
  walker(ast);

  (ast.children || []).forEach(child => {
    walker(child, walker);
  });
}
