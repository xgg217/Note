# 箭头 ArrowHelper

## 概述

+ 用于模拟方向的3维箭头对象

  ![箭头可视化A指向B](images/箭头可视化A指向B.jpg)

  ```js
  const dir = new THREE.Vector3( 1, 2, 0 );

  dir.normalize();

  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 1;
  const hex = 0xffff00;

  const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
  scene.add( arrowHelper );
  ```

## 构造函数

+ `ArrowHelper(dir : Vector3, origin : Vector3, length : Number, hex : Number, headLength : Number, headWidth : Number )`

  + `dir` -- 基于箭头原点的方向 必须为单位向量
  + `origin` -- 箭头的原点
  + `length` -- 箭头的长度 默认为 1
  + `hex` -- 定义的16进制颜色值. 默认为 0xffff00.
  + `headLength` -- 箭头头部(锥体)的长度 默认为箭头长度的0.2倍(0.2 *length).
  + `headWidth` -- The width of the head of the arrow. Default is 0.2* headLength.
