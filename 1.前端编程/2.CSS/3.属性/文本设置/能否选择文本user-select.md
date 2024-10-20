# user-select

## 概述

+ `user-select` 属性可以用来控制用户是否能够选择文本
+ 通过设置 `user-select` 属性，可以限制用户对文本的选择行为或禁止选择

+ 该属性可以应用于任何 HTML 元素，并接受以下值

  + `auto` ：默认值，表示用户可以选择文本

  + `none` ：禁止用户选择文本

  + `text` ：允许用户选择文本，但不能选择元素的其他部分，如背景、边框等

  + `all` ：允许用户选择元素内的所有内容，包括文本、背景和边框

  ```css
  div {
    width: max-content;
    height: 40px;
    border: 3px solid purple;
    user-select: none;
  }

  <div>
    <p>You can't select this text.</p>
  </div>
  <p>You can select this text.</p>
  ```

## 使用场景

+ 防止文本被选中：在某些情况下，你可能希望防止用户选择特定区域或元素内的文本

  + 例如，防止用户选择输入框中的内容或防止复制敏感信息
  + 通过将 `user-select` 设置为 `none` ，可以禁止用户选择这些文本，从而保护数据的安全性

+ 控制文本选择范围：有时你可能只希望用户能够选择特定的文本内容，而不包括其他元素中的样式信息

  + 通过将 `user-select` 设置为 `text` ，可以限制用户只能选择文本内容，而不能选择其他元素的样式信息，从而提供更精确的文本选择控制

+ 自定义选择效果：使用 `user-select` 属性，你还可以自定义文本选择的外观效果

  + 通过设置适当的 CSS 样式，如更改选中文本的背景色、前景色等，可以为用户提供独特的文本选择体验，增强页面的可视化效果

+ 取消文本选择：在某些特定情况下，你可能希望用户无法选择任何文本，以防止复制、截屏等操作

  + 通过将 `user-select` 设置为 `none` ，可以完全禁止用户选择文本，从而实现取消文本选择的效果
