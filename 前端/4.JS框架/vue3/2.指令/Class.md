# Class

## 对象

  - 对象

    ```typescript
    // active 是否存在取决于数据属性 isActive 的真假值
    <div :class="{ active: isActive }"></div>
    ```

  - 多个对象

    ```typescript
    const classObject = reactive({
      active: true,
      'text-danger': false
    })

    <div :class="classObject"></div>

    ```

## 数组

  - 数组

    ```typescript
    const activeClass = ref('active')
    const errorClass = ref('text-danger')

    <div :class="[activeClass, errorClass]"></div>

    // 渲染的结果
    <div class="active text-danger"></div>

    ```

## 三元表达式

  - 三元表达式

    ```typescript
    const activeClass = ref('active');

    <div :class="[isActive ? activeClass : '']"></div>

    // 优化
    <div :class="[{ active: isActive }, errorClass]"></div>

    ```

## :class与class

  - `:class` 指令和一般的 `class` 共存

    ```typescript
    const isActive = ref(true)
    const hasError = ref(false)

    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>


    // 渲染结果
    <div class="static active"></div>

    ```

## 计算属性

  - 计算属性

    ```typescript
    const isActive = ref(true)
    const error = ref(null)

    const classObject = computed(() => ({
      active: isActive.value && !error.value,
      'text-danger': error.value && error.value.type === 'fatal'
    }))

    <div :class="classObject"></div>
    ```

## 和组件配合

  - 对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上，并与该元素上已有的 class 合并

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

  - 如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 `$attrs` property 来实现指定

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
