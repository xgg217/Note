# 搜索indexOf、lastIndexOf

## indexOf()，lastIndexOf() 使用

  - 这两个方法用于确定一个字符串在另一个字符串中的位置，都返回一个整数，表示匹配开始的位置

  - 如果返回-1，就表示不匹配。两者的区别在于，`indexOf` 从字符串头部开始匹配，`lastIndexOf` 从尾部开始匹配

    ```javascript
    'hello world'.indexOf('o') // 4
    'JavaScript'.indexOf('script') // -1

    'hello world'.lastIndexOf('o') // 7
    ```

  - 它们还可以接受第二个参数，对于 `indexOf` 方法，第二个参数表示从该位置开始向后匹配；对于 `lastIndexOf` ，第二个参数表示从该位置起向前匹配

    ```javascript
    'hello world'.indexOf('o', 6) // 7
    'hello world'.lastIndexOf('o', 6) // 4
    ```
