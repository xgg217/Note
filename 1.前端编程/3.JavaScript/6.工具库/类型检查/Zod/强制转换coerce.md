# 强制转换

## z.coerce

+ 要将输入数据强制转换为适当的类型，请改用 z.coerce

  ```js
  z.coerce.string();    // String(input)
  z.coerce.number();    // Number(input)
  z.coerce.boolean();   // Boolean(input)
  z.coerce.bigint();    // BigInt(input)
  ```

+ 这些模式的强制类型会尝试将输入值转换为适当的类型

  ```js
  const schema = z.coerce.string();

  schema.parse("tuna");    // => "tuna"
  schema.parse(42);        // => "42"
  schema.parse(true);      // => "true"
  schema.parse(null);      // => "null"
  ```

+ 这些强制模式的输入类型默认为 unknown
+ 要指定更具体的输入类型，请传递一个泛型参数

  ```js
  const A = z.coerce.number();
  type AInput = z.infer<typeof A>; // => number

  const B = z.coerce.number<number>();
  type BInput = z.infer<typeof B>; // => number
  ```

## 强制转换原理

+ Zod 使用内置构造函数对所有输入执行强制转换

  ```
  z.coerce.string()  ------------->    String(value)
  z.coerce.number()  ------------->    Number(value)
  z.coerce.boolean()  ------------->   Boolean(value)
  z.coerce.bigint()  ------------->    BigInt(value)
  z.coerce.date()    ------------->    new Date(value)
  ```

+ 使用 z.coerce.boolean() 进行布尔强制转换可能不会像您预期的那样工作

  + 任何真值都被强制转换为 true，而任何假值都被强制转换为 false

  ```js
  const schema = z.coerce.boolean(); // Boolean(input)

  schema.parse("tuna"); // => true
  schema.parse("true"); // => true
  schema.parse("false"); // => true
  schema.parse(1); // => true
  schema.parse([]); // => true

  schema.parse(0); // => false
  schema.parse(""); // => false
  schema.parse(undefined); // => false
  schema.parse(null); // => false
  ```

+ 若要完全控制强制转换逻辑，考虑使用 z.transform() 或 z.pipe()

## 类型转换与默认值

+ zod 支持在验证过程中对数据进行转换，同时支持设置默认值：

  ```js
  const UserSchema = z.object({
    // 将输入转换为字符串（如数字 123 → "123"）
    id: z.coerce.string(),

    // 若未提供，默认值为 "unknown"
    nickname: z.string().default("unknown"),

    // 将字符串转换为日期对象
    birthdate: z.coerce.date(),
  });

  // 验证并转换数据
  const user = UserSchema.parse({
    id: 123, // 转换为 "123"
    birthdate: "2000-01-01", // 转换为 Date 对象
  });
  ```
