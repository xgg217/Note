# MD5加密

## 使用场景

+ 对密码加密

## 加密特点

+ hash 加密算法的一种

+ 可以将任何一个字符串，加密成一个固定长度的字符串

+ 单向加密：只能加密无法解密

+ 同样的原源符串加密得到的结果固定

## 安装

+ 安装

  ```javascript
  npm i md5
  ```

+ 使用

  ```javascript
  var md5 = require('md5');

  console.log(md5('小刚刚'));
  ```
