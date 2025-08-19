# 动画循环

## setAnimationLoop( callback : Function ) : undefined

  + callback — 每个可用帧都会调用的函数
  + 如果传入 `null` ，所有正在进行的动画都会停止
  + 可用来代替 `requestAnimationFrame` 的内置函数

    + 对于WebXR项目，必须使用此函数

  ```js
  this.renderer.setAnimationLoop(() => {
    this.renderer.render(this.scene, this.camera);
  });
  ```

  ```js
  Three.renderer = new THREE.WebGLRenderer({ antialias: true });
  Three.renderer.setSize(window.innerWidth, window.innerHeight);
  Three.renderer.setAnimationLoop(animate);

  // animate
  function animate() {
    // requestAnimationFrame(animate);
    Three.controls.update(); //控制器
    Three.renderer.render(Three.scene, Three.camera);
  }
  ```

+ 示例

  ```js
  function animate() {
    // 更新动画状态
    // 渲染场景
    renderer.render(scene, camera);
  }

  // 开始动画循环，尤其适合 VR/AR
  renderer.setAnimationLoop(animate);
  ```

## requestAnimationFrame

+ 更通用且适用于更多场景

+ 示例

  ```js
  function animate() {
    // 更新动画状态
    // 渲染场景
    renderer.render(scene, camera);

    // 下一帧继续动画
    requestAnimationFrame(animate);
  }

  // 开始动画循环
  requestAnimationFrame(animate);
  ```

## 区别之一 用法场景

+ requestAnimationFrame(animate):

  + 原生的 JavaScript 方法，用于在浏览器的下一个重绘周期调用指定的回调函数（通常是动画函数）
  + 适用于所有类型的动画，包括基于 DOM 的动画、Canvas 动画和 WebGL 动画
  + 常用于自主控制的动画循环

+ renderer.setAnimationLoop(animate):

  + 是 Three.js 提供的方法，专门用于与 WebGL 渲染器（如 THREE.WebGLRenderer）配合使用
  + 主要用于在渲染器与动画同步时，处理虚拟现实（VR）或增强现实（AR）场景，因为它支持 WebXR 设备的帧率管理和帧同步
  + 适用于需要使用 WebGL 渲染器进行复杂的 3D 场景渲染和动画的场景，尤其是当你需要支持 VR/AR 时

## 区别之二 功能与控制

+ requestAnimationFrame(animate):

  + 通过浏览器的刷新率触发回调函数，一般是每秒 60 次（取决于显示器的刷新率）
  + 完全由开发者控制，可以自由暂停或停止动画循环
  + 不直接与 Three.js 或 WebGL 渲染器绑定，适用于更多通用场景

+ renderer.setAnimationLoop(animate):

  + 与 Three.js 的渲染循环紧密集成，可以自动管理帧率，特别是在使用 WebXR 时，能更好地支持设备特定的刷新率和帧同步
  + 自动处理了 Three.js 中的一些渲染器设置，减少了手动管理渲染过程的需求
  + 更适合复杂的 3D 渲染场景，因为它会确保在每一帧都与渲染器的状态同步，尤其是当你在使用 VR/AR 时

## 区别之三 支持 VR/AR

+ requestAnimationFrame(animate):

  + 本身不支持 VR/AR，开发者需要手动处理帧率管理和设备同步

+ renderer.setAnimationLoop(animate):

  + 设计时考虑了 WebXR，支持 VR 和 AR 设备的帧率管理，确保动画和渲染同步
  + 是在使用 Three.js 构建 VR/AR 应用时的推荐方法

## 区别之四 性能与优化（核心）

+ requestAnimationFrame(animate):

  + 完全由浏览器控制帧率，适合通用动画，但需要手动管理帧率和优化渲染流程

+ renderer.setAnimationLoop(animate):

  + 自动优化了与 Three.js 渲染器的集成，尤其是复杂 3D 场景下的性能表现，减少了需要手动优化的部分


