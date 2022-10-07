# never

## 概述

  - `never` 类型表示的是那些永不存在的值的类型

## never 类型：主要针对函数返回值

  - 约束函数返回值，它表示该函数永远**不可能结束**

  - 是其他类型（包括 `null` 和 `undefined`）的子类型，表示从不会出现的值

  - 意味着声明 `never` 的变量只能被 `never` 类型所赋值

    ```ts
    // 正确
    function a():never {
      throw new Error('错误');
    };
    ```

## 联合类型 以利⽤ never 类型的特性来实现全⾯性检查

  - 以利⽤ never 类型的特性来实现全⾯性检查

    ```js
    type Foo = string | number;
    function controlFlowAnalysisWithNever(foo: Foo) {
      if (typeof foo === "string") {
        // 这⾥ foo 被收窄为 string 类型
      } else if (typeof foo === "number") {
        // 这⾥ foo 被收窄为 number 类型
      } else {
        // foo 在这⾥是 never
        const check: never = foo;
      }
    }
    ```

  - 注意在 `else` 分⽀⾥⾯，我们把收窄为 `never` 的 foo 赋值给⼀个显示声明的 `never` 变量

  - 如果⼀切逻辑正确，那么这⾥应该能够编译通过。但是假如后来有⼀天你的同事修改了 Foo 的类型：

    ```js
    type Foo = string | number | boolean;
    ```

  - 然⽽他忘记同时修改 `controlFlowAnalysisWithNever` ⽅法中的控制流程，这时候 `else` 分⽀的 foo 类型会被收窄为 boolean 类型，导致⽆法赋值给 `never` 类型，这时就会产⽣⼀个编译错误。通过这个⽅式，我们可以确保 `controlFlowAnalysisWithNever` ⽅法总是穷尽了 Foo 的所有可能类型

  - 通过这个示例，我们可以得出⼀个结论：使⽤ `never` 避免出现新增了 **联合类型** 没有对应的实现，⽬的就是写出类型绝对安全的代码

## null/undefined 和 never

  - `never` 特殊在，除了自身以外，没有任何类型是它的子类型，或者说可以赋值给它

    ```ts
    // null 和 undefined，可以被 never 赋值
    declare const n: never;

    let a: null = n; // 正确
    let b: undefined = n; // 正确

    // never 是 bottom type，除了自己以外没有任何类型可以赋值给它
    let ne: never;

    ne = null; // 错误
    ne = undefined; // 错误

    declare const an: any;
    ne = an; // 错误，any 也不可以

    declareconst nev: never;
    ne = nev; // 正确，只有 never 可以赋值给 never
    ```
