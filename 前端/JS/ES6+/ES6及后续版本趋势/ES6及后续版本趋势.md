# ES6及后续版本趋势

## ECMA 设计理念（设计目标）

*   不再设计全局函数,所以在后续定义新的方法，不在全局定义

    ```javascript
    // 例如
    isNaN();
    ...
    ```

*   不在 `Object.prototype` 上定义新的方法

    *   新方法采用**静态方法**，定义在 Object 上

## 实例方法和静态方法比较

*   示例

    ```javascript
    var Person=function(){};

    // 静态方法
    Person.say=function(){
      console.log('I am a Person,I can say.')
    };

    // 实例方法
    Person.prototype.getName=function(name){
      console.log('My name is '+name);
    };

    Person.say();
    Person.getName('Carl'); // 报错 Person.getName is not a function

    var carl=new Person;
    carl.say(); // 报错 carl.say is not a function
    carl.getName('Carl');
    ```
