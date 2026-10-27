# asyncio 核心 API

## sleep —— 非阻塞等待

+ 回顾之前在 `async_delay.py` 中，我们自己用 `loop.call_later` + `Future` 实现的延时：

  ```python
  def async_delay(duration: int):
      loop = asyncio.get_event_loop()
      future = loop.create_future()
      loop.call_later(duration, future.set_result, None)
      return future
  ```

+ 官方直接提供了 `asyncio.sleep`，用法完全相同：

  ```python
  async def main():
      print("开始")
      await asyncio.sleep(1)  # 挂起当前协程 1 秒，事件循环去调度其他协程
      print("1秒后")
  ```

## 创建与运行协程

+ 创建与运行协程

  ```python
  import asyncio


  async def say_hello():
      await asyncio.sleep(1)
      return "Hello"


  async def main():
      # 1. asyncio.run —— 最高层入口
      pass

  result = asyncio.run(say_hello())
  ```

## create_task —— 将协程包装成 Task 并调度执行

+ create_task

  ```python
  async def main():
      # 创建 Task，协程会立即被调度到事件循环中执行
      task = asyncio.create_task(say_hello())
      # 这里可以做别的事，task 已经在后台运行
      result = await task  # 等待 task 完成
      print(result)
  ```

## gather —— 并发执行多个协程

+ gather

  ```python
  async def fetch(url: str, delay: int) -> str:
      await asyncio.sleep(delay)
      return f"{url} 完成"


  async def main():
      # 同时发起多个请求，等待所有完成
      results = await asyncio.gather(
          fetch("url1", 2),
          fetch("url2", 1),
          fetch("url3", 3),
      )
      print(results)  # ['url1 完成', 'url2 完成', 'url3 完成']


  asyncio.run(main())
  ```

+ gather 的特点：

  - 所有协程**并发**执行
  - 返回结果顺序与传入顺序一致
  - 任何一个协程抛出异常，gather 会立即传播异常（其他协程仍会继续运行）
  - 可通过 `return_exceptions=True` 让异常以结果形式返回，不中断 gather

  ```python
  async def fail() -> str:
      raise ValueError("出错了")


  async def main():
      results = await asyncio.gather(
          fetch("ok", 1),
          fail(),
          return_exceptions=True,  # 将异常作为返回值，不抛出
      )
      print(results)  # ['ok 完成', ValueError('出错了')]
  ```

## wait —— 更灵活的等待方式

+ wait

  ```python
  import asyncio
  from typing import Coroutine


  async def main():
      tasks = [
          asyncio.create_task(fetch("A", 2)),
          asyncio.create_task(fetch("B", 1)),
          asyncio.create_task(fetch("C", 3)),
      ]

      # FIRST_COMPLETED: 任一完成就返回
      # FIRST_EXCEPTION: 任一异常就返回
      # ALL_COMPLETED: 全部完成（默认）
      done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
      print(f"已完成: {len(done)}, 待完成: {len(pending)}")

      # 还可以手动处理未完成的任务
      for task in pending:
          task.cancel()
  ```

## as_completed —— 谁先完成谁先处理

+ as_completed

  ```python
  async def main():
      coros = [fetch("A", 2), fetch("B", 1), fetch("C", 3)]

      for coro in asyncio.as_completed(coros):
          result = await coro
          print(result)  # 按照完成的先后顺序打印
  ```

## TaskGroup —— 结构化并发（Python 3.11+）

+ TaskGroup

  ```python
  async def main():
      # TaskGroup 保证所有子任务在退出前完成
      # 如果某个子任务异常，会取消组内所有其他任务
      async with asyncio.TaskGroup() as tg:
          task1 = tg.create_task(fetch("A", 2))
          task2 = tg.create_task(fetch("B", 1))
          task3 = tg.create_task(fetch("C", 3))

      # 到这里所有任务都已安全完成
      print(task1.result(), task2.result(), task3.result())
  ```

## Lock —— 互斥锁

+ 多个协程可能竞争共享资源，Lock 保证同一时刻只有一个协程能访问

  ```python
  import asyncio

  shared_data: int = 0
  lock = asyncio.Lock()


  async def safe_increment():
      global shared_data
      async with lock:  # 获取锁，等锁释放前其他协程会在此等待
          temp = shared_data
          await asyncio.sleep(0)  # 模拟耗时操作，此时切换协程也不会出问题
          shared_data = temp + 1


  async def main():
      await asyncio.gather(*[safe_increment() for _ in range(100)])
      print(shared_data)  # 100
  ```

## Event —— 事件通知

+ 一个协程等待另一个协程发出信号

  ```python
  async def waiter(event: asyncio.Event):
      print("waiter: 开始等待")
      await event.wait()  # 等待事件被设置
      print("waiter: 被唤醒")


  async def setter(event: asyncio.Event):
      print("setter: 1秒后设置事件")
      await asyncio.sleep(1)
      event.set()  # 设置事件，唤醒所有等待者


  async def main():
      event = asyncio.Event()
      await asyncio.gather(waiter(event), setter(event))
  ```

## Semaphore —— 限制并发数

+ Semaphore

  ```python
  semaphore = asyncio.Semaphore(3)  # 同时最多 3 个


  async def limited_fetch(url: str):
      async with semaphore:  # 超过并发限制时等待
          print(f"开始请求 {url}")
          await asyncio.sleep(1)
          print(f"完成请求 {url}")
          return url


  async def main():
      urls = [f"url{i}" for i in range(10)]
      await asyncio.gather(*[limited_fetch(url) for url in urls])
  ```

## Queue —— 异步队列

+ 生产者-消费者模式的基石

  ```python
  import random


  async def producer(queue: asyncio.Queue):
      for i in range(10):
          item = f"item_{i}"
          await queue.put(item)
          print(f"生产: {item}")
          await asyncio.sleep(random.random())
      await queue.put(None)  # 发送结束信号


  async def consumer(name: str, queue: asyncio.Queue):
      while True:
          item = await queue.get()
          if item is None:  # 收到结束信号
              queue.task_done()
              break
          print(f"{name} 消费: {item}")
          queue.task_done()


  async def main():
      queue = asyncio.Queue(maxsize=5)
      await asyncio.gather(
          producer(queue),
          consumer("C1", queue),
          consumer("C2", queue),
      )
  ```

## asyncio.wait_for

+ asyncio.wait_for

  ```python
  async def slow_operation():
      await asyncio.sleep(10)
      return "完成"


  async def main():
      try:
          result = await asyncio.wait_for(slow_operation(), timeout=2)
      except TimeoutError:
          print("操作超时了")
  ```

## asyncio.timeout（Python 3.11+）

+ asyncio.timeout

  ```python
  async def main():
      try:
          async with asyncio.timeout(2):
              result = await slow_operation()
      except TimeoutError:
          print("操作超时了")
  ```

## 在异步中运行同步代码

+ 在异步中运行同步代码

  ```python
  import time


  def blocking_io() -> str:
      time.sleep(0.5)  # 同步阻塞操作
      return "文件读取完成"


  def cpu_intensive() -> int:
      return sum(i * i for i in range(10_000_000))


  async def main():
      # to_thread：将同步阻塞函数放到线程池中执行
      result = await asyncio.to_thread(blocking_io)
      print(result)

      # run_in_executor：更底层，可以指定执行器
      loop = asyncio.get_running_loop()
      result = await loop.run_in_executor(None, cpu_intensive)
      print(result)
  ```
