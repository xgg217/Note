# setDate

# Date.prototype.setDate()

  - 根据本地时间来指定一个日期对象的天数。

  - 语法

    ```javascript
    dateObj.setDate(dayValue)

    // 参数： dayValue：一个整数，表示该月的第几天。
    ```

  - 如果 `dayValue` 超出了月份的合理范围，setDate 将会相应地更新 Date 对象。

  - 如果为 `dayValue` 指定0，那么日期就会被设置为上个月的最后一天。

    ```javascript
    var theBigDay = new Date(1962, 6, 7);
    console.log(theBigDay); // Sat Jul 07 1962 00:00:00 GMT+0800 (中国标准时间)-- 1962-07-07
    theBigDay.setDate(0);
    console.log(theBigDay); // Sat Jun 30 1962 00:00:00 GMT+0800 (中国标准时间)--1962-06-30
    ```

  - 如果 `dayValue` 被设置为负数，日期会设置为上个月最后一天往前数这个负数绝对值天数后的日期。-1会设置为上月最后一天的前一天（译者注：例如当前为4月，如果 `setDate(-2)`,则为3月29日）

    ```javascript
    var theBigDay1 = new Date(1962, 6, 7); // Sat Jul 07 1962 00:00:00 GMT+0800 (中国标准时间)-- 1962-07-07
    theBigDay1.setDate(-1);
    console.log(theBigDay1); // Fri Jun 29 1962 00:00:00 GMT+0800 (中国标准时间)--1962-06-29
    ```

  - 超过

    ```javascript
    var theBigDay = new Date(1962, 6, 7); // 1962-07-07
    theBigDay.setDate(24);  // 1962-07-24
    theBigDay.setDate(32);  // 1962-08-01
    ```
