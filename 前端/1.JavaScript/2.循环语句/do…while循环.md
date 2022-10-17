# do…while循环

## 使用

- `do...while` 循环与 `while` 循环类似，

- 唯一的区别就是先运行一次循环体，然后判断循环条件

    ```js
    do {
      statement
    } while (expression);
    ```

- 不管条件是否为真，`do..while` 循环至少运行一次，这是这种结构最大的特点

- `while`语句后面的**分号不能省略**

    ```js
    var x = 3;
    var i = 0;

    do {
      console.log(i);
      i++;
    } while(i < x);
    ```
