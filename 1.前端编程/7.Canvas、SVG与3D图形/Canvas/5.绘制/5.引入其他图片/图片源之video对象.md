# 视频图像

## 概述

+ 在视频播放中， 抓取当前帧作为图像，引入canvas

  ```html
  <video src="../imgs/01.mp4" controls width="400" height="400" muted ></video>

  <script>
    /** @type {HTMLCanvasElement} */
    const canvas1 = document.querySelector(".c1");

    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas1.getContext("2d");

    const video = document.querySelector("video");
    // ctx.drawImage(video,0,0, 400,400, 0, 0, 400,400);

    // 点击播放的时候将视频内容映射到canvas 中
    video.addEventListener('play', () => {
      draw()
    });

    const draw = () => {
      ctx.clearRect(0, 0, 400, 400);
      ctx.drawImage(video,0,0, 400,400);
      requestAnimationFrame(draw);
    }
  </script>
  ```
