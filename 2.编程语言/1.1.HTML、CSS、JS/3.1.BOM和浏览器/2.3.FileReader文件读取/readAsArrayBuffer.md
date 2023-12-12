# readAsArrayBuffer

## 概述

+ `readAsArrayBuffer` 方法读取文件，返回一个类型化数组（`ArrayBuffer`），即固定长度的二进制缓存数据

+ 在文件操作时（比如将JPEG图像转为PNG图像），这个方法非常方便

  ```js
  var reader = new FileReader();
  reader.onload = function(e) {
    var arrayBuffer = reader.result;
  }

  reader.readAsArrayBuffer(file);
  ```
