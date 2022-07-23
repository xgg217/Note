# import

## import 命令

  - 使用 `export` 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 `import` 命令加载这个模块。

    ```javascript
    // main.js
    import {firstName, lastName, year} from './profile.js';
    function setName(element) {
      element.textContent = firstName + ' ' + lastName;
    }
    ```

  - 上面代码的 `import` 命令，用于加载 `profile.js` 文件，并从中输入变量。`import` 命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

  - 如果想为输入的变量重新取一个名字，`import` 命令要使用 `as` 关键字，将输入的变量重命名。

    ```javascript
    import { lastName as surname } from './profile.js';
    ```

  - `import` 命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

    ```javascript
    import {a} from './xxx.js'
    a = {}; // Syntax Error : 'a' is read-only;
    ```

  - 上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。a的属性可以成功改写，并且其他模块也可以读到改写后的值。

  - 不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。

    ```javascript
    import {a} from './xxx.js'
    a.foo = 'hello'; // 合法操作
    ```

  - `import` 后面的 `from` 指定模块文件的位置，可以是相对路径，也可以是绝对路径，`.js` 后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

  - 注意，`import` 命令具有提升效果，会提升到整个模块的头部，首先执行。

    ```javascript
    // 本质是，import命令是编译阶段执行的，在代码运行之前。
    foo();
    import { foo } from 'my_module';
    ```

  - 由于 `import` 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

  - 下面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

    ```javascript
    // 报错
    import { 'f' + 'oo' } from 'my_module';
    ```

    ```javascript
    // 报错
    let module = 'my_module';
    import { foo } from module;
    ```

    ```javascript
    // 报错
    if (x === 1) {
      import { foo } from 'module1';
    } else {
      import { foo } from 'module2';
    }
    ```

  - 如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

    ```javascript
    // 代码加载了两次lodash，但是只会执行一次。
    import 'lodash';
    import 'lodash';
    ```

    ```javascript
    import { foo } from 'my_module';
    import { bar } from 'my_module';

    // 等同于
    import { foo, bar } from 'my_module';
    ```

## 模块的整体加载 \*

  - 除了指定加载某个输出值，还可以使用整体加载，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面。

## export default 命令

  - `export default` 匿名函数 时，对应的 `import` 语句**不需要**使用**大括号**；

    ```javascript
    // 默认输出
    // export-default.js
    export default function() {
        console.log('foo');
    }
    ```

    ```javascript
    // import命令可以为该匿名函数指定任意名字。
    import customName from './export-default';
    customName(); // 'foo'
    ```

  - `export default` 命令用在非匿名函数前，也是可以的。

    ```javascript
    // export-default.js
    export default function foo() {
        console.log('foo');
    }

    // 或者写成
    function foo() {
      console.log('foo');
    }

    export default foo;
    ```

  - 一个模块只能有一个默认输出，因此 `export default` 命令只能使用一次。所以， `import` 命令后面才不用加大括号，因为只可能唯一对应 `export default` 命令。

  - 本质上，`export default` 就是输出一个叫做 `default` 的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

    ```javascript
    // modules.js
    function add(x, y) {
      return x * y;
    }
    export {add as default};
    // 等同于
    export default add;

    // app.js
    import { default as foo } from 'modules';
    // 等同于
    import foo from 'modules';
    ```

  - 正是因为 `export default` 命令其实只是输出一个叫做 `default` 的变量，所以它后面不能跟变量声明语句。

    ```javascript
    // 正确
    export var a = 1;

    // 正确
    var a = 1;
    export default a;

    // 错误
    export default var a = 1;
    ```

  - `export default` 也可以用来输出类。

    ```javascript
    // MyClass.js
    export default class { ... }

    // main.js
    import MyClass from 'MyClass';
    let o = new MyClass();
    ```
