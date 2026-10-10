# API

## legacy 与 i18n.global.locale

+ `legacy: false`

  ```js
  // 当使用 vue-i18n 并且将 legacy 参数设为 false 时，请注意 i18n.global.locale 是一个 ref 类型的变量，因此我们必须通过 .value 来对其进行设置：


  i18n.global.locale.value = 'en'
  ```

+ `legacy: true`

  ```js
  i18n.global.locale = 'en'
  ```
