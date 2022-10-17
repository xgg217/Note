# @keyframes

## 动画关键帧 @keyframes

- `animation` 动画会按照 `@keyframes` 关键帧里面指定的帧状态过渡执行

- 0%-100% 表示动画时间过渡

## 使用

- 代码

    ```css
    @keyframes 动画名字 {
      0% {
        color: red;
      }
      25% {
        color: red;
      }
      50% {
        color: red;
      }
      100% {
        color: red;
      }
    }
    ```

- 如果只有 `0%` 和 `100%` 可以用 `from` 和 `to` 来代替

    ```css
    @keyframes 动画名字 {
      from {
        color: red;
      }
      to {
        color: red;
      }
    }
    ```
