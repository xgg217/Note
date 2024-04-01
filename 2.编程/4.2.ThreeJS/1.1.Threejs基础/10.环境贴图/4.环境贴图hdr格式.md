# 环境贴图hdr格式

## 加载hdr图像

+ 引入

  ```js
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
  ```

+ 加载hdr图像,设置为环境贴图

  ```js
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('./envMap.hdr', function (envMap) {
    scene.environment = envMap;
    // hdr作为环境贴图生效，设置.mapping为EquirectangularReflectionMapping
    envMap.mapping = THREE.EquirectangularReflectionMapping;
  })
  ```
