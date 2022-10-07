# 读取 txt文件

## 读取 txt文件

  - html:通过 File API，我们可以访问 [FileList](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList "FileList")，它包含了表示用户所选文件的 [File](https://developer.mozilla.org/zh-CN/docs/Web/API/File "File") 对象

    ```html
    <input type="file" id="input">
    ```

    ```js
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
      const rawFile = this.files[0]; // 获取第一个文件
      const readAsText = new FileReader();
      readAsText.readAsText(rawFile);
      readAsText.addEventListener('load', () => {
        // 文件内容
        console.log(readAsText.result);
        console.log('读取完成');
      });

      readAsText.addEventListener('error', () => {
        console.log('读取失败');
      });
    }
    ```
