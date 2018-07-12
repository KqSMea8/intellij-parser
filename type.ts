namespace IntellijSqlEditor {
  enum SyntaxKind {}

  export interface Node {
    kind: SyntaxKind;
    pos: number;
    comments?: string;
    children: Node[];
  }

  export interface Token extends Node {
    text: string;
  }
}
