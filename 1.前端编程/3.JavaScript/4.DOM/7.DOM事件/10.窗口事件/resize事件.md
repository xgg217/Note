# resize事件

## 概述

+ `resize` 事件在改变浏览器窗口大小时触发，发生在 `window` 、`body`、`frameset` 对象上面

  ```js
  var resizeMethod = function(){
    if (document.body.clientWidth < 768) {
      console.log('移动设备');
    }
  };

  window.addEventListener("resize", resizeMethod, true);
  ```

+ 该事件也会连续地大量触发，所以最好像上面的 `scroll` 事件一样，通过 `throttle` 函数控制事件触发频率
