# test

## test 或 it 定义测试用例

+ `test(name, fn, timeout?)`
+ `it(name, fn, timeout?)`

+ 定义单个测试用例
+ it 是 test 的别名，两者完全等价

  ```js
  import { test, it, expect } from 'vitest'

  // 基础用法
  test('加法应该正确', () => {
    expect(1 + 1).toBe(2)
  })

  // 使用 it 别名（更符合 BDD 风格）
  it('应该返回用户列表', async () => {
    const users = await fetchUsers()
    expect(users).toHaveLength(3)
  })

  // 指定超时时间（毫秒），默认 5000ms
  test('慢速测试', async () => {
    await slowOperation()
    expect(result).toBe('done')
  }, 10000) // 10 秒超时
  ```

## test.todo 待实现测试用例

+ `test.todo(name)`

+ 标记一个待实现的测试，不会执行，但在报告中会显示为 "todo" 状态
+ 非常适合先写测试大纲，再逐步实现

  ```js
  test.todo('应该处理空数组的情况')
  test.todo('应该验证邮箱格式')
  test.todo('应该支持分页查询')
  ```

## test.skip 跳过某个测试，不执行

+ 跳过某个测试，不执行
+ 适用于临时禁用某个测试（比如功能未完成或测试环境不满足）

+ `test.skip(name, fn)`

  ```js
  test.skip('这个功能还没实现', () => {
    expect(newFeature()).toBe(true)
  })

  // 条件跳过（运行时会判断）
  test('仅在 Node 环境运行', () => {
    if (typeof window !== 'undefined') {
      test.skip('浏览器环境跳过')
    }
    // ...
  })
  ```

## test.only 聚焦特定用例

+ `test.only(name, fn)`

  ```js
  test.only('只运行我', () => {
    expect(2 + 2).toBe(4)
  })

  test('这个会被跳过', () => {
    expect(1 + 1).toBe(2)
  })

  // 可以多个 only，都会运行
  test.only('另一个 also 运行', () => {
    expect(3 * 3).toBe(9)
  })
  ```

+ 注意

  + `test.only` 仅影响当前文件
  + 如果你在 CI 中意外提交了 only，可能导致其他测试未被运行。建议配合 lint 规则 no-only-tests 来防止

## test.concurrent 并发执行多个测试

+ 并发执行多个测试
+ 适合 I/O 密集型（如网络请求、数据库操作）的测试，可以大幅缩短总运行时间

  ```js
  // 这三个测试会并发执行
  test.concurrent('请求用户 A', async () => {
    const user = await fetchUser('A')
    expect(user.name).toBe('Alice')
  })

  test.concurrent('请求用户 B', async () => {
    const user = await fetchUser('B')
    expect(user.name).toBe('Bob')
  })

  test.concurrent('请求用户 C', async () => {
    const user = await fetchUser('C')
    expect(user.name).toBe('Charlie')
  })
  ```

+ 并发限制：默认并发数由 CPU 核心数决定，可以通过配置调整：

  ```js
  // vitest.config.js
  export default {
    test: {
      maxConcurrency: 5 // 最大并发数
    }
  }
  ```

## test.each

+ 参数化测试（数据驱动测试），用多组数据运行同一个测试逻辑

  ```js
  // 方式一：数组形式
  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 3, 5]
  ])('加法：%i + %i = %i', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })

  // 方式二：对象形式（更易读）
  test.each([
    { a: 1, b: 1, expected: 2 },
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 3, expected: 5 }
  ])('$a + $b = $expected', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
  })

  // 与 .only / .skip 组合
  test.skip.each([
    [1, 1, 2],
    [1, 2, 3]
  ])('跳过这些参数化测试', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })
  ```

+ 格式化占位符：

  + %s：字符串

  + %d：数字

  + %i：整数

  + %f：浮点数

  + %j：JSON

  + %o：对象

  + %#：序号（从 1 开始）
