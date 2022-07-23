# mock数据

## 随机生成数组对象

  - 示例

    ```javascript
    const arr = Mock.mock({
      "datas|16": [
        {
          "id|+1": 1, // 每次生成 +1
          "name": "前端第 @id 期", // @id 引用id
          "openingTime": "@date" // 随机生成日期
        }
      ]
    }).datas;
    ```

## 随机生成名字

  - 示例

    ```javascript
    const arr = Mock.mock({
      'datas|500-700': [
        {
          'name': '@cname', // 随机生成名字
          'dateOfBirth': '@date', // 随机生成日期
          'sex|1-2':true, // 随机生成 布尔值
          'phone|10000000000-19999999999': 11111111111,
          'ClassId|1-16': 1
        }
      ]
    }).datas;
    ```
