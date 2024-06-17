# Pointer events 指针事件

## 作用

+ 允许点击穿透
+ 阻止用户的点击动作产生任何效果
+ 阻止缺省鼠标指针的显示
+ 阻止CSS里的 hover 和 active 状态的变化触发事件
+ 阻止JavaScript点击动作触发的事件
+ 通过其他方式绑定的事件还是会触发的，比如键盘事件等

## 属性值

+ 普通元素只有两个属性值是需要的，其他都是只能用于SVG

  + `auto` 默认值，鼠标不会穿透当前层。
  + `none` 操作会忽略该元素，透传到元素的下层元素去触发操作事件

  ```js
  /* Keyword values */
  pointer-events: auto;
  pointer-events: none;

  pointer-events: visiblePainted; /*SVG only*/
  pointer-events: visibleFill;    /*SVG only*/
  pointer-events: visibleStroke;  /*SVG only*/
  pointer-events: visible;        /*SVG only*/
  pointer-events: painted;        /*SVG only*/
  pointer-events: fill;           /*SVG only*/
  pointer-events: stroke;         /*SVG only*/
  pointer-events: all;            /*SVG only*/

  /*Global values*/
  pointer-events: inherit;
  pointer-events: initial;
  pointer-events: unset;
  ```

## 示例

+ 提交页面，提交按钮点击后，添加这个样式属性（`style="pointer-events"`），来防止重复提交

+ 让链接不能点击

  ```html
  <style>
    a[href="http://example.com"] {
      pointer-events: none;
    }
  </style>

  <ul>
    <li><a href="https://html.cn/">HTML中文网</a></li>
    <li><a href="http://example.com">一个不能点击的链接</a></li>
  </ul>
  ```

+ 让鼠标点击穿透上方的 div

  ```html
  <style>
    .top {
      width: 100px;
      height: 90px;
      position: absolute;
      top: 0;
      left: 65px;
      background: yellow;
      opacity: 0.5;
      pointer-events: none;
    }
  </style>

  <!-- 下方的链接 -->
  <ul>
    <li><a href="http://www.hangge.com">航歌</a></li>
      <li><a href="http://www.hangge.com">hangge.com</a></li>
  </ul>
  <!-- 上方黄色div -->
  <div class="top"></div>
  ```
