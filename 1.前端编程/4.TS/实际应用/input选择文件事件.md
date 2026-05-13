# input 选择文件 事件

## 类型处理

+ 类型处理

  ```html
  <input type="file" @change="fileChange" />
  ```

  ```ts
  const fileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target?.files?.[0] as File;

    // 后续处理
  };
  ```
