#  计算 LocalStorage 的容量

## 什么时候需要关注 LocalStorage 空间？

+ LocalStorage 是浏览器提供的一种本地会话存储的方式，最大支持 5M （单位就是字符串的长度） 的存储空间

+ 如果你在面对一些足够复杂的项目，涉及到大量的数据本地存储且没有使用 IndexDB 的前提下，那么关注 LocalStorage 存储空间位置，就变得有意义了

## 计算已使用的容量

+ code

  ```js
  const computedUse = () => {
    let cache = 0;
    // 循环访问LocalStore中的所有 key
    for(let key in localStorage) {
      // 检查 key 是否是LocalStore的一部分（而不是其原型）
      if (localStorage.hasOwnProperty(key)) {
        // 将每个项目的长度添加到总缓存中
        cache += localStorage.getItem(key).length * 2; // 每个字符计为2个字节
      }
    }
    // 将总数从字节转换为千字节并固定为2位小数
    return (cache / 1024).toFixed(2);
  };

  (async () => {
    // 创建一个大字符串“o”用于测试目的
    let o = '0123456789';
    for(let i = 0 ; i < 1000; i++) {
      o += '0123456789';
    }

    // 将大字符串存储在LocalStore中
    localStorage.setItem('o', o);

    // 计算使用容量
    const useCache = computedUse();
    console.log(`计算结果: ${useCache}KB`); // 19.55KB
  })();
  ```

## 计算可用容量

+ 在确定了 LocalStorage 的总容量和已用容量后，我们可以通过从总容量中减去已用容量来轻松计算剩余可用容量

  ```js
  const computedsurplus = (total, use) => {
    return total - use;
  };

  (async () => {
    // 计算Local存储总容量
    const total = await computedTotal();

    // 创建一个大字符串“o”用于测试目的
    let o = '0123456789';
    for(let i = 0 ; i < 1000; i++) {
      o += '0123456789';
    }

    // 将大字符串存储在LocalStore中
    localStorage.setItem('o', o);

    // 假设 computedUse 是一个计算已用容量的函数
    const useCache = computedUse();

    // 计算并记录剩余可用容量
    console.log(`剩余可用容量: ${computedsurplus(total, useCache)}KB`); // 10220.45 KB
  })();
  ```
