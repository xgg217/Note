# Set类型

## Set

+ z.set(valueSchema) : 验证数据是否为 JavaScript Set 对象，并且其所有值都符合 valueSchema

  ```js
  import { z } from 'zod';

  const stringSetSchema = z.set(z.string());
  type StringSet = z.infer<typeof stringSetSchema>; // Set<string>

  const mySet = new Set(["apple", "banana"]);
  console.log(stringSetSchema.parse(mySet));
  ```

+ 可以使用以下实用方法进一步约束设置的 Schema

  ```js
  z.set(z.string()).min(5); // must contain 5 or more items
  z.set(z.string()).max(5); // must contain 5 or fewer items
  z.set(z.string()).size(5); // must contain 5 items exactly
  ```
