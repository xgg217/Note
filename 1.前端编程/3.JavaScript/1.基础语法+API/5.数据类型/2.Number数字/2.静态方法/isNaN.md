# isNaN

## 概述

+ `Number.isNaN()` 静态方法判断传入的值是否为 `NaN` ，如果输入不是数字类型，则返回 `false`
+ 它是全局 `isNaN()` 函数更健壮的版本

## API

+ `Number.isNaN(value)`

  + 参数

    + value  要测试是否为 `NaN` 的值

  + 返回值 如果给定值是一个值为 `NaN` 的数字，则返回布尔值 `true` ，否则返回 `false`

  ```js
  Number.isNaN(NaN); // true
  Number.isNaN(Number.NaN); // true
  Number.isNaN(0 / 0); // true
  Number.isNaN(37); // false

  Number.isNaN('15') // false
  Number.isNaN(true) // false
  Number.isNaN(9/NaN) // true
  Number.isNaN('true' / 0) // true
  Number.isNaN('true' / 'true') // true
  ```

## Number.isNaN() 和全局 isNaN()

+ `Number.isNaN()` 不会尝试将参数转换为数字，因此非数字总是返回 `false`

  ```js
  Number.isNaN("NaN");
  Number.isNaN(undefined);
  Number.isNaN({});
  Number.isNaN("blabla");
  Number.isNaN(true);
  Number.isNaN(null);
  Number.isNaN("37");
  Number.isNaN("37.37");
  Number.isNaN("");
  Number.isNaN(" ");
  ```

+ 全局 `isNaN()` 函数会将参数强制转换为数字

  ```js
  isNaN("NaN"); // true
  isNaN(undefined); // true
  isNaN({}); // true
  isNaN("blabla"); // true
  isNaN(true); // false，强制转换为 1
  isNaN(null); // false，强制转换为 0
  isNaN("37"); // false，强制转换为 37
  isNaN("37.37"); // false，强制转换为 37.37
  isNaN(""); // false，强制转换为 0
  isNaN(" "); // false，强制转换为 0
  ```
