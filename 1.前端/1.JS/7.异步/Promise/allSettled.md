# allSettled

## 使用

*   `Promise.allSettled()` 方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。

*   只有等到所有这些参数实例都返回结果，不管是 `fulfilled` 还是 `rejected`，包装实例才会结束

    ```javascript
    const promises = [
      fetch('/api-1'),
      fetch('/api-2'),
      fetch('/api-3'),
    ];

    await Promise.allSettled(promises);
    removeLoadingIndicator();
    ```

## 返回结果

*   该方法返回的新的 `Promise` 实例，一旦结束，状态总是 `fulfilled`，不会变成 `rejected`。

*   状态变成 `fulfilled` 后，`Promise` 的监听函数接收到的参数是一个数组，每个成员对应一个传入 `Promise.allSettled()` 的 `Promise` 实例。

*   每个对象都有 `status` 属性，该属性的值只可能是字符串 `fulfilled` 或字符串 `rejected` 。

*   `fulfilled` 时，对象有 `value` 属性，`rejected` 时有 `reason` 属性，对应两种状态的返回值。

    ```javascript
    const resolved = Promise.resolve(42);
    const rejected = Promise.reject(-1);

    const allSettledPromise = Promise.allSettled([resolved, rejected]);

    allSettledPromise.then(function (results) {
      console.log(results);
    });
    // [
    //    { status: 'fulfilled', value: 42 },
    //    { status: 'rejected', reason: -1 }
    // ]
    ```

*   过滤返回值

    ```javascript
    const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
    const results = await Promise.allSettled(promises);

    // 过滤出成功的请求
    const successfulPromises = results.filter(p => p.status === 'fulfilled');

    // 过滤出失败的请求，并输出原因
    const errors = results
      .filter(p => p.status === 'rejected')
      .map(p => p.reason);
    ```

## 作用

*   有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。

*   这时，`Promise.allSettled()` 方法就很有用。

*   如果没有这个方法，想要确保所有操作都结束，就很麻烦。

*   `Promise.all()` 方法无法做到这一点。

    ```javascript
    const urls = [ /* ... */ ];
    const requests = urls.map(x => fetch(x));

    try {
      await Promise.all(requests);
      console.log('所有请求都成功。');
    } catch {
      console.log('至少一个请求失败，其他请求可能还没结束。');
    ```

## 示例

*   过滤成功或失败

    ```javascript
    const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
    const results = await Promise.allSettled(promises);

    // 过滤出成功的请求
    const successfulPromises = results.filter(p => p.status === 'fulfilled');

    // 过滤出失败的请求，并输出原因
    const errors = results
      .filter(p => p.status === 'rejected')
      .map(p => p.reason);
    ```
