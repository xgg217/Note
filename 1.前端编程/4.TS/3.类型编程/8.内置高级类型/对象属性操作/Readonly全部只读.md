# Readonly 全部只读

## `Readonly<T>` 全部只读

+ 将类型 T 中的成员变成 **只读**

  ```js
  type Readonly<T> = {
    readonly [P in keyof T]: T[P]
  }
  ```

+ `Readonly` 中也可以使用 `+readonly` `-readonly`

  ```js
  type Readonly<T> = {
    +readonly [P in keyof T]: T[P];
  };
  ```

  ```js
  type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  ```

+ 使用示例

  ```js
  // 使用
  interface Todo {
    title: string
    description: string
  }

  const todo: Readonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: 无法分配到 "title" ，因为它是只读属性
  todo.description = "barFoo" // Error: 无法分配到 "title" ，因为它是只读属性
  ```
