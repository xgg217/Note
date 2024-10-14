# triggerRef

## 概述

+ `triggerRef` 更改 `shallowRef` 创建的数据

+ `triggerRef` 可以直接去更改 `shallowRef` 创建数据的某一层

+ 注意

  + vue3中值提供了 `triggerRef` 这个方法，但是并没有提供 `triggerReactive` 的方法
  + 也就是说 `triggerRef` **不可以** 去更改 `shallowReactive` 创建的数据
