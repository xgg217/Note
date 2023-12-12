# change

## 概述

+ 文本改变事件

+ `<input>`、`<select>`、`<textarea>` 的值发生变化时触发

+ 它与 `input` 事件的最大不同，就是不会连续触发，只有当全部修改完成时才会触发，而且 `input` 事件必然会引发 `change` 事件

+ 具体来说，分成以下几种情况

  + 激活单选框（`radio`）或复选框（`checkbox`）时触发

  + 用户提交时触发。比如，从下列列表（`select`）完成选择，在日期或文件输入框完成选择

  + 当文本框或 `textarea` 元素的值发生改变，并且丧失焦点时触发

    ```js
    // HTML代码为
    // <select size="1" onchange="changeEventHandler(event);">
    //   <option>chocolate</option>
    //   <option>strawberry</option>
    //   <option>vanilla</option>
    // </select>

    function changeEventHandler(event) {
      console.log('You like ' + event.target.value + ' ice cream.');
    }
    ```

## 复选框选中事件

+ 选中事件

    ```html
    <input type="checkbox" @change="qh">
    ```

    ```js
    const cheDom = document.querySelector("input");

    cheDom.addEventListener("change", function(e) {
      console.log(event.target.checked); // true 表示选中，false 表示 未选中
    })
    ```
