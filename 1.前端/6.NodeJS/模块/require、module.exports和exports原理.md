# require、module.exports和exports原理

## 原理

*   `node.js`的模块是运行在一个函数中

    ```javascript
    // 函数(函数名 xyz是表示不知道运行函数的名字，随便取的)
    function xyz(exports, require, module, __filename, __dirname){
      /**
      * 中间的内容是我们写的 `node.js` 的代码
      */
      return module.exports;
    }
    ```

## 验证

*   验证1

    ```javascript
    // 验证 1
    console.log(arguments);
    /*
    * 打印结果（因为打印出来的内容太多，所以省略的很多）
    * {
    *   '0': {},
    *   '1': {...}, //Function: require
    *   '2': Module,
    *   '3': 'C:\\Users\\Dell\\Desktop\\新建文件夹 (2)\\index.js', // 当前文件详细地址 + 文件名 + 后缀
    *   '4': 'C:\\Users\\Dell\\Desktop\\新建文件夹 (2)' // 当前文件详细地址(文件夹)
    * }
    */
    ```

*   验证 2

    ```javascript
    console.log(arguments[0] === exports); // true
    console.log(arguments[1] === require); // true
    console.log(arguments[2] ===  module); // true
    console.log(arguments[3] === __filename); // true
    console.log(arguments[4] === __dirname); // true
    ```
