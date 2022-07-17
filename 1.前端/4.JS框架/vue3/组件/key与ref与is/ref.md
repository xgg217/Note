# ref

## 概述

*   表示模板 ref

*   `ref` 用于注册元素或子组件的引用

## 语法

*   **预期**：`string | Function`

## 选项式 API

*   使用选项式 API，引用将被注册在组件的 `this.$refs` 对象里

    ```javascript
    <!-- 存储为 this.$refs.p -->
    <p ref="p">hello</p>
    ```

## 组合式 API

*   使用组合式 API，引用将存储在与名字匹配的 ref 里

    ```vue
    <script setup>
    import { onMounted, reactive, ref } from 'vue';

    const root = ref(null);

    onMounted(() => {
      // 获取元素
      console.log(root.value);
    });
    </script>

    <template>
      <p ref="p">hello</p>
    </template>
    ```

## 作用位置

1.  用于普通 DOM 元素，引用将是元素本身

2.  用于子组件，引用将是子组件的实例

3.  `ref` 可以接收一个函数值，用于对存储引用位置的完全控制

    ```vue
    <ChildComponent :ref="(el) => child = el" />
    ```

## 注意

*   关于 ref 注册时机的重要说明：因为 ref 本身是作为渲染函数的结果来创建的，必须等待组件挂载后才能对它进行访问
