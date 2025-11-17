# 将对象 value值转成 联合类型

## 方式1 直接使用索引访问

+ 直接使用索引访问

  ```js
  const config = {
    theme: 'dark' as const,
    language: 'en' as const,
    mode: 'advanced' as const
  };

  type ConfigValues = typeof config[keyof typeof config];
  // 类型为: "dark" | "en" | "advanced"
  ```

## 方式2 使用 as const 断言

+ 使用 as const 断言

  ```js
  // 使用 as const 确保字面量类型被保留
  const STATUS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error'
  } as const;

  type Status = typeof STATUS[keyof typeof STATUS];
  // 类型为: "pending" | "success" | "error"
  ```

## 方式3 泛型工具类型

+ 泛型工具类型

  ```js
  // 创建可重用的工具类型
  type Values<T> = T[keyof T];

  // 使用示例
  const COLORS = {
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff'
  } as const;

  type Color = Values<typeof COLORS>;
  // 类型为: "#ff0000" | "#00ff00" | "#0000ff"
  ```

## 方式4 处理嵌套对象

+ 处理嵌套对象

  ```js
  // 对于嵌套对象，可以提取所有层级的值的联合类型
  type DeepValues<T> = T extends object ? {
    [K in keyof T]: DeepValues<T[K]>
  }[keyof T] : T;

  const nestedObj = {
    user: {
      name: 'John',
      settings: {
        theme: 'dark' as const,
        notifications: true
      }
    },
    app: {
      version: '1.0.0' as const
    }
  } as const;

  type NestedValues = DeepValues<typeof nestedObj>;
  // 类型为: "John" | "dark" | true | "1.0.0"
  ```
