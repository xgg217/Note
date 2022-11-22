# ref 与 reactive

## Ref

+ 使用

  ```js
  import { ref } from 'vue'

  let foo = 0
  let bar = ref(0)
  foo = 1
  bar = 1 // ts-error
  ```

+ 优点

  + 显示的调用，类型检查
  + 相比 Reactive 局限更少

+ 缺点

  `.value`

## Reactive

+ 使用

  ```js
  import { reactive } from 'vue'

  const foo = { prop: 0 }
  const bar = reactive({ prop: 0 })
  foo.prop = 1
  bar.prop = 1
  ```

+ 优点

  + 自动解包(即不需要 `.value`)

+ 缺点

  + 在类型上与一般对象没有区别
  + 使用 ES6 结构会响应式丢失
  + 需要使用箭头函数包装才能使用 `watch`
