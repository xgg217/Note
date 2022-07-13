# 事件参数event

## event

*   有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数

    ```html
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
    ```

    ```javascript
    function warn(message, event) {
      // 这里可以访问原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
    ```

## 与TS配合

*   在处理原生 DOM 事件时，应该为我们传递给事件处理器的参数正确地标注类型

    ```vue
    <script setup lang="ts">
    // 没有标注
    function handleChange(event) {
      // `event` 隐式地标注为 `any` 类型
      console.log(event.target.value)
    }
    </script>

    ```

    ```html
    <template>
      <input type="text" @change="handleChange" />
    </template>
    ```

<!---->

*   没有类型标注时，这个 `event` 参数会隐式地标注为 `any` 类型。这也会在 `tsconfig.json` 中配置了 `"strict": true` 或 `"noImplicitAny": true` 时报出一个 TS 错误。

*   此，建议显式地为事件处理器的参数标注类型。此外，你可能需要显式地强制转换 `event` 上的 property：

    ```typescript
    function handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
    ```
