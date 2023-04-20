# nextTick

## 使用

+ nextTick 的使用方法，除了不能用 this 其他的和 Vue2 一模一样，还是三种方式

  ```js
  <script setup>
    import { nextTick } from 'vue'

    // 方式 一
    const handleClick = async () => {
      await nextTick()
      console.log('沐华')
    }

    // 方式二
    nextTick(() => {
        console.log('沐华')
    })

    // 方式三
    nextTick().then(() => {
      console.log('沐华')
    })
  </script>
  ```
