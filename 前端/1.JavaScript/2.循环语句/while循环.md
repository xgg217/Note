# while循环

## 作用

  - `While` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块

    ```js
    while (expression) {
      statement;
    }
    ```

    ```js
    var i = 0;

    while (i < 100) {
      console.log('i当前为：' + i);
      i += 1;
    }
    ```

## 无限循环

  - 条件总是为真

    ```js
    while (true) {
      console.log('Hello, world');
    }
    ```
