# super

## 概述

+ 基本使用

  ```js
  class Tank {
    name:string;
    constructor(name:string) {
      this.name = name;
    }

    sayHi() {
      return 'My name is' + this.name;
    }
  }

  // 继承自Tank
  class PlayTank extends Tank {
    age:number;
    constructor(name:string, age:number) {
      super(name); // 调用父类的 constructor(name)
      this.age = age;
    }

  }

  const t = new Tank("名称");

  const p = new PlayTank("名称", 18);
  ```

+ 在子类方法中，可以使用 `super` 关键之读取父类成员

  ```js

  class PlayTank extends Tank {
    constructor(name) {
      super(name); // 调用父类的 constructor(name)
      console.log(this.name);
    }
    sayHi() {
      return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
  }

  let c = new PlayTank('Tom'); // Tom
  console.log(c.sayHi()); // Meow, My name is Tom
  ```

+ 在一般方法中调用使用 `super.xxx()` 的形式，表示调用的是父类的方法，特别是在子类重写父类的方法中（子类方法和父类方法同名的情况，其实就是覆盖父类的同名方法），这样可以很明显的区分调用的是父类的方法还是子类的方法
+ `super` 只能调用父类的方法，*不能访问父类的属性*
