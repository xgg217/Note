# NaN

## 概述

  - `NaN`是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合

    ```javascript
    5 - 'x' // NaN
    ```

## 注意

  - 需要注意的是，`NaN`不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于`Number`，使用`typeof`运算符可以看得很清楚

    ```javascript
    typeof NaN // 'number'
    ```

## 运算规则

  - `NaN`不等于任何值，包括它本身

    ```javascript
    NaN === NaN // false
    ```

  - 数组的`indexOf`方法内部使用的是严格相等运算符，所以该方法对`NaN`不成立

    ```javascript
    [NaN].indexOf(NaN) // -1
    ```

  - `NaN`在布尔运算时被当作`false`

    ```javascript
    Boolean(NaN) // false
    ```

  - `NaN`与任何数（包括它自己）的运算，得到的都是`NaN`

    ```javascript
    NaN + 32 // NaN
    NaN - 32 // NaN
    NaN * 32 // NaN
    NaN / 32 // NaN
    ```
