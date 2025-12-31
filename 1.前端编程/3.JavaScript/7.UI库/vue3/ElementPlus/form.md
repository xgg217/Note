# form

## 解决关闭弹窗重新打开后表单校验存在

+ 问题：打开弹窗保存后重新打开弹窗触发表单校验
+ 解决：打开弹窗时触发open函数清除表单校验

  ```html
   <el-dialog v-model="cardDialogVisible"
        :title="cardDialogTitle"
        :before-close="handleCloseCardDialog"
      @open="handleOpeenCardDialog">
    <el-form ref="formRef" :model="cardList" label-width="80">
      .....
    </el-form>
  </el-dialog>
  ```

  ```js
  import { ref, reactive, onMounted,nextTick } from "vue";

  const formRef = ref();
  const handleOpeenCardDialog = () => {
    nextTick(()=>{
      // 清空校验
      formRef.value.clearValidate()
    })
  }
  ```
