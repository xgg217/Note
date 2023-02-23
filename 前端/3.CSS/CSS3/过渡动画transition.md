# 过渡动画transition

## 书写（简写）

+ 连写 `transition: 过渡属性, 过渡时长, [运动速度], [延迟时间];`

    ```css
    /* all 所有 */
    transition: all 5s;

    /* 具体属性 */
    transition: width 5s;
    ```

+ 具体属性

    ```css
    /* 过渡属性 */
    transition-property

    /* 过渡时长 */
    transition-duration

    /* 过渡函数 */
    transition-timing-function

    /* 延迟时间 */
    transition-delay
    ```

## 过渡函数 transition-timing-function

+ 取值

  - `linear` 匀速 相当于 `cubic-bezier(0, 0, 1, 1)`

  - `ease`

  - `ease-in`

  - `ease-out`

  - `ease-in-out`

  - `cubic-bezier(n, n, n, n)`
