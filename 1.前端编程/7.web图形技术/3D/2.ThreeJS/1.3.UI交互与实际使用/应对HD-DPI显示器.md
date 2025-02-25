# 应对HD-DPI显示器

## 概述

+ HD-DPI代表每英寸高密度点显示器(视网膜显示器)
+ 它指的是当今大多数的Mac和windows机器以及几乎所有的智能手机

+ 浏览器中的工作方式是不管屏幕的分辨率有多高使用CSS像素设置尺寸会被认为是一样的
+ 同样的物理尺寸浏览器会渲染出字体的更多细节

## three.js 应对方式1 不推荐

+ 使用 `renderer.setPixelRatio` 来告诉three.js分辨率的倍数
+ 访问浏览器从CSS像素到设备像素的倍数然后传给three.js

  ```js
  renderer.setPixelRatio(window.devicePixelRatio);
  ```

## three.js 应对方式2 推荐

+ 在调整canvas的大小时自己处理

  ```js
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = Math.floor( canvas.clientWidth * pixelRatio );
    const height = Math.floor( canvas.clientHeight * pixelRatio );
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }


  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
  }
  ```
