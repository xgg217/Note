# Blob\_URL与Data\_URL区别

## 格式不同

- blob URL 格式如 `blob:域名/uuid`

- Data URL 格式如 `data:[<mediatype>][;base64],<data>`

  - `mediatype` 是个 MIME 类型的字符串。例如 `image/jpeg` 表示 JPEG图像文件。如果被省略则默认值为 `text/plain;charset=US-ASCII`

![](image/v2-a822247b894bde03fbf0e42ad336f3ed_720w_3H91a3mCs.jpg)

## 长度不同

- Blob URL  一般长度较短

- Data URL  因为直接存储图片 base64 编码后的数据，往往比较长

## XMLHttpRequest 支持情况不同

- Blob URL   可以很方便使用 XMLHttpRequest 获取源数据（ `xhr.responseType = 'blob'` ）

- Data URL  并不是所有浏览器都支持通过 XMLHttpRequest 获取源数据的

## 使用场景不同

- Blob URL   只能在当前应用内使用，把   复制到浏览器地址栏是无法获取数据

- &#x20;Data URL 则可以在任意浏览器中使用
