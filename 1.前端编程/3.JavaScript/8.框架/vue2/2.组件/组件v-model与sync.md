# 组件 v-model

## 单个组件 v-model

+ 子组件

  ```html
  <template>
    <div>
      <input
        type="text"
        :value="title"
        @input="$emit('change', $event.target.value)"
      />
    </div>
  </template>

  <script>
  export default {
    model: {
      prop: "title", // 将默认的 prop 名 value 改为 title
      event: "change", // 将默认的事件名 input 改为 change
    },
    props: {
      title: String, // 注意 template 代码中也要修改为 title
    },
  };
  </script>
  ```

+ 父组件

  ```html
  <my-input v-model="msg"></my-input>

  // 等同于
  <my-input :title="msg" @change="msg = $event"></my-input>
  ```

## sync 修饰符

+ 修改抛出的事件名为 update:title

  ```js
  // MyInput 组件中，修改抛出的事件名为 update:title
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  ```

  ```html
  <my-input :title="msg" @update:title="msg = $event"></my-input>

  <!-- 改为 -->
  <my-input :title.sync="msg"></my-input>
  ```


