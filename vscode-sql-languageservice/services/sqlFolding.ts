/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { TextDocument, Position } from 'vscode-languageserver-types';
import { TokenType, Scanner, IToken } from '../parser/sqlScanner';
import * as nodes from '../parser/sqlNodes';
import { ParseError, SQLIssueType } from '../parser/sqlErrors';
import * as languageFacts from './languageFacts';
import { FoldingRangeList, FoldingRange, FoldingRangeType } from '../protocol/foldingProvider.proposed';

export function getFoldingRegions(document: TextDocument): FoldingRangeList {
  function getStartLine(t: IToken) {
    return document.positionAt(t.offset).line;
  }
  function getEndLine(t: IToken) {
    return document.positionAt(t.offset + t.len).line;
  }
  function getScanner() {
    return new Scanner();
  }
  function tokenToRange(t: IToken, type?: FoldingRangeType | string): FoldingRange | null {
    const startLine = getStartLine(t);
    const endLine = getEndLine(t);

    if (startLine !== endLine) {
      return {
        startLine,
        endLine,
        type
      };
    } else {
      return null;
    }
  }

  const ranges: FoldingRange[] = [];
  const braceStack: number[] = [];
  const regionCommentStack: number[] = [];

  const scanner = getScanner();
  scanner.ignoreComment = false;
  scanner.setSource(document.getText());

  let token = scanner.scan();
  let prevToken;
  while (token.type !== TokenType.EOF) {
    switch (token.type) {
      case TokenType.CurlyL:
      case TokenType.CurlyR: {
        if (braceStack.length !== 0) {
          const startLine = braceStack.pop();
          let endLine = getEndLine(token);

          /**
           * Other than the case when curly brace is not on a new line by itself, for example
           * .foo {
           *   color: red; }
           * Use endLine minus one to show ending curly brace
           */
          if (getEndLine(prevToken) !== endLine) {
            endLine--;
          }

          if (startLine !== endLine) {
            ranges.push({
              startLine,
              endLine,
              type: undefined
            });
          }
          break;
        }
      }
      /**
       * In CSS, there is no single line comment prefixed with //
       * All comments are marked as `Comment`
       */
      case TokenType.Comment: {
        // /* */ comment region folding
        const matches = token.text.match(/^\s*\/\*\s*(#region|#endregion)\b\s*(.*?)\s*\*\//);
        if (matches) {
          if (matches[1] === '#region') {
            regionCommentStack.push(getStartLine(token));
          } else {
            if (regionCommentStack.length !== 0) {
              const startLine = regionCommentStack.pop();
              const endLine = getEndLine(token);
              if (startLine !== endLine) {
                ranges.push({
                  startLine,
                  endLine,
                  type: 'region'
                });
              }
            }
          }
        }

        // Scss / Less region folding
        if (document.languageId === 'scss' || document.languageId === 'less') {
          const matches = token.text.match(/^\s*\/\/\s*(#region|#endregion)\b\s*(.*?)\s*/);
          if (matches) {
            if (matches[1] === '#region') {
              regionCommentStack.push(getStartLine(token));
            } else {
              if (regionCommentStack.length !== 0) {
                const startLine = regionCommentStack.pop();
                const endLine = getEndLine(token);
                if (startLine !== endLine) {
                  ranges.push({
                    startLine,
                    endLine,
                    type: 'region'
                  });
                }
              }
            }
          }
        }

        const range = tokenToRange(token, 'comment');
        if (range) {
          ranges.push(range);
        }
        break;
      }
    }
    prevToken = token;
    token = scanner.scan();
  }

  return {
    ranges
  };
}
