# ES6与CommonJS

## 1. 输出结果

+ CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

+ CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值

    ```js
    // lib.js
    var counter = 3;
    function incCounter() {
      counter++;
    }
    module.exports = {
      counter: counter,
      incCounter: incCounter,
    };
    ```

    ```js
    // main.js
    var mod = require('./lib');

    console.log(mod.counter);  // 3
    mod.incCounter();
    console.log(mod.counter); // 3
    ```

    ```js
    // lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值
    // lib.js
    var counter = 3;
    function incCounter() {
      counter++;
    }
    module.exports = {
      get counter() {
        return counter
      },
      incCounter: incCounter,
    };

    // 3
    // 4
    ```

## 运行机制

+ ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 `import` 有点像 Unix 系统的“符号连接”，原始值变了，`import` 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块

    ```js
    // lib.js
    export let counter = 3;
    export function incCounter() {
      counter++;
    }

    // main.js
    import { counter, incCounter } from './lib';
    console.log(counter); // 3
    incCounter();
    console.log(counter); // 4
    ```

    ```js
    // m1.js
    export var foo = 'bar';
    setTimeout(() => foo = 'baz', 500);

    // m2.js
    import {foo} from './m1.js';
    console.log(foo);
    setTimeout(() => console.log(foo), 500);

    // bar
    // baz
    ```

+ CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

  + 因为 CommonJS 加载的是一个对象（即 `module.exports` 属性），该对象只有在脚本运行完才会生成

  + 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
