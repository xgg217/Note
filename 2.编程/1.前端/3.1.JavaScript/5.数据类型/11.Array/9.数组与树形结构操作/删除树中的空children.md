# 删除树中的空children

## 概述

+ 方法

  ```js
  const removeEmptyChildren = (tree) => {
    tree.forEach((item) => {
      if (item.children && item.children.length ===0) {
        delete item.children
      } else if (item.children && item.children.length > 0) {
        removeEmptyChildren(item.children)
      }
    })
    return tree
  }
  ```

## 示例

+ 示例

  ```js
  const tree = [
    {
      name: '小明',
      id: 1,
      pid: 0,
      children: [
        {
          name: '小花',
          id: 11,
          pid: 1,
          children: [
            {
              name: '小华',
              id: 111,
              pid: 11,
            },
            {
              name: '小李',
              id: 112,
              pid: 11,
              children: []
            }
          ]
        },
        {
          name: '小红',
          id: 12,
          pid: 1,
          children: []
        }
      ]
    },
    {
      name: '小王',
      id: 2,
      pid: 0,
      children: [
        {
          name: '小林',
          id: 21,
          pid: 2,
        },
        {
          name: '小李',
          id: 22,
          pid: 2,
          children: []
        }
      ]
    }
  ]
  ```

  ```js
  const result = removeEmptyChildren(tree);
  console.log(result);

  // 运行结果
  [
    {
      "name": "小明",
      "id": 1,
      "pid": 0,
      "children": [
        {
          "name": "小花",
          "id": 11,
          "pid": 1,
          "children": [
            {
              "name": "小华",
              "id": 111,
              "pid": 11
            },
            {
              "name": "小李",
              "id": 112,
              "pid": 11
            }
          ]
        },
        {
          "name": "小红",
          "id": 12,
          "pid": 1
        }
      ]
    },
    {
      "name": "小王",
      "id": 2,
      "pid": 0,
      "children": [
        {
          "name": "小林",
          "id": 21,
          "pid": 2
        },
        {
          "name": "小李",
          "id": 22,
          "pid": 2
        }
      ]
    }
  ]
  ```
