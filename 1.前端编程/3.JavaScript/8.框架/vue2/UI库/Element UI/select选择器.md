# select选择器

## 分页显示 + 搜索

+ 分页显示 + 搜索

  ```html
  <template>
    <!-- 派送人选择 -->
    <!-- <ElSelectV2
      v-model="dispatcherList"
      :placeholder="$t('customerManagements.pleaseChoose') + $t('collectionCenter.dispatch')"
      :loading="loading"
      filterable
      :options="list"
      clearable
      style="width: 100%;"
      @change="onChaneg"
    /> -->
    <el-select
      v-model="dispatcherList"
      filterable
      clearable
      remote
      :placeholder="$t('customerManagements.pleaseChoose') + $t('collectionCenter.dispatch')"
      :loading="loading"
      :remote-method="getDeliveryPage"
      style="width: 100%;"
      value-key="dispatcherId"
      @change="onChaneg"
    >
      <el-option
        v-for="item in list"
        :key="item.value.dispatcherId + '' + item.value.source"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </template>

  <script>
  import { collectDriverQueryCourier } from '@/api/logisticsOrders';
  // import ElSelectV2 from 'el-select-v2';

  // const DELIVERY_SEND = 'deliverySend';

  const QUERY_DATA = {
    pageNumber: 1,
    pageSize: 20,
    params: {
      deliveryManName: ''
    }
  };

  export default {
    name: '',

    // components: {
    //   ElSelectV2
    // },

    props: {
      val: {
        type: [Object, String],
        default: ''
      }

    },

    data() {
      return {
        loading: false,
        list: [], // 所有派送人
        dispatcherList: ''
      };
    },

    watch: {
      'val': {
        immediate: true,
        deep: true,
        handler(val) {
          // console.log(123);
          // // this.dispatcherList = val;
          if (val === '') {
            this.dispatcherList = '';
            this.getDeliveryPage();
            return;
          }

          if (val && val.dispatcherId) {
            this.dispatcherList = val;
            this.getDeliveryPage(val.dispatcherName);
            return;
          }

        // if (Array.isArray(val) && val.length > 0) {
        //   this.dispatcherList = val;
        // }
        }

      }
    },

    created() {

    },

    methods: {
      // 获取派送员
      getDeliveryPage(name = '') {
        this.loading = true;
        // console.log(123);
        const query = {
          ...QUERY_DATA
        };

        query.params.deliveryManName = name;

        collectDriverQueryCourier(query, false).then(res => {
          // console.log('获取派送员', res.data);
          // this.deliveryList = res.data;
          const list = (res.data || []).map(item => {
            const { deliveryManName, expressId, supplierId } = item;

            const val = {
              source: 0,
              dispatcherName: deliveryManName,
              dispatcherId: 0
            };

            // 快递
            if (expressId > 0) {
              val.source = 1;
              val.dispatcherId = expressId;
            }

            // 服务商
            if (supplierId > 0) {
              val.source = 2;
              val.dispatcherId = supplierId;
            }

            const obj = {
              // value: item.id,
              value: val,
              label: deliveryManName
            };
            return Object.freeze(obj);
          }).filter(item => {
            // 过滤都 source === 0 的情况
            return item.value.source !== 0;
          });

          this.list = list;

          // 本地临时缓存
          // sessionStorage.setItem(DELIVERY_SEND, JSON.stringify(list));
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.loading = false;
        });
        // this.loading = true;
        // setTimeout(() => {
        //   this.driverNameList = [];
        //   this.driverNameList.push({
        //     driverId: '',
        //     driverName: '全部',
        //     username: ''
        //   });
        //   getDriverPage({
        //     pageNum: 1,
        //     pageSize: 1000,
        //     name
      },

      onChaneg(val) {
        console.log(val);
        this.$emit('change', val);
      }
    }

  };
  </script>

  ```

## filter-method 方法

  ```html
  <el-select v-model="selectedOption" filterable :filter-method="filterOption">
    <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></el-option>
  </el-select>

  <script>
    data() {
      return {
        selectedOption: '',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' },
          { label: 'Option 5', value: 'option5' }
        ]
      }
    },
    methods: {
      filterOption(query) {
        return option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0
      }
    }
  </script>

  ```

