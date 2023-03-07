# setup组件注册

## 组件注册

+ 组件不需要再注册

    ```ts
    // 组件 testCom.vue
    <template>
      <div>
        <h2> 你好-我是肖鹤云</h2>
      </div>
    </template>

    ```

    ```ts
    // 使用组件
    <template>
      <div class="home">
        <test-com></test-com>
      </div>
    </template>
    <script lang="ts" setup>
    // 组件命名采用的是大驼峰，引入后不需要在注册，是不是爽歪歪呀!
    //在使用的使用直接是小写和横杠的方式连接 test-com
    import TestCom from "../components/TestCom.vue"
    </script>
    ```
