# random 随机数

## 概述

+ `anime.random(minValue, maxValue)` 返回一个随机数

  ```js
  function randomValues() {
    anime({
      targets: '.random-demo .el',
      translateX: function() {
        return anime.random(0, 270);
      },
      easing: 'easeInOutQuad',
      duration: 750,
      complete: randomValues
    });
  }

  randomValues();
  ```

+ 源码

  ```js
  anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
  ```
