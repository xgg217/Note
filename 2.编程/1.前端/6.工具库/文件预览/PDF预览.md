# PDF 预览

## 参考

+ `https://juejin.cn/post/7207078219215732794`

  ![](./PDF%E9%A2%84%E8%A7%88.jpeg)

## embed 引入文件：pdf

+ 在pdf文档预览时，可以采用embed的方式，这个httpsUrl就是你的pdf文档的链接地址

  ```html
  const httpsUrl = sourcePage
    ? `${doc.url}#page=${sourcePage}`
    : doc.url;

  <embed src={`${httpsUrl}`} style={preStyle} key={`${httpsUrl}`} />;
  ```
