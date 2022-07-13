# 圆角border-radius

## border-radius

*   `border-radius` 是一个 简写属性

    *   `border-top-left-radius` 左上

    *   `border-top-right-radius` 右上

    *   `border-bottom-right-radius` 右下

    *   `border-bottom-left-radius` 左下

## 使用

*   `border-radius`

    ```css
    border-radius: 30px;
    border-radius: 25% 10%;
    border-radius: 10% 30% 50% 70%;
    ```

*   `border-radius: 1em/5em;`

    ```css
    /* 等价于： */
    border-top-left-radius:     1em 5em;
    border-top-right-radius:    1em 5em;
    border-bottom-right-radius: 1em 5em;
    border-bottom-left-radius:  1em 5em;
    ```

*   `border-radius: 4px 3px 6px / 2px 4px;`

    ```css
    /* 等价于： */

    border-top-left-radius:     4px 2px;
    border-top-right-radius:    3px 4px;
    border-bottom-right-radius: 6px 2px;
    border-bottom-left-radius:  3px 4px;
    ```

*   `border-top-left-radius: 10px 20px;`&#x20;

    ```javascript
    // x 轴 10px

    // Y 轴 20px
    ```
