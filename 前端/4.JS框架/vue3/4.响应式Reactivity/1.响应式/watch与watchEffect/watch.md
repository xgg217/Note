# watch

## 概述

  - 等效于 vue2 的 `$watch`

  - 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数

  - 除非配置了 `options`

## 语法

  - 第一个参数是侦听器的**源**。这个来源可以是以下几种

      - 一个函数，返回一个值

      - 一个 ref

      - 一个响应式对象

      - ...或是由以上类型的值组成的数组

  - 第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求

      - 当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值

  - 第三个可选的参数是一个对象，支持以下这些选项：

      - ：在侦听器创建时立即触发回调。第一次调用时旧值是`undefined`

      - ：如果源是对象，强制深度遍历，以便在深层级变更时启动回调

      - ：调整回调函数的刷新时机

      - ：调试侦听器的依赖

## 示例

  - 监听原始值（`ref`）数据的变化

    ```javascript
    import { ref, watch } from "vue";

    const num = ref(0);

    watch(num, (newValue, oldValue) => {
      // ...
    }, options)

    // 或者
    watch(() => num.value, (newValue, oldValue) => {
      // ...
    }, options)

    ```

  - 监听对象的某个值的变化（侦听一个 getter 函数）

    ```javascript
    import { reactive, watch } from "vue";

    const state = reactive({ a: 1, b: 2 });

    watch(() => state.a , (newValue, oldValue) => {
      // ...
      console.log(newValue, oldValue);
    })
    state.a = 10;
    ```

  - 当使用 getter 函数作为源时，侦听器只在此函数的返回值变化时才会启动

      - 如果你想让回调在深层级变更时也能启动，你需要使用 `{ deep: true }` 强制侦听器进入深层级模式

      - 在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象

    ```javascript
    const state = reactive({ count: 0 })
    watch(
      () => state,
      (newValue, oldValue) => {
        // newValue === oldValue
      },
      { deep: true }
    )
    ```

  - 当直接侦听一个响应式对象时（`reactive`），侦听器自动处于深层级模式

    ```javascript
    const state = reactive({ count: 0 })
    watch(state, () => {
      /* 深层级变更状态所触发的回调 */
    })
    ```

  - 监听多个数据的变化

    ```javascript
    import { reactive, ref, watch } from "vue";


    const count = ref(0);
    const obj = reactive({ a:' 张三' });

    setTimeout(() => {
      count.value++;
    }, 2000);

    setTimeout(() => {
      obj.a = '李四';
    }, 2000);

    // 当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值
    watch(() => {return [count.value, obj.a]; }, ([newCount, newName],[oldCount, oldName]) => {
      console.log(newCount, newName);
      console.log(oldCount, oldName);
    });
    ```

## TS类型

  - 类型

    ```typescript
    // 侦听单个来源
    function watch<T>(
      source: WatchSource<T>,
      callback: WatchCallback<T>,
      options?: WatchOptions
    ): StopHandle

    // 侦听多个来源
    function watch<T>(
      sources: WatchSource<T>[],
      callback: WatchCallback<T[]>,
      options?: WatchOptions
    ): StopHandle

    type WatchCallback<T> = (
      value: T,
      oldValue: T,
      onCleanup: (cleanupFn: () => void) => void
    ) => void

    type WatchSource<T> =
      | Ref<T> // ref
      | (() => T) // getter
      | T extends object
      ? T
      : never // 响应式对象

    interface WatchOptions extends WatchEffectOptions {
      immediate?: boolean // 默认：false
      deep?: boolean // 默认：false
      flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
      onTrack?: (event: DebuggerEvent) => void
      onTrigger?: (event: DebuggerEvent) => void
    }
    ```
