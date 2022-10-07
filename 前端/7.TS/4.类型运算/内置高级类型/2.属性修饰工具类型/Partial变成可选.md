# Partial 可选

## Partial<T>

  - 将类型 T 中的成员变成 **可选**

    ```js
    interface User {
      age: number
      name: string
    }

    const u:Partial<User> = {
      age: 12
    }
    ```

## 源码

  - 源码

    ```ts
    type Partial<T> = {
      [P in keyof T]?: T[P];
    };
    ```
