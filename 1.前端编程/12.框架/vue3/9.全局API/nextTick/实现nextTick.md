# 实现 nextTick

## Vue 的 nextTick 是如何实现的？

+ nextTick 的本质将回调函数包装为一个微任务放入到微任务队列，这样浏览器在完成渲染任务后会优先执行微任务

## nextTick 在 Vue2 和 Vue3 里的实现有一些不同：

+ Vue2 为了兼容旧浏览器，会根据不同的环境选择不同包装策略：

  + 优先使用 Promise，因为它是现代浏览器中最有效的微任务实现。

  + 如果不支持 Promise，则使用 MutationObserver，这是另一种微任务机制。

  + 在 IE 环境下，使用 setImmediate，这是一种表现接近微任务的宏任务。

  + 最后是 setTimeout(fn, 0) 作为兜底方案，这是一个宏任务，但会在下一个事件循环中尽快执行。

+ Vue3 则是只考虑现代浏览器环境

  + 直接使用 Promise 来实现微任务的包装，这样做的好处在于代码更加简洁，性能更高，因为不需要处理多种环境的兼容性问题

+ 总结：整体来讲，Vue3 的 nextTick 实现更加简洁和高效，是基于现代浏览器环境的优化版本，而 Vue2 则为了兼容性考虑，实现层面存在更多的兼容性代码。

## nextTick源码

+ 源码

  ```js
  // 创建一个已经解析的 Promise 对象，这个 Promise 会立即被解决，
  // 用于创建一个微任务（microtask）。
  const resolvedPromise = /*#__PURE__*/ Promise.resolve() as Promise<any>

  // 一个全局变量，用于跟踪当前的刷新 Promise。
  // 初始状态为 null，表示当前没有刷新任务。
  let currentFlushPromise: Promise<void> | null = null

  // queueFlush 函数负责将刷新任务（flushJobs）放入微任务队列。
  // 这是 Vue 的异步更新机制的核心部分，用于优化性能。
  function queueFlush() {
    // 检查是否已经在刷新（isFlushing）或者刷新任务是否已被挂起（isFlushPending）。
    if (!isFlushing && !isFlushPending) {
      // 设置 isFlushPending 为 true，表示刷新任务已被挂起，正在等待执行。
      isFlushPending = true
      // 将 currentFlushPromise 设置为 resolvedPromise.then(flushJobs)
      // 这将创建一个微任务，当 resolvedPromise 被解决时，执行 flushJobs 函数。
      currentFlushPromise = resolvedPromise.then(flushJobs)
    }
  }

  // nextTick 函数用于在下一个 DOM 更新循环之后执行一个回调函数。
  // 它返回一个 Promise，这个 Promise 会在 DOM 更新完成后解决。
  export function nextTick<T = void, R = void>(
    this: T,
    fn?: (this: T) => R,  // 可选的回调函数，在 DOM 更新之后执行
  ): Promise<Awaited<R>> {
    // 如果 currentFlushPromise 不为 null，使用它；否则使用 resolvedPromise。
    // 这样可以确保在 DOM 更新之后再执行回调。
    const p = currentFlushPromise || resolvedPromise

    // 如果传入了回调函数 fn，返回一个新的 Promise，在 p 解决之后执行 fn。
    // 使用 this 绑定来确保回调函数的上下文正确。
    return fn ? p.then(this ? fn.bind(this) : fn) : p
    // 如果没有传入回调函数 fn，直接返回 Promise p，这样外部代码可以使用 await 等待 DOM 更新完成。
  }
  ```
