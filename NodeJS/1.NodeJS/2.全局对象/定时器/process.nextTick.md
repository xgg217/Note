# process.nextTick

## 概述

  - 它是在本轮循环执行的，而且是所有异步任务里面最快执行的

  - Node 执行完所有同步任务，接下来就会执行 `process.nextTick` 的任务队列。

  - 如果你希望异步任务尽可能快地执行，那就使用 `process.nextTick`
