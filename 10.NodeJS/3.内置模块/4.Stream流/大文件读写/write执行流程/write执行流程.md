# write执行流程

## ws.write(data)

+ 参数

  + `data` 可以是 字符串 或 `Buffer`

    + `true`：写入通道没有被填满，接下来的数据可以直接写入，无需排队

    + `false`：写入通道目前已被填满，接下来的数据将进入可写入队列

+ 返回值： `boolean` 值

## 执行机制

+ 第一次调用 `write` 方法时是将数据直接写入到文件中

+ 第二次开始 `write` 方法是将数据写入缓存中

+ 生产速度和消费速度不一致，一般情况下生产速度要比消费速度快很多

  ```js
  const fs = require('fs');

  const ws = fs.createWriteStream('test.txt', {
    highWaterMark: 3
  });

  // 第一次调用 write 方法时是将数据直接写入到文件中
  let falg = ws.write('1');
  console.log(falg);

  falg = ws.write('2');
  console.log(falg);

  falg = ws.write('3');
  console.log(falg);

  falg = ws.write('4');
  console.log(falg);

  ws.on('drain', () => {
    console.log(11);
  });
  ```

+ 当 `ws.write(data)` 返回 `false` 时，并不意味着当前次的数据不能被写入了，但是我们应该告诉数据的生产者，当前的消费速度已经跟不上生产速度，所以一般我们会将可读流模块修改为暂停模式

+ 当数据生产者暂停之后，消费者会慢慢的消化它内部缓存中的数据，直到可以再次被执行写入操作

+ 当缓冲区可以继续写入数据时，如何让生产者知道 --> `drain` 事件

+ 即当写入队列清空时，触发 `drain` 事件

  ![数据流动](image/数据流动.png)
