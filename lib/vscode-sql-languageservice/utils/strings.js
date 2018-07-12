'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    for (var i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
exports.startsWith = startsWith;
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.lastIndexOf(needle) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
exports.endsWith = endsWith;
function difference(first, second, maxLenDelta) {
    if (maxLenDelta === void 0) { maxLenDelta = 4; }
    var lengthDifference = Math.abs(first.length - second.length);
    if (lengthDifference > maxLenDelta) {
        return 0;
    }
    var LCS = [];
    var zeroArray = [];
    var i, j;
    for (i = 0; i < second.length + 1; ++i) {
        zeroArray.push(0);
    }
    for (i = 0; i < first.length + 1; ++i) {
        LCS.push(zeroArray);
    }
    for (i = 1; i < first.length + 1; ++i) {
        for (j = 1; j < second.length + 1; ++j) {
            if (first[i - 1] === second[j - 1]) {
                LCS[i][j] = LCS[i - 1][j - 1] + 1;
            }
            else {
                LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
            }
        }
    }
    return LCS[first.length][second.length] - Math.sqrt(lengthDifference);
}
exports.difference = difference;
function getLimitedString(str, ellipsis) {
    if (ellipsis === void 0) { ellipsis = true; }
    if (!str) {
        return '';
    }
    if (str.length < 140) {
        return str;
    }
    return str.slice(0, 140) + (ellipsis ? '\u2026' : '');
}
exports.getLimitedString = getLimitedString;
//# sourceMappingURL=strings.js.map