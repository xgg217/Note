# 动态执行JS

## 种类

+ eval
+ setTimeout
+ 创建 script 元素
+ 创建 Function 函数

## eval

+ 特点：同步、当前作用域

  ```js
  var a = 1;

  function exec(code) {
    var a = 2;
    eval(code)
  }

  exec('console.log("a", a)');
  console.log("sync")

  // 打印结果
  'a' 2
  'sync'
  ```

## setTimeout

+ 特点：同步、全局作用域

  ```js
  var a = 1;

  function exec(code) {
    var a = 2;
    setTimeout(code, 0)
  }

  exec('console.log("a", a)');
  console.log("sync")

  // 打印结果
  'sync'
  'a' 1
  ```

## 创建 script 元素

+ 特点: 同步、全局作用域

  ```js
  var a = 1;

  function exec(code) {
    var a = 2;
    const script = document.createElement("script");
    script.innerHTML = code;
    document.body.appendChild(script)
  }

  exec('console.log("a", a)');
  console.log("sync")

  // 打印结果
  'a' 1
  'sync'
  ```

## 创建 Function 函数

+ 特点: 同步、全局作用域

  ```js
  var a = 1;

  function exec(code) {
    var a = 2;
    const fn = new Function(code);
    fn();
  }

  exec('console.log("a", a)');
  console.log("sync")

  // 打印结果
  'a' 1
  'sync'
  ```
