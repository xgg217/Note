# form嵌套table


+ code

  ```html
  <el-form ref="ruleFormRef" :model="form" :rules="rules">
    <el-table :data="form.tableData" border>
      <el-table-column type="index" width="60" />
      <el-table-column prop="name" label="编制人数" width="200">
        <template #default="{ row, $index }">
          <el-form-item :prop="`tableData.${$index}.name`" :rules="rules.name">
            <el-input-number v-model="row.val" :min="1" :max="999999999" :precision="0" placeholder="请输入名称" />
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>

  <script setup lang="ts">
  const ruleFormRef = ref<FormInstance>();
  const form = reactive({
    tableData: [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }]
  });

  const rules = {
    name: [
      {
        required: true,
        message: "请输入名称",
        trigger: "blur"
      }
    ]
  };
  </script>

  <style lang="scss" scoped>
    :deep(.el-table td.el-table__cell > .cell) {
      height: 50px;
    }
</style>
  ```