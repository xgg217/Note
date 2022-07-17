# finally

## Promise.prototype.finally()

  - 用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。该方法是 **ES2018** 引入标准的。

    ```javascript
    // 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
    promise
      .then(result => {···})
      .catch(error => {···})
      .finally(() => {···});
    ```

  - `finally` 方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是 `fulfilled` 还是 `rejected`。

  - 这表明，`finally` 方法里面的操作，应该是**与状态无关**的，不依赖于 `Promise` 的执行结果。

  - `finally` 本质上是 `then` 方法的特例。

    ```javascript
    // 上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。
    promise
    .finally(() => {
      // 语句
    });

    // 等同于
    promise
    .then(
      result => {
        // 语句
        return result;
      },
      error => {
        // 语句
        throw error;
      }
    );
    ```

  - 实现 `finally`

    ```javascript
    Promise.prototype.finally = function (callback) {
      let P = this.constructor;
      return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
      );
    };
    ```
