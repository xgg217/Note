parse解析
==

## 概述

*   解析路径

## path.parse(path)

*   与 `path.join()` 相反操作

*   参数

    *   path `<string>`

*   返回值：`<Object>` 返回的对象将具有以下属性

    *   dir `<string>`&#x20;

    *   root `<string>` 根目录

    *   base `<string>`&#x20;

    *   name `<string>`&#x20;

    *   ext `<string>` 扩展名

    ```javascript
    path.parse('/a/b/c/file.txt');
    /*
    {
      root: '/',
      dir: 'a/b/c',
      base: 'file.txt',
      ext: '.txt',
      name: 'file'
    }
    */
    ```

    ```javascript
    // 绝对路径
    path.parse('/a/b/c');
    path.parse('/a/b/c/');
    /*
    {
      root: '/',
      dir: '/a/b',
      base: 'c',
      ext: '',
      name: 'c'
    }
    */
    ```

    ```javascript
    // 相对路径
    path.parse('./a/b/c/');
    /*
    {
      root: '',
      dir: './a/b',
      base: 'c',
      ext: '',
      name: 'c'
    }
    */
    ```

    ```javascript
    // 目录
    path.parse('D:\LX\node\20210822\index.js');
    /*
    {
      root: 'D:',
      dir: 'D:',
      base: 'LX\node\x8210822index.js',
      ext: '.js',
      name: 'LX\node\x8210822index'
    }
    */
    ```
