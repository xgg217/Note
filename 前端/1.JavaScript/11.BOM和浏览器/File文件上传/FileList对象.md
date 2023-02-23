# FileList对象

## 概述

+ `FileList` 对象是一个类数组对象，每个成员都是一个 `File` 实例，主要出现在两种场合：

    1. 通过 `<input type="file">` 控件的 `files` 属性，返回一个 `FileList` 实例。另外，当 `input` 元素拥有 `multiple` 属性，则可以用它来选择多个文件

    2. 通过拖放文件，查看 `DataTransfer.files` 属性，返回一个 `FileList` 实例

```js
// <input id="fileItem" type="file">
const files = document.getElementById('fileItem').files;
files instanceof FileList // true

const firstFile = files[0];

```

## 介绍

+ `FileList` 对象针对表单的 `file` 控件

+ 当用户通过 `file` 控件选取文件后，这个控件的 `files` 属性值就是 `FileList` 对象。它在结构上类似于数组，包含用户选取的多个文件

    ```html
    <input type="file" id="input" onchange="console.log(this.files.length)" multiple />
    ```

+ 当用户选取文件后，就可以读取该文件

    ```js
    var selected_file = document.getElementById('input').files[0];
    ```

+ 采用拖放方式，也可以得到FileList对象

    ```js
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('drop', handleFileSelect, false);

    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      var files = evt.dataTransfer.files; // FileList对象，里面包含了拖放的文件

      // ...
    }
    ```
