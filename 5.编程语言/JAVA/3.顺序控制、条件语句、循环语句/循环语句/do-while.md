# do-while 循环

## 语法

+ 语法

  ```java
  do {
      // 循环体
  } while (条件);   // 注意结尾有分号
  ```

+ 执行顺序：先执行循环体 → 再判断条件 → 为 true 继续。

  ```java
  int i = 0;
  do {
      System.out.println(i);
      i++;
  } while (i < 5);
  ```

## while 与 do-while 区别

+ 核心区别： do-while 至少执行一次，即使条件一开始就是 false

  ```java
  int x = 100;
  while (x < 5) {
      System.out.println("while 不会执行");
  }

  do {
      System.out.println("do-while 会执行一次");   // ✅ 输出一次
  } while (x < 5);
  ```
