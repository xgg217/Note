# require函数

## 模拟 require

  - 代码

    ```javascript
    function require(modlePath) {
      // 1. 将 modlePath 转换为绝对路径
      // 2. 判断是否该模块已有缓存
      // 3. 没有缓存,读取文件内容
      // 4. 包裹到一个函数中
      function __temp(module, exports, require, __dirname, __filename) {

      }

      module.exports = {};
      const exports = module.exports;
      // 5. 创建 module 对象
      __temp.call(module.exports, module, exports, require, module.path, module.__filename)
      return module.exports;
    }
    ```
