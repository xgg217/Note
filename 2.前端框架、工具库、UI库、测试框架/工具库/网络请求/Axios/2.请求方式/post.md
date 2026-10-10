# post 请求

## 基本配置

+ `axios.post(url地址, [请求体对象], [请求配置])`

## 请求示例

+ post 请求

  ```js
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  ```

+ 发起多个并发请求

  ```js
  function getUserAccount() {
    return axios.get('/user/12345');
  }

  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }

  const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

  // OR

  Promise.all([getUserAccount(), getUserPermissions()])
    .then(function ([acct, perm]) {
      // ...
    });
  ```

+ 将 HTML Form 转换成 JSON 进行请求

  ```js
  const {data} = await axios.post('/user', document.querySelector('#my-form'), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  ```
