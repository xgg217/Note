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
