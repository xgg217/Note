# position

## ShaderMaterial的内置变量position

+ 调用shader材质 `ShaderMaterial` 的时候，threejs会在内部给你写的顶点着色器代码中，插入一行代码 `attribute vec3 position;`
+ 相当于帮你声明了一个变量 `position` ， `position` 表示顶点的位置数据

  ```js
  const vertexShader = `
  attribute vec3 position;//默认提供,不用自己写
  void main(){
    gl_Position = vec4(...,1.0 );
  }
  `
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,// 顶点着色器
  });
  ```

## 内置变量position含义

+ 几何体 `geometry` 与 `ShaderMaterial` 材质构成了一个 `mesh`
+ 也就是说材质 `ShaderMaterial` 关联了几何体 `geometry`

  ```js
  const geometry = new THREE.PlaneGeometry(100, 50);
  console.log('顶点位置数据',geometry.attributes.position);
  const material = new THREE.ShaderMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  ```

+ 当你 `ShaderMaterial` 的时候，threejs会在内部把内置变量 `position` 与几何体的顶点位置数据 `geometry.attributes.position` 关联起来
+ 这意味着，你在顶点着色器代码中访问变量 `position` ，就相当于获取了几何体顶点位置数据 `geometry.attributes.position`

  ```js
  const vertexShader = `
  // attribute vec3 position;//默认提供,不用自己写
  void main(){
    gl_Position = vec4(...,1.0 );
  }
  `
  ```

+ 总而言之，你可以通过执行代码 `gl_Position = vec4(position,1.0);` ，把几何体的顶点位置数据 `geometry.attributes.position` 赋值给内置变量 `gl_Position`

  ```js
  const vertexShader = `
  // attribute vec3 position;//默认提供,不用自己写
  void main(){
    gl_Position = vec4(position,1.0 );
  }
  `
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,// 顶点着色器
  });
  ```
