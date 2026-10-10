# markRaw

## 概述

+ 跳过响应式代理‌：普通对象放进 `reactive` 会被 Vue 用 Proxy 包裹，数据一变页面就刷新；但用 markRaw 标记后，Vue 会直接忽略它，不追踪变化也不触发更新
‌
  ```js
  const someObject = { name: '天天鸭' };
  const markedObject = markRaw(someObject);

  // 即使使用 reactive，markedObject 也不会变成响应式
  const state = reactive({ obj: markedObject });
  ```

+ 保持原始引用‌：标记后的对象始终保持原始身份，不会变成代理对象，这对于依赖严格引用判断（如 `===` ）的第三方库非常重要

+ ‌不可撤销‌：一旦标记，这个对象就永久脱离响应式系统，后续再想让它变回响应式也不行，必须在放入 `reactive` 或 `ref` 之前就标记好

  ```js
  // 正确写法‌
  const chart = markRaw(echarts.init(el))

  ‌// 错误写法‌
  const chart = ref(echarts.init(el)) // （会被代理导致报错）
  ```

## 使用场景

+ 第三方库实例‌：像 ECharts 图表、Three.js 3D 场景、地图对象等，它们内部有自己的状态管理，被 Vue 代理后容易出错或方法失效

  ```js
  ‌// 正确写法‌
  const chart = markRaw(echarts.init(el))
  ‌
  // 错误写法‌
  const chart = ref(echarts.init(el)) // 会被代理导致报错
  ```
‌
+ 大型静态数据‌：比如上万条的配置项、字典表、国际化语言包，这些数据初始化后不变，没必要浪费性能去监听

+ ‌原生类实例‌：如 `new Date()` 、 `new Map()` 、 `new Set()` 或自定义 Class 实例，通常不需要响应式处理


## API

+ 将一个对象标记为不可被转为代理。返回该对象本身

  ```ts
  function markRaw<T extends object>(value: T): T
  ```

  ```js
  const foo = markRaw({})
  console.log(isReactive(reactive(foo))) // false

  // 也适用于嵌套在其他响应性对象
  const bar = reactive({ foo })
  console.log(isReactive(bar.foo)) // false
  ```

  ```js
  import TitleEditor from "@/views/Custom/Wenjuan/components/EditItems/TitleEditor.vue";

  // 组件
  markRaw(TitleEditor)
  ```

## 注意

+ `markRaw()` 和类似 `shallowReactive()` 这样的浅层式 API 使你可以有选择地避开默认的深度响应/只读转换，并在状态关系谱中嵌入原始的、非代理的对象

+ 它们可能出于各种各样的原因被使用：

  + 有些值不应该是响应式的，例如复杂的第三方类实例或 Vue 组件对象

  + 当呈现带有不可变数据源的大型列表时，跳过代理转换可以提高性能

+ 这应该是一种进阶需求，因为只在根层能访问到原始值，所以如果把一个嵌套的、没有标记的原始对象设置成一个响应式对象，然后再次访问它，你获取到的是代理的版本
+ 这可能会导致对象身份风险，即执行一个依赖于对象身份的操作，但却同时使用了同一对象的原始版本和代理版本：

  ```js
  const foo = markRaw({
    nested: {}
  })

  const bar = reactive({
    // 尽管 `foo` 被标记为了原始对象，但 foo.nested 却没有
    nested: foo.nested
  })

  console.log(foo.nested === bar.nested) // false
  ```
