# fs.createReadStream

## fs.createReadStream(path\[, options])

+ 创建一个文件可读流，用于读取文件内容

+ 参数

  + `path`：读取文件路径

  + `options`：可选配置 `<string>` | `<Object>`

    + `flags`: `<string>` 请参阅对文件系统 flags 的支持。 默认值: `r`

    + `encoding`： `<string>` 编码方式。默认 `null` 数据返回 `buffer` 格式

    + `fd`: `<integer>` | `<FileHandle>` 默认值: `null`

    + `mode` `<integer>` 默认值: 0o666

    + `autoClose` `<boolean>` 默认值: `true` 读完后会自动关闭。如果不关闭，那么该文件就无法删除

      + `emitClose` `<boolean>` 默认值: `true`

      + `start`：起始字节 默认值 0

      + `end`：结束字节

      + `highWaterMark` :每次读取的量。如果 `encoding` 有值，该数量表示字符数。如果 `encoding` 为 `null`，则表示字节数，默认值: `64 * 1024` (64kb)

      + `fs` `<Object>` | `<null>` 默认值: `null`

        + 如果 `encoding` 被设置成了 `utf-8` 那么每次就读取一个文字。否则就读取一个字节

+ 返回值：Readable 的子类 `ReadStream`

+ 事件 `rs.on(事件名, 处理函数)`

  + 事件名

    + `open`：文件打开事件。文件被打开后触发

    + `error`：错误

    + `close`：文件被关闭后触发。可以通过 `rs.close()` 手动关闭。或者文件读取完成后自动触发

    + `data`：

      + 读取到一部分数据后触发

      + 注册 `data` 事件后，才会真正开始读取

      + 每次读取 `highWaterMark` 指定的数量

      + 回调函数中会附带读取到的数据

    + `end`：文件读取完毕后触发

    + `pause` 暂停

    + `resume` 恢复读取

+ 方法

  + `rs.pause()` 暂停读取，会触发 `pause` 事件

  + `rs.resume()` 恢复读取，会触发 `resume` 事件

## 示例

+ 示例1

    ```javascript
    const filend = path.resolve(__dirname, "./files/1.txt");
    const str = fs.createReadStream(filend, {
      encoding: "utf-8",
    });

    str.on("open", (fd) => {
      console.log("文件被打开了");
    })

    str.on("error", () => {
      console.log("出错了");
    });

    str.on("close", () => {
      console.log("文件关闭");
    });

    // 消费数据
    str.on("data", (chunk) => {
      console.log("读取了一部分文件");
      console.log(chunk);
      // 暂停
      str.pause();
    })

    str.on("pause", () => {
      console.log("暂停");
      setTimeout(() => {
        // 继续执行
        str.resume()
      }, 1000)
    });

    str.on("resume", () => {
      console.log("恢复读取");
    });

    str.on("end", () => {
      console.log("end 全部数据读取完毕");
    });
    ```

+ 示例2

    ```javascript
    const fs = require('fs');

    const rs = fs.createReadStream('./test.txt', {
      highWaterMark: 2
    });

    rs.on('readable', () => {
      let data = rs.read();

      while(data !== null) {
        console.log(data.toString());
        data = rs.read();
      }
    })
    ```
