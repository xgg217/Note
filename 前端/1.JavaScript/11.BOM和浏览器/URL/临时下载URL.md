# 临时下载URL

## URL.createObjectURL()

  - `URL.createObjectURL()` 方法用来为上传/下载的文件、流媒体文件生成一个 URL 字符串

  - 这个字符串代表了 `File` 对象或 `Blob` 对象的 URL

    ```javascript
    // HTML 代码如下
    // <div id="display"/>
    // <input
    //   type="file"
    //   id="fileElem"
    //   multiple
    //   accept="image/*"
    //   onchange="handleFiles(this.files)"
    //  >
    var div = document.getElementById('display');

    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var img = document.createElement('img');
        img.src = window.URL.createObjectURL(files[i]);
        div.appendChild(img);
      }
    }
    ```

    ```javascript
    // 该方法生成的 URL 就像下面的样子
    blob:http://localhost/c745ef73-ece9-46da-8f66-ebes574789b1
    ```

  - 注意，每次使用 `URL.createObjectURL()` 方法，都会在内存里面生成一个 URL 实例

  - 如果不再需要该方法生成的 URL 字符串，为了节省内存，可以使用 `URL.revokeObjectURL()` 方法释放这个实例

## URL.revokeObjectURL()

  - `URL.revokeObjectURL()` 方法用来释放 `URL.createObjectURL()` 方法生成的 URL 实例

  - 它的参数就是 `URL.createObjectURL()` 方法返回的 URL 字符串

    ```javascript
    var div = document.getElementById('display');

    // 一旦图片加载成功以后，为本地文件生成的 URL 字符串就没用了，于是可以在img.onload回调函数里面，通过URL.revokeObjectURL()方法卸载这个 URL 实例
    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var img = document.createElement('img');
        img.src = window.URL.createObjectURL(files[i]);
        div.appendChild(img);
        img.onload = function() {
          window.URL.revokeObjectURL(this.src);
        }
      }
    }
    ```
