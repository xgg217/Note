# v-html

## 作用

  - 更新元素的innerHTML

  - 注意：内容按普通 HTML 插入，不会作为 Vue 模板进行编译

  - 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 `v-html`，永不用在用户提交的内容上。

## 使用

  - 使用

    ```javascript
    <input type="text" />
    <button>点击</button>
    <div id="app">
      <div v-html="msg"></div>
    </div
    ```
