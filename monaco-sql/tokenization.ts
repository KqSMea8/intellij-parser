/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as sql from '../meta/parser.g';

export function createTokenizationSupport(supportComments: boolean): monaco.languages.TokensProvider {
  return {
    getInitialState: () => new SQLState(null, null, false),
    tokenize: (line, state, offsetDelta?, stopAtOffset?) =>
      tokenize(supportComments, line, <SQLState>state, offsetDelta, stopAtOffset)
  };
}

export const TOKEN_DELIM_OBJECT = 'delimiter.bracket.json';
export const TOKEN_DELIM_ARRAY = 'delimiter.array.json';
export const TOKEN_DELIM_COLON = 'delimiter.colon.json';
export const TOKEN_DELIM_COMMA = 'delimiter.comma.json';
export const TOKEN_VALUE_BOOLEAN = 'keyword.json';
export const TOKEN_VALUE_NULL = 'keyword.json';
export const TOKEN_VALUE_STRING = 'string.value.json';
export const TOKEN_VALUE_NUMBER = 'number.json';
export const TOKEN_PROPERTY_NAME = 'string.key.json';
export const TOKEN_COMMENT_BLOCK = 'comment.block.json';
export const TOKEN_COMMENT_LINE = 'comment.line.json';

class SQLState implements monaco.languages.IState {
  private _state: monaco.languages.IState;

  public scanError: sql.ScanError;
  public lastWasColon: boolean;

  constructor(state: monaco.languages.IState, scanError: sql.ScanError, lastWasColon: boolean) {
    this._state = state;
    this.scanError = scanError;
    this.lastWasColon = lastWasColon;
  }

  public clone(): SQLState {
    return new SQLState(this._state, this.scanError, this.lastWasColon);
  }

  public equals(other: monaco.languages.IState): boolean {
    if (other === this) {
      return true;
    }
    if (!other || !(other instanceof SQLState)) {
      return false;
    }
    return this.scanError === (<SQLState>other).scanError && this.lastWasColon === (<SQLState>other).lastWasColon;
  }

  public getStateData(): monaco.languages.IState {
    return this._state;
  }

  public setStateData(state: monaco.languages.IState): void {
    this._state = state;
  }
}

function tokenize(
  comments: boolean,
  line: string,
  state: SQLState,
  offsetDelta: number = 0,
  stopAtOffset?: number
): monaco.languages.ILineTokens {
  // handle multiline strings and block comments
  var numberOfInsertedCharacters = 0,
    adjustOffset = false;

  switch (state.scanError) {
    case sql.ScanError.UnexpectedEndOfString:
      line = '"' + line;
      numberOfInsertedCharacters = 1;
      break;
    case sql.ScanError.UnexpectedEndOfComment:
      line = '/*' + line;
      numberOfInsertedCharacters = 2;
      break;
  }

  var scanner = sql.createScanner(line),
    kind: sql.SyntaxKind,
    ret: monaco.languages.ILineTokens,
    lastWasColon = state.lastWasColon;

  ret = {
    tokens: <monaco.languages.IToken[]>[],
    endState: state.clone()
  };

  while (true) {
    var offset = offsetDelta + scanner.getPosition(),
      type = '';

    kind = scanner.scan();
    if (kind === sql.SyntaxKind.EOF) {
      break;
    }

    // Check that the scanner has advanced
    if (offset === offsetDelta + scanner.getPosition()) {
      throw new Error('Scanner did not advance, next 3 characters are: ' + line.substr(scanner.getPosition(), 3));
    }

    // In case we inserted /* or " character, we need to
    // adjust the offset of all tokens (except the first)
    if (adjustOffset) {
      offset -= numberOfInsertedCharacters;
    }
    adjustOffset = numberOfInsertedCharacters > 0;

    // brackets and type
    switch (kind) {
      case sql.SyntaxKind.OpenBraceToken:
        type = TOKEN_DELIM_OBJECT;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.CloseBraceToken:
        type = TOKEN_DELIM_OBJECT;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.OpenBracketToken:
        type = TOKEN_DELIM_ARRAY;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.CloseBracketToken:
        type = TOKEN_DELIM_ARRAY;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.ColonToken:
        type = TOKEN_DELIM_COLON;
        lastWasColon = true;
        break;
      case sql.SyntaxKind.CommaToken:
        type = TOKEN_DELIM_COMMA;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.TrueKeyword:
      case sql.SyntaxKind.FalseKeyword:
        type = TOKEN_VALUE_BOOLEAN;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.NullKeyword:
        type = TOKEN_VALUE_NULL;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.StringLiteral:
        type = lastWasColon ? TOKEN_VALUE_STRING : TOKEN_PROPERTY_NAME;
        lastWasColon = false;
        break;
      case sql.SyntaxKind.NumericLiteral:
        type = TOKEN_VALUE_NUMBER;
        lastWasColon = false;
        break;
    }

    // comments, iff enabled
    if (comments) {
      switch (kind) {
        case sql.SyntaxKind.LineCommentTrivia:
          type = TOKEN_COMMENT_LINE;
          break;
        case sql.SyntaxKind.BlockCommentTrivia:
          type = TOKEN_COMMENT_BLOCK;
          break;
      }
    }

    ret.endState = new SQLState(state.getStateData(), scanner.getTokenError(), lastWasColon);
    ret.tokens.push({
      startIndex: offset,
      scopes: type
    });
  }

  return ret;
}
