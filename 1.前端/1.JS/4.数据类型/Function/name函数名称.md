# name函数名称

## 函数声明的名称

*   `name` 属性返回一个函数声明的名称

    ```javascript
    function doSomething() { }
    doSomething.name;  // "doSomething" 
    ```

## 推断函数名

*   变量和方法可以从句法位置推断匿名函数的名称（ECMAScript 2015中新增）

    ```javascript
    var f = function() {};
    var object = {
      someMethod: function() {}
    };

    console.log(f.name); // "f"
    console.log(object.someMethod.name); // "someMethod"
    ```

*   函数表达式中定义函数的名称

    ```javascript
    var object = {
      someMethod: function object_someMethod() {}
    };

    console.log(object.someMethod.name); // "object_someMethod"

    try { object_someMethod } catch(e) { alert(e); }
    // ReferenceError: object_someMethod is not defined
    ```

## 注意

*   不能更改函数的名称，此属性是只读

    ```javascript
    var object = {
      // anonymous
      someMethod: function() {}
    };

    object.someMethod.name = 'otherMethod';
    console.log(object.someMethod.name); // someMethod
    ```

*   要更改它，可以使用 `Object.defineProperty()`

## Symbol作为函数名称

*   如果 `Symbol` 被用于函数名称，并且这个 `symbol` 具有相应的描述符，那么方法的名字就是方括号中的描述符

    ```javascript
    var sym1 = Symbol("foo"); 
    var sym2 = Symbol(); 
    var o = { 
      [sym1]: function(){}, 
      [sym2]: function(){} 
    }; 

    o[sym1].name; // "[foo]"
    o[sym2].name; // "
    ```
