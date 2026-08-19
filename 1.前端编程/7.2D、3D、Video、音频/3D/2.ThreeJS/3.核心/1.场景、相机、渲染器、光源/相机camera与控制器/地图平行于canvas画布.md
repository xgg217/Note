# 地图平行于canvas画布

## 概述

+ 把相机的位置和观察目标的xy坐标设置为一样，这样相机的视线方向就垂直地图平面，这样地图就平行于canvas画布，或者说平行于显示器屏幕

  ```js
  const x = 113.51,y = 33.88;
  //与观察点x、y一样，地图平行与canvas画布
  camera.position.set(x, y, 300);
  camera.lookAt(x, y, 0);
  ```
