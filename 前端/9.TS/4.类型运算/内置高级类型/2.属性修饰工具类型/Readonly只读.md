# Readonly

## Readonly<T>

+ 将类型 T 中的成员变成 **只读**

 ```ts
  type Readonly<T> = {
    readonly [P in keyof T]: T[P]
  }
  ```

+ `Readonly` 中也可以使用 `+readonly` `-readonly`

 ```ts
  type Readonly<T> = {
    +readonly [P in keyof T]: T[P];
  };
  ```

 ```ts
  type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  ```

## 使用示例

+ 代码

 ```ts
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

## JS实现

+ 代码

 ```ts
  const readonly = function readonly(obj:object) {
    const newObj = {};
    for (const key in obj) {
      newObj['readonly' + key] = obj[key];
    }

    return newObj;
  }
  ```
