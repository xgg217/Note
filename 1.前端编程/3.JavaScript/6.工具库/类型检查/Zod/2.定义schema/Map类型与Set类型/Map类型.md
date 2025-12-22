# Map 类型

## Map

+ z.map(keySchema, valueSchema) : 验证数据是否为 JavaScript Map 对象，并且其键和值分别符合 keySchema 和 valueSchema

  ```js
  import { z } from 'zod';

  const userMapSchema = z.map(z.string().uuid(), z.object({ name: z.string() }));
  type UserMap = z.infer<typeof userMapSchema>; // Map<string, { name: string; }>

  const myMap = new Map();
  myMap.set("a1b2c3d4-e5f6-7890-1234-567890abcdef", { name: "Alice" });
  console.log(userMapSchema.parse(myMap));
  ```