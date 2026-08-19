# MeshPhysicalMaterial清漆层

## 概述

+ `MeshPhysicalMaterial` 和 `MeshStandardMaterial` 都是拥有金属度 `metalness` 、粗糙度 `roughness` 属性的PBR材质

+ `MeshPhysicalMaterial` 是在 `MeshStandardMaterial` 基础上扩展出来的子类，除了继承了 `MeshStandardMaterial` 的金属度、粗糙度等属性，还新增了清漆 `.clearcoat` 、透光率 `.transmission` 、反射率 `.reflectivity` 、光泽 `.sheen` 、折射率 `.ior` 等等各种用于模拟生活中不同材质的属性

## 清漆层属性 clearcoat

+ 清漆层属性 `.clearcoat` 可以用来模拟物体表面一层透明图层，就好比你在物体表面刷了一层透明清漆，喷了点水

+ `.clearcoat` 的范围0到1，默认0

  ```js
  const material = new THREE.MeshPhysicalMaterial( {
    clearcoat: 1.0, // 物体表面清漆层或者说透明涂层的厚度
  });
  ```

## 清漆层粗糙度 clearcoatRoughness

+ 清漆层粗糙度 `.clearcoatRoughness` 属性表示物体表面透明涂层 `.clearcoat` 对应的的粗糙度， `.clearcoatRoughness` 的范围是为0.0至1.0。默认值为0.0。

  ```js
  const material = new THREE.MeshPhysicalMaterial( {
    clearcoat: 1.0, // 物体表面清漆层或者说透明涂层的厚度
    clearcoatRoughness: 0.1, // 透明涂层表面的粗糙度
  });
  ```

## 车外壳PBR材质设置

+ 在设置车外壳清漆层之前，先创建一个 `MeshPhysicalMaterial` 材质，并设置好环境贴图、金属度、粗糙度，属性值先根据文档说明给一个大概的值，具体可以通过gui交互界面可视化调试

  ```js
  const mesh = gltf.scene.getObjectByName('外壳01');

  mesh.material = new THREE.MeshPhysicalMaterial({
    color: mesh.material.color, //默认颜色
    metalness: 0.9,//车外壳金属度
    roughness: 0.5,//车外壳粗糙度
    envMap: textureCube, //环境贴图
    envMapIntensity: 2.5, //环境贴图对Mesh表面影响程度
  })
  ```

## 车外壳油漆效果

+ 车外壳油漆效果，你可以通过PBR材质的清漆层属性 `.clearcoat` 和清漆层粗糙度 `.clearcoatRoughness` 属性模拟

+ 属性值先根据文档说明给一个大概的值，具体可以通过gui交互界面可视化调试

  ```js
  const mesh = gltf.scene.getObjectByName('外壳01');

  mesh.material = new THREE.MeshPhysicalMaterial( {
    color: mesh.material.color, //默认颜色（保留颜色）
    metalness: 0.9,//车外壳金属度
    roughness: 0.5,//车外壳粗糙度
    envMap: textureCube, //环境贴图
    envMapIntensity: 2.5, //环境贴图对Mesh表面影响程度
  });
  ```

## GUI可视化调试PBR材质属性

+ GUI可视化调试PBR材质属性

  ```js
  // 范围可以参考文档
  matFolder.add(mesh.material,'metalness',0,1);
  matFolder.add(mesh.material,'roughness',0,1);
  matFolder.add(mesh.material,'clearcoat',0,1);
  matFolder.add(mesh.material,'clearcoatRoughness',0,1);
  matFolder.add(mesh.material,'envMapIntensity',0,10);
  ```
