# provide / inject 标注类型

## 概述

+ `provide` 和 `inject` 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型

  ```js
  import { provide, inject } from 'vue'
  import type { InjectionKey } from 'vue'

  const key = Symbol() as InjectionKey<string>

  provide(key, 'foo') // 若提供的是非字符串值会导致错误

  const foo = inject(key) // foo 的类型：string | undefined
  ```

## key 最佳实践

+ 建议将注入 `key` 的类型放在一个单独的文件中，这样它就可以被多个组件导入

+ 当使用字符串注入 `key` 时，注入值的类型是 `unknown` ，需要通过泛型参数显式声明

  ```js
  const foo = inject<string>('foo') // 类型：string | undefined
  ```

+ 注意注入的值仍然可以是 `undefined` ，因为无法保证提供者一定会在运行时 `provide` 这个值

+ 当提供了一个默认值后，这个 `undefined` 类型就可以被移除：

  ```js
  const foo = inject<string>('foo', 'bar') // 类型：string
  ```

## 强制转换

+ 如果你确定该值将始终被提供，则还可以强制转换该值：

  ```js
  const foo = inject('foo') as string
  ```
