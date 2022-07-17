# new

## new 意义

  - 对于实例对象来说，都是通过 `new` 产生的，无论是 `function Foo()` 还是 `let a = { b : 1 }` 。

  - 对于创建一个对象来说，更推荐使用字面量的方式创建对象（无论性能上还是可读性）。

  - 因为你使用 `new Object()` 的方式创建对象需要通过作用域链一层层找到 `Object`，但是你使用字面量的方式就没这个问题。

    ```javascript
    function Foo() {}
    // function 就是个语法糖
    // 内部等同于 new Function()
    ```

    ```javascript
    let a = { b: 1 }
    // 这个字面量内部也是使用了 new Object()
    ```

## new 的过程

1.  新生成了一个对象

2.  链接到原型

3.  绑定 `this`

4.  返回新对象

## 实现 new 操作

  - 代码

    ```javascript
    function create() {
      // 创建一个空的对象
      let obj = new Object()
      // 获得构造函数
      let Con = [].shift.call(arguments)
      // 链接到原型
      obj.__proto__ = Con.prototype
      // 绑定 this，执行构造函数
      let result = Con.apply(obj, arguments)
      // 确保 new 出来的是个对象
      return typeof result === 'object' ? result : obj
    }
    ```

## new\.target

  - 函数内部可以使用 `new.target` 属性。

  - 如果当前函数是 `new` 命令调用，`new.target` 指向当前函数，否则为 `undefined` 。

    ```javascript
    function f() {
      console.log(new.target === f);
    }

    f() // false
    new f() // true
    ```
