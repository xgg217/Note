# 高光材质 MeshPhongMaterial

## 概述

+ 高光网格材质MeshPhongMaterial和基础网格材质MeshBasicMaterial、漫反射网格材质MeshLambertMaterial一样都是网格模型的Mesh的材质

+ 高光网格材质MeshPhongMaterial和漫反射网格材质MeshLambertMaterial一样会受到光照的影响

## MeshPhongMaterial对光照反射特点

+ MeshPhongMaterial和MeshLambertMaterial都会收到光照的影响区别在于，对光线反射方式有差异。

+ `MeshPhongMaterial` 可以实现 `MeshLambertMaterial` 不能实现的高光反射效果
+ 对于高光效果，你可以想象一下，你在太阳下面观察一辆车，你会发现在特定角度和位置，你可以看到车表面某个局部区域非常高亮

## 镜面反射与漫反射

+ `MeshPhongMaterial` 可以提供一个镜面反射效果,可以类比你生活中拿一面镜子，放在太阳光下，调整角度，可以把太阳光反射到其它地方，如果反射光对着眼睛，也就是反射光线和视线平行的时候，会非常刺眼。

+ `MeshLambertMaterial` 对应的Mesh受到光线照射，没有镜面反射的效果，只是一个漫反射，也就是光线向四周反射

## 高光亮度属性.shininess

+ 通过 `MeshPhongMaterial` 的高光亮度 `.shininess` 属性,可以控制高光反射效果

  ```js
  // 模拟镜面反射，产生一个高光效果
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 20, //高光部分的亮度，默认30
    specular: 0x444444, //高光部分的颜色
  });
  ```

## 高光颜色属性.specular

+ 可以给颜色属性 `.specular` 设置不同的值，比如0x444444、0xfffffff 查看渲染效果变化
+ 默认值为0x111111（深灰色）的颜色Color

  ```js
  // 模拟镜面反射，产生一个高光效果
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 20, //高光部分的亮度，默认30
    specular: 0x444444, //高光部分的颜色
  });
  ```
