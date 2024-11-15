# 预览

## 库

+ `@vue-office/excel` 预览 excel
+ `@vue-office/docx` 预览 docx
+ `@vue-office/pdf` 预览 pdf

## 预览 docx

+ 库

  ```shell
  npm add -S @vue-office/docx

  // or
  npm add -S docx-previes

  // or
  npm add -S mammoth
  ```

  ![alt text](word解析与预览.png)

+ @vue-office/docx 组件

  ```html
  <vueofficeDocx :scr="excelSrc" :style="{height: '500px'}"></vueofficeDocx>

  <script>
    import vueofficeDocx from "@vue-office/docx";
    const excelSrc = "";
  </script>
  ```

+ docx-previes

  ```js
  import { renderAsync } from "docx-previes";


  const file = e.target.files[0];

  const dom = document.querySelector('div');

  // 支持blob 、arrayBuffer
  renderAsync(file, dom);
  ```
