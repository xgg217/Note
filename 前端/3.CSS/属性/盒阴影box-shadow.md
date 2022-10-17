# 盒阴影box-shadow

## 作用

- 在元素的框架上添加阴影效果

## 缺点

- 对性能有影响

- 尽量少用

## 属性书写

- `box-shadow: x轴偏移 y轴偏移 [阴影模糊半径] [阴影开展半径] [阴影颜色] [内外阴影] ;`

    ```css
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2) inset;
    ```

    ```css
    /* x偏移量 | y偏移量 | 阴影颜色 */
    box-shadow: 60px -16px teal;

    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
    box-shadow: 10px 5px 5px black;

    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
    box-shadow: inset 5em 1em gold;

    /* 任意数量的阴影，以逗号分隔 */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;

    /* 全局关键字 */
    box-shadow: inherit;
    box-shadow: initial;
    box-shadow: unset;
    ```

## 设置多个阴影

- 同一个盒子可以同时加多个阴影，用 `,` 隔开

    ```css
    blockquote {
      4px 2px 6px rgb(255,255,255), -4px -2px 6px #000,
      0 0 12px 5px rgb(255,255,255) inset
    }
    ```

    ```css
    blockquote {
      padding: 20px;
      box-shadow:
          inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(255,255,255),
                0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
    ```

## 注意

- 分为外阴影和内阴影（`inset`）。默认 外阴影

- 快速添加阴影效果

    ```css
    /* box-shadow: x轴偏移 y轴偏移 [阴影模糊半径]; */
    ```
