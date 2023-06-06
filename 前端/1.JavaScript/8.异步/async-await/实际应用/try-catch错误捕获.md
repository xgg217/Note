# try/catch错误捕获

## try-catch 错误捕获

+ 示例

  ```js
  async function read(url) {
    try{
      const val1 = await readFile(url);
      const val2 = await readFile(val1);
      const val3 = await readFile(val2);
      return val3;
    }catch(e) {
      console.log(e)
    }
  }

  read('./data.num.txt')
    .then((val3) => {
      console.log(val3);
    })
    .catch(err => {
      console.log(err);
    });
  ```
