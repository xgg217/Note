# this约束

## 没有约束

+ 对象

    ```js
    const u =  {
      name: 1,
      age: 33,
      say() {
        console.log(this);
      }
    };

    console.log(u.say()); // 正确指向 u
    const s = u.say;
    console.log(s()); // 错误指向 undefined
    ```

+ 类

    ```js
    class User {
      names: string;
      age:number;

      constructor(names: string, age:number) {
        this.names = names;
        this.age = age;
      }

      say() {
        console.log(this);
      }
    }

    const u1 = new User('1', 1);
    u1.say(); // 正确指向 User

    const u2 = new User('2', 2);
    const say = u2.say;
    say() // 错误指向 undefined
    ```

## 使用 TS 约束

+ ts配置文件启用 `--noImplicitThis` 。表示不允许 `this` 隐式的指向 `any`

+ 在 ts 中，允许在书写函数时，手动声明该函数中 `this` 的指向，将 `this` 作为函数的第一个参数，该参数只用于约束 `this` ，并不是真正的参数，也不会出现在编译结果中

+ 函数约定

    ```js
    interface IU {
      name:string
      age: number;
      say:(this:IU, n:number) => void // 第一个参数为约定 this 的指向。在实际调用中将会不存在。 n 为实际的第一个参数
    }

    const u:IU =  {
      name: '1',
      age: 33,
      say() {
        console.log(this);
      }
    };

    console.log(u.say());
    const s = u.say;
    console.log(s()); // 报错 类型为“void”的 "this" 上下文不能分配给类型为“IU”的方法的 "this"
    ```

+ 类约束

    ```js
    class User {
      names: string;
      age:number;

      constructor(names: string, age:number) {
        this.names = names;
        this.age = age;
      }

      // 约束 this 指向
      say(this:User) {
        console.log(this);
      }
    }

    const u1 = new User('1', 1);
    u1.say(); // 正确指向 User

    const u2 = new User('2', 2);
    const say = u2.say;
    say() // 报错。提示： 类型为“void”的 "this" 上下文不能分配给类型为“User”的方法的 "this"
    ```
