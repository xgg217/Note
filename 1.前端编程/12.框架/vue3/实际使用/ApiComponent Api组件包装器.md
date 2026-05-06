# ApiComponent Api组件包装器

## 概述

+ 框架提供的API“包装器”，它一般不独立使用，主要用于包装其它组件，为目标组件提供自动获取远程数据的能力，但仍然保持了目标组件的原始用法

## 基础用法

通过 `component` 传入其它组件的定义，并配置相关的其它属性（主要是一些名称映射）。包装组件将通过`api`获取数据（`beforerFetch`、`afterFetch`将分别在`api`运行前、运行后被调用），使用`resultField`从中提取数组，使用`valueField`、`labelField`等来从数据中提取value和label（如果提供了`childrenField`，会将其作为树形结构递归处理每一级数据），之后将处理好的数据通过`optionsPropName`指定的属性传递给目标组件。

::: details 包装级联选择器,点击下拉时开始加载远程数据

```vue
<script lang="ts" setup>
import { ApiComponent } from '@vben/common-ui';

import { Cascader } from 'ant-design-vue';

const treeData: Record<string, any> = [
  {
    label: '浙江',
    value: 'zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖',
          },
          {
            value: 'sudi',
            label: '苏堤',
          },
        ],
      },
      {
        value: 'jiaxing',
        label: '嘉兴',
        children: [
          {
            value: 'wuzhen',
            label: '乌镇',
          },
          {
            value: 'meihuazhou',
            label: '梅花洲',
          },
        ],
      },
      {
        value: 'zhoushan',
        label: '舟山',
        children: [
          {
            value: 'putuoshan',
            label: '普陀山',
          },
          {
            value: 'taohuadao',
            label: '桃花岛',
          },
        ],
      },
    ],
  },
  {
    label: '江苏',
    value: 'jiangsu',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
          {
            value: 'zijinshan',
            label: '紫金山',
          },
          {
            value: 'yuhuatai',
            label: '雨花台',
          },
        ],
      },
    ],
  },
];
/**
 * 模拟请求接口
 */
function fetchApi(): Promise<Record<string, any>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(treeData);
    }, 1000);
  });
}
</script>
<template>
  <ApiComponent
    :api="fetchApi"
    :component="Cascader"
    :immediate="false"
    children-field="children"
    loading-slot="suffixIcon"
    visible-event="onDropdownVisibleChange"
  />
</template>
```

:::

## 并发和缓存

