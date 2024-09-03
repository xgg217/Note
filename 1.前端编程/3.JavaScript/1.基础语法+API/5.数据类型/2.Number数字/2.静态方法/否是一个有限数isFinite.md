# Number.isFinite

## 概述

+ `Number.isFinite()` 静态方法判断传入值是否是一个有限数
+ 除了 `Infinity`、`-Infinity`、`NaN` 和 `undefined` 这几个值会返回 `false` ，`isFinite` 对于其他的数值都会返回 `true`


## API

+ `Number.isFinite(value)`

  + 参数

    + value 要测试有限性的值

  + 返回值： 如果给定值是有限数，则返回布尔值 `true` 。否则为 `false`

    + 除了 `Infinity`、`-Infinity`、`NaN` 和 `undefined` 这几个值会返回 `false` ，`isFinite` 对于其他的数值都会返回 `true`

  ```js
  Number.isFinite(Infinity); // false
  Number.isFinite(NaN); // false
  Number.isFinite(-Infinity); // false

  Number.isFinite(0); // true
  Number.isFinite(2e64); // true
  ```

## Number.isFinite() 和全局 isFinite()

+ 与全局 `isFinite()` 函数相比，此方法不会先将参数转换为数字，这意味着只有类型为数字且为有限数的值才返回 `true` ，而非数字的值始终返回 `false`

  ```js
  isFinite("0"); // true；强制转换为数字 0
  Number.isFinite("0"); // false
  isFinite(null); // true；强制转换为数字 0
  Number.isFinite(null); // false
  ```

