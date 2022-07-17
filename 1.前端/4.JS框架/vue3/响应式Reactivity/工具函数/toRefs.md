# toRefs

## 概述

  - 将一个响应式对象转换为一个普通对象，这个普通对象的每个 property 都是指向源对象相应 property 的 ref

  - 每个单独的 ref 都是使用 [toRef()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#toref "toRef()") 创建的

## toRefs

  - 把一个响应式对象的所有属性转换为 `ref` 格式，然后包装到一个 `plain-object` 中返回

    ```javascript
    const state = reactive({
      foo: 1,
      bar: 2
    })

    const stateAsRefs = toRefs(state)
    /*
    stateAsRefs: not a proxy
    {
      foo: { value: ... },
      bar: { value: ... }
    }
    */

    // 这个 ref 和源属性已经“链接上了”
    state.foo++
    console.log(stateAsRefs.foo.value) // 2

    stateAsRefs.foo.value++
    console.log(state.foo) // 3
    ```

## 使用场景

1.  当从组合式函数中返回响应式对象时，`toRefs` 大有作为，使用它，消费者组件可以解构/扩展返回的对象而不会失去响应性

    ```typescript
    function useFeatureX() {
      const state = reactive({
        foo: 1,
        bar: 2
      })

      // ...基于状态的操作逻辑

      // 在返回时都转为 ref
      return toRefs(state)
    }

    // 可以解构而不会失去响应性
    const { foo, bar } = useFeatureX()
    ```

## 注意点

  - `toRefs` 在调用时只会为源对象上可以列举出的 property 创建 ref

  - 如果要为可能还不存在的 property 创建 ref，请改用 [toRef](https://staging-cn.vuejs.org/api/reactivity-utilities.html#toref "toRef")&#x20;

## TS类型

  - 类型

    ```typescript
    function toRefs<T extends object>(
      object: T
    ): {
      [K in keyof T]: ToRef<T[K]>
    }

    type ToRef = T extends Ref ? T : Ref<T>
    ```
