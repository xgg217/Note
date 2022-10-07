# Object.is

## 作用

  - `Object.is()` 方法判断两个值是否是相同的值

  - `Object.is` 不会做类型转换

    ```js
    Object.is(value1, value2);

    // 返回值: 表示两个参数是否相同的布尔值
    ```

  - 示例

    ```js
    Object.is('foo', 'foo');     // true
    Object.is(window, window);   // true

    Object.is('foo', 'bar');     // false
    Object.is([], []);           // false

    var foo = { a: 1 };
    var bar = { a: 1 };
    Object.is(foo, foo);         // true
    Object.is(foo, bar);         // false

    Object.is(null, null);       // true

    // 特例
    Object.is(0, -0);            // false
    Object.is(0, +0);            // true
    Object.is(-0, -0);           // true
    Object.is(NaN, 0/0);         // true
    ```

  - Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是 `+0` 和 `-0`，`NaN` 和 `NaN`。源码如下：

    ```js
    if (!Object.is) {
      Object.is = function(x, y) {
        if (x === y) {
          //运行到 1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
          // 两个都是NaN的时候返回true
          return x !== x && y !== y;
        }
      };
    }
    ```

## Object.is 与 ===&#x20;

  - `===`

    ```js
    console.log(+0 === -0); // true
    console.log(NaN === NaN) // false
    ```

  - `Object.is()`

    ```js
    console.log(Object.is(0, -0)); // flse
    console.log(Object.is(0, +0)); // flse
    console.log(Object.is(+0, -0)); // flse
    console.log(Object.is(NaN, 0/0)); // true
    console.log(Object.is(NaN, NaN)); // true
    ```
