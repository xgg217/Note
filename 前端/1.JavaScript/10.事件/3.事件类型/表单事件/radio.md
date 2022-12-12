# radio

## radio

- `radio` 是单选框控件，同一组选择框同时只能选中一个，选中元素的 `checked` 属性为 `true`

- 由于同一组选择框的 `name` 属性都相同，所以只有通过遍历，才能获得用户选中的那个选择框的 `value`

    ```html
    <input type="radio" name="gender" value="Male"> Male </input>
    <input type="radio" name="gender" value="Female"> Female </input>

    <script>
    // 通过遍历所有选项，获取用户选中的项。如果用户未做任何选择，则selected就为undefined
      var radios = document.getElementsByName('gender');
      var selected;
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = radios[i].value;
          break;
        }
      }
      if (selected) {
        // 用户选中了某个选项
      }
    </script>
    ```
