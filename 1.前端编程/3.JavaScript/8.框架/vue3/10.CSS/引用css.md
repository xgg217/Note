# 引用外边的css

## 方式1 在 main.js 中全局引入

+ 在 `main.js` 文件中引入外部CSS文件是最常见的方式之一
+ 这种方式适用于需要在整个应用程序中使用相同的CSS样式表的情况

+ 步骤如下：

  + 将外部CSS文件放置在项目的src目录中，例如放在 `src/assets` 文件夹中
  + 在 `main.js` 中通过 `import` 语句引入CSS文件

    ```js
    // main.js
    import Vue from 'vue';
    import App from './App.vue';

    import './assets/styles.css'; // 引入外部CSS文件

    new Vue({
      render: h => h(App),
    }).$mount('#app');
    ```

+ 优点：

  + 一次引入，在整个应用程序中生效
  + 方便维护和管理全局样式

+ 缺点：

  + 如果项目较大，可能会导致全局样式文件过于庞大，影响加载速度

## 方式2 在单文件组件中局部引入

+ 我们只希望某些组件使用特定的外部CSS样式。这时可以在单文件组件中局部引入外部CSS文件

+ 步骤如下：

  + 将外部CSS文件放置在项目的 sr c目录中，例如放在 `src/assets` 文件夹中
  + 在单文件组件的 `<style>` 标签中通过 `@import` 语句引入CSS文件

  ```html
  <!-- 局部引入绝对路径 -->
  <style scoped>
  @import "@/assets/styles.css"; // 引入外部CSS文件
  </style>
  ```

  ```html
  <!-- 局部引入相对路径 -->
  <style scoped>
    @import '../../assets/iconfont/iconfont.css'; // 这个分号一定要写，要不会报错
  </style>
  ```

+ 优点：

  + 只在特定组件中生效，避免全局污染
  + 更加模块化，便于维护

+ 缺点：

  + 如果多个组件都需要相同的样式，可能需要重复引入，增加代码冗余

+ 注意

  + 使用 `@import` 引入样式文件，就算加scoped，其它没有引入的模块还是可以访问到你的样式，如果某个组件的类名一致，则就会被污染到
  + 如果不想被污染，修改引入方式

    ```html
    <style src="@/style/reset.css" scoped></style>
    <style src="./reset.css" scoped></style>

    <!-- 引入scss文件 -->
    <style src="./download.scss" lang="scss" scoped>

    <style scoped>
      //新的css样式
    </style>
    ```

## 方式3 在 `index.html` 中通过标签引入
