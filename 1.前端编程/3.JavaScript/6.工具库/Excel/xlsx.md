# xlsx

## 安装

>https://sheetjs.com/

+ npm

  ```shell
  pnpm rm xlsx
  pnpm install --save https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz
  ```

  ```js
  import { read, writeFileXLSX } from "xlsx";

  // or
  import * as XLSX from "xlsx";
  ```

## 新建文件

+ 生成一个工作表 `XLSX.utils.json_to_sheet`

  ```js
  const rows = [
    { name: "George Washington", birthday: "1732-02-22" },
    { name: "John Adams", birthday: "1735-10-19" },
  ]

  const worksheet = XLSX.utils.json_to_sheet(rows);
  ```

+ 创建一个新工作簿 `XLSX.utils.book_new` ， 将工作表追加到工作簿中。新工作表将称为“日期”

  ```js
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
  ```
