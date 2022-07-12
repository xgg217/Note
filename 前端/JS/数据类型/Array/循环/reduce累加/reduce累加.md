# reduce累加

## 语法

*   `arr.reduce(callback(accumulator, element[, index[, array]])[, initialValue])`

    *   `accumulator` ：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 `initialValue`（见于下方）

    *   `element`：数组中正在处理的元素

    *   `index`(可选)

    *   `array`(可选)

    *   `initialValue`(可选):作为第一次调用 `callback` 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。

*   返回值:函数累计处理的结果

## 注意

*   方法对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

*   回调函数第一次执行时，`accumulator` 和 `element` 的取值有两种情况：

    *   如果调用 `reduce()` 时提供了 `initialValue`，`accumulator` 取值为`initialValue`，`element` 取数组中的第一个值；

    *   如果没有提供 `initialValue`，那么`accumulator`取数组中的第一个值， `element`取数组中的第二个值。

    *   **注意**：如果没有提供 `initialValue`，`reduce` 会从索引1的地方开始执行 `callback` 方法，跳过第一个索引。如果提供`initialValue`，从索引0开始。

    *   **提供初始值通常更安全**

## 示例

*   加对象数组里的值

    ```javascript
    var initialValue = 0;
    var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.x;
    },initialValue)
    console.log(sum) // 6
    ```

*   将二维数组转化为一维

    ```javascript
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
      return a.concat(b);
    },[]);
    // flattened is [0, 1, 2, 3, 4, 5]
    ```

*   计算数组中每个元素出现的次数

    ```javascript
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    var countedNames = names.reduce(function (allNames, name) {
      if (name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    // countedNames is: { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    ```

## 源码

*   代码

    ```javascript
    /**
     * @param {*} isRight 从右到左开始计算
     */
    const createReduce = function(isRight = false) {
      const reducer = function(newArr, funCb, memo = 0) {
        if(!Array.isArray(newArr)) {
          throw new Error(`函数 《${xggReduce.name}》 第一个参数必须为数组`);
        }

        const len = newArr.length;
        let conunt = 0;
        let i = 0;

        // 长度为 0，同时未提供初始值，报错
        if(!len && !memo) {
          throw new Error(`函数 《${xggReduce.name}》 数组长度不能为0，或者提供初始值`);
        }

        // 长度为 0，提供初始值
        if(!len && !memo) {
          return memo;
        }

        // 长度为1，不进行循环，直接返回第一个数组
        if(len === 1) {
          return newArr[0];
        }

        if(memo) {
          // 存在初始值
          conunt = memo;
        } else {
          // 不存在:累计值的初始值为数组的第一项
          conunt = newArr[0];
          i = 1;
        }

        for(; i < len; i++) {
          conunt = funCb(conunt, newArr[i], i, newArr);
        }
        return conunt;
      }

      /**
       * 
       * @param {*} arr 数组
       * @param {*} funCb (上一次的累加值,本次循环项, 本次索引, 数组) 回调函数
       * @param {*} memo 初始值
       */
      return function(arr, funCb, memo = 0) {
        let newArr = arr;
        if(isRight) {
          newArr.reverse();
        }
        return reducer(newArr, funCb, memo = 0)
      }
    };

    reduce = createReduce(false);
    reduceRight = createReduce(true);
    ```
