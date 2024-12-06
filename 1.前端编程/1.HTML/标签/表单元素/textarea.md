# textarea

## spellcheck 自动拼写检查功能

+ 取消浏览器检查拼写 `spellcheck = false`

  ```html
  <textarea spellcheck="false" >
  ```

+ 全局设置

  + 直接在 `body` 上添加 `spellcheck="false"` 即可，这样其下方的后代元素会自动沿用这个属性值


  ```html
  <body spellcheck="false">

  </body>
  ```