有些场景下可能需要使用多个ApiComponent，它们使用了相同的远程数据源（例如用在可编辑的表格中）。如果直接将请求后端接口的函数传递给api属性，则每一个实例都会访问一次接口，这会造成资源浪费，是完全没有必要的。Tanstack Query提供了并发控制、缓存、重试等诸多特性，我们可以将接口请求函数用useQuery包装一下再传递给ApiComponent，这样的话无论页面有多少个使用相同数据源的ApiComponent实例，都只会发起一次远程请求。演示效果请参考 [Playground vue-query](https://www.vben.pro/#/demos/features/vue-query)，具体代码请查看项目文件[concurrency-caching](https://github.com/vbenjs/vue-vben-admin/blob/main/playground/src/views/demos/features/vue-query/concurrency-caching.vue)

## API

### Props

| 属性名              | 描述                                                            | 类型                                                                           | 默认值       | 版本要求 |
| ------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------ | -------- |
| modelValue(v-model) | 当前值                                                          | `any`                                                                          | -            | -        |
| component           | 欲包装的组件（以下称为目标组件）                                | `Component`                                                                    | -            | -        |
| numberToString      | 是否将value从数字转为string                                     | `boolean`                                                                      | `false`      | -        |
| api                 | 获取数据的函数                                                  | `(arg?: any) => Promise<OptionsItem[] \| Record<string, any>>`                 | -            | -        |
| params              | 传递给api的参数                                                 | `Record<string, any>`                                                          | -            | -        |
| resultField         | 从api返回的结果中提取options数组的字段名                        | `string`                                                                       | -            | -        |
| labelField          | label字段名                                                     | `string`                                                                       | `label`      | -        |
| childrenField       | 子级数据字段名，需要层级数据的组件可用                          | `string`                                                                       | ``           | -        |
| valueField          | value字段名                                                     | `string`                                                                       | `value`      | -        |
| optionsPropName     | 目标组件接收options数据的属性名称                               | `string`                                                                       | `options`    | -        |
| modelPropName       | 目标组件的双向绑定属性名，默认为modelValue。部分组件可能为value | `string`                                                                       | `modelValue` | -        |
| immediate           | 是否立即调用api                                                 | `boolean`                                                                      | `true`       | -        |
| alwaysLoad          | 每次`visibleEvent`事件发生时都重新请求数据                      | `boolean`                                                                      | `false`      | -        |
| beforeFetch         | 在api请求之前的回调函数                                         | `AnyPromiseFunction<any, any>`                                                 | -            | -        |
| afterFetch          | 在api请求之后的回调函数                                         | `AnyPromiseFunction<any, any>`                                                 | -            | -        |
| options             | 直接传入选项数据，也作为api返回空数据时的后备数据               | `OptionsItem[]`                                                                | -            | -        |
| visibleEvent        | 触发重新请求数据的事件名                                        | `string`                                                                       | -            | -        |
| loadingSlot         | 目标组件的插槽名称，用来显示一个"加载中"的图标                  | `string`                                                                       | -            | -        |
| autoSelect          | 自动设置选项                                                    | `'first' \| 'last' \| 'one'\| ((item: OptionsItem[]) => OptionsItem) \| false` | `false`      | >5.5.4   |

#### autoSelect 自动设置选项

如果当前值为undefined，在选项数据成功加载之后，自动从备选项中选择一个作为当前值。默认值为`false`，即不自动选择选项。注意：该属性不应用于多选组件。可选值有：

- `"first"`：自动选择第一个选项
- `"last"`：自动选择最后一个选项
- `"one"`：有且仅有一个选项时，自动选择它
- `自定义函数`：自定义选择逻辑，函数的参数为options，返回值为选择的选项
- `false`：不自动选择选项

### Methods

| 方法            | 描述                                   | 类型                                   | 版本要求 |
| --------------- | -------------------------------------- | -------------------------------------- | -------- |
| getComponentRef | 获取被包装的组件的实例                 | ()=>T                                  | >5.5.4   |
| updateParam     | 设置接口请求参数（将与params属性合并） | (newParams: Record<string, any>)=>void | >5.5.4   |
| getOptions      | 获取已加载的选项数据                   | ()=>OptionsItem[]                      | >5.5.4   |
| getValue        | 获取当前值                             | ()=>any                                | >5.5.4   |

## 组件

+ code

  ```html
  <script lang="ts" setup>
  import type { Component } from 'vue';

  import type { AnyPromiseFunction } from '@vben/types';

  import { computed, nextTick, ref, unref, useAttrs, watch } from 'vue';

  import { LoaderCircle } from '@vben/icons';

  import { cloneDeep, get, isEqual, isFunction } from '@vben-core/shared/utils';

  import { objectOmit } from '@vueuse/core';

  type OptionsItem = {
    [name: string]: any;
    children?: OptionsItem[];
    disabled?: boolean;
    label?: string;
    value?: string;
  };

  interface Props {
    /** 组件 */
    component: Component;
    /** 是否将value从数字转为string */
    numberToString?: boolean;
    /** 获取options数据的函数 */
    api?: (arg?: any) => Promise<OptionsItem[] | Record<string, any>>;
    /** 传递给api的参数 */
    params?: Record<string, any>;
    /** 从api返回的结果中提取options数组的字段名 */
    resultField?: string;
    /** label字段名 */
    labelField?: string;
    /** children字段名，需要层级数据的组件可用 */
    childrenField?: string;
    /** value字段名 */
    valueField?: string;
    /** 组件接收options数据的属性名 */
    optionsPropName?: string;
    /** 是否立即调用api */
    immediate?: boolean;
    /** 每次`visibleEvent`事件发生时都重新请求数据 */
    alwaysLoad?: boolean;
    /** 在api请求之前的回调函数 */
    beforeFetch?: AnyPromiseFunction<any, any>;
    /** 在api请求之后的回调函数 */
    afterFetch?: AnyPromiseFunction<any, any>;
    /** 直接传入选项数据，也作为api返回空数据时的后备数据 */
    options?: OptionsItem[];
    /** 组件的插槽名称，用来显示一个"加载中"的图标 */
    loadingSlot?: string;
    /** 触发api请求的事件名 */
    visibleEvent?: string;
    /** 组件的v-model属性名，默认为modelValue。部分组件可能为value */
    modelPropName?: string;
    /**
    * 自动选择
    * - `first`：自动选择第一个选项
    * - `last`：自动选择最后一个选项
    * - `one`: 当请求的结果只有一个选项时，自动选择该选项
    * - 函数：自定义选择逻辑，函数的参数为请求的结果数组，返回值为选择的选项
    * - false：不自动选择(默认)
    */
    autoSelect?:
      | 'first'
      | 'last'
      | 'one'
      | ((item: OptionsItem[]) => OptionsItem)
      | false;
  }

  defineOptions({ name: 'ApiComponent', inheritAttrs: false });

  const props = withDefaults(defineProps<Props>(), {
    labelField: 'label',
    valueField: 'value',
    childrenField: '',
    optionsPropName: 'options',
    resultField: '',
    visibleEvent: '',
    numberToString: false,
    params: () => ({}),
    immediate: true,
    alwaysLoad: false,
    loadingSlot: '',
    beforeFetch: undefined,
    afterFetch: undefined,
    modelPropName: 'modelValue',
    api: undefined,
    autoSelect: false,
    options: () => [],
  });

  const emit = defineEmits<{
    optionsChange: [OptionsItem[]];
  }>();

  const modelValue = defineModel<any>({ default: undefined });

  const attrs = useAttrs();
  const innerParams = ref({});
  const refOptions = ref<OptionsItem[]>([]);
  const loading = ref(false);
  // 首次是否加载过了
  const isFirstLoaded = ref(false);
  // 标记是否有待处理的请求
  const hasPendingRequest = ref(false);

  const getOptions = computed(() => {
    const { labelField, valueField, childrenField, numberToString } = props;

    const refOptionsData = unref(refOptions);

    function transformData(data: OptionsItem[]): OptionsItem[] {
      return data.map((item) => {
        const value = get(item, valueField);
        return {
          ...objectOmit(item, [labelField, valueField, childrenField]),
          label: get(item, labelField),
          value: numberToString ? `${value}` : value,
          ...(childrenField && item[childrenField]
            ? { children: transformData(item[childrenField]) }
            : {}),
        };
      });
    }

    const data: OptionsItem[] = transformData(refOptionsData);

    return data.length > 0 ? data : props.options;
  });

  const bindProps = computed(() => {
    return {
      [props.modelPropName]: unref(modelValue),
      [props.optionsPropName]: unref(getOptions),
      [`onUpdate:${props.modelPropName}`]: (val: string) => {
        modelValue.value = val;
      },
      ...objectOmit(attrs, [`onUpdate:${props.modelPropName}`]),
      ...(props.visibleEvent
        ? {
            [props.visibleEvent]: handleFetchForVisible,
          }
        : {}),
    };
  });

  async function fetchApi() {
    const { api, beforeFetch, afterFetch, resultField } = props;

    if (!api || !isFunction(api)) {
      return;
    }

    // 如果正在加载，标记有待处理的请求并返回
    if (loading.value) {
      hasPendingRequest.value = true;
      return;
    }

    refOptions.value = [];
    try {
      loading.value = true;
      let finalParams = unref(mergedParams);
      if (beforeFetch && isFunction(beforeFetch)) {
        finalParams = (await beforeFetch(cloneDeep(finalParams))) || finalParams;
      }
      let res = await api(finalParams);
      if (afterFetch && isFunction(afterFetch)) {
        res = (await afterFetch(res)) || res;
      }
      isFirstLoaded.value = true;
      if (Array.isArray(res)) {
        refOptions.value = res;
        emitChange();
        return;
      }
      if (resultField) {
        refOptions.value = get(res, resultField) || [];
      }
      emitChange();
    } catch (error) {
      console.warn(error);
      // reset status
      isFirstLoaded.value = false;
    } finally {
      loading.value = false;
      // 如果有待处理的请求，立即触发新的请求
      if (hasPendingRequest.value) {
        hasPendingRequest.value = false;
        // 使用 nextTick 确保状态更新完成后再触发新请求
        await nextTick();
        fetchApi();
      }
    }
  }

  async function handleFetchForVisible(visible: boolean) {
    if (visible) {
      if (props.alwaysLoad) {
        await fetchApi();
      } else if (!props.immediate && !unref(isFirstLoaded)) {
        await fetchApi();
      }
    }
  }

  const mergedParams = computed(() => {
    return {
      ...props.params,
      ...unref(innerParams),
    };
  });

  watch(
    mergedParams,
    (value, oldValue) => {
      if (isEqual(value, oldValue)) {
        return;
      }
      fetchApi();
    },
    { deep: true, immediate: props.immediate },
  );

  function emitChange() {
    if (
      modelValue.value === undefined &&
      props.autoSelect &&
      unref(getOptions).length > 0
    ) {
      let firstOption;
      if (isFunction(props.autoSelect)) {
        firstOption = props.autoSelect(unref(getOptions));
      } else {
        switch (props.autoSelect) {
          case 'first': {
            firstOption = unref(getOptions)[0];
            break;
          }
          case 'last': {
            firstOption = unref(getOptions)[unref(getOptions).length - 1];
            break;
          }
          case 'one': {
            if (unref(getOptions).length === 1) {
              firstOption = unref(getOptions)[0];
            }
            break;
          }
        }
      }

      if (firstOption) modelValue.value = firstOption.value;
    }
    emit('optionsChange', unref(getOptions));
  }
  const componentRef = ref();
  defineExpose({
    /** 获取options数据 */
    getOptions: () => unref(getOptions),
    /** 获取当前值 */
    getValue: () => unref(modelValue),
    /** 获取被包装的组件实例 */
    getComponentRef: <T = any,>() => componentRef.value as T,
    /** 更新Api参数 */
    updateParam(newParams: Record<string, any>) {
      innerParams.value = newParams;
    },
  });
  </script>
  <template>
    <component
      :is="component"
      v-bind="bindProps"
      :placeholder="$attrs.placeholder"
      ref="componentRef"
    >
      <template v-for="item in Object.keys($slots)" #[item]="data">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template v-if="loadingSlot && loading" #[loadingSlot]>
        <LoaderCircle class="animate-spin" />
      </template>
    </component>
  </template>

  ```

