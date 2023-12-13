# Object.groupBy 分组

## 概述

+ `Object.groupBy()` 静态方法根据提供的回调函数返回的字符串值对给定可迭代对象中的元素进行分组。返回的对象具有每个组的单独属性，其中包含组中的元素的数组

+ 当分组名称可以用字符串表示时，应使用此方法
+ 如果你需要使用某个任意值作为键来对元素进行分组，请改用 `Map.groupBy()` 方法

## API

+ `Object.groupBy(items, callbackFn)`

+ 参数

  + items: 一个将进行元素分组的可迭代对象（例如 `Array`）

  + callbackFn: 对可迭代对象中的每个元素执行的函数。它应该返回一个值，可以被强制转换成属性键（字符串或 symbol），用于指示当前元素所属的分组。该函数被调用时将传入以下参数

    + element 数组中当前正在处理的元素
    + index 正在处理的元素在数组中的索引

+ 返回值: 个带有所有分组属性的 `null` 原型对象，每个属性都分配了一个包含相关组元素的数组

## 示例

+ 示例1

  ```js
  const inventory = [
    { name: "芦笋", type: "蔬菜", quantity: 5 },
    { name: "香蕉", type: "水果", quantity: 0 },
    { name: "山羊", type: "肉", quantity: 23 },
    { name: "樱桃", type: "水果", quantity: 5 },
    { name: "鱼", type: "肉", quantity: 22 },
  ];

  // 根据元素的 type 属性的值对元素进行分组
  const peopleByAge = Object.groupBy(inventory, (person) => person.type);
  /* 结果是：
  {
    蔬菜: [
      { name: "芦笋", type: "蔬菜", quantity: 5 },
    ],
    水果: [
      { name: "香蕉", type: "水果", quantity: 0 },
      { name: "樱桃", type: "水果", quantity: 5 }
    ],
    肉: [
      { name: "山羊", type: "肉", quantity: 23 },
      { name: "鱼", type: "肉", quantity: 22 }
    ]
  }
  */
  ```

+ 示例2:可以创建根据元素的一个或多个属性中的值推断的分组

  ```js
  const inventory = [
    { name: "芦笋", type: "蔬菜", quantity: 5 },
    { name: "香蕉", type: "水果", quantity: 0 },
    { name: "山羊", type: "肉", quantity: 23 },
    { name: "樱桃", type: "水果", quantity: 5 },
    { name: "鱼", type: "肉", quantity: 22 },
  ];

  Object.groupBy(inventory, (person) => { return person.quantity > 5 ? 'ok': 'restock' });
  /* 结果是：
  {
    "restock": [
      {
        "name": "芦笋",
        "type": "蔬菜",
        "quantity": 5
      },
      {
        "name": "香蕉",
        "type": "水果",
        "quantity": 0
      },
      {
        "name": "樱桃",
        "type": "水果",
        "quantity": 5
      }
    ],
    "ok": [
      {
        "name": "山羊",
        "type": "肉",
        "quantity": 23
      },
      {
        "name": "鱼",
        "type": "肉",
        "quantity": 22
      }
    ]
  }
  */
  ```
