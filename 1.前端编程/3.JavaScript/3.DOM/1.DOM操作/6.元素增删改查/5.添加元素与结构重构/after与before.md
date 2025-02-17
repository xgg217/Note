# after与before

## after()

+ 作用：将元素插入到后面

+ 语法与 `before()` 类似

## before()

+ 作用：将元素插入到前面

+ 节点方法。因此，`before()` 的参数既可以是DOM元素，也可以是DOM节点，甚至可以直接字符内容

+ 语法：支持多个参数，并且参数可以是节点对象，也可以是字符串对象

  ```js
  void ChildNode.before((节点或字符串)... 其它更多节点);
  ```

  ```js
  // 可以同时插入多个节点内容
  document.getElementById('img').before('1. 美女', ' ', '2. 美女');
  ```

+ 示例

  ```html
  <img id="img" src="mm0.jpg">
  ```

  ```js
  // 希望在图片<img>前面插入写文字，直接可以
  document.getElementById('img').before('美女：');
  ```

+ 如果我们插入的是一段HTML字符串

  ```js
  // HTML被转义成了安全的普通文本显示了
  document.getElementById('img').before('<strong>美女：</strong>');
  ```

+ 如果要在图片前面插入HTML字符内容怎么办？ 可以使用 `insertAdjacentHTML()`

