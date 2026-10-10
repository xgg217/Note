# memoize

## 概述

+ 创建一个函数的备忘版本。备忘函数会基于接收到的参数缓存结果，因此如果再次传递相同的参数，它会返回缓存的结果，而不是重新计算

+ 这个功能适用于接受零个或一个参数的函数。如果你的函数接受多个参数，你应该将其重构为接受一个组合了这些参数的对象或数组

+ 如果参数不是原始类型（例如数组或对象），请提供一个 getCacheKey 函数来生成唯一的缓存键，以确保正确缓存

## API

+ API

  ```js
  function memoize<F extends (...args: any) => any>(
    fn: F,
    options: {
      cache?: MemoizeCache<any, ReturnType<F>>;
      getCacheKey?: (args: Parameters<F>[0]) => unknown;
    } = {}
  ): F & { cache: MemoizeCache<any, ReturnType<F>> };

  interface MemoizeCache<K, V> {
    set(key: K, value: V): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean | void;
    clear(): void;
    size: number;
  }
  ```

+ 参数

  + fn (F) - 要备忘的函数，它接受零个或一个参数
  + options: 备忘配置的可选项

    + options.cache (MemoizeCache<any, ReturnType<F>>): 用于存储结果的缓存对象。默认为一个新的 Map
    + options.getCacheKey ((args: A) => unknown): 可选函数，用于为每个参数生成唯一的缓存键

+ 返回

  + (F & { cache: MemoizeCache<any, ReturnType<F>> }): 备忘版本的函数，并带有一个额外的 cache 属性，用于暴露内部缓存

  ```js
  import { memoize, MemoizeCache } from 'es-toolkit/function';

  // 使用默认缓存的示例
  const add = (x: number) => x + 10;
  const memoizedAdd = memoize(add);

  console.log(memoizedAdd(5)); // 15
  console.log(memoizedAdd(5)); // 15 （缓存结果）
  console.log(memoizedAdd.cache.size); // 1

  // 使用自定义解析器的示例
  const sum = (arr: number[]) => arr.reduce((x, y) => x + y, 0);
  const memoizedSum = memoize(sum, { getCacheKey: (arr: number[]) => arr.join(',') });
  console.log(memoizedSum([1, 2])); // 3
  console.log(memoizedSum([1, 2])); // 3 （缓存结果）
  console.log(memoizedSum.cache.size); // 1

  // 使用自定义缓存实现的示例
  class CustomCache<K, T> implements MemoizeCache<K, T> {
    private cache = new Map<K, T>();
    set(key: K, value: T): void {
      this.cache.set(key, value);
    }
    get(key: K): T | undefined {
      return this.cache.get(key);
    }
    has(key: K): boolean {
      return this.cache.has(key);
    }
    delete(key: K): boolean {
      return this.cache.delete(key);
    }
    clear(): void {
      this.cache.clear();
    }
    get size(): number {
      return this.cache.size;
    }
  }
  const customCache = new CustomCache<string, number>();
  const memoizedSumWithCustomCache = memoize(sum, { cache: customCache });
  console.log(memoizedSumWithCustomCache([1, 2])); // 3
  console.log(memoizedSumWithCustomCache([1, 2])); // 3 （缓存结果）
  console.log(memoizedAddWithCustomCache.cache.size); // 1
  ```




## 使用场景

+ memoize函数在以下场景中特别有效：

  ```
  场景类型          优势            示例
  纯函数计算        避免重复计算      数学运算、转换函数
  API调用          减少网络请求      用户数据、配置信息
  渲染优化         避免重复渲染      React组件、模板生成
  数据转换         缓存转换结果      日期格式化、货币转换
  ```

+ 计算密集型函数优化

  ```js
  const fibonacci = memoize((n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });

  // 传统递归会导致指数级时间复杂度
  // 使用memoize后变为线性时间复杂度
  console.time('Fibonacci with memoization');
  console.log(fibonacci(40)); // 快速计算
  console.timeEnd('Fibonacci with memoization');
  ```

+ API调用缓存

  ```js
  const fetchUserData = memoize(async (userId: number) => {
    console.log(`Fetching user ${userId} from API...`);
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  });

  // 相同用户ID的请求只会发生一次
  const user1 = await fetchUserData(123);
  const user2 = await fetchUserData(123); // 从缓存获取
  ```

+ 自定义缓存实现：es-toolkit的memoize支持完全自定义的缓存实现，这在需要特殊缓存策略时非常有用：

  ```js
  class LRUCache<K, V> implements MemoizeCache<K, V> {
    private cache = new Map<K, V>();
    private maxSize: number;

    constructor(maxSize: number = 100) {
      this.maxSize = maxSize;
    }

    set(key: K, value: V): void {
      if (this.cache.size >= this.maxSize) {
        // 移除最久未使用的项
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      this.cache.set(key, value);
    }

    get(key: K): V | undefined {
      const value = this.cache.get(key);
      if (value) {
        // 更新访问顺序
        this.cache.delete(key);
        this.cache.set(key, value);
      }
      return value;
    }

    has(key: K): boolean { return this.cache.has(key); }
    delete(key: K): boolean { return this.cache.delete(key); }
    clear(): void { this.cache.clear(); }
    get size(): number { return this.cache.size; }
  }

  const memoizedWithLRU = memoize(expensiveFunction, {
    cache: new LRUCache<string, number>(50)
  });
  ```

+ 内存管理考虑：虽然memoize能显著提升性能，但也需要注意内存使用情况：

  ```js
  // 监控缓存大小
  const memoizedFn = memoize(expensiveFunction);
  console.log(`Cache size: ${memoizedFn.cache.size}`);

  // 定期清理缓存
  setInterval(() => {
    if (memoizedFn.cache.size > 1000) {
      memoizedFn.cache.clear();
      console.log('Cache cleared due to size limit');
    }
  }, 60000);

  // 手动管理缓存
  memoizedFn.cache.delete(specificKey);
  memoizedFn.cache.clear();
  ```
