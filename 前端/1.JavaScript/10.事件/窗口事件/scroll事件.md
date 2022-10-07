# scroll事件

## scroll事件

  - `scroll` 事件在文档或文档元素滚动时触发，主要出现在用户拖动滚动条

    ```js
    window.addEventListener('scroll', callback);
    ```

  - 通过 `scrollTop` 和 `scrollLeft` ，可以获取和设置滚动间距

  - 由于该事件会连续地大量触发，所以它的监听函数之中不应该有非常耗费计算的操作

  - 推荐的做法是使用 `requestAnimationFrame` 或 `setTimeout` 控制该事件的触发频率，然后可以结合 `customEvent` 抛出一个新事件

    ```js
    // requestAnimationFrame 版本
    (function() {
      var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
          if (running) { return; }
          running = true;
          requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

      // 将scroll事件重定义为optimizedScroll事件
      throttle('scroll', 'optimizedScroll');
    })();

    window.addEventListener('optimizedScroll', function() {
      console.log("Resource conscious scroll callback!");
    });
    ```

    ```js
    // setTimeout 版本 可以放置更大的时间间隔
    (function() {
      window.addEventListener('scroll', scrollThrottler, false);

      var scrollTimeout;
      function scrollThrottler() {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(function() {
            scrollTimeout = null;
            actualScrollHandler();
          }, 66);
        }
      }

      function actualScrollHandler() {
        // ...
      }
    }());
    ```
