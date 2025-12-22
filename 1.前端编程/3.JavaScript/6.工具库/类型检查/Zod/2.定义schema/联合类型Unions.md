# 联合类型 (Unions)

## 概述

+ 联合类型 (A | B) 表示逻辑上的 "OR"
+ Zod 联合模式将按顺序根据每个选项检查输入
+ 返回第一个验证成功的值

## z.union 联合类型

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

+ 要提取内部选项模式：

  ```js
  const stringOrNumber = z.union([z.string(), z.number()]);

  stringOrNumber.options; // [ZodString, ZodNumber]
  ```

## z.discriminatedUnion 可区分联合

+ z.discriminatedUnion(discriminatorKey, [schemaA, schemaB, ...]) : 可辨识联合类型
+ 它基于一个共同的“辨别器”字段来确定应该使用哪个 schema 进行验证
+ 这对于处理具有不同形状但共享某个类型字段的对象非常有用

  ```js
  type MyResult =
  | { status: "success"; data: string }
  | { status: "failed"; error: string };

  function handleResult(result: MyResult){
    if(result.status === "success"){
      result.data; // string
    } else {
      result.error; // string
    }
  }

  // Zod 表示
  const MyResult = z.discriminatedUnion("status", [
    z.object({ status: z.literal("success"), data: z.string() }),
    z.object({ status: z.literal("failed"), error: z.string() }),
  ]);
  ```
