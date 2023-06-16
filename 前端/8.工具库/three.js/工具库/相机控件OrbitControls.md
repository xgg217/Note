# 相机控件OrbitControls

## 概述

+ 平时开发调试代码，或者展示模型的时候，可以通过相机控件OrbitControls实现旋转缩放预览效果

## 操作

+ 旋转：拖动鼠标左键
+ 缩放：滚动鼠标中键
+ 平移：拖动鼠标右键

## OrbitControls API

+ 引入扩展库OrbitControls.js

  ```js
  // 引入轨道控制器扩展库OrbitControls.js
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  ```

+ 使用

  ```js
  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
  });//监听鼠标、键盘事件
  ```

## OrbitControls本质

+ OrbitControls本质上就是改变相机的参数，比如相机的位置属性，改变相机位置也可以改变相机拍照场景中模型的角度，实现模型的360度旋转预览效果，改变透视投影相机距离模型的距离，就可以改变相机能看到的视野范围

  ```js
  controls.addEventListener('change', function () {
    // 浏览器控制台查看相机位置变化
    console.log('camera.position',camera.position);
  });
  ```

## OrbitControls改变相机位置.position

+ 通过OrbitControls旋转和缩放，本质上就是在改变透视投影相机 `PerspectiveCamera` 的位置 ``.position`

+ 渲染循环中不停地打印相机的位置属性，你可以通过相机控件旋转或缩放三维场景，同时通过浏览器控制台观察相机位置变化

  ```js
  function render() {
    requestAnimationFrame(render);
    // 浏览器控制台查看相机位置变化
    console.log('camera.position',camera.position);
  }
  render();
  ```

## 通过OrbitControls设置相机位置.position

+ 关于相机整体预览三维场景代码设置的时候
+ 第一步是根据渲染范围的数量级，大概设置相机的位置参数
+ 其实第二部，相机位置具体参数，可以借助OrbitControls可视化旋转或缩放，然后选择一个合适的渲染效果，浏览器控制台记录下此时的相机位置

  ```js
  camera.position.set(200, 200, 200);//第1步：根据场景渲染范围尺寸设置
  camera.position.set(-144, 95, 95); //第2步：通过相机控件辅助设置OrbitControls
  ```

## OrbitControls改变相机.lookAt观察目标

+ 通过OrbitControls平移，OrbitControls的 `.target`属性会发生变化，`.target`属性对应的就是透视投影相机PerspectiveCamera的 `.lookAt` 观察目标

  ```js
  function render() {
    requestAnimationFrame(render);
    // 浏览器控制台查看controls.target变化，辅助设置lookAt参数
    console.log('controls.target',controls.target);
  }
  render();
  ```
