# 动画个数 running

## 概述

+ `anime.running` running 表示动画实例，其长度代表动画个数

  ```js
  var runninLogEl = document.querySelector('.running-log');

  animate('.running-demo .square.el',{
    translateX: 270,
    // alternate: true,
    alternate: true,
    loop: true,
    ease: 'linear'
  });

  animate('.running-demo .circle.el',{
    translateX: 270,
    // alternate: true,
    alternate: true,
    loop: true,
    ease: 'inOutCirc'
  });

  animate('.running-demo .triangle.el',{
    translateX: 270,
    // alternate: true,
    alternate: true,
    ease: 'inOutQuad',
    loop: true,
    onUpdate: function() {
      runninLogEl.innerHTML = 'there are currently ' + anime.running.length + ' instances running';
    }
  });
  ```
