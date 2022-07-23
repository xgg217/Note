# 获取url某一个参数

## 代码

```javascript
 /**
 * 获取 URL 中的查询参数，并返回一个对象
   - 例如 获取 /index.html?id=10 的 id
 * @param {String} url
 * @returns {string} 返回一个字符串
 */
const getUrlParam = (key) => {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(key);
  return value;
};

```
