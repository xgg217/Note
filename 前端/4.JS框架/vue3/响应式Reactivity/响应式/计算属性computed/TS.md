# TS

## 标注类型TS

*   `computed()` 会从其计算函数的返回值上推导出类型：

    ```typescript
    import { ref, computed } from 'vue'

    const count = ref(0)

    // 推导得到的类型：ComputedRef<number>
    const double = computed(() => count.value * 2)

    // => TS Error: Property 'split' does not exist on type 'number'
    const result = double.value.split('')
    ```

*   你还可以通过泛型参数显式指定类型

    ```typescript
    const double = computed<number>(() => {
      // 若返回值不是 number 类型则会报错
    })
    ```
