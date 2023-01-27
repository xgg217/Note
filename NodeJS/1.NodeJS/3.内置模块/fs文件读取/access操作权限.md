# access操作权限

## 概述

+ 测试用户对 `path` 指定的文件或目录的权限

## fsPromises.access(path\[, mode])

+ 参数

    + path

    + mode

        + `fs.constants.F_OK` 默认值

        *

+ 返回值 成功时返回 `undefined`

    ```javascript
    // 成功
    const fsPromises = require('fs/promises');

    fsPromises.access('./b.txt').then(res => {
      // 成功
      console.log(res); // undefined
    }).catch(err => {
      // 不触发
      console.error(err);
    });
    ```

    ```javascript
    // 失败
    const fsPromises = require('fs/promises');

    fsPromises.access('./bb.txt').then(res => {
      // 不触发
      console.log(res);
    }).catch(err => {
      // 触发
      console.error(err);
    })
    ```

## 检查文件是否可读

+ 检查文件是否可读

    ```javascript
    const file = 'text.txt';
    // // 检查文件是否可读
    fs.access(file, fs.constants.R_OK, (err) => {
      console.log(`${file} ${err ? '不可读' : '可读'}`);
    });
    ```

## 检查文件是否可写

+ 检查文件是否可写

    ```javascript
    const file = 'text.txt';
    // // 检查文件是否可读
    fs.access(file, fs.constants.W_OK, (err) => {
      console.log(`${file} ${err ? '不可写' : '可写'}`);
    });
    ```

## 检查文件是否存在于当前目录中、以及是否可写

+ 检查文件是否存在于当前目录中、以及是否可写

    ```javascript
    const file = 'text.txt';

    // 检查文件是否存在于当前目录中、以及是否可写
    fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
      if (err) {
        console.error(
          `${file} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
      } else {
        console.log(`${file} 存在，且可写`);
      }
    });
    ```
