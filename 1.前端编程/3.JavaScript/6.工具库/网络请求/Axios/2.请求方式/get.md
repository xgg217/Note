# get请求

## 基本用法

+ `axios.get(url地址, [请求配置])`

## 示例

+ 方式1

  ```js
  const axios = require('axios');

  // 向给定ID的用户发起请求
  axios.get('/user?ID=12345')
    .then(function (response) {
      // 处理成功情况
      console.log(response);
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
    });
  ```

+ 方式2

  ```js
  // 上述请求也可以按以下方式完成（可选）

  axios.get('/user', {
      // axios 会自动进行URL编码（自动调用encodeURLComponent()）
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      // response.data 会自动解析为JSON格式
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
    });
  ```

+ 支持async/await用法

  ```js
  // 支持async/await用法
  async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  ```


