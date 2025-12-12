# this的类型体操

## ThisType

+ 用于定义对象字面量的方法中 this 的类型

+ 使用

  ```js
  type Foo = {
    a: number;
    b: number;
    foo: () => number;
  } & ThisType<{
    a: number;
    b: number;
  }>

  const foo: Foo = {
    a: 1,
    b: 2,
    foo() {
      return this.a + this.b; // 此处的 this 只能访问a,b
    },
  };
  ```

## 配合 noImplicitThis 选项

+ 启用 `noImplicitThis` 编译器选项时，TypeScript 会强制要求显式指定 this 类型，此时 ThisType 变得尤为重要
