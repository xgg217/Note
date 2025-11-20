# Crypto-JS

## 概述

+ Crypto-JS是一个纯 JavaScript 编写的加密库，它支持多种加密算法，如 AES、DES、HMAC 等，可以在前端浏览器中直接使用，常用于对数据进行加密和解密

+ 它的优点是简单易用，且能够支持常见的加密需求

## 使用场景

+ 用户登录
+ API 安全签名
+ 敏感信息保护

## 解决方案优势

+ 内置多种加密算法，满足不同安全需求
+ 前后端通用，确保加密一致
+ 性体积小巧，集成简单

## 安装

+ 安装

  ```bash
  npm install crypto-js --save
  ```

## 使用AES加密

+ AES（高级加密标准）是一种常见的对称加密算法，它在现代加密中得到了广泛的应用
+ Crypto-JS 提供了对 AES 加密的支持

## 对称加密算法

+ 上述代码中，首先对数据进行了加密，之后通过同样的密钥解密数据
+ 需要注意的是，由于 AES 是对称加密算法，因此加密和解密使用的密钥必须相同

## 注意事项

+ 密钥管理：加密的安全性很大程度上依赖于密钥的安全性。如果密钥被泄露，加密数据也会失去保护作用

  + 因此，密钥不应该硬编码在前端代码中，最好通过安全的方式传递或存储密钥

+ 性能问题：尽管 Crypto-JS 在前端使用上非常方便，但加密算法的复杂度会影响浏览器的性能

  + 在加密非常大量数据时，可能会影响页面的响应速度

## 示例

+ 以下是如何在前端使用 Crypto-JS 进行 AES 加密的示例：

  ```js
  import CryptoJS from 'crypto-js';

  // 加密
  const data = "这是需要加密的敏感数据";
  const secretKey = "my-secret-key";
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();

  // 解密
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);

  console.log("加密后的数据:", encryptedData);
  console.log("解密后的数据:", bytes);
  ```

+ 用户密码加密存储

  ```js
  import CryptoJS from'crypto-js';

  // 用户密码加密存储
  const userPassword = 'user123456';
  const hashedPassword = CryptoJS.MD5(userPassword).toString();
  console.log(hashedPassword); // "e10adc3949ba59abbe56e057f20f883e"
  ```

+ 接口请求签名验证

  ```js
  import CryptoJS from'crypto-js';

  const requestData = {
    userId: '1001',
    timestamp: Date.now(),
    action: 'getUserInfo'
  };
  const signatureString = Object.values(requestData).join('');
  const requestSignature = CryptoJS.SHA256(signatureString).toString();
  console.log(requestSignature);
  ```
