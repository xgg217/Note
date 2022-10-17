# toString

## 作用

- `toString`方法的作用是返回一个对象的字符串形式，

- 默认情况下返回类型字符串

    ```js
    var o1 = new Object();
    o1.toString() // "[object Object]"

    var o2 = {a:1};
    o2.toString() // "[object Object]"
    ```

## 注意

- 数组、字符串、函数、Date对象都分别部署了自己版本的 `toString` 方法，覆盖了 `Object.prototype.toString` 方法

    ```js
    [1, 2, 3].toString() // "1,2,3"

    '123'.toString() // "123"

    (function () {
      return 123;
    }).toString()
    // "function () {
    //   return 123;
    // }"

    (new Date()).toString()
    // "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
    ```

## toString()的应用：判断数据类型

- `Object.prototype.toString` 方法返回对象的类型字符串，因此可以用来判断一个值的类型

- 通过函数的 `call` 方法，可以在任意值上调用 `Object.prototype.toString` 方法，帮助我们判断这个值的类型

    ```js
    Object.prototype.toString.call(value)
    ```

- 不同数据类型的 `Object.prototype.toString` 方法返回值如下

  - 数值：返回 `[object Number]`

  - 字符串：返回`[object String]`

  - 布尔值：返回 `[object Boolean]`

  - `undefined` ：返回 `[object Undefined]`

  - `null`：返回 `[object Null]`

  - 数组：返回 `[object Array]`

  - `arguments` 对象：返回 `[object Arguments]`

  - 函数：返回`[object Function]`

  - `Error` 对象：返回 `[object Error]`

  - `Date` 对象：返回 `[object Date]`

  - `RegExp` 对象：返回 `[object RegExp]`

  - 其他对象：返回 `[object Object]`

- 也就是说，`Object.prototype.toString` 可以得到一个实例对象的构造函数

    ```js
    Object.prototype.toString.call(2) // "[object Number]"
    Object.prototype.toString.call('') // "[object String]"
    Object.prototype.toString.call(true) // "[object Boolean]"
    Object.prototype.toString.call(undefined) // "[object Undefined]"
    Object.prototype.toString.call(null) // "[object Null]"
    Object.prototype.toString.call(Math) // "[object Math]"
    Object.prototype.toString.call({}) // "[object Object]"
    Object.prototype.toString.call([]) // "[object Array]"
    ```
