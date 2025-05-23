# 标识符flag

## 常见操作符

+ `a`: 打开文件进行追加。 如果文件不存在，则创建该文件

+ `ax`: 类似于 `a` 但如果路径存在则失败

+ `a+`: 打开文件进行读取和追加。 如果文件不存在，则创建该文件

+ `ax+`: 类似于 'a+' 但如果路径存在则失败

+ `as`: 以同步模式打开文件进行追加。 如果文件不存在，则创建该文件

+ `as+`: 以同步模式打开文件进行读取和追加。 如果文件不存在，则创建该文件

+ `r`: 表示打开文件进行读取。 如果文件不存在，则会发生异常

+ `r+` 表示可读可写，不会清空文件内所有数据。 如果文件不存在，则会发生异常

+ `rs+`: 以同步模式打开文件进行读写。 指示操作系统绕过本地文件系统缓存。(不建议使用)

+ `w`: 表示可写（打开文件进行写入）

+ `wx`: 类似于 `w` 但如果路径存在则失败

+ `w+` 表示可读可写，但是会清空文件内所有数据。创建（如果它不存在）或截断（如果它存在）该文件

+ `wx+`: 类似于 `w+` 但如果路径存在则失败

+ `s`: 表示同步

+ `+`: 表示执行相反操作。`r+` 表示 可读可写

+ `x`: 表示排它的操作

+ `a`: 表示追加操作

  ![文件操作类型](image/文件操作类型.png)
