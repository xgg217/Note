# description

## 作用

- 读取描述符

## 概述

- 创建 Symbol 的时候，可以添加一个描述

    ```js
    // sym的描述就是字符串foo
    const sym = Symbol('foo');
    ```

## 读取描述符

- 代码

    ```js
    // const sym = Symbol('foo');
    sym.description // "foo"

    ```
