# 防抖 debounce

## 原理

+ 尽管触发事件，但是一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行

+ 总之就是要等你触发完事件 n 秒内不再触发事件，我才执行

## 使用场景

  1. window 的 `resize` 、`scroll`

  2. `mousedown`、`mousemove`

  3. `keyup`、`keydown`

  4. ……

## 总结

+ 对于按钮防点击来说的实现：如果函数是立即执行的，就立即调用，如果函数是延迟执行的，就缓存上下文和参数，放到延迟函数中去执行。一旦我开始一个定时器，只要我定时器还在，你每次点击我都重新计时。一旦你点累了，定时器时间到，定时器重置为 `null`，就可以再次点击了

+ 对于延时执行函数来说的实现：清除定时器ID，如果是延迟调用就调用函数

## 防抖实现1

+ 代码

  ```js
  function debounce (func, wait = 1000) {
    let that = null;
    let tiems = 0;
    let rus = undefined;
    return function(...rags) {
      that = this;

      clearTimeout(tiems);
      tiems = setTimeout(function() {
        rus = func.apply(that, rags);
      }, wait);

      return rus
    }
  }
  ```

+ 实际使用

  ```js
  var count = 1;
  var container = document.getElementById('container');

  function getUserAction() {
    container.innerHTML = count++;
  };

  const aaa = debounce(getUserAction)

  container.onmousemove = aaa;
  ```

## 实现2：可以设置是否立即执行

+ 不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发n秒后，才可以重新触发执行

+ 加个 immediate 参数判断是否是立刻执行

  ```js
  /**
    * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
    *
    * @param  {function} func        回调函数
    * @param  {number}   wait        表示时间窗口的间隔
    * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
    * @return {function}             返回客户调用函数
    */
  function debounce(func, wait = 100, immediate) {
    let timeout, result;

    return function () {
      let that = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果已经执行过，不再执行
        var callNow = !timeout;
        timeout = setTimeout(function(){
          timeout = null;
        }, wait)
        if (callNow) result = func.apply(that, args)
      } else {
        timeout = setTimeout(function(){
          result = func.apply(that, args)
        }, wait);
      }

      return result;
    }
  }
  ```

## 实现3：增加取消

+ 希望能取消 debounce 函数，比如说我 debounce 的时间间隔是 10 秒钟，immediate 为 true，这样的话，我只有等 10 秒后才能重新触发事件

+ 现在我希望有一个按钮，点击后，取消防抖，这样我再去触发，就可以又立刻执行啦

  ```js
  function debounce(func, wait, immediate) {

    let timeout, result;

    var debounced = function () {
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果已经执行过，不再执行
        var callNow = !timeout;
        timeout = setTimeout(function(){
          timeout = null;
        }, wait)
        if (callNow) result = func.apply(context, args)
      }
      else {
        timeout = setTimeout(function(){
          result = func.apply(context, args)
        }, wait);
      }
      return result;
    };

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  }
  ```
