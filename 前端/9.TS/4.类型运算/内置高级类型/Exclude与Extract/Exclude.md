# Exclude

## Exclude\<T, U>

  - 从 T 中的删除可以赋值给 U 的类型

    ```typescript
    type A = number | string | boolean
    type B = number | boolean

    type Foo = Exclude<A, B>
    // 相当于
    type Foo = string

    ```

## 源码

  - 源码

    ```typescript
    type Exclude<T, U> = T extends U ? never : T;
    ```

  - 代码分析

    1.  首先能明确联合类型 `"a" | "b" | "c"` 会被分成三个分支进行条件类型运算，并且产生一个联合类型

    2.  只有 `"c"` 类型是不可赋值给联合类型 `"a" | "b"` 的，因此会返回该类型

    3.  最终经过联合类型运算，达到剔除 `"a" | "b"` 两个类型的作用

        ![](image/image_P3Nt0rrvI8.png)
