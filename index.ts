namespace IntellijSqlEditor {
  enum SyntaxKind { }

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

import { parseMysql as ODPSParseMysql, getAvailableTokens as ODPSGetAvailableTokens } from './sql-parser/ODPS';
import { parseMysql as HiveParseMysql, getAvailableTokens as HiveGetAvailableTokens} from './sql-parser/Hive';
import * as utils from './utils/index';

const ODPS = {
  getAvailableTokens: ODPSGetAvailableTokens,
  parseMysql: ODPSParseMysql
}

const Hive = {
  getAvailableTokens: HiveGetAvailableTokens,
  parseMysql: HiveParseMysql
}

export {
  utils,
  ODPS,
  Hive
}
