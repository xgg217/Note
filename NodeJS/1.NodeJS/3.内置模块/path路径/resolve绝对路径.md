# resolve 绝对路径

## resolve(\[...paths])

+ ...paths `<string>` 路径或路径片段的序列

+ 返回: `<string>`

+ `path.resolve()` 方法将路径或路径片段的序列解析为绝对路径

+ 给定的路径序列从右到左进行处理，每个后续的 `path` 前置，直到构造出一个绝对路径

+ 例如，给定的路径片段序列：`/foo`、 `/bar`、 `baz`，调用 `path.resolve('/foo', '/bar', 'baz')` 将返回 `/bar/baz`

  ```javascript
  path.resolve('/foo/bar', './baz');
  // 返回: '/foo/bar/baz'

  path.resolve('/foo/bar', '/tmp/file/');
  // 返回: '/tmp/file'

  path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
  // 如果当前工作目录是 /home/myself/node，
  // 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
  ```

## 示例

+ 获取当前文件路径

  ```js
  path.resolve(__dirname, path)
  ```
