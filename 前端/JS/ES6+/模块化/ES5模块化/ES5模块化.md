# ES5模块化

## 概述

*   在ES6 之前的环境下实现模块效果

## 基本的实现方法

*   模块是实现特定功能的一组属性和方法的封装。

*   只要把不同的函数（以及记录状态的变量）简单地放在一起，就算是一个模块。

    ```javascript
    function m1() {
      //...
    }

    function m2() {
      //...
    }
    ```

*   这种做法的缺点很明显：”污染”了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

*   为了解决上面的缺点，可以把模块写成一个对象，所有的模块成员都放到这个对象里面。

    ```javascript
    var module1 = new Object({
    　_count : 0,
    　m1 : function (){
    　　//...
    　},
    　m2 : function (){
      　//...
    　}
    });
    ```

    ```javascript
    // 使用
    module1.m1();
    ```

*   缺点：这样的写法会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值。

    ```javascript
    module1._count = 5;
    ```

## 封装私有变量：构造函数的写法

*   利用构造函数，封装私有变量。

    ```javascript
    function StringBuilder() {
      var buffer = [];

      this.add = function (str) {
        buffer.push(str);
      };

      this.toString = function () {
        return buffer.join('');
      };

    }
    ```

*   这种方法将私有变量封装在构造函数中，违反了构造函数与实例对象相分离的原则。并且，非常耗费内存。

    ```javascript
    function StringBuilder() {
      this._buffer = [];
    }

    StringBuilder.prototype = {
      constructor: StringBuilder,
      add: function (str) {
        this._buffer.push(str);
      },
      toString: function () {
        return this._buffer.join('');
      }
    };
    ```

*   这种方法将私有变量放入实例对象中，好处是看上去更自然，但是它的私有变量可以从外部读写，不是很安全。

## 封装私有变量：立即执行函数的写法

*   使用“立即执行函数”（Immediately-Invoked Function Expression，IIFE），将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的。

    ```javascript
    var module1 = (function () {
    　var _count = 0;
    　var m1 = function () {
    　  //...
    　};
    　var m2 = function () {
    　　//...
    　};
    　return {
    　　m1 : m1,
    　　m2 : m2
    　};
    })();
    ```

*   外部代码无法读取内部的 `_count` 变量。

## 模块的放大模式

*   如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用“放大模式”（augmentation）。

    ```javascript
    var module1 = (function (mod){
    　mod.m3 = function () {
    　　//...
    　};
    　return mod;
    })(module1);
    ```

*   上面的代码为 `module1` 模块添加了一个新方法 `m3()` ，然后返回新的 `module1` 模块。

*   在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上面的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用”宽放大模式”（Loose augmentation）。

    ```javascript
    var module1 = ( function (mod){
    　//...
    　return mod;
    })(window.module1 || {});
    ```

## 输入全局变量

*   独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。

*   为了在模块内部调用全局变量，必须显式地将其他变量输入模块。

    ```javascript
    var module1 = (function ($, YAHOO) {
    　//...
    })(jQuery, YAHOO);
    ```

*   立即执行函数还可以起到命名空间的作用。

    ```javascript
    (function($, window, document) {

      function go(num) {
      }

      function handleEvents() {
      }

      function initialize() {
      }

      function dieCarouselDie() {
      }

      //attach to the global scope
      window.finalCarousel = {
        init : initialize,
        destroy : dieCouraselDie
      }

    })( jQuery, window, document );
    ```
