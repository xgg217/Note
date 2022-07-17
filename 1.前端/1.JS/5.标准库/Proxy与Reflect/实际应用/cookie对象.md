# cookie对象

## 示例

  - 如果你曾经与cookie进行交互，那么必须处理 `document.cookie`

  - 这是一个不寻常的API，因为API是一个 `String` ，它读出所有 `cookie` ，以分号分隔。

    ```text
    _octo=GH1.2.2591.47507; _ga=GA1.1.62208.4087; has_recent_activity=1
    ```

    ```javascript
    "use strict";

    const cookieStr =  '_octo=GH1.2.2591.47507; _ga=GA1.1.62208.4087; has_recent_activity=1';

    const getCookieObject = function getCookieObject (cookieStr) {
      const obj = cookieStr.split(';').reduce((cks, item) => {
        const arr = item.split('=');
        const key = arr[0].trim();
        cks[key] = arr[1];
        return cks;
      }, {});
      console.log(obj);

      return new Proxy(obj, {
        set(target, p, value) {
          console.log('set');
          Reflect.set(target, p, value);
          return true;
        },
        deleteProperty(target, p) {
          console.log('deleteProperty');
          Reflect.deleteProperty(target, p);
          return true;
        }
      })
    }

    const docCookies = getCookieObject(cookieStr);
    console.log(docCookies); // {_octo: "GH1.2.2591.47507", _ga: "GA1.1.62208.4087", has_recent_activity: "1"}
    docCookies.has_recent_activity = 10;
    console.log(docCookies); // {_octo: "GH1.2.2591.47507", _ga: "GA1.1.62208.4087", has_recent_activity: 10}
    delete docCookies['has_recent_activity'];
    console.log(docCookies); // {_octo: "GH1.2.2591.47507", _ga: "GA1.1.62208.4087"}
    ```
