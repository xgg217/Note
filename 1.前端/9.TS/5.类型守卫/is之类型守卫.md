# is之类型守卫

## 概述

  - `typeof`、`instanceof`、`in`、`==`、 `===`、 `!=`、 `!==` 不能满足

  - 使用 `is` 关键字自定义 `类型守卫`

## 使用

  - 使用

    ```typescript
    // 下面两个function 编译后的结果一样

    function isStr(p): p is string{
      return typeof p === 'string';
    }

    function isStr2(p): boolean{
      return typeof p === 'string';
    }
    ```

  - 区别

    ```typescript

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
