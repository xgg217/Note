# in 运算符

## 概述

+ 用来取出（遍历）联合类型的每一个成员类型

  ```js
  type U = 'a'|'b'|'c';

  type Foo = {
    [Prop in U]: number;
  };

  // 等同于
  type Foo = {
    a: number,
    b: number,
    c: number
  };
  ```

## 与联合类型

+ 与联合类型

  ```js
  {
    [k in "x" | "y"]: number
  }

  // {x: number; y:number}
  ```

## 与 keyof 结合

+ 把 `keyof` 放入到索引中使用

  ```js
  type User = {
    readonly id: number,
    name: string
    tel: string
    address?: string
  }

  // keyof User --> id | name | tel | address
  type CopyUser = {
    [key in keyof User]: User[key]
  }

  const u: CopyUser = {
    id: 1,
    name: "aaa",
    tel: "123456",
    address: "beijing"
  }
  ```
