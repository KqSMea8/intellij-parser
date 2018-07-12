"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SQLWorker_1 = require("./SQLWorker");
var worker = new SQLWorker_1.default({
    severity: 'error'
});
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        worker.doHover('select * from a', 31).then(function (data) {
            console.log(data);
        });
    }, 1);
}
//# sourceMappingURL=index.js.map