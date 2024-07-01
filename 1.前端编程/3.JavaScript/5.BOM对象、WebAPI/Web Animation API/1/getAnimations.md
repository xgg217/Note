# getAnimations

## 概述

+ 这个方法会返回一个由 animation 对象组成的数组

  ```js
  element.getAnimations()
  ```

  ```js
  // 等到所有动画都完成，然后再移除它们处于活动状态的元素
  Promise.all(
    elem.getAnimations().map(function (animation) {
      return animation.finished;
    }),
  ).then(function () {
    return elem.remove();
  });
  ```
