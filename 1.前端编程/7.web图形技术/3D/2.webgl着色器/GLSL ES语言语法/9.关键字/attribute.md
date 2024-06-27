# attribute

## 着色器GLSL ES语言语法：attribute关键字

+ `attribute` 是着色器GLSL ES语言的一个关键字，按照GLSL ES的语法规定， `attribute` 关键字一般用来声明与顶点数据有关变量

+ `attribute vec3 pos;` 表示用 `attribute` 声明了一个变量 `pos` ， `attribute` 的作用就是指明 `pos` 是顶点相关变量， `pos` 的数类型是三维向量 `vec3` ，三维向量 `vec3` 意味着pos表示的顶点数据有x、y、z三个分量

  + 比如你可以用pos表示顶点的位置数据xyz(当然也能表示其它类型顶点数据)

  ```js
  const vertexShader = `
  attribute vec3 pos;//注意在主函数外面
  void main(){
    gl_Position = vec4(...,1.0 );
  }
  `
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,// 顶点着色器
  });
  ```

+ 假设 `attribute` 声明的变量 `pos` 表示顶点位置数据，你就可以赋值给 `gl_Position`

+ 执行 `vec4(pos,1.0 )` , 给三维向量vec3增加一个分量，就可以变成四维向量 `vec4` (这是GLSL ES基本语法)

  ```js
  const vertexShader = `
  attribute vec3 pos;
  void main(){
    gl_Position = vec4(pos,1.0 );
  }
  `
  ```


