# Required

## Readonly\<T>

*   将类型 T 中的成员变成 **只读**

## TS实现Readonly

*   代码

    ```typescript
     type MyReadonly<T> = {
        readonly [P in keyof T]: T[P]
      }
    ```

    ```typescript
    // 使用
    interface Todo {
      title: string
      description: string
    }

    const todo: MyReadonly<Todo> = {
      title: "Hey",
      description: "foobar"
    }

    todo.title = "Hello" // Error: 无法分配到 "title" ，因为它是只读属性
    todo.description = "barFoo" // Error: 无法分配到 "title" ，因为它是只读属性
    ```

## JS实现

*   代码

    ```javascript
    const readonly = function readonly(obj:object) {
      const newObj = {};
      for (const key in obj) {
        newObj['readonly' + key] = obj[key];
      }

      return newObj;
    }
    ```
