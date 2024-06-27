# gl_Position

## 内置变量gl_Position

+ `gl_Position` 是着色器GLSL ES语言的内置变量，所谓内置变量，就是不用声明，就可以在代码中使用

+ 着色器内置变量 `gl_Position` 数据类型是四维向量 `vec4` ，可以用函数 `vec4()` 创建, `vec4()` 有四个参数，每个参数都是浮点数 `float`

+ `gl_Position` 的值,前面三个参数表示xyz坐标，第四个参数一般固定设置为1.0

  ```js
  const vertexShader = `
  void main(){
    gl_Position = vec4( x, y ,z ,1.0 );
  }
  `
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,// 顶点着色器
  });
  ```

+ 不过一般不会通过 `gl_Position` 直接写顶点坐标，而是从几何体 `BufferGeometry` 获取顶点坐标数据

  ```js
  const vertexShader = `
  void main(){
      gl_Position = vec4(从几何体获取顶点xyz坐标,1.0 );
  }
  `
  ```
