# Object.prototype.isPrototypeOf()

## 概述

+ isPrototypeOf() 方法用于检查一个对象是否存在于另一个对象的原型链中

## isPrototypeOf() 与 instanceof 运算符的不同

+ 在表达式 object instanceof AFunction 中，会检查 object 的原型链是否与 AFunction.prototype 匹配，而不是与 AFunction 本身匹配
