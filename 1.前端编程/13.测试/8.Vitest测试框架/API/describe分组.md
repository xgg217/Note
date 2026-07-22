# describe 分组

## 概述

+ 最好的方式是一个工具函数对应一个测试套件
+ 每一个测试套件里面根据函数的参数来书写测试用例，一个参数对应一个测试用例

## API

+ 全局方法，不需要导入（仅限于测试文件中），直接就可以使用

  ```js
  describe(这个分组的描述，回调函数)

  function describe(
    name: string | Function,
    body?: () => unknown,
    timeout?: number
  ): void
  function describe(
    name: string | Function,
    options: SuiteOptions,
    body?: () => unknown,
  ): void
  ```

  ```js
  import { describe, expect, test } from 'vitest'

  const person = {
    isActive: true,
    age: 32,
  }

  describe('person', () => {
    test('person is defined', () => {
      expect(person).toBeDefined()
    })

    test('is active', () => {
      expect(person.isActive).toBeTruthy()
    })

    test('age limit', () => {
      expect(person.age).toBeLessThanOrEqual(32)
    })
  })
  ```
