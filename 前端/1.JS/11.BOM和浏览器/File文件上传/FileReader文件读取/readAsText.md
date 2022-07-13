# readAsText

## readAsText

*   `readAsText` 方法用于读取文本文件，它的第一个参数是 `File` 或 `Blob` 对象，第二个参数是前一个参数的编码方法，如果省略就默认为UTF-8编码。

    ```javascript
    var reader = new FileReader();
    reader.onload = function(e) {
      var text = reader.result;
    }

    reader.readAsText(file, encoding);
    ```
