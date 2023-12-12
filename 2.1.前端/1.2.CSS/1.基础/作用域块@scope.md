# 作用域块

## @scope

+ 可以将选择器的范围限定为文档的特定子树

+ 借助作用域样式，可以非常具体地选择元素，而无需编写过于具体的选择器或将它们与 DOM 结构紧密耦合

## 语法

+ 语法

  ```css
  @scope [(<scope-start>)]? [to (<scope-end>)]? {
    <rule-list>
  }
  ```

## 示例

+ .green 的样式只会作用在 .foo 里面，不会影响到外面的 .green
+ 使用的语法是 `@scope (.foo)`

  ```html
  <style>
    @scope (.foo) {
      .green { background-color: green; }
    }
  </style>

  <div class="foo">
    <div class="green">这里是绿色</div>
  </div>

  <div class="green">不是绿色，因为没在 .foo 里面</div>
  ```

  ![作用域块](images/作用域块.png)
