# input

## 概述

  - `input` 事件当 `<input>` 、`<textarea>` 的值发生变化时触发

  - 此外，打开 `contenteditable` 属性的元素，只要值发生变化，也会触发 `input` 事件

  - `input` 事件的一个特点，就是会连续触发，比如用户每次按下一次按键，就会触发一次 `input` 事件

## 获取输入的值

  - `e.target.value`：字符串类型

    ```html
    <input type="text" />
    ```

    ```js
    inp.addEventListener("input", function(e) {
      // 输入 12
      console.log(e.target.value);
      console.log(e.target.valueAsNumber); // NaN
    })
    ```

  - `e.target.valueAsNumber`：当 input 的 type=number 时候，获取输入框的内容为数字类型

    ```html
    <input type="number" />
    ```

    ```js
    inp.addEventListener("input", function(e) {
      // 输入 12.2
      console.log(e.target.value); // '12.2'
      console.log(e.target.valueAsNumber); // 12.2

      // 输入 e
      console.log(e.target.value); // ''
      console.log(e.target.valueAsNumber); // NaN
    })
    ```

## select()

  - `select()`：选中 `<input>` 元素内部的所有文本。该方法不能保证 `<input>` 获得焦点，最好先用 `focus()` 方法，再用这个方法

## click()

  - `click()`：模拟鼠标点击当前的`<input>` 元素

## setSelectionRange()

  - `setSelectionRange()`：选中 `<input>` 元素内部的一段文本，但不会将焦点转移到选中的文本

  - 该方法接受三个参数，

      - 第一个参数是开始的位置（从0开始），

      - 第二个参数是结束的位置（不包括该位置），

      - 第三个参数是可选的，表示选择的方向，有三个可能的值（`forward`、`backward`和默认值 `none`）

## setRangeText()

  - `setRangeText()`：新文本替换选中的文本。该方法接受四个参数，第一个参数是新文本，第二个参数是替换的开始位置，第三个参数是结束位置，第四个参数表示替换后的行为（可选），有四个可能的值：select（选中新插入的文本）、start（选中的开始位置移到插入的文本之前）、end（选中的文本移到插入的文本之后）、preserve（保留原先选中的位置，默认值）

## setCustomValidity()

  - `setCustomValidity()`：该方法用于自定义校验失败时的报错信息

  - 它的参数就是报错的提示信息

  - 注意，一旦设置了自定义报错信息，该字段就不会校验通过了，因此用户重新输入时，必须将自定义报错信息设为空字符串，请看下面的例子

## checkValidity()

  - `checkValidity()`：返回一个布尔值，表示当前节点的校验结果。如果返回 `false`，表示不满足校验要求，否则就是校验成功或不必校验

## stepDown()

  - `stepDown()`：将当前 `<input>` 节点的值减少一个步长

  - 该方法可以接受一个整数n作为参数，表示一次性减少n个步长，默认是1

  - 有几种情况会抛错：当前 `<input>` 节点不适合递减或递增、当前节点没有 `step` 属性、`<input>` 节点的值不能转为数字、递减之后的值小于 `min` 属性或大于 `max` 属性

## stepUp()

  - `stepUp()`：将当前\<input>节点的值增加一个步长

  - 其他与 `stepDown()` 方法相同
