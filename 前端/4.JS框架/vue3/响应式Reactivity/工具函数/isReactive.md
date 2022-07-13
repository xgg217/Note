# isReactive

## 概述

*   判断某个数据是否是通过`reactive()` 或 `shallowReactive()` 创建的

## TS类型

*   类型

    ```typescript
    function isReactive(value: unknown): boolean
    ```

## 示例

*   示例

    ```javascript
    const obj1 = reactive({ a:' 张三' });
    console.log(isReactive(obj1)); // true

    ```

    ```javascript
    const obj2 = readonly({ a:' 张三' });
    console.log(isReactive(obj2)); // false
    ```

    ```javascript
    const obj1 = reactive({ a:' 张三' });
    const obj6 = readonly(obj1);
    console.log(isReactive(obj6)); // false
    ```
