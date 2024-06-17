# CSS 样式穿透

## 概述

+ `:deep(.class)`

  ```js
  <style lang="scss" scoped>
    // 这样写不生效的话
    .el-form {
        .el-form-item { ... }
    }
    // Vue2 中这样写
    /deep/ .el-form {
        .el-form-item { ... }
    }
    // Vue3 中这样写
    :deep(.el-form) {
        .el-form-item { ... }
    }
  </style>
  ```
