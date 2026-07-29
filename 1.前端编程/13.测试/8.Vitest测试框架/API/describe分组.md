# describe 分组

## 概述

+ 最好的方式是一个工具函数对应一个测试套件
+ 每一个测试套件里面根据函数的参数来书写测试用例，一个参数对应一个测试用例

## describe

+ 全局方法，不需要导入（仅限于测试文件中），直接就可以使用
+ 用 describe 将相关测试分组，使测试结构更清晰，并可以共享生命周期钩子

+ describe(name, fn)

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

## describe.skip



## describe.only

+ `describe.only` 是 `describe` 的"独占模式"变体
+ 当你用 `describe.only` 包裹一个测试分组时，只有这个分组及其子分组中的测试会被执行，其他所有测试（包括同一文件和其他文件）都会被跳过

  ```js
  import { describe, test, expect } from 'vitest'

  describe.only('只运行这个分组', () => {
    test('这个测试会运行', () => {
      expect(1 + 1).toBe(2)
    })

    test('这个也会运行', () => {
      expect(2 + 2).toBe(4)
    })
  })

  describe('普通分组', () => {
    test('这个会被跳过', () => {
      expect(3 + 3).toBe(6)
    })
  })
  ```

+ describe.only 在嵌套分组中会覆盖父级的普通 describe，但如果有多个 describe.only，它们都会被运行

  ```js
  describe('外层普通分组', () => {
    describe.only('内层独占分组', () => {
      test('运行 ✅', () => {})
    })

    describe('另一个内层分组', () => {
      test('跳过 ❌', () => {})
    })
  })
  ```

+ 当 describe.only 存在时，文件顶层的普通 test 也会被跳过：

  ```js
  test('文件顶层的测试 - 跳过 ❌', () => {})

  describe.only('独占分组', () => {
    test('运行 ✅', () => {})
  })

  test('另一个顶层测试 - 跳过 ❌', () => {})
  ```

+ 多个 describe.only 可以同时存在，它们都会被运行

  ```js
  describe.only('分组 A', () => {
    test('运行 A1 ✅', () => {})
    test('运行 A2 ✅', () => {})
  })

  describe.only('分组 B', () => {
    test('运行 B1 ✅', () => {})
  })

  describe('普通分组 C', () => {
    test('跳过 ❌', () => {})
  })
  ```

+ 与 test.only 共存:如果 test.only 在 describe.only 内部，行为正常；如果在外部，test.only 会覆盖 describe.only 的限制

  ```js
  describe.only('独占分组', () => {
    // 这些都会运行，即使没有 test.only
    test('运行 ✅', () => {})
    test('运行 ✅', () => {})
  })

  // 但如果有全局 test.only，它会覆盖
  test.only('这个会运行 ✅', () => {})
  // 这个文件的其他测试仍然被跳过
  ```

## describe.concurrent










