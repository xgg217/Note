# void、any、unknown、never

## 验证

+ z.void() : 验证函数没有返回值 (即返回 undefined)。通常用于函数返回类型的 schema

+ z.any() : 不进行任何验证，允许任何类型。应谨慎使用，因为它会破坏 Zod 带来的类型安全

+ z.unknown() : 不进行任何验证，允许任何类型，但推荐使用，因为在访问数据前需要先进行类型收窄

+ z.never() : 不允许任何值。如果数据被解析到这个 schema，会抛出错误

  ```js
  const anyValueSchema = z.any(); // 尽量避免
  const unknownValueSchema = z.unknown(); // 更安全的选择

  // unknown 需要进一步检查
  const unknownData = unknownValueSchema.parse({ a: 1 });
  if (typeof unknownData === 'object' && unknownData !== null && 'a' in unknownData) {
    // 现在可以安全地访问 unknownData.a (需要类型断言或更复杂的检查)
  }
  ```

## 注意

+ 谨慎使用 z.any() 和 z.unknown() : z.any() 会完全绕过类型检查和验证。z.unknown() 更安全，因为它要求你在使用数据前进行类型收窄，但它仍然不提供结构验证。尽可能定义更具体的 schema
