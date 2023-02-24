# for循环

## 作用

+ `for` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件

    ```js
    for (initialize; test; increment) {
      statement
    }
    ```

## 使用

+ for语句后面的括号里面，有三个表达式

  - 初始化表达式（initialize）：确定循环的初始值，只在循环开始时执行一次

  - 测试表达式（test）：检查循环条件，只要为真就进行后续操作

  - 测试表达式（test）：检查循环条件，只要为真就进行后续操作

    ```js
    var x = 3;
    for (var i = 0; i < x; i++) {
      console.log(i);
    }
    // 0
    // 1
    // 2
    ```

## 与 while 循环

+ 所有 `for` 循环，都可以改写成 `while` 循环

    ```js
    var x = 3;
    var i = 0;

    while (i < x) {
      console.log(i);
      i++;
    }
    ```
