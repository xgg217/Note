# await

## await 等待

  - **await关键字必须出现在 async 函数中**

  - `await` 用在某个表达式之前，如果表达式是一个 `Promise`, 则得到的是 `thenable` 中的状态数据

    ```javascript
    async function test1() {
      console.log(1);
      return 2;
    }

    async function test2() {
      const result = await test1();
      console.log(result);
    }

    // 相当于
    function test2() {
      return newPromise((resolve, reject) => {
        test1().then((data) => {
          const result = data;
          console.log(result);
          resolve()
        });
      })
    }
    ```

## 细节

  - 表达式不是一个 `Promise`，则会将其使用 `Promise.resolve()` 包装后

    ```javascript
    async function test2() {
      const result = await 1;
      console.log(result);
    }

    // 相当于
    function test2() {
      return newPromise((resolve, reject) => {
        test1().then((data) => {
          Promise.resolve(1).then(data => {
            const result = data;
            console.log(result);
            resolve();
          })
        });
      })
    }
    ```

## 错误处理

  - 任何一个await语句后面的 `Promise` 对象变为 `reject` 状态，那么整个 `async` 函数都会中断执行。

    ```javascript
    async function f() {
      await Promise.reject('出错了');
      await Promise.resolve('hello world'); // 不会执行
    }
    ```

  - `try...catch`

    ```javascript
    // 不管这个异步操作是否成功，第二个await都会执行。
    async function f() {
      try {
        await Promise.reject('出错了');
      } catch(e) {
        // 错误处理
      }
      return await Promise.resolve('hello world');
    }

    f()
    .then(v => console.log(v))
    // hello world
    ```
