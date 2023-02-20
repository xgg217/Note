# const断言

## 概述

+ `as const`断言，可以将代码中宽泛的数据类型定义具体话，从而避免我们在开发过程中，因为定义过于宽泛，造成的各种数据处理的错误，通过精准的数据类型定义，更好的管理我们前端代码

+ 注意：不是“强制转换”

## 语法

1.  `as const`

  ```js
  let y = [10, 'xgg'] as const;
  ```

2.  `<const>`

  ```js
  let y = <const>[10, 20];
  ```

## 字面量类型

+ 当我们使用关键字 `const` 声明一个字面量时，类型是等号右边的文字（将宽泛的类型，例如：字符串、数字转化成具体值类型）

  ```js
  const x = 'a'; // x 的 类型为 'a'，不可被修改

  ```

+ 用 `let` 而不是 `const`， 那么该变量会被重新分配，并且类型会被扩展为字符串类型

  ```js
  // x是宽泛的字符串类型，只要是字符串，即可赋值给变量x
  let x = 'a'; // 字符串类型
  ```

+ 使用 `as const`

  ```js
  let y = 'a' as const; // x 的 类型为 'a'，不可被修改
  ```

  ```js
  let x = "hello" as const;
  x = 'hello';  // ✅
  x = 'xx'; // ❌ 不能将类型“"xx"”分配给类型“"hello"”
  ```

## 数组

+ 数组被限定成了一个元组

  ```js
  let y = [10, 20] as const; // let y: readonly [10, 20]
  y[0] = 1; // ❌ 无法分配到 "0" ，因为它是只读属性

  // 使用 let 可以对数组重新赋值
  let y1 = [10, 20];
  y1 = [1, 2, 3];  // ✅ Type number[]

  // 使用 const 可以随意新增修改数组
  const y2 = [10, 20];
  y2[2] = 30;  // ✅ Type number[]

  ```

## 对象

+ 在每个属性中附加了 `readonly` 修饰符

  ```js
  const setCount = (n: number) => {
    return <const>{
      type: 'SET_COUNT',
      payload: n
    }
  }

  const action = setCount(3); // // { readonly type: "SET_COUNT"; readonly payload: number };

  // 类似
  {
    readonly type: "SET_COUNT";
    readonly payload: number
  };

  ```

+ 示例

  ```js
  let obj = {
    x: 10,
    y: [20, 30],
    z: {
      a:
        {  b: 42 }
    }
  } as const;

  // 对应于：
  let obj: {
    readonly x: 10;
    readonly y: readonly [20, 30];
    readonly z: {
      readonly a: {
        readonly b: 42;
      };
    };
  };

  ```

## 解构

+ 示例

  ```js
  function asConst(){
    let a:string = "abc";
    let b = (firstname:string,lastname:string):string => firstname + lastname;
    return [a,b];
  }

  let [p,q] = asConst();
  q("Green","Tom"); // 报错 原因是系统认为变量q的类型是string | ((firstname: string, lastname: string) => string)，编译器并不能认定q是一个函数

  // 解决办法
  (function() {
    function asConst(){
      let a:string = "abc";
      let b = (firstname:string,lastname:string):string => firstname + lastname;
      return [a,b] as const; // 返回值由宽泛变成具体的
  }

  ```
