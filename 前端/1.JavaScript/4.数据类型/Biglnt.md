# Biglnt

## 出现的原因

- JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制

    1. 数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算

    2. 大于或等于2的1024次方的数值，JavaScript 无法表示，会返回 `Infinity`

        ```js
        // 超过 53 个二进制位的数值，无法保持精度
        Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

        // 超过 2 的 1024 次方的数值，无法表示
        Math.pow(2, 1024) // Infinity
        ```

- ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题，这是 ECMAScript 的第八种数据类型

- BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示

## 语法

1. 可以用在一个整数字面量后面加 `n` 的方式定义一个 `BigInt`

    ```js
    const theBiggestInt = 9007199254740991n;

    ```

2. 调用函数 `BigInt()`（但不包含 `new` 运算符）并传递一个整数值或字符串值

    ```js
    const alsoHuge = BigInt(9007199254740991);
    // 9007199254740991n

    const hugeString = BigInt("9007199254740991");
    // 9007199254740991n
    ```

## 类型信息

- 使用 `typeof` 测试时， `BigInt` 对象返回 "bigint"

    ```js
    typeof 1n === 'bigint'; // true
    typeof BigInt('1') === 'bigint'; // true
    ```

## 运算

- 操作符`+`、`*`、`-`、`**`、`%`和 `BigInt` 一起使用

- `BigInt` 不支持单目 (`+`) 运算符

## 注意点

1. 不能用于 `Math` 对象中的方法

2. 不能和任何 `Number` 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 `Number` 变量时可能会丢失精度

3. 使用 `BigInt` 时，带小数的运算会被取整

    ```js
    const expected = 4n / 2n;
    // 2n

    const rounded = 5n / 2n;
    // 2n, not 2.5n
    ```
