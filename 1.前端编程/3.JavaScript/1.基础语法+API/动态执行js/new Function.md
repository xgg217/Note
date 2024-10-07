# new Function

## 语法

+ `let func = new Function ([arg1, arg2, ...argN], functionBody);` 函数是通过使用参数 arg1...argN 和给定的 `functionBody` 创建

  + 参数 由于历史原因，new Function 中的参数也可以按逗号分隔符的形式给出

    ```js
    new Function('a', 'b', 'return a + b'); // 基础语法
    new Function('a,b', 'return a + b'); // 逗号分隔
    new Function('a , b', 'return a + b'); // 逗号和空格分隔
    ```

  + 返回值 实际上返回的是一个匿名函数（就是你传入的函数体）

+ 调用 Function 时可以使用或不使用 `new` ，两者都会创建一个新的 Function 实例

  ```js
  // 举例 1：带有两个参数的函数：

  let sum = new Function('a', 'b', 'return a + b');

  alert( sum(1, 2) ); // 3

  // 举例 2：一个没有参数的函数，自由函数体
  let sayHi = new Function('alert("芝士")');

  sayHi(); // Hello

  // 没有参数的函数，new Function 被调用后，可以在事后自己调用我们创建的函数了
  const sumOfArray = new Function(
    "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
  )();

  // 调用函数
  sumOfArray([1, 2, 3, 4]);
  // 10
  ```

+ `new Function` 实际上返回的是一个匿名函数（就是你传入的函数体）

+ 这个匿名函数执行后，返回的是定义在其中的 `sumArray` 函数

+ 所以 `sumOfArray` 实际上是 `sumArray` ，当你调用 `sumOfArray([1, 2, 3, 4])` 时，相当于在调用 `sumArray([1, 2, 3, 4])`

## 构造函数中不一样的参数列表

+ 常被忽视的一个知识点，可能会造成错误
+ 在 JavaScript 中，Function 构造函数确实是一个特殊的情况，其中的最后一个参数是函数体（实际执行的代码），前面所有参数（除了最后一个）都是函数的参数名称

  ```js
  let func = new Function('a', 'b', 'return a + b');
  ```

  + `'a'` ：这是函数的第一个参数名
  + `'b'` ：这是函数的第二个参数名
  + `'return a + b'` ：这是函数的主体代码，也就是函数体

## new Function 函数体解析过程

+ 当大家使用 Function 构造函数时，JavaScript 引擎会对参数列表和函数体解析
+ 注意 JavaScript 引起不时行的检查。而是逐个解析

  1. 先解析参数列表：如果你传递了一个无效的参数列表（例如非法的字符或注释符号），引擎会立即抛出 SyntaxError，而不会继续解析函数体
  2. 再解析函数体：只有在参数列表解析成功之后，JavaScript 引擎才会继续解析函数体部分。如果函数体包含无效的 JavaScript 代码，同样会抛出 SyntaxError

    ```js
    // 传入 /* 作为参数名是非法的，原因是它是注释的开始符号，而参数名必须是有效的 JavaScript 标识符
    // 这会直接抛出 SyntaxError: Unexpected token '/*'，因为 /* 不是有效的标识符
    new Function("/*", "return 1;");
    ```

+ 传入的参数无效，整个解析过程第一步就失败了，不会继续检查函数体
+ 如果参数列表是合法的，才会继续解析函数体。例如

  ```js
  new Function("a", "return a + 1;"); // 合法，成功创建函数
  ```

+ 可以防止类似注入的尝试

  + 基于上面 JavaScript 引擎解析的逻辑，这种解析方式确保了逐步验证的过程，可以防止通过传递非法参数或函数体的方式进行代码注入攻击
  + 比如，不允许通过参数注入注释符号 /* 来破坏整个函数的结构。也就在一定程度上防止代码注入的逻辑

## new Function 不太合适的场景和弊端注意点












