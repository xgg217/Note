# translate 平移

## translate()

+ translate() 这个 CSS 函数在水平和/或垂直方向上重新定位元素
+ 其结果是 `<transform-function>` 类型

+ 语法

  + 如果值是百分比这表示移动自身的百分比（比如当前元素宽100px，如果 `translate(50%)` ，则表示移动了 50px）

  ```css
  transform: translate(200px); /* 相当于 translate(200px, 0); 或  translateX(200px) */
  transform: translate(50%); /* 相当于 translate(50%, 0); */

  transform: translate(100px, 200px);
  transform: translate(100px, 50%);
  transform: translate(30%, 200px);
  transform: translate(30%, 50%);
  ```

  ```css
  transform: translate(0);

  transform: translate(42px, 18px);

  transform: translate(-2.1rem, -2ex);

  transform: translate(3ch, 3mm);
  ```

## translateX()

+ ranslateX() 函数表示在二维平面上水平方向移动元素。其结果的数据类型是 `<transform-function>`

+ `translateX(tx)` 等同于 `translate(tx, 0)` 或者 `translate3d(tx, 0, 0)`

+ 语法

  ```css
  translateX(t);

  transform: translateX(10px); /* 等同于 translate(10px) */
  ```

  ```css
  transform: translateX(0);

  transform: translateX(42px);

  transform: translateX(-2.1rem);

  transform: translateX(3ch);
  ```

## translateY()

+ translateY() 在页面垂直移动元素，结果是 CSS 数据类型 `<transform-function>`

+ `translateY(ty)` 对应 `translate(0, ty) `或 `translate3d(0, ty, 0)`

+ 语法

  ```css
  transform: translateY(200px);
  transform: translateY(50%);
  ```

  ```css
  transform: translateY(0);

  transform: translateY(42px);

  transform: translateY(-2.1rem);

  transform: translateY(3ch);
  ```
