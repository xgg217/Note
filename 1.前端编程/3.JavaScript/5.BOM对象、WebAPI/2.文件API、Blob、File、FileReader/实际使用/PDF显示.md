# PDF显示

## 生成PDF

+ 在浏览器端，利用现成开源库 jsPDF 我们也可以方便的生成 PDF 文档

  ```html
  <body>
    <h3>客户端生成 PDF 示例</h3>
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
    <script>
      (function generatePdf() {
        const doc = new jsPDF();
        doc.text("Hello semlinker!", 66, 88);
        const blob = new Blob([doc.output()], { type: "application/pdf" });
        blob.text().then((blobAsText) => {
          console.log(blobAsText);
        });
      })();
    </script>
  </body>
  ```

+ 其实 jsPDF 除了支持纯文本之外，它也可以生成带图片的 PDF 文档，比如：

  ```js
  let imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...'
  let doc = new jsPDF();

  doc.setFontSize(40);
  doc.text(35, 25, 'Paranyan loves jsPDF');
  doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
  ```
