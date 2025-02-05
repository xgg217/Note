# JSEncrypt

## 概述

+ JSEncrypt 是一个用于实现 RSA 加密的 JavaScript 库，RSA 是一种非对称加密算法，它使用一对密钥（公钥和私钥）
+ 在 RSA 中，公钥用于加密，私钥用于解密
+ 与对称加密不同，非对称加密算法的优势在于密钥管理更为灵活，因为公钥可以公开，而私钥则由接收方保密

## 安装JSEncrypt

+ 安装

  ```bash
  npm install jsencrypt --save
  ```

## 使用RSA加密

+ RSA 加密适用于需要保护公钥和私钥的场景

  ```js
  // 初始化了 JSEncrypt 实例，并设置了公钥
  // 然后使用公钥对数据进行加密。加密后的数据可以通过安全的通道发送到服务器，服务器再使用私钥进行解密
  import JSEncrypt from 'jsencrypt';

  // 创建JSEncrypt实例
  const encryptor = new JSEncrypt();

  // 设置公钥（通常由服务器提供）
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxKtGdG9F8ZlPzP4DrT5t
  ...
  -----END PUBLIC KEY-----`;
  encryptor.setPublicKey(publicKey);

  // 加密数据
  const data = "这是需要加密的敏感数据";
  const encryptedData = encryptor.encrypt(data);

  console.log("加密后的数据:", encryptedData);
  ```

## 注意事项

+ 密钥对管理：与对称加密不同，RSA 加密使用的是一对密钥，其中公钥用于加密，私钥用于解密

  + 在实际应用中，公钥可以公开给所有用户，而私钥必须保存在服务器端，并且始终保密

+ 性能问题：RSA 加密相对于 AES 来说，计算较为复杂，因此通常不会直接用来加密大量数据

  + 在前端加密时，通常是先用 RSA 加密对称密钥，然后使用该对称密钥对数据进行加密

+ 四、如何综合使用Crypto-JS和JSEncrypt？在实际应用中，我们可以结合 Crypto-JS 和 JSEncrypt 来实现更高效且安全的数据加密流程。例如，可以使用 RSA 加密对称密钥，然后用该对称密钥加密大数据，既保证了安全性，又提高了性能

