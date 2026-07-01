# 聚光源辅助对象SpotLightHelper

## 构造函数

+ `SpotLightHelper( light : SpotLight, color : Hex )`

  + `light` -- 被模拟的聚光灯 `SpotLight`

  + `color` -- (可选的) 如果没有赋值辅助对象将使用光源的颜色.

  ```js
  // 聚广源辅助对象，可视化聚广源
  const spotLightHelper = new THREE.SpotLightHelper(spotLight,0xffffff)
  scene.add(spotLightHelper);
  ```
