# json-server

## 步骤

+ 初始化

  ```bash
  pnpm init -y
  ```

+ 下载

  ```bash
  pnpm add json-server@0.17.1
  ```

+ 创建 `db.json` 文件

  ```json
  {
    "monitors": [
      {
        "id": 1,
        "name": "杭州市滨江区监测点",
        "lng": 120.2108,
        "lat": 30.2084,
        "city": "杭州市",
        "status": "on",
        "quality": 3,
        "monitorArea": 9.56,
        "allArea": 41.89
      },
      ...
    ],
    "months": [
      {
        "id": 1,
        "name": "1月",
        "count": 120
      },
      ...
    ],
    "waters": [
      {
        "id": 1,
        "time": "00:00",
        "waterLevel": 3.21
      },
      ...
    ]
  }
  ```

+ 启动

  ```bash
  pnpm json-server db.json --watch
  ```

+ 启动后使用

  ```
  http://localhost:3000/monitors
  http://localhost:3000/months
  http://localhost:3000/waters
  ```
