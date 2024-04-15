# readonly

## 概述

+ 除了修饰符可选符号(?)之外，还可以使用readonly修饰符把字段标记为只读

  ```js
  let user: {
    readonly name: string
    age: number
  } = {
    name: 'jack',
    age: 18
  }
  user.age = 19;
  user.name = 'tom'; //error 无法为 "name" 赋值，因为它是只读属性
  ```
