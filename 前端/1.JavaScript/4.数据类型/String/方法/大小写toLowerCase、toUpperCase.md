# 大小写toLowerCase、toUpperCase

## 作用

+ `toLowerCase`方法用于将一个字符串全部转为小写，

+ `toUpperCase`则是全部转为大写

+ 它们都返回一个新字符串，不改变原字符串

    ```js
    'Hello World'.toLowerCase()
    // "hello world"

    'Hello World'.toUpperCase()
    // "HELLO WORLD"
    ```

+ 这个方法也可以将布尔值或数组转为大写字符串，但是需要通过 `call` 方法使用

    ```js
    String.prototype.toUpperCase.call(true)
    // 'TRUE'
    String.prototype.toUpperCase.call(['a', 'b', 'c'])
    // 'A,B,C'
    ```
