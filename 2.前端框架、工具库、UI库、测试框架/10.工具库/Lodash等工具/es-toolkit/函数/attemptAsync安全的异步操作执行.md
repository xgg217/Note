# attemptAsync

## 概述

+ 尝试执行异步函数并返回包含结果或错误的元组

## 注意

+ attemptAsync是一个功能强大的错误处理工具，它采用Go语言风格的错误处理模式，让异步错误处理变得更加优雅和可预测
+ 对于同步函数，建议使用attempt函数代替

## 性能考虑

+ attemptAsync在性能方面经过优化：

  + 最小化的运行时开销：简单的try-catch包装
  + 无额外的Promise创建：直接使用原函数的Promise
  + 内存效率：避免创建不必要的闭包


## API

+ `function attemptAsync<T, E>(func: () => Promise<T>): Promise<[null, T] | [E, null]>;`

  ```js
  export async function attemptAsync<T, E>(
    func: () => Promise<T>
  ): Promise<[null, T] | [E, null]> {
    try {
      const result = await func();
      return [null, result];
    } catch (error) {
      return [error as E, null];
    }
  }
  ```

  ```
  核心特性
  特性                  描述                                   优势
  类型安全的错误处理      返回元组类型 [null, T] | [E, null]       编译时类型检查
  统一的错误处理模式      始终返回二元组结构                        代码一致性
  支持自定义错误类型      泛型参数E指定错误类型                     灵活的类型约束
  异步操作封装           自动处理Promise链                       简化异步流程
  ```

+ 参数

  + `func (() => Promise<T>)`: 尝试执行的异步函数

+ 返回值

  + (`Promise<[null, T] | [E, null]>`): 解析为以下元组的Promise:

    + 成功时: `[null, T]` - 第一个元素为null，第二个为结果
    + 出错时: `[E, null]` - 第一个元素为捕获的错误，第二个为 `null`

  ```js
  const [error, data] = await attemptAsync(async () => {
    const response = await fetch('/api/users');
    return response.json();
  });

  if (error) {
    console.error('请求失败:', error);
    return;
  }

  console.log('用户数据:', data);

  // 成功时返回 [null, 函数返回值] 元组
  // [null, 响应对象]

  // 出错时返回 [函数抛出的错误, null] 元组。
  // [Error, null]
  ```

  ```js
  // 使用泛型类型可以指定错误和返回值的类型。
  const [error, users] = await attemptAsync<User[], Error>(async () => {
    const response = await fetch('https://api.example.com/users');
    return response.json();
  });
  // `error` 被推断为 `Error` 类型，`users` 被推断为 `User[]` 类型。
  ```

## 与传统try-catch对比

+ 传统方式：

  ```js
  let data: User[] | null = null;
  let error: Error | null = null;

  try {
    const response = await fetch('/api/users');
    data = await response.json();
  } catch (err) {
    error = err as Error;
  }
  ```

+ 使用attemptAsync：

  ```js
  const [error, data] = await attemptAsync<User[]>(async () => {
    const response = await fetch('/api/users');
    return response.json();
  });
  ```

## asyncNoop和attemptAsync 组合使用

+ asyncNoop和attemptAsync可以组合使用，创建强大的异步处理模式：

  ```js
  // 安全的异步操作链
  async function safeOperationChain() {
    const [error1, result1] = await attemptAsync(async () => {
      // 第一步操作
      return await fetchFirstStep();
    });

    if (error1) {
      // 错误处理，使用asyncNoop作为占位符
      await (onErrorHandling || asyncNoop)();
      return null;
    }

    const [error2, result2] = await attemptAsync(async () => {
      // 依赖第一步结果的第二步操作
      return await processResult(result1);
    });

    return result2;
  }
  ```

## 使用场景

+ 带类型参数的用法

  ```js
  interface User {
    id: number;
    name: string;
  }

  const [error, users] = await attemptAsync<User[]>(async () => {
    const response = await fetch('/api/users');
    return response.json();
  });

  // users自动推断为User[]类型
  ```

+ 复杂异步流程

  ```js
  const [error, result] = await attemptAsync(async () => {
    // 多个异步操作组合
    const userData = await fetchUser();
    const preferences = await fetchPreferences(userData.id);
    const analytics = await trackUserAction(userData.id);

    return { user: userData, preferences, analytics };
  });
  ```

