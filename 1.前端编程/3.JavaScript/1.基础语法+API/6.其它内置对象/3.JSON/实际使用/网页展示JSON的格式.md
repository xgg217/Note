# 使用 pre 和JSON.stringify处理网页展示JSON的格式

## 使用场景

+ 需要在前端展示一个元数据（Metadata）的详细信息，以JSON格式从后端返回，将JSON对象处理为字符串在前端展示

  ```json
  { "key1": value1, "key2": value2, "key3": value3 }
  ```

+ 预期

  ```json
  {
    "key1": value1,
    "key2": value2,
    "key3": value3
  }
  ```

## 方法

+ 第一步：对后端传来的JSON对象进行序列化

  ```js
  Obj = JSON.stringify(JSON对象, null, 4);

  JSON.stringify(JSON.parse(data), null, 2);
  ```

+ 第二步：使用 `<pre>` 标签包装序列化后的对象

  + 如果只进行到步骤1，就将对象在前端页面上展示，那么所有的字段仍然会贴在一起，没有层次

  ```html
  <pre>
    {Obj}
  </pre>
  ```
