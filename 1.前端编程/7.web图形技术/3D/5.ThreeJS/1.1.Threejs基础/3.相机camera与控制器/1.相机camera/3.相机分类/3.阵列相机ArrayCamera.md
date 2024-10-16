# ArrayCamera

## 概述

+ ArrayCamera 包含着一组子摄像机，常用于多人同屏的渲染，更好地提升VR场景的渲染性能

+ 它允许你在单个摄像机对象中管理多个摄像机
+ 这在需要同时从多个视角捕捉场景时非常有用，例如在创建多视角视频、全景视图、或者在某些特殊的渲染效果中

## 构造函数

+ 构造函数 new THREE.ArrayCamera() 不接受任何参数，它创建一个空的摄像机数组
+ 你可以手动向这个数组中添加任何类型的摄像机（例如透视摄像机 `THREE.PerspectiveCamera` 或正射摄像机 `THREE.OrthographicCamera`）

  ```js
  // 创建一个 ArrayCamera
  var arrayCamera = new THREE.ArrayCamera();

  // 创建多个透视摄像机并添加到 ArrayCamera 中
  var camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  arrayCamera.add(camera1);
  arrayCamera.add(camera2);
  arrayCamera.add(camera3);

  // 添加到场景
  var scene = new THREE.Scene();
  scene.add(arrayCamera);
  ```

## 属性

+ THRE.ArrayCamera 的主要属性是它内部维护的摄像机数组，可以通过 arrayCamera.cameras 访问
+ 这个数组可以包含任意数量和类型的摄像机

## 方法

+ THREE.ArrayCamera 继承自 THREE.Object3D，所以它拥有 `THREE.Object3D` 的所有方法，例如：

  + `add(camera)` - 将一个新的摄像机添加到数组中
  + `remove(camera)` - 从数组中移除一个摄像机
  + `updateMatrixWorld()` - 更新摄像机的世界矩阵
  + `updateWorldMatrix()` - 更新摄像机的世界矩阵
  + `lookAt(vector)` - 使所有摄像机对准一个给定点

## 使用场景

+ 多视角视频录制：可以在一个场景中放置多个摄像机来记录不同的视角，这对于创建多视角视频内容非常有用

+ 全景视图：通过将多个摄像机放置在不同的方向，可以捕捉完整的360度全景视图

+ 特殊渲染效果：例如，可以使用多个摄像机来实现某种形式的景深效果，或者创建复杂的遮罩效果

+ 立体视觉：虽然 `THREE.StereoCamera` 专门用于立体视觉，但在某些情况下，你可能需要更精细地控制每个摄像机，这时可以使用 `THREE.ArrayCamera`

## 注意事项

+ 确保每个摄像机的配置（如裁剪平面、视角等）是一致的，除非你有意制造不同的效果

+ 当使用 THREE.ArrayCamera 时，需要注意渲染逻辑的变化。你可能需要遍历所有的摄像机并将场景渲染到不同的目标

+ 处理多个摄像机可能会增加渲染开销，因此在性能敏感的应用中要小心使用

## 示例

+ 创建全景视图

  ```js
  // 创建一个 ArrayCamera
  var arrayCamera = new THREE.ArrayCamera();

  // 创建并配置四个透视摄像机，分别面向前后左右
  var cameraFront = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var cameraBack = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var cameraLeft = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var cameraRight = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // 设置摄像机位置
  cameraFront.position.set(0, 0, 1);
  cameraBack.position.set(0, 0, -1);
  cameraLeft.position.set(-1, 0, 0);
  cameraRight.position.set(1, 0, 0);

  // 添加到 ArrayCamera
  arrayCamera.add(cameraFront);
  arrayCamera.add(cameraBack);
  arrayCamera.add(cameraLeft);
  arrayCamera.add(cameraRight);

  // 添加到场景
  var scene = new THREE.Scene();
  scene.add(arrayCamera);
  ```







