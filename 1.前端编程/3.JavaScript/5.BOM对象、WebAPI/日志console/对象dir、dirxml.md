# dir、dirxml

## dir

+ `dir` 方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示

  ```js
  console.log({f1: 'foo', f2: 'bar'})
  // Object {f1: "foo", f2: "bar"}

  console.dir({f1: 'foo', f2: 'bar'})
  // Object
  //   f1: "foo"
  //   f2: "bar"
  //   __proto__: Object
  ```

  ![alt text](images/dir.png)

## dirxml

+ console.dirxml 方法用于在控制台中显示指定 XML 或 HTML 元素的内容，并以 XML 树的形式呈现。这对于查看和分析 DOM 结构非常有用
