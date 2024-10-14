# camelCase与kebab-cased

## 使用

+ 尽管推荐使用 camelCase，但 `:style` 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)

  ```html
  <div :style="{ 'font-size': fontSize + 'px' }"></div>
  ```

