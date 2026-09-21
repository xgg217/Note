#   run_at 指定脚本应何时注入到网页中

## run_at 参数

+ `"document_start"` 脚本在任何 CSS 文件之后注入，但在构建任何其他 DOM 或运行任何其他脚本之前注入

+ `"document_end"` 在 DOM 完成后立即注入脚本，但在图片和框架等子资源加载之前注入

+ `"document_idle"`  **默认值**

  + 浏览器会选择一个时间在“document_end”和 window.onload 事件触发后立即注入脚本
  + 注入的确切时间取决于文档的复杂程度和加载所需的时间，并针对网页加载速度进行了优化
  + 以“document_idle”运行的内容脚本无需监听 window.onload 事件；它们保证在 DOM 完成后运行
  + 如果脚本确实需要在 window.onload 之后运行，扩展程序可以使用 document.readyState 属性检查 onload 是否已触发

  ```json
  "content_scripts": [
    {
      "js": [
        "scripts/content.js"
      ],
      "matches": [
        "https://developer.mozilla.org/zh-CN/*"
      ],
      "run_at": "document_idle"
    }
  ]
  ```
