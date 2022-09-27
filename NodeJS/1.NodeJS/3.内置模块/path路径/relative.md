# relative

## path.relative(from, to)

  - 参数

      - from `<string>`

      - to `<string>`

  - 返回: `<string>`

  - `path.relative()` 方法根据当前工作目录返回 `from` 到 `to` 的相对路径

  - 如果 `from` 和 `to` 各自解析到相同的路径（分别调用 `path.resolve()` 之后），则返回零长度的字符串

  - 如果 `from` 或 `to` 不是字符串，则抛出 `TypeError`

    ```javascript
    // 在 Windows 上
    path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
    // 返回: '..\\..\\impl\\bbb'
    ```
