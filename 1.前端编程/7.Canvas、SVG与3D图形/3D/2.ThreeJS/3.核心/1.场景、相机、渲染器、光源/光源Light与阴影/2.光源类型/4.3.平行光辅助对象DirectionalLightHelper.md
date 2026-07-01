# 平行光辅助对象DirectionalLightHelper

## 概述

+ 通过平行光 `DirectionalLightHelper` 可以可视化平行光 `.position` 和照射方向

  ```js
  // 参数2表示平行光.position附近方框的尺寸
  const dirHelper = new THREE.DirectionalLightHelper( directionalLight, 5);
  scene.add( dirHelper );
  ```

## 更新平行光辅助对象

+ 当平行光位置变化的时候，可以执行 `helper.update()` 更新行光辅助对象 `DirectionalLightHelper` 的姿态同步变化

  ```js
  gui.add(directionalLight.position, 'y', 0, 300).onChange(function(value){
    dirHelper.update();
  });
  ```

  ```js
  const obj = {
    R: 100,
    angle: 0,
  };
  gui.add(obj, 'R', 0, 300).onChange(function(value){
    directionalLight.position.x = value * Math.cos(obj.angle);
    directionalLight.position.z = value * Math.sin(obj.angle);
    dirHelper.update();
  });
  gui.add(obj, 'angle', 0, Math.PI*2).onChange(function(value){
    directionalLight.position.x = obj.R * Math.cos(value);
    directionalLight.position.z = obj.R * Math.sin(value);
    dirHelper.update();
  });
  ```
