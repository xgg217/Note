# switch

## 结构

  - 多个 `if...else` 连在一起使用的时候，可以转为使用更方便的 `switch` 结构

  - 根据变量 `fruit` 的值，选择执行相应的 `case`

  - 如果所有 `case` 都不符合，则执行最后的 `default` 部分

    ```js
    switch (fruit) {
      case "banana":
        // ...
        break;
      case "apple":
        // ...
        break;
      default:
        // ...
    }
    ```

## 注意

1.  每个 `case` 代码块内部的 `break` 语句不能少，否则会接下去执行下一个 `case` 代码块，而不是跳出 `switch` 结构

2.  在比较运行结果时，采用的是**严格相等运算符**（ `===`），而不是相等运算符（`==`），这意味着比较时不会发生类型转换

    ```js
    var x = 1;

    switch (x) {
      case true:
        console.log('x发生类型转换');
      default:
        console.log('x没有发生类型转换');
    }
    // x没有发生类型转换
    ```

## 改进

  - `switch...case` 结构要求，在每一个 `case` 的最后一行必须是 `break` 语句，否则会接着运行下一个 `case`

  - 这样不仅容易忘记，还会造成代码的冗长

  - 而且，`switch...case` 不使用大括号，不利于代码形式的统一

  - 此外，这种结构类似于 `goto` 语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则

    ```js
    // 原始
    function doAction(action) {
      switch (action) {
        case 'hack':
          return 'hack';
          break;
        case 'slash':
          return 'slash';
          break;
        case 'run':
          return 'run';
          break;
        default:
          throw new Error('Invalid action.');
      }
    }
    ```

    ```js
    // 改进
    function doAction(action) {
      var actions = {
        'hack': function () {
          return 'hack';
        },
        'slash': function () {
          return 'slash';
        },
        'run': function () {
          return 'run';
        }
      };

      if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action.');
      }

      return actions[action]();
    }
    ```

  - 建议避免使用 `switch...case` 结构，用对象结构代替
