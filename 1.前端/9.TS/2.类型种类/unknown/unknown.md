# unknown

## 概述

  - 我们可以使用集合来理解 `never`，`unknown`  是全集，`never` 是最小单元（空集），任意类型都包含了 `never`

  - `unknown` — 表示万物

    ![](image/image_pocVeDiZGi.png)

## 使用 unknown

1.  相比 `any` 类型，TypeScript 会对 `unknown` 类型的变量执行类型检查

    ```typescript
    function invokeCallback(callback: unknown) {
      try {
        // Object is of type 'unknown'.(2571)
        callback(); // Error
      } catch (err) {
        console.error(err)
      }
    }

    // 解决办法
    function invokeCallback(callback: unknown) {
      try {
        if (typeof callback === 'function') {
          callback();
        }
      } catch (err) {
        console.error(err)
      }
    }

    invokeCallback(1);
    ```

2.  在实际工作中，你还可以通过 instanceof 或用户自定义类型守卫等方式来缩窄变量的类型

    ```typescript
    declare function isFunction(x: unknown): x is Function;

    function f20(x: unknown) {
      if (x instanceof Error) {
        x;  // Error
      }
      if (isFunction(x)) {
        x;  // Function
      }
    }
    ```

3.  用类型断言缩小未知范围

    ```typescript
    const getDogName = () => {
      let x: unknown;
      return x;
    };

    const dogName = getDogName();
    console.log((dogName as string).toLowerCase());
    ```

4.

## any与unknown

  - 你可以把任何值赋给 any 类型的变量，并对该变量执行任何操作；

    ```typescript
    // 使用 any
    // TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查
    let value: any;

    value.foo.bar; // OK
    value.trim(); // OK
    value(); // OK
    new value(); // OK
    value[0][1]; // OK
    ```

  - 你可以把任何值赋给 unknown 类型的变量，但你必须进行类型检查或类型断言才能对变量进行操作。

    ```typescript
    // 使用 unknown
    let value: unknown;

    // Object is of type 'unknown'.(2571)
    value.foo.bar; // Error
    value.trim(); // Error
    value(); // Error
    new value(); // Error
    value[0][1]; // Error
    ```

  - `unknown` 类型的变量只能赋值给 `any` 类型和 `unknown` 类型本身

    ```typescript
    let value: unknown;

    let value1: unknown = value; // OK
    let value2: any = value; // OK
    let value3: boolean = value; // Error
    let value4: number = value; // Error
    let value5: string = value; // Error
    let value6: object = value; // Error
    let value7: any[] = value; // Error
    let value8: Function = value; // Error
    ```

## 总结any与unknown

  - `unknown` 类型可以理解成我不知道它的类型

  - `any` 类型可以理解成我不在乎它的类型

## 联合类型

  - 如果联合类型中有unknown，那么最终得到的都是`unknown`类型

    ```typescript
    type U1 = unknown | null;
    type U2 = unknown | string;
    type U3 = unknown | number;

    // 类型别名 U1,U2,U3 都是 unknown 类型
    ```

## keyof unknown

  - 用 keyof 操作符对 `any` 和 `unknown` 进行操作：

      - `keyof any`：是 `string | number | symbol` 的联合类型

      - `keyof unknown`：是 `never` 类型
