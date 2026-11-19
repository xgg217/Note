# switch

## 语法

+ 语法

  ```java
  switch(表达式) {
    case 常量1:
      // 执行语句
      break;
    case 常量2:
      // 执行语句
      break;
    ...
    default:
      // 都不匹配时执行
  }
  ```

  ```java
  int day = 3;
  switch (day) {
      case 1:
          System.out.println("周一");
          break;
      case 2:
          System.out.println("周二");
          break;
      case 3:
          System.out.println("周三");
          break;
      default:
          System.out.println("其他");
  }
  ```

## 箭头语法 ->（不会穿透）

+ 语法:箭头语法自动 `break` ，无需写 `break`

  ```java
  int day = 3;
  switch (day) {
      case 1 -> System.out.println("周一");
      case 2 -> System.out.println("周二");
      case 3 -> System.out.println("周三");
      default -> System.out.println("其他");
  }
  ```

+ 多个 case 用逗号分隔：

  ```java
  switch (day) {
      case 1, 2, 3, 4, 5 -> System.out.println("工作日");
      case 6, 7           -> System.out.println("周末");
  }
  ```

+ switch 表达式（有返回值

  ```java
  int day = 3;
  String name = switch (day) {
      case 1 -> "周一";
      case 2 -> "周二";
      case 3 -> "周三";
      default -> "其他";
  };
  System.out.println(name);   // 周三
  ```

## 模式匹配 switch

+ 模式匹配 switch

  ```java
  Object obj = 42;
  String result = switch (obj) {
      case Integer i when i > 0 -> "正整数: " + i;
      case Integer i            -> "非正整数: " + i;
      case String s             -> "字符串: " + s;
      case null                 -> "空值";
      default                   -> "其他类型";
  };
  ```

