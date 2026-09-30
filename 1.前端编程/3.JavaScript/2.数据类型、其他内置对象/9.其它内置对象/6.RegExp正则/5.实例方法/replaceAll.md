# replaceAll

## API

+ `replaceAll(pattern, replacement)`

  + 参数

    + pattern

      + 字符串
      + 正则表达式，但是必须设置全局（`g`）标志，否则会抛出 `TypeError`

    + replacement 可以是一个字符串或一个函数。替换字符串的语义与 `String.prototype.replace()` 相同

  + 返回值: 返回一个新字符串，其中所有匹配 pattern 的部分都被替换为 replacement

  ```js
  "aabbcc".replaceAll("b", ".");
  // 'aa..cc'
  ```

  + 异常

    ```js
    // 报错
    "aabbcc".replaceAll(/b/, ".");
    // TypeError: replaceAll must be called with a global RegExp

    // 正确
    "aabbcc".replaceAll(/b/g, ".");
    ("aa..cc");
    ```

+ 描述

  + 方法不会修改调用它的字符串
  + 它返回一个新字符串


