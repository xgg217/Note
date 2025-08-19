# fitview

## 概述

+ fitview 是一个视口自适应的 JavaScript 插件，它支持多种适配模式，能够快速实现大屏自适应效果

## 配置

+ el: 需要自适应的 DOM 元素
+ fit: 自适应模式，字符串，可选值为 fill、contain（默认值）、scroll、hidden
+ resize: 是否监听元素尺寸变化，布尔值，默认值 true

## 安装引入

+ npm 安装

  ```js
  npm install fitview
  ```

+ esm 引入

  ```js
  import fitview from"fitview";
  ```

+ cdn 引入

  ```html
  <script src="https://unpkg.com/fitview@[version]/lib/fitview.umd.js"></script>
  ```

## 示例

+ 使用示例

  ```html
  <divid="container">
    <divstyle="width:1920px;height:1080px;"></div>
  </div>

  <script>
    const container = document.getElementById("container");
    new fitview({
      el: container,
    });
  </script>
  ```
