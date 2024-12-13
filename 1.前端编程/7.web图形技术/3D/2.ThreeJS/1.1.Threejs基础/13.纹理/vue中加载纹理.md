# vue中加载纹理

## 概述

+ code

  ```js
  const loader = new THREE.TextureLoader();
  const imgUr = new URL("./checker.png", import.meta.url).href;
  const texture = loader.load(imgUr);
  ```
