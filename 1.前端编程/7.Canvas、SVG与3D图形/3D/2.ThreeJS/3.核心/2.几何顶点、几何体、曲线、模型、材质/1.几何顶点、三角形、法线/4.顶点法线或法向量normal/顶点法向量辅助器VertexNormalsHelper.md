# 顶点法向量辅助器VertexNormalsHelper

## 概述

+ 渲染箭头辅助对象 arrows 来模拟顶点的法线. 需要定义了法线缓存属性 custom attribute 或 使用了 computeVertexNormals 方法计算了顶点法线

## 导入

+ VertexNormalsHelper 是一个附加组件，必须显式导入

  ```js
  import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
  ```

## API

+ `new VertexNormalsHelper( object : Object3D, size : Number, color : Hex, linewidth : Number )`

  + object:要渲染顶点法线辅助的对象
  + size （可选的）箭头的长度，默认为 1
  + color 16进制颜色值. 默认为 0xff0000
  + linewidth (可选的) 箭头线段的宽度，默认为 1

+ 继承链：Object3D → Line → VertexNormalsHelper


  ```js
  const geometry = new THREE.BoxGeometry( 10, 10, 10, 2, 2, 2 );
  const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
  const box = new THREE.Mesh( geometry, material );

  const helper = new VertexNormalsHelper( box, 2, 0x00ff00, 1 );

  scene.add( box );
  scene.add( helper );
  ```
