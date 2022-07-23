# drain事件

## 示例

  - 示例

    ```javascript
    const fs = require('fs');

    const ws = fs.createWriteStream('test2.txt', {
      highWaterMark: 3
    });

    // ws.write('拉个教育')
    const source = ('拉个教育').split('');
    console.log(source);
    let flag = true;
    let ind = 0;

    const executeWrite = function executeWrite() {
      flag = true;
      while((ind !== source.length) && flag) {
        flag = ws.write(source[ind]);
        ind++;
      }
    };
    executeWrite();

    ws.on('drain', () => {
      // 继续执行
      setTimeout(() => {
        console.log(111);
        executeWrite();
      }, 1000)
    })
    ```
