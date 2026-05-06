# undefined + 可选值optional

## undefined

+ z.undefined() : 验证数据是否为 undefined

  ```js
  z.undefined();
  ```

## 可选值optional

+ 要使架构可选（即允许 `undefined` 输入）

  ```js
  z.optional(z.literal("yoda")); // or z.literal("yoda").optional()
  ```

+ 这将返回一个封装原始模式的 ZodOptional 实例。要提取内部模式：

  ```js
  optionalYoda.unwrap(); // ZodLiteral<"yoda">
  ```
