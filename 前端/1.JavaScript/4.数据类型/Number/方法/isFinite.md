# isFinite

## 概述

+ `isFinite`方法返回一个布尔值，表示某个值是否为正常的数值

        ```js
        isFinite(Infinity) // false
        isFinite(-Infinity) // false
        isFinite(NaN) // false
        isFinite(undefined) // false
        isFinite(null) // true
        isFinite(-1) // true
        ```

+ 除了`Infinity`、`-Infinity`、`NaN`和`undefined`这几个值会返回`false`，`isFinite`对于其他的数值都会返回`true`
