# override

## 概述

+ override: Typescript4.x新增的关键字，这是一个提醒关键字

  + 使用 override 修饰的方法就表明该方法就是一个重写的覆盖父类的方法
  + 如果子类中的方法没有在父类中出现过，那么不能使用 `override`

+ 无论是属性还是方法，子类都可以对父类的相应成员进行重写

+ 但是重写时，需要保证类型的匹配

## 重写

+ 子类中覆盖父类的成员

  ```js
  class Tank {
    y:number = 0

    shoot() {
      console.log("发射字段");
    }
  }

  // 继承自Tank
  class PlayTank extends Tank {
    y:string = 20

    constructor() {
      super(); // 调用父类的 constructor(name)
    }

    // 覆盖父类方法
    override shoot(speed:number) {
      console.log("玩家坦克发射字段");

      super.shoot(); // 调用父类方法
    }
  }
  ```

+ 子类成员不能改变父类成员的类型

  ```js
  class Tank {
    y:number = 0

    shoot() {
      console.log("发射字段");
    }
  }

  // 继承自Tank
  class PlayTank extends Tank {
    y:string = "20" // 报错 类型不匹配

    // 报错 函数参数不匹配
    shoot(speed:number) {
      console.log("玩家坦克发射字段");
    }
  }
  ```
