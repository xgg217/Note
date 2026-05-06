# decimal.js

## 概述

+ JavaScript 提供十进制类型的任意精度数值

+ GitHub：GitHub - MikeMcl/decimal.js:

## 适用场景

+ 支付系统
+ 订单金额计算
+ 积分体系
+ 虚拟货币等

## 示例

+ 示例

  ```js
  import Decimal from'decimal.js';

  // 精确的金额计算
  const amount1 = new Decimal(0.1);
  const amount2 = new Decimal(0.2);
  const total = amount1.plus(amount2).toString();
  console.log(total); // "0.3"

  // 金融场景：四舍五入保留两位小数
  const productPrice = new Decimal(19.995);
  const finalPrice = productPrice.toDecimalPlaces(2);
  console.log(finalPrice.toString()); // "20.00"

  // 大数字运算（积分、虚拟币等）
  const userPoints = new Decimal('999999999999999999');
  const bonusPoints = new Decimal('1000000000000000000');
  const totalPoints = userPoints.plus(bonusPoints);
  console.log(totalPoints.toString()); // "1999999999999999999"
  ```

