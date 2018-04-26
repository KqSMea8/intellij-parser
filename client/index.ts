/** 用例 */
import SQLWorker from './SQLWorker';

var worker = new SQLWorker({
  severity: 'error'
});

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    worker.doHover('select * from a', 31).then(data => {
      console.log(data);
    });
  }, 1);
}
