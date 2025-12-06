# scale 缩放

## scale()

+ CSS 函数 scale() 用于修改元素的大小
+ 可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值

+ 语法

  + sx `<number>` 表示缩放向量的横坐标
  + sy `<number>` ，表示缩放向量的纵坐标。如果未设置，则他的默认值被设置为 sx。从而使得元素在保持原有形状下均等缩放

  + 当值 >-1 或 >1 的时候，表示放大
  + 当值 <-1 或 <1 的时候，缩小
  + 当值 === 1 的时候不进行任何处理
  + 当值 为负数的时候将进行像素点反射之后再进行大小的修改

    ```css
    scale(sx) /* sx */

    // 或者

    scale(sx, sy)
    ```

  ```css
  transform: scale(1);

  transform: scale(2);  /* 等同于变换：scaleX(2) scaleY(2);*/

  transform: scale(0.7);

  transform: scale(1.3, 0.4);

  transform: scale(-0.5, 1);
  ```

## scaleX()

+ scaleX(sx) 是 scale(sx, 1) 或 scale3d(sx, 1, 1) 的一个速记/缩写

+ 语法

  ```css
  scaleX(s)
  ```

  ```css
  transform: scaleX(1);

  transform: scaleX(0.7);

  transform: scaleX(1.3);

  transform: scaleX(-0.5);
  ```

## scaleY()

