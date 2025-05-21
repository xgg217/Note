#

## 概述

+ simplex-noise.js 是 Javascript/TypeScript 中的单纯形噪声实现
+ 它在浏览器和 Node.js 中使用 CommonJS 和 ES 模块
+ 它是自包含的（无依赖性），相对较小（大约 2k 的压缩和 gzip 压缩） 并且相当快（对于 2D 噪声样本，大约需要 20 纳秒）并且可摇晃

## 使用

+ 安装

  ```bash
  npm i -S simplex-noise
  ```

+ ES 模块导入

  ```js
  // import the noise functions you need
  import { createNoise2D } from 'simplex-noise';
  ```

+ CommonJS 需要

  ```js
  // import the noise functions you need
  const { createNoise2D } = require('simplex-noise');
  ```

## 维度

+ 二维

  ```js
  // initialize the noise function
  const noise2D = createNoise2D();

  // returns a value between -1 and 1
  console.log(noise2D(x, y));
  ```

+ 三维

  ```js
  const noise3D = createNoise3D();
  console.log(noise3D(x, y, z));
  ```

+ 4D

  ```js
  const noise4D = createNoise4D();
  console.log(noise4D(x, y, z, w));
  ```

