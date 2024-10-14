# from嵌套table

## 代码

+ code

  ```html
  <el-form
    ref="ruleForm"
    :model="formData"
    label-width="0"
    class="demo-ruleForm"
    size="small"
  >
    <el-table
      :data="formData.arr"
      border
    >
      <el-table-column
        prop="start"
        label="公里数开始KM(不包含)*"
        width="180"
      >
        <template slot-scope="scope">
          <el-form-item
            :prop="`arr.${scope.$index}.start`"
            :rules="{
              required: true,
              validator:(rule, value, callback)=>startCheck(rule, value, callback, scope.row)
            }"
          >
            <el-input-number v-model="scope.row.start" :precision="2" :min="0.01" :controls="false" placeholder="公里数开始KM(不包含)" />
          </el-form-item>
        </template>

      </el-table-column>
    </el-table>
  </el-form>

  <script>
  import { DRIVER_TYPE } from './../utils';
  // import AJDFromCmp from './AJDFromCmp';

  export default {
    data() {
      return {
        formData: {
          arr: [
            { start: 1, end: 2, type: '', val1: '', val2: 0.001, val3: 0.001 }
          ]
        },
      }
    }
  }
  </script>
  ```
