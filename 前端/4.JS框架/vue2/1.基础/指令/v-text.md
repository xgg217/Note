# v-text

## 作用

  - 更新元素的 textContent

## 使用

  - 使用

    ```javascript
    <span v-text="msg"></span>
    <!-- 和下面的一样 -->
    <span>{{msg}}</span>
    ```

## v-text VS Mustache

  - `v-text` 替换元素中所有的文本，

  - Mustache只替换自己，不清空元素内容

    ```javascript
    <!-- 渲染为：<span>杉杉最美</span> -->
    <span v-text="msg">----</span>

    <!-- 渲染为：<span>----杉杉最美----</span> -->
    <span>----{{msg}}----</span>
    ```

  - `v-text` 优先级高于 `{{ }}`

## textContent VS innerText

1.  设置文本替换时，两者都会把指定节点下的所有子节点也一并替换掉。

2.  `textContent` 会获取所有元素的内容，包括 `<script>` 和 `<style>` 元素，然而 `innerText` 不会。

3.  `innerText` 受 CSS 样式的影响，并且不会返回隐藏元素的文本，而 `textContent` 会。

4.  由于 `innerText` 受 CSS 样式的影响，它会触发重排（reflow），但 `textContent` 不会。

5.  `innerText` 不是标准制定出来的 api，而是IE引入的，所以对IE支持更友好。`textContent` 虽然作为标准方法但是只支持IE8+以上的浏览器，在最新的浏览器中，两个都可以使用。

6.  综上，Vue这里使用 `textContent` 是从性能的角度考虑的。

## 测试一下innerText & textContent两者性能

  - html

    ```javascript
    <ul class="list">
      <li>1</li>
      <!-- 此处省略998个 -->
      <li>1000</li>
    </ul>
    ```

  - js

    ```javascript
    const oList = document.getElementById("list");

    console.time("innerText");
    for(let i = 0; i < oList.childElementCount; i++){
      ul.children[i].innerText="innerText";
    }
    console.timeEnd("innerText");

    console.time("textContent");
    for(let i = 0; i < oList.childElementCount; i++){
      ul.children[i].textContent="innerText";
    }
    console.timeEnd("textContent");
    ```
