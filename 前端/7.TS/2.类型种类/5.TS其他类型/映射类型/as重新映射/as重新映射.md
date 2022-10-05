# as重新映射

## 概述

  - 重新映射 key Remapping

## 语法

  - 语法

    ```ts
    type MappedTypeWithNewKeys<T> = {
      [key in keyof T as newKeyType]: T[K]
    }
    ```

    ![](image/image_y5IF4w_c5M.png)

## 通过as实现键名重新映射

  - 在 TypeScript 4.1 及以后，你可以在映射类型中使用 `as` 语句实现键名重新映射

    ```ts
    type MappedTypeWithNewProperties<Type> = {
        [Properties in keyof Type as NewKeyType]: Type[Properties]
    }
    ```

  - 可以利用**模板字面量类型**，基于之前的属性名创建一个新的属性名

    ```ts
    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
    };

    interface Person {
        name: string;
        age: number;
        location: string;
    }

    type LazyPerson = Getters<Person>;

    // type LazyPerson = {
    //    getName: () => string;
    //    getAge: () => number;
    //    getLocation: () => string;
    // }
    ```

  - 利用条件类型返回一个 `never` 从而过滤掉某些属性

    ```ts
    type RemoveKindField<Type> = {
        [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
    };

    interface Circle {
        kind: "circle";
        radius: number;
    }

    type KindlessCircle = RemoveKindField<Circle>;

    // type KindlessCircle = {
    //    radius: number;
    // }
    ```

  - 遍历任何联合类型，不仅仅是 `string | number | symbol` 这种联合类型，可以是任何类型的联合

    ```ts
    type EventConfig<Events extends { kind: string }> = {
        [E in Events as E["kind"]]: (event: E) => void;
    }

    type SquareEvent = { kind: "square", x: number, y: number };
    type CircleEvent = { kind: "circle", radius: number };

    type Config = EventConfig<SquareEvent | CircleEvent>
    // type Config = {
    //    square: (event: SquareEvent) => void;
    //    circle: (event: CircleEvent) => void;
    // }
    ```
