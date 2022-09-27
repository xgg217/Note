# 浏览器加载ES6模块

## 浏览器内部加载 ES6 模块

  - ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致

    ```javascript
    <script type="module">
      import utils from "./utils.js";

      // other code
    </script>
    ```

## 浏览器外部加载 ES6 模块

  - 浏览器加载 ES6 模块，也使用 `<script>` 标签，但是要加入 `type="module"` 属性

    ```javascript
    <script type="module" src="./foo.js"></script>
    ```

  - 浏览器对于带有 `type="module"` 的 `<script>` ，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了 `<script>` 标签的 `defer` 属性

    ```javascript
    <script type="module" src="./foo.js"></script>
    // 等同于
    <script type="module" src="./foo.js" defer></script>
    ```

  - 如果网页有多个 `<script type="module">` ，它们会按照在页面出现的顺序依次执行

  - `<script>` 标签的 `async` 属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染

    ```javascript
    <script type="module" src="./foo.js" async></script>
    ```

  - 一旦使用了 `async` 属性，`<script type="module">` 就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块

## 外部的模块脚本注意

  - 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见

  - 模块脚本自动采用严格模式，不管有没有声明 `use strict`

  - 模块之中，可以使用 `import` 命令加载其他模块（`.js` 后缀不可省略，需要提供绝对 `URL` 或相对 `URL`），也可以使用 `export` 命令输出对外接口

  - 模块之中，顶层的 `this` 关键字返回 `undefined` ，而不是指向 `window` 。也就是说，在模块顶层使用 `this` 关键字，是无意义的

  - 同一个模块如果加载多次，将只执行一次

    ```javascript
    import utils from 'https://example.com/js/utils.js';

    const x = 1;

    console.log(x === window.x); //false
    console.log(this === undefined); // true
    ```

  - 利用顶层的 `this` 等于 `undefined` 这个语法点，可以侦测当前代码是否在 ES6 模块之中

    ```javascript
    const isNotModuleScript = this !== undefined;
    ```
