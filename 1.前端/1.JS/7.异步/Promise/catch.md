# catch

## Promise.prototype.catch()

  - `.then(null, rejection)` 的别名

  - 用于指定发生错误时的回调函数。

    ```javascript
    getJSON('/posts.json').then(function(posts) {
      // ...
    }).catch(function(error) {
      // 处理 getJSON 和 前一个回调函数运行时发生的错误
      console.log('发生错误！', error);
    });
    ```

  - `Promise` 对象的错误具有**冒泡**性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 `catch` 语句捕获。

    ```javascript
    getJSON('/post/1.json').then(function(post) {
      return getJSON(post.commentURL);
    }).then(function(comments) {
      // some code
    }).catch(function(error) {
      // 处理前面三个Promise产生的错误
    });
    ```

  - 一般来说，不要在 `then` 方法里面定义 `Reject` 状态的回调函数（即 `then` 的第二个参数），总是使用 `catch` 方法。

  - `Promise` 内部的错误不会影响到 `Promise` 外部的代码，通俗的说法就是 **Promise 会吃掉错误**

  - 一般总是建议，`Promise` 对象后面要跟 `catch` 方法，这样可以处理 `Promise` 内部发生的错误。`catch` 方法返回的还是一个 `Promise` 对象，因此后面还可以接着调用 `then` 方法

    ```javascript
    const someAsyncThing = function() {
      return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
      });
    };

    // 如果没有报错，则会跳过catch方法。
    someAsyncThing()
    .catch(function(error) {
      console.log('oh no', error);
    })
    // 要是then方法里面报错，就与前面的catch无关了。
    .then(function() {
      console.log('carry on');
    });
    ```
