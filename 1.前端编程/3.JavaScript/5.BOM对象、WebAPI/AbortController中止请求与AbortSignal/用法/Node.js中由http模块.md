# Node.js 中由 http 模块

## 基本使用

+ Node.js 中由 http 模块发出的请求也支持 signal 属性

  ```js
  const http = require('http');
  const { AbortController } = require('abort-controller');

  function makeRequest() {
    const controller = new AbortController();

    const options = {
      hostname: 'example.com',
      port: 80,
      path: '/',
      method: 'GET',
      // 将 AbortSignal 传递给请求
      signal: controller.signal
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('Response:', data);
      });
    });

    req.on('error', (e) => {
      if (e.name === 'AbortError') {
        console.log('请求被取消');
      } else {
        console.error(`请求遇到问题: ${e.message}`);
      }
    });

    req.end();

    // 模拟取消操作，例如在 2 秒后取消请求
    setTimeout(() => {
      controller.abort();
    }, 2000);
  }

  makeRequest();
  ```
