# Prettier 代码格式化

## Prettier 基本使用

+ 示例

  ```js
  module.exports = {

    printWidth: 130, // 指定最大换行长度

    tabWidth: 2, // 缩进制表符宽度 | 空格数

    useTabs: false, // 使用制表符而不是空格缩进行 (true：制表符，false：空格)

    semi: true, // 结尾不用分号 (true：有，false：没有)

    singleQuote: false, // 使用单引号 (true：单引号，false：双引号)

    quoteProps: "as-needed", // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"

    jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)

    trailingComma: "none", // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"


    bracketSpacing: true,

    bracketSameLine: false,  // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)

    arrowParens: "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)

    requirePragma: false, // 指定要使用的解析器，不需要写文件开头的 @prettier

    insertPragma: false,  // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化


    proseWrap: "preserve",  // 用于控制文本是否应该被换行以及如何进行换行

    htmlWhitespaceSensitivity: "css", // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的

    vueIndentScriptAndStyle: false, // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式

    endOfLine: "auto", // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"

    rangeStart: 0, // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)

    rangeEnd: Infinity,

    jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  };
  ```
