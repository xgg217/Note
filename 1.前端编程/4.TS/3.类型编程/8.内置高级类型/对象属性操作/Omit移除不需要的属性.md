# Omit移除不需要的属性

## Omit<T, K>

+ 从类型T排除指定的属性K来创建新类型

  ```js
  type User = {
    id: number;
    name: string;
    email: string;
  };

  type UserWithoutId = Omit<User, "id">;
  ```

+ 示例

  ```js
  type User = {
    id: string; // 用户ID
    name: string; // 用户名
    pws: string; // 密码
    createdAt: Date; // 创建时间
    updatedAt: Date; // 更新时间
  }

  interface UserUI extends Omit<User, 'createdAt' | 'updatedAt'> {
    createdAt: string; // 创建时间 由 Date 改成 string
    updatedAt: string; // 更新时间 由 Date 改成 string
  }

  const a: UserUI = {
    id: '1',
    name: 'a',
    pws: '1',
    createdAt: '1',
    updatedAt: '1'
  }
  ```

+ 内部实现

  ```js
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  ```

