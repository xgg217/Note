# 自定义表单项触发 el-form-item 的 rule 验证

## element-plus 2.x

+ element-plus 2.x

  ```js
  import { nextTick } from 'vue'
  import { useFormItem } from 'element-plus'

  //  触发el-form-item的校验事件 trigger
  export function useTrigger () {
    const { formItem } = useFormItem() // form formItem
    const emitTrigger = (value: any) => {
      if (formItem) {
        nextTick(() => {
          formItem.validate('blur') // 触发校验
          formItem.validate('change') // 触发校验
        })
      }
    }
    return { formItem, emitTrigger }
  }
  ```

## element-plus 1.x-beta

+ element-plus 1.x-beta


  ```js
  import { inject } from 'vue'

  //  触发el-form-item的校验事件 trigger
  export function useTrigger () {
    const elFormItem: any = inject('elFormItem')
    const emitTrigger = (value: any) => {
      if (elFormItem?.formItemMitt?.emit) {
        elFormItem.formItemMitt.emit('el.form.blur', value)
        elFormItem.formItemMitt.emit('el.form.change', value)
      }
    }
    return { elFormItem, emitTrigger }
  }
  ```

## 在自定义组件中使用

+ 在自定义组件中使用


  ```html
  <el-form-item label="开始时间和结束时间" prop="startTime">
    <start-end-date
      v-model:start="form.startTime"
      v-model:end="form.endTime"
    />
  </el-form-item>

  <script lang="ts">
  import { useTrigger } from '@/utils/validatorRules'
  export default defineComponent({
    emits: ['update:modelValue'],
    setup (props, { emit }) {
      const { emitTrigger } = useTrigger()
      const change = (key: string, e?: any) => {
        emit('update:modelValue', e)
        emitTrigger(e)
      }
      return {
        change,
      }
    }
  })
  </script>
  ```
