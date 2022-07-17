# 绑定 this

## 箭头函数绑定的规则

  - 箭头函数没有 `prototype` (原型)，所以箭头函数本身没有 `this`

    ```javascript
    const a = () =>{};

    console.log(a.prototype); // undefined
    ```

  - 绑定离自己最近的非**箭头函数**作用域中的 `this`，即箭头函数的 `this` 指向在定义的时候继承自外层第一个普通函数的 `this`

    ```javascript
    let a,
    barObj = {msg: 'bar的this指向'};
    fooObj = {msg: 'foo的this指向'};

    bar.call(barObj); // 将bar的this指向barObj
    foo.call(fooObj); // 将foo的this指向fooObj

    function foo() {
      a(); // 结果：{ msg: 'bar的this指向' }
    }

    function bar() {
      a = () => {
        console.log(this, 'this指向定义的时候外层第一个普通函数'); //
      }; // 在bar中定义 this继承于bar函数的this指向
    }
    ```

## 箭头函数外层没有普通函数

*   箭头函数外层没有普通函数，严格模式和非严格模式下它的 `this` 都会指向 `window`(全局对象)

    ```javascript
    const jt = () => {
      console.log(this); // window
    };
    jt();
    ```
