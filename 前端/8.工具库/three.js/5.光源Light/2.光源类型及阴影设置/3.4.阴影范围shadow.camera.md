# 阴影范围 .shadow.camera

## 概述

+ 通过光源的阴影相机属性 `.shadow.camera` ,来控制阴影的渲染范围
+ 值是通过复制 `directionalLight.position.set(100, 60, 50);` 来的
+ 所以改动 `directionalLight.position` 的值 `directionalLight.shadow.camera` 也会变化

  ```js
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(100, 60, 50);
  scene.add(directionalLight);

  // 查看平行光阴影相机属性-等同于 directionalLight.position
  console.log('阴影相机属性',directionalLight.shadow.camera);
  ```

## 平行光阴影相机属性 .shadow.camera

+ 平行光 `DirectionalLight` 的 `.shadow` 属性是平行光阴影对象 `DirectionalLightShadow`
+ 平行光阴影对象 `DirectionalLightShadow` 有一个相机属性 `.camera`
+ `.shadow.camera` 属性值(正投影相机 `OrthographicCamera` )

## CameraHelper可视化 .shadow.camera

+ 为了方便观察阴影渲染的范围，需要把平行光对应的阴影相机 `.shadow.camera` 可视化显示

  ```js
  const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

  scene.add(cameraHelper); // 将辅助对象添加到场景中
  ```

## 设置相机 .shadow.camera 长方体范围

+ 根据3D场景渲染范围，去设置 `.shadow.camera` 长方体尺寸参数
+ 一般比你要渲染的范围稍微大一些即可，过小阴影不显示或显示不完整，过大很多可能阴影偏模糊

  ```js
  directionalLight.shadow.camera.left = -50*10;
  directionalLight.shadow.camera.right = 50*10;
  ```

  ![正投影可视空间](../images/正投影可视空间.png)

## 调节光源位置

+ 光源位置影响平行光阴影相机 `.shadow.camera` 的位置，所以要根据渲染范围调整光源的位置

  ```js
  // 光源位置1
  directionalLight.position.set(100, 60, 50);
  ```

  ```js
  // 光源位置2
  directionalLight.position.set(100*2, 60*2, 50*2);
  ```

## 确定阴影计算范围

+ 其实平行光阴影范围的设置，你可以类比以前正投影机位置、长方体可视化空间的设置

  1. 先大概确定下3D场景中需要阴影计算范围，不用精确，有一个数量级就行，比如几百、几千
  2. `.shadow.camera` 的 `.left` 、`.right`、`.top`、`.bottom`、`.near`、`.far` 属性定义的长方体空间
  3. `.shadow.camera` 的位置(光源位置影响 `.shadow.camera` 的位置)

## 根据尺寸数量级设置阴影渲染范围

+ 比如光线是从斜上方照射下来，模型y方向高度100左右，这时候y可以设置为100左右，xz也可以根据渲染范围先给个大概尺寸

  ```js
  directionalLight.position.set(100, 100, 100);
  // 平行光默认从.position指向坐标原点
  ```

+ 光线方向，你可以改变xz坐标来调整

  ```js
  directionalLight.position.set(-100, 100, -100);
  ```

+ 渲染范围可以都先给个几百量级的值，不用精准，先设置，在微调

  ```js
  // 设置三维场景计算阴影的范围
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 100;
  ```
