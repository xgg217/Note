# all

## Promise.all()

*   用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例

    ```javascript
    const p = Promise.all([p1, p2, p3]);
    ```

*   上面代码中，`Promise.all` 方法接受一个数组作为参数，`p1` 、 `p2` 、`p3` 都是 `Promise` 实例，如果不是，就会先调用`Promise.resolve` 方法，将参数转为 `Promise` 实例，再进一步处理。（ `Promise.all` 方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 `Promise` 实例。）

## 最终状态

*   `p` 的状态由 `p1` 、 `p2` 、 `p3` 决定，分成两种情况。

    1.  只有 `p1` 、 `p2` 、 `p3` 的状态**都**变成 `fulfilled` ， `p` 的状态才会变成 `fulfilled`，此时 `p1`、 `p2`、 `p3` 的返回值组成一个数组，传递给 `p` 的回调函数。

    2.  只要 `p1` 、 `p2` 、 `p3` 之中**有一个**被 `rejected`， `p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数。

        ```javascript
        // 生成一个Promise对象的数组
        const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
          return getJSON('/post/' + id + ".json");
        });

        Promise.all(promises).then(function (posts) {
          // ...
        }).catch(function(reason){
          // ...
        });
        ```

        ```javascript
        // 谁在前面谁就先执行
        const p1 = new Promise( (res, err) => {
          res(1);
        });
        const p2 = Promise.resolve(2);
        const p3 = Promise.resolve(3);
        const p4 = Promise.all([p1, p2, p3]);
        p4.then(res => {
          console.log(res); // [1, 2, 3]
        }).catch(err => {
          console.log(err)
        });

        const p5 = Promise.all([p3, p1, p2]);
        p5.then(res => {
          console.log(res); // [3, 1, 2]
        }).catch(err => {
          console.log(err)
        });
        ```

        ```javascript
        // 有一个被 `rejected` 就被返回
        const p6 = new Promise( (res, err) => {
          res(6);
        });
        const p7 = Promise.resolve(7);
        const p8 = Promise.reject(8);
        const p9 = Promise.all([p6, p7, p8]);
        p9.then(res => {
          console.log(res); // 8
        }).catch(err => {
          console.log(err)
        });

        const p10 = Promise.reject(10);
        const p11 = Promise.all([p6, p10, p8]);
        p11.then(res => {
          console.log(res); // 10
        }).catch(err => {
          console.log(err)
        });
        ```

## 返回顺序

*   谁执行的快谁先打印结果， 但是最终返回的结果仍然是按照promise的添加顺序返回
