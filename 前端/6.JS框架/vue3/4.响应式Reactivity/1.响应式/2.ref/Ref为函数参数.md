# 接受 Ref 作为函数参数

## 纯函数

+ 代码

  ```js
  function add(a: number, b: number) {
    return a + b
  }

  // 使用
  let a = 1

  let b = 2
  let c = add(a, b) // 3
  ```

## 接受 Ref 作为参数，返回一个响应式的结构

+ 代码

  ```js
  function add(a: Ref<number>, b: Ref<number>) {
    return computed(() => a.value + b.value)
  }

  // 使用
  const a = ref(1)

  const b = ref(2)
  const c = add(a, b)
  c.value // 3
  ```

## 同时接受闯入值和 Ref

+ 代码

  ```js
  function add(
    a: Ref<number> | number,
    b: Ref<number> | number
  ) {
    return computed(() => unref(a) + unref(b))
  }

  // 使用
  const a = ref(1)

  const c = add(a, 5)
  c.value // 6
  ```
