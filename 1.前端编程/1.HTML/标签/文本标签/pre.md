# pre

## pre 预格式化文本元素

+ 在 pre 元素中的内容不会出现空白折叠

+ 在pre 元素内部出现的内容，会按照源代码的格式显示到页面上

+ 作用：通常用于在网页中显示一下代码

+ 功能的本质：显示的效果时由css的 `white-space: pre;` 设置的

  ```html
  <!-- code 元素表示代码区域 -->
  <code>
    <pre>
      const a = 1;
      const arr = [1,2,3];
      arr.forEach(item => {
        console.log(item);
      })
    </pre>
  </code>
  ```
