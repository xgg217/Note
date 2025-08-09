# isNil

## 概述

+ 检查给定的值是否为 null 或 undefined。

+ 该函数测试提供的值是否为 null 或 undefined。

+ 如果值为 null 或 undefined，则返回 true；否则返回 false。

+ 该函数在 TypeScript 中还可以作为类型谓词，将参数的类型缩小为 null 或 undefined

## API

+ `function isNil(x: unknown): x is null | undefined;`
