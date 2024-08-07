# style

## 绑定对象

+ `:style` style 绑定的是一个对象，对象的键是样式名称，值对应的是 ref 形式的属性值
+ 同样可以将 style 所绑定的对象在 script 里面进行声明，这样模板会更加清爽一些

  ```html
  <template>
    <div :style="styleObj">绑定内连样式</div>
  </template>

  <script setup>
  import { reactive } from 'vue'
  const styleObj = reactive({
    color: 'red',
    fontSize: '30px'
  })
  </script>
  ```

## camelCase与kebab-cased

+ 尽管推荐使用 camelCase，但 `:style` 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)

  ```html
  <div :style="{ 'font-size': fontSize + 'px' }"></div>
  ```

## 样式对象

+ 直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁

  ```js
  const styleObject = reactive({
    color: 'red',
    fontSize: '13px'
  })

  <div :style="styleObject"></div>
  ```

## 数组

+ 可以给 `:style` 绑定一个包含多个样式对象的数组
+ 这些对象会被合并和应用到同一元素上

  ```html
  <template>
    <div :style="styleArr">绑定内连样式</div>
  </template>

  <script setup>
  import { ref, reactive } from 'vue'
  const styleObj = reactive({
    color: 'red',
    fontSize: '30px'
  })
  const styleObj2 = reactive({
    textDecoration: 'underline'
  })
  const styleArr = ref([styleObj, styleObj2])
  setTimeout(() => {
    styleArr.value.pop()
  }, 3000)
  </script>
  ```
