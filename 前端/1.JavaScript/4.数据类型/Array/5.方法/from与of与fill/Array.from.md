# Array.from

## 作用

  - 用于将类似数组的对象（array-like object）和可遍历（`iterable`）的对象（包括 ES6 新增的数据结构 `Set` 和 `Map`）转为真正的数组

    ```js
    // 类数组
    let arrayLike = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      length: 3
    };

    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
    ```

## 第二个参数

  - `Array.from` 还可以接受第二个参数，作用类似于数组的 `map` 方法，用来对每个元素进行处理，将处理后的值放入返回的数组

    ```js
    Array.from(arrayLike, x => x * x);
    // 等同于
    Array.from(arrayLike).map(x => x * x);

    Array.from([1, 2, 3], (x) => x * x)
    // [1, 4, 9]
    ```

    ```js
    Array.from({ length: 2 }, () => 'jack')
    // ['jack', 'jack']
    ```

## 快速初始化

  - 代码

    ```js
    const arr = Array.from({ length: 10 }, (x, i) => {
      return i
    });
    console.log(arr); // [0, 1, 2, 3, 4,5, 6, 7, 8, 9]
    ```
