# onScopeDispose

## 概述

+ onScopeDispose是一个注册回调函数的方法，该回调会在所属的 effectScope 被停止 (scope.stop()) 时执行

  ```js
  import { onScopeDispose } from 'vue';

  const scope = effectScope();
  scope.run(() => {
    const count = ref(0);
    //定时器计数
    let intervalId = setInterval(() => {
      count.value++;
      console.log(count.value, "count");
    }, 1000);
    watchEffect(() => {
      console.log(count.value, "Count changed");
    });

    //在作用域停止时清理定时器
    onScopeDispose(() => {
      clearInterval(intervalId);
    });
  });

  // 当调用 stop 时，作用域内定时器会被清理
  scope.stop();

  ```

