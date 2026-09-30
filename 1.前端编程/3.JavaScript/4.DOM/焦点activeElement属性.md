# activeElement 属性

## 概述

+ Document 接口的 activeElement 只读属性返回 DOM 中当前拥有焦点的 Element

+ 通常情况下，activeElement 会返回 HTMLInputElement 或 HTMLTextAreaElement 对象（如果当前有文本选择）

  + 如果是这样，你可以通过使用对象的 selectionStart 和 selectionEnd 属性来获取更多详细信息
  + 其他时候，获得焦点的元素可能是` <select>` 元素（菜单）或 <`input>` 元素

+ 一般来说，用户可以按 Tab 键在页面上的可聚焦元素中移动焦点，并使用空格键来激活其中一个元素（例如按下按钮或切换单选按钮）

  + 哪些元素可以聚焦取决于平台和浏览器的当前配置
  + 例如，在 macOS 系统上，不是文本输入元素通常默认为不可聚焦

+ 参考文本 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/activeElement
