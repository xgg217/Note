# locales 参数

## 概述

+ locales 参数必须是一个 BCP 47 语言标记的字符串，或者是一个包括多个语言标记的数组。如果 locales 参数未提供或者是 undefined，便会使用运行时默认的 locale

  + BCP 47 https://datatracker.ietf.org/doc/html/rfc5646

+ 语言环境

  + 'zh-CN
  + en-US

  ```js
  const collator = new Intl.Collator('zh-CN');
  ```