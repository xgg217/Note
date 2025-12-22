# 枚举 (Enums)

## z.enum

+ `z.enum([option1, option2, ...])` : 验证数据是否为预定义字符串列表中的一个
+ 这对于字符串枚举非常有用

  ```js
  import { z } from 'zod';

  const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

  FishEnum.parse("Salmon"); // => "Salmon"
  FishEnum.parse("Swordfish"); // => ❌
  ```

## 注意

+ 如果将字符串数组声明为变量，Zod 将无法正确推断每个元素的确切值

  ```js
  const fish = ["Salmon", "Tuna", "Trout"];

  const FishEnum = z.enum(fish);
  type FishEnum = z.infer<typeof FishEnum>; // string
  ```

+ 要解决此问题，请始终将数组直接传递给 z.enum() 函数，或使用 as const

  ```js
  const fish = ["Salmon", "Tuna", "Trout"] as const;

  const FishEnum = z.enum(fish);
  type FishEnum = z.infer<typeof FishEnum>; // "Salmon" | "Tuna" | "Trout"
  ```

## .enum

+ 要将模式的值提取为类似枚举的对象

  ```js
  const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

  FishEnum.enum;
  // => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }
  ```

## .exclude()

+ 要创建新的枚举架构并排除某些值：

  ```js
  const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
  const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);
  ```

## .extract()

+ 要创建新的枚举架构并提取某些值

  ```js
  const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
  const SalmonAndTroutOnly = FishEnum.extract(["Salmon", "Trout"]);
  ```
