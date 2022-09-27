# 创建Buffer

## API 集合

  - alloc:插件指定字节大小的 `bufffer`

  - allocUnsafe:插件指定大小的 `buffer` (不安全)

  - from:接受数据，创建 `buffer`

  - 提示：不要使用 `new Buffer()` 操作

## Buffer.from()

  - 该方法用于替代 `new Buffer(string)` 、 `new Buffer(array)` 、 `new Buffer(buffer)`

  - `Buffer.from(array)` 数组中尽量只有 **数字** 或 进制数据，不要往数组中添加中文(如果需要中文，就是用 `Buffer.from(string[, encoding])`)，不然无法显示

    ```javascript
    // 只填充 数字
    const b1 = Buffer.from([1,2,3]);

    // 填充 16 进制
    const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

    // 无法完整显示--不建议使用
    const b2 = Buffer.from([1,2,3, '小哥哥']);
    ```

  - `Buffer.from(arrayBuffer[, byteOffset[, length]])`

  - `Buffer.from(buffer)` 与原 buffer 数据是拷贝关系，非共享关系

    ```javascript
    const b1 = Buffer.alloc(3);
    const b2 = Buffer.from(b1);
    console.log(b1); // <Buffer 00 00 00>
    console.log(b2); // <Buffer 00 00 00>

    // 修改内容
    b1[0] = 1;

    console.log(b1); // <Buffer 01 00 00>

    // 与原数据不相关
    console.log(b2); // <Buffer 00 00 00>
    ```

  - `Buffer.from(string[, encoding])` encoding: 默认 `utf-8`

    ```javascript
    import { Buffer } from 'buffer';

    const buf1 = Buffer.from('this is a tést');

    // 设置编码格式
    const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
    ```

## Buffer.alloc(size\[, fill\[, encoding]])

  - 该方法用于替代 `new Buffer(size)`，其创建的 `Buffer` 实例默认会使用 0 填充内存，也就是会将内存之前的数据全部覆盖掉

  - 比之前的 `new Buffer(size)` 更加安全，因为要覆盖之前的内存空间，也意味着更低的性能

  - 同时，`size` 参数如果不是一个数字，会抛出 `TypeError`

    ```javascript
    import { Buffer } from 'buffer';

    const buf = Buffer.alloc(5);

    console.log(buf);
    // 打印: <Buffer 00 00 00 00 00>
    ```

## Buffer.allocUnsafe(size)

  - 该方法与之前的 `new Buffer(size)` 保持一致，虽然该方法不安全，但是相比起 `alloc` 具有明显的性能优势

## toJSON()

  - `toJSON()` 方法可以将数据进行Unicode编码并展示

    ```javascript
    const buf2 = Buffer.from('hello buffer');

    buf2.toJSON();
    // { type: 'Buffer',data: [ 104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114 ] }
    ```

## new Buffer(size) -- 不建议使用

  - 创建大小为 size(number) 的 Buffer

  - 可以改用 `Buffer.alloc(size[, fill[, encoding]])` 替代

    ```javascript
    new Buffer(5)
    // <Buffer 00 00 00 00 00>
    ```

## new Buffer(array) -- 不建议使用

  - 使用八位字节数组 array 分配一个新的 Buffer

  - 可以改用 `Buffer.from()` 替代

    ```javascript
    const buf = new Buffer([0x74, 0x65, 0x73, 0x74])
    // <Buffer 74 65 73 74>
    // 对应 ASCII 码，这几个16进制数分别对应 t e s t

    // 将 Buffer 实例转为字符串得到如下结果
    buf.toString() // 'test'
    ```

## new Buffer(buffer) -- 不建议使用

  - 拷贝 buffer 的数据到新建的 Buffer 实例

  - 可以改用 `Buffer.from()` 替代

    ```javascript
    const buf1 = new Buffer('test')
    const buf2 = new Buffer(buf1)
    ```

## new Buffer(string\[, encoding]) -- 不建议使用

  - 创建内容为 string 的 Buffer，指定编码方式为 encoding

    ```javascript
    const buf = new Buffer('test')
    // <Buffer 74 65 73 74>
    // 可以看到结果与 new Buffer([0x74, 0x65, 0x73, 0x74]) 一致

    buf.toString() // 'test'
    ```
