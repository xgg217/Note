# sync修饰符

## 未使用使用

*   父组件

    ```vue
    <h1>{{ title }}</h1>
    <child
      :title="title"
      @update-title="title= $event"
    ></child >

    ```

*   子组件

    ```vue
    <div>
      <h1>{{ title }}</h1>
      <button @click="changeTitle">修改标题</buttom>
    </div>

    props: {
      title: String
    },
    methods: {
      changeTitle() {    
        this.$emit("update:title", '新内容')
      }
    }
    ```

## 使用.sync修饰符

*   父组件

    ```vue
    <h1>{{ title }}</h1>
    <child
      :title.sync="title"
    ></child >

    ```

*   子组件（不需要做改变）

## 使用.sync修饰符批量更新对象

*   父组件

    ```vue
    <h1>{{ title }}</h1>
    <child
      v-bind.sync="doc"
    ></child >

    ```

    ```vue
    // 相当于
    <h1>{{ title }}</h1>
    <child
      :title="doc.title"
      :content="doc.content"
      @update-title="doc.title= $event"
      @update-content="doc.content= $event"
    ></child >

    ```
