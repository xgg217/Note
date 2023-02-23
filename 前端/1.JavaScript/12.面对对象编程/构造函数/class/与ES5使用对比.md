# 与ES5使用对比

## 区别

+ 不存在 **函数声明提升**

+ 必须要通过 `new` 声明，才能使用

+ 方法之间不需要**逗号**分隔，加了会报错（下面会解释）

+ 使用的时候，也是直接对类使用 `new` 命令，跟构造函数的用法完全一致

    ```js
    class Bar {
      doStuff() {
        console.log('stuff');
      }
    }

    var b = new Bar();
    b.doStuff() // "stuff"
    ```

+ 构造函数的 `prototype` 属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的 `prototype` 属性上面

    ```js
    class Point {
      constructor() {
        // ...
      }

      toString() {
        // ...
      }

      toValue() {
        // ...
      }
    }

    // 等同于

    Point.prototype = {
      constructor() {},
      toString() {},
      toValue() {},
    };
    ```

+ 在类的实例上面调用方法，其实就是调用原型上的方法

    ```js
    class B {}
    let b = new B();

    b.constructor === B.prototype.constructor // true
    ```

+ 由于类的方法都定义在 `prototype` 对象上面，所以类的新方法可以添加在 `prototype` 对象上面。 `Object.assign` 方法可以很方便地一次向类添加多个方法

    ```js
    class Point {
      constructor(){
        // ...
      }
    }

    Object.assign(Point.prototype, {
      toString(){},
      toValue(){}
    });
    ```

+ `prototype` 对象的 `constructor` 属性，直接指向“类”的本身，这与 ES5 的行为是一致的

    ```js
    class Point {
      constructor(x, y) {
        // ...
      }

      toString() {
        // ...
      }
    }

    Object.keys(Point.prototype)
    // []
    Object.getOwnPropertyNames(Point.prototype)
    // ["constructor","toString"]
    ```

+ `prototype` 对象的 `constructor` 属性，直接指向“类”的本身，这与 ES5 的行为是一致的

    ```js
    Point.prototype.constructor === Point // true
    ```

+ 类的属性名，可以采用表达式

    ```js
    let methodName = 'getArea';

    class Square {
      constructor(length) {
        // ...
      }

      [methodName]() {
        // ...
      }
    }
    ```

## 方法之间不需要 逗号 分隔

+ 方法之间不需要**逗号**分隔

+ 加了会报错

    ```js
    //定义类
    class Point {
      // constructor方法，这就是构造方法
      constructor(x, y = 0) {
        this.x = x;
        this.y = y;
        this.fun = function() {
          // 私有方法
          return this.x;
        }
      }

      // 原型方法
      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
    }
    console.log(typeof(Point)); // 'function'
    Point(); // 报错 Class constructor Point cannot be invoked without 'new'
    ```

    ```js
    // ES6 的类，完全可以看作构造函数的另一种写法
    class Point {
      // ...
    }

    typeof Point // "function"
    Point === Point.prototype.constructor // true
    ```

## 内部定义的方法不可枚举

+ 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。这一点与 ES5 的行为不一致

    ```js
    // ES5
    var Point = function (x, y) {
      // ...
    };

    Point.prototype.toString = function() {
      // ...
    };

    Object.keys(Point.prototype)
    // ["toString"]
    Object.getOwnPropertyNames(Point.prototype)
    // ["constructor","toString"]
    ```

    ```js
    // ES6
    class Point {
      constructor(x, y) {
        // ...
      }

      toString() {
        // ...
      }
    }

    Object.keys(Point.prototype)
    // []
    Object.getOwnPropertyNames(Point.prototype)
    // ["constructor","toString"]
    ```
