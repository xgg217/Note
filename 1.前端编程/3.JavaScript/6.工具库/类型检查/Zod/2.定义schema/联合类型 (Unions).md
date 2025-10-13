# 联合类型 (Unions)

## z.union

+ z.union([schemaA, schemaB, ...]) : 验证数据是否符合联合中至少一个 schema

  ```js
  import { z } from 'zod';

  const stringOrNumberSchema = z.union([z.string(), z.number()]);
  type StringOrNumber = z.infer<typeof stringOrNumberSchema>; // string | number

  console.log(stringOrNumberSchema.parse("hello"));
  console.log(stringOrNumberSchema.parse(123));
  // stringOrNumberSchema.parse(true); // 抛出 ZodError

  // .or() 语法糖
  const stringOrNumberSchema2 = z.string().or(z.number()); // 等同于 z.union([z.string(), z.number()])

  ```

## z.discriminatedUnion

+ z.discriminatedUnion(discriminatorKey, [schemaA, schemaB, ...]) : 可辨识联合类型。它基于一个共同的“辨别器”字段来确定应该使用哪个 schema 进行验证。这对于处理具有不同形状但共享某个类型字段的对象非常有用

  ```js
  import { z } from 'zod';

  const ShapeSchema = z.discriminatedUnion("type", [
    z.object({ type: z.literal("circle"), radius: z.number() }),
    z.object({ type: z.literal("square"), sideLength: z.number() }),
    z.object({ type: z.literal("triangle"), base: z.number(), height: z.number() }),
  ]);
  type Shape = z.infer<typeof ShapeSchema>;
  /*
  Shape = { type: "circle"; radius: number; } |
          { type: "square"; sideLength: number; } |
          { type: "triangle"; base: number; height: number; }
  */

  console.log(ShapeSchema.parse({ type: "circle", radius: 5 }));
  console.log(ShapeSchema.parse({ type: "square", sideLength: 10 }));
  // ShapeSchema.parse({ type: "circle", sideLength: 10 }); // 抛出 ZodError (字段不匹配 "circle" 类型)
  // ShapeSchema.parse({ type: "rectangle", width: 4, height: 6 }); // 抛出 ZodError (type "rectangle" 无效)

  ```
