# 条件类型extends

## 概述

+ 条件类型：允许我们检测两种类型的关系，可以通过条件类型来判断类型是否相兼容

+ TypeScript 2.8 版本引入了条件类型

## 语法

+ 语法：当类型 T 可以赋值给 U 时（`extends` 在 TypeScript 中可以理解为 Assignable），返回 X 类型，否则返回 Y 类型

  ```js
  // 其中的 T、U、X、Y 都是类型占位符
  T extends U ? X : Y
  ```

  ![](image/image_4sdTxpy8K4.png)

## extends

+ 条件类型中使用 `extends` 判断类型的兼容性，而非判断类型的全等性。这是因为在类型层面中，对于能够进行赋值操作的两个变量，我们并不需要它们的类型完全相等，只需要具有兼容性，而两个完全相同的类型，其 `extends` 自然也是成立的

## 条件类型使用

+ 例如

  ```js
  // 需要判断一个类型是否为字符串类型
  type IsString<T> = T extends string ? true : false;

  type T0 = IsString<number>; // false
  type T2 = IsString<"abc">; // false

  ```

## 条件链

+ JS 的三元表达式的条件链

  ```js
  condition1 ? value1
  : condition2 ? value3
  : condition3 ? value3
  : value4

  // 相当于
  if(condition1) { return value1;}
  else if( condition2) { return value2;}
  else if( condition3) { return value3;}
  else { return value4;}

  ```

+ TS

  ```js
  type TypeName<T> =
    T extends string ? 'string' :
    T extends string ? 'number' :
    T extends string ? 'boolean' :
    T extends string ? 'undefined' :
    T extends string ? 'function' :
    'object';

  type T0 = TypeName<string>; // 'string'
  type T1 = TypeName<'a'>; // 'string'
  type T2 = TypeName<true>; // 'boolean'
  type T3 = TypeName<() => void>; // "object"
  type T4 = TypeName<string[]>; // "object"
  ```

## 联合类型

+ **当条件类型的左边**是联合类型( `T extends number` )，会把联合类型的每个类型单独传入求值，把每个的结果合并成联合类型，这叫做分布式条件类型

+ 当传入联合类型以后，发现最终返回的结果也变成了联合类型，并且是将传入的联合类型分别判断的结果

  ```js
  type Test<T> = T extends number ? 1 : 2;

  // 相当于把 1传入Test求值，把 ‘a’传入Test求值
  // 最后把结果合并成联合类型，也就是 1 | 2
  type res = Test<1 | 'a'>; // 1 | 2
  ```

  ```js
  type TypeName<T> =
    T extends string ? 'string' :
    T extends string ? 'number' :
    T extends string ? 'boolean' :
    T extends string ? 'undefined' :
    T extends string ? 'function' :
    'object';

  type T5 = TypeName<string | string[]>; // "string" | "object"
  ```

## 分布式条件类型

+ 在条件类型（ `T extends U ? X : Y`）中，如果被检查的类型是一个“裸”类型参数，则被称为分布式条件类型

+ 裸类型

    + 没有被 数组（`T[]`）、元组（\[`T`]）、Promise（`Promise<T>`）等包装过的类型

+ 参数

    + 下面的工具类型中，泛型表达式中的 `T` 就是类型参数

      ```js
      type IsString<T> = T extends string ? true : false
      ```

## 分布式类型计算过程

+ 如果传入的被检查类型是 **联合类型**，会被分解成多个分支

  ![](image/image_rynVHVpQfI.png)
