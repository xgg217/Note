# in 类型保护

## type

  - JavaScript 中有一个 `in` 操作符可以判断一个对象是否有对应的属性名。TypeScript 也可以通过这个收窄类型

    ```typescript
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    function move(animal: Fish | Bird) {
      if ("swim" in animal) {
        return animal.swim();
        // (parameter) animal: Fish
      }

      return animal.fly();
      // (parameter) animal: Bird
    }
    ```

## interface

  - 用于判断一个属性/方法是否属于某个对象

    ```typescript
    interface Foo {
      foo: string;
    }

    interface Bar {
      bar: string;
    }

    function test(input: Foo | Bar) {
      if('foo' in input) {
        // 这里 input 的类型「收紧」为 Foo
      } else {
        // 这里 input 的类型「收紧」为 Bar
      }
    }
    ```

    ```javascript
    type Keys = "a" | "b" | "c"
    type Obj = {
      [p in Keys]: any
    }
    // { a: any, b: any, c: any }
    ```
