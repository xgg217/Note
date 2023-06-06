# Set与字符串

## String 转 Set

+ String 转 Set

  ```js
  let text = 'India';
  let mySet = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
  mySet.size;  // 5
  ```

## 字符串去重

+ 示例

  ```js
  const str = 'dfsdfsdsdsfgs';
  const newStr = [...new Set(str)].join('');
  console.log(newStr) // dfsg
  ```
