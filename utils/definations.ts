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
  }
]

export enum ErrorToken {
  'singleMissingToken' = 'singleMissingToken',
  'multiMissingToken' = 'multiMissingToken',
  'initMissingToken' = 'initMissingToken'
}

export enum CommonStartToken {
  'SELECT' = 'SELECT',
  'UPDATE' = 'UPDATE',
  'CREATE' = 'CREATE',
  'COUNT' = 'COUNT',
  'DROP' = 'DROP',
  'INSERT' = 'INSERT',
  'DELETE' = 'DELETE',
  'SUM' = 'SUM',
  'ALTER' = 'ALTER',
  'SHOW' = 'SHOW'
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

