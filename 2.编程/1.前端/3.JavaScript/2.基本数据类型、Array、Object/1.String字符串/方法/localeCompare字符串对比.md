# localeCompare

## 概述

+ `localeCompare()` 方法返回一个数字，表示参考字符串在排序顺序中是在给定字符串之前、之后还是与之相同

## API

+ 语法

  ```js
  localeCompare(compareString)
  localeCompare(compareString, locales)
  localeCompare(compareString, locales, options)
  ```

## 示例

+ 示例1:单独调用

  ```js
  let str = 'aaa',
  let strCom= 'bbb',
  let strCom_two = 'aaa';

  str.localeCompare(strCom);     // -1
  strCom.localeCompare(str);     //  1
  str.localeCompare(strCom_two); // 0
  ```

+ 示例2:配合排序的调用

  ```js
  let str_list = ['aa', 'cc', 'dd', 'bb', 'ee'];

  str_list.sort((a, b) => {
    return a.localeCompare(b);
  });
  console.log(strList);   // ["aa", "bb", "cc", "dd", "ee"]
  ```

+ 示例3：按照字典的顺序排序

  ```js
  const names = ["上海", "北京", "杭州", "广东", "深圳", "西安"];

  names.sort(); // ['上海', '北京', '广东', '杭州', '深圳', '西安']

  "上" < "北" // true

  "上".localeCompare("北") // 1

  names.sort((a,b) => a.localeCompare(b)); // ['北京', '广东', '杭州', '上海', '深圳', '西安']
  ```
