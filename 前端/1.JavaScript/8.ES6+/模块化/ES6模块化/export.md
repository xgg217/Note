# export

## export 命令

  - `export` 命令用于规定模块的对外接口

  - `import` 命令用于输入其他模块提供的功能

  - 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取

  - 如果你希望外部能够读取模块内部的某个变量，就必须使用 `export` 关键字输出该变量

    ```javascript
    // 写法1
    // profile.js
    export const firstName = 'Michael';
    export function multiply(x, y) {
      return x * y;
    };
    ```

  - 使用 大括号 **一起输出**（**优先**考虑使用这种写法，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。）

    ```javascript
    // 写法2：
    // profile.js
    var firstName = 'Michael';
    var lastName = 'Jackson';
    var year = 1958;
    export {firstName, lastName, year};
    ```

  - `as` 重命名

    ```javascript
    // 使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次
    function v1() { ... }
    function v2() { ... }
    export {
      v1 as streamV1,
      v2 as streamV2,
      v2 as streamLatestVersion
    };
    ```

  - `export` 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

    ```javascript
    // 报错——写法通过变量m，还是直接输出 1
    var m = 1;
    export m;

    // 正确写法1
    var m = 1;
    export {m};

    // 正确写法2（重命名）输出 m
    var n = 1;
    export {n as m};
    ```

  - 函数

    ```javascript
    // 错误写法
    function f() {}
    export f;

    // 正确写法1
    export function f() {};

    // 正确写法2
    function f() {}
    export {f};
    ```

  - `export` 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值

    ```javascript
    // 代码输出变量foo，值为bar，500 毫秒之后变成baz
    export var foo = 'bar';
    setTimeout(() => foo = 'baz', 500);
    ```

  - `export` 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，`import` 命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷

    ```javascript
    function foo() {
      export default 'bar' // SyntaxError
    }
    foo();
    ```

## 默认导出

  - `export default`

    ```javascript
    export default 'bar'
    ```
