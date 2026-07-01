# Partial 全部选填

## `Partial<T>` 全部可选

+ 将一个类型的所有属性设置为 **可选**

  ```js
  type User = {
    name: string;
    age: number;
  };

  type UpdateUser = Partial<User>;

  // 现在你可以只更新一个字段：
  { name: "Asheesh" } // 合法
  ```

+ 源码

  ```js
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  ```

+ 使用场景

  + 更新 API

  + patch 请求

  + 表单编辑
