# debounce 防抖

## 概述

+ 当持续触发一个事件时，在n秒内，事件没有再次触发，此时才会执行回调；如果n秒内，又触发了事件，就重新计时
+ 总之就是要等你触发完事件 n 秒内不再触发事件，我才执行

+ 使用场景

  + 远程搜索

## 使用场景

1. window 的 `resize` 、`scroll`

2. `mousedown`、`mousemove`

3. `keyup`、`keydown`

4. 远程搜索

5. ……

## API

+ `_.debounce(func, [wait=0], [options=])`

+ 参数

  + func  (Function) : 要防抖动的函数
  + [wait=0]  (number) : 需要延迟的毫秒数
  + [options=]  (Object) : 选项对象

    + [options.leading=false]  (boolean) : 指定在延迟开始前调用
    + [options.maxWait]  (number) : 设置 func 允许被延迟的最大值
    + [options.trailing=true]  (boolean) : 指定在延迟结束后调用

+ 返回值：(Function): 返回新的 debounced（防抖动）函数

  ```js
  // 避免窗口在变动时出现昂贵的计算开销
  jQuery(window).on('resize', _.debounce(calculateLayout, 150));
  ```

  ```js
  // 当点击时 `sendMail` 随后就被调用
  jQuery(element).on('click', _.debounce(sendMail, 300, {
    'leading': true,
    'trailing': false
  }));
  ```

  ```js
  // 确保 `batchLog` 调用1次之后，1秒内会被触发
  var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
  var source = new EventSource('/stream');
  jQuery(source).on('message', debounced);

  // 取消一个 trailing 的防抖动调用
  jQuery(window).on('popstate', debounced.cancel);
  ```

## 总结

+ 对于按钮防点击来说的实现：如果函数是立即执行的，就立即调用，如果函数是延迟执行的，就缓存上下文和参数，放到延迟函数中去执行。一旦我开始一个定时器，只要我定时器还在，你每次点击我都重新计时。一旦你点累了，定时器时间到，定时器重置为 `null`，就可以再次点击了

+ 对于延时执行函数来说的实现：清除定时器ID，如果是延迟调用就调用函数
