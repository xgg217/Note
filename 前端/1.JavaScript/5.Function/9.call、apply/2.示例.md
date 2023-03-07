# 示例

## 找出数组最大元素

+ JavaScript不提供找出数组最大元素的函数。结合使用 `apply` 方法和 `Math.max` 方法，就可以返回数组的最大元素

  ```js
  var a = [10, 2, 4, 15, 9];

  Math.max.apply(null, a)
  // 15
  ```

## 示例代码

+ 代码

  ```js
  function Mod(height, width, len) {
    this.height = height;
    this.width = width;
    this.len = len;
  }
  function Car(height, width, len, color) {
    Mod.call(this, height, width, len); // 或者 Mod.apply(this, [height, width, len]);
    this.color = color;
  }
  ```
