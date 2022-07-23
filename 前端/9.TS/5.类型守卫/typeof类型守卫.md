# typeof类型守卫

## 概述

  - typeof运算符用于获取操作数的数据类型

  - typeof运算符的返回值是一个字符串，该字符串表明了操作数的数据类型

  - 由于支持的数据类型的种类是固定的，因此typeof运算符的返回值也是一个有限集合

    | 操作数的类型       | type 返回值      |
    | ------------ | ------------- |
    | Undefined 类型 | `"undefined"` |
    | Nnll 类型      | `"object"`    |
    | Number 类型    | `"number"`    |
    | Boolean 类型   | `"boolean"`   |
    | String 类型    | `"string"`    |
    | Symbol 类型    | `"symbol"`    |
    | BigInt 类型    | `"bigint"`    |
    | 函数类型         | `"function"`  |
    | 对象类型         | `"object"`    |
