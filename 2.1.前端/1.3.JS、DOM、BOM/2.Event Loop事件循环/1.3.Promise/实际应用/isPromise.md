# 验证是否是 Promise

## 概述

+ 验证标准

  1. 是否是对象
  2. 是否有 `then` 方法

  ```js
  /**
   * 判断是否是一个 Promise 对象
   * @description 条件1 obj 是一个对象
   * @description 条件2 obj 有 then 方法
   * @param { any } obj
   * @returns { boolean }
   */
  function isPromise(obj:any): obj is Promise<any> {
    return !!(obj && (typeof(obj) === 'object') && (typeof(obj.then) === 'function'));
  }
  ```
