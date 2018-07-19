export enum ErrorType {
  "NoViableAltException" = "NoViableAltException"
}


export const ErrorPrefix = [
  {
    type: 'singleMissingToken',
    key: 'Expecting token of type --> ',
    pattern: /Expecting token of type --> (.*) <-- but/
  },{
    type: 'multiMissingToken',
    key: 'Expecting: one of these possible Token sequences:',
    pattern: /\[.*?\]/g
  }
]

export enum ErrorToken {
  'singleMissingToken' = 'singleMissingToken',
  'multiMissingToken' = 'multiMissingToken'
}
  
