# 绑定class

## 对象语法

+ 使用

    ```js
    <div v-bind:class="{ red: isRed }"></div>
    ```

+ 上面的语法表示 active 这个 class 存在与否将取决于数据属性 isActive 的 真假

## 数组语法

+ 可以把一个数组传给 v-bind:class，以应用一个 class 列表

    ```js
    <div v-bind:class="[classA, classB]"></div>
    ```

## 三元表达式

+ 以使用三元表达式来切换class

    ```js
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
    ```

## 数组中使用对象语法

+ 使用

    ```js
    <div v-bind:class="[classA, { classB: isB, classC: isC }]">
    <div v-bind:class="classA" class="red">
    ```

## 与普通 class 共存

+ 使用

    ```js
    <div v-bind:class="classA" class="red">
    ```
