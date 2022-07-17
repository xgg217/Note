# 根节点Fragment

## vue 3 的变化

*   允许组件出现多个根节点

    ```html
    <!-- App.vue -->
    <template>
      <template v-for="item of allList" :key="item.ids">
        <xz-cmp v-model:title.trim="item.title" v-model="item.sell" ></xz-cmp>
      </template>

      <div class="list" >
        <p>销售中</p>
        <ul>
          <template v-for="(item, index) of sdfAll" :key="item.ids">
            <li>{{ index + 1 }}--{{ item.title }}</li>
          </template>
          
        </ul>
      </div>
    </template>
    ```
