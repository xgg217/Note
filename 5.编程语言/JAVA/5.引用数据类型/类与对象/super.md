# super 关键字

## 概述

+ super 代表父类的引用，用于访问父类的属性、方法、构造器

## 语法

+ ``

+ 访问父类的属性，但不能访问父类 `private` 属性

  ```java
  class B extends A {
      public void hi() {
        // 调用父类属性
        super.属性名;
      }
  }
  ```

+ 访问父类的方法，不能访问父类的 `private` 方法


  ```java
  super.方法名(参数列表);

  class B extends A {
      public void hi() {
        // 调用父类方法
        super.test();
      }
  }
  ```

+ 访问父类构造器

  ```java
  // 只能出现在子类构造器中的第一行
  super(参数列表);
  ```
