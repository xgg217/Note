# exceljs

## 参考

+ https://zhuanlan.zhihu.com/p/676063637

## 下拉选择

+ 下拉菜单
+ 格式 `formulae: [`"'下拉菜单1,下拉菜单1'"`]`

  ```js
  const wb = new ExcelJS.Workbook();

  const Sheet1 = wb.addWorksheet('Sheet1');
  Sheet1.columns = otherImportDownloadTemplateArr;

  const Sheet1_data = [];
  Sheet1.addRows(Sheet1_data);
  Sheet1.ValueType = 'string';

  // 渲染状态下拉框
  new Array(SUM_LENGTH).fill(0).forEach((_, idx) => {
    const row = idx + 2;
    // 分区
    Sheet1.getCell(row, 1).dataValidation = {
      type: 'list',
      formulae: [`"${partitionStr}"`]
    };
  });
  ```

## 读取 + 下载

+ 读取:workbook（工作簿） > worksheet（工作表） > row（行） > cell（列）
+ 直接调用 worksheet 的 getSheetValues 来拿到表格数据

  ```js
  const { Workbook } = require('exceljs');

  // 读取文件
  readerData(rawFile) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(rawFile);
      reader.onload = e => {
        // 代码
        resolve();
      };

      reader.onerror = e => {
        this.$message.error('上传文件失败');
        console.error(e);
        this.loading = false;
        reject();
      };


    })
  }

  async function main(){


    const workbook = new Workbook();

    const workbook2 = await workbook.xlsx.readFile('./data.xlsx');

    workbook2.eachSheet((sheet, index1) => {
      console.log('工作表' + index1);

      const value = sheet.getSheetValues();
    })
  }

  main();
  ```

## 写入 + 下载

+ code

  ```js
  const { Workbook } = require('exceljs');

  async function main(){
    const workbook = new Workbook();

    const worksheet = workbook.addWorksheet('guang111');

    worksheet.columns = [
        { header: 'ID', key: 'id', width: 20 },
        { header: '姓名', key: 'name', width: 30 },
        { header: '出生日期', key: 'birthday', width: 30},
        { header: '手机号', key: 'phone', width: 50 }
    ];

    const data = [
        { id: 1, name: '光光', birthday: new Date('1994-07-07'), phone: '13255555555' },
        { id: 2, name: '东东', birthday: new Date('1994-04-14'), phone: '13222222222' },
        { id: 3, name: '小刚', birthday: new Date('1995-08-08'), phone: '13211111111' }
    ]
    worksheet.addRows(data);

    // nodejs 下载
    workbook.xlsx.writeFile('./data2.xlsx');

    // 浏览器下载
    wb.xlsx.writeBuffer().then(data => {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '税费导出模板.xlsx';
    const event = new MouseEvent('click');
    a.dispatchEvent(event);
  });
  }

  main();
  ```

