# js 控制顶点颜色的步骤

## 步骤

+ 步骤1：在片元着色器里把控制顶点颜色的变量暴露出来

  ```js
  <script id="fragmentShader" type="x-shader/x-fragment">
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
  </script>
  ```

+ 步骤2： 在js 中获取片元着色器暴露出的uniform 变量

  ```js
  const u_FragColor=gl.getUniformLocation(gl.program,'u_FragColor');
  ```

+ 步骤3:修改uniform 变量

  ```js
  gl.uniform4f(u_FragColor,1.0,1.0,0.0,1.0);
  ```

+ 步骤4
+ 步骤1
+ 步骤1
