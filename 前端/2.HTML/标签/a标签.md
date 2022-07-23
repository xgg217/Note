# a标签

## 样式

  - 代码

    ```html
    <a href="https://www.baidu.com/">xxx</a>
    ```

## href 属性

1.  表示跳转地址

    ```html
    <a href="https://www.baidu.com/">xxx</a>
    ```

2.  跳转到某个锚点

    ```html
    <a href="#id">xxx</a>
    ```

    ```html
    <!-- 回到顶部 -->
    <a href="#">回到顶部</a>
    ```

3.  拨打电话

    ```html
    <a href="tel:185555555">拨打电话</a>
    ```

## target 属性

  - 表示跳转窗口的位置

      - `_self`：默认值。当前浏览器上下文。

      - `_blank`：通常是一个新的标签页，但是用户可以配置浏览器，是否在新窗口打开。

      - `_parent`：当前浏览器上下文的的父级上下文，如果没有父级，则行为类似 `_self`。

      - `_top`：最顶级的浏览器上下文。如果没有祖先上下文环境，则行为类似 `_self`

      - URL地址或者任意自定义的名称

        ```html
        // 如果浏览器已经有标签页的地址是blank.html，则点击上面的链接并不会打开新窗口，是直接刷新已经打开的blank.html；
        // 如果浏览器中没有地址是blank.html的标签页，则此时target属性的行为表现类似'_blank'。
        <a href="blank.html" target="blank.html">空白页</a>
        ```

  - 如果想要实现所有的搜索结果页都使用一个标签页选项卡，需要使用其他办法，很简单，指定为相同的值即可，

    ```html
    <a href="blank.html?s=1" target="_search">空白页?s=1</a>
    <a href="blank.html?s=2" target="_search">空白页?s=2</a>
    ```

## link状态设置顺序

  - `a:link` 正常未访问的链接

  - `a:vissited` 用户已访问的链接

  - `a:hover` 当鼠标放在链接上

  - `a:active` 被点击的那一刻
