# 优雅处理 async/await

## 解决 频繁的在 async 函数中写 try/catch 的逻辑

- 问题：在开发中，为了系统健壮性，亦或者是为了捕获异步的错误，而频繁的在 `async` 函数中写 `try/catch` 的逻辑

    ```js
    asyncfunction func() {
      try {
          let res = await asyncFunc()
      } catch (e) {
        //......
      }
    }
    ```

## 解决办法

- 优雅处理 `async/await`

    ```js
    async function errorCaptured(asyncFunc) {
      try {
        const res = await asyncFunc();
        return [null, res];
      } catch(e) {
        return [e, null];
      }
    }
    ```

- 实际使用

    ```js
    async ffunction func() {
      const [err, res] = await errorCaptured(asyncFunc);
      if(err) {
        //... 错误捕获
      }

      // 正常处理
    }
    ```
