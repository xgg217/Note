# super 关键字

## 概述

+ super 代表父类的引用，用于访问父类的属性、方法、构造器

## super 带来的好处

+ 调用父类的构造器（分工明确，父类属性由父类初始化，子类的属性由子类初始化）

## 注意点

+ 当子类中有和父类成员存在重名的属性和方法时，想要直接调用父类的方法时，必须通过 super

  + 如果没有重名则使用 `super` 、 `this` 、 `直接访问` 的效果是一样的

  ```java
  class A {
    public void say() {}
  }

  class B extends A {
    public void test() {
      say();
      this.say();
      super.say();
    }
  }
  ```

+ `super` 的访问不限于直接父类，如果爷爷类和本类中有同名的成员，也可以使用 super 去访问爷爷类的成员，如果多个基类（上级类）中都有同名成员，使用 super 访问遵循就近原则

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
