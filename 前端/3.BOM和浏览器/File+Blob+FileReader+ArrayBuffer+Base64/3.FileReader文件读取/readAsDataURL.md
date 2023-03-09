# readAsDataURL

## 概述

+ `readAsDataURL` 方法返回一个 `data URL` ，它的作用基本上是将文件数据进行Base64编码

+ 你可以将返回值设为图像的 `src` 属性

  ```js
  var file = document.getElementById('destination').files[0];
  if(file.type.indexOf('image') !== -1) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var dataURL = reader.result;
    }
    reader.readAsDataURL(file);
  }
  ```
