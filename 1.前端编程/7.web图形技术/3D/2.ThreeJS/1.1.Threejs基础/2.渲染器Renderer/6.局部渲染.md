# 局部渲染

## 概述

+ 通过 Three.js 渲染器 WebGLRenderer 的剪裁方法 `.setScissor()` 可以在canvas画布上定义一个局部矩形区域，这个矩形区可以称为剪裁框或剪裁区域

+ 剪裁方法 `.setScissor()` 功能简单说就是控制Threejs渲染器渲染方法 `.render()` 影响范围，通过前面课程学习你应该知道，每执行一次渲染器渲染方法 `.render()` 就会得到一帧图像，canvas画布上的像素就会更新
+ 在执行渲染器渲染方法 `.render()` 之前，如果通过剪裁方法 `.setScissor()` 定义了一个剪裁区域，那么执行渲染方法 `.render()` 的时候，剪裁框内的像素数据会被清除掉，canvas画布上处于剪裁框范围外的像素不受影响，渲染结果的像素数据只会覆盖剪裁区域内像素，这也就是 `.setScissor()` 方法为什么被称为剪裁方法的原因

## .setScissorTest() 方法

+ Threejs渲染器的剪裁测试方法 `.setScissorTest()` 用于开启WebGL剪裁区域功能
+ 如果不开启 `.setScissor` 方法设置的范围不起作用该方法封装了原生WebGL的代码 `enable( gl.SCISSOR_TEST );` 和 `disable( gl.SCISSOR_TEST );` ，具体可以查看目录 `src\renderers\webgl\WebGLState.js`

  ```js
  //开启剪裁测试功能，等价于原生WebGL：enable( gl.SCISSOR_TEST );
  renderer.setScissorTest(true)
  ```

  ```js
  //关闭剪裁测试功能，等价于原生WebGL：disable( gl.SCISSOR_TEST );
  renderer.setScissorTest(false)
  ```

## 剪裁方法 .setScissor()

+ 剪裁方法 `.setScissor()` 通过四个参数 `(x, y, width, height)` 定义一个矩形区域，这个矩形区域称为剪裁区域或剪裁框

  + x:剪裁框相对canvas画布左侧像素。默认值：0
  + y:剪裁框相对canvas画布顶部像素。默认值：0
  + width:剪裁框区域宽度。默认值：canvas画布的宽度
  + height:剪裁框区域高度。默认值：canvas画布的高度

  ```js
  var width = window.innerWidth; //窗口宽度
  var height = window.innerHeight; //窗口高度

  //开启WebGL剪裁测试功能，如果不开启，.setScissor方法设置的范围不起作用
  renderer.setScissorTest(true);

  // 渲染函数
  function render() {
    // 距离画布左侧50，顶部100   渲染区域宽高度都是画布宽高的三分之一
    renderer.setScissor(100, 200, width / 3, height / 3);
    // setViewport方法设置的视口变换区域和剪裁方法setScissor设置的渲染区域保持一致
    // 注意setScissor方法设置的是render影响范围，setViewport方法影响的是图形变换
    renderer.setViewport(100, 200, width / 3, height / 3)
    // 设置setScissor方法定义的渲染区域的背景颜色
    renderer.setClearColor(0xffff00, 1)
    renderer.render(scene, camera);
    mesh.rotateY(0.01);
    requestAnimationFrame(render);
  }
  render();
  ```

+ 通过剪裁方法 .setScissor() 设置两个剪裁区域互不影响

  ```js
  //开启WebGL剪裁测试功能，如果不开启，.setScissor方法设置的范围不起作用
  renderer.setScissorTest(true);

  // 渲染函数
  function render() {
    // 距离画布左侧50，顶部100   渲染区域宽高度都是画布宽高的三分之一
    renderer.setScissor(100, 200, width / 3, height / 3);
    // setViewport方法设置的视口变换区域和剪裁方法setScissor设置的渲染区域保持一致
    // 注意setScissor方法设置的是render影响范围，setViewport方法影响的是图形变换
    renderer.setViewport(100, 200, width / 3, height / 3)
    // 设置setScissor方法定义的渲染区域的背景颜色
    renderer.setClearColor(0xffff00, 1)
    renderer.render(scene, camera);

    // 新的剪裁区域
    renderer.setScissor(width / 3+200, 300, width / 3, height / 3);
    renderer.setViewport(width / 3+200, 300, width / 3, height / 3);
    // 新的剪裁区域可以设置一个新的背景颜色
    renderer.setClearColor(0x00ffff, 1)
    renderer.render(scene, camera);
    mesh.rotateY(0.01);
    requestAnimationFrame(render);
  }
  render();
  ```

+ 通过剪裁方法 .setScissor() 设置两个剪裁区域，一个全屏区域，在全屏上一个角落设置一个局部剪裁区域，显示一些特定效果

  ```js
  //开启WebGL剪裁测试功能，如果不开启，.setScissor方法设置的范围不起作用
  renderer.setScissorTest(true)
  // 渲染函数
  function render() {
    // 全屏剪裁区
    renderer.setScissor(0, 0, width, height);
    renderer.setViewport(0, 0, width, height);
    renderer.setClearColor(0x000000, 1);//黑色背景
    renderer.render(scene, camera);

    // 右下角剪裁区
    renderer.setScissor(width-width / 3-10, height-height / 3-10, width / 3, height / 3);
    renderer.setViewport(width-width / 3-10, height-height / 3-10, width / 3, height / 3);
    renderer.setClearColor(0x202020, 1);//浅黑色背景
    renderer.render(scene, camera);
    mesh.rotateY(0.01);
    requestAnimationFrame(render);
  }
  render();
  ```

## 剪裁方法 .setScissor() 和视口方法 .setViewport() 功能区分

+ 功能上划分：

  + `setScissor()` 是属于剪裁方法
  + `setViewport()` 是属于视口方法

+ 剪裁方法setScissor()定义的是Threejs渲染结果像素覆盖影响的范围，剪裁方法setScissor()并不影响Threejs场景中模型的平移缩放变换
+ 视口方法setViewport()影响Threejs场景中模型的平移缩放变换

## 剪裁方法 .setScissor() 和视口方法 .setViewport() 用途

+ 可以在网页上窗口上创建多个canvas元素，每一个canvas元素是一个渲染显示窗口，可以实现多窗口显示
+ 但是每一个canvas画布对象对应一个独立的WebGL上下文， 不同canvas对象的三维场景渲染资源是不能共享的
+ 开发产品有的时候需要同一份canvas资源显示在窗口的多个的区域中，比如在浏览器窗口的客户区分割出两个显示区域， 同一个三维场景以不同的比例分别显示在两个视口里面
+ 同一个三维场景three.js程序是一样的，没有必要创建两个canvas对象，对于WebGL而言，使用原生WebGL API `gl.viewport()` 和 `gl.scissor()` 可以实现， 对于three.js而言使用WebGL渲染器的剪裁方法 `.setScissor()` 和视口方法 `.setViewport()` 用途即可

