'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function findFirst(array, p) {
    var low = 0, high = array.length;
    if (high === 0) {
        return 0;
    }
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (p(array[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
}
exports.findFirst = findFirst;
//# sourceMappingURL=arrays.js.map