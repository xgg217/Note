# min与max设置

## 设置

+ 代码

  ```css
  article {
    width: 300px;
    height: 300px;
    border: 1px solid silver;
    display: grid;

    /* 行高 最大100px 最小50px */
    grid-template-rows: repeat(2, minmax(50px,100px));
    grid-template-columns: repeat(5, 1fr);

  }
  ```
