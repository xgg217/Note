# append与prepend

## ParentNode.append()

+ append()方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面

+ 该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）

  ```js
  var parent = document.body;

  // 添加元素子节点
  var p = document.createElement('p');
  parent.append(p);

  // 添加文本子节点
  parent.append('Hello');

  // 添加多个元素子节点
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  parent.append(p1, p2);

  // 添加元素子节点和文本子节点
  var p = document.createElement('p');
  parent.append('Hello', p);
  ```

+ 该方法没有返回值

+ 注意，该方法与 `Node.prototype.appendChild()` 方法有三点不同

  + `append()` 允许字符串作为参数，`appendChild()` 只允许子节点作为参数
  + `append()` 没有返回值，而 `appendChild()` 返回添加的子节点
  + `append()` 可以添加多个子节点和字符串（即允许多个参数），`appendChild()` 只能添加一个节点（即只允许一个参数）

## ParentNode.prepend()

+ `prepend()` 方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面
+ 它的用法与 `append()` 方法完全一致，也是没有返回值
