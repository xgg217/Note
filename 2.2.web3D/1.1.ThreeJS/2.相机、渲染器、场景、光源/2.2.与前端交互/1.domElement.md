# domElement

## 概述

+ 渲染器WebGLRenderer通过属性 `.domElement` 可以获得渲染方法 `.render()` 生成的Canvas画布，`.domElement` 本质上就是一个HTML元素：Canvas画布

  ```js
  document.body.appendChild(renderer.domElement);
  ```

## Canvas画布插入到任意HTML元素中

+ 代码

  ```html
  <div id="webgl" style="margin-top: 200px;margin-left: 100px;"></div>

  <script>
    document.getElementById('webgl').appendChild(renderer.domElement);
  </script>
  ```