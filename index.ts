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

import { parseMysql as ODPSParseMysql, getAvailableTokens as ODPSGetAvailableTokens } from './sql-parser/ODPS/index';
import { parseMysql as HiveParseMysql, getAvailableTokens as HiveGetAvailableTokens} from './sql-parser/Hive/index';
import * as utils from './utils/index';

const ODPS = {
  getAvailableTokens: ODPSGetAvailableTokens,
  parseMysql: ODPSParseMysql,
  utils,
}

const Hive = {
  getAvailableTokens: HiveGetAvailableTokens,
  parseMysql: HiveParseMysql,
  utils
}

export {
  ODPS,
  Hive
}
