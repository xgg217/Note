# 日期

## 验证

+ 使用 z.date() 验证 Date 实例

  ```js
  z.date().safeParse(new Date()); // success: true
  z.date().safeParse("2022-01-12T06:15:00.000Z"); // success: false
  ```

## 自定义错误消息：

+ 自定义错误消息：

  ```js
  z.date({
    error: issue => issue.input === undefined ? "Required" : "Invalid date"
  });
  ```

## 对日期的验证

+ Zod 提供了一些针对日期的验证

  ```js
  z.date().min(new Date("1900-01-01"), { error: "Too old!" });
  z.date().max(new Date(), { error: "Too young!" });
  ```
