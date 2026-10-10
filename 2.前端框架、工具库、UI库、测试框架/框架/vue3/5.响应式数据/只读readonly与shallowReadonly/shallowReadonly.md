# shallowReadonly

## 概述

+ 和 `readonly()` 不同，这里没有深层级的转换：只有根层级的属性变为了只读
+ 属性的值都会被原样存储和暴露，这也意味着值为 `ref` 的属性不会被自动解包了

  ```js
  const state = shallowReadonly({
    foo: 1,
    nested: {
      bar: 2
    }
  })

  // 更改状态自身的属性会失败
  state.foo++

  // ...但可以更改下层嵌套对象
  isReadonly(state.nested) // false

  // 这是可以通过的
  state.nested.bar++
  ```
