# Omit

## 概述

  - 对接口做裁剪

  - 与 Pick 操作相反

## 功能

  - 代码

    ```typescript
    interface Foo {
     a: number;
     b: string;
     c: boolean;
    }

    // { b: string; c: boolean}
    type ExcludeA = Omit<Foo, "a">;

    ```

    ```typescript
    type User = {
      id: string; // 用户ID
      name: string; // 用户名
      pws: string; // 密码
      createdAt: Date; // 创建时间
      updatedAt: Date; // 更新时间
    }

    type s = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
    // type s = {
    //   name: string;
    //   pws: string;
    // }
    ```

## 修改已有属性

  - 代码

    ```typescript
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

## 内部实现

  - 代码

    ```typescript
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
    ```
