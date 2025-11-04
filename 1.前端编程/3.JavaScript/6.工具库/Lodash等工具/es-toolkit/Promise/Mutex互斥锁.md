# Mutex 互斥锁

## 概述

+ 互斥锁（Mutex）用于确保异步任务在特定代码区域内一次只能执行一个
+ 当您想要防止多个异步任务同时执行时,可以使用 Mutex。在需要控制并发的情况下很有用,例如数据库连接、文件系统访问、API 调用限制等

## Mutex API

+ 确保多个异步任务不会同时执行,保持执行顺序

  ```js
  class Mutex {
    isLocked: boolean;

    acquire(): Promise<void>;
    release(): void;
  }
  ```

+ 属性

  + `isLocked` (boolean): 当前互斥锁是否被使用

    + true 表示已经有正在执行的异步任务

+ 方法

  + `acquire (() => Promise<void>)`: 获取互斥锁，执行异步任务，或者等待获取互斥锁
  + `release (() => void)`: 释放互斥锁，允许下一个等待的任务执行

## 示例

+ 示例

  ```js
  import { Mutex } from 'es-toolkit';

  const mutex = new Mutex();

  // API 调用限制示例
  async function callAPI() {
    await mutex.acquire();
    try {
      // 防止多个 API 调用同时发生
      const response = await fetch('/api/data');
      return response.json();
    } finally {
      mutex.release();
    }
  }

  // 文件系统访问示例
  async function writeToFile(data: string) {
    await mutex.acquire();
    try {
      // 防止同时对同一文件进行写入操作
      await fs.writeFile('data.txt', data);
      console.log('文件写入完成');
    } finally {
      mutex.release();
    }
  }

  // 即使同时调用多个任务,也会按顺序执行
  callAPI();
  callAPI(); // 等待第一个任务完成
  writeToFile(); // 等待前面的任务完成


  ```
