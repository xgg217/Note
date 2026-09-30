# Promise版定时器

## 概述

+ 代码

  ```js
  const sleepPromise = function sleepPromise(n:number = 1000) {
    return new Promise<void>(res => {
      setTimeout(() => {
        res();
      }, n);
    });
  };
  ```
