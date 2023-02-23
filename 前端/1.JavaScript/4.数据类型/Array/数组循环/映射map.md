# map

## 语法

+ `var new_array = arr.map(function callback(currentValue[, index[, array]])[,thisArg])`

+ 返回值 : 一个新数组，每个元素都是回调函数的结果

    ```js
    // 求数组中每个元素的平方根
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt); // roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
    // 重新格式化数组中的对象
    var kvArray = [{key: 1, value: 10},
                  {key: 2, value: 20},
                  {key: 3, value: 30}];

    var reformattedArray = kvArray.map(function(obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
      return rObj;
    });
    // reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}]
    // kvArray 数组未被修改
    ```

## 面试题

+ 代码

    ```js
    ["1", "2", "3"].map(parseInt); // [1, NaN, NaN]

    // map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素,元素索引, 原数组本身。第三个参数parseInt会忽视, 但第二个参数不会,也就是说,parseInt把传过来的索引值当成进制数来使用.从而返回了NaN

    // 解决办法
    ['1', '2', '3'].map(Number); // [1, 2, 3]
    ```

## 源码

+ 代码

    ```js
    /**
     * 模拟数组 map ，同时增加循环对象的遍历
     * @param {*} list 数组、类数组
     * @param {*} funCb
     * @param {*} that
     */
    const map = function(list, funCb, thatThis) {
      if(typeof(list) !== "object") {
        throw new Error('第一个参数 必须为对象和数组');
      }

      let arr = [];

      // 类数组:存在length 的对象
      const Len = list.length;
      for(let i = 0; i< Len; i++) {
        arr = [...arr, funCb.call(thatThis, list[i], i, list)];
      }

      return arr;
    }
    ```
