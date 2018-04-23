"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safePost(cb, idx) {
    return {
        data: cb(),
        idx: idx
    };
}
exports.safePost = safePost;
//# sourceMappingURL=utils.js.map