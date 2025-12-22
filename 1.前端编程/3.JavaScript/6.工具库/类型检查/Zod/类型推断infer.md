# 推断类型

## 概述

+ Zod 会根据你的模式定义推断出静态类型

## z.infer<>

+ 可以使用 z.infer<> 实用程序提取此类型，并根据需要使用它

  ```js
  const Player = z.object({
    username: z.string(),
    xp: z.number()
  });

  // extract the inferred type
  type Player = z.infer<typeof Player>;

  // use it in your code
  const player: Player = { username: "billie", xp: 100 };
  ```

## .transform()

+ 在某些情况下，模式的输入和输出类型可能会有所不同
+ 例如 `.transform()` API 可以将输入从一种类型转换为另一种类型。在这些情况下，你可以分别提取输入和输出类型：

  ```js
  const mySchema = z.string().transform((val) => val.length);

  type MySchemaIn = z.input<typeof mySchema>;
  // => string

  type MySchemaOut = z.output<typeof mySchema>; // equivalent to z.infer<typeof mySchema>
  // number
  ```



