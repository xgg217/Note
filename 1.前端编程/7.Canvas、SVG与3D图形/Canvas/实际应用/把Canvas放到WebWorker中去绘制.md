# 把 Canvas 放到 WebWorker 中去绘制

## 开发


## 解决的问题

+ 问题1 Web Worker 中可获取不了 DOM，做不了画布绘制呀
+ 问题2 把 Canvas 的 DOM 节点传入 Web Worker 中报错

  ```js
  // 传 DOM 节点进 web Worker
  const canvas = document.getElementById('myCanvas');
  const worker = new Worker("./wrker.js");

  worker.postMessage({
    canvas
  });
  ```

  ```js
  // worker.js
  onmessage = e => {
    // 获取传递的数据
    const data = e.data;
    postMessage('完成')
  }

  // 因为 postMessage 传数据的时候会进行深拷贝，而 DOM 节点无法被深拷贝
  Uncaught DOMException: Failed to execute 'postMessage' on 'Worker': HTMLCanvasElement object could not be cloned
  ```

+ 问题3 传上下文过去 也报错

  ```js
  // 传 DOM 节点进 web Worker
  const canvas = document.getElementById('myCanvas');
  const worker = new Worker("./wrker.js");

  worker.postMessage({
    canvas: canvas.getContext('2d')
  });
  ```

  ```js
  // worker.js
  onmessage = e => {
    // 获取传递的数据
    const data = e.data;
    postMessage('完成')
  }

  // 报错
  Uncaught DOMException: Failed to execute 'postMessage' on 'Worker': CanvasRenderingContext2D object could not be cloned
  ```

## 解决办法 transferControlToOffscreen

+ 内置 API `transferControlToOffscreen`

  ```js
  // 传 DOM 节点进 web Worker
  const canvas = document.getElementById('myCanvas').transferControlToOffscreen();
  const worker = new Worker("./wrker.js");

  worker.postMessage({
    canvas
  }, [canvas]);
  ```

  ```js
  // worker.js
  onmessage = e => {
    // 获取传递的数据
    const data = e.data;

    // 接收 canvas dom
    const canvas = data.canvas;

    // 获取上下文
    const ctx = canvas.getContext('2d');

    postMessage('完成')
  }
  ```
