# API

## callbackify

*   `util.callbackify(original)`

*   将 `async` 异步函数（或者一个返回值为 `Promise` 的函数）转换成遵循异常优先的回调风格的函数

    ```javascript
    const util = require('util');

    async function fn() {
      return 'hello world';
    }
    const callbackFunction = util.callbackify(fn);

    callbackFunction((err, ret) => {
      if (err) throw err;
      console.log(ret);
    });

    // hello world
    ```

    ```javascript
    async function delay(time = 1000) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(time);
        }, time);
      })
    };

    const delayCB =  util.callbackify(delay);
    console.log(delayCB);

    delayCB(500, (err, res) => {
      console.log(res);
    })
    // 500
    ```

## promisify

*   传入一个遵循常见的错误优先的回调风格的函数（即以 `(err, value) => ...` 回调作为最后一个参数），并返回一个返回 `promise` 的版本。

    ```javascript
    const util = require('util');
    const fs = require('fs');

    const stat = util.promisify(fs.stat);
    stat('.').then((stats) => {
      // 使用 `stats`。
    }).catch((error) => {
      // 处理错误。
    });
    ```

    ```javascript
    // async
    const util = require('util');
    const fs = require('fs');

    const stat = util.promisify(fs.stat);

    async function callStat() {
      const stats = await stat('.');
      console.log(`该目录归 ${stats.uid} 拥有`);
    }
    ```

## isDeepStrictEqual

*   深度严格比较两个对象是否相等

    ```javascript
    const obj1 = {
      a:1,
      b:{
        c:3,
        d: {
          e: 5
        }
      }
    };

    const obj2 = {
      a:1,
      b:{
        c:3,
        d: {
          e: 5
        }
      }
    };

    const isBool = util.isDeepStrictEqual(obj1, obj2);
    console.log(isBool); // true
    ```

    ```javascript
    const obj1 = {
      a:1,
      b:{
        c:3,
        d: {
          e: 5
        }
      }
    };

    const obj2 = {
      a:1,
      b:{
        c:3,
        d: {
          e: "5"
        }
      }
    };

    const isBool = util.isDeepStrictEqual(obj1, obj2);
    console.log(isBool); // false
    ```

## inherits

*   继承

*   现在请使用 ES6 `Class`
