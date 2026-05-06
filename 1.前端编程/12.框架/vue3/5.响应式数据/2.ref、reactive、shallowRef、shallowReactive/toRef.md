# toRef

## 概述

+ 基于响应式对象的某一个属性，将其转换为 `ref` 值

+ 这样创建的 `ref` 与其源 `property` 保持同步：改变源 `property` 将更新 `ref` ，反之亦然

## 使用

+ 得到一个响应式对象某个属性的 `ref` 格式

  ```js
  const info = reactive({
    name: '小刚刚',
    age: 12,
  });

  const ageRef = toRef(info, 'age');

  // 更改该 ref 会更新源属性
  ageRef.value = 13;
  console.log(info.age); // 13
  // 一同更新了info的age属性
  console.log(info.age); // 13

  // 更改源属性也会更新该 ref
  info.age = 18;
  console.log(ageRef.value); // 18
  ```

## 注意点

+ 这不同于

  ```js
  const state = reactive({
    foo: 1,
    bar: 2
  });
  const fooRef = ref(state.foo);

  ```

+ 上面这个 ref **不会**和 `state.foo` 保持同步，因为这个 `ref()` 接收到的是一个纯数值

## TS类型

+ 类型

  ```js
  function toRef<T extends object, K extends keyof T>(
    object: T,
    key: K,
    defaultValue?: T[K]
  ): ToRef<T[K]>

  type ToRef<T> = T extends Ref ? T : Ref<T>
  ```

## 使用场景

1. 想把一个 `prop` 的 `ref` 传递给一个组合式函数时会很有用

  ```js
  <script setup>
  import { toRef } from 'vue'

  const props = defineProps(/* ... */)

  // 将 `props.foo` 转换为 ref，然后传入
  // 一个组合式函数
  useSomeFeature(toRef(props, 'foo'))
  </script>
  ```
