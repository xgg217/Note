# NaN

## 验证


+ 如果（因某些原因）想验证 NaN，使用 `z.nan()`

  ```js
  z.nan().parse(NaN);              // ✅
  z.nan().parse("anything else");  // ❌
