# class 继承

## 继承

- `Class` 可以通过 `extends` 关键字实现继承，这比 **ES5** 的通过修改原型链实现继承，要清晰和方便很多

    ```js
    // 父类：可以理解成 原型对象 prototype
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      sayHello() {
        console.log('大家好');
      }
    };

    // 子类
    // 使用 extends 关键字， 实现 子类继承 父类
    class Chinese extends Person {
      // constructor(name, age){}
    }
    const ch = new Chinese('小刚刚', 18);
    console.log(ch); // Chinese {name: "小刚刚", age: 18}
    ch.sayHello(); // 大家好
    ```

## super

- 第一种情况 `super` 作为函数调用时，代表父类的构造函数。**ES6**  要求，子类的构造函数必须执行一次 `super`函数

    ```js
    lass A {}

    class B extends A {
      constructor() {
        super();
      }
    }
    ```

- 作为函数时，`super()` 只能用在子类的构造函数之中，用在其他地方就会报错

    ```js
    class A {}

    class B extends A {
      m() {
        super(); // 报错
      }
    }
    ```

- `super` 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类

    ```js
    class A {
      p() {
        return 2;
      }
    }

    class B extends A {
      constructor() {
        super();
        console.log(super.p()); // 2
      }
    }

    let b = new B();
    ```
