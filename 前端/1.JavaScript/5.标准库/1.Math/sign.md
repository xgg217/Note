# sign

## 作用

- 用来判断一个数到底是正数、负数、还是零

- 对于非数值，会先将其转换为数值

- 它会返回五种值

  - 参数为**正数**，返回 `+1`；

  - 参数为**负数**，返回 `-1`；

  - 参数为**0**，返回 `0`；

  - 参数为 **-0**，返回 `-0`;

  - 其他值，返回 `NaN`

    ```js
    Math.sign(-5) // -1
    Math.sign(5) // +1
    Math.sign(0) // +0
    Math.sign(-0) // -0
    Math.sign(NaN) // NaN
    ```

- 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回 `NaN`

    ```js
    Math.sign('')  // 0
    Math.sign(true)  // +1
    Math.sign(false)  // 0
    Math.sign(null)  // 0
    Math.sign('9')  // +1
    Math.sign('foo')  // NaN
    Math.sign()  // NaN
    Math.sign(undefined)  // NaN
    ```
