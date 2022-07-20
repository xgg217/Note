# Date.parse

## Date.parse()

  - `Date.parse` 方法用来解析日期字符串，返回距离1970年1月1日 00:00:00的毫秒数。

  - 标准的日期字符串的格式，应该完全或者部分符合RFC 2822和ISO 8061，即 `YYYY-MM-DDTHH:mm:ss.sssZ` 格式，其中最后的Z表示时区。但是，其他格式也可以被解析

    ```javascript
    Date.parse('Aug 9, 1995')
    // 返回807897600000，以下省略返回值

    Date.parse('January 26, 2011 13:51:50')
    Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
    Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
    Date.parse('2011-10-10')
    Date.parse('2011-10-10T14:48:00')
    ```

  - 如果解析失败，返回 `NaN`。

    ```javascript
    Date.parse('xxx') // NaN
    ```

## 注意点

  - 在 IOS 设备无法解析年月日以横杠连接格式。解决办法就是手动解析时间

    ```javascript
    Date.parse('2018-12-25 18:00'); // 返回 NaN
    ```

  - **由于浏览器差异和不一致，强烈建议不要使用  解析字符串**
