# 模板引用ref

## 概述

+ 表示模板 ref

+ `ref` 用于注册元素或子组件的引用

## 语法

+ **预期**：`string | Function`

## 方式1

+ 这个变量名和 DOM 上的 ref 属性必须同名，会自动形成绑定

  ```html
  <el-form ref="formRef"></el-form>

  <script setup lang="ts">
    const formRef = ref(null)
    console.log(formRef.value) // 这就获取到 DOM 了
  </script>
  ```

## 方式2

+ 模板引用需要通过一个显式指定的泛型参数和一个初始值 `null` 来创建

+ 注意为了严格的类型安全，有必要在访问 `el.value` 时使用可选链或类型守卫
+ 这是因为直到组件被挂载前，这个 `ref` 的值都是初始的 `null`，并且在由于 `v-if` 的行为将引用的元素卸载时也可以被设置为 `null`

  ```html
  <template>
    <input ref="el" />
  </template>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const el = ref<HTMLInputElement | null>(null)

  onMounted(() => {
    el.value?.focus()
  })
  </script>
  ```

## 方式3 ts + 组件

+ 可以这样获取子组件

  ```html
  <el-form ref="formRef"></el-form>

  <script setup lang="ts">
    import { ElForm } from 'element-plus'

    const formRef = ref<InstanceType<typeof ElForm>>()
  </script>
  ```

## 方式4

+ `ref` 可以接收一个函数值，用于对存储引用位置的完全控制

  ```js
  <ChildComponent :ref="(el) => child = el" />
  ```

## 注意

+ 关于 ref 注册时机的重要说明：因为 ref 本身是作为渲染函数的结果来创建的，必须等待组件挂载后才能对它进行访问
