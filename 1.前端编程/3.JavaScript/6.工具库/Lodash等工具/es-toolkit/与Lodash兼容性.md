# 与 Lodash 兼容性

## 概述

+ es-toolkit/compat在所有Lodash函数上表现相同，同时更轻更快。

  + 确保与Lodash的实际测试代码行为一致。
  + 被Storybook、Recharts、CKEditor等知名开源库使用，并受到Nuxt的推荐

  ```js
  // es-toolkit/compat 的目标是提供与 lodash 百分之百的功能兼容性
  import { chunk } from 'es-toolkit/compat';

  chunk([1, 2, 3, 4], 0);
  // 返回 [], 与 lodash 完全相同
  ```

## es-toolkit/compat

+ 该模块旨在提供与 lodash 相同的 API，使得在这两个库之间能够更加容易地进行切换

+ `es-toolkit/compat` 已经对 lodash 的实际测试用例进行了全面测试

+ 需要注意的是，与原始 `es-toolkit` 相比 `es-toolkit/compat` 可能会对性能产生轻微影响，并且包大小可能会更大
+ 该模块旨在促进平滑过渡，一旦迁移完成，应替换回原始的 es-toolkit 以获得最佳性能

