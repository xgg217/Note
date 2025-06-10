# template 字符串模板

## API

+ `_.template([string=''], [options=])`

  + 参数

    + string (string): 模板字符串
    + options (Object): 选项对象

      + escape (RegExp): "escape" 分隔符
      + evaluate (RegExp): "evaluate" 分隔符
      + imports (Object): 导入对象到模板中作为自由变量
      + interpolate  (RegExp): "interpolate" 分隔符
      + sourceURL (string): 模板编译的来源URL
      + variable (string): 数据对象的变量名

  + 返回值 (Function): 返回编译模板函数

  ```js
  // 使用 "interpolate" 分隔符创建编译模板
  var compiled = _.template('hello <%= user %>!');
  compiled({ 'user': 'fred' });
  // => 'hello fred!'

  const compiled = lodash.template('hello <%= user.name %>!')
  console.log(compiled({ user: { name: 'fred' } }))
  // hello fred!
  ```

