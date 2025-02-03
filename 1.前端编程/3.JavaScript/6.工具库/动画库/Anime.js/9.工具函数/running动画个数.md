# 动画个数 running

## 概述

+ `anime.running` running 表示动画实例，其长度代表动画个数

  ```js
  var runninLogEl = document.querySelector('.running-log');

  anime({
    targets: '.running-demo .square.el',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });

  anime({
    targets: '.running-demo .circle.el',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutCirc'
  });

  anime({
    targets: '.running-demo .triangle.el',
    translateX: 270,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true,
    update: function() {
      runninLogEl.innerHTML = 'there are currently ' + anime.running.length + ' instances running';
    }
  });
  ```
