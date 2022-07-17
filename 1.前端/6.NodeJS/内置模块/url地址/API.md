# API

## 构造函数

  - 代码

    ```javascript
    const URL = require("url");

    const urls = new URL.URL("https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc");
    console.log(urls);

    // 打印内容
    URL {
      href: 'https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc',
      origin: 'https://3w.huanqiu.com:8080',
      protocol: 'https:',
      username: '',
      password: '',
      host: '3w.huanqiu.com:8080',
      hostname: '3w.huanqiu.com',
      port: '8080',
      pathname: '/a/b/c',
      search: '?agt=8&e=5',
      searchParams: URLSearchParams { 'agt' => '8', 'e' => '5' },
      hash: '#abc'
    }

    // 类似 Map
    urls.searchParams; // URLSearchParams { 'agt' => '8', 'e' => '5' }

    // 获取
    urls.searchParams.get("e")

    //判断是否存在
    urls.searchParams.has("e")
    ```

## parse

  - 代码

    ```javascript
    const urls = URL.parse("https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc");
    console.log(urls);

    Url {
      protocol: 'https:',
      slashes: true,
      auth: null,
      host: '3w.huanqiu.com:8080',
      port: '8080',
      hostname: '3w.huanqiu.com',
      hash: '#abc',
      search: '?agt=8&e=5',
      query: 'agt=8&e=5',
      pathname: '/a/b/c',
      path: '/a/b/c?agt=8&e=5',
      href: 'https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc'
    }
    ```

## format

  - 对象转换成字符串

    ```javascript
    const obj = {
      href: 'https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc',
      origin: 'https://3w.huanqiu.com:8080',
      protocol: 'https:',
      username: '',
      password: '',
      host: '3w.huanqiu.com:8080',
      hostname: '3w.huanqiu.com',
      port: '8080',
      pathname: '/a/b/c',
      search: '?agt=8&e=5',
      searchParams: URLSearchParams { 'agt' => '8', 'e' => '5' },
      hash: '#abc'
    }

    const url =  URL.format(obj); // https://3w.huanqiu.com:8080/a/b/c?agt=8&e=5#abc
    ```
