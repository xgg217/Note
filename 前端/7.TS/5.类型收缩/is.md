# is之类型守卫

## 概述

+ `typeof`、`instanceof`、`in`、`==`、 `===`、 `!=`、 `!==` 不能满足

+ 使用 `is` 关键字自定义 `类型守卫`

## 语法

+ `is` 关键字 + 预期类型

+ 即如果这个函数成功返回为 `true` ，那么 `is` 关键字前这个入参的类型，就会被这个类型守卫调用方后续的类型控制流分析收集到

    ```js
    // 下面两个function 编译后的结果一样
    function isStr(p): p is string{
      return typeof p === 'string';
    }

    function isStr2(p): boolean{
      return typeof p === 'string';
    }


    function str2Uppercase(param) {
      console.log(param); // param: any

      if (isStr(param)) { // param: any
        console.log(param); // param: string
      }

      if (isStr2(param)) { // param: any
        console.log(param);// param: any
      }
    }
    ```

## 示例

+ 示例1：因为 isString 这个函数在另外一个地方，内部的判断逻辑并不在函数 foo 中。这里的类型控制流分析做不到跨函数上下文来进行类型的信息收集

    ```js
    function isString(input: unknown): boolean {
      return typeof input === "string";
    }

    function foo(input: string | number) {
      //
      if (isString(input)) {
        // 保存-+ 类型“string | number”上不存在属性“replace”
        (input).replace("linbudu", "linbudu599")
      }
      if (typeof input === 'number') { }
      // ...
    }
    ```

    ```js
    // 解决方案
    function isString(input: unknown): input is string {
      return typeof input === "string";
    }

    function foo(input: string | number) {
      if (isString(input)) {
        // 正确了
        (input).replace("linbudu", "linbudu599")
      }
      if (typeof input === 'number') { }
      // ...
    }
    ```

    ```js
    type Rect = {
      hegiht: number
      width: number
    }

    type Circle = {
      center: [number, number]
      radius: number
    }

    function isRect(a: Rect | Circle): a is Rect {
      return 'height' in a && 'width' in a
    }

    const f = (a: Rect | Circle) => {
      if(isRect(a)) {
        a.hegiht
      }
    }
    ```
