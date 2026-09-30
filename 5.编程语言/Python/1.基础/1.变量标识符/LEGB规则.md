# LEGB 规则

## 概述

+ Python 在查找 “名称” 时，是按照 LEGB 规则查找的：Local --> Enclosed --> Global --> Built in

  + Local: 函数或者类的方法内部
  + Enclosed: 嵌套函数（一个函数包裹另外一个函数，闭包）
  + Global: 模块中的全局变量
  + Built in: Python 为自己保留的特殊名称

## 查找方法

1. 如果某个 `name` 映射在局部( `local` )命名空间中没有找到
2. 会在闭包作用域( `enclosed` )进行搜索，如果闭包作用域有没有找到
3. Python 就会到全局( `global` )命名空间中进行查找
4. 最后会在内建( `built in` )命名空间搜索
5. 如果一个名称在使用命名空间中都没有找到，就会产生一个 `NameError`
