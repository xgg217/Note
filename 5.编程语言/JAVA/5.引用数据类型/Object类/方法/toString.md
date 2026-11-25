# toString

## 概述

+ 是 Object 类中定义的方法，用于返回对象的字符串表

  + 子类往往会重写 toString 方法，用于返回对象的属性信息

+ 返回值：全类名 + @ + 哈希值的十六进制

+ 源码

  ```java
  public String toString() {
      return getClass().getName() + "@" + Integer.toHexString(hashCode());
  }
  ```

+ 默认行为

  ```java
  Object obj = new Object();
  System.out.println(obj); // java.lang.Object@1b6d3586
  ```

+ 当直接输出一个对象时，toString 方法会被默认的调用

  ```java
  System.out.println(obj); // 默认调用 obj.toString()
  ```
