# label

## label

  - 普通元素

  - 通常配合单选和多选框进行使用

  - 显示关联：根据 `label` 属性的 `for` 与输入框的 `id` 进行关联

    ```html
    <div>
      请选择性别：
      <input type="radio" name="x" id="nan">
      <!-- 根据 id 关联  -->
      <label for="nan">男</label>

      <input type="radio" name="x" id="nv">
      <label for="nv">女</label>
    </div>
    ```

  - 隐式关联

    ```html
    <!-- 根据 id 关联  -->
    <label for="nan">
    <input type="radio" name="x" >
    </label>
    ```
