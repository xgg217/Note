# 尽早return

## 更少的嵌套，尽早 Return

- 常规

    ```js
    function test(fruit, quantity) {
      const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

      // 条件 1: fruit 必须有值
      if (fruit) {
        // 条件 2: 必须是red的
        if (redFruits.includes(fruit)) {
          console.log('red');

          // 条件 3: quantity大于10
          if (quantity > 10) {
            console.log('big quantity');
          }
        }
      } else {
        throw new Error('No fruit!');
      }
    }

    // 测试结果
    test(null); // error: No fruits
    test('apple'); // print: red
    test('apple', 20); // print: red, big quantity
    ```

- 当发现无效语句时，尽早 `return`

    ```js
    function test(fruit, quantity) {
      const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

      // 条件 1: 尽早抛出错误
      if (!fruit) throw new Error('No fruit!');
      // 条件 2: 当水果不是红色时停止继续执行
      if (!redFruits.includes(fruit)) return;

      console.log('red');

      // 条件 3: 必须是大质量的
      if (quantity > 10) {
        console.log('big quantity');
      }
    }
    ```
