# 源码

## 模拟 bind

+ 不支持使用 `new` 调用新创建的构造函数

  ```js
  /**
   *
    * @param {*} func
    * @param {*} thisArg this指向
    * @param  {...any} arg
    */
  function bind(func, thisArg, ...arg) {
    if(typeof(func) !== "function") {
      throw new TypeError("第一个参数必须为函数")
    }
    return function(...rsg) {
      const funcArgs = [...arg, ...rsg];
      return func.apply(thisArg, funcArgs);
    }
  }
  ```
