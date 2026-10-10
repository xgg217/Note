# thru

## 概述

+ `_.thru(value, interceptor)` 这个方法类似_.tap， 除了它返回 interceptor 的返回结果。该方法的目的是"传递" 值到一个方法链序列以取代中间结果

  + 参数

    + value (*): 提供给 interceptor 的值。
    + interceptor (Function): 用来调用的函数

  + 返回 (*): 返回 interceptor 的返回结果

  ```js
  _('  abc  ')
  .chain()
  .trim()
  .thru(function(value) {
    return [value];
  })
  .value();
  // => ['abc']
  ```
