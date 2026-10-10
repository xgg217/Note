# Curry 柯里化

## chain

+ 创建一个按顺序运行的函数链
+ 链接函数将导致它们一个接一个地执行，将每个函数的输出作为下一个函数的输入传递，并在链的末尾返回最终输出

## compose

+ 创建函数组合
+ 在函数组合中，每个函数都会被赋予下一个函数作为参数，并且必须调用它才能继续执行

  ```js
  import { compose } from 'radash'

  const useZero = (fn: any) => () => fn(0)
  const objectize = (fn: any) => (num: any) => fn({ num })
  const increment = (fn: any) => ({ num }: any) => fn({ num: num + 1 })
  const returnArg = (arg: any) => (args: any) => args[arg]

  const composed = compose(
    useZero,
    objectize,
    increment,
    increment,
    returnArg('num')
  )

  composed() // => 2
  ```

  ```js
  // 等效
  const decomposed = (
    useZero(
      objectize(
        increment(
          increment(
            returnArg('num')))))
  )

  decomposed() // => 2
  ```

## memo 记忆函数

+ 记住一个函数
+ 用memo 包装一个函数，以获取一个自动返回已计算值的函数

## partial

+ 创建部分函数
+ 通过提供给定函数所需的部分或全部参数来创建部分函数

## partob

+ 现代 JS 结构意味着许多开发人员、库和框架都选择待用包含参数的单个对象的一元函数
+ `_.partob` 函数让您可以分解这些一元函数

## proxied

+ 创建动态代理对象
+ JS 的 Proxy 对象功能强大，但使用起来有点尴尬
+ `_.proxied` 函数为您创建代理，并在调用代理上的函数或访问属性时处理对处理程序的回调

  ```js
  import { proxied } from 'radash'

  type Property = 'name' | 'size' | 'getLocation'

  const person = proxied((prop: Property) => {
    switch (prop) {
      case 'name':
        return 'Joe'
      case 'size':
        return 20
      case 'getLocation'
        return () => 'here'
    }
  })

  person.name // => Joe
  person.size // => 20
  person.getLocation() // => here
  ```

+ 源码

  ```js
  export const proxied = <T, K>(
    handler: (propertyName: T) => K
  ): Record<string, K> => {
    return new Proxy(
      {},
      {
        get: (target, propertyName: any) => handler(propertyName)
      }
    )
  }
  ```

## throttle 节流

+ 创建一个受限制的回调函数
+ 接收一个带有间隔的选项对象和一个在调用时调用的源函数
+ 当调用返回的函数时，只有在经过间隔毫秒的时间后它才会调用源函数。否则它将忽略该调用

## debounce 防抖

+ 创建一个防抖回调函数
