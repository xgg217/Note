# 基础

## 概述

+ 任意值（Any）用来表示允许赋值为任意类型

  ```js
  let x:any;

  x = 1; // 正确
  x = 'foo'; // 正确
  x = true; // 正确
  ```

+ 变量类型一旦设为 `any` ，TypeScript 实际上会关闭这个变量的类型检查
+ 即使有明显的类型错误，只要句法正确，都不会报错

  ```js
  let x:any = 'hello';

  x(1) // 不报错
  x.foo = 100; // 不报错
  ```

+ 在任意值上访问任何属性都是允许的

  ```js
  let anyThing: any = 'hello';
  console.log(anyThing.myName);
  console.log(anyThing.myName.firstName);
  ```

+ 也允许调用任何方法

  ```js
  let anyThing: any = 'Tom';
  anyThing.setName('Jerry');
  anyThing.setName('Jerry').sayHello();
  anyThing.myName.setFirstName('Cat')
  ```

+ 除了 `never` `unknon` `any` `void`

## 未声明类型的变量

+ 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

  ```js
  let something;
  something = 'seven';
  something = 7;

  something.setName('Tom');
  ```

+ 等价于

  ```js
  let something: any;
  something = 'seven';
  something = 7;

  something.setName('Tom');
  ```

+ TypeScript 提供了一个编译选项 `noImplicitAny` ，打开该选项，只要推断出 `any` 类型就会报错

## 污染问题

+ any类型除了关闭类型检查，还有一个很大的问题，就是它会“污染”其他变量
+ 它可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错

  ```js
  let x:any = 'hello';

  let y:number;

  y = x; // 不报错

  y * 123 // 不报错
  y.toFixed() // 不报错
  ```

## 使用场景

1. 出于特殊原因，需要关闭某些变量的类型检查，就可以把该变量的类型设为 `any`
2. 为了适配以前老的 JavaScript 项目，让代码快速迁移到 TypeScript，可以把变量类型设为any。有些年代很久的大型 JavaScript 项目，尤其是别人的代码，很难为每一行适配正确的类型，这时你为那些类型复杂的变量加上any，TypeScript 编译时就不会报错

## 注意

+ 如果是类型不兼容报错导致你使用 `any`，考虑用类型断言替代
+ 如果是类型太复杂导致你不想全部声明而使用 `any`，考虑将这一处的类型去断言为你需要的最简类型。

  + 如你需要调用 `foo.bar.baz()`，就可以先将 foo 断言为一个具有 bar 方法的类型

+ 如果你是想表达一个未知类型，更合理的方式是使用 `unknown`

+ 总而言之，使用 `any` 是最下策
