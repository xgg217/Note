# 数字太长被截断处理 transformResponse

## 数字截取

+ axios从服务端请求，返回的数据有个id字段为int类型，值为6203146187571204548

+ axios默认会将数据转为对象

  + 此时这个值就被转为6203146187571204000了

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

