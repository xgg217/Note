# label

## 概述

+ 标记语句是任何带有标识符前缀的语句
+ 你可以使用嵌套在标记语句中的 `break` 或 `continue` 语句跳转到对应标记

## 语法

+ `label: statement`

  + 参数

    + label 任何不属于保留字的 JavaScript 标识符

    + statement JavaScript 语句

      + `break` 可以在任何标记语句中使用
      + `continue` 可以在标记的循环语句中使用

## break label

+ 如果在执行 statement 时遇到 `break label;` 语句，则 statement 执行终止，并继续执行标记的语句之后的语句

## continue label;

+ 只能在 statement 是循环语句时使用。如果在执行 statement 时遇到 `continue label;` 语句，则 statement 继续执行循环的下一次迭代

+ 不带标签的 continue; 语句只能继续最内层的循环，而 `continue label;` 语句可以继续任何给定的循环，即使该语句嵌套在其他循环中

## 示例之使用带标签的 break 语句

+ 使用带标签的 break 语句

  ```js
  // 从 1 到 100 的数字
  const items = Array.from({ length: 100 }, (_, i) => i + 1);
  const tests = [
    { pass: (item) => item % 2 === 0 },
    { pass: (item) => item % 3 === 0 },
    { pass: (item) => item % 5 === 0 },
  ];
  let allPass = true;

  itemIteration: for (const item of items) {
    for (const test of tests) {
      if (!test.pass(item)) {
        allPass = false;
        break itemIteration;
      }
    }
  }
  ```

+ 如果不使用标签，则需要使用布尔标志

  ```js
  // 从 1 到 100 的数字
  const items = Array.from({ length: 100 }, (_, i) => i + 1);
  const tests = [
    { pass: (item) => item % 2 === 0 },
    { pass: (item) => item % 3 === 0 },
    { pass: (item) => item % 5 === 0 },
  ];
  let allPass = true;

  for (const item of items) {
    let passed = true;
    for (const test of tests) {
      if (!test.pass(item)) {
        passed = false;
        break;
      }
    }
    if (!passed) {
      allPass = false;
      break;
    }
  }
  ```

