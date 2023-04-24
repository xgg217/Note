# 取消ts校验的注释

## 使用

+ 单行忽略

  ```js
  // @ts-ignore
  ```

+ 忽略全文；如果你使用这样，需要放在ts的最顶部

  ```js
  // @ts-nocheck
  ```

  ```js
  // 例如
  <script lang="ts" setup>
  // @ts-nocheck
  import { computed } from 'vue-demi'
  dosomething xxxxxxx
  </script>
  ```
