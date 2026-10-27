# APi

## Lock —— 互斥锁

`Lock` 确保同一时刻只有一个线程可以访问临界区，用锁修复上面的银行账户问题：

  ```python
  import threading
  import time


  class BankAccount:
      def __init__(self, balance):
          self.balance = balance
          self._lock = threading.Lock()


  def withdraw(account: BankAccount, amount: int, person_name: str):
      """取款函数 - 使用锁保证线程安全"""
      with account._lock:  # 获取锁，同一时刻只有一个线程能进入
          print(f"{person_name}: 查询余额，当前有 {account.balance} 元")

          if account.balance >= amount:
              print(f"{person_name}: 余额充足，开始取款...")
              time.sleep(0.1)
              account.balance -= amount
              print(f"{person_name}: ✓ 取款{amount}元成功！剩余 {account.balance} 元")
              return True
          else:
              print(f"{person_name}: ✗ 余额不足，取款失败")
              return False


  account = BankAccount(1000)

  person1 = threading.Thread(target=withdraw, args=(account, 800, "张三"))
  person2 = threading.Thread(target=withdraw, args=(account, 800, "李四"))

  print("=== 两个人同时开始取款 ===")
  person1.start()
  person2.start()
  person1.join()
  person2.join()

  print("\n=== 最终结果 ===")
  print(f"账户余额: {account.balance} 元")
  print(f"如果正常，应该只剩: {1000 - 800} = 200 元")
  ```

  锁的常见问题：

  ```python
  import threading


  lock = threading.Lock()

  # 同一个线程重复 acquire 会死锁
  lock.acquire()
  lock.acquire()  # 死锁！我锁我自己 —— 因为线程还没释放就再次申请
  ```

## RLock —— 可重入锁

+ `RLock` 允许同一个线程多次 acquire，内部维护一个计数器：

  ```python
  import threading

  lock = threading.RLock()


  def recurse(n: int):
      with lock:
          if n > 0:
              print(f"Recursing with n={n}")
              recurse(n - 1)  # 同一个线程再次 acquire ✅


  recurse(5)  # 正常运行

  ```

## Semaphore —— 限制并发数

+ Semaphore

  ```python
  import threading
  import time

  semaphore = threading.Semaphore(3)


  def limited_worker(n: int):
      with semaphore:
          print(f"线程 {n} 进入\n", end="")
          time.sleep(1)
          print(f"线程 {n} 离开\n", end="")


  threads = [threading.Thread(target=limited_worker, args=(i,)) for i in range(10)]

  for t in threads:
      t.start()
  for t in threads:
      t.join()

  ```

## Event —— 线程间通知

+ Event

  ```python
  import threading
  import time


  event = threading.Event()


  def waiter():
      print("waiter: 开始等待")
      event.wait()  # 等待事件被设置
      print("waiter: 被唤醒")


  def setter():
      print("setter: 1秒后设置事件")
      time.sleep(1)
      event.set()
      print("setter: 事件已设置")


  t1 = threading.Thread(target=waiter)
  t2 = threading.Thread(target=setter)
  t1.start()
  t2.start()
  t1.join()
  t2.join()
  ```

## Queue —— 线程安全的生产者消费者

+ Queue

  ```python
  import queue
  import random
  import threading
  import time


  def producer(q: queue.Queue):
      for i in range(10):
          item = f"item_{i}"
          q.put(item)
          print(f"生产: {item}\n", end="")
          time.sleep(random.random())
      q.put(None)


  def consumer(name: str, q: queue.Queue):
      while True:
          item = q.get()
          if item is None:
              q.task_done()
              break
          print(f"{name} 消费: {item}\n", end="")
          q.task_done()


  q = queue.Queue(maxsize=5)
  threads = [
      threading.Thread(target=producer, args=(q,)),
      threading.Thread(target=consumer, args=("C1", q)),
      threading.Thread(target=consumer, args=("C2", q)),
  ]

  for t in threads:
      t.start()
  for t in threads:
      t.join()

  ```

> `queue.Queue` 内部已经实现了线程同步，无需额外加锁。

## ThreadPoolExecutor —— 线程池

+ 频繁创建线程开销大，使用线程池复用线程：

  ```python
  from concurrent.futures import ThreadPoolExecutor
  import time


  def fetch_url(url: str) -> str:
      time.sleep(1)  # 模拟网络请求
      return f"{url} 完成"


  with ThreadPoolExecutor(max_workers=3) as executor:
      urls = ["url1", "url2", "url3", "url4", "url5"]

      # map 返回结果的顺序与传入顺序一致
      results = executor.map(fetch_url, urls)
      for r in results:
          print(r)

      # 也可以 submit 逐条提交
      futures = [executor.submit(fetch_url, url) for url in urls]
      for f in futures:
          print(f.result())
  ```

### ThreadPoolExecutor 与 asyncio 配合

+ ThreadPoolExecutor 与 asyncio 配合

  ```python
  import asyncio
  import time
  from concurrent.futures import ThreadPoolExecutor


  def blocking_io() -> str:
      time.sleep(0.5)  # 同步阻塞
      return "文件读取完成"


  async def main():
      # to_thread 将同步阻塞函数放到线程池中执行
      result = await asyncio.to_thread(blocking_io)
      print(result)

      # 也可以手动指定执行器
      loop = asyncio.get_running_loop()
      with ThreadPoolExecutor() as pool:
          result = await loop.run_in_executor(pool, blocking_io)
          print(result)


  asyncio.run(main())
  ```

## 线程局部数据 (Thread Local)

+ 每个线程拥有独立的副本，互不干扰：

  ```python
  import threading
  import time


  local_data = threading.local()


  def worker(name: str):
      local_data.name = name  # 每个线程独立存储
      local_data.count = 0
      for _ in range(3):
          local_data.count += 1
          print(f"{local_data.name}: {local_data.count}")
          time.sleep(0.1)


  threads = [
      threading.Thread(target=worker, args=("A",)),
      threading.Thread(target=worker, args=("B",)),
  ]

  for t in threads:
      t.start()
  for t in threads:
      t.join()
  ```
