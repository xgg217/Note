# 数字太长被截断处理

## 问题现象

+ axios从服务端请求，返回的数据有个id字段为int类型，值为6203146187571204548

+ axios默认会将数据转为对象

  + 此时这个值就被转为6203146187571204000了

+ 在大多数 Axios 封装的请求方法中，前端接收到后端响应的JSON体中，超长数字由于是字符串格式，所以未丢失精度

  + 虽然 Axios 会自动解析响应数据，但你仍然可以在 `transformResponse` 中手动处理这种情况，确保接收到的数据不会丢失精度

## 总结

+ 所有可能超过15位的ID必须用String传输！
+ 分布式ID建议直接设计为String（雪花ID也不安全！）
+ 联调时要用超长响应值测试边界值！
+ 建议把这篇甩到后端

## 方式1 手动处理

+ 解决方式：在config中自定义转换函数：此处将supplierId的值由number转为字符串，再转为对象返回

  ```js
  // 交易流水列表
  export function apiTransactionItemIndex(data: any) {
    return createAxios(
      {
        url: actionUrl.get("transactionItemIndex"),
        method: "post",
        data,
        transformResponse: data => {
          // 将列表中的 transactionNumber 的值（数组长度太长，被转成JSON的时候被自动截取） 转换为字符串
          data = data.replaceAll(
            /\"transactionNumber\":(\d+)/g,
            '"transactionNumber":"$1"',
          );

          return JSON.parse(data);
        },
      },
      {
        loading: true,
      },
    );
  }
  ```

## 方法2 使用第三方库

+ code

  ```js
  // 导入 json-bigint
  const JSONbig = require('json-bigint');

  // 创建 axios 实例并配置 transformResponse
  const axiosInstance = axios.create({
    transformResponse: [(data) => {
      // 使用 json-bigint 解析响应数据，避免精度丢失
      if (data) {
        return JSONbig.parse(JSON.stringify(data)); // 先转为 JSON 字符串再解析
      }
      return data;
    }]
  });

  // 发起请求
  axiosInstance.get('/api/your-api')
    .then(response => {
      // 直接获取 id，已处理为 BigInt 类型
      console.log(response.data.id);
    })
    .catch(error => {
      console.error(error);
    });
  ```
