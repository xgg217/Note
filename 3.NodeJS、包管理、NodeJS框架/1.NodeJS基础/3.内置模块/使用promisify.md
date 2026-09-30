# 使用promisify

## 使用 promis / async 方式1

+ 示例

  ```js
  const fs = require('fs');
  const promisify = require('util').promisify;
  const read = promisify(fs.readFile);

  // promis 方式
  read('res/docs/tes/test/txt').then(data => {
      console.log(data);
  }).catch(err => {
      console.error(err);
  });

  // async 方式
  async function test() {
      try {
      const data = await read('res/docs/tes/test/txt');
      console.log(data);
      } catch(err) {
      console.error(err);
      }
  }
  ```

## 方式2

+ `promises`

  ```js
  const fs = require("fs");
  const path = require("path");
  const filename = path.resolve(\_\_dirname, "./t.txt");
  (async () => {
      try {
      const da = await fs.promises.readFile(filename, "utf-8");
          console.log(da);
      } catch (error) {
          console.log(error);
      }
  })();
  ```

## 方式3

+ 方式

  ```js
  import { readFile } from 'fs/promises';
  ```
