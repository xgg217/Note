# import断言

## 解决的问题

+ 我们经常会用到类似

    ```js
    import Component from './component';
    import data from './data.json';
    import styles from './index.module.css';
    ```

+ 这样的引入，但是它们都是 webpack 等打包工具帮我们处理的

+ 随着 json modules 和 css modules 加入 Web 标准，原生 JavaScript 也要考虑引入对它们的支持

+ 但不能就这样引入！因为...假如，我们在浏览器中执行

    ```js
    import sheet from './styles.css';

    // 而后端给我们返回了
    Content-Type: application/javascript; charset=utf8;

    alert('you are rickrolled!');
    ```

## 语法

+ 为什么不用扩展名来区分呢？

+ 因为扩展名不是资源的一切，我们有太多资源没有扩展名了

+ `Content-Type` 由后端掌控，不够安全，因此，提案中设计了 `import assertion` 的方式

    ```js
    // 同步的
    import json from "./foo.json" assert { type: "json" };
    ```

    ```js
    // 异步的
    const cssModule = await import('./style.css', {  assert: { type: 'css' }});
    ```
