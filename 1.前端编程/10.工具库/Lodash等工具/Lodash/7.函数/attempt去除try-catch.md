# attempt 去除try/catch

## 概述

+ `_.attempt(func, [args])` 尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func

  + 参数

    + func (Function): 要尝试调用的函数。
    + `[args]` (...*): 调用func时，传递的参数

  + 返回值 (*): 返回func结果或者错误对象

  ```js
  let getHp = function(json) {
    let data = _.attempt(JSON.parse, json);
    if (data.hp) {
        return data;
    }
    return "Not Found";
  };
  console.log(getHp('{ "car": "miata", "hp": 150 }'));// 150
  console.log(getHp('{}'));// Not Found
  console.log(getHp(''));// Not Found
  console.log(getHp({}));// Not Found
  ```

## 源码

+ code

  ```js
  function attempt(func, ...args) {
    try {
      return func(...args);
    } catch (e) {
      return isError(e) ? e : new Error(e);
    }
  }
  ```
