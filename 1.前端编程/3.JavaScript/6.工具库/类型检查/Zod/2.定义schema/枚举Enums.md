# 枚举 (Enums)

## z.enum

+ z.enum([option1, option2, ...]) : 验证数据是否为预定义字符串列表中的一个
+ 这对于字符串枚举非常有用

  ```js
  import { z } from 'zod';

  const UserRoleSchema = z.enum(["ADMIN", "USER", "GUEST"]);
  type UserRole = z.infer<typeof UserRoleSchema>; // "ADMIN" | "USER" | "GUEST"

  console.log(UserRoleSchema.parse("ADMIN"));
  // UserRoleSchema.parse("EDITOR"); // 抛出 ZodError

  ```

## nativeEnum

+ z.nativeEnum(nativeEnumObject) : 用于验证 TypeScript 的原生 enum

  ```js
  import { z } from 'zod';

  enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
  }

  const ColorSchema = z.nativeEnum(Color);
  type ColorType = z.infer<typeof ColorSchema>; // Color (原生枚举类型)

  console.log(ColorSchema.parse(Color.Red)); // "RED"
  console.log(ColorSchema.parse("GREEN"));   // "GREEN"
  // ColorSchema.parse("YELLOW"); // 抛出 ZodError

  enum NumericEnum {
    Zero, // 0
    One,  // 1
  }
  const NumericEnumSchema = z.nativeEnum(NumericEnum);
  console.log(NumericEnumSchema.parse(0)); // 0
  console.log(NumericEnumSchema.parse(NumericEnum.One)); // 1

  ```
