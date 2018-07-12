'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var sqlScanner_1 = require("../parser/sqlScanner");
function getFoldingRegions(document) {
    function getStartLine(t) {
        return document.positionAt(t.offset).line;
    }
    function getEndLine(t) {
        return document.positionAt(t.offset + t.len).line;
    }
    function getScanner() {
        return new sqlScanner_1.Scanner();
    }
    function tokenToRange(t, type) {
        var startLine = getStartLine(t);
        var endLine = getEndLine(t);
        if (startLine !== endLine) {
            return {
                startLine: startLine,
                endLine: endLine,
                type: type
            };
        }
        else {
            return null;
        }
    }
    var ranges = [];
    var braceStack = [];
    var regionCommentStack = [];
    var scanner = getScanner();
    scanner.ignoreComment = false;
    scanner.setSource(document.getText());
    var token = scanner.scan();
    var prevToken;
    while (token.type !== sqlScanner_1.TokenType.EOF) {
        switch (token.type) {
            case sqlScanner_1.TokenType.CurlyL:
            case sqlScanner_1.TokenType.CurlyR: {
                if (braceStack.length !== 0) {
                    var startLine = braceStack.pop();
                    var endLine = getEndLine(token);
                    if (getEndLine(prevToken) !== endLine) {
                        endLine--;
                    }
                    if (startLine !== endLine) {
                        ranges.push({
                            startLine: startLine,
                            endLine: endLine,
                            type: undefined
                        });
                    }
                    break;
                }
            }
            case sqlScanner_1.TokenType.Comment: {
                var matches = token.text.match(/^\s*\/\*\s*(#region|#endregion)\b\s*(.*?)\s*\*\//);
                if (matches) {
                    if (matches[1] === '#region') {
                        regionCommentStack.push(getStartLine(token));
                    }
                    else {
                        if (regionCommentStack.length !== 0) {
                            var startLine = regionCommentStack.pop();
                            var endLine = getEndLine(token);
                            if (startLine !== endLine) {
                                ranges.push({
                                    startLine: startLine,
                                    endLine: endLine,
                                    type: 'region'
                                });
                            }
                        }
                    }
                }
                if (document.languageId === 'scss' || document.languageId === 'less') {
                    var matches_1 = token.text.match(/^\s*\/\/\s*(#region|#endregion)\b\s*(.*?)\s*/);
                    if (matches_1) {
                        if (matches_1[1] === '#region') {
                            regionCommentStack.push(getStartLine(token));
                        }
                        else {
                            if (regionCommentStack.length !== 0) {
                                var startLine = regionCommentStack.pop();
                                var endLine = getEndLine(token);
                                if (startLine !== endLine) {
                                    ranges.push({
                                        startLine: startLine,
                                        endLine: endLine,
                                        type: 'region'
                                    });
                                }
                            }
                        }
                    }
                }
                var range = tokenToRange(token, 'comment');
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
        ranges: ranges
    };
}
exports.getFoldingRegions = getFoldingRegions;
//# sourceMappingURL=sqlFolding.js.map