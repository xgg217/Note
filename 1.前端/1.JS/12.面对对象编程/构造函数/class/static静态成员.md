# static静态成员

## 静态方法

*   类相当于实例的原型，所有在类中定义的方法，都会被实例继承。

*   如果在一个方法前，加上 `static` 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

    ```javascript
    class Foo {
      static classMethod() {
        return 'hello';
      }
    }

    Foo.classMethod() // 'hello'

    var foo = new Foo();
    foo.classMethod()
    // TypeError: foo.classMethod is not a function
    ```

*   注意，如果静态方法包含 `this` 关键字，这个 `this` 指的是类，而不是实例。

    ```javascript
    class Foo {
      static bar() {
        this.baz();
      }
      static baz() {
        console.log('hello');
      }
      baz() {
        console.log('world');
      }
    }

    Foo.bar() // hello
    ```

*   父类的静态方法，可以被子类继承。

    ```javascript
    class Foo {
      static classMethod() {
        return 'hello';
      }
    }

    class Bar extends Foo {
    }

    Bar.classMethod() // 'hello'
    ```

*   静态方法也是可以从 `super` 对象上调用的。

    ```javascript
    class Foo {
      static classMethod() {
        return 'hello';
      }
    }

    class Bar extends Foo {
      static classMethod() {
        return super.classMethod() + ', too';
      }
    }

    Bar.classMethod() // "hello, too"
    ```

## static 静态属性

*   静态属性指的是 `Class` 本身的属性，即 `Class.propName` ，而不是定义在实例对象（this）上的属性。

*   通过构造函数直接访问的属性

    ```javascript
    // 老写法
    class Foo {
      // ...
    }
    Foo.prop = 1;

    // 新写法
    class Foo {
      static prop = 1;
    }

    // 使用
    Foo.prop;
    ```
