# localStorage与IndexedDB

## 问题1 全问题

+ 安全问题：XSS 一旦发生，localStorage 首当其冲

+ localStorage 是同步 API，不受同源页面任何 JS 限制，这也意味着：

  ```js
  // 如果页面存在 XSS 漏洞
  const token = localStorage.getItem('authToken');
  // 那你的用户登录态，可能就被黑了
  ```

## 问题2 性能问题

+ localStorage会阻塞 UI 主线程

  ```js
  // 会阻塞页面渲染，影响用户体验
  localStorage.setItem('hugeData', massiveJsonString);
  ```

## 问题3 容量限制

+ localStorage 容量只有 5M

+ IndexedDB 的存储上限在几百 MB 甚至数 GB
