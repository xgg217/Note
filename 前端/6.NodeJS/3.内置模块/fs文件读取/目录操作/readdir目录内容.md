# readdir目录内容

## 作用

  - 获取目录中的文件和子目录

  - 但是无法获取获取目录下子文件夹的子目录

## fsPromises.readdir(path\[, options])

  - 读取目录的内容

  - 参数

      - path&#x20;

      - options&#x20;

  - 例如：实际结构

    ```text
    ——child
      |__ 2.txt
    ——1.txt
    ——12.jpg
    ——14.jpg
    ```

    ```javascript
    const path = require("path");
    const fs = require("fs")

    const filename = path.resolve(__dirname, "./files");

    try {
      const rf =  await fs.promises.readdir(filename);
      console.log(rf);
    } catch (error) {
      console.log(error);
    }

    // 打印结果
    [ '1.txt', '12.jpg', '14.jpg', 'child' ]
    ```
