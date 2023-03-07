# unref

## 使用

+ 如果传入 `Ref` 返回其值
+ 负责原样返回

  ```js
  import { unref, ref } from 'vue'

  const foo = ref('foo')
  unref(foo) // 'foo'
  const bar = 'bar'
  unref(bar) // 'bar'
  ```

  ```ts
  import type { Ref } from 'vue';

  function useFoo(x : number | Ref<todos>){
    const unwrapped = unref(x);
    // ...
  }
  ```

## 实现

+ 等同于：`isRef(val) ? val.value : val`

  ```ts
  function unref<T>(r: Ref<T> | T): T {

  return isRef(r) ? r.value : r
  }
  ```
