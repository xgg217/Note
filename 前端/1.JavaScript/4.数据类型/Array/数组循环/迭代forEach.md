# forEach

## 语法

  - `arr.forEach(function (ele, index, array){});`

## 注意

  - 每次执行时都会把 `func` 函数传进 `for` 循环，所以 `break` 和 `return` 无效

## 源码

  - 代码

    ```javascript
    Array.prototype.forEach = function(func) {
      for(var i = 0;i<this.length;i++) {
        func(this[i],index);
      }
    }
    ```

## 中断

1.  使用 `try` 监视代码块，在需要中断的地方抛出异常

2.  官方推荐方法（替换方法）：用 `every` 和 `some` 替代 `forEach` 函数。`every` 在碰到 `return false` 的时候，中止循环。`some` 在碰到 `return ture` 的时候，中止循环
