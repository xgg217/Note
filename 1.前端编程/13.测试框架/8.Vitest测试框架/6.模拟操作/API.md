# API

## 控制返回值

+ `mockReturnValue(value)` —— 设置固定返回值

  ```js
  const mockFn = vi.fn().mockReturnValue(42)

  expect(mockFn()).toBe(42)
  expect(mockFn()).toBe(42) // 每次都返回 42
  ```

+ `mockReturnValueOnce(value)` —— 设置单次返回值

  ```js
  const mockFn = vi.fn()
   .mockReturnValue(30) // 设置返回值为 30
    .mockReturnValueOnce(10) // 第一次调用模拟函数对应的返回值
    .mockReturnValueOnce(20); // 第二次调用模拟函数对应的返回值

  expect(mockFn()).toBe(10);
  expect(mockFn()).toBe(20);
  expect(mockFn()).toBe(30);
  expect(mockFn()).toBe(30); // 之后都返回默认值
  ```

+ `mockResolvedValue(value)` —— 返回成功的 Promise

  ```js
  const mockFn = vi.fn().mockResolvedValue({ data: 'success' })

  await expect(mockFn()).resolves.toEqual({ data: 'success' })
  ```

+ `mockResolvedValueOnce(value)` —— 单次成功的 Promise

  ````js
  const mockFn = vi.fn()
    .mockResolvedValueOnce('第一次')
    .mockResolvedValueOnce('第二次')

  await expect(mockFn()).resolves.toBe('第一次')
  await expect(mockFn()).resolves.toBe('第二次')
  ```

+ `mockRejectedValue(error)` —— 返回失败的 Promise

  ```js
  const mockFn = vi.fn().mockRejectedValue(new Error('网络错误'))

  await expect(mockFn()).rejects.toThrow('网络错误')
  ```

+ `mockRejectedValueOnce(error)` —— 单次失败的 Promise

  ```js
  const mockFn = vi.fn()
    .mockResolvedValueOnce('成功')
    .mockRejectedValueOnce(new Error('失败'))

  await expect(mockFn()).resolves.toBe('成功')
  await expect(mockFn()).rejects.toThrow('失败')
  ```

## 控制实现逻辑

+ `mockImplementation(fn)` —— 自定义实现

  ```js
  const mockFn = vi.fn().mockImplementation((name) => {
    return `Hello, ${name}!`
  })

  expect(mockFn('Alice')).toBe('Hello, Alice!')
  ```

+ `mockImplementationOnce(fn)` —— 单次自定义实现

  ```js
  const mockFn = vi.fn()
    .mockImplementationOnce(() => '第一次')
    .mockImplementationOnce(() => '第二次')
    .mockImplementation(() => '默认')

  expect(mockFn()).toBe('第一次')
  expect(mockFn()).toBe('第二次')
  expect(mockFn()).toBe('默认')
  ```

+ `mockReset()` —— 重置所有记录和实现

  ```js
  const mockFn = vi.fn().mockReturnValue(42)
  mockFn(1, 2)

  // 重置后：调用记录清空，返回值恢复为 undefined
  mockFn.mockReset()
  expect(mockFn).not.toHaveBeenCalled()
  expect(mockFn()).toBe(undefined)
  ```

+ `mockRestore()` —— 恢复原始实现（仅对 vi.spyOn 有效）

  ```js
  const obj = { method: (x) => x * 2 }
  const spy = vi.spyOn(obj, 'method').mockReturnValue(100)

  expect(obj.method(5)).toBe(100)

  spy.mockRestore() // 恢复原始实现
  expect(obj.method(5)).toBe(10) // 回到原始逻辑
  ```
