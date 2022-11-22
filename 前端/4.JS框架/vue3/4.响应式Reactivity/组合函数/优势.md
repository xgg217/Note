# 优势

## 对象式 API 存在的问题

+ 不利于复⽤
+ 潜在命名冲突
+ 上下⽂丢失
+ 有限的类型⽀持
+ 按 API 类型组织

## 组合式 API 提供的能⼒

+ 极易复⽤ (原⽣ JS 函数)
+ 可灵活组合 (⽣命周期钩⼦可多次使⽤)
+ 提供更好的上下⽂⽀持
+ 更好的 TypeScript 类型⽀持
+ 按功能/逻辑组织

  ```js
  <script setup>
    import { useFeatureA } from './featureA.js'
    import { useFeatureB } from './featureB.js'
    import { useFeatureC } from './featureC.js'

    const { foo, bar } = useFeatureA()
    const { baz } = useFeatureB(foo)
    const { qux } = useFeatureC(baz)
  </script>
  ```

+ 可独⽴于 Vue 组件使⽤
