# HTML5新增属性

## placeholder 提示信息

- 提供可描述输入字段预期值的提示信息

- 该提示会在输入字段为空时显示，并会在字段获得焦点时消失

- `placeholder` 属性适用于以下的 `<input>` 类型：`text`, `search`, `url`, `telephone`, `email` 以及 `password`

  ```html
  <!-- 带有 placeholder 文本的搜索字段： -->
  <form action="demo_form.asp" method="get">
    <input type="search" name="user_search" placeholder="Search W3School" />
    <input type="submit" />
  </form>
  ```

## input 新 type

- 新的表单控件，比如 `calendar`、`date`、`time`、 `week` 、`email`、`url`、`search` 、

- `number` ：只能输入数字。兼容性不好，目前只有 chrome 支持

  ```html
  <form>
    <input type="number">
  </form>
  ```

- `email`: 电子邮件格式。格式不规范提示错误。兼容性不好，目前只有 chrome 和 火狐 支持

- `color`：颜色选择器。兼容性不好，目前只有 chrome 支持

- `range`

  ```html
  <form>
    <input type="range" min="1" max="100" name="range">
  </form>
  ```

- `search`: 下次输入 显示提示

  ```html
  <form>
    <input type="search" name="search">
  </form>
  ```

- `url`

- `date`。兼容性不好，目前只有 chrome 支持

  ```html
  // 日期选择
  <form>
    <input type="date">
  </form>
  ```

- `time`：显示 **小时:分钟**

  ```html
  // 时间
  <form>
    <input type="time">
  </form>
  ```

- `week` 一年中的第几周

## contenteditable

- `contenteditable` ：用户能否修改页面上的内容。默认为 `false`

- 不存在兼容性问题，可以正常使用

  ```html
  <p contenteditable="true">小刚刚</p>
  ```

- 可以被继承和覆盖

- 建议不要嵌套

  ```html
  // 不建议这样使用
  <p contenteditable="true">小刚刚
    <br>
    <span>可以被修改<span>
    <br>
    <span contenteditable="false">不可以被修改<span>
  </p>
  ```

## draggable 拖拽

- 火狐不支持。chrome Safari 支持

- 其他标签默认为 `false`。不能拖拽

- `<a>` 和 `<img src="./1.png">` 默认为 `true`

  ```html
  <p draggable="true"></p>
  ```

- 拖拽组成

    1. 拖拽开始

    2. 拖拽进行中

    3. 拖拽结束

- 拖拽组成

    1. 被拖拽的物体

    2. 目标区域

## hidden

- `hidden` ：隐藏（元素将会消失，而且不占用任何页面空间）

- 效果如同 `css` 的 `display: none`。**意义**在于语义上更有意义，对代码的可读性有提升

  ```html
  <p hidden>11</p>
  ```

## Contextmenu

- `Contextmenu` ：为元素设定快捷菜单（目前无浏览器支持 `contextmenu` 属性。）
