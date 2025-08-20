# FileSaver

## FileSaver.js 简介

+ FileSaver.js 是 HTML5 的 saveAs() FileSaver 实现
+ 它支持大多数主流的浏览器

+ [FileSaver](https://github.com/eligrey/FileSaver.js)

  ```bash
  npm install file-saver --save

  npm install @types/file-saver --save-dev
  ```

  ```js
  import { saveAs } from 'file-saver';
  ```

## API

+ `FileSaver saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom })`

  + 参数

    + 参数1 支持 Blob/File/Url 三种类型
    + 参数2 表示文件名（可选）
    + 参数3 如果你需要 FlieSaver.js 自动提供 Unicode 文本编码提示（参考：字节顺序标记），则需要设置 { autoBom: true}

+ 保存文本 txt

  ```js
  let blob = new Blob(["大家好，我是阿宝哥!"], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "hello.txt");
  ```

+ 保存线上资源(URL)

  ```js
  FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
  ```

+ 保存 Canvas 画布内容

  ```js
  let canvas = document.getElementById("my-canvas");
  canvas.toBlob(function(blob) {
    saveAs(blob, "abao.png");
  });
  ```

+ 文件流

  ```js
  axios({
    method: 'get',
    url: 'your_file_url',
    responseType: 'blob', // 指定响应数据类型为 blob
  }).then((response) => {
    //上面是接口
    const blob = new Blob([response.data]);
    const fileName = 'your_file_name';
    saveAs(blob, fileName);
  });
  ```
