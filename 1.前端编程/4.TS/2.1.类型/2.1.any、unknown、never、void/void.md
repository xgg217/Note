# void

## JS

+ 在JavaScript中，void有特殊的用法

  ```html
  <!-- void(0) 等价于 void 0 -->
  <a href="javascript:void(0)">点击</a>

  ```

## TS

+ 在Typescript中，void也表示一种类型，用于描述一个内部没有 return 语句，或者没有显式 return 一个值的函数的返回值

  ```js
  // 返回值类型会被隐式推导为 void
  function fn1() {}

  // 返回值类型会被隐式推导为 void
  function fn2() {
    return;
  }

  // 显式返回了 undefined 值的 fn3 其返回值类型才被推导为了 undefined
  function fn3() {
    return undefined;
  }

  let m1 = fn1();
  let m2 = fn2();
  let m3 = fn3();
  console.log(m1, m2, m3);
  ```

+ 注：fn3只有在tsconfig.json中开启了 `strictNullChecks:true` 的情况下，其返回值类型才会被推导为 `undefined` ，如果没有开启 `strict` 模式，或者关闭了strictNullChecks，fn3函数的返回值类型会被默认推导为any

+ 虽然 fn3 的返回值类型会被推导为 `undefined` ，但仍然可以使用 `void` 类型进行标注

  ```js
  function fn3():void {
    return undefined;
  }
  ```

+ `undefined` 能够被赋值给 `void` 类型的变量，就像在 JavaScript 中一个没有返回值的函数会默认返回一个 `undefined` , 其实主要还是为了兼容性
+ 但是，在strict模式下，`null` 类型会报错，除非关闭 `strictNullChecks`

  ```js
  function fn3():void {
    return undefined;
  }

  function fn4():void {
    return null; // error 不能将类型null分配给类型void，关闭strictNullChecks不报错
  }

  let v1: void = undefined;
  let v2: void = null; // error 不能将类型null分配给类型void，关闭strictNullChecks不报错
  ```
