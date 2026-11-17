# int 和 char 类型互转

## 概述

+ int 和 char 之间比较特殊，可以互转，也会在以后的学习当中经常遇到

## 将整型 int 转换为字符 char

+ 可以通过强制类型转换将整型 int 转换为字符 char

  ```java
  int value_int = 65;
  char value_char  = (char) value_int;
  System.out.println(value_char);
  ```

+ 输出 A(其 ASCII 值可以通过整数 65 来表示)


## int 转换为字符 char

+ 可以使用 `Character.forDigit()` 方法将整型 int 转换为字符 char，参数 radix 为基数，十进制为 10，十六进制为 16

  ```java
  int radix = 10;
  int value_int = 6;
  char value_char = Character.forDigit(value_int , radix);
  System.out.println(value_char );
  ```

## int 转换为字符 char

+ 可以使用 int 的包装器类型 Integer 的 toString() 方法+String 的 charAt() 方法转成 char

  ```java
  int value_int = 1;
  char value_char = Integer.toString(value_int).charAt(0);
  System.out.println(value_char );
  ```

## char 转 int

+ 简单的 char 转 int，直接赋值就可以了

  ```java
  // 自动类型转换
  int a = 'a';

  // 如果字符本身就是数字，这种方法就行不通了
  int a = '1'; // a 的值是 49，而不是 1。因为字符 '1' 的 ASCII 码是 49

  // 解决办法1
  int a = Character.getNumericValue('1'); // a 就是 1
  // 解决办法2
  int a = Character.digit('1', 10); // a 就是 1
  // 解决办法3
  int a = '1' - '0'; // a 就是 1
  ```

