# number

## 数值类型 number

  - 不分是整数还是小数

    ```typescript
    let flag:number = 123;
    flag = 123;

    flag = false; // 错误
    ```

    ```typescript
    var age:number = 18
    var stature:number = 178.5
    console.log(age); // 18
    console.log(stature); // 178.5
    ```

## bigint

  - 大数字

    ```javascript
    let big: bigint =  100n;
    ```

## 注意

  - 然number和bigint都表示数字，但是这两个类型不兼容

    ```javascript
    let big: bigint =  100n;
    let num: number = 6;
    big = num;
    num = big;

    // 会抛出一个类型不兼容的 ts(2322) 错误。
    ```
