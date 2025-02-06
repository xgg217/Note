# Emoji 验证

## 概述

+ 在处理 Emoji 时，验证输入是否包含有效的 Emoji 字符是一个常见的需求
+ 这可以通过多种方式实现，包括正则表达式以及使用专门的库来帮助识别和验证 Emoji

## 方式1 正则表达式

+ Emoji 是 Unicode 字符，因此可以使用正则表达式来匹配它们
+ 然而，由于 Emoji 的种类繁多，并且新的 Emoji 不断被添加到 Unicode 标准中，编写一个全面的正则表达式可能会比较复杂


  ```js
  const emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/gu;

  const text = "Hello 🤦🏻‍♂️ 👨‍👩‍👧! How are you?";

  // 提取所有匹配的 Emoji
  const matches = text.match(emojiRegex);

  if (matches) {
      console.log('Matches:', matches); // 输出: ["🤦🏻‍♂️", "👨‍👩‍👧"]
  } else {
      console.log('No emojis found.');
  }

  // 验证是否包含 Emoji
  const hasEmoji = emojiRegex.test(text);
  console.log('Contains emoji:', hasEmoji); // 输出: true
  ```

+ 注意

  + 当使用正则表达式处理包含超出 BMP 的 Unicode 字符（如 Emoji）的字符串时，就需要使用 `u` 修饰符
  + `u` 修饰符的主要作用是开启 Unicode 模式，让正则表达式能够正确处理超过 `\uFFFF` 的 Unicode 字符
  + 在 JavaScript 里，字符串中的字符默认以 UTF-16 编码存储，基本多文种平面（BMP）内的字符可以用一个 16 位的编码单元表示，但超出 BMP 的字符需要用两个 16 位的编码单元（代理对）来表示
  + 在没有 `u` 修饰符的情况下，正则表达式会将代理对拆分成两个单独的编码单元进行处理；而使用 u 修饰符后，正则表达式能将代理对视为一个整体，从而正确匹配和处理这些字符

## 方式2 emoji-regex

+ emoji-regex 是一个专门用于匹配 Emoji 的 JavaScript 库
+ 它可以准确地识别和匹配各种类型的 Emoji
