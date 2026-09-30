# random

## 概述

+ 生成指定范围内的随机数
+ 该数可以是整数或小数

+ 如果只提供一个参数，则返回在 0 到给定数之间的随机数

## API

+ API

  ```js
  function random(maximum: number): number;
  function random(minimum: number, maximum: number): number;
  ```

  + 参数

    + minimum (number): 最小值(包括)
    + maximum (number):  最大值(不包括)。必须大于最小值

  + 返回值

    + (number): 返回指定范围内的随机小数

  + 错误 如果最大值小于或等于最小值,则抛出错误

  ```js
  import { random } from 'es-toolkit/math';

  // 生成0以上5以下的随机小数。
  const num1 = random(5);
  console.log(num1); // 例如: 2.718281828

  // 生成2以上10以下的随机小数。
  const num2 = random(2, 10);
  console.log(num2); // 例如: 7.158765432

  // 也可以用于负数范围。
  const num3 = random(-5, -1);
  console.log(num3); // 例如: -3.842134567

  // 小数范围也可以。
  const num4 = random(1.5, 2.5);
  console.log(num4); // 例如: 1.923456789
  ```

+ 如果范围无效,则抛出错误

  ```js
  import { random } from 'es-toolkit/math';

  // 如果最大值为0或更小,则发生错误。
  try {
    random(0);
  } catch (error) {
    console.error(error.message); // 'Invalid input: The maximum value must be greater than the minimum value.'
  }

  // 如果最小值大于或等于最大值,则发生错误。
  try {
    random(5, 3);
  } catch (error) {
    console.error(error.message); // 'Invalid input: The maximum value must be greater than the minimum value.'
  }
  ```
