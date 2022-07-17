# writeFile写

## 作用

  - 向文件写入内容

  - 如果文件不存在会创建一个文件,如果已存在内容，那么写入的话，会覆盖之前的内容

  - 如果文件夹不存在，则报错

  - 写入数据的类型必须是字符串或buffer二进制数据 ，对象等数据写入后，接收的是数据类型

## fsPromises.writeFile(file, data\[, options], callback)

  - 参数

  - `file` 文件名

  - `data` 要写入的数据

  - `options`

  - `encoding` 默认值: 'utf8'

  - `mode`

  - `flag` 默认`w` 写

  - `signal` 允许中止正在进行的写入文件

  - 异步地将数据写入文件，如果文件已经存在，则替换该文件

\+

```javascript
import { writeFile } from 'fs/promises';



 try {

 await writeFile(fileUrl, '小刚刚1', { flag: 'w+'});

 } catch (err) {

 // 当请求中止时 - err 是 AbortError

 console.error(err);

 }

```
