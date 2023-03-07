# 文字阴影text-shadow

## 作用

+ 为文字添加阴影

## 缺点

+ 对性能有影响

+ 尽量少用

## 书写

+ `text-shadow: 水平偏移量 垂直偏移量 模糊程度 颜色;`

+ 每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成

    ```css
    text-shadow: 1px 1px 2px pink;
    ```

    ```css
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 1px 1px 2px black;

    /* color | offset-x | offset-y | blur-radius */
    text-shadow: #fc0 1px 0 10px;

    /* offset-x | offset-y | color */
    text-shadow: 5px 5px #558abb;

    /* color | offset-x | offset-y */
    text-shadow: white 2px 5px;

    /* offset-x | offset-y
    /* Use defaults for color and blur-radius */
    text-shadow: 5px 10px;

    /* Global values */
    text-shadow: inherit;
    text-shadow: initial;
    text-shadow: unset;
    ```

## 注意

+ 模糊程度：不能为 负值，数字越大 越模糊
