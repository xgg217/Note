# saveAsImage 保存为图片

## feature 之 saveAsImage 保存为图片

+ `Object`

## 属性

+ type `string`

  + 保存的图片格式 默认值 `'png'`

  + 如果 renderer 的类型在 初始化图表 时被设为 'canvas'（默认），则支持 'png'（默认）和 'jpg'；
  + 如果 renderer 的类型在 初始化图表 时被设为 'svg'，则 type 只支持 'svg'（'svg' 格式的图片从 v4.8.0 开始支持）

+ name `string`

  + 保存的文件名称，默认使用 `title.text` 作为名称

+ backgroundColor `Color`

  + 默认 `'auto'`
  + 保存的图片背景色，默认使用 backgroundColor，如果backgroundColor不存在的话会取白色

+ connectedBackgroundColor

  + 如果图表使用了 echarts.connect 对多个图表进行联动，则在导出图片时会导出这些联动的图表
  + 该配置项决定了图表与图表之间间隙处的填充色

+ excludeComponents `Array`

  + 默认值 `['toolbox']`
  + 保存为图片时忽略的组件列表，默认忽略工具栏

+ show `boolean`

  + 是否显示该工具
  + 默认值 `true`

+ title `string`

  + 默认值 `'保存为图片'`

+ icon
+ iconStyle
+ emphasis `Object`

  + 鼠标 hover 时候的样式

  + 属性

    + iconStyle `Object`

+ pixelRatio `number`

  + 默认值 `1`
  + 保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2
