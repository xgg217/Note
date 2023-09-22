# 封装ajax

## 利用 Promise， 对 ajax 进行封装

+ 代码

  ```js
  const myAjax = (url, method = 'get') => {
    return new Promise((res, rej) => {
      $.ajax({
        url,
        method,
        success(data) {
          res(data);
        },
        error(err) {
          res(err);
        }
      });
    });
  };

  const aja = myAjax('www.baidu.com');
  aja.then((res) => {}, (err) => {});
  ```
