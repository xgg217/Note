# Group和Object3D

## Group

+ 它与Object3D相同
+ 它的目的是使处理对象组在语法上更清晰

+ 可以将多个对象组成一个对象便于操作；我们知道物体的自转都是绕其中心点，那如果想要绕其他点转动怎么办呢？就可以使用 `group`

## Object3D

+ 这是three.js中大多数对象的基类，提供了一组属性和方法来处理3D空间中的对象
+ 请注意，这可以通过 `.add(object)` 方法将对象作为子对象添加，但最好使用 `Group` 来进行分组

## 总结

+ Group和Object3D差不多都可以通过 `.add(object)` 方法将对象作为子对象
+ 但最好使用 `Group`
