# toValue

## 概述

+ 与  `unref` 比较相似

  ```js
  import { ref, toValue } from 'vue'
  const countRef = ref(10)
  const normalValue = 20

  console.log(toValue(countRef)) // 10
  console.log(toValue(normalValue)) // 20
  ```

+ toValue 相比 unref 更加灵活一些，它支持传入 getter 函数，并且返回函数的执行结果

  ```js
  import { ref, toValue } from 'vue'
  const countRef = ref(10)
  const normalValue = 20
  const getter = ()=>30;

  console.log(toValue(countRef)) // 10
  console.log(toValue(normalValue)) // 20
  console.log(toValue(getter)) // 30
  ``
