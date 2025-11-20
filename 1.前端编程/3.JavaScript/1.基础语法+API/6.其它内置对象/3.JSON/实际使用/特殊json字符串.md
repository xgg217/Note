# 接口突然返回字符串

## 场景

+ 在请求某个文件时，正常情况下接口会返回 `json` 对象，但是这个比较特殊，竟然返回 `json` 字符串

+ 大概率是因为数据量太大，接口自动转化为字符串来传输

+ 如果 判断一下类型，是字符串就将其转化为json对象

  + 可能会报错

  ```js
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  ```

  + 意思就是json字符串中存在非法字符，使用 `JSON.parse()` 解析就报错了
  + `JSON.parse()` 只能解析标准的JSON字符串

  ![转json对象报错](./../images/转json对象报错.jpg)

## 解决方案

+ 方案1 `eval`

  ```js
  if (typeof data === 'string') {
    data = eval("(" + data + ")")
  }
  ```

+ 方案2 `new Function()` *推荐使用*

  ```js
  if (typeof data === 'string') {
    new Function('return' + data)()
  }
  ```
