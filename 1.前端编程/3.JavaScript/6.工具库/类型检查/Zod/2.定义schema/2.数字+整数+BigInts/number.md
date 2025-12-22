# 数字

## 验证

+ z.number() : 验证数据是否为数字

  ```js
  const schema = z.number();

  schema.parse(3.14);      // ✅
  schema.parse(NaN);       // ❌
  schema.parse(Infinity);  // ❌
  ```

## 链式校验方法

+ `gt(value, message?)` : 大于 value
+ `gte(value, message?)` 或 `.min(value, message?)` : 大于等于 value
+ `lt(value, message?)` : 小于 value
+ `lte(value, message?)` 或 `.max(value, message?)` : 小于等于 value
+ `int(message?)` : 验证是否为整数
+ `positive(message?)` : 验证是否为正数 (>0)
+ `nonnegative(message?)` : 验证是否为非负数 (>=0)
+ `negative(message?)` : 验证是否为负数 (<0)
+ `nonpositive(message?)` : 验证是否为非正数 (<=0)
+ `multipleOf(value, message?)` 或 `.step(value, message?)` : 验证是否为 value 的倍数
+ `finite(message?)` : 验证是否为有限数 (不是 `Infinity` 或 `-Infinity` )
+ `safe(message?)` : 验证是否为安全整数 (在 `Number.MIN_SAFE_INTEGER` 和 `Number.MAX_SAFE_INTEGER` 之间)

  ```js
  import { z } from 'zod';

  const ageSchema = z.number()
    .int({ message: "年龄必须是整数" })
    .positive({ message: "年龄必须是正数" })
    .gte(18, { message: "必须年满18岁" });

  console.log(ageSchema.safeParse(30)); // { success: true, data: 30 }
  console.log(ageSchema.safeParse(17.5)); // { success: false, error: ... }
  ```


