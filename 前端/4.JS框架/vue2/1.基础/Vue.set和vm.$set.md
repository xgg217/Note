# Vue.set和vm.\$set

## 概述

  - 由于 JavaScript 的限制，有些 Vue **无法检测**的更改类型。但是，有一些方法可以规避它们以维持响应性

## 对象

  - Vue 无法检测到 property 的添加或删除

  - 由于 Vue 在实例初始化期间执行 getter/setter 转换过程，因此必须在 `data` 对象中存在一个 property，以便 Vue 对其进行转换并使其具有响应式

    ```js
    var vm = new Vue({
      data: {
        a: 1
      }
    })
    // `vm.a` 现在是响应式的

    vm.b = 2
    // `vm.b` 不是响应式的
    ```

  - 对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 property

    ```js
    Vue.set(vm.someObject, 'b', 2)

    // 或者还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名
    this.$set(this.someObject, 'b', 2)
    ```

  - 为已有对象赋值多个新 property

    ```js
    // 而不是 `Object.assign(this.someObject, { a: 1, b: 2 })`
    this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
    ```

## 数组

  - Vue 不能检测以下数组的变动

    1.  问题1：当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`

    2.  问题2：当你修改数组的长度时，例如：`vm.items.length = newLength`

        ```js
        var vm = new Vue({
          data: {
            items: ['a', 'b', 'c']
          }
        })
        vm.items[1] = 'x' // 不是响应式的
        vm.items.length = 2 // 不是响应式的
        ```

  - 问题1解决方案（以下两种方式都可以实现和 `vm.items[indexOfItem] = newValue` 相同的效果，同时也会触发响应性系统的状态更新）

    1.  方式1

        ```js
        // Vue.set
        Vue.set(vm.items, indexOfItem, newValue)

        // vm.$set
        vm.$set(vm.items, indexOfItem, newValue)

        ```

    2.  方式2

        ```js
        // Array.prototype.splice
        vm.items.splice(indexOfItem, 1, newValue)
        ```

  - 问题2解决方案(使用 `splice`)

    ```js
    vm.items.splice(newLength)
    ```
