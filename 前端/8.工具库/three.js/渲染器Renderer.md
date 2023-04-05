# 渲染器 Renderer

## 概述

+ 渲染器将和 Canvas 元素进行绑定

+ 设置类型

  1. 放映的位置
  2. 分辨率
  3. 颜色通道
  4. 渲染的大小

## 代码

+ 如果在 HTML 中手动定义了Canvas 元素，那么 Renderer 可以这样写

  ```js
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('#mainCanvas')
  })
  ```

+ 如果想要 Three.js 生成 Canvas 元素，在 HTML 中就不需要定义 Canvas 元素，在JavaScript 代码中可以这样写

  ```js
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(400, 300); // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
  document.getElementsByTagName['body'](0).appendChild(renderer.domElement);
  ```
