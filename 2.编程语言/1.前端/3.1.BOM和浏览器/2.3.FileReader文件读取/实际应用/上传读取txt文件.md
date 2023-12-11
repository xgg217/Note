# 读取txt文件

## 概述

+ code

  ```html
  <input type="file" id="input">
  ```

  ```js
  const inputElement = document.getElementById("input");
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    console.log(this.files[0]);
    const file = this.files[0];
    console.log(e);

    const readAsText = new FileReader();

    readAsText.readAsText(rawFile);

    readAsText.addEventListener('load', (e) => {

      // readAsText.result === e.target.result
      console.log(readAsText.result);// 文件内容
      console.log(e.target.result); // 文本内容
      console.log('读取完成');
    });

    readAsText.addEventListener('error', () => {
      console.log('读取失败');
    });
  }
  ```
