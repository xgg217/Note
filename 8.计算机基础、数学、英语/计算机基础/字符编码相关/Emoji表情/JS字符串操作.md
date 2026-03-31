# 字符串操作

## 问题

在 JavaScript 中处理 Emoji 时，尤其是涉及字符串操作，存在一些常见的问题。

+ 代理对： 在 JavaScript 里，字符串中的每个字符通常以 16 位（即 2 个字节）来表示，这遵循的是 UTF-16 编码规则

  + 不过，Emoji 字符比较特殊，部分 Emoji 字符的编码超出了基本多文种平面（BMP），需要使用代理对来表示，也就是用两个 16 位编码单元来表示一个 Emoji 字符

  + 因此，普通的 `.length` 属性可能会返回不正确的字符数，因为它会将代理对视为两个字符。

  ```js
  const emoji = '😊';
  console.log(emoji.length); // 输出: 2 (而不是1)
  ```

+ 组合字符： 带有修饰符的 Emoji 可能由多个码点组成

  + 例如，👨‍👩‍👧 是由三个独立的 Emoji 组合而成的
  + 因此，在使用 `.length` 计算长度时，得到的结果是不准确的

  ```js
  const familyEmoji = '👨‍👩‍👧';
  console.log(familyEmoji.length); // 输出: 8 (而不是1)
  ```

+ 截断问题： JavaScript 中的 slice、substring 或 substr 方法会按照 16 位编码单元来截取字符串，当使用这些方式截断包含 Emoji 的字符串时，若在截取过程中恰好截断了一个代理对，就会产生乱码

  + 因为这些方法是无法正确处理代理对和组合字符的

  ```js
  const emojiStr = '😀😃😄';
  // 错误的截取，截断了代理对
  const wrongSubStr = emojiStr.slice(0, 1);
  console.log(wrongSubStr); // �
  ```

## 解决方式1 内置 API：Intl.Segmenter

+ ES2021 提供了 Intl.Segmenter，可以解决上面的问题，它是 ECMAScript 国际化 API 的一部分，用于根据语言和区域设置对字符串进行分割。它可以将文本分割成有意义的单元，如单词、句子或图元簇，从而更好地处理多语言文本

+ `Intl.Segmenter` 提供了以下分割方式：

  + `Grapheme Cluster` （图元簇）：将字符串分割为用户感知的字符单位。这对于处理复杂的 Unicode 字符（如 Emoji 和组合字符）非常有用

  + `Word` （单词）：将字符串分割为单词

  + `Sentence` （句子）：将字符串分割为句子

+ `Intl.Segmenter` 的基本用法如下：

  + 'en'：指定语言环境。可以根据需要更改为其他语言环境，如 'zh' 或 'fr'。

  + { granularity: 'grapheme' }：指定分割粒度，可以是 'grapheme'、'word' 或 'sentence'

  ```js
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
  ```

+ 在处理包含复杂 Unicode 字符（如 Emoji 和组合字符）的字符串时，确保准确计算字符数量

  ```js
  const segmenter = new Intl.Segmenter([], { granularity: 'grapheme' });
  const text = 'Hello 🤦🏻‍♂️ 👨‍👩‍👧!';
  const segments = Array.from(segmenter.segment(text));
  console.log(segments.length); // 输出: 10
  ```

## 方式2 第三方库：grapheme-splitter
