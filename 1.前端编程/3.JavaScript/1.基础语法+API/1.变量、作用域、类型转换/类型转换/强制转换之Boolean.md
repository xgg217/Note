# Boolean

## 概述

+ 将任意类型的值转为布尔值

## 规则

+ 转成 `false`

  + `0`

  + `-0`

  + `null`

  + `false`

  + `NaN`

  + `undefined`

  + 空字符串（`""`）

    ```js
    Boolean(undefined) // false
    Boolean(null) // false
    Boolean(0) // false
    Boolean(NaN) // false
    Boolean('') // false
    ```

+ 转成 `true`：所有其他值，包括任何对象，空数组（`[]`）或字符串 `"false"`

  ```js
  Boolean({}) // true
  Boolean([]) // true
  Boolean(new Boolean(false)) // true
  ```
