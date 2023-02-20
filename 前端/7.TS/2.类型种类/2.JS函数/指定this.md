# 指定this

## 概述

+ 定义函数的时候不能使用 箭头函数(`() => {}`)，解决办法就是使用普通函数定义方式 `function() {}`

  ```js
  type Person = {
    us: string,
    age: number
  }
  type FnWithThis = (this:Person, name:string) => void

  const sayHi:FnWithThis = () =>  {
    console.log(this.us) // 报错 对象可能为“未定义”
  }

  // 解决办法 使用 function() {}
  const sayHi:FnWithThis = function()  {
    console.log(this.us) // 对象可能为“未定义”
  }
  ```

## 示例

+ 示例1

  ```js
  type FnWithThis = (this:Person, name:string) => void
  type Person = {
    us: string,
    age: number,
    sayHi: FnWithThis
  }

  const sayHi:FnWithThis = function()  {
    console.log(this.us) // 对象可能为“未定义”
  }

  const x:Person = {
    us: 'John',
    age: 25,
    sayHi
  }

  // 调用方式1
  x.sayHi('xgg') // John

  // 调用方式2
  sayHi.call(x, 'xgg') // John
  ```
