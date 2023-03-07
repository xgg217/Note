# vm.\$watch

## 基础

+ Vue实例将会在实例化时调用 `$watch`，遍历 `watch` 对象的每一个属性

+ 我们也可以利用 `vm.$watch` 来实现侦听，用法与 `watch` 选项部分一致，略有不同。以下为使用方法

## 侦听某个数据的变化

+ 三个参数，一参为被侦听的数据；二参为数据改变时执行的回调函数；三参可选，为设置的选项对象

    ```js
    vm.$watch(
      'msg',
      function () {
        // 干了点事儿
      },
      {
        deep: Boolean,
        immediate: Boolean
      }
    )
    ```

+ 二个参数，一参为被侦听的数据；二参为选项对象，其中handler属性为必需，是数据改变时执行的回调函数，其他属性可选

    ```js
    vm.$watch(
    'msg',
      {
        handler () {
          // 干了点事儿
        },
        deep: Boolean,
        immediate: Boolean
      }
    )
    ```

## 侦听某个对象属性的变化

+ `vm.$watch('obj.name', /**参数和上面一之*/)`

## 当监听的数据的在初始不确定

+ 当监听的数据的在初始不确定，由多个数据得到时，此时可以将第一个参数写成函数类型

    ```js
    vm.$watch(function () {
      // 表达式`this.a + this.b`每次得出一个不同的结果时该函数都会被调用
      // 这就像监听一个未被定义的计算属性
      return this.a + this.b;
    }, /**参数和上面一致*/)
    ```

## 取消侦听

+ 侦听器函数执行后，会返回一个取消侦听函数，用来停止触发回调：

    ```js
    const unwatch = vm.$watch('msg', function () {});
    unwatch(); // 执行后会取消侦听msg数据
    ```

+ 使用 `unwatch` 时，需要注意的是，在带有 `immediate` 选项时，不能在第一次回调时取消侦听数据

    ```js
    const unwatch = vm.$watch('msg', function () {
      // 干了点儿事
      unwatch();  // 此时会报错
      },{
        immediate: true
      }
    })
    ```

+ 如果仍然希望在回调内部用一个取消侦听的函数，那么可以先检查该函数的可用性：

    ```js
    var unwatch = vm.$watch('msg', function () {
        // 干了点儿事
        if(unwatch) {
          unwatch();
        }
      },{
        immediate: true
      }
    })
    ```
