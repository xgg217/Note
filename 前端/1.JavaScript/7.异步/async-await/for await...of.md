# for await...of

## 使用方式

  - 代码

    ```js
    async function () {
      try {
        for await (const x of createRejectingIterable()) {
          console.log(x);
        }
      } catch (e) {
        console.error(e);
      }
    }
    ```

  - node 中使用

    ```js
    async function main(inputFilePath) {
      const readStream = fs.createReadStream(
        inputFilePath,
        { encoding: 'utf8', highWaterMark: 1024 }
      );

      for await (const chunk of readStream()) {
        console.log('>>> '+chunk);
      }
      console.log('### DONE ###');
    }
    ```
