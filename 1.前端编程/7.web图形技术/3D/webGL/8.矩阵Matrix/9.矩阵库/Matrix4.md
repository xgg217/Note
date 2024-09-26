# Matrix4

## 安装 引入

+ 引入

  ```js
  import {Matrix4} from 'https://unpkg.com/three/build/three.module.js';

  ```

## 基本使用

+ 实例化矩阵对象，在其中写入旋转信息

  ```js
  const matrix=new Matrix4()
  matrix.makeRotationZ(Math.PI/6)
  ```

+ 基于matrix 对象的elements 属性，修改uniform 变量

  ```js
  const u_Matrix=gl.getUniformLocation(gl.program,'u_Matrix')
  gl.uniformMatrix4fv(u_Matrix,false,matrix.elements)
  ```
