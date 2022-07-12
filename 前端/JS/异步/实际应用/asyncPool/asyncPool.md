# asyncPool

## 概述

*   npm `async-pool` 库

*   作用：异步任务的并发控制

*   参考 [https://mp.weixin.qq.com/s?\_\_biz=MzI2MjcxNTQ0Nw==\&mid=2247490704\&idx=1\&sn=18976b9c9fe2456172c394f1d9cae88b\&scene=21#wechat\_redirect](https://mp.weixin.qq.com/s?__biz=MzI2MjcxNTQ0Nw==\&mid=2247490704\&idx=1\&sn=18976b9c9fe2456172c394f1d9cae88b\&scene=21#wechat_redirect "https://mp.weixin.qq.com/s?__biz=MzI2MjcxNTQ0Nw==\&mid=2247490704\&idx=1\&sn=18976b9c9fe2456172c394f1d9cae88b\&scene=21#wechat_redirect")

## asyncPool 的使用

*   使用方式

    ```javascript
    const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
    await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
    ```

*   `asyncPool` 函数 语法

    ```javascript
    function asyncPool(poolLimit, array, iteratorFn){ ... }
    ```

    *   `poolLimit`（数字类型）：表示限制的并发数；

    *   `array`（数组类型）：表示任务数组；

    *   `iteratorFn`（函数类型）：表示迭代函数，用于实现对每个任务项进行处理，该函数会返回一个 Promise 对象或异步函数。

*   在使用了 `asyncPool` 函数之后，对应的执行过程如下所示

    ```javascript
    const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
    await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
    // Call iterator (i = 1000)
    // Call iterator (i = 5000)
    // Pool limit of 2 reached, wait for the quicker one to complete...
    // 1000 finishes
    // Call iterator (i = 3000)
    // Pool limit of 2 reached, wait for the quicker one to complete...
    // 3000 finishes
    // Call iterator (i = 2000)
    // Itaration is complete, wait until running ones complete...
    // 5000 finishes
    // 2000 finishes
    // Resolves, results are passed in given array order `[1000, 5000, 3000, 2000]`.
    ```

#### asyncPool ES7 实现

*   充分利用了 `Promise.all` 和 `Promise.race` 函数特点，再结合 ES7 中提供的 `async await` 特性，最终实现了并发控制的功能。

*   利用 `await Promise.race(executing);` 这行语句，我们会等待 **正在执行任务列表** 中较快的任务执行完成之后，才会继续执行下一次循环。

    ```javascript
    async function asyncPool(poolLimit, array, iteratorFn) {
      const ret = []; // 存储所有的异步任务
      const executing = []; // 存储正在执行的异步任务
      for (const item of array) {
        // 调用iteratorFn函数创建异步任务
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        ret.push(p); // 保存新的异步任务

        // 当poolLimit值小于或等于总任务个数时，进行并发控制
        if (poolLimit <= array.length) {
          // 当任务完成后，从正在执行的任务数组中移除已完成的任务
          const e = p.then(() => executing.splice(executing.indexOf(e), 1));
          executing.push(e); // 保存正在执行的异步任务
          if (executing.length >= poolLimit) {
            await Promise.race(executing); // 等待较快的任务执行完成
          }
        }
      }
      return Promise.all(ret);
    }
    ```

## asyncPool ES6 实现

*   在 ES6 的实现版本中，通过内部封装的 `enqueue` 函数来实现核心的控制逻辑。

*   当 `Promise.race(executing)` 返回的 `Promise` 对象变成已完成状态时，才会调用 `enqueue` 函数，从 `array` 数组中获取新的待办任务。

    ```javascript
    function asyncPool(poolLimit, array, iteratorFn) {
      let i = 0;
      const ret = []; // 存储所有的异步任务
      const executing = []; // 存储正在执行的异步任务
      const enqueue = function () {
        if (i === array.length) {
          return Promise.resolve();
        }
        const item = array[i++]; // 获取新的任务项
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        ret.push(p);

        let r = Promise.resolve();

        // 当poolLimit值小于或等于总任务个数时，进行并发控制
        if (poolLimit <= array.length) {
          // 当任务完成后，从正在执行的任务数组中移除已完成的任务
          const e = p.then(() => executing.splice(executing.indexOf(e), 1));
          executing.push(e);
          if (executing.length >= poolLimit) {
            r = Promise.race(executing); 
          }
        }
     
        // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
        return r.then(() => enqueue());
      };
      return enqueue().then(() => Promise.all(ret));
    }
    ```
