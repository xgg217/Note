# instanceof类型守卫

## 概述

  - `instanceof` 也是一种类型保护，TypeScript 也可以通过识别 `instanceof` 正确的类型收窄

    ```typescript
    function logValue(x:Date | string) {
      if(x instanceof Date) {
        // 时间
      } else {
        // 字符串
    }
    ```

## 类

  - 类

    ```typescript
    class Dad {
      makeMoney = "makeMoney"
    }

    class Mom {
      spendMoney = "spendMoney"
    }

    function test( abilty: Dad | Mom) {
      if(abilty instanceof Dad) {
        // Dad 类型
      } else {
        // Mom 类型
      }
    }
    ```
