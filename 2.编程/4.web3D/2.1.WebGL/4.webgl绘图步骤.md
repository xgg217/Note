# webgl 的绘图步骤

## webgl 的绘图思路

1. 找一台电脑 - 浏览器里内置的webgl 渲染引擎，负责渲染webgl 图形，只认GLSL ES语言
2. 找一块手绘板 - 程序对象，承载GLSL ES语言，翻译GLSL ES语言和js语言，使两者可以相互通信
3. 找一支触控笔 - 通过canvas 获取的webgl 类型的上下文对象，可以向手绘板传递绘图命令，并接收手绘板的状态信息
4. 开始画画 - 通过webgl 类型的上下文对象，用js 画画

## 绘图步骤

1. 在html中建立canvas 画布

    ```html
    <canvas id="canvas"></canvas>
    ```

2. 在js中获取canvas画布

    ```js
    const canvas=document.getElementById('canvas');
    ```

3. 使用canvas 获取webgl 绘图上下文

    ```js
    const gl=canvas.getContext('webgl');
    ```

4. 在script中建立顶点着色器和片元着色器，glsl es

    ```html
    //顶点着色器
    <script id="vertexShader" type="x-shader/x-vertex">
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 100.0;
        }
    </script>
    //片元着色器
    <script id="fragmentShader" type="x-shader/x-fragment">
        void main() {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
    </script>
    ```

5. 在js中获取顶点着色器和片元着色器的文本

    ```js
    const vsSource = document.getElementById('vertexShader').innerText;
    const fsSource = document.getElementById('fragmentShader').innerText;
    ```

6. 初始化着色器

    ```js
    initShaders(gl, vsSource, fsSource);
    ```

7. 指定将要用来清空绘图区的颜色

    ```js
    gl.clearColor(0,0,0,1);
    ```

8. 使用之前指定的颜色，清空绘图区

    ```js
    gl.clear(gl.COLOR_BUFFER_BIT);
    ```

9.  绘制顶点

    ```js
    gl.drawArrays(gl.POINTS, 0, 1);
    ```


+ 完整代码

  ```js
  <canvas id="canvas"></canvas>
  <!-- 顶点着色器 -->
  <script id="vertexShader" type="x-shader/x-vertex">
      void main() {
          gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
          gl_PointSize = 100.0;
      }
  </script>
  <!-- 片元着色器 -->
  <script id="fragmentShader" type="x-shader/x-fragment">
      void main() {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
  </script>
  <script>
    // canvas 画布
    const canvas = document.getElementById('canvas');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    // webgl画笔
    const gl = canvas.getContext('webgl');
    // 顶点着色器
    const vsSource = document.getElementById('vertexShader').innerText;
    // 片元着色器
    const fsSource = document.getElementById('fragmentShader').innerText;
    // 初始化着色器
    initShaders(gl, vsSource, fsSource);
    // 指定将要用来清理绘图区的颜色
    gl.clearColor(0., 0.0, 0.0, 1.0);
    // 清理绘图区
    gl.clear(gl.COLOR_BUFFER_BIT);
    // 绘制顶点
    gl.drawArrays(gl.POINTS, 0, 1);

    function initShaders(gl,vsSource,fsSource){
        //创建程序对象
        const program = gl.createProgram();
        //建立着色对象
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
        //把顶点着色对象装进程序对象中
        gl.attachShader(program, vertexShader);
        //把片元着色对象装进程序对象中
        gl.attachShader(program, fragmentShader);
        //连接webgl上下文对象和程序对象
        gl.linkProgram(program);
        //启动程序对象
        gl.useProgram(program);
        //将程序对象挂到上下文对象上
        gl.program = program;
        return true;
    }

    function loadShader(gl, type, source) {
        //根据着色类型，建立着色器对象
        const shader = gl.createShader(type);
        //将着色器源文件传入着色器对象中
        gl.shaderSource(shader, source);
        //编译着色器对象
        gl.compileShader(shader);
        //返回着色器对象
        return shader;
    }
  </script>
  ```

  ![](images/效果.png)
