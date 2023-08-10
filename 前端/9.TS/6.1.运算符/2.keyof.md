# keyof

## 概述

+ keyof 是一个单目运算符，接受一个对象类型作为参数，返回该对象的所有键名组成的联合类型

  ```js
  type MyObj = {
    foo: number,
    bar: string,
  };

  type Keys = keyof MyObj; // 'foo'|'bar'
  ```

  ```js
  interface T {
    0: boolean;
    a: string;
    b(): void;
  }

  type KeyT = keyof T; // 0 | 'a' | 'b'
  ```

## 数组 与 元组 使用 keyof

+ keyof 运算符用于数组或元组类型，会返回数组的所有键名，包括数字键名和继承的键名

  ```js
  type Result = keyof ['a', 'b', 'c'];

  // 返回 number | "0" | "1" | "2"
  // | "length" | "pop" | "push" | ···
  ```

## keyof 运算符的用途

+ 取出对象的某个指定属性的值

  ```js
  function prop<Obj, K extends keyof Obj>(obj:Obj, key:K):Obj[K] {
    return obj[key];
  }
  ```

+ 属性映射:即将一个类型的所有属性逐一映射成其他值

  ```js
  type NewProps<Obj> = {
    [Prop in keyof Obj]: boolean;
  };

  // 用法
  type MyObj = { foo: number; };

  // 等于 { foo: boolean; }
  type NewObj = NewProps<MyObj>;
  ```
