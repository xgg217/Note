# module.exports与exports区别

## 区别

+ 代码

    ```js
    console.log(exports == module.exports); // true
    console.log(exports === module.exports); // true
    ```

+ 刚开始指向同个对象&#x20;

![指向](指向.png "指向")

+ 当 `module.exports` 与  `exports`冲突时，导出的是 `module.exports`

    ```js
    // test.js
    const a = 123;
    const b = 'abc';
    exports = a;
    module.exports = b;
    ```

    ```js
    // index.js
    const test = require('./test.js'); // 导入本地文件
    console.log(test); // abc
    ```

+ 建议全部使用 `module.exports`
