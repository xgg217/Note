# NaN

## 描述

*   `NaN` 是一个全局对象的属性

    ```javascript
    5 - 'x'  // NaN

    Math.acos(2) // NaN
    Math.log(-1) // NaN
    Math.sqrt(-1) // NaN

    0 / 0 // NaN
    ```

*   `NaN` 属性的初始值就是 `NaN`，和 `Number.NaN` 的值一样。

*   在现代浏览器中（ES5中）， NaN 属性是一个不可配置（non-configurable），不可写（non-writable）的属性。但在ES3中，这个属性的值是可以被更改的，但是也应该避免覆盖。

*   编码中很少直接使用到 `NaN`。通常都是在计算失败时，作为 `Math` 的某个方法的返回值出现的（例如：`Math.sqrt(-1)`）或者尝试将一个字符串解析成数字但失败了的时候（例如：`parseInt("blabla")`）

## 运算规则

*   `NaN` 不等于任何值，包括它本身

    ```javascript
    NaN == NaN // false

    NaN === NaN // false
    ```

*   数组的 `indexOf` 方法内部使用的是 **严格相等** 运算符，所以该方法对 `NaN` 不成立

    ```javascript
    [NaN].indexOf(NaN) // -1
    ```

*   `NaN` 在布尔运算时被当作 `false`

    ```javascript
    Boolean(NaN) // false
    ```

*   `NaN` 与任何数（包括它自己）的运算，得到的都是 `NaN`

    ```javascript
    NaN + 32 // NaN
    NaN - 32 // NaN
    NaN * 32 // NaN
    NaN / 32 // NaN
    ```

## typeof

*   需要注意的是，`NaN` 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 `Number`，使用 `typeof` 运算符可以看得很清楚

    ```javascript
    typeof NaN // 'number'
    ```

## 判断一个值是否是NaN

*   `NaN` 如果通过 `==` 、 `!=` 、 `===` 、以及 `!==` 与其他任何值比较都将不相等。包括与其他 `NaN` 值进行比较。

*   **必须**使用 `Number.isNaN()` 或 `isNaN()` 函数。

*   在执行自比较之中：`NaN`，也只有 `NaN`，比较之中不等于它自己

    ```javascript
    NaN === NaN;        // false
    Number.NaN === NaN; // false
    isNaN(NaN);         // true
    isNaN(Number.NaN);  // true

    function valueIsNaN(v) { return v !== v; }
    valueIsNaN(1);          // false
    valueIsNaN(NaN);        // true
    valueIsNaN(Number.NaN); // true
    ```

## isNaN() 和 Number.isNaN() 区别

*   如果当前值是 `NaN`，或者将其强制转换为数字后将是 `NaN`，则 `isNaN()` 将返回 `true` 。

*   而 `Number.isNaN()` 仅当值当前为 `NaN` 时才为 `true`&#x20;

    ```javascript
    isNaN('hello world');        // true
    Number.isNaN('hello world'); // false
    ```
