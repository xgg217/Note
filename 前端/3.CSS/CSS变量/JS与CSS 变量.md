# JS与CSS 变量

## 设置

  - JS 设置 CSS 变量值

    ```html
    <div style="--color: #cd0000;">
      <img src="mm.jpg" style="border: 10px solid var(--color);">
    </div>
    ```

    ```javascript
    ele.style.setProperty('--color', '#cd0000');
    ```

  - 设置

    ```javascript
    // 在行内样式中设置变量
    element.style.setProperty("--my-var", jsVar + 4);
    ```

## 获取

  - JS中获取CSS变量可以使用 `getPropertyValue()` 方法

    ```javascript
    // 获取 --color CSS 变量值
    var cssVarColor = getComputedStyle(box).getPropertyValue('--color');

    // 输出cssVarColor
    console.log(cssVarColor); // 输出变量值是：#cd0000
    ```
