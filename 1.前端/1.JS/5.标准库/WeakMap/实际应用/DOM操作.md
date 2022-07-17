# DOM操作

## DOM操作

  - 代码：将 eleImage 作为一个弱键，这样，`eleImage` 一旦设置为  `null`，所有相关的数据都会被释放。

    ```javascript
    var eleImage = document.getElementById('img');
    var storeMap = new WeakMap();
    storeMap.set(eleImage, eleImage.outerHTML);
    eleImage.remove();
    eleImage = null;
    ```
