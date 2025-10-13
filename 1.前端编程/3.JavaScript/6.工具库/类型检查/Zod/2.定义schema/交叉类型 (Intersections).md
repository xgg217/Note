# 交叉类型 (Intersections)

## z.intersection

+ z.intersection(schemaA, schemaB) : 验证数据是否同时符合 schemaA 和 schemaB。通常用于合并对象 schema

  ```js
  import { z } from 'zod';

  const HasIdSchema = z.object({ id: z.string() });
  const HasNameSchema = z.object({ name: z.string() });

  const IdentifiedNameSchema = z.intersection(HasIdSchema, HasNameSchema);
  // 或者使用 .and() 语法糖: const IdentifiedNameSchema = HasIdSchema.and(HasNameSchema);

  type IdentifiedName = z.infer<typeof IdentifiedNameSchema>; // { id: string; name: string; }

  console.log(IdentifiedNameSchema.parse({ id: "123", name: "Resource" }));
  // IdentifiedNameSchema.parse({ id: "123" }); // 抛出 ZodError (缺少 name)
  ```    注意：对于原始类型的交叉（如 `z.string().and(z.number())`），结果通常是 `z.never()`，因为一个值不能同时是字符串和数字。
  ```
