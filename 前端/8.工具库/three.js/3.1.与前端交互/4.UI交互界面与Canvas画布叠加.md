# UI交互界面与Canvas画布叠加

## 概述

+ 在 Canvas 元素上添加按钮

  ```html
  <div>
    <div>按钮</div>
    <canvas >
  </div>
  ```

## 方法1：设置canvas画布绝对定位

+ 设置

  ```js
  // canvas画布绝对定位
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0px';
  renderer.domElement.style.left = '0px';

  // 设置z-index
  renderer.domElement.style.zIndex = -1;
  ```

  ```html
  <div style="color: #ff0000;z-index:2;position: relative;">红色</div>
  ```

## 方法2：插入的div元素绝对定位

+ 不设置three.js Canvas元素style，插入的div元素绝对定位，这样也可以把div元素叠加到threejs Canvas花画布上

  ```html
  <div style="color: #ff0000;z-index:2;position: absolute;">红色</div>
  ```
