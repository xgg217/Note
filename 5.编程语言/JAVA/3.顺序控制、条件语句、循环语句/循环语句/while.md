# while

## 语法

+ 语法

  ```java
  while(循环条件) {
    // 执行代码

    // 循环变量迭代
  }
  ```

  ```java
  int i = 0;
  while (i < 5) {
      System.out.println(i);   // 0 1 2 3 4
      i++;
  }
  ```

+ while 是先判断后执行，条件一开始就为 false 时，循环体一次都不执行
