const {resolve, extname, join} = require('node:path');
const fs = require("node:fs")
console.log(resolve);

const beseUrl = 'D:\LX\笔记\Note\前端';


console.log(__dirname);

(async () => {
  const reg = /[\w\W]{1,}1.md$/g;
  // 判断文件是否是 1.md 结尾的文件
  const isMd = (url) => {
    // console.log(url);
    return reg.test(url);
  }

  // 收集所有的文件路径
  const arr = [];
  let timer = null;

  const fileDisplay = async (url, cb) => {
    const filePath = resolve(url);

    try {
      const res = await fs.promises.readdir(filePath);
      // console.log(res);

      for (const filename of res) {
        const filedir = join(filePath, filename);

        const stats = await fs.promises.stat(filedir);

        // 是否是文件
        {
          const isFile = stats.isFile();
          // 是文件 同时是md文件
          if(isFile && isMd(filedir)) {
            console.log(filedir);
            arr.push(filedir);
          }
        }


        // 是否是文件夹
        const isDir = stats.isDirectory();

        // 是文件夹
        {
          if(isDir) {
            fileDisplay(filedir, cb)
          }
        }
      }
    } catch (error) {
      console.error(error);
    }

  }

  await fileDisplay(resolve(__dirname, './前端'), (arr) => {
    console.log('arr', arr);
  })

  console.log('arr',arr);

})();

