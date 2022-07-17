# readAsBinaryString

## readAsBinaryString

*   `readAsBinaryString` 方法可以读取任意类型的文件，而不仅仅是文本文件，返回文件的原始的二进制内容。

*   这个方法与 `XMLHttpRequest.sendAsBinary` 方法结合使用，就可以使用JavaScript上传任意文件到服务器。

    ```javascript
    var reader = new FileReader();
    reader.onload = function(e) {
      var rawData = reader.result;
    }
    reader.readAsBinaryString(file);
    ```
