# shallowRef

## 概述

+ `shallowRef` 进行非深度监听
+ Vue监听的是 `.value` 变化
+ 并不是第一层的数据的变化
+ 因此如果要更改 `shallowRef` 创建的数据
+ 应该 `xxx.value={}`

  ```js
  const state = shallowRef({ count: 1 })

  // 不会触发更改
  state.value.count = 2

  // 会触发更改
  state.value = { count: 2 }
  ```

+ **注意**：改深层属性能改数据，只是没触发响应式，所以当下一次响应式触发的时候，你修改的深层数据会渲染到页面上

+ 用途：`shallowRef` 的用处主要用于一些比较大的但又变化不大的数据

  ```js
  const shallowArray = shallowRef([
    /* 巨大的列表，里面包含深层的对象 */
  ])

  // 这不会触发更新...
  shallowArray.value.push(newObject)
  // 这才会触发更新
  shallowArray.value = [...shallowArray.value, newObject]

  // 这不会触发更新...
  shallowArray.value[0].foo = 1
  // 这才会触发更新
  shallowArray.value = [
    {
      ...shallowArray.value[0],
      foo: 1
    },
    ...shallowArray.value.slice(1)
  ]
  ```

## 使用场景

+ 有一个表格数据，通过接口直接获取，并且主要用在前端展示，需要修改一些深层的属性，但是这些属性并不需要立即表现在页面上

  + 只需要展示 name、age 字段，至于 isOld 字段并不需要展示，我想要计算 isOld 但是又不想触发响应式更新，所以可以用 shallowRef 包起来，进而减少响应式更新，优化性能

  ```js

  ```
