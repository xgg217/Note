# filter

## 语法

  - `arr.filter(callback(element[, index[, array]])[, thisArg])`

  - 返回值: 一个新的通过测试的元素的集合的数组，如果全部没有通过则返回空数组

## 注意

  - 不改变原数组，**返回新数组——浅拷贝**

  - 在对比时使用的是 `==`

    ```js
    const dataArr = [1,7,5,7,1,3];
    const res = dataArr.filter((ele, index, array)=>{
      return ele > '3'
    });
    console.log(res); // [7, 5, 7]
    const ress = dataArr.filter((ele, index, array)=>{
      return ele > 3
    });
    console.log(ress); // [7, 5, 7]
    ```

## 源码

  - 代码

    ```js
    const filter = function(arr, funCb, thatThis) {
      let newArr = [];
      const len = arr.length;
      for(let i = 0; i < len; i++) {
        if(funCb.call(thatThis, arr[i], i, arr)) {
          newArr = [...newArr, arr[i]];
        }
      }
      return newArr
    }

    ```

## 示例

  - 示例

    ```js
    // 筛选排除掉所有的 大于 10 的元素
    function isBigEnough(element) {
      return element >= 10;
    }
    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]

    // 在数组中搜索
    var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    function filterItems(query) {
      return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    }
    console.log(filterItems('ap')); // ['apple', 'grapes']
    console.log(filterItems('an')); // ['banana', 'mango', 'orange']
    ```
