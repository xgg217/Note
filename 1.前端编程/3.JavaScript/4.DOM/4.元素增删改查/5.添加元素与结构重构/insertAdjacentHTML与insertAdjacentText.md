# insertAdjacentHTML与insertAdjacentText

## insertAdjacentHTML

+ 将指定的文本解析为 `HTML` 或 `XML`，并将结果节点插入到 `DOM` 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素

+ 这避免了额外的序列化步骤，使其比直接 `innerHTML` 操作更快

+ 语法 `element.insertAdjacentHTML(position, text);`

+ `position` 是相对于元素的位置，并且必须是以下字符串之一：

    1. `beforebegin`: 元素自身的前面

    2. `afterbegin`: 插入元素内部的第一个子节点之前

    3. `beforeend`: 插入元素内部的最后一个子节点之后

    4. `afterend`: 元素自身的后面

+ `text` 是要被解析为 `HTML` 或 `XML` ,并插入到DOM树中的字符串

+ 位置名称的可视化：

  ```html
  <!-- beforebegin和afterend位置,仅在节点在树中且节点具有一个parent元素时工作. -->

  <!-- beforebegin 元素自身的前面 -->
  <p>
    <!-- afterbegin 插入元素内部的第一个子节点之前 -->
    foo
    <!-- beforeend 插入元素内部的最后一个子节点之后 -->
  </p>
  <!-- afterend 元素自身的后面 -->
  ```

+ 安全问题: 如果只是为了插入文本内容(而不是HTML节点), 不建议使用这个方法, 建议使用 `node.textContent` 或者 `node.insertAdjacentText()` . 因为这样不需要经过HTML解释器的转换, 性能会好一点.

  ```js
  // <div id="one">one</div>
  var d1 = document.getElementById('one');
  d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

  // 此时，新结构变成：
  <div id="one">one</div><div id="two">two</div>

  // ES6 version
  let html = `<div id="two">two</div>`;
  div.insertAdjacentHTML(`beforeend`, html);
  ```

## insertAdjacentText

+ 将一个给定的文本节点插入在相对于被调用的元素给定的位置

+ 与 `insertAdjacentHTML()` 类似

