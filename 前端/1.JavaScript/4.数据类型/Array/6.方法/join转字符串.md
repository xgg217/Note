# join

## 作用

+ `join` 方法以参数作为分隔符，将所有数组成员组成一个字符串返回

+ 如果不提供参数，**默认用逗号**分隔

    ```js
    var a = [1, 2, 3, 4];

    a.join(' ') // '1 2 3 4'
    a.join(' | ') // "1 | 2 | 3 | 4"
    a.join() // "1,2,3,4"
    ```

## 注意

+ 如果 `arr.length` 为0，则返回空字符串

+ 不会改变数组

## 类数组

+ join方法也可以用于类似数组的对象

    ```js
    var obj = { 0: 'a', 1: 'b', length: 2 };
    Array.prototype.join.call(obj, '-')
    // 'a-b'
    ```

## String.prototype.split()

+ 字符串方法 `split` ，将字符串转成数组
