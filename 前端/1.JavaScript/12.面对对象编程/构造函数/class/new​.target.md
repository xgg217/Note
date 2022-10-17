# new​.target

## 作用

- `new.target` 属性允许你检测函数或构造方法是否是通过 `new` 运算符被调用的

- 在通过 `new` 运算符被初始化的函数或构造方法中，`new.target` 返回一个指向构造方法或函数的引用

- 在普通的函数调用中，`new.target` 的值是 `undefined`

## 使用

- 函数调用中的 new\.target

    ```js
    function Foo() {
      if (!new.target) throw "Foo() must be called with new";
      console.log("Foo instantiated with new");
    }

    Foo(); // throws "Foo() must be called with new"
    new Foo(); // logs "Foo instantiated with new"
    ```

- 构造方法中的 `new.target`

    ```js
    class A {
      constructor() {
        console.log(new.target.name);
      }
    }

    class B extends A { constructor() { super(); } }

    var a = new A(); // logs "A"
    var b = new B(); // logs "B"

    class C { constructor() { console.log(new.target); } }
    class D extends C { constructor() { super(); } }

    var c = new C(); // logs class C{constructor(){console.log(new.target);}}
    var d = new D(); // logs class D extends C{constructor(){super();}}
    ```
