# get + set

## get

+ `utils.get(target, propertyName, unit)` 获取元素的信息

  + target 获取的元素
  + propertyName 获取的元素的属性
  + unit 单位

  ```js
  var logEl = document.querySelector('.get-value-demo-log');
  var el = document.querySelector('.get-value-demo .el');

  logEl.innerHTML = '';
  logEl.innerHTML += '".el" width is :<br>';
  logEl.innerHTML += '"' + utils.get(el, 'width', 'px') + '"';
  logEl.innerHTML += ' or "' + utils.get(el, 'width', 'rem') + 'rem"'
  ```

## set

+ `utils.set(targets, {property: value})` 设置元素的属性值是什么

  + target(s) 类型是'string', var
  + value 类型是object

    +  {property: value} ：是一个对象，{属性：值}

  ```js
  utils.set('.set-value-demo .el', {
    translateX: function() { return utils.round(50, 250); },
    rotate: function() { return utils.round(0, 360); },
  });
  ```

