# Pick选择需要的属性

## Pick<T, K> 只选择你需要的部分

+ 从一个类型T挑选指定的属性K来创建新类型

  ```js
  type User = {
    id: number;
    name: string;
    email: string;
  };

  type UserPreview = Pick<User, "name" | "email">;
  ```

+ 使用场景

  + 在 UI 中展示有限的数据

  + 避免过度获取数据

  + 创建轻量对象

## TS模拟实现Pick

+ `K extend keyof T` 表示 K 是 T 的子类型，这里是一个类型约束声明

  ```js
  type T = "a" | "b" | "c";

  那么 K 可以是 "a"
  K 也可以是 "a" | "c" 或者 "a" | "b" | "c" 等

  ```

+ 代码

  ```js
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

+ 使用

  ```js
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
