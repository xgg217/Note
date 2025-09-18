# 大小写转换

## String.prototype.toLowerCase() 转换为小写

+ String 的 toLowerCase() 方法将该字符串转换为小写形式

+  不会影响字符串 str 本身的值

  ```js
  console.log("ALPHABET".toLowerCase()); // 'alphabet'
  ```

  ```js
  const sentence = "The quick brown fox jumps over the lazy dog.";

  console.log(sentence.toLowerCase());
  // Expected output: "the quick brown fox jumps over the lazy dog."
  ```

## String.prototype.toUpperCase() 转换为大写

+ String 的 toUpperCase() 方法将该字符串转换为大写形式

+ 不会影响字符串本身的值

  ```js
  const sentence = "The quick brown fox jumps over the lazy dog.";

  console.log(sentence.toUpperCase());
  // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
  ```

  ```js
  console.log("alphabet".toUpperCase()); // 'ALPHABET'
  ```

+ 也可以将布尔值或数组转为大写字符串，但是需要通过 `call` 方法使用

  ```js
  String.prototype.toUpperCase.call(true)
  // 'TRUE'
  String.prototype.toUpperCase.call(['a', 'b', 'c'])
  // 'A,B,C'
  ```

## String.prototype.toLocaleLowerCase() 转换为小写

+ String 的 toLocaleLowerCase() 方法会根据特定区域设置的大小写映射规则，将字符串转换为小写形式并返回

+ API

  + `toLocaleLowerCase()`
  + `toLocaleLowerCase(locales)`

  ```js
  const dotted = "İstanbul";

  console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
  // Expected output: "i̇stanbul"

  console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
  // Expected output: "istanbul"
  ```

## String.prototype.toLocaleUpperCase() 转换为大写

+ String 的 toLocaleUpperCase() 方法会根据特定区域设置的大小写映射规则，将字符串转换为大写形式并返回
