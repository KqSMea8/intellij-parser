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

import { parseMysql } from './sql-parser/index';
import * as utils from './utils/index';

export {
  utils,
  parseMysql
}
