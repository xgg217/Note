# appendFile追加

## 概述

  - 如果文件不存在会创建文件，如果文件存在会追加到末尾

## fsPromises.appendFile(path, data\[, options])

  - 参数

      - `path`

      - `data` 字符串或 `<Buffer>`

      - `options`

          - `encoding` 默认值: `'utf8'`

          - `mode` 默认值: `0o666`

          - `flag` 默认值: `'a'`

  - 异步地将数据追加到文件

  - 如果该文件尚不存在，则创建该文件

    ```javascript
    fs.appendFile('./data1.txt', 'hello\n' ,(err)=>{
      if(err) throw err;
      console.log('写入成功');
    })
    ```

## appendFileSync
