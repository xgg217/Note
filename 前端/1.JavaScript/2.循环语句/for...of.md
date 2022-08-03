# for...of

## 作用

  - `for...of` 循环可以使用的范围包括数组、`Set` 和 `Map` 结构、某些类似数组的对象（比如 `arguments` 对象、`DOM NodeList` 对象）、后文的 `Generator` 对象，以及字符串。

## 循环数组

  - 如果你不想修改语句块中的变量 , 也可以使用 `const` 代替 `let`

    ```javascript
    let iterable = [10, 20, 30];

    for (let value of iterable) {
      value += 1;
      console.log(value);
    }
    // 11
    // 21
    // 31
    ```

  - 获取数组的索引，可以借助数组实例的 `entries` 方法和 `keys` 方法

    ```javascript
    var arr = ['a', 'b', 'c', 'd'];
    for (let [index, item] of arr.entries()) {
      console.log(index); // 0 1 2 3
      console.log(item); // a b c d
    }
    ```

## 迭代 String

  - 迭代

    ```javascript
    let iterable = "boo";

    for (let value of iterable) {
      console.log(value);
    }
    // "b"
    // "o"
    // "o"
    ```

## 终止循环

  - 可以由 `break`、`throw`、`continue` 或 `return` 终止。

  - 在这些情况下，迭代器关闭\\

    ```javascript
    function* foo(){
      yield 1;
      yield 2;
      yield 3;
    };

    for (let o of foo()) {
      console.log(o);
      break; // closes iterator, triggers return
    }
    ```
