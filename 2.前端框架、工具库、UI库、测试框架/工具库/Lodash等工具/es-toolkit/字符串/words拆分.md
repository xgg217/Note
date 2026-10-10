# words

## 概述

+ 将字符串拆分为单词数组
+ 它可以识别 ASCII 和 Unicode 字符作为单词

## API

+ `function words(str: string): string[];`

+ 参数

  + str (string): 要拆分为单词的字符串

+ 返回值

  + (string[]): 从字符串中提取的单词数组

  ```js
  words('fred, barney, & pebbles');
  // => ['fred', 'barney', 'pebbles']

  words('camelCaseHTTPRequest🚀');
  // => ['camel', 'Case', 'HTTP', 'Request', '🚀']

  words('Lunedì 18 Set');
  // => ['Lunedì', '18', 'Set']
  ```
