# checkbox

## checkbox

  - `checkbox` 是多选框控件，每个选择框只有选中和不选中两种状态

    ```js
    <input type="checkbox" name="toggle" id="toggle" value="toggle">
    ```

  - `checked` 属性返回一个布尔值，表示用户是否选中

    ```js
    var which = document.getElementById('someCheckbox').checked;
    ```

  - checked属性是可写的

    ```js
    which.checked = true;
    ```

  - `value` 属性可以获取单选框的值

    ```js
    if (which.checked) {
      var value = document.getElementById('someCheckbox').value;
    }
    ```
