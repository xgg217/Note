# Pick

## 概述

*   对接口做裁剪

## 功能

*   从 T 中取出 一系列 K 的属性

*   实际使用

    ```typescript
    interface Todo {
      title: string;
      description: string;
      completed: boolean;
    }
     
    type TodoPreview = Pick<Todo, "title" | "completed">;
    // type TodoPreview = {
    //   title: string;
    //   completed: boolean;
    // }
     
    const todo: TodoPreview = {
      title: "Clean room",
      completed: false,
    };
    ```

## JS实现Pick

*   代码

    ```javascript
    function myPick(todo: object, keys: []) {
      const obj = {};
      keys.forEach(key => {
        // 如果不存在
        if (key in todo) {

          obj[key] = todo[key];
        }
      });

      return obj;
    }
    ```

## TS模拟实现Pick

*   `K extend keyof T` 表示 K 是 T 的子类型，这里是一个类型约束声明

    ```typescript
    type T = "a" | "b" | "c";

    那么 K 可以是 "a"
    K 也可以是 "a" | "c" 或者 "a" | "b" | "c" 等

    ```

*   代码

    ```typescript
    /**
       * K 是联合类型，可以用 in 来进行遍历
       * k --> 可以理解成 ['title', 'completed']
       * T --> 可以理解成 ['title', 'description', 'completed']
       * 用 k 来遍历 T 的内容，如果通过就会通过检查
       */
    type MyPick<T, K extends keyof T> = {
      [p in K]: T[p]
    }
    ```

*   使用

    ```typescript
    // 使用
    interface Todo {
      title: string;
      description: string;
      completed: boolean;
    }

    type TodoPreview1 = MyPick<Todo, "title">
    // 等同于 TodoPreview = { title:string }
    const todo: TodoPreview1 = {
      title: 'Clean room'
    }

    /**
     * 相当于
     * type TodoPreview2 = {
     *  title: string;
     *  completed: boolean;
     * }
     */
    type TodoPreview2 = MyPick<Todo, "title" | "completed">
    ```
