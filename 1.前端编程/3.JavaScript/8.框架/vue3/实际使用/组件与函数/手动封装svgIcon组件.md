# 手动封装 svgIcon 组件

## code

+ Icon.vue

  ```html
  <template>
    <i class="es-icon" :style="style" v-html="icon"></i>
  </template>

  <script lang="ts" setup>
  import { computed, CSSProperties } from 'vue'
  import { IconProps, getIcon } from './icon'

  const props = defineProps(IconProps)

  const icon = computed(() => getIcon(props.name))
  const style = computed<CSSProperties>(() => {
    if (!props.size && !props.color) return {}

    return {
      fontSize: typeof props.size === 'string' ? props.size : `${props.size}px`,
      '--color': props.color,
    }
  })
  </script>

  <style scoped lang="scss">
  .es-icon {
    --color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--color);
    font-size: inherit;
    font-style: normal;
    svg {
      height: 1em;
      width: 1em;
    }
  }
  </style>
  ```

  ```js
  // getIcon的实现 icon.ts
  export const svgs = import.meta.glob('./svg/*.svg', { eager: true, as: 'raw' })
  export const IconProps = {
    name: String,
    color: String,
    size: [String, Number]
  }

  export const getIcon = (name?: string) => {
    if (!name) return ''
    return svgs[`./svg/${name}.svg`]
  }
  ```

  ```html
  // 直接使用
  <es-icon name="add-location" />
  <es-icon name="add-location" color="pink" />
  <es-icon name="add-location" color="pink" :size="30" />
  ```

+ 使用 `import.meta.glob` 动态导入svg目录下所有以 .svg 结尾的文件，`as: 'raw'` 表示导入的文件内容以原始字符串形式保存
+ getIcon 根据name获取svg的内容


