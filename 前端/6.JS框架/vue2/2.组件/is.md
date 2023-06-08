# is

## is的作用

+ 总所周知，`ul` 里面嵌套 `li` 的写法是 `html` 语法的固定写法（还有如 `table` , `select` 等）

  ```html
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <!-- 组件 -->
  <ul>
    <!-- my-component是我们自己写的组件，但是html在渲染dom的时候，my-component对ul来说并不是有效的dom，甚至会报错。 -->
    <my-component></my-component>
    <my-component></my-component>
  </ul>
  ```

+ 正是因为html模板的限制，于是就诞生了 `is`

+ `<li is='my-component'></li>` 其实就相当于 `<my-component></my-component>` 语义上是一样一样的，就是解决了html模板的限制

  ```html
  <!-- 注册my-component组件，全局或者局部都成。 -->
  <li is='my-component'></li>
  ```

## 用法

+ `<component>` + `is` 的骚操作

  ```js
  // 组件会在 `件名` 改变时改变
  <component :is="组件名变量"></component>
  ```

+ 只要在 `data` 里弄个变量，给变量赋值就能动态的切换组件
