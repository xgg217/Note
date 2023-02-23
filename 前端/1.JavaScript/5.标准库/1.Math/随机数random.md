# random

## Math.random

+ \[0，1) === \[即从0（包含0）到...1但不包括1（排除1）

+ 得到一个两数之间的随机整数: 这个值不小于 `min` （如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（不等于）`max`

    ```js
    function getRandomInt(min, max) {
      const minVal = Math.ceil(min);
      const maxVal = Math.floor(max);
      return Math.floor(Math.random() * (maxVal - minVal)) + minVal; //不含最大值，含最小值
    }
    ```

+ 得到一个两数之间的随机整数，包括两个数在内

    ```js
    function getRandomIntInclusive(min, max) {
      const minVal = Math.ceil(min);
      const maxVal = Math.floor(max);
      return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal; //含最大值，含最小值
    }
    ```
