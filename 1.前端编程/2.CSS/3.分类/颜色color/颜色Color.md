# 颜色 Color

## 颜色设置

+ 颜色名词

  ```css
  /* <named-color> 值 */
  color: red;
  color: orange;
  color: tan;
  color: rebeccapurple;
  ```

+ hex

  ```css
  /* <hex-color> 值 */
  color: #090;
  color: #009900;
  color: #090a;
  color: #009900aa;
  ```

+ rgb

  ```css
  /* <rgb()> 值 */
  color: rgb(34, 12, 64, 0.6);
  color: rgba(34, 12, 64, 0.6);
  color: rgb(34 12 64 / 0.6);
  color: rgba(34 12 64 / 0.3);
  color: rgb(34 12 64 / 60%);
  color: rgba(34.6 12 64 / 30%);
  ```

+ hsl

  ```css
  /* <hsl()> 值 */
  color: hsl(30, 100%, 50%, 0.6);
  color: hsla(30, 100%, 50%, 0.6);
  color: hsl(30 100% 50% / 0.6);
  color: hsla(30 100% 50% / 0.6);
  color: hsl(30 100% 50% / 60%);
  color: hsla(30.2 100% 50% / 60%);
  ```

+ hwb

  ```css
  /* <hwb()> 值 */
  color: hwb(90 10% 10%);
  color: hwb(90 10% 10% / 0.5);
  color: hwb(90deg 10% 10%);
  color: hwb(1.5708rad 60% 0%);
  color: hwb(0.25turn 0% 40% / 50%);
  ```

+ 全局值

  ```css
  /* 全局值 */
  color: inherit;
  color: initial;
  color: revert;
  color: revert-layer;
  color: unset;
  ```

## 颜色继承

+ `currentcolor` 当前的标签所继承的文字颜色

  ```css
  .xxx {
    border: 1px solid currentColor;
  }
  ```

## 透明

+ `transparent` 全透明色彩
+ 类似 `rgba(0,0,0,0)`

