# WireframeGeometry

## 概述

+ THREE.WireframeGeometry 是 Three.js 中用于从现有的几何体创建线框几何体的一个类。线框几何体显示的是原几何体的所有边，而不是填充的表面
+ 这对于调试目的非常有用，可以清晰地看到几何体的拓扑结构

## 构造函数

+ new THREE.WireframeGeometry(geometry)

  + geometry：一个有效的 Three.js 几何体对象，如 THREE.Geometry 或 THREE.BufferGeometry

  ```js
  // 创建一个基于 BoxGeometry 的线框几何体
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wireframeGeometry = new THREE.WireframeGeometry(boxGeometry);
  ```

## 使用 THREE.WireframeGeometry

+ 创建线框几何体之后，通常需要为它添加一个材质，并创建一个 THREE.Line 或 THREE.LineSegments 对象来将其添加到场景中

  ```js
  // 创建一个带有红色线条材质的线框立方体：
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wireframeGeometry = new THREE.WireframeGeometry(boxGeometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  const line = new THREE.Line(wireframeGeometry, lineMaterial);
  scene.add(line);
  ```

## 使用其他材质

+ 除了 THREE.LineBasicMaterial 之外，你还可以使用其他材质，比如 THREE.LineDashedMaterial 等，来创建虚线或其他样式的线条

  ```js
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wireframeGeometry = new THREE.WireframeGeometry(boxGeometry);
  const lineMaterial = new THREE.LineDashedMaterial({ color: 0x00ff00, dashSize: 10, gapSize: 5 });
  const line = new THREE.LineSegments(wireframeGeometry, lineMaterial);
  scene.add(line);
  ```

## 使用纹理

+ 线框几何体通常不使用纹理，因为它们是基于线条的，而不是基于表面的
+ 不过，你可以通过调整线条的颜色或样式来达到不同的视觉效果

## 调整线框几何体的外观

+ 可以通过调整线条材质的属性来改变线框几何体的外观，例如颜色、宽度、透明度等

  ```js
  // 创建一个带有红色线条、线宽为 2 的线框立方体，并且线条是半透明的
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wireframeGeometry = new THREE.WireframeGeometry(boxGeometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2, transparent: true, opacity: 0.5 });
  const line = new THREE.Line(wireframeGeometry, lineMaterial);
  scene.add(line);
  ```

## 使用 THREE.Wireframe

+ 如果你想要在同一个 THREE.Mesh 上同时显示填充的表面和线框，可以使用 THREE.Wireframe 来包装现有的材质
+ 这样可以在渲染时同时展示填充的几何体和其线框

  ```js
  // 创建一个既有填充表面又有红色线框的立方体
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const meshMaterial = new THREE.MeshStandardMaterial({ color: 0x44aa88, metalness: 0.5, roughness: 0.5 });
  const wireframe = new THREE.Wireframe();
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });

  // 将 meshMaterial 包装在 Wireframe 中
  meshMaterial.wireframeLinewidth = 2;
  meshMaterial.wireframe = true;
  meshMaterial.wireframeMaterial = wireframeMaterial;

  const mesh = new THREE.Mesh(boxGeometry, meshMaterial);
  scene.add(mesh);
  ```
