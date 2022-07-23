# fs.createWriteStream

## fs.createWriteStream API

  - `fs.createWriteStream(path[, options]);` 创建一个写入流

  - `path`：写入文件路径

  - `options`：可选配置

  - `flage`：操作文件的方式。默认值: `"w"`

  - `encoding`：编码方式。默认 `"utf-8"`

  - `start`：起始字节

  - `end`：结束字节

  - `highWaterMark`

  - 每次写入数量。默认读取 64kb（64 \* 1024）。

  - 如果 `encoding` 被设置成了 `utf-8` 那么每次就读取一个文字。否则就读取一个字节

  - `autoClose` 读完后会自动关闭。默认为 `true`。如果不关闭，那么该文件就无法删除

  - 返回值： `<fs.WriteStream>`
