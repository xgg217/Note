# randomInt

+ 生成指定范围内的随机整数

+ 如果只提供一个参数，则返回一个在 0 到给定数之间的随机整数

## API

+ API

  ```js
  function randomInt(maximum: number): number;
  function randomInt(minimum: number, maximum: number): number;
  ```

  + 参数

    + minimum (number): 最小值(包括)
    + maximum (number): 最大值(不包括)。必须大于最小值

  + 返回值

    + (number): 指定范围内的随机整数

  + 错误:如果最大值小于或等于最小值,则抛出错误

  ```js
  import { randomInt } from 'es-toolkit/math';

  // 生成0以上5以下的随机整数。
  const num1 = randomInt(5);
  console.log(num1); // 例如: 3

  // 生成2以上10以下的随机整数。
  const num2 = randomInt(2, 10);
  console.log(num2); // 例如: 7

  // 也可以用于负数范围。
  const num3 = randomInt(-5, -1);
  console.log(num3); // 例如: -3

  // 模拟骰子掷骰(1-6)
  const diceRoll = randomInt(1, 7);
  console.log(diceRoll); // 例如: 4

  // 从数组中选择随机索引
  const items = ['apple', 'banana', 'cherry', 'date'];
  const randomIndex = randomInt(items.length);
  console.log(items[randomIndex]); // 例如: 'banana'
  ```
