# watchEffect

## 语法

  - 第一个参数就是要运行的副作用函数。这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求

  - 第二个参数是一个可选的选项，可以用来调整副作用的刷新时机或调试副作用的依赖

  - 返回值是一个用来停止该副作用的函数

    ```javascript
    const count = ref(0)

    watchEffect(() => console.log(count.value))
    // -> 输出 0

    count.value++
    // -> 输出 1
    ```

## 副作用清除

  - 副作用清除

    ```javascript
    watchEffect(async (onCleanup) => {
      const { response, cancel } = doAsyncWork(id.value)
      // `cancel` 会在 `id` 更改时调用
      // 以便取消之前
      // 未完成的请求
      onCleanup(cancel)
      data.value = await response
    })
    ```

## 停止侦听器

  - 停止侦听器

    ```javascript
    const stop = watchEffect(() => {})

    // 当不再需要此侦听器时:
    stop()
    ```

## 细节

  - 异步执行（微队列）

  - 连续改变依赖的数据，不会每次执行，会将结构收集，进入微队列，然后最后执行

  - 为了根据响应式状态自动应用和重新应用**副作用**

## TS类型

  - 类型

    ```typescript
    function watchEffect(
      effect: (onCleanup: OnCleanup) => void,
      options?: WatchEffectOptions
    ): StopHandle

    type OnCleanup = (cleanupFn: () => void) => void

    interface WatchEffectOptions {
      flush?: 'pre' | 'post' | 'sync' // default: 'pre'
      onTrack?: (event: DebuggerEvent) => void
      onTrigger?: (event: DebuggerEvent) => void
    }

    type StopHandle = () => void
    ```
