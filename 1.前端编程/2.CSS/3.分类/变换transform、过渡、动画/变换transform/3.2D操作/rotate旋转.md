# rotate 旋转

## rotate()

+ CSS 的 rotate() 函数定义了一种将元素围绕一个定点（由transform-origin属性指定）旋转而不变形的转换
+ 指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转 180° 也被称为点反射

+ 语法

  + 指定了 rotate() 的旋转程度

    + 参数为正时，顺时针旋转
    + 参数为负时，逆时针旋转
    + 180° 旋转称为点反演

    ```css
    rotate(angle)
    ```

+ 示例

  ```css
  transform: rotate(0);

  transform: rotate(90deg);

  transform: rotate(-0.25turn);

  transform: rotate(3.142rad);
  ```

## angle

+ 表示以度（degrees）、百分度（gradians）、弧度（radians）或圈数（turns）表示的角度值

+ 单位

  + deg 以度（角）为单位表示角度

    + 一个完整的圆是 360deg
    + 例：0deg、90deg、14.23deg

  + grad 以百分度为单位表示角度

    + 一个完整的圆是 400grad
    + 例：0grad、100grad、38.8grad

  + rad 以弧度为单位表示角度

    + 一个完整的圆是 2π 弧度，约等于 6.2832rad，1rad 是 180/π 度
    + 例：0rad、1.0708rad、6.2832rad。

  + turn 以圈数为单位表示角度

    + 一个完整的圆是 1turn
    + 例：0turn、0.25turn、1.2turn
