export enum ErrorType {
  "NoViableAltException" = "NoViableAltException"
}


export const ErrorPrefix = [
  {
    type: 'singleMissingToken',
    key: 'Expecting token of type --> ',
    pattern: /Expecting token of type --> (.*) <-- but/
  }, {
    type: 'multiMissingToken',
    key: 'Expecting: one of these possible Token sequences:',
    pattern: /\[.*?\]/g
  }, {
    type: 'initMissingToken',
    key: 'Redundant input, expecting EOF but found:',
    pattern: /Redundant input, expecting EOF but found: (.*)/
  }, {
    type: 'earlyExitException',
    key: 'Expecting: expecting at least one iteration which starts with one of these possible Token sequences::',
    pattern: /\[.*?\]/g
  }
]

export enum ErrorToken {
  'singleMissingToken' = 'singleMissingToken',
  'multiMissingToken' = 'multiMissingToken',
  'initMissingToken' = 'initMissingToken',
  'earlyExitException' = 'earlyExitException'
}

const SQL = [
  'SELECT',
  'UPDATE',
  'CREATE',
  'COUNT',
  'DROP',
  'INSERT',
  'DELETE',
  'SUM',
  'ALTER',
  'SHOW',
  'DESCRIBE',
  'DESC'
];

const Shell = [
  'FOR',
  'CASE',
  'SELECT',
  'WHILE',
  'UNTIL',
  'IF',
  'FUNCTION',
  'TOUCH',
  'CHMOD'
];

export const CommonStartToken = {
  ODPSSQL: SQL,
  HiveSQL: SQL,
  Shell
}

export enum Snippets {
  // snippet语法
  'sel' = 'sel',
  'cre' = 'cre'
}

export interface Pos {
  line: number,
  offset: number
}

