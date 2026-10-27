# 文件 I/O

## aiofiles（异步文件操作）

+ aiofiles

  ```python
  import aiofiles


  async def read_write_example():
      # 写文件
      async with aiofiles.open("example.txt", "w") as f:
          await f.write("Hello, 异步文件!\n")

      # 读文件
      async with aiofiles.open("example.txt", "r") as f:
          content = await f.read()
          print(content)
  ```
