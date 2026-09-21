# 时间 Clock

## 概述

+ 该对象用于跟踪时间

+ 如果 `performance.now` 可用，则 Clock 对象通过该方法实现，否则回落到使用略欠精准的 `Date.now` 来实现

## 构造函数

+ `Clock( autoStart : Boolean )`

  + autoStart — (可选) 是否要在第一次调用 `.getDelta()` 时自动开启时钟。默认值是 `true`

## 属性

+ `.autoStart : Boolean`

  + 如果设置为 `true`，则在第一次调用 `.getDelta()` 时开启时钟
  + 默认值是 `true`

+ `.startTime : Float`

  + 存储时钟最后一次调用 `start` 方法的时间
  + 默认值是 0

+ `.oldTime : Float`

  + 存储时钟最后一次调用 `start`, `.getElapsedTime()` 或 `.getDelta()` 方法的时间
  + 默认值是 0

+ `.elapsedTime : Float`

  + 保存时钟运行的总时长
  + 默认值是 0

+ `.running : Boolean`

  + 判断时钟是否在运行
  + 默认值是 `false`

## 方法

+ `.start () : undefined`

  + 启动时钟
  + 同时将 `startTime` 和 `oldTime` 设置为当前时间
  + 设置 `elapsedTime` 为 0，并且设置 `running` 为 `true`

+ `.stop () : undefined`

  + 停止时钟
  + 同时将 `oldTime` 设置为当前时间

+ `.getElapsedTime () : Float` 获取自时钟启动后的秒数

  + 获取自时钟启动后的秒数，同时将 `.oldTime` 设置为当前时间
  + 如果 `.autoStart` 设置为 `true` 且时钟并未运行，则该方法同时启动时钟

+ `.getDelta () : Float` 获取2帧之间的时间间隔

  + 获取自 `.oldTime` 设置后到当前的*秒*数
  + 同时将 `.oldTime` 设置为当前时间
  + 如果 `.autoStart` 设置为 `true` 且时钟并未运行，则该方法同时启动时钟

    ```js
    // 设置时钟
    const clock = new THREE.Clock();
    function render() {
      // 获取时钟运行的总时长
      let time = clock.getElapsedTime();
      console.log("时钟运行总时长：", time);
      //   let deltaTime = clock.getDelta();
      //     console.log("两次获取时间的间隔时间：", deltaTime);
      let t = time % 5;
      cube.position.x = t * 1;

      renderer.render(scene, camera);
      //   渲染下一帧的时候就会调用render函数
      requestAnimationFrame(render);
    }

    render();
    ```

## 实际使用

+ 一般在渲染循环中使用

  ```js
  const clock = new THREE.Clock();

  function render() {
    // 获取每次更新后的时间间隔
    const t = clock.getDelta();
    console.log("两帧渲染时间间隔",t + "秒")

    requestAnimationFrame(render);
  }

  render();
  ```
