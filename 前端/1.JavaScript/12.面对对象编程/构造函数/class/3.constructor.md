# constructor

## 概述

+ `constructor` 方法是类的默认方法，通过 `new` 命令生成对象实例时，自动调用该方法

+ 一个类必须有 `constructor` 方法，如果没有显式定义，一个空的 `constructor` 方法会被默认添加

    ```js
    // JavaScript 引擎会自动为它添加一个空的constructor方法
    class Point {
    }

    // 等同于
    class Point {
      constructor() {}
    }
    ```

+ `constructor` 方法默认返回实例对象（即 `this` ），完全可以指定返回另外一个对象

    ```js
    class Foo {
      constructor() {
        return Object.create(null);
      }
    }

    new Foo() instanceof Foo
    // false
    ```

+ 类必须使用 `new` 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 `new` 也可以执行

    ```js
    class Foo {
      constructor() {
        return Object.create(null);
      }
    }

    Foo()
    // TypeError: Class constructor Foo cannot be invoked without 'new'
    ```
