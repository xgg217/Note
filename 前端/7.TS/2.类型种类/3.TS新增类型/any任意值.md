# any任意值

## 概述

  - 任意值（Any）用来表示允许赋值为任意类型

  - ts 不进行类型检查

## any 任意类型

  - 如果是一个普通类型，在赋值过程中改变类型是不被允许的：

    ```javascript
    let myFavoriteNumber: string = 'seven';
    myFavoriteNumber = 7;

    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
    ```

  - 但如果是 `any` 类型，则允许被赋值为任意类型

    ```javascript
    let myFavoriteNumber: any = 'seven';
    myFavoriteNumber = 7;
    ```

  - 不进行类型检查

    ```typescript
    var t:any = 10;
    t = "jspang"
    t = true
    console.log(t); // true
    ```

## 任意值的属性和方法

  - 在任意值上访问任何属性都是允许的：

    ```javascript
    let anyThing: any = 'hello';
    console.log(anyThing.myName);
    console.log(anyThing.myName.firstName);
    ```

  - 也允许调用任何方法：

    ```javascript
    let anyThing: any = 'Tom';
    anyThing.setName('Jerry');
    anyThing.setName('Jerry').sayHello();
    anyThing.myName.setFirstName('Cat')
    ```

  - **声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**

## 未声明类型的变量

  - 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

    ```javascript
    let something;
    something = 'seven';
    something = 7;

    something.setName('Tom');
    ```

  - 等价于

    ```javascript
    let something: any;
    something = 'seven';
    something = 7;

    something.setName('Tom');
    ```

## 注意

  - 一旦用了 `any` ，我们就失去了 TypeScript 静态类型系统提供的所有保护

  - 更好的选择是：

      - 使用更具体的类型

      - 使用 `unknown`

  - 总而言之，使用 `any` 是最下策
