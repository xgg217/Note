# isNaN

## API

+ `Number.isNaN(value)`

## Number.isNaN()

+ 用来检查一个值是否为 `NaN`

  ```js
  // ES5
  isNaN(NaN) // true
  isNaN("NaN") // true
  ```

+ 如果参数类型不是 `NaN`， `Number.isNaN` 一律返回 `false`

  ```js
  Number.isNaN(NaN) // true
  Number.isNaN("NaN") // false
  Number.isNaN(15) // false
  Number.isNaN('15') // false
  Number.isNaN(true) // false
  Number.isNaN(9/NaN) // true
  Number.isNaN('true' / 0) // true
  Number.isNaN('true' / 'true') // true
  ```

## Number.isNaN() 和全局 isNaN()

+ `Number.isNaN()` 不会尝试将参数转换为数字，因此非数字总是返回 `false`

  ```js
  Number.isNaN("NaN");
  Number.isNaN(undefined);
  Number.isNaN({});
  Number.isNaN("blabla");
  Number.isNaN(true);
  Number.isNaN(null);
  Number.isNaN("37");
  Number.isNaN("37.37");
  Number.isNaN("");
  Number.isNaN(" ");
  ```

+ 全局 `isNaN()` 函数会将参数强制转换为数字

  ```js
  isNaN("NaN"); // true
  isNaN(undefined); // true
  isNaN({}); // true
  isNaN("blabla"); // true
  isNaN(true); // false，强制转换为 1
  isNaN(null); // false，强制转换为 0
  isNaN("37"); // false，强制转换为 37
  isNaN("37.37"); // false，强制转换为 37.37
  isNaN(""); // false，强制转换为 0
  isNaN(" "); // false，强制转换为 0
  ```
