# null + 可空值nullable

## null

+ z.null() : 验证数据是否为 null

  ```js
  z.null();
  ```

## 可空值 nullable

+ 要使架构可空（即允许 `null` 输入）

  ```js
  z.nullable(z.literal("yoda")); // or z.literal("yoda").nullable()
  ```
