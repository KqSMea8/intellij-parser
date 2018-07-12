"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker = require("monaco-editor-core/esm/vs/editor/editor.worker");
var sqlWorker_1 = require("./sqlWorker");
self.onmessage = function () {
    worker.initialize(function (ctx, createData) {
        return new sqlWorker_1.SQLWorker(ctx, createData);
    });
};
//# sourceMappingURL=sql.worker.js.map