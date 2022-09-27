# select

## select 事件

  - select是下拉列表元素

    ```html
    <div>
    <label for="os">Operating System</label>
    <select name="os" id="os">
        <option>Choose</option>
        <optgroup label="Windows">
            <option value="7 Home Basic">7 Home Basic</option>
            <option value="7 Home Premium">7 Home Premium</option>
            <option value="7 Professional">7 Professional</option>
            <option value="7 Ultimate">7 Ultimate</option>
            <option value="Vista">Vista</option>
            <option value="XP">XP</option>
        </optgroup>
    <select>
    </div>
    ```

  - 可以通过 `value` 属性取到用户选择的值

    ```javascript
    var data = document.getElementById('selectMenu').value;
    ```

  - `selectedIndex` 可以设置选中的项目（从0开始）

  - 如果用户没有选中任何一项，`selectedIndex` 等于-1

    ```javascript
    document.getElementById('selectMenu').selectedIndex = 1;
    ```

  - `select` 元素也可以设置为多选

    ```javascript
    <select name="categories" id="categories" multiple>
    ```

  - 设为多选时，`value` 只返回选中的第一个选项

  - 要取出所有选中的值，就必须遍历 `select` 的所有选项，检查每一项的 `selected` 属性

    ```javascript
    var selected = [];
    for (var i = 0, count = elem.options.length; i < count; i++) {
      if (elem.options[i].selected) {
        selected.push(elem.options[i].value);
      }
    }
    ```
