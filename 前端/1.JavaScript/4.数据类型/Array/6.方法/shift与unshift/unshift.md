# unshift

## 作用

+ `unshift` 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度

    ```js
    var a = ['a', 'b', 'c'];

    a.unshift('x'); // 4
    a // ['x', 'a', 'b', 'c']
    ```

+ `unshift` 方法可以在数组头部添加多个元素

    ```js
    var arr = [ 'c', 'd' ];
    arr.unshift('a', 'b') // 4
    arr // [ 'a', 'b', 'c', 'd' ]
    ```

## 注意

+ 会改变原数组
