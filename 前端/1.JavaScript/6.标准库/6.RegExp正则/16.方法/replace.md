# replace

## 概述

+ `replace()` 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串

+ 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数

+ 如果pattern是字符串，则仅替换第一个匹配项

+ 该方法并**不改变**调用它的字符串本身，而只是返回一个新的替换后的字符串

+ 在进行全局的搜索替换时，正则表达式需包含 `g` 标志

## 语法

+ `str.replace(regexp|substr, newSubStr|function)`

+ 参数

  - regexp：一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉

  - substr：一个将被 newSubStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换

  - newSubStr：用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数

  - function (replacement)：一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果

## function (\$, \$1, \$2, index, input)

+ 参数1：匹配的字符（捕捉到的内容）

    ```js
    const myString = "hello word";
    const splits = myString.replace(/\b[A-z]/g, function(res) {
      console.log(res); // h w
      return ""
    });
    splits // ello ord
    ```

+ 第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）

+ 参数index：捕捉到的内容在整个字符串中的位置

+ 参数input：原字符串

+ 回调函数的参数

    ```js
    "1234 2345 3456".replace(/(\d)\d{2}(\d)/g, function (match, $1, $2, index, input) {
      console.log([match, $1, $2, index, input]);
    });
    // => ["1234", "1", "4", 0, "1234 2345 3456"]
    // => ["2345", "2", "5", 5, "1234 2345 3456"]
    // => ["3456", "3", "6", 10, "1234 2345 3456"]
    ```
