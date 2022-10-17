# matchAll

## 概述

- `matchAll()` 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器

## 语法

- 语法：`str.matchAll(regexp)`

- `RegExp` **必须** 是设置了全局模式 `g` 的形式，否则会抛出异常 `TypeError`

    ```js
    const regexp = RegExp('[a-c]','');
    const str = 'abc';
    Array.from(str.matchAll(regexp), m => m[0]);
    // TypeError: String.prototype.matchAll called with a non-global RegExp argument
    ```

- 返回值：一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）

## matchAll 优点

- 在 `matchAll` 出现之前，通过在循环中调用 `regexp.exec()` 来获取所有匹配项信息（需使用 `/g` 标志）

    ```js
    // 不是使用 matchAll
    const regexp = /(\w)\1(\w)\2/g;
    const str = 'aabbsffdddsffssfssdfdssff';
    let match;

    while ((match = regexp.exec(str)) !== null) {
      console.log(match);
    }

    // 0: "aabb" 1: "a" 2: "b" groups: undefined index: 0 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ffdd" 1: "f" 2: "d" groups: undefined index: 5 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ffss" 1: "f" 2: "s" groups: undefined index: 11 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ssff" 1: "s" 2: "f" groups: undefined index: 21 input: "aabbsffdddsffssfssdfdssff" length: 3
    ```

    ```js
    // 使用
    const matches = str.matchAll(reg);
    console.log(matches);

    for(const item of matches) {
      console.log(item);
    }

    // 0: "aabb" 1: "a" 2: "b" groups: undefined index: 0 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ffdd" 1: "f" 2: "d" groups: undefined index: 5 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ffss" 1: "f" 2: "s" groups: undefined index: 11 input: "aabbsffdddsffssfssdfdssff" length: 3
    // 0: "ssff" 1: "s" 2: "f" groups: undefined index: 21 input: "aabbsffdddsffssfssdfdssff" length: 3
    ```

- `matchAll` 内部做了一个 `regexp` 的复制，所以不像 `regexp.exec`, `lastIndex` 在字符串扫描时不会改变

    ```js
    const regexp = RegExp('[a-c]','g');
    regexp.lastIndex = 1;
    const str = 'abc';
    Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
    // Array [ "1 b", "1 c" ]
    ```

## 捕获组的更佳途径

- `matchAll` 的另外一个亮点是更好地获取捕获组

- 因为当使用 `match()` 和 `/g` 标志方式获取匹配信息时，捕获组会 **被忽略**

    ```js
    var regexp = /t(e)(st(\d?))/g;
    var str = 'test1test2';

    str.match(regexp);
    // Array ['test1', 'test2']
    ```

- 使用 `matchAll` 可以通过如下方式获取分组捕获:

    ```js
    let array = [...str.matchAll(regexp)];

    array[0];
    // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
    array[1];
    // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
    ```
