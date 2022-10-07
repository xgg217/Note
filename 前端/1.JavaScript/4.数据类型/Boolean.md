# Boolean

## toString()

  - 功能：根据布尔值返回字符串 `"true"` 或 `"false"`

  - 注释：在 `Boolean` 对象被用于字符串环境中时，此方法会被自动调用

## valueOf()

  - 功能：返回 Boolean 对象的原始值

    ```js
    const isA = Boolean(1);
    console.log(isA);  // true
    console.log(isA.valueOf());  // true
    ```
