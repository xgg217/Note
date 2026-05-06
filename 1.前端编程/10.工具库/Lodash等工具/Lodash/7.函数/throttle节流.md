# throttle 节流

## 概述

+ 如果你持续触发事件，每隔一段时间，只执行一次事件

## ## API

+ `_.throttle(func, [wait=0], [options=])`

+ 参数

  + `func (Function)`: 要节流的函数
  + `[wait=0] (number)`: 需要节流的毫秒
  + `[options=] (Object)`: 选项对象

    + `[options.leading=true]` (boolean): 指定调用在节流开始前。
    + `[options.trailing=true]` (boolean): 指定调用在节流结束后。

+ 返回值 (Function): 返回节流的函数

  ```js
  // 避免在滚动时过分的更新定位
  jQuery(window).on('scroll', _.throttle(updatePosition, 100));
  ```

  ```js
  // 点击后就调用 `renewToken`，但5分钟内超过1次。
  var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
  jQuery(element).on('click', throttled);

  // 取消一个 trailing 的节流调用。
  jQuery(window).on('popstate', throttled.cancel);
  ```
