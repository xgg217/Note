# Number.EPSILON

## 概述

+ Number.EPSILON 静态数据属性表示 1 与大于 1 的最小浮点数之间的差值

  ```js
  const result = Math.abs(0.2 - 0.3 + 0.1);

  console.log(result);
  // Expected output: 2.7755575615628914e-17

  console.log(result < Number.EPSILON);
  // Expected output: true

  ```
