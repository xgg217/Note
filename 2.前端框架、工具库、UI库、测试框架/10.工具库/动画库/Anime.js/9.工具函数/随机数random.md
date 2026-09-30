# random 随机数

## 概述

+ `utils.round(minValue, maxValue)` 返回一个随机数

  ```js
  function randomValues() {
    animate('.random-demo .el',{
      translateX: function() {
        return utils.round(0, 270);
      },
      ease: 'inOutQuad',
      duration: 750,
      onComplete:: randomValues
    });
  }

  randomValues();
  ```

+ 源码

  ```js
  utils.round = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
  ```
