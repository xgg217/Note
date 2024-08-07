# Class

## 对象语法

+ 可以给 class 绑定一个对象来切换 class，该对象的键就是要挂上去的样式类，值对应的是一个布尔值， `true` 表示挂上去， `false` 表示不挂上去

  ```html
  <template>
    <div
      class="demo"
      :class="{
        active: isActive,
        'text-danger': hasError
      }"
    >
      绑定样式类
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isActive = ref(true)
  const hasError = ref(false)
  setTimeout(() => {
    hasError.value = true
  }, 3000)
  </script>
  ```

+ 多个对象:如果一个元素要挂的类比较多，那么推荐将对象写到数据里面，不要写到模板里面

  ```html
  <template>
    <div class="demo" :class="classObj">绑定样式类</div>
  </template>

  <script setup>
  import { reactive } from 'vue'
  const classObj = reactive({
    active: true,
    isFinite: true,
    'text-danger': false
  })

  setTimeout(() => {
    classObj['text-danger'] = true
  }, 3000)
  </script>
  ```

## 计算属性的样式对象

+ 绑定一个计算属性的样式对象

  ```html
  <template>
    <div class="demo" :class="classObj">绑定样式类</div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  const isActive = ref(true)
  const error = ref(null)

  const classObj = computed(() => {
    return {
      active: isActive.value && !error.value,
      'text-danger': error.value && error.value.type === 'fatal'
    }
  })
  setTimeout(() => {
    error.value = {
      type: 'fatal'
    }
  }, 3000)
  </script>
  ```

## 数组

+ 数组语法中，数组的每一项一般都是一个 ref 值，ref 所对应的就是真实的要挂上去的类

  ```html
  <template>
    <div class="demo" :class="[isActive, error]">绑定样式类</div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isActive = ref('active')
  const error = ref('text-danger')
  setTimeout(() => {
    isActive.value = 'normal'
  }, 3000)
  </script>
  ```

+ 三元表达式 数组里面，是支持三目运算表达式的

  ```html
  <template>
    <div :class="[isActive ? activeClass : '', errorClass]">绑定样式类</div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isActive = ref(false)
  const activeClass = ref('active')
  const errorClass = ref('text-danger')
  setTimeout(() => {
    isActive.value = true
  }, 3000)
  </script>
  ```

+ 三目运算表达式可能依赖多个条件，这个时候就会显得该表达式非常冗长，此时可以在数组里面使用嵌套对象的方式

  ```html
  <div :class="[{ active: isActive }, errorClass]"></div>
  ```

## :class与class

+ `:class` 指令和一般的 `class` 共存

  ```js
  const isActive = ref(true)
  const hasError = ref(false)

  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>

  // 渲染结果
  <div class="static active"></div>
  ```

## 和组件配合

+ 对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上，并与该元素上已有的 class 合并

  ```html
  <!-- 子组件模板 -->
  <p class="foo bar">Hi!</p>
  ```

  ```html
  <!-- 在使用时添加一些 class -->
  <!-- 在使用组件时 -->
  <my-component class="baz boo"></my-component>
  ```

  ```html
  <!-- 渲染出的 HTML 为 -->
  <p class="foo bar baz boo">Hi</p>
  ```

+ 如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 `$attrs` property 来实现指定

  ```html
  <!-- my-component 模板使用 $attrs 时 -->
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
  ```

  ```html
  <my-component class="baz"></my-component>
  ```

  ```html
  <!-- 这将被渲染为 -->
  <p class="baz">Hi!</p>
  <span>This is a child component</span>
  ```

## 样式穿透

+ 处于 `scoped` 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 `:deep()` 这个伪类

  ```css
  <style scoped>
    .a :deep(.b) {
      /*...*/
    }
  </style>
  ```

+ 上面的代码会被编译成

  ```css
  .a[data-v-f3f3eg9] .b {
    /* ... */
  }
  ```
