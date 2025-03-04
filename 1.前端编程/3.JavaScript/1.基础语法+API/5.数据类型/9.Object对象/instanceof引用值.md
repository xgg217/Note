# instanceof引用值

## 使用

+ `instanceof` 是用来判断 A 是否为 B 的实例，表达式为：`A instanceof B`，如果 A 是 B 的实例，则返回 `true` ,否则返回 `false`

+ `instanceof` 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性

  ```js
  [] instanceof Array; //true
  {} instanceof Object;//true
  new Date() instanceof Date;//true
  new RegExp() instanceof RegExp//true
  ```

+ 默认情况下，每个对象都会继承自 `Object`，所以 每个对象的 `value instanceof Object` 都会返回 `true`

  ```js
  console.log(date instanceof Object); // true
  console.log(date instanceof Date); // true
  ```

+ `instanceof` 三大弊端

  1. 对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的是有一定的区别的

      ```js
      console.log(1 instanceof Number)//false
      console.log(new Number(1) instanceof Number)//true
      ```

  2. 不能检测 `null` 和 `undefined`

## instanceof 弊端

1. 对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的是有一定的区别的

    ```js
    console.log(1 instanceof Number)//false
    console.log(new Number(1) instanceof Number)//true
    ```

2. 不能检测 `null` 和 `undefined`
