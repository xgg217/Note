# resolve

## Promise.resolve()

  - 有时需要将现有对象转为 `Promise` 对象，`Promise.resolve` 方法就起到这个作用。

    ```javascript
    // 将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。
    const jsPromise = Promise.resolve($.ajax('/whatever.json'));
    ```

  - `Promise.resolve` 等价于下面的写法。

    ```javascript
    Promise.resolve('foo')
    // 等价于
    new Promise(resolve => resolve('foo'))
    ```

## 参数类型

  - `Promise.resolve` 方法的参数分成四种情况。

    1.  参数是一个 `Promise` 实例: 如果参数是 `Promise` 实例，那么 `Promise.resolve` 将不做任何修改、原封不动地返回这个实例。

    2.  参数是一个 `thenable` 对象: `thenable` 对象指的是具有 `then` 方法的对象，比如下面这个对象。

          - 示例

            ```javascript
            let thenable = {
              then: function(resolve, reject) {
                resolve(42);
              }
            };
            ```

          - `Promise.resolve` 方法会将这个对象转为 `Promise` 对象，然后就立即执行 `thenable` 对象的 `then` 方法。

          - 示例：下面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。

            ```javascript
            let thenable = {
              then: function(resolve, reject) {
                resolve(42);
              }
            };

            let p1 = Promise.resolve(thenable);
            p1.then(function(value) {
              console.log(value);  // 42
            });
            ```

    3.  参数不是具有 `then` 方法的对象，或根本就不是对象

          - 如果参数是一个原始值，或者是一个不具有 `then` 方法的对象，则P `romise.resolve` 方法返回一个新的 `Promise` 对象，状态为 `resolved`。

          - 下面代码生成一个新的 `Promise` 对象的实例 `p` 。由于字符串 `Hello` 不属于异步操作（判断方法是字符串对象不具有 `then` 方法），返回 `Promise` 实例的状态从一生成就是 `resolved` ，所以回调函数会立即执行。`Promise.resolve` 方法的参数，会同时传给回调函数。

            ```javascript
            const p = Promise.resolve('Hello');

            p.then(function (s){
              console.log(s)
            });
            // Hello
            ```

    4.  不带有任何参数
