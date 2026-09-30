# while循环 与 do…while循环

## while循环

+ `While` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块

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

## while无限循环

+ 条件总是为真

  ```js
  while (true) {
    console.log('Hello, world');
  }
  ```

## do…while循环

+ `do...while` 循环与 `while` 循环类似

+ 唯一的区别就是先运行一次循环体，然后判断循环条件

  ```js
  do {
    statement
  } while (expression);
  ```

+ 不管条件是否为真，`do..while` 循环至少运行一次，这是这种结构最大的特点

+ `while` 语句后面的**分号不能省略**

  ```js
  var x = 3;
  var i = 0;

  do {
    console.log(i);
    i++;
  } while(i < x);
  ```
