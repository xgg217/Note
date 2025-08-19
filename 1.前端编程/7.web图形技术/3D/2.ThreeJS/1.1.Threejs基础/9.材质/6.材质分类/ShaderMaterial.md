# ShaderMaterial

## 特性

+ 特性：允许用户自定义着色器代码
+ 属性：包括顶点着色器 (vertexShader) 和片段着色器 (fragmentShader)

  ```js
  var vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  var fragmentShader = `
    uniform vec3 color;
    varying vec3 vPosition;
    void main() {
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  var material = new THREE.ShaderMaterial({
    uniforms: { 'color': { value: new THREE.Color(0x00ff00) } },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  });
  ```
