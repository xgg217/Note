# setup基础

## 使用

- 在 `script` 上加上 `setup`

- 数据定义了就可以用

- 其实我们可以简单的理解为 `script` 包括的内容就是`setup` 中的，并做了 `return`

    ```js
    <script lang="ts" setup>
      import { ref } from "vue";
      const count = ref(0);
    </script>
    ```
