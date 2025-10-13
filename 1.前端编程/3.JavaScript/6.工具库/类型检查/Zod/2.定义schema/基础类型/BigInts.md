# BigInts

## 验证 BigInts

+ 验证 BigInts：

  ```js
  z.bigint();
  ```

+ Zod 提供了一些针对 bigint 的验证。

  ```js
  z.bigint().gt(5n);
  z.bigint().gte(5n);                    // 同 `.min(5n)`
  z.bigint().lt(5n);
  z.bigint().lte(5n);                    // 同 `.max(5n)`
  z.bigint().positive();
  z.bigint().nonnegative();
  z.bigint().negative();
  z.bigint().nonpositive();
  z.bigint().multipleOf(5n);             // 同 `.step(5n)`
  ```
