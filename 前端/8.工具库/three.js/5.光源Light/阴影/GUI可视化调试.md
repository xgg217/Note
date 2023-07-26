# GUI可视化调试

## 概述

+ 对于光源的等参数，人的大脑很难根据代码想象出来具体效果，所以需要通过可视化的方式调参数

  ```js
  // 从threejs扩展库引入gui.js
  import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
  const gui = new GUI();//创建GUI对象
  gui.domElement.style.right = '0px';
  gui.domElement.style.width = '300px';
  ```

## gui控制环境光光照强度.intensity

+ `gui.add(ambient, 'intensity', 0, 2).name('环境光.intensity');`

## GUI控制环境贴图强度.envMapIntensity

+ 通过材质的环境贴图强度属性 `.envMapIntensity` ，可以控制环境贴图对物体表面的影响程度，类比环境光的光照强度

  ```js
  const obj = {
    envMapIntensity:1.0,
  }
  gui.add(obj,'envMapIntensity',0,2).onChange(function(value){
    // 递归遍历，批量设置模型材质的`.envMapIntensity`属性
    gltf.scene.traverse(function (obj) {
      if (obj.isMesh) {
        obj.material.envMapIntensity = value;
      }
    });
  })
  ```
