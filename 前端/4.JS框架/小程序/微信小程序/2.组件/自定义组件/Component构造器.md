# Component构造器

## 作用

- Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等

## 属性

- `properties`：组件对外属性，是属性名到属性的映射

- `data`：组件内容部的数据，可以渲染模板

- `lefttimes`：组件生命周期生命

- `methods`：组件的方法，包括事件的相应方法和响应函数的使用

    ```js
    Component({
      properties: {
        myProperty: { // 属性名
          type: String,
          value: ''  // 属性初始值（可选）
          observer(newVal, oldVal){
            // 属性变动监听
          }
        },
        myProperty2: String // 简化的定义方式
      },

      // 私有数据，可用于模板渲染
      data: {
        arr: [1,2],
        age: 12
      },

      // 不要使用 箭头函数 => ，会有 this 指向问题
      methods: {
        // 与外部数据有关系
        myPrGet() {
          this.setData({
            age: 11
          })
        },

        // 私有方法：与外部数据没有关系
        _mySe() {
          // data 设置替换
          this.replaceDataOnPath(['arr', 0] '替换为新文本');
          // properties 设置 替换
          this.replaceDataOnPath(['myProperty2'], '替换为新文本');

          // 执行替换
          this.applyDataUpdates();
        }
      }
    })
    ```

## properties

- `type` 类型现在支持

  - `String`

  - `Number`

  - `Boolean`

  - `Object`

  - `Array`

  - `null` (表示任意类型)
