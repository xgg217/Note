# Infinity

## 概述

- `Infinity`表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到`Infinity`

```js
// 场景一
Math.pow(2, 1024)
// Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
```

- `Infinity`有正负之分，`Infinity`表示正的无穷，`-Infinity`表示负的无穷

    ```js
    Infinity === -Infinity // false

    1 / -0 // -Infinity
    -1 / -0 // Infinity
    ```

## 运算规则

- `Infinity`的四则运算，符合无穷的数学计算规则

    ```js
    5 * Infinity // Infinity
    5 - Infinity // -Infinity
    Infinity / 5 // Infinity
    5 / Infinity // 0
    ```

- 0乘以`Infinity`，返回`NaN`；0除以`Infinity`，返回`0`；`Infinity`除以0，返回`Infinity`

    ```js
    0 * Infinity // NaN
    0 / Infinity // 0
    Infinity / 0 // Infinity
    ```

- `Infinity`加上或乘以`Infinity`，返回的还是`Infinity`

    ```js
    Infinity + Infinity // Infinity
    Infinity * Infinity // Infinity
    ```

- `Infinity`减去或除以`Infinity`，得到`NaN`

    ```js
    Infinity - Infinity // NaN
    Infinity / Infinity // NaN
    ```

- `Infinity`与`null`计算时，`null`会转成0，等同于与`0`的计算

    ```js
    null * Infinity // NaN
    null / Infinity // 0
    Infinity / null // Infinity
    ```

- `Infinity`与`undefined`计算，返回的都是`NaN`

    ```js
    undefined + Infinity // NaN
    undefined - Infinity // NaN
    undefined * Infinity // NaN
    undefined / Infinity // NaN
    Infinity / undefined // NaN
    ```
