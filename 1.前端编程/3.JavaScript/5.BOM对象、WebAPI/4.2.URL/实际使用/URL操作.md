# URL操作

## 获取 base URL

+ 获取 base URL

  ```js
  const getBaseURL = (url) => url.replace(/[?#].*$/, '')

  getBaseURL('<http://url.com/page?name=Adam&surname=Smith>')
  // '<http://url.com/page>'
  ```

## 如何检查 URL 是否为绝对路径？

+ code

  ```js
  const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str)

  isAbsoluteURL('<https://google.com>') // true
  isAbsoluteURL('ftp://www.myserver.net') // true
  isAbsoluteURL('/foo/bar') // false
  ```

## 如何将 URL 参数转换为对象？

+ code

  ```js
  const getURLParameters = (url) =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {}
    )

  getURLParameters('google.com') // {}
  getURLParameters('<http://url.com/page?name=Adam&surname=Smith>')
  // {name: 'Adam', surname: 'Smith'}
  ```
