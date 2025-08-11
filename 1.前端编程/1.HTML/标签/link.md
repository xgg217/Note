# link

## 资源加载优先级

+ `<link>` 标签的 rel 属性值中与资源加载优先级相关的属性包括

+ prefetch：一种资源提示，告诉浏览器在将来可能需要某个资源，并且希望浏览器在空闲时间预取它。这可以用于提高页面加载速度，特别是当用户预计会导航到需要该资源的页面时

  ```html
  <link rel="prefetch" href="https://example.com/next-page.html">
  ```

+ preload:一种资源提示，表示浏览器应该预加载指定的资源。这通常用于告诉浏览器在页面加载的早期阶段就开始下载某些资源，以便在用户需要时它们可以更快地可用。通常用于预取用户可能会导航到的下一个页面的资源，以便在用户点击链接时更快地加载页面

  ```html
  <link rel="prefetch" href="path/to/next-page.html">
  ```

+ dns-prefetch：一种链接类型，它允许浏览器在页面的其他资源开始加载之前，在后台执行 DNS 查找。这可以加快页面的后续加载，特别是当页面中的某些资源位于与页面不同的域时

  ```html
  <link rel="dns-prefetch" href="//example.com">
  ```

+ modulepreload：一种链接类型，用于预加载 ES6 模块。它告诉浏览器在需要该模块之前就开始下载它，但并不会立即执行。这可以提高模块的加载速度，尤其是在模块较大或网络条件较差的情况下。

  ```html
  <link rel="modulepreload" href="path/to/module.js">
  ```
