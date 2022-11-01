# unref

## 使用

- 等同于：`isRef(val) ? val.value : val`

    ```typescript
    import type { Ref } from 'vue';

    function useFoo(x : number | Ref<todos>){
      const unwrapped = unref(x);
      // ...
    }
    ```
