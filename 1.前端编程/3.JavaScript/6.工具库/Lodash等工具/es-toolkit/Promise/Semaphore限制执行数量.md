# Semaphore 限制同时执行的异步任务数量

## api

+ 参数

  + capacity `number` 以同时执行的任务的最大数量。必须是大于 1 的整数

+ 属性

  + capacity (number): 可以同时执行的任务的最大数量。
  + available (number): 当前可用的许可数量。如果为 0,表示所有许可都在使用中

+ 方法

  + acquire (() => Promise<void>): 获取许可并执行异步任务,或等待直到获得许可
  + release (() => void): 归还许可,使等待中的下一个任务可以执行

  ```js
  import { Semaphore } from 'es-toolkit';

  const semaphore = new Semaphore(3);

  // API 调用限制示例(最多同时执行 3 个)
  async function callAPI(id: number) {
    await semaphore.acquire();
    try {
      console.log(`开始 API 调用: ${id}`);
      const response = await fetch(`/api/data/${id}`);
      return response.json();
    } finally {
      semaphore.release();
      console.log(`API 调用完成: ${id}`);
    }
  }

  // 文件下载限制示例
  async function downloadFile(url: string) {
    await semaphore.acquire();
    try {
      console.log(`开始下载: ${url}`);
      // 文件下载逻辑
      await fetch(url);
    } finally {
      semaphore.release();
      console.log(`下载完成: ${url}`);
    }
  }

  // 即使同时调用 5 个任务,也最多只能同时执行 3 个
  callAPI(1);
  callAPI(2);
  callAPI(3);
  callAPI(4); // 等待前面的任务之一完成
  callAPI(5); // 等待前面的任务之一完成
  ```

+ 批量处理并发

  ```js
  const semaphore = new Semaphore(3);

  const results = await Promise.all(
    arr.map(async (item) => {
      await semaphore.acquire();
      try{
        return await api(item)
      } finally {
        semaphore.release();
      }
    })
  )
  ```
