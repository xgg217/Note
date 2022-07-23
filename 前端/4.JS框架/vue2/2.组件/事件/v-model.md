# v-model

## 元素的 v-model

  - 由于自定义事件的出现，在组件上也可以使用v-model指令。

  - 在 `input` 元素上使用 `v-mode` 指令时，相当于绑定了`value` 特性以及监听了 `input` 事件：

    ```javascript
    <input v-model="searchText" />

    // 等价于：
    <input
      :value="searchText"
      @input="searchText = $event.target.value"
    >
    ```

## 组件的 v-model

  - 当把 `v-model` 指令用在组件上时：

    ```javascript
    <base-input v-model="searchText" />

    // 等价于：
    <base-input
      :value="searchText"
      @input="searchText = $event"
    />
    ```

  - 同 `input` 元素一样，在组件上使用 `v-model` 指令，也是绑定了 `value` 特性，监听了 `input` 事件。

  - 所以，为了让 `v-model` 指令正常工作，这个组件内的 `<input>` 必须：

      - 将其 `value` 特性绑定到一个叫 `value` 的 `prop` 上

      - 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出 如：

    ```javascript
    Vue.component('base-input', {
      props: ['value'],
      template: `
        <input
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      `
    })
    ```

  - 这样操作后，`v-model` 就可以在这个组件上工作起来了。

  - 一个组件上的 `v-model` 默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` 特性用于不同的目的。碰到这样的情况，我们可以利用 `model` 选项来避免冲突：

    ```javascript
    Vue.component('base-checkbox', {
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      },
      template: `
        <input
          type="checkbox"
          :checked="checked"
          @change="$emit('change', $event.target.checked)"
        >
      `
    }
    ```

  - 使用组件：

    ```javascript
    <base-checkbox v-model="lovingVue"></base-checkbox>
    ```

  - 这里的 `lovingVue` 的值将会传入这个名为 `checked` 的 `prop`。同时当 触发一个 `change` 事件并附带一个新的值的时候，这个 lovingVue 的属性将会被更新。
