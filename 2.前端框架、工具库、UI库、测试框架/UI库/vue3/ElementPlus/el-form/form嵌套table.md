# form嵌套table

## 示例

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

      <el-table-column prop="name" label="编制人数" width="200">
        <template #default="{ row, $index }">
          <el-form-item :prop="`tableData.${$index}.name`" :rules="[
                  {
                    validator: (rule: any, value: any, callback: any) => maxCheck(rule, value, callback, row),
                    trigger: 'change'
                  }
                ]">
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

  // 最大值校验
  const maxCheck = (rule: any, value: any, callback: any, row: IStatusItem) => {
    if (typeof value !== "number") {
      return callback(new Error("不能为空"));
    }

    const { indexValRight, indexValLeft } = row;

    // 最大值不能 ≤ 最小值
    if (indexValRight <= indexValLeft) {
      return callback(new Error("最大值不能小于等于最小值"));
    }

    // 区间不能重叠
    {
      const arr = formData.tableData;

      if (arr.length > 1) {
        const minArr = arr.map(item => {
          return item.indexValLeft;
        });

        const maxArr = arr.map(item => {
          return item.indexValRight;
        });

        if (Math.max(...minArr) < Math.min(...maxArr)) {
          return callback(new Error("区间不能重叠"));
        }
      }
    }

    return callback();
  };
  </script>

  <style lang="scss" scoped>
    :deep(.el-table td.el-table__cell > .cell) {
      height: 50px;
    }
</style>
  ```